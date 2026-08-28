# K-NETWORK Software Design Document

---

## DOCUMENT CONTROL BLOCK — SDD-1

### Document Control Elements

| Field | Value |
|---|---|
| **Document ID** | SDD-1 |
| **Document Title** | Software Design Document — K-NETWORK Platform |
| **Version Number** | 1.0 |
| **Status** | Draft for Governance Review |
| **Date of Issue** | 26 August 2026 |
| **Author** | K-NETWORK Architecture & Engineering Team |
| **Reviewer** | K-NETWORK Architecture Review Board |
| **Approver** | K-NETWORK Executive Authority |
| **Classification** | Confidential — Internal Governance |
| **Document Type** | Software Design Document |
| **Governing Authority** | PLC-1 v2.0 — Platform Constitution |
| **Parent Documents** | PLC-1 v2.0; KR-1 v3.0; BRD-1 v1.0; SRS-1 v2.0; SAD-1 v1.0 |
| **Review Cycle** | On-change + annual verification |
| **Next Scheduled Review** | August 2027 |
| **Related Documents** | PLC-1, KR-1, BRD-1, SRS-1, SAD-1, GOV-0, CMP-0, LEARN-AD-1, DDD-1, API-1, UXDS-1 |

### Version History

| Version | Date | Author | Description of Changes | Status |
|---|---|---|---|---|
| 0.1–0.9 | 2026-08 | K-NETWORK Team | Prior incremental drafts (10-engine scope) | Superseded |
| 1.0 | 2026-08-26 | K-NETWORK Architecture & Engineering Team | Complete rebuild: eleven-engine design (Learning as Engine #11); implementation-level components, data models, algorithms, workflows, state machines, sequence diagrams; cross-cutting design controls; leadership design; Royal Identity; Engine Extension Framework; traceability; line-by-line audited | Draft for Review |

### Approval & Sign-Off

| Role | Name | Signature | Date | Approval Status |
|---|---|---|---|---|
| Author | K-NETWORK Architecture & Engineering Team | ________________________ | 2026-08-26 | — |
| Reviewer | K-NETWORK Architecture Review Board | ________________________ | ____________ | Pending |
| Approver | K-NETWORK Executive Authority | ________________________ | ____________ | Pending |

> **Note:** SDD-1 attains **Approved** status only when the Approver's line is signed with an **Approved** or **Approved with Comments** status. Until then, the document remains in **Draft** status and serves as the directional reference for engineering implementation.

### Distribution List

| Role | Format |
|---|---|
| K-NETWORK Executive Leadership | Digital |
| K-NETWORK Architecture Review Board | Digital |
| Software Architects & Engineers | Digital |
| Product Managers & Product Owners | Digital |
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
| SRS-1 | Software Requirements Specification v2.0 | Defines the complete functional and non-functional software requirements (151 requirements) that SDD-1 implements. |
| SAD-1 | Software Architecture Document v1.0 | Defines the complete software architecture that SDD-1 translates into implementation-level design. |
| GOV-0 | Consolidated Governance Framework | Defines the hierarchy, decision-making, change, conflict, compliance, audit, and review mechanisms. |
| CMP-0 | Compliance & Regulatory Framework | Defines data protection, financial compliance, consumer protection, IP, and accessibility requirements. |
| LEARN-AD-1 | Learning Architecture Decision | Approved decision adding Learning as Core Engine #11. |
| DDD-1 | Database Design Document *(planned)* | Defines the data model and schema supporting the platform. |
| API-1 | API Specification *(planned)* | Defines internal and external API contracts. |
| UXDS-1 | UI/UX Design Specification *(planned)* | Defines the user experience and interface design standards. |

### Document Control Policy

This is a **Controlled Document**. The following control terms apply:

1. **Controlled Status.** SDD-1 is a controlled document maintained under the K-NETWORK Document Control regime. Only the version held in the Document Control Repository is authoritative; all other copies are reference copies.
2. **Unauthorized Reproduction or Distribution.** Unauthorized reproduction, redistribution, or excerpting of this document, in whole or in part, is prohibited. Distribution is limited to the roles identified in the Distribution List above.
3. **Review Cycle.** This document shall be reviewed no less frequently than **on-change + annually**, or as directed by the governing authority (PLC-1). Off-cycle reviews may be triggered by governance decisions or material changes to related documents (SRS-1, SAD-1, KR-1, LEARN-AD-1).
4. **Governing Authority.** This document is subordinate to **PLC-1 — Platform Constitution**, consistent with **SAD-1** (architecture), **SRS-1** (requirements), **BRD-1**, and **KR-1** (for reward-related design). Where this document conflicts with the Constitution, the Constitution prevails unless the conflict is resolved through formal governance.
5. **Traceability.** All design decisions in this document must be traceable to their source in SAD-1 (architecture), SRS-1 (requirements), PLC-1, BRD-1, KR-1, CMP-0, or GOV-0. Each design component cites the specific source document and the requirements or architectural components it implements.
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
- Chapter 2 — Design Principles and Conventions
- Chapter 3 — Cross-Cutting Design Controls

**Part II — Shared Platform Design (Chapters 4–5)**
- Chapter 4 — Shared Infrastructure Design
- Chapter 5 — Cross-Engine Communication Design

**Part III — Engine Designs (Chapters 6–16)**
- Chapter 6 — Identity Engine Design
- Chapter 7 — Trust Engine Design
- Chapter 8 — Commerce Engine Design
- Chapter 9 — Services Engine Design
- Chapter 10 — K-Rewards Engine Design
- Chapter 11 — Wallet/Payments Engine Design
- Chapter 12 — Communication Engine Design
- Chapter 13 — Intelligence Engine Design
- Chapter 14 — Administration Engine Design
- Chapter 15 — Integration Engine Design
- Chapter 16 — Learning Engine Design

**Part IV — Leadership and Royal Identity Design (Chapters 17–18)**
- Chapter 17 — Leadership Qualification Design
- Chapter 18 — Royal Identity Design

**Part V — Engine Extension Framework (Chapter 19)**
- Chapter 19 — Engine Extension Framework Design

**Part VI — Cross-Cutting Design and Traceability (Chapters 20–21)**
- Chapter 20 — Security and Performance Design
- Chapter 21 — Traceability Matrices

**Appendices**
- Appendix A — Design Pattern Catalogue
- Appendix B — Glossary
- Appendix C — Acronyms
- Appendix D — Revenue Waterfall Reference
- Appendix E — K-Level Progression Matrix Reference
- Appendix F — Engine Domain Code Reference

---

## PREAMBLE

The K-NETWORK Software Design Document (SDD-1) translates the software architecture established in the Software Architecture Document (SAD-1 v1.0) into implementation-level design. It defines the components, data models, algorithms, workflows, state machines, sequence diagrams, error handling, security controls, and performance controls that software engineers implement to build the K-NETWORK platform.

SDD-1 occupies Tier 4 in the K-NETWORK governance document hierarchy established in PLC-1 v2.0 Chapter 32:

```
PLC-1 (Constitution) → KR-1 (K-Rewards) / GOV-0 (Governance) → BRD-1 (Business) → SRS-1 (Requirements) → SAD-1 (Architecture) → SDD-1 (Design) → Code
```

SDD-1 is subordinate to SAD-1 v1.0 (the Software Architecture Document), SRS-1 v2.0 (the Software Requirements Specification), BRD-1 v1.0 (the Business Requirements Document), KR-1 v3.0 (for reward-related design), and PLC-1 v2.0 (the Platform Constitution). Design (SDD-1) constrains implementation (code). Each design component must remain traceable to its architectural parent (SAD-1) and to its requirement parent (SRS-1).

**This version (1.0) provides implementation-level design for all eleven current Core Platform Engines** — Identity, Trust, Commerce, Services, K-Rewards, Wallet/Payments, Communication, Intelligence, Administration, Integration, and Learning. Learning is incorporated as Core Engine #11 per the approved Learning Architecture Decision (LEARN-AD-1) and PLC-1 v2.0 Chapter 30. This SDD does NOT create a separate Learning design; Learning is designed within the single platform design, consuming shared foundations.

For all reward-related design, SDD-1 is subordinate to KR-1, the sole authoritative source of K-Rewards policy. Every K-Points, K-Rings, K-Levels, reward calculation, and reward distribution design component must trace to a rule defined in KR-1 and to an architectural component defined in SAD-1. In any conflict between SDD-1 and KR-1 on reward-related matters, SDD-1 must be corrected to restore alignment. In any conflict between SDD-1 and SAD-1, SAD-1 prevails and SDD-1 must be corrected.

All numerical K-Rewards values — K-Point values, category caps, ring weights, density gates, K-Level thresholds, multipliers, allocation rates, cap rates, minimum thresholds — are **GOVERNANCE PARAMETERS** owned by KR-1. SDD-1 references the KR-1 rule IDs that define them and designs the algorithms and data structures that consume them as configuration; SDD-1 does not invent or fix these values.

K-NETWORK is designed as **one platform** containing eleven domain engines — not as eleven independent applications. The engines share common foundations and interact through defined synchronous and asynchronous contracts. This SDD provides the implementation-level design for each engine's internal components, data models, algorithms, and workflows, grounded in the architecture defined in SAD-1.

This is not merely a technical document; it is the design expression of K-NETWORK's constitutional commitment to build a trusted, integrated, rewarding ecosystem where genuine contribution is recognized and growth is shared.

---

# Part I — Foundation

## Chapter 1 — Introduction and Document Purpose

### 1.1 Purpose of This Document

The purpose of the Software Design Document (SDD-1) is to translate the software architecture defined in SAD-1 v1.0 into implementation-level design. SDD-1 defines the internal components, data models, algorithms, workflows, state machines, sequence diagrams, error handling, security controls, and performance controls that software engineers implement to build the K-NETWORK platform.

SDD-1 serves the following purposes:

1. **Translate architecture into design.** SDD-1 takes each architectural component defined in SAD-1 and specifies its internal design — the sub-components, data structures, algorithms, and workflows that implement it.
2. **Define data models.** SDD-1 defines the data entities, fields, relationships, and constraints for each engine's data store.
3. **Define algorithms.** SDD-1 specifies the algorithms for critical calculations — K-Points accrual, ring contribution, K-Level promotion, Reward Share, 90/10 enforcement, settlement, reconciliation.
4. **Define workflows and state machines.** SDD-1 specifies the state machines and workflows for entity lifecycles — orders, contracts, courses, K-Level promotions, reward cycles.
5. **Define sequence diagrams.** SDD-1 specifies the inter-component and inter-engine interaction sequences for critical operations.
6. **Define cross-cutting controls.** SDD-1 specifies the authorization, validation, rate limiting, audit, caching, concurrency, idempotency, retries, timeout, failure handling, observability, and security boundary controls for every design.
7. **Constrain implementation.** SDD-1 constrains the code implementation. Engineers implement what SDD-1 specifies; deviations require design review.
8. **Provide traceability.** SDD-1 traces every design component to its architectural parent (SAD-1) and its requirement parent (SRS-1).

### 1.2 Audience

SDD-1 is intended for software engineers, software architects, DevOps and site reliability engineers, security architects, quality assurance engineers, and technical product managers.

### 1.3 Document Structure

SDD-1 is organized into six Parts:

- **Part I — Foundation** establishes the document's purpose, design principles, conventions, and cross-cutting design controls.
- **Part II — Shared Platform Design** defines the shared infrastructure and cross-engine communication design.
- **Part III — Engine Designs** defines the implementation-level design for each of the eleven Core Engines.
- **Part IV — Leadership and Royal Identity Design** defines the leadership qualification and Royal Identity design.
- **Part V — Engine Extension Framework** defines the reusable framework for adding future engines.
- **Part VI — Cross-Cutting Design and Traceability** defines the security and performance design and the traceability matrices.

### 1.4 Relationship to the Implementation Chain

SDD-1 sits between architecture and code in the technology implementation chain:

```
PLC-1 (Constitution) → KR-1 (K-Rewards Policy) → BRD-1 (Business) → SRS-1 (Requirements) → SAD-1 (Architecture) → SDD-1 (Design) → Code
```

Design (SDD-1) constrains implementation (code). Each design component must remain traceable to its architectural parent (SAD-1) and to its requirement parent (SRS-1). For reward-related design, every design component in SDD-1 must cite the specific KR-1 rule ID, SRS-1 requirement ID, and SAD-1 architectural component it implements.

### 1.5 Design Notation Conventions

SDD-1 uses the following notation conventions:

| Notation | Usage |
|---|---|
| **Data model tables** | Entity definitions with fields, types, constraints |
| **Algorithm pseudocode** | Step-by-step logic for critical calculations |
| **State machine diagrams** | ASCII state machines with states and transitions |
| **Sequence diagrams** | ASCII sequence diagrams with participants and messages |
| **Workflow diagrams** | ASCII flow diagrams for multi-step processes |
| **Component diagrams** | ASCII diagrams showing component relationships |

### 1.6 Governing Requirement Traceability

PLC-1 v2.0 Chapter 32 (Governance); GOV-0 Section 1.1 (Governance Hierarchy); SRS-1 v2.0 Chapter 1 (Introduction); SAD-1 v1.0 Chapter 1 (Introduction and Document Purpose).

---

## Chapter 2 — Design Principles and Conventions

### 2.1 Design Principles

SDD-1 translates the ten architecture principles from SAD-1 Chapter 2 into design-level principles:

1. **One Ecosystem.** All engines share common foundations. Design components reference shared infrastructure; no engine duplicates shared capabilities.
2. **Domain Engine Boundaries.** Each engine's design is self-contained. No engine design directly accesses another engine's data store. Cross-engine data access is through API calls or events.
3. **Shared Foundations.** Design components consume shared services (Event Bus, Cache, Search, Secrets Manager, Audit Log) through defined interfaces.
4. **API-First Interoperability.** Every inter-engine and external interface is designed as an API contract first, then implemented.
5. **Zero Trust Security.** Every design component enforces authentication, authorization, and encryption. No implicit trust.
6. **Eventual Consistency with Transactional Integrity.** Non-critical data is eventually consistent; financial data is strongly consistent (ACID).
7. **Extensibility Through Governance.** Design components follow the Engine Contract template; future engines plug in without restructuring.
8. **Observability by Design.** Every design component emits metrics, logs, and traces.
9. **Resilience and Graceful Degradation.** Every design component handles failures gracefully and degrades rather than fails catastrophically.
10. **Compliance and Privacy by Design.** Every design component enforces data protection, privacy, and compliance requirements.

### 2.2 Design Conventions

#### 2.2.1 Component Naming

Components are named by engine and function: `{Engine} — {Function} Service`. Example: `Commerce — Order Service`.

#### 2.2.2 Data Model Convention

Data entities are defined in tables with the following columns:

| Column | Description |
|---|---|
| **Field** | The field name |
| **Type** | The data type (string, integer, decimal, boolean, timestamp, UUID, enum, JSON) |
| **Constraints** | Constraints (PK, FK, unique, not null, default, indexed) |
| **Description** | The field's purpose |

#### 2.2.3 Algorithm Convention

Algorithms are written in structured pseudocode:

```
ALGORITHM: {Name}
INPUT: {inputs}
OUTPUT: {outputs}
BEGIN
    {step 1}
    {step 2}
    ...
END
```

#### 2.2.4 State Machine Convention

State machines are drawn as:

```
[State A] --event/condition--> [State B]
```

#### 2.2.5 Sequence Diagram Convention

Sequence diagrams are drawn as:

```
Participant A    Participant B    Participant C
    |                 |                 |
    |--message()---->|                 |
    |                 |--message()---->|
    |                 |<--response()---|
    |<--response()---|                 |
```

#### 2.2.6 Error Handling Convention

Every operation specifies error handling:

| Error | Condition | Action |
|---|---|---|
| `{ErrorName}` | {condition} | {action — retry, fail, circuit break, DLQ} |

#### 2.2.7 Traceability Convention

Every design component cites its traceability:

```
Implements: SRS-{Domain}-{###} (requirement), SAD-1 Ch.{#} (architecture), KR-{Rule} (policy)
```

### 2.3 Precedence Hierarchy

Within the K-NETWORK documentation suite, the following precedence hierarchy applies to SDD-1:

1. **Applicable law** — always prevails.
2. **PLC-1 (Platform Constitution v2.0)** — supreme internal governance document.
3. **KR-1 (K-Rewards Framework v3.0)** — governs the K-Rewards domain.
4. **BRD-1 (Business Requirements Document v1.0)** — defines business requirements.
5. **SRS-1 (Software Requirements Specification v2.0)** — defines software requirements.
6. **SAD-1 (Software Architecture Document v1.0)** — defines software architecture.
7. **SDD-1 (this document)** — governs code implementation.

Where any provision of SDD-1 conflicts with SAD-1, SAD-1 prevails and SDD-1 must be corrected. Where any reward-related provision conflicts with KR-1, KR-1 prevails. Where any provision conflicts with SRS-1, the conflict is resolved through the design review process.

### 2.4 Governing Requirement Traceability

SAD-1 v1.0 Chapter 2 (Architecture Principles); SRS-1 v2.0 Chapter 2 (Scope); GOV-0 Section 1.1 (Governance Hierarchy); KR-1 KR-FND-005 (Downstream Conformance).

---

## Chapter 3 — Cross-Cutting Design Controls

### 3.1 Overview

Every design in SDD-1 must specify the following cross-cutting controls. This chapter defines the standard design patterns and conventions for each control. Individual engine designs reference these patterns and specify engine-specific details where they differ.

### 3.2 Authorization

#### 3.2.1 Design Pattern

Every operation is authorized before execution. Authorization follows a layered model:

```
Authorization Layers:
=====================

Layer 1: API Gateway (coarse-grained)
    └── Is the caller authenticated? Does the caller have a valid token?
    └── Is the request within rate limits?

Layer 2: Engine API (fine-grained RBAC)
    └── Does the caller's role permit this operation?
    └── Is the caller authorized for this specific resource?

Layer 3: Data Layer (row-level security)
    └── Is the caller authorized to access this specific data row?
    └── (e.g., a participant can only access their own data)

Layer 4: Attribute-Based (contextual)
    └── Does the caller meet attribute requirements?
    └── (e.g., Trust Score ≥ 40 for vendor eligibility, K-Level ≥ 4 for Royal Identity)
```

#### 3.2.2 Authorization Decision

```
ALGORITHM: AuthorizeOperation
INPUT: callerId, role, resource, action, context
OUTPUT: ALLOW | DENY (with reason)
BEGIN
    // Layer 1: Gateway (assumed passed before reaching engine)

    // Layer 2: RBAC
    IF NOT role.permits(action, resource) THEN
        RETURN DENY("RBAC: role not permitted")
    END IF

    // Layer 3: Resource ownership
    IF resource.hasOwner AND resource.owner != callerId AND role != ADMIN THEN
        RETURN DENY("RLS: not resource owner")
    END IF

    // Layer 4: ABAC (contextual)
    IF action.requiresTrust AND caller.trustScore < action.minTrust THEN
        RETURN DENY("ABAC: trust score below threshold")
    END IF
    IF action.requiresKLevel AND caller.kLevel < action.minKLevel THEN
        RETURN DENY("ABAC: K-Level below threshold")
    END IF
    IF action.requiresKYC AND caller.kycTier < action.minKYC THEN
        RETURN DENY("ABAC: KYC tier below threshold")
    END IF
    IF caller.isSanctioned AND action.blockedBySanctions THEN
        RETURN DENY("ABAC: participant sanctioned")
    END IF

    RETURN ALLOW
END
```

#### 3.2.3 Design Specification

Every engine design specifies:
- The roles that can perform each operation.
- The resource ownership rules.
- The ABAC thresholds (Trust, K-Level, KYC) where applicable.
- The sanction checks where applicable.

### 3.3 Validation

#### 3.3.1 Design Pattern

All inputs are validated before processing. Validation follows a defense-in-depth model:

```
Validation Layers:
===================

Layer 1: Schema Validation
    └── Does the input match the expected schema? (type, format, required fields)

Layer 2: Business Rule Validation
    └── Does the input satisfy business rules? (range, cross-field, domain constraints)

Layer 3: State Validation
    └── Is the operation valid in the current state? (e.g., can't ship a cancelled order)

Layer 4: Security Validation
    └── Is the input safe? (no injection, no XSS, no path traversal)
```

#### 3.3.2 Design Specification

Every engine design specifies:
- The schema validation rules for each input.
- The business rule validation rules.
- The state validation rules (tied to state machines).
- The security validation rules.

Validation failures return a structured error response with an error code and message. No raw input reaches the business logic layer unvalidated.

### 3.4 Rate Limiting

#### 3.4.1 Design Pattern

Rate limiting is enforced at two levels:

| Level | Scope | Mechanism |
|---|---|---|
| **External** | Per partner, per API | Token bucket in Cache (Redis); enforced by API Gateway |
| **Internal** | Per engine, per operation | Token bucket in Cache (Redis); enforced by engine API |

#### 3.4.2 Token Bucket Algorithm

```
ALGORITHM: TokenBucket
INPUT: key, capacity, refillRate, requestCount
OUTPUT: ALLOW | DENY
BEGIN
    bucket = cache.get(key)
    IF bucket == NULL THEN
        bucket = {tokens: capacity, lastRefill: now()}
    END IF

    // Refill tokens based on elapsed time
    elapsed = now() - bucket.lastRefill
    tokensToAdd = elapsed * refillRate
    bucket.tokens = min(capacity, bucket.tokens + tokensToAdd)
    bucket.lastRefill = now()

    IF bucket.tokens >= requestCount THEN
        bucket.tokens -= requestCount
        cache.set(key, bucket)
        RETURN ALLOW
    ELSE
        cache.set(key, bucket)
        RETURN DENY
    END IF
END
```

#### 3.4.3 Design Specification

Every engine design specifies:
- The rate limits per operation (where applicable).
- The rate limit key (participant ID + operation, or partner ID + API).
- The response on rate limit exceeded (HTTP 429 with Retry-After header).

### 3.5 Audit

#### 3.5.1 Design Pattern

Every security-relevant and business-relevant operation produces an audit record. Audit records are written to the append-only Audit Log (owned by the Administration Engine).

```
Audit Record Structure:
========================

{
    auditId: UUID,
    timestamp: ISO-8601,
    engine: "COMMERCE",
    operation: "CreateOrder",
    actorId: "participant-123",
    actorRole: "PARTICIPANT",
    resourceType: "Order",
    resourceId: "order-456",
    action: "CREATE",
    outcome: "SUCCESS" | "FAILURE",
    details: { ... },  // operation-specific details
    correlationId: "corr-789",  // for distributed tracing
    previousHash: "sha256...",  // hash chain for tamper-evidence
    recordHash: "sha256(timestamp + engine + operation + ... + previousHash)"
}
```

#### 3.5.2 Audit Writing

```
ALGORITHM: WriteAuditRecord
INPUT: engine, operation, actorId, actorRole, resourceType, resourceId, action, outcome, details
OUTPUT: auditId
BEGIN
    auditId = generateUUID()
    timestamp = now()
    previousHash = auditLog.getLastHash()
    recordHash = sha256(timestamp + engine + operation + actorId + 
                        resourceType + resourceId + action + outcome + 
                        details + previousHash)
    record = {auditId, timestamp, engine, operation, actorId, actorRole,
              resourceType, resourceId, action, outcome, details,
              previousHash, recordHash}
    auditLog.append(record)  // append-only, atomic
    RETURN auditId
END
```

#### 3.5.3 Design Specification

Every engine design specifies:
- Which operations produce audit records.
- The audit record details for each operation.
- The retention period (per CMP-0).

### 3.6 Caching

#### 3.6.1 Design Pattern

Caching is used for read-heavy data to reduce latency and database load. Cache keys are namespaced per engine: `{engine}:{entity}:{id}`.

```
Cache-Aside Pattern:
=====================

ALGORITHM: CacheAside
INPUT: key, loader
OUTPUT: value
BEGIN
    value = cache.get(key)
    IF value != NULL THEN
        RETURN value  // cache hit
    END IF

    // cache miss
    value = loader()  // load from database
    IF value != NULL THEN
        cache.set(key, value, ttl)  // cache with TTL
    END IF
    RETURN value
END
```

#### 3.6.2 Cache Invalidation

Cache invalidation is event-driven. When data changes, the owning engine publishes an event; consumers invalidate their cache entries.

```
ALGORITHM: InvalidateCache
INPUT: key
BEGIN
    cache.delete(key)
    // Also delete any derived keys (e.g., search indices)
    eventBus.publish({type: "CacheInvalidated", key: key})
END
```

#### 3.6.3 Design Specification

Every engine design specifies:
- Which entities are cached.
- The cache key format.
- The cache TTL.
- The cache invalidation triggers.

### 3.7 Concurrency

#### 3.7.1 Design Pattern

Concurrency control prevents race conditions in shared data access. Two patterns are used:

**Optimistic Concurrency Control (OCC):** Used for low-contention operations. Each entity has a `version` field. On update, the version is checked; if it has changed, the update fails and the client retries.

```
ALGORITHM: OptimisticUpdate
INPUT: entity, newValues, expectedVersion
OUTPUT: SUCCESS | CONFLICT
BEGIN
    current = db.get(entity.id)
    IF current.version != expectedVersion THEN
        RETURN CONFLICT  // someone else modified it
    END IF
    newValues.version = expectedVersion + 1
    rowsAffected = db.update(entity.id, newValues, WHERE version = expectedVersion)
    IF rowsAffected == 0 THEN
        RETURN CONFLICT
    END IF
    RETURN SUCCESS
END
```

**Pessimistic Concurrency Control (PCC):** Used for high-contention operations (e.g., inventory reservation). Uses row-level locking.

```
ALGORITHM: PessimisticUpdate
INPUT: entity, newValues
BEGIN
    db.beginTransaction()
    db.lock(entity.id)  // SELECT ... FOR UPDATE
    current = db.get(entity.id)
    // perform update
    db.update(entity.id, newValues)
    db.commit()
END
```

#### 3.7.2 Design Specification

Every engine design specifies:
- The concurrency control pattern for each operation (OCC or PCC).
- The lock scope for pessimistic operations.
- The retry strategy for optimistic conflicts.

### 3.8 Idempotency

#### 3.8.1 Design Pattern

Idempotency ensures that processing an operation multiple times has the same effect as processing it once. This is critical for at-least-once event delivery and retry scenarios.

```
ALGORITHM: IdempotentOperation
INPUT: idempotencyKey, operation, payload
OUTPUT: result
BEGIN
    existing = idempotencyStore.get(idempotencyKey)
    IF existing != NULL THEN
        IF existing.status == "COMPLETED" THEN
            RETURN existing.result  // return cached result
        ELSE
            // operation in progress; wait or return in-progress
            RETURN IN_PROGRESS
        END IF
    END IF

    idempotencyStore.set(idempotencyKey, {status: "IN_PROGRESS"})
    result = execute(operation, payload)
    idempotencyStore.set(idempotencyKey, {status: "COMPLETED", result: result})
    RETURN result
END
```

The idempotency store uses the Cache (Redis) with a TTL sufficient to cover the retry window. For financial operations, the idempotency record is persisted in the database (not just cache) for durability.

#### 3.8.2 Idempotency Key Sources

| Operation Type | Idempotency Key Source |
|---|---|
| Event processing | Event ID (unique per event) |
| API calls | Client-provided idempotency key or request hash |
| Financial operations | Transaction ID |
| K-Points accrual | Evidence reference (evidenceRef) |

#### 3.8.3 Design Specification

Every engine design specifies:
- Which operations are idempotent.
- The idempotency key source.
- The idempotency store (cache or database).

### 3.9 Retries

#### 3.9.1 Design Pattern

Transient failures are retried with exponential backoff and jitter.

```
ALGORITHM: RetryWithBackoff
INPUT: operation, maxRetries, baseDelay, maxDelay
OUTPUT: result | FAILURE
BEGIN
    FOR attempt = 1 TO maxRetries DO
        TRY
            result = operation()
            RETURN result
        CATCH transientError
            IF attempt == maxRetries THEN
                THROW FAILURE
            END IF
            delay = min(maxDelay, baseDelay * 2^attempt) + random(0, baseDelay)
            sleep(delay)
        END CATCH
    END FOR
END
```

Retries are used for:
- Network timeouts to other engines.
- Database connection failures.
- Event Bus publish failures.
- External API call failures (via Integration Engine).

Retries are NOT used for:
- Non-transient errors (validation failures, authorization denials).
- Operations that have side effects and are not idempotent (unless idempotency is ensured).

#### 3.9.2 Design Specification

Every engine design specifies:
- Which operations use retries.
- The max retry count.
- The base and max delay.
- The retry condition (which errors are retriable).

### 3.10 Timeout

#### 3.10.1 Design Pattern

Every operation has a timeout. Timeouts prevent indefinite waits and cascading failures.

| Operation Type | Default Timeout |
|---|---|
| Inter-engine synchronous API call | 5 seconds |
| Database query | 3 seconds |
| External API call (via Integration Engine) | 10 seconds |
| Cache operation | 1 second |
| Event publish | 5 seconds |

#### 3.10.2 Design Specification

Every engine design specifies:
- The timeout for each operation.
- The action on timeout (retry, fail, circuit break).

### 3.11 Failure Handling

#### 3.11.1 Design Pattern

Failures are handled according to the failure type:

| Failure Type | Handling |
|---|---|
| **Transient** (network blip, temporary unavailability) | Retry with backoff |
| **Persistent** (service down, database unavailable) | Circuit breaker; fail fast; log; alert |
| **Validation** (invalid input) | Reject with structured error; no retry |
| **Authorization** (not permitted) | Reject with structured error; no retry; audit |
| **Business rule** (state violation) | Reject with structured error; no retry |
| **Data integrity** (constraint violation) | Reject; log; investigate |
| **Partial failure** (multi-step operation) | Compensating transaction or saga |

#### 3.11.2 Circuit Breaker

```
ALGORITHM: CircuitBreaker
INPUT: operation
OUTPUT: result | CIRCUIT_OPEN
BEGIN
    state = cb.getState()
    IF state == OPEN THEN
        IF now() - cb.openedAt > cb.cooldown THEN
            cb.setState(HALF_OPEN)
        ELSE
            RETURN CIRCUIT_OPEN  // fail fast
        END IF
    END IF

    TRY
        result = operation()
        cb.recordSuccess()
        IF state == HALF_OPEN THEN
            cb.setState(CLOSED)
        END IF
        RETURN result
    CATCH error
        cb.recordFailure()
        IF cb.failureCount >= cb.threshold THEN
            cb.setState(OPEN)
            cb.setOpenedAt(now())
        END IF
        THROW error
    END CATCH
END
```

#### 3.11.3 Saga Pattern

For multi-step operations that span engines, the Saga pattern is used. Each step has a compensating action that undoes it if a later step fails.

```
Saga Pattern:
==============

Step 1: ReserveInventory (Commerce)     → Compensate: ReleaseInventory
Step 2: ProcessPayment (Wallet)          → Compensate: ReversePayment
Step 3: CreateOrder (Commerce)          → Compensate: CancelOrder
Step 4: AccrueKPoints (K-Rewards)        → Compensate: ReverseKPoints

If Step 3 fails:
    Compensate Step 2: ReversePayment
    Compensate Step 1: ReleaseInventory
    Return failure to caller
```

#### 3.11.4 Design Specification

Every engine design specifies:
- The failure handling for each operation.
- Whether the operation participates in a saga (and its compensating action).
- The circuit breaker configuration for inter-engine calls.

### 3.12 Observability

#### 3.12.1 Design Pattern

Every design component emits observability signals:

| Signal | What | How |
|---|---|---|
| **Logs** | Structured events (INFO, WARN, ERROR) | JSON logs with correlation ID |
| **Metrics** | Counters, gauges, histograms | Prometheus format; collected every 15s |
| **Traces** | Distributed trace spans | OpenTelemetry; trace context propagated across engines |
| **Health** | Liveness and readiness | HTTP endpoints /health and /ready |

#### 3.12.2 Standard Metrics

Every engine emits:

| Metric | Type | Description |
|---|---|---|
| `requests_total` | Counter | Total requests by operation and status |
| `request_duration_seconds` | Histogram | Request latency by operation |
| `errors_total` | Counter | Total errors by type |
| `active_connections` | Gauge | Active database connections |
| `queue_depth` | Gauge | Event consumer queue depth |
| `circuit_breaker_state` | Gauge | Circuit breaker state (0=closed, 1=open, 2=half-open) |

#### 3.12.3 Correlation ID

Every request carries a correlation ID (generated at the API Gateway or provided by the caller). The correlation ID propagates through:
- Synchronous API calls (HTTP header `X-Correlation-Id`).
- Asynchronous events (event metadata field `correlationId`).
- Logs (field `correlationId`).
- Traces (trace context).

This enables end-to-end tracing of a request across all engines.

#### 3.12.4 Design Specification

Every engine design specifies:
- The custom metrics emitted (beyond standard metrics).
- The log categories and key events logged.
- The trace spans recorded.

### 3.13 Security Boundaries

#### 3.13.1 Design Pattern

Every design component enforces security at its boundary:

| Boundary | Control |
|---|---|
| **External → API Gateway** | TLS 1.3, authentication, WAF, rate limiting |
| **API Gateway → Engine** | mTLS (service mesh), service-to-service auth |
| **Engine → Engine** | mTLS, RBAC/ABAC, circuit breakers |
| **Engine → Data Store** | mTLS, database auth, encryption at rest, least-privilege DB roles |
| **Engine → Shared Service** | mTLS, service auth, secrets from Vault |

#### 3.13.2 Data Encryption

| Data State | Encryption |
|---|---|
| **In transit** | TLS 1.3 (external), mTLS (internal) |
| **At rest** | AES-256 database encryption |
| **Field-level** | AES-256 for sensitive fields (credentials, KYC evidence, payment data) |
| **Backups** | AES-256 encrypted backups |

#### 3.13.3 Design Specification

Every engine design specifies:
- The security boundary controls.
- The data classification and encryption requirements.
- The secrets consumed (from Vault).

### 3.14 Governing Requirement Traceability

SAD-1 v1.0 Chapter 24 (Security Architecture), Chapter 25 (Performance Architecture), Chapter 29 (Observability and DR); SRS-1 v2.0 Chapter 21 (NFR), SRS-NFR-001–014.

---

# Part II — Shared Platform Design

## Chapter 4 — Shared Infrastructure Design

### 4.1 Overview

The shared infrastructure provides platform-level capabilities consumed by all engines. This chapter defines the implementation-level design for each shared service, translating the architecture from SAD-1 Chapter 8 into design specifications.

### 4.2 Event Bus Design

#### 4.2.1 Purpose

The Event Bus (Apache Kafka, reference) provides asynchronous event distribution between engines and to external systems via the Integration Engine.

#### 4.2.2 Topic Design

Each event type has a dedicated topic. Topics are named `{engine}.{entity}.{event}` in snake_case:

| Topic | Publisher | Event | Consumers |
|---|---|---|---|
| `identity.account.registered` | Identity | AccountRegistered | Trust, K-Rewards, Wallet, Communication |
| `identity.account.verification_updated` | Identity | VerificationUpdated | Commerce, Services, Learning, Wallet |
| `identity.session.revoked` | Identity | SessionRevoked | All engines |
| `trust.score.updated` | Trust | TrustScoreUpdated | K-Rewards, Commerce, Services, Learning |
| `commerce.order.created` | Commerce | OrderCreated | Wallet, Communication |
| `commerce.order.delivered` | Commerce | OrderDelivered | Wallet, K-Rewards, Trust, Communication |
| `commerce.order.cancelled` | Commerce | OrderCancelled | Wallet, K-Rewards, Inventory |
| `commerce.refund.processed` | Commerce | RefundProcessed | K-Rewards, Trust, Wallet |
| `services.contract.accepted` | Services | ContractAccepted | Wallet, Communication |
| `services.milestone.accepted` | Services | MilestoneAccepted | Wallet, K-Rewards, Trust |
| `services.contract.completed` | Services | ContractCompleted | K-Rewards, Trust |
| `krewards.kpoints.accrued` | K-Rewards | KPointsAccrued | Communication |
| `krewards.klevel.promoted` | K-Rewards | KLevelPromoted | Royal Identity, Communication |
| `krewards.reward.distributed` | K-Rewards | RewardDistributed | Wallet, Communication, Integration |
| `krewards.kpoints.reversed` | K-Rewards | KPointsReversed | Trust, Communication |
| `krewards.ring.fraud_detected` | K-Rewards | RingFraudDetected | Trust, Administration |
| `wallet.payment.processed` | Wallet | PaymentProcessed | Commerce, Services, Learning |
| `wallet.settlement.executed` | Wallet | SettlementExecuted | K-Rewards, Communication |
| `wallet.refund.processed` | Wallet | RefundProcessed | K-Rewards, Trust |
| `wallet.reward.distributed` | Wallet | RewardDistributed | Communication, Integration |
| `wallet.reconciliation.completed` | Wallet | ReconciliationCompleted | Administration |
| `learning.course.completed` | Learning | CourseCompleted | K-Rewards, Communication, Certificate |
| `learning.enrollment.created` | Learning | EnrollmentCreated | Wallet, Communication |
| `intelligence.fraud.detected` | Intelligence | FraudSignalDetected | Trust, K-Rewards, Administration |
| `administration.sanction.applied` | Administration | SanctionApplied | K-Rewards, Trust, Commerce, Services, Learning, Identity |
| `integration.partner.transaction_received` | Integration | PartnerTransactionReceived | Wallet, K-Rewards |

#### 4.2.3 Event Message Structure

Every event message follows a standard envelope:

```
Event Message Envelope:
========================

{
    eventId: UUID,                    // unique event ID (for idempotency)
    eventType: "commerce.order.created",
    eventVersion: 1,                  // schema version
    timestamp: ISO-8601,
    publisher: "COMMERCE",
    correlationId: UUID,              // propagated from original request
    partitionKey: "participant-123",  // for ordering within a participant
    payload: { ... }                  // event-specific payload
}
```

#### 4.2.4 Partition Strategy

Topics are partitioned by `participantId` to ensure ordering within a participant's events. A participant's events are processed in order by a single consumer instance per consumer group.

#### 4.2.5 Consumer Design

Each consuming engine has a consumer group. The consumer:

1. **Polls** the topic for new events.
2. **Deserializes** the event using the schema from the schema registry.
3. **Checks idempotency** — if the event ID has been processed, skip.
4. **Processes** the event.
5. **Commits** the offset after successful processing.
6. **On failure:** retries up to maxRetries; if still failing, sends to DLQ.

```
ALGORITHM: ConsumeEvent
INPUT: topic, consumerGroup
BEGIN
    WHILE true DO
        events = kafka.poll(topic, consumerGroup, timeout=1000ms)
        FOR EACH event IN events DO
            TRY
                IF idempotencyStore.exists(event.eventId) THEN
                    kafka.commit(event.offset)
                    CONTINUE
                END IF
                process(event)
                idempotencyStore.set(event.eventId, {processedAt: now()})
                kafka.commit(event.offset)
            CATCH error
                retryCount = getRetryCount(event)
                IF retryCount < maxRetries THEN
                    incrementRetryCount(event)
                    sleep(backoff(retryCount))
                    // re-process on next poll (do not commit)
                ELSE
                    sendToDLQ(event, error)
                    kafka.commit(event.offset)  // commit to avoid blocking
                    alert("DLQ event: " + event.eventId)
                END IF
            END CATCH
        END FOR
    END WHILE
END
```

#### 4.2.6 Schema Registry

Event schemas are versioned using a schema registry (Confluent Schema Registry, reference). Schemas are defined in Avro or JSON Schema. The registry enforces backward compatibility — new fields must be optional, and existing fields cannot be removed or renamed.

#### 4.2.7 Dead-Letter Queue

The DLQ is a dedicated topic `{original_topic}.dlq`. DLQ events contain the original event, the error, the retry count, and the timestamp of the final failure. DLQ events are monitored; a DLQ event triggers an alert. DLQ events are reviewed by engineers and either reprocessed (after fixing the root cause) or discarded (with audit).

#### 4.2.8 Delivery Semantics

Delivery is **at-least-once**. Consumers must be idempotent (§3.8). Exactly-once is not guaranteed; duplicate events may occur during consumer failures or rebalances.

### 4.3 Cache Design

#### 4.3.1 Purpose

The Cache (Redis, reference) provides low-latency caching, session storage, and rate-limit counters.

#### 4.3.2 Cache Key Namespacing

```
Key Format: {engine}:{entity}:{id}

Examples:
    trust:score:participant-123
    krewards:klevel:participant-123
    commerce:product:product-456
    identity:session:session-789
    gateway:ratelimit:partner-abc:commerce-api
```

#### 4.3.3 Cache TTL

| Entity | TTL | Notes |
|---|---|---|
| Session | 30 minutes | Sliding window — extended on activity |
| Trust Score | 5 minutes | Short TTL — invalidated on update |
| K-Level | 10 minutes | Short TTL — invalidated on promotion |
| Product details | 15 minutes | Medium TTL — invalidated on update |
| Search results | 60 seconds | Short TTL — high change rate |
| Rate-limit counter | 1 hour | Token bucket window |

#### 4.3.4 Cache Architecture

Redis is deployed as a cluster with read replicas. Write operations go to the primary; read operations can use replicas. Cache keys are distributed across shards using consistent hashing.

#### 4.3.5 Cache Failure Handling

If the cache is unavailable:
- **Reads:** Fall through to the database (cache miss). Log a warning.
- **Writes:** Skip caching; data is in the database. Log a warning.
- **Rate limiting:** Fall back to local rate limiting (per-instance, less accurate). Alert.

Cache failure does NOT cause request failure; it causes degraded performance.

### 4.4 Search Design

#### 4.4.1 Purpose

The Search service (Elasticsearch, reference) provides product, service, and course indexing and search.

#### 4.4.2 Index Design

| Index | Source Engine | Documents |
|---|---|---|
| `commerce_products` | Commerce | Products with variants, categories, vendor info |
| `services_listings` | Services | Service listings with packages, provider info |
| `learning_courses` | Learning | Courses with modules, instructor info |

#### 4.4.3 Index Update

Index updates are event-driven. When a product/listing/course is created or updated, the owning engine publishes an event. A search indexer consumes the event and updates the index.

```
ALGORITHM: UpdateSearchIndex
INPUT: event
BEGIN
    document = transform(event.payload)  // map to index document
    search.index(event.indexName, document.id, document)
    // near-real-time: Elasticsearch refreshes within 1 second
END
```

#### 4.4.4 Search Query

```
ALGORITHM: SearchQuery
INPUT: query, filters, sort, page, pageSize
OUTPUT: results
BEGIN
    // Build Elasticsearch DSL query
    boolQuery = {must: [], filter: []}
    IF query != "" THEN
        boolQuery.must.push({multi_match: {query: query, fields: [...]}})
    END IF
    FOR EACH filter IN filters DO
        boolQuery.filter.push({term: filter})
    END FOR

    // Execute
    response = search.search({
        index: indexName,
        body: {query: boolQuery, sort: sort, from: page*pageSize, size: pageSize}
    })

    // Enrich results (e.g., add trust scores, ratings)
    results = enrich(response.hits)

    RETURN results
END
```

#### 4.4.5 Relevance Ranking

The Intelligence Engine provides relevance ranking signals. Search results can be re-ranked by the Intelligence Engine's `RankSearchResults` API (SRS-INT-002).

### 4.5 Secrets Manager Design

#### 4.5.1 Purpose

The Secrets Manager (HashiCorp Vault, reference) stores and distributes all secrets.

#### 4.5.2 Secret Paths

```
Secret Path Format: secret/{engine}/{secret_name}

Examples:
    secret/commerce/db_credentials
    secret/wallet/payment_provider_key
    secret/integration/oauth_client_secret
    secret/identity/kyc_api_key
```

#### 4.5.3 Secret Access

Engines access secrets via a Vault agent sidecar. The Vault agent:
1. Authenticates to Vault using the engine's service identity (Kubernetes service account token).
2. Fetches secrets at startup.
3. Writes secrets to a shared volume (as files, not environment variables).
4. Refreshes secrets on rotation.

```
ALGORITHM: GetSecret
INPUT: path
OUTPUT: secretValue
BEGIN
    secretFile = "/vault/secrets/" + path
    secretValue = readFile(secretFile)
    IF secretValue == NULL OR secretValue == "" THEN
        // Vault agent hasn't populated yet; wait and retry
        sleep(100ms)
        secretValue = readFile(secretFile)
    END IF
    RETURN secretValue
END
```

#### 4.5.4 Secret Rotation

| Secret Type | Rotation Policy |
|---|---|
| Database credentials | Dynamic — Vault generates short-lived credentials (1 hour TTL) |
| API keys | Manual — rotated per policy; old key revoked after new key validated |
| OAuth client secrets | Manual — rotated per policy |
| Encryption keys | Automated — rotated per key management policy |

### 4.6 Audit Log Design

#### 4.6.1 Purpose

The Audit Log is an immutable, append-only, tamper-evident log owned by the Administration Engine. All engines write audit records through the Administration Engine's `WriteAudit` API.

#### 4.6.2 Storage Design

Audit records are stored in an append-only store (PostgreSQL with a trigger that prevents UPDATE/DELETE, or a WORM storage, reference). Each record is hash-chained for tamper-evidence:

```
record.previousHash = hash of the previous record
record.recordHash = sha256(timestamp + engine + operation + ... + previousHash)
```

To verify integrity: recompute each record's hash and verify the chain.

#### 4.6.3 Audit Write Flow

```
Engine → WriteAudit API (Administration Engine) → Audit Log

Sequence:
    Engine            Admin Engine         Audit Log
       |                   |                    |
       |--WriteAudit()--->|                    |
       |                   |--append()--------->|
       |                   |<--recordId--------|
       |<--auditId---------|                    |
```

The `WriteAudit` call is synchronous (the caller needs confirmation that the audit record was written). If the Audit Log is unavailable, the engine operation fails (audit is mandatory, not optional, for audited operations).

### 4.7 API Gateway Design

#### 4.7.1 Purpose

The API Gateway (Kong/Envoy, reference) is the sole inbound boundary. It enforces authentication, authorization, rate limiting, routing, and TLS termination.

#### 4.7.2 Request Flow

```
ALGORITHM: GatewayRequest
INPUT: httpRequest
OUTPUT: httpResponse
BEGIN
    // 1. TLS termination (already done by load balancer)

    // 2. Authentication
    token = httpRequest.header("Authorization")
    IF token == NULL THEN
        RETURN 401 Unauthorized
    END IF
    identity = identityEngine.verifyCredentials(token)
    IF identity == NULL THEN
        RETURN 401 Unauthorized
    END IF

    // 3. Rate limiting
    rateLimitKey = identity.participantId + ":" + httpRequest.path
    IF NOT tokenBucket(rateLimitKey, capacity, refillRate, 1) THEN
        RETURN 429 Too Many Requests (with Retry-After)
    END IF

    // 4. Routing
    route = routeTable.match(httpRequest.path, httpRequest.method)
    IF route == NULL THEN
        RETURN 404 Not Found
    END IF

    // 5. Forward to engine (mTLS)
    response = forward(route.engine, httpRequest, identity)
    RETURN response
END
```

#### 4.7.3 Route Table

Routes are configured per engine and per API path:

```
Route Table:
    /api/v1/identity/*     → Identity Engine
    /api/v1/commerce/*     → Commerce Engine
    /api/v1/services/*     → Services Engine
    /api/v1/learning/*     → Learning Engine
    /api/v1/wallet/*       → Wallet Engine
    /api/v1/krewards/*     → K-Rewards Engine
    /api/v1/admin/*        → Administration Engine
    /api/v1/integration/* → Integration Engine
```

### 4.8 Service Mesh Design

#### 4.8.1 Purpose

The service mesh (Istio/Linkerd, reference) manages mTLS, routing, and policy enforcement between engines.

#### 4.8.2 mTLS Design

Every engine has a service identity (X.509 certificate from the internal CA). The service mesh:
1. Issues and rotates certificates automatically.
2. Enforces mTLS on all inter-engine connections.
3. Provides service-to-service authentication.

No engine manages its own TLS certificates; the service mesh handles this transparently.

#### 4.8.3 Traffic Management

The service mesh provides:
- **Load balancing** — round-robin or least-connections across engine instances.
- **Circuit breaking** — per-instance circuit breaking based on error rate and latency.
- **Retries** — configurable retries for transient failures.
- **Timeouts** — configurable per-route timeouts.

### 4.9 Governing Requirement Traceability

SAD-1 v1.0 Chapter 8 (Shared Services and Data Ownership), Chapter 27 (Deployment Architecture); SRS-1 v2.0 SRS-NFR-001, SRS-NFR-006, SRS-NFR-009.

---

## Chapter 5 — Cross-Engine Communication Design

### 5.1 Communication Patterns

Engines communicate through two patterns:

| Pattern | When Used | Characteristics |
|---|---|---|
| **Synchronous (API)** | Immediate response needed | Request-response; low latency; caller waits |
| **Asynchronous (Event)** | No immediate response needed | Fire-and-forget; eventual consistency; decoupled |

### 5.2 Synchronous API Design

#### 5.2.1 API Call Pattern

```
ALGORITHM: EngineAPICall
INPUT: targetEngine, apiPath, method, payload, idempotencyKey
OUTPUT: response
BEGIN
    // 1. Build request with correlation ID
    correlationId = getOrGenerateCorrelationId()
    request = {
        method: method,
        path: apiPath,
        body: payload,
        headers: {
            "X-Correlation-Id": correlationId,
            "X-Idempotency-Key": idempotencyKey,
            "Authorization": "Bearer " + serviceToken  // mTLS handles auth
        }
    }

    // 2. Call via service mesh (mTLS, load balancing, circuit breaking)
    TRY
        response = httpClient.call(targetEngine, request, timeout=5000ms)
        RETURN response
    CATCH timeout
        // Circuit breaker will trip if threshold exceeded
        THROW TIMEOUT
    CATCH connectionError
        // Retry via service mesh or manual retry
        THROW CONNECTION_ERROR
    END CATCH
END
```

#### 5.2.2 Error Response Format

All synchronous API errors use a standard format:

```
{
    "error": {
        "code": "VALIDATION_ERROR",
        "message": "Product price must be positive",
        "details": {
            "field": "price",
            "value": -10
        },
        "correlationId": "corr-123"
    }
}
```

Standard error codes:

| Code | HTTP Status | Description |
|---|---|---|
| `VALIDATION_ERROR` | 400 | Input validation failed |
| `UNAUTHORIZED` | 401 | Authentication failed |
| `FORBIDDEN` | 403 | Authorization failed |
| `NOT_FOUND` | 404 | Resource not found |
| `CONFLICT` | 409 | State conflict (e.g., OCC version mismatch) |
| `RATE_LIMITED` | 429 | Rate limit exceeded |
| `INTERNAL_ERROR` | 500 | Unexpected internal error |
| `SERVICE_UNAVAILABLE` | 503 | Service temporarily unavailable |

### 5.3 Asynchronous Event Design

#### 5.3.1 Event Publishing

```
ALGORITHM: PublishEvent
INPUT: topic, event
BEGIN
    event.eventId = generateUUID()
    event.timestamp = now()
    event.correlationId = getOrGenerateCorrelationId()
    event.publisher = currentEngine

    TRY
        kafka.publish(topic, event.partitionKey, event)
    CATCH error
        // Retry with backoff
        retryWithBackoff(kafka.publish, maxRetries=3, baseDelay=100ms)
        IF still failing THEN
            // Fall back to outbox pattern (see §5.3.3)
            outbox.store(topic, event)
            alert("Event publish failed, stored in outbox")
        END IF
    END CATCH
END
```

#### 5.3.2 Outbox Pattern

To ensure events are not lost if the Event Bus is unavailable, the Outbox pattern is used for critical events:

```
Outbox Pattern:
================

1. In the same database transaction as the business operation,
   write the event to an outbox table:
   
   BEGIN TRANSACTION
       -- business operation
       UPDATE orders SET status = 'DELIVERED' WHERE id = ?
       -- outbox write
       INSERT INTO outbox (event_id, topic, payload, status, created_at)
       VALUES (?, 'commerce.order.delivered', ?, 'PENDING', NOW())
   COMMIT

2. A background process (outbox publisher) reads PENDING events
   from the outbox and publishes them to Kafka:
   
   FOR EACH event IN outbox WHERE status = 'PENDING' DO
       TRY
           kafka.publish(event.topic, event.payload)
           outbox.updateStatus(event.id, 'PUBLISHED')
       CATCH
           // retry on next cycle
       END CATCH
   END FOR

3. Published events are retained in the outbox for audit.
```

This ensures the event is written atomically with the business operation — if the business operation succeeds, the event will eventually be published.

#### 5.3.3 Event Consumption

Event consumption follows the algorithm in §4.2.5.

### 5.4 Circuit Breaker Configuration

Every inter-engine dependency has a circuit breaker:

| Dependency | Failure Threshold | Cooldown | Half-Open Probes |
|---|---|---|---|
| Commerce → Wallet | 5 failures in 30s | 30s | 1 probe |
| Commerce → Identity | 5 failures in 30s | 30s | 1 probe |
| K-Rewards → Trust | 5 failures in 30s | 30s | 1 probe |
| K-Rewards → Wallet | 5 failures in 30s | 30s | 1 probe |
| Any → Administration (audit) | 10 failures in 60s | 60s | 1 probe |

When a circuit breaker is open, the caller fails fast and handles the failure per §3.11.

### 5.5 Saga Coordination

For multi-engine operations, a Saga coordinator orchestrates the steps. The coordinator can be:
- **Choreography-based:** Each engine publishes events and reacts to events; no central coordinator.
- **Orchestration-based:** A central coordinator (in the initiating engine) calls each step and handles compensation.

Choreography is used for simple, well-defined flows (e.g., order delivered → settle + accrue K-Points). Orchestration is used for complex flows (e.g., checkout: reserve inventory → process payment → create order → accrue K-Points).

```
Orchestration Saga Example — Checkout:
=======================================

Coordinator: Commerce Engine

Step 1: ReserveInventory (Commerce internal)
    └── Compensate: ReleaseInventory
    
Step 2: ProcessPayment (Wallet Engine)
    └── Compensate: ReversePayment
    └── Circuit breaker: if Wallet is down, fail checkout

Step 3: CreateOrder (Commerce internal)
    └── Compensate: CancelOrder
    
Step 4: Publish OrderCreated event (async)
    └── Consumers: Wallet (settle on delivery), Communication (notify)

IF Step 2 fails:
    Compensate Step 1: ReleaseInventory
    RETURN failure to client

IF Step 3 fails:
    Compensate Step 2: ReversePayment
    Compensate Step 1: ReleaseInventory
    RETURN failure to client
```

### 5.6 Governing Requirement Traceability

SAD-1 v1.0 Chapter 7 (Component Boundaries and Engine Interaction Model); SRS-1 v2.0 SRS-NFR-001, SRS-NFR-006.

---

# Part III — Engine Designs

## Chapter 6 — Identity Engine Design

### 6.1 Overview

The Identity Engine is the sole authority for account management, authentication, and identity sharing across the ecosystem (SAD-1 Ch.9; PLC-1 v2.0 Chapter 13; SRS-IDM-001–007).

Implements: SRS-IDM-001–007; SAD-1 Ch.9; PLC-1 Ch.13.

### 6.2 Component Design

```
┌─────────────────────────────────────────────────────────┐
│                  IDENTITY ENGINE                         │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │  Account      │  │ Authentication│  │    KYC       │   │
│  │  Service      │  │    Service    │  │   Service    │   │
│  └──────┬───────┘  └──────┬────────┘  └──────┬───────┘   │
│         │                  │                   │           │
│  ┌──────┴───────┐  ┌──────┴────────┐  ┌──────┴───────┐   │
│  │  AML Service  │  │  Session       │  │  Identity    │   │
│  │               │  │  Service       │  │  Sharing     │   │
│  │               │  │  (in Auth)      │  │  Service     │   │
│  └───────────────┘  └───────────────┘  └──────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │              Identity-DB (PostgreSQL)             │    │
│  └──────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

### 6.3 Data Models

#### 6.3.1 Account

| Field | Type | Constraints | Description |
|---|---|---|---|
| `accountId` | UUID | PK | Unique account identifier |
| `email` | string | unique, not null, indexed | Account email |
| `phone` | string | unique, nullable | Account phone |
| `passwordHash` | string | not null | Argon2id hash of password |
| `displayName` | string | not null | Display name |
| `status` | enum | not null, default `ACTIVE` | `ACTIVE`, `SUSPENDED`, `DELETED` |
| `kycTier` | enum | not null, default `TIER_0` | `TIER_0`, `TIER_1`, `TIER_2`, `TIER_3` |
| `createdAt` | timestamp | not null | Account creation time |
| `updatedAt` | timestamp | not null | Last update time |
| `version` | integer | not null, default 1 | Optimistic concurrency version |
| `referredBy` | UUID | nullable, FK → Account | Referrer account ID (for K-Rings) |
| `referralCode` | string | unique, nullable | Participant's referral code |

#### 6.3.2 KYCVerification

| Field | Type | Constraints | Description |
|---|---|---|---|
| `verificationId` | UUID | PK | Verification record ID |
| `accountId` | UUID | FK → Account, indexed | Account being verified |
| `tier` | enum | not null | `TIER_1`, `TIER_2`, `TIER_3` |
| `status` | enum | not null | `PENDING`, `APPROVED`, `REJECTED`, `EXPIRED` |
| `evidenceType` | enum | not null | `GOVERNMENT_ID`, `UTILITY_BILL`, `SELFIE`, `PROOF_OF_ADDRESS` |
| `evidenceRef` | string | not null | Encrypted reference to evidence storage |
| `submittedAt` | timestamp | not null | Submission time |
| `reviewedAt` | timestamp | nullable | Review time |
| `reviewedBy` | UUID | nullable | Reviewer (compliance officer) |
| `expiresAt` | timestamp | nullable | Expiration time for periodic re-verification |
| `rejectionReason` | string | nullable | Rejection reason if rejected |

#### 6.3.3 Session

| Field | Type | Constraints | Description |
|---|---|---|---|
| `sessionId` | UUID | PK | Session identifier |
| `accountId` | UUID | FK → Account, indexed | Account owning the session |
| `tokenHash` | string | not null, indexed | Hash of the session token |
| `status` | enum | not null | `ACTIVE`, `REVOKED`, `EXPIRED` |
| `createdAt` | timestamp | not null | Session creation time |
| `expiresAt` | timestamp | not null | Session expiration |
| `lastActivityAt` | timestamp | not null | Last activity time (for sliding window) |
| `mfaVerified` | boolean | not null, default false | Whether MFA was completed this session |
| `deviceFingerprint` | string | nullable | Device fingerprint for anomaly detection |
| `ipAddress` | string | nullable | Session IP address |

#### 6.3.4 MFAEnrollment

| Field | Type | Constraints | Description |
|---|---|---|---|
| `enrollmentId` | UUID | PK | Enrollment ID |
| `accountId` | UUID | FK → Account, indexed | Account |
| `method` | enum | not null | `TOTP`, `SMS`, `EMAIL` |
| `secretHash` | string | nullable | Encrypted TOTP secret (if TOTP) |
| `phone` | string | nullable | Phone (if SMS) |
| `email` | string | nullable | Email (if EMAIL) |
| `status` | enum | not null | `ACTIVE`, `DISABLED` |
| `enrolledAt` | timestamp | not null | Enrollment time |

### 6.4 Account Lifecycle State Machine

```
Account State Machine:
========================

  [PENDING] --email/phone verified--> [ACTIVE]
                │                           │
                │                           ├──suspended by admin--> [SUSPENDED]
                │                           │                           │
                │                           │                           ├──reinstated--> [ACTIVE]
                │                           │                           │
                │                           │                           └──permanently banned--> [DELETED]
                │                           │
                │                           └──user deletes account--> [DELETED]
                │
                └──verification expired--> [PENDING] (re-verify)
```

### 6.5 Key Algorithms

#### 6.5.1 Account Registration

```
ALGORITHM: RegisterAccount
INPUT: email, phone, password, displayName, referralCode
OUTPUT: account
BEGIN
    // Validation
    IF NOT isValidEmail(email) THEN THROW VALIDATION_ERROR("Invalid email")
    IF NOT isValidPassword(password) THEN THROW VALIDATION_ERROR("Password too weak")
    IF accountExists(email) THEN THROW CONFLICT("Email already registered")

    // Check referral code
    referrer = NULL
    IF referralCode != NULL THEN
        referrer = findByReferralCode(referralCode)
        IF referrer == NULL THEN THROW VALIDATION_ERROR("Invalid referral code")
        IF referrer.status != ACTIVE THEN THROW VALIDATION_ERROR("Referrer not active")
    END IF

    // Check for duplicate identity
    IF checkDuplicateIdentity(email, phone, deviceFingerprint) THEN
        flagForReview(email, phone, "DUPLICATE_IDENTITY")
        // Allow registration but flag for Administration review
    END IF

    // Create account
    passwordHash = argon2id.hash(password)
    account = {
        accountId: generateUUID(),
        email: email,
        phone: phone,
        passwordHash: passwordHash,
        displayName: displayName,
        status: "ACTIVE",
        kycTier: "TIER_0",
        referredBy: referrer?.accountId,
        referralCode: generateReferralCode(),
        createdAt: now(),
        version: 1
    }
    db.insert(account)

    // Publish event (via outbox for atomicity)
    outbox.publish("identity.account.registered", {
        accountId: account.accountId,
        referredBy: account.referredBy,
        kycTier: account.kycTier
    })

    // Audit
    writeAudit("IDENTITY", "RegisterAccount", account.accountId, "CREATE", "SUCCESS")

    RETURN account
END
```

#### 6.5.2 Authentication

```
ALGORITHM: Authenticate
INPUT: email, password, mfaCode, deviceFingerprint, ipAddress
OUTPUT: session | AUTHENTICATION_ERROR
BEGIN
    // 1. Lookup account
    account = db.findByEmail(email)
    IF account == NULL OR account.status != "ACTIVE" THEN
        // Constant-time response to prevent enumeration
        argon2id.verify(dummyHash, password)  // burn time
        THROW UNAUTHORIZED("Invalid credentials")
    END IF

    // 2. Verify password
    IF NOT argon2id.verify(account.passwordHash, password) THEN
        recordFailedAttempt(account.accountId)
        IF getFailedAttempts(account.accountId) >= 5 THEN
            lockAccount(account.accountId)
            THROW UNAUTHORIZED("Account locked")
        END IF
        THROW UNAUTHORIZED("Invalid credentials")
    END IF

    // 3. Check MFA requirement
    mfaEnrollment = getActiveMFA(account.accountId)
    IF mfaEnrollment != NULL THEN
        IF mfaCode == NULL THEN
            THROW UNAUTHORIZED("MFA required")
        END IF
        IF NOT verifyMFA(mfaEnrollment, mfaCode) THEN
            THROW UNAUTHORIZED("Invalid MFA code")
        END IF
    END IF

    // 4. Clear failed attempts
    clearFailedAttempts(account.accountId)

    // 5. Create session
    token = generateSecureToken()  // 256-bit random
    tokenHash = sha256(token)
    session = {
        sessionId: generateUUID(),
        accountId: account.accountId,
        tokenHash: tokenHash,
        status: "ACTIVE",
        createdAt: now(),
        expiresAt: now() + 30minutes,
        lastActivityAt: now(),
        mfaVerified: (mfaEnrollment != NULL),
        deviceFingerprint: deviceFingerprint,
        ipAddress: ipAddress
    }
    db.insert(session)
    cache.set("identity:session:" + tokenHash, session, ttl=30minutes)

    // Audit
    writeAudit("IDENTITY", "Authenticate", account.accountId, "AUTH", "SUCCESS")

    RETURN {token: token, session: session}
END
```

#### 6.5.3 Session Validation

```
ALGORITHM: ValidateSession
INPUT: token
OUTPUT: identity | UNAUTHORIZED
BEGIN
    tokenHash = sha256(token)

    // Check cache first
    session = cache.get("identity:session:" + tokenHash)
    IF session == NULL THEN
        // Cache miss — check database
        session = db.findSessionByTokenHash(tokenHash)
        IF session == NULL THEN THROW UNAUTHORIZED("Invalid session")
        IF session.status != "ACTIVE" THEN THROW UNAUTHORIZED("Session revoked")
        IF session.expiresAt < now() THEN THROW UNAUTHORIZED("Session expired")
        // Re-cache
        cache.set("identity:session:" + tokenHash, session, ttl=remainingTTL)
    END IF

    // Check session validity
    IF session.status != "ACTIVE" THEN THROW UNAUTHORIZED("Session revoked")
    IF session.expiresAt < now() THEN THROW UNAUTHORIZED("Session expired")

    // Check account status
    account = db.findAccount(session.accountId)
    IF account.status != "ACTIVE" THEN
        revokeSession(session.sessionId)
        THROW UNAUTHORIZED("Account not active")
    END IF

    // Check sanctions
    IF isSanctioned(session.accountId) THEN
        revokeSession(session.sessionId)
        THROW FORBIDDEN("Account sanctioned")
    END IF

    // Extend session (sliding window)
    session.lastActivityAt = now()
    session.expiresAt = now() + 30minutes
    cache.set("identity:session:" + tokenHash, session, ttl=30minutes)
    db.update(session)

    RETURN {accountId: account.accountId, kycTier: account.kycTier, role: account.role}
END
```

#### 6.5.4 KYC Verification Submission

```
ALGORITHM: SubmitKYC
INPUT: accountId, tier, evidenceType, evidenceData
OUTPUT: verification
BEGIN
    // Authorization: participant can only submit for themselves
    // (enforced by API Gateway + resource ownership check)

    // Validation
    IF tier NOT IN ["TIER_1", "TIER_2", "TIER_3"] THEN THROW VALIDATION_ERROR
    IF NOT canSubmitTier(accountId, tier) THEN THROW VALIDATION_ERROR("Cannot skip tiers")

    // Encrypt and store evidence
    evidenceRef = encryptAndStore(evidenceData)  // AES-256 field-level encryption

    // Create verification record
    verification = {
        verificationId: generateUUID(),
        accountId: accountId,
        tier: tier,
        status: "PENDING",
        evidenceType: evidenceType,
        evidenceRef: evidenceRef,
        submittedAt: now()
    }
    db.insert(verification)

    // Audit
    writeAudit("IDENTITY", "SubmitKYC", accountId, "CREATE", "SUCCESS",
               {tier: tier, evidenceType: evidenceType})

    // Notify compliance officer (async)
    eventBus.publish("identity.kyc.submitted", {verificationId: verification.verificationId})

    RETURN verification
END
```

#### 6.5.5 KYC Review

```
ALGORITHM: ReviewKYC
INPUT: verificationId, decision, reviewerId, rejectionReason
OUTPUT: verification
BEGIN
    // Authorization: only compliance officers (RBAC)
    // (enforced by API Gateway + RBAC check)

    verification = db.findVerification(verificationId)
    IF verification == NULL THEN THROW NOT_FOUND
    IF verification.status != "PENDING" THEN THROW CONFLICT("Already reviewed")

    verification.status = decision  // "APPROVED" or "REJECTED"
    verification.reviewedAt = now()
    verification.reviewedBy = reviewerId
    IF decision == "REJECTED" THEN
        verification.rejectionReason = rejectionReason
    ELSE
        // Update account KYC tier
        account = db.findAccount(verification.accountId)
        account.kycTier = verification.tier
        account.version++
        db.update(account)

        // Publish event
        outbox.publish("identity.account.verification_updated", {
            accountId: account.accountId,
            kycTier: verification.tier,
            previousTier: previousTier
        })
    END IF

    db.update(verification)

    writeAudit("IDENTITY", "ReviewKYC", verification.accountId, "UPDATE",
               decision, {verificationId: verificationId, decision: decision})

    RETURN verification
END
```

### 6.6 Duplicate Identity Detection

```
ALGORITHM: CheckDuplicateIdentity
INPUT: email, phone, deviceFingerprint
OUTPUT: boolean (true if duplicate suspected)
BEGIN
    // Check exact email/phone matches
    IF db.accountExistsByEmail(email) THEN RETURN true
    IF phone != NULL AND db.accountExistsByPhone(phone) THEN RETURN true

    // Check device fingerprint match (if provided)
    IF deviceFingerprint != NULL THEN
        matchingAccounts = db.findByDeviceFingerprint(deviceFingerprint)
        IF matchingAccounts.size() > 0 THEN
            // Same device used for multiple accounts — flag
            RETURN true
        END IF
    END IF

    // Check fuzzy email match (common aliases)
    emailNormalized = normalizeEmail(email)  // remove +aliases, normalize domain
    IF db.accountExistsByEmailNormalized(emailNormalized) THEN RETURN true

    RETURN false
END
```

Detected duplicates are flagged for the Administration Engine's anti-fraud process (SRS-ADM-008) but do not block registration (the account is flagged, not rejected).

### 6.7 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Participants access only their own data (RLS); compliance officers access KYC data; administrators access all |
| **Validation** | Email format, password strength, phone format, tier progression validation |
| **Rate limiting** | Registration: 5/hour per IP; Authentication: 10/minute per IP; KYC: 3/day per account |
| **Audit** | Registration, authentication, KYC submission, KYC review, session revocation, account status changes |
| **Caching** | Sessions cached in Redis (30min TTL); account data cached (10min TTL) |
| **Concurrency** | Account updates use OCC (version field); session updates use OCC |
| **Idempotency** | Registration uses email uniqueness; KYC submission uses evidence hash |
| **Retries** | Event publish retries (3x backoff); database retries (3x backoff) |
| **Timeout** | API calls: 5s; database: 3s; cache: 1s |
| **Failure handling** | Cache failure → database fallback; event publish failure → outbox |
| **Observability** | Metrics: registrations, authentications, failed attempts, KYC submissions/approvals; Traces: registration, authentication, KYC flow |
| **Security boundary** | TLS 1.3 external; mTLS internal; KYC evidence encrypted at rest; credentials hashed (Argon2id); constant-time auth responses |

### 6.8 Sequence Diagrams

#### 6.8.1 Registration with Referral

```
Client      API Gateway    Identity Engine    K-Rewards (async)    Wallet (async)
  |              |                |                  |                   |
  |--Register--->|                |                  |                   |
  |              |--Register----->|                  |                   |
  |              |                |--validate------->|                   |
  |              |                |--create account  |                   |
  |              |                |--publish event-->| (outbox)          |
  |              |                |--write audit----->|                   |
  |              |<--account------|                  |                   |
  |<--account----|                |                  |                   |
  |              |                |                  |                   |
  |              |                |      (async) AccountRegistered event  |
  |              |                |                  |--init K-Level 1   |
  |              |                |                  |                   |--init wallet
  |              |                |                  |                   |
```

#### 6.8.2 Authentication with MFA

```
Client      API Gateway    Identity Engine    (Cache)
  |              |                |                |
  |--Login------>|                |                |
  |              |--Authenticate->|                |
  |              |                |--verify password
  |              |                |--check MFA required
  |              |<--MFA required-|                |
  |<--MFA required|                |                |
  |              |                |                |
  |--Login+MFA-->|                |                |
  |              |--Authenticate->|                |
  |              |                |--verify password
  |              |                |--verify MFA
  |              |                |--create session
  |              |                |--cache session->| (set, TTL=30min)
  |              |<--token+session|                |
  |<--token------|                |                |
```

### 6.9 Governing Requirement Traceability

SRS-IDM-001–007; SAD-1 Ch.9; PLC-1 Ch.13; KR-1 (referral for K-Rings initialization).

---

## Chapter 7 — Trust Engine Design

### 7.1 Overview

The Trust Engine is the sole authority for K-Trust calculation, trust signals, trust gating, and trust recovery (SAD-1 Ch.10; PLC-1 v2.0 Chapter 14; KR-1 Ch.40–43; SRS-TRU-001–005).

Implements: SRS-TRU-001–005; SAD-1 Ch.10; PLC-1 Ch.14; KR-1 KR-TRU-001–011.

### 7.2 Component Design

```
┌─────────────────────────────────────────────────────────┐
│                   TRUST ENGINE                           │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────┐             │
│  │ Trust Score       │  │ Trust Signal      │             │
│  │ Calculator       │  │ Aggregator        │             │
│  └────────┬─────────┘  └────────┬──────────┘             │
│           │                      │                        │
│  ┌────────┴─────────┐  ┌────────┴──────────┐             │
│  │ Trust Gate       │  │ Trust Recovery     │             │
│  │ Service          │  │ Service            │             │
│  └──────────────────┘  └──────────────────┘             │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │              Trust-DB (PostgreSQL)                 │    │
│  └──────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

### 7.3 Data Models

#### 7.3.1 TrustScore

| Field | Type | Constraints | Description |
|---|---|---|---|
| `accountId` | UUID | PK, FK → Account | The participant's account |
| `score` | decimal(5,2) | not null, default 50.00 | Current Trust Score (0–100) |
| `previousScore` | decimal(5,2) | nullable | Previous score before last update |
| `updatedAt` | timestamp | not null | Last recalculation time |
| `signalCount` | integer | not null, default 0 | Total signals contributing |
| `version` | integer | not null, default 1 | OCC version |

#### 7.3.2 TrustSignal

| Field | Type | Constraints | Description |
|---|---|---|---|
| `signalId` | UUID | PK | Signal identifier |
| `accountId` | UUID | FK → Account, indexed | Affected participant |
| `signalType` | enum | not null, indexed | `POSITIVE_REVIEW`, `NEGATIVE_REVIEW`, `DISPUTE_LOST`, `DISPUTE_WON`, `FRAUD_FLAG`, `TRANSACTION_COMPLETED`, `LATE_DELIVERY`, `REFUND_ISSUED`, `CHARGEBACK`, `SANCTION`, `VERIFICATION_COMPLETED`, `COMMUNITY_CONTRIBUTION` |
| `source` | enum | not null | `COMMERCE`, `SERVICES`, `LEARNING`, `INTELLIGENCE`, `ADMINISTRATION`, `IDENTITY` |
| `weight` | decimal(5,2) | not null | Signal weight (GOVERNANCE PARAMETER) |
| `impact` | decimal(5,2) | not null | Score impact (positive or negative) |
| `evidenceRef` | string | nullable | Reference to source event |
| `createdAt` | timestamp | not null | Signal timestamp |

#### 7.3.3 TrustHistory

| Field | Type | Constraints | Description |
|---|---|---|---|
| `historyId` | UUID | PK | History record ID |
| `accountId` | UUID | FK → Account, indexed | Participant |
| `score` | decimal(5,2) | not null | Score at this point in time |
| `change` | decimal(5,2) | not null | Delta from previous score |
| `reason` | string | not null | Reason for change |
| `signalId` | UUID | nullable, FK → TrustSignal | Signal that caused the change |
| `createdAt` | timestamp | not null | Timestamp |

#### 7.3.4 TrustRecovery

| Field | Type | Constraints | Description |
|---|---|---|---|
| `recoveryId` | UUID | PK | Recovery record ID |
| `accountId` | UUID | FK → Account, indexed | Participant |
| `originalSignalId` | UUID | FK → TrustSignal | The signal being recovered from |
| `status` | enum | not null | `IN_PROGRESS`, `COMPLETED`, `CANCELLED` |
| `startedAt` | timestamp | not null | Recovery start time |
| `completedAt` | timestamp | nullable | Recovery completion time |
| `recoveryPeriod` | integer | not null | Recovery period in days (GOVERNANCE PARAMETER) |

### 7.4 Trust Score Calculation Algorithm

The Trust Score is a weighted blend of multiple signals (KR-1 KR-TRU-001–006). No single signal can dominate (KR-TRU-006).

```
ALGORITHM: CalculateTrustScore
INPUT: accountId
OUTPUT: trustScore
BEGIN
    // 1. Gather all signals within the evaluation window
    signals = db.findSignals(accountId, since=now() - evaluationWindow)

    // 2. Categorize and weight signals
    positiveImpact = 0
    negativeImpact = 0
    signalCount = 0

    FOR EACH signal IN signals DO
        weight = getSignalWeight(signal.signalType)  // GOVERNANCE PARAMETER
        cappedWeight = min(weight, maxSignalWeight)  // no single signal dominates
        IF signal.impact > 0 THEN
            positiveImpact += cappedWeight * signal.impact
        ELSE
            negativeImpact += abs(cappedWeight * signal.impact)
        END IF
        signalCount++
    END FOR

    // 3. Calculate base score
    // Start from neutral (50) and adjust
    baseScore = 50.00
    adjustment = positiveImpact - negativeImpact

    // 4. Apply clamping (0–100)
    newScore = clamp(baseScore + adjustment, 0, 100)

    // 5. Apply smoothing (prevent sudden large jumps)
    currentScore = db.getTrustScore(accountId)
    maxChangePerUpdate = 10.00  // GOVERNANCE PARAMETER
    actualChange = clamp(newScore - currentScore, -maxChangePerUpdate, maxChangePerUpdate)
    finalScore = clamp(currentScore + actualChange, 0, 100)

    // 6. Update database
    db.updateTrustScore(accountId, {
        score: finalScore,
        previousScore: currentScore,
        updatedAt: now(),
        signalCount: signalCount,
        version: currentScore.version + 1
    })

    // 7. Write history
    db.insertTrustHistory({
        accountId: accountId,
        score: finalScore,
        change: actualChange,
        reason: "Recalculation from " + signalCount + " signals"
    })

    // 8. Publish event
    eventBus.publish("trust.score.updated", {
        accountId: accountId,
        oldScore: currentScore,
        newScore: finalScore
    })

    // 9. Cache
    cache.set("trust:score:" + accountId, finalScore, ttl=5minutes)

    RETURN finalScore
END
```

### 7.5 Trust Signal Submission

```
ALGORITHM: SubmitTrustSignal
INPUT: accountId, signalType, source, evidenceRef
OUTPUT: signal
BEGIN
    // 1. Look up signal weight (GOVERNANCE PARAMETER)
    weight = getSignalWeight(signalType)
    impact = getSignalImpact(signalType)  // positive or negative

    // 2. Create signal record
    signal = {
        signalId: generateUUID(),
        accountId: accountId,
        signalType: signalType,
        source: source,
        weight: weight,
        impact: impact,
        evidenceRef: evidenceRef,
        createdAt: now()
    }
    db.insert(signal)

    // 3. Trigger async recalculation (don't block the caller)
    eventBus.publish("trust.signal.received", {accountId: accountId})

    // 4. Audit
    writeAudit("TRUST", "SubmitTrustSignal", accountId, "CREATE", "SUCCESS",
               {signalType: signalType, source: source})

    RETURN signal
END
```

### 7.6 Trust Gate Evaluation

```
ALGORITHM: CheckTrustGate
INPUT: accountId, gateType
OUTPUT: PASS | FAIL
BEGIN
    // Get cached score or recalculate
    score = cache.get("trust:score:" + accountId)
    IF score == NULL THEN
        score = calculateTrustScore(accountId)
    END IF

    // Look up gate threshold (GOVERNANCE PARAMETER)
    threshold = getGateThreshold(gateType)
    // Gate types: VENDOR_ELIGIBILITY (40), KPOINTS_ELIGIBILITY, KLEVEL_PROMOTION, REWARD_SHARE

    IF score >= threshold THEN
        RETURN PASS
    ELSE
        RETURN FAIL
    END IF
END
```

### 7.7 Trust Recovery

When a participant receives a negative signal (e.g., dispute lost, fraud flag), the Trust Recovery Service manages the recovery process:

```
ALGORITHM: StartTrustRecovery
INPUT: accountId, signalId
OUTPUT: recovery
BEGIN
    // Check if recovery is applicable
    signal = db.findSignal(signalId)
    IF signal.impact >= 0 THEN RETURN  // only for negative signals

    // Check for existing active recovery
    existing = db.findActiveRecovery(accountId)
    IF existing != NULL THEN
        // Extend or replace existing recovery
        db.update(existing, {status: "CANCELLED"})
    END IF

    recovery = {
        recoveryId: generateUUID(),
        accountId: accountId,
        originalSignalId: signalId,
        status: "IN_PROGRESS",
        startedAt: now(),
        recoveryPeriod: getRecoveryPeriod(signal.signalType)  // GOVERNANCE PARAMETER
    }
    db.insert(recovery)

    // The recovery completes when the participant accumulates enough
    // positive signals over the recovery period. The Trust Score
    // Calculator considers the recovery status during recalculation.

    RETURN recovery
END
```

### 7.8 Trust Signal Sources

| Signal Type | Source | Impact | Trigger |
|---|---|---|---|
| `POSITIVE_REVIEW` | Commerce/Services/Learning | Positive | 4–5 star review received |
| `NEGATIVE_REVIEW` | Commerce/Services/Learning | Negative | 1–2 star review received |
| `DISPUTE_WON` | Commerce/Services | Positive | Dispute resolved in favor |
| `DISPUTE_LOST` | Commerce/Services | Negative | Dispute resolved against |
| `FRAUD_FLAG` | Intelligence/Administration | Negative (large) | Fraud signal detected |
| `TRANSACTION_COMPLETED` | Commerce/Services/Learning | Positive (small) | Successful transaction |
| `LATE_DELIVERY` | Commerce | Negative | Delivery past deadline |
| `REFUND_ISSUED` | Commerce/Services | Negative | Refund processed |
| `CHARGEBACK` | Wallet/Integration | Negative (large) | Chargeback received |
| `SANCTION` | Administration | Negative (large) | Sanction applied |
| `VERIFICATION_COMPLETED` | Identity | Positive | KYC tier upgraded |
| `COMMUNITY_CONTRIBUTION` | Communication | Positive (small) | Verified community contribution |

Signal weights and impacts are **GOVERNANCE PARAMETERS** defined in KR-1 (KR-TRU rules). SDD-1 designs the mechanism; KR-1 defines the values.

### 7.9 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Trust Score is read-only for consuming engines; only the Trust Engine can modify it. Signal submission is authorized per source engine. |
| **Validation** | Signal type must be valid; weight and impact must be within bounds; evidence reference required |
| **Rate limiting** | Signal submission: 100/minute per source engine; score recalculation: 1/minute per account |
| **Audit** | Signal submission, score recalculation, gate evaluation, recovery start/completion |
| **Caching** | Trust Score cached in Redis (5min TTL); gate results cached (1min TTL) |
| **Concurrency** | Score updates use OCC (version field); signal inserts are append-only (no conflict) |
| **Idempotency** | Signal submission uses evidenceRef for deduplication |
| **Retries** | Event publish retries (3x backoff); recalculation retries (3x backoff) |
| **Timeout** | Score recalculation: 3s; gate check: 1s; signal submission: 2s |
| **Failure handling** | Cache miss → recalculate; recalculation failure → use last known score (stale but functional) |
| **Observability** | Metrics: signals by type, score distribution, gate pass/fail rate; Traces: recalculation, gate evaluation |
| **Security boundary** | mTLS internal; Trust Score read-only for consumers; signal injection protected by source authentication |

### 7.10 Sequence Diagram: Trust Signal Flow

```
Commerce Engine    Trust Engine    (Cache)    K-Rewards Engine (async)
     |                  |              |               |
     |--SubmitSignal--->|              |               |
     |                  |--create signal|               |
     |                  |--publish event>|               |
     |<--ack-------------|              |               |
     |                  |              |               |
     |          (async) signal.received |               |
     |                  |--recalculate  |               |
     |                  |--get signals from DB          |
     |                  |--compute score                |
     |                  |--update DB                    |
     |                  |--cache score->| (set, 5min)   |
     |                  |--publish score.updated>       |
     |                  |              |        |--check gate
     |                  |              |        |--cache score->|
     |                  |              |               |
```

### 7.11 Governing Requirement Traceability

SRS-TRU-001–005; SAD-1 Ch.10; PLC-1 Ch.14; KR-1 KR-TRU-001–011, Ch.40–43.

---

## Chapter 8 — Commerce Engine Design

### 8.1 Overview

The Commerce Engine owns the multi-vendor marketplace domain — vendors, products, catalogue, inventory, carts, checkout, orders, fulfilment, shipping, returns, refunds, disputes, ratings, promotions, and settlement (SAD-1 Ch.11; PLC-1 v2.0 Chapter 28; SRS-COM-001–022).

Implements: SRS-COM-001–022; SAD-1 Ch.11; PLC-1 Ch.28; KR-1 KR-TRU-007, KR-ECO-014.

### 8.2 Component Design

```
┌───────────────────────────────────────────────────────────────┐
│                    COMMERCE ENGINE                             │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Vendor   │ │ Catalogue│ │Inventory │ │Storefront │         │
│  │ Service  │ │ Service  │ │ Service  │ │ Service   │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Search   │ │  Cart    │ │Checkout  │ │  Order   │         │
│  │ Service  │ │ Service  │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │Fulfilment│ │ Shipping │ │ Returns  │ │ Refund   │         │
│  │ Service  │ │ Service  │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Dispute  │ │ Review   │ │Promotion │ │Settlement│         │
│  │ Service  │ │ Service  │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐                                                 │
│  │  Fraud   │                                                 │
│  │ Detection│                                                 │
│  └──────────┘                                                 │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │              Commerce-DB (PostgreSQL)                    │    │
│  └────────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
```

### 8.3 Data Models

#### 8.3.1 Vendor

| Field | Type | Constraints | Description |
|---|---|---|---|
| `vendorId` | UUID | PK | Vendor identifier |
| `accountId` | UUID | FK → Account, unique | Vendor's Identity account |
| `storeName` | string | not null | Store display name |
| `description` | text | nullable | Store description |
| `status` | enum | not null, default `PENDING` | `PENDING`, `ACTIVE`, `SUSPENDED`, `TERMINATED` |
| `trustScoreAtApproval` | decimal(5,2) | nullable | Trust Score at time of approval |
| `logoUrl` | string | nullable | Store logo URL |
| `bannerUrl` | string | nullable | Store banner URL |
| `contactEmail` | string | not null | Contact email |
| `contactPhone` | string | nullable | Contact phone |
| `createdAt` | timestamp | not null | Creation time |
| `approvedAt` | timestamp | nullable | Approval time |
| `version` | integer | not null, default 1 | OCC version |

#### 8.3.2 Product

| Field | Type | Constraints | Description |
|---|---|---|---|
| `productId` | UUID | PK | Product identifier |
| `vendorId` | UUID | FK → Vendor, indexed | Owning vendor |
| `title` | string | not null | Product title |
| `description` | text | nullable | Product description |
| `categoryId` | UUID | FK → Category, indexed | Product category |
| `status` | enum | not null, default `DRAFT` | `DRAFT`, `ACTIVE`, `INACTIVE`, `DISCONTINUED` |
| `basePrice` | decimal(10,2) | not null | Base price |
| `currency` | string | not null, default `USD` | Currency code |
| `productType` | enum | not null | `PHYSICAL`, `DIGITAL` |
| `createdAt` | timestamp | not null | Creation time |
| `updatedAt` | timestamp | not null | Last update time |
| `version` | integer | not null, default 1 | OCC version |
| `averageRating` | decimal(3,2) | nullable | Average rating (denormalized) |
| `reviewCount` | integer | not null, default 0 | Review count (denormalized) |

#### 8.3.3 ProductVariant

| Field | Type | Constraints | Description |
|---|---|---|---|
| `variantId` | UUID | PK | Variant identifier |
| `productId` | UUID | FK → Product, indexed | Parent product |
| `sku` | string | not null, unique | Stock keeping unit |
| `name` | string | not null | Variant name (e.g., "Red, Large") |
| `attributes` | JSON | not null | Variant attributes ({color: "red", size: "L"}) |
| `price` | decimal(10,2) | not null | Variant price (overrides basePrice if set) |
| `weight` | decimal(10,2) | nullable | Weight in kg (for shipping) |

#### 8.3.4 Inventory

| Field | Type | Constraints | Description |
|---|---|---|---|
| `inventoryId` | UUID | PK | Inventory record ID |
| `variantId` | UUID | FK → ProductVariant, unique | Variant being tracked |
| `quantityOnHand` | integer | not null, default 0 | Physical stock available |
| `quantityReserved` | integer | not null, default 0 | Reserved for pending orders |
| `quantityAvailable` | integer | not null, default 0 | `quantityOnHand - quantityReserved` (computed) |
| `lowStockThreshold` | integer | nullable | Threshold for low-stock alert |
| `updatedAt` | timestamp | not null | Last update time |
| `version` | integer | not null, default 1 | OCC version |

#### 8.3.5 Cart

| Field | Type | Constraints | Description |
|---|---|---|---|
| `cartId` | UUID | PK | Cart identifier |
| `accountId` | UUID | FK → Account, indexed | Cart owner |
| `status` | enum | not null, default `ACTIVE` | `ACTIVE`, `ABANDONED`, `CONVERTED` |
| `createdAt` | timestamp | not null | Creation time |
| `updatedAt` | timestamp | not null | Last update time |

#### 8.3.6 CartItem

| Field | Type | Constraints | Description |
|---|---|---|---|
| `cartItemId` | UUID | PK | Cart item ID |
| `cartId` | UUID | FK → Cart, indexed | Parent cart |
| `productId` | UUID | FK → Product | Product |
| `variantId` | UUID | FK → ProductVariant | Variant (nullable if no variants) |
| `quantity` | integer | not null | Quantity |
| `unitPrice` | decimal(10,2) | not null | Unit price at time of add |
| `addedAt` | timestamp | not null | Time added |

#### 8.3.7 Order

| Field | Type | Constraints | Description |
|---|---|---|---|
| `orderId` | UUID | PK | Order identifier |
| `parentOrderId` | UUID | nullable, FK → Order | Parent order (for multi-vendor split) |
| `accountId` | UUID | FK → Account, indexed | Buyer account |
| `vendorId` | UUID | FK → Vendor, indexed | Vendor (null for parent orders) |
| `status` | enum | not null | See state machine §8.5.1 |
| `totalAmount` | decimal(10,2) | not null | Order total |
| `currency` | string | not null | Currency |
| `shippingAddress` | JSON | nullable | Shipping address (physical products) |
| `paymentId` | UUID | nullable, FK → Payment | Payment reference |
| `promotionId` | UUID | nullable, FK → Promotion | Applied promotion |
| `discountAmount` | decimal(10,2) | nullable | Discount applied |
| `createdAt` | timestamp | not null | Creation time |
| `updatedAt` | timestamp | not null | Last update time |
| `version` | integer | not null, default 1 | OCC version |

#### 8.3.8 OrderItem

| Field | Type | Constraints | Description |
|---|---|---|---|
| `orderItemId` | UUID | PK | Order item ID |
| `orderId` | UUID | FK → Order, indexed | Parent order |
| `productId` | UUID | FK → Product | Product |
| `variantId` | UUID | nullable, FK → ProductVariant | Variant |
| `quantity` | integer | not null | Quantity ordered |
| `unitPrice` | decimal(10,2) | not null | Unit price at purchase time |
| `lineTotal` | decimal(10,2) | not null | `quantity * unitPrice` |
| `fulfilmentStatus` | enum | not null, default `PENDING` | `PENDING`, `FULFILLED`, `SHIPPED`, `DELIVERED` |

#### 8.3.9 Shipment

| Field | Type | Constraints | Description |
|---|---|---|---|
| `shipmentId` | UUID | PK | Shipment identifier |
| `orderId` | UUID | FK → Order, indexed | Associated order |
| `carrier` | string | not null | Carrier name |
| `trackingNumber` | string | nullable | Tracking number |
| `status` | enum | not null | `CREATED`, `PICKED_UP`, `IN_TRANSIT`, `OUT_FOR_DELIVERY`, `DELIVERED`, `FAILED` |
| `shippedAt` | timestamp | nullable | Ship time |
| `deliveredAt` | timestamp | nullable | Delivery time |
| `estimatedDelivery` | timestamp | nullable | Estimated delivery date |

#### 8.3.10 Return

| Field | Type | Constraints | Description |
|---|---|---|---|
| `returnId` | UUID | PK | Return identifier |
| `orderId` | UUID | FK → Order, indexed | Original order |
| `accountId` | UUID | FK → Account | Buyer |
| `reason` | string | not null | Return reason |
| `status` | enum | not null | `REQUESTED`, `APPROVED`, `REJECTED`, `RECEIVED`, `COMPLETED` |
| `requestedAt` | timestamp | not null | Request time |
| `resolvedAt` | timestamp | nullable | Resolution time |

#### 8.3.11 Review

| Field | Type | Constraints | Description |
|---|---|---|---|
| `reviewId` | UUID | PK | Review identifier |
| `productId` | UUID | FK → Product, indexed | Product reviewed |
| `orderId` | UUID | FK → Order | Order context |
| `accountId` | UUID | FK → Account, indexed | Reviewer |
| `rating` | integer | not null, CHECK(1–5) | Star rating |
| `comment` | text | nullable | Review text |
| `status` | enum | not null, default `PUBLISHED` | `PENDING_MODERATION`, `PUBLISHED`, `HIDDEN` |
| `createdAt` | timestamp | not null | Creation time |
| `vendorResponse` | text | nullable | Vendor's response |

#### 8.3.12 Promotion

| Field | Type | Constraints | Description |
|---|---|---|---|
| `promotionId` | UUID | PK | Promotion identifier |
| `vendorId` | UUID | nullable, FK → Vendor | Owning vendor (null = platform-wide) |
| `name` | string | not null | Promotion name |
| `type` | enum | not null | `PERCENTAGE`, `FIXED_AMOUNT`, `FREE_SHIPPING` |
| `value` | decimal(10,2) | not null | Discount value (percentage or amount) |
| `code` | string | nullable, unique | Promo code |
| `minOrderAmount` | decimal(10,2) | nullable | Minimum order amount |
| `maxUses` | integer | nullable | Maximum uses |
| `usesCount` | integer | not null, default 0 | Current uses |
| `startDate` | timestamp | not null | Start date |
| `endDate` | timestamp | not null | End date |
| `status` | enum | not null, default `SCHEDULED` | `SCHEDULED`, `ACTIVE`, `EXPIRED`, `DISABLED` |

### 8.4 Key Workflows

#### 8.4.1 Vendor Onboarding

```
ALGORITHM: OnboardVendor
INPUT: accountId, storeName, description, contactEmail
OUTPUT: vendor
BEGIN
    // 1. Verify account exists and is active
    account = identityEngine.getAccount(accountId)
    IF account == NULL OR account.status != "ACTIVE" THEN
        THROW VALIDATION_ERROR("Account not active")
    END IF

    // 2. Check trust gate (GOVERNANCE PARAMETER: Trust ≥ 40)
    trustCheck = trustEngine.checkTrustGate(accountId, "VENDOR_ELIGIBILITY")
    IF trustCheck == FAIL THEN
        THROW FORBIDDEN("Trust score below vendor threshold")
    END IF

    // 3. Check KYC tier (must be at least TIER_1)
    IF account.kycTier < "TIER_1" THEN
        THROW FORBIDDEN("KYC tier too low for vendor")
    END IF

    // 4. Check for existing vendor
    IF db.vendorExists(accountId) THEN
        THROW CONFLICT("Account already has a vendor")
    END IF

    // 5. Create vendor (pending status)
    vendor = {
        vendorId: generateUUID(),
        accountId: accountId,
        storeName: storeName,
        description: description,
        status: "PENDING",
        trustScoreAtApproval: trustEngine.getTrustScore(accountId),
        contactEmail: contactEmail,
        createdAt: now(),
        version: 1
    }
    db.insert(vendor)

    writeAudit("COMMERCE", "OnboardVendor", vendor.vendorId, "CREATE", "SUCCESS")

    // 6. Auto-approve if all gates passed (or queue for manual review)
    vendor.status = "ACTIVE"
    vendor.approvedAt = now()
    db.update(vendor)

    eventBus.publish("commerce.vendor.activated", {vendorId: vendor.vendorId})

    RETURN vendor
END
```

#### 8.4.2 Add to Cart

```
ALGORITHM: AddToCart
INPUT: accountId, productId, variantId, quantity
OUTPUT: cartItem
BEGIN
    // 1. Validate product exists and is active
    product = db.findProduct(productId)
    IF product == NULL OR product.status != "ACTIVE" THEN
        THROW NOT_FOUND("Product not available")
    END IF

    // 2. Validate variant
    IF variantId != NULL THEN
        variant = db.findVariant(variantId)
        IF variant == NULL OR variant.productId != productId THEN
            THROW VALIDATION_ERROR("Invalid variant")
        END IF
        unitPrice = variant.price
    ELSE
        variantId = NULL
        unitPrice = product.basePrice
    END IF

    // 3. Check inventory availability (read-only check; not reservation)
    IF NOT inventoryService.checkAvailability(variantId, quantity) THEN
        THROW VALIDATION_ERROR("Insufficient inventory")
    END IF

    // 4. Get or create cart
    cart = db.findActiveCart(accountId)
    IF cart == NULL THEN
        cart = {cartId: generateUUID(), accountId: accountId, status: "ACTIVE"}
        db.insert(cart)
    END IF

    // 5. Check if item already in cart (merge quantities)
    existingItem = db.findCartItem(cart.cartId, productId, variantId)
    IF existingItem != NULL THEN
        existingItem.quantity += quantity
        db.update(existingItem)
        cartItem = existingItem
    ELSE
        cartItem = {
            cartItemId: generateUUID(),
            cartId: cart.cartId,
            productId: productId,
            variantId: variantId,
            quantity: quantity,
            unitPrice: unitPrice,
            addedAt: now()
        }
        db.insert(cartItem)
    END IF

    cart.updatedAt = now()
    db.update(cart)

    RETURN cartItem
END
```

#### 8.4.3 Checkout (Multi-Vendor Order Splitting)

This is the core checkout workflow with multi-vendor cart splitting, inventory reservation, payment processing, and order creation.

```
ALGORITHM: Checkout
INPUT: accountId, cartId, shippingAddress, paymentMethod, promotionCode
OUTPUT: parentOrder
BEGIN
    // 1. Validate cart
    cart = db.findCart(cartId)
    IF cart == NULL OR cart.accountId != accountId OR cart.status != "ACTIVE" THEN
        THROW VALIDATION_ERROR("Invalid cart")
    END IF

    cartItems = db.findCartItems(cartId)
    IF cartItems.isEmpty() THEN THROW VALIDATION_ERROR("Empty cart")

    // 2. Group items by vendor
    vendorGroups = groupByVendor(cartItems)
    // Result: {vendorId: [{productId, variantId, quantity, unitPrice}, ...]}

    // 3. Apply promotion (if applicable)
    discount = 0
    IF promotionCode != NULL THEN
        promotion = db.findPromotionByCode(promotionCode)
        discount = calculatePromotion(promotion, cartItems)
    END IF

    // 4. Reserve inventory for all items (Saga Step 1)
    reservations = []
    FOR EACH (vendorId, items) IN vendorGroups DO
        FOR EACH item IN items DO
            reservation = inventoryService.reserve(item.variantId, item.quantity)
            IF reservation == NULL THEN
                // Compensate: release all prior reservations
                FOR EACH r IN reservations DO inventoryService.release(r) END FOR
                THROW VALIDATION_ERROR("Inventory unavailable for product " + item.productId)
            END IF
            reservations.add(reservation)
        END FOR
    END FOR

    // 5. Calculate totals
    grandTotal = sum(cartItems.lineTotal) - discount + shippingCost

    // 6. Process payment (Saga Step 2 — call Wallet Engine)
    TRY
        payment = walletEngine.processPayment({
            accountId: accountId,
            amount: grandTotal,
            currency: "USD",
            paymentMethod: paymentMethod,
            idempotencyKey: "checkout-" + cartId
        })
    CATCH paymentError
        // Compensate: release all reservations
        FOR EACH r IN reservations DO inventoryService.release(r) END FOR
        THROW paymentError
    END CATCH

    // 7. Create parent order
    parentOrder = {
        orderId: generateUUID(),
        accountId: accountId,
        status: "PROCESSING",
        totalAmount: grandTotal,
        currency: "USD",
        shippingAddress: shippingAddress,
        paymentId: payment.paymentId,
        discountAmount: discount,
        createdAt: now(),
        version: 1
    }
    db.insert(parentOrder)

    // 8. Create child orders per vendor (Saga Step 3)
    FOR EACH (vendorId, items) IN vendorGroups DO
        vendorSubtotal = sum(items.lineTotal)
        childOrder = {
            orderId: generateUUID(),
            parentOrderId: parentOrder.orderId,
            accountId: accountId,
            vendorId: vendorId,
            status: "CONFIRMED",
            totalAmount: vendorSubtotal,
            currency: "USD",
            shippingAddress: shippingAddress,
            createdAt: now(),
            version: 1
        }
        db.insert(childOrder)

        // Create order items
        FOR EACH item IN items DO
            orderItem = {
                orderItemId: generateUUID(),
                orderId: childOrder.orderId,
                productId: item.productId,
                variantId: item.variantId,
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                lineTotal: item.quantity * item.unitPrice,
                fulfilmentStatus: "PENDING"
            }
            db.insert(orderItem)
        END FOR

        // Publish order created event per child
        outbox.publish("commerce.order.created", {
            orderId: childOrder.orderId,
            vendorId: vendorId,
            accountId: accountId,
            totalAmount: vendorSubtotal
        })
    END FOR

    // 9. Mark cart as converted
    cart.status = "CONVERTED"
    db.update(cart)

    // 10. Audit
    writeAudit("COMMERCE", "Checkout", parentOrder.orderId, "CREATE", "SUCCESS",
               {totalAmount: grandTotal, vendorCount: vendorGroups.size()})

    RETURN parentOrder
END
```

### 8.5 State Machines

#### 8.5.1 Order State Machine

```
Order State Machine:
=====================

  [PENDING] --payment confirmed--> [CONFIRMED]
                │                        │
                └──payment failed--> [CANCELLED]
                                         │
                                    [CONFIRMED] --fulfilment start--> [PROCESSING]
                                         │                                  │
                                         │                          └──packed--> [SHIPPED]
                                         │                                              │
                                         │                                    ┌──delivered--> [DELIVERED]
                                         │                                    │                    │
                                         │                                    │          └──return window expired--> [COMPLETED]
                                         │                                    │
                                         │                          [SHIPPED] --delivery failed--> [SHIPPED] (retry)
                                         │
                                    [CANCELLED] ←──cancel (before shipping)
                                    [CANCELLED] ←──admin cancel
```

#### 8.5.2 Shipment State Machine

```
  [CREATED] --picked up--> [PICKED_UP] --in transit--> [IN_TRANSIT]
      --out for delivery--> [OUT_FOR_DELIVERY] --delivered--> [DELIVERED]
      --failed delivery--> [FAILED] --retry--> [OUT_FOR_DELIVERY]
```

#### 8.5.3 Return State Machine

```
  [REQUESTED] --approved--> [APPROVED] --item received--> [RECEIVED] --refunded--> [COMPLETED]
      --rejected--> [REJECTED]
```

#### 8.5.4 Dispute State Machine

```
  [OPENED] --evidence submitted--> [UNDER_REVIEW] --resolved (buyer)--> [RESOLVED_BUYER]
      --resolved (vendor)--> [RESOLVED_VENDOR]
      --escalated--> [ESCALATED] --admin decision--> [RESOLVED_BUYER | RESOLVED_VENDOR]
```

### 8.6 Inventory Reservation Algorithm

Inventory uses pessimistic concurrency control (row-level locking) for reservation to prevent overselling:

```
ALGORITHM: ReserveInventory
INPUT: variantId, quantity
OUTPUT: reservation | NULL (if insufficient)
BEGIN
    db.beginTransaction()

    // Lock the inventory row (SELECT ... FOR UPDATE)
    inventory = db.lockInventory(variantId)

    IF inventory.quantityAvailable < quantity THEN
        db.rollback()
        RETURN NULL
    END IF

    // Reserve
    inventory.quantityReserved += quantity
    inventory.quantityAvailable = inventory.quantityOnHand - inventory.quantityReserved
    inventory.version++
    db.update(inventory)

    // Create reservation record
    reservation = {
        reservationId: generateUUID(),
        variantId: variantId,
        quantity: quantity,
        status: "HELD",
        createdAt: now(),
        expiresAt: now() + 30minutes  // auto-release after 30 min
    }
    db.insert(reservation)

    db.commit()

    RETURN reservation
END
```

```
ALGORITHM: ReleaseInventory
INPUT: reservationId
BEGIN
    db.beginTransaction()
    reservation = db.lockReservation(reservationId)
    IF reservation == NULL OR reservation.status != "HELD" THEN
        db.rollback()
        RETURN
    END IF

    inventory = db.lockInventory(reservation.variantId)
    inventory.quantityReserved -= reservation.quantity
    inventory.quantityAvailable = inventory.quantityOnHand - inventory.quantityReserved
    inventory.version++
    db.update(inventory)

    reservation.status = "RELEASED"
    db.update(reservation)

    db.commit()
END
```

```
ALGORITHM: ConsumeInventory (on order confirmation)
INPUT: reservationId
BEGIN
    db.beginTransaction()
    reservation = db.lockReservation(reservationId)
    inventory = db.lockInventory(reservation.variantId)

    inventory.quantityOnHand -= reservation.quantity
    inventory.quantityReserved -= reservation.quantity
    inventory.quantityAvailable = inventory.quantityOnHand - inventory.quantityReserved
    inventory.version++
    db.update(inventory)

    reservation.status = "CONSUMED"
    db.update(reservation)

    db.commit()
END
```

### 8.7 Settlement Algorithm

Vendor settlement is triggered on delivery confirmation, not on order creation:

```
ALGORITHM: SettleOrder
INPUT: orderId
OUTPUT: settlementResult
BEGIN
    order = db.findOrder(orderId)
    IF order == NULL THEN THROW NOT_FOUND
    IF order.status != "DELIVERED" THEN THROW CONFLICT("Order not delivered")

    // 1. Calculate QEV
    grossRevenue = order.totalAmount
    deductions = calculateDeductions(order)  // payment fees, VAT
    qev = grossRevenue - deductions

    // 2. Call Wallet Engine to execute settlement with 90/10 waterfall
    settlementResult = walletEngine.executeSettlement({
        orderId: order.orderId,
        revenueType: "COMMERCE",
        grossRevenue: grossRevenue,
        deductions: deductions,
        vendorId: order.vendorId,
        idempotencyKey: "settle-" + order.orderId
    })

    // 3. Update order status
    order.status = "COMPLETED"
    order.version++
    db.update(order)

    // 4. Publish K-Points accrual event
    outbox.publish("commerce.order.delivered", {
        orderId: order.orderId,
        accountId: order.accountId,
        vendorId: order.vendorId,
        qev: qev
    })

    writeAudit("COMMERCE", "SettleOrder", order.orderId, "SETTLE", "SUCCESS",
               {qev: qev, settlementId: settlementResult.settlementId})

    RETURN settlementResult
END
```

### 8.8 Refund Algorithm

```
ALGORITHM: ProcessRefund
INPUT: orderId, reason, refundAmount
OUTPUT: refundResult
BEGIN
    order = db.findOrder(orderId)
    IF order == NULL THEN THROW NOT_FOUND
    IF order.status NOT IN ["DELIVERED", "COMPLETED"] THEN
        THROW CONFLICT("Order not in refundable state")
    END IF

    // Validate refund amount
    IF refundAmount > order.totalAmount THEN THROW VALIDATION_ERROR

    // Call Wallet Engine to process refund (triggers reversal)
    refundResult = walletEngine.processRefund({
        orderId: order.orderId,
        paymentId: order.paymentId,
        amount: refundAmount,
        reason: reason,
        idempotencyKey: "refund-" + order.orderId
    })

    // Update order
    order.status = "REFUNDED"
    order.version++
    db.update(order)

    // Publish refund event (triggers K-Points reversal)
    outbox.publish("commerce.refund.processed", {
        orderId: order.orderId,
        accountId: order.accountId,
        refundAmount: refundAmount,
        reason: reason
    })

    // Submit trust signal (negative)
    trustEngine.submitTrustSignal(order.vendorId, "REFUND_ISSUED", "COMMERCE",
                                   order.orderId)

    writeAudit("COMMERCE", "ProcessRefund", order.orderId, "REFUND", "SUCCESS",
               {amount: refundAmount, reason: reason})

    RETURN refundResult
END
```

### 8.9 Review Submission Algorithm

```
ALGORITHM: SubmitReview
INPUT: accountId, productId, orderId, rating, comment
OUTPUT: review
BEGIN
    // 1. Validate order belongs to account and is delivered/completed
    order = db.findOrder(orderId)
    IF order == NULL OR order.accountId != accountId THEN THROW NOT_FOUND
    IF order.status NOT IN ["DELIVERED", "COMPLETED"] THEN
        THROW CONFLICT("Can only review delivered orders")
    END IF

    // 2. Check product is in this order
    IF NOT db.orderContainsProduct(orderId, productId) THEN
        THROW VALIDATION_ERROR("Product not in this order")
    END IF

    // 3. Check for existing review (one review per product per order)
    IF db.reviewExists(accountId, productId, orderId) THEN
        THROW CONFLICT("Already reviewed")
    END IF

    // 4. Validate rating
    IF rating < 1 OR rating > 5 THEN THROW VALIDATION_ERROR("Rating 1-5")

    // 5. Create review
    review = {
        reviewId: generateUUID(),
        productId: productId,
        orderId: orderId,
        accountId: accountId,
        rating: rating,
        comment: comment,
        status: "PUBLISHED",
        createdAt: now()
    }
    db.insert(review)

    // 6. Update product denormalized rating
    db.updateProductRating(productId)

    // 7. Submit trust signal
    IF rating >= 4 THEN
        trustEngine.submitTrustSignal(db.findProduct(productId).vendorId,
            "POSITIVE_REVIEW", "COMMERCE", review.reviewId)
    ELSE IF rating <= 2 THEN
        trustEngine.submitTrustSignal(db.findProduct(productId).vendorId,
            "NEGATIVE_REVIEW", "COMMERCE", review.reviewId)
    END IF

    // 8. Publish event for Intelligence Engine (relevance)
    outbox.publish("commerce.review.submitted", {
        productId: productId,
        rating: rating,
        accountId: accountId
    })

    writeAudit("COMMERCE", "SubmitReview", review.reviewId, "CREATE", "SUCCESS")

    RETURN review
END
```

### 8.10 Promotion Validation Algorithm

```
ALGORITHM: ValidatePromotion
INPUT: promotionCode, cartItems
OUTPUT: discountAmount | 0
BEGIN
    promotion = db.findPromotionByCode(promotionCode)
    IF promotion == NULL THEN RETURN 0
    IF promotion.status != "ACTIVE" THEN RETURN 0
    IF now() < promotion.startDate OR now() > promotion.endDate THEN RETURN 0
    IF promotion.maxUses != NULL AND promotion.usesCount >= promotion.maxUses THEN RETURN 0

    cartTotal = sum(cartItems.lineTotal)
    IF promotion.minOrderAmount != NULL AND cartTotal < promotion.minOrderAmount THEN
        RETURN 0
    END IF

    // Check product/category applicability (if restricted)
    IF NOT isPromotionApplicable(promotion, cartItems) THEN RETURN 0

    SWITCH promotion.type:
        CASE "PERCENTAGE":
            discount = cartTotal * (promotion.value / 100)
        CASE "FIXED_AMOUNT":
            discount = min(promotion.value, cartTotal)
        CASE "FREE_SHIPPING":
            discount = shippingCost
    END SWITCH

    RETURN discount
END
```

### 8.11 Dispute Workflow

```
ALGORITHM: OpenDispute
INPUT: orderId, accountId, reason, description, evidence
OUTPUT: dispute
BEGIN
    order = db.findOrder(orderId)
    IF order == NULL OR order.accountId != accountId THEN THROW NOT_FOUND
    IF order.status NOT IN ["SHIPPED", "DELIVERED", "COMPLETED"] THEN
        THROW CONFLICT("Cannot dispute order in current state")
    END IF

    // Check dispute window (GOVERNANCE PARAMETER, e.g., 7 days after delivery)
    IF order.deliveredAt != NULL AND now() - order.deliveredAt > disputeWindow THEN
        THROW VALIDATION_ERROR("Dispute window expired")
    END IF

    IF db.activeDisputeExists(orderId) THEN THROW CONFLICT("Dispute already open")

    dispute = {
        disputeId: generateUUID(),
        orderId: orderId,
        accountId: accountId,
        reason: reason,
        description: description,
        evidence: evidence,
        status: "OPENED",
        createdAt: now()
    }
    db.insert(dispute)

    // Notify vendor (async)
    eventBus.publish("commerce.dispute.opened", {disputeId: dispute.disputeId, orderId: orderId})

    writeAudit("COMMERCE", "OpenDispute", dispute.disputeId, "CREATE", "SUCCESS")

    RETURN dispute
END
```

### 8.12 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Vendors manage own products; buyers manage own cart/orders; admins manage all. Trust ≥ 40 for vendor eligibility. |
| **Validation** | Product fields, inventory quantities, cart quantities, shipping address, payment method, promotion code |
| **Rate limiting** | Product search: 100/min per user; add to cart: 30/min; checkout: 5/min; review submission: 5/hour |
| **Audit** | Vendor onboarding, checkout, settlement, refund, dispute open/resolve, review submission, promotion create |
| **Caching** | Product details (15min TTL), search results (60s TTL), vendor profiles (10min TTL) |
| **Concurrency** | Inventory: PCC (row-level lock); orders: OCC (version); cart: OCC |
| **Idempotency** | Checkout: idempotency key = "checkout-{cartId}"; settlement: "settle-{orderId}"; refund: "refund-{orderId}" |
| **Retries** | Payment call: 3x backoff; settlement: 3x backoff; event publish: outbox |
| **Timeout** | Payment call: 10s; inventory lock: 3s; search: 3s |
| **Failure handling** | Checkout saga with compensation (release inventory, reverse payment); circuit breaker on Wallet calls |
| **Observability** | Metrics: orders/sec, checkout conversion rate, settlement success rate, dispute rate; Traces: checkout, settlement |
| **Security boundary** | mTLS internal; KYC gating on checkout; fraud detection on transactions; vendor data isolation |

### 8.13 Sequence Diagram: Checkout

```
Client   Commerce    Inventory   Wallet    K-Rewards (async)
  |          |           |          |             |
  |--Checkout-->|        |          |             |
  |          |--validate cart       |             |
  |          |--group by vendor     |             |
  |          |--reserve inventory-->|             |
  |          |<--reservation--------|             |
  |          |--process payment---->|             |
  |          |<--payment result-----|             |
  |          |--create orders (parent + children)  |
  |          |--publish order.created (outbox)     |
  |<--order--|          |          |             |
  |          |          |          |             |
  |     (async) order.created event |             |
  |          |          |          |--settle on delivery (later)
  |          |          |          |             |--accrue K-Points (later)
```

### 8.14 Governing Requirement Traceability

SRS-COM-001–022; SAD-1 Ch.11; PLC-1 Ch.28; KR-1 KR-TRU-007, KR-ECO-014.

---

## Chapter 9 — Services Engine Design

### 9.1 Overview

The Services Engine owns the professional-services marketplace domain — providers, clients, service listings, proposals, bookings, contracts, milestones, delivery, revisions, acceptance, disputes, reviews, and settlement (SAD-1 Ch.12; PLC-1 v2.0 Chapter 29; SRS-SVC-001–019).

Implements: SRS-SVC-001–019; SAD-1 Ch.12; PLC-1 Ch.29; KR-1 KR-TRU-007, KR-ECO-014.

### 9.2 Component Design

```
┌───────────────────────────────────────────────────────────────┐
│                    SERVICES ENGINE                              │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Provider │ │ Skills   │ │Portfolio │ │ Listing  │         │
│  │ Service  │ │ Service  │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Request  │ │ Proposal │ │ Booking  │ │Contract  │         │
│  │ Service  │ │ Service  │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │Milestone │ │ Delivery │ │Revision  │ │Acceptance│         │
│  │ Service  │ │ Service  │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Dispute  │ │ Review   │ │Settlement│ │  Fraud   │         │
│  │ Service  │ │ Service  │ │ Service  │ │Detection │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │              Services-DB (PostgreSQL)                    │    │
│  └────────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
```

### 9.3 Data Models

#### 9.3.1 Provider

| Field | Type | Constraints | Description |
|---|---|---|---|
| `providerId` | UUID | PK | Provider identifier |
| `accountId` | UUID | FK → Account, unique | Provider's Identity account |
| `displayName` | string | not null | Professional display name |
| `bio` | text | nullable | Professional bio |
| `headline` | string | nullable | Professional headline (e.g., "Senior Full-Stack Developer") |
| `status` | enum | not null, default `PENDING` | `PENDING`, `ACTIVE`, `SUSPENDED`, `TERMINATED` |
| `trustScoreAtApproval` | decimal(5,2) | nullable | Trust Score at approval |
| `avatarUrl` | string | nullable | Avatar URL |
| `hourlyRate` | decimal(10,2) | nullable | Default hourly rate |
| `currency` | string | not null, default `USD` | Currency |
| `availability` | enum | not null, default `AVAILABLE` | `AVAILABLE`, `BUSY`, `UNAVAILABLE` |
| `responseTimeHours` | integer | nullable | Average response time |
| `createdAt` | timestamp | not null | Creation time |
| `approvedAt` | timestamp | nullable | Approval time |
| `version` | integer | not null, default 1 | OCC version |

#### 9.3.2 Skill

| Field | Type | Constraints | Description |
|---|---|---|---|
| `skillId` | UUID | PK | Skill identifier |
| `name` | string | not null, unique | Skill name (from taxonomy) |
| `category` | string | not null | Skill category |
| `verified` | boolean | not null, default false | Platform-verified skill |

#### 9.3.3 ProviderSkill

| Field | Type | Constraints | Description |
|---|---|---|---|
| `providerId` | UUID | FK → Provider, indexed | Provider |
| `skillId` | UUID | FK → Skill | Skill |
| `proficiencyLevel` | enum | not null | `BEGINNER`, `INTERMEDIATE`, `EXPERT` |
| `yearsExperience` | integer | nullable | Years of experience |
| `primarySkill` | boolean | not null, default false | Primary skill flag |
| PK | (`providerId`, `skillId`) | Composite primary key |

#### 9.3.4 PortfolioItem

| Field | Type | Constraints | Description |
|---|---|---|---|
| `portfolioItemId` | UUID | PK | Portfolio item ID |
| `providerId` | UUID | FK → Provider, indexed | Owner |
| `title` | string | not null | Project title |
| `description` | text | nullable | Project description |
| `imageUrl` | string | nullable | Project image |
| `projectUrl` | string | nullable | External project URL |
| `completionDate` | date | nullable | Project completion date |
| `createdAt` | timestamp | not null | Creation time |

#### 9.3.5 ServiceListing

| Field | Type | Constraints | Description |
|---|---|---|---|
| `listingId` | UUID | PK | Listing identifier |
| `providerId` | UUID | FK → Provider, indexed | Owning provider |
| `title` | string | not null | Service title |
| `description` | text | not null | Service description |
| `categoryId` | UUID | FK → Category, indexed | Service category |
| `serviceType` | enum | not null | `HOURLY`, `FIXED_PRICE`, `MILESTONE` |
| `startingPrice` | decimal(10,2) | not null | Starting price |
| `currency` | string | not null, default `USD` | Currency |
| `deliveryTimeDays` | integer | nullable | Estimated delivery time |
| `status` | enum | not null, default `DRAFT` | `DRAFT`, `ACTIVE`, `PAUSED`, `ARCHIVED` |
| `createdAt` | timestamp | not null | Creation time |
| `updatedAt` | timestamp | not null | Last update time |
| `version` | integer | not null, default 1 | OCC version |
| `averageRating` | decimal(3,2) | nullable | Average rating (denormalized) |
| `reviewCount` | integer | not null, default 0 | Review count (denormalized) |

#### 9.3.6 ServicePackage

| Field | Type | Constraints | Description |
|---|---|---|---|
| `packageId` | UUID | PK | Package identifier |
| `listingId` | UUID | FK → ServiceListing, indexed | Parent listing |
| `name` | string | not null | Package name (Basic, Standard, Premium) |
| `tier` | enum | not null | `BASIC`, `STANDARD`, `PREMIUM` |
| `description` | text | nullable | Package description |
| `price` | decimal(10,2) | not null | Package price |
| `deliveryTimeDays` | integer | not null | Delivery time for this package |
| `revisions` | integer | not null, default 1 | Number of revisions included |
| `features` | JSON | nullable | Package features list |

#### 9.3.7 ServiceRequest

| Field | Type | Constraints | Description |
|---|---|---|---|
| `requestId` | UUID | PK | Request identifier |
| `clientId` | UUID | FK → Account, indexed | Client account |
| `title` | string | not null | Request title |
| `description` | text | not null | Request description |
| `budget` | decimal(10,2) | nullable | Budget range |
| `deadline` | date | nullable | Desired deadline |
| `categoryId` | UUID | FK → Category | Category |
| `status` | enum | not null, default `OPEN` | `OPEN`, `CLOSED`, `AWARDED`, `CANCELLED` |
| `createdAt` | timestamp | not null | Creation time |

#### 9.3.8 Proposal

| Field | Type | Constraints | Description |
|---|---|---|---|
| `proposalId` | UUID | PK | Proposal identifier |
| `requestId` | UUID | FK → ServiceRequest, indexed | Request being proposed for |
| `providerId` | UUID | FK → Provider, indexed | Proposing provider |
| `coverLetter` | text | not null | Proposal cover letter |
| `proposedPrice` | decimal(10,2) | not null | Proposed price |
| `proposedTimeline` | integer | not null | Proposed timeline (days) |
| `milestones` | JSON | nullable | Proposed milestones (for milestone-priced) |
| `status` | enum | not null, default `SUBMITTED` | `SUBMITTED`, `ACCEPTED`, `REJECTED`, `WITHDRAWN` |
| `createdAt` | timestamp | not null | Creation time |

#### 9.3.9 Contract

| Field | Type | Constraints | Description |
|---|---|---|---|
| `contractId` | UUID | PK | Contract identifier |
| `proposalId` | UUID | FK → Proposal | Originating proposal |
| `clientId` | UUID | FK → Account, indexed | Client |
| `providerId` | UUID | FK → Provider, indexed | Provider |
| `listingId` | UUID | nullable, FK → ServiceListing | Associated listing (if applicable) |
| `title` | string | not null | Contract title |
| `description` | text | nullable | Contract description |
| `contractType` | enum | not null | `FIXED_PRICE`, `HOURLY`, `MILESTONE` |
| `totalAmount` | decimal(10,2) | not null | Total contract value |
| `currency` | string | not null, default `USD` | Currency |
| `status` | enum | not null | See state machine §9.5.1 |
| `escrowFunded` | boolean | not null, default false | Whether escrow is funded |
| `startDate` | timestamp | nullable | Contract start date |
| `endDate` | timestamp | nullable | Contract end date |
| `createdAt` | timestamp | not null | Creation time |
| `version` | integer | not null, default 1 | OCC version |

#### 9.3.10 Milestone

| Field | Type | Constraints | Description |
|---|---|---|---|
| `milestoneId` | UUID | PK | Milestone identifier |
| `contractId` | UUID | FK → Contract, indexed | Parent contract |
| `title` | string | not null | Milestone title |
| `description` | text | nullable | Milestone description |
| `amount` | decimal(10,2) | not null | Milestone payment amount |
| `status` | enum | not null | See state machine §9.5.2 |
| `dueDate` | date | nullable | Milestone due date |
| `sequence` | integer | not null | Milestone order |
| `deliverableUrl` | string | nullable | Submitted deliverable URL |
| `submittedAt` | timestamp | nullable | Submission time |
| `acceptedAt` | timestamp | nullable | Acceptance time |
| `revisionCount` | integer | not null, default 0 | Revisions requested |
| `version` | integer | not null, default 1 | OCC version |

#### 9.3.11 ServiceReview

| Field | Type | Constraints | Description |
|---|---|---|---|
| `reviewId` | UUID | PK | Review identifier |
| `contractId` | UUID | FK → Contract, indexed | Contract context |
| `reviewerId` | UUID | FK → Account | Reviewer |
| `revieweeId` | UUID | FK → Provider | Provider being reviewed |
| `rating` | integer | not null, CHECK(1–5) | Star rating |
| `comment` | text | nullable | Review text |
| `reviewType` | enum | not null | `CLIENT_TO_PROVIDER`, `PROVIDER_TO_CLIENT` |
| `status` | enum | not null, default `PUBLISHED` | `PENDING_MODERATION`, `PUBLISHED`, `HIDDEN` |
| `createdAt` | timestamp | not null | Creation time |

### 9.4 Key Workflows

#### 9.4.1 Provider Onboarding

```
ALGORITHM: OnboardProvider
INPUT: accountId, displayName, bio, headline, skills
OUTPUT: provider
BEGIN
    // 1. Verify account
    account = identityEngine.getAccount(accountId)
    IF account == NULL OR account.status != "ACTIVE" THEN
        THROW VALIDATION_ERROR("Account not active")
    END IF

    // 2. Check trust gate (GOVERNANCE PARAMETER: Trust ≥ 40)
    trustCheck = trustEngine.checkTrustGate(accountId, "PROVIDER_ELIGIBILITY")
    IF trustCheck == FAIL THEN
        THROW FORBIDDEN("Trust score below provider threshold")
    END IF

    // 3. Check KYC tier
    IF account.kycTier < "TIER_1" THEN
        THROW FORBIDDEN("KYC tier too low for provider")
    END IF

    // 4. Check for existing provider
    IF db.providerExists(accountId) THEN
        THROW CONFLICT("Account already has a provider profile")
    END IF

    // 5. Create provider
    provider = {
        providerId: generateUUID(),
        accountId: accountId,
        displayName: displayName,
        bio: bio,
        headline: headline,
        status: "ACTIVE",
        trustScoreAtApproval: trustEngine.getTrustScore(accountId),
        createdAt: now(),
        approvedAt: now(),
        version: 1
    }
    db.insert(provider)

    // 6. Associate skills
    FOR EACH skill IN skills DO
        skillId = db.findOrCreateSkill(skill.name, skill.category)
        db.insertProviderSkill({
            providerId: provider.providerId,
            skillId: skillId,
            proficiencyLevel: skill.proficiency,
            yearsExperience: skill.years,
            primarySkill: skill.isPrimary
        })
    END FOR

    writeAudit("SERVICES", "OnboardProvider", provider.providerId, "CREATE", "SUCCESS")

    eventBus.publish("services.provider.activated", {providerId: provider.providerId})

    RETURN provider
END
```

#### 9.4.2 Proposal Submission and Acceptance

```
ALGORITHM: SubmitProposal
INPUT: requestId, providerId, coverLetter, proposedPrice, proposedTimeline, milestones
OUTPUT: proposal
BEGIN
    request = db.findRequest(requestId)
    IF request == NULL OR request.status != "OPEN" THEN
        THROW CONFLICT("Request not open")
    END IF

    // Check provider is active
    provider = db.findProvider(providerId)
    IF provider == NULL OR provider.status != "ACTIVE" THEN
        THROW FORBIDDEN("Provider not active")
    END IF

    // Check for duplicate proposal
    IF db.proposalExists(requestId, providerId) THEN
        THROW CONFLICT("Already proposed for this request")
    END IF

    proposal = {
        proposalId: generateUUID(),
        requestId: requestId,
        providerId: providerId,
        coverLetter: coverLetter,
        proposedPrice: proposedPrice,
        proposedTimeline: proposedTimeline,
        milestones: milestones,
        status: "SUBMITTED",
        createdAt: now()
    }
    db.insert(proposal)

    writeAudit("SERVICES", "SubmitProposal", proposal.proposalId, "CREATE", "SUCCESS")

    RETURN proposal
END
```

```
ALGORITHM: AcceptProposal
INPUT: proposalId, clientId
OUTPUT: contract
BEGIN
    proposal = db.findProposal(proposalId)
    IF proposal == NULL THEN THROW NOT_FOUND
    IF proposal.status != "SUBMITTED" THEN THROW CONFLICT("Proposal not submittable")

    request = db.findRequest(proposal.requestId)
    IF request.clientId != clientId THEN THROW FORBIDDEN("Not request owner")

    // Mark proposal as accepted
    proposal.status = "ACCEPTED"
    db.update(proposal)

    // Close request
    request.status = "AWARDED"
    db.update(request)

    // Create contract
    contract = {
        contractId: generateUUID(),
        proposalId: proposal.proposalId,
        clientId: clientId,
        providerId: proposal.providerId,
        title: request.title,
        description: request.description,
        contractType: determineType(proposal),
        totalAmount: proposal.proposedPrice,
        currency: "USD",
        status: "PENDING_FUNDING",
        createdAt: now(),
        version: 1
    }
    db.insert(contract)

    // Create milestones (if milestone-priced)
    IF contract.contractType == "MILESTONE" AND proposal.milestones != NULL THEN
        FOR i, milestone IN enumerate(proposal.milestones) DO
            db.insert({
                milestoneId: generateUUID(),
                contractId: contract.contractId,
                title: milestone.title,
                description: milestone.description,
                amount: milestone.amount,
                status: "PENDING",
                sequence: i,
                version: 1
            })
        END FOR
    END IF

    // Publish event for Wallet Engine to fund escrow
    outbox.publish("services.contract.accepted", {
        contractId: contract.contractId,
        clientId: clientId,
        providerId: proposal.providerId,
        totalAmount: contract.totalAmount
    })

    writeAudit("SERVICES", "AcceptProposal", contract.contractId, "CREATE", "SUCCESS")

    RETURN contract
END
```

#### 9.4.3 Milestone Delivery and Acceptance

```
ALGORITHM: SubmitDeliverable
INPUT: milestoneId, providerId, deliverableUrl
OUTPUT: milestone
BEGIN
    milestone = db.findMilestone(milestoneId)
    IF milestone == NULL THEN THROW NOT_FOUND

    contract = db.findContract(milestone.contractId)
    IF contract.providerId != providerId THEN THROW FORBIDDEN("Not contract provider")
    IF contract.status != "IN_PROGRESS" THEN THROW CONFLICT("Contract not in progress")
    IF milestone.status NOT IN ["PENDING", "REVISION_REQUESTED"] THEN
        THROW CONFLICT("Milestone not submittable")
    END IF

    milestone.deliverableUrl = deliverableUrl
    milestone.submittedAt = now()
    milestone.status = "DELIVERED"
    milestone.version++
    db.update(milestone)

    // Publish event for auto-acceptance timer
    outbox.publish("services.milestone.delivered", {
        milestoneId: milestone.milestoneId,
        contractId: milestone.contractId,
        autoAcceptAt: now() + autoAcceptWindow  // GOVERNANCE PARAMETER
    })

    writeAudit("SERVICES", "SubmitDeliverable", milestone.milestoneId, "UPDATE", "SUCCESS")

    RETURN milestone
END
```

```
ALGORITHM: AcceptDeliverable
INPUT: milestoneId, clientId
OUTPUT: milestone, settlementResult
BEGIN
    milestone = db.findMilestone(milestoneId)
    IF milestone == NULL THEN THROW NOT_FOUND

    contract = db.findContract(milestone.contractId)
    IF contract.clientId != clientId THEN THROW FORBIDDEN("Not contract client")
    IF milestone.status != "DELIVERED" THEN THROW CONFLICT("Milestone not delivered")

    // Accept milestone
    milestone.status = "ACCEPTED"
    milestone.acceptedAt = now()
    milestone.version++
    db.update(milestone)

    // Settle milestone payment
    settlementResult = walletEngine.executeSettlement({
        contractId: contract.contractId,
        milestoneId: milestone.milestoneId,
        revenueType: "SERVICES",
        grossRevenue: milestone.amount,
        deductions: 0,
        providerId: contract.providerId,
        idempotencyKey: "milestone-settle-" + milestone.milestoneId
    })

    // Submit trust signal (positive)
    trustEngine.submitTrustSignal(contract.providerId, "TRANSACTION_COMPLETED",
                                   "SERVICES", milestone.milestoneId)

    // Publish K-Points accrual event
    outbox.publish("services.milestone.accepted", {
        milestoneId: milestone.milestoneId,
        contractId: contract.contractId,
        providerId: contract.providerId,
        clientId: contract.clientId,
        amount: milestone.amount
    })

    // Check if all milestones accepted → contract completed
    milestones = db.findMilestones(contract.contractId)
    IF allAccepted(milestones) THEN
        contract.status = "COMPLETED"
        contract.endDate = now()
        contract.version++
        db.update(contract)

        outbox.publish("services.contract.completed", {
            contractId: contract.contractId,
            providerId: contract.providerId,
            clientId: contract.clientId
        })
    END IF

    writeAudit("SERVICES", "AcceptDeliverable", milestone.milestoneId, "UPDATE", "SUCCESS",
               {settlementId: settlementResult.settlementId})

    RETURN milestone, settlementResult
END
```

#### 9.4.4 Auto-Acceptance

If the client does not respond within the review window, the system auto-accepts the delivery:

```
ALGORITHM: AutoAcceptDeliverable (scheduled job)
INPUT: milestoneId
BEGIN
    milestone = db.findMilestone(milestoneId)
    IF milestone == NULL OR milestone.status != "DELIVERED" THEN RETURN

    // Check if auto-accept window has passed
    IF now() - milestone.submittedAt < autoAcceptWindow THEN RETURN

    // Check no active dispute
    IF db.activeDisputeExists(milestone.contractId, milestoneId) THEN RETURN

    // Auto-accept
    milestone.status = "ACCEPTED"
    milestone.acceptedAt = now()
    milestone.version++
    db.update(milestone)

    // Settle (same as manual acceptance)
    settlementResult = walletEngine.executeSettlement({
        contractId: milestone.contractId,
        milestoneId: milestoneId,
        revenueType: "SERVICES",
        grossRevenue: milestone.amount,
        deductions: 0,
        providerId: contract.providerId,
        idempotencyKey: "milestone-settle-auto-" + milestoneId
    })

    outbox.publish("services.milestone.auto_accepted", {
        milestoneId: milestoneId,
        contractId: milestone.contractId
    })

    writeAudit("SERVICES", "AutoAcceptDeliverable", milestoneId, "UPDATE", "SUCCESS",
               {reason: "auto_accept_window_expired"})
END
```

#### 9.4.5 Revision Request

```
ALGORITHM: RequestRevision
INPUT: milestoneId, clientId, feedback
OUTPUT: milestone
BEGIN
    milestone = db.findMilestone(milestoneId)
    contract = db.findContract(milestone.contractId)
    IF contract.clientId != clientId THEN THROW FORBIDDEN
    IF milestone.status != "DELIVERED" THEN THROW CONFLICT("Not in delivered state")

    milestone.status = "REVISION_REQUESTED"
    milestone.revisionCount++
    milestone.version++
    db.update(milestone)

    // Store revision feedback
    db.insertRevisionRequest({
        revisionRequestId: generateUUID(),
        milestoneId: milestoneId,
        feedback: feedback,
        createdAt: now()
    })

    // Notify provider
    eventBus.publish("services.revision.requested", {
        milestoneId: milestoneId,
        providerId: contract.providerId,
        feedback: feedback
    })

    writeAudit("SERVICES", "RequestRevision", milestoneId, "UPDATE", "SUCCESS",
               {revisionNumber: milestone.revisionCount})

    RETURN milestone
END
```

### 9.5 State Machines

#### 9.5.1 Contract State Machine

```
Contract State Machine:
========================

  [PENDING_FUNDING] --escrow funded--> [IN_PROGRESS]
        │                                    │
        └──funding failed--> [CANCELLED]      │
                                        [IN_PROGRESS] --all milestones accepted--> [COMPLETED]
                                        [IN_PROGRESS] --cancelled--> [CANCELLED]
                                        [IN_PROGRESS] --dispute opened--> [DISPUTED]
                                        [DISPUTED] --dispute resolved--> [IN_PROGRESS | COMPLETED | CANCELLED]
```

#### 9.5.2 Milestone State Machine

```
Milestone State Machine:
========================

  [PENDING] --deliverable submitted--> [DELIVERED]
        │                                    │
        │                              [DELIVERED] --accepted--> [ACCEPTED]
        │                              [DELIVERED] --revision requested--> [REVISION_REQUESTED]
        │                              [DELIVERED] --auto-accept--> [ACCEPTED]
        │                              [DELIVERED] --dispute--> [DISPUTED]
        │                                    │
        └──contract cancelled--> [CANCELLED]  [REVISION_REQUESTED] --resubmitted--> [DELIVERED]
                                             [DISPUTED] --resolved--> [ACCEPTED | CANCELLED]
```

#### 9.5.3 Service Request State Machine

```
  [OPEN] --proposal accepted--> [AWARDED] --contract created--> [CLOSED]
      --cancelled by client--> [CANCELLED]
      --expired--> [CLOSED]
```

### 9.6 Provider Reputation Calculation

```
ALGORITHM: CalculateProviderReputation
INPUT: providerId
OUTPUT: reputationScore
BEGIN
    // 1. Gather all reviews for this provider
    reviews = db.findReviewsByProvider(providerId)

    // 2. Calculate weighted average rating
    // Recent reviews weighted higher
    weightedSum = 0
    weightTotal = 0
    FOR EACH review IN reviews DO
        ageWeight = max(0.5, 1.0 - (daysSince(review.createdAt) / 365))
        weightedSum += review.rating * ageWeight
        weightTotal += ageWeight
    END FOR

    avgRating = weightTotal > 0 ? weightedSum / weightTotal : 0

    // 3. Calculate completion rate
    contracts = db.findContractsByProvider(providerId)
    completed = contracts.filter(c => c.status == "COMPLETED").size()
    cancelled = contracts.filter(c => c.status == "CANCELLED").size()
    completionRate = contracts.size() > 0 ? completed / contracts.size() : 0

    // 4. Calculate on-time delivery rate
    onTimeDeliveries = 0
    totalDeliveries = 0
    FOR EACH contract IN completed.contracts DO
        milestones = db.findMilestones(contract.contractId)
        FOR EACH m IN milestones DO
            totalDeliveries++
            IF m.acceptedAt != NULL AND m.dueDate != NULL AND m.acceptedAt <= m.dueDate THEN
                onTimeDeliveries++
            END IF
        END FOR
    END FOR
    onTimeRate = totalDeliveries > 0 ? onTimeDeliveries / totalDeliveries : 0

    // 5. Calculate reputation score (blend)
    reputationScore = (avgRating / 5 * 0.5) + (completionRate * 0.3) + (onTimeRate * 0.2)

    RETURN reputationScore  // 0.0 to 1.0
END
```

### 9.7 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Providers manage own listings/portfolios/contracts; clients manage own requests/proposals/contracts; admins manage all. Trust ≥ 40 for provider eligibility. |
| **Validation** | Service listing fields, proposal fields, contract terms, milestone amounts, deliverable URLs, review ratings |
| **Rate limiting** | Proposal submission: 10/hour per provider; review submission: 5/hour; booking: 20/hour |
| **Audit** | Provider onboarding, proposal submission/acceptance, contract creation, milestone delivery/acceptance, revision, settlement, dispute, review |
| **Caching** | Provider profiles (10min TTL), service listings (15min TTL), search results (60s TTL) |
| **Concurrency** | Contract updates: OCC (version); milestone updates: OCC; proposal acceptance: PCC (lock proposal) |
| **Idempotency** | Milestone settlement: "milestone-settle-{milestoneId}"; auto-accept: "milestone-settle-auto-{milestoneId}" |
| **Retries** | Settlement call: 3x backoff; event publish: outbox |
| **Timeout** | Settlement call: 10s; proposal submission: 5s; search: 3s |
| **Failure handling** | Escrow funding failure → contract cancelled; settlement failure → retry then flag; auto-accept timer handles client non-response |
| **Observability** | Metrics: contracts/sec, milestone acceptance rate, auto-accept rate, dispute rate, completion rate; Traces: contract flow, milestone settlement |
| **Security boundary** | mTLS internal; KYC gating on provider; escrow protection for client; fraud detection on service transactions |

### 9.8 Sequence Diagram: Contract Lifecycle

```
Client    Services Engine    Wallet Engine    K-Rewards (async)
  |              |                  |                |
  |--AcceptProposal-->|             |                |
  |              |--create contract  |                |
  |              |--publish contract.accepted (outbox)|
  |<--contract--|                  |                |
  |              |                  |                |
  |     (async) contract.accepted event              |
  |              |                  |--fund escrow   |
  |              |<--escrow funded--|                |
  |              |--set contract IN_PROGRESS         |
  |              |                  |                |
  |     ... provider delivers milestone ...          |
  |              |                  |                |
  |--AcceptDeliverable-->|          |                |
  |              |--accept milestone |                |
  |              |--settle milestone->|                |
  |              |<--settlement------|                |
  |              |--publish milestone.accepted (outbox)|
  |<--accepted--|                  |        |--accrue K-Points
  |              |                  |                |
  |     ... all milestones accepted ...             |
  |              |--set contract COMPLETED            |
  |              |--publish contract.completed        |
```

### 9.9 Governing Requirement Traceability

SRS-SVC-001–019; SAD-1 Ch.12; PLC-1 Ch.29; KR-1 KR-TRU-007, KR-ECO-014.

---

## Chapter 10 — K-Rewards Engine Design

### 10.1 Overview

The K-Rewards Engine is the sole authority for K-Points, K-Rings, K-Levels, Leadership Multiplication, Reward Share, and the Monthly Reward Cycle (SAD-1 Ch.13, Ch.20–21; KR-1 KR-FND-003; SRS-KRW-001–015).

Implements: SRS-KRW-001–015; SAD-1 Ch.13, Ch.20–21; PLC-1 Ch.26; KR-1 KR-FND-003, KR-ECO-001–063, KR-PNT-001–025, KR-RNG-001–017, KR-LVL-001–024, KR-RWD-001.

All numerical K-Rewards values are **GOVERNANCE PARAMETERS** owned by KR-1. SDD-1 designs the algorithms and data structures that consume them as configuration.

### 10.2 Component Design

```
┌───────────────────────────────────────────────────────────────┐
│                    K-REWARDS ENGINE                            │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ K-Points │ │ K-Rings  │ │ K-Levels │ │Leadership│         │
│  │ Service  │ │ Service  │ │ Service  │ │Multiply  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Reward   │ │ Reward   │ │ Monthly  │ │ 90/10    │         │
│  │ Share    │ │ Pool     │ │ Cycle    │ │ Control  │         │
│  │ Service  │ │ Service  │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐                                                 │
│  │  Audit   │                                                 │
│  │ Service  │                                                 │
│  └──────────┘                                                 │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  K-Rewards-DB (PostgreSQL + Graph DB for K-Rings)       │    │
│  └────────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
```

### 10.3 Data Models

#### 10.3.1 KPointsLedger (Points Ledger)

| Field | Type | Constraints | Description |
|---|---|---|---|
| `ledgerEntryId` | UUID | PK | Ledger entry ID |
| `accountId` | UUID | FK → Account, indexed | Participant |
| `category` | enum | not null, indexed | `COMMERCE`, `SERVICES`, `LEARNING`, `COMMUNITY`, `ASSESSMENT`, `COMPLETION`, `PATH`, `MILESTONE` (KR-PNT-003) |
| `points` | decimal(15,2) | not null | K-Points (positive for accrual, negative for reversal) |
| `multiplier` | decimal(10,2) | not null | K-Level multiplier applied |
| `baseValue` | decimal(15,2) | not null | Base value before multiplier |
| `evidenceRef` | string | not null, indexed | Reference to source event (idempotency) |
| `cycleId` | UUID | not null, indexed | Monthly cycle ID |
| `entryType` | enum | not null | `ACCRUAL`, `REVERSAL`, `DEFERRED_REVERSAL` |
| `status` | enum | not null | `ACTIVE`, `REVERSED` |
| `createdAt` | timestamp | not null | Entry time |
| `reversedBy` | UUID | nullable | Reversal entry ID (if reversed) |
| `auditHash` | string | not null | Hash for reconstructability (KR-FND-015) |

#### 10.3.2 LifetimeStatistics

| Field | Type | Constraints | Description |
|---|---|---|---|
| `accountId` | UUID | PK | Participant |
| `lifetimeKPoints` | decimal(20,2) | not null, default 0 | Cumulative K-Points (KR-PNT-020) |
| `cyclesParticipated` | integer | not null, default 0 | Total cycles participated |
| `currentKLevel` | integer | not null, default 1 | Current K-Level (1–15) |
| `highestKLevel` | integer | not null, default 1 | Highest K-Level achieved |
| `kLevelAchievedAt` | timestamp | nullable | When current K-Level was achieved |
| `activeStatus` | boolean | not null, default true | Whether active maintenance is met |
| `lastActiveCycleId` | UUID | nullable | Last cycle of active status |
| `version` | integer | not null, default 1 | OCC version |

#### 10.3.3 KLevelProgression (Progression Matrix)

| Field | Type | Constraints | Description |
|---|---|---|---|
| `kLevel` | integer | PK | K-Level (1–15) |
| `tier` | enum | not null | `FOUNDATION`, `BUILDING`, `LEADERSHIP`, `EXECUTIVE`, `LEGACY` |
| `minLifetimeKPoints` | decimal(20,2) | not null | Minimum lifetime K-Points (GOVERNANCE PARAMETER) |
| `minCyclesParticipated` | integer | not null | Minimum cycles participated |
| `minTrustScore` | decimal(5,2) | not null | Minimum Trust Score |
| `multiplier` | decimal(10,2) | not null | Reward Share multiplier |
| `minRing1Members` | integer | not null | Min Ring 1 qualifying members |
| `minRing2Members` | integer | not null | Min Ring 2 qualifying members |
| `minRing3Members` | integer | not null | Min Ring 3 qualifying members |
| `minRing4Members` | integer | not null | Min Ring 4 qualifying members |
| `minRing5Members` | integer | not null | Min Ring 5 qualifying members |
| `minRing1KLevel` | integer | not null | Min K-Level of Ring 1 members |
| `minRing2KLevel` | integer | not null | Min K-Level of Ring 2 members |
| `minRing3KLevel` | integer | not null | Min K-Level of Ring 3 members |
| `minRing4KLevel` | integer | not null | Min K-Level of Ring 4 members |
| `minRing5KLevel` | integer | not null | Min K-Level of Ring 5 members |
| `minPersonalKPoints` | decimal(15,2) | not null | Min personal K-Points (active maintenance) |
| `minGroupActivity` | decimal(15,2) | not null | Min group activity (active maintenance) |

All values are **GOVERNANCE PARAMETERS** loaded from KR-1 Appendix A and Appendix B.

#### 10.3.4 RingGraph (Graph DB)

```
Graph DB Schema (Neo4j, reference):
===================================

Node Label: Participant
    Properties:
        accountId: UUID (indexed)
        kLevel: integer
        trustScore: decimal
        activeStatus: boolean
        kycTier: enum

Edge Type: REFERRED_BY (directed: referred → referrer)
    Properties:
        referralDate: timestamp
        status: enum (ACTIVE, FRAUDULENT)
```

#### 10.3.5 RingContribution

| Field | Type | Constraints | Description |
|---|---|---|---|
| `ringContributionId` | UUID | PK | Record ID |
| `accountId` | UUID | FK → Account, indexed | Leader |
| `cycleId` | UUID | not null, indexed | Cycle |
| `ring1Members` | integer | not null | Active qualifying Ring 1 count |
| `ring2Members` | integer | not null | Active qualifying Ring 2 count |
| `ring3Members` | integer | not null | Active qualifying Ring 3 count |
| `ring4Members` | integer | not null | Active qualifying Ring 4 count |
| `ring5Members` | integer | not null | Active qualifying Ring 5 count |
| `ring1Contribution` | decimal(15,2) | not null | Weighted contribution |
| `ring2Contribution` | decimal(15,2) | not null | Weighted contribution |
| `ring3Contribution` | decimal(15,2) | not null | Weighted contribution |
| `ring4Contribution` | decimal(15,2) | not null | Weighted contribution |
| `ring5Contribution` | decimal(15,2) | not null | Weighted contribution |
| `totalContribution` | decimal(15,2) | not null | Sum of all ring contributions |
| `calculatedAt` | timestamp | not null | Calculation time |

#### 10.3.6 RewardPool

| Field | Type | Constraints | Description |
|---|---|---|---|
| `poolId` | UUID | PK | Pool identifier |
| `cycleId` | UUID | not null, unique | Monthly cycle |
| `totalAmount` | decimal(20,2) | not null | Total pool amount |
| `distributedAmount` | decimal(20,2) | not null, default 0 | Amount distributed |
| `undistributedAmount` | decimal(20,2) | not null, default 0 | Undistributed amount |
| `status` | enum | not null | `ACCUMULATING`, `CLOSED`, `DISTRIBUTING`, `COMPLETED` |
| `cycleStart` | timestamp | not null | Cycle start |
| `cycleEnd` | timestamp | not null | Cycle end (cutoff) |
| `closedAt` | timestamp | nullable | Pool closure time |
| `completedAt` | timestamp | nullable | Cycle completion time |

#### 10.3.7 RewardDistribution

| Field | Type | Constraints | Description |
|---|---|---|---|
| `distributionId` | UUID | PK | Distribution ID |
| `accountId` | UUID | FK → Account, indexed | Participant |
| `cycleId` | UUID | not null, indexed | Cycle |
| `poolId` | UUID | FK → RewardPool | Pool |
| `rewardShareScore` | decimal(15,6) | not null | Reward Share Score |
| `calculatedReward` | decimal(20,2) | not null | Calculated reward before cap |
| `cappedReward` | decimal(20,2) | not null | Reward after cap |
| `finalReward` | decimal(20,2) | not null | Final reward after pro-rata |
| `settlementId` | UUID | nullable | Wallet settlement reference |
| `status` | enum | not null | `CALCULATED`, `DISTRIBUTED`, `FAILED` |
| `auditHash` | string | not null | Hash for reconstructability |

#### 10.3.8 RewardCycle

| Field | Type | Constraints | Description |
|---|---|---|---|
| `cycleId` | UUID | PK | Cycle identifier |
| `cycleMonth` | integer | not null | Month (1–12) |
| `cycleYear` | integer | not null | Year |
| `cycleLabel` | string | not null | Human label (e.g., "2026-08") |
| `status` | enum | not null | `ACCUMULATING`, `POOL_CLOSED`, `CALCULATING`, `DISTRIBUTING`, `RECONCILING`, `RESET`, `COMPLETED`, `FAILED` |
| `stage` | enum | not null | Current stage in cycle pipeline |
| `startedAt` | timestamp | not null | Cycle start |
| `completedAt` | timestamp | nullable | Cycle completion |
| `participantCount` | integer | nullable | Eligible participants |

### 10.4 K-Points Accrual Algorithm

```
ALGORITHM: AccrueKPoints
INPUT: accountId, category, baseValue, evidenceRef, sourceEngine
OUTPUT: ledgerEntry | REJECTED
BEGIN
    // 1. Idempotency check
    IF db.ledgerEntryExists(evidenceRef) THEN
        RETURN db.findLedgerEntry(evidenceRef)  // already processed
    END IF

    // 2. Genuine activity check (KR-PNT-002, KR-FND-008)
    IF NOT isGenuineActivity(evidenceRef, sourceEngine) THEN
        writeAudit("KREWARDS", "AccrueKPoints", accountId, "REJECT", "FAILURE",
                   {reason: "not_genuine_activity"})
        RETURN REJECTED
    END IF

    // 3. Fraud check (consult Intelligence Engine)
    fraudSignals = intelligenceEngine.checkFraudSignals({
        accountId: accountId,
        activityType: category,
        evidenceRef: evidenceRef
    })
    IF fraudSignals.isFraudulent THEN
        writeAudit("KREWARDS", "AccrueKPoints", accountId, "REJECT", "FAILURE",
                   {reason: "fraud_detected", signals: fraudSignals})
        RETURN REJECTED
    END IF

    // 4. Trust gate check
    trustCheck = trustEngine.checkTrustGate(accountId, "KPOINTS_ELIGIBILITY")
    IF trustCheck == FAIL THEN
        writeAudit("KREWARDS", "AccrueKPoints", accountId, "REJECT", "FAILURE",
                   {reason: "trust_below_threshold"})
        RETURN REJECTED
    END IF

    // 5. Sanction check
    IF administrationEngine.isSanctioned(accountId) THEN
        writeAudit("KREWARDS", "AccrueKPoints", accountId, "REJECT", "FAILURE",
                   {reason: "sanctioned"})
        RETURN REJECTED
    END IF

    // 6. Get K-Level multiplier
    kLevel = getKLevel(accountId)
    multiplier = getKLevelMultiplier(kLevel)  // GOVERNANCE PARAMETER (KR-LVL-011)

    // 7. Calculate K-Points (KR-PNT-005)
    points = baseValue * multiplier * getCategoryFactor(category)

    // 8. Check category cap (KR-PNT-008)
    cycleId = getCurrentCycleId()
    categoryTotal = db.getCategoryTotal(accountId, category, cycleId)
    categoryCap = getCategoryCap(category)  // GOVERNANCE PARAMETER
    IF categoryTotal + points > categoryCap THEN
        points = max(0, categoryCap - categoryTotal)  // cap remaining
        IF points == 0 THEN
            writeAudit("KREWARDS", "AccrueKPoints", accountId, "REJECT", "FAILURE",
                       {reason: "category_cap_reached", category: category})
            RETURN REJECTED
        END IF
    END IF

    // 9. Create ledger entry
    ledgerEntry = {
        ledgerEntryId: generateUUID(),
        accountId: accountId,
        category: category,
        points: points,
        multiplier: multiplier,
        baseValue: baseValue,
        evidenceRef: evidenceRef,
        cycleId: cycleId,
        entryType: "ACCRUAL",
        status: "ACTIVE",
        createdAt: now(),
        auditHash: sha256(accountId + category + points + evidenceRef + now())
    }
    db.insert(ledgerEntry)

    // 10. Update lifetime statistics
    stats = db.getLifetimeStatistics(accountId)
    stats.lifetimeKPoints += points
    stats.version++
    db.update(stats)

    // 11. Publish event
    outbox.publish("krewards.kpoints.accrued", {
        accountId: accountId,
        points: points,
        category: category,
        cycleId: cycleId
    })

    // 12. Audit
    writeAudit("KREWARDS", "AccrueKPoints", accountId, "ACCRUE", "SUCCESS",
               {points: points, category: category, evidenceRef: evidenceRef})

    RETURN ledgerEntry
END
```

### 10.5 Ring Contribution Calculation Algorithm

```
ALGORITHM: CalculateRingContribution
INPUT: accountId, cycleId
OUTPUT: ringContribution
BEGIN
    // 1. Query graph DB for ring membership
    ringCounts = {}
    FOR r = 1 TO 5 DO
        // Get members at graph distance r
        members = graphDB.query(
            "MATCH (leader:Participant {accountId: $id})
             MATCH (member:Participant)-[:REFERRED_BY*" + r + "]->(leader)
             WHERE member.activeStatus = true
               AND member.trustScore >= $minTrust
               AND NOT member.isSanctioned
             RETURN member"
        )
        
        // Filter qualifying members (meet min K-Level for this ring if applicable)
        qualifyingCount = 0
        FOR EACH member IN members DO
            IF isQualifyingMember(member, r) THEN
                qualifyingCount++
            END IF
        END FOR

        ringCounts[r] = qualifyingCount
    END FOR

    // 2. Apply density gates (KR-RNG-009)
    contributions = {}
    FOR r = 1 TO 5 DO
        densityGate = getDensityGate(r)  // GOVERNANCE PARAMETER
        IF ringCounts[r] < densityGate THEN
            contributions[r] = 0  // ring doesn't contribute
        ELSE
            weight = getRingWeight(r)  // GOVERNANCE PARAMETER (KR-RNG-008)
            contributions[r] = weight * ringCounts[r]
        END IF
    END FOR

    // 3. Calculate total (KR-RNG-011)
    totalContribution = sum(contributions[1..5])

    // 4. Store
    ringContribution = {
        ringContributionId: generateUUID(),
        accountId: accountId,
        cycleId: cycleId,
        ring1Members: ringCounts[1],
        ring2Members: ringCounts[2],
        ring3Members: ringCounts[3],
        ring4Members: ringCounts[4],
        ring5Members: ringCounts[5],
        ring1Contribution: contributions[1],
        ring2Contribution: contributions[2],
        ring3Contribution: contributions[3],
        ring4Contribution: contributions[4],
        ring5Contribution: contributions[5],
        totalContribution: totalContribution,
        calculatedAt: now()
    }
    db.insert(ringContribution)

    RETURN ringContribution
END
```

### 10.6 K-Level Promotion Algorithm

```
ALGORITHM: EvaluateKLevelPromotion
INPUT: accountId
OUTPUT: promotionResult {eligible: boolean, newLevel: integer, failingRequirements: list}
BEGIN
    stats = db.getLifetimeStatistics(accountId)
    currentLevel = stats.currentKLevel
    targetLevel = currentLevel + 1

    IF targetLevel > 15 THEN RETURN {eligible: false, reason: "max_level"}

    // Load progression matrix for target level (GOVERNANCE PARAMETERS)
    requirements = db.getKLevelProgression(targetLevel)

    failingRequirements = []

    // 1. Lifetime K-Points check
    IF stats.lifetimeKPoints < requirements.minLifetimeKPoints THEN
        failingRequirements.add("lifetime_k_points: " + stats.lifetimeKPoints +
            " < " + requirements.minLifetimeKPoints)
    END IF

    // 2. Cycles participated check
    IF stats.cyclesParticipated < requirements.minCyclesParticipated THEN
        failingRequirements.add("cycles_participated: " + stats.cyclesParticipated +
            " < " + requirements.minCyclesParticipated)
    END IF

    // 3. Trust Score check
    trustScore = trustEngine.getTrustScore(accountId)
    IF trustScore < requirements.minTrustScore THEN
        failingRequirements.add("trust_score: " + trustScore +
            " < " + requirements.minTrustScore)
    END IF

    // 4. Ring member counts and K-Level distribution (Leadership Multiplication)
    cycleId = getCurrentCycleId()
    ringContribution = db.findRingContribution(accountId, cycleId)
    IF ringContribution == NULL THEN
        ringContribution = calculateRingContribution(accountId, cycleId)
    END IF

    // Check ring member counts
    IF ringContribution.ring1Members < requirements.minRing1Members THEN
        failingRequirements.add("ring1_members: " + ringContribution.ring1Members +
            " < " + requirements.minRing1Members)
    END IF
    // ... repeat for rings 2–5 ...

    // Check K-Level distribution within rings (Anti-Accumulation)
    kLevelDistribution = evaluateKLevelDistribution(accountId, requirements)
    IF NOT kLevelDistribution.passes THEN
        failingRequirements.addAll(kLevelDistribution.failures)
    END IF

    // 5. Sanction check
    IF administrationEngine.isSanctioned(accountId) THEN
        failingRequirements.add("active_sanction")
    END IF

    // 6. Active maintenance check
    IF NOT stats.activeStatus THEN
        failingRequirements.add("not_active_status")
    END IF

    // Determine eligibility
    IF failingRequirements.isEmpty() THEN
        RETURN {eligible: true, newLevel: targetLevel, failingRequirements: []}
    ELSE
        RETURN {eligible: false, newLevel: currentLevel,
                failingRequirements: failingRequirements}
    END IF
END
```

```
ALGORITHM: PromoteKLevel
INPUT: accountId
OUTPUT: promotionResult
BEGIN
    result = evaluateKLevelPromotion(accountId)
    IF NOT result.eligible THEN
        writeAudit("KREWARDS", "PromoteKLevel", accountId, "PROMOTE", "FAILURE",
                   {failingRequirements: result.failingRequirements})
        RETURN result
    END IF

    // Promote
    stats = db.getLifetimeStatistics(accountId)
    stats.highestKLevel = max(stats.highestKLevel, result.newLevel)
    stats.currentKLevel = result.newLevel
    stats.kLevelAchievedAt = now()
    stats.version++
    db.update(stats)

    // Update graph DB node property
    graphDB.updateNode(accountId, {kLevel: result.newLevel})

    // Publish promotion event
    outbox.publish("krewards.klevel.promoted", {
        accountId: accountId,
        oldLevel: result.newLevel - 1,
        newLevel: result.newLevel
    })

    writeAudit("KREWARDS", "PromoteKLevel", accountId, "PROMOTE", "SUCCESS",
               {newLevel: result.newLevel})

    RETURN result
END
```

### 10.7 K-Level Distribution Evaluation (Anti-Accumulation)

```
ALGORITHM: EvaluateKLevelDistribution
INPUT: accountId, requirements (for target K-Level)
OUTPUT: {passes: boolean, failures: list}
BEGIN
    failures = []

    // For each ring, check that there are enough members at the required K-Level
    ringRequirements = [
        {ring: 1, minMembers: requirements.minRing1Members, minKLevel: requirements.minRing1KLevel},
        {ring: 2, minMembers: requirements.minRing2Members, minKLevel: requirements.minRing2KLevel},
        {ring: 3, minMembers: requirements.minRing3Members, minKLevel: requirements.minRing3KLevel},
        {ring: 4, minMembers: requirements.minRing4Members, minKLevel: requirements.minRing4KLevel},
        {ring: 5, minMembers: requirements.minRing5Members, minKLevel: requirements.minRing5KLevel}
    ]

    FOR EACH req IN ringRequirements DO
        // Query graph DB for members in this ring at or above the required K-Level
        qualifyingMembers = graphDB.query(
            "MATCH (leader:Participant {accountId: $id})
             MATCH (member:Participant)-[:REFERRED_BY*" + req.ring + "]->(leader)
             WHERE member.activeStatus = true
               AND member.kLevel >= " + req.minKLevel + "
               AND member.trustScore >= $minTrust
               AND NOT member.isSanctioned
             RETURN count(member) as count"
        )

        IF qualifyingMembers < req.minMembers THEN
            failures.add("ring" + req.ring + "_klevel_distribution: " +
                qualifyingMembers + " members at K-Level>=" + req.minKLevel +
                " < required " + req.minMembers)
        END IF
    END FOR

    RETURN {passes: failures.isEmpty(), failures: failures}
END
```

### 10.8 Reward Share Calculation Algorithm

```
ALGORITHM: CalculateRewardShare
INPUT: accountId, cycleId, rewardPoolTotal
OUTPUT: rewardShareScore
BEGIN
    // 1. Get Monthly K-Points
    monthlyKPoints = db.getMonthlyKPoints(accountId, cycleId)

    // 2. Get Ring Contribution
    ringContribution = db.findRingContribution(accountId, cycleId)
    IF ringContribution == NULL THEN
        ringContribution = calculateRingContribution(accountId, cycleId)
    END IF

    // 3. Get K-Level Multiplier
    kLevel = getKLevel(accountId)
    multiplier = getKLevelMultiplier(kLevel)  // GOVERNANCE PARAMETER

    // 4. Get Trust Score
    trustScore = trustEngine.getTrustScore(accountId)

    // 5. Normalize across all eligible participants
    // Get all eligible participants for this cycle
    eligibleParticipants = getEligibleParticipants(cycleId)

    // Normalize K-Points (0–1 scale)
    maxKPoints = max(eligibleParticipants.monthlyKPoints)
    normalizedKPoints = maxKPoints > 0 ? monthlyKPoints / maxKPoints : 0

    // Normalize Ring Contribution (0–1 scale)
    maxRC = max(eligibleParticipants.ringContribution)
    normalizedRC = maxRC > 0 ? ringContribution.totalContribution / maxRC : 0

    // Normalize Trust Score (0–1 scale)
    normalizedTrust = trustScore / 100.0

    // 6. Blend (KR-RWD-001)
    // Blend weights are GOVERNANCE PARAMETERS
    wKP = getBlendWeight("KPOINTS")      // GOVERNANCE PARAMETER
    wRC = getBlendWeight("RING")         // GOVERNANCE PARAMETER
    wKL = getBlendWeight("KLEVEL")       // GOVERNANCE PARAMETER
    wTS = getBlendWeight("TRUST")        // GOVERNANCE PARAMETER

    rewardShareScore = (normalizedKPoints * wKP) +
                       (normalizedRC * wRC) +
                       (multiplier * wKL) +    // multiplier applied directly
                       (normalizedTrust * wTS)

    RETURN rewardShareScore
END
```

### 10.9 Reward Pool Management

```
ALGORITHM: FundRewardPool
INPUT: transactionContribution (from settlement)
BEGIN
    cycleId = getCurrentCycleId()
    pool = db.findRewardPool(cycleId)
    IF pool == NULL THEN
        pool = {
            poolId: generateUUID(),
            cycleId: cycleId,
            totalAmount: 0,
            distributedAmount: 0,
            undistributedAmount: 0,
            status: "ACCUMULATING",
            cycleStart: getCycleStart(),
            cycleEnd: getCycleEnd()
        }
        db.insert(pool)
    END IF

    // Add contribution (a_rewards + a_leadership from the transaction)
    pool.totalAmount += transactionContribution
    pool.version++
    db.update(pool)

    writeAudit("KREWARDS", "FundRewardPool", pool.poolId, "FUND", "SUCCESS",
               {contribution: transactionContribution, newTotal: pool.totalAmount})
END
```

```
ALGORITHM: CloseRewardPool
INPUT: cycleId
OUTPUT: pool
BEGIN
    pool = db.findRewardPool(cycleId)
    IF pool == NULL THEN THROW NOT_FOUND
    IF pool.status != "ACCUMULATING" THEN THROW CONFLICT("Pool not accumulating")

    pool.status = "CLOSED"
    pool.closedAt = now()
    db.update(pool)

    // Freeze eligibility
    eligibleParticipants = getEligibleParticipants(cycleId)
    db.freezeEligibility(cycleId, eligibleParticipants)

    outbox.publish("krewards.pool.closed", {
        cycleId: cycleId,
        poolAmount: pool.totalAmount,
        participantCount: eligibleParticipants.size()
    })

    writeAudit("KREWARDS", "CloseRewardPool", pool.poolId, "CLOSE", "SUCCESS",
               {totalAmount: pool.totalAmount, participantCount: eligibleParticipants.size()})

    RETURN pool
END
```

### 10.10 90/10 Enforcement Algorithm

```
ALGORITHM: Enforce90_10
INPUT: settlementRequest {grossRevenue, deductions, revenueType, allocations}
OUTPUT: {valid: boolean, correctedAllocations | error}
BEGIN
    // 1. Calculate QEV (KR-ECO-010)
    qev = settlementRequest.grossRevenue - settlementRequest.deductions

    // 2. Calculate AP and R (KR-ECO-011, KR-ECO-012)
    ap = qev * 0.90
    r = qev * 0.10

    // 3. Validate allocation sum (KR-ECO-005, KR-ECO-017)
    allocationSum = sum(settlementRequest.allocations)
    IF abs(allocationSum - ap) > 0.01 THEN  // tolerance for rounding
        RETURN {valid: false, error: "Allocation sum != 90% of QEV"}
    END IF

    // 4. Validate reconciliation identity (KR-ECO-013)
    IF abs((ap + r) - qev) > 0.01 THEN
        RETURN {valid: false, error: "AP + R != QEV"}
    END IF

    // 5. Validate no over-allocation (KR-ECO-006)
    IF allocationSum > ap THEN
        RETURN {valid: false, error: "Over-allocation: exceeds 90%"}
    END IF

    // 6. Validate no circular funding (KR-ECO-007)
    IF hasCircularFunding(settlementRequest) THEN
        RETURN {valid: false, error: "Circular funding detected"}
    END IF

    RETURN {valid: true, correctedAllocations: settlementRequest.allocations, reserve: r}
END
```

### 10.11 Monthly Reward Cycle Algorithm

```
ALGORITHM: ExecuteMonthlyCycle
INPUT: cycleId
BEGIN
    cycle = db.findRewardCycle(cycleId)
    IF cycle == NULL THEN THROW NOT_FOUND

    // Stage 1: Pool Closure
    cycle.stage = "POOL_CLOSED"
    db.update(cycle)
    pool = closeRewardPool(cycleId)

    // Stage 2: Ring Contribution Calculation (for all eligible participants)
    cycle.stage = "CALCULATING"
    db.update(cycle)
    eligibleParticipants = db.getFrozenEligibility(cycleId)
    FOR EACH participant IN eligibleParticipants DO
        calculateRingContribution(participant.accountId, cycleId)
    END FOR

    // Stage 3: Reward Share Calculation
    FOR EACH participant IN eligibleParticipants DO
        score = calculateRewardShare(participant.accountId, cycleId, pool.totalAmount)
        db.storeRewardShareScore(participant.accountId, cycleId, score)
    END FOR

    // Stage 4: Cap and Pro-Rata
    totalCalculated = 0
    capRate = getCapRate()  // GOVERNANCE PARAMETER (KR-ECO-047)
    maxPerParticipant = capRate * pool.totalAmount

    FOR EACH participant IN eligibleParticipants DO
        score = db.getRewardShareScore(participant.accountId, cycleId)
        calculatedReward = (score / totalScoreSum) * pool.totalAmount
        cappedReward = min(calculatedReward, maxPerParticipant)
        db.storeCalculatedReward(participant.accountId, cycleId, calculatedReward, cappedReward)
        totalCalculated += cappedReward
    END FOR

    // Pro-rata adjustment if sum exceeds pool (KR-ECO-049)
    IF totalCalculated > pool.totalAmount THEN
        scaleFactor = pool.totalAmount / totalCalculated
        FOR EACH participant IN eligibleParticipants DO
            cappedReward = db.getCappedReward(participant.accountId, cycleId)
            finalReward = cappedReward * scaleFactor
            db.storeFinalReward(participant.accountId, cycleId, finalReward)
        END FOR
    ELSE
        FOR EACH participant IN eligibleParticipants DO
            cappedReward = db.getCappedReward(participant.accountId, cycleId)
            db.storeFinalReward(participant.accountId, cycleId, cappedReward)
        END FOR
    END FOR

    // Stage 5: 90/10 Validation
    sumOfRewards = sum(allFinalRewards)
    IF sumOfRewards > pool.totalAmount THEN
        THROW INTERNAL_ERROR("Reward sum exceeds pool despite pro-rata")
    END IF

    // Stage 6: Settlement (send instructions to Wallet Engine)
    cycle.stage = "DISTRIBUTING"
    db.update(cycle)
    FOR EACH participant IN eligibleParticipants DO
        finalReward = db.getFinalReward(participant.accountId, cycleId)
        settlementResult = walletEngine.creditWallet({
            accountId: participant.accountId,
            amount: finalReward,
            cycleId: cycleId,
            idempotencyKey: "reward-" + cycleId + "-" + participant.accountId
        })
        db.markDistributed(participant.accountId, cycleId, settlementResult.settlementId)
    END FOR

    // Stage 7: Reconciliation
    cycle.stage = "RECONCILING"
    db.update(cycle)
    distributedTotal = sum(allDistributedRewards)
    IF abs(distributedTotal - pool.totalAmount) > 0.01 AND
       distributedTotal < pool.totalAmount THEN
        // Undistributed amount
        pool.undistributedAmount = pool.totalAmount - distributedTotal
    END IF
    pool.distributedAmount = distributedTotal
    pool.status = "COMPLETED"
    pool.completedAt = now()
    db.update(pool)

    // Stage 8: Reset K-Points
    cycle.stage = "RESET"
    db.update(cycle)
    db.resetMonthlyKPoints(cycleId)  // set monthly totals to 0; lifetime preserved

    // Stage 9: Complete
    cycle.stage = "COMPLETED"
    cycle.status = "COMPLETED"
    cycle.completedAt = now()
    cycle.participantCount = eligibleParticipants.size()
    db.update(cycle)

    // Publish cycle completed event
    outbox.publish("krewards.cycle.completed", {
        cycleId: cycleId,
        poolAmount: pool.totalAmount,
        distributedAmount: pool.distributedAmount,
        participantCount: eligibleParticipants.size()
    })

    writeAudit("KREWARDS", "ExecuteMonthlyCycle", cycleId, "COMPLETE", "SUCCESS",
               {poolAmount: pool.totalAmount, distributed: pool.distributedAmount})
END
```

### 10.12 Reversal Algorithm

```
ALGORITHM: ReverseKPoints
INPUT: originalEvidenceRef, reversalReason
OUTPUT: reversalEntry
BEGIN
    // 1. Find original accrual
    originalEntry = db.findLedgerEntry(originalEvidenceRef)
    IF originalEntry == NULL THEN THROW NOT_FOUND("Original entry not found")
    IF originalEntry.status == "REVERSED" THEN THROW CONFLICT("Already reversed")

    // 2. Determine reversal window
    originalCycleId = originalEntry.cycleId
    currentCycleId = getCurrentCycleId()
    isSameCycle = (originalCycleId == currentCycleId)
    reversibilityWindow = getReversibilityWindow()  // GOVERNANCE PARAMETER (KR-ECO-059)

    IF now() - originalEntry.createdAt > reversibilityWindow THEN
        isSameCycle = false  // later-cycle reversal
    END IF

    // 3. Create reversal entry
    reversalEntry = {
        ledgerEntryId: generateUUID(),
        accountId: originalEntry.accountId,
        category: originalEntry.category,
        points: -originalEntry.points,  // negative
        multiplier: originalEntry.multiplier,
        baseValue: -originalEntry.baseValue,
        evidenceRef: "REVERSAL-" + originalEvidenceRef,
        cycleId: currentCycleId,
        entryType: isSameCycle ? "REVERSAL" : "DEFERRED_REVERSAL",
        status: "ACTIVE",
        createdAt: now(),
        auditHash: sha256(accountId + category + points + evidenceRef + now())
    }
    db.insert(reversalEntry)

    // 4. Mark original as reversed
    originalEntry.status = "REVERSED"
    originalEntry.reversedBy = reversalEntry.ledgerEntryId
    db.update(originalEntry)

    // 5. Update lifetime statistics
    stats = db.getLifetimeStatistics(originalEntry.accountId)
    IF isSameCycle THEN
        // Same-cycle: reverse monthly and lifetime
        // Monthly total is reversed via the negative ledger entry
        // Reward Pool contribution reversed same-cycle (KR-ECO-058)
        stats.lifetimeKPoints -= originalEntry.points
        reverseRewardPoolContribution(originalEntry, originalCycleId)
    ELSE
        // Later-cycle: reverse lifetime only (deferred adjustment)
        // Monthly K-Points for original cycle are already reset
        // Reward Pool contribution reversed as deferred adjustment (KR-ECO-059)
        stats.lifetimeKPoints -= originalEntry.points
        applyDeferredAdjustment(originalEntry, currentCycleId)
    END IF
    stats.version++
    db.update(stats)

    // 6. Submit trust signal (negative)
    trustEngine.submitTrustSignal(originalEntry.accountId, "FRAUD_FLAG",
                                   "KREWARDS", reversalEntry.ledgerEntryId)

    // 7. Publish event
    outbox.publish("krewards.kpoints.reversed", {
        accountId: originalEntry.accountId,
        points: originalEntry.points,
        reason: reversalReason,
        isSameCycle: isSameCycle
    })

    // 8. Audit
    writeAudit("KREWARDS", "ReverseKPoints", originalEntry.accountId,
               "REVERSE", "SUCCESS",
               {originalEntry: originalEntry.ledgerEntryId, points: originalEntry.points,
                sameCycle: isSameCycle, reason: reversalReason})

    RETURN reversalEntry
END
```

### 10.13 Ring Fraud Detection

```
ALGORITHM: DetectRingFraud
INPUT: accountId
OUTPUT: {fraudDetected: boolean, fraudulentMembers: list}
BEGIN
    fraudulentMembers = []

    // 1. Check for phantom referrals (low activity, duplicate identity)
    FOR r = 1 TO 5 DO
        members = graphDB.query(
            "MATCH (leader:Participant {accountId: $id})
             MATCH (member:Participant)-[:REFERRED_BY*" + r + "]->(leader)
             RETURN member"
        )
        FOR EACH member IN members DO
            // Check for phantom signals
            IF isPhantomAccount(member) THEN  // low activity, no transactions, recent creation
                fraudulentMembers.add({accountId: member.accountId, ring: r, reason: "phantom"})
            END IF

            // Check for circular referral chains
            IF hasCircularReferral(member.accountId) THEN
                fraudulentMembers.add({accountId: member.accountId, ring: r, reason: "circular"})
            END IF

            // Check for artificial activity
            IF hasArtificialActivity(member.accountId) THEN
                fraudulentMembers.add({accountId: member.accountId, ring: r, reason: "artificial_activity"})
            END IF
        END FOR
    END FOR

    IF NOT fraudulentMembers.isEmpty() THEN
        // Recalculate rings without fraudulent members (KR-RNG-017, KR-GOV-030)
        FOR EACH member IN fraudulentMembers DO
            graphDB.markEdgeFraudulent(member.accountId)
        END FOR

        // Recalculate ring contribution for affected leaders
        recalculateAffectedLeaders(fraudulentMembers)

        // Publish fraud event
        outbox.publish("krewards.ring.fraud_detected", {
            accountId: accountId,
            fraudulentMembers: fraudulentMembers
        })

        // Submit to Administration for sanction process
        eventBus.publish("administration.fraud.report", {
            accountId: accountId,
            fraudType: "ring_fraud",
            evidence: fraudulentMembers
        })

        writeAudit("KREWARDS", "DetectRingFraud", accountId, "FRAUD", "SUCCESS",
                   {fraudulentCount: fraudulentMembers.size()})
    END IF

    RETURN {fraudDetected: NOT fraudulentMembers.isEmpty(), fraudulentMembers: fraudulentMembers}
END
```

### 10.14 Audit and Reconstructability

Every K-Rewards operation writes audit records with hash chains for reconstructability (KR-FND-015):

```
ALGORITHM: WriteKRewardsAudit
INPUT: operation, accountId, details
OUTPUT: auditId
BEGIN
    auditId = generateUUID()
    timestamp = now()
    previousHash = auditLog.getLastHash("KREWARDS")
    recordHash = sha256(timestamp + "KREWARDS" + operation + accountId +
                        details + previousHash)
    record = {
        auditId: auditId,
        engine: "KREWARDS",
        operation: operation,
        actorId: accountId,
        action: details.action,
        outcome: details.outcome,
        details: details,
        timestamp: timestamp,
        previousHash: previousHash,
        recordHash: recordHash
    }
    auditLog.append(record)
    RETURN auditId
END
```

### 10.15 State Machine: Reward Cycle

```
Reward Cycle State Machine:
============================

  [ACCUMULATING] --cycle cutoff--> [POOL_CLOSED]
      --calculate ring contributions--> [CALCULATING]
      --calculate reward shares--> [CALCULATING]
      --apply caps & pro-rata--> [DISTRIBUTING]
      --send settlement instructions--> [DISTRIBUTING]
      --reconcile--> [RECONCILING]
      --reset K-Points--> [RESET]
      --complete--> [COMPLETED]

  Any state --failure--> [FAILED] (manual intervention required)
```

### 10.16 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | K-Rewards Engine is sole rewards authority; no other engine modifies K-Points, K-Levels, or Reward Pool. Source engines submit accrual requests. |
| **Validation** | Genuine activity, fraud signals, trust gate, sanction check, category cap, evidence reference |
| **Rate limiting** | K-Points accrual: 1000/min per source engine; promotion evaluation: 10/min per account |
| **Audit** | Every accrual, reversal, promotion, ring calculation, reward share, distribution, cycle step — all with hash chains |
| **Caching** | K-Level (10min TTL); Trust Score (5min TTL); ring contribution cached per cycle |
| **Concurrency** | Ledger entries: append-only (no conflict); lifetime statistics: OCC; reward pool: PCC (lock during cycle) |
| **Idempotency** | Accrual: evidenceRef; reversal: "REVERSAL-{evidenceRef}"; settlement: "reward-{cycleId}-{accountId}" |
| **Retries** | Settlement to Wallet: 3x backoff; event publish: outbox; graph DB query: 3x backoff |
| **Timeout** | Accrual: 5s; ring contribution: 10s (graph query); cycle stage: 300s (batch) |
| **Failure handling** | Cycle stage failure → pause cycle, alert, manual intervention; accrual failure → reject with audit |
| **Observability** | Metrics: K-Points accrued/sec, promotions, pool size, distribution count, cycle duration; Traces: accrual, promotion, cycle |
| **Security boundary** | mTLS internal; K-Rewards is sole authority; no direct DB access by other engines; GOVERNANCE PARAMETERS loaded as config |

### 10.17 Sequence Diagram: Monthly Reward Cycle

```
Monthly Cycle    K-Rings     Trust      Wallet     All Engines
Scheduler        Service     Engine     Engine     (source events)
    |                |          |          |             |
    |--trigger cycle>|          |          |             |
    |--close pool    |          |          |             |
    |--freeze eligibility         |          |             |
    |                |          |          |             |
    |--calc ring contrib-->|     |          |             |
    |<--ring contributions--|     |          |             |
    |                |          |          |             |
    |--calc reward share (per participant)   |             |
    |--get trust scores----->|     |          |             |
    |<--trust scores----------|     |          |             |
    |                |          |          |             |
    |--apply caps & pro-rata   |          |             |
    |--validate 90/10          |          |             |
    |                |          |          |             |
    |--send settlements------->|     |---->|             |
    |                |          |          |--credit wallets
    |<--settlement results-----|     |<----|             |
    |                |          |          |             |
    |--reconcile     |          |          |             |
    |--reset K-Points|          |          |             |
    |--complete cycle|          |          |             |
    |--publish cycle.completed  |          |             |
```

### 10.18 Governing Requirement Traceability

SRS-KRW-001–015; SAD-1 Ch.13, Ch.20–21; PLC-1 Ch.26; KR-1 KR-FND-003/008/009/015, KR-ECO-001–063, KR-PNT-001–025, KR-RNG-001–017, KR-LVL-001–024, KR-RWD-001.

---

## Chapter 11 — Wallet/Payments Engine Design

### 11.1 Overview

The Wallet/Payments Engine is the sole wallet authority for K-NETWORK. It owns wallet balances, the transaction ledger, deposits, withdrawals, payment processing, settlement execution, 90/10 economic enforcement, reserve protection, reconciliation, reversals, refunds, chargebacks, reward distribution execution, and economic audit (SAD-1 Ch.14; SRS-WAL-001–014; KR-1 KR-ECO-001–013, KR-ECO-054–059).

Implements: SRS-WAL-001–014; SAD-1 Ch.14; PLC-1 Ch.24, 25, 31; KR-1 KR-ECO-001–063, KR-TRU-002.

**Principle:** No engine may maintain a separate wallet. All economic flows — commerce checkout, services escrow, learning enrollment, reward distribution — pass through the Wallet/Payments Engine (SRS-WAL-001; PLC-1 Ch.9, 24).

### 11.2 Component Design

```
┌───────────────────────────────────────────────────────────────┐
│                 WALLET/PAYMENTS ENGINE                          │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Wallet   │ │Transaction│ │ Deposit  │ │Withdrawal│         │
│  │ Service  │ │ Ledger   │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Payment  │ │Settlement│ │ 90/10    │ │ Reserve  │         │
│  │ Service  │ │ Service  │ │ Control  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │Reconcil- │ │ Reversal │ │ Refund   │ │Chargeback│         │
│  │ iation   │ │ Service  │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                       │
│  │ Reward   │ │  Audit   │ │   AML    │                       │
│  │ Distrib. │ │ Service  │ │ Monitor  │                       │
│  └──────────┘ └──────────┘ └──────────┘                       │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Wallet-DB (PostgreSQL, strong-consistency financial)  │    │
│  └────────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
```

### 11.3 Data Models

#### 11.3.1 Wallet

| Field | Type | Constraints | Description |
|---|---|---|---|
| `walletId` | UUID | PK | Wallet identifier |
| `accountId` | UUID | FK → Account, unique | One wallet per account (SRS-WAL-001) |
| `currency` | string | not null, default `USD` | Base currency |
| `settlementBalance` | decimal(20,2) | not null, default 0 | Settlement proceeds balance |
| `rewardBalance` | decimal(20,2) | not null, default 0 | Reward payout balance |
| `depositBalance` | decimal(20,2) | not null, default 0 | Deposited funds balance |
| `escrowBalance` | decimal(20,2) | not null, default 0 | Escrowed funds (services) |
| `status` | enum | not null, default `ACTIVE` | `ACTIVE`, `FROZEN`, `CLOSED` |
| `frozenReason` | string | nullable | Reason if frozen |
| `createdAt` | timestamp | not null | Creation time |
| `version` | integer | not null, default 1 | OCC version |

**Constraint:** `accountId` is UNIQUE — exactly one wallet per account (SRS-WAL-001).

#### 11.3.2 WalletTransaction (Ledger)

| Field | Type | Constraints | Description |
|---|---|---|---|
| `transactionId` | UUID | PK | Transaction ID |
| `walletId` | UUID | FK → Wallet, indexed | Affected wallet |
| `accountId` | UUID | not null, indexed | Account (denormalized for query) |
| `type` | enum | not null, indexed | `DEPOSIT`, `WITHDRAWAL`, `PAYMENT`, `SETTLEMENT_CREDIT`, `SETTLEMENT_DEBIT`, `ESCROW_FUND`, `ESCROW_RELEASE`, `REWARD_CREDIT`, `REFUND`, `CHARGEBACK`, `REVERSAL`, `FEE`, `ADJUSTMENT` |
| `amount` | decimal(20,2) | not null | Amount (positive for credit, negative for debit) |
| `balanceType` | enum | not null | `SETTLEMENT`, `REWARD`, `DEPOSIT`, `ESCROW` |
| `reference` | string | not null, indexed | External/business reference |
| `idempotencyKey` | string | not null, indexed | Idempotency key |
| `status` | enum | not null | `PENDING`, `COMPLETED`, `FAILED`, `REVERSED` |
| `reversedBy` | UUID | nullable | Reversal transaction ID |
| `metadata` | JSON | nullable | Additional context |
| `createdAt` | timestamp | not null | Transaction time |
| `auditHash` | string | not null | Hash for reconstructability |

**Constraint:** `idempotencyKey` is UNIQUE — prevents double processing.

#### 11.3.3 Settlement

| Field | Type | Constraints | Description |
|---|---|---|---|
| `settlementId` | UUID | PK | Settlement identifier |
| `sourceEngine` | enum | not null, indexed | `COMMERCE`, `SERVICES`, `LEARNING`, `PLATFORM_FEE`, `PARTNER` |
| `sourceReference` | string | not null, indexed | Reference to source transaction |
| `grossRevenue` | decimal(20,2) | not null | GR (KR-ECO-008) |
| `deductions` | decimal(20,2) | not null, default 0 | D (KR-ECO-009) |
| `qev` | decimal(20,2) | not null | QEV = GR − D (KR-ECO-010) |
| `allocationPool` | decimal(20,2) | not null | AP = 90% of QEV (KR-ECO-011) |
| `reserve` | decimal(20,2) | not null | R = 10% of QEV (KR-ECO-012) |
| `allocations` | JSON | not null | Category allocations (sum = AP) |
| `counterpartyId` | UUID | not null | Vendor/provider/instructor/partner |
| `counterpartyCredit` | decimal(20,2) | not null | Amount credited to counterparty |
| `rewardPoolContribution` | decimal(20,2) | not null | a_rewards + a_leadership |
| `status` | enum | not null | `PENDING`, `COMPLETED`, `REVERSED`, `FAILED` |
| `cycleId` | UUID | nullable | Reward cycle at settlement time |
| `createdAt` | timestamp | not null | Settlement time |
| `version` | integer | not null, default 1 | OCC version |

#### 11.3.4 ReserveHolding

| Field | Type | Constraints | Description |
|---|---|---|---|
| `reserveId` | UUID | PK | Reserve record ID |
| `settlementId` | UUID | FK → Settlement, indexed | Source settlement |
| `cycleId` | UUID | not null, indexed | Cycle when reserved |
| `amount` | decimal(20,2) | not null | Reserve amount (10% of QEV) |
| `status` | enum | not null | `HELD`, `RELEASED`, `REVERSED` |
| `releasedAt` | timestamp | nullable | When released to general reserve |
| `reversedAt` | timestamp | nullable | When reversed (same-cycle reversal) |

#### 11.3.5 Reversal

| Field | Type | Constraints | Description |
|---|---|---|---|
| `reversalId` | UUID | PK | Reversal identifier |
| `originalSettlementId` | UUID | FK → Settlement, indexed | Original settlement |
| `reversalType` | enum | not null | `REFUND`, `CHARGEBACK`, `FRAUD`, `SETTLEMENT_FAILURE` |
| `isSameCycle` | boolean | not null | Same-cycle or later-cycle (KR-ECO-054) |
| `originalCycleId` | UUID | not null | Cycle of original settlement |
| `currentCycleId` | UUID | not null | Current cycle |
| `reversalAmount` | decimal(20,2) | not null | Amount reversed |
| `deferredAdjustment` | decimal(20,2) | nullable | Deferred adjustment (later-cycle) |
| `status` | enum | not null | `PENDING`, `COMPLETED`, `FAILED` |
| `reason` | string | not null | Reversal reason |
| `createdAt` | timestamp | not null | Reversal time |

### 11.4 Revenue Waterfalls (GOVERNANCE PARAMETERS)

All allocation rates are **GOVERNANCE PARAMETERS** owned by KR-1 (KR-ECO-014, Appendix C). SDD-1 consumes them as configuration.

| Revenue Type | Counterparty | Rewards | Leadership | Platform | Operations | Sum |
|---|---|---|---|---|---|---|
| Commerce | 15% | 60% | 8% | 5% | 2% | 90% |
| Services | 15% | 60% | 8% | 5% | 2% | 90% |
| Learning | 20% | 55% | 8% | 5% | 2% | 90% |
| Platform Fee | 65% | 0% | 15% | 7% | 3% | 90% |
| Partner | 40% | 35% | 10% | 3% | 2% | 90% |

All sum to 90% (Allocation Pool); 10% Reserve; 100% total. Rates are loaded from KR-1 configuration at runtime.

### 11.5 Wallet Initialization Algorithm

```
ALGORITHM: InitializeWallet
INPUT: accountId
OUTPUT: wallet
BEGIN
    // 1. Check account exists and is active
    account = identityEngine.getAccount(accountId)
    IF account == NULL OR account.status != "ACTIVE" THEN
        THROW VALIDATION_ERROR("Account not active")
    END IF

    // 2. Enforce one wallet per account (SRS-WAL-001)
    IF db.walletExists(accountId) THEN
        THROW CONFLICT("Wallet already exists for account")
    END IF

    // 3. Create wallet
    wallet = {
        walletId: generateUUID(),
        accountId: accountId,
        currency: "USD",
        settlementBalance: 0,
        rewardBalance: 0,
        depositBalance: 0,
        escrowBalance: 0,
        status: "ACTIVE",
        createdAt: now(),
        version: 1
    }
    db.insert(wallet)

    writeAudit("WALLET", "InitializeWallet", wallet.walletId, "CREATE", "SUCCESS",
               {accountId: accountId})

    RETURN wallet
END
```

### 11.6 Deposit Algorithm

```
ALGORITHM: ProcessDeposit
INPUT: accountId, amount, paymentMethodRef, idempotencyKey
OUTPUT: transaction
BEGIN
    // 1. Idempotency check
    IF db.transactionExists(idempotencyKey) THEN
        RETURN db.findTransaction(idempotencyKey)
    END IF

    // 2. KYC/AML gate (SRS-WAL-003)
    account = identityEngine.getAccount(accountId)
    IF account.kycTier < getMinKycTier("DEPOSIT") THEN
        THROW FORBIDDEN("KYC tier too low for deposit")
    END IF

    // 3. AML monitoring
    amlResult = amlMonitor.checkDeposit({accountId, amount, paymentMethodRef})
    IF amlResult.isBlocked THEN
        writeAudit("WALLET", "ProcessDeposit", accountId, "DEPOSIT", "BLOCKED",
                   {reason: "aml_block", signals: amlResult.signals})
        THROW FORBIDDEN("AML block: " + amlResult.reason)
    END IF

    // 4. Get wallet
    wallet = db.findWallet(accountId)
    IF wallet == NULL THEN THROW NOT_FOUND("Wallet not found")
    IF wallet.status != "ACTIVE" THEN THROW CONFLICT("Wallet not active")

    // 5. Create pending transaction
    transaction = {
        transactionId: generateUUID(),
        walletId: wallet.walletId,
        accountId: accountId,
        type: "DEPOSIT",
        amount: amount,
        balanceType: "DEPOSIT",
        reference: paymentMethodRef,
        idempotencyKey: idempotencyKey,
        status: "PENDING",
        createdAt: now(),
        auditHash: sha256(walletId + "DEPOSIT" + amount + idempotencyKey + now())
    }
    db.insert(transaction)

    // 6. Process via Integration Engine (external payment)
    paymentResult = integrationEngine.processExternalDeposit({
        amount: amount,
        paymentMethodRef: paymentMethodRef,
        reference: transaction.transactionId
    })

    IF paymentResult.status == "CONFIRMED" THEN
        // 7. Credit wallet (atomic)
        wallet.depositBalance += amount
        wallet.version++
        db.update(wallet)

        transaction.status = "COMPLETED"
        db.update(transaction)

        // 8. Submit trust signal
        trustEngine.submitTrustSignal(accountId, "TRANSACTION_COMPLETED",
                                      "WALLET", transaction.transactionId)

        outbox.publish("wallet.deposit.completed", {
            accountId: accountId, amount: amount,
            transactionId: transaction.transactionId
        })
    ELSE
        transaction.status = "FAILED"
        db.update(transaction)
        THROW PAYMENT_ERROR("External deposit failed")
    END IF

    writeAudit("WALLET", "ProcessDeposit", accountId, "DEPOSIT", "SUCCESS",
               {amount: amount, transactionId: transaction.transactionId})

    RETURN transaction
END
```

### 11.7 Withdrawal Algorithm

```
ALGORITHM: ProcessWithdrawal
INPUT: accountId, amount, destinationRef, mfaToken, idempotencyKey
OUTPUT: transaction
BEGIN
    // 1. Idempotency check
    IF db.transactionExists(idempotencyKey) THEN
        RETURN db.findTransaction(idempotencyKey)
    END IF

    // 2. KYC/AML gate (SRS-WAL-003)
    account = identityEngine.getAccount(accountId)
    IF account.kycTier < getMinKycTier("WITHDRAWAL") THEN
        THROW FORBIDDEN("KYC tier too low for withdrawal")
    END IF

    // 3. MFA verification (SRS-WAL-003, SRS-IDM-003)
    mfaResult = identityEngine.verifyMFA(accountId, mfaToken)
    IF NOT mfaResult.verified THEN
        THROW FORBIDDEN("MFA verification failed")
    END IF

    // 4. AML monitoring
    amlResult = amlMonitor.checkWithdrawal({accountId, amount, destinationRef})
    IF amlResult.isBlocked THEN
        writeAudit("WALLET", "ProcessWithdrawal", accountId, "WITHDRAWAL", "BLOCKED",
                   {reason: "aml_block"})
        THROW FORBIDDEN("AML block: " + amlResult.reason)
    END IF

    // 5. Get wallet
    wallet = db.findWallet(accountId)
    IF wallet == NULL THEN THROW NOT_FOUND
    IF wallet.status != "ACTIVE" THEN THROW CONFLICT("Wallet not active")

    // 6. Check sufficient balance (use deposit + settlement + reward)
    availableBalance = wallet.depositBalance + wallet.settlementBalance + wallet.rewardBalance
    IF availableBalance < amount THEN
        THROW VALIDATION_ERROR("Insufficient balance")
    END IF

    // 7. Create pending transaction
    transaction = {
        transactionId: generateUUID(),
        walletId: wallet.walletId,
        accountId: accountId,
        type: "WITHDRAWAL",
        amount: -amount,
        balanceType: "DEPOSIT",
        reference: destinationRef,
        idempotencyKey: idempotencyKey,
        status: "PENDING",
        createdAt: now(),
        auditHash: sha256(walletId + "WITHDRAWAL" + amount + idempotencyKey + now())
    }
    db.insert(transaction)

    // 8. Debit wallet (atomic, within transaction)
    debitWallet(wallet, amount)

    // 9. Process via Integration Engine (external payout)
    payoutResult = integrationEngine.processExternalPayout({
        amount: amount,
        destinationRef: destinationRef,
        reference: transaction.transactionId
    })

    IF payoutResult.status == "CONFIRMED" THEN
        transaction.status = "COMPLETED"
        db.update(transaction)
        outbox.publish("wallet.withdrawal.completed", {
            accountId: accountId, amount: amount
        })
    ELSE
        // Refund the debit
        creditWallet(wallet, amount, "DEPOSIT")
        transaction.status = "FAILED"
        db.update(transaction)
        THROW PAYMENT_ERROR("External payout failed")
    END IF

    writeAudit("WALLET", "ProcessWithdrawal", accountId, "WITHDRAWAL", "SUCCESS",
               {amount: amount, transactionId: transaction.transactionId})

    RETURN transaction
END
```

### 11.8 Payment Processing Algorithm

```
ALGORITHM: ProcessPayment
INPUT: accountId, amount, paymentContext, idempotencyKey
OUTPUT: transaction
BEGIN
    // 1. Idempotency check
    IF db.transactionExists(idempotencyKey) THEN
        RETURN db.findTransaction(idempotencyKey)
    END IF

    // 2. KYC/AML gate (SRS-WAL-004)
    account = identityEngine.getAccount(accountId)
    IF account.kycTier < getMinKycTier("PAYMENT") THEN
        THROW FORBIDDEN("KYC tier too low for payment")
    END IF

    // 3. Determine payment source
    wallet = db.findWallet(accountId)
    IF wallet == NULL THEN THROW NOT_FOUND

    // 4. Check balance
    IF wallet.depositBalance < amount THEN
        // Try external payment via Integration Engine
        paymentResult = integrationEngine.processExternalPayment({
            accountId: accountId,
            amount: amount,
            paymentContext: paymentContext,
            reference: idempotencyKey
        })
        IF paymentResult.status != "CONFIRMED" THEN
            THROW PAYMENT_ERROR("External payment failed")
        END IF
    ELSE
        // Debit from wallet
        wallet.depositBalance -= amount
        wallet.version++
        db.update(wallet)
    END IF

    // 5. Record transaction
    transaction = {
        transactionId: generateUUID(),
        walletId: wallet.walletId,
        accountId: accountId,
        type: "PAYMENT",
        amount: -amount,
        balanceType: "DEPOSIT",
        reference: paymentContext,
        idempotencyKey: idempotencyKey,
        status: "COMPLETED",
        createdAt: now(),
        auditHash: sha256(walletId + "PAYMENT" + amount + idempotencyKey + now())
    }
    db.insert(transaction)

    writeAudit("WALLET", "ProcessPayment", accountId, "PAYMENT", "SUCCESS",
               {amount: amount, context: paymentContext})

    RETURN transaction
END
```

### 11.9 Settlement Execution Algorithm (90/10 Waterfall)

```
ALGORITHM: ExecuteSettlement
INPUT: settlementRequest {sourceEngine, sourceReference, grossRevenue,
                          deductions, counterpartyId, idempotencyKey}
OUTPUT: settlement
BEGIN
    // 1. Idempotency check
    IF db.settlementExistsByIdempotencyKey(idempotencyKey) THEN
        RETURN db.findSettlementByIdempotencyKey(idempotencyKey)
    END IF

    // 2. Calculate QEV (KR-ECO-010)
    qev = settlementRequest.grossRevenue - settlementRequest.deductions
    IF qev <= 0 THEN THROW VALIDATION_ERROR("QEV must be positive")

    // 3. Calculate AP and R (KR-ECO-011, KR-ECO-012)
    ap = qev * 0.90
    r = qev * 0.10

    // 4. Reconciliation identity check (KR-ECO-013)
    IF abs((ap + r) - qev) > 0.01 THEN
        THROW INTERNAL_ERROR("Reconciliation identity violated")
    END IF

    // 5. Load allocation rates for revenue type (GOVERNANCE PARAMETERS)
    rates = getAllocationRates(settlementRequest.sourceEngine)  // from KR-1 config

    // 6. Calculate allocations
    allocations = {
        counterparty: qev * rates.counterparty,
        rewards: qev * rates.rewards,
        leadership: qev * rates.leadership,
        platform: qev * rates.platform,
        operations: qev * rates.operations
    }

    // 7. Validate allocation sum = AP (KR-ECO-005, KR-ECO-017)
    allocationSum = sum(allocations)
    IF abs(allocationSum - ap) > 0.01 THEN
        THROW VALIDATION_ERROR("Allocation sum != 90% of QEV")
    END IF

    // 8. Validate no over-allocation (KR-ECO-006)
    IF allocationSum > ap THEN
        THROW VALIDATION_ERROR("Over-allocation: exceeds 90%")
    END IF

    // 9. Validate no circular funding (KR-ECO-007)
    IF hasCircularFunding(settlementRequest) THEN
        THROW VALIDATION_ERROR("Circular funding detected")
    END IF

    // 10. Create settlement record
    cycleId = kRewardsEngine.getCurrentCycleId()
    settlement = {
        settlementId: generateUUID(),
        sourceEngine: settlementRequest.sourceEngine,
        sourceReference: settlementRequest.sourceReference,
        grossRevenue: settlementRequest.grossRevenue,
        deductions: settlementRequest.deductions,
        qev: qev,
        allocationPool: ap,
        reserve: r,
        allocations: allocations,
        counterpartyId: settlementRequest.counterpartyId,
        counterpartyCredit: allocations.counterparty,
        rewardPoolContribution: allocations.rewards + allocations.leadership,
        status: "PENDING",
        cycleId: cycleId,
        createdAt: now(),
        version: 1
    }
    db.insert(settlement)

    // 11. Credit counterparty wallet
    creditWallet(settlement.counterpartyId, allocations.counterparty, "SETTLEMENT")

    // 12. Hold reserve (SRS-WAL-006)
    reserveHolding = {
        reserveId: generateUUID(),
        settlementId: settlement.settlementId,
        cycleId: cycleId,
        amount: r,
        status: "HELD"
    }
    db.insert(reserveHolding)

    // 13. Fund Reward Pool (a_rewards + a_leadership)
    kRewardsEngine.fundRewardPool({
        transactionContribution: settlement.rewardPoolContribution,
        cycleId: cycleId
    })

    // 14. Credit platform and operations accounts
    creditPlatformAccount(allocations.platform)
    creditOperationsAccount(allocations.operations)

    // 15. Complete settlement
    settlement.status = "COMPLETED"
    settlement.version++
    db.update(settlement)

    // 16. Publish settlement event for K-Points accrual
    outbox.publish("wallet.settlement.completed", {
        settlementId: settlement.settlementId,
        sourceEngine: settlement.sourceEngine,
        counterpartyId: settlement.counterpartyId,
        qev: qev,
        rewardPoolContribution: settlement.rewardPoolContribution
    })

    writeAudit("WALLET", "ExecuteSettlement", settlement.settlementId,
               "SETTLE", "SUCCESS",
               {qev: qev, ap: ap, reserve: r, counterpartyCredit: allocations.counterparty})

    RETURN settlement
END
```

### 11.10 Refund Algorithm

```
ALGORITHM: ProcessRefund
INPUT: originalSettlementId, refundAmount, reason, idempotencyKey
OUTPUT: refund, reversal
BEGIN
    // 1. Idempotency check
    IF db.transactionExists(idempotencyKey) THEN
        RETURN db.findTransaction(idempotencyKey)
    END IF

    // 2. Find original settlement
    original = db.findSettlement(originalSettlementId)
    IF original == NULL THEN THROW NOT_FOUND("Original settlement not found")
    IF original.status != "COMPLETED" THEN THROW CONFLICT("Original not completed")

    // 3. Validate refund eligibility
    IF refundAmount > original.qev THEN
        THROW VALIDATION_ERROR("Refund exceeds original QEV")
    END IF

    // 4. Determine same-cycle or later-cycle (KR-ECO-054, KR-ECO-059)
    currentCycleId = kRewardsEngine.getCurrentCycleId()
    isSameCycle = (original.cycleId == currentCycleId)
    reversibilityWindow = getReversibilityWindow()  // GOVERNANCE PARAMETER

    IF now() - original.createdAt > reversibilityWindow THEN
        isSameCycle = false
    END IF

    // 5. Create refund transaction
    refund = {
        transactionId: generateUUID(),
        walletId: db.findWallet(original.counterpartyId).walletId,
        accountId: original.counterpartyId,
        type: "REFUND",
        amount: -refundAmount,
        balanceType: "SETTLEMENT",
        reference: originalSettlementId,
        idempotencyKey: idempotencyKey,
        status: "PENDING",
        createdAt: now(),
        auditHash: sha256(...)
    }
    db.insert(refund)

    // 6. Debit counterparty wallet
    debitWallet(db.findWallet(original.counterpartyId), refundAmount, "SETTLEMENT")

    // 7. Execute reversal framework
    reversal = executeReversal({
        originalSettlementId: originalSettlementId,
        reversalType: "REFUND",
        isSameCycle: isSameCycle,
        reversalAmount: refundAmount,
        reason: reason
    })

    // 8. Complete refund
    refund.status = "COMPLETED"
    db.update(refund)

    outbox.publish("wallet.refund.completed", {
        settlementId: originalSettlementId,
        refundAmount: refundAmount,
        isSameCycle: isSameCycle
    })

    writeAudit("WALLET", "ProcessRefund", original.counterpartyId,
               "REFUND", "SUCCESS",
               {amount: refundAmount, sameCycle: isSameCycle, reason: reason})

    RETURN refund, reversal
END
```

### 11.11 Chargeback Algorithm

```
ALGORITHM: ProcessChargeback
INPUT: chargebackRequest {originalPaymentRef, amount, reason, externalRef}
OUTPUT: chargeback, reversal
BEGIN
    // 1. Receive chargeback from Integration Engine
    // 2. Find original payment/settlement
    original = db.findSettlementByReference(chargebackRequest.originalPaymentRef)
    IF original == NULL THEN THROW NOT_FOUND

    // 3. Create chargeback transaction
    chargeback = {
        transactionId: generateUUID(),
        walletId: db.findWallet(original.counterpartyId).walletId,
        accountId: original.counterpartyId,
        type: "CHARGEBACK",
        amount: -chargebackRequest.amount,
        balanceType: "SETTLEMENT",
        reference: chargebackRequest.externalRef,
        idempotencyKey: "chargeback-" + chargebackRequest.externalRef,
        status: "PENDING",
        createdAt: now(),
        auditHash: sha256(...)
    }
    db.insert(chargeback)

    // 4. Debit counterparty wallet
    debitWallet(db.findWallet(original.counterpartyId), chargebackRequest.amount, "SETTLEMENT")

    // 5. Execute reversal framework
    isSameCycle = (original.cycleId == kRewardsEngine.getCurrentCycleId())
    reversal = executeReversal({
        originalSettlementId: original.settlementId,
        reversalType: "CHARGEBACK",
        isSameCycle: isSameCycle,
        reversalAmount: chargebackRequest.amount,
        reason: chargebackRequest.reason
    })

    // 6. Flag for fraud review if chargeback abuse (KR-FRD-004 #8)
    chargebackCount = db.getChargebackCount(original.counterpartyId, last30Days)
    IF chargebackCount > getChargebackAbuseThreshold() THEN  // GOVERNANCE PARAMETER
        administrationEngine.flagForFraudReview({
            accountId: original.counterpartyId,
            fraudType: "CHARGEBACK_ABUSE",
            evidence: {chargebackCount: chargebackCount}
        })
    END IF

    chargeback.status = "COMPLETED"
    db.update(chargeback)

    writeAudit("WALLET", "ProcessChargeback", original.counterpartyId,
               "CHARGEBACK", "SUCCESS",
               {amount: chargebackRequest.amount, reason: chargebackRequest.reason})

    RETURN chargeback, reversal
END
```

### 11.12 Reversal Framework Algorithm

```
ALGORITHM: ExecuteReversal
INPUT: reversalRequest {originalSettlementId, reversalType, isSameCycle,
                         reversalAmount, reason}
OUTPUT: reversal
BEGIN
    original = db.findSettlement(reversalRequest.originalSettlementId)

    // 1. Create reversal record
    reversal = {
        reversalId: generateUUID(),
        originalSettlementId: original.settlementId,
        reversalType: reversalRequest.reversalType,
        isSameCycle: reversalRequest.isSameCycle,
        originalCycleId: original.cycleId,
        currentCycleId: kRewardsEngine.getCurrentCycleId(),
        reversalAmount: reversalRequest.reversalAmount,
        status: "PENDING",
        reason: reversalRequest.reason,
        createdAt: now()
    }
    db.insert(reversal)

    // 2. Reverse K-Points (via K-Rewards Engine)
    kRewardsEngine.reverseKPoints({
        evidenceRef: original.sourceReference,
        reversalReason: reversalRequest.reason
    })

    // 3. Reverse Reward Pool contribution
    IF reversalRequest.isSameCycle THEN
        // Same-cycle: reverse Reward Pool contribution (KR-ECO-058)
        kRewardsEngine.reverseRewardPoolContribution({
            settlementId: original.settlementId,
            cycleId: original.cycleId,
            amount: original.rewardPoolContribution
        })

        // Reverse reserve (KR-ECO-054)
        reserve = db.findReserveHolding(original.settlementId)
        IF reserve != NULL AND reserve.status == "HELD" THEN
            reserve.status = "REVERSED"
            reserve.reversedAt = now()
            db.update(reserve)
        END IF
    ELSE
        // Later-cycle: deferred adjustment (KR-ECO-054, KR-ECO-059)
        // Do NOT touch the reserve
        deferredAmount = original.rewardPoolContribution *
                        (reversalRequest.reversalAmount / original.qev)
        kRewardsEngine.applyDeferredAdjustment({
            cycleId: kRewardsEngine.getCurrentCycleId(),
            amount: -deferredAmount,
            originalSettlementId: original.settlementId
        })
        reversal.deferredAdjustment = deferredAmount
    END IF

    // 4. Reverse platform and operations credits (proportional)
    reversePlatformCredit(original, reversalRequest.reversalAmount)
    reverseOperationsCredit(original, reversalRequest.reversalAmount)

    // 5. Mark original settlement as reversed
    original.status = "REVERSED"
    original.version++
    db.update(original)

    // 6. Complete reversal
    reversal.status = "COMPLETED"
    db.update(reversal)

    // 7. No collateral harm (KR-GOV-030) — only reversed transaction affected
    outbox.publish("wallet.reversal.completed", {
        reversalId: reversal.reversalId,
        originalSettlementId: original.settlementId,
        isSameCycle: reversalRequest.isSameCycle
    })

    writeAudit("WALLET", "ExecuteReversal", reversal.reversalId,
               "REVERSE", "SUCCESS",
               {sameCycle: reversalRequest.isSameCycle, amount: reversalRequest.reversalAmount})

    RETURN reversal
END
```

### 11.13 Reconciliation Algorithm

```
ALGORITHM: ReconcileCycle
INPUT: cycleId
OUTPUT: reconciliationResult {valid: boolean, discrepancies: list}
BEGIN
    discrepancies = []

    // 1. Per-transaction reconciliation: AP + R = QEV (KR-ECO-013)
    settlements = db.findSettlementsByCycle(cycleId)
    FOR EACH settlement IN settlements DO
        IF abs((settlement.allocationPool + settlement.reserve) - settlement.qev) > 0.01 THEN
            discrepancies.add({
                settlementId: settlement.settlementId,
                type: "transaction_identity",
                expected: settlement.qev,
                actual: settlement.allocationPool + settlement.reserve
            })
        END IF

        // Check allocation sum = AP
        IF abs(sum(settlement.allocations) - settlement.allocationPool) > 0.01 THEN
            discrepancies.add({
                settlementId: settlement.settlementId,
                type: "allocation_sum"
            })
        END IF
    END FOR

    // 2. Cycle-level reconciliation: sum of rewards = Reward Pool (KR Ch.67)
    pool = kRewardsEngine.getRewardPool(cycleId)
    distributedTotal = db.getDistributedRewardsTotal(cycleId)
    IF abs(distributedTotal - pool.distributedAmount) > 0.01 THEN
        discrepancies.add({
            type: "cycle_reward_sum",
            expected: pool.distributedAmount,
            actual: distributedTotal
        })
    END IF

    // 3. Reserve reconciliation
    reserveTotal = db.getReserveTotal(cycleId)
    expectedReserve = sum(settlements.map(s => s.reserve))
    IF abs(reserveTotal - expectedReserve) > 0.01 THEN
        discrepancies.add({
            type: "reserve_total",
            expected: expectedReserve,
            actual: reserveTotal
        })
    END IF

    // 4. Handle discrepancies
    IF NOT discrepancies.isEmpty() THEN
        // Halt distribution until resolved (SRS-WAL-008)
        alertAdministrators(discrepancies)
        writeAudit("WALLET", "ReconcileCycle", cycleId, "RECONCILE", "FAILURE",
                   {discrepancies: discrepancies})
        RETURN {valid: false, discrepancies: discrepancies}
    END IF

    writeAudit("WALLET", "ReconcileCycle", cycleId, "RECONCILE", "SUCCESS", {})

    RETURN {valid: true, discrepancies: []}
END
```

### 11.14 Reward Distribution Algorithm

```
ALGORITHM: ExecuteRewardDistribution
INPUT: distributionBatch {cycleId, distributions: list}
OUTPUT: result
BEGIN
    // K-Rewards Engine provides the distribution list; Wallet executes credits
    totalDistributed = 0

    FOR EACH distribution IN distributionBatch.distributions DO
        // 1. Idempotency check
        idempotencyKey = "reward-" + distribution.cycleId + "-" + distribution.accountId
        IF db.transactionExists(idempotencyKey) THEN CONTINUE

        // 2. Credit wallet
        creditWallet(distribution.accountId, distribution.finalReward, "REWARD")

        // 3. Record transaction
        transaction = {
            transactionId: generateUUID(),
            walletId: db.findWallet(distribution.accountId).walletId,
            accountId: distribution.accountId,
            type: "REWARD_CREDIT",
            amount: distribution.finalReward,
            balanceType: "REWARD",
            reference: distribution.cycleId,
            idempotencyKey: idempotencyKey,
            status: "COMPLETED",
            createdAt: now(),
            auditHash: sha256(...)
        }
        db.insert(transaction)

        totalDistributed += distribution.finalReward
    END FOR

    // 4. Verify no unfunded liability (KR-ECO-002, KR Ch.67)
    pool = kRewardsEngine.getRewardPool(distributionBatch.cycleId)
    IF totalDistributed > pool.totalAmount THEN
        THROW INTERNAL_ERROR("Distribution exceeds Reward Pool — unfunded liability")
    END IF

    writeAudit("WALLET", "ExecuteRewardDistribution", distributionBatch.cycleId,
               "DISTRIBUTE", "SUCCESS",
               {totalDistributed: totalDistributed, participantCount: batch.size()})

    RETURN {totalDistributed: totalDistributed}
END
```

### 11.15 Wallet Credit/Debit Helpers

```
ALGORITHM: CreditWallet
INPUT: accountId, amount, balanceType
BEGIN
    wallet = db.findWallet(accountId)
    IF wallet == NULL THEN THROW NOT_FOUND
    IF wallet.status != "ACTIVE" THEN THROW CONFLICT("Wallet not active")

    SWITCH balanceType DO
        CASE "SETTLEMENT": wallet.settlementBalance += amount
        CASE "REWARD": wallet.rewardBalance += amount
        CASE "DEPOSIT": wallet.depositBalance += amount
        CASE "ESCROW": wallet.escrowBalance += amount
    END SWITCH

    wallet.version++
    db.update(wallet)
END
```

```
ALGORITHM: DebitWallet
INPUT: wallet, amount, balanceType
BEGIN
    IF wallet.status != "ACTIVE" THEN THROW CONFLICT("Wallet not active")

    SWITCH balanceType DO
        CASE "SETTLEMENT":
            IF wallet.settlementBalance < amount THEN THROW VALIDATION_ERROR("Insufficient settlement balance")
            wallet.settlementBalance -= amount
        CASE "REWARD":
            IF wallet.rewardBalance < amount THEN THROW VALIDATION_ERROR("Insufficient reward balance")
            wallet.rewardBalance -= amount
        CASE "DEPOSIT":
            IF wallet.depositBalance < amount THEN THROW VALIDATION_ERROR("Insufficient deposit balance")
            wallet.depositBalance -= amount
        CASE "ESCROW":
            IF wallet.escrowBalance < amount THEN THROW VALIDATION_ERROR("Insufficient escrow balance")
            wallet.escrowBalance -= amount
    END SWITCH

    wallet.version++
    db.update(wallet)
END
```

### 11.16 State Machines

#### 11.16.1 Wallet State Machine

```
Wallet State Machine:
=====================

  [ACTIVE] --freeze (fraud/AML)--> [FROZEN]
  [FROZEN] --unfreeze--> [ACTIVE]
  [FROZEN] --close--> [CLOSED]
  [ACTIVE] --close account--> [CLOSED]
```

#### 11.16.2 Settlement State Machine

```
Settlement State Machine:
========================

  [PENDING] --90/10 validated & executed--> [COMPLETED]
      --validation failed--> [FAILED]
  [COMPLETED] --reversed--> [REVERSED]
```

#### 11.16.3 Transaction State Machine

```
Transaction State Machine:
=========================

  [PENDING] --confirmed--> [COMPLETED]
      --failed--> [FAILED]
  [COMPLETED] --reversed--> [REVERSED]
```

### 11.17 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Wallet/Payments Engine is sole wallet authority; no other engine creates or modifies wallets. Participants access own wallet; admins access all (audited). MFA required for withdrawals. |
| **Validation** | QEV > 0; allocation sum = 90% of QEV; AP + R = QEV; sufficient balance; KYC tier; AML checks; refund ≤ original QEV |
| **Rate limiting** | Deposits: 10/hour per account; withdrawals: 5/hour per account; settlements: 100/min per source engine |
| **Audit** | Every wallet transaction, settlement, reversal, refund, chargeback, reconciliation — all with hash chains (SRS-WAL-014) |
| **Caching** | Wallet balances NOT cached (strong consistency required); allocation rates cached (1hr TTL, event-driven invalidation on governance change) |
| **Concurrency** | Wallet balance updates: PCC (row lock); settlement creation: OCC; ledger: append-only |
| **Idempotency** | Every transaction carries idempotencyKey (UNIQUE); settlement: sourceReference-based; reward distribution: "reward-{cycleId}-{accountId}" |
| **Retries** | External payment: 3x backoff via Integration Engine; event publish: outbox |
| **Timeout** | External payment: 30s; settlement: 10s; reconciliation: 300s (batch) |
| **Failure handling** | External payment failure → transaction FAILED, no balance change; settlement failure → retry then flag; reconciliation failure → halt distribution, alert |
| **Observability** | Metrics: transactions/sec, settlement amount, reserve held, reversal count, reconciliation pass rate; Traces: deposit, withdrawal, settlement, reversal |
| **Security boundary** | mTLS internal; strong-consistency DB; no direct DB access by other engines; financial-grade encryption; AML monitoring on all flows |

### 11.18 Sequence Diagram: Settlement with 90/10 Waterfall

```
Source Engine    Wallet Engine    K-Rewards Engine    Reserve
    |                 |                  |               |
    |--settle request->|                 |               |
    |                 |--calc QEV         |               |
    |                 |--calc AP=90%, R=10%             |
    |                 |--validate allocations=90%       |
    |                 |--validate AP+R=QEV               |
    |                 |                  |               |
    |                 |--credit counterparty wallet      |
    |                 |--hold reserve----->|--------------->|
    |                 |--fund reward pool->|              |
    |                 |<--pool funded------|              |
    |                 |--credit platform acct             |
    |                 |--credit operations acct           |
    |                 |--mark settlement COMPLETED        |
    |                 |--publish settlement.completed     |
    |<--settlement----|                  |               |
    |                 |                  |--accrue K-Points (async)
```

### 11.19 Sequence Diagram: Same-Cycle vs Later-Cycle Reversal

```
Refund Trigger    Wallet Engine    K-Rewards Engine    Reserve
    |                  |                  |                |
    |--refund request->|                  |                |
    |                  |--find original    |                |
    |                  |--determine cycle  |                |
    |                  |                  |                |
    |     [SAME-CYCLE]  |                  |                |
    |                  |--reverse K-Points->|                |
    |                  |--reverse pool contrib->|           |
    |                  |--reverse reserve----->|----------->|
    |                  |                  |  (reserve REVERSED)
    |                  |--reverse platform/ops credit      |
    |                  |--mark original REVERSED            |
    |                  |                  |                |
    |     [LATER-CYCLE] |                  |                |
    |                  |--reverse K-Points->|                |
    |                  |--deferred adjustment->|            |
    |                  |   (do NOT touch reserve)           |
    |                  |--reverse platform/ops credit      |
    |                  |--mark original REVERSED            |
    |<--reversal-------|                  |                |
```

### 11.20 Governing Requirement Traceability

SRS-WAL-001–014; SAD-1 Ch.14; PLC-1 Ch.24, 25, 31; KR-1 KR-ECO-001–013, KR-ECO-017, KR-ECO-054–059, KR-ECO-062–063, KR-FRD-004, KR-TRU-002, KR-GOV-030.

---

## Chapter 12 — Communication Engine Design

### 12.1 Overview

The Communication Engine is the sole authority for notifications, messaging, announcements, and community contributions across the ecosystem (SAD-1 Ch.15; PLC-1 Ch.16; SRS-MSG-001–004). Community contributions flow through the Communication Engine and feed the K-Rewards Engine as Community K-Points (KR-1 Ch.18, Ch.49).

Implements: SRS-MSG-001–004; SAD-1 Ch.15; PLC-1 Ch.16, 32; KR-1 KR-PNT-003 (Community category).

### 12.2 Component Design

```
┌───────────────────────────────────────────────────────────────┐
│                 COMMUNICATION ENGINE                            │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │Notification│ │Messaging│ │Announce- │ │Community │         │
│  │ Service  │ │ Service  │ │ment Svc  │ │Contrib   │         │
│  │          │ │          │ │          │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                       │
│  │ Channel  │ │Preference│ │  Abuse   │                       │
│  │ Router   │ │ Service  │ │ Filter   │                       │
│  └──────────┘ └──────────┘ └──────────┘                       │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Communication-DB (PostgreSQL)                         │    │
│  └────────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
```

### 12.3 Data Models

#### 12.3.1 Notification

| Field | Type | Constraints | Description |
|---|---|---|---|
| `notificationId` | UUID | PK | Notification ID |
| `accountId` | UUID | FK → Account, indexed | Recipient |
| `eventType` | enum | not null, indexed | `ORDER_UPDATE`, `BOOKING_UPDATE`, `CONTRACT_UPDATE`, `MESSAGE_RECEIVED`, `REWARD_CYCLE`, `KLEVEL_CHANGE`, `CORONATION`, `ANNOUNCEMENT`, `PAYMENT`, `SYSTEM` |
| `title` | string | not null | Notification title |
| `body` | text | not null | Notification body |
| `sourceEngine` | string | not null | Originating engine |
| `sourceReference` | string | nullable | Reference to source entity |
| `channels` | JSON | not null | Channels used (in-app, email, push) |
| `status` | enum | not null | `PENDING`, `DELIVERED`, `READ`, `DISMISSED` |
| `readAt` | timestamp | nullable | Read time |
| `createdAt` | timestamp | not null | Creation time |

#### 12.3.2 NotificationPreference

| Field | Type | Constraints | Description |
|---|---|---|---|
| `preferenceId` | UUID | PK | Preference ID |
| `accountId` | UUID | FK → Account, indexed | Participant |
| `eventType` | enum | not null | Event type |
| `inAppEnabled` | boolean | not null, default true | In-app channel |
| `emailEnabled` | boolean | not null, default true | Email channel |
| `pushEnabled` | boolean | not null, default true | Push channel |
| `minPriority` | enum | not null, default `LOW` | Minimum priority to deliver |
| PK | (`accountId`, `eventType`) | Composite unique | One preference per account per event |

#### 12.3.3 Message

| Field | Type | Constraints | Description |
|---|---|---|---|
| `messageId` | UUID | PK | Message ID |
| `conversationId` | UUID | not null, indexed | Conversation thread |
| `senderId` | UUID | FK → Account | Sender |
| `recipientId` | UUID | FK → Account | Recipient |
| `body` | text | not null | Message body |
| `attachments` | JSON | nullable | Attachment references |
| `contextType` | enum | not null | `COMMERCE`, `SERVICES`, `LEARNING`, `DIRECT`, `SUPPORT` |
| `contextReference` | string | nullable | Reference to context entity (order, contract, course) |
| `status` | enum | not null | `SENT`, `DELIVERED`, `READ` |
| `flagged` | boolean | not null, default false | Abuse-flagged |
| `createdAt` | timestamp | not null | Send time |
| `readAt` | timestamp | nullable | Read time |

#### 12.3.4 Announcement

| Field | Type | Constraints | Description |
|---|---|---|---|
| `announcementId` | UUID | PK | Announcement ID |
| `title` | string | not null | Title |
| `body` | text | not null | Body |
| `authorId` | UUID | FK → Account | Author (admin/governance) |
| `scope` | enum | not null | `PLATFORM_WIDE`, `TARGETED` |
| `targetCriteria` | JSON | nullable | Targeting (role, tier, region, segment) |
| `status` | enum | not null | `DRAFT`, `PENDING_APPROVAL`, `APPROVED`, `PUBLISHED`, `ARCHIVED` |
| `approvedBy` | UUID | nullable | Governance approver |
| `publishedAt` | timestamp | nullable | Publication time |
| `createdAt` | timestamp | not null | Creation time |

#### 12.3.5 CommunityContribution

| Field | Type | Constraints | Description |
|---|---|---|---|
| `contributionId` | UUID | PK | Contribution ID |
| `contributorId` | UUID | FK → Account, indexed | Contributor |
| `contributionType` | enum | not null | `HELPFUL_ANSWER`, `REVIEW`, `CONTENT`, `MENTORSHIP`, `COMMUNITY_SUPPORT` |
| `contextType` | enum | not null | `COMMERCE`, `SERVICES`, `LEARNING`, `COMMUNITY` |
| `contextReference` | string | nullable | Reference to context entity |
| `description` | text | not null | Description |
| `verified` | boolean | not null, default false | Verified by system/moderation |
| `kPointsAwarded` | decimal(15,2) | not null, default 0 | K-Points awarded |
| `status` | enum | not null | `PENDING`, `VERIFIED`, `REJECTED` |
| `createdAt` | timestamp | not null | Creation time |
| `verifiedAt` | timestamp | nullable | Verification time |

### 12.4 Notification Delivery Algorithm

```
ALGORITHM: SendNotification
INPUT: accountId, eventType, title, body, sourceEngine, sourceReference, priority
OUTPUT: notification
BEGIN
    // 1. Get participant preferences
    preferences = db.findPreference(accountId, eventType)
    IF preferences == NULL THEN
        preferences = getDefaultPreferences(eventType)
    END IF

    // 2. Check minimum priority
    IF priority < preferences.minPriority THEN
        RETURN NULL  // suppressed by preference
    END IF

    // 3. Determine channels
    channels = []
    IF preferences.inAppEnabled THEN channels.add("IN_APP")
    IF preferences.emailEnabled THEN channels.add("EMAIL")
    IF preferences.pushEnabled THEN channels.add("PUSH")

    // 4. Create notification
    notification = {
        notificationId: generateUUID(),
        accountId: accountId,
        eventType: eventType,
        title: title,
        body: body,
        sourceEngine: sourceEngine,
        sourceReference: sourceReference,
        channels: channels,
        status: "PENDING",
        createdAt: now()
    }
    db.insert(notification)

    // 5. Route to channels (async)
    FOR EACH channel IN channels DO
        SWITCH channel DO
            CASE "IN_APP": eventBus.publish("comm.notification.in_app", notification)
            CASE "EMAIL": eventBus.publish("comm.notification.email", notification)
            CASE "PUSH": eventBus.publish("comm.notification.push", notification)
        END SWITCH
    END FOR

    // 6. Mark delivered
    notification.status = "DELIVERED"
    db.update(notification)

    writeAudit("COMMUNICATION", "SendNotification", accountId, "NOTIFY",
               "SUCCESS", {eventType: eventType, channels: channels})

    RETURN notification
END
```

### 12.5 Messaging Algorithm

```
ALGORITHM: SendMessage
INPUT: senderId, recipientId, body, contextType, contextReference, attachments
OUTPUT: message
BEGIN
    // 1. Validate sender and recipient
    sender = identityEngine.getAccount(senderId)
    recipient = identityEngine.getAccount(recipientId)
    IF sender == NULL OR recipient == NULL THEN THROW NOT_FOUND
    IF sender.status != "ACTIVE" OR recipient.status != "ACTIVE" THEN
        THROW FORBIDDEN("Account not active")
    END IF

    // 2. Trust gate check
    trustCheck = trustEngine.checkTrustGate(senderId, "MESSAGING")
    IF trustCheck == FAIL THEN THROW FORBIDDEN("Trust below messaging threshold")

    // 3. Abuse filter
    abuseResult = abuseFilter.check({
        senderId: senderId,
        recipientId: recipientId,
        body: body,
        contextType: contextType
    })
    IF abuseResult.isBlocked THEN
        writeAudit("COMMUNICATION", "SendMessage", senderId, "MESSAGE",
                   "BLOCKED", {reason: abuseResult.reason})
        THROW FORBIDDEN("Message blocked: " + abuseResult.reason)
    END IF

    // 4. Rate limit check
    IF rateLimiter.isRateLimited(senderId, "MESSAGING") THEN
        THROW RATE_LIMITED("Too many messages")
    END IF

    // 5. Find or create conversation
    conversation = db.findOrCreateConversation(senderId, recipientId, contextType, contextReference)

    // 6. Create message
    message = {
        messageId: generateUUID(),
        conversationId: conversation.conversationId,
        senderId: senderId,
        recipientId: recipientId,
        body: body,
        attachments: attachments,
        contextType: contextType,
        contextReference: contextReference,
        status: "SENT",
        flagged: abuseResult.isFlagged,
        createdAt: now()
    }
    db.insert(message)

    // 7. Send notification to recipient
    sendNotification(recipientId, "MESSAGE_RECEIVED",
                    "New message from " + sender.displayName,
                    body[:100], "COMMUNICATION", message.messageId, "HIGH")

    writeAudit("COMMUNICATION", "SendMessage", senderId, "MESSAGE", "SUCCESS",
               {recipientId: recipientId, conversationId: conversation.conversationId})

    RETURN message
END
```

### 12.6 Announcement Algorithm

```
ALGORITHM: PublishAnnouncement
INPUT: announcementId, approverId
OUTPUT: announcement
BEGIN
    announcement = db.findAnnouncement(announcementId)
    IF announcement == NULL THEN THROW NOT_FOUND
    IF announcement.status != "PENDING_APPROVAL" THEN
        THROW CONFLICT("Announcement not pending approval")
    END IF

    // 1. Verify approver is governance-authorized
    IF NOT administrationEngine.isGovernanceAuthorized(approverId, "ANNOUNCEMENT_APPROVAL") THEN
        THROW FORBIDDEN("Not authorized to approve announcements")
    END IF

    // 2. Approve
    announcement.status = "APPROVED"
    announcement.approvedBy = approverId
    db.update(announcement)

    // 3. Determine recipients
    IF announcement.scope == "PLATFORM_WIDE" THEN
        recipients = identityEngine.getAllActiveAccounts()
    ELSE
        recipients = identityEngine.getAccountsByCriteria(announcement.targetCriteria)
    END IF

    // 4. Send notifications (batch, async)
    FOR EACH recipient IN recipients DO
        sendNotification(recipient.accountId, "ANNOUNCEMENT",
                        announcement.title, announcement.body,
                        "COMMUNICATION", announcement.announcementId, "HIGH")
    END FOR

    // 5. Mark published
    announcement.status = "PUBLISHED"
    announcement.publishedAt = now()
    db.update(announcement)

    writeAudit("COMMUNICATION", "PublishAnnouncement", announcementId,
               "ANNOUNCE", "SUCCESS",
               {scope: announcement.scope, recipientCount: recipients.size()})

    RETURN announcement
END
```

### 12.7 Community Contribution Algorithm

```
ALGORITHM: VerifyCommunityContribution
INPUT: contributionId, verifierId
OUTPUT: contribution
BEGIN
    contribution = db.findContribution(contributionId)
    IF contribution == NULL THEN THROW NOT_FOUND
    IF contribution.status != "PENDING" THEN THROW CONFLICT("Not pending")

    // 1. Verify contribution is genuine (KR-PNT-002)
    IF NOT isGenuineContribution(contribution) THEN
        contribution.status = "REJECTED"
        db.update(contribution)
        writeAudit("COMMUNICATION", "VerifyContribution", contributionId,
                   "VERIFY", "FAILURE", {reason: "not_genuine"})
        RETURN contribution
    END IF

    // 2. Mark verified
    contribution.verified = true
    contribution.status = "VERIFIED"
    contribution.verifiedAt = now()
    db.update(contribution)

    // 3. Submit K-Points accrual to K-Rewards Engine (Community category)
    baseValue = getContributionBaseValue(contribution.contributionType)  // GOVERNANCE PARAMETER
    kRewardsEngine.accrueKPoints({
        accountId: contribution.contributorId,
        category: "COMMUNITY",
        baseValue: baseValue,
        evidenceRef: "contribution-" + contribution.contributionId,
        sourceEngine: "COMMUNICATION"
    })

    writeAudit("COMMUNICATION", "VerifyContribution", contributionId,
               "VERIFY", "SUCCESS",
               {contributorId: contribution.contributorId, kPoints: baseValue})

    RETURN contribution
END
```

### 12.8 State Machines

#### 12.8.1 Notification State Machine

```
  [PENDING] --delivered to channels--> [DELIVERED] --read--> [READ] --dismissed--> [DISMISSED]
```

#### 12.8.2 Announcement State Machine

```
  [DRAFT] --submit--> [PENDING_APPROVAL] --approved--> [APPROVED] --published--> [PUBLISHED] --archived--> [ARCHIVED]
      --rejected--> [DRAFT]
```

#### 12.8.3 Community Contribution State Machine

```
  [PENDING] --verified--> [VERIFIED] --rejected--> [REJECTED]
```

### 12.9 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Participants receive own notifications; send messages to active accounts; admins/governance publish announcements. Trust ≥ 30 for messaging. |
| **Validation** | Notification fields, message body length, announcement targeting criteria, contribution evidence |
| **Rate limiting** | Messages: 30/hour per participant; notifications: system-generated, no limit; announcements: 5/day per admin |
| **Audit** | Notification delivery, message send, announcement publish, contribution verification |
| **Caching** | Notification preferences (5min TTL); unread count (30s TTL) |
| **Concurrency** | Notification insert: append-only; preference update: OCC |
| **Idempotency** | Notification: event-based; message: UUID; contribution: "contribution-{contributionId}" for K-Points |
| **Retries** | Email/push delivery: 3x backoff; event publish: outbox for critical events |
| **Timeout** | Message send: 5s; notification delivery: 3s per channel; announcement publish: 300s (batch) |
| **Failure handling** | Channel delivery failure → retry then mark partial; abuse filter blocks message → audit and reject |
| **Observability** | Metrics: notifications/sec, delivery rate, message volume, announcement reach; Traces: notification flow |
| **Security boundary** | mTLS internal; abuse filtering on all messages; content policy enforcement; no sensitive data leakage in notifications |

### 12.10 Governing Requirement Traceability

SRS-MSG-001–004; SAD-1 Ch.15; PLC-1 Ch.16, 32; KR-1 KR-PNT-003 (Community category), KR-PNT-002.

---

## Chapter 13 — Intelligence Engine Design

### 13.1 Overview

The Intelligence Engine provides recommendations, search relevance, analytics, and fraud detection signals across the ecosystem (SAD-1 Ch.16; PLC-1 Ch.17; SRS-INT-001–004). It does **not** directly generate K-Points or modify Trust Scores or impose sanctions; it provides signals that other engines consume — the Trust Engine (trust signals), the K-Rewards Engine (fraud signals for K-Points blocking), and the Administration Engine (fraud signals for sanctions) (KR-1 Ch.47.3).

Implements: SRS-INT-001–004; SAD-1 Ch.16; PLC-1 Ch.17, 27; KR-1 KR-FRD-002, KR-FRD-007, KR-FRD-008.

**Key constraint:** No single automated fraud flag alone results in a sanction; at least two independent signals must corroborate (KR-1 KR-FRD-002). Detection signals and thresholds are not disclosed (KR-1 KR-FRD-008).

### 13.2 Component Design

```
┌───────────────────────────────────────────────────────────────┐
│                  INTELLIGENCE ENGINE                            │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │Recommend-│ │  Search  │ │ Analytics│ │  Fraud   │         │
│  │ ation    │ │ Relevance│ │ Service  │ │Detection │         │
│  │ Service  │ │ Service  │ │          │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │Behavioral│ │  Signal  │ │  Model   │ │  Signal  │         │
│  │ Tracker  │ │ Collector│ │ Registry │ │  Sink    │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Intelligence-DB (PostgreSQL + Analytics Store)         │    │
│  └────────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
```

### 13.3 Data Models

#### 13.3.1 BehavioralSignal

| Field | Type | Constraints | Description |
|---|---|---|---|
| `signalId` | UUID | PK | Signal ID |
| `accountId` | UUID | FK → Account, indexed | Participant |
| `signalType` | enum | not null, indexed | `VIEW`, `SEARCH`, `PURCHASE`, `ENROLL`, `BOOK`, `RATE`, `SHARE`, `BROWSE_CATEGORY` |
| `entityType` | enum | not null | `PRODUCT`, `SERVICE`, `COURSE`, `PROVIDER`, `CATEGORY` |
| `entityId` | UUID | nullable | Entity reference |
| `metadata` | JSON | nullable | Additional context |
| `consentGranted` | boolean | not null | Whether personalization consent was active |
| `createdAt` | timestamp | not null, indexed | Signal time |

#### 13.3.2 Recommendation

| Field | Type | Constraints | Description |
|---|---|---|---|
| `recommendationId` | UUID | PK | Recommendation ID |
| `accountId` | UUID | FK → Account, indexed | Target participant |
| `recommendationType` | enum | not null | `PRODUCT`, `SERVICE`, `COURSE`, `PROVIDER` |
| `entityId` | UUID | not null | Recommended entity |
| `score` | decimal(10,6) | not null | Relevance score (0–1) |
| `reason` | string | nullable | Explanation (non-disclosed internally) |
| `personalized` | boolean | not null | Whether personalized or generic |
| `createdAt` | timestamp | not null | Generation time |
| `expiresAt` | timestamp | not null | Expiry time |

#### 13.3.3 FraudSignal

| Field | Type | Constraints | Description |
|---|---|---|---|
| `fraudSignalId` | UUID | PK | Signal ID |
| `accountId` | UUID | FK → Account, indexed | Flagged participant |
| `signalCategory` | enum | not null, indexed | `ARTIFICIAL_TRANSACTION`, `CIRCULAR_REFERRAL`, `DUPLICATE_ACCOUNT`, `BOT_ACTIVITY`, `RING_INFLATION`, `REVIEW_MANIPULATION`, `SELF_TRANSACTION`, `CIRCULAR_PURCHASE` (KR-FRD-007) |
| `detectionMethod` | enum | not null | `PATTERN_ANALYSIS`, `ANOMALY_DETECTION`, `CROSS_REFERENCING`, `BEHAVIORAL_ANALYSIS`, `TRANSACTION_ANALYSIS`, `RING_STRUCTURE_ANALYSIS` (KR-FRD-007) |
| `confidence` | decimal(5,2) | not null | Confidence score (0–100) |
| `evidence` | JSON | not null | Supporting evidence (not disclosed externally) |
| `corroborated` | boolean | not null, default false | Whether corroborated by ≥2 independent signals |
| `corroboratingSignals` | JSON | nullable | References to corroborating signals |
| `status` | enum | not null | `DETECTED`, `CORROBORATED`, `DISMISSED`, `ACTED_UPON` |
| `createdAt` | timestamp | not null | Detection time |

#### 13.3.4 AnalyticsSnapshot

| Field | Type | Constraints | Description |
|---|---|---|---|
| `snapshotId` | UUID | PK | Snapshot ID |
| `subjectType` | enum | not null | `VENDOR`, `PROVIDER`, `INSTRUCTOR`, `LEARNER`, `PLATFORM` |
| `subjectId` | UUID | nullable | Subject (null for platform) |
| `metricName` | string | not null | Metric name (e.g., "total_sales", "completion_rate", "marketplace_health") |
| `metricValue` | decimal(20,4) | not null | Metric value |
| `period` | string | not null | Period label (e.g., "2026-08") |
| `computedFrom` | timestamp | not null | Data start |
| `computedTo` | timestamp | not null | Data end |
| `createdAt` | timestamp | not null | Snapshot time |

### 13.4 Recommendation Algorithm

```
ALGORITHM: GenerateRecommendations
INPUT: accountId, recommendationType, limit
OUTPUT: recommendations[]
BEGIN
    // 1. Check personalization consent
    consent = identityEngine.getPersonalizationConsent(accountId)

    IF NOT consent THEN
        // Generic recommendations (SRS-INT-001 AC3)
        entities = getTopRatedEntities(recommendationType, limit)
        FOR EACH entity IN entities DO
            rec = {
                recommendationId: generateUUID(),
                accountId: accountId,
                recommendationType: recommendationType,
                entityId: entity.entityId,
                score: entity.genericScore,
                personalized: false,
                createdAt: now(),
                expiresAt: now() + 3600
            }
            db.insert(rec)
        END FOR
        RETURN recs
    END IF

    // 2. Personalized: gather behavioral signals
    signals = db.findBehavioralSignals(accountId, last90Days)

    // 3. Build participant profile vector
    profile = buildProfileVector(signals)

    // 4. Score candidate entities
    candidates = db.findActiveEntities(recommendationType)
    scored = []
    FOR EACH candidate IN candidates DO
        // Collaborative filtering score
        cfScore = collaborativeFilter(accountId, candidate, signals)

        // Content-based score
        cbScore = contentBasedScore(profile, candidate)

        // Trust/reputation boost
        trustBoost = getTrustReputationBoost(candidate)

        // Blend
        finalScore = (cfScore * 0.4) + (cbScore * 0.4) + (trustBoost * 0.2)
        scored.add({entity: candidate, score: finalScore})
    END FOR

    // 5. Rank and select top N
    scored.sort(descending by score)
    topN = scored[:limit]

    // 6. Store recommendations
    FOR EACH item IN topN DO
        rec = {
            recommendationId: generateUUID(),
            accountId: accountId,
            recommendationType: recommendationType,
            entityId: item.entity.entityId,
            score: item.score,
            personalized: true,
            createdAt: now(),
            expiresAt: now() + 3600
        }
        db.insert(rec)
    END FOR

    RETURN topN
END
```

### 13.5 Search Relevance Algorithm

```
ALGORITHM: RankSearchResults
INPUT: query, entityType, accountId
OUTPUT: rankedResults[]
BEGIN
    // 1. Execute base search (via shared Search Service)
    baseResults = searchService.search(query, entityType)

    IF baseResults.isEmpty() THEN RETURN []

    // 2. For each result, compute relevance score
    scored = []
    FOR EACH result IN baseResults DO
        // Text relevance (TF-IDF or BM25)
        textScore = searchService.getTextRelevance(result, query)

        // Trust/reputation signal (SRS-INT-002 AC2)
        IF entityType == "PRODUCT" THEN
            vendor = commerceEngine.getVendor(result.vendorId)
            trustScore = trustEngine.getTrustScore(vendor.accountId)
            reputationScore = vendor.averageRating / 5.0
        ELSE IF entityType == "SERVICE" THEN
            provider = servicesEngine.getProvider(result.providerId)
            trustScore = trustEngine.getTrustScore(provider.accountId)
            reputationScore = provider.reputationScore
        ELSE IF entityType == "COURSE" THEN
            instructor = learningEngine.getInstructor(result.instructorId)
            trustScore = trustEngine.getTrustScore(instructor.accountId)
            reputationScore = result.averageRating / 5.0
        END IF

        // Blend text relevance with trust and reputation
        // Weights are GOVERNANCE PARAMETERS
        wText = getSearchWeight("TEXT")      // GOVERNANCE PARAMETER
        wTrust = getSearchWeight("TRUST")    // GOVERNANCE PARAMETER
        wReputation = getSearchWeight("REPUTATION")  // GOVERNANCE PARAMETER

        finalScore = (textScore * wText) +
                     (trustScore / 100.0 * wTrust) +
                     (reputationScore * wReputation)

        scored.add({result: result, score: finalScore})
    END FOR

    // 3. Sort by final score descending
    scored.sort(descending by score)

    // 4. Audit for governance review (SRS-INT-002 AC4)
    writeAudit("INTELLIGENCE", "RankSearchResults", accountId, "SEARCH",
               "SUCCESS", {query: query, entityType: entityType, resultCount: scored.size()})

    RETURN scored
END
```

### 13.6 Analytics Computation Algorithm

```
ALGORITHM: ComputeAnalytics
INPUT: subjectType, subjectId, period
OUTPUT: analyticsSnapshot[]
BEGIN
    snapshots = []

    SWITCH subjectType DO
        CASE "VENDOR":
            // Sales analytics
            sales = commerceEngine.getVendorSales(subjectId, period)
            snapshots.add(buildSnapshot("total_sales", sales.total, period))
            snapshots.add(buildSnapshot("order_count", sales.count, period))
            snapshots.add(buildSnapshot("average_order_value", sales.avgValue, period))

            // Performance analytics
            fulfilmentRate = commerceEngine.getFulfilmentRate(subjectId, period)
            snapshots.add(buildSnapshot("fulfilment_rate", fulfilmentRate, period))

            // Reputation analytics
            reputation = commerceEngine.getVendorReputation(subjectId, period)
            snapshots.add(buildSnapshot("average_rating", reputation.avgRating, period))
            snapshots.add(buildSnapshot("review_count", reputation.reviewCount, period))

            // Inventory analytics
            inventory = commerceEngine.getInventoryStatus(subjectId)
            snapshots.add(buildSnapshot("active_listings", inventory.activeCount, period))
            snapshots.add(buildSnapshot("out_of_stock", inventory.outOfStockCount, period))

        CASE "PROVIDER":
            contracts = servicesEngine.getProviderContracts(subjectId, period)
            snapshots.add(buildSnapshot("contract_count", contracts.count, period))
            snapshots.add(buildSnapshot("total_revenue", contracts.totalRevenue, period))
            snapshots.add(buildSnapshot("completion_rate", contracts.completionRate, period))
            snapshots.add(buildSnapshot("on_time_rate", contracts.onTimeRate, period))
            snapshots.add(buildSnapshot("reputation_score", contracts.reputation, period))

        CASE "INSTRUCTOR":
            enrollments = learningEngine.getInstructorEnrollments(subjectId, period)
            snapshots.add(buildSnapshot("total_learners", enrollments.count, period))
            snapshots.add(buildSnapshot("completion_rate", enrollments.completionRate, period))
            snapshots.add(buildSnapshot("average_rating", enrollments.avgRating, period))
            snapshots.add(buildSnapshot("revenue", enrollments.revenue, period))

        CASE "LEARNER":
            progress = learningEngine.getLearnerProgress(subjectId, period)
            snapshots.add(buildSnapshot("courses_enrolled", progress.enrolled, period))
            snapshots.add(buildSnapshot("courses_completed", progress.completed, period))
            snapshots.add(buildSnapshot("completion_rate", progress.completionRate, period))
            snapshots.add(buildSnapshot("average_score", progress.avgScore, period))

        CASE "PLATFORM":
            // Marketplace health
            mktHealth = getMarketplaceHealth(period)
            snapshots.add(buildSnapshot("gmv", mktHealth.gmv, period))
            snapshots.add(buildSnapshot("active_vendors", mktHealth.activeVendors, period))
            snapshots.add(buildSnapshot("active_providers", mktHealth.activeProviders, period))
            snapshots.add(buildSnapshot("active_learners", mktHealth.activeLearners, period))

            // Reward economy health
            ecoHealth = kRewardsEngine.getEconomyHealth(period)
            snapshots.add(buildSnapshot("reward_pool", ecoHealth.poolSize, period))
            snapshots.add(buildSnapshot("rewards_distributed", ecoHealth.distributed, period))
            snapshots.add(buildSnapshot("kpoints_accrued", ecoHealth.kpointsAccrued, period))

            // Fraud indicators
            fraudStats = getFraudStats(period)
            snapshots.add(buildSnapshot("fraud_signals_detected", fraudStats.detected, period))
            snapshots.add(buildSnapshot("fraud_signals_corroborated", fraudStats.corroborated, period))
            snapshots.add(buildSnapshot("sanctions_imposed", fraudStats.sanctions, period))
    END SWITCH

    // Store snapshots
    FOR EACH snapshot IN snapshots DO
        snapshot.snapshotId = generateUUID()
        snapshot.createdAt = now()
        db.insert(snapshot)
    END FOR

    writeAudit("INTELLIGENCE", "ComputeAnalytics", subjectId, "ANALYTICS",
               "SUCCESS", {subjectType: subjectType, metricCount: snapshots.size()})

    RETURN snapshots
END
```

### 13.7 Fraud Detection Algorithm

```
ALGORITHM: DetectFraudSignals
INPUT: accountId, activityContext
OUTPUT: fraudSignals[]
BEGIN
    fraudSignals = []

    // 1. Pattern Analysis: artificial transactions
    IF detectArtificialTransactions(accountId, activityContext) THEN
        fraudSignals.add(createSignal(accountId, "ARTIFICIAL_TRANSACTION",
            "PATTERN_ANALYSIS", confidence, evidence))
    END IF

    // 2. Circular referral detection
    IF detectCircularReferral(accountId) THEN
        fraudSignals.add(createSignal(accountId, "CIRCULAR_REFERRAL",
            "RING_STRUCTURE_ANALYSIS", confidence, evidence))
    END IF

    // 3. Duplicate account detection
    IF detectDuplicateAccount(accountId) THEN
        fraudSignals.add(createSignal(accountId, "DUPLICATE_ACCOUNT",
            "CROSS_REFERENCING", confidence, evidence))
    END IF

    // 4. Bot activity detection (behavioral analysis)
    IF detectBotActivity(accountId, activityContext) THEN
        fraudSignals.add(createSignal(accountId, "BOT_ACTIVITY",
            "BEHAVIORAL_ANALYSIS", confidence, evidence))
    END IF

    // 5. Ring inflation detection
    IF detectRingInflation(accountId) THEN
        fraudSignals.add(createSignal(accountId, "RING_INFLATION",
            "RING_STRUCTURE_ANALYSIS", confidence, evidence))
    END IF

    // 6. Review manipulation detection
    IF detectReviewManipulation(accountId) THEN
        fraudSignals.add(createSignal(accountId, "REVIEW_MANIPULATION",
            "PATTERN_ANALYSIS", confidence, evidence))
    END IF

    // 7. Self-transaction / circular purchase detection
    IF detectSelfTransaction(accountId, activityContext) THEN
        fraudSignals.add(createSignal(accountId, "SELF_TRANSACTION",
            "TRANSACTION_ANALYSIS", confidence, evidence))
    END IF

    // 8. Store all detected signals
    FOR EACH signal IN fraudSignals DO
        signal.fraudSignalId = generateUUID()
        signal.status = "DETECTED"
        signal.createdAt = now()
        db.insert(signal)
    END FOR

    // 9. Check corroboration (KR-FRD-002: no single signal → sanction)
    IF fraudSignals.size() >= 2 THEN
        // Multiple independent signals corroborate
        primarySignal = fraudSignals[0]
        primarySignal.corroborated = true
        primarySignal.corroboratingSignals = fraudSignals[1:].map(s => s.fraudSignalId)
        primarySignal.status = "CORROBORATED"
        db.update(primarySignal)

        // 10. Feed signals to consuming engines
        // Feed to Trust Engine (trust signals)
        trustEngine.submitTrustSignal(accountId, "FRAUD_FLAG",
            "INTELLIGENCE", primarySignal.fraudSignalId)

        // Feed to K-Rewards Engine (K-Points blocking)
        eventBus.publish("krewards.fraud.signal", {
            accountId: accountId,
            signalId: primarySignal.fraudSignalId,
            categories: fraudSignals.map(s => s.signalCategory)
        })

        // Feed to Administration Engine (sanctions)
        eventBus.publish("administration.fraud.report", {
            accountId: accountId,
            fraudType: primarySignal.signalCategory,
            evidence: primarySignal.evidence,
            corroborated: true
        })

        writeAudit("INTELLIGENCE", "DetectFraudSignals", accountId,
                   "FRAUD_DETECTED", "SUCCESS",
                   {signalCount: fraudSignals.size(), corroborated: true})
    ELSE IF fraudSignals.size() == 1 THEN
        // Single signal: detect but do not sanction (KR-FRD-002)
        writeAudit("INTELLIGENCE", "DetectFraudSignals", accountId,
                   "FRAUD_SIGNAL", "SUCCESS",
                   {signalCount: 1, corroborated: false,
                    note: "single_signal_no_sanction"})
    END IF

    RETURN fraudSignals
END
```

### 13.8 Signal Collection Algorithm

```
ALGORITHM: CollectSignal
INPUT: accountId, signalType, entityType, entityId, metadata
BEGIN
    // 1. Check consent
    consent = identityEngine.getPersonalizationConsent(accountId)

    // 2. Store signal (even without consent, for fraud detection; but
    //    do not use for personalization without consent)
    signal = {
        signalId: generateUUID(),
        accountId: accountId,
        signalType: signalType,
        entityType: entityType,
        entityId: entityId,
        metadata: metadata,
        consentGranted: consent,
        createdAt: now()
    }
    db.insert(signal)

    // 3. If consent granted, trigger recommendation refresh (async)
    IF consent THEN
        eventBus.publish("intelligence.signal.collected", {
            accountId: accountId,
            signalType: signalType
        })
    END IF

    // 4. Always run lightweight fraud check on transaction signals
    IF signalType IN ["PURCHASE", "ENROLL", "BOOK"] THEN
        eventBus.publish("intelligence.fraud.check", {
            accountId: accountId,
            activityContext: {signalType: signalType, entityId: entityId}
        })
    END IF
END
```

### 13.9 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Participants view own analytics and recommendations; admins view platform analytics. Personalization data access-controlled to the participant. |
| **Validation** | Signal metadata, analytics period, recommendation type, fraud evidence format |
| **Rate limiting** | Signal collection: 100/min per account; recommendation generation: 10/min per account; analytics computation: 5/min per subject |
| **Audit** | Recommendation generation, search ranking, analytics computation, fraud signal detection and corroboration (SRS-INT-002 AC4) |
| **Caching** | Recommendations: 1hr TTL; analytics snapshots: 1hr TTL; search results: 60s TTL |
| **Concurrency** | Signal insert: append-only; analytics computation: OCC on snapshot; recommendation generation: no conflict (per-account) |
| **Idempotency** | Analytics: "analytics-{subjectType}-{subjectId}-{period}"; fraud signals: UUID-based |
| **Retries** | Fraud signal feed: 3x backoff; event publish: event bus (at-least-once) |
| **Timeout** | Recommendation: 3s; search ranking: 2s; analytics: 30s (batch); fraud detection: 10s |
| **Failure handling** | Recommendation failure → generic fallback; analytics failure → stale snapshot; fraud detection failure → log and continue (do not block legitimate activity) |
| **Observability** | Metrics: recommendations/sec, search queries/sec, analytics computations, fraud signals detected, corroboration rate; Traces: recommendation, fraud detection |
| **Security boundary** | mTLS internal; personalization data consent-gated; fraud detection signals not disclosed (KR-FRD-008); analytics access-controlled; no direct DB access by other engines |

### 13.10 Governing Requirement Traceability

SRS-INT-001–004; SAD-1 Ch.16; PLC-1 Ch.17, 27; KR-1 KR-FRD-002, KR-FRD-007, KR-FRD-008, KR-TRU-007.

---

## Chapter 14 — Administration Engine Design

### 14.1 Overview

The Administration Engine is the sole authority for governance enforcement, policy enforcement, moderation, dispute resolution, audit logging, access management, compliance monitoring, the anti-fraud process, and sanctions across the ecosystem (SAD-1 Ch.17; PLC-1 Ch.18; SRS-ADM-001–008). It operates under the governance framework (GOV-0) and is subordinate to PLC-1, KR-1, and CMP-0. The Administration Engine enforces the rules of other governing documents in software; it does not define the rules (KR-1 Ch.58).

Implements: SRS-ADM-001–008; SAD-1 Ch.17; PLC-1 Ch.18, 27, 32, 33.5; KR-1 KR-GOV-001–004, KR-FRD-002–012, KR-GOV-030; GOV-0; CMP-0.

### 14.2 Component Design

```
┌───────────────────────────────────────────────────────────────┐
│                  ADMINISTRATION ENGINE                           │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │Governance│ │  Policy  │ │Moderation│ │ Dispute  │         │
│  │ Review   │ │ Enforce  │ │ Service  │ │Resolution│         │
│  │ Service  │ │ Service  │ │          │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │  Audit   │ │  Access  │ │Compliance│ │Anti-Fraud│         │
│  │  Log     │ │ Mgmt Svc │ │ Monitor  │ │ Process  │         │
│  │ Service  │ │          │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐                                   │
│  │ Sanction │ │  Appeal  │                                   │
│  │ Service  │ │ Service  │                                   │
│  └──────────┘ └──────────┘                                   │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Admin-DB (PostgreSQL, append-only audit log)          │    │
│  └────────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
```

### 14.3 Data Models

#### 14.3.1 GovernanceReview

| Field | Type | Constraints | Description |
|---|---|---|---|
| `reviewId` | UUID | PK | Review ID |
| `policyType` | enum | not null | `KREWARDS_PARAMETER`, `ALLOCATION_RATE`, `PROGRESSION_MATRIX`, `REWARD_CYCLE`, `SANCTION_GUIDELINE` |
| `changeRequest` | JSON | not null | Proposed change |
| `status` | enum | not null | `DRAFT`, `RATIONALE_PENDING`, `CONSISTENCY_PENDING`, `IMPACT_PENDING`, `PUBLICATION_PENDING`, `APPROVED`, `REJECTED` |
| `rationaleDoc` | text | nullable | Documented rationale and expected impact (Part 1) |
| `consistencyAssessment` | text | nullable | Consistency assessment (Part 2) |
| `impactModel` | JSON | nullable | Impact model against existing participant standing (Part 3, prospective-only) |
| `publicationNotice` | JSON | nullable | Publication with advance notice (Part 4) |
| `retroactiveCheck` | boolean | not null, default false | Whether change would retroactively demote standing |
| `submittedBy` | UUID | FK → Account | Requester |
| `approvedBy` | UUID | nullable, FK → Account | Approver |
| `createdAt` | timestamp | not null | Creation time |
| `completedAt` | timestamp | nullable | Completion time |

#### 14.3.2 PolicyEnforcement

| Field | Type | Constraints | Description |
|---|---|---|---|
| `enforcementId` | UUID | PK | Enforcement ID |
| `policyCategory` | enum | not null | `MARKETPLACE`, `CONTENT`, `ANTI_FRAUD`, `COMPLIANCE` |
| `engine` | string | not null | Target engine |
| `entityType` | string | not null | Entity type |
| `entityId` | UUID | not null | Entity ID |
| `violationType` | string | not null | Violation type |
| `action` | enum | not null | `BLOCKED`, `REVERTED`, `FLAGGED`, `ESCALATED` |
| `description` | text | not null | Description |
| `status` | enum | not null | `PENDING`, `RESOLVED`, `APPEALED` |
| `createdAt` | timestamp | not null | Creation time |

#### 14.3.3 ModerationCase

| Field | Type | Constraints | Description |
|---|---|---|---|
| `caseId` | UUID | PK | Case ID |
| `contentType` | enum | not null | `STOREFRONT`, `LISTING`, `PROFILE`, `REVIEW`, `COURSE`, `MESSAGE`, `CONTRIBUTION` |
| `contentId` | UUID | not null | Content reference |
| `sourceEngine` | string | not null | Source engine |
| `reporterId` | UUID | nullable | Reporter (if user-reported) |
| `screeningResult` | enum | nullable | `AUTO_APPROVED`, `AUTO_FLAGGED`, `AUTO_REMOVED` |
| `humanReviewRequired` | boolean | not null | Whether human review is needed |
| `reviewerId` | UUID | nullable | Human reviewer |
| `decision` | enum | nullable | `APPROVED`, `REMOVED`, `FLAGGED`, `ESCALATED` |
| `appealable` | boolean | not null, default true | Whether decision can be appealed |
| `status` | enum | not null | `SCREENING`, `PENDING_REVIEW`, `DECIDED`, `APPEALED`, `RESOLVED` |
| `createdAt` | timestamp | not null | Creation time |
| `decidedAt` | timestamp | nullable | Decision time |

#### 14.3.4 Dispute

| Field | Type | Constraints | Description |
|---|---|---|---|
| `disputeId` | UUID | PK | Dispute ID |
| `sourceEngine` | enum | not null | `COMMERCE`, `SERVICES`, `LEARNING` |
| `sourceReference` | string | not null | Reference (orderId, contractId, courseId) |
| `complainantId` | UUID | FK → Account | Complainant |
| `respondentId` | UUID | FK → Account | Respondent |
| `disputeType` | enum | not null | `REFUND_REQUEST`, `QUALITY_ISSUE`, `NON_DELIVERY`, `MISREPRESENTATION`, `SVC_NON_DELIVERY`, `LRN_QUALITY` |
| `stage` | enum | not null | `NEGOTIATION`, `MEDIATION`, `GOVERNANCE_DECISION`, `RESOLVED`, `ESCALATED` |
| `outcome` | enum | nullable | `REFUND`, `PARTIAL_REFUND`, `REJECTION`, `REWORK`, `EXCHANGE` |
| `outcomeAmount` | decimal(20,2) | nullable | Refund/adjustment amount |
| `appealable` | boolean | not null, default true | Non-waivable appeal rights (KR-GOV-004) |
| `createdAt` | timestamp | not null | Creation time |
| `resolvedAt` | timestamp | nullable | Resolution time |

#### 14.3.5 Sanction

| Field | Type | Constraints | Description |
|---|---|---|---|
| `sanctionId` | UUID | PK | Sanction ID |
| `accountId` | UUID | FK → Account, indexed | Sanctioned participant |
| `severity` | enum | not null | `KPOINTS_INVALIDATION`, `REWARD_FORFEITURE`, `RING_CORRECTION`, `TRUST_REDUCTION`, `PRIVILEGE_SUSPENSION`, `TEMPORARY_SUSPENSION`, `PERMANENT_BAN` (KR-FRD-011, KR-FRD-012) |
| `reason` | string | not null | Sanction reason |
| `fraudSignalIds` | JSON | not null | Corroborating fraud signal references |
| `humanReviewer` | UUID | not null | Human reviewer (KR-FRD-002) |
| `approvedBy` | UUID | nullable | Governance approver (for severe sanctions) |
| `status` | enum | not null | `ACTIVE`, `APPEALED`, `OVERTURNED`, `EXPIRED` |
| `effectFrom` | timestamp | not null | Effective time |
| `effectTo` | timestamp | nullable | Expiry (for temporary sanctions) |
| `createdAt` | timestamp | not null | Creation time |

#### 14.3.6 Appeal

| Field | Type | Constraints | Description |
|---|---|---|---|
| `appealId` | UUID | PK | Appeal ID |
| `accountId` | UUID | FK → Account | Appellant |
| `determinationType` | enum | not null | `SANCTION`, `MODERATION`, `DISPUTE_OUTCOME`, `KLEVEL_DEMOTION`, `KPOINTS_INVALIDATION` |
| `determinationId` | UUID | not null | Reference to the determination |
| `grounds` | text | not null | Appeal grounds |
| `status` | enum | not null | `PENDING`, `UNDER_REVIEW`, `UPHELD`, `OVERTURNED`, `PARTIALLY_OVERTURNED` |
| `reviewerId` | UUID | nullable | Appeal reviewer |
| `paymentRequired` | boolean | not null, default false | NEVER true (KR-GOV-004) |
| `createdAt` | timestamp | not null | Creation time |
| `decidedAt` | timestamp | nullable | Decision time |

#### 14.3.7 ComplianceFlag

| Field | Type | Constraints | Description |
|---|---|---|---|
| `flagId` | UUID | PK | Flag ID |
| `accountId` | UUID | nullable, FK → Account | Related participant (if applicable) |
| `complianceType` | enum | not null | `KYC`, `AML`, `DATA_PROTECTION`, `CONSUMER_PROTECTION`, `IP` |
| `severity` | enum | not null | `LOW`, `MEDIUM`, `HIGH`, `CRITICAL` |
| `description` | text | not null | Description |
| `action` | enum | not null | `NOTIFIED`, `RESTRICTED`, `BLOCKED`, `REPORTED` |
| `status` | enum | not null | `OPEN`, `RESOLVED`, `ESCALATED` |
| `createdAt` | timestamp | not null | Creation time |
| `resolvedAt` | timestamp | nullable | Resolution time |

### 14.4 Governance Review Algorithm

```
ALGORITHM: ProcessGovernanceReview
INPUT: reviewId
OUTPUT: review
BEGIN
    review = db.findGovernanceReview(reviewId)
    IF review == NULL THEN THROW NOT_FOUND

    // Four-part test (KR-GOV-002)
    // Part 1: Documented rationale and expected impact
    IF review.rationaleDoc == NULL OR isEmpty(review.rationaleDoc) THEN
        review.status = "RATIONALE_PENDING"
        db.update(review)
        RETURN review  // not ready
    END IF

    // Part 2: Consistency assessment
    IF review.consistencyAssessment == NULL THEN
        review.status = "CONSISTENCY_PENDING"
        db.update(review)
        RETURN review
    END IF

    // Verify consistency with existing governance documents
    IF NOT isConsistentWithGovernance(review.changeRequest) THEN
        review.status = "REJECTED"
        db.update(review)
        writeAudit("ADMIN", "GovernanceReview", reviewId, "REVIEW", "FAILURE",
                   {reason: "inconsistent_with_governance"})
        RETURN review
    END IF

    // Part 3: Impact modeling (prospective-only, KR-LVL-024)
    IF review.impactModel == NULL THEN
        review.status = "IMPACT_PENDING"
        db.update(review)
        RETURN review
    END IF

    // Check for retroactive demotion (KR-LVL-024)
    IF wouldRetroactivelyDemote(review.changeRequest) THEN
        review.retroactiveCheck = true
        review.status = "REJECTED"
        db.update(review)
        writeAudit("ADMIN", "GovernanceReview", reviewId, "REVIEW", "FAILURE",
                   {reason: "retroactive_demotion_blocked"})
        RETURN review
    END IF

    // Part 4: Publication with advance notice
    IF review.publicationNotice == NULL THEN
        review.status = "PUBLICATION_PENDING"
        db.update(review)
        RETURN review
    END IF

    // All four parts passed
    review.status = "APPROVED"
    review.completedAt = now()
    db.update(review)

    // Apply the policy change (prospective-only)
    applyPolicyChange(review.changeRequest)

    outbox.publish("admin.governance.policy_changed", {
        reviewId: reviewId,
        policyType: review.policyType
    })

    writeAudit("ADMIN", "GovernanceReview", reviewId, "REVIEW", "SUCCESS",
               {policyType: review.policyType})

    RETURN review
END
```

### 14.5 Policy Enforcement Algorithm

```
ALGORITHM: EnforcePolicy
INPUT: engine, entityType, entityId, action, context
OUTPUT: enforcementResult
BEGIN
    // 1. Load applicable policies
    policies = db.findPolicies(engine, entityType)

    FOR EACH policy IN policies DO
        // 2. Check if action violates policy
        violation = checkPolicyViolation(policy, action, context)

        IF violation.detected THEN
            // 3. Take action based on severity
            SWITCH violation.severity DO
                CASE "BLOCK":
                    // Block the action
                    enforcement = {
                        enforcementId: generateUUID(),
                        policyCategory: policy.category,
                        engine: engine,
                        entityType: entityType,
                        entityId: entityId,
                        violationType: violation.type,
                        action: "BLOCKED",
                        description: violation.description,
                        status: "RESOLVED",
                        createdAt: now()
                    }
                    db.insert(enforcement)
                    writeAudit("ADMIN", "EnforcePolicy", entityId, "POLICY", "BLOCKED",
                               {policy: policy.name, violation: violation.type})
                    RETURN {allowed: false, enforcement: enforcement}

                CASE "REVERT":
                    // Revert the action
                    revertAction(engine, entityId, action)
                    enforcement = {..., action: "REVERTED", ...}
                    db.insert(enforcement)
                    RETURN {allowed: false, reverted: true, enforcement: enforcement}

                CASE "FLAG":
                    // Flag for review
                    enforcement = {..., action: "FLAGGED", status: "PENDING", ...}
                    db.insert(enforcement)
                    // Continue processing but flag
            END SWITCH
        END IF
    END FOR

    RETURN {allowed: true}
END
```

### 14.6 Content Moderation Algorithm

```
ALGORITHM: ModerateContent
INPUT: contentType, contentId, sourceEngine, content
OUTPUT: moderationCase
BEGIN
    // 1. Create case
    case = {
        caseId: generateUUID(),
        contentType: contentType,
        contentId: contentId,
        sourceEngine: sourceEngine,
        status: "SCREENING",
        createdAt: now()
    }
    db.insert(case)

    // 2. Automated screening
    screeningResult = runAutomatedScreening(content, contentType)

    SWITCH screeningResult.verdict DO
        CASE "CLEAN":
            case.screeningResult = "AUTO_APPROVED"
            case.humanReviewRequired = false
            case.decision = "APPROVED"
            case.status = "DECIDED"

        CASE "SUSPICIOUS":
            case.screeningResult = "AUTO_FLAGGED"
            case.humanReviewRequired = true
            case.status = "PENDING_REVIEW"

        CASE "VIOLATION":
            case.screeningResult = "AUTO_REMOVED"
            case.humanReviewRequired = true  // human must confirm auto-removal
            case.decision = "REMOVED"
            case.status = "PENDING_REVIEW"  // pending human confirmation
            // Remove content immediately
            sourceEngine.removeContent(contentId)
    END SWITCH

    db.update(case)

    // 3. If human review needed, notify moderators
    IF case.humanReviewRequired THEN
        eventBus.publish("admin.moderation.review_required", {
            caseId: case.caseId,
            contentType: contentType,
            screeningResult: case.screeningResult
        })
    END IF

    writeAudit("ADMIN", "ModerateContent", contentId, "MODERATE",
               case.status == "DECIDED" ? "SUCCESS" : "PENDING",
               {screeningResult: case.screeningResult})

    RETURN case
END
```

### 14.7 Dispute Resolution Algorithm

```
ALGORITHM: ResolveDispute
INPUT: disputeId, resolution, resolverId
OUTPUT: dispute
BEGIN
    dispute = db.findDispute(disputeId)
    IF dispute == NULL THEN THROW NOT_FOUND
    IF dispute.stage == "RESOLVED" THEN THROW CONFLICT("Already resolved")

    // 1. Verify resolver authorization
    IF NOT isAuthorizedResolver(resolverId, dispute.stage) THEN
        THROW FORBIDDEN("Not authorized for this dispute stage")
    END IF

    // 2. Process based on stage
    SWITCH dispute.stage DO
        CASE "NEGOTIATION":
            // Parties negotiate; if unresolved, escalate to mediation
            IF resolution.unresolved THEN
                dispute.stage = "MEDIATION"
            ELSE
                dispute.outcome = resolution.outcome
                dispute.stage = "RESOLVED"
            END IF

        CASE "MEDIATION":
            // Mediator proposes resolution
            IF resolution.unresolved THEN
                dispute.stage = "GOVERNANCE_DECISION"
            ELSE
                dispute.outcome = resolution.outcome
                dispute.stage = "RESOLVED"
            END IF

        CASE "GOVERNANCE_DECISION":
            // Governance body makes final decision
            dispute.outcome = resolution.outcome
            dispute.outcomeAmount = resolution.amount
            dispute.stage = "RESOLVED"
    END SWITCH

    dispute.resolvedAt = dispute.stage == "RESOLVED" ? now() : NULL
    db.update(dispute)

    // 3. If resolved with refund/adjustment, enforce through Wallet Engine
    IF dispute.stage == "RESOLVED" AND dispute.outcome IN ["REFUND", "PARTIAL_REFUND"] THEN
        walletEngine.processRefund({
            originalSettlementId: getSettlementForDispute(dispute),
            refundAmount: dispute.outcomeAmount,
            reason: "dispute_resolution_" + dispute.disputeId,
            idempotencyKey: "dispute-" + dispute.disputeId
        })
    END IF

    // 4. Feed trust signal (SRS-TRU-005)
    IF dispute.stage == "RESOLVED" THEN
        trustEngine.submitTrustSignal(dispute.respondentId,
            dispute.outcome == "REJECTION" ? "DISPUTE_WON" : "DISPUTE_LOST",
            "ADMIN", dispute.disputeId)
    END IF

    // 5. Appeal rights preserved (KR-GOV-004)
    dispute.appealable = true

    outbox.publish("admin.dispute.resolved", {
        disputeId: dispute.disputeId,
        outcome: dispute.outcome,
        amount: dispute.outcomeAmount
    })

    writeAudit("ADMIN", "ResolveDispute", disputeId, "DISPUTE", "SUCCESS",
               {stage: dispute.stage, outcome: dispute.outcome})

    RETURN dispute
END
```

### 14.8 Anti-Fraud Process Algorithm

```
ALGORITHM: ProcessFraudReport
INPUT: fraudReport {accountId, fraudType, evidence, corroborated, sourceSignalIds}
OUTPUT: sanction | NULL
BEGIN
    // 1. Verify corroboration (KR-FRD-002: no single signal → sanction)
    IF NOT fraudReport.corroborated THEN
        writeAudit("ADMIN", "ProcessFraudReport", fraudReport.accountId,
                   "FRAUD", "PENDING", {note: "single_signal_no_sanction"})
        RETURN NULL  // detect but do not sanction
    END IF

    // 2. Create investigation case
    investigation = {
        investigationId: generateUUID(),
        accountId: fraudReport.accountId,
        fraudType: fraudReport.fraudType,
        evidence: fraudReport.evidence,
        signalIds: fraudReport.sourceSignalIds,
        status: "INVESTIGATING",
        createdAt: now()
    }
    db.insert(investigation)

    // 3. Human review required (KR-FRD-002, KR-FRD-003)
    // Notify human investigator
    eventBus.publish("admin.fraud.investigation_required", {
        investigationId: investigation.investigationId,
        accountId: fraudReport.accountId,
        fraudType: fraudReport.fraudType
    })

    writeAudit("ADMIN", "ProcessFraudReport", fraudReport.accountId,
               "FRAUD", "INVESTIGATING",
               {fraudType: fraudReport.fraudType, corroborated: true})

    RETURN investigation
END
```

```
ALGORITHM: ApplySanction
INPUT: investigationId, sanctionSeverity, reviewerId
OUTPUT: sanction
BEGIN
    investigation = db.findInvestigation(investigationId)
    IF investigation == NULL THEN THROW NOT_FOUND
    IF investigation.status != "INVESTIGATING" THEN THROW CONFLICT

    // 1. Human reviewer required (KR-FRD-002)
    IF reviewerId == NULL THEN THROW FORBIDDEN("Human review required")

    // 2. Create sanction (graduated, KR-FRD-011, KR-FRD-012)
    sanction = {
        sanctionId: generateUUID(),
        accountId: investigation.accountId,
        severity: sanctionSeverity,
        reason: investigation.fraudType,
        fraudSignalIds: investigation.signalIds,
        humanReviewer: reviewerId,
        approvedBy: isSevereSanction(sanctionSeverity) ? getGovernanceApproval() : NULL,
        status: "ACTIVE",
        effectFrom: now(),
        effectTo: getSanctionExpiry(sanctionSeverity),
        createdAt: now()
    }
    db.insert(sanction)

    // 3. Execute sanction effects
    SWITCH sanctionSeverity DO
        CASE "KPOINTS_INVALIDATION":
            kRewardsEngine.invalidateKPoints(investigation.accountId, investigation.evidence)

        CASE "REWARD_FORFEITURE":
            kRewardsEngine.forfeitRewards(investigation.accountId)

        CASE "RING_CORRECTION":
            kRewardsEngine.correctRings(investigation.accountId, investigation.evidence)

        CASE "TRUST_REDUCTION":
            trustEngine.reduceTrustScore(investigation.accountId, getTrustReductionAmount())

        CASE "PRIVILEGE_SUSPENSION":
            identityEngine.suspendPrivileges(investigation.accountId)

        CASE "TEMPORARY_SUSPENSION":
            identityEngine.suspendAccount(investigation.accountId, sanction.effectTo)

        CASE "PERMANENT_BAN":
            identityEngine.banAccount(investigation.accountId)
    END SWITCH

    // 4. No collateral harm (KR-GOV-030) — only the fraudulent participant is affected
    // Non-fraudulent participants' already-correctly-paid rewards are not reduced

    investigation.status = "SANCTIONED"
    db.update(investigation)

    outbox.publish("admin.sanction.applied", {
        sanctionId: sanction.sanctionId,
        accountId: investigation.accountId,
        severity: sanctionSeverity
    })

    writeAudit("ADMIN", "ApplySanction", investigation.accountId,
               "SANCTION", "SUCCESS",
               {severity: sanctionSeverity, reviewer: reviewerId})

    RETURN sanction
END
```

### 14.9 Appeal Algorithm

```
ALGORITHM: ProcessAppeal
INPUT: appealId, decision, reviewerId
OUTPUT: appeal
BEGIN
    appeal = db.findAppeal(appealId)
    IF appeal == NULL THEN THROW NOT_FOUND
    IF appeal.status != "PENDING" AND appeal.status != "UNDER_REVIEW" THEN
        THROW CONFLICT("Appeal not pending")
    END IF

    // 1. Verify no payment required (KR-GOV-004)
    IF appeal.paymentRequired THEN
        THROW INTERNAL_ERROR("Appeal must never require payment")
    END IF

    // 2. Review
    appeal.status = "UNDER_REVIEW"
    appeal.reviewerId = reviewerId
    db.update(appeal)

    // 3. Decision
    SWITCH decision DO
        CASE "UPHOLD":
            appeal.status = "UPHELD"
            // Original determination stands

        CASE "OVERTURN":
            appeal.status = "OVERTURNED"
            // Reverse the determination
            reverseDetermination(appeal.determinationType, appeal.determinationId)
            // Restore standing, Trust Score, K-Points, rewards (KR-FRD-010)
            IF appeal.determinationType == "SANCTION" THEN
                reverseSanction(appeal.determinationId)
            END IF

        CASE "PARTIALLY_OVERTURN":
            appeal.status = "PARTIALLY_OVERTURNED"
            partiallyReverseDetermination(appeal.determinationType,
                                          appeal.determinationId, decision.scope)
    END SWITCH

    appeal.decidedAt = now()
    db.update(appeal)

    outbox.publish("admin.appeal.decided", {
        appealId: appeal.appealId,
        decision: appeal.status
    })

    writeAudit("ADMIN", "ProcessAppeal", appeal.accountId,
               "APPEAL", "SUCCESS",
               {decision: appeal.status, determinationType: appeal.determinationType})

    RETURN appeal
END
```

### 14.10 Compliance Monitoring Algorithm

```
ALGORITHM: CheckCompliance
INPUT: accountId, complianceType
OUTPUT: complianceResult
BEGIN
    SWITCH complianceType DO
        CASE "KYC":
            account = identityEngine.getAccount(accountId)
            requiredTier = getRequiredKycTier(account.activityLevel)
            IF account.kycTier < requiredTier THEN
                createComplianceFlag(accountId, "KYC", "HIGH",
                    "KYC tier below required for activity level", "RESTRICTED")
                // Compliance takes precedence over reward eligibility (PLC-1 Ch.33.5)
                kRewardsEngine.blockRewardEligibility(accountId, "KYC_NONCOMPLIANT")
                RETURN {compliant: false, flag: "KYC_NONCOMPLIANT"}
            END IF

        CASE "AML":
            amlResult = amlMonitor.checkAccount(accountId)
            IF amlResult.isFlagged THEN
                createComplianceFlag(accountId, "AML", amlResult.severity,
                    amlResult.description, "REPORTED")
                RETURN {compliant: false, flag: "AML_FLAGGED"}
            END IF

        CASE "DATA_PROTECTION":
            // Check data handling compliance
            dpResult = checkDataProtectionCompliance(accountId)
            IF NOT dpResult.compliant THEN
                createComplianceFlag(accountId, "DATA_PROTECTION", dpResult.severity,
                    dpResult.description, "NOTIFIED")
                RETURN {compliant: false, flag: "DATA_PROTECTION"}
            END IF
    END SWITCH

    RETURN {compliant: true}
END
```

### 14.11 State Machines

#### 14.11.1 Dispute State Machine

```
  [NEGOTIATION] --unresolved--> [MEDIATION] --unresolved--> [GOVERNANCE_DECISION]
      --resolved--> [RESOLVED]      --resolved--> [RESOLVED]      --decided--> [RESOLVED]
  [RESOLVED] --appealed--> [ESCALATED] --appeal decided--> [RESOLVED]
```

#### 14.11.2 Moderation Case State Machine

```
  [SCREENING] --auto-approved--> [DECIDED]
      --auto-flagged--> [PENDING_REVIEW] --human approved--> [DECIDED]
      --auto-removed--> [PENDING_REVIEW] --human confirmed--> [DECIDED]
  [DECIDED] --appealed--> [APPEALED] --appeal resolved--> [RESOLVED]
```

#### 14.11.3 Sanction State Machine

```
  [ACTIVE] --appealed & overturned--> [OVERTURNED]
      --expired--> [EXPIRED]
  [ACTIVE] --appealed--> [APPEALED] --upheld--> [ACTIVE]
                                   --overturned--> [OVERTURNED]
```

### 14.12 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | RBAC enforced: Platform Administrator, Governance Body Member, Compliance Officer, Security Officer — least-privilege. Human review required for all fraud determinations. |
| **Validation** | Policy change fields, dispute evidence, sanction severity, compliance flag data, appeal grounds |
| **Rate limiting** | Policy enforcement: 1000/min; moderation: 500/min; dispute creation: 10/min per participant; appeals: 5/min per participant |
| **Audit** | All governance reviews, policy enforcements, moderation decisions, dispute resolutions, sanctions, appeals, compliance flags — immutable, tamper-evident, hash-chained (SRS-ADM-005) |
| **Caching** | Policy definitions (1hr TTL, event-driven invalidation); compliance status (5min TTL) |
| **Concurrency** | Governance review: OCC; sanction: OCC; audit log: append-only |
| **Idempotency** | Sanction: "sanction-{investigationId}"; appeal: UUID; dispute: UUID |
| **Retries** | Wallet refund execution: 3x backoff; event publish: outbox for critical events |
| **Timeout** | Policy enforcement: 5s; moderation: 10s; dispute resolution: 30s; sanction: 10s |
| **Failure handling** | Policy enforcement failure → allow with flag (fail-open for non-critical, fail-closed for compliance); sanction failure → rollback and alert; appeal reversal failure → manual intervention |
| **Observability** | Metrics: policy enforcements/sec, moderation cases, dispute resolution time, sanctions applied, appeal overturn rate; Traces: fraud process, dispute resolution |
| **Security boundary** | mTLS internal; human-in-the-loop for fraud determinations; non-waivable appeal rights (KR-GOV-004); no payment for appeals; compliance takes precedence over rewards (PLC-1 Ch.33.5) |

### 14.13 Governing Requirement Traceability

SRS-ADM-001–008; SAD-1 Ch.17; PLC-1 Ch.18, 27, 32, 33.5; KR-1 KR-GOV-001–004, KR-FRD-002–012, KR-GOV-030, KR-LVL-024; GOV-0; CMP-0.

---

## Chapter 15 — Integration Engine Design

### 15.1 Overview

The Integration Engine is the sole gateway through which the platform interacts with external systems (SAD-1 Ch.18; PLC-1 v2.0 Ch.31.2; SRS-IGR-001–010). No engine exposes APIs or integrations directly to external systems except the Integration Engine. It governs partner APIs, webhooks, SDKs, OAuth/OIDC, API keys, tenant isolation, API versioning, rate limits, and audit logs. Partner transactions flow through the Integration Engine and follow the Partner revenue waterfall (KR-1 Ch.9, Ch.10).

Implements: SRS-IGR-001–010; SAD-1 Ch.18; PLC-1 Ch.31, 25, 32; KR-1 KR-ECO-014, KR-ECO-017.

### 15.2 Component Design

```
┌───────────────────────────────────────────────────────────────┐
│                  INTEGRATION ENGINE                              │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │   API    │ │ Partner  │ │   Auth   │ │  Scope   │         │
│  │ Gateway  │ │Registry  │ │ Service  │ │ Manager  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │  Rate    │ │Webhook   │ │  Event   │ │  SDK     │         │
│  │ Limiter  │ │ Service  │ │Subscription│ │ Manager │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Version  │ │  Tenant  │ │  Audit   │ │ Payment  │         │
│  │ Manager  │ │ Isolation│ │  Log Svc │ │ Adapter  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Integration-DB (PostgreSQL)                           │    │
│  └────────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
```

### 15.3 Data Models

#### 15.3.1 Partner

| Field | Type | Constraints | Description |
|---|---|---|---|
| `partnerId` | UUID | PK | Partner identifier |
| `partnerName` | string | not null | Legal name |
| `partnerType` | enum | not null | `WEBSITE`, `MOBILE_APP`, `COMPANY`, `MARKETPLACE`, `PAYMENT_PROVIDER`, `LEARNING_PROVIDER`, `SERVICE_PROVIDER` |
| `status` | enum | not null | `ONBOARDING`, `ACTIVE`, `SUSPENDED`, `RETIRED` |
| `integrationAgreementRef` | string | not null | Reference to signed agreement |
| `contactEmail` | string | not null | Contact email |
| `approvedBy` | UUID | nullable, FK → Account | Governance approver |
| `onboardedAt` | timestamp | nullable | Onboarding completion |
| `retiredAt` | timestamp | nullable | Retirement time |
| `createdAt` | timestamp | not null | Creation time |

#### 15.3.2 ApiClient

| Field | Type | Constraints | Description |
|---|---|---|---|
| `clientId` | UUID | PK | Client identifier |
| `partnerId` | UUID | FK → Partner, indexed | Owning partner |
| `clientName` | string | not null | Client display name |
| `authMethod` | enum | not null | `OAUTH2_OIDC`, `API_KEY` |
| `clientSecretHash` | string | nullable | Hashed secret (OAuth) |
| `apiKeyHash` | string | nullable | Hashed API key |
| `scopes` | JSON | not null | Authorized scopes |
| `rateLimitPerMinute` | integer | not null | Per-minute rate limit |
| `rateLimitPerHour` | integer | not null | Per-hour rate limit |
| `status` | enum | not null | `ACTIVE`, `REVOKED`, `EXPIRED` |
| `expiresAt` | timestamp | nullable | Expiry time |
| `createdAt` | timestamp | not null | Creation time |
| `revokedAt` | timestamp | nullable | Revocation time |

#### 15.3.3 ApiScope

| Field | Type | Constraints | Description |
|---|---|---|---|
| `scopeId` | UUID | PK | Scope identifier |
| `scopeName` | string | not null, unique | e.g., `commerce:read`, `services:write`, `wallet:deposit` |
| `description` | string | not null | Scope description |
| `engine` | string | not null | Target engine |
| `accessLevel` | enum | not null | `READ`, `WRITE`, `ADMIN` |

#### 15.3.4 WebhookEndpoint

| Field | Type | Constraints | Description |
|---|---|---|---|
| `endpointId` | UUID | PK | Endpoint identifier |
| `partnerId` | UUID | FK → Partner, indexed | Owning partner |
| `url` | string | not null | Endpoint URL |
| `secretHash` | string | not null | Hashed signing secret |
| `events` | JSON | not null | Subscribed event types |
| `status` | enum | not null | `ACTIVE`, `DISABLED` |
| `createdAt` | timestamp | not null | Creation time |

#### 15.3.5 WebhookDelivery

| Field | Type | Constraints | Description |
|---|---|---|---|
| `deliveryId` | UUID | PK | Delivery identifier |
| `endpointId` | UUID | FK → WebhookEndpoint, indexed | Target endpoint |
| `eventType` | string | not null | Event type |
| `payload` | JSON | not null | Webhook payload |
| `signature` | string | not null | HMAC signature |
| `attemptCount` | integer | not null, default 0 | Delivery attempts |
| `status` | enum | not null | `PENDING`, `DELIVERED`, `FAILED`, `EXHAUSTED` |
| `nextRetryAt` | timestamp | nullable | Next retry time |
| `deliveredAt` | timestamp | nullable | Delivery time |
| `createdAt` | timestamp | not null | Creation time |

#### 15.3.6 EventSubscription

| Field | Type | Constraints | Description |
|---|---|---|---|
| `subscriptionId` | UUID | PK | Subscription identifier |
| `partnerId` | UUID | FK → Partner, indexed | Owning partner |
| `eventType` | string | not null, indexed | Subscribed event type |
| `deliveryMethod` | enum | not null | `WEBHOOK`, `POLL` |
| `endpointId` | UUID | nullable, FK → WebhookEndpoint | Webhook endpoint (if webhook) |
| `status` | enum | not null | `ACTIVE`, `PAUSED`, `CANCELLED` |
| `createdAt` | timestamp | not null | Creation time |

#### 15.3.7 ApiVersion

| Field | Type | Constraints | Description |
|---|---|---|---|
| `versionId` | UUID | PK | Version identifier |
| `version` | string | not null, unique | e.g., `v1`, `v2` |
| `status` | enum | not null | `ACTIVE`, `DEPRECATED`, `RETIRED` |
| `deprecatedAt` | timestamp | nullable | Deprecation time |
| `retiredAt` | timestamp | nullable | Retirement time |
| `deprecationNoticeDate` | timestamp | nullable | When deprecation was announced |
| `createdAt` | timestamp | not null | Creation time |

#### 15.3.8 ApiRequestLog

| Field | Type | Constraints | Description |
|---|---|---|---|
| `logId` | UUID | PK | Log entry ID |
| `partnerId` | UUID | not null, indexed | Partner identity |
| `clientId` | UUID | not null | API client |
| `method` | string | not null | HTTP method |
| `path` | string | not null | Request path |
| `version` | string | not null | API version |
| `statusCode` | integer | not null | Response status |
| `responseTimeMs` | integer | not null | Response time |
| `rateLimited` | boolean | not null, default false | Whether rate-limited |
| `timestamp` | timestamp | not null, indexed | Request time |

### 15.4 Partner Onboarding Algorithm

```
ALGORITHM: OnboardPartner
INPUT: partnerName, partnerType, contactEmail, integrationAgreementRef,
       requestedScopes, requestedRateLimits
OUTPUT: partner
BEGIN
    // 1. Governance approval required (SRS-IGR-010)
    IF NOT administrationEngine.isGovernanceApproved("PARTNER_ONBOARDING",
            {partnerName: partnerName, partnerType: partnerType}) THEN
        THROW FORBIDDEN("Partner onboarding requires governance approval")
    END IF

    // 2. Compliance check (KYC, AML, data protection) (SRS-IGR-010)
    complianceResult = administrationEngine.checkPartnerCompliance({
        partnerName: partnerName,
        partnerType: partnerType,
        contactEmail: contactEmail
    })
    IF NOT complianceResult.compliant THEN
        THROW FORBIDDEN("Partner compliance check failed: " + complianceResult.reason)
    END IF

    // 3. Create partner
    partner = {
        partnerId: generateUUID(),
        partnerName: partnerName,
        partnerType: partnerType,
        status: "ONBOARDING",
        integrationAgreementRef: integrationAgreementRef,
        contactEmail: contactEmail,
        createdAt: now()
    }
    db.insert(partner)

    // 4. Create API client
    clientId = generateUUID()
    apiKey = generateSecureApiKey()
    apiKeyHash = hash(apiKey)

    apiClient = {
        clientId: clientId,
        partnerId: partner.partnerId,
        clientName: partnerName + " - API Client",
        authMethod: "API_KEY",
        apiKeyHash: apiKeyHash,
        scopes: requestedScopes,
        rateLimitPerMinute: requestedRateLimits.perMinute,
        rateLimitPerHour: requestedRateLimits.perHour,
        status: "ACTIVE",
        createdAt: now()
    }
    db.insert(apiClient)

    // 5. Activate partner
    partner.status = "ACTIVE"
    partner.onboardedAt = now()
    partner.approvedBy = complianceResult.approverId
    db.update(partner)

    writeAudit("INTEGRATION", "OnboardPartner", partner.partnerId,
               "ONBOARD", "SUCCESS",
               {partnerType: partnerType, clientId: clientId})

    // Return partner with API key (shown once)
    RETURN {partner: partner, apiKey: apiKey}
END
```

### 15.5 API Gateway Request Processing Algorithm

```
ALGORITHM: ProcessApiRequest
INPUT: request {method, path, version, headers, body, apiKey}
OUTPUT: response
BEGIN
    // 1. Authenticate (SRS-IGR-002)
    apiKey = extractApiKey(request.headers)
    apiClient = db.findApiClientByHash(hash(apiKey))
    IF apiClient == NULL OR apiClient.status != "ACTIVE" THEN
        RETURN {statusCode: 401, error: "UNAUTHORIZED"}
    END IF

    // 2. Check API version (SRS-IGR-007)
    version = request.version
    apiVersion = db.findApiVersion(version)
    IF apiVersion == NULL THEN
        RETURN {statusCode: 404, error: "VERSION_NOT_FOUND"}
    END IF
    IF apiVersion.status == "RETIRED" THEN
        RETURN {statusCode: 410, error: "VERSION_RETIRED"}
    END IF

    // 3. Rate limit check (SRS-IGR-007)
    rateLimitResult = rateLimiter.check({
        clientId: apiClient.clientId,
        perMinute: apiClient.rateLimitPerMinute,
        perHour: apiClient.rateLimitPerHour
    })
    IF rateLimitResult.exceeded THEN
        logApiRequest(apiClient, request, 429, 0, true)
        RETURN {statusCode: 429, error: "RATE_LIMITED",
                retryAfter: rateLimitResult.retryAfter}
    END IF

    // 4. Authorization / scope check (SRS-IGR-002)
    requiredScope = determineRequiredScope(request.method, request.path)
    IF NOT hasScope(apiClient.scopes, requiredScope) THEN
        logApiRequest(apiClient, request, 403, 0, false)
        RETURN {statusCode: 403, error: "INSUFFICIENT_SCOPE"}
    END IF

    // 5. Tenant isolation enforcement (SRS-IGR-006)
    tenantContext = {partnerId: apiClient.partnerId}
    // All downstream queries are scoped to this tenant

    // 6. Route to internal engine
    engineName = routeToEngine(request.path)
    internalRequest = {
        method: request.method,
        path: request.path,
        body: request.body,
        tenantContext: tenantContext,
        apiClient: apiClient,
        version: version
    }

    startTime = now()
    response = callEngine(engineName, internalRequest)
    responseTime = now() - startTime

    // 7. Log request (SRS-IGR-009)
    logApiRequest(apiClient, request, response.statusCode, responseTime, false)

    RETURN response
END
```

### 15.6 Webhook Delivery Algorithm

```
ALGORITHM: DeliverWebhook
INPUT: eventType, payload
BEGIN
    // 1. Find all active subscriptions for this event type
    subscriptions = db.findActiveSubscriptions(eventType)

    FOR EACH subscription IN subscriptions DO
        IF subscription.deliveryMethod != "WEBHOOK" THEN CONTINUE
        endpoint = db.findWebhookEndpoint(subscription.endpointId)
        IF endpoint == NULL OR endpoint.status != "ACTIVE" THEN CONTINUE

        // 2. Create delivery record
        deliveryId = generateUUID()
        payloadJson = serialize(payload)
        signature = hmacSha256(payloadJson, endpoint.secretHash)

        delivery = {
            deliveryId: deliveryId,
            endpointId: endpoint.endpointId,
            eventType: eventType,
            payload: payload,
            signature: signature,
            attemptCount: 0,
            status: "PENDING",
            createdAt: now()
        }
        db.insert(delivery)

        // 3. Deliver (async, with retry)
        deliverWithRetry(delivery, endpoint)
    END FOR
END
```

```
ALGORITHM: DeliverWithRetry
INPUT: delivery, endpoint
BEGIN
    maxAttempts = 5  // GOVERNANCE PARAMETER
    backoff = 1  // seconds, exponential

    WHILE delivery.attemptCount < maxAttempts DO
        delivery.attemptCount++
        delivery.nextRetryAt = now() + backoff
        db.update(delivery)

        // Send HTTP POST with signature header
        response = httpClient.post({
            url: endpoint.url,
            headers: {
                "Content-Type": "application/json",
                "X-KNET-Signature": delivery.signature,
                "X-KNET-Event": delivery.eventType,
                "X-KNET-Delivery": delivery.deliveryId
            },
            body: serialize(delivery.payload),
            timeout: 10s
        })

        IF response.statusCode >= 200 AND response.statusCode < 300 THEN
            delivery.status = "DELIVERED"
            delivery.deliveredAt = now()
            db.update(delivery)
            RETURN
        END IF

        // Exponential backoff with jitter
        backoff = min(backoff * 2, 3600) + random(0, 1)
    END WHILE

    // Exhausted retries
    delivery.status = "EXHAUSTED"
    db.update(delivery)

    writeAudit("INTEGRATION", "DeliverWebhook", delivery.deliveryId,
               "WEBHOOK", "FAILURE",
               {endpoint: endpoint.endpointId, attempts: delivery.attemptCount})

    // Notify partner of delivery failure
    eventBus.publish("integration.webhook.exhausted", {
        deliveryId: delivery.deliveryId,
        partnerId: endpoint.partnerId
    })
END
```

### 15.7 Partner Transaction Processing Algorithm

```
ALGORITHM: ProcessPartnerTransaction
INPUT: partnerId, transactionData, idempotencyKey
OUTPUT: settlement
BEGIN
    // 1. Idempotency check
    IF db.settlementExistsByIdempotencyKey(idempotencyKey) THEN
        RETURN db.findSettlementByIdempotencyKey(idempotencyKey)
    END IF

    // 2. Verify partner is active
    partner = db.findPartner(partnerId)
    IF partner == NULL OR partner.status != "ACTIVE" THEN
        THROW FORBIDDEN("Partner not active")
    END IF

    // 3. Calculate gross revenue
    grossRevenue = transactionData.amount

    // 4. Process through Wallet Engine with Partner revenue waterfall
    settlement = walletEngine.executeSettlement({
        sourceEngine: "PARTNER",
        sourceReference: transactionData.reference,
        grossRevenue: grossRevenue,
        deductions: transactionData.deductions,
        counterpartyId: partnerId,
        idempotencyKey: idempotencyKey
    })

    // 5. Publish partner transaction event for K-Points
    outbox.publish("integration.partner.transaction.completed", {
        partnerId: partnerId,
        settlementId: settlement.settlementId,
        qev: settlement.qev
    })

    writeAudit("INTEGRATION", "ProcessPartnerTransaction", partnerId,
               "PARTNER_TXN", "SUCCESS",
               {grossRevenue: grossRevenue, settlementId: settlement.settlementId})

    RETURN settlement
END
```

### 15.8 External Payment Adapter Algorithm

```
ALGORITHM: ProcessExternalPayment
INPUT: paymentRequest {accountId, amount, paymentMethodRef, reference}
OUTPUT: paymentResult
BEGIN
    // 1. Route to appropriate payment provider via Integration Engine
    provider = determinePaymentProvider(paymentMethodRef)

    // 2. Call provider API
    response = callPaymentProvider(provider, {
        amount: paymentRequest.amount,
        paymentMethodRef: paymentRequest.paymentMethodRef,
        reference: paymentRequest.reference
    })

    // 3. Map provider response to standard result
    paymentResult = {
        transactionId: response.providerTransactionId,
        status: mapProviderStatus(response.status),
        amount: paymentRequest.amount,
        providerReference: response.providerTransactionId,
        processedAt: now()
    }

    writeAudit("INTEGRATION", "ProcessExternalPayment", paymentRequest.accountId,
               "PAYMENT", paymentResult.status, {amount: paymentRequest.amount})

    RETURN paymentResult
END
```

### 15.9 API Version Deprecation Algorithm

```
ALGORITHM: DeprecateApiVersion
INPUT: version, deprecationDate, retirementDate
OUTPUT: apiVersion
BEGIN
    apiVersion = db.findApiVersion(version)
    IF apiVersion == NULL THEN THROW NOT_FOUND
    IF apiVersion.status != "ACTIVE" THEN THROW CONFLICT("Not active")

    // 1. Mark deprecated
    apiVersion.status = "DEPRECATED"
    apiVersion.deprecatedAt = now()
    apiVersion.deprecationNoticeDate = deprecationDate
    apiVersion.retiredAt = retirementDate
    db.update(apiVersion)

    // 2. Notify all partners using this version
    affectedPartners = db.findPartnersUsingVersion(version)
    FOR EACH partner IN affectedPartners DO
        sendNotification(partner.contactEmail, "API_DEPRECATION",
            "API version " + version + " is deprecated",
            "Version " + version + " will be retired on " + retirementDate +
            ". Please migrate to the latest version.",
            "INTEGRATION", version, "HIGH")
    END FOR

    // 3. Add deprecation header to all responses for this version
    // (handled in ProcessApiRequest by checking version status)

    writeAudit("INTEGRATION", "DeprecateApiVersion", version,
               "DEPRECATE", "SUCCESS",
               {retirementDate: retirementDate, affectedPartners: affectedPartners.size()})

    RETURN apiVersion
END
```

### 15.10 Tenant Isolation Enforcement

```
ALGORITHM: EnforceTenantIsolation
INPUT: partnerId, requestedResource
OUTPUT: {allowed: boolean}
BEGIN
    // 1. Check resource belongs to this partner's tenant
    resourceOwner = getResourceOwner(requestedResource)

    IF resourceOwner == partnerId THEN
        RETURN {allowed: true}
    END IF

    // 2. Check if resource is platform-internal (partners cannot access)
    IF isPlatformInternal(requestedResource) THEN
        logAccessAttempt(partnerId, requestedResource, "DENIED_PLATFORM_INTERNAL")
        RETURN {allowed: false}
    END IF

    // 3. Cross-tenant access denied
    logAccessAttempt(partnerId, requestedResource, "DENIED_CROSS_TENANT")
    writeAudit("INTEGRATION", "EnforceTenantIsolation", partnerId,
               "TENANT_CHECK", "BLOCKED",
               {resource: requestedResource, resourceOwner: resourceOwner})

    RETURN {allowed: false}
END
```

### 15.11 State Machines

#### 15.11.1 Partner Lifecycle State Machine

```
  [ONBOARDING] --governance approved & compliance checked--> [ACTIVE]
  [ACTIVE] --suspended (policy violation)--> [SUSPENDED]
  [SUSPENDED] --reinstated--> [ACTIVE]
  [SUSPENDED] --retired--> [RETIRED]
  [ACTIVE] --retired--> [RETIRED]
```

#### 15.11.2 API Client State Machine

```
  [ACTIVE] --revoked--> [REVOKED]
  [ACTIVE] --expired--> [EXPIRED]
```

#### 15.11.3 Webhook Delivery State Machine

```
  [PENDING] --delivered (2xx)--> [DELIVERED]
      --failed (non-2xx)--> [PENDING] (retry with backoff)
      --max retries exceeded--> [EXHAUSTED]
```

#### 15.11.4 API Version State Machine

```
  [ACTIVE] --deprecated--> [DEPRECATED] --retired--> [RETIRED]
```

### 15.12 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Partner API access authenticated via OAuth 2.0/OIDC or API keys; scopes enforce least-privilege (SRS-IGR-002). No engine exposes APIs directly to external systems. |
| **Validation** | API request schemas, webhook endpoint URLs, scope definitions, partner registration fields, API version format |
| **Rate limiting** | Per partner and per API (SRS-IGR-007); configurable per client; 429 response with Retry-After header |
| **Audit** | All API requests, webhook deliveries, authentication events, rate-limit events, partner transactions, partner lifecycle events — immutable, tamper-evident (SRS-IGR-009) |
| **Caching** | API client config (5min TTL); partner config (5min TTL); API version status (1hr TTL); NOT cached: request/response bodies |
| **Concurrency** | API request: stateless (no conflict); webhook delivery: OCC on delivery record; partner onboarding: PCC (lock partner) |
| **Idempotency** | Partner transactions: idempotencyKey; webhook deliveries: deliveryId; API requests: client-provided idempotency key for POST/PUT |
| **Retries** | Webhook delivery: 5x exponential backoff with jitter (SRS-IGR-008); external payment: 3x backoff; event publish: outbox |
| **Timeout** | API request: 30s; webhook delivery: 10s per attempt; external payment: 30s; partner transaction: 15s |
| **Failure handling** | Webhook delivery failure → retry with backoff then exhaust; external payment failure → return failure to caller; API version retired → 410 Gone |
| **Observability** | Metrics: API requests/sec, response time p50/p95/p99, rate-limit hits, webhook delivery rate, webhook failure rate, partner transaction volume; Traces: API request, webhook delivery, partner transaction |
| **Security boundary** | mTLS internal; API gateway as sole external boundary; HMAC webhook signatures; encrypted API key storage; tenant isolation at data/API/compute layers (SRS-IGR-006); OAuth/OIDC for partner auth |

### 15.13 Sequence Diagram: Partner Transaction with Partner Revenue Waterfall

```
Partner System    Integration Engine    Wallet Engine    K-Rewards (async)
      |                   |                   |                |
      |--POST /partner/txn-->|               |                |
      |--(API key auth)   |                   |                |
      |--(rate limit check)|                  |                |
      |--(scope check)    |                   |                |
      |--(tenant isolation)|                  |                |
      |                   |--execute settlement->|              |
      |                   |                   |--calc QEV       |
      |                   |                   |--calc AP=90%, R=10%
      |                   |                   |--apply Partner waterfall:
      |                   |                   |   platform 40%, partner 35%,
      |                   |                   |   rewards 10%, leadership 3%,
      |                   |                   |   operations 2%
      |                   |                   |--validate sum=90%
      |                   |                   |--credit partner wallet (35%)
      |                   |                   |--hold reserve (10%)
      |                   |                   |--fund reward pool (10%+3%)
      |                   |                   |--credit platform (40%)
      |                   |                   |--credit operations (2%)
      |                   |<--settlement------|              |
      |<--200 OK----------|                   |        |--accrue K-Points (async)
      |                   |                   |                |
```

### 15.14 Governing Requirement Traceability

SRS-IGR-001–010; SAD-1 Ch.18; PLC-1 Ch.31, 25, 32; KR-1 KR-ECO-014, KR-ECO-017.

---

## Chapter 16 — Learning Engine Design

### 16.1 Overview

The Learning Engine owns the e-learning marketplace domain — instructors, courses, programmes, learning paths, modules, lessons, content (text and external media), assessments, quizzes, assignments, progress, certificates, instructor/learner workflows, discovery, reviews, settlement, and fraud detection (SAD-1 Ch.19; PLC-1 v2.0 Ch.30; SRS-LRN-001–017). Learning is Engine #11, incorporated into the single master SDD; it is not a separate design (LEARN-AD-1; ADR-009).

The Learning Engine consumes shared platform foundations (Identity, Trust, K-Rewards, Wallet, Communication, Intelligence, Administration, Integration) and does not maintain separate identity, trust, rewards, wallet, or security systems (PLC-1 v2.0 Ch.30.9).

Implements: SRS-LRN-001–017; SAD-1 Ch.19; PLC-1 Ch.30; KR-1 Ch.50, KR-PNT-004, KR-SRC-004, KR-FRD-002; LEARN-AD-1.

**External media strategy (ADR-005):** Learning video is externally hosted (YouTube as the initial provider). The Learning Engine stores only media references and metadata, not video binaries. The Integration Engine handles external media embedding with authorization enforcement (SAD-1 ADR-005; LEARN-AD-1 §1).

### 16.2 Component Design

```
┌───────────────────────────────────────────────────────────────┐
│                    LEARNING ENGINE                               │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │Instructor│ │ Course    │ │Programme │ │ Learning │         │
│  │ Service  │ │ Service  │ │/Path Svc │ │ Content  │         │
│  │          │ │          │ │          │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Module   │ │ Assess-  │ │Assign-   │ │Enrollment│         │
│  │ Service  │ │ment Svc  │ │ment Svc  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Progress │ │Certificate│ │ Review   │ │Settlement│         │
│  │ Service  │ │ Service  │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐                                   │
│  │External  │ │  Fraud   │                                   │
│  │Media Svc │ │Detection │                                   │
│  └──────────┘ └──────────┘                                   │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Learning-DB (PostgreSQL)                               │    │
│  └────────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
```

### 16.3 Data Models

#### 16.3.1 Instructor

| Field | Type | Constraints | Description |
|---|---|---|---|
| `instructorId` | UUID | PK | Instructor identifier |
| `accountId` | UUID | FK → Account, unique | Instructor's Identity account |
| `displayName` | string | not null | Professional display name |
| `headline` | string | nullable | Professional headline |
| `bio` | text | nullable | Professional bio |
| `expertise` | JSON | nullable | Expertise areas |
| `status` | enum | not null, default `PENDING` | `PENDING`, `ACTIVE`, `SUSPENDED`, `REMOVED` |
| `trustScoreAtApproval` | decimal(5,2) | nullable | Trust Score at approval |
| `averageRating` | decimal(3,2) | nullable | Average course rating (denormalized) |
| `totalLearners` | integer | not null, default 0 | Total enrolled learners (denormalized) |
| `createdAt` | timestamp | not null | Creation time |
| `approvedAt` | timestamp | nullable | Approval time |
| `version` | integer | not null, default 1 | OCC version |

#### 16.3.2 Course

| Field | Type | Constraints | Description |
|---|---|---|---|
| `courseId` | UUID | PK | Course identifier |
| `instructorId` | UUID | FK → Instructor, indexed | Owning instructor |
| `title` | string | not null | Course title |
| `description` | text | not null | Course description |
| `categoryId` | UUID | FK → Category, indexed | Course category |
| `level` | enum | not null | `BEGINNER`, `INTERMEDIATE`, `ADVANCED` |
| `price` | decimal(10,2) | not null | Course price (0 for free) |
| `currency` | string | not null, default `USD` | Currency |
| `outcomes` | JSON | not null | Learning outcomes |
| `status` | enum | not null, default `DRAFT` | `DRAFT`, `PUBLISHED`, `UNPUBLISHED`, `ARCHIVED` |
| `averageRating` | decimal(3,2) | nullable | Average rating (denormalized) |
| `enrollmentCount` | integer | not null, default 0 | Enrollment count (denormalized) |
| `createdAt` | timestamp | not null | Creation time |
| `publishedAt` | timestamp | nullable | Publication time |
| `version` | integer | not null, default 1 | OCC version |

#### 16.3.3 Programme

| Field | Type | Constraints | Description |
|---|---|---|---|
| `programmeId` | UUID | PK | Programme identifier |
| `creatorId` | UUID | FK → Account | Creator (instructor or governance) |
| `title` | string | not null | Programme title |
| `description` | text | nullable | Programme description |
| `courseIds` | JSON | not null | Ordered list of course IDs |
| `status` | enum | not null | `DRAFT`, `PUBLISHED`, `ARCHIVED` |
| `createdAt` | timestamp | not null | Creation time |

#### 16.3.4 LearningPath

| Field | Type | Constraints | Description |
|---|---|---|---|
| `pathId` | UUID | PK | Learning path identifier |
| `creatorId` | UUID | FK → Account | Creator |
| `title` | string | not null | Path title |
| `description` | text | nullable | Path description |
| `status` | enum | not null | `DRAFT`, `PUBLISHED`, `ARCHIVED` |
| `createdAt` | timestamp | not null | Creation time |

#### 16.3.5 LearningPathStep

| Field | Type | Constraints | Description |
|---|---|---|---|
| `stepId` | UUID | PK | Step identifier |
| `pathId` | UUID | FK → LearningPath, indexed | Parent path |
| `courseId` | UUID | FK → Course | Course in this step |
| `sequence` | integer | not null | Step order |
| `isRequired` | boolean | not null, default true | Whether required for path completion |
| `prerequisiteStepIds` | JSON | nullable | Prerequisite steps |

#### 16.3.6 Module

| Field | Type | Constraints | Description |
|---|---|---|---|
| `moduleId` | UUID | PK | Module identifier |
| `courseId` | UUID | FK → Course, indexed | Parent course |
| `title` | string | not null | Module title |
| `description` | text | nullable | Module description |
| `sequence` | integer | not null | Module order within course |
| `version` | integer | not null, default 1 | OCC version |

#### 16.3.7 Lesson

| Field | Type | Constraints | Description |
|---|---|---|---|
| `lessonId` | UUID | PK | Lesson identifier |
| `moduleId` | UUID | FK → Module, indexed | Parent module |
| `title` | string | not null | Lesson title |
| `sequence` | integer | not null | Lesson order within module |
| `textContent` | text | nullable | Text content (stored in platform DB) |
| `mediaReference` | JSON | nullable | External media reference (YouTube video ID, metadata) |
| `mediaType` | enum | nullable | `TEXT`, `VIDEO_EXTERNAL`, `TEXT_AND_VIDEO` |
| `durationMinutes` | integer | nullable | Estimated duration |
| `version` | integer | not null, default 1 | OCC version |

#### 16.3.8 Assessment

| Field | Type | Constraints | Description |
|---|---|---|---|
| `assessmentId` | UUID | PK | Assessment identifier |
| `lessonId` | UUID | FK → Lesson, nullable | Associated lesson (if lesson-level) |
| `courseId` | UUID | FK → Course, indexed | Parent course |
| `title` | string | not null | Assessment title |
| `assessmentType` | enum | not null | `QUIZ`, `FINAL_EXAM`, `PRACTICE` |
| `passThreshold` | decimal(5,2) | not null | Pass threshold % (GOVERNANCE PARAMETER) |
| `maxAttempts` | integer | not null | Maximum attempts allowed |
| `timeLimitMinutes` | integer | nullable | Time limit |
| `shuffleQuestions` | boolean | not null, default true | Whether to shuffle |
| `version` | integer | not null, default 1 | OCC version |

#### 16.3.9 Question

| Field | Type | Constraints | Description |
|---|---|---|---|
| `questionId` | UUID | PK | Question identifier |
| `assessmentId` | UUID | FK → Assessment, indexed | Parent assessment |
| `questionType` | enum | not null | `MULTIPLE_CHOICE`, `TRUE_FALSE`, `SHORT_ANSWER` |
| `questionText` | text | not null | Question text |
| `options` | JSON | nullable | Answer options (for MC/TF) |
| `correctAnswer` | string | nullable | Correct answer (for auto-scoring) |
| `points` | integer | not null, default 1 | Points value |
| `sequence` | integer | not null | Question order |

#### 16.3.10 Assignment

| Field | Type | Constraints | Description |
|---|---|---|---|
| `assignmentId` | UUID | PK | Assignment identifier |
| `lessonId` | UUID | FK → Lesson, nullable | Associated lesson |
| `courseId` | UUID | FK → Course, indexed | Parent course |
| `title` | string | not null | Assignment title |
| `instructions` | text | not null | Assignment instructions |
| `dueDate` | timestamp | nullable | Due date |
| `gradingCriteria` | text | nullable | Grading criteria |
| `maxScore` | integer | not null, default 100 | Maximum score |
| `version` | integer | not null, default 1 | OCC version |

#### 16.3.11 Enrollment

| Field | Type | Constraints | Description |
|---|---|---|---|
| `enrollmentId` | UUID | PK | Enrollment identifier |
| `learnerId` | UUID | FK → Account, indexed | Learner |
| `courseId` | UUID | FK → Course, indexed | Course |
| `pathId` | UUID | nullable, FK → LearningPath | Path (if enrolled via path) |
| `paymentRef` | string | nullable | Payment reference (if paid) |
| `status` | enum | not null, default `ACTIVE` | `ACTIVE`, `COMPLETED`, `CANCELLED` |
| `enrolledAt` | timestamp | not null | Enrollment time |
| `completedAt` | timestamp | nullable | Completion time |

#### 16.3.12 LessonProgress

| Field | Type | Constraints | Description |
|---|---|---|---|
| `progressId` | UUID | PK | Progress identifier |
| `enrollmentId` | UUID | FK → Enrollment, indexed | Enrollment |
| `lessonId` | UUID | FK → Lesson, indexed | Lesson |
| `status` | enum | not null, default `NOT_STARTED` | `NOT_STARTED`, `IN_PROGRESS`, `COMPLETED` |
| `timeSpentMinutes` | integer | not null, default 0 | Time spent |
| `lastAccessedAt` | timestamp | nullable | Last access time |
| `completedAt` | timestamp | nullable | Completion time |
| PK | (`enrollmentId`, `lessonId`) | Composite unique | One progress record per lesson per enrollment |

#### 16.3.13 AssessmentAttempt

| Field | Type | Constraints | Description |
|---|---|---|---|
| `attemptId` | UUID | PK | Attempt identifier |
| `assessmentId` | UUID | FK → Assessment, indexed | Assessment |
| `enrollmentId` | UUID | FK → Enrollment | Enrollment |
| `learnerId` | UUID | FK → Account | Learner |
| `answers` | JSON | not null | Submitted answers |
| `score` | decimal(5,2) | nullable | Score (%) |
| `passed` | boolean | nullable | Whether passed |
| `attemptNumber` | integer | not null | Attempt sequence |
| `startedAt` | timestamp | not null | Start time |
| `submittedAt` | timestamp | nullable | Submission time |

#### 16.3.14 AssignmentSubmission

| Field | Type | Constraints | Description |
|---|---|---|---|
| `submissionId` | UUID | PK | Submission identifier |
| `assignmentId` | UUID | FK → Assignment, indexed | Assignment |
| `enrollmentId` | UUID | FK → Enrollment | Enrollment |
| `learnerId` | UUID | FK → Account | Learner |
| `submissionText` | text | nullable | Text submission |
| `attachmentUrls` | JSON | nullable | File attachments |
| `status` | enum | not null, default `SUBMITTED` | `SUBMITTED`, `UNDER_REVIEW`, `GRADED` |
| `score` | integer | nullable | Score |
| `feedback` | text | nullable | Instructor feedback |
| `submittedAt` | timestamp | not null | Submission time |
| `gradedAt` | timestamp | nullable | Grading time |
| `gradedBy` | UUID | nullable, FK → Account | Grading instructor |

#### 16.3.15 Certificate

| Field | Type | Constraints | Description |
|---|---|---|---|
| `certificateId` | UUID | PK | Certificate identifier |
| `learnerId` | UUID | FK → Account, indexed | Learner |
| `courseId` | UUID | nullable, FK → Course | Course (if course certificate) |
| `pathId` | UUID | nullable, FK → LearningPath | Path (if path certificate) |
| `instructorId` | UUID | nullable, FK → Instructor | Issuing instructor |
| `certificateType` | enum | not null | `COURSE_COMPLETION`, `PATH_COMPLETION` |
| `verificationCode` | string | not null, unique | Verification code |
| `metadata` | JSON | not null | Verifiable metadata (course, instructor, learner, date) |
| `issuedAt` | timestamp | not null | Issue time |

#### 16.3.16 CourseReview

| Field | Type | Constraints | Description |
|---|---|---|---|
| `reviewId` | UUID | PK | Review identifier |
| `courseId` | UUID | FK → Course, indexed | Course |
| `learnerId` | UUID | FK → Account | Reviewer |
| `instructorId` | UUID | FK → Instructor | Instructor |
| `rating` | integer | not null, CHECK(1–5) | Star rating |
| `comment` | text | nullable | Review text |
| `status` | enum | not null, default `PUBLISHED` | `PENDING_MODERATION`, `PUBLISHED`, `HIDDEN` |
| `createdAt` | timestamp | not null | Creation time |

### 16.4 Instructor Onboarding Algorithm

```
ALGORITHM: OnboardInstructor
INPUT: accountId, displayName, headline, bio, expertise
OUTPUT: instructor
BEGIN
    // 1. Verify account
    account = identityEngine.getAccount(accountId)
    IF account == NULL OR account.status != "ACTIVE" THEN
        THROW VALIDATION_ERROR("Account not active")
    END IF

    // 2. Check KYC tier (SRS-LRN-001)
    IF account.kycTier < "TIER_2" THEN
        THROW FORBIDDEN("KYC tier too low for instructor")
    END IF

    // 3. Check trust gate (SRS-LRN-001, KR-TRU-007)
    trustScore = trustEngine.getTrustScore(accountId)
    IF trustScore < 40 THEN  // GOVERNANCE PARAMETER
        THROW FORBIDDEN("Trust score below instructor threshold (40)")
    END IF

    // 4. Check for existing instructor
    IF db.instructorExists(accountId) THEN
        THROW CONFLICT("Account already has an instructor profile")
    END IF

    // 5. Create instructor
    instructor = {
        instructorId: generateUUID(),
        accountId: accountId,
        displayName: displayName,
        headline: headline,
        bio: bio,
        expertise: expertise,
        status: "ACTIVE",
        trustScoreAtApproval: trustScore,
        createdAt: now(),
        approvedAt: now(),
        version: 1
    }
    db.insert(instructor)

    writeAudit("LEARNING", "OnboardInstructor", instructor.instructorId,
               "CREATE", "SUCCESS", {trustScore: trustScore})

    outbox.publish("learning.instructor.activated", {
        instructorId: instructor.instructorId
    })

    RETURN instructor
END
```

### 16.5 Course Creation Algorithm

```
ALGORITHM: CreateCourse
INPUT: instructorId, courseData
OUTPUT: course
BEGIN
    // 1. Verify instructor is active
    instructor = db.findInstructor(instructorId)
    IF instructor == NULL OR instructor.status != "ACTIVE" THEN
        THROW FORBIDDEN("Instructor not active")
    END IF

    // 2. Validate course data (SRS-LRN-003)
    validateCourseData(courseData)

    // 3. Create course
    course = {
        courseId: generateUUID(),
        instructorId: instructorId,
        title: courseData.title,
        description: courseData.description,
        categoryId: courseData.categoryId,
        level: courseData.level,
        price: courseData.price,
        currency: courseData.currency,
        outcomes: courseData.outcomes,
        status: "DRAFT",
        createdAt: now(),
        version: 1
    }
    db.insert(course)

    writeAudit("LEARNING", "CreateCourse", course.courseId,
               "CREATE", "SUCCESS", {instructorId: instructorId})

    RETURN course
END
```

### 16.6 External Media Reference Algorithm

```
ALGORITHM: AddExternalMedia
INPUT: lessonId, instructorId, mediaProvider, mediaId, metadata
OUTPUT: lesson
BEGIN
    // 1. Verify instructor owns the lesson's course
    lesson = db.findLesson(lessonId)
    module = db.findModule(lesson.moduleId)
    course = db.findCourse(module.courseId)
    IF course.instructorId != instructorId THEN
        THROW FORBIDDEN("Not course owner")
    END IF

    // 2. Validate media provider (ADR-005: YouTube initial)
    IF NOT isSupportedMediaProvider(mediaProvider) THEN
        THROW VALIDATION_ERROR("Unsupported media provider")
    END IF

    // 3. Validate media reference through Integration Engine
    mediaValidation = integrationEngine.validateExternalMedia({
        provider: mediaProvider,
        mediaId: mediaId
    })
    IF NOT mediaValidation.valid THEN
        THROW VALIDATION_ERROR("External media invalid: " + mediaValidation.reason)
    END IF

    // 4. Store only the reference and metadata (NOT the binary) (ADR-005)
    lesson.mediaReference = {
        provider: mediaProvider,
        mediaId: mediaId,
        url: mediaValidation.embedUrl,
        title: metadata.title,
        duration: metadata.duration,
        thumbnailUrl: metadata.thumbnailUrl
    }
    lesson.mediaType = "VIDEO_EXTERNAL"
    lesson.version++
    db.update(lesson)

    writeAudit("LEARNING", "AddExternalMedia", lessonId,
               "UPDATE", "SUCCESS",
               {provider: mediaProvider, mediaId: mediaId})

    RETURN lesson
END
```

### 16.7 Enrollment Algorithm

```
ALGORITHM: EnrollInCourse
INPUT: learnerId, courseId, idempotencyKey
OUTPUT: enrollment
BEGIN
    // 1. Idempotency check
    existing = db.findEnrollment(learnerId, courseId)
    IF existing != NULL THEN RETURN existing

    // 2. Verify course is published
    course = db.findCourse(courseId)
    IF course == NULL OR course.status != "PUBLISHED" THEN
        THROW CONFLICT("Course not available")
    END IF

    // 3. Check if already enrolled
    IF db.enrollmentExists(learnerId, courseId) THEN
        THROW CONFLICT("Already enrolled")
    END IF

    // 4. Process payment if paid (SRS-LRN-009)
    IF course.price > 0 THEN
        paymentResult = walletEngine.processPayment({
            accountId: learnerId,
            amount: course.price,
            paymentContext: "LEARNING_ENROLLMENT:" + courseId,
            idempotencyKey: idempotencyKey
        })
    END IF

    // 5. Create enrollment
    enrollment = {
        enrollmentId: generateUUID(),
        learnerId: learnerId,
        courseId: courseId,
        paymentRef: course.price > 0 ? paymentResult.transactionId : NULL,
        status: "ACTIVE",
        enrolledAt: now()
    }
    db.insert(enrollment)

    // 6. Initialize lesson progress for all lessons
    lessons = db.findAllLessonsInCourse(courseId)
    FOR EACH lesson IN lessons DO
        db.insert({
            progressId: generateUUID(),
            enrollmentId: enrollment.enrollmentId,
            lessonId: lesson.lessonId,
            status: "NOT_STARTED",
            timeSpentMinutes: 0
        })
    END FOR

    // 7. Update enrollment count
    course.enrollmentCount++
    db.update(course)

    // 8. Process settlement through Wallet Engine (Learning waterfall)
    IF course.price > 0 THEN
        walletEngine.executeSettlement({
            sourceEngine: "LEARNING",
            sourceReference: enrollment.enrollmentId,
            grossRevenue: course.price,
            deductions: 0,
            counterpartyId: course.instructorId,
            idempotencyKey: "learning-settle-" + enrollment.enrollmentId
        })
    END IF

    outbox.publish("learning.enrollment.completed", {
        enrollmentId: enrollment.enrollmentId,
        learnerId: learnerId,
        courseId: courseId
    })

    writeAudit("LEARNING", "EnrollInCourse", enrollment.enrollmentId,
               "ENROLL", "SUCCESS", {courseId: courseId})

    RETURN enrollment
END
```

### 16.8 Progress Tracking Algorithm

```
ALGORITHM: UpdateLessonProgress
INPUT: enrollmentId, lessonId, status, timeSpentMinutes
OUTPUT: progress
BEGIN
    // 1. Verify enrollment is active
    enrollment = db.findEnrollment(enrollmentId)
    IF enrollment == NULL OR enrollment.status != "ACTIVE" THEN
        THROW CONFLICT("Enrollment not active")
    END IF

    // 2. Verify lesson belongs to enrolled course
    lesson = db.findLesson(lessonId)
    module = db.findModule(lesson.moduleId)
    IF module.courseId != enrollment.courseId THEN
        THROW FORBIDDEN("Lesson not in enrolled course")
    END IF

    // 3. Update progress
    progress = db.findLessonProgress(enrollmentId, lessonId)
    IF progress == NULL THEN THROW NOT_FOUND

    // State transition validation
    IF status == "COMPLETED" AND progress.status == "COMPLETED" THEN
        THROW CONFLICT("Already completed")
    END IF

    progress.status = status
    progress.timeSpentMinutes += timeSpentMinutes
    progress.lastAccessedAt = now()
    IF status == "COMPLETED" THEN
        progress.completedAt = now()
    END IF
    db.update(progress)

    // 4. Check module completion
    checkModuleCompletion(enrollmentId, lesson.moduleId)

    // 5. Check course completion
    checkCourseCompletion(enrollmentId)

    outbox.publish("learning.progress.updated", {
        enrollmentId: enrollmentId,
        lessonId: lessonId,
        status: status
    })

    RETURN progress
END
```

```
ALGORITHM: CheckCourseCompletion
INPUT: enrollmentId
OUTPUT: completed (boolean)
BEGIN
    enrollment = db.findEnrollment(enrollmentId)
    course = db.findCourse(enrollment.courseId)

    // 1. Check all lessons completed
    lessons = db.findAllLessonsInCourse(course.courseId)
    FOR EACH lesson IN lessons DO
        progress = db.findLessonProgress(enrollmentId, lesson.lessonId)
        IF progress == NULL OR progress.status != "COMPLETED" THEN
            RETURN false  // not all lessons completed
        END IF
    END FOR

    // 2. Check all required assessments passed
    assessments = db.findAssessmentsByCourse(course.courseId)
    FOR EACH assessment IN assessments DO
        attempt = db.findBestAttempt(assessment.assessmentId, enrollmentId)
        IF attempt == NULL OR NOT attempt.passed THEN
            RETURN false  // assessment not passed
        END IF
    END FOR

    // 3. All criteria met — complete course
    enrollment.status = "COMPLETED"
    enrollment.completedAt = now()
    db.update(enrollment)

    // 4. Issue certificate (SRS-LRN-011)
    certificate = issueCertificate({
        learnerId: enrollment.learnerId,
        courseId: course.courseId,
        instructorId: course.instructorId,
        certificateType: "COURSE_COMPLETION"
    })

    // 5. Award Learning K-Points (SRS-LRN-011, KR-1 Ch.50)
    // 5 K-Points per course completion (GOVERNANCE PARAMETER)
    kRewardsEngine.accrueKPoints({
        accountId: enrollment.learnerId,
        category: "COMPLETION",
        baseValue: 5,  // GOVERNANCE PARAMETER
        evidenceRef: "course-completion-" + enrollment.enrollmentId,
        sourceEngine: "LEARNING"
    })

    outbox.publish("learning.course.completed", {
        enrollmentId: enrollmentId,
        courseId: course.courseId,
        learnerId: enrollment.learnerId,
        certificateId: certificate.certificateId
    })

    writeAudit("LEARNING", "CheckCourseCompletion", enrollmentId,
               "COMPLETE", "SUCCESS", {courseId: course.courseId})

    RETURN true
END
```

### 16.9 Assessment Submission Algorithm

```
ALGORITHM: SubmitAssessment
INPUT: assessmentId, enrollmentId, learnerId, answers
OUTPUT: attempt
BEGIN
    // 1. Verify enrollment
    enrollment = db.findEnrollment(enrollmentId)
    IF enrollment == NULL OR enrollment.learnerId != learnerId THEN
        THROW FORBIDDEN("Not enrolled")
    END IF
    IF enrollment.status != "ACTIVE" THEN
        THROW CONFLICT("Enrollment not active")
    END IF

    // 2. Check attempt limit
    attemptCount = db.getAttemptCount(assessmentId, enrollmentId)
    assessment = db.findAssessment(assessmentId)
    IF attemptCount >= assessment.maxAttempts THEN
        THROW CONFLICT("Max attempts exceeded")
    END IF

    // 3. Fraud detection — assessment gaming (SRS-LRN-007, SRS-LRN-016)
    fraudCheck = intelligenceEngine.checkFraudSignals({
        accountId: learnerId,
        activityContext: {
            type: "ASSESSMENT_SUBMISSION",
            assessmentId: assessmentId,
            timeTaken: now() - assessment.startTime
        }
    })
    IF fraudCheck.isFraudulent THEN
        writeAudit("LEARNING", "SubmitAssessment", learnerId,
                   "ASSESSMENT", "BLOCKED", {reason: "fraud_detected"})
        THROW FORBIDDEN("Assessment submission flagged for fraud")
    END IF

    // 4. Create attempt
    attempt = {
        attemptId: generateUUID(),
        assessmentId: assessmentId,
        enrollmentId: enrollmentId,
        learnerId: learnerId,
        answers: answers,
        attemptNumber: attemptCount + 1,
        startedAt: assessment.startTime,
        submittedAt: now()
    }

    // 5. Auto-score objective questions
    questions = db.findQuestions(assessmentId)
    correctCount = 0
    totalPoints = 0
    earnedPoints = 0
    FOR EACH question IN questions DO
        totalPoints += question.points
        learnerAnswer = answers[question.questionId]
        IF question.questionType IN ["MULTIPLE_CHOICE", "TRUE_FALSE"] THEN
            IF learnerAnswer == question.correctAnswer THEN
                earnedPoints += question.points
                correctCount++
            END IF
        END IF
    END FOR

    attempt.score = totalPoints > 0 ? (earnedPoints / totalPoints * 100) : 0
    attempt.passed = attempt.score >= assessment.passThreshold

    db.insert(attempt)

    // 6. If passed, award K-Points (SRS-LRN-011)
    // 2 K-Points per assessment pass (GOVERNANCE PARAMETER)
    IF attempt.passed THEN
        kRewardsEngine.accrueKPoints({
            accountId: learnerId,
            category: "ASSESSMENT",
            baseValue: 2,  // GOVERNANCE PARAMETER
            evidenceRef: "assessment-pass-" + attempt.attemptId,
            sourceEngine: "LEARNING"
        })
    END IF

    writeAudit("LEARNING", "SubmitAssessment", learnerId,
               "ASSESSMENT", "SUCCESS",
               {score: attempt.score, passed: attempt.passed})

    RETURN attempt
END
```

### 16.10 Certificate Issuance Algorithm

```
ALGORITHM: IssueCertificate
INPUT: {learnerId, courseId, instructorId, certificateType, pathId}
OUTPUT: certificate
BEGIN
    // 1. Generate verification code
    verificationCode = generateSecureVerificationCode()

    // 2. Build verifiable metadata
    metadata = {
        learnerId: learnerId,
        courseId: courseId,
        pathId: pathId,
        instructorId: instructorId,
        issuedDate: now(),
        certificateType: certificateType,
        verificationUrl: getBaseUrl() + "/verify/" + verificationCode
    }

    // 3. Create certificate
    certificate = {
        certificateId: generateUUID(),
        learnerId: learnerId,
        courseId: courseId,
        pathId: pathId,
        instructorId: instructorId,
        certificateType: certificateType,
        verificationCode: verificationCode,
        metadata: metadata,
        issuedAt: now()
    }
    db.insert(certificate)

    // 4. Notify learner
    communicationEngine.sendNotification(learnerId, "CERTIFICATE_ISSUED",
        "Course Completion Certificate",
        "Your certificate for course completion has been issued. " +
        "Verification code: " + verificationCode,
        "LEARNING", certificate.certificateId, "HIGH")

    writeAudit("LEARNING", "IssueCertificate", certificate.certificateId,
               "CERTIFICATE", "SUCCESS",
               {learnerId: learnerId, courseId: courseId})

    RETURN certificate
END
```

### 16.11 Learning Path Completion Algorithm

```
ALGORITHM: CheckPathCompletion
INPUT: enrollmentId, pathId
OUTPUT: completed (boolean)
BEGIN
    // 1. Get all steps in the path
    steps = db.findPathSteps(pathId)

    // 2. Check each required step is completed
    FOR EACH step IN steps DO
        IF NOT step.isRequired THEN CONTINUE

        enrollment = db.findEnrollmentByLearnerAndCourse(
            enrollment.learnerId, step.courseId)
        IF enrollment == NULL OR enrollment.status != "COMPLETED" THEN
            RETURN false  // required course not completed
        END IF
    END FOR

    // 3. All required courses completed — issue path certificate
    certificate = issueCertificate({
        learnerId: enrollment.learnerId,
        pathId: pathId,
        instructorId: NULL,  // path certificates may not have a single instructor
        certificateType: "PATH_COMPLETION"
    })

    // 4. Award path completion K-Points (SRS-LRN-011)
    // 10 K-Points per path completion (GOVERNANCE PARAMETER)
    kRewardsEngine.accrueKPoints({
        accountId: enrollment.learnerId,
        category: "PATH",
        baseValue: 10,  // GOVERNANCE PARAMETER
        evidenceRef: "path-completion-" + pathId + "-" + enrollment.learnerId,
        sourceEngine: "LEARNING"
    })

    outbox.publish("learning.path.completed", {
        pathId: pathId,
        learnerId: enrollment.learnerId,
        certificateId: certificate.certificateId
    })

    writeAudit("LEARNING", "CheckPathCompletion", pathId,
               "PATH_COMPLETE", "SUCCESS",
               {learnerId: enrollment.learnerId})

    RETURN true
END
```

### 16.12 Learning Fraud Detection Algorithm

```
ALGORITHM: DetectLearningFraud
INPUT: accountId, activityContext
OUTPUT: fraudSignals[]
BEGIN
    fraudSignals = []

    // 1. Automated completion detection (SRS-LRN-016)
    IF detectAutomatedCompletion(accountId, activityContext) THEN
        fraudSignals.add(createSignal(accountId, "AUTOMATED_COMPLETION",
            "BEHAVIORAL_ANALYSIS", confidence, evidence))
    END IF

    // 2. Proxy completion detection
    IF detectProxyCompletion(accountId, activityContext) THEN
        fraudSignals.add(createSignal(accountId, "PROXY_COMPLETION",
            "CROSS_REFERENCING", confidence, evidence))
    END IF

    // 3. Answer sharing detection
    IF detectAnswerSharing(accountId, activityContext) THEN
        fraudSignals.add(createSignal(accountId, "ANSWER_SHARING",
            "PATTERN_ANALYSIS", confidence, evidence))
    END IF

    // 4. Fraudulent certificate detection
    IF detectFraudulentCertificate(accountId, activityContext) THEN
        fraudSignals.add(createSignal(accountId, "FRAUDULENT_CERTIFICATE",
            "PATTERN_ANALYSIS", confidence, evidence))
    END IF

    // 5. Feed to Intelligence Engine for corroboration (KR-FRD-002)
    IF fraudSignals.size() > 0 THEN
        intelligenceEngine.detectFraudSignals(accountId, activityContext)
    END IF

    // 6. If fraudulent, block K-Points and certificates (SRS-LRN-016)
    IF fraudSignals.size() >= 2 THEN  // corroborated
        // Reverse any K-Points from fraudulent completion (KR-1 Ch.50.5)
        kRewardsEngine.reverseKPoints({
            evidenceRef: activityContext.evidenceRef,
            reversalReason: "fraudulent_learning_activity"
        })

        // Revoke certificates
        db.revokeCertificate(activityContext.certificateId)

        // Feed to Trust Engine
        trustEngine.submitTrustSignal(accountId, "FRAUD_FLAG",
            "LEARNING", activityContext.evidenceRef)

        // Report to Administration for sanctions
        eventBus.publish("administration.fraud.report", {
            accountId: accountId,
            fraudType: "LEARNING_FRAUD",
            evidence: fraudSignals,
            corroborated: true
        })
    END IF

    writeAudit("LEARNING", "DetectLearningFraud", accountId,
               "FRAUD_CHECK", fraudSignals.size() >= 2 ? "FRAUD_DETECTED" : "PASSED",
               {signalCount: fraudSignals.size()})

    RETURN fraudSignals
END
```

### 16.13 Instructor Settlement (Learning Revenue Waterfall)

The Learning Engine triggers settlement through the Wallet/Payments Engine. The Learning revenue waterfall (GOVERNANCE PARAMETERS from KR-1 Appendix C):

| Category | Rate | Description |
|---|---|---|
| Platform | 20% | Platform allocation |
| Instructor | 55% | Instructor's share |
| Rewards | 8% | Reward Pool contribution |
| Leadership | 5% | Leadership allocation |
| Operations | 2% | Operational allocation |
| **Sum** | **90%** | Allocation Pool |
| Reserve | 10% | Protected reserve |
| **Total** | **100%** | |

```
ALGORITHM: SettleInstructor
INPUT: enrollmentId, courseId
OUTPUT: settlement
BEGIN
    course = db.findCourse(courseId)
    enrollment = db.findEnrollment(enrollmentId)

    IF course.price == 0 THEN RETURN NULL  // no settlement for free courses

    // Settlement flows through Wallet Engine with Learning waterfall
    settlement = walletEngine.executeSettlement({
        sourceEngine: "LEARNING",
        sourceReference: enrollmentId,
        grossRevenue: course.price,
        deductions: 0,
        counterpartyId: course.instructorId,
        idempotencyKey: "learning-settle-" + enrollmentId
    })

    // Wallet Engine applies: QEV = GR - D, AP = 90%, R = 10%
    // Allocations: platform 20%, instructor 55%, rewards 8%, leadership 5%, ops 2%
    // Instructor receives 55% of QEV

    outbox.publish("learning.settlement.completed", {
        enrollmentId: enrollmentId,
        instructorId: course.instructorId,
        settlementId: settlement.settlementId
    })

    writeAudit("LEARNING", "SettleInstructor", enrollmentId,
               "SETTLE", "SUCCESS",
               {instructorId: course.instructorId, qev: settlement.qev})

    RETURN settlement
END
```

### 16.14 State Machines

#### 16.14.1 Course State Machine

```
  [DRAFT] --publish--> [PUBLISHED] --unpublish--> [UNPUBLISHED] --publish--> [PUBLISHED]
  [PUBLISHED] --archive--> [ARCHIVED]
  [UNPUBLISHED] --archive--> [ARCHIVED]
```

#### 16.14.2 Enrollment State Machine

```
  [ACTIVE] --all lessons completed & assessments passed--> [COMPLETED]
  [ACTIVE] --cancelled--> [CANCELLED]
```

#### 16.14.3 Lesson Progress State Machine

```
  [NOT_STARTED] --accessed--> [IN_PROGRESS] --completed--> [COMPLETED]
```

#### 16.14.4 Assignment Submission State Machine

```
  [SUBMITTED] --instructor review--> [UNDER_REVIEW] --graded--> [GRADED]
```

#### 16.14.5 Instructor State Machine

```
  [PENDING] --approved--> [ACTIVE] --trust below threshold--> [SUSPENDED]
  [ACTIVE] --removed (policy violation)--> [REMOVED]
  [SUSPENDED] --trust restored--> [ACTIVE]
```

### 16.15 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Instructors manage own courses/lessons/assessments; learners access enrolled courses; admins moderate all. Trust ≥ 40 for instructor eligibility (GOVERNANCE PARAMETER). |
| **Validation** | Course data, lesson content, assessment questions, assignment instructions, external media references, certificate metadata |
| **Rate limiting** | Course creation: 20/hour per instructor; enrollment: 50/hour per learner; assessment submission: 10/hour per learner; review submission: 10/hour per learner |
| **Audit** | Instructor onboarding, course creation/publish, enrollment, progress updates, assessment submissions, certificate issuance, settlement, fraud detection, content moderation |
| **Caching** | Course catalogue (15min TTL); instructor profiles (10min TTL); course search results (60s TTL); progress NOT cached (strong consistency) |
| **Concurrency** | Course edits: OCC; progress updates: OCC; enrollment: PCC (lock enrollment); certificate issuance: idempotent |
| **Idempotency** | Enrollment: "enroll-{learnerId}-{courseId}"; settlement: "learning-settle-{enrollmentId}"; K-Points: "course-completion-{enrollmentId}", "assessment-pass-{attemptId}", "path-completion-{pathId}-{learnerId}" |
| **Retries** | Settlement to Wallet: 3x backoff; K-Points accrual: 3x backoff; external media validation: 3x backoff; event publish: outbox |
| **Timeout** | Course creation: 5s; enrollment: 10s (includes payment); assessment submission: 10s; external media validation: 5s; settlement: 10s |
| **Failure handling** | Payment failure → enrollment blocked; settlement failure → retry then flag; external media unavailable → show placeholder, retry; fraud detection failure → block activity, flag for review |
| **Observability** | Metrics: enrollments/sec, completion rate, assessment pass rate, certificate issuance, settlement volume, fraud detection rate; Traces: enrollment flow, completion flow, settlement |
| **Security boundary** | mTLS internal; external media referenced not stored (ADR-005); authorization enforced on media embedding; assessment anti-gaming; certificate verification; content moderation through Administration Engine; KYC gating on instructor |

### 16.16 Sequence Diagram: Course Enrollment and Completion

```
Learner    Learning Engine    Wallet Engine    K-Rewards (async)
   |              |                  |                |
   |--enroll----->|                  |                |
   |              |--verify course    |                |
   |              |--process payment->|                |
   |              |<--payment confirmed|               |
   |              |--create enrollment |                |
   |              |--init progress     |                |
   |              |--settle instructor->|               |
   |              |<--settlement-------|                |
   |              |--publish enrolled   |                |
   |<--enrolled---|                  |                |
   |              |                  |        |--accrue K-Points (enrollment, async)
   |              |                  |                |
   |  ... learner completes lessons ...               |
   |--update progress->|             |                |
   |<--progress--|                  |                |
   |              |                  |                |
   |--submit assessment->|           |                |
   |              |--auto-score       |                |
   |              |--fraud check      |                |
   |<--score-----|                  |        |--accrue K-Points (assessment pass)
   |              |                  |                |
   |  ... all lessons & assessments completed ...      |
   |              |--check completion |                |
   |              |--issue certificate |                |
   |              |--accrue completion K-Points------->|
   |              |--publish course.completed          |
   |<--completed--+ certificate       |                |
```

### 16.17 Governing Requirement Traceability

SRS-LRN-001–017; SAD-1 Ch.19, ADR-005; PLC-1 Ch.30; KR-1 Ch.50, KR-PNT-004, KR-SRC-004, KR-FRD-002; LEARN-AD-1.

---

# Part IV — Leadership and Royal Identity Design

## Chapter 17 — Leadership Qualification Design

### 17.1 Overview

The Leadership Qualification design specifies the graph-based algorithms and data structures that support two critical query patterns required by the K-Rewards Engine for Leadership Multiplication evaluation (SRS-KRW-004, SRS-KRW-010; KR-1 Ch.28, Ch.36, Ch.37; PLC-1 Ch.26):

1. **leader → ring → member → K-Level** — determine the K-Level of each member within each ring of a leader's network.
2. **leader → required ring level → actual ring level → qualification result** — compare the required K-Level distribution across rings against the actual distribution to determine whether the leader qualifies for promotion.

The design enforces the **Anti-Accumulation Principle** (KR-1 Ch.38): a leader cannot reach top-tier leadership through referral accumulation alone; they must develop other qualified leaders (SRS-KRW-010).

Implements: SRS-KRW-004, SRS-KRW-008, SRS-KRW-009, SRS-KRW-010, SRS-KRW-011; SAD-1 Ch.21; KR-1 KR-RNG-001–017, KR-LVL-001–024, KR-LVL-009, KR-LVL-010; PLC-1 Ch.26.

### 17.2 Graph Model

The leadership graph is stored in a graph database (Neo4j reference, per SAD-1 ADR-006). The graph structure:

```
Graph Schema:
==============

Node: Participant
    Properties:
        accountId: UUID (indexed)
        kLevel: integer (1–15)
        trustScore: decimal(5,2)
        activeStatus: boolean
        kycTier: enum
        isSanctioned: boolean
        joinedAt: timestamp

Edge: REFERRED_BY (directed: member → referrer)
    Properties:
        referralDate: timestamp
        status: enum (ACTIVE, FRAUDULENT, INVALIDATED)
        verified: boolean
```

**Ring definition (KR-RNG-004):** Ring membership is determined by graph distance from the leader:
- Ring 1 = distance 1 (direct referrals)
- Ring 2 = distance 2
- Ring 3 = distance 3
- Ring 4 = distance 4
- Ring 5 = distance 5

### 17.3 Query 1: leader → ring → member → K-Level

```
ALGORITHM: QueryRingMemberKLevels
INPUT: leaderAccountId
OUTPUT: ringMemberKLevels {ring1: [{memberId, kLevel}], ring2: [...], ...}
BEGIN
    ringMemberKLevels = {}

    FOR r = 1 TO 5 DO
        // Query graph DB for members at distance r from the leader
        members = graphDB.query(
            "MATCH (leader:Participant {accountId: $leaderId})
             MATCH (member:Participant)-[:REFERRED_BY*" + r + "]->(leader)
             WHERE member.activeStatus = true
               AND member.isSanctioned = false
               AND member.trustScore >= $minTrustScore
             RETURN member.accountId as memberId,
                    member.kLevel as kLevel,
                    member.trustScore as trustScore"
        )

        ringMemberKLevels["ring" + r] = members.map(m => {
            memberId: m.memberId,
            kLevel: m.kLevel,
            trustScore: m.trustScore
        })
    END FOR

    RETURN ringMemberKLevels
END
```

**Example result:**
```
{
  "ring1": [
    {memberId: "acc-001", kLevel: 7, trustScore: 75},
    {memberId: "acc-002", kLevel: 4, trustScore: 60},
    {memberId: "acc-003", kLevel: 9, trustScore: 82}
  ],
  "ring2": [
    {memberId: "acc-004", kLevel: 5, trustScore: 65},
    {memberId: "acc-005", kLevel: 3, trustScore: 50}
  ],
  "ring3": [...],
  "ring4": [...],
  "ring5": [...]
}
```

### 17.4 Query 2: leader → required ring level → actual ring level → qualification result

```
ALGORITHM: EvaluateLeadershipQualification
INPUT: leaderAccountId, targetKLevel
OUTPUT: qualificationResult {qualified: boolean, ringEvaluations: list, failingRequirements: list}
BEGIN
    // 1. Load progression matrix for target K-Level (GOVERNANCE PARAMETERS, KR-1 Appendix B)
    requirements = db.getKLevelProgression(targetKLevel)

    // 2. Query actual ring member K-Levels
    ringMemberKLevels = queryRingMemberKLevels(leaderAccountId)

    // 3. Evaluate each ring against requirements
    ringEvaluations = []
    failingRequirements = []

    ringRequirements = [
        {ring: 1, minMembers: requirements.minRing1Members, minKLevel: requirements.minRing1KLevel},
        {ring: 2, minMembers: requirements.minRing2Members, minKLevel: requirements.minRing2KLevel},
        {ring: 3, minMembers: requirements.minRing3Members, minKLevel: requirements.minRing3KLevel},
        {ring: 4, minMembers: requirements.minRing4Members, minKLevel: requirements.minRing4KLevel},
        {ring: 5, minMembers: requirements.minRing5Members, minKLevel: requirements.minRing5KLevel}
    ]

    FOR EACH req IN ringRequirements DO
        ringMembers = ringMemberKLevels["ring" + req.ring]

        // Count total active qualifying members
        totalCount = ringMembers.size()

        // Count members at or above the required K-Level for this ring
        qualifyingAtKLevel = ringMembers.filter(m => m.kLevel >= req.minKLevel).size()

        // Check density gate (KR-RNG-009)
        densityGate = getDensityGate(req.ring)  // GOVERNANCE PARAMETER
        meetsDensity = totalCount >= densityGate

        // Check minimum member count
        meetsMinMembers = totalCount >= req.minMembers

        // Check minimum K-Level distribution
        meetsKLevelDistribution = qualifyingAtKLevel >= req.minMembers

        ringEvaluation = {
            ring: req.ring,
            requiredMinMembers: req.minMembers,
            actualMemberCount: totalCount,
            requiredMinKLevel: req.minKLevel,
            actualMembersAtKLevel: qualifyingAtKLevel,
            meetsDensity: meetsDensity,
            meetsMinMembers: meetsMinMembers,
            meetsKLevelDistribution: meetsKLevelDistribution,
            passes: meetsDensity AND meetsMinMembers AND meetsKLevelDistribution
        }
        ringEvaluations.add(ringEvaluation)

        IF NOT ringEvaluation.passes THEN
            IF NOT meetsDensity THEN
                failingRequirements.add("Ring " + req.ring + ": density gate not met (" +
                    totalCount + " < " + densityGate + ")")
            END IF
            IF NOT meetsMinMembers THEN
                failingRequirements.add("Ring " + req.ring + ": insufficient members (" +
                    totalCount + " < " + req.minMembers + ")")
            END IF
            IF NOT meetsKLevelDistribution THEN
                failingRequirements.add("Ring " + req.ring + ": insufficient members at K-Level>=" +
                    req.minKLevel + " (" + qualifyingAtKLevel + " < " + req.minMembers + ")")
            END IF
        END IF
    END FOR

    // 4. Check Leadership Tier requirements (L7+)
    IF targetKLevel >= 7 THEN
        leadershipDevResult = checkLeadershipDevelopment(leaderAccountId, targetKLevel, ringMemberKLevels)
        IF NOT leadershipDevResult.passes THEN
            failingRequirements.addAll(leadershipDevResult.failures)
        END IF
    END IF

    // 5. Check Executive Tier requirements (L10+)
    IF targetKLevel >= 10 THEN
        executiveDevResult = checkExecutiveDevelopment(leaderAccountId, targetKLevel, ringMemberKLevels)
        IF NOT executiveDevResult.passes THEN
            failingRequirements.addAll(executiveDevResult.failures)
        END IF
    END IF

    // 6. Check Legacy Tier requirements (L13+)
    IF targetKLevel >= 13 THEN
        legacyDevResult = checkLegacyDevelopment(leaderAccountId, targetKLevel, ringMemberKLevels)
        IF NOT legacyDevResult.passes THEN
            failingRequirements.addAll(legacyDevResult.failures)
        END IF
    END IF

    // 7. Determine overall qualification
    qualified = failingRequirements.isEmpty()

    RETURN {
        qualified: qualified,
        ringEvaluations: ringEvaluations,
        failingRequirements: failingRequirements,
        targetKLevel: targetKLevel
    }
END
```

### 17.5 Leadership Development Check (L7+)

```
ALGORITHM: CheckLeadershipDevelopment
INPUT: leaderAccountId, targetKLevel, ringMemberKLevels
OUTPUT: {passes: boolean, failures: list}
BEGIN
    failures = []

    // Leadership Tier (L7+): requires Ring 1 members at specified K-Levels
    // Example: L7 requires "15 active, min 2 at L4+" (GOVERNANCE PARAMETER, KR-1 Ch.31)
    // Example: L10 requires "30 active, min 5 at L7+" (GOVERNANCE PARAMETER, KR-1 Ch.31)

    leadershipDevReq = getLeadershipDevelopmentRequirement(targetKLevel)
    // GOVERNANCE PARAMETER: {minActiveRing1, minAtKLevel, atKLevelThreshold}

    ring1Members = ringMemberKLevels["ring1"]
    activeCount = ring1Members.size()
    atKLevelCount = ring1Members.filter(m => m.kLevel >= leadershipDevReq.atKLevelThreshold).size()

    IF activeCount < leadershipDevReq.minActiveRing1 THEN
        failures.add("Leadership development: Ring 1 active count " + activeCount +
            " < required " + leadershipDevReq.minActiveRing1)
    END IF

    IF atKLevelCount < leadershipDevReq.minAtKLevel THEN
        failures.add("Leadership development: Ring 1 at K-Level>=" +
            leadershipDevReq.atKLevelThreshold + " count " + atKLevelCount +
            " < required " + leadershipDevReq.minAtKLevel)
    END IF

    RETURN {passes: failures.isEmpty(), failures: failures}
END
```

### 17.6 Executive Development Check (L10+)

```
ALGORITHM: CheckExecutiveDevelopment
INPUT: leaderAccountId, targetKLevel, ringMemberKLevels
OUTPUT: {passes: boolean, failures: list}
BEGIN
    failures = []

    // Executive Tier (L10+): minimum Ring 1 members at L7+
    // Example: L10 requires "Min 5 Ring 1 at L7+" (GOVERNANCE PARAMETER, KR-1 Ch.31)
    executiveDevReq = getExecutiveDevelopmentRequirement(targetKLevel)
    // GOVERNANCE PARAMETER: {minRing1AtKLevel, atKLevelThreshold}

    ring1Members = ringMemberKLevels["ring1"]
    atKLevelCount = ring1Members.filter(m => m.kLevel >= executiveDevReq.atKLevelThreshold).size()

    IF atKLevelCount < executiveDevReq.minRing1AtKLevel THEN
        failures.add("Executive development: Ring 1 at K-Level>=" +
            executiveDevReq.atKLevelThreshold + " count " + atKLevelCount +
            " < required " + executiveDevReq.minRing1AtKLevel)
    END IF

    RETURN {passes: failures.isEmpty(), failures: failures}
END
```

### 17.7 Legacy Development Check (L13+)

```
ALGORITHM: CheckLegacyDevelopment
INPUT: leaderAccountId, targetKLevel, ringMemberKLevels
OUTPUT: {passes: boolean, failures: list}
BEGIN
    failures = []

    // Legacy Tier (L13+): minimum Ring 1 members at L10+
    // Example: L13 requires "Min 4 at L10+" (GOVERNANCE PARAMETER, KR-1 Ch.31)
    legacyDevReq = getLegacyDevelopmentRequirement(targetKLevel)
    // GOVERNANCE PARAMETER: {minRing1AtKLevel, atKLevelThreshold}

    ring1Members = ringMemberKLevels["ring1"]
    atKLevelCount = ring1Members.filter(m => m.kLevel >= legacyDevReq.atKLevelThreshold).size()

    IF atKLevelCount < legacyDevReq.minRing1AtKLevel THEN
        failures.add("Legacy development: Ring 1 at K-Level>=" +
            legacyDevReq.atKLevelThreshold + " count " + atKLevelCount +
            " < required " + legacyDevReq.minRing1AtKLevel)
    END IF

    RETURN {passes: failures.isEmpty(), failures: failures}
END
```

### 17.8 Ring Contribution Calculation (Leadership Multiplication)

Ring Contribution weights are **GOVERNANCE PARAMETERS** (KR-RNG-008):

| Ring | Weight |
|---|---|
| Ring 1 | 0.40 |
| Ring 2 | 0.25 |
| Ring 3 | 0.15 |
| Ring 4 | 0.12 |
| Ring 5 | 0.08 |
| **Sum** | **1.00** |

```
ALGORITHM: CalculateRingContributionForLeadership
INPUT: leaderAccountId, cycleId
OUTPUT: ringContribution
BEGIN
    ringMemberKLevels = queryRingMemberKLevels(leaderAccountId)
    contributions = {}
    totalContribution = 0

    FOR r = 1 TO 5 DO
        members = ringMemberKLevels["ring" + r]
        qualifyingCount = members.size()

        // Apply density gate (KR-RNG-009)
        densityGate = getDensityGate(r)  // GOVERNANCE PARAMETER
        IF qualifyingCount < densityGate THEN
            contributions[r] = 0
        ELSE
            weight = getRingWeight(r)  // GOVERNANCE PARAMETER (KR-RNG-008)
            contributions[r] = weight * qualifyingCount
        END IF

        totalContribution += contributions[r]
    END FOR

    // Store result (same as K-Rewards Engine Chapter 10 §10.5)
    ringContribution = {
        ringContributionId: generateUUID(),
        accountId: leaderAccountId,
        cycleId: cycleId,
        ring1Members: ringMemberKLevels["ring1"].size(),
        ring2Members: ringMemberKLevels["ring2"].size(),
        ring3Members: ringMemberKLevels["ring3"].size(),
        ring4Members: ringMemberKLevels["ring4"].size(),
        ring5Members: ringMemberKLevels["ring5"].size(),
        ring1Contribution: contributions[1],
        ring2Contribution: contributions[2],
        ring3Contribution: contributions[3],
        ring4Contribution: contributions[4],
        ring5Contribution: contributions[5],
        totalContribution: totalContribution,
        calculatedAt: now()
    }
    db.insert(ringContribution)

    RETURN ringContribution
END
```

### 17.9 K-Level Distribution Summary Query

This query answers: "How many Ring N members has this leader developed to Leadership tier (L7+)?"

```
ALGORITHM: QueryLeadershipTierRingCount
INPUT: leaderAccountId, ringNumber, minKLevel
OUTPUT: count
BEGIN
    members = graphDB.query(
        "MATCH (leader:Participant {accountId: $leaderId})
         MATCH (member:Participant)-[:REFERRED_BY*" + ringNumber + "]->(leader)
         WHERE member.activeStatus = true
           AND member.isSanctioned = false
           AND member.trustScore >= $minTrustScore
           AND member.kLevel >= " + minKLevel + "
         RETURN count(member) as count"
    )

    RETURN members[0].count
END
```

**Example:** `queryLeadershipTierRingCount(leaderAccountId, 1, 7)` returns "how many Ring 1 members has this leader developed to Leadership tier (L7+)?"

### 17.10 Anti-Accumulation Enforcement

The Anti-Accumulation Principle (KR-1 Ch.38) is enforced through the Leadership Multiplication requirements. The system prevents a participant from reaching top-tier leadership through referral accumulation alone by requiring:

1. **Ring K-Level distribution** — members must not only exist but must be at the required K-Level
2. **Leadership development** — Ring 1 must contain members who have themselves achieved qualifying K-Levels
3. **Strictly increasing requirements** — each K-Level is strictly harder than the one before (KR-LVL-010)

```
ALGORITHM: EnforceAntiAccumulation
INPUT: leaderAccountId, targetKLevel
OUTPUT: {enforced: boolean, reason: string}
BEGIN
    // 1. Check that promotion is not based on accumulation alone
    qualificationResult = evaluateLeadershipQualification(leaderAccountId, targetKLevel)

    IF NOT qualificationResult.qualified THEN
        RETURN {
            enforced: true,
            reason: "Anti-accumulation: leadership multiplication requirements not met",
            details: qualificationResult.failingRequirements
        }
    END IF

    // 2. Check strictly increasing progression (KR-LVL-010)
    currentLevel = getKLevel(leaderAccountId)
    IF targetKLevel != currentLevel + 1 THEN
        RETURN {
            enforced: true,
            reason: "Anti-accumulation: must progress one level at a time"
        }
    END IF

    // 3. Check all 17 progression matrix fields (KR-LVL-009)
    allFieldsMet = checkAllProgressionFields(leaderAccountId, targetKLevel)
    IF NOT allFieldsMet.passes THEN
        RETURN {
            enforced: true,
            reason: "Anti-accumulation: not all progression matrix fields met",
            details: allFieldsMet.failures
        }
    END IF

    RETURN {enforced: false, reason: "All anti-accumulation checks passed"}
END
```

### 17.11 Data Models

#### 17.11.1 LeadershipEvaluation

| Field | Type | Constraints | Description |
|---|---|---|---|
| `evaluationId` | UUID | PK | Evaluation ID |
| `leaderAccountId` | UUID | FK → Account, indexed | Leader evaluated |
| `targetKLevel` | integer | not null | Target K-Level |
| `currentKLevel` | integer | not null | Current K-Level |
| `ringEvaluations` | JSON | not null | Per-ring evaluation results |
| `failingRequirements` | JSON | not null | List of failures |
| `qualified` | boolean | not null | Whether qualified |
| `evaluatedAt` | timestamp | not null | Evaluation time |
| `cycleId` | UUID | nullable | Cycle context |

#### 17.11.2 RingDensityGate

| Field | Type | Constraints | Description |
|---|---|---|---|
| `ringNumber` | integer | PK | Ring (1–5) |
| `densityGate` | integer | not null | Minimum active members (GOVERNANCE PARAMETER) |

#### 17.11.3 RingWeight

| Field | Type | Constraints | Description |
|---|---|---|---|
| `ringNumber` | integer | PK | Ring (1–5) |
| `weight` | decimal(5,2) | not null | Weight (GOVERNANCE PARAMETER, KR-RNG-008) |

### 17.12 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | K-Rewards Engine is sole authority for leadership evaluation; graph queries are read-only; no engine modifies the graph except Identity (referrals) and K-Rewards (K-Level updates). |
| **Validation** | Target K-Level 1–15; ring number 1–5; density gate and weight values from GOVERNANCE PARAMETERS |
| **Rate limiting** | Leadership evaluation: 10/min per account; ring member query: 5/min per account |
| **Audit** | Every leadership evaluation, ring contribution calculation, promotion attempt — logged with full evaluation results |
| **Caching** | Ring member K-Levels: cached per cycle (invalidated on K-Level change); density gates and weights: 1hr TTL |
| **Concurrency** | Graph queries: read-only (no conflict); evaluation storage: OCC |
| **Idempotency** | Evaluation: "evaluation-{leaderAccountId}-{targetKLevel}-{cycleId}" |
| **Retries** | Graph DB query: 3x backoff; evaluation storage: 3x backoff |
| **Timeout** | Ring member query: 5s (graph query); full evaluation: 15s; ring contribution: 10s |
| **Failure handling** | Graph DB unavailable → degrade gracefully (use cached ring data); evaluation failure → log and retry |
| **Observability** | Metrics: evaluations/sec, qualification rate, ring contribution calculations, graph query latency; Traces: evaluation flow |
| **Security boundary** | mTLS internal; graph DB access restricted to K-Rewards Engine; GOVERNANCE PARAMETERS loaded as config; anti-fraud ring checks before evaluation |

### 17.13 Sequence Diagram: Leadership Qualification Evaluation

```
Promotion    K-Rewards    Ring Graph    KR-1 Config
Request      Engine       (Neo4j)       (GOV PARAMS)
   |             |             |              |
   |--evaluate-->|             |              |
   |             |--load progression matrix->|
   |             |<--requirements------------|
   |             |             |              |
   |             |--query ring 1 members----->|
   |             |--query ring 2 members----->|
   |             |--query ring 3 members----->|
   |             |--query ring 4 members----->|
   |             |--query ring 5 members----->|
   |             |<--ring member K-Levels------|
   |             |             |              |
   |             |--evaluate each ring         |
   |             |   (density, min members,    |
   |             |    K-Level distribution)    |
   |             |             |              |
   |             |--check leadership dev (L7+)  |
   |             |--check executive dev (L10+)  |
   |             |--check legacy dev (L13+)    |
   |             |             |              |
   |             |--enforce anti-accumulation  |
   |             |             |              |
   |             |--store evaluation            |
   |<--result----|             |              |
   |  {qualified: true/false,                  |
   |   ringEvaluations: [...],                 |
   |   failingRequirements: [...]}             |
```

### 17.14 Governing Requirement Traceability

SRS-KRW-004, SRS-KRW-008, SRS-KRW-009, SRS-KRW-010, SRS-KRW-011; KR-1 KR-RNG-001–017, KR-LVL-001–024, KR-LVL-009, KR-LVL-010; PLC-1 Ch.26.

---

## Chapter 18 — Royal Identity Design

### 18.1 Overview

The Royal Identity and Coronation system implements the recognition identity model integrated with the K-Level system (SAD-1 Ch.22; PLC-1 v2.0 Ch.22; KR-1 Ch.51–53; SRS-ROY-001–009). Royal titles are **recognition identities** — they do not confer political, governmental, hereditary, or financial authority beyond standard K-Level privileges (KR-1 KR-LVL-045). The system is governed by KR-1; all numerical values and eligibility criteria are GOVERNANCE PARAMETERS owned by KR-1.

Implements: SRS-ROY-001–009; SAD-1 Ch.22; PLC-1 Ch.22; KR-1 KR-LVL-042–053, Ch.51–53, Ch.65.

### 18.2 Tier-to-Title Mapping

| Tier | K-Level Range | Royal Title | Display Format |
|---|---|---|---|
| Foundation | 1–3 | Normal (no royal title) | `[Username]` |
| Growth | 4–6 | Normal (no royal title) | `[Username]` |
| Leadership | 7–9 | Prince | `Prince [Username]` |
| Executive | 10–12 | Crown Prince | `Crown Prince [Username]` |
| Legacy | 13–15 | King | `King [Username]` |

All mappings are **GOVERNANCE PARAMETERS** (KR-1 KR-LVL-042; PLC-1 Ch.22; KR-1 Ch.51).

### 18.3 Component Design

```
┌───────────────────────────────────────────────────────────────┐
│                  ROYAL IDENTITY SUBSYSTEM                        │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ Username │ │  Team    │ │  Title   │ │Coronation│         │
│  │ Service  │ │ Name Svc │ │ Service  │ │ Service  │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐                                    │
│  │  Title   │ │Coronation│                                    │
│  │ History  │ │ History  │                                    │
│  │ Service  │ │ Service  │                                    │
│  └──────────┘ └──────────┘                                    │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Royal Identity-DB (PostgreSQL, part of K-Rewards-DB)  │    │
│  └────────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
```

### 18.4 Data Models

#### 18.4.1 RoyalIdentity

| Field | Type | Constraints | Description |
|---|---|---|---|
| `royalIdentityId` | UUID | PK | Record ID |
| `accountId` | UUID | FK → Account, unique | Participant |
| `username` | string | not null, unique | Permanent royal username (assigned at L7) |
| `usernameAssignedAt` | timestamp | nullable | Assignment time |
| `teamName` | string | nullable, unique | Team/network name (assigned at L7) |
| `teamNameAssignedAt` | timestamp | nullable | Team name assignment time |
| `currentTitle` | enum | nullable | `NORMAL`, `PRINCE`, `CROWN_PRINCE`, `KING` |
| `currentTitleAssignedAt` | timestamp | nullable | Title assignment time |
| `coronationEligible` | boolean | not null, default false | Coronation eligibility |
| `createdAt` | timestamp | not null | Creation time |
| `version` | integer | not null, default 1 | OCC version |

#### 18.4.2 TitleHistory

| Field | Type | Constraints | Description |
|---|---|---|---|
| `historyId` | UUID | PK | History record ID |
| `accountId` | UUID | FK → Account, indexed | Participant |
| `title` | enum | not null | `NORMAL`, `PRINCE`, `CROWN_PRINCE`, `KING` |
| `kLevelAtAssignment` | integer | not null | K-Level when title assigned |
| `tierAtAssignment` | enum | not null | Tier when title assigned |
| `assignedAt` | timestamp | not null | Assignment time |
| `triggerEvent` | string | not null | What triggered the change (e.g., "KLEVEL_PROMOTION") |
| `previousTitle` | enum | nullable | Previous title |

#### 18.4.3 CoronationRecord

| Field | Type | Constraints | Description |
|---|---|---|---|
| `coronationId` | UUID | PK | Coronation record ID |
| `accountId` | UUID | FK → Account, indexed | Crowned participant |
| `coronationYear` | integer | not null | Coronation year |
| `kLevel` | integer | not null | K-Level at coronation |
| `eligibilityVerified` | boolean | not null | Whether eligibility was verified |
| `categories` | JSON | nullable | Recognition categories awarded |
| `awards` | JSON | nullable | Awards given (certificates, badges, recognition) |
| `financialRewardAmount` | decimal(20,2) | nullable | Financial reward (funded from Allocation Pool, not reserve) |
| `settlementId` | UUID | nullable | Settlement reference (if financial reward) |
| `status` | enum | not null | `NOMINATED`, `VERIFIED`, `CORONATED`, `REJECTED` |
| `coronatedAt` | timestamp | nullable | Coronation time |
| `createdAt` | timestamp | not null | Creation time |

#### 18.4.4 CoronationCategory

| Field | Type | Constraints | Description |
|---|---|---|---|
| `categoryId` | UUID | PK | Category ID |
| `name` | string | not null, unique | e.g., "Leadership Excellence", "Community Impact" |
| `description` | string | not null | Category description |

### 18.5 Username Assignment Algorithm

```
ALGORITHM: AssignRoyalUsername
INPUT: accountId
OUTPUT: royalIdentity
BEGIN
    // 1. Verify participant has been promoted to Level 7 (SRS-ROY-001)
    kLevel = kRewardsEngine.getKLevel(accountId)
    IF kLevel < 7 THEN
        THROW FORBIDDEN("Royal username assigned only at Leadership Tier (L7+)")
    END IF

    // 2. Check if already has a royal username (SRS-ROY-001 AC4: immutable)
    existing = db.findRoyalIdentity(accountId)
    IF existing != NULL AND existing.username != NULL THEN
        THROW CONFLICT("Royal username already assigned and is immutable")
    END IF

    // 3. Generate unique username
    baseUsername = generateUsernameFromAccount(accountId)
    username = ensureUnique(baseUsername)

    // 4. Create or update royal identity
    IF existing == NULL THEN
        royalIdentity = {
            royalIdentityId: generateUUID(),
            accountId: accountId,
            username: username,
            usernameAssignedAt: now(),
            currentTitle: determineTitle(kLevel),
            currentTitleAssignedAt: now(),
            createdAt: now(),
            version: 1
        }
        db.insert(royalIdentity)
    ELSE
        existing.username = username
        existing.usernameAssignedAt = now()
        existing.version++
        db.update(existing)
        royalIdentity = existing
    END IF

    // 5. Record title history
    db.insert({
        historyId: generateUUID(),
        accountId: accountId,
        title: royalIdentity.currentTitle,
        kLevelAtAssignment: kLevel,
        tierAtAssignment: getTier(kLevel),
        assignedAt: now(),
        triggerEvent: "KLEVEL_PROMOTION_TO_L7",
        previousTitle: NULL
    })

    writeAudit("ROYAL_IDENTITY", "AssignRoyalUsername", accountId,
               "ASSIGN_USERNAME", "SUCCESS", {username: username})

    outbox.publish("royal.username.assigned", {
        accountId: accountId,
        username: username
    })

    RETURN royalIdentity
END
```

### 18.6 Team Name Assignment Algorithm

```
ALGORITHM: AssignTeamName
INPUT: accountId, teamName
OUTPUT: royalIdentity
BEGIN
    // 1. Verify participant is at Leadership Tier (L7+) (SRS-ROY-002)
    kLevel = kRewardsEngine.getKLevel(accountId)
    IF kLevel < 7 THEN
        THROW FORBIDDEN("Team name available only at Leadership Tier (L7+)")
    END IF

    // 2. Verify team name uniqueness (SRS-ROY-002 AC3)
    IF db.teamNameExists(teamName) THEN
        THROW CONFLICT("Team name already in use")
    END IF

    // 3. Assign team name
    royalIdentity = db.findRoyalIdentity(accountId)
    IF royalIdentity == NULL THEN
        THROW CONFLICT("Royal identity not yet created")
    END IF

    royalIdentity.teamName = teamName
    royalIdentity.teamNameAssignedAt = now()
    royalIdentity.version++
    db.update(royalIdentity)

    writeAudit("ROYAL_IDENTITY", "AssignTeamName", accountId,
               "ASSIGN_TEAM_NAME", "SUCCESS", {teamName: teamName})

    RETURN royalIdentity
END
```

```
ALGORITHM: UpdateTeamName
INPUT: accountId, newTeamName, governanceApprovalId
OUTPUT: royalIdentity
BEGIN
    // 1. Team name updates require governance approval (SRS-ROY-002 AC2)
    IF NOT administrationEngine.isGovernanceApproved("TEAM_NAME_UPDATE",
            {accountId: accountId, newTeamName: newTeamName}) THEN
        THROW FORBIDDEN("Team name update requires governance approval")
    END IF

    // 2. Verify uniqueness
    IF db.teamNameExists(newTeamName) THEN
        THROW CONFLICT("Team name already in use")
    END IF

    // 3. Update
    royalIdentity = db.findRoyalIdentity(accountId)
    oldTeamName = royalIdentity.teamName
    royalIdentity.teamName = newTeamName
    royalIdentity.version++
    db.update(royalIdentity)

    writeAudit("ROYAL_IDENTITY", "UpdateTeamName", accountId,
               "UPDATE_TEAM_NAME", "SUCCESS",
               {oldTeamName: oldTeamName, newTeamName: newTeamName})

    RETURN royalIdentity
END
```

### 18.7 Title Transition Algorithm

```
ALGORITHM: TransitionTitle
INPUT: accountId, newKLevel
OUTPUT: titleResult
BEGIN
    // 1. Determine new title from K-Level (SRS-ROY-003)
    newTitle = determineTitle(newKLevel)
    // KR-LVL-042 mapping:
    //   L1-6 → NORMAL
    //   L7-9 → PRINCE
    //   L10-12 → CROWN_PRINCE
    //   L13-15 → KING

    // 2. Get current royal identity
    royalIdentity = db.findRoyalIdentity(accountId)
    IF royalIdentity == NULL THEN
        // If no royal identity yet and newKLevel >= 7, create one
        IF newKLevel >= 7 THEN
            royalIdentity = assignRoyalUsername(accountId)
        ELSE
            RETURN {titleChanged: false, reason: "below_leadership_tier"}
        END IF
    END IF

    // 3. Check if title actually changed (SRS-ROY-004)
    IF royalIdentity.currentTitle == newTitle THEN
        RETURN {titleChanged: false, reason: "same_tier"}
    END IF

    // 4. Update title (automatic on promotion, no separate action) (SRS-ROY-004 AC4)
    oldTitle = royalIdentity.currentTitle
    royalIdentity.currentTitle = newTitle
    royalIdentity.currentTitleAssignedAt = now()
    royalIdentity.version++
    db.update(royalIdentity)

    // 5. Record title history (SRS-ROY-004 AC5)
    db.insert({
        historyId: generateUUID(),
        accountId: accountId,
        title: newTitle,
        kLevelAtAssignment: newKLevel,
        tierAtAssignment: getTier(newKLevel),
        assignedAt: now(),
        triggerEvent: "KLEVEL_PROMOTION",
        previousTitle: oldTitle
    })

    // 6. Username does NOT change on tier progression (SRS-ROY-001 AC2)
    // Only the title changes

    writeAudit("ROYAL_IDENTITY", "TransitionTitle", accountId,
               "TITLE_TRANSITION", "SUCCESS",
               {oldTitle: oldTitle, newTitle: newTitle, kLevel: newKLevel})

    outbox.publish("royal.title.transitioned", {
        accountId: accountId,
        oldTitle: oldTitle,
        newTitle: newTitle,
        username: royalIdentity.username,
        displayFormat: formatTitle(newTitle, royalIdentity.username)
    })

    RETURN {
        titleChanged: true,
        oldTitle: oldTitle,
        newTitle: newTitle,
        displayFormat: formatTitle(newTitle, royalIdentity.username)
    }
END
```

```
ALGORITHM: DetermineTitle
INPUT: kLevel
OUTPUT: title
BEGIN
    // GOVERNANCE PARAMETER mapping (KR-LVL-042)
    IF kLevel >= 1 AND kLevel <= 6 THEN
        RETURN "NORMAL"
    ELSE IF kLevel >= 7 AND kLevel <= 9 THEN
        RETURN "PRINCE"
    ELSE IF kLevel >= 10 AND kLevel <= 12 THEN
        RETURN "CROWN_PRINCE"
    ELSE IF kLevel >= 13 AND kLevel <= 15 THEN
        RETURN "KING"
    END IF
    RETURN "NORMAL"
END
```

```
ALGORITHM: FormatTitle
INPUT: title, username
OUTPUT: displayString
BEGIN
    SWITCH title DO
        CASE "NORMAL": RETURN username
        CASE "PRINCE": RETURN "Prince " + username
        CASE "CROWN_PRINCE": RETURN "Crown Prince " + username
        CASE "KING": RETURN "King " + username
    END SWITCH
END
```

### 18.8 Coronation Eligibility Algorithm

```
ALGORITHM: VerifyCoronationEligibility
INPUT: accountId, coronationYear
OUTPUT: {eligible: boolean, failingCriteria: list}
BEGIN
    failingCriteria = []

    // 1. Legacy Tier requirement (Level 13–15) (SRS-ROY-006 AC1)
    kLevel = kRewardsEngine.getKLevel(accountId)
    IF kLevel < 13 THEN
        failingCriteria.add("Not at Legacy Tier (Level 13–15): current Level " + kLevel)
        RETURN {eligible: false, failingCriteria: failingCriteria}
    END IF

    // 2. Active Status maintained for entire coronation year (SRS-ROY-006 AC1)
    activeStatus = kRewardsEngine.getActiveStatusForYear(accountId, coronationYear)
    IF NOT activeStatus.maintainedAllYear THEN
        failingCriteria.add("Active Status not maintained for entire coronation year")
    END IF

    // 3. Trust requirement (SRS-ROY-006 AC1)
    trustScore = trustEngine.getTrustScore(accountId)
    minTrustForCoronation = getMinCoronationTrust()  // GOVERNANCE PARAMETER
    IF trustScore < minTrustForCoronation THEN
        failingCriteria.add("Trust score " + trustScore + " < required " + minTrustForCoronation)
    END IF

    // 4. No active sanction (SRS-ROY-006 AC1)
    IF administrationEngine.isSanctioned(accountId) THEN
        failingCriteria.add("Active sanction on account")
    END IF

    // 5. Verify against platform records (SRS-ROY-006 AC2)
    // K-Level achievement
    kLevelVerified = kRewardsEngine.verifyKLevelAchievement(accountId)
    IF NOT kLevelVerified THEN
        failingCriteria.add("K-Level achievement not verified")
    END IF

    // Contribution records
    contributionVerified = kRewardsEngine.verifyContributionRecords(accountId, coronationYear)
    IF NOT contributionVerified THEN
        failingCriteria.add("Contribution records not verified")
    END IF

    // Leadership development
    leadershipVerified = kRewardsEngine.verifyLeadershipDevelopment(accountId)
    IF NOT leadershipVerified THEN
        failingCriteria.add("Leadership development not verified")
    END IF

    // 6. Anti-manipulation controls (SRS-ROY-006 AC3)
    manipulationCheck = checkCoronationManipulation(accountId, coronationYear)
    IF manipulationCheck.manipulated THEN
        failingCriteria.add("Coronation manipulation detected: " + manipulationCheck.reason)
    END IF

    eligible = failingCriteria.isEmpty()

    writeAudit("ROYAL_IDENTITY", "VerifyCoronationEligibility", accountId,
               "CORONATION_ELIGIBILITY", eligible ? "SUCCESS" : "FAILURE",
               {failingCriteria: failingCriteria})

    RETURN {eligible: eligible, failingCriteria: failingCriteria}
END
```

### 18.9 Coronation Algorithm

```
ALGORITHM: ExecuteCoronation
INPUT: accountId, coronationYear, categories, awards
OUTPUT: coronationRecord
BEGIN
    // 1. Verify eligibility (SRS-ROY-006)
    eligibility = verifyCoronationEligibility(accountId, coronationYear)
    IF NOT eligibility.eligible THEN
        THROW FORBIDDEN("Coronation eligibility not met: " + eligibility.failingCriteria)
    END IF

    // 2. Create coronation record
    coronationRecord = {
        coronationId: generateUUID(),
        accountId: accountId,
        coronationYear: coronationYear,
        kLevel: kRewardsEngine.getKLevel(accountId),
        eligibilityVerified: true,
        categories: categories,
        awards: awards,
        financialRewardAmount: 0,  // set below if applicable
        status: "VERIFIED",
        createdAt: now()
    }

    // 3. Process financial rewards from Allocation Pool (NOT reserve) (SRS-ROY-007 AC3)
    financialReward = calculateCoronationFinancialReward(categories)
    IF financialReward > 0 THEN
        // Fund from operations allocation within the 90% Allocation Pool
        settlement = walletEngine.executeSettlement({
            sourceEngine: "PLATFORM_FEE",
            sourceReference: "coronation-" + coronationRecord.coronationId,
            grossRevenue: 0,  // no GR for coronation
            deductions: 0,
            counterpartyId: accountId,
            idempotencyKey: "coronation-" + coronationRecord.coronationId
        })
        // Alternative: fund from operational allocation directly
        coronationRecord.financialRewardAmount = financialReward
        coronationRecord.settlementId = settlement.settlementId
    END IF

    // 4. Coronation does NOT change the royal title (SRS-ROY-007 AC4)
    // The title is determined by K-Level tier, not coronation (KR-1 Ch.53.4)

    // 5. Mark as coronated
    coronationRecord.status = "CORONATED"
    coronationRecord.coronatedAt = now()
    db.insert(coronationRecord)

    // 6. Update royal identity
    royalIdentity = db.findRoyalIdentity(accountId)
    royalIdentity.coronationEligible = true
    royalIdentity.version++
    db.update(royalIdentity)

    // 7. Notify participant
    communicationEngine.sendNotification(accountId, "CORONATION",
        "Coronation Recognition",
        "You have been coronated for " + coronationYear +
        ". Categories: " + categories.join(", "),
        "ROYAL_IDENTITY", coronationRecord.coronationId, "HIGH")

    writeAudit("ROYAL_IDENTITY", "ExecuteCoronation", accountId,
               "CORONATION", "SUCCESS",
               {year: coronationYear, categories: categories, financialReward: financialReward})

    outbox.publish("royal.coronation.completed", {
        coronationId: coronationRecord.coronationId,
        accountId: accountId,
        year: coronationYear
    })

    RETURN coronationRecord
END
```

### 18.10 Coronation Manipulation Detection

```
ALGORITHM: CheckCoronationManipulation
INPUT: accountId, coronationYear
OUTPUT: {manipulated: boolean, reason: string}
BEGIN
    // 1. Check for artificial nomination inflation (SRS-ROY-006 AC3)
    nominationCount = db.getNominationCount(accountId, coronationYear)
    expectedNominations = estimateExpectedNominations(accountId)
    IF nominationCount > expectedNominations * 3 THEN  // anomaly threshold
        RETURN {manipulated: true, reason: "nomination_inflation"}
    END IF

    // 2. Check for collusive nominations (SRS-ROY-006 AC3)
    nominators = db.getNominators(accountId, coronationYear)
    IF hasCollusivePattern(nominators) THEN
        RETURN {manipulated: true, reason: "collusive_nominations"}
    END IF

    // 3. Check for fraudulent achievement claims (SRS-ROY-006 AC3)
    achievementClaims = db.getAchievementClaims(accountId, coronationYear)
    FOR EACH claim IN achievementClaims DO
        IF NOT kRewardsEngine.verifyAchievement(claim) THEN
            RETURN {manipulated: true, reason: "fraudulent_achievement_claim: " + claim.id}
        END IF
    END FOR

    // 4. Check with Intelligence Engine for fraud signals
    fraudSignals = intelligenceEngine.checkFraudSignals({
        accountId: accountId,
        activityContext: {type: "CORONATION", year: coronationYear}
    })
    IF fraudSignals.isFraudulent THEN
        RETURN {manipulated: true, reason: "fraud_signals_detected"}
    END IF

    RETURN {manipulated: false, reason: "no_manipulation_detected"}
END
```

### 18.11 State Machines

#### 18.11.1 Title Transition State Machine

```
  [NORMAL] --promote to L7--> [PRINCE] --promote to L10--> [CROWN_PRINCE] --promote to L13--> [KING]
```

Title transitions are one-directional (upward) with K-Level promotion. A participant demoted below L7 would lose the title, but K-Level demotions are blocked by the Permanent Status Policy (KR-LVL-024, SRS-KRW-011).

#### 18.11.2 Coronation State Machine

```
  [NOMINATED] --eligibility verified--> [VERIFIED] --coronated--> [CORONATED]
      --eligibility failed--> [REJECTED]
```

### 18.12 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Username assignment automatic at L7; team name requires governance approval for updates; coronation requires eligibility verification. Titles are recognition only — no authority (SRS-ROY-005). |
| **Validation** | Username uniqueness; team name uniqueness; coronation eligibility criteria; K-Level verification |
| **Rate limiting** | Username assignment: 1 per account (immutable); team name update: 5/hour per governance; coronation: 1 per year per account |
| **Audit** | Username assignment, team name assignment/updates, title transitions, coronation eligibility, coronation execution — all logged |
| **Caching** | Royal identity (10min TTL); title mapping (1hr TTL, GOVERNANCE PARAMETER); coronation records (1hr TTL) |
| **Concurrency** | Royal identity update: OCC; title history: append-only; coronation: PCC (lock coronation record) |
| **Idempotency** | Coronation: "coronation-{coronationId}"; title transition: triggered by K-Level promotion event (idempotent via event ID) |
| **Retries** | Coronation settlement: 3x backoff; event publish: outbox |
| **Timeout** | Username assignment: 5s; title transition: 3s; coronation: 30s (includes verification) |
| **Failure handling** | Username collision → regenerate with suffix; coronation eligibility failure → reject with audit; coronation settlement failure → retry then flag |
| **Observability** | Metrics: username assignments, title transitions, coronations/year, coronation eligibility rate; Traces: title transition, coronation flow |
| **Security boundary** | mTLS internal; username immutability after assignment; anti-manipulation on coronation; financial rewards from Allocation Pool only (never reserve); titles confer no authority (KR-LVL-045) |

### 18.13 Sequence Diagram: Title Transition on K-Level Promotion

```
K-Rewards Engine    Royal Identity Subsystem    Communication Engine
      |                      |                          |
      |--promote to L7------->|                          |
      |                      |--assign royal username    |
      |                      |--determine title=PRINCE   |
      |                      |--update royal identity    |
      |                      |--record title history     |
      |                      |--publish title.transitioned|
      |                      |                   |--notify participant
      |<--promotion complete-|                          |
      |                      |                          |
      ... later: promote to L10 ...
      |--promote to L10------>|                          |
      |                      |--determine title=CROWN_PRINCE
      |                      |--update title (username unchanged)
      |                      |--record title history     |
      |                      |--publish title.transitioned|
      |                      |                   |--notify participant
      |<--promotion complete-|                          |
```

### 18.14 Governing Requirement Traceability

SRS-ROY-001–009; SAD-1 Ch.22; PLC-1 Ch.22; KR-1 KR-LVL-042–053, Ch.51–53, Ch.65.

---

# Part V — Engine Extension Framework

## Chapter 19 — Engine Extension Framework Design

### 19.1 Overview

The Engine Extension Framework enables the addition of new engines to the K-NETWORK platform without redesigning the entire platform (SAD-1 Ch.30–31; PLC-1 v2.0 Ch.12; SRS-ERG-001–003). The eleven current Core Engines are the current set, not a permanent architectural ceiling. Future engines shall be added through the Engine Extension Framework, consuming shared platform foundations rather than creating separate systems (PLC-1 v2.0 Ch.9, 12, 30.9).

Implements: SRS-ERG-001–003; SAD-1 Ch.30–31; PLC-1 Ch.12; BRD-1 §8.3.

**Key constraints for any new engine:**
1. Must consume shared platform foundations (Identity, Trust, K-Rewards, Wallet/Payments, Communication, Intelligence, Administration, Integration) — MUST NOT create separate identity, trust, rewards, wallet, or security systems (SRS-ERG-002 AC3).
2. Must register in the Engine Registry with defined boundaries and contracts (SRS-ERG-002 AC4).
3. Must integrate through the Integration Engine for external interactions — MUST NOT expose APIs directly to external systems (SRS-ERG-002 AC5; PLC-1 Ch.31.2).
4. Economic flows MUST conform to the 90/10 Principle if the engine generates revenue (SRS-ERG-002 AC6; SRS-WAL-006).
5. Must follow the full engine lifecycle through governance (SRS-ERG-003).

### 19.2 Engine Registry Data Model

The Engine Registry is the authoritative source of truth for engine boundaries, contracts, dependencies, and lifecycle status (SRS-ERG-001).

#### 19.2.1 EngineRegistryEntry

| Field | Type | Constraints | Description |
|---|---|---|---|
| `engineId` | UUID | PK | Engine identifier |
| `engineName` | string | not null, unique | Engine name (e.g., "Commerce", "Learning") |
| `engineSlug` | string | not null, unique | URL-safe identifier (e.g., "commerce", "learning") |
| `owner` | string | not null | Owning team/body |
| `tier` | enum | not null | `CORE_PLATFORM_ENGINE`, `FUTURE_ENGINE` |
| `boundaries` | JSON | not null | Defined boundaries (responsibilities and non-responsibilities) |
| `apiContracts` | JSON | not null | API contract references (OpenAPI 3.x spec URLs) |
| `eventContracts` | JSON | not null | Event contract references (schema registry references) |
| `dependencies` | JSON | not null | Dependencies on other engines (by engineId) |
| `sharedServicesUsed` | JSON | not null | Shared services consumed (Event Bus, Cache, Search, Secrets, Audit) |
| `lifecycleStatus` | enum | not null | `PROPOSED`, `EVALUATION`, `APPROVED`, `ACTIVE`, `DEPRECATED`, `RETIRED` |
| `version` | string | not null | Engine version (semver) |
| `revenueType` | enum | nullable | Revenue waterfall type (if generates revenue): `COMMERCE`, `SERVICES`, `LEARNING`, `PLATFORM_FEE`, `PARTNER`, `CUSTOM` |
| `conformsTo90_10` | boolean | not null | Whether economic flows conform to 90/10 |
| `createdAt` | timestamp | not null | Registration time |
| `launchedAt` | timestamp | nullable | Launch time |
| `deprecatedAt` | timestamp | nullable | Deprecation time |
| `retiredAt` | timestamp | nullable | Retirement time |
| `registryVersion` | integer | not null, default 1 | Registry entry version (for contract changes) |

#### 19.2.2 EngineContractVersion

| Field | Type | Constraints | Description |
|---|---|---|---|
| `contractVersionId` | UUID | PK | Contract version ID |
| `engineId` | UUID | FK → EngineRegistryEntry | Engine |
| `contractType` | enum | not null | `API`, `EVENT` |
| `specificationRef` | string | not null | Reference to spec (OpenAPI URL or schema registry ID) |
| `version` | string | not null | Contract version (semver) |
| `changeDescription` | text | not null | What changed |
| `approvedBy` | UUID | FK → Account | Governance approver |
| `createdAt` | timestamp | not null | Version time |

#### 19.2.3 EngineLifecycleEvent

| Field | Type | Constraints | Description |
|---|---|---|---|
| `eventId` | UUID | PK | Event ID |
| `engineId` | UUID | FK → EngineRegistryEntry, indexed | Engine |
| `lifecycleStage` | enum | not null | `PROPOSAL`, `EVALUATION`, `APPROVAL`, `LAUNCH`, `GOVERNANCE`, `DEPRECATION`, `RETIREMENT` |
| `description` | text | not null | Event description |
| `actorId` | UUID | FK → Account | Who triggered the event |
| `metadata` | JSON | nullable | Additional context |
| `createdAt` | timestamp | not null | Event time |

### 19.3 Engine Contract Specification

Every engine must satisfy the following contract to be registered:

```
ENGINE CONTRACT:
================

1. Engine Name: <unique name>
2. Owner: <team/body>
3. Boundaries:
   - Responsible for: <list of responsibilities>
   - NOT responsible for: <list of non-responsibilities>
4. API Contracts:
   - OpenAPI 3.x specification registered in Engine Registry
   - All APIs accessed internally via API Gateway (not directly by external systems)
5. Event Contracts:
   - Event schemas registered in schema registry
   - Events published to Event Bus with standard envelope
   - Event topics named: {engine}.{entity}.{event} (snake_case)
6. Dependencies:
   - Declared dependencies on other engines (must be acyclic)
   - Shared services used (Event Bus, Cache, Search, Secrets, Audit)
7. Data Ownership:
   - Engine owns its database
   - No engine directly accesses another engine's database
   - Cross-engine data access via API calls or events
8. Security:
   - mTLS internal communication
   - RBAC/ABAC authorization
   - Audit logging for all significant operations
9. Economic Conformance (if revenue-generating):
   - Revenue waterfall defined (GOVERNANCE PARAMETER)
   - 90/10 enforcement through Wallet/Payments Engine
   - No direct external payment processing
10. Observability:
    - Standard metrics exported
    - Correlation ID propagated
    - Health check endpoint
11. Deployment:
    - Containerized service
    - Deployed via platform deployment pipeline
    - Health-checked and auto-scaled
12. Lifecycle:
    - Follows full lifecycle: proposal → evaluation → approval → launch → governance → deprecation → retirement
```

### 19.4 Engine Proposal Algorithm

```
ALGORITHM: ProposeEngine
INPUT: proposal {engineName, owner, boundaries, apiContracts, eventContracts,
                 dependencies, sharedServicesUsed, revenueType}
OUTPUT: engineRegistryEntry
BEGIN
    // 1. Check engine name uniqueness
    IF db.engineNameExists(proposal.engineName) THEN
        THROW CONFLICT("Engine name already exists")
    END IF

    // 2. Validate dependencies are acyclic (SAD-1 Ch.30)
    IF hasCyclicDependencies(proposal.dependencies) THEN
        THROW VALIDATION_ERROR("Dependencies must be acyclic")
    END IF

    // 3. Validate shared foundations are consumed (SRS-ERG-002 AC3)
    requiredFoundations = ["Identity", "Trust", "K-Rewards", "Wallet/Payments",
                           "Communication", "Intelligence", "Administration",
                           "Integration"]
    FOR EACH foundation IN requiredFoundations DO
        IF NOT consumesFoundation(proposal, foundation) THEN
            THROW VALIDATION_ERROR("New engine must consume shared foundation: " + foundation)
        END IF
    END FOR

    // 4. Validate no separate systems created (SRS-ERG-002 AC3)
    IF createsSeparateSystem(proposal) THEN
        THROW VALIDATION_ERROR("New engine must not create separate identity/trust/rewards/wallet/security systems")
    END IF

    // 5. Validate external integration through Integration Engine (SRS-ERG-002 AC5)
    IF hasDirectExternalAPIs(proposal) THEN
        THROW VALIDATION_ERROR("New engine must integrate through Integration Engine, not expose APIs directly")
    END IF

    // 6. Validate 90/10 conformance if revenue-generating (SRS-ERG-002 AC6)
    IF proposal.revenueType != NULL THEN
        IF NOT conformsTo90_10(proposal) THEN
            THROW VALIDATION_ERROR("Revenue-generating engine must conform to 90/10 Principle")
        END IF
    END IF

    // 7. Create registry entry in PROPOSED state
    entry = {
        engineId: generateUUID(),
        engineName: proposal.engineName,
        engineSlug: slugify(proposal.engineName),
        owner: proposal.owner,
        tier: "FUTURE_ENGINE",
        boundaries: proposal.boundaries,
        apiContracts: proposal.apiContracts,
        eventContracts: proposal.eventContracts,
        dependencies: proposal.dependencies,
        sharedServicesUsed: proposal.sharedServicesUsed,
        lifecycleStatus: "PROPOSED",
        version: "0.1.0",
        revenueType: proposal.revenueType,
        conformsTo90_10: proposal.revenueType != NULL,
        createdAt: now(),
        registryVersion: 1
    }
    db.insert(entry)

    // 8. Record lifecycle event
    db.insert({
        eventId: generateUUID(),
        engineId: entry.engineId,
        lifecycleStage: "PROPOSAL",
        description: "Engine proposed: " + proposal.engineName,
        actorId: proposal.proposerId,
        createdAt: now()
    })

    writeAudit("ENGINE_REGISTRY", "ProposeEngine", entry.engineId,
               "PROPOSE", "SUCCESS", {engineName: proposal.engineName})

    RETURN entry
END
```

### 19.5 Engine Evaluation and Approval Algorithm

```
ALGORITHM: EvaluateEngine
INPUT: engineId
OUTPUT: evaluationResult
BEGIN
    entry = db.findEngineRegistryEntry(engineId)
    IF entry == NULL THEN THROW NOT_FOUND
    IF entry.lifecycleStatus != "PROPOSED" THEN THROW CONFLICT("Not in PROPOSED state")

    // 1. Move to EVALUATION
    entry.lifecycleStatus = "EVALUATION"
    db.update(entry)
    recordLifecycleEvent(engineId, "EVALUATION", "Engine under evaluation")

    // 2. Documented rationale (SRS-ERG-003 AC2)
    rationale = getEngineRationale(engineId)
    IF rationale == NULL THEN
        RETURN {approved: false, reason: "Documented rationale required"}
    END IF

    // 3. Boundary definition (SRS-ERG-003 AC2)
    IF NOT validateBoundaries(entry.boundaries) THEN
        RETURN {approved: false, reason: "Boundary definition incomplete"}
    END IF

    // 4. Contract definition (SRS-ERG-003 AC2)
    IF NOT validateContracts(entry.apiContracts, entry.eventContracts) THEN
        RETURN {approved: false, reason: "Contract definitions incomplete"}
    END IF

    // 5. Impact assessment (SRS-ERG-003 AC2)
    impactAssessment = performImpactAssessment(engineId)
    IF impactAssessment.hasBlockingIssues THEN
        RETURN {approved: false, reason: "Impact assessment found blocking issues"}
    END IF

    // 6. Architecture Review (governance) (SRS-ERG-003 AC3, PLC-1 Ch.12)
    governanceResult = administrationEngine.processGovernanceReview({
        policyType: "ENGINE_APPROVAL",
        changeRequest: {engineId: engineId, entry: entry}
    })
    IF governanceResult.status != "APPROVED" THEN
        RETURN {approved: false, reason: "Governance review not approved"}
    END IF

    // 7. Move to APPROVED
    entry.lifecycleStatus = "APPROVED"
    db.update(entry)
    recordLifecycleEvent(engineId, "APPROVAL", "Engine approved by governance")

    writeAudit("ENGINE_REGISTRY", "EvaluateEngine", engineId,
               "EVALUATE", "SUCCESS", {approved: true})

    RETURN {approved: true}
END
```

### 19.6 Engine Launch Algorithm

```
ALGORITHM: LaunchEngine
INPUT: engineId
OUTPUT: engineRegistryEntry
BEGIN
    entry = db.findEngineRegistryEntry(engineId)
    IF entry == NULL THEN THROW NOT_FOUND
    IF entry.lifecycleStatus != "APPROVED" THEN THROW CONFLICT("Not in APPROVED state")

    // 1. Register API contracts in gateway (SRS-ERG-001)
    FOR EACH apiContract IN entry.apiContracts DO
        apiGateway.registerRoute({
            engine: entry.engineSlug,
            spec: apiContract.specificationRef,
            version: apiContract.version
        })
    END FOR

    // 2. Register event contracts in schema registry
    FOR EACH eventContract IN entry.eventContracts DO
        schemaRegistry.registerSchema({
            subject: entry.engineSlug,
            schema: eventContract.schema,
            version: eventContract.version
        })
    END FOR

    // 3. Register event subscriptions
    FOR EACH eventContract IN entry.eventContracts DO
        eventBus.subscribe({
            topic: eventContract.topic,
            consumer: entry.engineSlug
        })
    END FOR

    // 4. Deploy engine service
    deploymentResult = deploymentService.deploy({
        engineId: engineId,
        engineName: entry.engineName,
        version: entry.version
    })
    IF NOT deploymentResult.success THEN
        THROW INTERNAL_ERROR("Engine deployment failed")
    END IF

    // 5. Activate in registry (SRS-ERG-003 AC4)
    entry.lifecycleStatus = "ACTIVE"
    entry.launchedAt = now()
    db.update(entry)
    recordLifecycleEvent(engineId, "LAUNCH", "Engine launched and activated")

    // 6. Publish engine launched event
    outbox.publish("registry.engine.launched", {
        engineId: engineId,
        engineName: entry.engineName,
        version: entry.version
    })

    writeAudit("ENGINE_REGISTRY", "LaunchEngine", engineId,
               "LAUNCH", "SUCCESS", {engineName: entry.engineName})

    RETURN entry
END
```

### 19.7 Engine Deprecation Algorithm

```
ALGORITHM: DeprecateEngine
INPUT: engineId, deprecationDate, retirementDate, migrationPlan
OUTPUT: engineRegistryEntry
BEGIN
    entry = db.findEngineRegistryEntry(engineId)
    IF entry == NULL THEN THROW NOT_FOUND
    IF entry.lifecycleStatus != "ACTIVE" THEN THROW CONFLICT("Not in ACTIVE state")

    // 1. Governance approval for deprecation (SRS-ERG-003 AC6)
    governanceResult = administrationEngine.processGovernanceReview({
        policyType: "ENGINE_DEPRECATION",
        changeRequest: {engineId: engineId, retirementDate: retirementDate}
    })
    IF governanceResult.status != "APPROVED" THEN
        THROW FORBIDDEN("Deprecation requires governance approval")
    END IF

    // 2. Validate migration plan (SRS-ERG-003 AC6)
    IF migrationPlan == NULL OR NOT validateMigrationPlan(migrationPlan) THEN
        THROW VALIDATION_ERROR("Migration plan required before deprecation")
    END IF

    // 3. Mark deprecated
    entry.lifecycleStatus = "DEPRECATED"
    entry.deprecatedAt = now()
    db.update(entry)
    recordLifecycleEvent(engineId, "DEPRECATION",
        "Engine deprecated. Retirement date: " + retirementDate)

    // 4. Notify dependent engines
    dependents = db.findDependentEngines(engineId)
    FOR EACH dependent IN dependents DO
        communicationEngine.sendNotification(dependent.owner, "ENGINE_DEPRECATION",
            "Engine " + entry.engineName + " is deprecated",
            "Engine " + entry.engineName + " will be retired on " + retirementDate +
            ". Migration plan: " + migrationPlan.summary,
            "ENGINE_REGISTRY", engineId, "HIGH")
    END FOR

    // 5. Add deprecation headers to API responses
    // (handled in API Gateway for deprecated engines)

    writeAudit("ENGINE_REGISTRY", "DeprecateEngine", engineId,
               "DEPRECATE", "SUCCESS",
               {retirementDate: retirementDate, dependents: dependents.size()})

    RETURN entry
END
```

### 19.8 Engine Retirement Algorithm

```
ALGORITHM: RetireEngine
INPUT: engineId
OUTPUT: engineRegistryEntry
BEGIN
    entry = db.findEngineRegistryEntry(engineId)
    IF entry == NULL THEN THROW NOT_FOUND
    IF entry.lifecycleStatus != "DEPRECATED" THEN THROW CONFLICT("Must be DEPRECATED before retirement")

    // 1. Verify deprecation period has passed (SRS-ERG-003 AC6)
    IF now() < entry.deprecatedAt + getMinDeprecationPeriod() THEN
        THROW CONFLICT("Minimum deprecation period not yet elapsed")
    END IF

    // 2. Verify all dependents have migrated
    dependents = db.findDependentEngines(engineId)
    FOR EACH dependent IN dependents DO
        IF NOT hasMigratedAway(dependent.engineId, engineId) THEN
            THROW CONFLICT("Dependent engine " + dependent.engineName +
                          " has not migrated away")
        END IF
    END FOR

    // 3. Preserve data and historical records (SRS-ERG-003 AC7)
    dataRetentionPlan = getDataRetentionPlan(engineId)
    archiveEngineData(engineId, dataRetentionPlan)

    // 4. Remove from active routing
    apiGateway.removeRoutes(entry.engineSlug)
    eventBus.unsubscribeAll(entry.engineSlug)

    // 5. Mark retired
    entry.lifecycleStatus = "RETIRED"
    entry.retiredAt = now()
    db.update(entry)
    recordLifecycleEvent(engineId, "RETIREMENT",
        "Engine retired. Data preserved per retention policy.")

    writeAudit("ENGINE_REGISTRY", "RetireEngine", engineId,
               "RETIRE", "SUCCESS", {engineName: entry.engineName})

    RETURN entry
END
```

### 19.9 Engine Lifecycle State Machine

```
Engine Lifecycle State Machine:
================================

  [PROPOSED] --evaluation passed--> [EVALUATION] --governance approved--> [APPROVED]
      --rejected--> [PROPOSED]
  [APPROVED] --deployed & registered--> [ACTIVE]
  [ACTIVE] --governance deprecation approved--> [DEPRECATED]
  [DEPRECATED] --deprecation period elapsed & dependents migrated--> [RETIRED]
  [ACTIVE] --critical issue--> [DEPRECATED] (emergency deprecation)
```

### 19.10 Dependency Validation Algorithm

```
ALGORITHM: ValidateDependencies
INPUT: engineId, dependencies
OUTPUT: {valid: boolean, cycles: list}
BEGIN
    // 1. Build dependency graph
    graph = buildDependencyGraph(engineId, dependencies)

    // 2. Check for cycles (DFS-based cycle detection)
    cycles = detectCycles(graph)

    IF NOT cycles.isEmpty() THEN
        RETURN {valid: false, cycles: cycles}
    END IF

    // 3. Verify all dependency engines exist and are ACTIVE or APPROVED
    FOR EACH dep IN dependencies DO
        depEntry = db.findEngineRegistryEntry(dep.engineId)
        IF depEntry == NULL THEN
            RETURN {valid: false, cycles: [],
                    error: "Dependency engine not found: " + dep.engineId}
        END IF
        IF depEntry.lifecycleStatus NOT IN ["ACTIVE", "APPROVED"] THEN
            RETURN {valid: false, cycles: [],
                    error: "Dependency engine not active: " + depEntry.engineName}
        END IF
    END FOR

    RETURN {valid: true, cycles: []}
END
```

### 19.11 Impact Assessment Algorithm

```
ALGORITHM: PerformImpactAssessment
INPUT: engineId
OUTPUT: impactAssessment
BEGIN
    entry = db.findEngineRegistryEntry(engineId)
    assessment = {
        engineId: engineId,
        affectedEngines: [],
        sharedServiceImpact: {},
        economicImpact: {},
        securityImpact: {},
        hasBlockingIssues: false
    }

    // 1. Identify affected engines (reverse dependencies)
    assessment.affectedEngines = db.findDependentEngines(engineId)

    // 2. Assess shared service impact
    FOR EACH service IN entry.sharedServicesUsed DO
        assessment.sharedServiceImpact[service] = assessSharedServiceImpact(service, entry)
    END FOR

    // 3. Assess economic impact (if revenue-generating)
    IF entry.revenueType != NULL THEN
        assessment.economicImpact = assessEconomicImpact(entry)
        IF NOT entry.conformsTo90_10 THEN
            assessment.hasBlockingIssues = true
        END IF
    END IF

    // 4. Assess security impact
    assessment.securityImpact = assessSecurityImpact(entry)
    IF assessment.securityImpact.createsSeparateSystem THEN
        assessment.hasBlockingIssues = true
    END IF

    RETURN assessment
END
```

### 19.12 Current Eleven Core Engines (Registry Entries)

The Engine Registry contains the following eleven Core Platform Engines:

| # | Engine Name | Owner | Revenue Type | Key Dependencies |
|---|---|---|---|---|
| 1 | Identity | Platform Foundation | — | — |
| 2 | Trust | Platform Foundation | — | Identity |
| 3 | Commerce | Marketplace | COMMERCE | Identity, Trust, K-Rewards, Wallet, Communication, Intelligence, Administration, Integration |
| 4 | Services | Marketplace | SERVICES | Identity, Trust, K-Rewards, Wallet, Communication, Intelligence, Administration, Integration |
| 5 | K-Rewards | Platform Foundation | — | Identity, Trust, Intelligence, Administration |
| 6 | Wallet/Payments | Platform Foundation | — | Identity, Trust, K-Rewards, Integration, Administration |
| 7 | Communication | Platform Foundation | — | Identity, Trust, K-Rewards |
| 8 | Intelligence | Platform Foundation | — | All engines (signal source) |
| 9 | Administration | Platform Foundation | — | Identity, Trust, K-Rewards, Intelligence |
| 10 | Integration | Platform Foundation | PARTNER | Identity, Trust, Wallet, Administration |
| 11 | Learning | Marketplace | LEARNING | Identity, Trust, K-Rewards, Wallet, Communication, Intelligence, Administration, Integration |

### 19.13 Cross-Cutting Controls

| Control | Specification |
|---|---|
| **Authorization** | Engine proposal, evaluation, approval, deprecation, and retirement all require governance approval. Only governance-authorized users can modify the Engine Registry. |
| **Validation** | Engine name uniqueness; dependency acyclicity; shared foundation consumption; 90/10 conformance; no separate systems; no direct external APIs |
| **Rate limiting** | Engine proposal: 5/day per user; contract version updates: 10/hour per engine |
| **Audit** | All registry changes, lifecycle events, contract versions, deployments — logged and versioned |
| **Caching** | Engine Registry entries (5min TTL, event-driven invalidation on change); API route table (1min TTL) |
| **Concurrency** | Registry entry update: OCC; lifecycle state transition: PCC (lock entry); contract version: append-only |
| **Idempotency** | Lifecycle events: UUID; deployment: "deploy-{engineId}-{version}" |
| **Retries** | Deployment: 3x backoff; event subscription: 3x backoff; schema registration: 3x backoff |
| **Timeout** | Proposal: 10s; evaluation: 30s; launch (deployment): 300s; deprecation: 10s; retirement: 60s |
| **Failure handling** | Deployment failure → rollback, keep APPROVED status; deprecation before migration plan → block; retirement before dependents migrate → block |
| **Observability** | Metrics: engine count, lifecycle transitions, deployment success rate, contract version changes; Traces: lifecycle flow |
| **Security boundary** | mTLS internal; governance approval for all lifecycle changes; acyclic dependency enforcement; 90/10 conformance check; no direct external API exposure |

### 19.14 Sequence Diagram: New Engine Lifecycle

```
Product Mgr    Engine Registry    Governance    Deployment    API Gateway
     |                |                |              |              |
     |--propose engine->|              |              |              |
     |                |--validate      |              |              |
     |                |--check deps    |              |              |
     |                |--check foundations            |              |
     |                |--check 90/10   |              |              |
     |<--proposed-----|              |              |              |
     |                |                |              |              |
     |--request evaluation->|          |              |              |
     |                |--evaluate      |              |              |
     |                |--impact assessment             |              |
     |                |--governance review------------>|              |
     |                |<--approved-------------------|              |
     |<--approved----|              |              |              |
     |                |                |              |              |
     |--launch------->|              |              |              |
     |                |--register API contracts------->|------------>|
     |                |--register event schemas        |              |
     |                |--deploy engine---------------->|              |
     |                |<--deployed-------------------|              |
     |                |--activate in registry         |              |
     |<--launched-----|              |              |              |
     |                |                |              |              |
     ... later: deprecation and retirement ...
```

### 19.15 Governing Requirement Traceability

SRS-ERG-001–003; SAD-1 Ch.30–31; PLC-1 Ch.9, 12, 30.9, 31.2; BRD-1 §8.3; SRS-WAL-006 (90/10 conformance).

---

# Part VI — Cross-Cutting Design and Traceability

## Chapter 20 — Security and Performance Design

### 20.1 Overview

This chapter consolidates the cross-cutting security and performance design across all eleven engines. While Chapter 3 defined the cross-cutting design controls at the platform level, this chapter specifies how each engine applies and extends those controls, providing per-engine security boundaries and performance targets (SAD-1 Ch.24–29; PLC-1 Ch.27, 33; SRS-NFR-001–014).

Implements: SRS-NFR-001–014; SAD-1 Ch.24–29; PLC-1 Ch.27, 33; KR-1 KR-FRD-001–012.

### 20.2 Security Architecture Summary

The platform follows a **zero-trust security model** (SAD-1 Principle 5; ADR-008):

1. **Never trust, always verify** — every request is authenticated and authorized, regardless of source.
2. **Least privilege** — every component and user has only the access they need.
3. **Assume breach** — systems are designed to limit blast radius if compromised.
4. **Encrypt everywhere** — data is encrypted in transit (mTLS) and at rest.
5. **Continuous verification** — trust is continuously evaluated, not granted permanently.

### 20.3 Per-Engine Security Boundaries

| Engine | Security Boundary | Authorization Model | Key Security Controls |
|---|---|---|---|
| **Identity** | Account and authentication data | RBAC + ABAC (KYC tier-based access) | Password hashing (bcrypt/argon2), MFA enforcement, session token rotation, KYC tier gating |
| **Trust** | Trust Score and signals | RBAC (own account, admin override) | Signal source validation, trust gate enforcement, anti-manipulation |
| **Commerce** | Marketplace transactions | RBAC (vendor owns products, customer owns cart/orders) | KYC/AML at checkout, fraud detection, escrow for payments, inventory integrity |
| **Services** | Professional services transactions | RBAC (provider owns listings/contracts, client owns requests) | Trust ≥ 40 for providers, escrow protection, milestone integrity |
| **K-Rewards** | K-Points, K-Levels, Reward Pool | Sole authority — no other engine writes | Genuine activity validation, fraud detection, GOVERNANCE PARAMETER config, hash-chained audit |
| **Wallet/Payments** | Wallet balances, transactions, settlements | Sole wallet authority — no other engine modifies wallets | Strong-consistency DB, MFA for withdrawals, AML monitoring, 90/10 enforcement, reserve protection |
| **Communication** | Notifications, messages, announcements | RBAC (own messages, admin announcements) | Abuse filtering, content policy, rate limiting on messaging |
| **Intelligence** | Behavioral signals, recommendations, fraud signals | RBAC (own analytics, admin platform analytics) | Personalization consent, fraud signal non-disclosure (KR-FRD-008), access-controlled analytics |
| **Administration** | Governance, policy, moderation, sanctions, audit | RBAC (Platform Admin, Governance Body, Compliance Officer, Security Officer) | Human-in-the-loop for fraud determinations, non-waivable appeal rights, immutable audit log |
| **Integration** | Partner APIs, webhooks, external systems | OAuth 2.0/OIDC or API keys with least-privilege scopes | API gateway as sole external boundary, tenant isolation, HMAC webhook signatures, rate limiting |
| **Learning** | Courses, content, assessments, certificates | RBAC (instructor owns courses, learner owns progress) | Trust ≥ 40 for instructors, external media referenced not stored (ADR-005), assessment anti-gaming, certificate verification |

### 20.4 Authorization Design (4-Layer Model)

Every API request passes through four authorization layers (defined in Chapter 3, applied per engine):

```
ALGORITHM: AuthorizeRequest
INPUT: request, engine, resource, action
OUTPUT: {authorized: boolean, reason: string}
BEGIN
    // Layer 1: Gateway RBAC
    IF NOT gatewayRbac.check(request.role, engine, action) THEN
        RETURN {authorized: false, reason: "gateway_rbac_denied"}
    END IF

    // Layer 2: Resource-Level RBAC (ownership)
    IF NOT resourceRbac.check(request.accountId, resource, action) THEN
        RETURN {authorized: false, reason: "resource_rbac_denied"}
    END IF

    // Layer 3: Row-Level Security (data-level)
    IF NOT rowLevelSecurity.check(request.accountId, resource, request.tenantContext) THEN
        RETURN {authorized: false, reason: "rls_denied"}
    END IF

    // Layer 4: Attribute-Based Access Control (contextual)
    IF NOT abac.check(request.accountId, resource, action, request.context) THEN
        RETURN {authorized: false, reason: "abac_denied"}
    END IF

    RETURN {authorized: true}
END
```

**Per-engine ABAC attributes:**

| Engine | ABAC Attributes |
|---|---|
| Identity | KYC tier, account status, MFA enrollment |
| Trust | Trust Score threshold, trust gate status |
| Commerce | KYC tier for checkout, vendor status, inventory ownership |
| Services | Trust ≥ 40 for provider, contract status, milestone status |
| K-Rewards | Trust gate for accrual, sanction status, active status |
| Wallet/Payments | KYC tier for deposit/withdrawal, MFA for withdrawal, wallet status |
| Communication | Trust ≥ 30 for messaging, personalization consent |
| Intelligence | Personalization consent, analytics access level |
| Administration | Governance role, compliance officer role, appeal authority |
| Integration | Partner scopes, tenant context, rate limit status |
| Learning | Trust ≥ 40 for instructor, enrollment status, assessment attempt limit |

### 20.5 Validation Design (4-Layer Model)

Every input passes through four validation layers (defined in Chapter 3):

```
ALGORITHM: ValidateInput
INPUT: input, schema, businessRules, securityRules
OUTPUT: {valid: boolean, errors: list}
BEGIN
    errors = []

    // Layer 1: Schema validation (type, format, required fields)
    schemaErrors = validateSchema(input, schema)
    errors.addAll(schemaErrors)

    // Layer 2: Business rule validation (domain logic)
    businessErrors = validateBusinessRules(input, businessRules)
    errors.addAll(businessErrors)

    // Layer 3: State validation (current state allows this operation)
    stateErrors = validateState(input)
    errors.addAll(stateErrors)

    // Layer 4: Security validation (injection, XSS, path traversal, etc.)
    securityErrors = validateSecurity(input, securityRules)
    errors.addAll(securityErrors)

    IF errors.isEmpty() THEN
        RETURN {valid: true, errors: []}
    ELSE
        RETURN {valid: false, errors: errors}
    END IF
END
```

### 20.6 Encryption Design

| Layer | Encryption | Standard |
|---|---|---|
| In transit (internal) | mTLS between all services | TLS 1.3, mutual authentication via service mesh |
| In transit (external) | TLS for all external API calls | TLS 1.2+ |
| At rest (databases) | Transparent data encryption | AES-256 |
| At rest (secrets) | Vault-managed encryption | AES-256-GCM, auto-rotation |
| At rest (backups) | Encrypted backups | AES-256 |
| PII fields | Field-level encryption | AES-256 for PII columns (SSN, payment methods) |
| API keys/secrets | Hashed at rest | SHA-256 (never store plaintext) |
| Audit log | Hash-chained | SHA-256 per record, chain to previous hash |

### 20.7 Threat Model Summary

| Threat | Affected Engines | Mitigation |
|---|---|---|
| Unauthorized access | All | 4-layer authorization, zero-trust, RBAC/ABAC, least privilege |
| Credential theft | Identity, Integration | MFA, token rotation, API key hashing, OAuth/OIDC |
| Data leakage | All, especially Intelligence | Tenant isolation, RLS, personalization consent, access control |
| Injection attacks | All | Input validation (Layer 4 security validation), parameterized queries, output encoding |
| Fraud (artificial transactions) | Commerce, Services, K-Rewards, Learning | Multi-signal fraud detection, corroboration (KR-FRD-002), human review, sanctions |
| Ring fraud | K-Rewards | Ring fraud detection, graph analysis, phantom account detection, circular referral detection |
| Assessment gaming | Learning | Anti-gaming detection, proxy completion detection, answer sharing detection |
| Review manipulation | Commerce, Services, Learning | Multi-signal detection, moderation, sanction for manipulation |
| Economic attacks (over-allocation, circular funding) | Wallet/Payments, K-Rewards | 90/10 enforcement, allocation validation, reconciliation, reserve protection |
| Webhook spoofing | Integration | HMAC signature verification |
| Rate limit abuse | Integration, all external-facing | Token bucket rate limiting per partner and per API |
| Privilege escalation | Administration, all | RBAC with least privilege, governance approval for admin actions |
| Audit tampering | Administration | Hash-chained append-only audit log, independent audit access |

### 20.8 Performance Design

### 20.9 Performance Targets Per Engine

| Engine | Key Operation | Latency Target (p95) | Throughput Target |
|---|---|---|---|
| Identity | Authenticate | < 200ms | 1000 auth/sec |
| Identity | Register account | < 500ms | 50 reg/sec |
| Trust | Get Trust Score | < 50ms (cached) | 5000/sec |
| Commerce | Search products | < 200ms | 100 searches/sec |
| Commerce | Checkout | < 1s | 50 checkouts/sec |
| Commerce | Add to cart | < 100ms | 200/sec |
| Services | Search services | < 200ms | 50 searches/sec |
| Services | Submit proposal | < 300ms | 20/sec |
| K-Rewards | Accrue K-Points | < 100ms | 500/sec |
| K-Rewards | Get K-Level | < 50ms (cached) | 1000/sec |
| K-Rewards | Monthly cycle (batch) | < 30min | 1 cycle/month |
| Wallet | Process payment | < 500ms | 100/sec |
| Wallet | Execute settlement | < 1s | 50/sec |
| Wallet | Get balance | < 50ms | 1000/sec |
| Communication | Send notification | < 200ms | 500/sec |
| Communication | Send message | < 200ms | 200/sec |
| Intelligence | Generate recommendations | < 500ms | 50/sec |
| Intelligence | Search ranking | < 200ms | 100/sec |
| Intelligence | Fraud detection | < 500ms | 200/sec |
| Administration | Policy enforcement | < 100ms | 1000/sec |
| Administration | Moderation screening | < 2s | 50/sec |
| Integration | API request (end-to-end) | < 500ms | Configurable per partner |
| Integration | Webhook delivery | < 5s (including retry) | 100/sec |
| Learning | Enroll in course | < 1s (includes payment) | 50/sec |
| Learning | Update progress | < 100ms | 500/sec |
| Learning | Submit assessment | < 500ms | 100/sec |
| Learning | External media embed | < 200ms (metadata) | 200/sec |

### 20.10 Caching Strategy Per Engine

| Engine | Cacheable Data | TTL | Invalidation Strategy |
|---|---|---|---|
| Identity | Account profile | 10min | Event-driven (account.updated) |
| Trust | Trust Score | 5min | Event-driven (trust.score.changed) |
| Commerce | Product catalogue | 15min | Event-driven (product.updated) |
| Commerce | Search results | 60s | TTL expiry |
| Services | Service listings | 15min | Event-driven (listing.updated) |
| K-Rewards | K-Level | 10min | Event-driven (klevel.promoted) |
| K-Rewards | Ring contribution | Per-cycle | Invalidated on cycle reset |
| Wallet | Wallet balances | **NOT cached** | Strong consistency required |
| Wallet | Allocation rates | 1hr | Event-driven (governance.policy_changed) |
| Communication | Notification preferences | 5min | Event-driven (preferences.updated) |
| Intelligence | Recommendations | 1hr | TTL expiry |
| Intelligence | Analytics snapshots | 1hr | TTL expiry |
| Administration | Policy definitions | 1hr | Event-driven (policy.changed) |
| Administration | Compliance status | 5min | Event-driven (compliance.updated) |
| Integration | API client config | 5min | Event-driven (client.updated) |
| Integration | API version status | 1hr | Event-driven (version.changed) |
| Learning | Course catalogue | 15min | Event-driven (course.updated) |
| Learning | Instructor profiles | 10min | Event-driven (instructor.updated) |
| Learning | Progress | **NOT cached** | Strong consistency required |

### 20.11 Concurrency Strategy Per Engine

| Engine | Concurrency Pattern | Rationale |
|---|---|---|
| Identity | OCC (account updates), PCC (session creation) | Account updates are low-contention; sessions need consistency |
| Trust | OCC (trust score updates), append-only (signals) | Signals are append-only; score updates use OCC |
| Commerce | OCC (product/cart updates), PCC (checkout, inventory reservation) | Checkout and inventory need strong consistency |
| Services | OCC (contract/milestone updates), PCC (proposal acceptance) | Proposal acceptance needs locking |
| K-Rewards | Append-only (ledger), OCC (lifetime stats), PCC (reward pool during cycle) | Ledger is append-only; pool locked during cycle |
| Wallet | PCC (all balance changes) | Financial data requires strong consistency |
| Communication | Append-only (notifications, messages), OCC (preferences) | Notifications are append-only |
| Intelligence | Append-only (signals), OCC (snapshots) | Signals are append-only |
| Administration | Append-only (audit log), OCC (governance review, sanctions) | Audit is append-only |
| Integration | Stateless (API requests), OCC (webhook delivery) | API requests are stateless |
| Learning | OCC (course edits, progress), PCC (enrollment) | Enrollment needs consistency (prevent double enrollment) |

### 20.12 Idempotency Strategy Per Engine

| Engine | Idempotency Key Pattern |
|---|---|
| Identity | "register-{accountId}", "auth-{sessionId}" |
| Commerce | "checkout-{cartId}", "order-{orderId}", "settle-{orderId}" |
| Services | "proposal-accept-{proposalId}", "milestone-settle-{milestoneId}" |
| K-Rewards | "accrue-{evidenceRef}", "reverse-{evidenceRef}", "reward-{cycleId}-{accountId}" |
| Wallet | "deposit-{idempotencyKey}", "withdraw-{idempotencyKey}", "settle-{sourceReference}" |
| Communication | "contribution-kp-{contributionId}" |
| Intelligence | "analytics-{subjectType}-{subjectId}-{period}" |
| Administration | "sanction-{investigationId}", "dispute-{disputeId}" |
| Integration | "partner-txn-{idempotencyKey}", "webhook-{deliveryId}" |
| Learning | "enroll-{learnerId}-{courseId}", "learning-settle-{enrollmentId}", "course-completion-{enrollmentId}", "assessment-pass-{attemptId}", "path-completion-{pathId}-{learnerId}" |

### 20.13 Failure Handling Strategy Per Engine

| Engine | Failure Scenario | Handling Strategy |
|---|---|---|
| Identity | Authentication service down | Graceful degradation (cached sessions), read-only mode |
| Trust | Trust Score unavailable | Use cached score, degrade gracefully |
| Commerce | Payment failure | Order stays pending, retry payment, notify customer |
| Commerce | Inventory service down | Disable checkout, show "temporarily unavailable" |
| Services | Escrow funding failure | Contract cancelled, notify both parties |
| K-Rewards | Accrual failure | Reject with audit, source engine handles rejection |
| K-Rewards | Monthly cycle stage failure | Pause cycle, alert, manual intervention |
| Wallet | External payment failure | Transaction FAILED, no balance change, retry |
| Wallet | Settlement failure | Retry (3x), then flag for manual review |
| Wallet | Reconciliation failure | Halt distribution, alert administrators |
| Communication | Channel delivery failure | Retry per channel, mark partial delivery |
| Intelligence | Recommendation failure | Fallback to generic recommendations |
| Intelligence | Fraud detection failure | Log and continue (do not block legitimate activity) |
| Administration | Policy enforcement failure | Fail-closed for compliance, fail-open for non-critical |
| Administration | Sanction execution failure | Rollback, alert, manual intervention |
| Integration | Webhook delivery failure | Retry with exponential backoff (5x), then exhaust |
| Integration | External payment timeout | Return failure to caller, no balance change |
| Learning | Payment failure | Enrollment blocked, notify learner |
| Learning | External media unavailable | Show placeholder, retry embed |
| Learning | Assessment fraud detection failure | Block submission, flag for review |

### 20.14 Observability Design

### 20.15 Standard Metrics Per Engine

Every engine exports the following standard metrics:

| Metric Category | Metrics |
|---|---|
| **Request metrics** | requests/sec, request duration (p50/p95/p99), error rate, status code distribution |
| **Business metrics** | Engine-specific (e.g., orders/sec for Commerce, K-Points accrued/sec for K-Rewards) |
| **Resource metrics** | CPU, memory, disk, network, connection pool usage |
| **Dependency metrics** | Downstream call latency, downstream error rate, circuit breaker state |
| **Cache metrics** | Hit rate, miss rate, eviction count, cache size |
| **Queue metrics** | Queue depth, processing latency, DLQ depth |

### 20.16 Correlation ID Propagation

Every request and event carries a correlation ID for distributed tracing:

```
Correlation ID Flow:
====================

1. API Gateway generates correlationId on inbound request
2. correlationId passed in HTTP header: X-Correlation-Id
3. correlationId propagated to all downstream engine calls (HTTP header)
4. correlationId included in all event bus messages (envelope.correlationId)
5. correlationId included in all audit log records
6. correlationId included in all log entries (structured logging)
7. correlationId preserved across async event consumption
```

### 20.17 Distributed Tracing

| Engine | Key Traces |
|---|---|
| Identity | Registration, authentication, KYC submission |
| Commerce | Checkout flow, order fulfillment, refund |
| Services | Proposal acceptance, milestone delivery, settlement |
| K-Rewards | K-Points accrual, K-Level promotion, monthly cycle |
| Wallet | Deposit, withdrawal, settlement, reversal |
| Learning | Enrollment, completion, assessment submission |
| Integration | Partner transaction, webhook delivery |

### 20.18 Performance Optimization Patterns

| Pattern | Application |
|---|---|
| **Read-through cache** | Product catalogue, course catalogue, user profiles |
| **Write-behind cache** | Not used for financial data (Wallet); used for analytics counters |
| **Cache-aside** | Default pattern for most cached data |
| **Event-driven cache invalidation** | Cache entries invalidated when source data changes via events |
| **Database read replicas** | Read-heavy queries (search, catalogue, analytics) route to replicas |
| **Connection pooling** | All engines use database connection pools |
| **Async processing** | Non-critical operations processed asynchronously via event bus |
| **Batch processing** | Monthly reward cycle, analytics computation, bulk notifications |
| **Pagination** | All list APIs support pagination to limit response size |
| **CDN** | Static assets, external media references, course thumbnails |
| **Circuit breaker** | All inter-engine calls protected by circuit breakers |
| **Bulkhead** | Thread/connection pool isolation per engine to prevent cascading failures |

### 20.19 Scalability Design

| Dimension | Strategy |
|---|---|
| Horizontal scaling | All engines are stateless services that scale horizontally behind load balancers |
| Database scaling | Read replicas for read-heavy engines; sharding for high-volume engines (Commerce, K-Rewards ledger) |
| Event bus scaling | Partitioned topics by partition key (accountId) for parallel consumption |
| Cache scaling | Distributed cache cluster, auto-scaled |
| Search scaling | Distributed search index, auto-scaled |
| Graph DB scaling | K-Rings graph DB clustered for read scaling |
| API gateway scaling | Auto-scaled based on request volume |
| Multi-region readiness | Architecture supports future multi-region deployment (SAD-1 Ch.28); data replication and region-aware routing |

### 20.20 Governing Requirement Traceability

SRS-NFR-001–014; SAD-1 Ch.24–29; PLC-1 Ch.27, 33; KR-1 KR-FRD-001–012; SRS-ERG-002 (security conformance for new engines).

---

## Chapter 21 — Traceability Matrices

### 21.1 Overview

This chapter provides traceability matrices linking SDD-1 design components to their governing sources: SRS-1 requirements, SAD-1 architecture components, PLC-1 constitutional provisions, and KR-1 policy rules. These matrices ensure every design decision is grounded in an authoritative source and every requirement has a corresponding design.

### 21.2 SRS-1 → SDD-1 Traceability Matrix

| SRS-1 Requirement | SRS-1 Title | SDD-1 Chapter | SDD-1 Design Component |
|---|---|---|---|
| SRS-IDM-001 | Account Registration | Ch. 6 | RegisterAccount algorithm, Account data model |
| SRS-IDM-002 | Account Lifecycle | Ch. 6 | Account lifecycle state machine |
| SRS-IDM-003 | MFA | Ch. 6 | Authenticate algorithm, MFAEnrollment data model |
| SRS-IDM-004 | Session Management | Ch. 6 | ValidateSession algorithm, Session data model |
| SRS-IDM-005 | Tiered KYC | Ch. 6 | SubmitKYC, ReviewKYC algorithms, KYCVerification data model |
| SRS-IDM-006 | AML Monitoring | Ch. 6 | CheckDuplicateIdentity algorithm, AML integration |
| SRS-IDM-007 | Duplicate Account Detection | Ch. 6 | CheckDuplicateIdentity algorithm |
| SRS-TRU-001 | Trust Score | Ch. 7 | TrustScore data model, Trust Score calculation algorithm |
| SRS-TRU-002 | Trust Gating | Ch. 7 | Trust gate evaluation algorithm |
| SRS-TRU-003 | Trust Signals | Ch. 7 | Trust signal submission algorithm, TrustSignal data model |
| SRS-TRU-004 | Trust Recovery | Ch. 7 | Trust recovery algorithm, TrustRecovery data model |
| SRS-TRU-005 | Trust and Dispute Signals | Ch. 7, Ch. 14 | Trust signal sources table, ResolveDispute algorithm |
| SRS-COM-001 | Vendor Registration | Ch. 8 | Vendor onboarding workflow, Vendor data model |
| SRS-COM-002 | Vendor Storefront | Ch. 8 | Storefront component, Vendor data model |
| SRS-COM-003 | Product Creation | Ch. 8 | Product data model, ProductVariant data model |
| SRS-COM-004 | Product Variants | Ch. 8 | ProductVariant data model |
| SRS-COM-005 | Inventory Management | Ch. 8 | Inventory data model, reservation/release/consume algorithms |
| SRS-COM-006 | Product Search | Ch. 8, Ch. 13 | Search Service integration, RankSearchResults algorithm |
| SRS-COM-007 | Product Discovery | Ch. 8, Ch. 13 | Discovery component, GenerateRecommendations algorithm |
| SRS-COM-008 | Cart Management | Ch. 8 | Cart, CartItem data models, add to cart workflow |
| SRS-COM-009 | Checkout | Ch. 8 | Checkout workflow, multi-vendor order splitting |
| SRS-COM-010 | Order Management | Ch. 8 | Order data model, Order state machine |
| SRS-COM-011 | Multi-Vendor Orders | Ch. 8 | Multi-vendor order splitting in checkout workflow |
| SRS-COM-012 | Fulfilment | Ch. 8 | Shipment data model, Shipment state machine |
| SRS-COM-013 | Shipping | Ch. 8 | Shipment data model, shipping integration |
| SRS-COM-014 | Returns | Ch. 8 | Return data model, Return state machine |
| SRS-COM-015 | Refunds | Ch. 8, Ch. 11 | Refund algorithm (Commerce), ProcessRefund (Wallet) |
| SRS-COM-016 | Disputes | Ch. 8, Ch. 14 | Dispute workflow, Dispute state machine, ResolveDispute algorithm |
| SRS-COM-017 | Ratings and Reviews | Ch. 8 | Review data model, review submission algorithm |
| SRS-COM-018 | Promotions | Ch. 8 | Promotion data model, promotion validation algorithm |
| SRS-COM-019 | Vendor Settlement | Ch. 8, Ch. 11 | Settlement algorithm (Commerce), ExecuteSettlement (Wallet) |
| SRS-COM-020 | Order Fulfilment | Ch. 8 | Fulfilment workflow, Shipment state machine |
| SRS-COM-021 | Vendor Analytics | Ch. 8, Ch. 13 | Analytics component, ComputeAnalytics algorithm |
| SRS-COM-022 | Commerce Fraud Detection | Ch. 8, Ch. 13 | Fraud detection integration, DetectFraudSignals algorithm |
| SRS-SVC-001 | Provider Registration | Ch. 9 | OnboardProvider algorithm, Provider data model |
| SRS-SVC-002 | Provider Profiles | Ch. 9 | Provider data model, profile display |
| SRS-SVC-003 | Service Listings | Ch. 9 | ServiceListing data model |
| SRS-SVC-004 | Service Packages | Ch. 9 | ServicePackage data model |
| SRS-SVC-005 | Portfolios | Ch. 9 | PortfolioItem data model |
| SRS-SVC-006 | Service Requests | Ch. 9 | ServiceRequest data model, ServiceRequest state machine |
| SRS-SVC-007 | Proposals | Ch. 9 | Proposal data model, SubmitProposal algorithm |
| SRS-SVC-008 | Proposal Acceptance | Ch. 9 | AcceptProposal algorithm, Contract data model |
| SRS-SVC-009 | Bookings | Ch. 9 | Booking component, scheduling |
| SRS-SVC-010 | Contracts | Ch. 9 | Contract data model, Contract state machine |
| SRS-SVC-011 | Milestones | Ch. 9 | Milestone data model, Milestone state machine |
| SRS-SVC-012 | Milestone Delivery | Ch. 9 | SubmitDeliverable algorithm |
| SRS-SVC-013 | Milestone Acceptance | Ch. 9 | AcceptDeliverable algorithm |
| SRS-SVC-014 | Auto-Acceptance | Ch. 9 | AutoAcceptDeliverable algorithm |
| SRS-SVC-015 | Revisions | Ch. 9 | RequestRevision algorithm |
| SRS-SVC-016 | Service Disputes | Ch. 9, Ch. 14 | Dispute workflow, ResolveDispute algorithm |
| SRS-SVC-017 | Service Reviews | Ch. 9 | ServiceReview data model |
| SRS-SVC-018 | Provider Settlement | Ch. 9, Ch. 11 | Settlement via Wallet Engine (Services waterfall) |
| SRS-SVC-019 | Services Fraud Detection | Ch. 9, Ch. 13 | Fraud detection integration, DetectFraudSignals algorithm |
| SRS-KRW-001 | K-Points | Ch. 10 | KPointsLedger data model, AccrueKPoints algorithm |
| SRS-KRW-002 | K-Points Categories | Ch. 10 | Category enum in KPointsLedger (8 categories, KR-PNT-003) |
| SRS-KRW-003 | K-Points Reversal | Ch. 10 | ReverseKPoints algorithm |
| SRS-KRW-004 | K-Rings | Ch. 10, Ch. 17 | RingGraph data model, CalculateRingContribution algorithm |
| SRS-KRW-005 | Ring Contribution | Ch. 10, Ch. 17 | CalculateRingContribution algorithm, RingContribution data model |
| SRS-KRW-006 | Ring Fraud | Ch. 10 | DetectRingFraud algorithm |
| SRS-KRW-007 | K-Points Blocking | Ch. 10, Ch. 13 | Fraud signal feed, K-Points rejection in AccrueKPoints |
| SRS-KRW-008 | Fifteen Levels and Five Tiers | Ch. 10 | KLevelProgression data model (17 fields) |
| SRS-KRW-009 | Progression Matrix and Promotion | Ch. 10, Ch. 17 | EvaluateKLevelPromotion, PromoteKLevel algorithms |
| SRS-KRW-010 | Leadership Multiplication | Ch. 10, Ch. 17 | EvaluateKLevelDistribution, EvaluateLeadershipQualification algorithms |
| SRS-KRW-011 | Permanent Status Policy | Ch. 10 | Promotion is prospective-only, no retroactive demotion (KR-LVL-024) |
| SRS-KRW-012 | Active Status | Ch. 10 | Active status in LifetimeStatistics, active maintenance check |
| SRS-KRW-013 | Reward Share | Ch. 10 | CalculateRewardShare algorithm (4-pillar blend) |
| SRS-KRW-014 | Reward Distribution | Ch. 10, Ch. 11 | ExecuteMonthlyCycle, ExecuteRewardDistribution algorithms |
| SRS-KRW-015 | Monthly Reward Cycle | Ch. 10 | ExecuteMonthlyCycle algorithm (9 stages), RewardCycle state machine |
| SRS-WAL-001 | Wallet Initialization | Ch. 11 | InitializeWallet algorithm, Wallet data model |
| SRS-WAL-002 | Wallet Balances and Transactions | Ch. 11 | WalletTransaction data model, CreditWallet/DebitWallet algorithms |
| SRS-WAL-003 | Deposits and Withdrawals | Ch. 11 | ProcessDeposit, ProcessWithdrawal algorithms |
| SRS-WAL-004 | Payment Processing | Ch. 11 | ProcessPayment algorithm |
| SRS-WAL-005 | Settlement Execution | Ch. 11 | ExecuteSettlement algorithm (90/10 waterfall) |
| SRS-WAL-006 | Reserve Protection | Ch. 11 | ReserveHolding data model, 90/10 enforcement in ExecuteSettlement |
| SRS-WAL-007 | Allocation Validation | Ch. 11 | Enforce90_10 algorithm, allocation sum validation |
| SRS-WAL-008 | Reconciliation | Ch. 11 | ReconcileCycle algorithm |
| SRS-WAL-009 | Prohibition of Circular Funding | Ch. 11 | Circular funding check in Enforce90_10 |
| SRS-WAL-010 | Transaction Reversal Framework | Ch. 11 | ExecuteReversal algorithm (same-cycle/later-cycle) |
| SRS-WAL-011 | Refunds | Ch. 11 | ProcessRefund algorithm |
| SRS-WAL-012 | Chargebacks | Ch. 11 | ProcessChargeback algorithm |
| SRS-WAL-013 | Reward Distribution Execution | Ch. 11 | ExecuteRewardDistribution algorithm |
| SRS-WAL-014 | Economic Audit | Ch. 11 | Hash-chained audit in all Wallet operations |
| SRS-MSG-001 | Notification System | Ch. 12 | SendNotification algorithm, Notification data model |
| SRS-MSG-002 | Participant Messaging | Ch. 12 | SendMessage algorithm, Message data model |
| SRS-MSG-003 | Platform Announcements | Ch. 12 | PublishAnnouncement algorithm, Announcement data model |
| SRS-MSG-004 | Community Contributions and K-Points | Ch. 12 | VerifyCommunityContribution algorithm, CommunityContribution data model |
| SRS-INT-001 | Recommendations | Ch. 13 | GenerateRecommendations algorithm |
| SRS-INT-002 | Search Relevance | Ch. 13 | RankSearchResults algorithm |
| SRS-INT-003 | Platform and Participant Analytics | Ch. 13 | ComputeAnalytics algorithm |
| SRS-INT-004 | Fraud Detection Signals | Ch. 13 | DetectFraudSignals algorithm |
| SRS-ADM-001 | Governance Review Enforcement | Ch. 14 | ProcessGovernanceReview algorithm (4-part test) |
| SRS-ADM-002 | Policy Enforcement | Ch. 14 | EnforcePolicy algorithm |
| SRS-ADM-003 | Content Moderation | Ch. 14 | ModerateContent algorithm, ModerationCase data model |
| SRS-ADM-004 | Dispute Resolution Governance | Ch. 14 | ResolveDispute algorithm, Dispute data model |
| SRS-ADM-005 | Audit Logging | Ch. 14 | Audit Log Service (shared), hash-chained records |
| SRS-ADM-006 | Access Management and Appeals | Ch. 14 | ProcessAppeal algorithm, Appeal data model |
| SRS-ADM-007 | Compliance Monitoring | Ch. 14 | CheckCompliance algorithm, ComplianceFlag data model |
| SRS-ADM-008 | Anti-Fraud Process | Ch. 14 | ProcessFraudReport, ApplySanction algorithms, Sanction data model |
| SRS-IGR-001 | API Gateway | Ch. 15 | ProcessApiRequest algorithm, API Gateway component |
| SRS-IGR-002 | Partner API Authentication | Ch. 15 | Auth Service, ApiClient data model, scope management |
| SRS-IGR-003 | External Website and Mobile App Integration | Ch. 15 | SDK Manager, API Gateway routing |
| SRS-IGR-004 | Partner System Integration | Ch. 15 | ProcessPartnerTransaction algorithm, Partner revenue waterfall |
| SRS-IGR-005 | SDK Capability | Ch. 15 | SDK Manager component |
| SRS-IGR-006 | Tenant Isolation | Ch. 15 | EnforceTenantIsolation algorithm |
| SRS-IGR-007 | API Versioning and Rate Limits | Ch. 15 | Version Manager, Rate Limiter, DeprecateApiVersion algorithm |
| SRS-IGR-008 | Webhooks | Ch. 15 | DeliverWebhook, DeliverWithRetry algorithms, WebhookEndpoint data model |
| SRS-IGR-009 | Integration Audit Logs | Ch. 15 | ApiRequestLog data model, audit integration |
| SRS-IGR-010 | Integration Governance | Ch. 15 | OnboardPartner algorithm, Partner lifecycle |
| SRS-LRN-001 | Instructor Registration and Verification | Ch. 16 | OnboardInstructor algorithm, Instructor data model |
| SRS-LRN-002 | Instructor Profiles | Ch. 16 | Instructor data model, profile display |
| SRS-LRN-003 | Course Creation | Ch. 16 | CreateCourse algorithm, Course data model |
| SRS-LRN-004 | Programmes and Learning Paths | Ch. 16 | Programme, LearningPath, LearningPathStep data models |
| SRS-LRN-005 | Modules and Lessons | Ch. 16 | Module, Lesson data models |
| SRS-LRN-006 | Learning Content: Video, Text, and External Media | Ch. 16 | AddExternalMedia algorithm, external media reference (ADR-005) |
| SRS-LRN-007 | Quizzes and Assessments | Ch. 16 | Assessment, Question data models, SubmitAssessment algorithm |
| SRS-LRN-008 | Assignments and Submissions | Ch. 16 | Assignment, AssignmentSubmission data models |
| SRS-LRN-009 | Enrollment and Course Access | Ch. 16 | EnrollInCourse algorithm, Enrollment data model |
| SRS-LRN-010 | Learner Progress Tracking | Ch. 16 | LessonProgress data model, UpdateLessonProgress algorithm |
| SRS-LRN-011 | Completion and Certificates | Ch. 16 | CheckCourseCompletion, IssueCertificate algorithms, Certificate data model |
| SRS-LRN-012 | Course Discovery | Ch. 16, Ch. 13 | Course discovery component, search integration |
| SRS-LRN-013 | Course Reviews and Ratings | Ch. 16 | CourseReview data model, review submission |
| SRS-LRN-014 | Instructor and Learner Dashboards | Ch. 16, Ch. 13 | Dashboard components, ComputeAnalytics integration |
| SRS-LRN-015 | Instructor Settlement | Ch. 16, Ch. 11 | SettleInstructor algorithm, Learning revenue waterfall |
| SRS-LRN-016 | Learning Fraud Detection | Ch. 16 | DetectLearningFraud algorithm |
| SRS-LRN-017 | Learning Content Moderation | Ch. 16, Ch. 14 | Content moderation integration, ModerateContent (Admin) |
| SRS-ERG-001 | Engine Registry | Ch. 19 | EngineRegistryEntry data model, Engine Registry component |
| SRS-ERG-002 | Engine Extension Framework | Ch. 19 | ProposeEngine, EvaluateEngine, LaunchEngine algorithms |
| SRS-ERG-003 | Engine Lifecycle Management | Ch. 19 | Engine lifecycle state machine, DeprecateEngine, RetireEngine algorithms |
| SRS-ROY-001 | Username Assignment and Permanence | Ch. 18 | AssignRoyalUsername algorithm, RoyalIdentity data model |
| SRS-ROY-002 | Team Name | Ch. 18 | AssignTeamName, UpdateTeamName algorithms |
| SRS-ROY-003 | Tier-to-Title Mapping | Ch. 18 | DetermineTitle algorithm, tier-to-title table |
| SRS-ROY-004 | Title Transitions | Ch. 18 | TransitionTitle algorithm, TitleHistory data model |
| SRS-ROY-005 | Recognition, Not Authority | Ch. 18 | Royal title design — no authority-granting function |
| SRS-ROY-006 | Coronation Eligibility and Verification | Ch. 18 | VerifyCoronationEligibility algorithm, CheckCoronationManipulation |
| SRS-ROY-007 | Coronation Recognition and Awards | Ch. 18 | ExecuteCoronation algorithm, CoronationRecord data model |
| SRS-ROY-008 | Coronation Cycle | Ch. 18 | Annual coronation cycle coordination |
| SRS-ROY-009 | Coronation History | Ch. 18 | CoronationRecord data model, coronation history |
| SRS-NFR-001 | Performance | Ch. 20 | Performance targets per engine, performance optimization patterns |
| SRS-NFR-002 | Scalability | Ch. 20 | Scalability design, horizontal scaling |
| SRS-NFR-003 | Availability | Ch. 20 | Failure handling, graceful degradation, circuit breakers |
| SRS-NFR-004 | Security | Ch. 20 | Zero-trust security, per-engine security boundaries |
| SRS-NFR-005 | Privacy | Ch. 20 | Personalization consent, data protection, encryption |
| SRS-NFR-006 | Auditability | Ch. 20, Ch. 14 | Hash-chained audit, independent audit access |
| SRS-NFR-007 | Compliance | Ch. 14, Ch. 20 | Compliance monitoring, KYC/AML enforcement |
| SRS-NFR-008 | Maintainability | Ch. 19 | Engine Extension Framework, versioned contracts |
| SRS-NFR-009 | Observability | Ch. 20 | Standard metrics, correlation ID, distributed tracing |
| SRS-NFR-010 | Resilience | Ch. 20 | Circuit breakers, bulkheads, graceful degradation |
| SRS-NFR-011 | Data Integrity | Ch. 11, Ch. 20 | Strong consistency for financial data, OCC/PCC |
| SRS-NFR-012 | Extensibility | Ch. 19 | Engine Extension Framework, Engine Registry |
| SRS-NFR-013 | Internationalization | Ch. 20 | Multi-currency support, locale handling |
| SRS-NFR-014 | Usability | Ch. 20 | API design, error responses, dashboard design |

### 21.3 SAD-1 → SDD-1 Traceability Matrix

| SAD-1 Component | SAD-1 Chapter | SDD-1 Chapter | SDD-1 Design Implementation |
|---|---|---|---|
| System context diagram | Ch. 5 | Ch. 4 | Shared platform design, engine interaction |
| Container diagram | Ch. 6 | Ch. 4–5 | Shared infrastructure, cross-engine communication |
| Component boundaries and engine interaction | Ch. 7 | Ch. 5 | Cross-engine communication design |
| Shared services and data ownership | Ch. 8 | Ch. 4 | Shared infrastructure design |
| Identity Engine architecture | Ch. 9 | Ch. 6 | Identity Engine design |
| Trust Engine architecture | Ch. 10 | Ch. 7 | Trust Engine design |
| Commerce Engine architecture | Ch. 11 | Ch. 8 | Commerce Engine design |
| Services Engine architecture | Ch. 12 | Ch. 9 | Services Engine design |
| K-Rewards Engine architecture | Ch. 13 | Ch. 10 | K-Rewards Engine design |
| Wallet/Payments architecture | Ch. 14 | Ch. 11 | Wallet/Payments Engine design |
| Communication Engine architecture | Ch. 15 | Ch. 12 | Communication Engine design |
| Intelligence Engine architecture | Ch. 16 | Ch. 13 | Intelligence Engine design |
| Administration Engine architecture | Ch. 17 | Ch. 14 | Administration Engine design |
| Integration Engine architecture | Ch. 18 | Ch. 15 | Integration Engine design |
| Learning Engine architecture | Ch. 19 | Ch. 16 | Learning Engine design |
| K-Rewards calculation architecture | Ch. 20 | Ch. 10 | K-Rewards calculation algorithms |
| Leadership graph architecture | Ch. 21 | Ch. 17 | Leadership Qualification design |
| Royal Identity architecture | Ch. 22 | Ch. 18 | Royal Identity design |
| Interoperability architecture | Ch. 23 | Ch. 15 | Integration Engine interoperability |
| Security architecture | Ch. 24 | Ch. 20 | Security design, per-engine security boundaries |
| Performance architecture | Ch. 25 | Ch. 20 | Performance design, caching, scalability |
| Data architecture | Ch. 26 | Ch. 4–16 | Per-engine data models |
| Deployment architecture | Ch. 27 | Ch. 19 | Engine deployment in LaunchEngine |
| Scalability and multi-region architecture | Ch. 28 | Ch. 20 | Scalability design |
| Observability and DR architecture | Ch. 29 | Ch. 20 | Observability design, failure handling, graceful degradation |
| Engine Registry architecture | Ch. 30 | Ch. 19 | Engine Extension Framework design |
| Future-engine architecture | Ch. 31 | Ch. 19 | Engine Extension Framework design |
| ADR-001 (Microservices per engine) | Ch. 32.1 | Ch. 4–19 | Each engine designed as a microservice |
| ADR-005 (External media strategy) | Ch. 32.6 | Ch. 16 | External media referenced, not stored |
| ADR-006 (Graph DB for K-Rings) | Ch. 32.7 | Ch. 10, Ch. 17 | RingGraph graph DB schema |
| ADR-008 (Zero trust security) | Ch. 32.9 | Ch. 20 | Zero-trust security model |
| ADR-009 (Learning not separate architecture) | Ch. 32.10 | Ch. 16 | Learning as Engine #11 in master SDD |

### 21.4 PLC-1 → SDD-1 Traceability Matrix

| PLC-1 Chapter | PLC-1 Topic | SDD-1 Chapter | SDD-1 Design Implementation |
|---|---|---|---|
| Ch. 9 | One Ecosystem Principle | Ch. 3, Ch. 19 | One platform, shared foundations, no separate systems |
| Ch. 12 | Engine Architecture and Extensibility | Ch. 19 | Engine Extension Framework, Engine Registry |
| Ch. 16 | Communication Engine | Ch. 12 | Communication Engine design |
| Ch. 17 | Intelligence Engine | Ch. 13 | Intelligence Engine design |
| Ch. 18 | Administration Engine | Ch. 14 | Administration Engine design |
| Ch. 22 | Royal Identity | Ch. 18 | Royal Identity design |
| Ch. 24 | Wallet/Payments Engine | Ch. 11 | Wallet/Payments Engine design |
| Ch. 25 | 90/10 Principle | Ch. 11 | 90/10 enforcement in settlement |
| Ch. 26 | K-Rewards Engine | Ch. 10, Ch. 17 | K-Rewards Engine design, Leadership Qualification |
| Ch. 27 | Anti-Fraud | Ch. 13, Ch. 14, Ch. 20 | Fraud detection, anti-fraud process, security |
| Ch. 28 | Commerce Marketplace | Ch. 8 | Commerce Engine design |
| Ch. 29 | Services Marketplace | Ch. 9 | Services Engine design |
| Ch. 30 | Learning Ecosystem | Ch. 16 | Learning Engine design |
| Ch. 31 | Integration and External Interoperability | Ch. 15 | Integration Engine design |
| Ch. 33 | Compliance | Ch. 14, Ch. 20 | Compliance monitoring, security boundaries |

### 21.5 KR-1 → SDD-1 Traceability Matrix

| KR-1 Rule ID | KR-1 Topic | SDD-1 Chapter | SDD-1 Design Implementation |
|---|---|---|---|
| KR-FND-003 | K-Rewards sole authority | Ch. 10 | K-Rewards Engine is sole rewards authority |
| KR-FND-008 | Genuine activity | Ch. 10 | Genuine activity check in AccrueKPoints |
| KR-FND-015 | Reconstructability | Ch. 10, Ch. 11 | Hash-chained audit records |
| KR-ECO-001 | 90/10 Principle | Ch. 11 | Enforce90_10 algorithm |
| KR-ECO-003 | Core Equations | Ch. 11 | QEV, AP, R calculations in ExecuteSettlement |
| KR-ECO-005 | Allocation Sum Constraint | Ch. 11 | Allocation sum validation in Enforce90_10 |
| KR-ECO-006 | Prohibition of Over-Allocation | Ch. 11 | Over-allocation check in Enforce90_10 |
| KR-ECO-007 | Prohibition of Circular Funding | Ch. 11 | Circular funding check in Enforce90_10 |
| KR-ECO-010 | QEV Definition | Ch. 11 | QEV = GR - D in ExecuteSettlement |
| KR-ECO-011 | Allocation Pool | Ch. 11 | AP = 90% of QEV |
| KR-ECO-012 | Reserve | Ch. 11 | R = 10% of QEV, ReserveHolding |
| KR-ECO-013 | Reconciliation Identity | Ch. 11 | AP + R = QEV validation |
| KR-ECO-014 | Allocation Rates | Ch. 11 | Revenue waterfalls (GOVERNANCE PARAMETERS) |
| KR-ECO-017 | Allocation Verification | Ch. 11 | Allocation rates sum to 90% |
| KR-ECO-040 | Reward Pool | Ch. 10 | RewardPool data model, FundRewardPool algorithm |
| KR-ECO-044 | Pool Closure | Ch. 10 | CloseRewardPool algorithm |
| KR-ECO-045 | Eligibility | Ch. 10 | Eligibility check in ExecuteMonthlyCycle |
| KR-ECO-047 | Individual Cap | Ch. 10 | Cap application in ExecuteMonthlyCycle |
| KR-ECO-049 | Pro-Rata Adjustment | Ch. 10 | Pro-rata in ExecuteMonthlyCycle |
| KR-ECO-054 | Reserve and Reversals | Ch. 11 | Same-cycle/later-cycle reversal in ExecuteReversal |
| KR-ECO-058 | Reversal Effect | Ch. 11 | Same-cycle reversal reverses reserve |
| KR-ECO-059 | Reversibility Window | Ch. 11 | Reversibility window check in ExecuteReversal |
| KR-PNT-002 | Genuine Activity | Ch. 10 | Genuine activity check in AccrueKPoints |
| KR-PNT-003 | Eight Categories | Ch. 10 | Category enum in KPointsLedger |
| KR-PNT-005 | Calculation Formula | Ch. 10 | Points = baseValue * multiplier * categoryFactor |
| KR-PNT-008 | Monthly Caps | Ch. 10 | Category cap check in AccrueKPoints |
| KR-RNG-004 | Ring Formation | Ch. 10, Ch. 17 | Graph distance for ring membership |
| KR-RNG-008 | Ring Weights | Ch. 10, Ch. 17 | Ring weight table (0.40/0.25/0.15/0.12/0.08) |
| KR-RNG-009 | Ring Density Gates | Ch. 10, Ch. 17 | Density gate check in CalculateRingContribution |
| KR-RNG-011 | Ring Contribution Formula | Ch. 10, Ch. 17 | CalculateRingContribution algorithm |
| KR-LVL-009 | Progression Matrix | Ch. 10, Ch. 17 | KLevelProgression data model (17 fields) |
| KR-LVL-010 | Strictly Increasing Progression | Ch. 10, Ch. 17 | Strictly increasing check in promotion |
| KR-LVL-011 | Progressive Multipliers | Ch. 10 | K-Level multiplier in AccrueKPoints |
| KR-LVL-024 | No Retroactive Demotion | Ch. 10, Ch. 14 | Prospective-only promotion, governance review blocks retroactive |
| KR-LVL-042 | Tier-to-Title Mapping | Ch. 18 | DetermineTitle algorithm |
| KR-LVL-043 | Username Permanence | Ch. 18 | Username immutable after assignment |
| KR-LVL-044 | Title Transitions | Ch. 18 | TransitionTitle algorithm |
| KR-LVL-045 | Recognition Not Authority | Ch. 18 | No authority-granting function |
| KR-LVL-047 | Coronation No Unfunded Liability | Ch. 18 | Coronation funded from Allocation Pool |
| KR-LVL-048 | Coronation Eligibility | Ch. 18 | VerifyCoronationEligibility algorithm |
| KR-LVL-049 | Coronation Verification | Ch. 18 | Verification against platform records |
| KR-LVL-050 | Anti-Manipulation | Ch. 18 | CheckCoronationManipulation algorithm |
| KR-LVL-051 | Coronation Categories | Ch. 18 | CoronationCategory data model |
| KR-LVL-052 | Coronation Awards | Ch. 18 | Coronation award categories in ExecuteCoronation |
| KR-LVL-053 | Coronation Funding | Ch. 18 | Funding from Allocation Pool, not reserve |
| KR-LVL-054 | Coronation Records | Ch. 18 | CoronationRecord permanent historical records |
| KR-RWD-001 | Reward Share | Ch. 10 | CalculateRewardShare algorithm (4-pillar blend) |
| KR-FRD-002 | Multi-Signal Corroboration | Ch. 13, Ch. 14 | No single signal → sanction; corroboration required |
| KR-FRD-003 | Due Process | Ch. 14 | Appeal rights, human review |
| KR-FRD-004 | Prohibited Activities | Ch. 13, Ch. 14 | Fraud detection for prohibited activities |
| KR-FRD-007 | Detection Methods | Ch. 13 | 6 detection methods in DetectFraudSignals |
| KR-FRD-008 | Non-Disclosure | Ch. 13 | Fraud signals not disclosed |
| KR-FRD-009 | Response Sequence | Ch. 14 | Anti-fraud process response sequence |
| KR-FRD-010 | False Positive Correction | Ch. 14 | Appeal reversal restores standing |
| KR-FRD-011 | Graduated Sanctions | Ch. 14 | 7 sanction severity levels |
| KR-FRD-012 | Sanction Severity | Ch. 14 | Sanction severity enum |
| KR-GOV-001 | Governance Review | Ch. 14 | ProcessGovernanceReview algorithm |
| KR-GOV-002 | Four-Part Test | Ch. 14 | Four-part governance review test |
| KR-GOV-004 | Appeal Rights | Ch. 14 | Non-waivable, non-forfeitable, no-payment appeal rights |
| KR-GOV-030 | No Collateral Harm | Ch. 10, Ch. 11, Ch. 14 | Reversals affect only fraudulent participant |
| KR-TRU-002 | KYC/AML Gating | Ch. 6, Ch. 11, Ch. 14 | KYC/AML gating on deposits, withdrawals, compliance |
| KR-TRU-007 | Trust Thresholds | Ch. 7, Ch. 9, Ch. 16 | Trust ≥ 40 for provider/instructor eligibility |

---

# Appendices

## Appendix A — Design Pattern Catalogue

### A.1 Patterns Used in SDD-1

| Pattern | Category | Usage in SDD-1 | Reference Chapter |
|---|---|---|---|
| **API Gateway** | Integration | Sole external boundary for all external system interactions | Ch. 4, Ch. 15 |
| **Cache-Aside** | Performance | Default caching pattern with event-driven invalidation | Ch. 3, Ch. 20 |
| **Circuit Breaker** | Resilience | Protects inter-engine calls from cascading failures | Ch. 5, Ch. 20 |
| **Command Query Responsibility Segregation (CQRS)** | Data | Read models (search, analytics) separate from write models | Ch. 4, Ch. 13 |
| **Compensating Transaction (Saga)** | Data consistency | Distributed transactions across engines (checkout, settlement) | Ch. 5 |
| **Event-Driven Architecture** | Communication | Async communication via event bus with outbox pattern | Ch. 4, Ch. 5 |
| **Idempotency Key** | Reliability | Every state-changing operation carries an idempotency key | Ch. 3, Ch. 20 |
| **Optimistic Concurrency Control (OCC)** | Concurrency | Version-based concurrency for low-contention updates | Ch. 3, Ch. 20 |
| **Outbox Pattern** | Reliability | Atomic business operation + event publication | Ch. 5 |
| **Pessimistic Concurrency Control (PCC)** | Concurrency | Row locking for high-contention financial operations | Ch. 3, Ch. 11 |
| **Rate Limiting (Token Bucket)** | Protection | Per-partner, per-API rate limiting | Ch. 3, Ch. 15 |
| **Retry with Exponential Backoff** | Resilience | External calls, settlement, webhook delivery | Ch. 3, Ch. 15 |
| **Saga Orchestrator** | Data consistency | Monthly reward cycle orchestration | Ch. 10 |
| **Service Mesh** | Infrastructure | mTLS, traffic management, observability | Ch. 4 |
| **Shared Database per Engine** | Data | Each engine owns its database; no cross-engine DB access | Ch. 4 |
| **State Machine** | Domain logic | Order, Shipment, Return, Contract, Milestone, Reward Cycle, etc. | Ch. 8–16 |
| **Tenant Isolation** | Security | Partner data isolation at data, API, and compute layers | Ch. 15 |
| **Token Bucket** | Rate limiting | Rate limiting for API requests and operations | Ch. 3 |
| **Zero Trust Security** | Security | Never trust, always verify; least privilege; assume breach | Ch. 20 |

### A.2 Anti-Patterns Avoided

| Anti-Pattern | Why Avoided | SDD-1 Alternative |
|---|---|---|
| Shared database across engines | Violates per-engine data ownership (SAD-1 ADR-002) | Each engine owns its DB; cross-engine via API/events |
| Direct engine-to-external API | Violates Integration Engine sole gateway (PLC-1 Ch.31.2) | All external via Integration Engine |
| Distributed transaction (2PC) | Too heavy for microservices; availability risk | Saga pattern with compensating transactions |
| Synchronous event publishing | Non-atomic business + event | Outbox pattern |
| Caching financial balances | Violates strong consistency requirement | Wallet balances NOT cached |
| Single-signal sanction | Violates KR-FRD-002 corroboration requirement | Multi-signal corroboration required |
| Reserve used for rewards | Violates 90/10 Principle (KR-ECO-006) | Reserve protected; rewards from Allocation Pool |
| Retroactive K-Level demotion | Violates KR-LVL-024 | Prospective-only promotion |
| Separate Learning architecture | Violates ADR-009 | Learning is Engine #11 in master SDD |

---

## Appendix B — Glossary

| Term | Definition |
|---|---|
| **90/10 Principle** | Constitutional constraint: only 90% of Qualifying Economic Value is allocatable; 10% is a protected reserve (KR-ECO-001) |
| **ABAC** | Attribute-Based Access Control — contextual authorization based on attributes |
| **Account** | A participant's identity on K-NETWORK, created through the Identity Engine |
| **Active Status** | A participant's maintenance of minimum personal K-Points and group activity per cycle (KR-LVL-011) |
| **Allocation Pool (AP)** | 90% of QEV, available for allocation to participants (KR-ECO-011) |
| **Anti-Accumulation Principle** | A leader cannot reach top-tier leadership through referral accumulation alone; must develop qualified leaders (KR-1 Ch.38) |
| **Audit Log** | Immutable, tamper-evident, hash-chained log of all significant platform events |
| **Coronation** | Annual recognition event for Legacy Tier (L13–15) participants who meet eligibility criteria |
| **Deductions (D)** | Legitimate reductions from Gross Revenue before the 90/10 split (KR-ECO-009) |
| **Deferred Adjustment** | Negative adjustment to a future cycle's Reward Pool for later-cycle reversals (KR-ECO-058) |
| **Engine Registry** | Authoritative source of truth for engine boundaries, contracts, dependencies, and lifecycle status |
| **Event Bus** | Asynchronous messaging infrastructure for inter-engine communication |
| **GOVERNANCE PARAMETER** | A numerical value or threshold owned by KR-1 that SDD-1 consumes as configuration, not invents |
| **Gross Revenue (GR)** | Total economic value of a transaction before deductions (KR-ECO-008) |
| **Idempotency Key** | Unique identifier ensuring an operation is processed exactly once |
| **K-Level** | Permanent progression level (1–15) measuring long-term leadership and contribution |
| **K-Points** | Points awarded for genuine activity, organized into eight categories (KR-PNT-003) |
| **K-Rings** | Network rings determined by graph distance from a leader (Ring 1–5) |
| **K-Trust** | Trust Score system integrated with K-Rewards for eligibility gating |
| **OCC** | Optimistic Concurrency Control — version-based concurrency management |
| **Outbox Pattern** | Pattern ensuring atomicity between business operation and event publication |
| **PCC** | Pessimistic Concurrency Control — row locking for strong consistency |
| **Qualifying Economic Value (QEV)** | GR minus deductions; the basis for the 90/10 split (KR-ECO-010) |
| **Reserve (R)** | 10% of QEV, protected and not distributed to participants (KR-ECO-012) |
| **Reversibility Window** | Period during which a transaction may be reversed with full K-Points and Reward Pool reversal (KR-ECO-059) |
| **Reward Cycle** | Monthly cycle for K-Points accumulation, Reward Pool funding, and reward distribution |
| **Reward Pool** | Pool of funds available for reward distribution in a given cycle (KR-ECO-040) |
| **Reward Share** | A participant's proportional claim on the Reward Pool, blended from four pillars (KR-RWD-001) |
| **RBAC** | Role-Based Access Control — authorization based on assigned roles |
| **Royal Identity** | Recognition identity (username, team name, title) integrated with K-Level system |
| **Saga** | Pattern for managing distributed transactions through a sequence of local transactions with compensating actions |
| **Same-Cycle Reversal** | Reversal within the reward cycle that reverses reserve, monthly K-Points, and Reward Pool contribution |
| **Later-Cycle Reversal** | Reversal after the reward cycle that uses deferred adjustment, not reserve |
| **Tenant Isolation** | Separation of partner data at data, API, and compute layers |

---

## Appendix C — Acronyms

| Acronym | Expansion |
|---|---|
| ABAC | Attribute-Based Access Control |
| ADR | Architecture Decision Record |
| AML | Anti-Money Laundering |
| AP | Allocation Pool |
| API | Application Programming Interface |
| BRD | Business Requirements Document |
| CQRS | Command Query Responsibility Segregation |
| DB | Database |
| DLQ | Dead Letter Queue |
| GR | Gross Revenue |
| HMAC | Hash-based Message Authentication Code |
| IAM | Identity and Access Management |
| IP | Intellectual Property |
| KYC | Know Your Customer |
| mTLS | Mutual Transport Layer Security |
| MFA | Multi-Factor Authentication |
| OCC | Optimistic Concurrency Control |
| OIDC | OpenID Connect |
| PCC | Pessimistic Concurrency Control |
| PII | Personally Identifiable Information |
| PLC | Platform Constitution |
| QEV | Qualifying Economic Value |
| RBAC | Role-Based Access Control |
| RLS | Row-Level Security |
| SAD | Software Architecture Document |
| SDD | Software Design Document |
| SDK | Software Development Kit |
| SRS | Software Requirements Specification |
| TF-IDF | Term Frequency-Inverse Document Frequency |
| TLS | Transport Layer Security |
| UUID | Universally Unique Identifier |
| VAT | Value-Added Tax |

---

## Appendix D — Revenue Waterfall Reference

All allocation rates are **GOVERNANCE PARAMETERS** owned by KR-1 (KR-ECO-014, Appendix C). SDD-1 consumes them as configuration.

| Revenue Type | Counterparty | Rewards | Leadership | Platform | Operations | Sum (AP) | Reserve | Total |
|---|---|---|---|---|---|---|---|---|
| Commerce | 15% | 60% | 8% | 5% | 2% | 90% | 10% | 100% |
| Services | 15% | 60% | 8% | 5% | 2% | 90% | 10% | 100% |
| Learning | 20% | 55% | 8% | 5% | 2% | 90% | 10% | 100% |
| Platform Fee | 65% | 0% | 15% | 7% | 3% | 90% | 10% | 100% |
| Partner | 40% | 35% | 10% | 3% | 2% | 90% | 10% | 100% |

**Key equations:**
- QEV = GR − D (KR-ECO-010)
- AP = 90% × QEV (KR-ECO-011)
- R = 10% × QEV (KR-ECO-012)
- AP + R = QEV (KR-ECO-013)
- Sum of allocations = AP (KR-ECO-005, KR-ECO-017)

---

## Appendix E — K-Level Progression Matrix Reference

The K-Level Progression Matrix contains 17 fields per level (KR-LVL-009). All values are **GOVERNANCE PARAMETERS** owned by KR-1.

| Field | Description |
|---|---|
| 1. Level number | K-Level (1–15) |
| 2. Tier | Foundation (1–3), Growth (4–6), Leadership (7–9), Executive (10–12), Legacy (13–15) |
| 3. Title | Royal title (Normal, Prince, Crown Prince, King) |
| 4. Royal identity | Username and team name eligibility |
| 5. K-Level multiplier | Reward Share multiplier (progressive, KR-LVL-011) |
| 6. Minimum lifetime K-Points | Cumulative K-Points threshold |
| 7. Active-month requirement | Minimum cycles of active participation |
| 8. Personal activity requirement | Minimum K-Points per cycle (active maintenance) |
| 9. Trust requirement | Minimum Trust Score |
| 10. Ring 1 requirement | Minimum active Ring 1 members |
| 11. Ring 2 requirement | Minimum active Ring 2 members |
| 12. Ring 3 requirement | Minimum active Ring 3 members |
| 13. Ring 4 requirement | Minimum active Ring 4 members |
| 14. Ring 5 requirement | Minimum active Ring 5 members |
| 15. Ring K-Level distribution | Minimum K-Level of members within each ring |
| 16. Leadership development requirement | Minimum Ring 1 members at specified K-Levels (L7+) |
| 17. Reward eligibility | Whether eligible for reward distribution |

**Strictly increasing (KR-LVL-010):** Each K-Level is strictly harder than the one before it across ALL 17 fields.

---

## Appendix F — Engine Domain Code Reference

| Code | Engine | SRS-1 Requirements | SDD-1 Chapter |
|---|---|---|---|
| IDM | Identity | SRS-IDM-001–007 | Ch. 6 |
| TRU | Trust | SRS-TRU-001–005 | Ch. 7 |
| COM | Commerce | SRS-COM-001–022 | Ch. 8 |
| SVC | Services | SRS-SVC-001–019 | Ch. 9 |
| KRW | K-Rewards | SRS-KRW-001–015 | Ch. 10, Ch. 17 |
| WAL | Wallet/Payments | SRS-WAL-001–014 | Ch. 11 |
| MSG | Communication | SRS-MSG-001–004 | Ch. 12 |
| INT | Intelligence | SRS-INT-001–004 | Ch. 13 |
| ADM | Administration | SRS-ADM-001–008 | Ch. 14 |
| IGR | Integration | SRS-IGR-001–010 | Ch. 15 |
| LRN | Learning | SRS-LRN-001–017 | Ch. 16 |
| ROY | Royal Identity | SRS-ROY-001–009 | Ch. 18 |
| ERG | Engine Registry | SRS-ERG-001–003 | Ch. 19 |
| NFR | Non-Functional | SRS-NFR-001–014 | Ch. 20 |

---

## Document End

**K-NETWORK Software Design Document (SDD-1) v1.0**

This document translates the K-NETWORK Software Architecture (SAD-1 v1.0) into implementation-level design for all eleven Core Engines, providing data models, algorithms, workflows, state machines, sequence diagrams, cross-cutting controls, and traceability — without becoming source code.

**Precedence:** PLC-1 > KR-1 > BRD-1 > SRS-1 > SAD-1 > SDD-1

**Status:** Draft for Governance Review
