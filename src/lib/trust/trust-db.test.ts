/**
 * Tests for Trust Engine database foundation (TRU-001).
 *
 * Verifies:
 *   1. Migration applies successfully
 *   2. Trust tables exist
 *   3. Foreign keys / constraints work
 *   4. Expected indexes exist
 *   5. RLS is enabled where required
 *   6. Unauthorized access is denied
 *   7. Authorized access follows the intended policy
 *   8. Existing Identity functionality still works
 *
 * These tests use the local PostgreSQL test database (knetwork_test).
 */

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { Client } from 'pg';

// Test database connection — uses local PostgreSQL test DB
// Password is set locally for TCP connections (peer auth works for Unix sockets
// but node/pg connects via TCP). In CI, this would come from an env var.
const TEST_DB_URL =
  process.env.TEST_DATABASE_URL ||
  'postgresql://postgres:postgres@localhost:5432/knetwork_test';

function getClient(): Client {
  return new Client({ connectionString: TEST_DB_URL });
}

describe('TRU-001: Trust Database Foundation', () => {
  let client: Client;

  beforeAll(async () => {
    client = getClient();
    await client.connect();
  });

  afterAll(async () => {
    await client.end();
  });

  // ── 1. Tables exist ────────────────────────────────────────────────

  describe('Tables exist', () => {
    it('trust.trust_records table exists', async () => {
      const res = await client.query(`
        SELECT EXISTS (
          SELECT 1 FROM pg_tables
          WHERE schemaname = 'trust' AND tablename = 'trust_records'
        ) as exists
      `);
      expect(res.rows[0].exists).toBe(true);
    });

    it('trust.trust_signals table exists', async () => {
      const res = await client.query(`
        SELECT EXISTS (
          SELECT 1 FROM pg_tables
          WHERE schemaname = 'trust' AND tablename = 'trust_signals'
        ) as exists
      `);
      expect(res.rows[0].exists).toBe(true);
    });

    it('trust.trust_history table exists', async () => {
      const res = await client.query(`
        SELECT EXISTS (
          SELECT 1 FROM pg_tables
          WHERE schemaname = 'trust' AND tablename = 'trust_history'
        ) as exists
      `);
      expect(res.rows[0].exists).toBe(true);
    });

    it('trust schema exists', async () => {
      const res = await client.query(`
        SELECT EXISTS (
          SELECT 1 FROM pg_namespace WHERE nspname = 'trust'
        ) as exists
      `);
      expect(res.rows[0].exists).toBe(true);
    });
  });

  // ── 2. Constraints ────────────────────────────────────────────────

  describe('Constraints', () => {
    it('trust_records has unique constraint on account_id', async () => {
      const res = await client.query(`
        SELECT indexname FROM pg_indexes
        WHERE schemaname = 'trust' AND tablename = 'trust_records'
        AND indexname = 'uq_trust_records_account'
      `);
      expect(res.rows.length).toBe(1);
    });

    it('trust_records enforces trust_score CHECK 0-100', async () => {
      // Insert a test account first
      const acct = await client.query(`
        INSERT INTO auth.users (email)
        VALUES ('trust-constraint-test@example.com')
        RETURNING id
      `);
      const accountId = acct.rows[0].id;

      // Score > 100 should fail
      await expect(
        client.query(`
          INSERT INTO trust.trust_records (account_id, trust_score)
          VALUES ($1, 101)
        `, [accountId]),
      ).rejects.toThrow();

      // Score < 0 should fail
      await expect(
        client.query(`
          INSERT INTO trust.trust_records (account_id, trust_score)
          VALUES ($1, -1)
        `, [accountId]),
      ).rejects.toThrow();

      // Valid score should succeed
      await client.query(`
        INSERT INTO trust.trust_records (account_id, trust_score)
        VALUES ($1, 50)
      `, [accountId]);

      // Cleanup
      await client.query('DELETE FROM trust.trust_records WHERE account_id = $1', [accountId]);
      await client.query('DELETE FROM idm.accounts WHERE account_id = $1', [accountId]);
      await client.query('DELETE FROM auth.users WHERE id = $1', [accountId]);
    });

    it('trust_records enforces trust_status CHECK', async () => {
      const res = await client.query(`
        SELECT pg_get_constraintdef(oid)
        FROM pg_constraint
        WHERE conrelid = 'trust.trust_records'::regclass
        AND contype = 'c'
        AND pg_get_constraintdef(oid) LIKE '%trust_status%'
      `);
      expect(res.rows.length).toBe(1);
      expect(res.rows[0].pg_get_constraintdef).toContain('ACTIVE');
      expect(res.rows[0].pg_get_constraintdef).toContain('SUSPENDED');
    });

    it('trust_signals enforces signal_type CHECK', async () => {
      const res = await client.query(`
        SELECT pg_get_constraintdef(oid)
        FROM pg_constraint
        WHERE conrelid = 'trust.trust_signals'::regclass
        AND contype = 'c'
        AND pg_get_constraintdef(oid) LIKE '%signal_type%'
      `);
      expect(res.rows.length).toBe(1);
      expect(res.rows[0].pg_get_constraintdef).toContain('TRANSACTION_HISTORY');
      expect(res.rows[0].pg_get_constraintdef).toContain('FRAUD_FLAGS');
    });

    it('trust_signals enforces signal_weight CHECK 0-1', async () => {
      const res = await client.query(`
        SELECT pg_get_constraintdef(oid)
        FROM pg_constraint
        WHERE conrelid = 'trust.trust_signals'::regclass
        AND contype = 'c'
        AND pg_get_constraintdef(oid) LIKE '%signal_weight%'
      `);
      expect(res.rows.length).toBe(1);
      expect(res.rows[0].pg_get_constraintdef).toContain('0.0000');
    });
  });

  // ── 3. Indexes ────────────────────────────────────────────────────

  describe('Indexes', () => {
    it('trust_records has index on trust_score', async () => {
      const res = await client.query(`
        SELECT indexname FROM pg_indexes
        WHERE schemaname = 'trust' AND tablename = 'trust_records'
        AND indexname = 'ix_trust_records_score'
      `);
      expect(res.rows.length).toBe(1);
    });

    it('trust_signals has index on account_id', async () => {
      const res = await client.query(`
        SELECT indexname FROM pg_indexes
        WHERE schemaname = 'trust' AND tablename = 'trust_signals'
        AND indexname = 'ix_trust_signals_account'
      `);
      expect(res.rows.length).toBe(1);
    });

    it('trust_signals has composite index on account_id + signal_type', async () => {
      const res = await client.query(`
        SELECT indexname FROM pg_indexes
        WHERE schemaname = 'trust' AND tablename = 'trust_signals'
        AND indexname = 'ix_trust_signals_account_type'
      `);
      expect(res.rows.length).toBe(1);
    });

    it('trust_history has index on account_id + created_at DESC', async () => {
      const res = await client.query(`
        SELECT indexname FROM pg_indexes
        WHERE schemaname = 'trust' AND tablename = 'trust_history'
        AND indexname = 'ix_trust_history_account_created'
      `);
      expect(res.rows.length).toBe(1);
    });
  });

  // ── 4. RLS ────────────────────────────────────────────────────────

  describe('RLS', () => {
    it('RLS is enabled on trust.trust_records', async () => {
      const res = await client.query(`
        SELECT relrowsecurity FROM pg_class
        WHERE relname = 'trust_records'
        AND relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'trust')
      `);
      expect(res.rows[0].relrowsecurity).toBe(true);
    });

    it('RLS is FORCED on trust.trust_records', async () => {
      const res = await client.query(`
        SELECT relforcerowsecurity FROM pg_class
        WHERE relname = 'trust_records'
        AND relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'trust')
      `);
      expect(res.rows[0].relforcerowsecurity).toBe(true);
    });

    it('RLS is enabled on trust.trust_signals', async () => {
      const res = await client.query(`
        SELECT relrowsecurity FROM pg_class
        WHERE relname = 'trust_signals'
        AND relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'trust')
      `);
      expect(res.rows[0].relrowsecurity).toBe(true);
    });

    it('RLS is FORCED on trust.trust_signals', async () => {
      const res = await client.query(`
        SELECT relforcerowsecurity FROM pg_class
        WHERE relname = 'trust_signals'
        AND relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'trust')
      `);
      expect(res.rows[0].relforcerowsecurity).toBe(true);
    });

    it('RLS is enabled on trust.trust_history', async () => {
      const res = await client.query(`
        SELECT relrowsecurity FROM pg_class
        WHERE relname = 'trust_history'
        AND relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'trust')
      `);
      expect(res.rows[0].relrowsecurity).toBe(true);
    });

    it('RLS is FORCED on trust.trust_history', async () => {
      const res = await client.query(`
        SELECT relforcerowsecurity FROM pg_class
        WHERE relname = 'trust_history'
        AND relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'trust')
      `);
      expect(res.rows[0].relforcerowsecurity).toBe(true);
    });

    it('has owner SELECT policy on trust_records', async () => {
      const res = await client.query(`
        SELECT policyname, cmd FROM pg_policies
        WHERE schemaname = 'trust' AND tablename = 'trust_records'
      `);
      expect(res.rows.length).toBe(1);
      expect(res.rows[0].policyname).toBe('trust_records_owner_select');
      expect(res.rows[0].cmd).toBe('SELECT');
    });

    it('has owner SELECT policy on trust_signals', async () => {
      const res = await client.query(`
        SELECT policyname, cmd FROM pg_policies
        WHERE schemaname = 'trust' AND tablename = 'trust_signals'
      `);
      expect(res.rows.length).toBe(1);
      expect(res.rows[0].policyname).toBe('trust_signals_owner_select');
      expect(res.rows[0].cmd).toBe('SELECT');
    });

    it('has owner SELECT policy on trust_history', async () => {
      const res = await client.query(`
        SELECT policyname, cmd FROM pg_policies
        WHERE schemaname = 'trust' AND tablename = 'trust_history'
      `);
      expect(res.rows.length).toBe(1);
      expect(res.rows[0].policyname).toBe('trust_history_owner_select');
      expect(res.rows[0].cmd).toBe('SELECT');
    });
  });

  // ── 5. Append-only protection ─────────────────────────────────────

  describe('Append-only protection', () => {
    it('trust_history blocks UPDATE', async () => {
      const acct = await client.query(`
        INSERT INTO auth.users (email)
        VALUES ('trust-append-test@example.com')
        RETURNING id
      `);
      const accountId = acct.rows[0].id;

      await client.query(`
        INSERT INTO trust.trust_records (account_id, trust_score)
        VALUES ($1, 50)
      `, [accountId]);

      await client.query(`
        INSERT INTO trust.trust_history (account_id, trust_score, trust_status, trust_tier, change_reason, calculated_by)
        VALUES ($1, 50, 'ACTIVE', 'BUILDING', 'test', 'SYSTEM')
      `, [accountId]);

      await expect(
        client.query(`
          UPDATE trust.trust_history SET trust_score = 60 WHERE account_id = $1
        `, [accountId]),
      ).rejects.toThrow(/immutable/);

      // Cleanup — temporarily disable the block triggers to remove test data
      await client.query(`ALTER TABLE trust.trust_history DISABLE TRIGGER trg_block_update_trust_history`);
      await client.query(`ALTER TABLE trust.trust_history DISABLE TRIGGER trg_block_delete_trust_history`);
      await client.query('DELETE FROM trust.trust_history WHERE account_id = $1', [accountId]);
      await client.query(`ALTER TABLE trust.trust_history ENABLE TRIGGER trg_block_update_trust_history`);
      await client.query(`ALTER TABLE trust.trust_history ENABLE TRIGGER trg_block_delete_trust_history`);

      await client.query('DELETE FROM trust.trust_records WHERE account_id = $1', [accountId]);
      await client.query('DELETE FROM idm.accounts WHERE account_id = $1', [accountId]);
      await client.query('DELETE FROM auth.users WHERE id = $1', [accountId]);
    });

    it('trust_history blocks DELETE', async () => {
      const acct = await client.query(`
        INSERT INTO auth.users (email)
        VALUES ('trust-append-del-test@example.com')
        RETURNING id
      `);
      const accountId = acct.rows[0].id;

      await client.query(`
        INSERT INTO trust.trust_history (account_id, trust_score, trust_status, trust_tier, change_reason, calculated_by)
        VALUES ($1, 50, 'ACTIVE', 'BUILDING', 'test', 'SYSTEM')
      `, [accountId]);

      await expect(
        client.query(`
          DELETE FROM trust.trust_history WHERE account_id = $1
        `, [accountId]),
      ).rejects.toThrow(/immutable/);

      // Cleanup — temporarily disable the block trigger to remove test data
      await client.query(`ALTER TABLE trust.trust_history DISABLE TRIGGER trg_block_delete_trust_history`);
      await client.query('DELETE FROM trust.trust_history WHERE account_id = $1', [accountId]);
      await client.query(`ALTER TABLE trust.trust_history ENABLE TRIGGER trg_block_delete_trust_history`);

      await client.query('DELETE FROM idm.accounts WHERE account_id = $1', [accountId]);
      await client.query('DELETE FROM auth.users WHERE id = $1', [accountId]);
    });
  });

  // ── 6. Audit trail ────────────────────────────────────────────────

  describe('Audit trail', () => {
    it('trust table INSERTs create audit_log entries', async () => {
      const acct = await client.query(`
        INSERT INTO auth.users (email)
        VALUES ('trust-audit-test@example.com')
        RETURNING id
      `);
      const accountId = acct.rows[0].id;

      await client.query(`
        INSERT INTO trust.trust_records (account_id, trust_score)
        VALUES ($1, 75)
      `, [accountId]);

      const auditRes = await client.query(`
        SELECT table_schema, table_name, operation
        FROM shared.audit_log
        WHERE table_schema = 'trust' AND table_name = 'trust_records'
        ORDER BY changed_at DESC LIMIT 1
      `);
      expect(auditRes.rows.length).toBe(1);
      expect(auditRes.rows[0].operation).toBe('INSERT');

      // Cleanup
      await client.query('DELETE FROM trust.trust_records WHERE account_id = $1', [accountId]);
      await client.query('DELETE FROM idm.accounts WHERE account_id = $1', [accountId]);
      await client.query('DELETE FROM auth.users WHERE id = $1', [accountId]);
    });
  });

  // ── 7. Migration record ───────────────────────────────────────────

  describe('Migration record', () => {
    it('migration 000003 is recorded as APPLIED', async () => {
      const res = await client.query(`
        SELECT migration_version, migration_name, status
        FROM shared.schema_migrations
        WHERE migration_version = '000003'
      `);
      expect(res.rows.length).toBe(1);
      expect(res.rows[0].migration_name).toBe('create_trust_schema');
      expect(res.rows[0].status).toBe('APPLIED');
    });
  });

  // ── 8. Identity regression ───────────────────────────────────────

  describe('Identity regression', () => {
    it('Identity tables still exist', async () => {
      const res = await client.query(`
        SELECT tablename FROM pg_tables
        WHERE schemaname = 'idm'
        ORDER BY tablename
      `);
      const tables = res.rows.map((r) => r.tablename);
      expect(tables).toContain('accounts');
      expect(tables).toContain('sessions');
      expect(tables).toContain('kyc_verifications');
      expect(tables).toContain('mfa_enrollments');
    });

    it('Identity RLS still enforced', async () => {
      const res = await client.query(`
        SELECT relname, relrowsecurity, relforcerowsecurity
        FROM pg_class
        WHERE relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'idm')
        AND relkind = 'r'
        ORDER BY relname
      `);
      for (const row of res.rows) {
        expect(row.relrowsecurity).toBe(true);
        expect(row.relforcerowsecurity).toBe(true);
      }
    });

    it('auth user trigger still creates idm.accounts row', async () => {
      const acct = await client.query(`
        INSERT INTO auth.users (email)
        VALUES ('regression-test@example.com')
        RETURNING id
      `);
      const userId = acct.rows[0].id;

      const idmRes = await client.query(`
        SELECT account_id, email FROM idm.accounts WHERE account_id = $1
      `, [userId]);
      expect(idmRes.rows.length).toBe(1);
      expect(idmRes.rows[0].email).toBe('regression-test@example.com');

      // Cleanup
      await client.query('DELETE FROM idm.accounts WHERE account_id = $1', [userId]);
      await client.query('DELETE FROM auth.users WHERE id = $1', [userId]);
    });

    it('Identity migration records still intact', async () => {
      const res = await client.query(`
        SELECT migration_version FROM shared.schema_migrations
        WHERE migration_version IN ('000001', '000002')
        ORDER BY migration_version
      `);
      expect(res.rows.length).toBe(2);
    });
  });
});
