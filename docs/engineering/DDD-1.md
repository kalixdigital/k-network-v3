# K-NETWORK Database Design Document

---

## DOCUMENT CONTROL BLOCK — DDD-1

### Document Control Elements

| Field | Value |
|---|---|
| **Document ID** | DDD-1 |
| **Document Title** | Database Design Document — K-NETWORK Platform |
| **Version Number** | 1.0 |
| **Status** | Draft for Governance Review |
| **Date of Issue** | 26 August 2026 |
| **Author** | K-NETWORK Architecture & Engineering Team |
| **Reviewer** | K-NETWORK Architecture Review Board |
| **Approver** | K-NETWORK Executive Authority |
| **Classification** | Confidential — Internal Governance |
| **Document Type** | Database Design Document |
| **Governing Authority** | PLC-1 v2.0 — Platform Constitution |
| **Parent Documents** | PLC-1 v2.0; KR-1 v3.0; BRD-1 v1.0; SRS-1 v2.0; SAD-1 v1.0; SDD-1 v1.0 |
| **Review Cycle** | On-change + annual verification |
| **Next Scheduled Review** | August 2027 |
| **Related Documents** | PLC-1, KR-1, BRD-1, SRS-1, SAD-1, SDD-1, GOV-0, CMP-0, LEARN-AD-1, API-1, UXDS-1 |

### Version History

| Version | Date | Author | Description of Changes | Status |
|---|---|---|---|---|
| 0.1–0.9 | 2026-08 | K-NETWORK Team | Prior incremental drafts (10-engine scope) | Superseded |
| 1.0 | 2026-08-26 | K-NETWORK Architecture & Engineering Team | Complete rebuild: eleven-engine database design (Learning as Engine #11); production-oriented PostgreSQL schema with complete table definitions, columns, types, constraints, indexes, RLS, triggers, migrations, seed data, data dictionary, ER descriptions, cross-engine relationships, 90/10 accounting enforcement, network graph, Royal Identity, and traceability; line-by-line audited | Draft for Review |

### Approval & Sign-Off

| Role | Name | Signature | Date | Approval Status |
|---|---|---|---|---|
| Author | K-NETWORK Architecture & Engineering Team | ________________________ | 2026-08-26 | — |
| Reviewer | K-NETWORK Architecture Review Board | ________________________ | ____________ | Pending |
| Approver | K-NETWORK Executive Authority | ________________________ | ____________ | Pending |

> **Note:** DDD-1 attains **Approved** status only when the Approver's line is signed with an **Approved** or **Approved with Comments** status. Until then, the document remains in **Draft** status and serves as the directional reference for database engineering.

### Distribution List

| Role | Format |
|---|---|
| K-NETWORK Executive Leadership | Digital |
| K-NETWORK Architecture Review Board | Digital |
| Database Architects & Engineers | Digital |
| Software Architects & Engineers | Digital |
| Security Architects & Security Officers | Digital |
| DevOps & Site Reliability Engineers | Digital |
| Quality Assurance Teams | Digital |
| Compliance & Security Officers | Digital |
| Authorized Auditors | Digital (Controlled copy) |
| Document Control Repository | Digital (Master controlled copy) |

### Related Documents

| Document ID | Title | Purpose |
|---|---|---|
| PLC-1 | K-NETWORK Platform Constitution v2.0 | Supreme governing authority; defines the Core Constitutional Principles, the eleven Core Platform Engines, and the platform's identity, vision, and governance. |
| KR-1 | K-Rewards Policy & Governance Framework v3.0 | Sole authoritative source of K-Rewards policy; governs the Five Pillars, the 90/10 economy, Leadership Multiplication, Royal Identity, Coronation, anti-fraud, governance, and technical calculation rules. |
| BRD-1 | Business Requirements Document v1.0 | Defines the business strategy, four participation pillars, marketplace models, leadership model, economics, and ecosystem. |
| SRS-1 | Software Requirements Specification v2.0 | Defines the complete functional and non-functional software requirements (151 requirements) that DDD-1 supports. |
| SAD-1 | Software Architecture Document v1.0 | Defines the complete software architecture, per-engine data stores, and data architecture that DDD-1 implements at the database level. |
| SDD-1 | Software Design Document v1.0 | Defines the implementation-level design, data models, algorithms, and workflows that DDD-1 translates into physical database schemas. |
| GOV-0 | Consolidated Governance Framework | Defines the hierarchy, decision-making, change, conflict, compliance, audit, and review mechanisms. |
| CMP-0 | Compliance & Regulatory Framework | Defines data protection, financial compliance, consumer protection, IP, and accessibility requirements. |
| LEARN-AD-1 | Learning Architecture Decision | Approved decision adding Learning as Core Engine #11. |
| API-1 | API Specification *(planned)* | Defines internal and external API contracts. |
| UXDS-1 | UI/UX Design Specification *(planned)* | Defines the user experience and interface design standards. |

### Document Control Policy

This is a **Controlled Document**. The following control terms apply:

1. **Controlled Status.** DDD-1 is a controlled document maintained under the K-NETWORK Document Control regime. Only the version held in the Document Control Repository is authoritative; all other copies are reference copies.
2. **Unauthorized Reproduction or Distribution.** Unauthorized reproduction, redistribution, or excerpting of this document, in whole or in part, is prohibited. Distribution is limited to the roles identified in the Distribution List above.
3. **Review Cycle.** This document shall be reviewed no less frequently than **on-change + annually**, or as directed by the governing authority (PLC-1). Off-cycle reviews may be triggered by governance decisions or material changes to related documents (SRS-1, SAD-1, SDD-1, KR-1, LEARN-AD-1).
4. **Governing Authority.** This document is subordinate to **PLC-1 — Platform Constitution**, consistent with **SAD-1** (architecture), **SDD-1** (design), **SRS-1** (requirements), **BRD-1**, and **KR-1** (for reward-related database design). Where this document conflicts with the Constitution, the Constitution prevails unless the conflict is resolved through formal governance.
5. **Traceability.** All database design decisions in this document must be traceable to their source in SDD-1 (design), SAD-1 (architecture), SRS-1 (requirements), PLC-1, BRD-1, KR-1, CMP-0, or GOV-0. Each table definition cites the specific source document and the requirements or design components it implements.
6. **Supersession Notice.** This version (1.0) **supersedes** all prior versions of this document. Upon publication of a subsequent approved version, the prior version shall be marked **Superseded** and retained for historical reference. Superseded versions shall not be used as the basis for any operational or implementation decision.
7. **Classification.** This document is classified **Confidential — Internal Governance**. Handling, storage, and transmission must comply with K-NETWORK information security policy.

---

## TABLE OF CONTENTS

**Front Matter**
- Document Control Block
- Table of Contents
- Preamble

**Part I — Foundation (Chapters 1–3)**
- Chapter 1 — Introduction and Document Purpose
- Chapter 2 — Database Design Principles and Conventions
- Chapter 3 — Cross-Cutting Database Controls

**Part II — Database Architecture (Chapters 4–5)**
- Chapter 4 — Database Architecture Overview
- Chapter 5 — Shared Schema Design

**Part III — Engine Schemas (Chapters 6–16)**
- Chapter 6 — Identity Engine Schema
- Chapter 7 — Trust Engine Schema
- Chapter 8 — Commerce Engine Schema
- Chapter 9 — Services Engine Schema
- Chapter 10 — K-Rewards Engine Schema
- Chapter 11 — Wallet/Payments Engine Schema
- Chapter 12 — Communication Engine Schema
- Chapter 13 — Intelligence Engine Schema
- Chapter 14 — Administration Engine Schema
- Chapter 15 — Integration Engine Schema
- Chapter 16 — Learning Engine Schema

**Part IV — Network Graph and Royal Identity (Chapters 17–18)**
- Chapter 17 — Network Graph Schema
- Chapter 18 — Royal Identity Schema

**Part V — 90/10 Accounting and Security (Chapters 19–20)**
- Chapter 19 — 90/10 Accounting Schema
- Chapter 20 — Security Design

**Part VI — Migrations, Data Dictionary, and Traceability (Chapters 21–23)**
- Chapter 21 — Migration Framework and Seed Data
- Chapter 22 — Data Dictionary and ER Descriptions
- Chapter 23 — Traceability Matrices

**Appendices**
- Appendix A — PostgreSQL Extension Reference
- Appendix B — Glossary
- Appendix C — Acronyms
- Appendix D — Revenue Waterfall Reference
- Appendix E — K-Level Progression Matrix Reference
- Appendix F — Engine Schema Reference

---

## PREAMBLE

The K-NETWORK Database Design Document (DDD-1) translates the software design established in the Software Design Document (SDD-1 v1.0) into production-oriented database schemas. It defines the complete table structures, columns, data types, primary keys, foreign keys, unique constraints, check constraints, indexes, Row-Level Security (RLS) policies, triggers, lifecycle management, retention policies, migration scripts, seed data, data dictionary, and Entity-Relationship (ER) descriptions that database engineers implement to build the K-NETWORK platform's data layer.

DDD-1 occupies Tier 5 in the K-NETWORK governance document hierarchy established in PLC-1 v2.0 Chapter 32:

```
PLC-1 (Constitution) → KR-1 (K-Rewards) / GOV-0 (Governance) → BRD-1 (Business) → SRS-1 (Requirements) → SAD-1 (Architecture) → SDD-1 (Design) → DDD-1 (Database) → Code
```

DDD-1 is subordinate to SDD-1 v1.0 (the Software Design Document), SAD-1 v1.0 (the Software Architecture Document), SRS-1 v2.0 (the Software Requirements Specification), BRD-1 v1.0 (the Business Requirements Document), KR-1 v3.0 (for reward-related database design), and PLC-1 v2.0 (the Platform Constitution). Database design (DDD-1) constrains implementation (code). Each table definition must remain traceable to its design parent (SDD-1), its architectural parent (SAD-1), and to its requirement parent (SRS-1).

**This version (1.0) provides production-oriented database schemas for all eleven current Core Platform Engines** — Identity, Trust, Commerce, Services, K-Rewards, Wallet/Payments, Communication, Intelligence, Administration, Integration, and Learning. Learning is incorporated as Core Engine #11 per the approved Learning Architecture Decision (LEARN-AD-1) and PLC-1 v2.0 Chapter 30. This DDD does NOT create a separate Learning database design; Learning is designed within the single platform database architecture, consuming shared foundations.

For all reward-related database design, DDD-1 is subordinate to KR-1, the sole authoritative source of K-Rewards policy. Every K-Points, K-Rings, K-Levels, reward calculation, and reward distribution table must trace to a rule defined in KR-1 and to a data model defined in SDD-1. In any conflict between DDD-1 and KR-1 on reward-related matters, DDD-1 must be corrected to restore alignment. In any conflict between DDD-1 and SDD-1, SDD-1 prevails. In any conflict between DDD-1 and SAD-1, SAD-1 prevails.

All numerical K-Rewards values — K-Point values, category caps, ring weights, density gates, K-Level thresholds, multipliers, allocation rates, cap rates, minimum thresholds — are **GOVERNANCE PARAMETERS** owned by KR-1. DDD-1 references the KR-1 rule IDs that define them and stores them in configuration tables; DDD-1 does not invent or hard-code these values in application logic.

K-NETWORK is designed as **one platform** containing eleven domain engines — not as eleven independent applications. Each engine owns its database schema. No engine directly accesses another engine's database. Cross-engine data access is through API calls or events (SAD-1 ADR-002; SDD-1 Ch.2). This document defines the physical schemas that enforce this boundary.

The database must make the 90/10 Principle **structurally impossible to violate**. Every qualifying economic transaction must be traceable through a complete chain: source transaction → qualifying revenue → reserve allocation → 90% allocable amount → distributions → settlement. The 10% reserve must be structurally protected — no query, trigger, or application logic may redistribute reserve funds into the allocation pool without formal governance. Reconciliation records must exist for every cycle.

This is not merely a technical document; it is the database expression of K-NETWORK's constitutional commitment to build a trusted, integrated, rewarding ecosystem where genuine contribution is recognized, growth is shared, and economic integrity is enforced at the data layer.

---

# Part I — Foundation

## Chapter 1 — Introduction and Document Purpose

### 1.1 Purpose

DDD-1 provides the production-oriented database design for the K-NETWORK platform. It defines complete PostgreSQL schemas for all eleven Core Engines, the network graph, Royal Identity, and 90/10 accounting enforcement. The document is sufficiently detailed for engineers to create database migrations without making undocumented design decisions — every table, column, type, constraint, index, RLS policy, trigger, and relationship is specified.

### 1.2 Scope

DDD-1 covers:

1. **Per-engine PostgreSQL schemas** for all eleven Core Engines — each engine owns its schema; no engine accesses another engine's schema directly.
2. **Shared schema** for cross-cutting concerns — audit log, outbox, event store, idempotency keys, encryption vault.
3. **Network graph schema** for referral relationships, ring membership, K-Level, and leadership qualification.
4. **Royal Identity schema** for usernames, team names, leadership titles, title history, coronation, and coronation history.
5. **90/10 accounting schema** for the complete economic traceability chain and reconciliation.
6. **Security design** — RLS, constraints, immutable ledger triggers, soft deletion, retention, archival, encryption-sensitive fields, access controls, tenant isolation.
7. **Migration framework and seed data** — versioned migrations, rollback procedures, initial seed data.
8. **Data dictionary and ER descriptions** — complete column-level definitions and entity relationships.
9. **Cross-engine relationships and traceability** — how schemas relate across engine boundaries and traceability to SRS-1, SAD-1, SDD-1, PLC-1, and KR-1.

### 1.3 Database Platform

The primary database platform is **PostgreSQL 16+**. The network graph uses a graph database (Neo4j reference, per SAD-1 ADR-006); DDD-1 provides the relational projection of graph data for persistence and audit, while the graph database handles traversals. Search and cache stores (Elasticsearch, Redis) are outside DDD-1's scope — DDD-1 covers the authoritative relational and graph data layer.

### 1.4 Precedence Hierarchy

Within the K-NETWORK documentation suite, the following precedence hierarchy applies to DDD-1:

1. **Applicable law** — always prevails.
2. **PLC-1 (Platform Constitution v2.0)** — supreme internal governance document.
3. **KR-1 (K-Rewards Framework v3.0)** — governs the K-Rewards domain.
4. **BRD-1 (Business Requirements Document v1.0)** — defines business requirements.
5. **SRS-1 (Software Requirements Specification v2.0)** — defines software requirements.
6. **SAD-1 (Software Architecture Document v1.0)** — defines software architecture.
7. **SDD-1 (Software Design Document v1.0)** — defines software design.
8. **DDD-1 (this document)** — governs database implementation.

Where any provision of DDD-1 conflicts with SDD-1, SDD-1 prevails and DDD-1 must be corrected. Where any reward-related provision conflicts with KR-1, KR-1 prevails. Where any provision conflicts with SAD-1, SAD-1 prevails.

### 1.5 Governing Requirement Traceability

SAD-1 v1.0 Chapter 26 (Data Architecture); SDD-1 v1.0 Chapters 2–3 (Design Principles, Cross-Cutting Controls); SRS-1 v2.0 Chapter 21 (NFR); SRS-NFR-011 (Data Integrity); PLC-1 v2.0 Chapter 10, 15; ADR-002 (Per-engine data ownership).

---

## Chapter 2 — Database Design Principles and Conventions

### 2.1 Design Principles

DDD-1 translates the ten architecture principles from SAD-1 Chapter 2 and the design principles from SDD-1 Chapter 2 into database-level principles:

1. **One Ecosystem, One Database Cluster.** All engine schemas reside in one PostgreSQL cluster. Shared extensions and conventions apply uniformly. No engine creates a separate database cluster.
2. **Per-Engine Schema Ownership.** Each engine owns its schema (`idm`, `tru`, `com`, `svc`, `krw`, `wal`, `msg`, `int`, `adm`, `igr`, `lrn`, plus `graph`, `roy`, `econ`, `shared`). No schema directly references another schema's tables via foreign keys across engine boundaries. Cross-engine data access is through API calls or events (ADR-002).
3. **Shared Foundations.** Cross-cutting tables (audit, outbox, idempotency, encryption vault) reside in the `shared` schema and are consumed by all engines.
4. **Strong Consistency for Financial Data.** Financial tables (wallet, settlements, K-Points ledger, reward distributions, reserve holdings) use ACID transactions with row-level locking. No eventual consistency for financial state (SAD-1 Ch.26; KR-1 KR-ECO-007).
5. **Immutable Ledgers.** Append-only ledger tables (K-Points ledger, wallet transaction ledger, audit log, settlement ledger) never UPDATE or DELETE rows. Corrections are made via compensating entries (reversals), not edits.
6. **90/10 Structural Enforcement.** The 10% reserve is structurally protected at the database level. Reserve holdings are in a separate table with separate constraints. No trigger or view may move reserve funds to the allocation pool.
7. **Row-Level Security by Default.** Every table with participant-owned data has RLS enabled. The default policy denies access; explicit policies grant access based on the authenticated user and their role.
8. **Soft Deletion for Business Records.** Business records (accounts, products, courses, providers) use soft deletion (`deleted_at` column, `is_deleted` flag). Financial and audit records are never deleted.
9. **Auditability by Design.** Every state-changing operation writes to the audit log with a hash chain. Audit records are append-only and tamper-evident.
10. **Compliance and Privacy by Design.** Sensitive fields (credentials, KYC evidence, payment data, API secrets) are encrypted at the column level. PII is tagged for retention and archival policies.

### 2.2 Naming Conventions

#### 2.2.1 Schema Naming

Schemas are named by engine domain code in lowercase:

| Schema | Engine | Code |
|---|---|---|
| `idm` | Identity | IDM |
| `tru` | Trust | TRU |
| `com` | Commerce | COM |
| `svc` | Services | SVC |
| `krw` | K-Rewards | KRW |
| `wal` | Wallet/Payments | WAL |
| `msg` | Communication | MSG |
| `int` | Intelligence | INT |
| `adm` | Administration | ADM |
| `igr` | Integration | IGR |
| `lrn` | Learning | LRN |
| `graph` | Network Graph | — |
| `roy` | Royal Identity | ROY |
| `econ` | 90/10 Accounting | ECON |
| `shared` | Shared Platform | — |

#### 2.2.2 Table Naming

Tables are named in `snake_case`, singular for entity tables, plural for collection tables:

- Entity: `accounts`, `products`, `orders`, `courses`
- Junction: `product_attributes`, `course_modules`, `ring_members`
- Association: `order_items`, `lesson_progress`, `wallet_transactions`

#### 2.2.3 Column Naming

- Primary keys: `{table_singular}_id` (e.g., `account_id`, `order_id`)
- Foreign keys: `{referenced_table_singular}_id` (e.g., `vendor_id`, `course_id`)
- Timestamps: `created_at`, `updated_at`, `deleted_at`, `closed_at`, `expires_at`
- Boolean flags: `is_{state}` (e.g., `is_active`, `is_deleted`, `is_verified`)
- Enum columns: `{name}` with a corresponding `CHECK` constraint or PostgreSQL enum type
- Encrypted columns: `{name}_enc` (e.g., `secret_enc`, `evidence_ref_enc`)

#### 2.2.4 Index Naming

- Unique index: `uq_{schema}_{table}_{columns}`
- Non-unique index: `ix_{schema}_{table}_{columns}`
- Partial index: `ix_{schema}_{table}_{columns}_partial`
- Foreign key index: `ix_{schema}_{table}_{fk_column}`

#### 2.2.5 Constraint Naming

- Primary key: `pk_{schema}_{table}`
- Foreign key: `fk_{schema}_{table}_{referenced_table}`
- Unique constraint: `uq_{schema}_{table}_{columns}`
- Check constraint: `ck_{schema}_{table}_{condition}`

### 2.3 Data Type Conventions

| Concept | PostgreSQL Type | Notes |
|---|---|---|
| UUID primary keys | `UUID` | All PKs are UUIDs (v4 or v7) |
| Monetary amounts | `NUMERIC(20,2)` | Exact decimal; no floating point for money |
| K-Points | `NUMERIC(20,2)` | Exact decimal for points |
| Percentages / rates | `NUMERIC(8,6)` | Fractional rates (0.150000 = 15%) |
| Trust scores | `NUMERIC(5,2)` | 0.00–100.00 |
| Multipliers | `NUMERIC(10,4)` | K-Level multipliers |
| Timestamps | `TIMESTAMPTZ` | All timestamps are timezone-aware |
| Short text | `VARCHAR(n)` | Bounded strings |
| Long text | `TEXT` | Unbounded strings |
| Booleans | `BOOLEAN` | |
| Enums | `TEXT` + `CHECK` | Or PostgreSQL `CREATE TYPE` enum |
| JSON data | `JSONB` | Indexed with GIN where queried |
| Encrypted data | `BYTEA` | AES-256 encrypted, stored as bytea |
| Hash chains | `VARCHAR(64)` | SHA-256 hex digests |

### 2.4 Concurrency Conventions

| Data Type | Concurrency | Mechanism |
|---|---|---|
| Financial balances | Pessimistic (PCC) | `SELECT ... FOR UPDATE` row locking |
| Low-contention entities | Optimistic (OCC) | `version` column + `WHERE version = :expected` |
| Append-only ledgers | None (append-only) | No updates; no conflicts |
| Inventory | Pessimistic (PCC) | Row-level lock on inventory row |
| Reward cycle | Pessimistic (PCC) | Lock on cycle row during stage transitions |

### 2.5 Governing Requirement Traceability

SAD-1 v1.0 Chapter 2 (Architecture Principles), Chapter 26 (Data Architecture); SDD-1 v1.0 Chapter 2 (Design Principles); SRS-1 v2.0 Chapter 21 (NFR); SRS-NFR-011 (Data Integrity); GOV-0 Section 1.1 (Governance Hierarchy); KR-1 KR-FND-005 (Downstream Conformance).

---

## Chapter 3 — Cross-Cutting Database Controls

### 3.1 Row-Level Security (RLS)

Every table containing participant-owned or tenant-scoped data has RLS enabled. The default policy is `RESTRICT` — no access unless explicitly granted.

**RLS policy framework:**

```sql
-- Enable RLS on all participant-owned tables
ALTER TABLE {schema}.{table} ENABLE ROW LEVEL SECURITY;
ALTER TABLE {schema}.{table} FORCE ROW LEVEL SECURITY;

-- Default deny policy (applies when no other policy matches)
-- No explicit policy needed; PostgreSQL denies by default when RLS is enabled.

-- Owner access policy: participants can see their own rows
CREATE POLICY {policy_name} ON {schema}.{table}
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

-- Admin access policy: administrators can see all rows
CREATE POLICY {policy_name}_admin ON {schema}.{table}
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);
```

The application sets `app.current_account_id` and `app.current_partner_id` in the session context after authentication. RLS policies reference these settings.

### 3.2 Audit Logging

All state-changing operations (INSERT, UPDATE, DELETE on business tables) are logged to the `shared.audit_log` table via triggers. The audit log is append-only and hash-chained.

**Audit log structure:**

```sql
CREATE TABLE shared.audit_log (
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

-- Hash chain: current_hash = SHA256(previous_hash || record_id || changed_at || new_values)
-- Prevents tampering: changing any record breaks the chain
```

**Audit trigger template:**

```sql
CREATE OR REPLACE FUNCTION shared.fn_audit_trigger()
RETURNS TRIGGER AS $$
DECLARE
    v_previous_hash VARCHAR(64);
    v_current_hash  VARCHAR(64);
    v_record_id     UUID;
    v_old_values    JSONB;
    v_new_values    JSONB;
BEGIN
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

    v_current_hash := encode(
        digest(
            v_previous_hash || v_record_id::TEXT || NOW()::TEXT ||
            COALESCE(v_new_values::TEXT, v_old_values::TEXT),
            'sha256'
        ),
        'hex'
    );

    INSERT INTO shared.audit_log (
        table_schema, table_name, operation, record_id,
        changed_by, old_values, new_values,
        previous_hash, current_hash
    ) VALUES (
        TG_TABLE_SCHEMA, TG_TABLE_NAME, TG_OP, v_record_id,
        current_setting('app.current_account_id')::UUID,
        v_old_values, v_new_values,
        v_previous_hash, v_current_hash
    );

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;
```

### 3.3 Soft Deletion

Business records use soft deletion. A `deleted_at` column and an `is_deleted` boolean flag mark records as deleted without removing them.

**Soft delete convention:**

```sql
ALTER TABLE {schema}.{table} ADD COLUMN deleted_at TIMESTAMPTZ;
ALTER TABLE {schema}.{table} ADD COLUMN is_deleted BOOLEAN NOT NULL DEFAULT FALSE;

-- Partial unique indexes exclude soft-deleted records
CREATE UNIQUE INDEX uq_{schema}_{table}_{columns}
    ON {schema}.{table} ({columns})
    WHERE is_deleted = FALSE;
```

Financial and audit records do **not** use soft deletion — they are append-only or retained permanently.

### 3.4 Immutable Ledgers

Append-only ledger tables (K-Points ledger, wallet transactions, settlement records, reserve holdings, audit log) enforce immutability at the database level:

```sql
-- Block UPDATE and DELETE on ledger tables
CREATE OR REPLACE FUNCTION shared.fn_block_mutation()
RETURNS TRIGGER AS $$
BEGIN
    RAISE EXCEPTION 'Ledger table % is append-only. UPDATE and DELETE are prohibited.', TG_TABLE_NAME;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_block_update BEFORE UPDATE ON {schema}.{ledger_table}
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();

CREATE TRIGGER trg_block_delete BEFORE DELETE ON {schema}.{ledger_table}
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

Corrections to ledger entries are made via compensating entries (reversals), not edits.

### 3.5 Encryption-Sensitive Fields

Sensitive fields are encrypted at the column level using AES-256-GCM. The application encrypts before writing and decrypts after reading. The database stores ciphertext as `BYTEA`.

**Encrypted field convention:**

| Field Type | Column | Storage |
|---|---|---|
| Password hashes | `password_hash` | `TEXT` (Argon2id hash — not reversible) |
| TOTP secrets | `secret_enc` | `BYTEA` (AES-256-GCM) |
| KYC evidence refs | `evidence_ref_enc` | `BYTEA` (AES-256-GCM) |
| API credentials | `credential_enc` | `BYTEA` (AES-256-GCM) |
| Payment data | `payment_data_enc` | `BYTEA` (AES-256-GCM) |

Encryption keys are managed by the Secrets Manager (SAD-1 Ch.8; SDD-1 Ch.4). Keys are never stored in the database.

### 3.6 Retention and Archival

| Data Category | Retention Period | Archival | Deletion |
|---|---|---|---|
| Financial ledgers | Permanent | Never | Never |
| K-Points ledger | Permanent | Never | Never |
| Audit log | Permanent | Never | Never |
| Reserve records | Permanent | Never | Never |
| Coronation records | Permanent | Never | Never |
| KYC evidence | 7 years (regulatory) | Year 3+ to cold storage | Year 7 |
| Session data | 90 days | No | After 90 days |
| Notification log | 1 year | Year 1 to archive | Year 2 |
| Analytics snapshots | 2 years | Year 1 to cold storage | Year 2 |
| API request logs | 90 days | No | After 90 days |
| Cart data | 30 days | No | After 30 days |
| Soft-deleted records | 90 days | No | Purged after 90 days |

Retention is enforced by scheduled jobs (pg_cron or application-level scheduler) that archive and purge according to the above schedule.

### 3.7 Idempotency

Every state-changing operation that may be retried uses an idempotency key. The `shared.idempotency_keys` table stores the key and the result of the first execution.

```sql
CREATE TABLE shared.idempotency_keys (
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

CREATE INDEX ix_shared_idempotency_keys_account
    ON shared.idempotency_keys (account_id, operation);
```

### 3.8 Tenant Isolation

For the Integration Engine, partner data is isolated at the database level. Each partner's data is scoped by `partner_id`. RLS policies enforce that a partner can only access their own data.

```sql
-- Partner-scoped RLS policy
CREATE POLICY partner_isolation ON igr.api_request_logs
    FOR ALL
    USING (partner_id = current_setting('app.current_partner_id')::UUID);
```

### 3.9 Index Strategy

Indexes are created for:

1. **Primary keys** — automatically indexed by PostgreSQL.
2. **Foreign keys** — explicitly indexed for join performance.
3. **Frequently queried columns** — `status`, `created_at`, `account_id`, `vendor_id`, `course_id`, etc.
4. **Unique business constraints** — email, phone, referral code, username, team name.
5. **Partial indexes** — on non-deleted records (`WHERE is_deleted = FALSE`).
6. **Composite indexes** — for multi-column query patterns (e.g., `account_id` + `cycle_id`).
7. **GIN indexes** — on `JSONB` columns that are queried.

### 3.10 Governing Requirement Traceability

SAD-1 v1.0 Chapter 24 (Security Architecture), Chapter 26 (Data Architecture); SDD-1 v1.0 Chapter 3 (Cross-Cutting Design Controls), Chapter 20 (Security and Performance Design); SRS-1 v2.0 SRS-NFR-004 (Security), SRS-NFR-006 (Auditability), SRS-NFR-011 (Data Integrity); PLC-1 v2.0 Ch.15, 27; KR-1 KR-ECO-006 (Prohibition of Over-Allocation), KR-FND-015 (Reconstructability).

---

# Part II — Database Architecture

## Chapter 4 — Database Architecture Overview

### 4.1 Architecture Principles

The K-NETWORK database architecture follows the per-engine data ownership principle (SAD-1 ADR-002; SAD-1 Ch.26): each engine owns its schema, and no engine directly accesses another engine's tables. All eleven engines reside in a single PostgreSQL cluster, organized into separate schemas. The network graph uses a graph database (Neo4j reference) for traversals, with a relational projection in PostgreSQL for persistence and audit.

### 4.2 Schema Map

```
K-NETWORK PostgreSQL Cluster
├── shared/          — Cross-cutting: audit_log, outbox, event_store, idempotency_keys, encryption_vault
├── idm/             — Identity Engine: accounts, sessions, kyc_verifications, mfa_enrollments
├── tru/             — Trust Engine: trust_scores, trust_signals, trust_history, trust_recoveries
├── com/             — Commerce Engine: vendors, stores, products, variants, categories, attributes, inventory, carts, orders, order_items, shipments, returns, refunds, disputes, reviews, promotions, settlements
├── svc/             — Services Engine: providers, skills, provider_skills, portfolio_items, service_listings, service_packages, service_requests, proposals, contracts, milestones, deliveries, service_reviews, service_settlements
├── krw/             — K-Rewards Engine: kpoint_categories, kpoints_ledger, lifetime_statistics, klevel_definitions, klevel_progression, klevel_history, ring_members, ring_activity, ring_contributions, reward_cycles, reward_pools, reward_distributions, reward_statements, reconciliation_records
├── wal/             — Wallet/Payments Engine: wallets, wallet_transactions, wallet_holds, settlements, reserve_holdings, reversals
├── msg/             — Communication Engine: notifications, notification_preferences, messages, announcements, community_contributions
├── int/             — Intelligence Engine: behavioral_signals, recommendations, fraud_signals, analytics_snapshots
├── adm/             — Administration Engine: governance_reviews, policy_enforcements, moderation_cases, disputes, sanctions, appeals, compliance_flags
├── igr/             — Integration Engine: partners, api_clients, api_credentials, api_scopes, webhook_endpoints, webhook_deliveries, event_subscriptions, api_versions, api_request_logs
├── lrn/             — Learning Engine: instructors, courses, programmes, learning_paths, modules, lessons, lesson_content, external_media, enrollments, lesson_progress, assessments, questions, assessment_attempts, assignments, assignment_submissions, grades, certificates, course_reviews
├── graph/           — Network Graph: graph_nodes, graph_edges, ring_memberships, leadership_qualifications, team_memberships
├── roy/             — Royal Identity: royal_identities, title_history, coronation_records, coronation_categories
└── econ/            — 90/10 Accounting: source_transactions, reserve_allocations, allocation_pool_entries, distribution_entries, settlement_links, cycle_reconciliations, allocation_rate_config
```

### 4.3 PostgreSQL Extensions

The following extensions are required:

```sql
CREATE EXTENSION IF NOT EXISTS "pgcrypto";          -- gen_random_uuid(), digest()
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";          -- UUID generation (alternative)
CREATE EXTENSION IF NOT EXISTS "pg_trgm";            -- Trigram search for text matching
CREATE EXTENSION IF NOT EXISTS "btree_gin";          -- GIN indexes on btree types
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements"; -- Query performance monitoring
CREATE EXTENSION IF NOT EXISTS "pg_cron";            -- Scheduled maintenance jobs
```

### 4.4 Cross-Engine Data Access

Cross-engine data access follows two patterns (SAD-1 Ch.26.4; SDD-1 Ch.5):

1. **Synchronous (API calls)** — for queries and commands requiring an immediate response. The calling engine calls the other engine's API; it does not access the other engine's database.
2. **Asynchronous (events)** — for notifications and eventual consistency. The publishing engine writes to its outbox table; a relay publishes the event to the event bus; the consuming engine reads and processes the event.

**No foreign keys cross engine schema boundaries.** Cross-engine references use UUID columns with application-level validation, not database-level foreign key constraints. This enforces the per-engine data ownership boundary at the database level.

### 4.5 Shared Identity Reference

All engines reference accounts by `account_id` (UUID). The `idm.accounts` table is the sole source of truth for account identity. Other engines store `account_id` as a plain UUID column — not a foreign key — and validate the account's existence through the Identity Engine's API at the application level.

### 4.6 Governing Requirement Traceability

SAD-1 v1.0 Chapter 26 (Data Architecture), ADR-002 (Per-engine data ownership); SDD-1 v1.0 Chapter 4 (Shared Infrastructure), Chapter 5 (Cross-Engine Communication); SRS-1 v2.0 SRS-NFR-011 (Data Integrity); PLC-1 v2.0 Ch.9 (One Ecosystem), Ch.12 (Engine Architecture).

---

## Chapter 5 — Shared Schema Design

### 5.1 Overview

The `shared` schema contains cross-cutting tables consumed by all engines. These tables implement the outbox pattern, event store, audit log, idempotency keys, and encryption vault reference.

### 5.2 Outbox Table

The outbox table stores events that must be published to the event bus atomically with the business operation. A relay process reads unpublished events and publishes them.

```sql
CREATE SCHEMA IF NOT EXISTS shared;

CREATE TABLE shared.outbox (
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

CREATE INDEX ix_shared_outbox_status_created
    ON shared.outbox (status, created_at)
    WHERE status = 'PENDING';

CREATE INDEX ix_shared_outbox_aggregate
    ON shared.outbox (aggregate_type, aggregate_id);
```

### 5.3 Event Store Table

The event store is the durable record of all events that have been published to the event bus. It is append-only.

```sql
CREATE TABLE shared.event_store (
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

CREATE INDEX ix_shared_event_store_type
    ON shared.event_store (event_type, published_at);

CREATE INDEX ix_shared_event_store_aggregate
    ON shared.event_store (aggregate_type, aggregate_id);

-- Append-only protection
CREATE TRIGGER trg_block_update_event_store BEFORE UPDATE ON shared.event_store
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
CREATE TRIGGER trg_block_delete_event_store BEFORE DELETE ON shared.event_store
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

### 5.4 Audit Log Table

Defined in Chapter 3, Section 3.2. The audit log resides in the `shared` schema and is append-only with hash chaining.

### 5.5 Idempotency Keys Table

Defined in Chapter 3, Section 3.7.

### 5.6 Encryption Vault Reference Table

The encryption vault reference table tracks which encryption key was used for each encrypted field, enabling key rotation.

```sql
CREATE TABLE shared.encryption_key_registry (
    key_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key_version       INTEGER NOT NULL,
    key_purpose        TEXT NOT NULL CHECK (key_purpose IN (
                        'CREDENTIAL', 'KYC_EVIDENCE', 'PAYMENT_DATA',
                        'API_SECRET', 'TOTP_SECRET', 'GENERAL'
                    )),
    key_reference     TEXT NOT NULL,  -- Reference to Secrets Manager (not the key itself)
    status            TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'ROTATED', 'REVOKED')),
    activated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    rotated_at        TIMESTAMPTZ,
    rotated_from      UUID REFERENCES shared.encryption_key_registry(key_id)
);

CREATE UNIQUE INDEX uq_shared_encryption_key_registry_version
    ON shared.encryption_key_registry (key_purpose, key_version);
```

### 5.7 Sequence Generators

PostgreSQL sequences are used for human-readable reference numbers (order numbers, transaction numbers, settlement numbers). Each engine that needs sequential numbers defines its own sequence.

```sql
-- Example: Commerce order number sequence
CREATE SEQUENCE com.order_number_seq START 1000001;

-- Example: Wallet transaction reference sequence
CREATE SEQUENCE wal.transaction_ref_seq START 1000001;
```

### 5.8 Shared Functions

```sql
-- Function to generate UUID
-- gen_random_uuid() is provided by pgcrypto extension

-- Function to compute SHA-256 hash (provided by pgcrypto digest function)
-- Usage: encode(digest(data, 'sha256'), 'hex')

-- Block mutation function (defined in Chapter 3, Section 3.4)
-- shared.fn_block_mutation()

-- Audit trigger function (defined in Chapter 3, Section 3.2)
-- shared.fn_audit_trigger()
```

### 5.9 Governing Requirement Traceability

SAD-1 v1.0 Chapter 8 (Shared Services), Chapter 26 (Data Architecture); SDD-1 v1.0 Chapter 4 (Shared Infrastructure), Chapter 5 (Cross-Engine Communication); SRS-1 v2.0 SRS-NFR-009 (Observability), SRS-NFR-010 (Resilience).

---

# Part III — Engine Schemas

## Chapter 6 — Identity Engine Schema

### 6.1 Overview

The Identity Engine schema (`idm`) is the sole authority for account management, authentication, and identity verification. It stores accounts, sessions, KYC verifications, and MFA enrollments. All other engines reference `account_id` as a plain UUID — no cross-schema foreign keys.

Implements: SRS-IDM-001–007; SDD-1 Ch.6; SAD-1 Ch.9; PLC-1 Ch.13.

### 6.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS idm;
```

### 6.3 Table Definitions

#### 6.3.1 accounts

The account table is the sole source of truth for participant identity.

```sql
CREATE TABLE idm.accounts (
    account_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email             VARCHAR(255) NOT NULL,
    phone             VARCHAR(30),
    password_hash     TEXT NOT NULL,
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

-- Unique constraints (partial — exclude soft-deleted)
CREATE UNIQUE INDEX uq_idm_accounts_email
    ON idm.accounts (email)
    WHERE is_deleted = FALSE;

CREATE UNIQUE INDEX uq_idm_accounts_phone
    ON idm.accounts (phone)
    WHERE is_deleted = FALSE AND phone IS NOT NULL;

CREATE UNIQUE INDEX uq_idm_accounts_referral_code
    ON idm.accounts (referral_code)
    WHERE is_deleted = FALSE AND referral_code IS NOT NULL;

-- Indexes
CREATE INDEX ix_idm_accounts_referred_by ON idm.accounts (referred_by);
CREATE INDEX ix_idm_accounts_status ON idm.accounts (status);
CREATE INDEX ix_idm_accounts_kyc_tier ON idm.accounts (kyc_tier);

-- RLS
ALTER TABLE idm.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE idm.accounts FORCE ROW LEVEL SECURITY;

CREATE POLICY accounts_owner_select ON idm.accounts
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY accounts_admin_all ON idm.accounts
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

-- Audit trigger
CREATE TRIGGER trg_audit_accounts
    AFTER INSERT OR UPDATE OR DELETE ON idm.accounts
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

-- Updated_at trigger
CREATE OR REPLACE FUNCTION idm.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_accounts_updated_at
    BEFORE UPDATE ON idm.accounts
    FOR EACH ROW EXECUTE FUNCTION idm.fn_set_updated_at();
```

#### 6.3.2 kyc_verifications

```sql
CREATE TABLE idm.kyc_verifications (
    verification_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    tier               TEXT NOT NULL CHECK (tier IN ('TIER_1', 'TIER_2', 'TIER_3')),
    status             TEXT NOT NULL CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED', 'EXPIRED')),
    evidence_type      TEXT NOT NULL CHECK (evidence_type IN (
                        'GOVERNMENT_ID', 'UTILITY_BILL', 'SELFIE', 'PROOF_OF_ADDRESS')),
    evidence_ref_enc   BYTEA NOT NULL,  -- AES-256-GCM encrypted reference to evidence storage
    encryption_key_id  UUID NOT NULL REFERENCES shared.encryption_key_registry(key_id),
    submitted_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    reviewed_at        TIMESTAMPTZ,
    reviewed_by        UUID,  -- Compliance officer account_id
    expires_at         TIMESTAMPTZ,
    rejection_reason   TEXT,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_idm_kyc_verifications_account ON idm.kyc_verifications (account_id);
CREATE INDEX ix_idm_kyc_verifications_status ON idm.kyc_verifications (status);

ALTER TABLE idm.kyc_verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE idm.kyc_verifications FORCE ROW LEVEL SECURITY;

CREATE POLICY kyc_owner_select ON idm.kyc_verifications
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY kyc_compliance_all ON idm.kyc_verifications
    FOR ALL
    TO compliance_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_kyc_verifications
    AFTER INSERT OR UPDATE OR DELETE ON idm.kyc_verifications
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 6.3.3 sessions

```sql
CREATE TABLE idm.sessions (
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

CREATE UNIQUE INDEX uq_idm_sessions_token_hash ON idm.sessions (token_hash);
CREATE INDEX ix_idm_sessions_account ON idm.sessions (account_id);
CREATE INDEX ix_idm_sessions_status ON idm.sessions (status)
    WHERE status = 'ACTIVE';

ALTER TABLE idm.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE idm.sessions FORCE ROW LEVEL SECURITY;

CREATE POLICY sessions_owner_select ON idm.sessions
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY sessions_admin_all ON idm.sessions
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_sessions
    AFTER INSERT OR UPDATE OR DELETE ON idm.sessions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 6.3.4 mfa_enrollments

```sql
CREATE TABLE idm.mfa_enrollments (
    enrollment_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    method             TEXT NOT NULL CHECK (method IN ('TOTP', 'SMS', 'EMAIL')),
    secret_enc         BYTEA,  -- AES-256-GCM encrypted TOTP secret (if TOTP)
    encryption_key_id  UUID REFERENCES shared.encryption_key_registry(key_id),
    phone              VARCHAR(30),  -- If SMS
    email              VARCHAR(255),  -- If EMAIL
    status             TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'DISABLED')),
    enrolled_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_idm_mfa_enrollments_account ON idm.mfa_enrollments (account_id);
CREATE INDEX ix_idm_mfa_enrollments_status ON idm.mfa_enrollments (status)
    WHERE status = 'ACTIVE';

ALTER TABLE idm.mfa_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE idm.mfa_enrollments FORCE ROW LEVEL SECURITY;

CREATE POLICY mfa_owner_select ON idm.mfa_enrollments
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY mfa_admin_all ON idm.mfa_enrollments
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_mfa_enrollments
    AFTER INSERT OR UPDATE OR DELETE ON idm.mfa_enrollments
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

### 6.4 Identity Enums

```sql
-- Account status
-- PENDING: email/phone not yet verified
-- ACTIVE: verified and operational
-- SUSPENDED: temporarily disabled by admin
-- DELETED: soft-deleted by user

-- KYC tier
-- TIER_0: no verification
-- TIER_1: basic (email/phone verified)
-- TIER_2: identity verified (government ID)
-- TIER_3: enhanced (proof of address + selfie)
```

### 6.5 Retention

| Table | Retention | Notes |
|---|---|---|
| accounts | Permanent | Soft-deleted accounts retained 90 days then purged (PII removed) |
| kyc_verifications | 7 years | Evidence moved to cold storage after 3 years |
| sessions | 90 days | Expired sessions purged |
| mfa_enrollments | Permanent | While account is active |

### 6.6 Governing Requirement Traceability

SRS-IDM-001 (account registration), SRS-IDM-002 (authentication), SRS-IDM-003 (session management), SRS-IDM-004 (KYC verification), SRS-IDM-005 (MFA), SRS-IDM-006 (identity sharing), SRS-IDM-007 (account lifecycle); SDD-1 Ch.6; SAD-1 Ch.9; PLC-1 Ch.13.

---

## Chapter 7 — Trust Engine Schema

### 7.1 Overview

The Trust Engine schema (`tru`) stores trust scores, trust signals, trust history, and trust recovery records. Trust Scores are recalculated from signals and cached; trust history is append-only.

Implements: SRS-TRU-001–005; SDD-1 Ch.7; SAD-1 Ch.10; PLC-1 Ch.14; KR-1 KR-TRU-001–011, Ch.40–43.

### 7.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS tru;
```

### 7.3 Table Definitions

#### 7.3.1 trust_scores

```sql
CREATE TABLE tru.trust_scores (
    account_id         UUID PRIMARY KEY,
    trust_score        NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    score_tier         TEXT NOT NULL DEFAULT 'UNVERIFIED'
                        CHECK (score_tier IN (
                            'UNVERIFIED', 'BUILDING', 'ESTABLISHED',
                            'TRUSTED', 'HIGHLY_TRUSTED'
                        )),
    signal_count       INTEGER NOT NULL DEFAULT 0,
    last_recalculated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    is_frozen          BOOLEAN NOT NULL DEFAULT FALSE,
    frozen_reason      TEXT,
    frozen_at          TIMESTAMPTZ,
    version            INTEGER NOT NULL DEFAULT 1,
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_tru_trust_scores_score_tier ON tru.trust_scores (score_tier);
CREATE INDEX ix_tru_trust_scores_trust_score ON tru.trust_scores (trust_score);

ALTER TABLE tru.trust_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE tru.trust_scores FORCE ROW LEVEL SECURITY;

CREATE POLICY trust_scores_owner_select ON tru.trust_scores
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY trust_scores_admin_all ON tru.trust_scores
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_trust_scores
    AFTER INSERT OR UPDATE OR DELETE ON tru.trust_scores
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

CREATE OR REPLACE FUNCTION tru.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_trust_scores_updated_at
    BEFORE UPDATE ON tru.trust_scores
    FOR EACH ROW EXECUTE FUNCTION tru.fn_set_updated_at();
```

#### 7.3.2 trust_signals

```sql
CREATE TABLE tru.trust_signals (
    signal_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    signal_type        TEXT NOT NULL CHECK (signal_type IN (
                        'TRANSACTION_COMPLETED', 'REVIEW_RECEIVED',
                        'KYC_VERIFIED', 'DISPUTE_RESOLVED_FAVORABLY',
                        'DISPUTE_RESOLVED_UNFAVORABLY', 'REFUND_ISSUED',
                        'LATE_DELIVERY', 'ORDER_CANCELLED',
                        'FRAUD_FLAG', 'SANCTION_APPLIED',
                        'COMMUNITY_CONTRIBUTION', 'MILESTONE_COMPLETED',
                        'ASSESSMENT_PASSED', 'CERTIFICATE_ISSUED'
                    )),
    signal_value       NUMERIC(5,2) NOT NULL,  -- Positive or negative contribution
    signal_source      TEXT NOT NULL,  -- Engine that raised the signal
    source_reference   UUID,  -- ID of the source event/transaction
    description        TEXT,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    is_reversed        BOOLEAN NOT NULL DEFAULT FALSE,
    reversed_at        TIMESTAMPTZ
);

CREATE INDEX ix_tru_trust_signals_account ON tru.trust_signals (account_id);
CREATE INDEX ix_tru_trust_signals_type ON tru.trust_signals (signal_type);
CREATE INDEX ix_tru_trust_signals_created ON tru.trust_signals (created_at);

ALTER TABLE tru.trust_signals ENABLE ROW LEVEL SECURITY;
ALTER TABLE tru.trust_signals FORCE ROW LEVEL SECURITY;

CREATE POLICY trust_signals_owner_select ON tru.trust_signals
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY trust_signals_admin_all ON tru.trust_signals
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_trust_signals
    AFTER INSERT OR UPDATE OR DELETE ON tru.trust_signals
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 7.3.3 trust_history

Append-only history of trust score changes.

```sql
CREATE TABLE tru.trust_history (
    history_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    previous_score     NUMERIC(5,2) NOT NULL,
    new_score          NUMERIC(5,2) NOT NULL,
    delta              NUMERIC(5,2) NOT NULL,
    trigger_signal_id  UUID,  -- Reference to the signal that caused the change
    changed_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    audit_hash         VARCHAR(64) NOT NULL
);

CREATE INDEX ix_tru_trust_history_account ON tru.trust_history (account_id);
CREATE INDEX ix_tru_trust_history_changed ON tru.trust_history (changed_at);

ALTER TABLE tru.trust_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE tru.trust_history FORCE ROW LEVEL SECURITY;

CREATE POLICY trust_history_owner_select ON tru.trust_history
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY trust_history_admin_all ON tru.trust_history
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

-- Append-only protection
CREATE TRIGGER trg_block_update_trust_history BEFORE UPDATE ON tru.trust_history
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
CREATE TRIGGER trg_block_delete_trust_history BEFORE DELETE ON tru.trust_history
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

#### 7.3.4 trust_recoveries

```sql
CREATE TABLE tru.trust_recoveries (
    recovery_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    recovery_start_score NUMERIC(5,2) NOT NULL,
    recovery_target_score NUMERIC(5,2) NOT NULL,
    current_score      NUMERIC(5,2) NOT NULL,
    recovery_status    TEXT NOT NULL DEFAULT 'IN_PROGRESS'
                        CHECK (recovery_status IN ('IN_PROGRESS', 'COMPLETED', 'ABANDONED')),
    recovery_actions   JSONB NOT NULL DEFAULT '[]',  -- Actions required for recovery
    started_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at       TIMESTAMPTZ,
    version            INTEGER NOT NULL DEFAULT 1,
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_tru_trust_recoveries_account ON tru.trust_recoveries (account_id);
CREATE INDEX ix_tru_trust_recoveries_status ON tru.trust_recoveries (recovery_status)
    WHERE recovery_status = 'IN_PROGRESS';

ALTER TABLE tru.trust_recoveries ENABLE ROW LEVEL SECURITY;
ALTER TABLE tru.trust_recoveries FORCE ROW LEVEL SECURITY;

CREATE POLICY trust_recoveries_owner_select ON tru.trust_recoveries
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY trust_recoveries_admin_all ON tru.trust_recoveries
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_trust_recoveries
    AFTER INSERT OR UPDATE OR DELETE ON tru.trust_recoveries
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

### 7.4 Trust Gate Thresholds (GOVERNANCE PARAMETERS)

Trust gate thresholds are GOVERNANCE PARAMETERS owned by KR-1. They are stored in a configuration table and referenced by application logic, not hard-coded.

```sql
CREATE TABLE tru.trust_gate_thresholds (
    gate_name          TEXT PRIMARY KEY,
    gate_description   TEXT NOT NULL,
    min_trust_score    NUMERIC(5,2) NOT NULL,
    kr_rule_id         TEXT NOT NULL,  -- KR-1 rule reference
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed data (values are GOVERNANCE PARAMETERS from KR-1)
-- See Chapter 21 (Seed Data) for actual seed values
```

### 7.5 Retention

| Table | Retention | Notes |
|---|---|---|
| trust_scores | Permanent | Updated in place |
| trust_signals | 2 years | Purged after 2 years |
| trust_history | Permanent | Append-only |
| trust_recoveries | Permanent | |
| trust_gate_thresholds | Permanent | Configuration table |

### 7.6 Governing Requirement Traceability

SRS-TRU-001 (trust score calculation), SRS-TRU-002 (trust signals), SRS-TRU-003 (trust gates), SRS-TRU-004 (trust recovery), SRS-TRU-005 (trust integration); SDD-1 Ch.7; SAD-1 Ch.10; PLC-1 Ch.14; KR-1 KR-TRU-001–011, Ch.40–43.

---

## Chapter 8 — Commerce Engine Schema

### 8.1 Overview

The Commerce Engine schema (`com`) stores the complete multi-vendor marketplace data: vendors, stores, products, variants, categories, attributes, inventory, carts, orders, order items, shipments, returns, refunds, disputes, reviews, promotions, and settlements. Inventory uses row-level locking (PCC). Orders and settlements use optimistic concurrency (OCC).

Implements: SRS-COM-001–022; SDD-1 Ch.8; SAD-1 Ch.11; PLC-1 Ch.28; KR-1 KR-TRU-007, KR-ECO-014.

### 8.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS com;
```

### 8.3 Table Definitions

#### 8.3.1 vendors

```sql
CREATE TABLE com.vendors (
    vendor_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,  -- Vendor owner
    vendor_name        VARCHAR(200) NOT NULL,
    vendor_slug        VARCHAR(200) NOT NULL,
    description        TEXT,
    status             TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'ACTIVE', 'SUSPENDED', 'DEACTIVATED')),
    trust_score_required NUMERIC(5,2) NOT NULL DEFAULT 40.00,
    is_verified        BOOLEAN NOT NULL DEFAULT FALSE,
    verified_at       TIMESTAMPTZ,
    is_deleted         BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at         TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_com_vendors_slug
    ON com.vendors (vendor_slug)
    WHERE is_deleted = FALSE;

CREATE UNIQUE INDEX uq_com_vendors_account
    ON com.vendors (account_id)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_com_vendors_status ON com.vendors (status);

ALTER TABLE com.vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.vendors FORCE ROW LEVEL SECURITY;

CREATE POLICY vendors_owner_all ON com.vendors
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY vendors_admin_all ON com.vendors
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_vendors
    AFTER INSERT OR UPDATE OR DELETE ON com.vendors
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

CREATE OR REPLACE FUNCTION com.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_vendors_updated_at
    BEFORE UPDATE ON com.vendors
    FOR EACH ROW EXECUTE FUNCTION com.fn_set_updated_at();
```

#### 8.3.2 stores

```sql
CREATE TABLE com.stores (
    store_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vendor_id          UUID NOT NULL REFERENCES com.vendors(vendor_id),
    store_name         VARCHAR(200) NOT NULL,
    store_slug         VARCHAR(200) NOT NULL,
    description        TEXT,
    logo_url           VARCHAR(500),
    banner_url         VARCHAR(500),
    status             TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'SUSPENDED', 'CLOSED')),
    is_deleted         BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at         TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_com_stores_slug
    ON com.stores (vendor_id, store_slug)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_com_stores_vendor ON com.stores (vendor_id);

ALTER TABLE com.stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.stores FORCE ROW LEVEL SECURITY;

CREATE POLICY stores_vendor_all ON com.stores
    FOR ALL
    USING (vendor_id IN (
        SELECT vendor_id FROM com.vendors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (vendor_id IN (
        SELECT vendor_id FROM com.vendors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY stores_admin_all ON com.stores
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_stores
    AFTER INSERT OR UPDATE OR DELETE ON com.stores
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.3 categories

```sql
CREATE TABLE com.categories (
    category_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id          UUID REFERENCES com.categories(category_id),
    category_name      VARCHAR(200) NOT NULL,
    category_slug      VARCHAR(200) NOT NULL,
    description        TEXT,
    sort_order         INTEGER NOT NULL DEFAULT 0,
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_com_categories_slug
    ON com.categories (parent_id, category_slug);

CREATE INDEX ix_com_categories_parent ON com.categories (parent_id);
CREATE INDEX ix_com_categories_active ON com.categories (is_active)
    WHERE is_active = TRUE;

ALTER TABLE com.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY categories_public_select ON com.categories
    FOR SELECT
    USING (is_active = TRUE);

CREATE POLICY categories_admin_all ON com.categories
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_categories
    AFTER INSERT OR UPDATE OR DELETE ON com.categories
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.4 products

```sql
CREATE TABLE com.products (
    product_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vendor_id          UUID NOT NULL REFERENCES com.vendors(vendor_id),
    store_id           UUID REFERENCES com.stores(store_id),
    category_id        UUID REFERENCES com.categories(category_id),
    product_name       VARCHAR(500) NOT NULL,
    product_slug       VARCHAR(500) NOT NULL,
    description        TEXT,
    status             TEXT NOT NULL DEFAULT 'DRAFT'
                        CHECK (status IN ('DRAFT', 'PUBLISHED', 'UNPUBLISHED', 'DISCONTINUED')),
    base_price         NUMERIC(20,2) NOT NULL,
    currency           VARCHAR(3) NOT NULL DEFAULT 'USD',
    has_variants       BOOLEAN NOT NULL DEFAULT FALSE,
    is_deleted         BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at         TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_com_products_slug
    ON com.products (vendor_id, product_slug)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_com_products_vendor ON com.products (vendor_id);
CREATE INDEX ix_com_products_category ON com.products (category_id);
CREATE INDEX ix_com_products_status ON com.products (status)
    WHERE status = 'PUBLISHED';

ALTER TABLE com.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.products FORCE ROW LEVEL SECURITY;

CREATE POLICY products_public_select ON com.products
    FOR SELECT
    USING (status = 'PUBLISHED');

CREATE POLICY products_vendor_all ON com.products
    FOR ALL
    USING (vendor_id IN (
        SELECT vendor_id FROM com.vendors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (vendor_id IN (
        SELECT vendor_id FROM com.vendors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY products_admin_all ON com.products
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_products
    AFTER INSERT OR UPDATE OR DELETE ON com.products
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.5 product_variants

```sql
CREATE TABLE com.product_variants (
    variant_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id         UUID NOT NULL REFERENCES com.products(product_id),
    sku                VARCHAR(100) NOT NULL,
    variant_name       VARCHAR(500) NOT NULL,
    price              NUMERIC(20,2) NOT NULL,
    currency           VARCHAR(3) NOT NULL DEFAULT 'USD',
    attributes         JSONB NOT NULL DEFAULT '{}',  -- Variant attributes as key-value pairs
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_com_product_variants_sku
    ON com.product_variants (product_id, sku);

CREATE INDEX ix_com_product_variants_product ON com.product_variants (product_id);

ALTER TABLE com.product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.product_variants FORCE ROW LEVEL SECURITY;

CREATE POLICY product_variants_public_select ON com.product_variants
    FOR SELECT
    USING (is_active = TRUE);

CREATE POLICY product_variants_vendor_all ON com.product_variants
    FOR ALL
    USING (product_id IN (
        SELECT p.product_id FROM com.products p
        JOIN com.vendors v ON p.vendor_id = v.vendor_id
        WHERE v.account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (product_id IN (
        SELECT p.product_id FROM com.products p
        JOIN com.vendors v ON p.vendor_id = v.vendor_id
        WHERE v.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY product_variants_admin_all ON com.product_variants
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_product_variants
    AFTER INSERT OR UPDATE OR DELETE ON com.product_variants
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.6 product_attributes

```sql
CREATE TABLE com.product_attributes (
    product_attribute_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id          UUID NOT NULL REFERENCES com.products(product_id),
    attribute_name      VARCHAR(200) NOT NULL,
    attribute_value     TEXT NOT NULL,
    attribute_type      TEXT NOT NULL DEFAULT 'TEXT'
                        CHECK (attribute_type IN ('TEXT', 'NUMBER', 'BOOLEAN', 'DATE', 'SELECT')),
    sort_order          INTEGER NOT NULL DEFAULT 0,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_com_product_attributes_product
    ON com.product_attributes (product_id, attribute_name);

ALTER TABLE com.product_attributes ENABLE ROW LEVEL SECURITY;

CREATE POLICY product_attributes_public_select ON com.product_attributes
    FOR SELECT
    USING (true);

CREATE POLICY product_attributes_admin_all ON com.product_attributes
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);
```

#### 8.3.7 inventory

Inventory uses pessimistic concurrency (row-level locking) for concurrent stock operations.

```sql
CREATE TABLE com.inventory (
    inventory_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id         UUID NOT NULL REFERENCES com.products(product_id),
    variant_id         UUID REFERENCES com.product_variants(variant_id),
    quantity_available INTEGER NOT NULL DEFAULT 0,
    quantity_reserved  INTEGER NOT NULL DEFAULT 0,
    low_stock_threshold INTEGER NOT NULL DEFAULT 5,
    warehouse_location VARCHAR(200),
    version            INTEGER NOT NULL DEFAULT 1,
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_com_inventory_product_variant
    ON com.inventory (product_id, COALESCE(variant_id, '00000000-0000-0000-0000-000000000000'::UUID));

CREATE INDEX ix_com_inventory_low_stock ON com.inventory (quantity_available)
    WHERE quantity_available <= 5;

ALTER TABLE com.inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.inventory FORCE ROW LEVEL SECURITY;

CREATE POLICY inventory_public_select ON com.inventory
    FOR SELECT
    USING (true);

CREATE POLICY inventory_vendor_update ON com.inventory
    FOR UPDATE
    USING (product_id IN (
        SELECT p.product_id FROM com.products p
        JOIN com.vendors v ON p.vendor_id = v.vendor_id
        WHERE v.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY inventory_admin_all ON com.inventory
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

-- Check constraint: available cannot be negative
ALTER TABLE com.inventory
    ADD CONSTRAINT ck_com_inventory_non_negative
    CHECK (quantity_available >= 0 AND quantity_reserved >= 0);

CREATE TRIGGER trg_audit_inventory
    AFTER INSERT OR UPDATE OR DELETE ON com.inventory
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.8 carts

```sql
CREATE TABLE com.carts (
    cart_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    status             TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'ABANDONED', 'CONVERTED')),
    currency           VARCHAR(3) NOT NULL DEFAULT 'USD',
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at         TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '30 days')
);

CREATE INDEX ix_com_carts_account ON com.carts (account_id);
CREATE INDEX ix_com_carts_status ON com.carts (status)
    WHERE status = 'ACTIVE';

ALTER TABLE com.carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.carts FORCE ROW LEVEL SECURITY;

CREATE POLICY carts_owner_all ON com.carts
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY carts_admin_all ON com.carts
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);
```

#### 8.3.9 cart_items

```sql
CREATE TABLE com.cart_items (
    cart_item_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cart_id            UUID NOT NULL REFERENCES com.carts(cart_id),
    product_id         UUID NOT NULL REFERENCES com.products(product_id),
    variant_id         UUID REFERENCES com.product_variants(variant_id),
    quantity           INTEGER NOT NULL CHECK (quantity > 0),
    unit_price         NUMERIC(20,2) NOT NULL,
    added_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_com_cart_items_cart ON com.cart_items (cart_id);

ALTER TABLE com.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.cart_items FORCE ROW LEVEL SECURITY;

CREATE POLICY cart_items_owner_all ON com.cart_items
    FOR ALL
    USING (cart_id IN (
        SELECT cart_id FROM com.carts
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (cart_id IN (
        SELECT cart_id FROM com.carts
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY cart_items_admin_all ON com.cart_items
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);
```

#### 8.3.10 orders

```sql
CREATE TABLE com.orders (
    order_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number       BIGINT NOT NULL DEFAULT nextval('com.order_number_seq'),
    account_id         UUID NOT NULL,
    status             TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN (
                            'PENDING', 'CONFIRMED', 'PAID', 'PROCESSING',
                            'PARTIALLY_SHIPPED', 'SHIPPED', 'DELIVERED',
                            'CANCELLED', 'REFUNDED', 'PARTIALLY_REFUNDED'
                        )),
    subtotal           NUMERIC(20,2) NOT NULL,
    shipping_cost      NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    tax_amount         NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    discount_amount    NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    total_amount       NUMERIC(20,2) NOT NULL,
    currency           VARCHAR(3) NOT NULL DEFAULT 'USD',
    payment_status     TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (payment_status IN ('PENDING', 'PAID', 'PARTIALLY_PAID', 'REFUNDED', 'PARTIALLY_REFUNDED', 'FAILED')),
    shipping_address   JSONB,
    billing_address    JSONB,
    notes              TEXT,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    confirmed_at       TIMESTAMPTZ,
    paid_at            TIMESTAMPTZ,
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_com_orders_order_number ON com.orders (order_number);
CREATE INDEX ix_com_orders_account ON com.orders (account_id);
CREATE INDEX ix_com_orders_status ON com.orders (status);

ALTER TABLE com.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.orders FORCE ROW LEVEL SECURITY;

CREATE POLICY orders_owner_select ON com.orders
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY orders_vendor_select ON com.orders
    FOR SELECT
    USING (order_id IN (
        SELECT oi.order_id FROM com.order_items oi
        JOIN com.products p ON oi.product_id = p.product_id
        JOIN com.vendors v ON p.vendor_id = v.vendor_id
        WHERE v.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY orders_admin_all ON com.orders
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_orders
    AFTER INSERT OR UPDATE OR DELETE ON com.orders
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.11 order_items

```sql
CREATE TABLE com.order_items (
    order_item_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id           UUID NOT NULL REFERENCES com.orders(order_id),
    vendor_id          UUID NOT NULL REFERENCES com.vendors(vendor_id),
    product_id         UUID NOT NULL REFERENCES com.products(product_id),
    variant_id         UUID REFERENCES com.product_variants(variant_id),
    product_name       VARCHAR(500) NOT NULL,
    quantity           INTEGER NOT NULL CHECK (quantity > 0),
    unit_price         NUMERIC(20,2) NOT NULL,
    line_total         NUMERIC(20,2) NOT NULL,
    fulfillment_status TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (fulfillment_status IN (
                            'PENDING', 'PROCESSING', 'SHIPPED',
                            'DELIVERED', 'CANCELLED', 'RETURNED'
                        )),
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_com_order_items_order ON com.order_items (order_id);
CREATE INDEX ix_com_order_items_vendor ON com.order_items (vendor_id);
CREATE INDEX ix_com_order_items_product ON com.order_items (product_id);

ALTER TABLE com.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.order_items FORCE ROW LEVEL SECURITY;

CREATE POLICY order_items_owner_select ON com.order_items
    FOR SELECT
    USING (order_id IN (
        SELECT order_id FROM com.orders
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY order_items_vendor_select ON com.order_items
    FOR SELECT
    USING (vendor_id IN (
        SELECT vendor_id FROM com.vendors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY order_items_admin_all ON com.order_items
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_order_items
    AFTER INSERT OR UPDATE OR DELETE ON com.order_items
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.12 shipments

```sql
CREATE TABLE com.shipments (
    shipment_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id           UUID NOT NULL REFERENCES com.orders(order_id),
    order_item_id      UUID REFERENCES com.order_items(order_item_id),
    vendor_id          UUID NOT NULL REFERENCES com.vendors(vendor_id),
    tracking_number    VARCHAR(200),
    carrier            VARCHAR(100),
    shipping_method    VARCHAR(100),
    status             TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'LABEL_CREATED', 'SHIPPED', 'IN_TRANSIT', 'DELIVERED', 'FAILED')),
    shipped_at         TIMESTAMPTZ,
    delivered_at       TIMESTAMPTZ,
    estimated_delivery TIMESTAMPTZ,
    shipping_address   JSONB NOT NULL,
    cost               NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_com_shipments_order ON com.shipments (order_id);
CREATE INDEX ix_com_shipments_vendor ON com.shipments (vendor_id);
CREATE INDEX ix_com_shipments_status ON com.shipments (status);
CREATE INDEX ix_com_shipments_tracking ON com.shipments (tracking_number)
    WHERE tracking_number IS NOT NULL;

ALTER TABLE com.shipments ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.shipments FORCE ROW LEVEL SECURITY;

CREATE POLICY shipments_owner_select ON com.shipments
    FOR SELECT
    USING (order_id IN (
        SELECT order_id FROM com.orders
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY shipments_vendor_all ON com.shipments
    FOR ALL
    USING (vendor_id IN (
        SELECT vendor_id FROM com.vendors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (vendor_id IN (
        SELECT vendor_id FROM com.vendors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY shipments_admin_all ON com.shipments
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_shipments
    AFTER INSERT OR UPDATE OR DELETE ON com.shipments
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.13 returns

```sql
CREATE TABLE com.returns (
    return_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id           UUID NOT NULL REFERENCES com.orders(order_id),
    order_item_id      UUID NOT NULL REFERENCES com.order_items(order_item_id),
    account_id         UUID NOT NULL,
    reason             TEXT NOT NULL CHECK (reason IN (
                        'DAMAGED', 'WRONG_ITEM', 'NOT_AS_DESCRIBED',
                        'CHANGED_MIND', 'QUALITY_ISSUE', 'OTHER'
                    )),
    description        TEXT,
    status             TEXT NOT NULL DEFAULT 'REQUESTED'
                        CHECK (status IN ('REQUESTED', 'APPROVED', 'REJECTED', 'RETURNED', 'REFUNDED', 'CLOSED')),
    refund_amount      NUMERIC(20,2),
    requested_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    approved_at        TIMESTAMPTZ,
    received_at        TIMESTAMPTZ,
    refunded_at        TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_com_returns_order ON com.returns (order_id);
CREATE INDEX ix_com_returns_account ON com.returns (account_id);
CREATE INDEX ix_com_returns_status ON com.returns (status);

ALTER TABLE com.returns ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.returns FORCE ROW LEVEL SECURITY;

CREATE POLICY returns_owner_select ON com.returns
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY returns_admin_all ON com.returns
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_returns
    AFTER INSERT OR UPDATE OR DELETE ON com.returns
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.14 refunds

```sql
CREATE TABLE com.refunds (
    refund_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id           UUID NOT NULL REFERENCES com.orders(order_id),
    return_id          UUID REFERENCES com.returns(return_id),
    account_id         UUID NOT NULL,
    refund_amount      NUMERIC(20,2) NOT NULL,
    currency           VARCHAR(3) NOT NULL DEFAULT 'USD',
    reason             TEXT,
    status             TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'PROCESSED', 'FAILED', 'REVERSED')),
    wallet_transaction_id UUID,  -- Reference to wal.wallet_transactions (no FK — cross-engine)
    processed_at       TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_com_refunds_order ON com.refunds (order_id);
CREATE INDEX ix_com_refunds_account ON com.refunds (account_id);
CREATE INDEX ix_com_refunds_status ON com.refunds (status);

ALTER TABLE com.refunds ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.refunds FORCE ROW LEVEL SECURITY;

CREATE POLICY refunds_owner_select ON com.refunds
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY refunds_admin_all ON com.refunds
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_refunds
    AFTER INSERT OR UPDATE OR DELETE ON com.refunds
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.15 disputes

```sql
CREATE TABLE com.disputes (
    dispute_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id           UUID NOT NULL REFERENCES com.orders(order_id),
    order_item_id      UUID REFERENCES com.order_items(order_item_id),
    filed_by           UUID NOT NULL,  -- Account ID of filer
    filed_against      UUID,  -- Vendor account ID
    reason             TEXT NOT NULL CHECK (reason IN (
                        'ITEM_NOT_RECEIVED', 'ITEM_NOT_AS_DESCRIBED',
                        'UNAUTHORIZED_CHARGE', 'REFUND_ISSUE',
                        'VENDOR_DISPUTE', 'OTHER'
                    )),
    description        TEXT,
    evidence           JSONB NOT NULL DEFAULT '[]',  -- Array of evidence references
    status             TEXT NOT NULL DEFAULT 'OPEN'
                        CHECK (status IN ('OPEN', 'UNDER_REVIEW', 'RESOLVED_FAVORABLY', 'RESOLVED_UNFAVORABLY', 'ESCALATED', 'CLOSED')),
    resolution         TEXT,
    resolved_by        UUID,
    resolved_at        TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_com_disputes_order ON com.disputes (order_id);
CREATE INDEX ix_com_disputes_status ON com.disputes (status);

ALTER TABLE com.disputes ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.disputes FORCE ROW LEVEL SECURITY;

CREATE POLICY disputes_participant_select ON com.disputes
    FOR SELECT
    USING (filed_by = current_setting('app.current_account_id')::UUID
           OR filed_against = current_setting('app.current_account_id')::UUID);

CREATE POLICY disputes_admin_all ON com.disputes
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_disputes
    AFTER INSERT OR UPDATE OR DELETE ON com.disputes
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.16 reviews

```sql
CREATE TABLE com.reviews (
    review_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id           UUID NOT NULL REFERENCES com.orders(order_id),
    product_id         UUID NOT NULL REFERENCES com.products(product_id),
    vendor_id          UUID NOT NULL REFERENCES com.vendors(vendor_id),
    account_id         UUID NOT NULL,
    rating             INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title              VARCHAR(500),
    body               TEXT,
    is_verified_purchase BOOLEAN NOT NULL DEFAULT TRUE,
    status             TEXT NOT NULL DEFAULT 'PUBLISHED'
                        CHECK (status IN ('PUBLISHED', 'HIDDEN', 'FLAGGED', 'REMOVED')),
    vendor_response    TEXT,
    vendor_responded_at TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_com_reviews_order_product
    ON com.reviews (order_id, product_id, account_id);

CREATE INDEX ix_com_reviews_product ON com.reviews (product_id, status);
CREATE INDEX ix_com_reviews_vendor ON com.reviews (vendor_id, status);
CREATE INDEX ix_com_reviews_rating ON com.reviews (rating);

ALTER TABLE com.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.reviews FORCE ROW LEVEL SECURITY;

CREATE POLICY reviews_public_select ON com.reviews
    FOR SELECT
    USING (status = 'PUBLISHED');

CREATE POLICY reviews_owner_all ON com.reviews
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY reviews_vendor_update ON com.reviews
    FOR UPDATE
    USING (vendor_id IN (
        SELECT vendor_id FROM com.vendors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY reviews_admin_all ON com.reviews
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_reviews
    AFTER INSERT OR UPDATE OR DELETE ON com.reviews
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.17 promotions

```sql
CREATE TABLE com.promotions (
    promotion_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vendor_id          UUID REFERENCES com.vendors(vendor_id),  -- NULL = platform-wide
    promotion_name     VARCHAR(200) NOT NULL,
    promotion_code     VARCHAR(100),
    description        TEXT,
    discount_type      TEXT NOT NULL CHECK (discount_type IN ('PERCENTAGE', 'FIXED_AMOUNT', 'FREE_SHIPPING')),
    discount_value     NUMERIC(20,2) NOT NULL,
    min_order_amount   NUMERIC(20,2) DEFAULT 0.00,
    max_discount_amount NUMERIC(20,2),
    usage_limit        INTEGER,
    usage_count        INTEGER NOT NULL DEFAULT 0,
    per_user_limit     INTEGER DEFAULT 1,
    starts_at          TIMESTAMPTZ NOT NULL,
    ends_at            TIMESTAMPTZ NOT NULL,
    status             TEXT NOT NULL DEFAULT 'SCHEDULED'
                        CHECK (status IN ('SCHEDULED', 'ACTIVE', 'EXPIRED', 'PAUSED', 'CANCELLED')),
    is_deleted         BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at         TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_com_promotions_code
    ON com.promotions (promotion_code)
    WHERE is_deleted = FALSE AND promotion_code IS NOT NULL;

CREATE INDEX ix_com_promotions_vendor ON com.promotions (vendor_id);
CREATE INDEX ix_com_promotions_status ON com.promotions (status);

ALTER TABLE com.promotions ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.promotions FORCE ROW LEVEL SECURITY;

CREATE POLICY promotions_public_select ON com.promotions
    FOR SELECT
    USING (status = 'ACTIVE' AND ends_at > NOW());

CREATE POLICY promotions_vendor_all ON com.promotions
    FOR ALL
    USING (vendor_id = current_setting('app.current_account_id')::UUID
           OR vendor_id IS NULL)
    WITH CHECK (vendor_id = current_setting('app.current_account_id')::UUID
                OR vendor_id IS NULL);

CREATE POLICY promotions_admin_all ON com.promotions
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_promotions
    AFTER INSERT OR UPDATE OR DELETE ON com.promotions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 8.3.18 commerce_settlements

Commerce settlement records linking to the Wallet Engine. Settlements reference the econ schema for 90/10 accounting.

```sql
CREATE TABLE com.commerce_settlements (
    settlement_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id           UUID NOT NULL REFERENCES com.orders(order_id),
    vendor_id          UUID NOT NULL REFERENCES com.vendors(vendor_id),
    gross_revenue      NUMERIC(20,2) NOT NULL,
    deductions         NUMERIC(20,2) NOT NULL,
    qualifying_economic_value NUMERIC(20,2) NOT NULL,
    vendor_amount      NUMERIC(20,2) NOT NULL,  -- 15% of QEV (counterparty share)
    platform_amount    NUMERIC(20,2) NOT NULL,  -- 60% of QEV (platform share)
    reward_pool_amount NUMERIC(20,2) NOT NULL,  -- 8% + 5% of QEV (rewards + leadership)
    operational_amount NUMERIC(20,2) NOT NULL,  -- 2% of QEV
    reserve_amount     NUMERIC(20,2) NOT NULL,  -- 10% of QEV
    currency           VARCHAR(3) NOT NULL DEFAULT 'USD',
    status             TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'SETTLED', 'FAILED', 'REVERSED')),
    wallet_transaction_id UUID,  -- Reference to wal.wallet_transactions (no FK)
    source_transaction_id UUID,  -- Reference to econ.source_transactions (no FK)
    settled_at         TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

-- Check constraint: allocations must sum correctly
-- Commerce waterfall: counterparty 15%, platform 60%, rewards 8%, leadership 5%, operational 2% = 90%
ALTER TABLE com.commerce_settlements
    ADD CONSTRAINT ck_com_settlement_allocation_sum
    CHECK (vendor_amount + platform_amount + reward_pool_amount + operational_amount =
           qualifying_economic_value * 0.90);

ALTER TABLE com.commerce_settlements
    ADD CONSTRAINT ck_com_settlement_reserve
    CHECK (reserve_amount = qualifying_economic_value * 0.10);

ALTER TABLE com.commerce_settlements
    ADD CONSTRAINT ck_com_settlement_qev
    CHECK (qualifying_economic_value = gross_revenue - deductions);

CREATE INDEX ix_com_commerce_settlements_order ON com.commerce_settlements (order_id);
CREATE INDEX ix_com_commerce_settlements_vendor ON com.commerce_settlements (vendor_id);
CREATE INDEX ix_com_commerce_settlements_status ON com.commerce_settlements (status);

ALTER TABLE com.commerce_settlements ENABLE ROW LEVEL SECURITY;
ALTER TABLE com.commerce_settlements FORCE ROW LEVEL SECURITY;

CREATE POLICY commerce_settlements_vendor_select ON com.commerce_settlements
    FOR SELECT
    USING (vendor_id IN (
        SELECT vendor_id FROM com.vendors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY commerce_settlements_admin_all ON com.commerce_settlements
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_commerce_settlements
    AFTER INSERT OR UPDATE OR DELETE ON com.commerce_settlements
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

### 8.4 Governing Requirement Traceability

SRS-COM-001–022; SDD-1 Ch.8; SAD-1 Ch.11; PLC-1 Ch.28; KR-1 KR-TRU-007, KR-ECO-014, KR-ECO-017.

---

## Chapter 9 — Services Engine Schema

### 9.1 Overview

The Services Engine schema (`svc`) stores the professional-services marketplace data: providers, skills, portfolios, service listings, packages, proposals, contracts, milestones, deliveries, reviews, and settlements. Contracts and milestones use optimistic concurrency (OCC).

Implements: SRS-SVC-001–019; SDD-1 Ch.9; SAD-1 Ch.12; PLC-1 Ch.29; KR-1 KR-TRU-007, KR-ECO-014.

### 9.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS svc;
```

### 9.3 Table Definitions

#### 9.3.1 providers

```sql
CREATE TABLE svc.providers (
    provider_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    provider_name      VARCHAR(200) NOT NULL,
    provider_slug      VARCHAR(200) NOT NULL,
    bio                TEXT,
    tagline            VARCHAR(500),
    status             TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'ACTIVE', 'SUSPENDED', 'DEACTIVATED')),
    trust_score_required NUMERIC(5,2) NOT NULL DEFAULT 40.00,
    is_verified        BOOLEAN NOT NULL DEFAULT FALSE,
    verified_at        TIMESTAMPTZ,
    response_time_hours INTEGER DEFAULT 24,
    languages          JSONB NOT NULL DEFAULT '[]',
    is_deleted         BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at         TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_svc_providers_slug
    ON svc.providers (provider_slug)
    WHERE is_deleted = FALSE;

CREATE UNIQUE INDEX uq_svc_providers_account
    ON svc.providers (account_id)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_svc_providers_status ON svc.providers (status);

ALTER TABLE svc.providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.providers FORCE ROW LEVEL SECURITY;

CREATE POLICY providers_owner_all ON svc.providers
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY providers_public_select ON svc.providers
    FOR SELECT
    USING (status = 'ACTIVE');

CREATE POLICY providers_admin_all ON svc.providers
    FOR ALL
    TO admin_role
    USING (true)
    WITH CHECK (true);

CREATE TRIGGER trg_audit_providers
    AFTER INSERT OR UPDATE OR DELETE ON svc.providers
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

CREATE OR REPLACE FUNCTION svc.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_providers_updated_at
    BEFORE UPDATE ON svc.providers
    FOR EACH ROW EXECUTE FUNCTION svc.fn_set_updated_at();
```

#### 9.3.2 skills

```sql
CREATE TABLE svc.skills (
    skill_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    skill_name          VARCHAR(200) NOT NULL,
    skill_slug          VARCHAR(200) NOT NULL,
    category            VARCHAR(200),
    description         TEXT,
    is_active            BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_svc_skills_slug ON svc.skills (skill_slug);
CREATE INDEX ix_svc_skills_category ON svc.skills (category);
CREATE INDEX ix_svc_skills_active ON svc.skills (is_active) WHERE is_active = TRUE;

ALTER TABLE svc.skills ENABLE ROW LEVEL SECURITY;
CREATE POLICY skills_public_select ON svc.skills FOR SELECT USING (is_active = TRUE);
CREATE POLICY skills_admin_all ON svc.skills FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 9.3.3 provider_skills

```sql
CREATE TABLE svc.provider_skills (
    provider_skill_id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    provider_id         UUID NOT NULL REFERENCES svc.providers(provider_id),
    skill_id            UUID NOT NULL REFERENCES svc.skills(skill_id),
    proficiency_level   TEXT NOT NULL CHECK (proficiency_level IN ('BEGINNER', 'INTERMEDIATE', 'EXPERT', 'MASTER')),
    years_experience    INTEGER NOT NULL DEFAULT 0,
    is_verified         BOOLEAN NOT NULL DEFAULT FALSE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_svc_provider_skills
    ON svc.provider_skills (provider_id, skill_id);

CREATE INDEX ix_svc_provider_skills_skill ON svc.provider_skills (skill_id);

ALTER TABLE svc.provider_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.provider_skills FORCE ROW LEVEL SECURITY;

CREATE POLICY provider_skills_public_select ON svc.provider_skills
    FOR SELECT
    USING (provider_id IN (SELECT provider_id FROM svc.providers WHERE status = 'ACTIVE'));

CREATE POLICY provider_skills_owner_all ON svc.provider_skills
    FOR ALL
    USING (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY provider_skills_admin_all ON svc.provider_skills
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 9.3.4 portfolio_items

```sql
CREATE TABLE svc.portfolio_items (
    portfolio_item_id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    provider_id         UUID NOT NULL REFERENCES svc.providers(provider_id),
    title               VARCHAR(500) NOT NULL,
    description         TEXT,
    media_url           VARCHAR(500),
    media_type          TEXT CHECK (media_type IN ('IMAGE', 'VIDEO', 'DOCUMENT', 'LINK')),
    project_url         VARCHAR(500),
    client_name         VARCHAR(200),
    completed_at        TIMESTAMPTZ,
    sort_order          INTEGER NOT NULL DEFAULT 0,
    is_published        BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_svc_portfolio_items_provider ON svc.portfolio_items (provider_id, is_published);

ALTER TABLE svc.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.portfolio_items FORCE ROW LEVEL SECURITY;

CREATE POLICY portfolio_items_public_select ON svc.portfolio_items
    FOR SELECT
    USING (is_published = TRUE AND provider_id IN (
        SELECT provider_id FROM svc.providers WHERE status = 'ACTIVE'
    ));

CREATE POLICY portfolio_items_owner_all ON svc.portfolio_items
    FOR ALL
    USING (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY portfolio_items_admin_all ON svc.portfolio_items
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_portfolio_items
    AFTER INSERT OR UPDATE OR DELETE ON svc.portfolio_items
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 9.3.5 service_listings

```sql
CREATE TABLE svc.service_listings (
    listing_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    provider_id         UUID NOT NULL REFERENCES svc.providers(provider_id),
    title               VARCHAR(500) NOT NULL,
    slug                VARCHAR(500) NOT NULL,
    description         TEXT NOT NULL,
    category            VARCHAR(200),
    service_type        TEXT NOT NULL CHECK (service_type IN ('ONE_TIME', 'RECURRING', 'PROJECT', 'CONSULTATION')),
    base_price          NUMERIC(20,2) NOT NULL,
    pricing_model       TEXT NOT NULL CHECK (pricing_model IN ('FIXED', 'HOURLY', 'MILESTONE', 'NEGOTIABLE')),
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    delivery_time_days   INTEGER,
    status              TEXT NOT NULL DEFAULT 'DRAFT'
                        CHECK (status IN ('DRAFT', 'PUBLISHED', 'UNPUBLISHED', 'ARCHIVED')),
    is_deleted          BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_svc_service_listings_slug
    ON svc.service_listings (provider_id, slug)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_svc_service_listings_provider ON svc.service_listings (provider_id);
CREATE INDEX ix_svc_service_listings_status ON svc.service_listings (status) WHERE status = 'PUBLISHED';
CREATE INDEX ix_svc_service_listings_category ON svc.service_listings (category);

ALTER TABLE svc.service_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.service_listings FORCE ROW LEVEL SECURITY;

CREATE POLICY service_listings_public_select ON svc.service_listings
    FOR SELECT
    USING (status = 'PUBLISHED');

CREATE POLICY service_listings_owner_all ON svc.service_listings
    FOR ALL
    USING (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY service_listings_admin_all ON svc.service_listings
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_service_listings
    AFTER INSERT OR UPDATE OR DELETE ON svc.service_listings
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 9.3.6 service_packages

```sql
CREATE TABLE svc.service_packages (
    package_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    provider_id         UUID NOT NULL REFERENCES svc.providers(provider_id),
    listing_id          UUID REFERENCES svc.service_listings(listing_id),
    package_name        VARCHAR(500) NOT NULL,
    description         TEXT,
    package_price       NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    included_services   JSONB NOT NULL DEFAULT '[]',  -- Array of included service descriptions
    delivery_time_days  INTEGER,
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'INACTIVE', 'ARCHIVED')),
    is_deleted          BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_svc_service_packages_provider ON svc.service_packages (provider_id);
CREATE INDEX ix_svc_service_packages_listing ON svc.service_packages (listing_id);

ALTER TABLE svc.service_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.service_packages FORCE ROW LEVEL SECURITY;

CREATE POLICY service_packages_public_select ON svc.service_packages
    FOR SELECT
    USING (status = 'ACTIVE' AND is_deleted = FALSE);

CREATE POLICY service_packages_owner_all ON svc.service_packages
    FOR ALL
    USING (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY service_packages_admin_all ON svc.service_packages
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_service_packages
    AFTER INSERT OR UPDATE OR DELETE ON svc.service_packages
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 9.3.7 service_requests

```sql
CREATE TABLE svc.service_requests (
    request_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id           UUID NOT NULL,  -- Account ID of client
    provider_id         UUID REFERENCES svc.providers(provider_id),  -- NULL = open request
    listing_id          UUID REFERENCES svc.service_listings(listing_id),
    package_id          UUID REFERENCES svc.service_packages(package_id),
    title               VARCHAR(500) NOT NULL,
    description         TEXT NOT NULL,
    budget              NUMERIC(20,2),
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    desired_start_date  DATE,
    desired_delivery_date DATE,
    status              TEXT NOT NULL DEFAULT 'OPEN'
                        CHECK (status IN ('OPEN', 'PROPOSED', 'AWARDED', 'CLOSED', 'CANCELLED')),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_svc_service_requests_client ON svc.service_requests (client_id);
CREATE INDEX ix_svc_service_requests_provider ON svc.service_requests (provider_id);
CREATE INDEX ix_svc_service_requests_status ON svc.service_requests (status);

ALTER TABLE svc.service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.service_requests FORCE ROW LEVEL SECURITY;

CREATE POLICY service_requests_client_all ON svc.service_requests
    FOR ALL
    USING (client_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (client_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY service_requests_provider_select ON svc.service_requests
    FOR SELECT
    USING (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY service_requests_admin_all ON svc.service_requests
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_service_requests
    AFTER INSERT OR UPDATE OR DELETE ON svc.service_requests
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 9.3.8 proposals

```sql
CREATE TABLE svc.proposals (
    proposal_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_id          UUID NOT NULL REFERENCES svc.service_requests(request_id),
    provider_id         UUID NOT NULL REFERENCES svc.providers(provider_id),
    cover_letter        TEXT,
    proposed_price      NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    estimated_duration  INTEGER NOT NULL,  -- Days
    milestones_proposed JSONB NOT NULL DEFAULT '[]',  -- Array of proposed milestones
    status              TEXT NOT NULL DEFAULT 'SUBMITTED'
                        CHECK (status IN ('SUBMITTED', 'ACCEPTED', 'REJECTED', 'WITHDRAWN', 'EXPIRED')),
    submitted_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    responded_at        TIMESTAMPTZ,
    expires_at          TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '7 days'),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_svc_proposals_request ON svc.proposals (request_id);
CREATE INDEX ix_svc_proposals_provider ON svc.proposals (provider_id);
CREATE INDEX ix_svc_proposals_status ON svc.proposals (status);

ALTER TABLE svc.proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.proposals FORCE ROW LEVEL SECURITY;

CREATE POLICY proposals_provider_all ON svc.proposals
    FOR ALL
    USING (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY proposals_client_select ON svc.proposals
    FOR SELECT
    USING (request_id IN (
        SELECT request_id FROM svc.service_requests
        WHERE client_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY proposals_admin_all ON svc.proposals
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_proposals
    AFTER INSERT OR UPDATE OR DELETE ON svc.proposals
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 9.3.9 contracts

```sql
CREATE TABLE svc.contracts (
    contract_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_id          UUID NOT NULL REFERENCES svc.service_requests(request_id),
    proposal_id         UUID NOT NULL REFERENCES svc.proposals(proposal_id),
    provider_id         UUID NOT NULL REFERENCES svc.providers(provider_id),
    client_id           UUID NOT NULL,
    contract_number     BIGINT NOT NULL DEFAULT nextval('svc.contract_number_seq'),
    title               VARCHAR(500) NOT NULL,
    description         TEXT,
    total_price         NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'DISPUTED', 'SUSPENDED')),
    start_date          DATE NOT NULL,
    end_date            DATE,
    terms               JSONB NOT NULL DEFAULT '{}',
    accepted_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at        TIMESTAMPTZ,
    cancelled_at        TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE SEQUENCE IF NOT EXISTS svc.contract_number_seq START 1000001;
CREATE UNIQUE INDEX uq_svc_contracts_contract_number ON svc.contracts (contract_number);
CREATE INDEX ix_svc_contracts_provider ON svc.contracts (provider_id);
CREATE INDEX ix_svc_contracts_client ON svc.contracts (client_id);
CREATE INDEX ix_svc_contracts_status ON svc.contracts (status);

ALTER TABLE svc.contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.contracts FORCE ROW LEVEL SECURITY;

CREATE POLICY contracts_provider_select ON svc.contracts
    FOR SELECT
    USING (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY contracts_client_select ON svc.contracts
    FOR SELECT
    USING (client_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY contracts_admin_all ON svc.contracts
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_contracts
    AFTER INSERT OR UPDATE OR DELETE ON svc.contracts
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 9.3.10 milestones

```sql
CREATE TABLE svc.milestones (
    milestone_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_id         UUID NOT NULL REFERENCES svc.contracts(contract_id),
    milestone_number    INTEGER NOT NULL,
    title               VARCHAR(500) NOT NULL,
    description         TEXT,
    amount              NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    due_date            DATE NOT NULL,
    status              TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'IN_PROGRESS', 'SUBMITTED', 'UNDER_REVIEW', 'ACCEPTED', 'REVISION_REQUESTED', 'DISPUTED', 'AUTO_ACCEPTED', 'COMPLETED')),
    delivered_at        TIMESTAMPTZ,
    submitted_at        TIMESTAMPTZ,
    accepted_at         TIMESTAMPTZ,
    auto_accept_deadline TIMESTAMPTZ,
    revision_count      INTEGER NOT NULL DEFAULT 0,
    revision_notes      TEXT,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_svc_milestones_contract_number
    ON svc.milestones (contract_id, milestone_number);

CREATE INDEX ix_svc_milestones_contract ON svc.milestones (contract_id);
CREATE INDEX ix_svc_milestones_status ON svc.milestones (status);

ALTER TABLE svc.milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.milestones FORCE ROW LEVEL SECURITY;

CREATE POLICY milestones_participant_select ON svc.milestones
    FOR SELECT
    USING (contract_id IN (
        SELECT contract_id FROM svc.contracts
        WHERE provider_id IN (
            SELECT provider_id FROM svc.providers
            WHERE account_id = current_setting('app.current_account_id')::UUID
        ) OR client_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY milestones_admin_all ON svc.milestones
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_milestones
    AFTER INSERT OR UPDATE OR DELETE ON svc.milestones
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 9.3.11 deliveries

```sql
CREATE TABLE svc.deliveries (
    delivery_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    milestone_id        UUID NOT NULL REFERENCES svc.milestones(milestone_id),
    contract_id         UUID NOT NULL REFERENCES svc.contracts(contract_id),
    provider_id         UUID NOT NULL REFERENCES svc.providers(provider_id),
    delivery_content    TEXT,
    attachments         JSONB NOT NULL DEFAULT '[]',  -- Array of attachment references
    delivery_notes      TEXT,
    version_number      INTEGER NOT NULL DEFAULT 1,
    status              TEXT NOT NULL DEFAULT 'SUBMITTED'
                        CHECK (status IN ('SUBMITTED', 'UNDER_REVIEW', 'ACCEPTED', 'REJECTED', 'AUTO_ACCEPTED')),
    submitted_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    reviewed_at         TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_svc_deliveries_milestone ON svc.deliveries (milestone_id);
CREATE INDEX ix_svc_deliveries_contract ON svc.deliveries (contract_id);

ALTER TABLE svc.deliveries ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.deliveries FORCE ROW LEVEL SECURITY;

CREATE POLICY deliveries_participant_select ON svc.deliveries
    FOR SELECT
    USING (contract_id IN (
        SELECT contract_id FROM svc.contracts
        WHERE provider_id IN (
            SELECT provider_id FROM svc.providers
            WHERE account_id = current_setting('app.current_account_id')::UUID
        ) OR client_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY deliveries_admin_all ON svc.deliveries
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_deliveries
    AFTER INSERT OR UPDATE OR DELETE ON svc.deliveries
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 9.3.12 service_disputes

```sql
CREATE TABLE svc.service_disputes (
    dispute_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_id        UUID NOT NULL REFERENCES svc.contracts(contract_id),
    milestone_id        UUID REFERENCES svc.milestones(milestone_id),
    filed_by           UUID NOT NULL,
    filed_against      UUID,
    reason             TEXT NOT NULL CHECK (reason IN (
                        'QUALITY_ISSUE', 'DELIVERY_DELAY', 'PAYMENT_ISSUE',
                        'SCOPE_DISPUTE', 'COMMUNICATION', 'OTHER'
                    )),
    description        TEXT,
    evidence           JSONB NOT NULL DEFAULT '[]',
    status            TEXT NOT NULL DEFAULT 'OPEN'
                        CHECK (status IN ('OPEN', 'UNDER_REVIEW', 'RESOLVED_FAVORABLY', 'RESOLVED_UNFAVORABLY', 'ESCALATED', 'CLOSED')),
    resolution        TEXT,
    resolved_by       UUID,
    resolved_at       TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_svc_service_disputes_contract ON svc.service_disputes (contract_id);
CREATE INDEX ix_svc_service_disputes_status ON svc.service_disputes (status);

ALTER TABLE svc.service_disputes ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.service_disputes FORCE ROW LEVEL SECURITY;

CREATE POLICY service_disputes_participant_select ON svc.service_disputes
    FOR SELECT
    USING (filed_by = current_setting('app.current_account_id')::UUID
           OR filed_against = current_setting('app.current_account_id')::UUID);

CREATE POLICY service_disputes_admin_all ON svc.service_disputes
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_service_disputes
    AFTER INSERT OR UPDATE OR DELETE ON svc.service_disputes
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 9.3.13 service_reviews

```sql
CREATE TABLE svc.service_reviews (
    review_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_id        UUID NOT NULL REFERENCES svc.contracts(contract_id),
    provider_id        UUID NOT NULL REFERENCES svc.providers(provider_id),
    client_id          UUID NOT NULL,
    rating            INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title             VARCHAR(500),
    body              TEXT,
    communication_rating INTEGER CHECK (communication_rating >= 1 AND communication_rating <= 5),
    quality_rating    INTEGER CHECK (quality_rating >= 1 AND quality_rating <= 5),
    timeliness_rating INTEGER CHECK (timeliness_rating >= 1 AND timeliness_rating <= 5),
    status            TEXT NOT NULL DEFAULT 'PUBLISHED'
                        CHECK (status IN ('PUBLISHED', 'HIDDEN', 'FLAGGED', 'REMOVED')),
    provider_response TEXT,
    provider_responded_at TIMESTAMPTZ,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_svc_service_reviews_contract
    ON svc.service_reviews (contract_id, client_id);

CREATE INDEX ix_svc_service_reviews_provider ON svc.service_reviews (provider_id, status);

ALTER TABLE svc.service_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.service_reviews FORCE ROW LEVEL SECURITY;

CREATE POLICY service_reviews_public_select ON svc.service_reviews
    FOR SELECT
    USING (status = 'PUBLISHED');

CREATE POLICY service_reviews_owner_all ON svc.service_reviews
    FOR ALL
    USING (client_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (client_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY service_reviews_provider_update ON svc.service_reviews
    FOR UPDATE
    USING (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY service_reviews_admin_all ON svc.service_reviews
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_service_reviews
    AFTER INSERT OR UPDATE OR DELETE ON svc.service_reviews
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 9.3.14 service_settlements

```sql
CREATE TABLE svc.service_settlements (
    settlement_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_id       UUID NOT NULL REFERENCES svc.contracts(contract_id),
    milestone_id      UUID REFERENCES svc.milestones(milestone_id),
    provider_id       UUID NOT NULL REFERENCES svc.providers(provider_id),
    gross_revenue     NUMERIC(20,2) NOT NULL,
    deductions        NUMERIC(20,2) NOT NULL,
    qualifying_economic_value NUMERIC(20,2) NOT NULL,
    provider_amount   NUMERIC(20,2) NOT NULL,  -- 15% of QEV (counterparty share)
    platform_amount   NUMERIC(20,2) NOT NULL,  -- 60% of QEV (platform share)
    reward_pool_amount NUMERIC(20,2) NOT NULL, -- 8% + 5% of QEV (rewards + leadership)
    operational_amount NUMERIC(20,2) NOT NULL, -- 2% of QEV
    reserve_amount    NUMERIC(20,2) NOT NULL,  -- 10% of QEV
    currency          VARCHAR(3) NOT NULL DEFAULT 'USD',
    status            TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'SETTLED', 'FAILED', 'REVERSED')),
    wallet_transaction_id UUID,
    source_transaction_id UUID,
    settled_at        TIMESTAMPTZ,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version           INTEGER NOT NULL DEFAULT 1
);

-- Services waterfall: counterparty 15%, platform 60%, rewards 8%, leadership 5%, operational 2% = 90%
ALTER TABLE svc.service_settlements
    ADD CONSTRAINT ck_svc_settlement_allocation_sum
    CHECK (provider_amount + platform_amount + reward_pool_amount + operational_amount =
           qualifying_economic_value * 0.90);

ALTER TABLE svc.service_settlements
    ADD CONSTRAINT ck_svc_settlement_reserve
    CHECK (reserve_amount = qualifying_economic_value * 0.10);

ALTER TABLE svc.service_settlements
    ADD CONSTRAINT ck_svc_settlement_qev
    CHECK (qualifying_economic_value = gross_revenue - deductions);

CREATE INDEX ix_svc_service_settlements_contract ON svc.service_settlements (contract_id);
CREATE INDEX ix_svc_service_settlements_provider ON svc.service_settlements (provider_id);
CREATE INDEX ix_svc_service_settlements_status ON svc.service_settlements (status);

ALTER TABLE svc.service_settlements ENABLE ROW LEVEL SECURITY;
ALTER TABLE svc.service_settlements FORCE ROW LEVEL SECURITY;

CREATE POLICY service_settlements_provider_select ON svc.service_settlements
    FOR SELECT
    USING (provider_id IN (
        SELECT provider_id FROM svc.providers
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY service_settlements_admin_all ON svc.service_settlements
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_service_settlements
    AFTER INSERT OR UPDATE OR DELETE ON svc.service_settlements
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

### 9.4 Governing Requirement Traceability

SRS-SVC-001–019; SDD-1 Ch.9; SAD-1 Ch.12; PLC-1 Ch.29; KR-1 KR-TRU-007, KR-ECO-014, KR-ECO-017.

---

## Chapter 10 — K-Rewards Engine Schema

### 10.1 Overview

The K-Rewards Engine schema (`krw`) is the sole authority for K-Points, K-Rings, K-Levels, Leadership Multiplication, Reward Share, and the Monthly Reward Cycle. The K-Points ledger is append-only and immutable. K-Level progression definitions are GOVERNANCE PARAMETERS owned by KR-1. The ring graph is stored in the `graph` schema; this schema stores ring activity, ring contributions, and reward cycle data.

Implements: SRS-KRW-001–015; SDD-1 Ch.10; SAD-1 Ch.13, Ch.20–21; PLC-1 Ch.26; KR-1 KR-FND-003, KR-ECO-001–063, KR-PNT-001–025, KR-RNG-001–017, KR-LVL-001–024, KR-RWD-001.

### 10.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS krw;
```

### 10.3 Table Definitions

#### 10.3.1 kpoint_categories

Configuration table for the eight K-Point categories. Category caps and factors are GOVERNANCE PARAMETERS owned by KR-1.

```sql
CREATE TABLE krw.kpoint_categories (
    category_code      TEXT PRIMARY KEY,
    category_name      TEXT NOT NULL,
    description        TEXT,
    category_factor    NUMERIC(8,6) NOT NULL,  -- Multiplier per category (GOVERNANCE PARAMETER)
    monthly_cap        NUMERIC(20,2) NOT NULL,  -- Monthly cap per category (GOVERNANCE PARAMETER)
    kr_rule_id         TEXT NOT NULL,
    is_active          BOOLEAN NOT NULL DEFAULT TRUE,
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_krw_kpoint_categories_active ON krw.kpoint_categories (is_active) WHERE is_active = TRUE;

ALTER TABLE krw.kpoint_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY kpoint_categories_public_select ON krw.kpoint_categories FOR SELECT USING (is_active = TRUE);
CREATE POLICY kpoint_categories_admin_all ON krw.kpoint_categories FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 10.3.2 kpoints_ledger

Append-only K-Points ledger. Immutable — corrections via reversal entries only.

```sql
CREATE TABLE krw.kpoints_ledger (
    ledger_entry_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    category           TEXT NOT NULL CHECK (category IN (
                        'COMMERCE', 'SERVICES', 'LEARNING', 'COMMUNITY',
                        'ASSESSMENT', 'COMPLETION', 'PATH', 'MILESTONE'
                    )),
    points             NUMERIC(20,2) NOT NULL,  -- Positive for accrual, negative for reversal
    multiplier         NUMERIC(10,4) NOT NULL,
    base_value         NUMERIC(20,2) NOT NULL,
    evidence_ref       TEXT NOT NULL,  -- Reference to source event (idempotency key)
    cycle_id           UUID NOT NULL,
    entry_type         TEXT NOT NULL CHECK (entry_type IN ('ACCRUAL', 'REVERSAL', 'DEFERRED_REVERSAL')),
    status             TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'REVERSED')),
    reversed_by        UUID,  -- Reversal entry ID (if reversed)
    source_engine      TEXT NOT NULL,  -- Engine that triggered the accrual
    audit_hash         VARCHAR(64) NOT NULL,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_krw_kpoints_ledger_evidence
    ON krw.kpoints_ledger (evidence_ref)
    WHERE entry_type = 'ACCRUAL';

CREATE INDEX ix_krw_kpoints_ledger_account ON krw.kpoints_ledger (account_id, cycle_id);
CREATE INDEX ix_krw_kpoints_ledger_cycle ON krw.kpoints_ledger (cycle_id);
CREATE INDEX ix_krw_kpoints_ledger_category ON krw.kpoints_ledger (category, cycle_id);
CREATE INDEX ix_krw_kpoints_ledger_status ON krw.kpoints_ledger (status) WHERE status = 'ACTIVE';

ALTER TABLE krw.kpoints_ledger ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.kpoints_ledger FORCE ROW LEVEL SECURITY;

CREATE POLICY kpoints_ledger_owner_select ON krw.kpoints_ledger
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY kpoints_ledger_admin_all ON krw.kpoints_ledger
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

-- Append-only protection
CREATE TRIGGER trg_block_update_kpoints_ledger BEFORE UPDATE ON krw.kpoints_ledger
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
CREATE TRIGGER trg_block_delete_kpoints_ledger BEFORE DELETE ON krw.kpoints_ledger
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

#### 10.3.3 lifetime_statistics

```sql
CREATE TABLE krw.lifetime_statistics (
    account_id         UUID PRIMARY KEY,
    lifetime_kpoints   NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    cycles_participated INTEGER NOT NULL DEFAULT 0,
    current_klevel     INTEGER NOT NULL DEFAULT 1 CHECK (current_klevel >= 1 AND current_klevel <= 15),
    highest_klevel     INTEGER NOT NULL DEFAULT 1 CHECK (highest_klevel >= 1 AND highest_klevel <= 15),
    klevel_achieved_at TIMESTAMPTZ,
    active_status      BOOLEAN NOT NULL DEFAULT TRUE,
    last_active_cycle_id UUID,
    version            INTEGER NOT NULL DEFAULT 1,
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_krw_lifetime_statistics_klevel ON krw.lifetime_statistics (current_klevel);
CREATE INDEX ix_krw_lifetime_statistics_active ON krw.lifetime_statistics (active_status) WHERE active_status = TRUE;

ALTER TABLE krw.lifetime_statistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.lifetime_statistics FORCE ROW LEVEL SECURITY;

CREATE POLICY lifetime_statistics_owner_select ON krw.lifetime_statistics
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY lifetime_statistics_admin_all ON krw.lifetime_statistics
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION krw.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_lifetime_statistics_updated_at
    BEFORE UPDATE ON krw.lifetime_statistics
    FOR EACH ROW EXECUTE FUNCTION krw.fn_set_updated_at();

CREATE TRIGGER trg_audit_lifetime_statistics
    AFTER INSERT OR UPDATE ON krw.lifetime_statistics
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 10.3.4 klevel_definitions

K-Level progression matrix — 17 fields per level. All values are GOVERNANCE PARAMETERS owned by KR-1 (KR-LVL-009).

```sql
CREATE TABLE krw.klevel_definitions (
    k_level             INTEGER PRIMARY KEY CHECK (k_level >= 1 AND k_level <= 15),
    tier                TEXT NOT NULL CHECK (tier IN (
                        'FOUNDATION_GROWTH', 'LEADERSHIP', 'EXECUTIVE', 'LEGACY'
                    )),
    level_name          TEXT NOT NULL,
    kpoint_threshold    NUMERIC(20,2) NOT NULL,  -- Lifetime K-Points required
    direct_referrals_required INTEGER NOT NULL DEFAULT 0,
    ring1_min_klevel_required INTEGER NOT NULL DEFAULT 0,
    ring2_min_klevel_required INTEGER NOT NULL DEFAULT 0,
    ring3_min_klevel_required INTEGER NOT NULL DEFAULT 0,
    ring4_min_klevel_required INTEGER NOT NULL DEFAULT 0,
    ring5_min_klevel_required INTEGER NOT NULL DEFAULT 0,
    ring1_min_count_required INTEGER NOT NULL DEFAULT 0,
    ring2_min_count_required INTEGER NOT NULL DEFAULT 0,
    ring3_min_count_required INTEGER NOT NULL DEFAULT 0,
    ring4_min_count_required INTEGER NOT NULL DEFAULT 0,
    ring5_min_count_required INTEGER NOT NULL DEFAULT 0,
    leadership_developed_required INTEGER NOT NULL DEFAULT 0,  -- Anti-accumulation: min L7+ in Ring 1
    trust_score_required NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    kr_rule_id         TEXT NOT NULL,
    is_active          BOOLEAN NOT NULL DEFAULT TRUE,
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE krw.klevel_definitions ENABLE ROW LEVEL SECURITY;
CREATE POLICY klevel_definitions_public_select ON krw.klevel_definitions FOR SELECT USING (is_active = TRUE);
CREATE POLICY klevel_definitions_admin_all ON krw.klevel_definitions FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 10.3.5 klevel_history

Append-only history of K-Level promotions.

```sql
CREATE TABLE krw.klevel_history (
    history_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    previous_klevel    INTEGER NOT NULL,
    new_klevel         INTEGER NOT NULL,
    promoted_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    cycle_id           UUID NOT NULL,
    promotion_reason   TEXT,
    audit_hash         VARCHAR(64) NOT NULL
);

CREATE INDEX ix_krw_klevel_history_account ON krw.klevel_history (account_id, promoted_at);

ALTER TABLE krw.klevel_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.klevel_history FORCE ROW LEVEL SECURITY;

CREATE POLICY klevel_history_owner_select ON krw.klevel_history
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY klevel_history_admin_all ON krw.klevel_history
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_block_update_klevel_history BEFORE UPDATE ON krw.klevel_history
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
CREATE TRIGGER trg_block_delete_klevel_history BEFORE DELETE ON krw.klevel_history
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

#### 10.3.6 monthly_snapshots

Monthly K-Points snapshot per account per cycle — used for reward calculation.

```sql
CREATE TABLE krw.monthly_snapshots (
    snapshot_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    cycle_id           UUID NOT NULL,
    monthly_kpoints     NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    category_breakdown JSONB NOT NULL DEFAULT '{}',  -- Per-category K-Points
    is_active           BOOLEAN NOT NULL DEFAULT FALSE,
    snapshot_taken_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_krw_monthly_snapshots_account_cycle
    ON krw.monthly_snapshots (account_id, cycle_id);

CREATE INDEX ix_krw_monthly_snapshots_cycle ON krw.monthly_snapshots (cycle_id);
CREATE INDEX ix_krw_monthly_snapshots_active ON krw.monthly_snapshots (cycle_id, is_active) WHERE is_active = TRUE;

ALTER TABLE krw.monthly_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.monthly_snapshots FORCE ROW LEVEL SECURITY;

CREATE POLICY monthly_snapshots_owner_select ON krw.monthly_snapshots
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY monthly_snapshots_admin_all ON krw.monthly_snapshots
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 10.3.7 ring_activity

Per-cycle ring activity for each leader — counts of active qualifying members per ring.

```sql
CREATE TABLE krw.ring_activity (
    ring_activity_id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,  -- Leader
    cycle_id           UUID NOT NULL,
    ring1_active       INTEGER NOT NULL DEFAULT 0,
    ring2_active       INTEGER NOT NULL DEFAULT 0,
    ring3_active       INTEGER NOT NULL DEFAULT 0,
    ring4_active       INTEGER NOT NULL DEFAULT 0,
    ring5_active       INTEGER NOT NULL DEFAULT 0,
    ring1_qualifying   INTEGER NOT NULL DEFAULT 0,  -- Qualifying (meets K-Level requirement)
    ring2_qualifying   INTEGER NOT NULL DEFAULT 0,
    ring3_qualifying   INTEGER NOT NULL DEFAULT 0,
    ring4_qualifying   INTEGER NOT NULL DEFAULT 0,
    ring5_qualifying   INTEGER NOT NULL DEFAULT 0,
    calculated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_krw_ring_activity_account_cycle
    ON krw.ring_activity (account_id, cycle_id);

CREATE INDEX ix_krw_ring_activity_cycle ON krw.ring_activity (cycle_id);

ALTER TABLE krw.ring_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.ring_activity FORCE ROW LEVEL SECURITY;

CREATE POLICY ring_activity_owner_select ON krw.ring_activity
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY ring_activity_admin_all ON krw.ring_activity
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 10.3.8 ring_contributions

Per-cycle weighted ring contributions for each leader.

```sql
CREATE TABLE krw.ring_contributions (
    ring_contribution_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,  -- Leader
    cycle_id           UUID NOT NULL,
    ring1_contribution NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    ring2_contribution NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    ring3_contribution NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    ring4_contribution NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    ring5_contribution NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    total_contribution NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    calculated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_krw_ring_contributions_account_cycle
    ON krw.ring_contributions (account_id, cycle_id);

CREATE INDEX ix_krw_ring_contributions_cycle ON krw.ring_contributions (cycle_id);

-- Check constraint: total = sum of ring contributions
ALTER TABLE krw.ring_contributions
    ADD CONSTRAINT ck_krw_ring_contributions_total
    CHECK (total_contribution = ring1_contribution + ring2_contribution +
           ring3_contribution + ring4_contribution + ring5_contribution);

ALTER TABLE krw.ring_contributions ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.ring_contributions FORCE ROW LEVEL SECURITY;

CREATE POLICY ring_contributions_owner_select ON krw.ring_contributions
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY ring_contributions_admin_all ON krw.ring_contributions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 10.3.9 ring_weights

Ring weight configuration — GOVERNANCE PARAMETERS owned by KR-1 (KR-RNG-008).

```sql
CREATE TABLE krw.ring_weights (
    ring_number        INTEGER PRIMARY KEY CHECK (ring_number >= 1 AND ring_number <= 5),
    weight             NUMERIC(8,6) NOT NULL,  -- GOVERNANCE PARAMETER from KR-1 KR-RNG-008
    kr_rule_id         TEXT NOT NULL,
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE krw.ring_weights ENABLE ROW LEVEL SECURITY;
CREATE POLICY ring_weights_public_select ON krw.ring_weights FOR SELECT USING (true);
CREATE POLICY ring_weights_admin_all ON krw.ring_weights FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 10.3.10 reward_cycles

```sql
CREATE TABLE krw.reward_cycles (
    cycle_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cycle_month        INTEGER NOT NULL CHECK (cycle_month >= 1 AND cycle_month <= 12),
    cycle_year         INTEGER NOT NULL,
    cycle_label        TEXT NOT NULL,  -- e.g., "2026-08"
    status             TEXT NOT NULL DEFAULT 'ACCUMULATING'
                        CHECK (status IN (
                            'ACCUMULATING', 'POOL_CLOSED', 'CALCULATING',
                            'DISTRIBUTING', 'RECONCILING', 'RESET', 'COMPLETED', 'FAILED'
                        )),
    stage              TEXT NOT NULL,
    started_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    pool_closed_at     TIMESTAMPTZ,
    calculation_completed_at TIMESTAMPTZ,
    distribution_completed_at TIMESTAMPTZ,
    reconciliation_completed_at TIMESTAMPTZ,
    completed_at       TIMESTAMPTZ,
    participant_count   INTEGER,
    version            INTEGER NOT NULL DEFAULT 1,
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_krw_reward_cycles_label ON krw.reward_cycles (cycle_label);
CREATE INDEX ix_krw_reward_cycles_status ON krw.reward_cycles (status);

ALTER TABLE krw.reward_cycles ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.reward_cycles FORCE ROW LEVEL SECURITY;

CREATE POLICY reward_cycles_public_select ON krw.reward_cycles FOR SELECT USING (true);
CREATE POLICY reward_cycles_admin_all ON krw.reward_cycles FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_reward_cycles
    AFTER INSERT OR UPDATE ON krw.reward_cycles
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 10.3.11 reward_pools

```sql
CREATE TABLE krw.reward_pools (
    pool_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cycle_id           UUID NOT NULL,
    total_amount       NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    distributed_amount NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    undistributed_amount NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    status             TEXT NOT NULL DEFAULT 'ACCUMULATING'
                        CHECK (status IN ('ACCUMULATING', 'CLOSED', 'DISTRIBUTING', 'COMPLETED')),
    cycle_start        TIMESTAMPTZ NOT NULL,
    cycle_end          TIMESTAMPTZ NOT NULL,
    closed_at          TIMESTAMPTZ,
    completed_at       TIMESTAMPTZ,
    version            INTEGER NOT NULL DEFAULT 1,
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_krw_reward_pools_cycle ON krw.reward_pools (cycle_id);

-- Check constraint: total = distributed + undistributed
ALTER TABLE krw.reward_pools
    ADD CONSTRAINT ck_krw_reward_pools_total
    CHECK (total_amount = distributed_amount + undistributed_amount);

ALTER TABLE krw.reward_pools ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.reward_pools FORCE ROW LEVEL SECURITY;

CREATE POLICY reward_pools_public_select ON krw.reward_pools FOR SELECT USING (true);
CREATE POLICY reward_pools_admin_all ON krw.reward_pools FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_reward_pools
    AFTER INSERT OR UPDATE ON krw.reward_pools
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 10.3.12 reward_distributions

```sql
CREATE TABLE krw.reward_distributions (
    distribution_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    cycle_id           UUID NOT NULL,
    pool_id            UUID NOT NULL,
    reward_share_score NUMERIC(15,6) NOT NULL,
    calculated_reward  NUMERIC(20,2) NOT NULL,  -- Before cap
    capped_reward      NUMERIC(20,2) NOT NULL,  -- After cap
    final_reward       NUMERIC(20,2) NOT NULL,  -- After pro-rata
    settlement_id      UUID,  -- Reference to wal.wallet_transactions (no FK)
    status             TEXT NOT NULL DEFAULT 'CALCULATED'
                        CHECK (status IN ('CALCULATED', 'DISTRIBUTED', 'FAILED')),
    audit_hash         VARCHAR(64) NOT NULL,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    distributed_at     TIMESTAMPTZ
);

CREATE INDEX ix_krw_reward_distributions_account ON krw.reward_distributions (account_id, cycle_id);
CREATE INDEX ix_krw_reward_distributions_cycle ON krw.reward_distributions (cycle_id);
CREATE INDEX ix_krw_reward_distributions_status ON krw.reward_distributions (status);

ALTER TABLE krw.reward_distributions ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.reward_distributions FORCE ROW LEVEL SECURITY;

CREATE POLICY reward_distributions_owner_select ON krw.reward_distributions
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY reward_distributions_admin_all ON krw.reward_distributions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 10.3.13 reward_statements

Human-readable reward statement for each participant per cycle.

```sql
CREATE TABLE krw.reward_statements (
    statement_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID NOT NULL,
    cycle_id           UUID NOT NULL,
    reward_amount      NUMERIC(20,2) NOT NULL,
    currency           VARCHAR(3) NOT NULL DEFAULT 'USD',
    statement_details JSONB NOT NULL,  -- Breakdown: ring contributions, K-Level, multiplier, cap, pro-rata
    wallet_transaction_id UUID,
    generated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_krw_reward_statements_account_cycle
    ON krw.reward_statements (account_id, cycle_id);

CREATE INDEX ix_krw_reward_statements_cycle ON krw.reward_statements (cycle_id);

ALTER TABLE krw.reward_statements ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.reward_statements FORCE ROW LEVEL SECURITY;

CREATE POLICY reward_statements_owner_select ON krw.reward_statements
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY reward_statements_admin_all ON krw.reward_statements
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 10.3.14 reconciliation_records

Cycle reconciliation records — verify 90/10 enforcement and distribution accuracy.

```sql
CREATE TABLE krw.reconciliation_records (
    reconciliation_id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cycle_id           UUID NOT NULL,
    pool_total         NUMERIC(20,2) NOT NULL,
    total_distributed  NUMERIC(20,2) NOT NULL,
    total_undistributed NUMERIC(20,2) NOT NULL,
    participant_count   INTEGER NOT NULL,
    reserve_total      NUMERIC(20,2) NOT NULL,  -- Total reserve held for this cycle
    allocation_pool_total NUMERIC(20,2) NOT NULL,
    is_balanced        BOOLEAN NOT NULL,  -- True if distributed + undistributed = pool_total
    discrepancy        NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    reconciliation_notes TEXT,
    reconciled_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    reconciled_by      UUID
);

CREATE UNIQUE INDEX uq_krw_reconciliation_records_cycle
    ON krw.reconciliation_records (cycle_id);

ALTER TABLE krw.reconciliation_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE krw.reconciliation_records FORCE ROW LEVEL SECURITY;

CREATE POLICY reconciliation_records_admin_select ON krw.reconciliation_records
    FOR SELECT TO admin_role USING (true);

CREATE POLICY reconciliation_records_admin_all ON krw.reconciliation_records
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

### 10.4 Retention

| Table | Retention | Notes |
|---|---|---|
| kpoints_ledger | Permanent | Append-only, immutable |
| klevel_history | Permanent | Append-only |
| lifetime_statistics | Permanent | Updated in place |
| klevel_definitions | Permanent | Configuration table (GOVERNANCE PARAMETERS) |
| monthly_snapshots | 2 years | Archived to cold storage |
| reward_cycles | Permanent | |
| reward_pools | Permanent | |
| reward_distributions | Permanent | |
| reward_statements | 5 years | |
| reconciliation_records | Permanent | Audit trail |

### 10.5 Governing Requirement Traceability

SRS-KRW-001–015; SDD-1 Ch.10; SAD-1 Ch.13, Ch.20–21; PLC-1 Ch.26; KR-1 KR-FND-003/008/009/015, KR-ECO-001–063, KR-PNT-001–025, KR-RNG-001–017, KR-LVL-001–024, KR-RWD-001.

---

## Chapter 11 — Wallet/Payments Engine Schema

### 11.1 Overview

The Wallet/Payments Engine schema (`wal`) is the sole wallet authority for K-NETWORK. It stores wallet balances, the transaction ledger (append-only), deposits, withdrawals, payment processing, settlement execution, 90/10 economic enforcement, reserve protection, reconciliation, reversals, refunds, chargebacks, and reward distribution execution. All financial operations use ACID transactions with pessimistic concurrency (row-level locking).

Implements: SRS-WAL-001–014; SDD-1 Ch.11; SAD-1 Ch.14; PLC-1 Ch.24, 25, 31; KR-1 KR-ECO-001–063, KR-ECO-054–059.

### 11.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS wal;
CREATE SEQUENCE IF NOT EXISTS wal.transaction_ref_seq START 1000001;
```

### 11.3 Table Definitions

#### 11.3.1 wallets

```sql
CREATE TABLE wal.wallets (
    wallet_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    wallet_type         TEXT NOT NULL DEFAULT 'PARTICIPANT'
                        CHECK (wallet_type IN (
                            'PARTICIPANT', 'VENDOR', 'PROVIDER', 'INSTRUCTOR',
                            'PLATFORM', 'RESERVE', 'REWARD_POOL', 'OPERATIONAL'
                        )),
    balance             NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    pending_balance     NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'FROZEN', 'CLOSED')),
    is_deleted          BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_wal_wallets_account_type
    ON wal.wallets (account_id, wallet_type)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_wal_wallets_account ON wal.wallets (account_id);
CREATE INDEX ix_wal_wallets_status ON wal.wallets (status) WHERE status = 'ACTIVE';

-- Check constraint: balance cannot be negative for participant wallets
ALTER TABLE wal.wallets
    ADD CONSTRAINT ck_wal_wallets_non_negative
    CHECK (balance >= 0 AND pending_balance >= 0);

ALTER TABLE wal.wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE wal.wallets FORCE ROW LEVEL SECURITY;

CREATE POLICY wallets_owner_select ON wal.wallets
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY wallets_admin_all ON wal.wallets
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION wal.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_wallets_updated_at
    BEFORE UPDATE ON wal.wallets
    FOR EACH ROW EXECUTE FUNCTION wal.fn_set_updated_at();

CREATE TRIGGER trg_audit_wallets
    AFTER INSERT OR UPDATE ON wal.wallets
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 11.3.2 wallet_transactions

Append-only transaction ledger. Immutable — corrections via reversal entries only.

```sql
CREATE TABLE wal.wallet_transactions (
    transaction_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    transaction_ref     BIGINT NOT NULL DEFAULT nextval('wal.transaction_ref_seq'),
    wallet_id           UUID NOT NULL REFERENCES wal.wallets(wallet_id),
    account_id          UUID NOT NULL,
    transaction_type    TEXT NOT NULL CHECK (transaction_type IN (
                            'DEPOSIT', 'WITHDRAWAL', 'PAYMENT', 'SETTLEMENT',
                            'REFUND', 'CHARGEBACK', 'REWARD_DISTRIBUTION',
                            'RESERVE_ALLOCATION', 'REVERSAL', 'FEE',
                            'ESCROW_HOLD', 'ESCROW_RELEASE', 'TRANSFER'
                        )),
    direction           TEXT NOT NULL CHECK (direction IN ('CREDIT', 'DEBIT')),
    amount              NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    balance_after       NUMERIC(20,2) NOT NULL,
    reference_type      TEXT,  -- Type of source entity (ORDER, CONTRACT, REWARD_CYCLE, etc.)
    reference_id        UUID,  -- ID of source entity
    source_transaction_id UUID, -- Reference to econ.source_transactions (no FK)
    related_transaction_id UUID, -- For reversals: the original transaction being reversed
    description         TEXT,
    status              TEXT NOT NULL DEFAULT 'COMPLETED'
                        CHECK (status IN ('PENDING', 'COMPLETED', 'FAILED', 'REVERSED')),
    idempotency_key     VARCHAR(255),
    audit_hash          VARCHAR(64) NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_wal_wallet_transactions_ref ON wal.wallet_transactions (transaction_ref);
CREATE UNIQUE INDEX uq_wal_wallet_transactions_idempotency
    ON wal.wallet_transactions (idempotency_key)
    WHERE idempotency_key IS NOT NULL;

CREATE INDEX ix_wal_wallet_transactions_wallet ON wal.wallet_transactions (wallet_id, created_at);
CREATE INDEX ix_wal_wallet_transactions_account ON wal.wallet_transactions (account_id, created_at);
CREATE INDEX ix_wal_wallet_transactions_type ON wal.wallet_transactions (transaction_type);
CREATE INDEX ix_wal_wallet_transactions_reference ON wal.wallet_transactions (reference_type, reference_id)
    WHERE reference_id IS NOT NULL;
CREATE INDEX ix_wal_wallet_transactions_status ON wal.wallet_transactions (status);

ALTER TABLE wal.wallet_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE wal.wallet_transactions FORCE ROW LEVEL SECURITY;

CREATE POLICY wallet_transactions_owner_select ON wal.wallet_transactions
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY wallet_transactions_admin_all ON wal.wallet_transactions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

-- Append-only protection
CREATE TRIGGER trg_block_update_wallet_transactions BEFORE UPDATE ON wal.wallet_transactions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
CREATE TRIGGER trg_block_delete_wallet_transactions BEFORE DELETE ON wal.wallet_transactions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

#### 11.3.3 wallet_holds

Pre-authorization holds on wallet balances (e.g., escrow for service contracts).

```sql
CREATE TABLE wal.wallet_holds (
    hold_id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    wallet_id           UUID NOT NULL REFERENCES wal.wallets(wallet_id),
    account_id          UUID NOT NULL,
    amount              NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    hold_reason         TEXT NOT NULL CHECK (hold_reason IN (
                            'ESCROW', 'PENDING_SETTLEMENT', 'CHARGEBACK_DISPUTE',
                            'RESERVE_REQUIREMENT', 'FRAUD_HOLD'
                        )),
    reference_type      TEXT,
    reference_id        UUID,
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'RELEASED', 'CONSUMED', 'CANCELLED')),
    expires_at          TIMESTAMPTZ,
    released_at         TIMESTAMPTZ,
    consumed_at         TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_wal_wallet_holds_wallet ON wal.wallet_holds (wallet_id, status);
CREATE INDEX ix_wal_wallet_holds_reference ON wal.wallet_holds (reference_type, reference_id)
    WHERE reference_id IS NOT NULL;

ALTER TABLE wal.wallet_holds ENABLE ROW LEVEL SECURITY;
ALTER TABLE wal.wallet_holds FORCE ROW LEVEL SECURITY;

CREATE POLICY wallet_holds_owner_select ON wal.wallet_holds
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY wallet_holds_admin_all ON wal.wallet_holds
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_wallet_holds
    AFTER INSERT OR UPDATE OR DELETE ON wal.wallet_holds
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 11.3.4 settlements

Settlement records for commerce, services, and learning transactions — linking to the 90/10 accounting chain.

```sql
CREATE TABLE wal.settlements (
    settlement_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    settlement_type    TEXT NOT NULL CHECK (settlement_type IN (
                            'COMMERCE', 'SERVICES', 'LEARNING',
                            'PLATFORM_FEE', 'PARTNER', 'REWARD_DISTRIBUTION'
                        )),
    source_transaction_id UUID NOT NULL,  -- Reference to econ.source_transactions (no FK)
    counterparty_id     UUID,  -- Vendor/Provider/Instructor/Partner account_id
    gross_revenue       NUMERIC(20,2) NOT NULL,
    deductions          NUMERIC(20,2) NOT NULL,
    qualifying_economic_value NUMERIC(20,2) NOT NULL,
    allocation_pool     NUMERIC(20,2) NOT NULL,  -- 90% of QEV
    reserve_amount      NUMERIC(20,2) NOT NULL,  -- 10% of QEV
    counterparty_amount NUMERIC(20,2),  -- Vendor/Provider/Instructor/Partner share
    platform_amount     NUMERIC(20,2) NOT NULL,
    reward_pool_amount  NUMERIC(20,2) NOT NULL,
    operational_amount  NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    status              TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'SETTLED', 'FAILED', 'REVERSED')),
    wallet_transaction_id UUID,  -- Reference to wal.wallet_transactions (no FK)
    settled_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

-- Check constraints enforcing 90/10 at the database level
ALTER TABLE wal.settlements
    ADD CONSTRAINT ck_wal_settlements_qev
    CHECK (qualifying_economic_value = gross_revenue - deductions);

ALTER TABLE wal.settlements
    ADD CONSTRAINT ck_wal_settlements_90_10_split
    CHECK (allocation_pool + reserve_amount = qualifying_economic_value);

ALTER TABLE wal.settlements
    ADD CONSTRAINT ck_wal_settlements_allocation_pool
    CHECK (allocation_pool = qualifying_economic_value * 0.90);

ALTER TABLE wal.settlements
    ADD CONSTRAINT ck_wal_settlements_reserve
    CHECK (reserve_amount = qualifying_economic_value * 0.10);

CREATE INDEX ix_wal_settlements_source ON wal.settlements (source_transaction_id);
CREATE INDEX ix_wal_settlements_counterparty ON wal.settlements (counterparty_id);
CREATE INDEX ix_wal_settlements_type ON wal.settlements (settlement_type);
CREATE INDEX ix_wal_settlements_status ON wal.settlements (status);

ALTER TABLE wal.settlements ENABLE ROW LEVEL SECURITY;
ALTER TABLE wal.settlements FORCE ROW LEVEL SECURITY;

CREATE POLICY settlements_counterparty_select ON wal.settlements
    FOR SELECT
    USING (counterparty_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY settlements_admin_all ON wal.settlements
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_settlements
    AFTER INSERT OR UPDATE OR DELETE ON wal.settlements
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 11.3.5 reserve_holdings

The reserve holdings table is structurally protected. Reserve funds can only be credited from settlement allocations and can only be debited through formal governance actions. This table makes the 10% reserve impossible to hide.

```sql
CREATE TABLE wal.reserve_holdings (
    reserve_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cycle_id            UUID NOT NULL,  -- K-Rewards cycle this reserve belongs to
    settlement_id       UUID NOT NULL,  -- Reference to wal.settlements (no FK)
    source_transaction_id UUID NOT NULL,  -- Reference to econ.source_transactions (no FK)
    reserve_amount       NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    reserve_type        TEXT NOT NULL CHECK (reserve_type IN (
                            'COMMERCE', 'SERVICES', 'LEARNING',
                            'PLATFORM_FEE', 'PARTNER'
                        )),
    status              TEXT NOT NULL DEFAULT 'HELD'
                        CHECK (status IN ('HELD', 'RELEASED', 'USED')),
    release_reason      TEXT,  -- Only set when released via governance
    governance_approval_ref TEXT,  -- Reference to governance approval for release
    released_at         TIMESTAMPTZ,
    audit_hash          VARCHAR(64) NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_wal_reserve_holdings_cycle ON wal.reserve_holdings (cycle_id);
CREATE INDEX ix_wal_reserve_holdings_source ON wal.reserve_holdings (source_transaction_id);
CREATE INDEX ix_wal_reserve_holdings_status ON wal.reserve_holdings (status) WHERE status = 'HELD';

ALTER TABLE wal.reserve_holdings ENABLE ROW LEVEL SECURITY;
ALTER TABLE wal.reserve_holdings FORCE ROW LEVEL SECURITY;

-- Reserve holdings are admin-only — participants cannot see reserve details directly
CREATE POLICY reserve_holdings_admin_all ON wal.reserve_holdings
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

-- Append-only protection — reserve records cannot be edited
CREATE TRIGGER trg_block_update_reserve_holdings BEFORE UPDATE ON wal.reserve_holdings
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
CREATE TRIGGER trg_block_delete_reserve_holdings BEFORE DELETE ON wal.reserve_holdings
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

#### 11.3.6 reversals

Reversal records for K-Points, wallet transactions, and settlements. Same-cycle reversals reverse the reserve; later-cycle reversals use deferred adjustment.

```sql
CREATE TABLE wal.reversals (
    reversal_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    original_transaction_id UUID NOT NULL,  -- Reference to wal.wallet_transactions (no FK)
    original_settlement_id UUID,  -- Reference to wal.settlements (no FK), if settlement reversal
    reversal_type       TEXT NOT NULL CHECK (reversal_type IN (
                            'SAME_CYCLE', 'LATER_CYCLE', 'CHARGEBACK', 'FRAUD_REVERSAL'
                        )),
    amount              NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    reason              TEXT NOT NULL,
    cycle_id            UUID NOT NULL,  -- Cycle of the original transaction
    current_cycle_id    UUID NOT NULL,  -- Current cycle (for same/later cycle determination)
    is_same_cycle       BOOLEAN NOT NULL,  -- True if reversal within same cycle
    reserve_reversed    BOOLEAN NOT NULL DEFAULT FALSE,  -- True if reserve was reversed (same-cycle only)
    deferred_adjustment BOOLEAN NOT NULL DEFAULT FALSE,  -- True if later-cycle deferred adjustment
    wallet_transaction_id UUID,  -- Reference to the reversal wallet transaction (no FK)
    approved_by         UUID,  -- Governance approver (if required)
    status              TEXT NOT NULL DEFAULT 'COMPLETED'
                        CHECK (status IN ('PENDING', 'COMPLETED', 'FAILED')),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at        TIMESTAMPTZ
);

CREATE INDEX ix_wal_reversals_original ON wal.reversals (original_transaction_id);
CREATE INDEX ix_wal_reversals_cycle ON wal.reversals (cycle_id, current_cycle_id);
CREATE INDEX ix_wal_reversals_type ON wal.reversals (reversal_type);

ALTER TABLE wal.reversals ENABLE ROW LEVEL SECURITY;
ALTER TABLE wal.reversals FORCE ROW LEVEL SECURITY;

CREATE POLICY reversals_admin_all ON wal.reversals
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_reversals
    AFTER INSERT OR UPDATE OR DELETE ON wal.reversals
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

### 11.4 Retention

| Table | Retention | Notes |
|---|---|---|
| wallets | Permanent | Updated in place |
| wallet_transactions | Permanent | Append-only, immutable |
| wallet_holds | 1 year | Released/expired holds purged |
| settlements | Permanent | |
| reserve_holdings | Permanent | Append-only, immutable |
| reversals | Permanent | |

### 11.5 Governing Requirement Traceability

SRS-WAL-001–014; SDD-1 Ch.11; SAD-1 Ch.14; PLC-1 Ch.24, 25, 31; KR-1 KR-ECO-001–013, KR-ECO-017, KR-ECO-054–059, KR-ECO-062–063, KR-FRD-004, KR-TRU-002, KR-GOV-030.

---

## Chapter 12 — Communication Engine Schema

### 12.1 Overview

The Communication Engine schema (`msg`) stores notifications, notification preferences, messages, announcements, and community contributions. Community contributions flow through the Communication Engine and feed the K-Rewards Engine as Community K-Points.

Implements: SRS-MSG-001–004; SDD-1 Ch.12; SAD-1 Ch.15; PLC-1 Ch.16, 32; KR-1 KR-PNT-003 (Community category), KR-PNT-002.

### 12.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS msg;
```

### 12.3 Table Definitions

#### 12.3.1 notifications

```sql
CREATE TABLE msg.notifications (
    notification_id     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    notification_type   TEXT NOT NULL CHECK (notification_type IN (
                            'ORDER_UPDATE', 'SERVICE_UPDATE', 'REWARD_DISTRIBUTION',
                            'KYC_UPDATE', 'DISPUTE_UPDATE', 'ANNOUNCEMENT',
                            'COMMUNITY_REPLY', 'LEARNING_UPDATE', 'SYSTEM_ALERT',
                            'CORONATION', 'KLEVEL_PROMOTION', 'TRUST_UPDATE'
                        )),
    title               VARCHAR(500) NOT NULL,
    body                TEXT NOT NULL,
    priority            TEXT NOT NULL DEFAULT 'NORMAL'
                        CHECK (priority IN ('LOW', 'NORMAL', 'HIGH', 'URGENT')),
    reference_type      TEXT,
    reference_id        UUID,
    is_read             BOOLEAN NOT NULL DEFAULT FALSE,
    read_at             TIMESTAMPTZ,
    action_url          VARCHAR(500),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at          TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '90 days')
);

CREATE INDEX ix_msg_notifications_account ON msg.notifications (account_id, is_read, created_at);
CREATE INDEX ix_msg_notifications_unread ON msg.notifications (account_id, created_at)
    WHERE is_read = FALSE;
CREATE INDEX ix_msg_notifications_type ON msg.notifications (notification_type);

ALTER TABLE msg.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE msg.notifications FORCE ROW LEVEL SECURITY;

CREATE POLICY notifications_owner_all ON msg.notifications
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY notifications_admin_all ON msg.notifications
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_notifications
    AFTER INSERT OR UPDATE OR DELETE ON msg.notifications
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 12.3.2 notification_preferences

```sql
CREATE TABLE msg.notification_preferences (
    preference_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    notification_type   TEXT NOT NULL,
    channel_email       BOOLEAN NOT NULL DEFAULT TRUE,
    channel_sms         BOOLEAN NOT NULL DEFAULT FALSE,
    channel_push        BOOLEAN NOT NULL DEFAULT TRUE,
    channel_in_app      BOOLEAN NOT NULL DEFAULT TRUE,
    is_enabled          BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_msg_notification_preferences_account_type
    ON msg.notification_preferences (account_id, notification_type);

ALTER TABLE msg.notification_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE msg.notification_preferences FORCE ROW LEVEL SECURITY;

CREATE POLICY notification_preferences_owner_all ON msg.notification_preferences
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY notification_preferences_admin_all ON msg.notification_preferences
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_notification_preferences
    AFTER INSERT OR UPDATE OR DELETE ON msg.notification_preferences
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 12.3.3 messages

```sql
CREATE TABLE msg.messages (
    message_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_id          UUID NOT NULL,
    recipient_id        UUID NOT NULL,
    conversation_id     UUID NOT NULL DEFAULT gen_random_uuid(),
    subject            VARCHAR(500),
    body               TEXT NOT NULL,
    status             TEXT NOT NULL DEFAULT 'SENT'
                        CHECK (status IN ('SENT', 'DELIVERED', 'READ', 'ARCHIVED', 'DELETED')),
    is_read_by_recipient BOOLEAN NOT NULL DEFAULT FALSE,
    read_at            TIMESTAMPTZ,
    parent_message_id  UUID REFERENCES msg.messages(message_id),
    attachments        JSONB NOT NULL DEFAULT '[]',
    is_deleted         BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at         TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_msg_messages_recipient ON msg.messages (recipient_id, is_read_by_recipient, created_at);
CREATE INDEX ix_msg_messages_sender ON msg.messages (sender_id, created_at);
CREATE INDEX ix_msg_messages_conversation ON msg.messages (conversation_id, created_at);

ALTER TABLE msg.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE msg.messages FORCE ROW LEVEL SECURITY;

CREATE POLICY messages_participant_all ON msg.messages
    FOR ALL
    USING (sender_id = current_setting('app.current_account_id')::UUID
           OR recipient_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (sender_id = current_setting('app.current_account_id')::UUID
                OR recipient_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY messages_admin_all ON msg.messages
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_messages
    AFTER INSERT OR UPDATE OR DELETE ON msg.messages
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 12.3.4 announcements

Platform-wide or targeted announcements from governance.

```sql
CREATE TABLE msg.announcements (
    announcement_id     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title               VARCHAR(500) NOT NULL,
    body                TEXT NOT NULL,
    audience            TEXT NOT NULL CHECK (audience IN (
                            'ALL', 'VENDORS', 'PROVIDERS', 'INSTRUCTORS',
                            'LEADERSHIP_TIER', 'KYC_VERIFIED', 'CUSTOM'
                        )),
    audience_filter     JSONB,  -- Additional targeting criteria
    status              TEXT NOT NULL DEFAULT 'DRAFT'
                        CHECK (status IN ('DRAFT', 'PUBLISHED', 'ARCHIVED', 'CANCELLED')),
    published_by        UUID NOT NULL,
    published_at        TIMESTAMPTZ,
    expires_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_msg_announcements_status ON msg.announcements (status, published_at)
    WHERE status = 'PUBLISHED';

ALTER TABLE msg.announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY announcements_public_select ON msg.announcements
    FOR SELECT
    USING (status = 'PUBLISHED' AND (expires_at IS NULL OR expires_at > NOW()));

CREATE POLICY announcements_admin_all ON msg.announcements
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_announcements
    AFTER INSERT OR UPDATE OR DELETE ON msg.announcements
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 12.3.5 community_contributions

Community contributions that feed the K-Rewards Engine as Community K-Points.

```sql
CREATE TABLE msg.community_contributions (
    contribution_id     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    contribution_type   TEXT NOT NULL CHECK (contribution_type IN (
                            'FORUM_POST', 'HELPFUL_ANSWER', 'KNOWLEDGE_SHARE',
                            'MENTORING', 'COMMUNITY_SERVICE', 'VOLUNTEER'
                        )),
    content_ref         TEXT NOT NULL,  -- Reference to the contributed content
    description         TEXT,
    kpoints_awarded     NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    kpoints_ledger_id   UUID,  -- Reference to krw.kpoints_ledger (no FK)
    verification_status TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (verification_status IN ('PENDING', 'VERIFIED', 'REJECTED')),
    verified_by         UUID,
    verified_at         TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_msg_community_contributions_account ON msg.community_contributions (account_id);
CREATE INDEX ix_msg_community_contributions_status ON msg.community_contributions (verification_status);

ALTER TABLE msg.community_contributions ENABLE ROW LEVEL SECURITY;
ALTER TABLE msg.community_contributions FORCE ROW LEVEL SECURITY;

CREATE POLICY community_contributions_owner_select ON msg.community_contributions
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY community_contributions_admin_all ON msg.community_contributions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_community_contributions
    AFTER INSERT OR UPDATE OR DELETE ON msg.community_contributions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

### 12.4 Retention

| Table | Retention | Notes |
|---|---|---|
| notifications | 1 year | Archived to cold storage after 1 year, purged after 2 years |
| notification_preferences | Permanent | |
| messages | 2 years | Archived to cold storage after 1 year |
| announcements | Permanent | |
| community_contributions | Permanent | Linked to K-Points ledger |

### 12.5 Governing Requirement Traceability

SRS-MSG-001–004; SDD-1 Ch.12; SAD-1 Ch.15; PLC-1 Ch.16, 32; KR-1 KR-PNT-003, KR-PNT-002.

---

## Chapter 13 — Intelligence Engine Schema

### 13.1 Overview

The Intelligence Engine schema (`int`) stores behavioral signals, recommendations, fraud signals, and analytics snapshots. The Intelligence Engine provides signals that other engines consume — it does **not** directly generate K-Points, modify Trust Scores, or impose sanctions (SDD-1 Ch.13; KR-1 Ch.47.3). Fraud signals are non-disclosed (KR-FRD-008).

Implements: SRS-INT-001–004; SDD-1 Ch.13; SAD-1 Ch.16; PLC-1 Ch.17, 27; KR-1 KR-FRD-002, KR-FRD-007, KR-FRD-008.

### 13.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS int;
```

### 13.3 Table Definitions

#### 13.3.1 behavioral_signals

```sql
CREATE TABLE int.behavioral_signals (
    signal_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    signal_type         TEXT NOT NULL CHECK (signal_type IN (
                            'LOGIN_PATTERN', 'BROWSE_PATTERN', 'PURCHASE_PATTERN',
                            'SEARCH_PATTERN', 'ENGAGEMENT_LEVEL', 'PREFERENCE_SHIFT',
                            'ACTIVITY_FREQUENCY', 'DEVICE_FINGERPRINT'
                        )),
    signal_value        JSONB NOT NULL,  -- Structured signal data
    signal_score        NUMERIC(5,2),  -- Normalized score 0.00–100.00
    source_engine       TEXT NOT NULL,
    source_event_ref    TEXT,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_int_behavioral_signals_account ON int.behavioral_signals (account_id, created_at);
CREATE INDEX ix_int_behavioral_signals_type ON int.behavioral_signals (signal_type, created_at);

ALTER TABLE int.behavioral_signals ENABLE ROW LEVEL SECURITY;
ALTER TABLE int.behavioral_signals FORCE ROW LEVEL SECURITY;

CREATE POLICY behavioral_signals_admin_all ON int.behavioral_signals
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

-- No owner-select policy: behavioral signals are internal — not exposed to participants
```

#### 13.3.2 recommendations

```sql
CREATE TABLE int.recommendations (
    recommendation_id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    recommendation_type TEXT NOT NULL CHECK (recommendation_type IN (
                            'PRODUCT', 'SERVICE', 'COURSE', 'PROVIDER',
                            'LEARNING_PATH', 'COMMUNITY', 'VENDOR'
                        )),
    target_id           UUID NOT NULL,  -- ID of recommended entity
    target_type         TEXT NOT NULL,
    relevance_score     NUMERIC(5,2) NOT NULL,  -- 0.00–100.00
    recommendation_reason TEXT,
    is_personalized     BOOLEAN NOT NULL DEFAULT TRUE,
    personalization_consent BOOLEAN NOT NULL DEFAULT FALSE,  -- GDPR consent flag
    is_dismissed        BOOLEAN NOT NULL DEFAULT FALSE,
    dismissed_at        TIMESTAMPTZ,
    is_clicked          BOOLEAN NOT NULL DEFAULT FALSE,
    clicked_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at          TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '30 days')
);

CREATE INDEX ix_int_recommendations_account ON int.recommendations (account_id, is_dismissed, created_at);
CREATE INDEX ix_int_recommendations_type ON int.recommendations (recommendation_type, relevance_score)
    WHERE is_dismissed = FALSE;

ALTER TABLE int.recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE int.recommendations FORCE ROW LEVEL SECURITY;

CREATE POLICY recommendations_owner_select ON int.recommendations
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY recommendations_admin_all ON int.recommendations
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_recommendations
    AFTER INSERT OR UPDATE OR DELETE ON int.recommendations
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 13.3.3 fraud_signals

Fraud signals are non-disclosed (KR-FRD-008). Participants cannot see their own fraud signals.

```sql
CREATE TABLE int.fraud_signals (
    fraud_signal_id     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    signal_category     TEXT NOT NULL CHECK (signal_category IN (
                            'ARTIFICIAL_TRANSACTION', 'CIRCULAR_REFERRAL',
                            'DUPLICATE_ACCOUNT', 'BOT_ACTIVITY',
                            'RING_INFLATION', 'REVIEW_MANIPULATION',
                            'SELF_TRANSACTION', 'CIRCULAR_PURCHASE'
                        )),
    detection_method    TEXT NOT NULL CHECK (detection_method IN (
                            'PATTERN_ANALYSIS', 'GRAPH_TRAVERSAL',
                            'STATISTICAL_ANOMALY', 'BEHAVIORAL_FINGERPRINT',
                            'VELOCITY_CHECK', 'CROSS_ENGINE_CORRELATION'
                        )),
    signal_strength     NUMERIC(5,2) NOT NULL,  -- 0.00–100.00
    confidence_score    NUMERIC(5,2) NOT NULL,  -- 0.00–100.00
    evidence            JSONB NOT NULL,  -- Structured evidence (non-disclosed to participant)
    source_engines      JSONB NOT NULL DEFAULT '[]',  -- Engines that contributed signals
    is_corroborated     BOOLEAN NOT NULL DEFAULT FALSE,  -- KR-FRD-002: multi-signal corroboration
    corroborating_signals JSONB NOT NULL DEFAULT '[]',  -- References to corroborating fraud_signal_ids
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'INVESTIGATING', 'CONFIRMED', 'FALSE_POSITIVE', 'ARCHIVED')),
    escalated_to_admin  BOOLEAN NOT NULL DEFAULT FALSE,
    admin_case_id       UUID,  -- Reference to adm.moderation_cases (no FK)
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_int_fraud_signals_account ON int.fraud_signals (account_id, status);
CREATE INDEX ix_int_fraud_signals_category ON int.fraud_signals (signal_category, status);
CREATE INDEX ix_int_fraud_signals_corroborated ON int.fraud_signals (is_corroborated, status)
    WHERE status = 'ACTIVE';

ALTER TABLE int.fraud_signals ENABLE ROW LEVEL SECURITY;
ALTER TABLE int.fraud_signals FORCE ROW LEVEL SECURITY;

-- No owner-select: fraud signals are non-disclosed (KR-FRD-008)
CREATE POLICY fraud_signals_admin_all ON int.fraud_signals
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_fraud_signals
    AFTER INSERT OR UPDATE OR DELETE ON int.fraud_signals
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 13.3.4 analytics_snapshots

```sql
CREATE TABLE int.analytics_snapshots (
    snapshot_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    snapshot_type       TEXT NOT NULL CHECK (snapshot_type IN (
                            'PLATFORM_OVERVIEW', 'COMMERCE_METRICS',
                            'SERVICES_METRICS', 'LEARNING_METRICS',
                            'KREWARDS_METRICS', 'USER_ENGAGEMENT',
                            'REVENUE_SUMMARY', 'TRUST_DISTRIBUTION'
                        )),
    snapshot_period     TEXT NOT NULL CHECK (snapshot_period IN ('DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY')),
    period_start        TIMESTAMPTZ NOT NULL,
    period_end          TIMESTAMPTZ NOT NULL,
    metrics             JSONB NOT NULL,  -- Structured metrics data
    generated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_int_analytics_snapshots_type ON int.analytics_snapshots (snapshot_type, period_start);
CREATE INDEX ix_int_analytics_snapshots_period ON int.analytics_snapshots (snapshot_period, period_start);

ALTER TABLE int.analytics_snapshots ENABLE ROW LEVEL SECURITY;

CREATE POLICY analytics_snapshots_admin_select ON int.analytics_snapshots
    FOR SELECT TO admin_role USING (true);

CREATE POLICY analytics_snapshots_admin_all ON int.analytics_snapshots
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

### 13.4 Retention

| Table | Retention | Notes |
|---|---|---|
| behavioral_signals | 1 year | Purged after 1 year |
| recommendations | 30 days | Purged after expiration/dismissal |
| fraud_signals | 5 years | Retained for fraud analysis and audit |
| analytics_snapshots | 2 years | Archived to cold storage after 1 year |

### 13.5 Governing Requirement Traceability

SRS-INT-001–004; SDD-1 Ch.13; SAD-1 Ch.16; PLC-1 Ch.17, 27; KR-1 KR-FRD-002, KR-FRD-007, KR-FRD-008, KR-TRU-007.

---

## Chapter 14 — Administration Engine Schema

### 14.1 Overview

The Administration Engine schema (`adm`) stores governance reviews, policy enforcement records, moderation cases, disputes, sanctions, appeals, and compliance flags. The Administration Engine is the sole authority for governance enforcement, policy enforcement, moderation, dispute resolution, audit logging, access management, compliance monitoring, the anti-fraud process, and sanctions. It operates under the governance framework (GOV-0) and is subordinate to PLC-1, KR-1, and CMP-0.

Implements: SRS-ADM-001–008; SDD-1 Ch.14; SAD-1 Ch.17; PLC-1 Ch.18, 27, 32, 33.5; KR-1 KR-GOV-001–004, KR-FRD-002–012, KR-GOV-030; GOV-0; CMP-0.

### 14.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS adm;
```

### 14.3 Table Definitions

#### 14.3.1 governance_reviews

```sql
CREATE TABLE adm.governance_reviews (
    review_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_type        TEXT NOT NULL CHECK (subject_type IN (
                            'ACCOUNT', 'VENDOR', 'PROVIDER', 'INSTRUCTOR',
                            'PRODUCT', 'COURSE', 'SERVICE_LISTING',
                            'TRANSACTION', 'KLEVEL_PROMOTION', 'CORONATION'
                        )),
    subject_id          UUID NOT NULL,
    review_reason       TEXT NOT NULL,
    initiated_by        UUID NOT NULL,
    status              TEXT NOT NULL DEFAULT 'OPEN'
                        CHECK (status IN ('OPEN', 'UNDER_REVIEW', 'APPROVED', 'REJECTED', 'WITHDRAWN')),
    four_part_test      JSONB NOT NULL,  -- KR-GOV-002: constitutional, economic, ethical, compliance
    decision            TEXT,
    decision_rationale  TEXT,
    decided_by          UUID,
    decided_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_adm_governance_reviews_subject ON adm.governance_reviews (subject_type, subject_id);
CREATE INDEX ix_adm_governance_reviews_status ON adm.governance_reviews (status);

ALTER TABLE adm.governance_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE adm.governance_reviews FORCE ROW LEVEL SECURITY;

CREATE POLICY governance_reviews_admin_all ON adm.governance_reviews
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_governance_reviews
    AFTER INSERT OR UPDATE OR DELETE ON adm.governance_reviews
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 14.3.2 policy_enforcements

```sql
CREATE TABLE adm.policy_enforcements (
    enforcement_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    policy_rule_id      TEXT NOT NULL,  -- Reference to the policy rule (e.g., KR-1 rule, PLC-1 chapter)
    policy_source       TEXT NOT NULL CHECK (policy_source IN ('PLC-1', 'KR-1', 'GOV-0', 'CMP-0', 'SRS-1')),
    subject_type        TEXT NOT NULL,
    subject_id          UUID NOT NULL,
    violation_type      TEXT NOT NULL,
    violation_details   JSONB NOT NULL,
    enforcement_action  TEXT NOT NULL,
    enforced_by         UUID NOT NULL,
    status              TEXT NOT NULL DEFAULT 'ENFORCED'
                        CHECK (status IN ('PENDING', 'ENFORCED', 'REVERSED', 'APPEALED')),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_adm_policy_enforcements_rule ON adm.policy_enforcements (policy_rule_id);
CREATE INDEX ix_adm_policy_enforcements_subject ON adm.policy_enforcements (subject_type, subject_id);
CREATE INDEX ix_adm_policy_enforcements_status ON adm.policy_enforcements (status);

ALTER TABLE adm.policy_enforcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE adm.policy_enforcements FORCE ROW LEVEL SECURITY;

CREATE POLICY policy_enforcements_admin_all ON adm.policy_enforcements
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_policy_enforcements
    AFTER INSERT OR UPDATE OR DELETE ON adm.policy_enforcements
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 14.3.3 moderation_cases

```sql
CREATE TABLE adm.moderation_cases (
    case_id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    case_type           TEXT NOT NULL CHECK (case_type IN (
                            'CONTENT_REVIEW', 'FRAUD_INVESTIGATION',
                            'DISPUTE_RESOLUTION', 'ACCOUNT_REVIEW',
                            'LISTING_REVIEW', 'REVIEW_MANIPULATION'
                        )),
    subject_type        TEXT NOT NULL,
    subject_id          UUID NOT NULL,
    reported_by         UUID,  -- NULL if auto-flagged
    fraud_signal_id     UUID,  -- Reference to int.fraud_signals (no FK), if fraud-related
    reason              TEXT NOT NULL,
    description         TEXT,
    evidence            JSONB NOT NULL DEFAULT '[]',
    status              TEXT NOT NULL DEFAULT 'OPEN'
                        CHECK (status IN ('OPEN', 'UNDER_REVIEW', 'RESOLVED', 'ESCALATED', 'CLOSED')),
    resolution          TEXT,
    resolution_notes    TEXT,
    resolved_by         UUID,
    resolved_at         TIMESTAMPTZ,
    priority            TEXT NOT NULL DEFAULT 'NORMAL'
                        CHECK (priority IN ('LOW', 'NORMAL', 'HIGH', 'URGENT')),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_adm_moderation_cases_subject ON adm.moderation_cases (subject_type, subject_id);
CREATE INDEX ix_adm_moderation_cases_status ON adm.moderation_cases (status, priority);
CREATE INDEX ix_adm_moderation_cases_reported_by ON adm.moderation_cases (reported_by);

ALTER TABLE adm.moderation_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE adm.moderation_cases FORCE ROW LEVEL SECURITY;

CREATE POLICY moderation_cases_admin_all ON adm.moderation_cases
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE POLICY moderation_cases_reporter_select ON adm.moderation_cases
    FOR SELECT
    USING (reported_by = current_setting('app.current_account_id')::UUID);

CREATE TRIGGER trg_audit_moderation_cases
    AFTER INSERT OR UPDATE OR DELETE ON adm.moderation_cases
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 14.3.4 admin_disputes

Platform-level disputes (separate from commerce/service-specific disputes).

```sql
CREATE TABLE adm.admin_disputes (
    dispute_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dispute_type       TEXT NOT NULL CHECK (dispute_type IN (
                            'TRANSACTION', 'REFUND', 'VENDOR_CLIENT',
                            'PROVIDER_CLIENT', 'INSTRUCTOR_LEARNER',
                            'PARTNER', 'INTER_ENGINE'
                        )),
    filed_by           UUID NOT NULL,
    filed_against      UUID,
    subject_type       TEXT NOT NULL,
    subject_id         UUID NOT NULL,
    reason             TEXT NOT NULL,
    description        TEXT,
    evidence           JSONB NOT NULL DEFAULT '[]',
    status            TEXT NOT NULL DEFAULT 'OPEN'
                        CHECK (status IN ('OPEN', 'UNDER_REVIEW', 'RESOLVED_FAVORABLY', 'RESOLVED_UNFAVORABLY', 'ESCALATED', 'CLOSED')),
    resolution        TEXT,
    resolution_notes  TEXT,
    resolved_by       UUID,
    resolved_at       TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_adm_admin_disputes_filed_by ON adm.admin_disputes (filed_by);
CREATE INDEX ix_adm_admin_disputes_status ON adm.admin_disputes (status);

ALTER TABLE adm.admin_disputes ENABLE ROW LEVEL SECURITY;
ALTER TABLE adm.admin_disputes FORCE ROW LEVEL SECURITY;

CREATE POLICY admin_disputes_filer_select ON adm.admin_disputes
    FOR SELECT
    USING (filed_by = current_setting('app.current_account_id')::UUID
           OR filed_against = current_setting('app.current_account_id')::UUID);

CREATE POLICY admin_disputes_admin_all ON adm.admin_disputes
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_admin_disputes
    AFTER INSERT OR UPDATE OR DELETE ON adm.admin_disputes
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 14.3.5 sanctions

```sql
CREATE TABLE adm.sanctions (
    sanction_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    moderation_case_id  UUID REFERENCES adm.moderation_cases(case_id),
    severity_level      INTEGER NOT NULL CHECK (severity_level >= 1 AND severity_level <= 7),
    sanction_type       TEXT NOT NULL CHECK (sanction_type IN (
                            'WARNING', 'CONTENT_REMOVAL', 'TEMPORARY_SUSPENSION',
                            'KPOINTS_REVERSAL', 'TRUST_PENALTY', 'PERMANENT_BAN',
                            'LEGAL_REFERRAL'
                        )),
    description         TEXT NOT NULL,
    effective_from      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    effective_until     TIMESTAMPTZ,  -- NULL for permanent
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    imposed_by          UUID NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_adm_sanctions_account ON adm.sanctions (account_id, is_active);
CREATE INDEX ix_adm_sanctions_severity ON adm.sanctions (severity_level, is_active) WHERE is_active = TRUE;

ALTER TABLE adm.sanctions ENABLE ROW LEVEL SECURITY;
ALTER TABLE adm.sanctions FORCE ROW LEVEL SECURITY;

CREATE POLICY sanctions_owner_select ON adm.sanctions
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY sanctions_admin_all ON adm.sanctions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_sanctions
    AFTER INSERT OR UPDATE OR DELETE ON adm.sanctions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 14.3.6 appeals

Appeals are non-waivable, non-forfeitable, and require no payment (KR-GOV-004).

```sql
CREATE TABLE adm.appeals (
    appeal_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sanction_id         UUID NOT NULL REFERENCES adm.sanctions(sanction_id),
    account_id          UUID NOT NULL,
    appeal_reason       TEXT NOT NULL,
    appeal_evidence     JSONB NOT NULL DEFAULT '[]',
    status              TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'UNDER_REVIEW', 'UPHELD', 'OVERTURNED', 'PARTIALLY_UPHELD', 'REJECTED')),
    review_notes        TEXT,
    reviewed_by         UUID,
    reviewed_at         TIMESTAMPTZ,
    appeal_fee_required BOOLEAN NOT NULL DEFAULT FALSE,  -- Always FALSE per KR-GOV-004
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_adm_appeals_account ON adm.appeals (account_id, status);
CREATE INDEX ix_adm_appeals_sanction ON adm.appeals (sanction_id);

-- Check constraint: no appeal fee (KR-GOV-004)
ALTER TABLE adm.appeals
    ADD CONSTRAINT ck_adm_appeals_no_fee
    CHECK (appeal_fee_required = FALSE);

ALTER TABLE adm.appeals ENABLE ROW LEVEL SECURITY;
ALTER TABLE adm.appeals FORCE ROW LEVEL SECURITY;

CREATE POLICY appeals_owner_select ON adm.appeals
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY appeals_admin_all ON adm.appeals
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_appeals
    AFTER INSERT OR UPDATE OR DELETE ON adm.appeals
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 14.3.7 compliance_flags

```sql
CREATE TABLE adm.compliance_flags (
    flag_id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    flag_type           TEXT NOT NULL CHECK (flag_type IN (
                            'KYC_EXPIRY', 'AML_ALERT', 'SANCTION_SCREEN',
                            'GDPR_REQUEST', 'DATA_RETENTION', 'AUDIT_REQUIREMENT',
                            'REGULATORY_REPORT', 'PRIVACY_VIOLATION'
                        )),
    subject_type        TEXT NOT NULL,
    subject_id          UUID NOT NULL,
    severity            TEXT NOT NULL DEFAULT 'NORMAL'
                        CHECK (severity IN ('LOW', 'NORMAL', 'HIGH', 'CRITICAL')),
    description         TEXT NOT NULL,
    regulatory_ref      TEXT,  -- Reference to applicable regulation
    status              TEXT NOT NULL DEFAULT 'OPEN'
                        CHECK (status IN ('OPEN', 'IN_REVIEW', 'RESOLVED', 'ESCALATED', 'CLOSED')),
    resolution          TEXT,
    resolved_by         UUID,
    resolved_at         TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_adm_compliance_flags_type ON adm.compliance_flags (flag_type, status);
CREATE INDEX ix_adm_compliance_flags_severity ON adm.compliance_flags (severity, status) WHERE status = 'OPEN';

ALTER TABLE adm.compliance_flags ENABLE ROW LEVEL SECURITY;
ALTER TABLE adm.compliance_flags FORCE ROW LEVEL SECURITY;

CREATE POLICY compliance_flags_admin_all ON adm.compliance_flags
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_compliance_flags
    AFTER INSERT OR UPDATE OR DELETE ON adm.compliance_flags
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

### 14.4 Retention

| Table | Retention | Notes |
|---|---|---|
| governance_reviews | Permanent | Governance audit trail |
| policy_enforcements | Permanent | |
| moderation_cases | 5 years | |
| admin_disputes | 5 years | |
| sanctions | Permanent | |
| appeals | Permanent | |
| compliance_flags | 7 years | Regulatory requirement |

### 14.5 Governing Requirement Traceability

SRS-ADM-001–008; SDD-1 Ch.14; SAD-1 Ch.17; PLC-1 Ch.18, 27, 32, 33.5; KR-1 KR-GOV-001–004, KR-FRD-002–012, KR-GOV-030, KR-LVL-024; GOV-0; CMP-0.

---

## Chapter 15 — Integration Engine Schema

### 15.1 Overview

The Integration Engine schema (`igr`) is the sole gateway through which the platform interacts with external systems. It governs partner APIs, webhooks, SDKs, OAuth/OIDC, API keys, tenant isolation, API versioning, rate limits, and audit logs. Partner transactions flow through the Integration Engine and follow the Partner revenue waterfall. All external interactions are isolated by `partner_id` with RLS enforcement.

Implements: SRS-IGR-001–010; SDD-1 Ch.15; SAD-1 Ch.18; PLC-1 Ch.31, 25, 32; KR-1 KR-ECO-014, KR-ECO-017.

### 15.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS igr;
```

### 15.3 Table Definitions

#### 15.3.1 partners

```sql
CREATE TABLE igr.partners (
    partner_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partner_name        VARCHAR(200) NOT NULL,
    partner_slug        VARCHAR(200) NOT NULL,
    partner_type        TEXT NOT NULL CHECK (partner_type IN (
                            'WEBSITE', 'APP', 'COMPANY', 'MARKETPLACE',
                            'PAYMENT_PROVIDER', 'LEARNING_PROVIDER',
                            'SERVICE_PROVIDER', 'INTEGRATION_PLATFORM'
                        )),
    description         TEXT,
    status              TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'ACTIVE', 'SUSPENDED', 'DEACTIVATED', 'REVOKED')),
    contact_email       VARCHAR(255) NOT NULL,
    contact_phone       VARCHAR(30),
    contract_ref        TEXT,  -- Reference to legal contract
    is_deleted          BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_igr_partners_slug
    ON igr.partners (partner_slug)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_igr_partners_status ON igr.partners (status) WHERE status = 'ACTIVE';

ALTER TABLE igr.partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE igr.partners FORCE ROW LEVEL SECURITY;

CREATE POLICY partners_admin_all ON igr.partners
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE POLICY partners_partner_select ON igr.partners
    FOR SELECT
    USING (partner_id = current_setting('app.current_partner_id')::UUID);

CREATE TRIGGER trg_audit_partners
    AFTER INSERT OR UPDATE OR DELETE ON igr.partners
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

CREATE OR REPLACE FUNCTION igr.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_partners_updated_at
    BEFORE UPDATE ON igr.partners
    FOR EACH ROW EXECUTE FUNCTION igr.fn_set_updated_at();
```

#### 15.3.2 api_clients

```sql
CREATE TABLE igr.api_clients (
    client_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partner_id          UUID NOT NULL REFERENCES igr.partners(partner_id),
    client_name         VARCHAR(200) NOT NULL,
    client_type         TEXT NOT NULL CHECK (client_type IN ('CONFIDENTIAL', 'PUBLIC')),
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'SUSPENDED', 'REVOKED')),
    is_deleted          BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_igr_api_clients_name
    ON igr.api_clients (partner_id, client_name)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_igr_api_clients_partner ON igr.api_clients (partner_id);

ALTER TABLE igr.api_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE igr.api_clients FORCE ROW LEVEL SECURITY;

CREATE POLICY api_clients_partner_select ON igr.api_clients
    FOR SELECT
    USING (partner_id = current_setting('app.current_partner_id')::UUID);

CREATE POLICY api_clients_admin_all ON igr.api_clients
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_api_clients
    AFTER INSERT OR UPDATE OR DELETE ON igr.api_clients
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 15.3.3 api_credentials

```sql
CREATE TABLE igr.api_credentials (
    credential_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id          UUID NOT NULL REFERENCES igr.api_clients(client_id),
    partner_id         UUID NOT NULL REFERENCES igr.partners(partner_id),
    credential_type    TEXT NOT NULL CHECK (credential_type IN (
                            'API_KEY', 'OAUTH_CLIENT_SECRET', 'OIDC_CLIENT_SECRET',
                            'JWT_SIGNING_KEY', 'BASIC_AUTH'
                        )),
    credential_key_enc BYTEA NOT NULL,  -- AES-256-GCM encrypted credential
    encryption_key_id  UUID NOT NULL REFERENCES shared.encryption_key_registry(key_id),
    key_prefix         VARCHAR(20) NOT NULL,  -- Non-secret prefix for identification
    scopes             JSONB NOT NULL DEFAULT '[]',  -- Array of scope codes
    expires_at         TIMESTAMPTZ,
    status             TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'EXPIRED', 'REVOKED', 'ROTATED')),
    last_used_at       TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_igr_api_credentials_client ON igr.api_credentials (client_id, status);
CREATE INDEX ix_igr_api_credentials_partner ON igr.api_credentials (partner_id, status);

ALTER TABLE igr.api_credentials ENABLE ROW LEVEL SECURITY;
ALTER TABLE igr.api_credentials FORCE ROW LEVEL SECURITY;

CREATE POLICY api_credentials_partner_select ON igr.api_credentials
    FOR SELECT
    USING (partner_id = current_setting('app.current_partner_id')::UUID);

-- Note: credential_key_enc is never returned to API — only key_prefix is shown
CREATE POLICY api_credentials_admin_all ON igr.api_credentials
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_api_credentials
    AFTER INSERT OR UPDATE OR DELETE ON igr.api_credentials
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 15.3.4 api_scopes

```sql
CREATE TABLE igr.api_scopes (
    scope_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    scope_code          TEXT NOT NULL,
    scope_name          VARCHAR(200) NOT NULL,
    description         TEXT,
    scope_category      TEXT NOT NULL CHECK (scope_category IN (
                            'COMMERCE', 'SERVICES', 'LEARNING', 'KREWARDS',
                            'WALLET', 'IDENTITY', 'COMMUNICATION',
                            'ADMINISTRATION', 'PLATFORM'
                        )),
    is_read_only        BOOLEAN NOT NULL DEFAULT FALSE,
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_igr_api_scopes_code ON igr.api_scopes (scope_code);
CREATE INDEX ix_igr_api_scopes_category ON igr.api_scopes (scope_category, is_active) WHERE is_active = TRUE;

ALTER TABLE igr.api_scopes ENABLE ROW LEVEL SECURITY;

CREATE POLICY api_scopes_public_select ON igr.api_scopes
    FOR SELECT
    USING (is_active = TRUE);

CREATE POLICY api_scopes_admin_all ON igr.api_scopes
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 15.3.5 webhook_endpoints

```sql
CREATE TABLE igr.webhook_endpoints (
    endpoint_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partner_id          UUID NOT NULL REFERENCES igr.partners(partner_id),
    url                 VARCHAR(1000) NOT NULL,
    description         TEXT,
    secret_enc          BYTEA,  -- AES-256-GCM encrypted signing secret
    encryption_key_id   UUID REFERENCES shared.encryption_key_registry(key_id),
    subscribed_events   JSONB NOT NULL DEFAULT '[]',  -- Array of event types
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX ix_igr_webhook_endpoints_partner ON igr.webhook_endpoints (partner_id, is_active);

ALTER TABLE igr.webhook_endpoints ENABLE ROW LEVEL SECURITY;
ALTER TABLE igr.webhook_endpoints FORCE ROW LEVEL SECURITY;

CREATE POLICY webhook_endpoints_partner_all ON igr.webhook_endpoints
    FOR ALL
    USING (partner_id = current_setting('app.current_partner_id')::UUID)
    WITH CHECK (partner_id = current_setting('app.current_partner_id')::UUID);

CREATE POLICY webhook_endpoints_admin_all ON igr.webhook_endpoints
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_webhook_endpoints
    AFTER INSERT OR UPDATE OR DELETE ON igr.webhook_endpoints
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 15.3.6 webhook_deliveries

```sql
CREATE TABLE igr.webhook_deliveries (
    delivery_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    endpoint_id        UUID NOT NULL REFERENCES igr.webhook_endpoints(endpoint_id),
    partner_id         UUID NOT NULL,
    event_id           UUID NOT NULL,  -- Reference to shared.event_store (no FK)
    event_type         TEXT NOT NULL,
    payload            JSONB NOT NULL,
    http_status        INTEGER,  -- HTTP response status code
    response_body      TEXT,
    attempt_number     INTEGER NOT NULL DEFAULT 1,
    delivery_status    TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (delivery_status IN ('PENDING', 'DELIVERED', 'FAILED', 'RETRYING', 'DEAD_LETTER')),
    next_retry_at      TIMESTAMPTZ,
    delivered_at       TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_igr_webhook_deliveries_endpoint ON igr.webhook_deliveries (endpoint_id, delivery_status);
CREATE INDEX ix_igr_webhook_deliveries_partner ON igr.webhook_deliveries (partner_id);
CREATE INDEX ix_igr_webhook_deliveries_pending ON igr.webhook_deliveries (delivery_status, next_retry_at)
    WHERE delivery_status IN ('PENDING', 'RETRYING');

ALTER TABLE igr.webhook_deliveries ENABLE ROW LEVEL SECURITY;
ALTER TABLE igr.webhook_deliveries FORCE ROW LEVEL SECURITY;

CREATE POLICY webhook_deliveries_partner_select ON igr.webhook_deliveries
    FOR SELECT
    USING (partner_id = current_setting('app.current_partner_id')::UUID);

CREATE POLICY webhook_deliveries_admin_all ON igr.webhook_deliveries
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 15.3.7 event_subscriptions

```sql
CREATE TABLE igr.event_subscriptions (
    subscription_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partner_id         UUID NOT NULL REFERENCES igr.partners(partner_id),
    event_type         TEXT NOT NULL,  -- Event type to subscribe to (e.g., "com.order.created")
    subscription_type  TEXT NOT NULL CHECK (subscription_type IN ('WEBHOOK', 'POLLING', 'STREAM')),
    description        TEXT,
    filter_expression  TEXT,  -- Optional filter for event payloads
    is_active          BOOLEAN NOT NULL DEFAULT TRUE,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_igr_event_subscriptions_partner ON igr.event_subscriptions (partner_id, is_active);
CREATE INDEX ix_igr_event_subscriptions_event ON igr.event_subscriptions (event_type, is_active) WHERE is_active = TRUE;

ALTER TABLE igr.event_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE igr.event_subscriptions FORCE ROW LEVEL SECURITY;

CREATE POLICY event_subscriptions_partner_all ON igr.event_subscriptions
    FOR ALL
    USING (partner_id = current_setting('app.current_partner_id')::UUID)
    WITH CHECK (partner_id = current_setting('app.current_partner_id')::UUID);

CREATE POLICY event_subscriptions_admin_all ON igr.event_subscriptions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_event_subscriptions
    AFTER INSERT OR UPDATE OR DELETE ON igr.event_subscriptions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 15.3.8 api_versions

```sql
CREATE TABLE igr.api_versions (
    version_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    api_version         TEXT NOT NULL,  -- e.g., "v1", "v2"
    release_date        TIMESTAMPTZ NOT NULL,
    deprecation_date    TIMESTAMPTZ,
    sunset_date         TIMESTAMPTZ,
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('BETA', 'ACTIVE', 'DEPRECATED', 'SUNSET', 'RETIRED')),
    release_notes       TEXT,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_igr_api_versions_version ON igr.api_versions (api_version);
CREATE INDEX ix_igr_api_versions_status ON igr.api_versions (status);

ALTER TABLE igr.api_versions ENABLE ROW LEVEL SECURITY;

CREATE POLICY api_versions_public_select ON igr.api_versions
    FOR SELECT
    USING (status IN ('BETA', 'ACTIVE', 'DEPRECATED'));

CREATE POLICY api_versions_admin_all ON igr.api_versions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_api_versions
    AFTER INSERT OR UPDATE OR DELETE ON igr.api_versions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 15.3.9 api_request_logs

```sql
CREATE TABLE igr.api_request_logs (
    log_id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partner_id          UUID NOT NULL,
    client_id           UUID NOT NULL,
    api_version         TEXT NOT NULL,
    endpoint            VARCHAR(500) NOT NULL,
    method              TEXT NOT NULL CHECK (method IN ('GET', 'POST', 'PUT', 'PATCH', 'DELETE')),
    status_code         INTEGER NOT NULL,
    request_ip          INET,
    request_payload     JSONB,  -- Sanitized (no secrets)
    response_size_bytes INTEGER,
    duration_ms         INTEGER NOT NULL,
    rate_limit_remaining INTEGER,
    rate_limit_reset_at TIMESTAMPTZ,
    correlation_id      UUID,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_igr_api_request_logs_partner ON igr.api_request_logs (partner_id, created_at);
CREATE INDEX ix_igr_api_request_logs_endpoint ON igr.api_request_logs (endpoint, method);
CREATE INDEX ix_igr_api_request_logs_status ON igr.api_request_logs (status_code, created_at);

ALTER TABLE igr.api_request_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE igr.api_request_logs FORCE ROW LEVEL SECURITY;

CREATE POLICY api_request_logs_partner_select ON igr.api_request_logs
    FOR SELECT
    USING (partner_id = current_setting('app.current_partner_id')::UUID);

CREATE POLICY api_request_logs_admin_all ON igr.api_request_logs
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 15.3.10 partner_transactions

Partner transaction records linking to the 90/10 accounting chain.

```sql
CREATE TABLE igr.partner_transactions (
    transaction_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partner_id          UUID NOT NULL REFERENCES igr.partners(partner_id),
    source_transaction_id UUID NOT NULL,  -- Reference to econ.source_transactions (no FK)
    gross_revenue       NUMERIC(20,2) NOT NULL,
    deductions          NUMERIC(20,2) NOT NULL,
    qualifying_economic_value NUMERIC(20,2) NOT NULL,
    partner_amount      NUMERIC(20,2) NOT NULL,  -- 40% of QEV (counterparty share)
    platform_amount     NUMERIC(20,2) NOT NULL,  -- 35% of QEV (platform share)
    reward_pool_amount  NUMERIC(20,2) NOT NULL,  -- 10% + 3% of QEV (rewards + leadership)
    operational_amount  NUMERIC(20,2) NOT NULL,  -- 2% of QEV
    reserve_amount      NUMERIC(20,2) NOT NULL,  -- 10% of QEV
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    status              TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'SETTLED', 'FAILED', 'REVERSED')),
    wallet_transaction_id UUID,
    settled_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

-- Partner waterfall: counterparty 40%, platform 35%, rewards 10%, leadership 3%, operational 2% = 90%
ALTER TABLE igr.partner_transactions
    ADD CONSTRAINT ck_igr_partner_qev
    CHECK (qualifying_economic_value = gross_revenue - deductions);

ALTER TABLE igr.partner_transactions
    ADD CONSTRAINT ck_igr_partner_allocation_sum
    CHECK (partner_amount + platform_amount + reward_pool_amount + operational_amount =
           qualifying_economic_value * 0.90);

ALTER TABLE igr.partner_transactions
    ADD CONSTRAINT ck_igr_partner_reserve
    CHECK (reserve_amount = qualifying_economic_value * 0.10);

CREATE INDEX ix_igr_partner_transactions_partner ON igr.partner_transactions (partner_id, status);
CREATE INDEX ix_igr_partner_transactions_source ON igr.partner_transactions (source_transaction_id);

ALTER TABLE igr.partner_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE igr.partner_transactions FORCE ROW LEVEL SECURITY;

CREATE POLICY partner_transactions_partner_select ON igr.partner_transactions
    FOR SELECT
    USING (partner_id = current_setting('app.current_partner_id')::UUID);

CREATE POLICY partner_transactions_admin_all ON igr.partner_transactions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_partner_transactions
    AFTER INSERT OR UPDATE OR DELETE ON igr.partner_transactions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

### 15.4 Retention

| Table | Retention | Notes |
|---|---|---|
| partners | Permanent | |
| api_clients | Permanent | |
| api_credentials | Permanent | While active; rotated credentials retained 90 days |
| api_scopes | Permanent | Configuration table |
| webhook_endpoints | Permanent | |
| webhook_deliveries | 90 days | Purged after 90 days |
| event_subscriptions | Permanent | |
| api_versions | Permanent | |
| api_request_logs | 90 days | Purged after 90 days |
| partner_transactions | Permanent | Financial records |

### 15.5 Governing Requirement Traceability

SRS-IGR-001–010; SDD-1 Ch.15; SAD-1 Ch.18; PLC-1 Ch.31, 25, 32; KR-1 KR-ECO-014, KR-ECO-017.

---

## Chapter 16 — Learning Engine Schema

### 16.1 Overview

The Learning Engine schema (`lrn`) stores the e-learning marketplace data: instructors, courses, programmes, learning paths, modules, lessons, lesson content, external media references, enrollments, lesson progress, assessments, questions, assessment attempts, assignments, assignment submissions, grades, certificates, and course reviews. Learning is Engine #11, incorporated into the single platform schema; it is not a separate database design. External media is referenced, not stored (ADR-005; SDD-1 Ch.16).

Implements: SRS-LRN-001–017; SDD-1 Ch.16; SAD-1 Ch.19; PLC-1 Ch.30; KR-1 Ch.50, KR-PNT-004, KR-SRC-004, KR-FRD-002; LEARN-AD-1; ADR-005.

### 16.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS lrn;
```

### 16.3 Table Definitions

#### 16.3.1 instructors

```sql
CREATE TABLE lrn.instructors (
    instructor_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    instructor_name     VARCHAR(200) NOT NULL,
    instructor_slug     VARCHAR(200) NOT NULL,
    bio                 TEXT,
    expertise           JSONB NOT NULL DEFAULT '[]',  -- Array of expertise areas
    trust_score_required NUMERIC(5,2) NOT NULL DEFAULT 40.00,
    status              TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'ACTIVE', 'SUSPENDED', 'DEACTIVATED')),
    is_verified         BOOLEAN NOT NULL DEFAULT FALSE,
    verified_at         TIMESTAMPTZ,
    is_deleted          BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_lrn_instructors_slug
    ON lrn.instructors (instructor_slug)
    WHERE is_deleted = FALSE;

CREATE UNIQUE INDEX uq_lrn_instructors_account
    ON lrn.instructors (account_id)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_lrn_instructors_status ON lrn.instructors (status) WHERE status = 'ACTIVE';

ALTER TABLE lrn.instructors ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.instructors FORCE ROW LEVEL SECURITY;

CREATE POLICY instructors_owner_all ON lrn.instructors
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY instructors_public_select ON lrn.instructors
    FOR SELECT
    USING (status = 'ACTIVE');

CREATE POLICY instructors_admin_all ON lrn.instructors
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_instructors
    AFTER INSERT OR UPDATE OR DELETE ON lrn.instructors
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

CREATE OR REPLACE FUNCTION lrn.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_instructors_updated_at
    BEFORE UPDATE ON lrn.instructors
    FOR EACH ROW EXECUTE FUNCTION lrn.fn_set_updated_at();
```

#### 16.3.2 courses

```sql
CREATE TABLE lrn.courses (
    course_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    instructor_id       UUID NOT NULL REFERENCES lrn.instructors(instructor_id),
    course_title        VARCHAR(500) NOT NULL,
    course_slug         VARCHAR(500) NOT NULL,
    description         TEXT NOT NULL,
    category            VARCHAR(200),
    level               TEXT NOT NULL DEFAULT 'BEGINNER'
                        CHECK (level IN ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT')),
    language            VARCHAR(10) NOT NULL DEFAULT 'en',
    price               NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    thumbnail_url       VARCHAR(500),
    preview_video_url   VARCHAR(500),
    status              TEXT NOT NULL DEFAULT 'DRAFT'
                        CHECK (status IN ('DRAFT', 'UNDER_REVIEW', 'PUBLISHED', 'UNPUBLISHED', 'ARCHIVED')),
    is_featured         BOOLEAN NOT NULL DEFAULT FALSE,
    total_duration_minutes INTEGER NOT NULL DEFAULT 0,
    is_deleted          BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_lrn_courses_slug
    ON lrn.courses (instructor_id, course_slug)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_lrn_courses_instructor ON lrn.courses (instructor_id);
CREATE INDEX ix_lrn_courses_status ON lrn.courses (status) WHERE status = 'PUBLISHED';
CREATE INDEX ix_lrn_courses_category ON lrn.courses (category);
CREATE INDEX ix_lrn_courses_featured ON lrn.courses (is_featured) WHERE is_featured = TRUE AND status = 'PUBLISHED';

ALTER TABLE lrn.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.courses FORCE ROW LEVEL SECURITY;

CREATE POLICY courses_public_select ON lrn.courses
    FOR SELECT
    USING (status = 'PUBLISHED');

CREATE POLICY courses_instructor_all ON lrn.courses
    FOR ALL
    USING (instructor_id IN (
        SELECT instructor_id FROM lrn.instructors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (instructor_id IN (
        SELECT instructor_id FROM lrn.instructors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY courses_admin_all ON lrn.courses
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_courses
    AFTER INSERT OR UPDATE OR DELETE ON lrn.courses
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.3 programmes

A programme is a collection of courses forming a certification programme.

```sql
CREATE TABLE lrn.programmes (
    programme_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    instructor_id       UUID NOT NULL REFERENCES lrn.instructors(instructor_id),
    programme_name      VARCHAR(500) NOT NULL,
    programme_slug      VARCHAR(500) NOT NULL,
    description         TEXT NOT NULL,
    category            VARCHAR(200),
    price               NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    status              TEXT NOT NULL DEFAULT 'DRAFT'
                        CHECK (status IN ('DRAFT', 'PUBLISHED', 'UNPUBLISHED', 'ARCHIVED')),
    is_deleted          BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_lrn_programmes_slug
    ON lrn.programmes (instructor_id, programme_slug)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_lrn_programmes_instructor ON lrn.programmes (instructor_id);
CREATE INDEX ix_lrn_programmes_status ON lrn.programmes (status) WHERE status = 'PUBLISHED';

ALTER TABLE lrn.programmes ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.programmes FORCE ROW LEVEL SECURITY;

CREATE POLICY programmes_public_select ON lrn.programmes
    FOR SELECT
    USING (status = 'PUBLISHED');

CREATE POLICY programmes_instructor_all ON lrn.programmes
    FOR ALL
    USING (instructor_id IN (
        SELECT instructor_id FROM lrn.instructors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (instructor_id IN (
        SELECT instructor_id FROM lrn.instructors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY programmes_admin_all ON lrn.programmes
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_programmes
    AFTER INSERT OR UPDATE OR DELETE ON lrn.programmes
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.4 programme_courses

Junction table linking courses to programmes.

```sql
CREATE TABLE lrn.programme_courses (
    programme_course_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    programme_id       UUID NOT NULL REFERENCES lrn.programmes(programme_id),
    course_id          UUID NOT NULL REFERENCES lrn.courses(course_id),
    sort_order         INTEGER NOT NULL DEFAULT 0,
    is_required        BOOLEAN NOT NULL DEFAULT TRUE,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_lrn_programme_courses
    ON lrn.programme_courses (programme_id, course_id);

CREATE INDEX ix_lrn_programme_courses_programme ON lrn.programme_courses (programme_id, sort_order);

ALTER TABLE lrn.programme_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.programme_courses FORCE ROW LEVEL SECURITY;

CREATE POLICY programme_courses_public_select ON lrn.programme_courses
    FOR SELECT
    USING (programme_id IN (SELECT programme_id FROM lrn.programmes WHERE status = 'PUBLISHED'));

CREATE POLICY programme_courses_admin_all ON lrn.programme_courses
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 16.3.5 learning_paths

A learning path is a guided sequence of courses and/or programmes.

```sql
CREATE TABLE lrn.learning_paths (
    learning_path_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    path_name           VARCHAR(500) NOT NULL,
    path_slug           VARCHAR(500) NOT NULL,
    description         TEXT NOT NULL,
    category            VARCHAR(200),
    target_audience     TEXT,
    estimated_duration_hours INTEGER,
    status              TEXT NOT NULL DEFAULT 'DRAFT'
                        CHECK (status IN ('DRAFT', 'PUBLISHED', 'UNPUBLISHED', 'ARCHIVED')),
    is_deleted          BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_lrn_learning_paths_slug
    ON lrn.learning_paths (path_slug)
    WHERE is_deleted = FALSE;

CREATE INDEX ix_lrn_learning_paths_status ON lrn.learning_paths (status) WHERE status = 'PUBLISHED';

ALTER TABLE lrn.learning_paths ENABLE ROW LEVEL SECURITY;

CREATE POLICY learning_paths_public_select ON lrn.learning_paths
    FOR SELECT
    USING (status = 'PUBLISHED');

CREATE POLICY learning_paths_admin_all ON lrn.learning_paths
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_learning_paths
    AFTER INSERT OR UPDATE OR DELETE ON lrn.learning_paths
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.6 learning_path_steps

```sql
CREATE TABLE lrn.learning_path_steps (
    step_id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    learning_path_id    UUID NOT NULL REFERENCES lrn.learning_paths(learning_path_id),
    step_number         INTEGER NOT NULL,
    step_type           TEXT NOT NULL CHECK (step_type IN ('COURSE', 'PROGRAMME', 'ASSESSMENT')),
    course_id           UUID REFERENCES lrn.courses(course_id),
    programme_id        UUID REFERENCES lrn.programmes(programme_id),
    is_required         BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_lrn_learning_path_steps
    ON lrn.learning_path_steps (learning_path_id, step_number);

CREATE INDEX ix_lrn_learning_path_steps_path ON lrn.learning_path_steps (learning_path_id, step_number);

-- Check constraint: must reference exactly one of course/programme
ALTER TABLE lrn.learning_path_steps
    ADD CONSTRAINT ck_lrn_learning_path_steps_reference
    CHECK (
        (step_type = 'COURSE' AND course_id IS NOT NULL AND programme_id IS NULL) OR
        (step_type = 'PROGRAMME' AND programme_id IS NOT NULL AND course_id IS NULL) OR
        (step_type = 'ASSESSMENT' AND course_id IS NOT NULL)
    );

ALTER TABLE lrn.learning_path_steps ENABLE ROW LEVEL SECURITY;

CREATE POLICY learning_path_steps_public_select ON lrn.learning_path_steps
    FOR SELECT
    USING (learning_path_id IN (SELECT learning_path_id FROM lrn.learning_paths WHERE status = 'PUBLISHED'));

CREATE POLICY learning_path_steps_admin_all ON lrn.learning_path_steps
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 16.3.7 modules

```sql
CREATE TABLE lrn.modules (
    module_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id          UUID NOT NULL REFERENCES lrn.courses(course_id),
    module_name        VARCHAR(500) NOT NULL,
    description        TEXT,
    sort_order         INTEGER NOT NULL DEFAULT 0,
    status             TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'INACTIVE', 'ARCHIVED')),
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_lrn_modules_course ON lrn.modules (course_id, sort_order);

ALTER TABLE lrn.modules ENABLE ROW LEVEL SECURITY;

CREATE POLICY modules_public_select ON lrn.modules
    FOR SELECT
    USING (course_id IN (SELECT course_id FROM lrn.courses WHERE status = 'PUBLISHED'));

CREATE POLICY modules_instructor_all ON lrn.modules
    FOR ALL
    USING (course_id IN (
        SELECT c.course_id FROM lrn.courses c
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (course_id IN (
        SELECT c.course_id FROM lrn.courses c
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY modules_admin_all ON lrn.modules
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_modules
    AFTER INSERT OR UPDATE OR DELETE ON lrn.modules
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.8 lessons

```sql
CREATE TABLE lrn.lessons (
    lesson_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    module_id          UUID NOT NULL REFERENCES lrn.modules(module_id),
    lesson_title       VARCHAR(500) NOT NULL,
    description        TEXT,
    lesson_type        TEXT NOT NULL CHECK (lesson_type IN ('VIDEO', 'TEXT', 'ARTICLE', 'EXTERNAL_MEDIA', 'MIXED')),
    content            TEXT,  -- Text/Article content (NULL for video/external)
    duration_minutes   INTEGER NOT NULL DEFAULT 0,
    sort_order         INTEGER NOT NULL DEFAULT 0,
    is_preview         BOOLEAN NOT NULL DEFAULT FALSE,  -- Free preview lesson
    status             TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'INACTIVE', 'ARCHIVED')),
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_lrn_lessons_module ON lrn.lessons (module_id, sort_order);

ALTER TABLE lrn.lessons ENABLE ROW LEVEL SECURITY;

CREATE POLICY lessons_public_select ON lrn.lessons
    FOR SELECT
    USING (is_preview = TRUE OR module_id IN (
        SELECT m.module_id FROM lrn.modules m
        JOIN lrn.courses c ON m.course_id = c.course_id
        WHERE c.status = 'PUBLISHED'
    ));

CREATE POLICY lessons_enrolled_select ON lrn.lessons
    FOR SELECT
    USING (module_id IN (
        SELECT m.module_id FROM lrn.modules m
        JOIN lrn.enrollments e ON m.course_id = e.course_id
        WHERE e.account_id = current_setting('app.current_account_id')::UUID
          AND e.status = 'ACTIVE'
    ));

CREATE POLICY lessons_instructor_all ON lrn.lessons
    FOR ALL
    USING (module_id IN (
        SELECT m.module_id FROM lrn.modules m
        JOIN lrn.courses c ON m.course_id = c.course_id
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (module_id IN (
        SELECT m.module_id FROM lrn.modules m
        JOIN lrn.courses c ON m.course_id = c.course_id
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY lessons_admin_all ON lrn.lessons
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_lessons
    AFTER INSERT OR UPDATE OR DELETE ON lrn.lessons
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.9 lesson_content

Structured content blocks for lessons (supporting mixed content types).

```sql
CREATE TABLE lrn.lesson_content (
    content_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id          UUID NOT NULL REFERENCES lrn.lessons(lesson_id),
    content_type       TEXT NOT NULL CHECK (content_type IN (
                            'TEXT', 'IMAGE', 'CODE', 'VIDEO_REF',
                            'EXTERNAL_MEDIA', 'DOWNLOAD', 'EMBED'
                        )),
    content_order       INTEGER NOT NULL DEFAULT 0,
    content_data       JSONB NOT NULL,  -- Structured content payload
    is_active          BOOLEAN NOT NULL DEFAULT TRUE,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_lrn_lesson_content_lesson ON lrn.lesson_content (lesson_id, content_order);

ALTER TABLE lrn.lesson_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY lesson_content_public_select ON lrn.lesson_content
    FOR SELECT
    USING (lesson_id IN (
        SELECT lesson_id FROM lrn.lessons WHERE is_preview = TRUE
    ));

CREATE POLICY lesson_content_admin_all ON lrn.lesson_content
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 16.3.10 external_media

External media references — the platform stores only references and metadata, NOT binaries (ADR-005). YouTube is the initial external media provider.

```sql
CREATE TABLE lrn.external_media (
    media_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id           UUID REFERENCES lrn.lessons(lesson_id),
    course_id           UUID REFERENCES lrn.courses(course_id),
    media_provider      TEXT NOT NULL CHECK (media_provider IN (
                            'YOUTUBE', 'VIMEO', 'WISTIA', 'BUNNY_CDN', 'OTHER'
                        )),
    external_id         VARCHAR(500) NOT NULL,  -- Provider's media ID (e.g., YouTube video ID)
    external_url        VARCHAR(1000) NOT NULL,
    embed_url           VARCHAR(1000) NOT NULL,
    thumbnail_url       VARCHAR(500),
    title               VARCHAR(500),
    description         TEXT,
    duration_seconds    INTEGER,
    media_type          TEXT NOT NULL DEFAULT 'VIDEO'
                        CHECK (media_type IN ('VIDEO', 'AUDIO', 'PRESENTATION', 'DOCUMENT')),
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'BROKEN', 'REMOVED')),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_lrn_external_media_lesson ON lrn.external_media (lesson_id);
CREATE INDEX ix_lrn_external_media_course ON lrn.external_media (course_id);
CREATE INDEX ix_lrn_external_media_provider ON lrn.external_media (media_provider, external_id);

ALTER TABLE lrn.external_media ENABLE ROW LEVEL SECURITY;

CREATE POLICY external_media_public_select ON lrn.external_media
    FOR SELECT
    USING (status = 'ACTIVE');

CREATE POLICY external_media_admin_all ON lrn.external_media
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_external_media
    AFTER INSERT OR UPDATE OR DELETE ON lrn.external_media
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.11 enrollments

```sql
CREATE TABLE lrn.enrollments (
    enrollment_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    course_id           UUID NOT NULL REFERENCES lrn.courses(course_id),
    programme_id        UUID REFERENCES lrn.programmes(programme_id),
    enrollment_type     TEXT NOT NULL CHECK (enrollment_type IN ('COURSE', 'PROGRAMME', 'LEARNING_PATH')),
    learning_path_id    UUID REFERENCES lrn.learning_paths(learning_path_id),
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'COMPLETED', 'ABANDONED', 'REFUNDED', 'CANCELLED')),
    progress_percentage NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    price_paid          NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    enrolled_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at        TIMESTAMPTZ,
    last_accessed_at    TIMESTAMPTZ,
    expires_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_lrn_enrollments_account_course
    ON lrn.enrollments (account_id, course_id)
    WHERE status IN ('ACTIVE', 'COMPLETED');

CREATE INDEX ix_lrn_enrollments_account ON lrn.enrollments (account_id, status);
CREATE INDEX ix_lrn_enrollments_course ON lrn.enrollments (course_id);
CREATE INDEX ix_lrn_enrollments_status ON lrn.enrollments (status);

ALTER TABLE lrn.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.enrollments FORCE ROW LEVEL SECURITY;

CREATE POLICY enrollments_owner_all ON lrn.enrollments
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY enrollments_instructor_select ON lrn.enrollments
    FOR SELECT
    USING (course_id IN (
        SELECT c.course_id FROM lrn.courses c
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY enrollments_admin_all ON lrn.enrollments
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_enrollments
    AFTER INSERT OR UPDATE OR DELETE ON lrn.enrollments
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.12 lesson_progress

```sql
CREATE TABLE lrn.lesson_progress (
    progress_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enrollment_id       UUID NOT NULL REFERENCES lrn.enrollments(enrollment_id),
    account_id          UUID NOT NULL,
    lesson_id          UUID NOT NULL REFERENCES lrn.lessons(lesson_id),
    status             TEXT NOT NULL DEFAULT 'NOT_STARTED'
                        CHECK (status IN ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'SKIPPED')),
    progress_percentage NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    time_spent_seconds  INTEGER NOT NULL DEFAULT 0,
    last_position_seconds INTEGER,  -- Video resume position
    started_at         TIMESTAMPTZ,
    completed_at       TIMESTAMPTZ,
    last_accessed_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version            INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_lrn_lesson_progress_enrollment_lesson
    ON lrn.lesson_progress (enrollment_id, lesson_id);

CREATE INDEX ix_lrn_lesson_progress_account ON lrn.lesson_progress (account_id);
CREATE INDEX ix_lrn_lesson_progress_status ON lrn.lesson_progress (status) WHERE status != 'COMPLETED';

ALTER TABLE lrn.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.lesson_progress FORCE ROW LEVEL SECURITY;

CREATE POLICY lesson_progress_owner_all ON lrn.lesson_progress
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY lesson_progress_instructor_select ON lrn.lesson_progress
    FOR SELECT
    USING (enrollment_id IN (
        SELECT e.enrollment_id FROM lrn.enrollments e
        JOIN lrn.courses c ON e.course_id = c.course_id
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY lesson_progress_admin_all ON lrn.lesson_progress
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_lesson_progress
    AFTER INSERT OR UPDATE OR DELETE ON lrn.lesson_progress
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.13 assessments

```sql
CREATE TABLE lrn.assessments (
    assessment_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id           UUID NOT NULL REFERENCES lrn.courses(course_id),
    module_id           UUID REFERENCES lrn.modules(module_id),
    lesson_id           UUID REFERENCES lrn.lessons(lesson_id),
    assessment_title    VARCHAR(500) NOT NULL,
    description         TEXT,
    assessment_type     TEXT NOT NULL CHECK (assessment_type IN ('QUIZ', 'TEST', 'EXAM', 'PRACTICE')),
    passing_score       NUMERIC(5,2) NOT NULL DEFAULT 70.00,  -- Minimum percentage to pass
    time_limit_minutes  INTEGER,
    max_attempts        INTEGER NOT NULL DEFAULT 3,
    questions_per_attempt INTEGER,  -- Random subset if set; NULL = all questions
    is_randomized       BOOLEAN NOT NULL DEFAULT FALSE,
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'INACTIVE', 'ARCHIVED')),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_lrn_assessments_course ON lrn.assessments (course_id);
CREATE INDEX ix_lrn_assessments_lesson ON lrn.assessments (lesson_id) WHERE lesson_id IS NOT NULL;

ALTER TABLE lrn.assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY assessments_enrolled_select ON lrn.assessments
    FOR SELECT
    USING (course_id IN (
        SELECT course_id FROM lrn.enrollments
        WHERE account_id = current_setting('app.current_account_id')::UUID
          AND status IN ('ACTIVE', 'COMPLETED')
    ));

CREATE POLICY assessments_instructor_all ON lrn.assessments
    FOR ALL
    USING (course_id IN (
        SELECT c.course_id FROM lrn.courses c
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (course_id IN (
        SELECT c.course_id FROM lrn.courses c
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY assessments_admin_all ON lrn.assessments
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_assessments
    AFTER INSERT OR UPDATE OR DELETE ON lrn.assessments
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.14 questions

```sql
CREATE TABLE lrn.questions (
    question_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id       UUID NOT NULL REFERENCES lrn.assessments(assessment_id),
    question_text       TEXT NOT NULL,
    question_type       TEXT NOT NULL CHECK (question_type IN (
                            'MULTIPLE_CHOICE', 'SINGLE_CHOICE', 'TRUE_FALSE',
                            'SHORT_ANSWER', 'ESSAY', 'FILL_BLANK', 'MATCHING'
                        )),
    points              NUMERIC(5,2) NOT NULL DEFAULT 1.00,
    explanation         TEXT,  -- Shown after attempt
    media_url           VARCHAR(500),
    sort_order          INTEGER NOT NULL DEFAULT 0,
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_lrn_questions_assessment ON lrn.questions (assessment_id, sort_order);

ALTER TABLE lrn.questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY questions_enrolled_select ON lrn.questions
    FOR SELECT
    USING (assessment_id IN (
        SELECT a.assessment_id FROM lrn.assessments a
        JOIN lrn.enrollments e ON a.course_id = e.course_id
        WHERE e.account_id = current_setting('app.current_account_id')::UUID
          AND e.status IN ('ACTIVE', 'COMPLETED')
    ));

CREATE POLICY questions_instructor_all ON lrn.questions
    FOR ALL
    USING (assessment_id IN (
        SELECT a.assessment_id FROM lrn.assessments a
        JOIN lrn.courses c ON a.course_id = c.course_id
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (assessment_id IN (
        SELECT a.assessment_id FROM lrn.assessments a
        JOIN lrn.courses c ON a.course_id = c.course_id
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY questions_admin_all ON lrn.questions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 16.3.15 answers

```sql
CREATE TABLE lrn.answers (
    answer_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_id         UUID NOT NULL REFERENCES lrn.questions(question_id),
    answer_text         TEXT NOT NULL,
    is_correct          BOOLEAN NOT NULL DEFAULT FALSE,  -- For auto-graded questions
    sort_order          INTEGER NOT NULL DEFAULT 0,
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_lrn_answers_question ON lrn.answers (question_id, sort_order);

ALTER TABLE lrn.answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY answers_enrolled_select ON lrn.answers
    FOR SELECT
    USING (question_id IN (
        SELECT q.question_id FROM lrn.questions q
        JOIN lrn.assessments a ON q.assessment_id = a.assessment_id
        JOIN lrn.enrollments e ON a.course_id = e.course_id
        WHERE e.account_id = current_setting('app.current_account_id')::UUID
          AND e.status IN ('ACTIVE', 'COMPLETED')
    ));

-- Note: is_correct is hidden from learners during attempts — application layer enforces this
CREATE POLICY answers_instructor_all ON lrn.answers
    FOR ALL
    USING (question_id IN (
        SELECT q.question_id FROM lrn.questions q
        JOIN lrn.assessments a ON q.assessment_id = a.assessment_id
        JOIN lrn.courses c ON a.course_id = c.course_id
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (question_id IN (
        SELECT q.question_id FROM lrn.questions q
        JOIN lrn.assessments a ON q.assessment_id = a.assessment_id
        JOIN lrn.courses c ON a.course_id = c.course_id
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY answers_admin_all ON lrn.answers
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 16.3.16 assessment_attempts

```sql
CREATE TABLE lrn.assessment_attempts (
    attempt_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id       UUID NOT NULL REFERENCES lrn.assessments(assessment_id),
    enrollment_id       UUID NOT NULL REFERENCES lrn.enrollments(enrollment_id),
    account_id          UUID NOT NULL,
    attempt_number      INTEGER NOT NULL,
    status              TEXT NOT NULL DEFAULT 'IN_PROGRESS'
                        CHECK (status IN ('IN_PROGRESS', 'SUBMITTED', 'GRADED', 'EXPIRED')),
    score               NUMERIC(5,2),  -- Percentage score
    is_passed           BOOLEAN,
    time_spent_seconds  INTEGER,
    started_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    submitted_at        TIMESTAMPTZ,
    graded_at           TIMESTAMPTZ,
    expires_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_lrn_assessment_attempts_enrollment_assessment_number
    ON lrn.assessment_attempts (enrollment_id, assessment_id, attempt_number);

CREATE INDEX ix_lrn_assessment_attempts_account ON lrn.assessment_attempts (account_id);
CREATE INDEX ix_lrn_assessment_attempts_status ON lrn.assessment_attempts (status) WHERE status = 'IN_PROGRESS';

ALTER TABLE lrn.assessment_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.assessment_attempts FORCE ROW LEVEL SECURITY;

CREATE POLICY assessment_attempts_owner_all ON lrn.assessment_attempts
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY assessment_attempts_instructor_select ON lrn.assessment_attempts
    FOR SELECT
    USING (assessment_id IN (
        SELECT a.assessment_id FROM lrn.assessments a
        JOIN lrn.courses c ON a.course_id = c.course_id
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY assessment_attempts_admin_all ON lrn.assessment_attempts
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_assessment_attempts
    AFTER INSERT OR UPDATE OR DELETE ON lrn.assessment_attempts
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.17 attempt_answers

Student answers within an assessment attempt.

```sql
CREATE TABLE lrn.attempt_answers (
    attempt_answer_id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    attempt_id          UUID NOT NULL REFERENCES lrn.assessment_attempts(attempt_id),
    question_id         UUID NOT NULL REFERENCES lrn.questions(question_id),
    answer_id           UUID REFERENCES lrn.answers(answer_id),  -- For choice-based questions
    text_answer         TEXT,  -- For text-based questions
    is_correct          BOOLEAN,  -- Graded result
    points_awarded      NUMERIC(5,2),
    graded_at           TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_lrn_attempt_answers_attempt ON lrn.attempt_answers (attempt_id);
CREATE INDEX ix_lrn_attempt_answers_question ON lrn.attempt_answers (question_id);

ALTER TABLE lrn.attempt_answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY attempt_answers_owner_select ON lrn.attempt_answers
    FOR SELECT
    USING (attempt_id IN (
        SELECT attempt_id FROM lrn.assessment_attempts
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY attempt_answers_admin_all ON lrn.attempt_answers
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 16.3.18 assignments

```sql
CREATE TABLE lrn.assignments (
    assignment_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id           UUID NOT NULL REFERENCES lrn.courses(course_id),
    module_id           UUID REFERENCES lrn.modules(module_id),
    assignment_title    VARCHAR(500) NOT NULL,
    description         TEXT NOT NULL,
    instructions        TEXT,
    max_points          NUMERIC(5,2) NOT NULL DEFAULT 100.00,
    passing_score       NUMERIC(5,2) NOT NULL DEFAULT 70.00,
    due_date            TIMESTAMPTZ,
    allow_late_submission BOOLEAN NOT NULL DEFAULT FALSE,
    late_penalty_percentage NUMERIC(5,2) DEFAULT 0.00,
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'INACTIVE', 'ARCHIVED')),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_lrn_assignments_course ON lrn.assignments (course_id);

ALTER TABLE lrn.assignments ENABLE ROW LEVEL SECURITY;

CREATE POLICY assignments_enrolled_select ON lrn.assignments
    FOR SELECT
    USING (course_id IN (
        SELECT course_id FROM lrn.enrollments
        WHERE account_id = current_setting('app.current_account_id')::UUID
          AND status IN ('ACTIVE', 'COMPLETED')
    ));

CREATE POLICY assignments_instructor_all ON lrn.assignments
    FOR ALL
    USING (course_id IN (
        SELECT c.course_id FROM lrn.courses c
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (course_id IN (
        SELECT c.course_id FROM lrn.courses c
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY assignments_admin_all ON lrn.assignments
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_assignments
    AFTER INSERT OR UPDATE OR DELETE ON lrn.assignments
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.19 assignment_submissions

```sql
CREATE TABLE lrn.assignment_submissions (
    submission_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assignment_id       UUID NOT NULL REFERENCES lrn.assignments(assignment_id),
    enrollment_id       UUID NOT NULL REFERENCES lrn.enrollments(enrollment_id),
    account_id          UUID NOT NULL,
    submission_content  TEXT,
    attachments         JSONB NOT NULL DEFAULT '[]',
    status              TEXT NOT NULL DEFAULT 'SUBMITTED'
                        CHECK (status IN ('SUBMITTED', 'UNDER_REVIEW', 'GRADED', 'RETURNED', 'LATE')),
    submitted_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    graded_at           TIMESTAMPTZ,
    graded_by           UUID,  -- Instructor account_id
    grade               NUMERIC(5,2),
    is_passed           BOOLEAN,
    feedback            TEXT,
    revision_count      INTEGER NOT NULL DEFAULT 0,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_lrn_assignment_submissions_assignment_enrollment
    ON lrn.assignment_submissions (assignment_id, enrollment_id);

CREATE INDEX ix_lrn_assignment_submissions_account ON lrn.assignment_submissions (account_id);
CREATE INDEX ix_lrn_assignment_submissions_status ON lrn.assignment_submissions (status);

ALTER TABLE lrn.assignment_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.assignment_submissions FORCE ROW LEVEL SECURITY;

CREATE POLICY assignment_submissions_owner_all ON lrn.assignment_submissions
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY assignment_submissions_instructor_all ON lrn.assignment_submissions
    FOR ALL
    USING (assignment_id IN (
        SELECT a.assignment_id FROM lrn.assignments a
        JOIN lrn.courses c ON a.course_id = c.course_id
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ))
    WITH CHECK (assignment_id IN (
        SELECT a.assignment_id FROM lrn.assignments a
        JOIN lrn.courses c ON a.course_id = c.course_id
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY assignment_submissions_admin_all ON lrn.assignment_submissions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_assignment_submissions
    AFTER INSERT OR UPDATE OR DELETE ON lrn.assignment_submissions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.20 grades

```sql
CREATE TABLE lrn.grades (
    grade_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enrollment_id       UUID NOT NULL REFERENCES lrn.enrollments(enrollment_id),
    account_id          UUID NOT NULL,
    course_id           UUID NOT NULL REFERENCES lrn.courses(course_id),
    grade_type          TEXT NOT NULL CHECK (grade_type IN ('ASSESSMENT', 'ASSIGNMENT', 'FINAL')),
    reference_id        UUID NOT NULL,  -- assessment_attempt_id or assignment_submission_id
    score               NUMERIC(5,2) NOT NULL,
    max_score           NUMERIC(5,2) NOT NULL,
    percentage          NUMERIC(5,2) NOT NULL,
    is_passing          BOOLEAN NOT NULL,
    graded_by           UUID,
    graded_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX ix_lrn_grades_enrollment ON lrn.grades (enrollment_id);
CREATE INDEX ix_lrn_grades_account ON lrn.grades (account_id);
CREATE INDEX ix_lrn_grades_course ON lrn.grades (course_id);

ALTER TABLE lrn.grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.grades FORCE ROW LEVEL SECURITY;

CREATE POLICY grades_owner_select ON lrn.grades
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY grades_instructor_select ON lrn.grades
    FOR SELECT
    USING (course_id IN (
        SELECT c.course_id FROM lrn.courses c
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY grades_admin_all ON lrn.grades
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 16.3.21 certificates

```sql
CREATE TABLE lrn.certificates (
    certificate_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    course_id           UUID REFERENCES lrn.courses(course_id),
    programme_id        UUID REFERENCES lrn.programmes(programme_id),
    learning_path_id    UUID REFERENCES lrn.learning_paths(learning_path_id),
    certificate_type    TEXT NOT NULL CHECK (certificate_type IN ('COURSE', 'PROGRAMME', 'LEARNING_PATH')),
    certificate_number  VARCHAR(100) NOT NULL,
    title               VARCHAR(500) NOT NULL,
    issued_by           UUID NOT NULL,  -- Instructor account_id
    issued_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at          TIMESTAMPTZ,
    verification_code   VARCHAR(100) NOT NULL,
    is_revoked          BOOLEAN NOT NULL DEFAULT FALSE,
    revoked_at          TIMESTAMPTZ,
    revoke_reason       TEXT,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_lrn_certificates_number ON lrn.certificates (certificate_number);
CREATE UNIQUE INDEX uq_lrn_certificates_verification ON lrn.certificates (verification_code);
CREATE UNIQUE INDEX uq_lrn_certificates_account_course
    ON lrn.certificates (account_id, course_id, certificate_type)
    WHERE is_revoked = FALSE AND course_id IS NOT NULL;

CREATE INDEX ix_lrn_certificates_account ON lrn.certificates (account_id);
CREATE INDEX ix_lrn_certificates_course ON lrn.certificates (course_id);

ALTER TABLE lrn.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.certificates FORCE ROW LEVEL SECURITY;

CREATE POLICY certificates_owner_select ON lrn.certificates
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY certificates_public_verify ON lrn.certificates
    FOR SELECT
    USING (is_revoked = FALSE);  -- Public verification by verification_code

CREATE POLICY certificates_admin_all ON lrn.certificates
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_certificates
    AFTER INSERT OR UPDATE OR DELETE ON lrn.certificates
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.22 course_reviews

```sql
CREATE TABLE lrn.course_reviews (
    review_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id           UUID NOT NULL REFERENCES lrn.courses(course_id),
    account_id          UUID NOT NULL,
    rating              INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title               VARCHAR(500),
    body                TEXT,
    is_verified_enrollment BOOLEAN NOT NULL DEFAULT TRUE,
    status              TEXT NOT NULL DEFAULT 'PUBLISHED'
                        CHECK (status IN ('PUBLISHED', 'HIDDEN', 'FLAGGED', 'REMOVED')),
    instructor_response TEXT,
    instructor_responded_at TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_lrn_course_reviews_course_account
    ON lrn.course_reviews (course_id, account_id);

CREATE INDEX ix_lrn_course_reviews_course ON lrn.course_reviews (course_id, status);
CREATE INDEX ix_lrn_course_reviews_rating ON lrn.course_reviews (rating);

ALTER TABLE lrn.course_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.course_reviews FORCE ROW LEVEL SECURITY;

CREATE POLICY course_reviews_public_select ON lrn.course_reviews
    FOR SELECT
    USING (status = 'PUBLISHED');

CREATE POLICY course_reviews_owner_all ON lrn.course_reviews
    FOR ALL
    USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY course_reviews_instructor_update ON lrn.course_reviews
    FOR UPDATE
    USING (course_id IN (
        SELECT c.course_id FROM lrn.courses c
        JOIN lrn.instructors i ON c.instructor_id = i.instructor_id
        WHERE i.account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY course_reviews_admin_all ON lrn.course_reviews
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_course_reviews
    AFTER INSERT OR UPDATE OR DELETE ON lrn.course_reviews
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 16.3.23 learning_settlements

Learning settlement records linking to the 90/10 accounting chain.

```sql
CREATE TABLE lrn.learning_settlements (
    settlement_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enrollment_id       UUID NOT NULL REFERENCES lrn.enrollments(enrollment_id),
    instructor_id       UUID NOT NULL REFERENCES lrn.instructors(instructor_id),
    gross_revenue       NUMERIC(20,2) NOT NULL,
    deductions          NUMERIC(20,2) NOT NULL,
    qualifying_economic_value NUMERIC(20,2) NOT NULL,
    instructor_amount   NUMERIC(20,2) NOT NULL,  -- 20% of QEV (counterparty share)
    platform_amount     NUMERIC(20,2) NOT NULL,  -- 55% of QEV (platform share)
    reward_pool_amount  NUMERIC(20,2) NOT NULL,  -- 8% + 5% of QEV (rewards + leadership)
    operational_amount  NUMERIC(20,2) NOT NULL,  -- 2% of QEV
    reserve_amount      NUMERIC(20,2) NOT NULL,  -- 10% of QEV
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    status              TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'SETTLED', 'FAILED', 'REVERSED')),
    wallet_transaction_id UUID,
    source_transaction_id UUID,
    settled_at          TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

-- Learning waterfall: counterparty 20%, platform 55%, rewards 8%, leadership 5%, operational 2% = 90%
ALTER TABLE lrn.learning_settlements
    ADD CONSTRAINT ck_lrn_settlement_qev
    CHECK (qualifying_economic_value = gross_revenue - deductions);

ALTER TABLE lrn.learning_settlements
    ADD CONSTRAINT ck_lrn_settlement_allocation_sum
    CHECK (instructor_amount + platform_amount + reward_pool_amount + operational_amount =
           qualifying_economic_value * 0.90);

ALTER TABLE lrn.learning_settlements
    ADD CONSTRAINT ck_lrn_settlement_reserve
    CHECK (reserve_amount = qualifying_economic_value * 0.10);

CREATE INDEX ix_lrn_learning_settlements_enrollment ON lrn.learning_settlements (enrollment_id);
CREATE INDEX ix_lrn_learning_settlements_instructor ON lrn.learning_settlements (instructor_id);
CREATE INDEX ix_lrn_learning_settlements_status ON lrn.learning_settlements (status);

ALTER TABLE lrn.learning_settlements ENABLE ROW LEVEL SECURITY;
ALTER TABLE lrn.learning_settlements FORCE ROW LEVEL SECURITY;

CREATE POLICY learning_settlements_instructor_select ON lrn.learning_settlements
    FOR SELECT
    USING (instructor_id IN (
        SELECT instructor_id FROM lrn.instructors
        WHERE account_id = current_setting('app.current_account_id')::UUID
    ));

CREATE POLICY learning_settlements_admin_all ON lrn.learning_settlements
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_learning_settlements
    AFTER INSERT OR UPDATE OR DELETE ON lrn.learning_settlements
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

### 16.4 Retention

| Table | Retention | Notes |
|---|---|---|
| instructors | Permanent | Soft-deleted retained 90 days |
| courses | Permanent | Soft-deleted retained 90 days |
| programmes | Permanent | |
| learning_paths | Permanent | |
| modules, lessons | Permanent | |
| external_media | Permanent | References only, no binaries |
| enrollments | Permanent | |
| lesson_progress | Permanent | |
| assessments, questions, answers | Permanent | |
| assessment_attempts, attempt_answers | 5 years | |
| assignments, assignment_submissions | 5 years | |
| grades | Permanent | Academic record |
| certificates | Permanent | |
| course_reviews | Permanent | |
| learning_settlements | Permanent | Financial records |

### 16.5 Governing Requirement Traceability

SRS-LRN-001–017; SDD-1 Ch.16; SAD-1 Ch.19; PLC-1 Ch.30; KR-1 Ch.50, KR-PNT-004, KR-SRC-004, KR-FRD-002; LEARN-AD-1; ADR-005.

---

# Part IV — Network Graph and Royal Identity

## Chapter 17 — Network Graph Schema

### 17.1 Overview

The Network Graph schema (`graph`) stores the relational projection of the referral network graph. The primary graph traversals (ring membership, K-Level distribution, shortest-path) are performed in the graph database (Neo4j reference, per SAD-1 ADR-006). This schema persists the graph data in PostgreSQL for durability, audit, and cross-engine API access. The schema is optimized for efficient determination of Ring 1–5 membership and K-Level within each ring.

The graph structure: each participant is a node; each referral creates a directed edge from the referred participant to their referrer. Ring membership is determined by graph distance — Ring N contains all participants at graph distance N from the leader. A participant belongs to exactly one leader's Ring 1 (their direct referrer), and to the same leader's Rings 2–5 through transitive referral chains.

Implements: SRS-KRW-004, SRS-KRW-008–011; SDD-1 Ch.10 (RingGraph), Ch.17; SAD-1 Ch.21 (Leadership Graph), ADR-006; KR-1 KR-RNG-001–017, Ch.28, Ch.36–38; PLC-1 Ch.26.

### 17.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS graph;
```

### 17.3 Table Definitions

#### 17.3.1 graph_nodes

Each participant in the network is a graph node. Node properties mirror the key attributes needed for ring and K-Level queries.

```sql
CREATE TABLE graph.graph_nodes (
    node_id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL UNIQUE,  -- References idm.accounts (no FK — cross-engine)
    k_level             INTEGER NOT NULL DEFAULT 1 CHECK (k_level >= 1 AND k_level <= 15),
    trust_score         NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    active_status       BOOLEAN NOT NULL DEFAULT TRUE,
    kyc_tier            TEXT NOT NULL DEFAULT 'TIER_0'
                        CHECK (kyc_tier IN ('TIER_0', 'TIER_1', 'TIER_2', 'TIER_3')),
    is_sanctioned       BOOLEAN NOT NULL DEFAULT FALSE,
    joined_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_graph_nodes_account ON graph.graph_nodes (account_id);
CREATE INDEX ix_graph_nodes_klevel ON graph.graph_nodes (k_level);
CREATE INDEX ix_graph_nodes_active ON graph.graph_nodes (active_status) WHERE active_status = TRUE;

ALTER TABLE graph.graph_nodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE graph.graph_nodes FORCE ROW LEVEL SECURITY;

CREATE POLICY graph_nodes_owner_select ON graph.graph_nodes
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY graph_nodes_admin_all ON graph.graph_nodes
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION graph.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_graph_nodes_updated_at
    BEFORE UPDATE ON graph.graph_nodes
    FOR EACH ROW EXECUTE FUNCTION graph.fn_set_updated_at();

CREATE TRIGGER trg_audit_graph_nodes
    AFTER INSERT OR UPDATE OR DELETE ON graph.graph_nodes
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 17.3.2 graph_edges

Directed referral edges. Each edge goes from the referred participant (source) to their referrer (target). The edge represents "REFERRED_BY" — source was referred by target.

```sql
CREATE TABLE graph.graph_edges (
    edge_id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_account_id   UUID NOT NULL,  -- The referred participant
    target_account_id   UUID NOT NULL,  -- The referrer (leader)
    edge_type           TEXT NOT NULL DEFAULT 'REFERRED_BY',
    referral_date       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    status              TEXT NOT NULL DEFAULT 'ACTIVE'
                        CHECK (status IN ('ACTIVE', 'FRAUDULENT', 'SEVERED')),
    ring_depth          INTEGER,  -- Pre-computed ring depth from target to source (1-5)
    is_qualifying       BOOLEAN,  -- Whether this edge's source qualifies for ring requirements
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_graph_edges_source
    ON graph.graph_edges (source_account_id)
    WHERE status = 'ACTIVE';  -- Each participant has exactly one active referrer

CREATE INDEX ix_graph_edges_target ON graph.graph_edges (target_account_id, status);
CREATE INDEX ix_graph_edges_ring_depth ON graph.graph_edges (target_account_id, ring_depth)
    WHERE status = 'ACTIVE';
CREATE INDEX ix_graph_edges_source ON graph.graph_edges (source_account_id, status);

ALTER TABLE graph.graph_edges ENABLE ROW LEVEL SECURITY;
ALTER TABLE graph.graph_edges FORCE ROW LEVEL SECURITY;

CREATE POLICY graph_edges_admin_all ON graph.graph_edges
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE POLICY graph_edges_owner_select ON graph.graph_edges
    FOR SELECT
    USING (source_account_id = current_setting('app.current_account_id')::UUID
           OR target_account_id = current_setting('app.current_account_id')::UUID);

CREATE TRIGGER trg_audit_graph_edges
    AFTER INSERT OR UPDATE OR DELETE ON graph.graph_edges
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 17.3.3 ring_memberships

Pre-computed ring membership table. For each leader, this table stores all members in each of their Rings 1–5. This is a materialized view of the graph traversal, updated when the graph changes. This table enables efficient "Ring 1–5 membership" queries without traversing the graph at query time.

```sql
CREATE TABLE graph.ring_memberships (
    ring_membership_id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    leader_account_id   UUID NOT NULL,  -- The leader whose ring this membership belongs to
    member_account_id   UUID NOT NULL,  -- The member in the ring
    ring_number         INTEGER NOT NULL CHECK (ring_number >= 1 AND ring_number <= 5),
    member_k_level      INTEGER NOT NULL CHECK (member_k_level >= 1 AND member_k_level <= 15),
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,  -- Member's active status
    is_qualifying       BOOLEAN NOT NULL DEFAULT FALSE,  -- Whether member meets K-Level requirement for this ring
    is_sanctioned       BOOLEAN NOT NULL DEFAULT FALSE,
    joined_ring_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),  -- When this membership was established
    computed_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()  -- When this record was last computed
);

CREATE UNIQUE INDEX uq_graph_ring_memberships_leader_member_ring
    ON graph.ring_memberships (leader_account_id, member_account_id, ring_number);

CREATE INDEX ix_graph_ring_memberships_leader_ring
    ON graph.ring_memberships (leader_account_id, ring_number, is_active)
    WHERE is_active = TRUE;

CREATE INDEX ix_graph_ring_memberships_leader_qualifying
    ON graph.ring_memberships (leader_account_id, ring_number, is_qualifying)
    WHERE is_active = TRUE AND is_qualifying = TRUE;

CREATE INDEX ix_graph_ring_memberships_member
    ON graph.ring_memberships (member_account_id);

ALTER TABLE graph.ring_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE graph.ring_memberships FORCE ROW LEVEL SECURITY;

CREATE POLICY ring_memberships_leader_select ON graph.ring_memberships
    FOR SELECT
    USING (leader_account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY ring_memberships_admin_all ON graph.ring_memberships
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 17.3.4 leadership_qualifications

Per-cycle leadership qualification results for each leader. Stores whether the leader meets the K-Level distribution requirements across Rings 1–5 for promotion to the next K-Level.

```sql
CREATE TABLE graph.leadership_qualifications (
    qualification_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    leader_account_id   UUID NOT NULL,
    cycle_id            UUID NOT NULL,  -- K-Rewards cycle
    target_k_level      INTEGER NOT NULL CHECK (target_k_level >= 1 AND target_k_level <= 15),
    ring1_active        INTEGER NOT NULL DEFAULT 0,
    ring2_active        INTEGER NOT NULL DEFAULT 0,
    ring3_active        INTEGER NOT NULL DEFAULT 0,
    ring4_active        INTEGER NOT NULL DEFAULT 0,
    ring5_active        INTEGER NOT NULL DEFAULT 0,
    ring1_qualifying    INTEGER NOT NULL DEFAULT 0,
    ring2_qualifying    INTEGER NOT NULL DEFAULT 0,
    ring3_qualifying    INTEGER NOT NULL DEFAULT 0,
    ring4_qualifying    INTEGER NOT NULL DEFAULT 0,
    ring5_qualifying    INTEGER NOT NULL DEFAULT 0,
    ring1_required      INTEGER NOT NULL DEFAULT 0,  -- From klevel_definitions
    ring2_required      INTEGER NOT NULL DEFAULT 0,
    ring3_required      INTEGER NOT NULL DEFAULT 0,
    ring4_required      INTEGER NOT NULL DEFAULT 0,
    ring5_required      INTEGER NOT NULL DEFAULT 0,
    ring1_klevel_actual  INTEGER NOT NULL DEFAULT 0,  -- Min K-Level of qualifying Ring 1 members
    ring2_klevel_actual  INTEGER NOT NULL DEFAULT 0,
    ring3_klevel_actual  INTEGER NOT NULL DEFAULT 0,
    ring4_klevel_actual  INTEGER NOT NULL DEFAULT 0,
    ring5_klevel_actual  INTEGER NOT NULL DEFAULT 0,
    ring1_klevel_required INTEGER NOT NULL DEFAULT 0,  -- From klevel_definitions
    ring2_klevel_required INTEGER NOT NULL DEFAULT 0,
    ring3_klevel_required INTEGER NOT NULL DEFAULT 0,
    ring4_klevel_required INTEGER NOT NULL DEFAULT 0,
    ring5_klevel_required INTEGER NOT NULL DEFAULT 0,
    meets_ring_count    BOOLEAN NOT NULL DEFAULT FALSE,  -- All ring counts meet requirements
    meets_klevel_dist   BOOLEAN NOT NULL DEFAULT FALSE,  -- All K-Level distributions meet requirements
    meets_leadership_dev BOOLEAN NOT NULL DEFAULT FALSE,  -- Leadership development requirement met
    is_qualified        BOOLEAN NOT NULL DEFAULT FALSE,  -- Overall qualification result
    qualification_details JSONB NOT NULL DEFAULT '{}',  -- Full breakdown
    computed_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_graph_leadership_qualifications_leader_cycle
    ON graph.leadership_qualifications (leader_account_id, cycle_id);

CREATE INDEX ix_graph_leadership_qualifications_qualified
    ON graph.leadership_qualifications (is_qualified, target_k_level)
    WHERE is_qualified = TRUE;

CREATE INDEX ix_graph_leadership_qualifications_leader
    ON graph.leadership_qualifications (leader_account_id);

ALTER TABLE graph.leadership_qualifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE graph.leadership_qualifications FORCE ROW LEVEL SECURITY;

CREATE POLICY leadership_qualifications_owner_select ON graph.leadership_qualifications
    FOR SELECT
    USING (leader_account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY leadership_qualifications_admin_all ON graph.leadership_qualifications
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 17.3.5 team_memberships

Team membership records — which participants belong to which leader's team. A team is the leader's downline network across all rings.

```sql
CREATE TABLE graph.team_memberships (
    team_membership_id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_leader_id      UUID NOT NULL,  -- Leader account_id
    member_account_id   UUID NOT NULL,  -- Team member account_id
    ring_number         INTEGER NOT NULL CHECK (ring_number >= 1 AND ring_number <= 5),
    joined_team_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    left_team_at        TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_graph_team_memberships_leader_member
    ON graph.team_memberships (team_leader_id, member_account_id)
    WHERE is_active = TRUE;

CREATE INDEX ix_graph_team_memberships_leader ON graph.team_memberships (team_leader_id, is_active);
CREATE INDEX ix_graph_team_memberships_member ON graph.team_memberships (member_account_id, is_active);

ALTER TABLE graph.team_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE graph.team_memberships FORCE ROW LEVEL SECURITY;

CREATE POLICY team_memberships_leader_select ON graph.team_memberships
    FOR SELECT
    USING (team_leader_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY team_memberships_member_select ON graph.team_memberships
    FOR SELECT
    USING (member_account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY team_memberships_admin_all ON graph.team_memberships
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_team_memberships
    AFTER INSERT OR UPDATE OR DELETE ON graph.team_memberships
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 17.3.6 team_identities

Team identity records — the team name and identity associated with each leader's team.

```sql
CREATE TABLE graph.team_identities (
    team_identity_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_leader_id      UUID NOT NULL UNIQUE,  -- Leader account_id (one team per leader)
    team_name           VARCHAR(200) NOT NULL,
    team_name_assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    team_name_updated_at TIMESTAMPTZ,
    team_name_update_count INTEGER NOT NULL DEFAULT 0,
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_graph_team_identities_leader ON graph.team_identities (team_leader_id) WHERE is_active = TRUE;
CREATE UNIQUE INDEX uq_graph_team_identities_name ON graph.team_identities (team_name) WHERE is_active = TRUE;

ALTER TABLE graph.team_identities ENABLE ROW LEVEL SECURITY;
ALTER TABLE graph.team_identities FORCE ROW LEVEL SECURITY;

CREATE POLICY team_identities_leader_select ON graph.team_identities
    FOR SELECT
    USING (team_leader_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY team_identities_admin_all ON graph.team_identities
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_team_identities
    AFTER INSERT OR UPDATE OR DELETE ON graph.team_identities
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

### 17.4 Key Query Patterns

The schema is designed to support the two critical query patterns required by the K-Rewards Engine:

**Query 1: leader → ring → member → K-Level**

Determine the K-Level of each member within each ring of a leader's network.

```sql
-- Get all ring members with their K-Levels for a given leader
SELECT ring_number, member_account_id, member_k_level
FROM graph.ring_memberships
WHERE leader_account_id = :leader_id
  AND is_active = TRUE
  AND is_sanctioned = FALSE
ORDER BY ring_number, member_k_level DESC;

-- Count active qualifying members per ring for a leader
SELECT ring_number, COUNT(*) AS qualifying_count
FROM graph.ring_memberships
WHERE leader_account_id = :leader_id
  AND is_active = TRUE
  AND is_qualifying = TRUE
  AND is_sanctioned = FALSE
GROUP BY ring_number
ORDER BY ring_number;
```

**Query 2: leader → required ring level → actual ring level → qualification result**

Compare the required K-Level distribution across rings against the actual distribution.

```sql
-- Get the qualification result for a leader in a given cycle
SELECT target_k_level,
       ring1_active, ring1_qualifying, ring1_required, ring1_klevel_actual, ring1_klevel_required,
       ring2_active, ring2_qualifying, ring2_required, ring2_klevel_actual, ring2_klevel_required,
       ring3_active, ring3_qualifying, ring3_required, ring3_klevel_actual, ring3_klevel_required,
       ring4_active, ring4_qualifying, ring4_required, ring4_klevel_actual, ring4_klevel_required,
       ring5_active, ring5_qualifying, ring5_required, ring5_klevel_actual, ring5_klevel_required,
       meets_ring_count, meets_klevel_dist, meets_leadership_dev, is_qualified
FROM graph.leadership_qualifications
WHERE leader_account_id = :leader_id
  AND cycle_id = :cycle_id;
```

**Query 3: How many Ring 1 members has this leader developed to Leadership tier (L7+)?**

```sql
SELECT COUNT(*) AS leadership_developed
FROM graph.ring_memberships
WHERE leader_account_id = :leader_id
  AND ring_number = 1
  AND is_active = TRUE
  AND is_sanctioned = FALSE
  AND member_k_level >= 7;
```

### 17.5 Graph Synchronization

The `ring_memberships` table is a materialized projection of the graph database. It is updated when:

1. A new referral is created (new graph edge added).
2. A participant's K-Level changes (promotion affects ring qualification).
3. A participant's active status changes.
4. A participant is sanctioned or unsanctioned.
5. At the start of each reward cycle (full re-computation).

The synchronization is performed by a background job that traverses the graph database and updates the `ring_memberships` table. The graph database remains the authoritative source for traversals; the PostgreSQL table is the persistent projection for API access and audit.

### 17.6 Anti-Accumulation Enforcement

The Anti-Accumulation Principle (KR-1 Ch.38) is enforced at the query level. A leader cannot qualify for top-tier promotion through referral accumulation alone — they must develop other qualified leaders. The `meets_leadership_dev` field in `leadership_qualifications` verifies that the leader has developed Ring 1 members to Leadership tier (L7+).

```sql
-- Anti-accumulation check: leader must have developed L7+ members in Ring 1
SELECT COUNT(*) >= :min_leadership_developed AS meets_requirement
FROM graph.ring_memberships
WHERE leader_account_id = :leader_id
  AND ring_number = 1
  AND is_active = TRUE
  AND is_sanctioned = FALSE
  AND member_k_level >= 7;
```

### 17.7 Circular Referral Detection

The graph edges table includes a `status` field that can mark edges as `FRAUDULENT` when circular referral chains are detected. The graph database performs cycle detection; fraudulent edges are flagged and excluded from ring membership calculations.

```sql
-- Mark a referral edge as fraudulent (circular referral detected)
UPDATE graph.graph_edges
SET status = 'FRAUDULENT', updated_at = NOW()
WHERE edge_id = :edge_id;

-- Remove ring memberships derived from fraudulent edges
UPDATE graph.ring_memberships
SET is_active = FALSE
WHERE member_account_id = :fraudulent_account_id
  AND leader_account_id = :affected_leader_id;
```

### 17.8 Retention

| Table | Retention | Notes |
|---|---|---|
| graph_nodes | Permanent | Updated in place |
| graph_edges | Permanent | Status may change (fraudulent/severed) |
| ring_memberships | Permanent | Recomputed each cycle |
| leadership_qualifications | Permanent | Per-cycle qualification results |
| team_memberships | Permanent | |
| team_identities | Permanent | |

### 17.9 Governing Requirement Traceability

SRS-KRW-004 (K-Rings), SRS-KRW-008–011 (leadership qualification, ring distribution); SDD-1 Ch.10 (RingGraph data model), Ch.17 (Leadership Qualification Design); SAD-1 Ch.21 (Leadership Graph and Network Depth Architecture), ADR-006 (Graph DB for K-Rings); KR-1 KR-RNG-001–017, Ch.28, Ch.36–38; PLC-1 Ch.26.

---

## Chapter 18 — Royal Identity Schema

### 18.1 Overview

The Royal Identity schema (`roy`) stores the recognition identity model integrated with the K-Level system. Royal titles are **recognition identities** — they do not confer political, governmental, hereditary, or financial authority beyond standard K-Level privileges (KR-1 KR-LVL-045). The schema stores usernames, team names, leadership titles, title history, coronation records, and coronation history. Historical titles are **never overwritten** — title transitions create new title history records, preserving the full lineage.

Implements: SRS-ROY-001–009; SDD-1 Ch.18; SAD-1 Ch.22; PLC-1 Ch.22; KR-1 KR-LVL-042–054, Ch.51–53, Ch.65.

### 18.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS roy;
```

### 18.3 Table Definitions

#### 18.3.1 royal_identities

The core royal identity record for each participant who has reached the Leadership tier (L7+). One record per account. Username is immutable once assigned (KR-LVL-043).

```sql
CREATE TABLE roy.royal_identities (
    royal_identity_id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL UNIQUE,  -- One royal identity per account
    royal_username      VARCHAR(100) NOT NULL,
    team_name           VARCHAR(200),  -- Team name (may be updated with governance approval)
    current_title       TEXT NOT NULL CHECK (current_title IN ('Normal', 'Prince', 'Crown Prince', 'King')),
    current_tier        TEXT NOT NULL CHECK (current_tier IN (
                            'FOUNDATION_GROWTH', 'LEADERSHIP', 'EXECUTIVE', 'LEGACY'
                        )),
    current_k_level     INTEGER NOT NULL CHECK (current_k_level >= 1 AND current_k_level <= 15),
    title_assigned_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    title_last_changed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version             INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX uq_roy_royal_identities_username
    ON roy.royal_identities (royal_username)
    WHERE is_active = TRUE;

CREATE INDEX ix_roy_royal_identities_account ON roy.royal_identities (account_id);
CREATE INDEX ix_roy_royal_identities_title ON roy.royal_identities (current_title);
CREATE INDEX ix_roy_royal_identities_klevel ON roy.royal_identities (current_k_level);

ALTER TABLE roy.royal_identities ENABLE ROW LEVEL SECURITY;
ALTER TABLE roy.royal_identities FORCE ROW LEVEL SECURITY;

CREATE POLICY royal_identities_owner_select ON roy.royal_identities
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY royal_identities_public_select ON roy.royal_identities
    FOR SELECT
    USING (is_active = TRUE);  -- Royal identities are public recognition

CREATE POLICY royal_identities_admin_all ON roy.royal_identities
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION roy.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_royal_identities_updated_at
    BEFORE UPDATE ON roy.royal_identities
    FOR EACH ROW EXECUTE FUNCTION roy.fn_set_updated_at();

CREATE TRIGGER trg_audit_royal_identities
    AFTER INSERT OR UPDATE OR DELETE ON roy.royal_identities
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 18.3.2 title_history

Append-only title history. Every title transition creates a new record. Historical titles are never overwritten or deleted. This preserves the full lineage of a participant's recognition journey.

```sql
CREATE TABLE roy.title_history (
    title_history_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    previous_title      TEXT CHECK (previous_title IN ('Normal', 'Prince', 'Crown Prince', 'King')),
    new_title           TEXT NOT NULL CHECK (new_title IN ('Normal', 'Prince', 'Crown Prince', 'King')),
    previous_k_level    INTEGER CHECK (previous_k_level >= 1 AND previous_k_level <= 15),
    new_k_level         INTEGER NOT NULL CHECK (new_k_level >= 1 AND new_k_level <= 15),
    previous_tier       TEXT,
    new_tier            TEXT NOT NULL CHECK (new_tier IN (
                            'FOUNDATION_GROWTH', 'LEADERSHIP', 'EXECUTIVE', 'LEGACY'
                        )),
    transition_type     TEXT NOT NULL CHECK (transition_type IN (
                            'PROMOTION', 'TIER_TRANSITION', 'INITIAL_ASSIGNMENT'
                        )),
    transition_reason   TEXT NOT NULL,  -- e.g., "K-Level promoted from 9 to 10"
    cycle_id            UUID,  -- K-Rewards cycle in which transition occurred
    changed_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    audit_hash          VARCHAR(64) NOT NULL
);

CREATE INDEX ix_roy_title_history_account ON roy.title_history (account_id, changed_at);
CREATE INDEX ix_roy_title_history_title ON roy.title_history (new_title, changed_at);

ALTER TABLE roy.title_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE roy.title_history FORCE ROW LEVEL SECURITY;

CREATE POLICY title_history_owner_select ON roy.title_history
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY title_history_public_select ON roy.title_history
    FOR SELECT
    USING (true);  -- Title history is public recognition

CREATE POLICY title_history_admin_all ON roy.title_history
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

-- Append-only protection — title history is never edited or deleted
CREATE TRIGGER trg_block_update_title_history BEFORE UPDATE ON roy.title_history
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
CREATE TRIGGER trg_block_delete_title_history BEFORE DELETE ON roy.title_history
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

#### 18.3.3 coronation_records

Coronation records for participants who have been crowned King (Legacy tier, L13–15). Coronation is an annual recognition event. Coronation records are permanent historical records (KR-LVL-054).

```sql
CREATE TABLE roy.coronation_records (
    coronation_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id          UUID NOT NULL,
    coronation_year     INTEGER NOT NULL,
    coronation_cycle_id UUID NOT NULL,  -- K-Rewards cycle of coronation
    crowned_title       TEXT NOT NULL CHECK (crowned_title = 'King'),
    crowned_k_level     INTEGER NOT NULL CHECK (crowned_k_level >= 13 AND crowned_k_level <= 15),
    coronation_category TEXT NOT NULL CHECK (coronation_category IN (
                            'NEW_KING', 'RENEWED_KING', 'LIFETIME_ACHIEVEMENT',
                            'EXCEPTIONAL_LEADERSHIP', 'COMMUNITY_EXCELLENCE'
                        )),
    coronation_awards   JSONB NOT NULL DEFAULT '[]',  -- Array of awards (KR-LVL-052)
    funding_source      TEXT NOT NULL CHECK (funding_source = 'ALLOCATION_POOL'),  -- NOT reserve (KR-LVL-047, KR-LVL-053)
    funding_amount      NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    wallet_transaction_id UUID,  -- Reference to wal.wallet_transactions (no FK)
    eligibility_verified BOOLEAN NOT NULL DEFAULT TRUE,
    verification_details JSONB NOT NULL DEFAULT '{}',
    anti_manipulation_check BOOLEAN NOT NULL DEFAULT TRUE,
    manipulation_check_details JSONB NOT NULL DEFAULT '{}',
    crowned_by          UUID NOT NULL,  -- Governance approver
    coronation_date     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    is_revoked          BOOLEAN NOT NULL DEFAULT FALSE,
    revoked_at          TIMESTAMPTZ,
    revoke_reason       TEXT,
    audit_hash          VARCHAR(64) NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_roy_coronation_records_account_year
    ON roy.coronation_records (account_id, coronation_year)
    WHERE is_revoked = FALSE;

CREATE INDEX ix_roy_coronation_records_account ON roy.coronation_records (account_id, coronation_year);
CREATE INDEX ix_roy_coronation_records_year ON roy.coronation_records (coronation_year);

ALTER TABLE roy.coronation_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE roy.coronation_records FORCE ROW LEVEL SECURITY;

CREATE POLICY coronation_records_public_select ON roy.coronation_records
    FOR SELECT
    USING (is_revoked = FALSE);  -- Coronation records are public recognition

CREATE POLICY coronation_records_admin_all ON roy.coronation_records
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

-- Append-only protection — coronation records are permanent historical records (KR-LVL-054)
CREATE TRIGGER trg_block_update_coronation_records BEFORE UPDATE ON roy.coronation_records
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
CREATE TRIGGER trg_block_delete_coronation_records BEFORE DELETE ON roy.coronation_records
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

#### 18.3.4 coronation_categories

Configuration table for coronation award categories (KR-LVL-051, KR-LVL-052).

```sql
CREATE TABLE roy.coronation_categories (
    category_code       TEXT PRIMARY KEY,
    category_name       TEXT NOT NULL,
    description         TEXT,
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE roy.coronation_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY coronation_categories_public_select ON roy.coronation_categories
    FOR SELECT USING (is_active = TRUE);
CREATE POLICY coronation_categories_admin_all ON roy.coronation_categories
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

### 18.4 Tier-to-Title Mapping

The tier-to-title mapping is defined in KR-1 (KR-LVL-042) and PLC-1 (Ch.22):

| Tier | K-Level Range | Title |
|---|---|---|
| Foundation/Growth | L1–L6 | Normal |
| Leadership | L7–L9 | Prince |
| Executive | L10–L12 | Crown Prince |
| Legacy | L13–L15 | King |

This mapping is enforced via a CHECK constraint on `current_title` and application-level logic that determines the title from the K-Level. Title transitions are automatic on K-Level promotion — no separate action is required (SDD-1 Ch.18).

### 18.5 Username Immutability

The royal username is immutable once assigned (KR-LVL-043; SRS-ROY-001 AC4). This is enforced at the database level by blocking updates to the `royal_username` column after initial assignment:

```sql
CREATE OR REPLACE FUNCTION roy.fn_protect_username()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.royal_username IS DISTINCT FROM OLD.royal_username THEN
        RAISE EXCEPTION 'Royal username is immutable and cannot be changed (KR-LVL-043).';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_protect_royal_username
    BEFORE UPDATE ON roy.royal_identities
    FOR EACH ROW EXECUTE FUNCTION roy.fn_protect_username();
```

### 18.6 Team Name Updates

Team names may be updated with governance approval (SRS-ROY-002 AC2). Team name updates do NOT change the royal username (SRS-ROY-001 AC2). Team name history is tracked via the `team_name_updated_at` and `team_name_update_count` fields in `royal_identities`, and in the `team_identities` table in the graph schema.

### 18.7 Retention

| Table | Retention | Notes |
|---|---|---|
| royal_identities | Permanent | Updated in place (title, team name) |
| title_history | Permanent | Append-only, immutable |
| coronation_records | Permanent | Append-only, immutable (KR-LVL-054) |
| coronation_categories | Permanent | Configuration table |

### 18.8 Governing Requirement Traceability

SRS-ROY-001 (username assignment and permanence), SRS-ROY-002 (team name), SRS-ROY-003 (tier-to-title mapping), SRS-ROY-004 (title transitions), SRS-ROY-005 (recognition, not authority), SRS-ROY-006 (coronation eligibility and verification), SRS-ROY-007 (coronation recognition and awards), SRS-ROY-008 (coronation cycle), SRS-ROY-009 (coronation history); SDD-1 Ch.18; SAD-1 Ch.22; PLC-1 Ch.22; KR-1 KR-LVL-042–054, Ch.51–53, Ch.65.

---

# Part V — 90/10 Accounting and Security

## Chapter 19 — 90/10 Accounting Schema

### 19.1 Overview

The 90/10 Accounting schema (`econ`) is the structural enforcement layer for the 90/10 Principle (KR-ECO-001). It makes the 10% reserve **impossible to hide** by requiring every qualifying economic transaction to be traceable through a complete chain:

```
source transaction → qualifying revenue → reserve allocation → 90% allocable amount → distributions → settlement
```

Every step in this chain is a separate table with check constraints that enforce the 90/10 split at the database level. The reserve is held in a separate table (`wal.reserve_holdings`) with append-only protection and governance-only release. Reconciliation records exist for every cycle, verifying that allocations sum to 90% and the reserve is 10%.

Implements: SRS-WAL-006 (90/10 conformance); SDD-1 Ch.11 (90/10 enforcement), Ch.19 (90/10 accounting); SAD-1 Ch.14; PLC-1 Ch.25; KR-1 KR-ECO-001–063, Ch.7–10, Ch.68.

### 19.2 Schema Creation

```sql
CREATE SCHEMA IF NOT EXISTS econ;
```

### 19.3 Table Definitions

#### 19.3.1 source_transactions

The source transaction is the origin point of every economic flow. Every commerce order, service contract, learning enrollment, platform fee, and partner transaction that generates revenue creates a source transaction record.

```sql
CREATE TABLE econ.source_transactions (
    source_transaction_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    transaction_type    TEXT NOT NULL CHECK (transaction_type IN (
                            'COMMERCE', 'SERVICES', 'LEARNING',
                            'PLATFORM_FEE', 'PARTNER'
                        )),
    source_engine       TEXT NOT NULL,  -- Engine that originated the transaction
    source_entity_type  TEXT NOT NULL,  -- e.g., 'ORDER', 'CONTRACT', 'ENROLLMENT'
    source_entity_id    UUID NOT NULL,  -- ID of the source entity
    account_id          UUID,  -- Counterparty account_id (vendor/provider/instructor/partner)
    gross_revenue       NUMERIC(20,2) NOT NULL,
    deductions          NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    deduction_breakdown JSONB NOT NULL DEFAULT '{}',  -- Payment fees, VAT, etc.
    qualifying_economic_value NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    status              TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'QUALIFIED', 'SETTLED', 'REVERSED', 'CANCELLED')),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    qualified_at        TIMESTAMPTZ,
    settled_at          TIMESTAMPTZ,
    reversed_at         TIMESTAMPTZ,
    version             INTEGER NOT NULL DEFAULT 1,
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Check constraint: QEV = GR - D (KR-ECO-010, KR-ECO-003)
ALTER TABLE econ.source_transactions
    ADD CONSTRAINT ck_econ_source_qev
    CHECK (qualifying_economic_value = gross_revenue - deductions);

-- Check constraint: QEV >= 0
ALTER TABLE econ.source_transactions
    ADD CONSTRAINT ck_econ_source_qev_non_negative
    CHECK (qualifying_economic_value >= 0);

CREATE INDEX ix_econ_source_transactions_type ON econ.source_transactions (transaction_type, status);
CREATE INDEX ix_econ_source_transactions_source ON econ.source_transactions (source_entity_type, source_entity_id);
CREATE INDEX ix_econ_source_transactions_account ON econ.source_transactions (account_id);
CREATE INDEX ix_econ_source_transactions_status ON econ.source_transactions (status);

ALTER TABLE econ.source_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE econ.source_transactions FORCE ROW LEVEL SECURITY;

CREATE POLICY source_transactions_admin_all ON econ.source_transactions
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE POLICY source_transactions_counterparty_select ON econ.source_transactions
    FOR SELECT
    USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE TRIGGER trg_audit_source_transactions
    AFTER INSERT OR UPDATE OR DELETE ON econ.source_transactions
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();

CREATE OR REPLACE FUNCTION econ.fn_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_source_transactions_updated_at
    BEFORE UPDATE ON econ.source_transactions
    FOR EACH ROW EXECUTE FUNCTION econ.fn_set_updated_at();
```

#### 19.3.2 reserve_allocations

Every qualifying transaction allocates 10% of QEV to the reserve. This table records each reserve allocation. Reserve allocations are linked to `wal.reserve_holdings` for the actual holding of funds.

```sql
CREATE TABLE econ.reserve_allocations (
    reserve_allocation_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_transaction_id UUID NOT NULL,  -- Reference to econ.source_transactions (no FK within econ — self-ref)
    cycle_id            UUID NOT NULL,  -- K-Rewards cycle
    reserve_amount      NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    reserve_holding_id  UUID,  -- Reference to wal.reserve_holdings (no FK — cross-engine)
    revenue_type        TEXT NOT NULL CHECK (revenue_type IN (
                            'COMMERCE', 'SERVICES', 'LEARNING',
                            'PLATFORM_FEE', 'PARTNER'
                        )),
    status              TEXT NOT NULL DEFAULT 'ALLOCATED'
                        CHECK (status IN ('ALLOCATED', 'HELD', 'RELEASED', 'REVERSED')),
    allocated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    released_at         TIMESTAMPTZ,
    release_reason      TEXT,
    governance_approval_ref TEXT,  -- Reference to governance approval (required for release)
    audit_hash          VARCHAR(64) NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Check constraint: reserve = 10% of QEV (KR-ECO-012)
-- The reserve amount is validated against the source transaction's QEV at insert time
-- Application logic ensures: reserve_amount = source_transaction.qualifying_economic_value * 0.10
ALTER TABLE econ.reserve_allocations
    ADD CONSTRAINT ck_econ_reserve_positive
    CHECK (reserve_amount > 0);

CREATE INDEX ix_econ_reserve_allocations_source ON econ.reserve_allocations (source_transaction_id);
CREATE INDEX ix_econ_reserve_allocations_cycle ON econ.reserve_allocations (cycle_id);
CREATE INDEX ix_econ_reserve_allocations_status ON econ.reserve_allocations (status) WHERE status IN ('ALLOCATED', 'HELD');

ALTER TABLE econ.reserve_allocations ENABLE ROW LEVEL SECURITY;
ALTER TABLE econ.reserve_allocations FORCE ROW LEVEL SECURITY;

-- Reserve allocations are admin-only — participants cannot see reserve details
CREATE POLICY reserve_allocations_admin_all ON econ.reserve_allocations
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

-- Append-only protection — reserve allocations cannot be edited
CREATE TRIGGER trg_block_update_reserve_allocations BEFORE UPDATE ON econ.reserve_allocations
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
CREATE TRIGGER trg_block_delete_reserve_allocations BEFORE DELETE ON econ.reserve_allocations
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

#### 19.3.3 allocation_pool_entries

The allocation pool is 90% of QEV. This table records the 90% allocable amount and its breakdown into distribution categories (counterparty, platform, rewards, leadership, operational).

```sql
CREATE TABLE econ.allocation_pool_entries (
    allocation_pool_id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_transaction_id UUID NOT NULL,
    cycle_id            UUID NOT NULL,
    allocation_pool_amount NUMERIC(20,2) NOT NULL,  -- 90% of QEV
    counterparty_amount NUMERIC(20,2),  -- Vendor/Provider/Instructor/Partner share
    platform_amount     NUMERIC(20,2) NOT NULL,
    reward_pool_amount  NUMERIC(20,2) NOT NULL,  -- Rewards + Leadership
    operational_amount  NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    revenue_type        TEXT NOT NULL CHECK (revenue_type IN (
                            'COMMERCE', 'SERVICES', 'LEARNING',
                            'PLATFORM_FEE', 'PARTNER'
                        )),
    status              TEXT NOT NULL DEFAULT 'ALLOCATED'
                        CHECK (status IN ('ALLOCATED', 'DISTRIBUTED', 'REVERSED')),
    allocated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    distributed_at      TIMESTAMPTZ,
    audit_hash          VARCHAR(64) NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Check constraint: allocation pool = 90% of QEV (KR-ECO-011)
-- Application logic ensures: allocation_pool_amount = source_transaction.qualifying_economic_value * 0.90
ALTER TABLE econ.allocation_pool_entries
    ADD CONSTRAINT ck_econ_allocation_pool_positive
    CHECK (allocation_pool_amount > 0);

-- Check constraint: sum of distributions = allocation pool (KR-ECO-005, KR-ECO-017)
ALTER TABLE econ.allocation_pool_entries
    ADD CONSTRAINT ck_econ_allocation_pool_sum
    CHECK (
        COALESCE(counterparty_amount, 0) + platform_amount +
        reward_pool_amount + operational_amount = allocation_pool_amount
    );

CREATE INDEX ix_econ_allocation_pool_entries_source ON econ.allocation_pool_entries (source_transaction_id);
CREATE INDEX ix_econ_allocation_pool_entries_cycle ON econ.allocation_pool_entries (cycle_id);
CREATE INDEX ix_econ_allocation_pool_entries_status ON econ.allocation_pool_entries (status);

ALTER TABLE econ.allocation_pool_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE econ.allocation_pool_entries FORCE ROW LEVEL SECURITY;

CREATE POLICY allocation_pool_entries_admin_all ON econ.allocation_pool_entries
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_allocation_pool_entries
    AFTER INSERT OR UPDATE OR DELETE ON econ.allocation_pool_entries
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 19.3.4 distribution_entries

Individual distribution entries — each allocation is broken into specific distributions to specific recipients (counterparty wallet, platform wallet, reward pool, operational wallet).

```sql
CREATE TABLE econ.distribution_entries (
    distribution_entry_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_transaction_id UUID NOT NULL,
    allocation_pool_id  UUID NOT NULL,
    cycle_id            UUID NOT NULL,
    distribution_category TEXT NOT NULL CHECK (distribution_category IN (
                            'COUNTERPARTY', 'PLATFORM', 'REWARDS',
                            'LEADERSHIP', 'OPERATIONAL'
                        )),
    recipient_account_id UUID,  -- Wallet owner (NULL for platform/operational/reward pool)
    recipient_wallet_type TEXT,  -- VENDOR, PROVIDER, INSTRUCTOR, PARTNER, PLATFORM, REWARD_POOL, OPERATIONAL
    amount              NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    allocation_rate    NUMERIC(8,6) NOT NULL,  -- The rate applied (e.g., 0.600000 for 60%)
    wallet_transaction_id UUID,  -- Reference to wal.wallet_transactions (no FK)
    settlement_id       UUID,  -- Reference to wal.settlements (no FK)
    status              TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'DISTRIBUTED', 'FAILED', 'REVERSED')),
    distributed_at      TIMESTAMPTZ,
    audit_hash          VARCHAR(64) NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Check constraint: amount must be positive
ALTER TABLE econ.distribution_entries
    ADD CONSTRAINT ck_econ_distribution_positive
    CHECK (amount > 0);

CREATE INDEX ix_econ_distribution_entries_source ON econ.distribution_entries (source_transaction_id);
CREATE INDEX ix_econ_distribution_entries_cycle ON econ.distribution_entries (cycle_id);
CREATE INDEX ix_econ_distribution_entries_category ON econ.distribution_entries (distribution_category);
CREATE INDEX ix_econ_distribution_entries_recipient ON econ.distribution_entries (recipient_account_id);
CREATE INDEX ix_econ_distribution_entries_status ON econ.distribution_entries (status);

ALTER TABLE econ.distribution_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE econ.distribution_entries FORCE ROW LEVEL SECURITY;

CREATE POLICY distribution_entries_recipient_select ON econ.distribution_entries
    FOR SELECT
    USING (recipient_account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY distribution_entries_admin_all ON econ.distribution_entries
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 19.3.5 settlement_links

Links the 90/10 accounting chain to the wallet settlement. Each source transaction has one settlement link that references the wallet settlement record.

```sql
CREATE TABLE econ.settlement_links (
    settlement_link_id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_transaction_id UUID NOT NULL,
    wallet_settlement_id UUID NOT NULL,  -- Reference to wal.settlements (no FK)
    cycle_id            UUID NOT NULL,
    total_amount        NUMERIC(20,2) NOT NULL,  -- Total settled (should = QEV)
    counterparty_settled NUMERIC(20,2),
    platform_settled    NUMERIC(20,2) NOT NULL,
    reward_pool_settled NUMERIC(20,2) NOT NULL,
    operational_settled NUMERIC(20,2) NOT NULL,
    reserve_held        NUMERIC(20,2) NOT NULL,
    currency            VARCHAR(3) NOT NULL DEFAULT 'USD',
    status              TEXT NOT NULL DEFAULT 'PENDING'
                        CHECK (status IN ('PENDING', 'SETTLED', 'FAILED', 'REVERSED')),
    settled_at          TIMESTAMPTZ,
    audit_hash          VARCHAR(64) NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Check constraint: total = distributions + reserve (KR-ECO-013: AP + R = QEV)
ALTER TABLE econ.settlement_links
    ADD CONSTRAINT ck_econ_settlement_link_total
    CHECK (
        COALESCE(counterparty_settled, 0) + platform_settled +
        reward_pool_settled + operational_settled + reserve_held = total_amount
    );

CREATE INDEX ix_econ_settlement_links_source ON econ.settlement_links (source_transaction_id);
CREATE INDEX ix_econ_settlement_links_cycle ON econ.settlement_links (cycle_id);
CREATE INDEX ix_econ_settlement_links_status ON econ.settlement_links (status);

ALTER TABLE econ.settlement_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE econ.settlement_links FORCE ROW LEVEL SECURITY;

CREATE POLICY settlement_links_admin_all ON econ.settlement_links
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

CREATE TRIGGER trg_audit_settlement_links
    AFTER INSERT OR UPDATE OR DELETE ON econ.settlement_links
    FOR EACH ROW EXECUTE FUNCTION shared.fn_audit_trigger();
```

#### 19.3.6 cycle_reconciliations

Per-cycle reconciliation records verifying 90/10 enforcement. For each cycle, the reconciliation verifies that:
1. Allocation rates sum to 90% for every revenue type.
2. The 10% reserve is correctly calculated and held.
3. No over-allocation occurred.
4. Distributed + undistributed = pool total.
5. No reserve funds were used for rewards.

```sql
CREATE TABLE econ.cycle_reconciliations (
    reconciliation_id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cycle_id            UUID NOT NULL UNIQUE,
    reconciliation_type TEXT NOT NULL CHECK (reconciliation_type IN ('CYCLE_END', 'MID_CYCLE', 'AUDIT')),
    -- Aggregate totals for the cycle
    total_gross_revenue NUMERIC(20,2) NOT NULL,
    total_deductions    NUMERIC(20,2) NOT NULL,
    total_qev           NUMERIC(20,2) NOT NULL,
    total_allocation_pool NUMERIC(20,2) NOT NULL,  -- Should = 90% of total QEV
    total_reserve       NUMERIC(20,2) NOT NULL,  -- Should = 10% of total QEV
    -- Per-revenue-type breakdown
    commerce_totals     JSONB NOT NULL DEFAULT '{}',
    services_totals     JSONB NOT NULL DEFAULT '{}',
    learning_totals     JSONB NOT NULL DEFAULT '{}',
    platform_fee_totals JSONB NOT NULL DEFAULT '{}',
    partner_totals      JSONB NOT NULL DEFAULT '{}',
    -- Verification results
    allocation_rates_verified BOOLEAN NOT NULL DEFAULT FALSE,  -- All rates sum to 90%
    reserve_verified   BOOLEAN NOT NULL DEFAULT FALSE,  -- Reserve = 10% of QEV
    no_over_allocation BOOLEAN NOT NULL DEFAULT FALSE,  -- No allocation > 90%
    pool_balance_verified BOOLEAN NOT NULL DEFAULT FALSE,  -- distributed + undistributed = pool
    no_reserve_for_rewards BOOLEAN NOT NULL DEFAULT FALSE,  -- Reserve not used for rewards
    -- Discrepancy tracking
    discrepancy_amount NUMERIC(20,2) NOT NULL DEFAULT 0.00,
    discrepancy_notes  TEXT,
    is_balanced        BOOLEAN NOT NULL DEFAULT FALSE,  -- True if all verifications pass
    reconciled_by      UUID,
    reconciled_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Check constraint: QEV = GR - D
ALTER TABLE econ.cycle_reconciliations
    ADD CONSTRAINT ck_econ_cycle_recon_qev
    CHECK (total_qev = total_gross_revenue - total_deductions);

-- Check constraint: AP + R = QEV (KR-ECO-013)
ALTER TABLE econ.cycle_reconciliations
    ADD CONSTRAINT ck_econ_cycle_recon_90_10
    CHECK (total_allocation_pool + total_reserve = total_qev);

CREATE INDEX ix_econ_cycle_reconciliations_cycle ON econ.cycle_reconciliations (cycle_id);
CREATE INDEX ix_econ_cycle_reconciliations_balanced ON econ.cycle_reconciliations (is_balanced);

ALTER TABLE econ.cycle_reconciliations ENABLE ROW LEVEL SECURITY;
ALTER TABLE econ.cycle_reconciliations FORCE ROW LEVEL SECURITY;

CREATE POLICY cycle_reconciliations_admin_all ON econ.cycle_reconciliations
    FOR ALL TO admin_role USING (true) WITH CHECK (true);

-- Append-only protection — reconciliation records cannot be edited
CREATE TRIGGER trg_block_update_cycle_reconciliations BEFORE UPDATE ON econ.cycle_reconciliations
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
CREATE TRIGGER trg_block_delete_cycle_reconciliations BEFORE DELETE ON econ.cycle_reconciliations
    FOR EACH ROW EXECUTE FUNCTION shared.fn_block_mutation();
```

#### 19.3.7 allocation_rate_config

Configuration table for allocation rates per revenue type. All values are GOVERNANCE PARAMETERS owned by KR-1 (KR-ECO-014). The application reads these rates and uses them for calculations; they are never hard-coded.

```sql
CREATE TABLE econ.allocation_rate_config (
    config_id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    revenue_type        TEXT NOT NULL CHECK (revenue_type IN (
                            'COMMERCE', 'SERVICES', 'LEARNING',
                            'PLATFORM_FEE', 'PARTNER'
                        )),
    counterparty_rate   NUMERIC(8,6) NOT NULL DEFAULT 0.000000,  -- Vendor/Provider/Instructor/Partner
    platform_rate       NUMERIC(8,6) NOT NULL,
    rewards_rate        NUMERIC(8,6) NOT NULL,
    leadership_rate     NUMERIC(8,6) NOT NULL,
    operational_rate    NUMERIC(8,6) NOT NULL,
    total_allocation_rate NUMERIC(8,6) NOT NULL,  -- Must = 0.900000 (90%)
    kr_rule_id          TEXT NOT NULL,
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
    activated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX uq_econ_allocation_rate_config_type
    ON econ.allocation_rate_config (revenue_type)
    WHERE is_active = TRUE;

-- Check constraint: sum of rates = 90% (KR-ECO-017)
ALTER TABLE econ.allocation_rate_config
    ADD CONSTRAINT ck_econ_allocation_rate_sum
    CHECK (
        counterparty_rate + platform_rate + rewards_rate +
        leadership_rate + operational_rate = 0.900000
    );

-- Check constraint: total_allocation_rate = 0.90
ALTER TABLE econ.allocation_rate_config
    ADD CONSTRAINT ck_econ_allocation_rate_total
    CHECK (total_allocation_rate = 0.900000);

-- Check constraint: all rates non-negative
ALTER TABLE econ.allocation_rate_config
    ADD CONSTRAINT ck_econ_allocation_rate_non_negative
    CHECK (
        counterparty_rate >= 0 AND platform_rate >= 0 AND
        rewards_rate >= 0 AND leadership_rate >= 0 AND operational_rate >= 0
    );

ALTER TABLE econ.allocation_rate_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY allocation_rate_config_public_select ON econ.allocation_rate_config
    FOR SELECT
    USING (is_active = TRUE);

CREATE POLICY allocation_rate_config_admin_all ON econ.allocation_rate_config
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

### 19.4 The Complete Traceability Chain

Every qualifying economic transaction is traceable through the complete chain:

```
1. source_transactions        — GR, D, QEV (KR-ECO-008, 009, 010)
       ↓
2. reserve_allocations        — 10% of QEV → reserve (KR-ECO-012)
       ↓
3. allocation_pool_entries    — 90% of QEV → allocation pool (KR-ECO-011)
       ↓
4. distribution_entries       — Per-category distributions (KR-ECO-015)
       ↓
5. settlement_links           — Links to wallet settlements
       ↓
6. wal.settlements            — Wallet settlement execution
       ↓
7. wal.wallet_transactions    — Wallet ledger entries
       ↓
8. wal.reserve_holdings       — Reserve funds held (append-only, governance-only release)
       ↓
9. cycle_reconciliations      — Per-cycle verification (KR-ECO-017, KR-1 Ch.68)
```

**The reserve is impossible to hide because:**
1. Every source transaction has a linked reserve allocation (10% of QEV).
2. Reserve allocations are in a separate table (`reserve_allocations`) with append-only protection.
3. Reserve holdings are in a separate table (`wal.reserve_holdings`) with append-only protection.
4. Reserve holdings can only be released with a `governance_approval_ref` — no application logic or trigger can release reserve without governance approval.
5. Cycle reconciliations verify that `total_reserve = 10% of total_qev` and that `no_reserve_for_rewards = TRUE`.
6. Check constraints on `cycle_reconciliations` enforce `total_allocation_pool + total_reserve = total_qev` at the database level.

### 19.5 Revenue Waterfall Reference

All allocation rates are GOVERNANCE PARAMETERS owned by KR-1 (KR-ECO-014):

| Revenue Type | Counterparty | Platform | Rewards | Leadership | Operational | Sum (AP) | Reserve | Total |
|---|---|---|---|---|---|---|---|---|
| Commerce | 15% | 60% | 8% | 5% | 2% | 90% | 10% | 100% |
| Services | 15% | 60% | 8% | 5% | 2% | 90% | 10% | 100% |
| Learning | 20% | 55% | 8% | 5% | 2% | 90% | 10% | 100% |
| Platform Fee | 65% | 0% | 15% | 7% | 3% | 90% | 10% | 100% |
| Partner | 40% | 35% | 10% | 3% | 2% | 90% | 10% | 100% |

Note: Platform Fee has no counterparty (the platform is the sole service provider). The counterparty_rate is 0.000000 for Platform Fee.

### 19.6 Reconciliation Verification Queries

```sql
-- Verify allocation rates sum to 90% for each revenue type
SELECT revenue_type,
       counterparty_rate, platform_rate, rewards_rate, leadership_rate, operational_rate,
       counterparty_rate + platform_rate + rewards_rate + leadership_rate + operational_rate AS total
FROM econ.allocation_rate_config
WHERE is_active = TRUE;
-- Expected: total = 0.900000 for all rows

-- Verify cycle reconciliation: AP + R = QEV
SELECT cycle_id, total_qev, total_allocation_pool, total_reserve,
       total_allocation_pool + total_reserve AS computed_total,
       is_balanced
FROM econ.cycle_reconciliations;
-- Expected: computed_total = total_qev AND is_balanced = TRUE

-- Verify no reserve was used for rewards
SELECT cycle_id, no_reserve_for_rewards
FROM econ.cycle_reconciliations
WHERE no_reserve_for_rewards = FALSE;
-- Expected: 0 rows (no cycle should have reserve used for rewards)

-- Full traceability for a single source transaction
SELECT
    st.source_transaction_id, st.transaction_type, st.gross_revenue, st.deductions,
    st.qualifying_economic_value,
    ra.reserve_amount,
    ap.allocation_pool_amount, ap.counterparty_amount, ap.platform_amount,
    ap.reward_pool_amount, ap.operational_amount,
    sl.total_amount, sl.reserve_held, sl.status
FROM econ.source_transactions st
LEFT JOIN econ.reserve_allocations ra ON ra.source_transaction_id = st.source_transaction_id
LEFT JOIN econ.allocation_pool_entries ap ON ap.source_transaction_id = st.source_transaction_id
LEFT JOIN econ.settlement_links sl ON sl.source_transaction_id = st.source_transaction_id
WHERE st.source_transaction_id = :transaction_id;
```

### 19.7 Retention

| Table | Retention | Notes |
|---|---|---|
| source_transactions | Permanent | Origin of all economic flows |
| reserve_allocations | Permanent | Append-only, immutable |
| allocation_pool_entries | Permanent | |
| distribution_entries | Permanent | |
| settlement_links | Permanent | |
| cycle_reconciliations | Permanent | Append-only, immutable |
| allocation_rate_config | Permanent | Configuration table (GOVERNANCE PARAMETERS) |

### 19.8 Governing Requirement Traceability

SRS-WAL-006 (90/10 conformance); SDD-1 Ch.11 (90/10 enforcement in settlement), Ch.19 (90/10 accounting design); SAD-1 Ch.14; PLC-1 Ch.25 (90/10 Principle); KR-1 KR-ECO-001–063, Ch.7–10, Ch.68 (90/10 Reconciliation).

---

## Chapter 20 — Security Design

### 20.1 Overview

This chapter consolidates the database-level security controls that are applied across all schemas. Security is enforced at the database layer as the last line of defense, complementing application-layer controls defined in SAD-1 (Ch.22–25, Zero Trust Security) and SDD-1 (Ch.20). The database security model implements the Zero Trust principle: no user or service is trusted by default; every access is explicitly granted, authenticated, and audited.

Implements: SRS-NFR-001–014; SDD-1 Ch.20 (Security Controls); SAD-1 Ch.22–25 (Zero Trust Security), ADR-008; PLC-1 Ch.31.

### 20.2 Row-Level Security (RLS) Policy Catalog

RLS is enabled on every table that stores participant-owned data. The default policy is DENY ALL — no rows are visible unless an explicit policy grants access. RLS policies use the session variable `app.current_account_id` (set by the application on each connection) to identify the current participant.

#### 20.2.1 RLS Policy Patterns

Three standard policy patterns are applied across all schemas:

**Pattern 1 — Owner-Only (private data)**
```sql
-- Participant can only see/modify their own rows
CREATE POLICY {table}_owner_select ON {schema}.{table}
    FOR SELECT USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY {table}_owner_update ON {schema}.{table}
    FOR UPDATE USING (account_id = current_setting('app.current_account_id')::UUID);
```

**Pattern 2 — Owner + Admin (private data with admin override)**
```sql
-- Participant sees own rows; admin role sees all
CREATE POLICY {table}_owner_select ON {schema}.{table}
    FOR SELECT USING (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY {table}_admin_all ON {schema}.{table}
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

**Pattern 3 — Public Read + Owner/Admin Write (recognition data)**
```sql
-- Public can read active records; only owner/admin can write
CREATE POLICY {table}_public_select ON {schema}.{table}
    FOR SELECT USING (is_active = TRUE);

CREATE POLICY {table}_owner_all ON {schema}.{table}
    FOR ALL USING (account_id = current_setting('app.current_account_id')::UUID)
    WITH CHECK (account_id = current_setting('app.current_account_id')::UUID);

CREATE POLICY {table}_admin_all ON {schema}.{table}
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

#### 20.2.2 RLS Policy Summary by Schema

| Schema | Pattern | Tables | Notes |
|---|---|---|---|
| idm | Owner + Admin | accounts, kyc_verifications, sessions, mfa_enrollments | Private identity data |
| tru | Owner + Admin | trust_scores, trust_signals, trust_history, trust_recoveries | Trust is private; admin override |
| tru | Public Read | trust_gate_thresholds | Config table, public read |
| com | Owner + Admin | vendors, stores, products, variants, inventory, carts, orders, shipments, returns, refunds, disputes, reviews, promotions, commerce_settlements | Vendor sees own data; admin override |
| com | Public Read | categories, product_attributes | Product catalog is publicly browsable |
| svc | Owner + Admin | providers, skills, provider_skills, portfolio_items, service_listings, service_packages, service_requests, proposals, contracts, milestones, deliveries, service_disputes, service_reviews, service_settlements | Provider sees own data; admin override |
| krw | Owner + Admin | kpoints_ledger, lifetime_statistics, klevel_history, monthly_snapshots, reward_statements | Participant sees own rewards |
| krw | Public Read | klevel_definitions, kpoint_categories, ring_weights | Governance config, public read |
| krw | Admin Only | ring_activity, ring_contributions, reward_cycles, reward_pools, reward_distributions, reconciliation_records | Engine-internal calculation tables |
| wal | Owner + Admin | wallets, wallet_transactions, wallet_holds | Participant sees own wallet |
| wal | Admin Only | settlements, reserve_holdings, reversals | Settlement execution is admin-only |
| msg | Owner + Admin | notifications, notification_preferences, messages, announcements, community_contributions | Participant sees own messages |
| int | Admin Only | behavioral_signals, recommendations, fraud_signals, analytics_snapshots | Intelligence data is admin-only (non-disclosed) |
| adm | Admin Only | governance_reviews, policy_enforcements, moderation_cases, admin_disputes, sanctions, appeals, compliance_flags | Administration is admin-only |
| igr | Admin + Partner | partners, api_clients, api_credentials, api_scopes, webhook_endpoints, webhook_deliveries, event_subscriptions, api_versions, api_request_logs, partner_transactions | Integration management |
| lrn | Owner + Admin | instructors, courses, programmes, learning_paths, modules, lessons, lesson_content, external_media, enrollments, lesson_progress, assessments, questions, answers, assessment_attempts, attempt_answers, assignments, assignment_submissions, grades, certificates, course_reviews, learning_settlements | Instructor/learner sees own data |
| lrn | Public Read | courses, programmes (active only) | Course catalog is publicly browsable |
| graph | Owner + Admin | graph_nodes, ring_memberships, leadership_qualifications, team_memberships, team_identities | Leader sees own network |
| roy | Public Read + Admin | royal_identities, title_history, coronation_records, coronation_categories | Royal identity is public recognition |
| econ | Admin Only | source_transactions, reserve_allocations, allocation_pool_entries, distribution_entries, settlement_links, cycle_reconciliations, allocation_rate_config | Economic accounting is admin-only |
| shared | Admin Only | audit_log, outbox, event_store, idempotency_keys, encryption_key_registry, sequence_generators | Shared infrastructure is admin-only |

### 20.3 Immutable Ledger Enforcement

Financial ledgers, audit logs, and historical records are immutable — they cannot be updated or deleted. Corrections are made via compensating entries (reversals), not edits. This is enforced at the database level using `BEFORE UPDATE` and `BEFORE DELETE` triggers that raise exceptions.

#### 20.3.1 Immutable Tables

| Schema | Table | Protection | Correction Method |
|---|---|---|---|
| shared | audit_log | Block UPDATE/DELETE | N/A (audit is permanent) |
| tru | trust_history | Block UPDATE/DELETE | trust_recoveries (compensating) |
| krw | kpoints_ledger | Block UPDATE/DELETE | Reversal entry (negative points) |
| krw | klevel_history | Block UPDATE/DELETE | New promotion record (append) |
| wal | wallet_transactions | Block UPDATE/DELETE | Reversal transaction (compensating) |
| wal | reserve_holdings | Block UPDATE/DELETE | Governance-approved release only |
| econ | reserve_allocations | Block UPDATE/DELETE | Reversal allocation (compensating) |
| econ | cycle_reconciliations | Block UPDATE/DELETE | N/A (permanent record) |
| roy | title_history | Block UPDATE/DELETE | New title record (append) |
| roy | coronation_records | Block UPDATE/DELETE | N/A (permanent record) |
| igr | api_request_logs | Block UPDATE (delete after retention) | N/A (retention-managed) |

#### 20.3.2 Block Mutation Trigger

The standard trigger function used on all immutable tables:

```sql
CREATE OR REPLACE FUNCTION shared.fn_block_mutation()
RETURNS TRIGGER AS $$
BEGIN
    RAISE EXCEPTION 'Table % is immutable: % operations are not permitted. Use compensating entries for corrections.',
        TG_TABLE_NAME, TG_OP;
END;
$$ LANGUAGE plpgsql;
```

#### 20.3.3 Hash-Chain Audit Log

The audit log uses a hash chain to detect tampering. Each audit entry includes the hash of the previous entry, creating a chain that cannot be broken without detection.

```sql
-- Audit trigger function (applied to all state-changing tables)
-- Inserts into shared.audit_log as defined in Chapter 3, Section 3.2.
-- Columns: audit_id, table_schema, table_name, operation, record_id,
--          changed_by, changed_at, old_values, new_values,
--          previous_hash, current_hash, correlation_id
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

    -- Insert audit record (matches shared.audit_log table defined in Ch.3)
    INSERT INTO shared.audit_log (
        table_schema, table_name, operation, record_id,
        changed_by, old_values, new_values,
        previous_hash, current_hash
    ) VALUES (
        TG_TABLE_SCHEMA, TG_TABLE_NAME, TG_OP, v_record_id,
        current_setting('app.current_account_id')::UUID,
        v_old_values, v_new_values,
        v_previous_hash, v_current_hash
    );

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;
```

### 20.4 Soft Deletion

Soft deletion is used for business records that may need to be restored or audited after removal. Financial records, audit records, and historical records are never soft-deleted — they are permanent.

#### 20.4.1 Soft Deletion Pattern

```sql
-- Soft deletion columns (added to business tables)
ALTER TABLE {schema}.{table}
    ADD COLUMN deleted_at TIMESTAMPTZ,
    ADD COLUMN is_deleted BOOLEAN NOT NULL DEFAULT FALSE;

-- Index for efficient filtering of non-deleted rows
CREATE INDEX ix_{table}_active ON {schema}.{table} (id) WHERE is_deleted = FALSE;

-- Soft delete trigger (prevents hard delete, sets deleted_at instead)
CREATE OR REPLACE FUNCTION {schema}.fn_soft_delete()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        -- Convert DELETE to soft delete
        UPDATE {schema}.{TG_TABLE_NAME}
        SET deleted_at = NOW(), is_deleted = TRUE
        WHERE {TG_TABLE_NAME}_id = OLD.{TG_TABLE_NAME}_id;
        RETURN NULL;
    END IF;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;
```

#### 20.4.2 Soft-Deleted vs. Permanent Tables

| Category | Tables | Deletion Policy |
|---|---|---|
| **Soft-deleted** (business records) | com.vendors, com.stores, com.products, com.product_variants, svc.providers, svc.service_listings, svc.service_packages, lrn.courses, lrn.programmes, lrn.modules, lrn.lessons, lrn.instructors, igr.partners, igr.api_clients | Soft delete (`deleted_at`, `is_deleted`); restorable |
| **Permanent** (financial/audit) | wal.wallet_transactions, wal.settlements, wal.reserve_holdings, krw.kpoints_ledger, econ.source_transactions, econ.reserve_allocations, econ.allocation_pool_entries, econ.distribution_entries, econ.settlement_links, econ.cycle_reconciliations, shared.audit_log | Never deleted |
| **Permanent** (historical) | roy.title_history, roy.coronation_records, krw.klevel_history, tru.trust_history, graph.leadership_qualifications | Never deleted (append-only) |
| **Retention-managed** | idm.sessions (90 days), igr.api_request_logs (90 days), int.analytics_snapshots (2 years), int.behavioral_signals (2 years), int.fraud_signals (2 years) | Hard delete after retention period |

### 20.5 Retention and Archival

#### 20.5.1 Retention Schedule

| Data Category | Retention Period | Legal/Regulatory Basis | Archival Method |
|---|---|---|---|
| Financial ledgers (wallet_transactions, settlements, reserve_holdings) | Permanent | Financial audit requirements | N/A (never archived) |
| 90/10 accounting (source_transactions, reserve_allocations, etc.) | Permanent | Economic transparency | N/A (never archived) |
| K-Points ledger | Permanent | Rewards audit | N/A (never archived) |
| Audit log | Permanent | Security audit | N/A (never archived) |
| KYC evidence | 7 years | AML/KYC regulations | Archived to cold storage after 2 years |
| Session records | 90 days | Security best practice | Hard delete after 90 days |
| API request logs | 90 days | Security monitoring | Hard delete after 90 days |
| Analytics snapshots | 2 years | Business analytics | Aggregated to monthly summaries after 2 years |
| Behavioral signals | 2 years | Fraud detection | Hard delete after 2 years |
| Fraud signals | 2 years | Fraud detection | Hard delete after 2 years |
| Deleted business records | 1 year after soft deletion | Restorability | Hard delete 1 year after `deleted_at` |
| Coronation records | Permanent | Recognition history | N/A (never archived) |
| Title history | Permanent | Recognition history | N/A (never archived) |
| Leadership qualifications | Permanent | Leadership audit | N/A (never archived) |

#### 20.5.2 Retention Enforcement

Retention is enforced by scheduled background jobs (pg_cron or application scheduler) that delete expired records:

```sql
-- Example: Delete expired sessions (90 days)
DELETE FROM idm.sessions
WHERE expires_at < NOW() - INTERVAL '90 days';

-- Example: Delete expired API request logs (90 days)
DELETE FROM igr.api_request_logs
WHERE created_at < NOW() - INTERVAL '90 days';

-- Example: Hard delete soft-deleted business records after 1 year
DELETE FROM com.products
WHERE is_deleted = TRUE AND deleted_at < NOW() - INTERVAL '1 year';
```

#### 20.5.3 Archival Strategy

For data with long retention but low access frequency (e.g., KYC evidence), archival to cold storage is used:

1. After 2 years, KYC evidence files are moved from hot storage to cold storage (S3 Glacier or equivalent).
2. The database record retains a reference to the archived location.
3. Access to archived data requires a governance-approved retrieval request.
4. The archive is encrypted with a separate key registered in `shared.encryption_key_registry`.

### 20.6 Encryption-Sensitive Fields

Sensitive data is encrypted at the application layer using AES-256-GCM before being stored in the database. Encrypted columns use the suffix `_enc` and are of type `BYTEA`. Encryption keys are stored in a Secrets Manager (AWS Secrets Manager, HashiCorp Vault, or equivalent), not in the database. The database tracks key versions for rotation via `shared.encryption_key_registry`.

#### 20.6.1 Encrypted Fields Catalog

| Schema | Table | Column | Data Type | Encryption | Key Reference |
|---|---|---|---|---|---|
| idm | kyc_verifications | evidence_enc | BYTEA | AES-256-GCM | KYC evidence (PII) |
| idm | kyc_verifications | document_enc | BYTEA | AES-256-GCM | KYC documents |
| idm | mfa_enrollments | secret_enc | BYTEA | AES-256-GCM | TOTP secret |
| idm | mfa_enrollments | backup_codes_enc | BYTEA | AES-256-GCM | Backup codes |
| wal | wallets | payment_method_enc | BYTEA | AES-256-GCM | Payment method token |
| igr | api_credentials | client_secret_enc | BYTEA | AES-256-GCM | OAuth client secret |
| igr | api_credentials | access_token_enc | BYTEA | AES-256-GCM | OAuth access token |
| igr | api_credentials | refresh_token_enc | BYTEA | AES-256-GCM | OAuth refresh token |
| igr | webhook_endpoints | signing_secret_enc | BYTEA | AES-256-GCM | Webhook signing secret |

#### 20.6.2 Key Rotation

Encryption keys are rotated periodically (every 90 days for production keys). Key rotation process:

1. A new key version is created in the Secrets Manager.
2. The new key version is registered in `shared.encryption_key_registry`.
3. New encrypt operations use the new key version.
4. Existing encrypted data is re-encrypted lazily on next access (read with old key, write with new key).
5. Old key versions are retained for decryption of not-yet-rotated data.
6. Old key versions are revoked only after all data is re-encrypted.

```sql
-- Encryption key registry — defined in Chapter 5, Section 5.6.
-- The authoritative table definition is in Ch.5 (shared.encryption_key_registry).
-- Key fields: key_id (PK), key_version, key_purpose (CHECK-constrained enum),
-- key_reference, status (ACTIVE/ROTATED/REVOKED), activated_at, rotated_at,
-- rotated_from (self-referencing FK for rotation lineage).
-- Unique index on (key_purpose, key_version).
```

### 20.7 Access Controls

#### 20.7.1 Database Roles

The database uses role-based access control (RBAC) with the following roles:

| Role | Purpose | Permissions | Databases |
|---|---|---|---|
| `app_service` | Application service account | CONNECT, USAGE on all schemas, SELECT/INSERT/UPDATE/DELETE on application tables (subject to RLS) | All |
| `admin_role` | Database administrator | All privileges on all schemas and tables; BYPASSRLS | All |
| `readonly_role` | Reporting/BI | CONNECT, USAGE on all schemas, SELECT only (subject to RLS) | All |
| `migration_role` | Migration runner | CREATE, ALTER, DROP, INDEX on all schemas; DDL privileges | All |
| `replication_role` | Read replica | REPLICATION privilege | Primary |
| `backup_role` | Backup service | pg_dump privileges | All |

#### 20.7.2 Role Assignment

```sql
-- Create roles
CREATE ROLE app_service LOGIN;
CREATE ROLE admin_role LOGIN BYPASSRLS;
CREATE ROLE readonly_role LOGIN;
CREATE ROLE migration_role LOGIN;
CREATE ROLE replication_role LOGIN REPLICATION;
CREATE ROLE backup_role LOGIN;

-- Grant schema usage
GRANT USAGE ON SCHEMA idm, tru, com, svc, krw, wal, msg, int, adm, igr, lrn, graph, roy, econ, shared
    TO app_service, readonly_role;

-- Grant table privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA idm, tru, com, svc, krw, wal, msg, int, adm, igr, lrn, graph, roy, econ
    TO app_service;

GRANT SELECT ON ALL TABLES IN SCHEMA idm, tru, com, svc, krw, wal, msg, int, adm, igr, lrn, graph, roy, econ, shared
    TO readonly_role;

-- Admin role gets all privileges and bypasses RLS
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA idm, tru, com, svc, krw, wal, msg, int, adm, igr, lrn, graph, roy, econ, shared
    TO admin_role;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA idm, tru, com, svc, krw, wal, msg, int, adm, igr, lrn, graph, roy, econ, shared
    TO admin_role;
```

#### 20.7.3 Connection Pooling and Session Variable

The application sets the `app.current_account_id` session variable on each connection after authentication. This variable is used by RLS policies to identify the current participant.

```sql
-- Set by the application after authentication
SET app.current_account_id = ':account_uuid';

-- RLS policies use this variable
-- Example: account_id = current_setting('app.current_account_id')::UUID
```

The connection pool must ensure that the session variable is cleared between requests from different participants:

```sql
-- Reset session variable when returning connection to pool
RESET app.current_account_id;
```

### 20.8 Tenant Isolation

K-NETWORK is a single-tenant platform (one deployment serves the entire ecosystem). However, per-engine data ownership provides logical tenant isolation between engines. Each engine owns its schema and cannot directly access another engine's schema.

#### 20.8.1 Engine Boundary Enforcement

Engine boundaries are enforced at the database level by:

1. **No cross-schema foreign keys** — cross-engine references use plain UUID columns with application-level validation.
2. **Schema-level grants** — each engine's service account has access only to its own schema and the `shared` schema.
3. **RLS policies** — even within a schema, RLS restricts access to the current participant's data.

```sql
-- Example: Identity engine service account
CREATE ROLE idm_service LOGIN;
GRANT USAGE ON SCHEMA idm, shared TO idm_service;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA idm TO idm_service;
GRANT SELECT, INSERT ON ALL TABLES IN SCHEMA shared TO idm_service;

-- Example: Commerce engine service account
CREATE ROLE com_service LOGIN;
GRANT USAGE ON SCHEMA com, shared TO com_service;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA com TO com_service;
GRANT SELECT, INSERT ON ALL TABLES IN SCHEMA shared TO com_service;
```

#### 20.8.2 Cross-Engine Data Access

Cross-engine data access is performed exclusively through API calls or asynchronous events — never through direct schema access. This enforces the engine boundary at the database level and ensures that each engine can evolve independently.

```
Engine A → API call → Engine B → Database query → Engine B's schema
Engine A ← API response ← Engine B
```

Cross-engine references in the database are plain UUID columns with no foreign key constraint. The application validates referential integrity through API calls at write time.

### 20.9 Check Constraint Catalog

Check constraints enforce business rules and data integrity at the database level. The following is a summary of the most critical check constraints across all schemas:

#### 20.9.1 Financial Integrity Constraints

| Schema | Table | Constraint | Rule |
|---|---|---|---|
| econ | source_transactions | ck_econ_source_qev | QEV = gross_revenue − deductions |
| econ | source_transactions | ck_econ_source_qev_non_negative | QEV ≥ 0 |
| econ | allocation_pool_entries | ck_econ_allocation_pool_sum | counterparty + platform + rewards + operational = allocation_pool |
| econ | allocation_pool_entries | ck_econ_allocation_pool_positive | allocation_pool_amount > 0 |
| econ | settlement_links | ck_econ_settlement_link_total | counterparty + platform + rewards + operational + reserve = total |
| econ | cycle_reconciliations | ck_econ_cycle_recon_qev | total_qev = total_gross_revenue − total_deductions |
| econ | cycle_reconciliations | ck_econ_cycle_recon_90_10 | total_allocation_pool + total_reserve = total_qev |
| econ | allocation_rate_config | ck_econ_allocation_rate_sum | counterparty + platform + rewards + leadership + operational = 0.90 |
| econ | allocation_rate_config | ck_econ_allocation_rate_total | total_allocation_rate = 0.900000 |
| wal | settlements | ck_wal_settlements_qev | qualifying_economic_value = gross_revenue − deductions |
| wal | settlements | ck_wal_settlements_90_10_split | allocation_pool + reserve = qualifying_economic_value |
| wal | settlements | ck_wal_settlements_reserve | reserve = 10% of qualifying_economic_value |
| com | commerce_settlements | ck_com_settlement_qev | qualifying_economic_value = gross_revenue − deductions |
| com | commerce_settlements | ck_com_settlement_allocation_sum | allocation_pool + reserve = qualifying_economic_value |
| com | commerce_settlements | ck_com_settlement_reserve | reserve = 10% of qualifying_economic_value |
| svc | service_settlements | ck_svc_settlement_qev | qualifying_economic_value = gross_revenue − deductions |
| svc | service_settlements | ck_svc_settlement_allocation_sum | allocation_pool + reserve = qualifying_economic_value |
| svc | service_settlements | ck_svc_settlement_reserve | reserve = 10% of qualifying_economic_value |
| lrn | learning_settlements | ck_lrn_settlement_qev | qualifying_economic_value = gross_revenue − deductions |
| lrn | learning_settlements | ck_lrn_settlement_allocation_sum | allocation_pool + reserve = qualifying_economic_value |
| lrn | learning_settlements | ck_lrn_settlement_reserve | reserve = 10% of qualifying_economic_value |
| igr | partner_transactions | ck_igr_partner_qev | qualifying_economic_value = gross_revenue − deductions |
| igr | partner_transactions | ck_igr_partner_allocation_sum | allocation_pool + reserve = qualifying_economic_value |
| igr | partner_transactions | ck_igr_partner_reserve | reserve = 10% of qualifying_economic_value |

#### 20.9.2 K-Rewards Integrity Constraints

| Schema | Table | Constraint | Rule |
|---|---|---|---|
| krw | klevel_definitions | ck_krw_klevel_range | k_level BETWEEN 1 AND 15 |
| krw | klevel_definitions | ck_krw_klevel_tier | Tier mapping: L1-6=FOUNDATION_GROWTH, L7-9=LEADERSHIP, L10-12=EXECUTIVE, L13-15=LEGACY |
| krw | monthly_snapshots | ck_krw_snapshot_klevel | k_level BETWEEN 1 AND 15 |
| graph | ring_memberships | ck_graph_ring_number | ring_number BETWEEN 1 AND 5 |
| graph | graph_nodes | ck_graph_klevel | k_level BETWEEN 1 AND 15 |
| roy | royal_identities | ck_roy_title | current_title IN ('Normal', 'Prince', 'Crown Prince', 'King') |
| roy | coronation_records | ck_roy_coronation_klevel | crowned_k_level BETWEEN 13 AND 15 |
| roy | coronation_records | ck_roy_coronation_funding | funding_source = 'ALLOCATION_POOL' (never reserve) |

#### 20.9.3 Business Rule Constraints

| Schema | Table | Constraint | Rule |
|---|---|---|---|
| com | inventory | ck_com_inventory_non_negative | quantity_on_hand >= 0 |
| com | orders | ck_com_order_total | total_amount >= 0 |
| com | refunds | ck_com_refund_amount | refund_amount > 0 AND refund_amount <= original_amount |
| svc | service_requests | ck_svc_request_budget | budget_amount >= 0 |
| adm | sanctions | ck_adm_sanction_severity | severity IN (7 levels) |
| adm | appeals | ck_adm_appeals_no_fee | fee_amount = 0 (appeals are free) |
| idm | accounts | ck_idm_accounts_status | status IN ('PENDING', 'ACTIVE', 'SUSPENDED', 'DELETED') |
| idm | accounts | ck_idm_accounts_kyc_tier | kyc_tier IN ('TIER_0', 'TIER_1', 'TIER_2', 'TIER_3') |

### 20.10 Audit and Observability

#### 20.10.1 Audit Logging

Every state-changing operation (INSERT, UPDATE, DELETE) on every table is logged to `shared.audit_log` via the `shared.fn_audit_trigger()` function. The audit log is:
- **Append-only** — protected by block mutation triggers.
- **Hash-chained** — each entry includes the hash of the previous entry, creating a tamper-evident chain.
- **Permanent** — never deleted or archived.
- **Comprehensive** — captures the full record state, operation type, table name, account_id, and timestamp.

#### 20.10.2 Audit Log Query Patterns

```sql
-- Query audit history for a specific account
SELECT audit_id, table_schema, table_name, operation, changed_at
FROM shared.audit_log
WHERE changed_by = :account_id
ORDER BY changed_at DESC
LIMIT 100;

-- Query audit history for a specific table
SELECT audit_id, operation, new_values, changed_at
FROM shared.audit_log
WHERE table_name = 'wallet_transactions'
ORDER BY changed_at DESC
LIMIT 100;

-- Verify hash chain integrity
SELECT a1.audit_id, a1.current_hash, a1.previous_hash
FROM shared.audit_log a1
WHERE a1.previous_hash IS NOT NULL
  AND a1.previous_hash != '0000000000000000000000000000000000000000000000000000000000000000'
  AND NOT EXISTS (
      SELECT 1 FROM shared.audit_log a2
      WHERE a2.current_hash = a1.previous_hash
  );
-- Expected: 0 rows (chain is intact)
```

### 20.11 Governing Requirement Traceability

SRS-NFR-001 (zero trust access control), SRS-NFR-002 (encryption at rest and in transit), SRS-NFR-003 (audit logging), SRS-NFR-004 (immutable financial ledgers), SRS-NFR-005 (data retention), SRS-NFR-006 (secrets management), SRS-NFR-007 (tenant isolation), SRS-NFR-008 (API security), SRS-NFR-009 (fraud detection), SRS-NFR-010 (incident response), SRS-NFR-011 (compliance and privacy), SRS-NFR-012 (secure integrations), SRS-NFR-013 (resilience), SRS-NFR-014 (observability); SDD-1 Ch.20 (Security Controls); SAD-1 Ch.22–25 (Zero Trust Security), ADR-008; PLC-1 Ch.31.

---

# Part VI — Migration, Data Dictionary, and Traceability

## Chapter 21 — Migration Framework and Seed Data

### 21.1 Migration Framework Overview

The DDD-1 database schema is deployed through a versioned migration framework. Each migration is a numbered SQL file that applies a forward change (upgrade) and includes a corresponding rollback (downgrade). Migrations are applied in order; each migration is wrapped in a transaction. The framework tracks applied migrations in a `schema_migrations` table.

This framework is compatible with industry-standard tools (Flyway, Liquibase, Sqitch, or a custom migration runner). The migration files are pure SQL — no application code is required to run them.

Implements: SDD-1 Ch.21 (Deployment and Migration); SAD-1 Ch.26 (Deployment Architecture).

### 21.2 Migration Table

```sql
CREATE TABLE shared.schema_migrations (
    migration_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    migration_version    VARCHAR(50) NOT NULL UNIQUE,  -- e.g., '001', '002', '003'
    migration_name       TEXT NOT NULL,
    applied_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    applied_by           TEXT NOT NULL DEFAULT CURRENT_USER,
    checksum             VARCHAR(64) NOT NULL,  -- SHA-256 of migration file content
    execution_time_ms    INTEGER NOT NULL DEFAULT 0,
    status               TEXT NOT NULL DEFAULT 'APPLIED'
                         CHECK (status IN ('APPLIED', 'FAILED', 'ROLLED_BACK'))
);

CREATE UNIQUE INDEX uq_shared_schema_migrations_version
    ON shared.schema_migrations (migration_version);

ALTER TABLE shared.schema_migrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY schema_migrations_admin_all ON shared.schema_migrations
    FOR ALL TO admin_role USING (true) WITH CHECK (true);
```

### 21.3 Migration File Naming Convention

```
migrations/
├── 000001_create_shared_schema.sql
├── 000002_create_idm_schema.sql
├── 000003_create_tru_schema.sql
├── 000004_create_com_schema.sql
├── 000005_create_svc_schema.sql
├── 000006_create_krw_schema.sql
├── 000007_create_wal_schema.sql
├── 000008_create_msg_schema.sql
├── 000009_create_int_schema.sql
├── 000010_create_adm_schema.sql
├── 000011_create_igr_schema.sql
├── 000012_create_lrn_schema.sql
├── 000013_create_graph_schema.sql
├── 000014_create_roy_schema.sql
├── 000015_create_econ_schema.sql
├── 000016_create_security_functions.sql
├── 000017_seed_governance_parameters.sql
├── 000018_seed_klevel_definitions.sql
├── 000019_seed_allocation_rates.sql
├── 000020_seed_coronation_categories.sql
├── 000021_create_indexes.sql
├── 000022_enable_rls_policies.sql
├── 000023_create_triggers.sql
├── ...
```

### 21.4 Migration Structure

Each migration file follows this structure:

```sql
-- Migration: 000001_create_shared_schema
-- Description: Creates the shared schema and its tables
-- Author: K-NETWORK Database Team
-- Date: 2026-01-15

BEGIN;

-- ============================================================
-- FORWARD MIGRATION (UP)
-- ============================================================

CREATE SCHEMA IF NOT EXISTS shared;

-- ... DDL statements ...

-- Record migration
INSERT INTO shared.schema_migrations (migration_version, migration_name, checksum)
VALUES ('000001', 'create_shared_schema', 'sha256-hash-here');

COMMIT;

-- ============================================================
-- ROLLBACK MIGRATION (DOWN) — run separately if needed
-- ============================================================
-- BEGIN;
-- DROP SCHEMA IF EXISTS shared CASCADE;
-- DELETE FROM shared.schema_migrations WHERE migration_version = '000001';
-- COMMIT;
```

### 21.5 Migration Execution Rules

1. **Atomic** — Each migration runs in a single transaction. If any statement fails, the entire migration is rolled back.
2. **Ordered** — Migrations are applied in version order (ascending). No migration is skipped.
3. **Idempotent where possible** — Use `IF NOT EXISTS` / `IF EXISTS` clauses to allow safe re-runs.
4. **Checksum verified** — The migration runner verifies the checksum of each migration file before applying it. If the checksum has changed, the migration is rejected.
5. **No data migration in schema migrations** — Schema migrations create/alter tables only. Data migrations (seed data, backfills) are separate migrations.
6. **Rollback supported** — Each migration has a corresponding rollback. Rollbacks are run in reverse order.
7. **Zero downtime** — Migrations are designed for zero-downtime deployment where possible. Breaking changes (column renames, type changes) are done in multiple phases (add new → backfill → switch → drop old).

### 21.6 Seed Data — Governance Parameters

Seed data migrations populate configuration tables with GOVERNANCE PARAMETERS owned by KR-1. These values are defined in KR-1 v3.0 and must not be changed by the application at runtime — only through governance-approved migration.

#### 21.6.1 K-Level Definitions (krw.klevel_definitions)

The K-Level progression matrix defines 15 levels with their thresholds, ring requirements, and leadership development requirements. All values are from KR-1 KR-LVL-009.

```sql
-- Migration: 000018_seed_klevel_definitions
BEGIN;

-- K-Level 1 (Foundation)
INSERT INTO krw.klevel_definitions (
    k_level, tier, level_name, kpoint_threshold, direct_referrals_required,
    ring1_min_klevel_required, ring2_min_klevel_required, ring3_min_klevel_required,
    ring4_min_klevel_required, ring5_min_klevel_required,
    ring1_min_count_required, ring2_min_count_required, ring3_min_count_required,
    ring4_min_count_required, ring5_min_count_required,
    leadership_developed_required, trust_score_required, kr_rule_id
) VALUES
(1, 'FOUNDATION_GROWTH', 'Foundation', 0, 0,
 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0,
 0, 0.00, 'KR-LVL-009'),
(2, 'FOUNDATION_GROWTH', 'Foundation', 100, 3,
 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0,
 0, 10.00, 'KR-LVL-009'),
(3, 'FOUNDATION_GROWTH', 'Growth', 300, 5,
 1, 0, 0, 0, 0,
 3, 0, 0, 0, 0,
 0, 20.00, 'KR-LVL-009'),
(4, 'FOUNDATION_GROWTH', 'Growth', 600, 8,
 1, 1, 0, 0, 0,
 5, 3, 0, 0, 0,
 0, 25.00, 'KR-LVL-009'),
(5, 'FOUNDATION_GROWTH', 'Growth', 1000, 12,
 2, 1, 1, 0, 0,
 8, 5, 3, 0, 0,
 0, 30.00, 'KR-LVL-009'),
(6, 'FOUNDATION_GROWTH', 'Growth', 2000, 15,
 2, 2, 1, 1, 0,
 10, 8, 5, 3, 0,
 0, 35.00, 'KR-LVL-009'),
(7, 'LEADERSHIP', 'Leadership', 4000, 20,
 3, 2, 2, 1, 1,
 15, 10, 8, 5, 3,
 1, 40.00, 'KR-LVL-009'),
(8, 'LEADERSHIP', 'Leadership', 7000, 25,
 3, 3, 2, 2, 1,
 20, 15, 10, 8, 5,
 2, 45.00, 'KR-LVL-009'),
(9, 'LEADERSHIP', 'Leadership', 12000, 30,
 4, 3, 3, 2, 2,
 25, 20, 15, 10, 8,
 3, 50.00, 'KR-LVL-009'),
(10, 'EXECUTIVE', 'Executive', 20000, 40,
 4, 4, 3, 3, 2,
 30, 25, 20, 15, 10,
 5, 55.00, 'KR-LVL-009'),
(11, 'EXECUTIVE', 'Executive', 35000, 50,
 5, 4, 4, 3, 3,
 40, 30, 25, 20, 15,
 8, 60.00, 'KR-LVL-009'),
(12, 'EXECUTIVE', 'Executive', 60000, 60,
 5, 5, 4, 4, 3,
 50, 40, 30, 25, 20,
 12, 65.00, 'KR-LVL-009'),
(13, 'LEGACY', 'Legacy', 100000, 80,
 5, 5, 5, 4, 4,
 60, 50, 40, 30, 25,
 20, 70.00, 'KR-LVL-009'),
(14, 'LEGACY', 'Legacy', 200000, 100,
 5, 5, 5, 5, 4,
 80, 60, 50, 40, 30,
 30, 75.00, 'KR-LVL-009'),
(15, 'LEGACY', 'Legacy', 500000, 120,
 5, 5, 5, 5, 5,
 100, 80, 60, 50, 40,
 50, 80.00, 'KR-LVL-009');

COMMIT;
```

**Note:** The exact numerical thresholds above are illustrative values aligned with the structure defined in KR-1 KR-LVL-009. The authoritative values are defined in KR-1 v3.0 and must be verified against the source document before production deployment. The `kr_rule_id` column traces each value to its governing KR-1 rule.

#### 21.6.2 Allocation Rate Configuration (econ.allocation_rate_config)

Revenue waterfall allocation rates from KR-1 KR-ECO-014. All rates sum to 90% (allocation pool); the remaining 10% is the reserve.

```sql
-- Migration: 000019_seed_allocation_rates
BEGIN;

INSERT INTO econ.allocation_rate_config (
    revenue_type, counterparty_rate, platform_rate, rewards_rate,
    leadership_rate, operational_rate, total_allocation_rate, kr_rule_id
) VALUES
-- Commerce: 15/60/8/5/2 = 90%
('COMMERCE', 0.150000, 0.600000, 0.080000, 0.050000, 0.020000, 0.900000, 'KR-ECO-014'),
-- Services: 15/60/8/5/2 = 90%
('SERVICES', 0.150000, 0.600000, 0.080000, 0.050000, 0.020000, 0.900000, 'KR-ECO-014'),
-- Learning: 20/55/8/5/2 = 90%
('LEARNING', 0.200000, 0.550000, 0.080000, 0.050000, 0.020000, 0.900000, 'KR-ECO-014'),
-- Platform Fee: 65/0/15/7/3 = 90%
('PLATFORM_FEE', 0.000000, 0.650000, 0.150000, 0.070000, 0.030000, 0.900000, 'KR-ECO-014'),
-- Partner: 40/35/10/3/2 = 90%
('PARTNER', 0.400000, 0.350000, 0.100000, 0.030000, 0.020000, 0.900000, 'KR-ECO-014');

COMMIT;
```

#### 21.6.3 K-Point Categories (krw.kpoint_categories)

K-Point award categories from KR-1 KR-PTS-001–008.

```sql
-- Migration: 000017_seed_governance_parameters (partial — K-Point categories)
BEGIN;

INSERT INTO krw.kpoint_categories (
    category_code, category_name, description, points_value, kr_rule_id, is_active
) VALUES
('COMMERCE_PURCHASE', 'Commerce Purchase', 'K-Points earned for making a commerce purchase', 10.00, 'KR-PTS-001', TRUE),
('COMMERCE_SALE', 'Commerce Sale', 'K-Points earned by vendor for completing a sale', 15.00, 'KR-PTS-002', TRUE),
('SERVICE_BOOKED', 'Service Booked', 'K-Points earned for booking a service', 10.00, 'KR-PTS-003', TRUE),
('SERVICE_COMPLETED', 'Service Completed', 'K-Points earned by provider for completing a service', 15.00, 'KR-PTS-004', TRUE),
('LEARNING_ENROLLMENT', 'Learning Enrollment', 'K-Points earned for enrolling in a course', 5.00, 'KR-PTS-005', TRUE),
('LEARNING_COMPLETION', 'Learning Completion', 'K-Points earned for completing a course', 20.00, 'KR-PTS-006', TRUE),
('REFERRAL_SUCCESS', 'Referral Success', 'K-Points earned when a referred participant becomes active', 25.00, 'KR-PTS-007', TRUE),
('COMMUNITY_CONTRIBUTION', 'Community Contribution', 'K-Points earned for community contributions', 5.00, 'KR-PTS-008', TRUE);

COMMIT;
```

**Note:** The exact K-Point values above are illustrative. The authoritative values are defined in KR-1 KR-PTS-001–008 and must be verified against the source document before production deployment.

#### 21.6.4 Trust Gate Thresholds (tru.trust_gate_thresholds)

Trust score thresholds that gate K-Rewards eligibility, from KR-1 and SRS-TRU-001–005.

```sql
-- Migration: 000017_seed_governance_parameters (partial — Trust gate thresholds)
BEGIN;

INSERT INTO tru.trust_gate_thresholds (
    gate_code, gate_name, threshold_score, applies_to, kr_rule_id, is_active
) VALUES
('KRW_ELIGIBILITY', 'K-Rewards Eligibility', 25.00, 'ALL_PARTICIPANTS', 'KR-TRU-001', TRUE),
('LEADERSHIP_PROMOTION', 'Leadership Promotion', 40.00, 'LEADERSHIP_TIER', 'KR-TRU-002', TRUE),
('EXECUTIVE_PROMOTION', 'Executive Promotion', 55.00, 'EXECUTIVE_TIER', 'KR-TRU-003', TRUE),
('LEGACY_PROMOTION', 'Legacy Promotion', 70.00, 'LEGACY_TIER', 'KR-TRU-004', TRUE),
('CORONATION_ELIGIBILITY', 'Coronation Eligibility', 70.00, 'KING_TIER', 'KR-TRU-005', TRUE);

COMMIT;
```

**Note:** The exact threshold values above are illustrative. The authoritative values are defined in KR-1 and must be verified against the source document before production deployment.

#### 21.6.5 Ring Weights (krw.ring_weights)

Ring contribution weights for reward calculation, from KR-1 KR-RNG-001–017.

```sql
-- Migration: 000017_seed_governance_parameters (partial — Ring weights)
BEGIN;

INSERT INTO krw.ring_weights (
    ring_number, weight, description, kr_rule_id, is_active
) VALUES
(1, 1.000000, 'Ring 1 — direct referrals (100% weight)', 'KR-RNG-001', TRUE),
(2, 0.500000, 'Ring 2 — second-level referrals (50% weight)', 'KR-RNG-002', TRUE),
(3, 0.250000, 'Ring 3 — third-level referrals (25% weight)', 'KR-RNG-003', TRUE),
(4, 0.125000, 'Ring 4 — fourth-level referrals (12.5% weight)', 'KR-RNG-004', TRUE),
(5, 0.062500, 'Ring 5 — fifth-level referrals (6.25% weight)', 'KR-RNG-005', TRUE);

COMMIT;
```

**Note:** The exact weight values above are illustrative. The authoritative values are defined in KR-1 KR-RNG-001–017 and must be verified against the source document before production deployment.

#### 21.6.6 Coronation Categories (roy.coronation_categories)

Coronation award categories from KR-1 KR-LVL-051, KR-LVL-052.

```sql
-- Migration: 000020_seed_coronation_categories
BEGIN;

INSERT INTO roy.coronation_categories (
    category_code, category_name, description, is_active
) VALUES
('NEW_KING', 'New King', 'First-time coronation for a participant reaching King tier', TRUE),
('RENEWED_KING', 'Renewed King', 'Annual renewal of coronation for an existing King', TRUE),
('LIFETIME_ACHIEVEMENT', 'Lifetime Achievement', 'Exceptional lifetime contribution to the network', TRUE),
('EXCEPTIONAL_LEADERSHIP', 'Exceptional Leadership', 'Outstanding leadership development of other leaders', TRUE),
('COMMUNITY_EXCELLENCE', 'Community Excellence', 'Extraordinary community building and contribution', TRUE);

COMMIT;
```

### 21.7 Seed Data Verification

After seeding, verification queries confirm data integrity:

```sql
-- Verify allocation rates sum to 90% for each revenue type
SELECT revenue_type,
       counterparty_rate + platform_rate + rewards_rate + leadership_rate + operational_rate AS total
FROM econ.allocation_rate_config
WHERE is_active = TRUE;
-- Expected: total = 0.900000 for all rows

-- Verify K-Level definitions cover all 15 levels
SELECT COUNT(*) FROM krw.klevel_definitions;
-- Expected: 15

-- Verify K-Level tier mapping
SELECT k_level, tier FROM krw.klevel_definitions ORDER BY k_level;
-- Expected: L1-6=FOUNDATION_GROWTH, L7-9=LEADERSHIP, L10-12=EXECUTIVE, L13-15=LEGACY

-- Verify ring weights exist for rings 1-5
SELECT COUNT(*) FROM krw.ring_weights WHERE is_active = TRUE;
-- Expected: 5
```

### 21.8 Migration Rollback Procedures

Rollback migrations reverse a migration in reverse order. Each rollback:
1. Drops the objects created by the forward migration.
2. Removes the migration record from `schema_migrations`.

```sql
-- Example rollback for migration 000018 (seed_klevel_definitions)
BEGIN;
DELETE FROM krw.klevel_definitions;
DELETE FROM shared.schema_migrations WHERE migration_version = '000018';
COMMIT;
```

Rollbacks for seed data are safe (data is re-seedable). Rollbacks for schema changes (table drops) are destructive and should only be run in non-production environments.

### 21.9 Governing Requirement Traceability

SDD-1 Ch.21 (Deployment and Migration); SAD-1 Ch.26 (Deployment Architecture); KR-1 KR-LVL-009 (K-Level definitions), KR-ECO-014 (allocation rates), KR-PTS-001–008 (K-Point categories), KR-RNG-001–017 (ring weights), KR-TRU-001–005 (trust thresholds), KR-LVL-051–052 (coronation categories).

---

## Chapter 22 — Data Dictionary and ER Descriptions

### 22.1 Overview

This chapter provides a consolidated data dictionary of the key tables and columns across all schemas, along with entity-relationship descriptions for cross-engine relationships. The data dictionary is organized by schema and focuses on tables that have not been fully described in earlier chapters or that warrant additional column-level explanation. For complete DDL, refer to the table definitions in Chapters 5–19.

### 22.2 Identity Schema (idm) — Data Dictionary

#### 22.2.1 idm.accounts

| Column | Type | Nullable | Default | Description |
|---|---|---|---|---|
| account_id | UUID | NOT NULL | gen_random_uuid() | Primary key; unique account identifier |
| email | VARCHAR(255) | NOT NULL | — | Unique email address (partial unique index, excludes soft-deleted) |
| phone | VARCHAR(30) | NULL | NULL | Phone number (optional; partial unique index when present) |
| password_hash | TEXT | NOT NULL | — | Argon2id password hash (not reversible) |
| display_name | VARCHAR(200) | NOT NULL | — | Public display name |
| status | TEXT | NOT NULL | 'ACTIVE' | Account status: PENDING, ACTIVE, SUSPENDED, DELETED |
| kyc_tier | TEXT | NOT NULL | 'TIER_0' | KYC verification level: TIER_0, TIER_1, TIER_2, TIER_3 |
| referred_by | UUID | NULL | NULL | Referrer account_id (creates graph edge; no FK — cross-engine) |
| referral_code | VARCHAR(50) | NULL | NULL | Unique referral code for sharing (partial unique index) |
| is_deleted | BOOLEAN | NOT NULL | FALSE | Soft deletion flag |
| deleted_at | TIMESTAMPTZ | NULL | NULL | Soft deletion timestamp (NULL = active) |
| created_at | TIMESTAMPTZ | NOT NULL | NOW() | Account creation timestamp |
| updated_at | TIMESTAMPTZ | NOT NULL | NOW() | Last update timestamp |
| version | INTEGER | NOT NULL | 1 | Optimistic concurrency version (OCC) |

#### 22.2.2 idm.kyc_verifications

| Column | Type | Nullable | Default | Description |
|---|---|---|---|---|
| verification_id | UUID | NOT NULL | gen_random_uuid() | Primary key |
| account_id | UUID | NOT NULL | — | Account being verified (no FK — cross-engine) |
| tier | TEXT | NOT NULL | — | Target tier: TIER_1, TIER_2, TIER_3 |
| status | TEXT | NOT NULL | — | PENDING, APPROVED, REJECTED, EXPIRED |
| evidence_type | TEXT | NOT NULL | — | GOVERNMENT_ID, UTILITY_BILL, SELFIE, PROOF_OF_ADDRESS |
| evidence_ref_enc | BYTEA | NOT NULL | — | AES-256-GCM encrypted reference to evidence storage |
| encryption_key_id | UUID | NOT NULL | — | FK to shared.encryption_key_registry |
| submitted_at | TIMESTAMPTZ | NOT NULL | NOW() | Submission timestamp |
| reviewed_at | TIMESTAMPTZ | NULL | NULL | Review completion timestamp |
| reviewed_by | UUID | NULL | NULL | Compliance officer account_id |
| expires_at | TIMESTAMPTZ | NULL | NULL | Verification expiry (periodic re-verification) |
| rejection_reason | TEXT | NULL | NULL | Reason for rejection (if applicable) |
| created_at | TIMESTAMPTZ | NOT NULL | NOW() | Record creation timestamp |

### 22.3 Trust Schema (tru) — Data Dictionary

#### 22.3.1 tru.trust_scores

| Column | Type | Nullable | Default | Description |
|---|---|---|---|---|
| account_id | UUID | NOT NULL | — | Primary key; references idm.accounts (no FK — cross-engine) |
| trust_score | NUMERIC(5,2) | NOT NULL | 0.00 | Current trust score (0.00–100.00) |
| score_tier | TEXT | NOT NULL | 'UNVERIFIED' | UNVERIFIED, BUILDING, ESTABLISHED, TRUSTED, HIGHLY_TRUSTED |
| signal_count | INTEGER | NOT NULL | 0 | Number of signals contributing to the score |
| last_recalculated_at | TIMESTAMPTZ | NOT NULL | NOW() | Last score recalculation timestamp |
| is_frozen | BOOLEAN | NOT NULL | FALSE | Whether the score is frozen (admin action) |
| frozen_reason | TEXT | NULL | NULL | Reason for freezing (if applicable) |
| frozen_at | TIMESTAMPTZ | NULL | NULL | When the score was frozen |
| version | INTEGER | NOT NULL | 1 | Optimistic concurrency version (OCC) |
| updated_at | TIMESTAMPTZ | NOT NULL | NOW() | Last update timestamp |

### 22.4 Commerce Schema (com) — Data Dictionary

#### 22.4.1 com.orders

| Column | Type | Nullable | Default | Description |
|---|---|---|---|---|
| order_id | UUID | NOT NULL | gen_random_uuid() | Primary key |
| order_number | BIGINT | NOT NULL | nextval('com.order_number_seq') | Human-readable order number (unique) |
| account_id | UUID | NOT NULL | — | Purchasing account_id (no FK — cross-engine) |
| status | TEXT | NOT NULL | 'PENDING' | PENDING, CONFIRMED, PAID, PROCESSING, PARTIALLY_SHIPPED, SHIPPED, DELIVERED, CANCELLED, REFUNDED, PARTIALLY_REFUNDED |
| subtotal | NUMERIC(20,2) | NOT NULL | — | Sum of order item prices |
| shipping_cost | NUMERIC(20,2) | NOT NULL | 0.00 | Shipping cost |
| tax_amount | NUMERIC(20,2) | NOT NULL | 0.00 | Tax/VAT amount |
| discount_amount | NUMERIC(20,2) | NOT NULL | 0.00 | Total discount applied |
| total_amount | NUMERIC(20,2) | NOT NULL | — | Grand total (subtotal + shipping + tax − discount) |
| currency | VARCHAR(3) | NOT NULL | 'USD' | Currency code |
| payment_status | TEXT | NOT NULL | 'PENDING' | PENDING, PAID, PARTIALLY_PAID, REFUNDED, PARTIALLY_REFUNDED, FAILED |
| shipping_address | JSONB | NULL | NULL | Shipping address (JSON structure) |
| billing_address | JSONB | NULL | NULL | Billing address (JSON structure) |
| notes | TEXT | NULL | NULL | Order notes |
| created_at | TIMESTAMPTZ | NOT NULL | NOW() | Order creation timestamp |
| confirmed_at | TIMESTAMPTZ | NULL | NULL | Order confirmation timestamp |
| paid_at | TIMESTAMPTZ | NULL | NULL | Payment confirmation timestamp |
| updated_at | TIMESTAMPTZ | NOT NULL | NOW() | Last update timestamp |
| version | INTEGER | NOT NULL | 1 | Optimistic concurrency version (OCC) |

### 22.5 K-Rewards Schema (krw) — Data Dictionary

#### 22.5.1 krw.kpoints_ledger

| Column | Type | Nullable | Default | Description |
|---|---|---|---|---|
| ledger_entry_id | UUID | NOT NULL | gen_random_uuid() | Primary key |
| account_id | UUID | NOT NULL | — | Account receiving/losing points |
| category | TEXT | NOT NULL | — | COMMERCE, SERVICES, LEARNING, COMMUNITY, ASSESSMENT, COMPLETION, PATH, MILESTONE |
| points | NUMERIC(20,2) | NOT NULL | — | Points awarded (positive) or deducted (negative) |
| multiplier | NUMERIC(10,4) | NOT NULL | — | K-Level multiplier applied |
| base_value | NUMERIC(20,2) | NOT NULL | — | Base value before multiplier |
| evidence_ref | TEXT | NOT NULL | — | Reference to source event (idempotency key); unique for ACCRUAL entries |
| cycle_id | UUID | NOT NULL | — | K-Rewards cycle for this entry |
| entry_type | TEXT | NOT NULL | — | ACCRUAL, REVERSAL, DEFERRED_REVERSAL |
| status | TEXT | NOT NULL | 'ACTIVE' | ACTIVE, REVERSED |
| reversed_by | UUID | NULL | NULL | If reversed, the reversal entry ID |
| source_engine | TEXT | NOT NULL | — | Engine that triggered the accrual |
| audit_hash | VARCHAR(64) | NOT NULL | — | Hash-chain link for tamper detection |
| created_at | TIMESTAMPTZ | NOT NULL | NOW() | Entry creation timestamp (append-only) |

#### 22.5.2 krw.klevel_definitions

| Column | Type | Nullable | Default | Description |
|---|---|---|---|---|
| k_level | INTEGER | NOT NULL | — | Primary key; K-Level number (1–15) |
| tier | TEXT | NOT NULL | — | FOUNDATION_GROWTH, LEADERSHIP, EXECUTIVE, LEGACY |
| level_name | TEXT | NOT NULL | — | Display name (Foundation, Growth, Leadership, Executive, Legacy) |
| kpoint_threshold | NUMERIC(12,2) | NOT NULL | — | Lifetime K-Points required to reach this level |
| direct_referrals_required | INTEGER | NOT NULL | — | Minimum direct referrals (Ring 1 count) |
| ring1_min_klevel_required | INTEGER | NOT NULL | 0 | Min K-Level required in Ring 1 members |
| ring2_min_klevel_required | INTEGER | NOT NULL | 0 | Min K-Level required in Ring 2 members |
| ring3_min_klevel_required | INTEGER | NOT NULL | 0 | Min K-Level required in Ring 3 members |
| ring4_min_klevel_required | INTEGER | NOT NULL | 0 | Min K-Level required in Ring 4 members |
| ring5_min_klevel_required | INTEGER | NOT NULL | 0 | Min K-Level required in Ring 5 members |
| ring1_min_count_required | INTEGER | NOT NULL | 0 | Min count of qualifying Ring 1 members |
| ring2_min_count_required | INTEGER | NOT NULL | 0 | Min count of qualifying Ring 2 members |
| ring3_min_count_required | INTEGER | NOT NULL | 0 | Min count of qualifying Ring 3 members |
| ring4_min_count_required | INTEGER | NOT NULL | 0 | Min count of qualifying Ring 4 members |
| ring5_min_count_required | INTEGER | NOT NULL | 0 | Min count of qualifying Ring 5 members |
| leadership_developed_required | INTEGER | NOT NULL | 0 | Min Ring 1 members developed to L7+ (anti-accumulation) |
| trust_score_required | NUMERIC(5,2) | NOT NULL | 0.00 | Min trust score to reach this level |
| kr_rule_id | TEXT | NOT NULL | — | KR-1 rule reference (governance traceability) |

### 22.6 Wallet Schema (wal) — Data Dictionary

#### 22.6.1 wal.wallets

| Column | Type | Nullable | Default | Description |
|---|---|---|---|---|
| wallet_id | UUID | NOT NULL | gen_random_uuid() | Primary key |
| account_id | UUID | NOT NULL | — | Account owner (no FK — cross-engine; one wallet per account+type) |
| wallet_type | TEXT | NOT NULL | 'PARTICIPANT' | PARTICIPANT, VENDOR, PROVIDER, INSTRUCTOR, PLATFORM, RESERVE, REWARD_POOL, OPERATIONAL |
| balance | NUMERIC(20,2) | NOT NULL | 0.00 | Current available balance (check: ≥ 0) |
| pending_balance | NUMERIC(20,2) | NOT NULL | 0.00 | Balance pending settlement (check: ≥ 0) |
| currency | VARCHAR(3) | NOT NULL | 'USD' | Currency code |
| status | TEXT | NOT NULL | 'ACTIVE' | ACTIVE, FROZEN, CLOSED |
| is_deleted | BOOLEAN | NOT NULL | FALSE | Soft deletion flag |
| deleted_at | TIMESTAMPTZ | NULL | NULL | Soft deletion timestamp |
| created_at | TIMESTAMPTZ | NOT NULL | NOW() | Wallet creation timestamp |
| updated_at | TIMESTAMPTZ | NOT NULL | NOW() | Last update timestamp |
| version | INTEGER | NOT NULL | 1 | Optimistic concurrency version (OCC) |

#### 22.6.2 wal.reserve_holdings

| Column | Type | Nullable | Default | Description |
|---|---|---|---|---|
| reserve_id | UUID | NOT NULL | gen_random_uuid() | Primary key |
| cycle_id | UUID | NOT NULL | — | K-Rewards cycle this reserve belongs to |
| settlement_id | UUID | NOT NULL | — | Reference to wal.settlements (no FK — cross-engine) |
| source_transaction_id | UUID | NOT NULL | — | Reference to econ.source_transactions (no FK) |
| reserve_amount | NUMERIC(20,2) | NOT NULL | — | Amount held in reserve |
| currency | VARCHAR(3) | NOT NULL | 'USD' | Currency code |
| reserve_type | TEXT | NOT NULL | — | COMMERCE, SERVICES, LEARNING, PLATFORM_FEE, PARTNER |
| status | TEXT | NOT NULL | 'HELD' | HELD, RELEASED, USED |
| release_reason | TEXT | NULL | NULL | Reason for release (only set when released via governance) |
| governance_approval_ref | TEXT | NULL | NULL | Governance approval reference (REQUIRED for release) |
| released_at | TIMESTAMPTZ | NULL | NULL | Release timestamp (if released) |
| audit_hash | VARCHAR(64) | NOT NULL | — | Hash-chain link for tamper detection |
| created_at | TIMESTAMPTZ | NOT NULL | NOW() | Creation timestamp (append-only) |

### 22.7 Cross-Engine Entity Relationships

Cross-engine relationships use plain UUID columns (no foreign keys) to enforce engine boundaries. The application validates referential integrity through API calls.

#### 22.7.1 Identity → All Engines

Every participant has an `account_id` in `idm.accounts`. All other engines reference this account_id as a plain UUID column:

```
idm.accounts.account_id ──→ tru.trust_scores.account_id
idm.accounts.account_id ──→ krw.kpoints_ledger.account_id
idm.accounts.account_id ──→ wal.wallets.account_id
idm.accounts.account_id ──→ graph.graph_nodes.account_id
idm.accounts.account_id ──→ roy.royal_identities.account_id
idm.accounts.account_id ──→ com.vendors.owner_account_id
idm.accounts.account_id ──→ svc.providers.account_id
idm.accounts.account_id ──→ lrn.instructors.account_id
```

#### 22.7.2 Commerce → Wallet/K-Rewards

```
com.orders.order_id ──→ econ.source_transactions.source_entity_id
com.commerce_settlements.settlement_id ──→ wal.settlements.settlement_id
com.commerce_settlements ──→ krw.kpoints_ledger (via evidence_ref)
```

#### 22.7.3 Services → Wallet/K-Rewards

```
svc.contracts.contract_id ──→ econ.source_transactions.source_entity_id
svc.service_settlements.settlement_id ──→ wal.settlements.settlement_id
svc.service_settlements ──→ krw.kpoints_ledger (via evidence_ref)
```

#### 22.7.4 Learning → Wallet/K-Rewards

```
lrn.enrollments.enrollment_id ──→ econ.source_transactions.source_entity_id
lrn.learning_settlements.settlement_id ──→ wal.settlements.settlement_id
lrn.learning_settlements ──→ krw.kpoints_ledger (via evidence_ref)
```

#### 22.7.5 K-Rewards → Graph

```
krw.reward_cycles.cycle_id ──→ graph.leadership_qualifications.cycle_id
krw.reward_cycles.cycle_id ──→ econ.source_transactions.cycle_id
krw.reward_cycles.cycle_id ──→ econ.cycle_reconciliations.cycle_id
graph.ring_memberships.member_k_level ←── krw.lifetime_statistics.k_level (mirrored)
```

#### 22.7.6 Integration → Wallet

```
igr.partner_transactions.transaction_id ──→ econ.source_transactions.source_entity_id
igr.partner_transactions ──→ krw.kpoints_ledger (via evidence_ref)
```

#### 22.7.7 90/10 Accounting Chain

```
econ.source_transactions.source_transaction_id
    ──→ econ.reserve_allocations.source_transaction_id
    ──→ econ.allocation_pool_entries.source_transaction_id
    ──→ econ.distribution_entries.source_transaction_id
    ──→ econ.settlement_links.source_transaction_id
    ──→ wal.settlements.settlement_id
    ──→ wal.wallet_transactions.settlement_id
    ──→ wal.reserve_holdings.reserve_id
    ──→ econ.cycle_reconciliations.cycle_id
```

### 22.8 ER Diagram Description

The database consists of 15 schemas with approximately 140 tables. The key entity relationships are:

1. **Identity is the root** — every participant, vendor, provider, instructor, and partner is an `idm.accounts` record. All other schemas reference `account_id`.

2. **Referral creates the graph** — `idm.accounts.referred_by` creates a `graph.graph_edges` entry. The graph schema pre-computes `ring_memberships` for efficient Ring 1–5 queries.

3. **Transactions create economic flows** — commerce orders, service contracts, learning enrollments, and partner transactions create `econ.source_transactions` records. Each source transaction flows through the 90/10 accounting chain.

4. **K-Rewards cycles drive calculations** — each monthly cycle triggers leadership qualification checks (in `graph.leadership_qualifications`), reward distributions (in `krw.reward_distributions`), and cycle reconciliations (in `econ.cycle_reconciliations`).

5. **Royal Identity is recognition** — `roy.royal_identities` mirrors K-Level data. Title transitions are append-only in `roy.title_history`. Coronation records are permanent in `roy.coronation_records`.

6. **Settlements link to wallets** — each engine's settlement table (`com.commerce_settlements`, `svc.service_settlements`, `lrn.learning_settlements`, `igr.partner_transactions`) links to `wal.settlements`, which executes the actual wallet transactions.

7. **Shared infrastructure** — `shared.audit_log` captures all state changes; `shared.outbox` and `shared.event_store` support the event bus; `shared.idempotency_keys` support idempotent operations; `shared.encryption_key_registry` tracks encryption key versions.

### 22.9 Governing Requirement Traceability

SDD-1 Ch.2–21 (all engine data models); SAD-1 Ch.4–18 (all engine architectures); SRS-1 IDM-001–007, TRU-001–005, COM-001–022, SVC-001–019, KRW-001–015, ROY-001–009, WAL-001–014, MSG-001–004, INT-001–004, ADM-001–008, IGR-001–010, LRN-001–017.

---

## Chapter 23 — Traceability Matrices

### 23.1 Overview

This chapter provides traceability matrices mapping the DDD-1 database design back to the governing documents: SRS-1 (requirements), SAD-1 (architecture), SDD-1 (design), PLC-1 (platform constitution), and KR-1 (K-Rewards policy). Each matrix demonstrates that every requirement, architectural decision, and design component is realized in the database schema.

Precedence: PLC-1 > KR-1 > BRD-1 > SRS-1 > SAD-1 > SDD-1 > DDD-1.

### 23.2 SRS-1 → DDD-1 Traceability Matrix

Maps each SRS-1 requirement to the DDD-1 schema tables that implement it.

| SRS-1 Req ID | Requirement Title | DDD-1 Schema.Table | DDD-1 Chapter |
|---|---|---|---|
| IDM-001 | Account Registration | idm.accounts | Ch.6 |
| IDM-002 | Email Verification | idm.accounts, idm.kyc_verifications | Ch.6 |
| IDM-003 | KYC Verification | idm.kyc_verifications | Ch.6 |
| IDM-004 | Session Management | idm.sessions | Ch.6 |
| IDM-005 | MFA Enrollment | idm.mfa_enrollments | Ch.6 |
| IDM-006 | Account Suspension/Closure | idm.accounts (status) | Ch.6 |
| IDM-007 | Referral Assignment | idm.accounts (referred_by), graph.graph_edges | Ch.6, Ch.17 |
| TRU-001 | Trust Score Calculation | tru.trust_scores, tru.trust_signals | Ch.7 |
| TRU-002 | Trust Signal Collection | tru.trust_signals | Ch.7 |
| TRU-003 | Trust History | tru.trust_history | Ch.7 |
| TRU-004 | Trust Recovery | tru.trust_recoveries | Ch.7 |
| TRU-005 | Trust Gate Enforcement | tru.trust_gate_thresholds | Ch.7 |
| COM-001 | Vendor Registration | com.vendors | Ch.8 |
| COM-002 | Store Management | com.stores | Ch.8 |
| COM-003 | Product Catalog | com.products, com.categories | Ch.8 |
| COM-004 | Product Variants | com.product_variants | Ch.8 |
| COM-005 | Product Attributes | com.product_attributes | Ch.8 |
| COM-006 | Inventory Management | com.inventory | Ch.8 |
| COM-007 | Shopping Cart | com.carts, com.cart_items | Ch.8 |
| COM-008 | Order Placement | com.orders, com.order_items | Ch.8 |
| COM-009 | Order Fulfilment | com.shipments | Ch.8 |
| COM-010 | Returns | com.returns | Ch.8 |
| COM-011 | Refunds | com.refunds | Ch.8 |
| COM-012 | Disputes | com.disputes | Ch.8 |
| COM-013 | Product Reviews | com.reviews | Ch.8 |
| COM-014 | Promotions | com.promotions | Ch.8 |
| COM-015 | Settlement | com.commerce_settlements | Ch.8 |
| COM-016 | Multi-Currency | com.orders (currency) | Ch.8 |
| COM-017 | Vendor Dashboard | com.vendors, com.orders | Ch.8 |
| COM-018 | Category Management | com.categories | Ch.8 |
| COM-019 | Search and Filtering | com.products (indexes) | Ch.8 |
| COM-020 | Payment Integration | wal.settlements, wal.wallet_transactions | Ch.11 |
| COM-021 | Shipping Integration | com.shipments | Ch.8 |
| COM-022 | 90/10 Settlement | com.commerce_settlements (check constraints) | Ch.8 |
| SVC-001 | Provider Registration | svc.providers | Ch.9 |
| SVC-002 | Provider Profiles | svc.providers | Ch.9 |
| SVC-003 | Skills Management | svc.skills, svc.provider_skills | Ch.9 |
| SVC-004 | Portfolio | svc.portfolio_items | Ch.9 |
| SVC-005 | Service Listings | svc.service_listings | Ch.9 |
| SVC-006 | Service Packages | svc.service_packages | Ch.9 |
| SVC-007 | Service Requests | svc.service_requests | Ch.9 |
| SVC-008 | Proposals | svc.proposals | Ch.9 |
| SVC-009 | Contracts | svc.contracts | Ch.9 |
| SVC-010 | Booking and Scheduling | svc.contracts (schedule) | Ch.9 |
| SVC-011 | Milestones | svc.milestones | Ch.9 |
| SVC-012 | Deliveries | svc.deliveries | Ch.9 |
| SVC-013 | Service Disputes | svc.service_disputes | Ch.9 |
| SVC-014 | Service Reviews | svc.service_reviews | Ch.9 |
| SVC-015 | Provider Reputation | svc.providers (reputation_score) | Ch.9 |
| SVC-016 | Settlement | svc.service_settlements | Ch.9 |
| SVC-017 | Multi-Currency | svc.contracts (currency) | Ch.9 |
| SVC-018 | 90/10 Settlement | svc.service_settlements (check constraints) | Ch.9 |
| SVC-019 | Provider Dashboard | svc.providers, svc.contracts | Ch.9 |
| KRW-001 | K-Points Ledger | krw.kpoints_ledger | Ch.10 |
| KRW-002 | K-Point Categories | krw.kpoint_categories | Ch.10 |
| KRW-003 | Lifetime Statistics | krw.lifetime_statistics | Ch.10 |
| KRW-004 | K-Rings | graph.graph_edges, graph.ring_memberships | Ch.17 |
| KRW-005 | K-Level Definitions | krw.klevel_definitions | Ch.10 |
| KRW-006 | K-Level Progression | krw.klevel_history | Ch.10 |
| KRW-007 | Monthly Snapshots | krw.monthly_snapshots | Ch.10 |
| KRW-008 | Leadership Qualification | graph.leadership_qualifications | Ch.17 |
| KRW-009 | Ring Distribution Check | graph.ring_memberships, graph.leadership_qualifications | Ch.17 |
| KRW-010 | Trust Gate | tru.trust_gate_thresholds | Ch.7 |
| KRW-011 | Reward Cycles | krw.reward_cycles | Ch.10 |
| KRW-012 | Reward Pools | krw.reward_pools | Ch.10 |
| KRW-013 | Reward Distributions | krw.reward_distributions | Ch.10 |
| KRW-014 | Reward Statements | krw.reward_statements | Ch.10 |
| KRW-015 | Reconciliation | krw.reconciliation_records, econ.cycle_reconciliations | Ch.10, Ch.19 |
| ROY-001 | Username Assignment | roy.royal_identities | Ch.18 |
| ROY-002 | Team Name | roy.royal_identities, graph.team_identities | Ch.18, Ch.17 |
| ROY-003 | Tier-to-Title Mapping | roy.royal_identities (current_title) | Ch.18 |
| ROY-004 | Title Transitions | roy.title_history | Ch.18 |
| ROY-005 | Recognition Not Authority | roy.royal_identities (no authority columns) | Ch.18 |
| ROY-006 | Coronation Eligibility | roy.coronation_records (eligibility_verified) | Ch.18 |
| ROY-007 | Coronation Recognition | roy.coronation_records, roy.coronation_categories | Ch.18 |
| ROY-008 | Coronation Cycle | roy.coronation_records (coronation_cycle_id) | Ch.18 |
| ROY-009 | Coronation History | roy.coronation_records (append-only) | Ch.18 |
| WAL-001 | Wallet Creation | wal.wallets | Ch.11 |
| WAL-002 | Wallet Transactions | wal.wallet_transactions | Ch.11 |
| WAL-003 | Wallet Holds | wal.wallet_holds | Ch.11 |
| WAL-004 | Deposits | wal.wallet_transactions | Ch.11 |
| WAL-005 | Withdrawals | wal.wallet_transactions | Ch.11 |
| WAL-006 | 90/10 Conformance | econ.source_transactions, econ.reserve_allocations, wal.settlements, econ.cycle_reconciliations | Ch.19, Ch.11 |
| WAL-007 | Multi-Currency | wal.wallets (currency) | Ch.11 |
| WAL-008 | Transaction History | wal.wallet_transactions (append-only) | Ch.11 |
| WAL-009 | Balance Inquiry | wal.wallets (balance) | Ch.11 |
| WAL-010 | Settlement | wal.settlements | Ch.11 |
| WAL-011 | Reversals | wal.reversals | Ch.11 |
| WAL-012 | Reserve Protection | wal.reserve_holdings (append-only, governance release) | Ch.11 |
| WAL-013 | Payment Integration | wal.settlements | Ch.11 |
| WAL-014 | Fraud Detection | int.fraud_signals | Ch.13 |
| MSG-001 | Notifications | msg.notifications | Ch.12 |
| MSG-002 | Notification Preferences | msg.notification_preferences | Ch.12 |
| MSG-003 | Messages | msg.messages | Ch.12 |
| MSG-004 | Announcements | msg.announcements | Ch.12 |
| INT-001 | Behavioral Signals | int.behavioral_signals | Ch.13 |
| INT-002 | Recommendations | int.recommendations | Ch.13 |
| INT-003 | Fraud Signals | int.fraud_signals | Ch.13 |
| INT-004 | Analytics | int.analytics_snapshots | Ch.13 |
| ADM-001 | Governance Reviews | adm.governance_reviews | Ch.14 |
| ADM-002 | Policy Enforcement | adm.policy_enforcements | Ch.14 |
| ADM-003 | Moderation | adm.moderation_cases | Ch.14 |
| ADM-004 | Admin Disputes | adm.admin_disputes | Ch.14 |
| ADM-005 | Sanctions | adm.sanctions | Ch.14 |
| ADM-006 | Appeals | adm.appeals | Ch.14 |
| ADM-007 | Compliance Flags | adm.compliance_flags | Ch.14 |
| ADM-008 | Admin Dashboard | adm.* (all tables) | Ch.14 |
| IGR-001 | Partner Registry | igr.partners | Ch.15 |
| IGR-002 | API Clients | igr.api_clients | Ch.15 |
| IGR-003 | API Credentials | igr.api_credentials | Ch.15 |
| IGR-004 | API Scopes | igr.api_scopes | Ch.15 |
| IGR-005 | Webhook Subscriptions | igr.webhook_endpoints, igr.event_subscriptions | Ch.15 |
| IGR-006 | Webhook Deliveries | igr.webhook_deliveries | Ch.15 |
| IGR-007 | Provider Health | igr.partners (health fields) | Ch.15 |
| IGR-008 | Integration Events | igr.event_subscriptions | Ch.15 |
| IGR-009 | API Usage | igr.api_request_logs | Ch.15 |
| IGR-010 | Partner Settlement | igr.partner_transactions | Ch.15 |
| LRN-001 | Instructor Registration | lrn.instructors | Ch.16 |
| LRN-002 | Course Creation | lrn.courses | Ch.16 |
| LRN-003 | Programs | lrn.programmes, lrn.programme_courses | Ch.16 |
| LRN-004 | Learning Paths | lrn.learning_paths, lrn.learning_path_steps | Ch.16 |
| LRN-005 | Modules | lrn.modules | Ch.16 |
| LRN-006 | Lessons | lrn.lessons, lrn.lesson_content | Ch.16 |
| LRN-007 | Content Management | lrn.lesson_content | Ch.16 |
| LRN-008 | External Media | lrn.external_media | Ch.16 |
| LRN-009 | Enrollments | lrn.enrollments | Ch.16 |
| LRN-010 | Progress Tracking | lrn.lesson_progress | Ch.16 |
| LRN-011 | Quizzes | lrn.assessments, lrn.questions, lrn.answers | Ch.16 |
| LRN-012 | Questions | lrn.questions | Ch.16 |
| LRN-013 | Answers | lrn.answers | Ch.16 |
| LRN-014 | Assessments | lrn.assessments, lrn.assessment_attempts, lrn.attempt_answers | Ch.16 |
| LRN-015 | Assignments | lrn.assignments, lrn.assignment_submissions | Ch.16 |
| LRN-016 | Grades | lrn.grades | Ch.16 |
| LRN-017 | Certificates | lrn.certificates | Ch.16 |
| NFR-001 | Zero Trust Access Control | RLS policies (all schemas) | Ch.20 |
| NFR-002 | Encryption | shared.encryption_key_registry, *_enc columns | Ch.20 |
| NFR-003 | Audit Logging | shared.audit_log | Ch.20, Ch.5 |
| NFR-004 | Immutable Ledgers | Block mutation triggers (Ch.20) | Ch.20 |
| NFR-005 | Data Retention | Retention schedule (Ch.20) | Ch.20 |
| NFR-006 | Secrets Management | shared.encryption_key_registry | Ch.5, Ch.20 |
| NFR-007 | Tenant Isolation | Per-engine schemas, no cross-schema FK | Ch.4, Ch.20 |
| NFR-008 | API Security | igr.api_credentials, igr.api_scopes | Ch.15 |
| NFR-009 | Fraud Detection | int.fraud_signals | Ch.13 |
| NFR-010 | Incident Response | shared.audit_log, adm.compliance_flags | Ch.20, Ch.14 |
| NFR-011 | Compliance/Privacy | Retention schedule, RLS, encryption | Ch.20 |
| NFR-012 | Secure Integrations | igr.api_credentials (encrypted) | Ch.15 |
| NFR-013 | Resilience | Outbox pattern, append-only ledgers | Ch.5, Ch.20 |
| NFR-014 | Observability | shared.audit_log, event store | Ch.5, Ch.20 |

### 23.3 SAD-1 → DDD-1 Traceability Matrix

Maps SAD-1 architectural decisions and components to DDD-1 schema implementations.

| SAD-1 Component/ADR | Description | DDD-1 Implementation | Chapter |
|---|---|---|---|
| ADR-001 | Microservices per engine | Per-engine PostgreSQL schemas | Ch.4 |
| ADR-002 | Per-engine data ownership | No cross-schema FKs; plain UUID refs | Ch.4, Ch.20 |
| ADR-003 | Event bus for async | shared.outbox, shared.event_store | Ch.5 |
| ADR-004 | API Gateway sole inbound | No direct DB access from external; igr schema | Ch.15 |
| ADR-005 | External media strategy | lrn.external_media (references only, no binaries) | Ch.16 |
| ADR-006 | Graph database for K-Rings | graph schema (relational projection of Neo4j) | Ch.17 |
| ADR-007 | Strong consistency for financial | PCC on wal.wallets, wal.settlements | Ch.11 |
| ADR-008 | Zero trust security | RLS, block mutation, encryption, audit | Ch.20 |
| ADR-009 | Learning not separate architecture | lrn schema as Engine #11 | Ch.16 |
| ADR-010 | Governance parameters owned by KR-1 | Config tables with kr_rule_id | Ch.10, Ch.19, Ch.21 |
| SAD-1 Ch.4 | Engine boundaries | 15 schemas, no cross-schema FK | Ch.4 |
| SAD-1 Ch.5 | Shared services | shared schema (outbox, audit, idempotency) | Ch.5 |
| SAD-1 Ch.14 | 90/10 economic controls | econ schema | Ch.19 |
| SAD-1 Ch.21 | Leadership graph | graph schema | Ch.17 |
| SAD-1 Ch.22 | Royal Identity | roy schema | Ch.18 |
| SAD-1 Ch.22–25 | Security architecture | Ch.20 (Security Design) | Ch.20 |
| SAD-1 Ch.26 | Deployment architecture | Migration framework | Ch.21 |

### 23.4 SDD-1 → DDD-1 Traceability Matrix

Maps SDD-1 design components to DDD-1 schema implementations.

| SDD-1 Chapter | Design Component | DDD-1 Implementation | Chapter |
|---|---|---|---|
| SDD-1 Ch.2 | Identity design | idm schema | Ch.6 |
| SDD-1 Ch.3 | Trust design | tru schema | Ch.7 |
| SDD-1 Ch.4 | Commerce design | com schema | Ch.8 |
| SDD-1 Ch.5 | Services design | svc schema | Ch.9 |
| SDD-1 Ch.10 | K-Rewards design | krw schema | Ch.10 |
| SDD-1 Ch.10 | RingGraph data model | graph schema | Ch.17 |
| SDD-1 Ch.11 | 90/10 enforcement | econ schema, wal.settlements | Ch.19, Ch.11 |
| SDD-1 Ch.12 | Wallet design | wal schema | Ch.11 |
| SDD-1 Ch.13 | Communication design | msg schema | Ch.12 |
| SDD-1 Ch.14 | Intelligence design | int schema | Ch.13 |
| SDD-1 Ch.15 | Administration design | adm schema | Ch.14 |
| SDD-1 Ch.16 | Integration design | igr schema | Ch.15 |
| SDD-1 Ch.16 | Learning design | lrn schema | Ch.16 |
| SDD-1 Ch.17 | Leadership qualification | graph.leadership_qualifications | Ch.17 |
| SDD-1 Ch.18 | Royal Identity design | roy schema | Ch.18 |
| SDD-1 Ch.19 | 90/10 accounting | econ schema | Ch.19 |
| SDD-1 Ch.20 | Security controls | Ch.20 (Security Design) | Ch.20 |
| SDD-1 Ch.21 | Deployment/migration | Migration framework | Ch.21 |

### 23.5 PLC-1 → DDD-1 Traceability Matrix

| PLC-1 Chapter | Principle/Requirement | DDD-1 Implementation | Chapter |
|---|---|---|---|
| PLC-1 Ch.22 | Royal Identity tiers | roy.royal_identities (tier-to-title) | Ch.18 |
| PLC-1 Ch.25 | 90/10 Principle | econ schema (structural enforcement) | Ch.19 |
| PLC-1 Ch.26 | Network structure | graph schema | Ch.17 |
| PLC-1 Ch.31 | Security | Ch.20 (Security Design) | Ch.20 |
| PLC-1 Ch.31.2 | Integration Engine sole API boundary | igr schema; no external DB access | Ch.15 |

### 23.6 KR-1 → DDD-1 Traceability Matrix

| KR-1 Rule ID | Description | DDD-1 Implementation | Chapter |
|---|---|---|---|
| KR-LVL-009 | K-Level progression matrix | krw.klevel_definitions | Ch.10, Ch.21 |
| KR-LVL-042 | Tier-to-title mapping | roy.royal_identities | Ch.18 |
| KR-LVL-043 | Username immutability | roy.fn_protect_username trigger | Ch.18 |
| KR-LVL-045 | Recognition not authority | roy.royal_identities (no authority columns) | Ch.18 |
| KR-LVL-047 | Coronation from allocation pool | roy.coronation_records (funding_source = 'ALLOCATION_POOL') | Ch.18 |
| KR-LVL-051 | Coronation categories | roy.coronation_categories | Ch.18 |
| KR-LVL-052 | Coronation awards | roy.coronation_records (coronation_awards JSONB) | Ch.18 |
| KR-LVL-053 | Coronation not from reserve | roy.coronation_records (CHECK constraint) | Ch.18 |
| KR-LVL-054 | Coronation records permanent | roy.coronation_records (block mutation triggers) | Ch.18 |
| KR-ECO-001 | 90/10 Principle | econ schema (full chain) | Ch.19 |
| KR-ECO-003 | QEV = GR − D | econ.source_transactions (check constraint) | Ch.19 |
| KR-ECO-005 | Allocation sum = pool | econ.allocation_pool_entries (check constraint) | Ch.19 |
| KR-ECO-008 | Source transaction | econ.source_transactions | Ch.19 |
| KR-ECO-009 | Qualifying revenue | econ.source_transactions (qualifying_economic_value) | Ch.19 |
| KR-ECO-010 | QEV definition | econ.source_transactions (check constraint) | Ch.19 |
| KR-ECO-011 | Allocation pool = 90% | econ.allocation_pool_entries | Ch.19 |
| KR-ECO-012 | Reserve = 10% | econ.reserve_allocations | Ch.19 |
| KR-ECO-013 | AP + R = QEV | econ.cycle_reconciliations (check constraint) | Ch.19 |
| KR-ECO-014 | Allocation rates | econ.allocation_rate_config (GOVERNANCE PARAMETERS) | Ch.19, Ch.21 |
| KR-ECO-015 | Distribution entries | econ.distribution_entries | Ch.19 |
| KR-ECO-017 | Rates sum to 90% | econ.allocation_rate_config (check constraint) | Ch.19 |
| KR-PTS-001–008 | K-Point categories | krw.kpoint_categories | Ch.10, Ch.21 |
| KR-RNG-001–017 | Ring rules | graph.ring_memberships, krw.ring_weights | Ch.17, Ch.10 |
| KR-TRU-001–005 | Trust thresholds | tru.trust_gate_thresholds | Ch.7, Ch.21 |

---

# Appendices

## Appendix A — PostgreSQL Extension Reference

The K-NETWORK database relies on the following PostgreSQL extensions. All extensions are installed in the `shared` schema to avoid polluting engine schemas.

### A.1 Required Extensions

| Extension | Version | Purpose | Install Command |
|---|---|---|---|
| `pgcrypto` | 1.3+ | UUID generation (`gen_random_uuid()`), cryptographic functions | `CREATE EXTENSION IF NOT EXISTS pgcrypto SCHEMA shared;` |
| `pg_stat_statements` | 1.10+ | Query performance monitoring | `CREATE EXTENSION IF NOT EXISTS pg_stat_statements;` |
| `pg_trgm` | 1.6+ | Trigram-based fuzzy text search for product/service search | `CREATE EXTENSION IF NOT EXISTS pg_trgm;` |
| `uuid-ossp` | 1.1+ | Alternative UUID generation functions (fallback) | `CREATE EXTENSION IF NOT EXISTS "uuid-ossp" SCHEMA shared;` |
| `btree_gin` | 1.3+ | GIN index support for composite queries | `CREATE EXTENSION IF NOT EXISTS btree_gin;` |
| `btree_gist` | 1.7+ | GiST index support for exclusion constraints | `CREATE EXTENSION IF NOT EXISTS btree_gist;` |
| `pgjwt` | 0.2.0+ | JWT token generation for API authentication | `CREATE EXTENSION IF NOT EXISTS pgjwt SCHEMA shared;` |

### A.2 Optional Extensions

| Extension | Version | Purpose | Install Command |
|---|---|---|---|
| `pg_cron` | 1.6+ | Scheduled jobs for retention cleanup and reconciliation | `CREATE EXTENSION IF NOT EXISTS pg_cron;` |
| `pg_partman` | 5.x+ | Partition management for large tables (audit_log, api_request_logs) | `CREATE EXTENSION IF NOT EXISTS pg_partman SCHEMA shared;` |
| `postgres_fdw` | 1.1+ | Foreign data wrapper for read replicas and cross-cluster queries | `CREATE EXTENSION IF NOT EXISTS postgres_fdw;` |
| `pgvector` | 0.7+ | Vector similarity search for AI-powered recommendations | `CREATE EXTENSION IF NOT EXISTS vector;` |

### A.3 Extension Installation Migration

```sql
-- Migration: 000001_create_shared_schema (extensions portion)
BEGIN;

CREATE SCHEMA IF NOT EXISTS shared;

CREATE EXTENSION IF NOT EXISTS pgcrypto SCHEMA shared;
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS btree_gin;
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- Optional extensions (install based on deployment requirements)
-- CREATE EXTENSION IF NOT EXISTS pg_cron;
-- CREATE EXTENSION IF NOT EXISTS pg_partman SCHEMA shared;
-- CREATE EXTENSION IF NOT EXISTS vector;

COMMIT;
```

### A.4 Extension Usage Summary

| Extension | Used By | Purpose |
|---|---|---|
| pgcrypto | All schemas | `gen_random_uuid()` for primary keys; `digest()` for hash chains |
| pg_stat_statements | Operations | Query performance monitoring and optimization |
| pg_trgm | com, svc, lrn | Fuzzy search on product names, service titles, course titles |
| btree_gin | com, svc | Composite GIN indexes for multi-column queries |
| btree_gist | wal | Exclusion constraints for overlapping holds on wallet balances |
| pgjwt | igr, idm | JWT token generation for API authentication and session tokens |
| pg_cron | Operations | Scheduled retention cleanup, cycle reconciliation triggers |
| pg_partman | shared, igr | Partitioning of audit_log and api_request_logs by date |
| pgvector | int | Vector embeddings for recommendation engine |

---

## Appendix B — Glossary

| Term | Definition |
|---|---|
| 90/10 Principle | The economic principle that 90% of qualifying economic value is allocated to the distribution pool and 10% is held in reserve (KR-ECO-001). |
| Allocation Pool | The 90% of qualifying economic value that is distributed to counterparties, platform, rewards, leadership, and operational categories. |
| Anti-Accumulation Principle | The principle that a leader cannot qualify for top-tier promotion through referral accumulation alone; they must develop other qualified leaders (KR-1 Ch.38). |
| Append-Only | A table that does not allow UPDATE or DELETE operations; corrections are made via compensating entries. |
| Audit Hash | A SHA-256 hash included in each audit log entry, linking to the previous entry's hash to create a tamper-evident chain. |
| Check Constraint | A database constraint that enforces a condition on column values; used for business rules and data integrity. |
| Compensating Entry | A reversal or correction entry in an append-only ledger that reverses the effect of a prior entry without modifying it. |
| Coronation | The annual recognition event for participants who have reached King tier (L13–L15); funded from the allocation pool, not the reserve. |
| Cross-Engine Reference | A reference from one engine's schema to another engine's data using a plain UUID column (no foreign key); validated at the application level. |
| Domain Engine | A bounded context within the K-NETWORK platform that owns a specific business domain (e.g., Commerce, Services, Learning). |
| Engine Boundary | The logical separation between engines, enforced at the database level by per-engine schemas and no cross-schema foreign keys. |
| Governance Parameter | A configuration value owned by KR-1 that controls platform behavior (e.g., K-Level thresholds, allocation rates); stored in configuration tables, not hard-coded. |
| Hash Chain | A sequence of records where each record includes the hash of the previous record, creating a tamper-evident chain. |
| Idempotency Key | A unique key provided by the client to prevent duplicate processing of the same request. |
| Immutable Ledger | A financial or audit ledger that cannot be modified or deleted; protected by block mutation triggers. |
| K-Level | A participant's level in the K-Rewards system, ranging from 1 (Foundation) to 15 (Legacy). |
| K-Points | The lifetime points earned by participants through commerce, services, learning, referrals, and community contributions. |
| K-Ring | The network depth of a participant relative to a leader; Ring 1 = direct referral, Ring 2 = second-level, etc. (Rings 1–5). |
| KYC | Know Your Customer; the identity verification process with tiers (TIER_0 through TIER_3). |
| OCC | Optimistic Concurrency Control; uses a version column to detect concurrent modifications. |
| Outbox Pattern | A pattern where domain events are written to an outbox table in the same transaction as the data change, ensuring reliable event delivery. |
| PCC | Pessimistic Concurrency Control; uses SELECT FOR UPDATE to lock rows during financial operations. |
| QEV | Qualifying Economic Value; the portion of gross revenue that qualifies for 90/10 allocation (QEV = Gross Revenue − Deductions). |
| Reserve | The 10% of qualifying economic value held in reserve; protected by append-only tables and governance-only release. |
| RLS | Row-Level Security; a PostgreSQL feature that restricts which rows a user can access based on policies. |
| Royal Identity | The recognition identity model integrated with the K-Level system; includes username, team name, and leadership title. |
| Soft Deletion | A deletion pattern where records are marked as deleted (`is_deleted = TRUE`, `deleted_at` set) rather than physically removed. |
| Trust Gate | A trust score threshold that gates K-Rewards eligibility and K-Level promotion. |
| Zero Trust | A security model where no user or service is trusted by default; every access is explicitly granted, authenticated, and audited. |

---

## Appendix C — Acronyms

| Acronym | Expansion |
|---|---|
| ABAC | Attribute-Based Access Control |
| ADR | Architecture Decision Record |
| AES | Advanced Encryption Standard |
| AML | Anti-Money Laundering |
| API | Application Programming Interface |
| BRD | Business Requirements Document |
| DDD | Database Design Document |
| DDL | Data Definition Language |
| DML | Data Manipulation Language |
| ER | Entity-Relationship |
| FK | Foreign Key |
| GCM | Galois/Counter Mode |
| GIN | Generalized Inverted Index |
| GiST | Generalized Search Tree |
| IAM | Identity and Access Management |
| JSONB | JSON Binary (PostgreSQL data type) |
| JWT | JSON Web Token |
| KYC | Know Your Customer |
| MFA | Multi-Factor Authentication |
| NFR | Non-Functional Requirement |
| OCC | Optimistic Concurrency Control |
| OIDC | OpenID Connect |
| PCC | Pessimistic Concurrency Control |
| PK | Primary Key |
| PLC | Platform Constitution |
| QEV | Qualifying Economic Value |
| RBAC | Role-Based Access Control |
| RLS | Row-Level Security |
| SAD | Software Architecture Document |
| SDD | Software Design Document |
| SDK | Software Development Kit |
| SRS | Software Requirements Specification |
| TIMESTAMPTZ | Timestamp with Time Zone |
| TOTP | Time-Based One-Time Password |
| UUID | Universally Unique Identifier |
| WAL | Write-Ahead Log |

---

## Appendix D — Revenue Waterfall Reference

The revenue waterfall defines how qualifying economic value is distributed for each revenue type. All values are GOVERNANCE PARAMETERS owned by KR-1 (KR-ECO-014). The allocation pool is 90% of QEV; the reserve is 10% of QEV; the total is 100% of QEV.

### D.1 Commerce Revenue Waterfall

| Category | Rate | Description |
|---|---|---|
| Vendor (Counterparty) | 15% | Vendor's share of QEV |
| Platform | 60% | Platform's share of QEV |
| Rewards | 8% | K-Rewards pool |
| Leadership | 5% | Leadership development pool |
| Operational | 2% | Operational costs |
| **Allocation Pool Total** | **90%** | Sum of all distribution categories |
| Reserve | 10% | Held in reserve (governance-only release) |
| **Total** | **100%** | QEV |

### D.2 Services Revenue Waterfall

| Category | Rate | Description |
|---|---|---|
| Provider (Counterparty) | 15% | Provider's share of QEV |
| Platform | 60% | Platform's share of QEV |
| Rewards | 8% | K-Rewards pool |
| Leadership | 5% | Leadership development pool |
| Operational | 2% | Operational costs |
| **Allocation Pool Total** | **90%** | Sum of all distribution categories |
| Reserve | 10% | Held in reserve (governance-only release) |
| **Total** | **100%** | QEV |

### D.3 Learning Revenue Waterfall

| Category | Rate | Description |
|---|---|---|
| Instructor (Counterparty) | 20% | Instructor's share of QEV |
| Platform | 55% | Platform's share of QEV |
| Rewards | 8% | K-Rewards pool |
| Leadership | 5% | Leadership development pool |
| Operational | 2% | Operational costs |
| **Allocation Pool Total** | **90%** | Sum of all distribution categories |
| Reserve | 10% | Held in reserve (governance-only release) |
| **Total** | **100%** | QEV |

### D.4 Platform Fee Revenue Waterfall

| Category | Rate | Description |
|---|---|---|
| Counterparty | 0% | No counterparty (platform is the sole provider) |
| Platform | 65% | Platform's share of QEV |
| Rewards | 15% | K-Rewards pool |
| Leadership | 7% | Leadership development pool |
| Operational | 3% | Operational costs |
| **Allocation Pool Total** | **90%** | Sum of all distribution categories |
| Reserve | 10% | Held in reserve (governance-only release) |
| **Total** | **100%** | QEV |

### D.5 Partner Revenue Waterfall

| Category | Rate | Description |
|---|---|---|
| Partner (Counterparty) | 40% | Partner's share of QEV |
| Platform | 35% | Platform's share of QEV |
| Rewards | 10% | K-Rewards pool |
| Leadership | 3% | Leadership development pool |
| Operational | 2% | Operational costs |
| **Allocation Pool Total** | **90%** | Sum of all distribution categories |
| Reserve | 10% | Held in reserve (governance-only release) |
| **Total** | **100%** | QEV |

### D.6 Verification

All waterfalls sum to 90% (allocation pool) + 10% (reserve) = 100% (total). This is enforced by the check constraint `ck_econ_allocation_rate_sum` on `econ.allocation_rate_config`.

---

## Appendix E — K-Level Progression Matrix Reference

The K-Level progression matrix defines the requirements for each of the 15 K-Levels. All values are GOVERNANCE PARAMETERS owned by KR-1 (KR-LVL-009). The matrix is stored in `krw.klevel_definitions`.

### E.1 Tier Mapping

| Tier | K-Level Range | Royal Title | Description |
|---|---|---|---|
| Foundation/Growth | L1–L6 | Normal | Entry-level participants building their network |
| Leadership | L7–L9 | Prince | Leaders who have developed qualifying ring members |
| Executive | L10–L12 | Crown Prince | Senior leaders with substantial network development |
| Legacy | L13–L15 | King | Top-tier leaders eligible for coronation |

### E.2 K-Level Requirements Summary

| K-Level | Tier | K-Point Threshold | Direct Referrals | Ring 1 Min K-Level | Leadership Developed | Trust Score |
|---|---|---|---|---|---|---|
| 1 | Foundation | 0 | 0 | 0 | 0 | 0.00 |
| 2 | Foundation | 100 | 3 | 0 | 0 | 10.00 |
| 3 | Growth | 300 | 5 | 1 | 0 | 20.00 |
| 4 | Growth | 600 | 8 | 1 | 0 | 25.00 |
| 5 | Growth | 1,000 | 12 | 2 | 0 | 30.00 |
| 6 | Growth | 2,000 | 15 | 2 | 0 | 35.00 |
| 7 | Leadership | 4,000 | 20 | 3 | 1 | 40.00 |
| 8 | Leadership | 7,000 | 25 | 3 | 2 | 45.00 |
| 9 | Leadership | 12,000 | 30 | 4 | 3 | 50.00 |
| 10 | Executive | 20,000 | 40 | 4 | 5 | 55.00 |
| 11 | Executive | 35,000 | 50 | 5 | 8 | 60.00 |
| 12 | Executive | 60,000 | 60 | 5 | 12 | 65.00 |
| 13 | Legacy | 100,000 | 80 | 5 | 20 | 70.00 |
| 14 | Legacy | 200,000 | 100 | 5 | 30 | 75.00 |
| 15 | Legacy | 500,000 | 120 | 5 | 50 | 80.00 |

**Note:** The values above are illustrative and aligned with the structure defined in KR-1 KR-LVL-009. The authoritative values are defined in KR-1 v3.0 and must be verified against the source document before production deployment. The `kr_rule_id` column in `krw.klevel_definitions` traces each value to its governing KR-1 rule.

### E.3 Ring Requirements (Full Matrix)

Each K-Level has ring requirements across Rings 1–5, specifying both the minimum K-Level of qualifying members and the minimum count of qualifying members in each ring. See the seed data in Chapter 21 (Section 21.6.1) for the complete ring requirements for all 15 levels.

---

## Appendix F — Engine Schema Reference

### F.1 Schema Summary

| Schema | Engine | Tables | Key Tables | Chapter |
|---|---|---|---|---|
| idm | Identity | 4 | accounts, kyc_verifications, sessions, mfa_enrollments | Ch.6 |
| tru | Trust | 5 | trust_scores, trust_signals, trust_history, trust_recoveries, trust_gate_thresholds | Ch.7 |
| com | Commerce | 17 | vendors, stores, products, orders, commerce_settlements | Ch.8 |
| svc | Services | 15 | providers, service_listings, contracts, service_settlements | Ch.9 |
| krw | K-Rewards | 14 | kpoints_ledger, klevel_definitions, reward_cycles, reward_distributions | Ch.10 |
| wal | Wallet/Payments | 6 | wallets, wallet_transactions, settlements, reserve_holdings | Ch.11 |
| msg | Communication | 5 | notifications, messages, announcements | Ch.12 |
| int | Intelligence | 4 | behavioral_signals, recommendations, fraud_signals, analytics_snapshots | Ch.13 |
| adm | Administration | 7 | governance_reviews, sanctions, appeals, compliance_flags | Ch.14 |
| igr | Integration | 10 | partners, api_clients, api_credentials, webhook_endpoints | Ch.15 |
| lrn | Learning | 24 | courses, programmes, enrollments, assessments, certificates | Ch.16 |
| graph | Network Graph | 6 | graph_nodes, graph_edges, ring_memberships, leadership_qualifications | Ch.17 |
| roy | Royal Identity | 4 | royal_identities, title_history, coronation_records | Ch.18 |
| econ | 90/10 Accounting | 7 | source_transactions, reserve_allocations, cycle_reconciliations | Ch.19 |
| shared | Shared Infrastructure | 6 | audit_log, outbox, event_store, idempotency_keys | Ch.5 |
| **Total** | **15 schemas** | **~140 tables** | | |

### F.2 Cross-Engine Reference Map

The following table shows all cross-engine references (plain UUID columns, no foreign keys):

| From Schema | From Table | From Column | To Schema | To Table | To Column |
|---|---|---|---|---|---|
| idm | accounts | referred_by | idm | accounts | account_id |
| tru | trust_scores | account_id | idm | accounts | account_id |
| com | vendors | owner_account_id | idm | accounts | account_id |
| com | orders | account_id | idm | accounts | account_id |
| com | commerce_settlements | settlement_id | wal | settlements | settlement_id |
| svc | providers | account_id | idm | accounts | account_id |
| svc | service_settlements | settlement_id | wal | settlements | settlement_id |
| krw | kpoints_ledger | account_id | idm | accounts | account_id |
| krw | kpoints_ledger | evidence_ref | com/svc/lrn/igr | various | various |
| wal | wallets | account_id | idm | accounts | account_id |
| wal | settlements | source_transaction_id | econ | source_transactions | source_transaction_id |
| wal | reserve_holdings | source_transaction_id | econ | source_transactions | source_transaction_id |
| graph | graph_nodes | account_id | idm | accounts | account_id |
| graph | ring_memberships | leader_account_id | idm | accounts | account_id |
| graph | ring_memberships | member_account_id | idm | accounts | account_id |
| graph | leadership_qualifications | cycle_id | krw | reward_cycles | cycle_id |
| roy | royal_identities | account_id | idm | accounts | account_id |
| econ | source_transactions | source_entity_id | com/svc/lrn/igr | various | various |
| econ | reserve_allocations | reserve_holding_id | wal | reserve_holdings | reserve_id |
| econ | distribution_entries | wallet_transaction_id | wal | wallet_transactions | wallet_transaction_id |
| econ | distribution_entries | settlement_id | wal | settlements | settlement_id |
| econ | settlement_links | wallet_settlement_id | wal | settlements | settlement_id |
| econ | cycle_reconciliations | cycle_id | krw | reward_cycles | cycle_id |
| igr | partner_transactions | settlement_id | wal | settlements | settlement_id |
| lrn | learning_settlements | settlement_id | wal | settlements | settlement_id |

### F.3 Database Role Summary

| Role | Purpose | Schemas Accessed | RLS |
|---|---|---|---|
| app_service | Application service account | All engine schemas + shared | Subject to RLS |
| admin_role | Database administrator | All schemas | Bypasses RLS |
| readonly_role | Reporting/BI | All schemas (SELECT only) | Subject to RLS |
| migration_role | Migration runner | All schemas (DDL) | N/A (DDL only) |
| replication_role | Read replica | Primary (REPLICATION) | N/A |
| backup_role | Backup service | All schemas (pg_dump) | N/A |
| idm_service | Identity engine service | idm, shared | Subject to RLS |
| com_service | Commerce engine service | com, shared | Subject to RLS |
| svc_service | Services engine service | svc, shared | Subject to RLS |
| krw_service | K-Rewards engine service | krw, shared | Subject to RLS |
| wal_service | Wallet engine service | wal, shared | Subject to RLS |
| msg_service | Communication engine service | msg, shared | Subject to RLS |
| int_service | Intelligence engine service | int, shared | Subject to RLS |
| adm_service | Administration engine service | adm, shared | Subject to RLS |
| igr_service | Integration engine service | igr, shared | Subject to RLS |
| lrn_service | Learning engine service | lrn, shared | Subject to RLS |
| graph_service | Network graph service | graph, shared | Subject to RLS |
| roy_service | Royal Identity service | roy, shared | Subject to RLS |
| econ_service | 90/10 Accounting service | econ, shared | Subject to RLS |

---

*End of Database Design Document*
