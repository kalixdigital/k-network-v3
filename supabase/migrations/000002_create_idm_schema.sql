-- =============================================================================
-- Migration: 000002_create_idm_schema
-- Description: Creates the Identity Engine (idm) schema and tables.
--
--   - Updates shared.fn_audit_trigger() to dynamically discover the PK column
--     (fixes the DDD-1 gap where the audit trigger assumed a column named 'id')
--   - Creates idm schema with: accounts, sessions, kyc_verifications, mfa_enrollments
--   - Links idm.accounts to Supabase auth.users (account_id = auth user id)
--   - Auto-creates idm.accounts row when a Supabase Auth user registers
--   - RLS policies using auth.uid() (Supabase's built-in authenticated user ID)
--   - idm.fn_set_updated_at() for OCC version + updated_at auto-update
--   - Per-table audit triggers
--   - Soft-delete pattern on accounts with partial unique indexes
--
-- Source: DDD-1 Chapter 6, SRS-1 SRS-IDM-001..007, SDD-1 Chapter 6
-- Author: K-NETWORK Database Team
-- Date: 2026-08-28
-- =============================================================================

BEGIN;

-- =============================================================================
-- 1. FIX: Update shared.fn_audit_trigger() to dynamically discover PK column
--    The original version assumed NEW.id / OLD.id. idm tables use differently
--    named PKs (account_id, session_id, etc.). This update discovers the PK
--    column name from pg_index at runtime, making it work with any table.
-- =============================================================================

CREATE OR REPLACE FUNCTION shared.fn_audit_trigger()
RETURNS TRIGGER AS $$
DECLARE
    v_previous_hash VARCHAR(64);
    v_current_hash  VARCHAR(64);
    v_record_id     UUID;
    v_old_values    JSONB;
    v_new_values    JSONB;
    v_pk_col        TEXT;
    v_row           JSONB;
BEGIN
    -- Dynamically discover the primary key column name for this table
    SELECT a.attname INTO v_pk_col
    FROM pg_index i
    JOIN pg_attribute a ON a.attrelid = i.indrelid AND a.attnum = ANY(i.indkey)
    WHERE i.indrelid = TG_RELID AND i.indisprimary
    LIMIT 1;

    -- Get the previous hash (most recent audit entry)
    SELECT current_hash INTO v_previous_hash
    FROM shared.audit_log
    ORDER BY changed_at DESC, audit_id DESC
    LIMIT 1;

    IF v_previous_hash IS NULL THEN
        v_previous_hash := '0000000000000000000000000000000000000000000000000000000000000000';
    END IF;

    IF TG_OP = 'DELETE' THEN
        v_row := to_jsonb(OLD);
        v_old_values := v_row;
        v_new_values := NULL;
    ELSIF TG_OP = 'UPDATE' THEN
        v_row := to_jsonb(NEW);
        v_old_values := to_jsonb(OLD);
        v_new_values := v_row;
    ELSIF TG_OP = 'INSERT' THEN
        v_row := to_jsonb(NEW);
        v_old_values := NULL;
        v_new_values := v_row;
    END IF;

    -- Extract the PK value from the row JSON
    v_record_id := COALESCE((v_row ->> v_pk_col)::UUID, '00000000-0000-0000-0000-000000000000'::UUID);

    -- Compute hash chain: current_hash = SHA256(previous_hash || record_id || changed_at || new_values)
    v_current_hash := encode(
        digest(
            v_previous_hash || v_record_id::TEXT || NOW()::TEXT ||
            COALESCE(v_new_values::TEXT, v_old_values::TEXT),
            'sha256'
        ),
        'hex'
    );

    -- Insert audit record
    INSERT INTO shared.audit_log (
        table_schema, table_name, operation, record_id,
        changed_by, old_values, new_values,
        previous_hash, current_hash
    ) VALUES (
        TG_TABLE_SCHEMA, TG_TABLE_NAME, TG_OP, v_record_id,
        COALESCE(current_setting('app.current_account_id', true)::UUID,
                 auth.uid()::UUID,
                 '00000000-0000-0000-0000-000000000000'::UUID),
        v_old_values, v_new_values,
        v_previous_hash, v_current_hash
    );

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- =============================================================================
-- 2. CREATE idm SCHEMA
-- =============================================================================

CREATE SCHEMA IF NOT EXISTS idm;

-- =============================================================================
-- 3. HELPER FUNCTIONS
-- =============================================================================

-- idm.fn_set_updated_at() — auto-updates updated_at and increments version (OCC)
-- Source: DDD-1 Chapter 4.3 (per-schema fn_set_updated_at pattern)
CREATE OR REPLACE FUNCTION idm.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    IF NEW.version IS NOT NULL THEN
        NEW.version = OLD.version + 1;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =============================================================================
-- 4. TABLES
-- =============================================================================

-- -----------------------------------------------------------------------------
-- 4.1 idm.accounts — Sole source of truth for participant identity
--      Linked to Supabase auth.users via account_id = auth.users.id
--      Source: DDD-1 Chapter 6.1
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS idm.accounts (
    account_id        UUID PRIMARY KEY,  -- Set to auth.users.id (no auto-gen — linked to Supabase Auth)
    email             VARCHAR(255) NOT NULL,
    phone             VARCHAR(30),
    password_hash     TEXT NOT NULL DEFAULT '',  -- Managed by Supabase Auth; stored empty in idm
    display_name      VARCHAR(200) NOT NULL,
    status            TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('PENDING', 'ACTIVE', 'SUSPENDED', 'DELETED')),
    kyc_tier          TEXT NOT NULL DEFAULT 'TIER_0'
                        CHECK (kyc_tier IN ('TIER_0', 'TIER_1', 'TIER_2', 'TIER_3')),
    referred_by       UUID,  -- Referrer account_id (no FK — cross-engine via graph schema)
    referral_code     VARCHAR(50),
    is_deleted        BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at        TIMESTAMPTZ,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version           INTEGER NOT NULL DEFAULT 1
);

-- Partial unique indexes (exclude soft-deleted)
CREATE UNIQUE INDEX IF NOT EXISTS uq_idm_accounts_email
    ON idm.accounts (email)
    WHERE is_deleted = FALSE;

CREATE UNIQUE INDEX IF NOT EXISTS uq_idm_accounts_phone
    ON idm.accounts (phone)
    WHERE is_deleted = FALSE AND phone IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS uq_idm_accounts_referral_code
    ON idm.accounts (referral_code)
    WHERE is_deleted = FALSE AND referral_code IS NOT NULL;

-- Non-unique indexes
CREATE INDEX IF NOT EXISTS ix_idm_accounts_referred_by ON idm.accounts (referred_by);
CREATE INDEX IF NOT EXISTS ix_idm_accounts_status ON idm.accounts (status);
CREATE INDEX IF NOT EXISTS ix_idm_accounts_kyc_tier ON idm.accounts (kyc_tier);

-- Triggers
DROP TRIGGER IF EXISTS trg_audit_accounts ON idm.accounts;
CREATE TRIGGER trg_audit_accounts
    AFTER INSERT OR UPDATE OR DELETE ON idm.accounts
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

DROP TRIGGER IF EXISTS trg_accounts_updated_at ON idm.accounts;
CREATE TRIGGER trg_accounts_updated_at
    BEFORE UPDATE ON idm.accounts
    FOR EACH ROW EXECUTE FUNCTION idm.fn_set_updated_at();

-- -----------------------------------------------------------------------------
-- 4.2 idm.sessions — Session tracking (Supabase Auth manages JWT sessions;
--      this table tracks session metadata for audit/anomaly detection)
--      Source: DDD-1 Chapter 6.3
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS idm.sessions (
    session_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    token_hash         VARCHAR(255) NOT NULL,
    status             TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'REVOKED', 'EXPIRED')),
    mfa_verified       BOOLEAN NOT NULL DEFAULT FALSE,
    device_fingerprint VARCHAR(255),
    ip_address         INET,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at         TIMESTAMPTZ NOT NULL,
    last_activity_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_idm_sessions_token_hash ON idm.sessions (token_hash);
CREATE INDEX IF NOT EXISTS ix_idm_sessions_account ON idm.sessions (account_id);
CREATE INDEX IF NOT EXISTS ix_idm_sessions_status ON idm.sessions (status)
    WHERE status = 'ACTIVE';

-- Triggers
DROP TRIGGER IF EXISTS trg_audit_sessions ON idm.sessions;
CREATE TRIGGER trg_audit_sessions
    AFTER INSERT OR UPDATE OR DELETE ON idm.sessions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

-- -----------------------------------------------------------------------------
-- 4.3 idm.kyc_verifications — Tiered KYC verification
--      Source: DDD-1 Chapter 6.4
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS idm.kyc_verifications (
    verification_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id        UUID NOT NULL,
    tier              TEXT NOT NULL CHECK (tier IN ('TIER_1', 'TIER_2', 'TIER_3')),
    status            TEXT NOT NULL CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED', 'EXPIRED')),
    evidence_type     TEXT NOT NULL CHECK (evidence_type IN (
                        'GOVERNMENT_ID', 'UTILITY_BILL', 'SELFIE', 'PROOF_OF_ADDRESS')),
    evidence_ref_enc  BYTEA NOT NULL,
    encryption_key_id UUID NOT NULL REFERENCES shared.encryption_key_registry(key_id),
    submitted_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    reviewed_at       TIMESTAMPTZ,
    reviewed_by       UUID,
    expires_at        TIMESTAMPTZ,
    rejection_reason  TEXT,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS ix_idm_kyc_verifications_account ON idm.kyc_verifications (account_id);
CREATE INDEX IF NOT EXISTS ix_idm_kyc_verifications_status ON idm.kyc_verifications (status);

-- Triggers
DROP TRIGGER IF EXISTS trg_audit_kyc_verifications ON idm.kyc_verifications;
CREATE TRIGGER trg_audit_kyc_verifications
    AFTER INSERT OR UPDATE OR DELETE ON idm.kyc_verifications
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

-- -----------------------------------------------------------------------------
-- 4.4 idm.mfa_enrollments — Multi-factor authentication enrollments
--      Source: DDD-1 Chapter 6.5
--      Note: DDD-1 does not define backup_codes_enc; added as an implementation
--      decision for backup code storage (UXDS-1 requires 10 backup codes).
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS idm.mfa_enrollments (
    enrollment_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    method            TEXT NOT NULL CHECK (method IN ('TOTP', 'SMS', 'EMAIL')),
    secret_enc        BYTEA,  -- AES-256-GCM encrypted TOTP secret
    is_enabled         BOOLEAN NOT NULL DEFAULT FALSE,
    backup_codes_enc   BYTEA,  -- AES-256-GCM encrypted backup codes (implementation decision)
    encryption_key_id  UUID REFERENCES shared.encryption_key_registry(key_id),
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS ix_idm_mfa_enrollments_account ON idm.mfa_enrollments (account_id);
CREATE INDEX IF NOT EXISTS ix_idm_mfa_enrollments_method ON idm.mfa_enrollments (method);

-- Triggers
DROP TRIGGER IF EXISTS trg_audit_mfa_enrollments ON idm.mfa_enrollments;
CREATE TRIGGER trg_audit_mfa_enrollments
    AFTER INSERT OR UPDATE OR DELETE ON idm.mfa_enrollments
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

DROP TRIGGER IF EXISTS trg_mfa_enrollments_updated_at ON idm.mfa_enrollments;
CREATE TRIGGER trg_mfa_enrollments_updated_at
    BEFORE UPDATE ON idm.mfa_enrollments
    FOR EACH ROW EXECUTE FUNCTION idm.fn_set_updated_at();

-- =============================================================================
-- 5. AUTO-CREATE idm.accounts ON SUPABASE AUTH USER CREATION
--    When a user registers via Supabase Auth, a trigger creates the
--    corresponding idm.accounts row with the auth user's email and ID.
-- =============================================================================

CREATE OR REPLACE FUNCTION idm.fn_handle_new_auth_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO idm.accounts (
        account_id,
        email,
        display_name,
        status,
        kyc_tier
    ) VALUES (
        NEW.id,
        COALESCE(NEW.email, ''),
        COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(COALESCE(NEW.email, 'user'), '@', 1)),
        'ACTIVE',
        'TIER_0'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Attach trigger to auth.users (Supabase-managed table)
DROP TRIGGER IF EXISTS trg_handle_new_auth_user ON auth.users;
CREATE TRIGGER trg_handle_new_auth_user
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION idm.fn_handle_new_auth_user();

-- =============================================================================
-- 6. RLS POLICIES
--    Uses auth.uid() — Supabase's built-in function that returns the current
--    authenticated user's UUID. This replaces the DDD-1 current_setting()
--    pattern with Supabase's native auth integration.
-- =============================================================================

-- 6.1 idm.accounts — Owner can SELECT own row; writes via server-side only
ALTER TABLE idm.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE idm.accounts FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS accounts_owner_select ON idm.accounts;
CREATE POLICY accounts_owner_select ON idm.accounts
    FOR SELECT
    USING (account_id = auth.uid());

DROP POLICY IF EXISTS accounts_owner_update ON idm.accounts;
CREATE POLICY accounts_owner_update ON idm.accounts
    FOR UPDATE
    USING (account_id = auth.uid())
    WITH CHECK (account_id = auth.uid());

-- Admin role bypasses RLS (BYPASSRLS), no explicit policy needed.
-- Service role bypasses RLS in Supabase.

-- 6.2 idm.sessions — Owner can SELECT own sessions; inserts via server-side
ALTER TABLE idm.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE idm.sessions FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS sessions_owner_select ON idm.sessions;
CREATE POLICY sessions_owner_select ON idm.sessions
    FOR SELECT
    USING (account_id = auth.uid());

-- 6.3 idm.kyc_verifications — Owner SELECT + compliance role
ALTER TABLE idm.kyc_verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE idm.kyc_verifications FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS kyc_owner_select ON idm.kyc_verifications;
CREATE POLICY kyc_owner_select ON idm.kyc_verifications
    FOR SELECT
    USING (account_id = auth.uid());

-- compliance_role (conditional — may not exist in all environments)
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'compliance_role') THEN
        DROP POLICY IF EXISTS kyc_compliance_all ON idm.kyc_verifications;
        CREATE POLICY kyc_compliance_all ON idm.kyc_verifications
            FOR ALL TO compliance_role USING (true) WITH CHECK (true);
    END IF;
END $$;

-- 6.4 idm.mfa_enrollments — Owner SELECT only
ALTER TABLE idm.mfa_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE idm.mfa_enrollments FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS mfa_owner_select ON idm.mfa_enrollments;
CREATE POLICY mfa_owner_select ON idm.mfa_enrollments
    FOR SELECT
    USING (account_id = auth.uid());

-- =============================================================================
-- 7. GRANTS
-- =============================================================================

GRANT USAGE ON SCHEMA idm TO app_service, readonly_role, admin_role;

-- Supabase-managed roles (authenticated, anon) may not exist in local/dev
-- environments. Grant conditionally.
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
        GRANT USAGE ON SCHEMA idm TO authenticated;
        -- Authenticated users can SELECT their own rows (RLS enforces ownership)
        GRANT SELECT ON idm.accounts TO authenticated;
        GRANT SELECT ON idm.sessions TO authenticated;
        GRANT SELECT ON idm.kyc_verifications TO authenticated;
        GRANT SELECT ON idm.mfa_enrollments TO authenticated;
        -- Allow authenticated users to UPDATE their own account (for profile changes)
        -- RLS enforces they can only update their own row
        GRANT UPDATE ON idm.accounts TO authenticated;
    END IF;

    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
        GRANT USAGE ON SCHEMA idm TO anon;
    END IF;
END $$;

-- Service role gets full DML (server-side operations)
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA idm TO app_service;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA idm TO admin_role;

-- Default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA idm
    GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO app_service;

-- =============================================================================
-- 8. COMMENTS
-- =============================================================================

COMMENT ON SCHEMA idm IS 'K-NETWORK Identity Engine schema — accounts, sessions, KYC verification, MFA. Source: DDD-1 Ch.6, SRS-1 SRS-IDM-001..007.';

COMMENT ON TABLE idm.accounts IS 'Sole source of truth for participant identity. account_id = Supabase auth.users.id. Source: DDD-1 Ch.6.1.';
COMMENT ON TABLE idm.sessions IS 'Session tracking for audit/anomaly detection. JWT sessions managed by Supabase Auth. Source: DDD-1 Ch.6.3.';
COMMENT ON TABLE idm.kyc_verifications IS 'Tiered KYC verification records. Evidence encrypted with AES-256-GCM. Source: DDD-1 Ch.6.4.';
COMMENT ON TABLE idm.mfa_enrollments IS 'MFA enrollments (TOTP/SMS/EMAIL). Secrets encrypted with AES-256-GCM. Source: DDD-1 Ch.6.5.';

COMMENT ON FUNCTION idm.fn_set_updated_at() IS 'Auto-updates updated_at and increments version (OCC). Source: DDD-1 Ch.4.3.';
COMMENT ON FUNCTION idm.fn_handle_new_auth_user() IS 'Trigger: auto-creates idm.accounts row when a Supabase Auth user registers.';

-- =============================================================================
-- 9. RECORD THIS MIGRATION
-- =============================================================================

INSERT INTO shared.schema_migrations (migration_version, migration_name, checksum)
VALUES ('000002', 'create_idm_schema', 'placeholder-replace-with-sha256')
ON CONFLICT (migration_version) DO NOTHING;

COMMIT;

-- =============================================================================
-- ROLLBACK (DOWN) — Run separately if needed, non-production only
-- =============================================================================
-- BEGIN;
--   DROP TRIGGER IF EXISTS trg_handle_new_auth_user ON auth.users;
--   DROP FUNCTION IF EXISTS idm.fn_handle_new_auth_user();
--   DROP TRIGGER IF EXISTS trg_mfa_enrollments_updated_at ON idm.mfa_enrollments;
--   DROP TRIGGER IF EXISTS trg_audit_mfa_enrollments ON idm.mfa_enrollments;
--   DROP TRIGGER IF EXISTS trg_audit_kyc_verifications ON idm.kyc_verifications;
--   DROP TRIGGER IF EXISTS trg_audit_sessions ON idm.sessions;
--   DROP TRIGGER IF EXISTS trg_accounts_updated_at ON idm.accounts;
--   DROP TRIGGER IF EXISTS trg_audit_accounts ON idm.accounts;
--   DROP TABLE IF EXISTS idm.mfa_enrollments;
--   DROP TABLE IF EXISTS idm.kyc_verifications;
--   DROP TABLE IF EXISTS idm.sessions;
--   DROP TABLE IF EXISTS idm.accounts;
--   DROP FUNCTION IF EXISTS idm.fn_set_updated_at();
--   DROP SCHEMA IF EXISTS idm CASCADE;
--   DELETE FROM shared.schema_migrations WHERE migration_version = '000002';
-- COMMIT;
