-- =============================================================================
-- Migration: 000001_create_shared_schema
-- Description: Creates the shared K-NETWORK database foundation:
--   - Required PostgreSQL extensions
--   - shared schema with cross-cutting infrastructure tables
--   - Audit log with hash-chaining
--   - Outbox / event store for event-driven inter-engine communication
--   - Idempotency keys for safe retries
--   - Encryption key registry for field-level encryption rotation
--   - Schema migration tracking table
--   - Shared helper functions (fn_audit_trigger, fn_block_mutation)
--   - RLS foundation (roles, policies, session variable pattern)
-- Source: DDD-1 (Detailed Design Document), K-NETWORK platform specification
-- Author: K-NETWORK Database Team
-- Date: 2026-08-28
-- =============================================================================

-- Notes on Supabase compatibility:
--   - Supabase manages some roles (anon, authenticated, service_role) automatically.
--   - We create application-level roles (admin_role, app_service, etc.) that
--     Supabase's auth system can map to via custom claims or GRANT statements.
--   - The pgcrypto extension is pre-installed on Supabase but we ensure it exists.
--   - Supabase already has a supabase_migrations schema; we use our own
--     shared.schema_migrations for application-level migration tracking.
--   - We do NOT drop or modify any Supabase-managed objects.

BEGIN;

-- =============================================================================
-- 1. EXTENSIONS
-- =============================================================================

-- pgcrypto: UUID generation (gen_random_uuid) and SHA-256 hashing (digest)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- pg_trgm: trigram fuzzy text search for marketplace/service/course search
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- btree_gin: GIN index support for composite queries
CREATE EXTENSION IF NOT EXISTS btree_gin;

-- btree_gist: GiST index support for exclusion constraints (wallet holds)
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- uuid-ossp: alternative UUID generation (fallback)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- pg_stat_statements: query performance monitoring (may require config)
-- Only create if not already present (Supabase may have it)
DO $$
BEGIN
    CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
EXCEPTION WHEN OTHERS THEN
    -- pg_stat_statements requires shared_preload_libraries; skip if unavailable
    RAISE NOTICE 'pg_stat_statements extension not available (requires shared_preload_libraries). Skipping.';
END $$;

-- =============================================================================
-- 2. SHARED SCHEMA
-- =============================================================================

CREATE SCHEMA IF NOT EXISTS shared;

-- =============================================================================
-- 3. SHARED HELPER FUNCTIONS
--    Created before tables so table triggers can reference them.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- 3.1 shared.fn_block_mutation()
--     Blocks UPDATE and DELETE on append-only / immutable ledger tables.
--     Corrections are made via compensating entries (reversals), not edits.
--     Source: DDD-1 Chapters 3.4 & 20.3.2
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION shared.fn_block_mutation()
RETURNS TRIGGER AS $$
BEGIN
    RAISE EXCEPTION 'Table % is immutable: % operations are not permitted. Use compensating entries for corrections.',
        TG_TABLE_NAME, TG_OP;
END;
$$ LANGUAGE plpgsql;

-- -----------------------------------------------------------------------------
-- 3.2 shared.fn_audit_trigger()
--     Hash-chained audit trigger. Captures all state-changing operations
--     (INSERT, UPDATE, DELETE) on audited tables. Creates an append-only
--     audit_log entry with SHA-256 hash chaining for tamper-evidence.
--     Source: DDD-1 Chapters 3.2 & 20.3.3
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION shared.fn_audit_trigger()
RETURNS TRIGGER AS $$
DECLARE
    v_previous_hash VARCHAR(64);
    v_current_hash  VARCHAR(64);
    v_record_id     UUID;
    v_old_values    JSONB;
    v_new_values    JSONB;
BEGIN
    -- Get the previous hash (most recent audit entry)
    SELECT current_hash INTO v_previous_hash
    FROM shared.audit_log
    ORDER BY changed_at DESC, audit_id DESC
    LIMIT 1;

    IF v_previous_hash IS NULL THEN
        v_previous_hash := '0000000000000000000000000000000000000000000000000000000000000000';
    END IF;

    IF TG_OP = 'DELETE' THEN
        v_record_id := OLD.id;
        v_old_values := to_jsonb(OLD);
        v_new_values := NULL;
    ELSIF TG_OP = 'UPDATE' THEN
        v_record_id := NEW.id;
        v_old_values := to_jsonb(OLD);
        v_new_values := to_jsonb(NEW);
    ELSIF TG_OP = 'INSERT' THEN
        v_record_id := NEW.id;
        v_old_values := NULL;
        v_new_values := to_jsonb(NEW);
    END IF;

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
        COALESCE(current_setting('app.current_account_id', true)::UUID, '00000000-0000-0000-0000-000000000000'::UUID),
        v_old_values, v_new_values,
        v_previous_hash, v_current_hash
    );

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- =============================================================================
-- 4. SHARED SCHEMA TABLES
-- =============================================================================

-- -----------------------------------------------------------------------------
-- 4.1 shared.audit_log — Hash-chained append-only audit log
--      Source: DDD-1 Chapters 3.2 & 5.4
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS shared.audit_log (
    audit_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    table_schema      TEXT NOT NULL,
    table_name        TEXT NOT NULL,
    operation         TEXT NOT NULL CHECK (operation IN ('INSERT', 'UPDATE', 'DELETE')),
    record_id         UUID NOT NULL,
    changed_by        UUID NOT NULL,
    changed_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    old_values        JSONB,
    new_values        JSONB,
    previous_hash     VARCHAR(64) NOT NULL,
    current_hash      VARCHAR(64) NOT NULL,
    correlation_id    UUID
);

CREATE INDEX IF NOT EXISTS ix_shared_audit_log_changed_at
    ON shared.audit_log (changed_at);

CREATE INDEX IF NOT EXISTS ix_shared_audit_log_record
    ON shared.audit_log (table_schema, table_name, record_id);

CREATE INDEX IF NOT EXISTS ix_shared_audit_log_changed_by
    ON shared.audit_log (changed_by);

-- Append-only protection: block UPDATE and DELETE on audit_log
DROP TRIGGER IF EXISTS trg_block_update_audit_log ON shared.audit_log;
CREATE TRIGGER trg_block_update_audit_log
    BEFORE UPDATE ON shared.audit_log
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();

DROP TRIGGER IF EXISTS trg_block_delete_audit_log ON shared.audit_log;
CREATE TRIGGER trg_block_delete_audit_log
    BEFORE DELETE ON shared.audit_log
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();

-- -----------------------------------------------------------------------------
-- 4.2 shared.outbox — Event outbox for atomic event publishing
--      Source: DDD-1 Chapter 5.2
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS shared.outbox (
    outbox_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id          UUID NOT NULL UNIQUE,
    event_type        TEXT NOT NULL,
    event_version     INTEGER NOT NULL DEFAULT 1,
    aggregate_id      UUID NOT NULL,
    aggregate_type    TEXT NOT NULL,
    publisher         TEXT NOT NULL,
    payload           JSONB NOT NULL,
    metadata          JSONB,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    published_at      TIMESTAMPTZ,
    delivery_attempts INTEGER NOT NULL DEFAULT 0,
    status            TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'PUBLISHED', 'FAILED', 'DEAD_LETTER')),
    correlation_id    UUID
);

CREATE INDEX IF NOT EXISTS ix_shared_outbox_status_created
    ON shared.outbox (status, created_at)
    WHERE status = 'PENDING';

CREATE INDEX IF NOT EXISTS ix_shared_outbox_aggregate
    ON shared.outbox (aggregate_type, aggregate_id);

-- -----------------------------------------------------------------------------
-- 4.3 shared.event_store — Durable record of all published events (append-only)
--      Source: DDD-1 Chapter 5.3
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS shared.event_store (
    event_id          UUID PRIMARY KEY,
    event_type        TEXT NOT NULL,
    event_version     INTEGER NOT NULL,
    aggregate_id      UUID NOT NULL,
    aggregate_type    TEXT NOT NULL,
    publisher         TEXT NOT NULL,
    payload           JSONB NOT NULL,
    metadata          JSONB,
    published_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    correlation_id    UUID
);

CREATE INDEX IF NOT EXISTS ix_shared_event_store_type
    ON shared.event_store (event_type, published_at);

CREATE INDEX IF NOT EXISTS ix_shared_event_store_aggregate
    ON shared.event_store (aggregate_type, aggregate_id);

-- Append-only protection
DROP TRIGGER IF EXISTS trg_block_update_event_store ON shared.event_store;
CREATE TRIGGER trg_block_update_event_store
    BEFORE UPDATE ON shared.event_store
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();

DROP TRIGGER IF EXISTS trg_block_delete_event_store ON shared.event_store;
CREATE TRIGGER trg_block_delete_event_store
    BEFORE DELETE ON shared.event_store
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();

-- -----------------------------------------------------------------------------
-- 4.4 shared.idempotency_keys — Safe retry for state-changing operations
--      Source: DDD-1 Chapters 3.7 & 5.5
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS shared.idempotency_keys (
    idempotency_key   VARCHAR(255) PRIMARY KEY,
    account_id        UUID NOT NULL,
    operation         TEXT NOT NULL,
    request_hash      VARCHAR(64) NOT NULL,
    response_payload  JSONB,
    status            TEXT NOT NULL CHECK (status IN ('IN_PROGRESS', 'COMPLETED', 'FAILED')),
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at      TIMESTAMPTZ,
    expires_at        TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS ix_shared_idempotency_keys_account
    ON shared.idempotency_keys (account_id, operation);

-- -----------------------------------------------------------------------------
-- 4.5 shared.encryption_key_registry — Field-level encryption key tracking
--      Tracks key versions for AES-256-GCM field-level encryption rotation.
--      Keys are stored in a Secrets Manager, NOT in the database.
--      Source: DDD-1 Chapter 5.6
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS shared.encryption_key_registry (
    key_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key_version       INTEGER NOT NULL,
    key_purpose       TEXT NOT NULL CHECK (key_purpose IN (
                        'CREDENTIAL', 'KYC_EVIDENCE', 'PAYMENT_DATA',
                        'API_SECRET', 'TOTP_SECRET', 'GENERAL'
                    )),
    key_reference     TEXT NOT NULL,
    status            TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'ROTATED', 'REVOKED')),
    activated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    rotated_at        TIMESTAMPTZ,
    rotated_from      UUID REFERENCES shared.encryption_key_registry(key_id)
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_shared_encryption_key_registry_version
    ON shared.encryption_key_registry (key_purpose, key_version);

-- -----------------------------------------------------------------------------
-- 4.6 shared.schema_migrations — Application-level migration tracking
--      Tracks K-NETWORK versioned migrations (separate from Supabase's own).
--      Source: DDD-1 Chapter 21.2
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS shared.schema_migrations (
    migration_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    migration_version    VARCHAR(50) NOT NULL UNIQUE,
    migration_name       TEXT NOT NULL,
    applied_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    applied_by           TEXT NOT NULL DEFAULT CURRENT_USER,
    checksum             VARCHAR(64) NOT NULL,
    execution_time_ms    INTEGER NOT NULL DEFAULT 0,
    status               TEXT NOT NULL DEFAULT 'APPLIED'
                         CHECK (status IN ('APPLIED', 'FAILED', 'ROLLED_BACK'))
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_shared_schema_migrations_version
    ON shared.schema_migrations (migration_version);

-- =============================================================================
-- 5. DATABASE ROLES
--    Application-level roles for RBAC at the database level.
--    Supabase manages anon, authenticated, service_role automatically.
--    These roles are created with IF NOT EXISTS semantics for idempotency.
--    Source: DDD-1 Chapter 20.7
-- =============================================================================

-- admin_role: Database administrator, bypasses RLS
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'admin_role') THEN
        CREATE ROLE admin_role LOGIN BYPASSRLS;
    END IF;
END $$;

-- app_service: Application service account, subject to RLS
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'app_service') THEN
        CREATE ROLE app_service LOGIN;
    END IF;
END $$;

-- readonly_role: Reporting/BI, SELECT only, subject to RLS
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'readonly_role') THEN
        CREATE ROLE readonly_role LOGIN;
    END IF;
END $$;

-- Grant schema usage
GRANT USAGE ON SCHEMA shared TO app_service, readonly_role, admin_role;

-- Grant privileges on shared tables
-- app_service: DML on operational tables (outbox, idempotency_keys, encryption_key_registry)
GRANT SELECT, INSERT, UPDATE, DELETE ON shared.outbox TO app_service;
GRANT SELECT, INSERT, UPDATE, DELETE ON shared.idempotency_keys TO app_service;
GRANT SELECT, INSERT, UPDATE ON shared.encryption_key_registry TO app_service;

-- app_service: INSERT only on audit_log and event_store (append-only)
GRANT INSERT ON shared.audit_log TO app_service;
GRANT INSERT ON shared.event_store TO app_service;

-- app_service: SELECT on schema_migrations (read migration status)
GRANT SELECT ON shared.schema_migrations TO app_service;

-- readonly_role: SELECT on all shared tables
GRANT SELECT ON ALL TABLES IN SCHEMA shared TO readonly_role;

-- admin_role: ALL privileges on shared schema
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA shared TO admin_role;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA shared TO admin_role;

-- Grant Supabase authenticated role access to shared schema for RLS-based access
-- (Supabase maps JWT-authenticated users to the 'authenticated' role)
-- The 'authenticated' role is created automatically by Supabase; in local/dev
-- environments it may not exist, so we grant conditionally.
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
        GRANT USAGE ON SCHEMA shared TO authenticated;
        GRANT SELECT ON shared.schema_migrations TO authenticated;
    END IF;
END $$;

-- =============================================================================
-- 6. RLS FOUNDATION
--    Row Level Security is enabled and FORCED on all shared infrastructure
--    tables. All shared tables are admin-only (no participant access).
--    Source: DDD-1 Chapter 20.2.2
-- =============================================================================

-- 6.1 audit_log — Admin only, append-only
ALTER TABLE shared.audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE shared.audit_log FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS audit_log_admin_all ON shared.audit_log;
CREATE POLICY audit_log_admin_all ON shared.audit_log
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

-- Allow app_service to INSERT (audit trigger writes here) but not SELECT/UPDATE/DELETE
DROP POLICY IF EXISTS audit_log_service_insert ON shared.audit_log;
CREATE POLICY audit_log_service_insert ON shared.audit_log
    FOR INSERT TO app_service WITH CHECK (true);

-- 6.2 outbox — Admin only
ALTER TABLE shared.outbox ENABLE ROW LEVEL SECURITY;
ALTER TABLE shared.outbox FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS outbox_admin_all ON shared.outbox;
CREATE POLICY outbox_admin_all ON shared.outbox
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS outbox_service_all ON shared.outbox;
CREATE POLICY outbox_service_all ON shared.outbox
    FOR ALL TO app_service USING (true) WITH CHECK (true);

-- 6.3 event_store — Admin only, append-only
ALTER TABLE shared.event_store ENABLE ROW LEVEL SECURITY;
ALTER TABLE shared.event_store FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS event_store_admin_all ON shared.event_store;
CREATE POLICY event_store_admin_all ON shared.event_store
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS event_store_service_insert ON shared.event_store;
CREATE POLICY event_store_service_insert ON shared.event_store
    FOR INSERT TO app_service WITH CHECK (true);

-- 6.4 idempotency_keys — Admin + service
ALTER TABLE shared.idempotency_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE shared.idempotency_keys FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS idempotency_keys_admin_all ON shared.idempotency_keys;
CREATE POLICY idempotency_keys_admin_all ON shared.idempotency_keys
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS idempotency_keys_service_all ON shared.idempotency_keys;
CREATE POLICY idempotency_keys_service_all ON shared.idempotency_keys
    FOR ALL TO app_service USING (true) WITH CHECK (true);

-- 6.5 encryption_key_registry — Admin only
ALTER TABLE shared.encryption_key_registry ENABLE ROW LEVEL SECURITY;
ALTER TABLE shared.encryption_key_registry FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS encryption_key_registry_admin_all ON shared.encryption_key_registry;
CREATE POLICY encryption_key_registry_admin_all ON shared.encryption_key_registry
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS encryption_key_registry_service_select ON shared.encryption_key_registry;
CREATE POLICY encryption_key_registry_service_select ON shared.encryption_key_registry
    FOR SELECT TO app_service USING (true);

-- 6.6 schema_migrations — Admin only (read for authenticated)
ALTER TABLE shared.schema_migrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE shared.schema_migrations FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS schema_migrations_admin_all ON shared.schema_migrations;
CREATE POLICY schema_migrations_admin_all ON shared.schema_migrations
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS schema_migrations_authenticated_select ON shared.schema_migrations;
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
        CREATE POLICY schema_migrations_authenticated_select ON shared.schema_migrations
            FOR SELECT TO authenticated USING (true);
    END IF;
END $$;

-- =============================================================================
-- 7. COMMENTS (for database documentation)
-- =============================================================================

COMMENT ON SCHEMA shared IS 'K-NETWORK shared platform schema — cross-cutting infrastructure: audit log, event outbox/store, idempotency, encryption key registry, migration tracking. Source: DDD-1.';

COMMENT ON TABLE shared.audit_log IS 'Hash-chained append-only audit log. Captures all state-changing operations on audited tables. Tamper-evident via SHA-256 chain. Source: DDD-1 Ch.3.2, 5.4.';
COMMENT ON TABLE shared.outbox IS 'Event outbox for atomic event publishing. Events are written atomically with business operations, then relayed to the event bus. Source: DDD-1 Ch.5.2.';
COMMENT ON TABLE shared.event_store IS 'Durable append-only record of all published events. Source: DDD-1 Ch.5.3.';
COMMENT ON TABLE shared.idempotency_keys IS 'Idempotency key store for safe retry of state-changing operations. Source: DDD-1 Ch.3.7, 5.5.';
COMMENT ON TABLE shared.encryption_key_registry IS 'Tracks AES-256-GCM field-level encryption key versions for rotation. Keys stored in Secrets Manager, not in DB. Source: DDD-1 Ch.5.6.';
COMMENT ON TABLE shared.schema_migrations IS 'Application-level versioned migration tracking. Source: DDD-1 Ch.21.2.';

COMMENT ON FUNCTION shared.fn_block_mutation() IS 'Blocks UPDATE and DELETE on immutable/append-only tables. Corrections via compensating entries. Source: DDD-1 Ch.3.4, 20.3.2.';
COMMENT ON FUNCTION shared.fn_audit_trigger() IS 'Hash-chained audit trigger. Creates append-only audit_log entries with SHA-256 hash chaining. Source: DDD-1 Ch.3.2, 20.3.3.';

-- =============================================================================
-- 8. RECORD THIS MIGRATION
-- =============================================================================

INSERT INTO shared.schema_migrations (migration_version, migration_name, checksum)
VALUES (
    '000001',
    'create_shared_schema',
    'placeholder-replace-with-sha256'
)
ON CONFLICT (migration_version) DO NOTHING;

COMMIT;

-- =============================================================================
-- ROLLBACK (DOWN) — Run separately if needed, non-production only
-- =============================================================================
-- BEGIN;
--   DROP POLICY IF EXISTS schema_migrations_authenticated_select ON shared.schema_migrations;
--   DROP POLICY IF EXISTS schema_migrations_admin_all ON shared.schema_migrations;
--   DROP POLICY IF EXISTS encryption_key_registry_service_select ON shared.encryption_key_registry;
--   DROP POLICY IF EXISTS encryption_key_registry_admin_all ON shared.encryption_key_registry;
--   DROP POLICY IF EXISTS idempotency_keys_service_all ON shared.idempotency_keys;
--   DROP POLICY IF EXISTS idempotency_keys_admin_all ON shared.idempotency_keys;
--   DROP POLICY IF EXISTS event_store_service_insert ON shared.event_store;
--   DROP POLICY IF EXISTS event_store_admin_all ON shared.event_store;
--   DROP POLICY IF EXISTS outbox_service_all ON shared.outbox;
--   DROP POLICY IF EXISTS outbox_admin_all ON shared.outbox;
--   DROP POLICY IF EXISTS audit_log_service_insert ON shared.audit_log;
--   DROP POLICY IF EXISTS audit_log_admin_all ON shared.audit_log;
--   DROP TRIGGER IF EXISTS trg_block_delete_event_store ON shared.event_store;
--   DROP TRIGGER IF EXISTS trg_block_update_event_store ON shared.event_store;
--   DROP TRIGGER IF EXISTS trg_block_delete_audit_log ON shared.audit_log;
--   DROP TRIGGER IF EXISTS trg_block_update_audit_log ON shared.audit_log;
--   DROP TABLE IF EXISTS shared.schema_migrations;
--   DROP TABLE IF EXISTS shared.encryption_key_registry;
--   DROP TABLE IF EXISTS shared.idempotency_keys;
--   DROP TABLE IF EXISTS shared.event_store;
--   DROP TABLE IF EXISTS shared.outbox;
--   DROP TABLE IF EXISTS shared.audit_log;
--   DROP FUNCTION IF EXISTS shared.fn_audit_trigger();
--   DROP FUNCTION IF EXISTS shared.fn_block_mutation();
--   DROP SCHEMA IF EXISTS shared CASCADE;
-- COMMIT;
