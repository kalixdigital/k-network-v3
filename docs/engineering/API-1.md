# K-NETWORK API Specification

---

## DOCUMENT CONTROL BLOCK — API-1

### Document Control Elements

| Field | Value |
|---|---|
| **Document ID** | API-1 |
| **Document Title** | API Specification — K-NETWORK Platform |
| **Version Number** | 1.0 |
| **Status** | Draft for Governance Review |
| **Date of Issue** | 26 August 2026 |
| **Author** | K-NETWORK Architecture & Engineering Team |
| **Reviewer** | K-NETWORK Architecture Review Board |
| **Approver** | K-NETWORK Executive Authority |
| **Classification** | Confidential — Internal Governance |
| **Document Type** | API Specification |
| **Governing Authority** | PLC-1 v2.0 — Platform Constitution |
| **Parent Documents** | PLC-1 v2.0; KR-1 v3.0; BRD-1 v1.0; SRS-1 v2.0; SAD-1 v1.0; SDD-1 v1.0; DDD-1 v1.0 |
| **Review Cycle** | On-change + annual verification |
| **Next Scheduled Review** | August 2027 |
| **Related Documents** | PLC-1, KR-1, BRD-1, SRS-1, SAD-1, SDD-1, DDD-1, GOV-0, CMP-0, LEARN-AD-1, UXDS-1 |

### Version History

| Version | Date | Author | Description of Changes | Status |
|---|---|---|---|---|
| 0.1–0.9 | 2026-08 | K-NETWORK Team | Prior incremental drafts (10-engine scope) | Superseded |
| 1.0 | 2026-08-26 | K-NETWORK Architecture & Engineering Team | Complete rebuild: unified API contract for all eleven Core Engines (Learning as Engine #11); production-oriented endpoint specifications with authentication, authorization, request/response contracts, error codes, validation, idempotency, rate limits, pagination, filtering, sorting, security, audit, and traceability; partner APIs with OAuth/OIDC, scopes, webhooks, and versioning; 90/10 accounting admin APIs; Engine Registry extension pattern; line-by-line audited | Draft for Review |

### Approval & Sign-Off

| Role | Name | Signature | Date | Approval Status |
|---|---|---|---|---|
| Author | K-NETWORK Architecture & Engineering Team | ________________________ | 2026-08-26 | — |
| Reviewer | K-NETWORK Architecture Review Board | ________________________ | ____________ | Pending |
| Approver | K-NETWORK Executive Authority | ________________________ | ____________ | Pending |

> **Note:** API-1 attains **Approved** status only when the Approver's line is signed with an **Approved** or **Approved with Comments** status. Until then, the document remains in **Draft** status and serves as the directional reference for API engineering.

### Distribution List

| Role | Format |
|---|---|
| K-NETWORK Executive Leadership | Digital |
| K-NETWORK Architecture Review Board | Digital |
| Software Architects & Engineers | Digital |
| API Engineers & Integration Engineers | Digital |
| Frontend & Mobile Engineers | Digital |
| Security Architects & Security Officers | Digital |
| Partner Integration Teams | Digital |
| Quality Assurance Teams | Digital |
| Compliance & Security Officers | Digital |
| Document Control Repository | Digital (Master controlled copy) |

### Related Documents

| Document ID | Title | Purpose |
|---|---|---|
| PLC-1 | K-NETWORK Platform Constitution v2.0 | Supreme governing authority; defines the Core Constitutional Principles, the eleven Core Platform Engines, and the platform's identity, vision, and governance. |
| KR-1 | K-Rewards Policy & Governance Framework v3.0 | Sole authoritative source of K-Rewards policy; governs the Five Pillars, the 90/10 economy, Leadership Multiplication, Royal Identity, Coronation, anti-fraud, governance, and technical calculation rules. |
| BRD-1 | Business Requirements Document v1.0 | Defines the business strategy, four participation pillars, marketplace models, leadership model, economics, and ecosystem. |
| SRS-1 | Software Requirements Specification v2.0 | Defines the complete functional and non-functional software requirements (151 requirements) that API-1 implements as API contracts. |
| SAD-1 | Software Architecture Document v1.0 | Defines the software architecture, API-first interoperability, Integration Engine architecture, and component boundaries that API-1 realizes. |
| SDD-1 | Software Design Document v1.0 | Defines the implementation-level design, data models, algorithms, and workflows that API-1 exposes as endpoints. |
| DDD-1 | Database Design Document v1.0 | Defines the database schemas, tables, and data model that API-1 reads and writes. |
| GOV-0 | Consolidated Governance Framework | Defines the hierarchy, decision-making, change, conflict, compliance, audit, and review mechanisms. |
| CMP-0 | Compliance & Regulatory Framework | Defines data protection, financial compliance, consumer protection, IP, and accessibility requirements. |
| LEARN-AD-1 | Learning Architecture Decision | Approved decision adding Learning as Core Engine #11. |
| UXDS-1 | UI/UX Design Specification *(planned)* | Defines the user experience and interface design standards. |

### Document Control Policy

This is a **Controlled Document**. The following control terms apply:

1. **Controlled Status.** API-1 is a controlled document maintained under the K-NETWORK Document Control regime. Only the version held in the Document Control Repository is authoritative; all other copies are reference copies.
2. **Unauthorized Reproduction or Distribution.** Unauthorized reproduction, redistribution, or excerpting of this document, in whole or in part, is prohibited. Distribution is limited to the roles identified in the Distribution List above.
3. **Review Cycle.** This document shall be reviewed no less frequently than **on-change + annually**, or as directed by the governing authority (PLC-1). Off-cycle reviews may be triggered by governance decisions or material changes to related documents (SRS-1, SAD-1, SDD-1, DDD-1, KR-1, LEARN-AD-1).
4. **Governing Authority.** This document is subordinate to **PLC-1 — Platform Constitution**, consistent with **SAD-1** (architecture), **SDD-1** (design), **DDD-1** (database), **SRS-1** (requirements), **BRD-1**, and **KR-1** (for reward-related API design). Where this document conflicts with the Constitution, the Constitution prevails unless the conflict is resolved through formal governance.
5. **Traceability.** All API design decisions in this document must be traceable to their source in SDD-1 (design), SAD-1 (architecture), SRS-1 (requirements), DDD-1 (database), PLC-1, BRD-1, KR-1, CMP-0, or GOV-0. Each endpoint cites the specific source document and the requirements or design components it implements.
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
- Chapter 2 — API Design Principles and Conventions
- Chapter 3 — Authentication, Authorization, and Security

**Part II — Identity, Trust, and Communication APIs (Chapters 4–6)**
- Chapter 4 — Identity Engine APIs
- Chapter 5 — Trust Engine APIs
- Chapter 6 — Communication Engine APIs

**Part III — Commerce and Services APIs (Chapters 7–8)**
- Chapter 7 — Commerce Engine APIs
- Chapter 8 — Services Engine APIs

**Part IV — K-Rewards, Wallet, and Intelligence APIs (Chapters 9–11)**
- Chapter 9 — K-Rewards Engine APIs
- Chapter 10 — Wallet/Payments Engine APIs
- Chapter 11 — Intelligence Engine APIs

**Part V — Administration, Integration, and Learning APIs (Chapters 12–14)**
- Chapter 12 — Administration Engine APIs
- Chapter 13 — Integration Engine and Partner APIs
- Chapter 14 — Learning Engine APIs

**Part VI — 90/10 Accounting, Engine Registry, and Traceability (Chapters 15–17)**
- Chapter 15 — 90/10 Accounting APIs
- Chapter 16 — Engine Registry and Extension APIs
- Chapter 17 — Traceability Matrices

**Appendices**
- Appendix A — Error Code Catalog
- Appendix B — Scope Catalog
- Appendix C — Rate Limit Catalog
- Appendix D — Event Catalog
- Appendix E — Glossary
- Appendix F — Acronyms

---

## PREAMBLE

The K-NETWORK API Specification (API-1) defines the complete API contracts for all eleven Core Platform Engines. It translates the software design (SDD-1), architecture (SAD-1), requirements (SRS-1), and database design (DDD-1) into production-oriented API endpoints that engineers implement to build the K-NETWORK platform's API layer. Every endpoint is specified with its method, path, purpose, authentication, authorization, request, response, errors, validation, idempotency, rate limits, pagination, filtering, sorting, security, audit, and traceability.

API-1 occupies Tier 4 in the K-NETWORK governance document hierarchy established in PLC-1 v2.0 Chapter 32:

```
PLC-1 (Constitution) → KR-1 (K-Rewards) / GOV-0 (Governance) → BRD-1 (Business) → SRS-1 (Requirements) → SAD-1 (Architecture) → SDD-1 (Design) → DDD-1 (Database) → API-1 (API) → Code
```

API-1 is subordinate to DDD-1 v1.0 (the Database Design Document), SDD-1 v1.0 (the Software Design Document), SAD-1 v1.0 (the Software Architecture Document), SRS-1 v2.0 (the Software Requirements Specification), BRD-1 v1.0 (the Business Requirements Document), KR-1 v3.0 (for reward-related API design), and PLC-1 v2.0 (the Platform Constitution). Where API-1 conflicts with DDD-1, SDD-1, or SAD-1, the parent document prevails and API-1 must be corrected.

**This version (1.0) provides a unified API contract for all eleven current Core Platform Engines** — Identity, Trust, Commerce, Services, K-Rewards, Wallet/Payments, Communication, Intelligence, Administration, Integration, and Learning. Learning is incorporated as Core Engine #11 per the approved Learning Architecture Decision (LEARN-AD-1) and PLC-1 v2.0 Chapter 30. This API does NOT create a separate Learning API specification; Learning APIs are specified within the single unified API contract, consuming shared foundations.

K-NETWORK is designed as **one platform** containing eleven domain engines — not as eleven independent applications. All external interactions flow through the Integration Engine, which is the sole gateway for external system access (PLC-1 v2.0 Chapter 31.2). No engine exposes APIs directly to external systems except the Integration Engine. Internal engine-to-engine communication uses synchronous API calls and asynchronous events through the event bus (SAD-1 ADR-003).

The API is **API-first**: every platform capability exposed externally is accessible through a defined, versioned, governed API. The API supports web applications, mobile applications, partner applications, external websites, external companies, and future SDKs (PLC-1 v2.0 Chapter 31.1). Partners authenticate via OAuth 2.0 / OIDC or API keys with least-privilege scopes. All API access is rate-limited, audited, and logged in immutable, tamper-evident audit logs.

All monetary values in the API use **string representation of exact decimal** (e.g., `"100.00"`) — never floating-point. This ensures precision and consistency with the database layer (NUMERIC(20,2)) and prevents rounding errors in financial calculations. Percentages and rates use string representation of decimal fractions (e.g., `"0.150000"` for 15%).

All K-Rewards values — K-Point values, ring weights, K-Level thresholds, allocation rates — are **GOVERNANCE PARAMETERS** owned by KR-1. The API exposes them through configuration endpoints and references KR-1 rule IDs; it does not hard-code these values.

This is not merely a technical document; it is the API expression of K-NETWORK's constitutional commitment to build a trusted, integrated, rewarding ecosystem where every capability is accessible through governed, secure, versioned, and auditable interfaces.

---

# Part I — Foundation

## Chapter 1 — Introduction and Document Purpose

### 1.1 Purpose

API-1 provides the production-oriented API specification for the K-NETWORK platform. It defines complete API contracts for all eleven Core Engines, the Integration Engine's partner-facing APIs, 90/10 accounting admin APIs, and the Engine Registry extension pattern. The document is sufficiently detailed for engineers to implement API endpoints, client SDKs, and integration adapters without making undocumented design decisions — every endpoint, request, response, error, and security control is specified.

### 1.2 Scope

API-1 covers:

1. **Per-engine API contracts** for all eleven Core Engines — each engine's capabilities exposed through RESTful endpoints.
2. **Partner APIs** — external-facing APIs governed by the Integration Engine, including OAuth/OIDC, API keys, scopes, rate limits, webhooks, event delivery, versioning, and tenant isolation.
3. **90/10 accounting APIs** — authorized internal/admin APIs for revenue allocation, reserve, reward pool, reconciliation, and settlement. Sensitive internal financial calculations are never exposed to unauthorized users.
4. **Engine Registry APIs** — the extension pattern for adding future engines through governance.
5. **Cross-cutting concerns** — authentication, authorization, error handling, idempotency, pagination, filtering, sorting, rate limiting, security, audit, and traceability.
6. **Traceability** — mapping every endpoint to its source in SRS-1, SAD-1, SDD-1, DDD-1, PLC-1, and KR-1.

### 1.3 API Platform and Standards

The K-NETWORK API is built on the following standards and technologies:

| Standard | Usage |
|---|---|
| HTTP/1.1 and HTTP/2 | Transport protocol |
| HTTPS/TLS 1.3 | All API traffic is encrypted in transit |
| REST | Primary API style (resource-oriented, stateless) |
| JSON | Request and response body format (UTF-8) |
| OAuth 2.0 | Partner authentication and authorization |
| OpenID Connect (OIDC) | Identity verification for partners |
| API Keys | Service-to-service and simple integrations |
| JWT (JSON Web Token) | Bearer token format for authenticated sessions |
| Webhooks | Event-driven integration (push notifications) |
| Event Subscriptions | Durable event delivery via the event bus |
| OpenAPI 3.1 | API description format (machine-readable) |

### 1.4 Precedence Hierarchy

Within the K-NETWORK documentation suite, the following precedence hierarchy applies to API-1:

1. **Applicable law** — always prevails.
2. **PLC-1 (Platform Constitution v2.0)** — supreme internal governance document.
3. **KR-1 (K-Rewards Framework v3.0)** — governs the K-Rewards domain.
4. **BRD-1 (Business Requirements Document v1.0)** — defines business requirements.
5. **SRS-1 (Software Requirements Specification v2.0)** — defines software requirements.
6. **SAD-1 (Software Architecture Document v1.0)** — defines software architecture.
7. **SDD-1 (Software Design Document v1.0)** — defines software design.
8. **DDD-1 (Database Design Document v1.0)** — defines database design.
9. **API-1 (this document)** — governs API implementation.

Where any provision of API-1 conflicts with DDD-1, SDD-1, SAD-1, SRS-1, BRD-1, or KR-1, the parent document prevails and API-1 must be corrected.

### 1.5 Governing Requirement Traceability

PLC-1 v2.0 Chapter 31 (External Interoperability), Chapter 31.2 (Integration Engine); SAD-1 v1.0 Chapter 2.4 (API-First Interoperability), Chapter 18 (Integration Engine Architecture); SRS-1 v2.0 Chapter 19 (Integration and External Interoperability Requirements), SRS-IGR-001–010; SDD-1 v1.0 Chapter 16 (Integration Design); DDD-1 v1.0 Chapter 15 (Integration Engine Schema).

---

## Chapter 2 — API Design Principles and Conventions

### 2.1 Design Principles

API-1 translates the architecture principles from SAD-1 Chapter 2 and the design principles from SDD-1 Chapter 2 into API-level principles:

1. **API-First.** Every platform capability exposed externally is accessible through a defined, versioned, governed API. APIs are documented, consistent, and discoverable (PLC-1 v2.0 Chapter 31.1; SAD-1 Principle 4).
2. **One Unified API Contract.** All eleven engines are specified in one unified API contract. The API reflects the one-platform, eleven-engine architecture — not eleven independent APIs.
3. **Resource-Oriented.** Endpoints are organized around resources (nouns), not actions (verbs). Standard HTTP methods (GET, POST, PUT, PATCH, DELETE) express the operation.
4. **Stateless.** Every request is self-contained — it includes all information needed to process it. No server-side session state between requests (except the authenticated identity in the token).
5. **Consistent Money Representation.** All monetary values are string representations of exact decimal (`"100.00"`), never floating-point. This ensures precision and consistency with the database layer.
6. **Idempotent Where Needed.** State-changing operations that may be retried (payments, orders, reward distributions) support idempotency keys to prevent duplicate processing.
7. **Versioned.** All APIs are versioned. The platform supports multiple API versions concurrently, with defined deprecation policies and migration paths (PLC-1 v2.0 Chapter 31.1).
8. **Rate-Limited.** All API access is rate-limited to protect the platform from abuse and ensure fair resource allocation (PLC-1 v2.0 Chapter 31.1).
9. **Auditable.** All API access is logged in immutable, tamper-evident audit logs, recording the caller, the API, the request, the response, and the timestamp (PLC-1 v2.0 Chapter 31.1).
10. **Data Minimization.** APIs expose only the data necessary for the caller's authorized purpose. No API exposes more data than required (PLC-1 v2.0 Chapter 31.1).
11. **Secure by Default.** Every endpoint requires authentication and authorization. No endpoint is accessible without a valid token or API key. The default is deny-all.
12. **Graceful Degradation.** APIs degrade gracefully under load — returning 429 (Too Many Requests) with Retry-After headers rather than crashing. Non-critical fields may be omitted under load.

### 2.2 URL Conventions

#### 2.2.1 Base URL

```
https://api.k-network.com/v1
```

The base URL includes the API version (`v1`). Version changes that break backward compatibility increment the version (e.g., `v2`). Non-breaking changes are made within the current version.

#### 2.2.2 Path Structure

```
/v1/{engine}/{resource}[/{resource-id}[/{sub-resource}[/{sub-resource-id}]]]
```

| Component | Description | Example |
|---|---|---|
| `/v1` | API version | `/v1` |
| `{engine}` | Engine domain code | `commerce`, `services`, `learning`, `k-rewards`, `wallet`, `identity`, `trust`, `communication`, `intelligence`, `administration`, `integration`, `economy` |
| `{resource}` | Resource name (plural, kebab-case) | `products`, `orders`, `courses`, `enrollments` |
| `{resource-id}` | Resource identifier (UUID) | `550e8400-e29b-41d4-a716-446655440000` |
| `{sub-resource}` | Nested resource | `items`, `reviews`, `modules` |
| `{sub-resource-id}` | Sub-resource identifier (UUID) | `660e8400-e29b-41d4-a716-446655440000` |

#### 2.2.3 HTTP Methods

| Method | Usage | Idempotent | Safe |
|---|---|---|---|
| GET | Retrieve a resource or collection | Yes | Yes |
| POST | Create a resource or perform an action | No | No |
| PUT | Replace a resource (full update) | Yes | No |
| PATCH | Partial update of a resource | No | No |
| DELETE | Delete a resource (soft-delete by default) | Yes | No |

#### 2.2.4 Naming Conventions

- **Resources:** plural, kebab-case (e.g., `order-items`, `learning-paths`)
- **Fields:** snake_case in JSON (e.g., `created_at`, `account_id`, `total_amount`)
- **Enums:** UPPER_SNAKE_CASE (e.g., `"PENDING"`, `"ACTIVE"`, `"COMMERCE"`)
- **IDs:** UUID v4 strings (e.g., `"550e8400-e29b-41d4-a716-446655440000"`)
- **Dates:** ISO 8601 UTC (e.g., `"2026-08-26T14:30:00Z"`)

### 2.3 Money Representation

All monetary values are represented as **string representations of exact decimal** with exactly two decimal places:

```json
{
  "total_amount": "100.00",
  "shipping_cost": "15.50",
  "tax_amount": "8.00",
  "discount_amount": "0.00"
}
```

**Rules:**
1. Always a string, never a number — prevents floating-point parsing.
2. Always two decimal places — `"100.00"`, not `"100"` or `"100.0"`.
3. Never negative for amounts that are inherently positive (prices, costs, fees). Negative values are used only for reversals and adjustments where the sign is semantically meaningful.
4. Currency is specified as a separate ISO 4217 field (e.g., `"currency": "USD"`).
5. Percentages and rates are string representations of decimal fractions with six decimal places (e.g., `"0.150000"` for 15%, `"0.900000"` for 90%).

**Never use floating-point monetary values.** This is a hard constraint enforced across all API contracts.

### 2.4 Pagination

List endpoints use cursor-based pagination for large collections and offset-based pagination for smaller, bounded collections.

#### 2.4.1 Cursor-Based Pagination (default)

```
GET /v1/commerce/products?cursor=eyJpZCI6IjU1MCJ9&limit=20
```

| Parameter | Type | Default | Max | Description |
|---|---|---|---|---|
| `cursor` | string | — | — | Opaque cursor for the next page (omit for first page) |
| `limit` | integer | 20 | 100 | Maximum number of items per page |

**Response:**

```json
{
  "data": [ ... ],
  "pagination": {
    "cursor": "eyJpZCI6IjU2MCJ9",
    "has_more": true,
    "limit": 20
  }
}
```

#### 2.4.2 Offset-Based Pagination (for bounded collections)

```
GET /v1/commerce/categories?page=1&page_size=50
```

| Parameter | Type | Default | Max | Description |
|---|---|---|---|---|
| `page` | integer | 1 | — | Page number (1-based) |
| `page_size` | integer | 20 | 100 | Items per page |

**Response:**

```json
{
  "data": [ ... ],
  "pagination": {
    "page": 1,
    "page_size": 50,
    "total_items": 150,
    "total_pages": 3
  }
}
```

### 2.5 Filtering

List endpoints support filtering via query parameters:

```
GET /v1/commerce/products?status=ACTIVE&vendor_id=550e8400...
GET /v1/learning/courses?status=PUBLISHED&instructor_id=660e8400...
GET /v1/k-rewards/points?category=COMMERCE&cycle_id=770e8400...
```

**Conventions:**
- Filter parameters use snake_case field names.
- Multiple values for the same filter use comma separation: `?status=ACTIVE,PENDING`.
- Date range filters use `_from` and `_to` suffixes: `?created_at_from=2026-01-01T00:00:00Z&created_at_to=2026-12-31T23:59:59Z`.
- Amount range filters use `_min` and `_max` suffixes: `?total_amount_min=10.00&total_amount_max=500.00`.

### 2.6 Sorting

List endpoints support sorting via the `sort` parameter:

```
GET /v1/commerce/products?sort=-created_at,price
```

**Conventions:**
- `sort` accepts a comma-separated list of field names.
- Prefix with `-` for descending order (e.g., `-created_at` = newest first).
- No prefix means ascending order (e.g., `price` = lowest first).
- Multiple sort fields are applied in order.

### 2.7 Error Handling

All errors use a consistent error response format:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request failed validation.",
    "details": [
      {
        "field": "email",
        "issue": "Email format is invalid."
      }
    ],
    "request_id": "req_550e8400-e29b-41d4-a716-446655440000",
    "trace_id": "trace_660e8400-e29b-41d4-a716-446655440000"
  }
}
```

| Field | Type | Description |
|---|---|---|
| `error.code` | string | Machine-readable error code (see Appendix A) |
| `error.message` | string | Human-readable error description |
| `error.details` | array | Field-level validation errors (when applicable) |
| `error.request_id` | string (UUID) | Unique identifier for this request |
| `error.trace_id` | string (UUID) | Distributed tracing identifier |

#### 2.7.1 HTTP Status Codes

| Status | Meaning | Usage |
|---|---|---|
| 200 OK | Success | GET, PATCH, PUT, DELETE success |
| 201 Created | Resource created | POST success (with Location header) |
| 202 Accepted | Accepted for async processing | Async operations (e.g., webhook delivery) |
| 204 No Content | Success, no body | DELETE success |
| 400 Bad Request | Validation error | Invalid request body, query parameters |
| 401 Unauthorized | Authentication failed | Missing or invalid token |
| 403 Forbidden | Authorization failed | Insufficient permissions or scope |
| 404 Not Found | Resource not found | Invalid resource ID |
| 409 Conflict | State conflict | Duplicate resource, invalid state transition |
| 410 Gone | Resource permanently removed | Deleted resource |
| 422 Unprocessable Entity | Business rule violation | Valid request but business logic rejected |
| 429 Too Many Requests | Rate limit exceeded | Too many requests in time window |
| 500 Internal Server Error | Server error | Unexpected server-side error |
| 502 Bad Gateway | Upstream error | External service failure |
| 503 Service Unavailable | Temporary unavailability | Maintenance, overload |
| 504 Gateway Timeout | Timeout | Request timed out |

### 2.8 Idempotency

State-changing operations that may be retried support idempotency via the `Idempotency-Key` header:

```
POST /v1/commerce/orders
Idempotency-Key: idemp_770e8400-e29b-41d4-a716-446655440000
Content-Type: application/json

{
  "items": [ ... ]
}
```

**Rules:**
1. The client generates a unique idempotency key (UUID) for each logical operation.
2. If the same key is received again, the server returns the original response without re-executing the operation.
3. Idempotency keys are retained for 24 hours.
4. Idempotency applies to POST and PATCH operations on state-changing endpoints (orders, payments, enrollments, reward distributions, settlements).
5. GET and DELETE operations are inherently idempotent and do not require a key.

**Endpoints requiring idempotency** (marked with ⟳ in the endpoint specification):
- Order creation, checkout, payment
- Wallet deposits, withdrawals, transfers
- Enrollment creation
- Reward distribution
- Settlement execution
- Webhook delivery retry

### 2.9 Rate Limiting

All API access is rate-limited. Rate limits are enforced per token/API key, per endpoint group, and per time window.

#### 2.9.1 Rate Limit Headers

Every response includes rate limit headers:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1724678400
Retry-After: 60
```

| Header | Description |
|---|---|
| `X-RateLimit-Limit` | Maximum requests per window |
| `X-RateLimit-Remaining` | Remaining requests in current window |
| `X-RateLimit-Reset` | Unix timestamp when the window resets |
| `Retry-After` | Seconds to wait before retrying (only on 429 responses) |

#### 2.9.2 Rate Limit Tiers

| Tier | Window | Limit | Applies To |
|---|---|---|---|
| Standard | 60 seconds | 1,000 requests | Authenticated participants |
| High | 60 seconds | 5,000 requests | Vendors, providers, instructors with verified accounts |
| Partner | 60 seconds | 500 requests | Partner applications (per API key) |
| Admin | 60 seconds | 10,000 requests | Platform administrators |
| Public | 60 seconds | 100 requests | Unauthenticated public endpoints (product catalog, course catalog) |
| Burst | 1 second | 50 requests | Additional burst capacity above the window limit |

Rate limits are configurable and may be adjusted per partner through governance. See Appendix C for the complete rate limit catalog.

### 2.10 Request and Response Format

#### 2.10.1 Content Type

All requests and responses use `application/json` with UTF-8 encoding:

```
Content-Type: application/json
Accept: application/json
```

#### 2.10.2 Request Headers

| Header | Required | Description |
|---|---|---|
| `Authorization` | Yes (except public endpoints) | Bearer token: `Bearer {jwt}` or API key: `ApiKey {key}` |
| `Content-Type` | Yes (for POST/PUT/PATCH) | `application/json` |
| `Accept` | No | `application/json` (default) |
| `Idempotency-Key` | No (required for ⟳ endpoints) | UUID for idempotent operations |
| `X-Request-Id` | No | Client-generated request ID (server generates one if absent) |
| `Accept-Language` | No | Preferred response language (e.g., `en`, `fr`, `sw`) |

#### 2.10.3 Response Headers

| Header | Description |
|---|---|
| `X-Request-Id` | Server-generated request ID |
| `X-Trace-Id` | Distributed tracing ID |
| `Location` | URL of the created resource (201 responses) |
| `X-RateLimit-*` | Rate limit information |

#### 2.10.4 Standard Response Envelope

Single-resource responses return the resource directly:

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "field1": "value1",
  "field2": "value2",
  "created_at": "2026-08-26T14:30:00Z"
}
```

List responses include the `data` array and `pagination` object:

```json
{
  "data": [ ... ],
  "pagination": { ... }
}
```

### 2.11 Field Naming and Types

| Concept | JSON Type | Example | Notes |
|---|---|---|---|
| UUID | string | `"550e8400-e29b-41d4-a716-446655440000"` | All IDs are UUIDs |
| Monetary amount | string | `"100.00"` | Exact decimal, 2 places, never float |
| Rate/percentage | string | `"0.150000"` | Decimal fraction, 6 places |
| K-Points | string | `"1500.00"` | Exact decimal, 2 places |
| Timestamp | string | `"2026-08-26T14:30:00Z"` | ISO 8601 UTC |
| Date | string | `"2026-08-26"` | ISO 8601 date |
| Boolean | boolean | `true` / `false` | Standard JSON boolean |
| Integer | integer | `42` | Standard JSON integer |
| Enum | string | `"ACTIVE"` | UPPER_SNAKE_CASE |
| Binary/encrypted | string (omitted) | — | Encrypted fields are never returned in API responses |
| Reference (cross-engine) | string (UUID) | `"550e8400..."` | Plain UUID, no nested object unless explicitly expanded |

### 2.12 Soft Deletion in API

Resources that support soft deletion return `is_deleted` and `deleted_at` fields. Deleted resources are excluded from list responses by default. To include deleted resources, use `?include_deleted=true` (admin only).

DELETE operations on soft-deletable resources perform a soft delete (sets `is_deleted = true`, `deleted_at = NOW()`). Financial, audit, and historical resources do not support DELETE — they are permanent.

### 2.13 Governing Requirement Traceability

PLC-1 v2.0 Chapter 31 (External Interoperability); SAD-1 v1.0 Chapter 2.4 (API-First Interoperability), Chapter 18 (Integration Engine Architecture); SDD-1 v1.0 Chapter 16 (Integration Design); SRS-1 v2.0 SRS-IGR-001–010, SRS-NFR-001–014; DDD-1 v1.0 Chapter 15 (Integration Engine Schema), Chapter 20 (Security Design).

---

## Chapter 3 — Authentication, Authorization, and Security

### 3.1 Authentication

K-NETWORK uses two authentication mechanisms depending on the caller type:

#### 3.1.1 Participant Authentication (JWT Bearer Token)

Participants (web app, mobile app users) authenticate via username/password or social login, receiving a JWT access token and refresh token:

```
POST /v1/identity/sessions
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure-password",
  "mfa_code": "123456"
}
```

**Response:**

```json
{
  "access_token": "eyJhbGciOi...",
  "refresh_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "account_id": "550e8400-e29b-41d4-a716-446655440000"
}
```

The access token is included in subsequent requests:

```
Authorization: Bearer eyJhbGciOi...
```

**Token lifecycle:**
- Access token: 1 hour (3600 seconds)
- Refresh token: 30 days
- Token refresh: `POST /v1/identity/sessions/refresh`
- Token revocation: `POST /v1/identity/sessions/revoke`
- MFA verification: required for sensitive operations (withdrawals, KYC submission, admin actions)

#### 3.1.2 Partner Authentication (OAuth 2.0 / OIDC)

Partners authenticate via OAuth 2.0 client credentials flow or authorization code flow:

**Client Credentials Flow (server-to-server):**

```
POST /v1/integration/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=partner_client_id
&client_secret=partner_client_secret
&scope=commerce:read commerce:write
```

**Authorization Code Flow (user delegation):**

```
GET /v1/integration/oauth/authorize?response_type=code
    &client_id=partner_client_id
    &redirect_uri=https://partner.example.com/callback
    &scope=commerce:read
    &state=random_state_string
```

**Token response:**

```json
{
  "access_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "commerce:read commerce:write"
}
```

#### 3.1.3 API Key Authentication

For simple integrations and service-to-service communication:

```
Authorization: ApiKey knt_live_550e8400e29b41d4a716446655440000
```

API keys are registered per partner application with defined scopes and rate limits. API keys do not expire but can be revoked.

### 3.2 Authorization

#### 3.2.1 Role-Based Access Control (RBAC)

The API enforces role-based access control with the following roles:

| Role | Description | Access Pattern |
|---|---|---|
| `participant` | Standard platform participant | Own data only (RLS: `account_id = current_account_id`) |
| `vendor` | Commerce vendor | Own store, products, orders, settlements |
| `provider` | Services provider | Own listings, proposals, contracts, settlements |
| `instructor` | Learning instructor | Own courses, enrollments, settlements |
| `partner` | External partner application | Scoped to authorized scopes and partner_id |
| `admin` | Platform administrator | All data (BYPASSRLS) |
| `compliance` | Compliance officer | KYC, sanctions, compliance flags |
| `system` | Internal service account | Engine-to-engine API calls |

#### 3.2.2 Scope-Based Authorization (Partners)

Partner API access is controlled via scopes. Each scope grants read or write access to a specific resource group:

| Scope | Access | Endpoints |
|---|---|---|
| `commerce:read` | Read commerce data | GET /v1/commerce/* |
| `commerce:write` | Create/modify commerce data | POST/PUT/PATCH /v1/commerce/* |
| `services:read` | Read services data | GET /v1/services/* |
| `services:write` | Create/modify services data | POST/PUT/PATCH /v1/services/* |
| `learning:read` | Read learning data | GET /v1/learning/* |
| `learning:write` | Create/modify learning data | POST/PUT/PATCH /v1/learning/* |
| `k-rewards:read` | Read K-Rewards data (own account) | GET /v1/k-rewards/* |
| `wallet:read` | Read wallet data (own account) | GET /v1/wallet/* |
| `wallet:write` | Initiate wallet operations | POST /v1/wallet/withdrawals |
| `identity:read` | Read identity data (own account) | GET /v1/identity/accounts/me |
| `webhooks:manage` | Manage webhook subscriptions | /v1/integration/webhooks/* |
| `events:subscribe` | Subscribe to events | /v1/integration/events/subscriptions |
| `economy:read` | Read 90/10 accounting data (admin) | GET /v1/economy/* (admin only) |

See Appendix B for the complete scope catalog.

#### 3.2.3 Owner-Only Access

Participant-facing endpoints enforce owner-only access — a participant can only access their own data. This is enforced at the API gateway and database layer (RLS). Attempts to access another participant's data return `403 Forbidden`.

### 3.3 Security

#### 3.3.1 Transport Security

All API traffic uses HTTPS/TLS 1.3. HTTP requests are redirected to HTTPS. No plaintext API traffic is permitted.

#### 3.3.2 Input Validation

All API input is validated:
- **Type validation:** fields must match their declared types.
- **Format validation:** UUIDs, emails, dates, monetary amounts must match expected formats.
- **Range validation:** numeric values must be within expected ranges.
- **Length validation:** strings must be within expected lengths.
- **Enum validation:** enum fields must match allowed values.
- **Required fields:** required fields must be present.

Invalid input returns `400 Bad Request` with field-level validation details.

#### 3.3.3 Sensitive Data Protection

- Passwords are never returned in any API response.
- Encrypted fields (KYC evidence, API secrets, payment data) are never returned in API responses.
- PII is minimized — responses include only the fields necessary for the caller's purpose.
- KYC evidence references are returned as opaque tokens, not raw data.

#### 3.3.4 Rate Limiting and Abuse Prevention

Rate limiting protects against:
- Brute-force authentication attacks (5 attempts per minute per IP)
- Credential stuffing (account lockout after 10 failed attempts)
- API abuse (per-token rate limits)
- Scraping (per-IP rate limits on public endpoints)

#### 3.3.5 Audit Logging

Every API request is logged with:
- Request ID, trace ID
- Caller identity (account_id or partner_id)
- API key / token ID (hashed)
- Method, path, query parameters
- Response status, response time
- IP address, user agent
- Timestamp

Audit logs are immutable, tamper-evident (hash-chained), and retained for 90 days (API request logs) or permanently (security-relevant events).

### 3.4 API Versioning

#### 3.4.1 Versioning Strategy

- API versions are specified in the URL path: `/v1/`, `/v2/`.
- The current version is `v1`.
- Non-breaking changes (adding fields, adding endpoints, adding optional parameters) are made within the current version.
- Breaking changes (removing fields, changing types, changing behavior) require a new version.
- The platform supports multiple API versions concurrently.
- Deprecation: when a new version is released, the old version is supported for at least 12 months with deprecation headers.

#### 3.4.2 Deprecation Headers

Deprecated endpoints include:

```
Deprecation: true
Sunset: Wed, 26 Aug 2027 00:00:00 GMT
Link: </v2/commerce/products>; rel="successor-version"
```

#### 3.4.3 Version-Specific Endpoints

Partner API clients specify their target version in the base URL. The Integration Engine routes to the correct API version handler.

### 3.5 Tenant Isolation

Partner data is isolated at the API level:
- Each partner API key is scoped to a specific `partner_id`.
- Partner API responses are filtered by `partner_id` — a partner never sees another partner's data.
- Webhook deliveries are scoped per partner.
- API request logs are scoped per partner (admin can see all).

### 3.6 Governing Requirement Traceability

PLC-1 v2.0 Chapter 31 (External Interoperability), Chapter 15 (Security and Privacy); SAD-1 v1.0 Chapter 22–25 (Zero Trust Security), ADR-008; SDD-1 v1.0 Chapter 20 (Security Controls); SRS-1 v2.0 SRS-NFR-001–014, SRS-IGR-001–010; DDD-1 v1.0 Chapter 20 (Security Design).

---

# Part II — Identity, Trust, and Communication APIs

## Chapter 4 — Identity Engine APIs

### 4.1 Overview

The Identity Engine APIs provide account registration, authentication, KYC verification, MFA enrollment, session management, account lifecycle, and referral assignment. The Identity Engine is the sole authority for participant identity — all other engines reference `account_id` as a plain UUID (SRS-IDM-001–007; SDD-1 Ch.6; SAD-1 Ch.9; DDD-1 Ch.6; PLC-1 Ch.13).

**Base path:** `/v1/identity`

**Authentication:** Participant JWT (Bearer token) for most endpoints. Registration and login are unauthenticated. KYC review endpoints require `compliance` role. Account suspension/closure requires `admin` role.

### 4.2 Account Registration

#### EP-IDM-001 — Register Account

| Field | Value |
|---|---|
| **ID** | EP-IDM-001 |
| **Method** | POST |
| **Path** | `/v1/identity/accounts` |
| **Purpose** | Register a new participant account |
| **Authentication** | None (public) |
| **Authorization** | None |
| **Idempotency** | ⟳ Yes (Idempotency-Key header) |
| **Rate Limit** | Public tier (5 registrations per hour per IP) |
| **Implements** | SRS-IDM-001, SRS-IDM-002; SDD-1 Ch.6; DDD-1 Ch.6 |

**Request:**

```json
{
  "email": "user@example.com",
  "password": "secure-password",
  "display_name": "John Doe",
  "phone": "+254712345678",
  "referral_code": "KNT-ABC123",
  "accept_terms": true
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `email` | string | Yes | Valid email format; unique (not soft-deleted) |
| `password` | string | Yes | Min 8 chars, must contain upper, lower, digit |
| `display_name` | string | Yes | Min 2, max 200 chars |
| `phone` | string | No | E.164 format; unique if provided |
| `referral_code` | string | No | Must match an existing active referral code |
| `accept_terms` | boolean | Yes | Must be `true` |

**Response (201 Created):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "display_name": "John Doe",
  "status": "PENDING",
  "kyc_tier": "TIER_0",
  "referred_by": "440e8400-e29b-41d4-a716-446655440000",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid email, weak password, missing required fields |
| 409 | `EMAIL_ALREADY_EXISTS` | Email already registered (active account) |
| 409 | `PHONE_ALREADY_EXISTS` | Phone already registered (active account) |
| 422 | `INVALID_REFERRAL_CODE` | Referral code does not match an active account |
| 422 | `TERMS_NOT_ACCEPTED` | `accept_terms` is not `true` |
| 429 | `RATE_LIMIT_EXCEEDED` | Too many registration attempts from this IP |

**Audit:** Logs account creation event with IP address, referral code used, and timestamp.

---

#### EP-IDM-002 — Verify Email

| Field | Value |
|---|---|
| **ID** | EP-IDM-002 |
| **Method** | POST |
| **Path** | `/v1/identity/accounts/verify-email` |
| **Purpose** | Verify the email address using the verification token sent to the user |
| **Authentication** | None (public) |
| **Authorization** | None |
| **Idempotency** | No |
| **Rate Limit** | Public tier |
| **Implements** | SRS-IDM-002; SDD-1 Ch.6 |

**Request:**

```json
{
  "token": "verification-token-from-email"
}
```

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "email_verified": true,
  "status": "ACTIVE"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Missing or invalid token |
| 404 | `TOKEN_NOT_FOUND` | Verification token does not exist |
| 410 | `TOKEN_EXPIRED` | Verification token has expired |
| 409 | `ALREADY_VERIFIED` | Email already verified |

---

### 4.3 Authentication and Sessions

#### EP-IDM-003 — Login (Create Session)

| Field | Value |
|---|---|
| **ID** | EP-IDM-003 |
| **Method** | POST |
| **Path** | `/v1/identity/sessions` |
| **Purpose** | Authenticate with email/password and create a session |
| **Authentication** | None (public) |
| **Authorization** | None |
| **Idempotency** | No |
| **Rate Limit** | 5 attempts per minute per IP (brute-force protection) |
| **Implements** | SRS-IDM-003; SDD-1 Ch.6 |

**Request:**

```json
{
  "email": "user@example.com",
  "password": "secure-password",
  "mfa_code": "123456"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `email` | string | Yes | Valid email |
| `password` | string | Yes | Non-empty |
| `mfa_code` | string | No | Required if MFA is enrolled (6-digit TOTP) |

**Response (200 OK):**

```json
{
  "access_token": "eyJhbGciOi...",
  "refresh_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "mfa_required": false
}
```

**Response (200 OK — MFA challenge):**

```json
{
  "mfa_challenge": true,
  "mfa_token": "mfa_challenge_token",
  "mfa_methods": ["TOTP", "SMS"]
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 401 | `INVALID_CREDENTIALS` | Email or password is incorrect |
| 401 | `MFA_REQUIRED` | MFA code is required but not provided |
| 401 | `INVALID_MFA_CODE` | MFA code is incorrect |
| 403 | `ACCOUNT_SUSPENDED` | Account is suspended |
| 403 | `ACCOUNT_DELETED` | Account is soft-deleted |
| 423 | `ACCOUNT_LOCKED` | Too many failed attempts; account temporarily locked |
| 429 | `RATE_LIMIT_EXCEEDED` | Too many login attempts from this IP |

---

#### EP-IDM-004 — Refresh Session

| Field | Value |
|---|---|
| **ID** | EP-IDM-004 |
| **Method** | POST |
| **Path** | `/v1/identity/sessions/refresh` |
| **Purpose** | Refresh an expired access token using a refresh token |
| **Authentication** | None (refresh token in body) |
| **Authorization** | None |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IDM-004; SDD-1 Ch.6 |

**Request:**

```json
{
  "refresh_token": "eyJhbGciOi..."
}
```

**Response (200 OK):**

```json
{
  "access_token": "eyJhbGciOi...",
  "refresh_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 401 | `INVALID_REFRESH_TOKEN` | Refresh token is invalid or expired |
| 401 | `REFRESH_TOKEN_REVOKED` | Refresh token has been revoked |
| 403 | `ACCOUNT_SUSPENDED` | Account is suspended |

---

#### EP-IDM-005 — Revoke Session (Logout)

| Field | Value |
|---|---|
| **ID** | EP-IDM-005 |
| **Method** | POST |
| **Path** | `/v1/identity/sessions/revoke` |
| **Purpose** | Revoke the current session (logout) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IDM-004; SDD-1 Ch.6 |

**Request:**

```json
{
  "revoke_all": false
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `revoke_all` | boolean | No | If `true`, revoke all sessions for this account (default: `false`) |

**Response (204 No Content)**

---

### 4.4 Account Management

#### EP-IDM-006 — Get Current Account

| Field | Value |
|---|---|
| **ID** | EP-IDM-006 |
| **Method** | GET |
| **Path** | `/v1/identity/accounts/me` |
| **Purpose** | Get the authenticated user's account details |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IDM-007; SDD-1 Ch.6 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "phone": "+254712345678",
  "display_name": "John Doe",
  "status": "ACTIVE",
  "kyc_tier": "TIER_1",
  "referred_by": "440e8400-e29b-41d4-a716-446655440000",
  "referral_code": "KNT-XYZ789",
  "created_at": "2026-08-26T14:30:00Z",
  "updated_at": "2026-08-26T15:00:00Z"
}
```

---

#### EP-IDM-007 — Update Account

| Field | Value |
|---|---|
| **ID** | EP-IDM-007 |
| **Method** | PATCH |
| **Path** | `/v1/identity/accounts/me` |
| **Purpose** | Update the authenticated user's account (display name, phone) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IDM-007; SDD-1 Ch.6 |

**Request:**

```json
{
  "display_name": "Jane Doe",
  "phone": "+254712345679"
}
```

**Response (200 OK):** Returns the updated account (same as EP-IDM-006).

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid display name or phone format |
| 409 | `PHONE_ALREADY_EXISTS` | Phone already in use by another active account |

---

#### EP-IDM-008 — Change Password

| Field | Value |
|---|---|
| **ID** | EP-IDM-008 |
| **Method** | POST |
| **Path** | `/v1/identity/accounts/me/change-password` |
| **Purpose** | Change the account password |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IDM-003; SDD-1 Ch.6 |

**Request:**

```json
{
  "current_password": "old-password",
  "new_password": "new-secure-password"
}
```

**Response (204 No Content)**

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | New password does not meet requirements |
| 401 | `INVALID_CURRENT_PASSWORD` | Current password is incorrect |

---

### 4.5 KYC Verification

#### EP-IDM-009 — Submit KYC Verification

| Field | Value |
|---|---|
| **ID** | EP-IDM-009 |
| **Method** | POST |
| **Path** | `/v1/identity/kyc-verifications` |
| **Purpose** | Submit KYC evidence for identity verification |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IDM-005, SRS-IDM-006; SDD-1 Ch.6; DDD-1 Ch.6 |

**Request:**

```json
{
  "tier": "TIER_2",
  "evidence_type": "GOVERNMENT_ID",
  "evidence_reference": "encrypted-evidence-reference-token"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `tier` | string | Yes | One of: `TIER_1`, `TIER_2`, `TIER_3` |
| `evidence_type` | string | Yes | One of: `GOVERNMENT_ID`, `UTILITY_BILL`, `SELFIE`, `PROOF_OF_ADDRESS` |
| `evidence_reference` | string | Yes | Opaque reference to encrypted evidence stored in the evidence vault |

**Response (201 Created):**

```json
{
  "verification_id": "660e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "tier": "TIER_2",
  "status": "PENDING",
  "submitted_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid tier or evidence type |
| 409 | `KYC_ALREADY_PENDING` | A KYC verification is already pending for this account |
| 422 | `TIER_NOT_INCREMENTAL` | Cannot skip tiers (must progress TIER_1 → TIER_2 → TIER_3) |

---

#### EP-IDM-010 — Get KYC Status

| Field | Value |
|---|---|
| **ID** | EP-IDM-010 |
| **Method** | GET |
| **Path** | `/v1/identity/kyc-verifications/me` |
| **Purpose** | Get the current KYC verification status for the authenticated user |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IDM-005; SDD-1 Ch.6 |

**Response (200 OK):**

```json
{
  "current_tier": "TIER_1",
  "pending_verification": {
    "verification_id": "660e8400-e29b-41d4-a716-446655440000",
    "tier": "TIER_2",
    "status": "PENDING",
    "submitted_at": "2026-08-26T14:30:00Z"
  },
  "verification_history": [
    {
      "verification_id": "550e8400-e29b-41d4-a716-446655440000",
      "tier": "TIER_1",
      "status": "APPROVED",
      "submitted_at": "2026-08-20T10:00:00Z",
      "reviewed_at": "2026-08-21T12:00:00Z"
    }
  ]
}
```

---

#### EP-IDM-011 — Review KYC (Compliance)

| Field | Value |
|---|---|
| **ID** | EP-IDM-011 |
| **Method** | POST |
| **Path** | `/v1/identity/kyc-verifications/{verification_id}/review` |
| **Purpose** | Approve or reject a KYC verification (compliance officer only) |
| **Authentication** | Bearer token |
| **Authorization** | `compliance` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-IDM-005, SRS-IDM-006; SDD-1 Ch.6 |

**Request:**

```json
{
  "decision": "APPROVED",
  "rejection_reason": null
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `decision` | string | Yes | One of: `APPROVED`, `REJECTED` |
| `rejection_reason` | string | Yes if `REJECTED` | Min 10 chars |

**Response (200 OK):**

```json
{
  "verification_id": "660e8400-e29b-41d4-a716-446655440000",
  "status": "APPROVED",
  "reviewed_at": "2026-08-26T16:00:00Z",
  "reviewed_by": "admin-account-id"
}
```

---

### 4.6 MFA Management

#### EP-IDM-012 — Enroll MFA

| Field | Value |
|---|---|
| **ID** | EP-IDM-012 |
| **Method** | POST |
| **Path** | `/v1/identity/mfa-enrollments` |
| **Purpose** | Enroll a multi-factor authentication method |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IDM-003; SDD-1 Ch.6; DDD-1 Ch.6 |

**Request:**

```json
{
  "method": "TOTP"
}
```

**Response (201 Created):**

```json
{
  "enrollment_id": "770e8400-e29b-41d4-a716-446655440000",
  "method": "TOTP",
  "status": "ACTIVE",
  "totp_secret_qr": "otpauth://totp/K-NETWORK:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=K-NETWORK",
  "backup_codes": ["12345678", "23456789", "34567890", "45678901", "56789012"]
}
```

> **Note:** The TOTP secret and backup codes are returned only once during enrollment. They are stored encrypted and never returned again.

---

#### EP-IDM-013 — Disable MFA

| Field | Value |
|---|---|
| **ID** | EP-IDM-013 |
| **Method** | DELETE |
| **Path** | `/v1/identity/mfa-enrollments/{enrollment_id}` |
| **Purpose** | Disable an MFA enrollment |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (DELETE) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IDM-003 |

**Request:**

```json
{
  "mfa_code": "123456"
}
```

**Response (204 No Content)**

---

### 4.7 Account Lifecycle (Admin)

#### EP-IDM-014 — Suspend Account

| Field | Value |
|---|---|
| **ID** | EP-IDM-014 |
| **Method** | POST |
| **Path** | `/v1/identity/accounts/{account_id}/suspend` |
| **Purpose** | Suspend an account (admin only) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-IDM-006; SDD-1 Ch.6 |

**Request:**

```json
{
  "reason": "Fraudulent activity detected",
  "duration_hours": 72
}
```

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "SUSPENDED",
  "suspended_at": "2026-08-26T14:30:00Z",
  "suspended_by": "admin-account-id",
  "reason": "Fraudulent activity detected",
  "auto_reactivate_at": "2026-08-29T14:30:00Z"
}
```

---

#### EP-IDM-015 — Reactivate Account

| Field | Value |
|---|---|
| **ID** | EP-IDM-015 |
| **Method** | POST |
| **Path** | `/v1/identity/accounts/{account_id}/reactivate` |
| **Purpose** | Reactivate a suspended account (admin only) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-IDM-006 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "ACTIVE",
  "reactivated_at": "2026-08-26T16:00:00Z",
  "reactivated_by": "admin-account-id"
}
```

---

### 4.8 Referral

#### EP-IDM-016 — Get Referral Information

| Field | Value |
|---|---|
| **ID** | EP-IDM-016 |
| **Method** | GET |
| **Path** | `/v1/identity/accounts/me/referral` |
| **Purpose** | Get the user's referral code and referral statistics |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IDM-007; SDD-1 Ch.6 |

**Response (200 OK):**

```json
{
  "referral_code": "KNT-XYZ789",
  "referred_by": {
    "account_id": "440e8400-e29b-41d4-a716-446655440000",
    "display_name": "Referrer Name"
  },
  "referral_stats": {
    "total_referrals": 25,
    "active_referrals": 20,
    "qualified_referrals": 15
  },
  "referral_url": "https://k-network.com/join?ref=KNT-XYZ789"
}
```

---

### 4.9 Identity Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-IDM-001 | POST | `/v1/identity/accounts` | None | Register account |
| EP-IDM-002 | POST | `/v1/identity/accounts/verify-email` | None | Verify email |
| EP-IDM-003 | POST | `/v1/identity/sessions` | None | Login |
| EP-IDM-004 | POST | `/v1/identity/sessions/refresh` | None | Refresh token |
| EP-IDM-005 | POST | `/v1/identity/sessions/revoke` | Bearer | Logout |
| EP-IDM-006 | GET | `/v1/identity/accounts/me` | Bearer | Get current account |
| EP-IDM-007 | PATCH | `/v1/identity/accounts/me` | Bearer | Update account |
| EP-IDM-008 | POST | `/v1/identity/accounts/me/change-password` | Bearer | Change password |
| EP-IDM-009 | POST | `/v1/identity/kyc-verifications` | Bearer | Submit KYC |
| EP-IDM-010 | GET | `/v1/identity/kyc-verifications/me` | Bearer | Get KYC status |
| EP-IDM-011 | POST | `/v1/identity/kyc-verifications/{id}/review` | Compliance | Review KYC |
| EP-IDM-012 | POST | `/v1/identity/mfa-enrollments` | Bearer | Enroll MFA |
| EP-IDM-013 | DELETE | `/v1/identity/mfa-enrollments/{id}` | Bearer | Disable MFA |
| EP-IDM-014 | POST | `/v1/identity/accounts/{id}/suspend` | Admin | Suspend account |
| EP-IDM-015 | POST | `/v1/identity/accounts/{id}/reactivate` | Admin | Reactivate account |
| EP-IDM-016 | GET | `/v1/identity/accounts/me/referral` | Bearer | Get referral info |

### 4.10 Governing Requirement Traceability

SRS-IDM-001 (single account), SRS-IDM-002 (registration), SRS-IDM-003 (authentication), SRS-IDM-004 (session management), SRS-IDM-005 (KYC verification), SRS-IDM-006 (KYC/AML compliance), SRS-IDM-007 (shared identity); SDD-1 Ch.6; SAD-1 Ch.9; DDD-1 Ch.6; PLC-1 Ch.13.

---

## Chapter 5 — Trust Engine APIs

### 5.1 Overview

The Trust Engine APIs provide trust score retrieval, trust signal information, trust history, trust recovery, and trust gate threshold queries. Trust scores are multi-signal, transparent, and gate K-Rewards eligibility (SRS-TRU-001–005; SDD-1 Ch.7; SAD-1 Ch.10; DDD-1 Ch.7; KR-1 KR-TRU-001–011).

**Base path:** `/v1/trust`

**Authentication:** Bearer token for participant endpoints. Admin role for signal management.

### 5.2 Trust Score

#### EP-TRU-001 — Get Trust Score

| Field | Value |
|---|---|
| **ID** | EP-TRU-001 |
| **Method** | GET |
| **Path** | `/v1/trust/scores/me` |
| **Purpose** | Get the authenticated user's trust score |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-TRU-001; SDD-1 Ch.7; DDD-1 Ch.7 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "trust_score": "75.50",
  "score_tier": "TRUSTED",
  "signal_count": 42,
  "last_recalculated_at": "2026-08-26T14:30:00Z",
  "is_frozen": false,
  "frozen_reason": null
}
```

---

#### EP-TRU-002 — Get Trust Score by Account ID (Public)

| Field | Value |
|---|---|
| **ID** | EP-TRU-002 |
| **Method** | GET |
| **Path** | `/v1/trust/scores/{account_id}` |
| **Purpose** | Get a public summary of another participant's trust score (tier only, not the numeric score) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-TRU-001; SDD-1 Ch.7 |

**Response (200 OK):**

```json
{
  "account_id": "440e8400-e29b-41d4-a716-446655440000",
  "score_tier": "TRUSTED",
  "is_frozen": false
}
```

> **Note:** Only the trust tier is exposed publicly — not the numeric score. The numeric score is private to the account owner.

---

### 5.3 Trust Signals

#### EP-TRU-003 — Get Trust Signals

| Field | Value |
|---|---|
| **ID** | EP-TRU-003 |
| **Method** | GET |
| **Path** | `/v1/trust/signals` |
| **Purpose** | Get trust signals for the authenticated user |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-TRU-002; SDD-1 Ch.7 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `signal_type` | string | — | Filter by signal type |
| `created_at_from` | string | — | Filter signals from this date |
| `created_at_to` | string | — | Filter signals to this date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "signal_id": "880e8400-e29b-41d4-a716-446655440000",
      "signal_type": "TRANSACTION_COMPLETED",
      "signal_value": "2.50",
      "signal_source": "COMMERCE",
      "description": "Commerce order completed",
      "created_at": "2026-08-26T14:30:00Z",
      "is_reversed": false
    }
  ],
  "pagination": {
    "cursor": "eyJpZCI6Ijg4MCJ9",
    "has_more": true,
    "limit": 20
  }
}
```

---

### 5.4 Trust History

#### EP-TRU-004 — Get Trust History

| Field | Value |
|---|---|
| **ID** | EP-TRU-004 |
| **Method** | GET |
| **Path** | `/v1/trust/history` |
| **Purpose** | Get trust score history for the authenticated user |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-TRU-003; SDD-1 Ch.7 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |

**Response (200 OK):**

```json
{
  "data": [
    {
      "history_id": "990e8400-e29b-41d4-a716-446655440000",
      "trust_score": "75.50",
      "change_amount": "2.50",
      "change_reason": "TRANSACTION_COMPLETED",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

### 5.5 Trust Recovery

#### EP-TRU-005 — Get Trust Recovery Status

| Field | Value |
|---|---|
| **ID** | EP-TRU-005 |
| **Method** | GET |
| **Path** | `/v1/trust/recovery/me` |
| **Purpose** | Get trust recovery status for the authenticated user |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-TRU-003; SDD-1 Ch.7 |

**Response (200 OK):**

```json
{
  "is_in_recovery": true,
  "recovery_started_at": "2026-08-20T10:00:00Z",
  "current_score": "65.00",
  "target_score": "75.00",
  "recovery_actions_required": [
    "Complete 5 successful transactions",
    "Maintain account in good standing for 30 days"
  ],
  "actions_completed": 3,
  "actions_total": 5
}
```

---

### 5.6 Trust Gate Thresholds

#### EP-TRU-006 — Get Trust Gate Thresholds

| Field | Value |
|---|---|
| **ID** | EP-TRU-006 |
| **Method** | GET |
| **Path** | `/v1/trust/gate-thresholds` |
| **Purpose** | Get trust gate threshold configuration (public, governance parameters from KR-1) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-TRU-005; SDD-1 Ch.7; KR-1 KR-TRU-001–005 |

**Response (200 OK):**

```json
{
  "data": [
    {
      "gate_code": "KRW_ELIGIBILITY",
      "gate_name": "K-Rewards Eligibility",
      "threshold_score": "25.00",
      "applies_to": "ALL_PARTICIPANTS",
      "kr_rule_id": "KR-TRU-001"
    },
    {
      "gate_code": "LEADERSHIP_PROMOTION",
      "gate_name": "Leadership Promotion",
      "threshold_score": "40.00",
      "applies_to": "LEADERSHIP_TIER",
      "kr_rule_id": "KR-TRU-002"
    }
  ]
}
```

---

### 5.7 Trust Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-TRU-001 | GET | `/v1/trust/scores/me` | Bearer | Get own trust score |
| EP-TRU-002 | GET | `/v1/trust/scores/{account_id}` | Bearer | Get public trust tier |
| EP-TRU-003 | GET | `/v1/trust/signals` | Bearer | Get trust signals |
| EP-TRU-004 | GET | `/v1/trust/history` | Bearer | Get trust history |
| EP-TRU-005 | GET | `/v1/trust/recovery/me` | Bearer | Get trust recovery status |
| EP-TRU-006 | GET | `/v1/trust/gate-thresholds` | Bearer | Get gate thresholds |

### 5.8 Governing Requirement Traceability

SRS-TRU-001 (multi-signal trust score), SRS-TRU-002 (trust-gated eligibility), SRS-TRU-003 (trust recovery), SRS-TRU-004 (trust protection), SRS-TRU-005 (marketplace trust signals); SDD-1 Ch.7; SAD-1 Ch.10; DDD-1 Ch.7; KR-1 KR-TRU-001–011, Ch.40–43.

---

## Chapter 6 — Communication Engine APIs

### 6.1 Overview

The Communication Engine APIs provide notification management, notification preferences, direct messaging, announcements, and community contributions. The Communication Engine handles all platform-wide communication between the system and participants (SRS-MSG-001–004; SDD-1 Ch.13; SAD-1 Ch.12; DDD-1 Ch.12).

**Base path:** `/v1/communication`

**Authentication:** Bearer token for all endpoints.

### 6.2 Notifications

#### EP-MSG-001 — List Notifications

| Field | Value |
|---|---|
| **ID** | EP-MSG-001 |
| **Method** | GET |
| **Path** | `/v1/communication/notifications` |
| **Purpose** | List notifications for the authenticated user |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-MSG-001; SDD-1 Ch.13 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `status` | string | — | Filter by status: `UNREAD`, `READ` |
| `type` | string | — | Filter by notification type |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "notification_id": "aa0e8400-e29b-41d4-a716-446655440000",
      "type": "ORDER_SHIPPED",
      "title": "Your order has been shipped",
      "body": "Order #1000001 has been shipped via DHL.",
      "status": "UNREAD",
      "metadata": {
        "order_id": "bb0e8400-e29b-41d4-a716-446655440000"
      },
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... },
  "unread_count": 5
}
```

---

#### EP-MSG-002 — Mark Notification as Read

| Field | Value |
|---|---|
| **ID** | EP-MSG-002 |
| **Method** | POST |
| **Path** | `/v1/communication/notifications/{notification_id}/read` |
| **Purpose** | Mark a notification as read |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | Yes (idempotent action) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-MSG-001 |

**Response (200 OK):**

```json
{
  "notification_id": "aa0e8400-e29b-41d4-a716-446655440000",
  "status": "READ",
  "read_at": "2026-08-26T15:00:00Z"
}
```

---

#### EP-MSG-003 — Mark All Notifications as Read

| Field | Value |
|---|---|
| **ID** | EP-MSG-003 |
| **Method** | POST |
| **Path** | `/v1/communication/notifications/read-all` |
| **Purpose** | Mark all unread notifications as read |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-MSG-001 |

**Response (200 OK):**

```json
{
  "marked_count": 5,
  "marked_at": "2026-08-26T15:00:00Z"
}
```

---

### 6.3 Notification Preferences

#### EP-MSG-004 — Get Notification Preferences

| Field | Value |
|---|---|
| **ID** | EP-MSG-004 |
| **Method** | GET |
| **Path** | `/v1/communication/preferences` |
| **Purpose** | Get notification preferences for the authenticated user |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-MSG-002; SDD-1 Ch.13 |

**Response (200 OK):**

```json
{
  "preferences": [
    {
      "notification_type": "ORDER_SHIPPED",
      "channels": {
        "in_app": true,
        "email": true,
        "sms": false,
        "push": true
      }
    },
    {
      "notification_type": "REWARD_DISTRIBUTED",
      "channels": {
        "in_app": true,
        "email": true,
        "sms": false,
        "push": true
      }
    }
  ]
}
```

---

#### EP-MSG-005 — Update Notification Preferences

| Field | Value |
|---|---|
| **ID** | EP-MSG-005 |
| **Method** | PUT |
| **Path** | `/v1/communication/preferences` |
| **Purpose** | Update notification preferences |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | Yes (PUT) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-MSG-002 |

**Request:**

```json
{
  "preferences": [
    {
      "notification_type": "ORDER_SHIPPED",
      "channels": {
        "in_app": true,
        "email": false,
        "sms": false,
        "push": true
      }
    }
  ]
}
```

**Response (200 OK):** Returns the updated preferences (same as EP-MSG-004).

---

### 6.4 Messages

#### EP-MSG-006 — List Messages

| Field | Value |
|---|---|
| **ID** | EP-MSG-006 |
| **Method** | GET |
| **Path** | `/v1/communication/messages` |
| **Purpose** | List messages (conversations) for the authenticated user |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-MSG-003; SDD-1 Ch.13 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `other_account_id` | string | — | Filter messages with a specific participant |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |

**Response (200 OK):**

```json
{
  "data": [
    {
      "message_id": "cc0e8400-e29b-41d4-a716-446655440000",
      "from_account_id": "550e8400-e29b-41d4-a716-446655440000",
      "to_account_id": "440e8400-e29b-41d4-a716-446655440000",
      "body": "Hello, is this product still available?",
      "metadata": {
        "product_id": "dd0e8400-e29b-41d4-a716-446655440000"
      },
      "created_at": "2026-08-26T14:30:00Z",
      "is_read": false
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-MSG-007 — Send Message

| Field | Value |
|---|---|
| **ID** | EP-MSG-007 |
| **Method** | POST |
| **Path** | `/v1/communication/messages` |
| **Purpose** | Send a message to another participant |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-MSG-003; SDD-1 Ch.13 |

**Request:**

```json
{
  "to_account_id": "440e8400-e29b-41d4-a716-446655440000",
  "body": "Hello, is this product still available?",
  "metadata": {
    "product_id": "dd0e8400-e29b-41d4-a716-446655440000"
  }
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `to_account_id` | string (UUID) | Yes | Must be an active account |
| `body` | string | Yes | Min 1, max 2000 chars |
| `metadata` | object | No | Optional context (product_id, order_id, etc.) |

**Response (201 Created):**

```json
{
  "message_id": "cc0e8400-e29b-41d4-a716-446655440000",
  "from_account_id": "550e8400-e29b-41d4-a716-446655440000",
  "to_account_id": "440e8400-e29b-41d4-a716-446655440000",
  "body": "Hello, is this product still available?",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Body too long or missing |
| 404 | `ACCOUNT_NOT_FOUND` | Recipient account does not exist |
| 403 | `ACCOUNT_BLOCKED` | Recipient has blocked the sender |

---

### 6.5 Announcements

#### EP-MSG-008 — List Announcements

| Field | Value |
|---|---|
| **ID** | EP-MSG-008 |
| **Method** | GET |
| **Path** | `/v1/communication/announcements` |
| **Purpose** | List platform announcements |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-MSG-004; SDD-1 Ch.13 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `status` | string | `ACTIVE` | Filter by status |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |

**Response (200 OK):**

```json
{
  "data": [
    {
      "announcement_id": "ee0e8400-e29b-41d4-a716-446655440000",
      "title": "New K-Rewards cycle starting",
      "body": "The August 2026 reward cycle begins on September 1st.",
      "priority": "HIGH",
      "published_at": "2026-08-26T10:00:00Z",
      "expires_at": "2026-09-01T00:00:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

### 6.6 Communication Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-MSG-001 | GET | `/v1/communication/notifications` | Bearer | List notifications |
| EP-MSG-002 | POST | `/v1/communication/notifications/{id}/read` | Bearer | Mark notification as read |
| EP-MSG-003 | POST | `/v1/communication/notifications/read-all` | Bearer | Mark all as read |
| EP-MSG-004 | GET | `/v1/communication/preferences` | Bearer | Get notification preferences |
| EP-MSG-005 | PUT | `/v1/communication/preferences` | Bearer | Update notification preferences |
| EP-MSG-006 | GET | `/v1/communication/messages` | Bearer | List messages |
| EP-MSG-007 | POST | `/v1/communication/messages` | Bearer | Send message |
| EP-MSG-008 | GET | `/v1/communication/announcements` | Bearer | List announcements |

### 6.7 Governing Requirement Traceability

SRS-MSG-001 (notifications), SRS-MSG-002 (notification preferences), SRS-MSG-003 (messages), SRS-MSG-004 (announcements); SDD-1 Ch.13; SAD-1 Ch.12; DDD-1 Ch.12.

---

# Part III — Commerce and Services APIs

## Chapter 7 — Commerce Engine APIs

### 7.1 Overview

The Commerce Engine APIs provide a complete multi-vendor marketplace API: vendor onboarding, store management, product catalog, variants, search, cart, checkout, orders, fulfilment, tracking, returns, refunds, disputes, reviews, and settlements. All commerce settlements follow the 90/10 principle with check constraints enforced at the database level (SRS-COM-001–022; SDD-1 Ch.4; SAD-1 Ch.11; DDD-1 Ch.8; PLC-1 Ch.28; KR-1 KR-ECO-014).

**Base path:** `/v1/commerce`

**Authentication:** Bearer token for all endpoints. Vendor endpoints require `vendor` role. Admin endpoints require `admin` role. Public catalog endpoints (product browsing, search) require authentication but no special role.

### 7.2 Vendor Onboarding

#### EP-COM-001 — Register Vendor

| Field | Value |
|---|---|
| **ID** | EP-COM-001 |
| **Method** | POST |
| **Path** | `/v1/commerce/vendors` |
| **Purpose** | Register as a vendor on the platform |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant (KYC TIER_2+ required) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-001; SDD-1 Ch.4; DDD-1 Ch.8 |

**Request:**

```json
{
  "business_name": "Acme Trading Ltd",
  "business_type": "REGISTERED_COMPANY",
  "description": "Quality electronics and accessories",
  "contact_email": "vendor@acme.com",
  "contact_phone": "+254712345678",
  "business_address": {
    "line1": "123 Main Street",
    "city": "Nairobi",
    "country": "KE",
    "postal_code": "00100"
  },
  "tax_id": "P051234567A"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `business_name` | string | Yes | Min 2, max 200 chars |
| `business_type` | string | Yes | One of: `INDIVIDUAL`, `REGISTERED_COMPANY` |
| `description` | string | No | Max 2000 chars |
| `contact_email` | string | Yes | Valid email |
| `contact_phone` | string | Yes | E.164 format |
| `business_address` | object | Yes | Address object with line1, city, country, postal_code |
| `tax_id` | string | No | Tax identification number |

**Response (201 Created):**

```json
{
  "vendor_id": "ff0e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "business_name": "Acme Trading Ltd",
  "status": "PENDING",
  "kyc_tier_required": "TIER_2",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid business name, address, or contact info |
| 403 | `KYC_INSUFFICIENT` | Account KYC tier is below TIER_2 |
| 409 | `VENDOR_ALREADY_EXISTS` | Account already has an active vendor registration |
| 422 | `TRUST_GATE_NOT_MET` | Trust score below threshold for vendor eligibility |

---

#### EP-COM-002 — Get Vendor Profile

| Field | Value |
|---|---|
| **ID** | EP-COM-002 |
| **Method** | GET |
| **Path** | `/v1/commerce/vendors/me` |
| **Purpose** | Get the authenticated vendor's profile |
| **Authentication** | Bearer token |
| **Authorization** | `vendor` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-001; SDD-1 Ch.4 |

**Response (200 OK):**

```json
{
  "vendor_id": "ff0e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "business_name": "Acme Trading Ltd",
  "business_type": "REGISTERED_COMPANY",
  "description": "Quality electronics and accessories",
  "status": "ACTIVE",
  "contact_email": "vendor@acme.com",
  "contact_phone": "+254712345678",
  "business_address": { ... },
  "tax_id": "P051234567A",
  "reputation_score": "85.50",
  "total_products": 120,
  "total_orders": 1500,
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-COM-003 — Update Vendor Profile

| Field | Value |
|---|---|
| **ID** | EP-COM-003 |
| **Method** | PATCH |
| **Path** | `/v1/commerce/vendors/me` |
| **Purpose** | Update the vendor's profile |
| **Authentication** | Bearer token |
| **Authorization** | `vendor` role |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-001 |

**Request:**

```json
{
  "description": "Updated description",
  "contact_email": "new-vendor@acme.com",
  "contact_phone": "+254712345679"
}
```

**Response (200 OK):** Returns the updated vendor profile (same as EP-COM-002).

---

### 7.3 Stores

#### EP-COM-004 — Create Store

| Field | Value |
|---|---|
| **ID** | EP-COM-004 |
| **Method** | POST |
| **Path** | `/v1/commerce/stores` |
| **Purpose** | Create a storefront for a vendor |
| **Authentication** | Bearer token |
| **Authorization** | `vendor` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-005; SDD-1 Ch.4 |

**Request:**

```json
{
  "store_name": "Acme Electronics",
  "description": "Premium electronics store",
  "logo_url": "https://cdn.k-network.com/logos/acme.png",
  "banner_url": "https://cdn.k-network.com/banners/acme.png",
  "slug": "acme-electronics"
}
```

**Response (201 Created):**

```json
{
  "store_id": "00f1e8400-e29b-41d4-a716-446655440000",
  "vendor_id": "ff0e8400-e29b-41d4-a716-446655440000",
  "store_name": "Acme Electronics",
  "slug": "acme-electronics",
  "status": "ACTIVE",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid store name or slug |
| 409 | `SLUG_ALREADY_EXISTS` | Store slug is already in use |

---

#### EP-COM-005 — Get Store

| Field | Value |
|---|---|
| **ID** | EP-COM-005 |
| **Method** | GET |
| **Path** | `/v1/commerce/stores/{store_id}` |
| **Purpose** | Get a store by ID (public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-COM-005 |

**Response (200 OK):**

```json
{
  "store_id": "00f1e8400-e29b-41d4-a716-446655440000",
  "vendor_id": "ff0e8400-e29b-41d4-a716-446655440000",
  "store_name": "Acme Electronics",
  "description": "Premium electronics store",
  "logo_url": "https://cdn.k-network.com/logos/acme.png",
  "banner_url": "https://cdn.k-network.com/banners/acme.png",
  "slug": "acme-electronics",
  "status": "ACTIVE",
  "product_count": 120,
  "rating_average": "4.5",
  "rating_count": 350
}
```

---

### 7.4 Product Catalog

#### EP-COM-006 — Create Product

| Field | Value |
|---|---|
| **ID** | EP-COM-006 |
| **Method** | POST |
| **Path** | `/v1/commerce/products` |
| **Purpose** | Create a new product |
| **Authentication** | Bearer token |
| **Authorization** | `vendor` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | High tier |
| **Implements** | SRS-COM-002; SDD-1 Ch.4; DDD-1 Ch.8 |

**Request:**

```json
{
  "store_id": "00f1e8400-e29b-41d4-a716-446655440000",
  "name": "Wireless Bluetooth Headphones",
  "description": "High-quality wireless headphones with noise cancellation",
  "category_id": "11f1e8400-e29b-41d4-a716-446655440000",
  "price": "89.99",
  "currency": "USD",
  "sku": "WBH-001",
  "attributes": {
    "color": "Black",
    "brand": "Acme",
    "warranty_months": 12
  },
  "images": [
    "https://cdn.k-network.com/products/img1.png",
    "https://cdn.k-network.com/products/img2.png"
  ],
  "weight": "0.35",
  "weight_unit": "KG"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `store_id` | string (UUID) | Yes | Must belong to the authenticated vendor |
| `name` | string | Yes | Min 2, max 500 chars |
| `description` | string | No | Max 5000 chars |
| `category_id` | string (UUID) | Yes | Must be an active category |
| `price` | string | Yes | Decimal string, 2 places, > 0 |
| `currency` | string | Yes | ISO 4217 (e.g., "USD") |
| `sku` | string | No | Unique within the store |
| `attributes` | object | No | Key-value product attributes |
| `images` | array[string] | No | URLs to product images (max 10) |
| `weight` | string | No | Decimal string (for shipping) |
| `weight_unit` | string | No | `KG` or `LB` |

**Response (201 Created):**

```json
{
  "product_id": "22f1e8400-e29b-41d4-a716-446655440000",
  "store_id": "00f1e8400-e29b-41d4-a716-446655440000",
  "name": "Wireless Bluetooth Headphones",
  "slug": "wireless-bluetooth-headphones",
  "price": "89.99",
  "currency": "USD",
  "status": "ACTIVE",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid product data |
| 403 | `STORE_NOT_OWNED` | Store does not belong to the authenticated vendor |
| 404 | `CATEGORY_NOT_FOUND` | Category ID does not exist |
| 409 | `SKU_ALREADY_EXISTS` | SKU already exists in this store |

---

#### EP-COM-007 — Get Product

| Field | Value |
|---|---|
| **ID** | EP-COM-007 |
| **Method** | GET |
| **Path** | `/v1/commerce/products/{product_id}` |
| **Purpose** | Get a product by ID (public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-COM-002, SRS-COM-009; SDD-1 Ch.4 |

**Response (200 OK):**

```json
{
  "product_id": "22f1e8400-e29b-41d4-a716-446655440000",
  "store_id": "00f1e8400-e29b-41d4-a716-446655440000",
  "vendor": {
    "vendor_id": "ff0e8400-e29b-41d4-a716-446655440000",
    "business_name": "Acme Trading Ltd"
  },
  "name": "Wireless Bluetooth Headphones",
  "description": "High-quality wireless headphones with noise cancellation",
  "slug": "wireless-bluetooth-headphones",
  "category": {
    "category_id": "11f1e8400-e29b-41d4-a716-446655440000",
    "name": "Electronics"
  },
  "price": "89.99",
  "currency": "USD",
  "sku": "WBH-001",
  "attributes": {
    "color": "Black",
    "brand": "Acme",
    "warranty_months": 12
  },
  "images": [ ... ],
  "weight": "0.35",
  "weight_unit": "KG",
  "inventory": {
    "quantity_on_hand": 150,
    "is_in_stock": true
  },
  "rating_average": "4.5",
  "rating_count": 45,
  "status": "ACTIVE",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-COM-008 — Update Product

| Field | Value |
|---|---|
| **ID** | EP-COM-008 |
| **Method** | PATCH |
| **Path** | `/v1/commerce/products/{product_id}` |
| **Purpose** | Update a product (vendor only) |
| **Authentication** | Bearer token |
| **Authorization** | `vendor` role (owner of the product's store) |
| **Idempotency** | No |
| **Rate Limit** | High tier |
| **Implements** | SRS-COM-002 |

**Request:**

```json
{
  "name": "Updated Product Name",
  "price": "79.99",
  "description": "Updated description"
}
```

**Response (200 OK):** Returns the updated product (same as EP-COM-007).

---

#### EP-COM-009 — Delete Product

| Field | Value |
|---|---|
| **ID** | EP-COM-009 |
| **Method** | DELETE |
| **Path** | `/v1/commerce/products/{product_id}` |
| **Purpose** | Soft-delete a product (vendor only) |
| **Authentication** | Bearer token |
| **Authorization** | `vendor` role (owner) |
| **Idempotency** | N/A (DELETE) |
| **Rate Limit** | High tier |
| **Implements** | SRS-COM-002 |

**Response (204 No Content)**

---

### 7.5 Product Variants

#### EP-COM-010 — Create Variant

| Field | Value |
|---|---|
| **ID** | EP-COM-010 |
| **Method** | POST |
| **Path** | `/v1/commerce/products/{product_id}/variants` |
| **Purpose** | Create a product variant (e.g., different color/size) |
| **Authentication** | Bearer token |
| **Authorization** | `vendor` role (owner) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | High tier |
| **Implements** | SRS-COM-003; SDD-1 Ch.4 |

**Request:**

```json
{
  "sku": "WBH-001-BLUE",
  "price": "94.99",
  "attributes": {
    "color": "Blue"
  },
  "inventory_quantity": 50
}
```

**Response (201 Created):**

```json
{
  "variant_id": "33f1e8400-e29b-41d4-a716-446655440000",
  "product_id": "22f1e8400-e29b-41d4-a716-446655440000",
  "sku": "WBH-001-BLUE",
  "price": "94.99",
  "attributes": {
    "color": "Blue"
  },
  "inventory": {
    "quantity_on_hand": 50,
    "is_in_stock": true
  },
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

### 7.6 Search and Filtering

#### EP-COM-011 — Search Products

| Field | Value |
|---|---|
| **ID** | EP-COM-011 |
| **Method** | GET |
| **Path** | `/v1/commerce/products` |
| **Purpose** | Search and filter products (public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-COM-007, SRS-COM-008, SRS-COM-009; SDD-1 Ch.4 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `q` | string | — | Full-text search query |
| `category_id` | string | — | Filter by category |
| `store_id` | string | — | Filter by store |
| `vendor_id` | string | — | Filter by vendor |
| `price_min` | string | — | Minimum price |
| `price_max` | string | — | Maximum price |
| `currency` | string | `USD` | Currency for price filters |
| `attributes` | string | — | JSON-encoded attribute filters (e.g., `{"color":"Black"}`) |
| `in_stock` | boolean | — | Filter to in-stock items only |
| `sort` | string | `relevance` | `relevance`, `-price`, `price`, `-created_at`, `-rating` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |

**Response (200 OK):**

```json
{
  "data": [
    {
      "product_id": "22f1e8400-e29b-41d4-a716-446655440000",
      "name": "Wireless Bluetooth Headphones",
      "price": "89.99",
      "currency": "USD",
      "thumbnail": "https://cdn.k-network.com/products/img1-thumb.png",
      "store_name": "Acme Electronics",
      "rating_average": "4.5",
      "is_in_stock": true
    }
  ],
  "pagination": { ... },
  "facets": {
    "categories": [
      {"category_id": "11f1e8400...", "name": "Electronics", "count": 45}
    ],
    "price_range": {
      "min": "5.00",
      "max": "500.00"
    },
    "attributes": {
      "color": [
        {"value": "Black", "count": 20},
        {"value": "Blue", "count": 15}
      ]
    }
  }
}
```

---

#### EP-COM-012 — List Categories

| Field | Value |
|---|---|
| **ID** | EP-COM-012 |
| **Method** | GET |
| **Path** | `/v1/commerce/categories` |
| **Purpose** | List product categories (public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-COM-006, SRS-COM-018; SDD-1 Ch.4 |

**Response (200 OK):**

```json
{
  "data": [
    {
      "category_id": "11f1e8400-e29b-41d4-a716-446655440000",
      "name": "Electronics",
      "slug": "electronics",
      "parent_id": null,
      "product_count": 450
    },
    {
      "category_id": "44f1e8400-e29b-41d4-a716-446655440000",
      "name": "Audio",
      "slug": "electronics-audio",
      "parent_id": "11f1e8400-e29b-41d4-a716-446655440000",
      "product_count": 120
    }
  ]
}
```

---

### 7.7 Cart and Checkout

#### EP-COM-013 — Get Cart

| Field | Value |
|---|---|
| **ID** | EP-COM-013 |
| **Method** | GET |
| **Path** | `/v1/commerce/cart` |
| **Purpose** | Get the authenticated user's shopping cart |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-007; SDD-1 Ch.4 |

**Response (200 OK):**

```json
{
  "cart_id": "55f1e8400-e29b-41d4-a716-446655440000",
  "items": [
    {
      "cart_item_id": "66f1e8400-e29b-41d4-a716-446655440000",
      "product_id": "22f1e8400-e29b-41d4-a716-446655440000",
      "variant_id": "33f1e8400-e29b-41d4-a716-446655440000",
      "name": "Wireless Bluetooth Headphones",
      "price": "94.99",
      "currency": "USD",
      "quantity": 2,
      "subtotal": "189.98",
      "thumbnail": "https://cdn.k-network.com/products/img1-thumb.png"
    }
  ],
  "subtotal": "189.98",
  "currency": "USD",
  "item_count": 2,
  "updated_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-COM-014 — Add Item to Cart

| Field | Value |
|---|---|
| **ID** | EP-COM-014 |
| **Method** | POST |
| **Path** | `/v1/commerce/cart/items` |
| **Purpose** | Add a product to the cart |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-007 |

**Request:**

```json
{
  "product_id": "22f1e8400-e29b-41d4-a716-446655440000",
  "variant_id": "33f1e8400-e29b-41d4-a716-446655440000",
  "quantity": 2
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `product_id` | string (UUID) | Yes | Must be an active product |
| `variant_id` | string (UUID) | No | If product has variants, a variant_id is required |
| `quantity` | integer | Yes | Min 1, max 99 |

**Response (201 Created):**

```json
{
  "cart_item_id": "66f1e8400-e29b-41d4-a716-446655440000",
  "product_id": "22f1e8400-e29b-41d4-a716-446655440000",
  "name": "Wireless Bluetooth Headphones",
  "price": "94.99",
  "quantity": 2,
  "subtotal": "189.98"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 404 | `PRODUCT_NOT_FOUND` | Product does not exist or is not active |
| 404 | `VARIANT_NOT_FOUND` | Variant does not exist |
| 422 | `OUT_OF_STOCK` | Requested quantity exceeds available inventory |
| 422 | `VARIANT_REQUIRED` | Product has variants but no variant_id provided |

---

#### EP-COM-015 — Update Cart Item

| Field | Value |
|---|---|
| **ID** | EP-COM-015 |
| **Method** | PATCH |
| **Path** | `/v1/commerce/cart/items/{cart_item_id}` |
| **Purpose** | Update cart item quantity |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-007 |

**Request:**

```json
{
  "quantity": 3
}
```

**Response (200 OK):** Returns the updated cart item.

---

#### EP-COM-016 — Remove Cart Item

| Field | Value |
|---|---|
| **ID** | EP-COM-016 |
| **Method** | DELETE |
| **Path** | `/v1/commerce/cart/items/{cart_item_id}` |
| **Purpose** | Remove an item from the cart |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (DELETE) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-007 |

**Response (204 No Content)**

---

#### EP-COM-017 — Checkout

| Field | Value |
|---|---|
| **ID** | EP-COM-017 |
| **Method** | POST |
| **Path** | `/v1/commerce/checkout` |
| **Purpose** | Convert the cart into an order (checkout) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self); KYC TIER_1+ required |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-010; SDD-1 Ch.4; DDD-1 Ch.8 |

**Request:**

```json
{
  "shipping_address": {
    "line1": "123 Main Street",
    "city": "Nairobi",
    "country": "KE",
    "postal_code": "00100"
  },
  "billing_address": {
    "line1": "123 Main Street",
    "city": "Nairobi",
    "country": "KE",
    "postal_code": "00100"
  },
  "shipping_method": "STANDARD",
  "payment_method_id": "77f1e8400-e29b-41d4-a716-446655440000",
  "promo_code": "SAVE10"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `shipping_address` | object | Yes | Valid address |
| `billing_address` | object | No | Defaults to shipping address |
| `shipping_method` | string | Yes | One of: `STANDARD`, `EXPRESS`, `SAME_DAY` |
| `payment_method_id` | string (UUID) | Yes | Must be a valid payment method for the account |
| `promo_code` | string | No | Must be an active promotion code |

**Response (201 Created):**

```json
{
  "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
  "order_number": 1000001,
  "status": "CONFIRMED",
  "subtotal": "189.98",
  "shipping_cost": "15.00",
  "tax_amount": "20.00",
  "discount_amount": "19.00",
  "total_amount": "205.98",
  "currency": "USD",
  "payment_status": "PAID",
  "items": [ ... ],
  "estimated_delivery": "2026-09-02T00:00:00Z",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid address or shipping method |
| 403 | `KYC_INSUFFICIENT` | Account KYC tier is below TIER_1 |
| 422 | `CART_EMPTY` | Cart has no items |
| 422 | `OUT_OF_STOCK` | One or more items are out of stock |
| 422 | `PAYMENT_FAILED` | Payment method could not be charged |
| 422 | `INVALID_PROMO_CODE` | Promo code is invalid or expired |

---

### 7.8 Orders

#### EP-COM-018 — List Orders

| Field | Value |
|---|---|
| **ID** | EP-COM-018 |
| **Method** | GET |
| **Path** | `/v1/commerce/orders` |
| **Purpose** | List orders for the authenticated user (as buyer) or vendor (as seller) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) or `vendor` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-017; SDD-1 Ch.4 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `role` | string | `buyer` | `buyer` or `vendor` (perspective) |
| `status` | string | — | Filter by order status |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
      "order_number": 1000001,
      "status": "SHIPPED",
      "total_amount": "205.98",
      "currency": "USD",
      "payment_status": "PAID",
      "item_count": 2,
      "created_at": "2026-08-26T14:30:00Z",
      "shipped_at": "2026-08-27T10:00:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-COM-019 — Get Order

| Field | Value |
|---|---|
| **ID** | EP-COM-019 |
| **Method** | GET |
| **Path** | `/v1/commerce/orders/{order_id}` |
| **Purpose** | Get order details |
| **Authentication** | Bearer token |
| **Authorization** | Owner (buyer) or `vendor` role (seller) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-017; SDD-1 Ch.4 |

**Response (200 OK):**

```json
{
  "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
  "order_number": 1000001,
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "SHIPPED",
  "items": [
    {
      "order_item_id": "99f1e8400-e29b-41d4-a716-446655440000",
      "product_id": "22f1e8400-e29b-41d4-a716-446655440000",
      "variant_id": "33f1e8400-e29b-41d4-a716-446655440000",
      "name": "Wireless Bluetooth Headphones",
      "price": "94.99",
      "quantity": 2,
      "subtotal": "189.98",
      "vendor_id": "ff0e8400-e29b-41d4-a716-446655440000"
    }
  ],
  "subtotal": "189.98",
  "shipping_cost": "15.00",
  "tax_amount": "20.00",
  "discount_amount": "19.00",
  "total_amount": "205.98",
  "currency": "USD",
  "payment_status": "PAID",
  "shipping_address": { ... },
  "shipping_method": "STANDARD",
  "tracking_number": "DHL123456789",
  "carrier": "DHL",
  "status_history": [
    {"status": "CONFIRMED", "at": "2026-08-26T14:30:00Z"},
    {"status": "PAID", "at": "2026-08-26T14:31:00Z"},
    {"status": "SHIPPED", "at": "2026-08-27T10:00:00Z"}
  ],
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-COM-020 — Cancel Order

| Field | Value |
|---|---|
| **ID** | EP-COM-020 |
| **Method** | POST |
| **Path** | `/v1/commerce/orders/{order_id}/cancel` |
| **Purpose** | Cancel an order (buyer or vendor, depending on status) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (buyer) or `vendor` role (seller) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-008; SDD-1 Ch.4 |

**Request:**

```json
{
  "reason": "Changed my mind"
}
```

**Response (200 OK):**

```json
{
  "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
  "status": "CANCELLED",
  "cancelled_at": "2026-08-26T16:00:00Z",
  "refund_status": "PENDING"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 409 | `INVALID_STATE_TRANSITION` | Order cannot be cancelled in its current status (e.g., already shipped) |

---

### 7.9 Fulfilment and Tracking

#### EP-COM-021 — Get Shipments

| Field | Value |
|---|---|
| **ID** | EP-COM-021 |
| **Method** | GET |
| **Path** | `/v1/commerce/orders/{order_id}/shipments` |
| **Purpose** | Get shipment details for an order |
| **Authentication** | Bearer token |
| **Authorization** | Owner (buyer) or `vendor` role (seller) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-009, SRS-COM-021; SDD-1 Ch.4 |

**Response (200 OK):**

```json
{
  "data": [
    {
      "shipment_id": "aaf1e8400-e29b-41d4-a716-446655440000",
      "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
      "carrier": "DHL",
      "tracking_number": "DHL123456789",
      "status": "IN_TRANSIT",
      "shipped_at": "2026-08-27T10:00:00Z",
      "estimated_delivery": "2026-09-02T00:00:00Z",
      "tracking_events": [
        {"status": "PICKED_UP", "location": "Nairobi, KE", "at": "2026-08-27T10:00:00Z"},
        {"status": "IN_TRANSIT", "location": "Dubai, AE", "at": "2026-08-28T08:00:00Z"}
      ]
    }
  ]
}
```

---

#### EP-COM-022 — Create Shipment (Vendor)

| Field | Value |
|---|---|
| **ID** | EP-COM-022 |
| **Method** | POST |
| **Path** | `/v1/commerce/orders/{order_id}/shipments` |
| **Purpose** | Create a shipment for an order (vendor only) |
| **Authentication** | Bearer token |
| **Authorization** | `vendor` role (seller of the order) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-009; SDD-1 Ch.4 |

**Request:**

```json
{
  "carrier": "DHL",
  "tracking_number": "DHL123456789",
  "shipping_method": "STANDARD",
  "estimated_delivery": "2026-09-02T00:00:00Z"
}
```

**Response (201 Created):**

```json
{
  "shipment_id": "aaf1e8400-e29b-41d4-a716-446655440000",
  "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
  "carrier": "DHL",
  "tracking_number": "DHL123456789",
  "status": "SHIPPED",
  "shipped_at": "2026-08-27T10:00:00Z"
}
```

---

### 7.10 Returns, Refunds, and Disputes

#### EP-COM-023 — Request Return

| Field | Value |
|---|---|
| **ID** | EP-COM-023 |
| **Method** | POST |
| **Path** | `/v1/commerce/orders/{order_id}/returns` |
| **Purpose** | Request a return for an order item |
| **Authentication** | Bearer token |
| **Authorization** | Owner (buyer) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-010; SDD-1 Ch.4 |

**Request:**

```json
{
  "order_item_id": "99f1e8400-e29b-41d4-a716-446655440000",
  "reason": "Product defective",
  "description": "The headphones do not charge properly.",
  "requested_refund_amount": "94.99"
}
```

**Response (201 Created):**

```json
{
  "return_id": "bbf1e8400-e29b-41d4-a716-446655440000",
  "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
  "order_item_id": "99f1e8400-e29b-41d4-a716-446655440000",
  "status": "PENDING",
  "requested_refund_amount": "94.99",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-COM-024 — Process Refund (Vendor/Admin)

| Field | Value |
|---|---|
| **ID** | EP-COM-024 |
| **Method** | POST |
| **Path** | `/v1/commerce/returns/{return_id}/refund` |
| **Purpose** | Process a refund for an approved return (vendor or admin) |
| **Authentication** | Bearer token |
| **Authorization** | `vendor` role (seller) or `admin` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-011; SDD-1 Ch.4 |

**Request:**

```json
{
  "refund_amount": "94.99",
  "reason": "Product defective — full refund approved"
}
```

**Response (201 Created):**

```json
{
  "refund_id": "ccf1e8400-e29b-41d4-a716-446655440000",
  "return_id": "bbf1e8400-e29b-41d4-a716-446655440000",
  "refund_amount": "94.99",
  "currency": "USD",
  "status": "PROCESSED",
  "processed_at": "2026-08-26T16:00:00Z"
}
```

---

#### EP-COM-025 — Create Dispute

| Field | Value |
|---|---|
| **ID** | EP-COM-025 |
| **Method** | POST |
| **Path** | `/v1/commerce/disputes` |
| **Purpose** | Create a dispute for an order |
| **Authentication** | Bearer token |
| **Authorization** | Owner (buyer) or `vendor` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-012; SDD-1 Ch.4 |

**Request:**

```json
{
  "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
  "subject": "Product not as described",
  "description": "The headphones received do not match the product images.",
  "evidence_urls": [
    "https://cdn.k-network.com/evidence/photo1.png"
  ]
}
```

**Response (201 Created):**

```json
{
  "dispute_id": "ddf1e8400-e29b-41d4-a716-446655440000",
  "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
  "status": "OPEN",
  "subject": "Product not as described",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-COM-026 — Resolve Dispute (Admin)

| Field | Value |
|---|---|
| **ID** | EP-COM-026 |
| **Method** | POST |
| **Path** | `/v1/commerce/disputes/{dispute_id}/resolve` |
| **Purpose** | Resolve a dispute (admin only) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-COM-012; SDD-1 Ch.4 |

**Request:**

```json
{
  "resolution": "BUYER_FAVORED",
  "refund_amount": "94.99",
  "notes": "Evidence supports buyer's claim. Full refund issued."
}
```

**Response (200 OK):**

```json
{
  "dispute_id": "ddf1e8400-e29b-41d4-a716-446655440000",
  "status": "RESOLVED",
  "resolution": "BUYER_FAVORED",
  "resolved_at": "2026-08-26T18:00:00Z",
  "resolved_by": "admin-account-id"
}
```

---

### 7.11 Reviews

#### EP-COM-027 — Create Review

| Field | Value |
|---|---|
| **ID** | EP-COM-027 |
| **Method** | POST |
| **Path** | `/v1/commerce/products/{product_id}/reviews` |
| **Purpose** | Create a product review (verified purchase only) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self); must have a completed order for this product |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-013; SDD-1 Ch.4 |

**Request:**

```json
{
  "rating": 5,
  "title": "Excellent headphones",
  "body": "Great sound quality and noise cancellation.",
  "order_id": "88f1e8400-e29b-41d4-a716-446655440000"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `rating` | integer | Yes | 1–5 |
| `title` | string | Yes | Min 2, max 200 chars |
| `body` | string | No | Max 2000 chars |
| `order_id` | string (UUID) | Yes | Must be a completed order for this product |

**Response (201 Created):**

```json
{
  "review_id": "eef1e8400-e29b-41d4-a716-446655440000",
  "product_id": "22f1e8400-e29b-41d4-a716-446655440000",
  "rating": 5,
  "title": "Excellent headphones",
  "body": "Great sound quality and noise cancellation.",
  "is_verified_purchase": true,
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 403 | `NOT_VERIFIED_PURCHASE` | No completed order for this product |
| 409 | `REVIEW_ALREADY_EXISTS` | Already reviewed this product |

---

#### EP-COM-028 — List Reviews

| Field | Value |
|---|---|
| **ID** | EP-COM-028 |
| **Method** | GET |
| **Path** | `/v1/commerce/products/{product_id}/reviews` |
| **Purpose** | List reviews for a product (public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-COM-013; SDD-1 Ch.4 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `rating` | integer | — | Filter by rating (1–5) |
| `verified_only` | boolean | `false` | Show only verified purchases |
| `sort` | string | `-created_at` | Sort order |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |

**Response (200 OK):**

```json
{
  "data": [
    {
      "review_id": "eef1e8400-e29b-41d4-a716-446655440000",
      "rating": 5,
      "title": "Excellent headphones",
      "body": "Great sound quality and noise cancellation.",
      "is_verified_purchase": true,
      "author_display_name": "John D.",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... },
  "rating_summary": {
    "average": "4.5",
    "count": 45,
    "distribution": {
      "5": 30, "4": 10, "3": 3, "2": 1, "1": 1
    }
  }
}
```

---

### 7.12 Settlements

#### EP-COM-029 — List Commerce Settlements (Vendor)

| Field | Value |
|---|---|
| **ID** | EP-COM-029 |
| **Method** | GET |
| **Path** | `/v1/commerce/settlements` |
| **Purpose** | List commerce settlements for the authenticated vendor |
| **Authentication** | Bearer token |
| **Authorization** | `vendor` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-COM-015, SRS-COM-022; SDD-1 Ch.4; DDD-1 Ch.8 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `status` | string | — | Filter by settlement status |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "settlement_id": "fff1e8400-e29b-41d4-a716-446655440000",
      "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
      "order_number": 1000001,
      "gross_revenue": "189.98",
      "deductions": "5.00",
      "qualifying_economic_value": "184.98",
      "vendor_amount": "110.99",
      "reserve_amount": "18.50",
      "currency": "USD",
      "status": "SETTLED",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

> **Note:** Vendor-facing settlement responses show the vendor's share and the 90/10 breakdown but do not expose the platform's internal allocation details (platform, reward pool, operational amounts are visible to admin only). The vendor sees: gross_revenue, deductions, QEV, vendor_amount, reserve_amount, and status.

---

### 7.13 Commerce Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-COM-001 | POST | `/v1/commerce/vendors` | Bearer | Register vendor |
| EP-COM-002 | GET | `/v1/commerce/vendors/me` | Vendor | Get vendor profile |
| EP-COM-003 | PATCH | `/v1/commerce/vendors/me` | Vendor | Update vendor profile |
| EP-COM-004 | POST | `/v1/commerce/stores` | Vendor | Create store |
| EP-COM-005 | GET | `/v1/commerce/stores/{id}` | Bearer | Get store (public) |
| EP-COM-006 | POST | `/v1/commerce/products` | Vendor | Create product |
| EP-COM-007 | GET | `/v1/commerce/products/{id}` | Bearer | Get product (public) |
| EP-COM-008 | PATCH | `/v1/commerce/products/{id}` | Vendor | Update product |
| EP-COM-009 | DELETE | `/v1/commerce/products/{id}` | Vendor | Delete product |
| EP-COM-010 | POST | `/v1/commerce/products/{id}/variants` | Vendor | Create variant |
| EP-COM-011 | GET | `/v1/commerce/products` | Bearer | Search products |
| EP-COM-012 | GET | `/v1/commerce/categories` | Bearer | List categories |
| EP-COM-013 | GET | `/v1/commerce/cart` | Bearer | Get cart |
| EP-COM-014 | POST | `/v1/commerce/cart/items` | Bearer | Add to cart |
| EP-COM-015 | PATCH | `/v1/commerce/cart/items/{id}` | Bearer | Update cart item |
| EP-COM-016 | DELETE | `/v1/commerce/cart/items/{id}` | Bearer | Remove cart item |
| EP-COM-017 | POST | `/v1/commerce/checkout` | Bearer | Checkout |
| EP-COM-018 | GET | `/v1/commerce/orders` | Bearer/Vendor | List orders |
| EP-COM-019 | GET | `/v1/commerce/orders/{id}` | Bearer/Vendor | Get order |
| EP-COM-020 | POST | `/v1/commerce/orders/{id}/cancel` | Bearer/Vendor | Cancel order |
| EP-COM-021 | GET | `/v1/commerce/orders/{id}/shipments` | Bearer/Vendor | Get shipments |
| EP-COM-022 | POST | `/v1/commerce/orders/{id}/shipments` | Vendor | Create shipment |
| EP-COM-023 | POST | `/v1/commerce/orders/{id}/returns` | Bearer | Request return |
| EP-COM-024 | POST | `/v1/commerce/returns/{id}/refund` | Vendor/Admin | Process refund |
| EP-COM-025 | POST | `/v1/commerce/disputes` | Bearer/Vendor | Create dispute |
| EP-COM-026 | POST | `/v1/commerce/disputes/{id}/resolve` | Admin | Resolve dispute |
| EP-COM-027 | POST | `/v1/commerce/products/{id}/reviews` | Bearer | Create review |
| EP-COM-028 | GET | `/v1/commerce/products/{id}/reviews` | Bearer | List reviews |
| EP-COM-029 | GET | `/v1/commerce/settlements` | Vendor | List settlements |

### 7.14 Governing Requirement Traceability

SRS-COM-001 (vendor registration), SRS-COM-002 (product management), SRS-COM-003 (variants), SRS-COM-004 (inventory), SRS-COM-005 (storefronts), SRS-COM-006 (catalogue), SRS-COM-007 (search), SRS-COM-008 (filtering), SRS-COM-009 (discovery), SRS-COM-010 (checkout), SRS-COM-011 (refunds), SRS-COM-012 (disputes), SRS-COM-013 (reviews), SRS-COM-014 (promotions), SRS-COM-015 (settlement), SRS-COM-016 (multi-currency), SRS-COM-017 (vendor dashboard), SRS-COM-018 (category management), SRS-COM-019 (search/filtering), SRS-COM-020 (payment integration), SRS-COM-021 (shipping integration), SRS-COM-022 (90/10 settlement); SDD-1 Ch.4; SAD-1 Ch.11; DDD-1 Ch.8; PLC-1 Ch.28; KR-1 KR-ECO-014 (allocation rates).

---

## Chapter 8 — Services Engine APIs

### 8.1 Overview

The Services Engine APIs provide a complete professional-services marketplace API: provider profiles, service listings, packages, proposals, bookings, scheduling, milestones, delivery, revisions, acceptance, disputes, reviews, and settlements. All service settlements follow the 90/10 principle with check constraints enforced at the database level (SRS-SVC-001–019; SDD-1 Ch.5; SAD-1 Ch.11; DDD-1 Ch.9; PLC-1 Ch.29; KR-1 KR-ECO-014).

**Base path:** `/v1/services`

**Authentication:** Bearer token for all endpoints. Provider endpoints require `provider` role. Admin endpoints require `admin` role. Public listing endpoints require authentication but no special role.

### 8.2 Provider Profiles

#### EP-SVC-001 — Register Provider

| Field | Value |
|---|---|
| **ID** | EP-SVC-001 |
| **Method** | POST |
| **Path** | `/v1/services/providers` |
| **Purpose** | Register as a service provider on the platform |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant (KYC TIER_2+ required) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-001; SDD-1 Ch.5; DDD-1 Ch.9 |

**Request:**

```json
{
  "display_name": "Jane Smith Consulting",
  "bio": "Experienced software architect and consultant",
  "headline": "Software Architecture & Cloud Solutions",
  "contact_email": "jane@smith-consulting.com",
  "contact_phone": "+254712345678",
  "languages": ["en", "sw"],
  "timezone": "Africa/Nairobi",
  "response_time_hours": 24
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `display_name` | string | Yes | Min 2, max 200 chars |
| `bio` | string | No | Max 5000 chars |
| `headline` | string | Yes | Min 2, max 200 chars |
| `contact_email` | string | Yes | Valid email |
| `contact_phone` | string | Yes | E.164 format |
| `languages` | array[string] | No | ISO 639-1 codes |
| `timezone` | string | Yes | IANA timezone |
| `response_time_hours` | integer | No | Min 1, max 168 |

**Response (201 Created):**

```json
{
  "provider_id": "00f2e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "display_name": "Jane Smith Consulting",
  "status": "PENDING",
  "kyc_tier_required": "TIER_2",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid profile data |
| 403 | `KYC_INSUFFICIENT` | Account KYC tier is below TIER_2 |
| 409 | `PROVIDER_ALREADY_EXISTS` | Account already has an active provider registration |
| 422 | `TRUST_GATE_NOT_MET` | Trust score below threshold for provider eligibility |

---

#### EP-SVC-002 — Get Provider Profile

| Field | Value |
|---|---|
| **ID** | EP-SVC-002 |
| **Method** | GET |
| **Path** | `/v1/services/providers/me` |
| **Purpose** | Get the authenticated provider's profile |
| **Authentication** | Bearer token |
| **Authorization** | `provider` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-002; SDD-1 Ch.5 |

**Response (200 OK):**

```json
{
  "provider_id": "00f2e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "display_name": "Jane Smith Consulting",
  "headline": "Software Architecture & Cloud Solutions",
  "bio": "Experienced software architect and consultant",
  "contact_email": "jane@smith-consulting.com",
  "contact_phone": "+254712345678",
  "languages": ["en", "sw"],
  "timezone": "Africa/Nairobi",
  "response_time_hours": 24,
  "status": "ACTIVE",
  "reputation_score": "90.00",
  "total_contracts": 45,
  "completed_contracts": 42,
  "rating_average": "4.8",
  "rating_count": 38,
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-SVC-003 — Get Provider by ID (Public)

| Field | Value |
|---|---|
| **ID** | EP-SVC-003 |
| **Method** | GET |
| **Path** | `/v1/services/providers/{provider_id}` |
| **Purpose** | Get a provider's public profile |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-SVC-002; SDD-1 Ch.5 |

**Response (200 OK):**

```json
{
  "provider_id": "00f2e8400-e29b-41d4-a716-446655440000",
  "display_name": "Jane Smith Consulting",
  "headline": "Software Architecture & Cloud Solutions",
  "bio": "Experienced software architect and consultant",
  "languages": ["en", "sw"],
  "response_time_hours": 24,
  "reputation_score": "90.00",
  "rating_average": "4.8",
  "rating_count": 38,
  "total_contracts": 45,
  "completed_contracts": 42
}
```

---

#### EP-SVC-004 — Update Provider Profile

| Field | Value |
|---|---|
| **ID** | EP-SVC-004 |
| **Method** | PATCH |
| **Path** | `/v1/services/providers/me` |
| **Purpose** | Update the provider's profile |
| **Authentication** | Bearer token |
| **Authorization** | `provider` role |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-002 |

**Request:**

```json
{
  "bio": "Updated bio text",
  "headline": "Updated headline",
  "response_time_hours": 12
}
```

**Response (200 OK):** Returns the updated provider profile (same as EP-SVC-002).

---

### 8.3 Skills and Portfolio

#### EP-SVC-005 — List Skills

| Field | Value |
|---|---|
| **ID** | EP-SVC-005 |
| **Method** | GET |
| **Path** | `/v1/services/skills` |
| **Purpose** | List available skills (taxonomy, public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-SVC-003; SDD-1 Ch.5 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `q` | string | — | Search skills |
| `parent_id` | string | — | Filter by parent skill category |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |

**Response (200 OK):**

```json
{
  "data": [
    {
      "skill_id": "11f2e8400-e29b-41d4-a716-446655440000",
      "name": "Software Architecture",
      "parent_id": null,
      "provider_count": 120
    },
    {
      "skill_id": "22f2e8400-e29b-41d4-a716-446655440000",
      "name": "Cloud Architecture",
      "parent_id": "11f2e8400-e29b-41d4-a716-446655440000",
      "provider_count": 45
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-SVC-006 — Add Provider Skill

| Field | Value |
|---|---|
| **ID** | EP-SVC-006 |
| **Method** | POST |
| **Path** | `/v1/services/providers/me/skills` |
| **Purpose** | Add a skill to the provider's profile |
| **Authentication** | Bearer token |
| **Authorization** | `provider` role |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-003; SDD-1 Ch.5 |

**Request:**

```json
{
  "skill_id": "11f2e8400-e29b-41d4-a716-446655440000",
  "proficiency_level": "EXPERT"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `skill_id` | string (UUID) | Yes | Must be an active skill |
| `proficiency_level` | string | Yes | One of: `BEGINNER`, `INTERMEDIATE`, `ADVANCED`, `EXPERT` |

**Response (201 Created):**

```json
{
  "provider_skill_id": "33f2e8400-e29b-41d4-a716-446655440000",
  "skill_id": "11f2e8400-e29b-41d4-a716-446655440000",
  "skill_name": "Software Architecture",
  "proficiency_level": "EXPERT"
}
```

---

#### EP-SVC-007 — Add Portfolio Item

| Field | Value |
|---|---|
| **ID** | EP-SVC-007 |
| **Method** | POST |
| **Path** | `/v1/services/providers/me/portfolio` |
| **Purpose** | Add a portfolio item to the provider's profile |
| **Authentication** | Bearer token |
| **Authorization** | `provider` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-004; SDD-1 Ch.5 |

**Request:**

```json
{
  "title": "E-commerce Platform Architecture",
  "description": "Designed and implemented a scalable e-commerce platform for a major retailer.",
  "project_url": "https://example.com/project",
  "image_urls": ["https://cdn.k-network.com/portfolio/img1.png"],
  "completion_date": "2026-06-01",
  "skills": ["11f2e8400-e29b-41d4-a716-446655440000"]
}
```

**Response (201 Created):**

```json
{
  "portfolio_item_id": "44f2e8400-e29b-41d4-a716-446655440000",
  "title": "E-commerce Platform Architecture",
  "description": "Designed and implemented a scalable e-commerce platform for a major retailer.",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

### 8.4 Service Listings and Packages

#### EP-SVC-008 — Create Service Listing

| Field | Value |
|---|---|
| **ID** | EP-SVC-008 |
| **Method** | POST |
| **Path** | `/v1/services/listings` |
| **Purpose** | Create a service listing |
| **Authentication** | Bearer token |
| **Authorization** | `provider` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | High tier |
| **Implements** | SRS-SVC-005; SDD-1 Ch.5; DDD-1 Ch.9 |

**Request:**

```json
{
  "title": "Cloud Architecture Consulting",
  "description": "Expert cloud architecture consulting for enterprise applications.",
  "category_id": "55f2e8400-e29b-41d4-a716-446655440000",
  "skills": ["11f2e8400-e29b-41d4-a716-446655440000"],
  "pricing_model": "FIXED",
  "base_price": "500.00",
  "currency": "USD",
  "delivery_time_days": 14,
  "revisions_included": 2,
  "tags": ["cloud", "architecture", "consulting"]
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `title` | string | Yes | Min 2, max 200 chars |
| `description` | string | Yes | Min 10, max 5000 chars |
| `category_id` | string (UUID) | Yes | Must be an active category |
| `skills` | array[string] | No | Skill IDs |
| `pricing_model` | string | Yes | One of: `FIXED`, `HOURLY`, `MILESTONE` |
| `base_price` | string | Yes | Decimal string, 2 places, > 0 |
| `currency` | string | Yes | ISO 4217 |
| `delivery_time_days` | integer | Yes | Min 1, max 365 |
| `revisions_included` | integer | No | Min 0, max 20 (default: 1) |
| `tags` | array[string] | No | Max 10 tags |

**Response (201 Created):**

```json
{
  "listing_id": "66f2e8400-e29b-41d4-a716-446655440000",
  "provider_id": "00f2e8400-e29b-41d4-a716-446655440000",
  "title": "Cloud Architecture Consulting",
  "slug": "cloud-architecture-consulting",
  "pricing_model": "FIXED",
  "base_price": "500.00",
  "currency": "USD",
  "status": "ACTIVE",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-SVC-009 — Get Service Listing

| Field | Value |
|---|---|
| **ID** | EP-SVC-009 |
| **Method** | GET |
| **Path** | `/v1/services/listings/{listing_id}` |
| **Purpose** | Get a service listing by ID (public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-SVC-005; SDD-1 Ch.5 |

**Response (200 OK):**

```json
{
  "listing_id": "66f2e8400-e29b-41d4-a716-446655440000",
  "provider": {
    "provider_id": "00f2e8400-e29b-41d4-a716-446655440000",
    "display_name": "Jane Smith Consulting",
    "rating_average": "4.8",
    "rating_count": 38
  },
  "title": "Cloud Architecture Consulting",
  "description": "Expert cloud architecture consulting for enterprise applications.",
  "category": {
    "category_id": "55f2e8400-e29b-41d4-a716-446655440000",
    "name": "Consulting"
  },
  "skills": [
    {"skill_id": "11f2e8400...", "name": "Software Architecture"}
  ],
  "pricing_model": "FIXED",
  "base_price": "500.00",
  "currency": "USD",
  "delivery_time_days": 14,
  "revisions_included": 2,
  "packages": [ ... ],
  "rating_average": "4.8",
  "rating_count": 15,
  "status": "ACTIVE",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-SVC-010 — Search Service Listings

| Field | Value |
|---|---|
| **ID** | EP-SVC-010 |
| **Method** | GET |
| **Path** | `/v1/services/listings` |
| **Purpose** | Search and filter service listings (public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-SVC-005; SDD-1 Ch.5 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `q` | string | — | Full-text search query |
| `category_id` | string | — | Filter by category |
| `skill_id` | string | — | Filter by skill |
| `provider_id` | string | — | Filter by provider |
| `price_min` | string | — | Minimum price |
| `price_max` | string | — | Maximum price |
| `pricing_model` | string | — | Filter by pricing model |
| `sort` | string | `relevance` | `relevance`, `-price`, `price`, `-rating`, `-created_at` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |

**Response (200 OK):**

```json
{
  "data": [
    {
      "listing_id": "66f2e8400-e29b-41d4-a716-446655440000",
      "title": "Cloud Architecture Consulting",
      "provider_name": "Jane Smith Consulting",
      "base_price": "500.00",
      "currency": "USD",
      "pricing_model": "FIXED",
      "delivery_time_days": 14,
      "rating_average": "4.8",
      "rating_count": 15
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-SVC-011 — Create Service Package

| Field | Value |
|---|---|
| **ID** | EP-SVC-011 |
| **Method** | POST |
| **Path** | `/v1/services/listings/{listing_id}/packages` |
| **Purpose** | Create a service package (e.g., Basic, Standard, Premium) |
| **Authentication** | Bearer token |
| **Authorization** | `provider` role (owner) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-006; SDD-1 Ch.5 |

**Request:**

```json
{
  "name": "Premium",
  "description": "Full architecture review with 30-day support",
  "price": "1500.00",
  "currency": "USD",
  "delivery_time_days": 21,
  "revisions_included": 5,
  "features": [
    "Full architecture review",
    "Technical documentation",
    "30-day post-delivery support",
    "Video consultation included"
  ],
  "tier": 3
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `name` | string | Yes | Min 2, max 100 chars |
| `description` | string | Yes | Min 10, max 2000 chars |
| `price` | string | Yes | Decimal string, 2 places, > 0 |
| `currency` | string | Yes | ISO 4217 |
| `delivery_time_days` | integer | Yes | Min 1, max 365 |
| `revisions_included` | integer | No | Min 0, max 20 |
| `features` | array[string] | No | List of included features |
| `tier` | integer | Yes | Package tier (1=Basic, 2=Standard, 3=Premium) |

**Response (201 Created):**

```json
{
  "package_id": "77f2e8400-e29b-41d4-a716-446655440000",
  "listing_id": "66f2e8400-e29b-41d4-a716-446655440000",
  "name": "Premium",
  "price": "1500.00",
  "currency": "USD",
  "delivery_time_days": 21,
  "tier": 3,
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

### 8.5 Proposals and Bookings

#### EP-SVC-012 — Create Service Request

| Field | Value |
|---|---|
| **ID** | EP-SVC-012 |
| **Method** | POST |
| **Path** | `/v1/services/requests` |
| **Purpose** | Create a service request (client posts a job) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self); KYC TIER_1+ required |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-008; SDD-1 Ch.5 |

**Request:**

```json
{
  "title": "Need cloud architecture review",
  "description": "We need a comprehensive review of our AWS architecture for scalability.",
  "category_id": "55f2e8400-e29b-41d4-a716-446655440000",
  "budget_min": "500.00",
  "budget_max": "1500.00",
  "currency": "USD",
  "deadline": "2026-09-15T00:00:00Z",
  "skills": ["11f2e8400-e29b-41d4-a716-446655440000"]
}
```

**Response (201 Created):**

```json
{
  "request_id": "88f2e8400-e29b-41d4-a716-446655440000",
  "title": "Need cloud architecture review",
  "status": "OPEN",
  "budget_min": "500.00",
  "budget_max": "1500.00",
  "currency": "USD",
  "deadline": "2026-09-15T00:00:00Z",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-SVC-013 — Submit Proposal

| Field | Value |
|---|---|
| **ID** | EP-SVC-013 |
| **Method** | POST |
| **Path** | `/v1/services/requests/{request_id}/proposals` |
| **Purpose** | Submit a proposal for a service request (provider) |
| **Authentication** | Bearer token |
| **Authorization** | `provider` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-008; SDD-1 Ch.5 |

**Request:**

```json
{
  "cover_letter": "I have 10 years of experience in cloud architecture...",
  "proposed_price": "1200.00",
  "currency": "USD",
  "delivery_time_days": 14,
  "milestones": [
    {
      "title": "Initial Assessment",
      "description": "Review current architecture and identify issues",
      "due_date": "2026-09-01T00:00:00Z",
      "amount": "400.00"
    },
    {
      "title": "Architecture Recommendations",
      "description": "Provide detailed recommendations document",
      "due_date": "2026-09-08T00:00:00Z",
      "amount": "500.00"
    },
    {
      "title": "Final Review",
      "description": "Final review and Q&A session",
      "due_date": "2026-09-15T00:00:00Z",
      "amount": "300.00"
    }
  ],
  "package_id": null
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `cover_letter` | string | Yes | Min 50, max 5000 chars |
| `proposed_price` | string | Yes | Decimal string, 2 places, > 0 |
| `currency` | string | Yes | ISO 4217 |
| `delivery_time_days` | integer | Yes | Min 1, max 365 |
| `milestones` | array | No | Milestone objects (for MILESTONE pricing) |
| `package_id` | string (UUID) | No | If proposing a specific package |

**Response (201 Created):**

```json
{
  "proposal_id": "99f2e8400-e29b-41d4-a716-446655440000",
  "request_id": "88f2e8400-e29b-41d4-a716-446655440000",
  "provider_id": "00f2e8400-e29b-41d4-a716-446655440000",
  "proposed_price": "1200.00",
  "currency": "USD",
  "delivery_time_days": 14,
  "status": "SUBMITTED",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-SVC-014 — Accept Proposal (Create Contract)

| Field | Value |
|---|---|
| **ID** | EP-SVC-014 |
| **Method** | POST |
| **Path** | `/v1/services/proposals/{proposal_id}/accept` |
| **Purpose** | Accept a proposal and create a contract (client) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self; the client who created the request) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-009; SDD-1 Ch.5; DDD-1 Ch.9 |

**Request:**

```json
{
  "payment_method_id": "aaf2e8400-e29b-41d4-a716-446655440000"
}
```

**Response (201 Created):**

```json
{
  "contract_id": "bbf2e8400-e29b-41d4-a716-446655440000",
  "proposal_id": "99f2e8400-e29b-41d4-a716-446655440000",
  "client_account_id": "550e8400-e29b-41d4-a716-446655440000",
  "provider_id": "00f2e8400-e29b-41d4-a716-446655440000",
  "title": "Need cloud architecture review",
  "total_amount": "1200.00",
  "currency": "USD",
  "pricing_model": "MILESTONE",
  "status": "ACTIVE",
  "milestones": [ ... ],
  "start_date": "2026-08-26T14:30:00Z",
  "deadline": "2026-09-15T00:00:00Z",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 409 | `PROPOSAL_ALREADY_ACCEPTED` | Proposal has already been accepted |
| 403 | `NOT_REQUEST_OWNER` | Caller is not the owner of the service request |
| 422 | `PAYMENT_FAILED` | Escrow funding failed |

---

### 8.6 Contracts, Milestones, and Delivery

#### EP-SVC-015 — Get Contract

| Field | Value |
|---|---|
| **ID** | EP-SVC-015 |
| **Method** | GET |
| **Path** | `/v1/services/contracts/{contract_id}` |
| **Purpose** | Get contract details |
| **Authentication** | Bearer token |
| **Authorization** | Owner (client) or `provider` role (provider) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-009; SDD-1 Ch.5 |

**Response (200 OK):**

```json
{
  "contract_id": "bbf2e8400-e29b-41d4-a716-446655440000",
  "client_account_id": "550e8400-e29b-41d4-a716-446655440000",
  "provider_id": "00f2e8400-e29b-41d4-a716-446655440000",
  "title": "Need cloud architecture review",
  "description": "We need a comprehensive review of our AWS architecture...",
  "total_amount": "1200.00",
  "currency": "USD",
  "pricing_model": "MILESTONE",
  "status": "ACTIVE",
  "milestones": [
    {
      "milestone_id": "ccf2e8400-e29b-41d4-a716-446655440000",
      "title": "Initial Assessment",
      "description": "Review current architecture and identify issues",
      "amount": "400.00",
      "due_date": "2026-09-01T00:00:00Z",
      "status": "PENDING"
    },
    {
      "milestone_id": "ddf2e8400-e29b-41d4-a716-446655440000",
      "title": "Architecture Recommendations",
      "description": "Provide detailed recommendations document",
      "amount": "500.00",
      "due_date": "2026-09-08T00:00:00Z",
      "status": "PENDING"
    }
  ],
  "revisions_used": 0,
  "revisions_included": 2,
  "start_date": "2026-08-26T14:30:00Z",
  "deadline": "2026-09-15T00:00:00Z",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-SVC-016 — List Contracts

| Field | Value |
|---|---|
| **ID** | EP-SVC-016 |
| **Method** | GET |
| **Path** | `/v1/services/contracts` |
| **Purpose** | List contracts for the authenticated user (as client or provider) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) or `provider` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-019; SDD-1 Ch.5 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `role` | string | — | `client` or `provider` (perspective) |
| `status` | string | — | Filter by contract status |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "contract_id": "bbf2e8400-e29b-41d4-a716-446655440000",
      "title": "Need cloud architecture review",
      "total_amount": "1200.00",
      "currency": "USD",
      "status": "ACTIVE",
      "provider_name": "Jane Smith Consulting",
      "milestone_count": 3,
      "completed_milestones": 0,
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-SVC-017 — Submit Milestone Delivery

| Field | Value |
|---|---|
| **ID** | EP-SVC-017 |
| **Method** | POST |
| **Path** | `/v1/services/contracts/{contract_id}/milestones/{milestone_id}/deliver` |
| **Purpose** | Submit milestone deliverable (provider) |
| **Authentication** | Bearer token |
| **Authorization** | `provider` role (contract provider) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-012; SDD-1 Ch.5 |

**Request:**

```json
{
  "message": "Initial assessment is complete. Please review the attached document.",
  "attachment_urls": [
    "https://cdn.k-network.com/deliverables/assessment.pdf"
  ]
}
```

**Response (200 OK):**

```json
{
  "milestone_id": "ccf2e8400-e29b-41d4-a716-446655440000",
  "status": "DELIVERED",
  "delivered_at": "2026-08-28T14:30:00Z",
  "delivery_id": "eef2e8400-e29b-41d4-a716-446655440000"
}
```

---

#### EP-SVC-018 — Accept Milestone

| Field | Value |
|---|---|
| **ID** | EP-SVC-018 |
| **Method** | POST |
| **Path** | `/v1/services/contracts/{contract_id}/milestones/{milestone_id}/accept` |
| **Purpose** | Accept a milestone delivery (client) — releases escrow |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self; contract client) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-012; SDD-1 Ch.5 |

**Request:**

```json
{
  "feedback": "Excellent work on the initial assessment."
}
```

**Response (200 OK):**

```json
{
  "milestone_id": "ccf2e8400-e29b-41d4-a716-446655440000",
  "status": "ACCEPTED",
  "accepted_at": "2026-08-29T10:00:00Z",
  "payment_released": true,
  "amount_released": "400.00"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 409 | `MILESTONE_NOT_DELIVERED` | Milestone has not been delivered yet |
| 409 | `MILESTONE_ALREADY_ACCEPTED` | Milestone has already been accepted |

---

#### EP-SVC-019 — Request Revision

| Field | Value |
|---|---|
| **ID** | EP-SVC-019 |
| **Method** | POST |
| **Path** | `/v1/services/contracts/{contract_id}/milestones/{milestone_id}/revise` |
| **Purpose** | Request a revision on a delivered milestone (client) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self; contract client) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-005; SDD-1 Ch.5 |

**Request:**

```json
{
  "revision_notes": "Please add more detail on the database scaling section.",
  "revision_number": 1
}
```

**Response (200 OK):**

```json
{
  "milestone_id": "ccf2e8400-e29b-41d4-a716-446655440000",
  "status": "REVISION_REQUESTED",
  "revision_number": 1,
  "revisions_remaining": 1,
  "requested_at": "2026-08-29T10:00:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 422 | `NO_REVISIONS_REMAINING` | All included revisions have been used |

---

### 8.7 Disputes and Reviews

#### EP-SVC-020 — Create Service Dispute

| Field | Value |
|---|---|
| **ID** | EP-SVC-020 |
| **Method** | POST |
| **Path** | `/v1/services/disputes` |
| **Purpose** | Create a dispute for a contract |
| **Authentication** | Bearer token |
| **Authorization** | Owner (client) or `provider` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-013; SDD-1 Ch.5 |

**Request:**

```json
{
  "contract_id": "bbf2e8400-e29b-41d4-a716-446655440000",
  "milestone_id": "ccf2e8400-e29b-41d4-a716-446655440000",
  "subject": "Deliverable not as described",
  "description": "The assessment does not cover the database architecture as agreed.",
  "evidence_urls": ["https://cdn.k-network.com/evidence/evidence.png"]
}
```

**Response (201 Created):**

```json
{
  "dispute_id": "fff2e8400-e29b-41d4-a716-446655440000",
  "contract_id": "bbf2e8400-e29b-41d4-a716-446655440000",
  "status": "OPEN",
  "subject": "Deliverable not as described",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-SVC-021 — Resolve Service Dispute (Admin)

| Field | Value |
|---|---|
| **ID** | EP-SVC-021 |
| **Method** | POST |
| **Path** | `/v1/services/disputes/{dispute_id}/resolve` |
| **Purpose** | Resolve a service dispute (admin only) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-SVC-013; SDD-1 Ch.5 |

**Request:**

```json
{
  "resolution": "CLIENT_FAVORED",
  "refund_amount": "400.00",
  "notes": "Evidence supports client's claim. Partial refund issued."
}
```

**Response (200 OK):**

```json
{
  "dispute_id": "fff2e8400-e29b-41d4-a716-446655440000",
  "status": "RESOLVED",
  "resolution": "CLIENT_FAVORED",
  "resolved_at": "2026-08-26T18:00:00Z",
  "resolved_by": "admin-account-id"
}
```

---

#### EP-SVC-022 — Create Service Review

| Field | Value |
|---|---|
| **ID** | EP-SVC-022 |
| **Method** | POST |
| **Path** | `/v1/services/contracts/{contract_id}/reviews` |
| **Purpose** | Create a review for a completed contract |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self; contract client); contract must be completed |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-014; SDD-1 Ch.5 |

**Request:**

```json
{
  "rating": 5,
  "title": "Excellent work",
  "body": "Jane delivered exceptional work on our cloud architecture review.",
  "communication_rating": 5,
  "quality_rating": 5,
  "delivery_rating": 4
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `rating` | integer | Yes | 1–5 (overall) |
| `title` | string | Yes | Min 2, max 200 chars |
| `body` | string | No | Max 2000 chars |
| `communication_rating` | integer | No | 1–5 |
| `quality_rating` | integer | No | 1–5 |
| `delivery_rating` | integer | No | 1–5 |

**Response (201 Created):**

```json
{
  "review_id": "00f3e8400-e29b-41d4-a716-446655440000",
  "contract_id": "bbf2e8400-e29b-41d4-a716-446655440000",
  "rating": 5,
  "title": "Excellent work",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

### 8.8 Settlements

#### EP-SVC-023 — List Service Settlements (Provider)

| Field | Value |
|---|---|
| **ID** | EP-SVC-023 |
| **Method** | GET |
| **Path** | `/v1/services/settlements` |
| **Purpose** | List service settlements for the authenticated provider |
| **Authentication** | Bearer token |
| **Authorization** | `provider` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-SVC-016, SRS-SVC-018; SDD-1 Ch.5; DDD-1 Ch.9 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `status` | string | — | Filter by settlement status |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "settlement_id": "11f3e8400-e29b-41d4-a716-446655440000",
      "contract_id": "bbf2e8400-e29b-41d4-a716-446655440000",
      "gross_revenue": "400.00",
      "deductions": "10.00",
      "qualifying_economic_value": "390.00",
      "provider_amount": "234.00",
      "reserve_amount": "39.00",
      "currency": "USD",
      "status": "SETTLED",
      "created_at": "2026-08-29T10:00:00Z"
    }
  ],
  "pagination": { ... }
}
```

> **Note:** Provider-facing settlement responses show the provider's share and the 90/10 breakdown but do not expose the platform's internal allocation details (platform, reward pool, operational amounts are visible to admin only). The provider sees: gross_revenue, deductions, QEV, provider_amount, reserve_amount, and status.

---

### 8.9 Services Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-SVC-001 | POST | `/v1/services/providers` | Bearer | Register provider |
| EP-SVC-002 | GET | `/v1/services/providers/me` | Provider | Get provider profile |
| EP-SVC-003 | GET | `/v1/services/providers/{id}` | Bearer | Get provider (public) |
| EP-SVC-004 | PATCH | `/v1/services/providers/me` | Provider | Update provider profile |
| EP-SVC-005 | GET | `/v1/services/skills` | Bearer | List skills |
| EP-SVC-006 | POST | `/v1/services/providers/me/skills` | Provider | Add provider skill |
| EP-SVC-007 | POST | `/v1/services/providers/me/portfolio` | Provider | Add portfolio item |
| EP-SVC-008 | POST | `/v1/services/listings` | Provider | Create service listing |
| EP-SVC-009 | GET | `/v1/services/listings/{id}` | Bearer | Get service listing |
| EP-SVC-010 | GET | `/v1/services/listings` | Bearer | Search service listings |
| EP-SVC-011 | POST | `/v1/services/listings/{id}/packages` | Provider | Create service package |
| EP-SVC-012 | POST | `/v1/services/requests` | Bearer | Create service request |
| EP-SVC-013 | POST | `/v1/services/requests/{id}/proposals` | Provider | Submit proposal |
| EP-SVC-014 | POST | `/v1/services/proposals/{id}/accept` | Bearer | Accept proposal (create contract) |
| EP-SVC-015 | GET | `/v1/services/contracts/{id}` | Bearer/Provider | Get contract |
| EP-SVC-016 | GET | `/v1/services/contracts` | Bearer/Provider | List contracts |
| EP-SVC-017 | POST | `/v1/services/contracts/{id}/milestones/{id}/deliver` | Provider | Submit milestone delivery |
| EP-SVC-018 | POST | `/v1/services/contracts/{id}/milestones/{id}/accept` | Bearer | Accept milestone |
| EP-SVC-019 | POST | `/v1/services/contracts/{id}/milestones/{id}/revise` | Bearer | Request revision |
| EP-SVC-020 | POST | `/v1/services/disputes` | Bearer/Provider | Create dispute |
| EP-SVC-021 | POST | `/v1/services/disputes/{id}/resolve` | Admin | Resolve dispute |
| EP-SVC-022 | POST | `/v1/services/contracts/{id}/reviews` | Bearer | Create review |
| EP-SVC-023 | GET | `/v1/services/settlements` | Provider | List settlements |

### 8.10 Governing Requirement Traceability

SRS-SVC-001 (provider registration), SRS-SVC-002 (provider profiles), SRS-SVC-003 (skills), SRS-SVC-004 (portfolios), SRS-SVC-005 (service listings), SRS-SVC-006 (service packages), SRS-SVC-007 (pricing models), SRS-SVC-008 (client requests), SRS-SVC-009 (contracts), SRS-SVC-010 (booking/scheduling), SRS-SVC-011 (milestones), SRS-SVC-012 (deliveries), SRS-SVC-013 (disputes), SRS-SVC-014 (reviews), SRS-SVC-015 (provider reputation), SRS-SVC-016 (settlement), SRS-SVC-017 (multi-currency), SRS-SVC-018 (90/10 settlement), SRS-SVC-019 (provider dashboard); SDD-1 Ch.5; SAD-1 Ch.11; DDD-1 Ch.9; PLC-1 Ch.29; KR-1 KR-ECO-014.

---

# Part IV — K-Rewards, Wallet, and Intelligence APIs

## Chapter 9 — K-Rewards Engine APIs

### 9.1 Overview

The K-Rewards Engine APIs provide access to K-Points, K-Rings, K-Levels, leadership qualification, team structure, Royal Identity (username and title), reward cycles, reward statements, qualification status, and coronation. The K-Rewards Engine calculates reward entitlement; the Wallet/Payments Engine executes financial distribution (KR-FND-020). All numerical K-Rewards values are **GOVERNANCE PARAMETERS** owned by KR-1 — API-1 exposes them through configuration endpoints and references KR-1 rule IDs; it does not hard-code these values (SRS-KRW-001–015, SRS-ROY-001–009; SDD-1 Ch.10, Ch.17, Ch.18; SAD-1 Ch.13; DDD-1 Ch.10, Ch.17, Ch.18; KR-1 KR-PNT-001–025, KR-RNG-001–017, KR-LVL-001–040, KR-RWD-001, KR-COR-001+; PLC-1 Ch.22, Ch.31).

**Base path:** `/v1/k-rewards`

**Authentication:** Bearer token for all participant endpoints. Admin role for governance configuration endpoints.

### 9.2 K-Points

#### EP-KRW-001 — Get K-Points Summary

| Field | Value |
|---|---|
| **ID** | EP-KRW-001 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/points/me` |
| **Purpose** | Get the authenticated user's K-Points summary for the current cycle |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-001; SDD-1 Ch.10; KR-1 KR-PNT-001, KR-PNT-006 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "cycle_id": "2026-08",
  "cycle_period": "2026-08-01T00:00:00Z/2026-09-01T00:00:00Z",
  "total_points": "325.50",
  "categories": [
    {
      "category": "COMMERCE",
      "points": "120.00",
      "cap": "500.00",
      "cap_utilization": "0.240000"
    },
    {
      "category": "SERVICES",
      "points": "85.00",
      "cap": "300.00",
      "cap_utilization": "0.283333"
    },
    {
      "category": "LEARNING",
      "points": "60.50",
      "cap": "200.00",
      "cap_utilization": "0.302500"
    },
    {
      "category": "COMMUNITY",
      "points": "30.00",
      "cap": "100.00",
      "cap_utilization": "0.300000"
    },
    {
      "category": "TRUST",
      "points": "15.00",
      "cap": "50.00",
      "cap_utilization": "0.300000"
    },
    {
      "category": "REFERRAL",
      "points": "10.00",
      "cap": "100.00",
      "cap_utilization": "0.100000"
    },
    {
      "category": "VERIFICATION",
      "points": "5.00",
      "cap": "20.00",
      "cap_utilization": "0.250000"
    },
    {
      "category": "SPECIAL",
      "points": "0.00",
      "cap": "50.00",
      "cap_utilization": "0.000000"
    }
  ],
  "minimum_threshold": "50.00",
  "meets_minimum_threshold": true,
  "last_updated_at": "2026-08-26T14:30:00Z"
}
```

> **Note:** The eight K-Points categories (KR-PNT-003) and all cap values are GOVERNANCE PARAMETERS from KR-1. The API exposes current values through configuration endpoints (EP-KRW-014) and references KR-1 rule IDs.

---

#### EP-KRW-002 — Get K-Points History

| Field | Value |
|---|---|
| **ID** | EP-KRW-002 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/points/me/history` |
| **Purpose** | Get K-Points accrual/reversal history for the authenticated user |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-001; SDD-1 Ch.10; KR-1 KR-PNT-005, KR-PNT-022 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `cycle_id` | string | Current | Filter by reward cycle (e.g., "2026-08") |
| `category` | string | — | Filter by K-Points category |
| `event_type` | string | — | Filter by event type: `ACCRUAL`, `REVERSAL` |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "entry_id": "aa0e8400-e29b-41d4-a716-446655440000",
      "cycle_id": "2026-08",
      "category": "COMMERCE",
      "event_type": "ACCRUAL",
      "points": "25.00",
      "rule_id": "KR-PNT-COM-001",
      "source_event": {
        "event_type": "ORDER_COMPLETED",
        "reference_id": "88f1e8400-e29b-41d4-a716-446655440000",
        "reference_type": "ORDER"
      },
      "is_reversed": false,
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-KRW-003 — Get Lifetime Statistics

| Field | Value |
|---|---|
| **ID** | EP-KRW-003 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/points/me/lifetime` |
| **Purpose** | Get the authenticated user's lifetime K-Points statistics (permanent records) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-001; SDD-1 Ch.10; KR-1 KR-PNT-020, KR-PNT-021 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "lifetime_total_points": "15420.50",
  "cycles_participated": 24,
  "k_level_history": [
    {"k_level": 1, "achieved_cycle": "2025-09", "achieved_at": "2025-09-01T00:00:00Z"},
    {"k_level": 2, "achieved_cycle": "2025-12", "achieved_at": "2025-12-01T00:00:00Z"},
    {"k_level": 3, "achieved_cycle": "2026-03", "achieved_at": "2026-03-01T00:00:00Z"}
  ],
  "current_k_level": 3,
  "is_protected": true
}
```

> **Note:** Lifetime Statistics are protected from retroactive reduction except through the formal correction process (KR-PNT-021).

---

### 9.3 K-Rings and Network Structure

#### EP-KRW-004 — Get Ring Structure

| Field | Value |
|---|---|
| **ID** | EP-KRW-004 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/rings/me` |
| **Purpose** | Get the authenticated user's current ring structure — answers "What is my current ring structure?" |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-003, SRS-KRW-004; SDD-1 Ch.10, Ch.18; DDD-1 Ch.10, Ch.18; KR-1 KR-RNG-001–017 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "calculated_at": "2026-08-26T14:30:00Z",
  "rings": [
    {
      "ring_number": 1,
      "graph_distance": 1,
      "description": "Directly referred/connected qualifying participant",
      "total_members": 15,
      "active_members": 12,
      "qualifying_members": 10,
      "density_gate": 3,
      "meets_density_gate": true,
      "ring_weight": "0.400000",
      "ring_contribution": "48.00",
      "members": [
        {
          "account_id": "440e8400-e29b-41d4-a716-446655440000",
          "display_name": "Member One",
          "k_level": 2,
          "is_active": true,
          "is_qualifying": true,
          "last_activity_at": "2026-08-25T10:00:00Z"
        }
      ]
    },
    {
      "ring_number": 2,
      "graph_distance": 2,
      "description": "Participant one level deeper than Ring 1",
      "total_members": 45,
      "active_members": 38,
      "qualifying_members": 30,
      "density_gate": 5,
      "meets_density_gate": true,
      "ring_weight": "0.250000",
      "ring_contribution": "57.00"
    },
    {
      "ring_number": 3,
      "graph_distance": 3,
      "description": "Participant two levels deeper than Ring 1",
      "total_members": 120,
      "active_members": 95,
      "qualifying_members": 70,
      "density_gate": 10,
      "meets_density_gate": true,
      "ring_weight": "0.150000",
      "ring_contribution": "40.50"
    },
    {
      "ring_number": 4,
      "graph_distance": 4,
      "description": "Participant three levels deeper than Ring 1",
      "total_members": 280,
      "active_members": 190,
      "qualifying_members": 120,
      "density_gate": 20,
      "meets_density_gate": true,
      "ring_weight": "0.120000",
      "ring_contribution": "27.36"
    },
    {
      "ring_number": 5,
      "graph_distance": 5,
      "description": "Participant four levels deeper than Ring 1",
      "total_members": 550,
      "active_members": 320,
      "qualifying_members": 200,
      "density_gate": 50,
      "meets_density_gate": true,
      "ring_weight": "0.080000",
      "ring_contribution": "16.00"
    }
  ],
  "total_ring_contribution": "188.86",
  "ring_weights_source": "KR-RNG-008",
  "density_gates_source": "KR-RNG-009"
}
```

> **Note:** Ring weights (KR-RNG-008) and density gates (KR-RNG-009) are GOVERNANCE PARAMETERS. Ring membership is calculated automatically from the referral/network graph (KR-RNG-002). Only qualifying members count toward ring requirements (KR-RNG-007). The `members` array in Ring 1 is included; deeper rings return aggregate counts only for performance. Use EP-KRW-005 for detailed network graph queries.

---

#### EP-KRW-005 — Get Network Graph

| Field | Value |
|---|---|
| **ID** | EP-KRW-005 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/network-graph/me` |
| **Purpose** | Get the authenticated user's network graph (referral tree) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-003; SDD-1 Ch.10, Ch.18; DDD-1 Ch.10 (graph schema); KR-1 KR-RNG-001–006 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `max_depth` | integer | 5 | Maximum graph depth to return (1–5) |
| `min_k_level` | integer | — | Filter to members at or above this K-Level |
| `active_only` | boolean | `false` | Return only active members |
| `cursor` | string | — | Pagination cursor (for breadth-first traversal) |
| `limit` | integer | 100 | Maximum nodes per page (max 500) |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "max_depth": 3,
  "nodes": [
    {
      "account_id": "550e8400-e29b-41d4-a716-446655440000",
      "k_level": 3,
      "ring_number": 0,
      "depth": 0,
      "is_active": true
    },
    {
      "account_id": "440e8400-e29b-41d4-a716-446655440000",
      "k_level": 2,
      "ring_number": 1,
      "depth": 1,
      "parent_account_id": "550e8400-e29b-41d4-a716-446655440000",
      "is_active": true
    },
    {
      "account_id": "330e8400-e29b-41d4-a716-446655440000",
      "k_level": 1,
      "ring_number": 2,
      "depth": 2,
      "parent_account_id": "440e8400-e29b-41d4-a716-446655440000",
      "is_active": true
    }
  ],
  "edges": [
    {"from": "550e8400...", "to": "440e8400...", "type": "REFERRAL"},
    {"from": "440e8400...", "to": "330e8400...", "type": "REFERRAL"}
  ],
  "total_nodes": 480,
  "pagination": { ... }
}
```

---

### 9.4 K-Levels

#### EP-KRW-006 — Get K-Level

| Field | Value |
|---|---|
| **ID** | EP-KRW-006 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/levels/me` |
| **Purpose** | Get the authenticated user's current K-Level and tier |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-005; SDD-1 Ch.10; KR-1 KR-LVL-001–014 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "k_level": 3,
  "tier": "FOUNDATION",
  "tier_name": "Foundation",
  "title": "Foundation Leader",
  "royal_identity": "Normal",
  "k_level_multiplier": "1.200000",
  "is_permanent": true,
  "achieved_at": "2026-03-01T00:00:00Z",
  "achieved_cycle": "2026-03",
  "maintenance_status": {
    "is_active": true,
    "personal_points_required": "200.00",
    "personal_points_current": "325.50",
    "meets_personal_requirement": true,
    "group_activity_required": true,
    "meets_group_requirement": true,
    "ring_contribution_required": "150.00",
    "ring_contribution_current": "188.86",
    "meets_ring_contribution_requirement": true
  },
  "multiplier_effective": "1.200000"
}
```

> **Note:** If the participant fails tiered maintenance requirements, their K-Level Multiplier is reduced to 1.0× for that cycle (KR-LVL-014). The `multiplier_effective` field reflects the actual multiplier applied this cycle.

---

#### EP-KRW-007 — Get K-Level Progression Matrix

| Field | Value |
|---|---|
| **ID** | EP-KRW-007 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/levels/progression-matrix` |
| **Purpose** | Get the K-Level progression matrix (all 15 levels with requirements) — public, governance parameters from KR-1 |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-005; SDD-1 Ch.10; KR-1 KR-LVL-009, KR-LVL-010, Appendix A |

**Response (200 OK):**

```json
{
  "source": "KR-1 KR-LVL-009",
  "levels": [
    {
      "k_level": 1,
      "tier": "FOUNDATION",
      "title": "Foundation Member",
      "royal_identity": "Normal",
      "k_level_multiplier": "1.000000",
      "personal_points_threshold": "50.00",
      "ring_1_count_required": 0,
      "ring_2_count_required": 0,
      "ring_3_count_required": 0,
      "ring_4_count_required": 0,
      "ring_5_count_required": 0,
      "lifetime_points_required": "100.00",
      "maintenance_personal_points": "50.00",
      "maintenance_ring_contribution": "0.00"
    },
    {
      "k_level": 2,
      "tier": "FOUNDATION",
      "title": "Foundation Builder",
      "royal_identity": "Normal",
      "k_level_multiplier": "1.100000",
      "personal_points_threshold": "100.00",
      "ring_1_count_required": 3,
      "ring_2_count_required": 0,
      "ring_3_count_required": 0,
      "ring_4_count_required": 0,
      "ring_5_count_required": 0,
      "lifetime_points_required": "500.00",
      "maintenance_personal_points": "100.00",
      "maintenance_ring_contribution": "20.00"
    }
  ],
  "total_levels": 15,
  "is_governance_parameter": true,
  "governance_status": "PROPOSED"
}
```

> **Note:** All numerical values in the progression matrix are GOVERNANCE PARAMETERS — REQUIRES APPROVAL (KR-1 KR-LVL-009, Appendix A). The API exposes current values; it does not hard-code them. The `governance_status` field indicates whether values are proposed or approved.

---

### 9.5 Leadership Qualification

#### EP-KRW-008 — Get Leadership Qualification Status

| Field | Value |
|---|---|
| **ID** | EP-KRW-008 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/leadership/qualification/me` |
| **Purpose** | Get the authenticated user's leadership qualification status for their current and next K-Level |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-007; SDD-1 Ch.10, Ch.17; KR-1 KR-LVL-015, KR-LVL-016 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "current_k_level": 3,
  "target_k_level": 4,
  "is_qualified": false,
  "requirements": [
    {
      "requirement_code": "PERSONAL_POINTS",
      "description": "Personal K-Points threshold",
      "required": "150.00",
      "current": "325.50",
      "is_met": true
    },
    {
      "requirement_code": "LIFETIME_POINTS",
      "description": "Lifetime K-Points",
      "required": "2000.00",
      "current": "15420.50",
      "is_met": true
    },
    {
      "requirement_code": "RING_1_COUNT",
      "description": "Ring 1 qualifying members",
      "required": 5,
      "current": 10,
      "is_met": true
    },
    {
      "requirement_code": "RING_1_MIN_K_LEVEL",
      "description": "Minimum K-Level of Ring 1 members",
      "required": 2,
      "current": 2,
      "is_met": true
    },
    {
      "requirement_code": "RING_2_COUNT",
      "description": "Ring 2 qualifying members",
      "required": 15,
      "current": 30,
      "is_met": true
    },
    {
      "requirement_code": "RING_3_COUNT",
      "description": "Ring 3 qualifying members",
      "required": 30,
      "current": 70,
      "is_met": true
    },
    {
      "requirement_code": "TRUST_SCORE",
      "description": "Minimum trust score",
      "required": "40.00",
      "current": "75.50",
      "is_met": true
    },
    {
      "requirement_code": "RING_1_LEADERS",
      "description": "Ring 1 members at K-Level ≥ 7 (leadership tier)",
      "required": 1,
      "current": 0,
      "is_met": false
    }
  ],
  "missing_requirements": [
    {
      "requirement_code": "RING_1_LEADERS",
      "description": "At least 1 Ring 1 member at K-Level ≥ 7",
      "current": 0,
      "required": 1,
      "gap": 1
    }
  ],
  "all_requirements_met": false,
  "kr_rule_id": "KR-LVL-015"
}
```

---

#### EP-KRW-009 — Get Qualifying Ring 1 Leaders

| Field | Value |
|---|---|
| **ID** | EP-KRW-009 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/rings/me/ring-1/qualifying-leaders` |
| **Purpose** | Get Ring 1 members who qualify as leaders (K-Level ≥ 7) — answers "Which Ring 1 members qualify as leaders?" |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-007, SRS-KRW-008; SDD-1 Ch.10, Ch.17; KR-1 KR-LVL-005, KR-LVL-006, KR-LVL-015 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `min_k_level` | integer | 7 | Minimum K-Level to qualify as a leader (default: 7 = Leadership tier) |
| `active_only` | boolean | `true` | Return only active members |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "ring_number": 1,
  "min_k_level": 7,
  "qualifying_leaders": [
    {
      "account_id": "440e8400-e29b-41d4-a716-446655440000",
      "display_name": "Abdullah M.",
      "k_level": 8,
      "tier": "LEADERSHIP",
      "title": "Leadership Builder",
      "royal_identity": "Prince",
      "is_active": true,
      "is_qualifying": true,
      "last_activity_at": "2026-08-25T10:00:00Z"
    },
    {
      "account_id": "330e8400-e29b-41d4-a716-446655440000",
      "display_name": "Fatima K.",
      "k_level": 7,
      "tier": "LEADERSHIP",
      "title": "Leadership Member",
      "royal_identity": "Prince",
      "is_active": true,
      "is_qualifying": true,
      "last_activity_at": "2026-08-26T08:00:00Z"
    }
  ],
  "total_qualifying_leaders": 2,
  "ring_1_total_members": 15,
  "ring_1_active_members": 12,
  "leadership_tier_threshold": 7,
  "kr_rule_id": "KR-LVL-005"
}
```

> **Note:** The `min_k_level` parameter defaults to 7, which is the Leadership tier threshold (KR-LVL-007). A "leader" is defined as a participant at K-Level ≥ 7 (Leadership tier or above). This endpoint directly answers the question "Which Ring 1 members qualify as leaders?"

---

#### EP-KRW-010 — Get Leadership Qualification Gap

| Field | Value |
|---|---|
| **ID** | EP-KRW-010 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/leadership/gap/me` |
| **Purpose** | Get the leadership requirements the authenticated user is missing — answers "What leadership requirements am I missing?" |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-007, SRS-KRW-008; SDD-1 Ch.10, Ch.17; KR-1 KR-LVL-015, KR-LVL-016, Appendix B |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `target_k_level` | integer | Next level | The K-Level to check qualification for (default: user's next level) |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "current_k_level": 6,
  "target_k_level": 7,
  "target_tier": "LEADERSHIP",
  "target_title": "Leadership Member",
  "target_royal_identity": "Prince",
  "all_requirements_met": false,
  "gap_analysis": [
    {
      "requirement_code": "PERSONAL_POINTS",
      "description": "Personal K-Points threshold",
      "required": "400.00",
      "current": "325.50",
      "gap_amount": "74.50",
      "is_met": false,
      "gap_percentage": "0.813750"
    },
    {
      "requirement_code": "LIFETIME_POINTS",
      "description": "Lifetime K-Points",
      "required": "5000.00",
      "current": "15420.50",
      "gap_amount": null,
      "is_met": true,
      "gap_percentage": null
    },
    {
      "requirement_code": "RING_1_COUNT",
      "description": "Ring 1 qualifying members",
      "required": 8,
      "current": 10,
      "gap_amount": null,
      "is_met": true,
      "gap_percentage": null
    },
    {
      "requirement_code": "RING_1_MIN_K_LEVEL",
      "description": "Minimum K-Level across Ring 1 members",
      "required": 3,
      "current": 5,
      "gap_amount": null,
      "is_met": true,
      "gap_percentage": null
    },
    {
      "requirement_code": "RING_1_LEADERS_COUNT",
      "description": "Ring 1 members at K-Level ≥ 7",
      "required": 1,
      "current": 0,
      "gap_amount": 1,
      "is_met": false,
      "gap_percentage": "0.000000"
    },
    {
      "requirement_code": "RING_2_COUNT",
      "description": "Ring 2 qualifying members",
      "required": 20,
      "current": 30,
      "gap_amount": null,
      "is_met": true,
      "gap_percentage": null
    },
    {
      "requirement_code": "RING_2_MIN_K_LEVEL",
      "description": "Minimum K-Level across Ring 2 members",
      "required": 2,
      "current": 3,
      "gap_amount": null,
      "is_met": true,
      "gap_percentage": null
    },
    {
      "requirement_code": "RING_3_COUNT",
      "description": "Ring 3 qualifying members",
      "required": 50,
      "current": 70,
      "gap_amount": null,
      "is_met": true,
      "gap_percentage": null
    },
    {
      "requirement_code": "TRUST_SCORE",
      "description": "Minimum trust score",
      "required": "40.00",
      "current": "75.50",
      "gap_amount": null,
      "is_met": true,
      "gap_percentage": null
    }
  ],
  "missing_requirements": [
    {
      "requirement_code": "PERSONAL_POINTS",
      "description": "Earn 74.50 more K-Points this cycle",
      "action_needed": "Increase personal activity to earn at least 74.50 additional K-Points",
      "gap_amount": "74.50"
    },
    {
      "requirement_code": "RING_1_LEADERS_COUNT",
      "description": "Develop at least 1 Ring 1 member to K-Level ≥ 7",
      "action_needed": "Support and develop at least 1 direct referral to achieve Leadership tier (K-Level 7+)",
      "gap_amount": 1
    }
  ],
  "total_missing": 2,
  "kr_rule_id": "KR-LVL-015",
  "leadership_development_matrix_source": "KR-1 Appendix B"
}
```

> **Note:** This endpoint directly answers "What leadership requirements am I missing?" It compares the required values from the K-Level Leadership Development Matrix (KR-1 Appendix B) against the user's actual ring counts, K-Level distributions, personal points, and trust score. Each missing requirement includes an actionable description of what the participant needs to do.

---

### 9.6 Team

#### EP-KRW-011 — Get Team Summary

| Field | Value |
|---|---|
| **ID** | EP-KRW-011 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/team/me` |
| **Purpose** | Get a summary of the authenticated user's team (network across all rings) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-003; SDD-1 Ch.10; KR-1 KR-RNG-001 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "total_network_size": 1010,
  "total_active": 655,
  "total_qualifying": 430,
  "by_ring": [
    {"ring_number": 1, "total": 15, "active": 12, "qualifying": 10},
    {"ring_number": 2, "total": 45, "active": 38, "qualifying": 30},
    {"ring_number": 3, "total": 120, "active": 95, "qualifying": 70},
    {"ring_number": 4, "total": 280, "active": 190, "qualifying": 120},
    {"ring_number": 5, "total": 550, "active": 320, "qualifying": 200}
  ],
  "by_k_level": [
    {"k_level": 1, "count": 150},
    {"k_level": 2, "count": 80},
    {"k_level": 3, "count": 45},
    {"k_level": 4, "count": 20},
    {"k_level": 5, "count": 10},
    {"k_level": 6, "count": 5},
    {"k_level": 7, "count": 2},
    {"k_level": 8, "count": 1}
  ],
  "leadership_count": 3,
  "calculated_at": "2026-08-26T14:30:00Z"
}
```

---

### 9.7 Royal Identity

#### EP-KRW-012 — Get Royal Identity

| Field | Value |
|---|---|
| **ID** | EP-KRW-012 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/royal-identity/me` |
| **Purpose** | Get the authenticated user's Royal Identity (username, title, tier) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-ROY-001, SRS-ROY-002; SDD-1 Ch.17; KR-1 Ch.51; PLC-1 Ch.22 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "username": "KUser550e84",
  "title": "Foundation Leader",
  "royal_identity": "Normal",
  "tier": "FOUNDATION",
  "k_level": 3,
  "is_username_permanent": true,
  "is_title_permanent": false,
  "title_changes_with_tier": true,
  "tier_mapping": {
    "FOUNDATION": {"levels": "1-6", "royal_identity": "Normal"},
    "LEADERSHIP": {"levels": "7-9", "royal_identity": "Prince"},
    "EXECUTIVE": {"levels": "10-12", "royal_identity": "Crown Prince"},
    "LEGACY": {"levels": "13-15", "royal_identity": "King"}
  }
}
```

> **Note:** The username is permanent once assigned. The title and royal identity change with the participant's tier (PLC-1 Ch.22; KR-1 Ch.51). Foundation/Growth (L1–6) = Normal, Leadership (L7–9) = Prince, Executive (L10–12) = Crown Prince, Legacy (L13–15) = King.

---

#### EP-KRW-013 — Get Royal Identity by Account ID (Public)

| Field | Value |
|---|---|
| **ID** | EP-KRW-013 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/royal-identity/{account_id}` |
| **Purpose** | Get another participant's public Royal Identity (username, title, tier) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-ROY-001; SDD-1 Ch.17; KR-1 Ch.51 |

**Response (200 OK):**

```json
{
  "account_id": "440e8400-e29b-41d4-a716-446655440000",
  "username": "PrinceAbdullah",
  "title": "Leadership Builder",
  "royal_identity": "Prince",
  "tier": "LEADERSHIP",
  "k_level": 8
}
```

---

### 9.8 Governance Configuration (Admin)

#### EP-KRW-014 — Get K-Rewards Governance Parameters

| Field | Value |
|---|---|
| **ID** | EP-KRW-014 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/governance-parameters` |
| **Purpose** | Get all K-Rewards governance parameters (ring weights, density gates, K-Point caps, multipliers, allocation rates) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-KRW-015; SDD-1 Ch.10; KR-1 Appendix G (Governance Parameter Register) |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `parameter_group` | string | — | Filter by group: `RING_WEIGHTS`, `DENSITY_GATES`, `KPOINT_CAPS`, `MULTIPLIERS`, `ALLOCATION_RATES`, `PROGRESSION_MATRIX` |
| `governance_status` | string | — | Filter by status: `PROPOSED`, `APPROVED`, `ACTIVE` |

**Response (200 OK):**

```json
{
  "parameters": [
    {
      "parameter_id": "RING_WEIGHT_1",
      "parameter_group": "RING_WEIGHTS",
      "description": "Ring 1 weight in Ring Contribution",
      "proposed_value": "0.400000",
      "approved_value": null,
      "active_value": "0.400000",
      "governance_status": "PROPOSED",
      "kr_rule_id": "KR-RNG-008",
      "last_updated_at": "2026-08-26T14:30:00Z"
    },
    {
      "parameter_id": "RING_DENSITY_GATE_1",
      "parameter_group": "DENSITY_GATES",
      "description": "Ring 1 minimum active members for density gate",
      "proposed_value": "3",
      "approved_value": null,
      "active_value": "3",
      "governance_status": "PROPOSED",
      "kr_rule_id": "KR-RNG-009",
      "last_updated_at": "2026-08-26T14:30:00Z"
    },
    {
      "parameter_id": "COMMERCE_REWARD_RATE",
      "parameter_group": "ALLOCATION_RATES",
      "description": "Commerce vendor allocation rate",
      "proposed_value": "0.600000",
      "approved_value": null,
      "active_value": "0.600000",
      "governance_status": "PROPOSED",
      "kr_rule_id": "KR-ECO-014",
      "last_updated_at": "2026-08-26T14:30:00Z"
    }
  ],
  "total_parameters": 145,
  "source_document": "KR-1 Appendix G"
}
```

---

### 9.9 Reward Cycles and Statements

#### EP-KRW-015 — List Reward Cycles

| Field | Value |
|---|---|
| **ID** | EP-KRW-015 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/cycles` |
| **Purpose** | List reward cycles |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-009; SDD-1 Ch.10; KR-1 Ch.63 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `status` | string | — | Filter by cycle status: `UPCOMING`, `ACTIVE`, `CALCULATION`, `CLOSED` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 12 | Items per page (max 100) |
| `sort` | string | `-cycle_id` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "cycle_id": "2026-08",
      "status": "ACTIVE",
      "period_start": "2026-08-01T00:00:00Z",
      "period_end": "2026-09-01T00:00:00Z",
      "calculation_date": "2026-09-01T00:00:00Z",
      "distribution_date": "2026-09-02T00:00:00Z",
      "reward_pool_size": null,
      "eligible_participants": null
    },
    {
      "cycle_id": "2026-07",
      "status": "CLOSED",
      "period_start": "2026-07-01T00:00:00Z",
      "period_end": "2026-08-01T00:00:00Z",
      "calculation_date": "2026-08-01T00:00:00Z",
      "distribution_date": "2026-08-02T00:00:00Z",
      "reward_pool_size": "45000.00",
      "eligible_participants": 3200
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-KRW-016 — Get Reward Statement

| Field | Value |
|---|---|
| **ID** | EP-KRW-016 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/statements/me/{cycle_id}` |
| **Purpose** | Get the authenticated user's reward statement for a specific cycle |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-009, SRS-KRW-010; SDD-1 Ch.10; KR-1 Ch.63, KR-RWD-001 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "cycle_id": "2026-07",
  "statement_status": "FINAL",
  "reward_share": {
    "k_points_normalized": "0.750000",
    "ring_contribution_normalized": "0.620000",
    "k_level_multiplier_normalized": "0.300000",
    "k_trust_normalized": "0.755000",
    "pillar_weights": {
      "k_points": "0.300000",
      "ring_contribution": "0.250000",
      "k_level_multiplier": "0.200000",
      "k_trust": "0.250000"
    },
    "blended_share": "0.616250",
    "kr_rule_id": "KR-RWD-001"
  },
  "reward_pool_size": "45000.00",
  "reward_pool_currency": "USD",
  "eligible_participants": 3200,
  "gross_reward_amount": "8.68",
  "cap_applied": false,
  "cap_rate": "0.050000",
  "cap_threshold": "2250.00",
  "pro_rata_applied": false,
  "net_reward_amount": "8.68",
  "distribution_status": "DISTRIBUTED",
  "distributed_at": "2026-08-02T00:00:00Z",
  "wallet_transaction_id": "wt-001e8400-e29b-41d4-a716-446655440000"
}
```

> **Note:** Reward Share is blended from four normalized pillars: Monthly K-Points (weight 0.30), Ring Contribution (weight 0.25), K-Level Multiplier (weight 0.20), and K-Trust (weight 0.25) (KR-RWD-001). The individual cap rate and pro-rata adjustment are GOVERNANCE PARAMETERS (KR-ECO-047, KR-ECO-049).

---

#### EP-KRW-017 — List Reward Statements

| Field | Value |
|---|---|
| **ID** | EP-KRW-017 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/statements/me` |
| **Purpose** | List the authenticated user's reward statements across cycles |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-KRW-010; SDD-1 Ch.10; KR-1 Ch.63 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `cycle_id_from` | string | — | Filter from cycle |
| `cycle_id_to` | string | — | Filter to cycle |
| `distribution_status` | string | — | Filter by distribution status |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 12 | Items per page (max 100) |
| `sort` | string | `-cycle_id` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "cycle_id": "2026-07",
      "net_reward_amount": "8.68",
      "currency": "USD",
      "distribution_status": "DISTRIBUTED",
      "distributed_at": "2026-08-02T00:00:00Z"
    },
    {
      "cycle_id": "2026-06",
      "net_reward_amount": "12.45",
      "currency": "USD",
      "distribution_status": "DISTRIBUTED",
      "distributed_at": "2026-07-02T00:00:00Z"
    }
  ],
  "pagination": { ... },
  "lifetime_total_rewards": "325.50"
}
```

---

### 9.10 Coronation

#### EP-KRW-018 — Get Coronation Eligibility

| Field | Value |
|---|---|
| **ID** | EP-KRW-018 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/coronation/eligibility/me` |
| **Purpose** | Get the authenticated user's coronation eligibility status |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-ROY-003, SRS-ROY-004; SDD-1 Ch.17; KR-1 Ch.52 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "current_k_level": 3,
  "current_tier": "FOUNDATION",
  "current_royal_identity": "Normal",
  "is_eligible_for_coronation": false,
  "next_coronation_tier": "PRINCE",
  "next_coronation_k_level": 7,
  "coronation_requirements": [
    {
      "requirement_code": "K_LEVEL",
      "description": "Achieve K-Level 7 (Leadership tier)",
      "required": 7,
      "current": 3,
      "is_met": false
    },
    {
      "requirement_code": "TRUST_SCORE",
      "description": "Minimum trust score of 40.00",
      "required": "40.00",
      "current": "75.50",
      "is_met": true
    },
    {
      "requirement_code": "LEADERSHIP_DEVELOPMENT",
      "description": "Meet Leadership Development Matrix requirements for K-Level 7",
      "required": true,
      "current": false,
      "is_met": false
    },
    {
      "requirement_code": "ACTIVE_STATUS",
      "description": "Maintain Active Status in the coronation cycle",
      "required": true,
      "current": true,
      "is_met": true
    },
    {
      "requirement_code": "NO_SANCTIONS",
      "description": "No active sanctions",
      "required": true,
      "current": true,
      "is_met": true
    }
  ],
  "all_requirements_met": false,
  "missing_requirements_count": 2,
  "kr_rule_id": "KR-COR-001"
}
```

---

#### EP-KRW-019 — Get Coronation History

| Field | Value |
|---|---|
| **ID** | EP-KRW-019 |
| **Method** | GET |
| **Path** | `/v1/k-rewards/coronation/history/me` |
| **Purpose** | Get the authenticated user's coronation history |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-ROY-005; SDD-1 Ch.17; KR-1 Ch.52, Ch.53, Ch.65 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "coronation_history": [
    {
      "coronation_id": "cr-001e8400-e29b-41d4-a716-446655440000",
      "coronation_tier": "PRINCE",
      "k_level": 7,
      "coronation_cycle": "2026-09",
      "coronation_date": "2026-09-02T00:00:00Z",
      "royal_identity_assigned": "Prince",
      "username_assigned": "PrinceAbdullah",
      "awards": [
        {
          "award_type": "BADGE",
          "award_name": "Leadership Prince Badge",
          "award_description": "Awarded for achieving Leadership tier"
        }
      ]
    }
  ],
  "total_coronations": 0,
  "current_coronation_tier": null
}
```

---

### 9.11 K-Rewards Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-KRW-001 | GET | `/v1/k-rewards/points/me` | Bearer | Get K-Points summary |
| EP-KRW-002 | GET | `/v1/k-rewards/points/me/history` | Bearer | Get K-Points history |
| EP-KRW-003 | GET | `/v1/k-rewards/points/me/lifetime` | Bearer | Get lifetime statistics |
| EP-KRW-004 | GET | `/v1/k-rewards/rings/me` | Bearer | Get ring structure |
| EP-KRW-005 | GET | `/v1/k-rewards/network-graph/me` | Bearer | Get network graph |
| EP-KRW-006 | GET | `/v1/k-rewards/levels/me` | Bearer | Get K-Level |
| EP-KRW-007 | GET | `/v1/k-rewards/levels/progression-matrix` | Bearer | Get progression matrix |
| EP-KRW-008 | GET | `/v1/k-rewards/leadership/qualification/me` | Bearer | Get leadership qualification status |
| EP-KRW-009 | GET | `/v1/k-rewards/rings/me/ring-1/qualifying-leaders` | Bearer | Get qualifying Ring 1 leaders |
| EP-KRW-010 | GET | `/v1/k-rewards/leadership/gap/me` | Bearer | Get leadership qualification gap |
| EP-KRW-011 | GET | `/v1/k-rewards/team/me` | Bearer | Get team summary |
| EP-KRW-012 | GET | `/v1/k-rewards/royal-identity/me` | Bearer | Get Royal Identity |
| EP-KRW-013 | GET | `/v1/k-rewards/royal-identity/{account_id}` | Bearer | Get public Royal Identity |
| EP-KRW-014 | GET | `/v1/k-rewards/governance-parameters` | Admin | Get governance parameters |
| EP-KRW-015 | GET | `/v1/k-rewards/cycles` | Bearer | List reward cycles |
| EP-KRW-016 | GET | `/v1/k-rewards/statements/me/{cycle_id}` | Bearer | Get reward statement |
| EP-KRW-017 | GET | `/v1/k-rewards/statements/me` | Bearer | List reward statements |
| EP-KRW-018 | GET | `/v1/k-rewards/coronation/eligibility/me` | Bearer | Get coronation eligibility |
| EP-KRW-019 | GET | `/v1/k-rewards/coronation/history/me` | Bearer | Get coronation history |

### 9.12 Governing Requirement Traceability

SRS-KRW-001 (K-Points), SRS-KRW-002 (K-Points categories), SRS-KRW-003 (K-Rings), SRS-KRW-004 (ring structure), SRS-KRW-005 (K-Levels), SRS-KRW-006 (K-Level progression), SRS-KRW-007 (leadership qualification), SRS-KRW-008 (leadership gap), SRS-KRW-009 (reward cycles), SRS-KRW-010 (reward statements), SRS-KRW-011 (reward share), SRS-KRW-012 (reward distribution), SRS-KRW-013 (K-Points reversal), SRS-KRW-014 (ring maintenance), SRS-KRW-015 (governance parameters); SRS-ROY-001 (Royal Identity), SRS-ROY-002 (username), SRS-ROY-003 (coronation eligibility), SRS-ROY-004 (coronation verification), SRS-ROY-005 (coronation recognition); SDD-1 Ch.10, Ch.17, Ch.18; SAD-1 Ch.13; DDD-1 Ch.10, Ch.17, Ch.18; KR-1 KR-PNT-001–025, KR-RNG-001–017, KR-LVL-001–040, KR-RWD-001, KR-COR-001+, KR-ECO-014, KR-ECO-040–056; PLC-1 Ch.22, Ch.31.

---

## Chapter 10 — Wallet/Payments Engine APIs

### 10.1 Overview

The Wallet/Payments Engine APIs provide wallet management, transaction history, deposits, withdrawals, holds, settlements, and reversals. The Wallet/Payments Engine records financial movements and executes reward distribution; it does not calculate reward entitlement (KR-FND-020). All monetary values are represented as string decimals with 2 decimal places — never floating-point. The 10% reserve is protected from reward distribution and is never exposed through participant-facing APIs (SRS-WAL-001–014; SDD-1 Ch.12; SAD-1 Ch.14; DDD-1 Ch.11, Ch.19; KR-1 KR-ECO-052–056).

**Base path:** `/v1/wallet`

**Authentication:** Bearer token for all participant endpoints. Admin role for settlement and reconciliation endpoints.

### 10.2 Wallets

#### EP-WAL-001 — Get Wallet

| Field | Value |
|---|---|
| **ID** | EP-WAL-001 |
| **Method** | GET |
| **Path** | `/v1/wallet/me` |
| **Purpose** | Get the authenticated user's wallet |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-001; SDD-1 Ch.12; DDD-1 Ch.11 |

**Response (200 OK):**

```json
{
  "wallet_id": "wt-001e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "currency": "USD",
  "available_balance": "1250.00",
  "pending_balance": "75.00",
  "held_balance": "0.00",
  "lifetime_in": "8500.00",
  "lifetime_out": "7250.00",
  "status": "ACTIVE",
  "created_at": "2026-08-20T10:00:00Z"
}
```

> **Note:** `available_balance` is the spendable amount. `pending_balance` is in transit (deposits clearing, withdrawals being processed). `held_balance` is escrowed for pending transactions (service contract escrow, order holds).

---

### 10.3 Transactions

#### EP-WAL-002 — List Transactions

| Field | Value |
|---|---|
| **ID** | EP-WAL-002 |
| **Method** | GET |
| **Path** | `/v1/wallet/me/transactions` |
| **Purpose** | List wallet transactions for the authenticated user |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-002; SDD-1 Ch.12; DDD-1 Ch.11 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `type` | string | — | Filter by type: `DEPOSIT`, `WITHDRAWAL`, `PAYMENT`, `REFUND`, `REWARD`, `HOLD`, `RELEASE`, `SETTLEMENT` |
| `status` | string | — | Filter by status: `PENDING`, `COMPLETED`, `FAILED`, `REVERSED` |
| `amount_min` | string | — | Minimum amount |
| `amount_max` | string | — | Maximum amount |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "transaction_id": "tx-001e8400-e29b-41d4-a716-446655440000",
      "type": "REWARD",
      "direction": "CREDIT",
      "amount": "8.68",
      "currency": "USD",
      "balance_after": "1250.00",
      "status": "COMPLETED",
      "description": "Reward distribution for cycle 2026-07",
      "reference": {
        "reference_type": "REWARD_CYCLE",
        "reference_id": "2026-07"
      },
      "created_at": "2026-08-02T00:00:00Z",
      "completed_at": "2026-08-02T00:00:01Z"
    },
    {
      "transaction_id": "tx-002e8400-e29b-41d4-a716-446655440000",
      "type": "PAYMENT",
      "direction": "DEBIT",
      "amount": "205.98",
      "currency": "USD",
      "balance_after": "1241.32",
      "status": "COMPLETED",
      "description": "Payment for order #1000001",
      "reference": {
        "reference_type": "ORDER",
        "reference_id": "88f1e8400-e29b-41d4-a716-446655440000"
      },
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-WAL-003 — Get Transaction

| Field | Value |
|---|---|
| **ID** | EP-WAL-003 |
| **Method** | GET |
| **Path** | `/v1/wallet/me/transactions/{transaction_id}` |
| **Purpose** | Get a specific transaction |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-002; SDD-1 Ch.12 |

**Response (200 OK):**

```json
{
  "transaction_id": "tx-001e8400-e29b-41d4-a716-446655440000",
  "wallet_id": "wt-001e8400-e29b-41d4-a716-446655440000",
  "type": "REWARD",
  "direction": "CREDIT",
  "amount": "8.68",
  "currency": "USD",
  "fee_amount": "0.00",
  "balance_before": "1241.32",
  "balance_after": "1250.00",
  "status": "COMPLETED",
  "description": "Reward distribution for cycle 2026-07",
  "reference": {
    "reference_type": "REWARD_CYCLE",
    "reference_id": "2026-07"
  },
  "metadata": {
    "reward_pool_size": "45000.00",
    "blended_share": "0.616250",
    "eligible_participants": 3200
  },
  "idempotency_key": "idem-reward-2026-07-550e84",
  "created_at": "2026-08-02T00:00:00Z",
  "completed_at": "2026-08-02T00:00:01Z",
  "is_reversed": false
}
```

---

### 10.4 Deposits

#### EP-WAL-004 — Create Deposit

| Field | Value |
|---|---|
| **ID** | EP-WAL-004 |
| **Method** | POST |
| **Path** | `/v1/wallet/me/deposits` |
| **Purpose** | Initiate a deposit into the wallet |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-003; SDD-1 Ch.12; DDD-1 Ch.11 |

**Request:**

```json
{
  "amount": "500.00",
  "currency": "USD",
  "payment_method_id": "pm-001e8400-e29b-41d4-a716-446655440000",
  "source": "CARD"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `amount` | string | Yes | Decimal string, 2 places, > 0 |
| `currency` | string | Yes | ISO 4217 |
| `payment_method_id` | string (UUID) | Yes | Must be a valid payment method for this account |
| `source` | string | Yes | One of: `CARD`, `BANK_TRANSFER`, `MOBILE_MONEY`, `PAYPAL` |

**Response (201 Created):**

```json
{
  "deposit_id": "dp-001e8400-e29b-41d4-a716-446655440000",
  "wallet_id": "wt-001e8400-e29b-41d4-a716-446655440000",
  "amount": "500.00",
  "currency": "USD",
  "status": "PENDING",
  "source": "CARD",
  "estimated_completion": "2026-08-26T15:00:00Z",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid amount or payment method |
| 422 | `PAYMENT_METHOD_INVALID` | Payment method is not valid for deposits |
| 422 | `DEPOSIT_FAILED` | Deposit could not be initiated |
| 429 | `RATE_LIMIT_EXCEEDED` | Too many deposit attempts |

---

### 10.5 Withdrawals

#### EP-WAL-005 — Create Withdrawal

| Field | Value |
|---|---|
| **ID** | EP-WAL-005 |
| **Method** | POST |
| **Path** | `/v1/wallet/me/withdrawals` |
| **Purpose** | Initiate a withdrawal from the wallet |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-004; SDD-1 Ch.12; DDD-1 Ch.11 |

**Request:**

```json
{
  "amount": "300.00",
  "currency": "USD",
  "destination": "BANK_TRANSFER",
  "destination_details": {
    "bank_account_id": "ba-001e8400-e29b-41d4-a716-446655440000"
  }
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `amount` | string | Yes | Decimal string, 2 places, > 0 |
| `currency` | string | Yes | ISO 4217 |
| `destination` | string | Yes | One of: `BANK_TRANSFER`, `MOBILE_MONEY`, `PAYPAL` |
| `destination_details` | object | Yes | Destination-specific details |

**Response (201 Created):**

```json
{
  "withdrawal_id": "wd-001e8400-e29b-41d4-a716-446655440000",
  "wallet_id": "wt-001e8400-e29b-41d4-a716-446655440000",
  "amount": "300.00",
  "currency": "USD",
  "fee_amount": "5.00",
  "net_amount": "295.00",
  "status": "PENDING",
  "destination": "BANK_TRANSFER",
  "estimated_completion": "2026-08-28T14:30:00Z",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid amount or destination |
| 422 | `INSUFFICIENT_BALANCE` | Available balance is less than the withdrawal amount + fee |
| 422 | `WITHDRAWAL_LIMIT_EXCEEDED` | Amount exceeds daily or monthly withdrawal limit |
| 403 | `KYC_INSUFFICIENT` | KYC tier does not permit withdrawals |

---

### 10.6 Payment Methods

#### EP-WAL-006 — List Payment Methods

| Field | Value |
|---|---|
| **ID** | EP-WAL-006 |
| **Method** | GET |
| **Path** | `/v1/wallet/me/payment-methods` |
| **Purpose** | List the authenticated user's payment methods |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-005; SDD-1 Ch.12 |

**Response (200 OK):**

```json
{
  "data": [
    {
      "payment_method_id": "pm-001e8400-e29b-41d4-a716-446655440000",
      "type": "CARD",
      "display_name": "Visa ending in 4242",
      "brand": "VISA",
      "last4": "4242",
      "expiry_month": 12,
      "expiry_year": 2027,
      "is_default": true,
      "status": "ACTIVE",
      "created_at": "2026-08-20T10:00:00Z"
    },
    {
      "payment_method_id": "pm-002e8400-e29b-41d4-a716-446655440000",
      "type": "BANK_ACCOUNT",
      "display_name": "KCB Bank ****1234",
      "bank_name": "Kenya Commercial Bank",
      "last4": "1234",
      "is_default": false,
      "status": "ACTIVE",
      "created_at": "2026-08-21T10:00:00Z"
    }
  ]
}
```

---

#### EP-WAL-007 — Add Payment Method

| Field | Value |
|---|---|
| **ID** | EP-WAL-007 |
| **Method** | POST |
| **Path** | `/v1/wallet/me/payment-methods` |
| **Purpose** | Add a payment method to the wallet |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-005; SDD-1 Ch.12 |

**Request:**

```json
{
  "type": "CARD",
  "token": "payment-provider-token",
  "is_default": true,
  "billing_address": {
    "line1": "123 Main Street",
    "city": "Nairobi",
    "country": "KE",
    "postal_code": "00100"
  }
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `type` | string | Yes | One of: `CARD`, `BANK_ACCOUNT`, `MOBILE_MONEY` |
| `token` | string | Yes | Tokenized payment method from payment provider |
| `is_default` | boolean | No | Default: `false` |
| `billing_address` | object | No | Billing address |

**Response (201 Created):**

```json
{
  "payment_method_id": "pm-003e8400-e29b-41d4-a716-446655440000",
  "type": "CARD",
  "display_name": "Mastercard ending in 5555",
  "brand": "MASTERCARD",
  "last4": "5555",
  "is_default": true,
  "status": "ACTIVE",
  "created_at": "2026-08-26T14:30:00Z"
}
```

> **Note:** The `token` field contains a tokenized reference from the payment provider. The raw card number or bank account details are never stored in the K-NETWORK system and are never returned in API responses.

---

#### EP-WAL-008 — Remove Payment Method

| Field | Value |
|---|---|
| **ID** | EP-WAL-008 |
| **Method** | DELETE |
| **Path** | `/v1/wallet/me/payment-methods/{payment_method_id}` |
| **Purpose** | Remove a payment method |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (DELETE) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-005 |

**Response (204 No Content)**

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 409 | `PAYMENT_METHOD_IN_USE` | Payment method is used in a pending transaction |

---

### 10.7 Holds and Escrow

#### EP-WAL-009 — List Holds

| Field | Value |
|---|---|
| **ID** | EP-WAL-009 |
| **Method** | GET |
| **Path** | `/v1/wallet/me/holds` |
| **Purpose** | List holds (escrow) on the wallet |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.12; DDD-1 Ch.11 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `status` | string | — | Filter by status: `HELD`, `RELEASED`, `CAPTURED` |
| `reference_type` | string | — | Filter by reference type: `ORDER`, `CONTRACT` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "hold_id": "hd-001e8400-e29b-41d4-a716-446655440000",
      "wallet_id": "wt-001e8400-e29b-41d4-a716-446655440000",
      "amount": "1200.00",
      "currency": "USD",
      "status": "HELD",
      "reference": {
        "reference_type": "CONTRACT",
        "reference_id": "bbf2e8400-e29b-41d4-a716-446655440000"
      },
      "description": "Escrow for service contract",
      "created_at": "2026-08-26T14:30:00Z",
      "expires_at": "2026-09-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

### 10.8 Settlements (Vendor/Provider)

#### EP-WAL-010 — List Wallet Settlements

| Field | Value |
|---|---|
| **ID** | EP-WAL-010 |
| **Method** | GET |
| **Path** | `/v1/wallet/me/settlements` |
| **Purpose** | List settlements credited to the wallet |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-007; SDD-1 Ch.12; DDD-1 Ch.19 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `source` | string | — | Filter by source: `COMMERCE`, `SERVICES`, `LEARNING` |
| `status` | string | — | Filter by status: `PENDING`, `SETTLED`, `REVERSED` |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "settlement_id": "st-001e8400-e29b-41d4-a716-446655440000",
      "source": "COMMERCE",
      "gross_revenue": "189.98",
      "deductions": "5.00",
      "qualifying_economic_value": "184.98",
      "vendor_amount": "110.99",
      "reserve_amount": "18.50",
      "currency": "USD",
      "status": "SETTLED",
      "reference": {
        "reference_type": "ORDER",
        "reference_id": "88f1e8400-e29b-41d4-a716-446655440000"
      },
      "transaction_id": "tx-003e8400-e29b-41d4-a716-446655440000",
      "created_at": "2026-08-26T14:30:00Z",
      "settled_at": "2026-08-26T15:00:00Z"
    }
  ],
  "pagination": { ... }
}
```

> **Note:** The vendor/provider-facing settlement response shows `gross_revenue`, `deductions`, `qualifying_economic_value`, `vendor_amount` (their share), `reserve_amount`, and `status`. It does NOT expose the platform's internal allocation details (platform, reward pool, operational amounts). Those internal breakdowns are admin-only (Chapter 15).

---

### 10.9 Reversals

#### EP-WAL-011 — List Reversals

| Field | Value |
|---|---|
| **ID** | EP-WAL-011 |
| **Method** | GET |
| **Path** | `/v1/wallet/me/reversals` |
| **Purpose** | List reversed transactions for the wallet |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-WAL-008; SDD-1 Ch.12; KR-1 KR-ECO-057–063 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `reversal_type` | string | — | Filter by type: `REFUND`, `CHARGEBACK`, `FRAUD`, `SETTLEMENT_FAILURE` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "reversal_id": "rv-001e8400-e29b-41d4-a716-446655440000",
      "original_transaction_id": "tx-002e8400-e29b-41d4-a716-446655440000",
      "reversal_type": "REFUND",
      "amount": "94.99",
      "currency": "USD",
      "status": "COMPLETED",
      "reason": "Product defective — full refund approved",
      "reference": {
        "reference_type": "RETURN",
        "reference_id": "bbf1e8400-e29b-41d4-a716-446655440000"
      },
      "created_at": "2026-08-26T16:00:00Z",
      "completed_at": "2026-08-26T16:00:05Z"
    }
  ],
  "pagination": { ... }
}
```

---

### 10.10 Wallet Configuration (Admin)

#### EP-WAL-012 — Get Wallet Configuration

| Field | Value |
|---|---|
| **ID** | EP-WAL-012 |
| **Method** | GET |
| **Path** | `/v1/wallet/config` |
| **Purpose** | Get wallet configuration (withdrawal limits, fees, supported currencies) — admin only |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-009; SDD-1 Ch.12 |

**Response (200 OK):**

```json
{
  "supported_currencies": ["USD", "KES", "NGN", "GHS", "ZAR", "EUR", "GBP"],
  "withdrawal_limits": {
    "daily": "5000.00",
    "monthly": "50000.00",
    "minimum": "10.00"
  },
  "deposit_limits": {
    "daily": "10000.00",
    "minimum": "1.00"
  },
  "fees": {
    "withdrawal_bank": "5.00",
    "withdrawal_mobile_money": "2.00",
    "deposit": "0.00"
  },
  "hold_expiry_days": 30,
  "is_governance_parameter": true
}
```

---

#### EP-WAL-013 — Get Reserve Status (Admin)

| Field | Value |
|---|---|
| **ID** | EP-WAL-013 |
| **Method** | GET |
| **Path** | `/v1/wallet/reserve` |
| **Purpose** | Get the protected reserve status — admin only |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.12; DDD-1 Ch.19; KR-1 KR-ECO-052–056 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `cycle_id` | string | Current | Reward cycle to query reserve for |

**Response (200 OK):**

```json
{
  "cycle_id": "2026-08",
  "total_reserve": "4500.00",
  "currency": "USD",
  "reserve_percentage": "0.100000",
  "reserve_allocations": [
    {
      "allocation_id": "ra-001e8400-e29b-41d4-a716-446655440000",
      "source": "COMMERCE",
      "transaction_reference": "88f1e8400-e29b-41d4-a716-446655440000",
      "gross_revenue": "189.98",
      "qev": "184.98",
      "reserve_amount": "18.50",
      "reserve_percentage": "0.100000",
      "created_at": "2026-08-26T14:30:00Z",
      "is_released": false
    }
  ],
  "is_protected": true,
  "kr_rule_id": "KR-ECO-052"
}
```

> **Note:** The reserve is 10% of QEV for each transaction (KR-ECO-052). It is protected from reward distribution (KR-ECO-053) and may only be used through formal governance approval (KR-ECO-056). This endpoint is admin-only; reserve details are never exposed to participants.

---

#### EP-WAL-014 — Release Reserve (Admin)

| Field | Value |
|---|---|
| **ID** | EP-WAL-014 |
| **Method** | POST |
| **Path** | `/v1/wallet/reserve/release` |
| **Purpose** | Release reserve funds per governance approval — admin only |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.12; DDD-1 Ch.19; KR-1 KR-ECO-056 |

**Request:**

```json
{
  "allocation_ids": ["ra-001e8400-e29b-41d4-a716-446655440000"],
  "governance_approval_id": "ga-001e8400-e29b-41d4-a716-446655440000",
  "destination": "OPERATIONAL_RESERVE",
  "reason": "Governance-approved allocation to coronation awards fund"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `allocation_ids` | array[string] | Yes | Reserve allocation IDs to release |
| `governance_approval_id` | string (UUID) | Yes | Must be an approved governance review |
| `destination` | string | Yes | One of: `OPERATIONAL_RESERVE`, `CORONATION_FUND`, `SPECIAL_CAMPAIGN` |
| `reason` | string | Yes | Min 10 chars |

**Response (200 OK):**

```json
{
  "release_id": "rl-001e8400-e29b-41d4-a716-446655440000",
  "total_released": "18.50",
  "currency": "USD",
  "destination": "OPERATIONAL_RESERVE",
  "governance_approval_id": "ga-001e8400-e29b-41d4-a716-446655440000",
  "released_at": "2026-08-26T18:00:00Z",
  "released_by": "admin-account-id"
}
```

> **Note:** Reserve release requires formal governance approval (KR-ECO-056). The `reserve_allocations` table is append-only and can only be modified through this governance-controlled release process. The reserve is never used to fund reward distributions.

---

### 10.11 Wallet/Payments Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-WAL-001 | GET | `/v1/wallet/me` | Bearer | Get wallet |
| EP-WAL-002 | GET | `/v1/wallet/me/transactions` | Bearer | List transactions |
| EP-WAL-003 | GET | `/v1/wallet/me/transactions/{id}` | Bearer | Get transaction |
| EP-WAL-004 | POST | `/v1/wallet/me/deposits` | Bearer | Create deposit |
| EP-WAL-005 | POST | `/v1/wallet/me/withdrawals` | Bearer | Create withdrawal |
| EP-WAL-006 | GET | `/v1/wallet/me/payment-methods` | Bearer | List payment methods |
| EP-WAL-007 | POST | `/v1/wallet/me/payment-methods` | Bearer | Add payment method |
| EP-WAL-008 | DELETE | `/v1/wallet/me/payment-methods/{id}` | Bearer | Remove payment method |
| EP-WAL-009 | GET | `/v1/wallet/me/holds` | Bearer | List holds |
| EP-WAL-010 | GET | `/v1/wallet/me/settlements` | Bearer | List settlements |
| EP-WAL-011 | GET | `/v1/wallet/me/reversals` | Bearer | List reversals |
| EP-WAL-012 | GET | `/v1/wallet/config` | Admin | Get wallet config |
| EP-WAL-013 | GET | `/v1/wallet/reserve` | Admin | Get reserve status |
| EP-WAL-014 | POST | `/v1/wallet/reserve/release` | Admin | Release reserve |

### 10.12 Governing Requirement Traceability

SRS-WAL-001 (wallet creation), SRS-WAL-002 (transaction recording), SRS-WAL-003 (deposits), SRS-WAL-004 (withdrawals), SRS-WAL-005 (payment methods), SRS-WAL-006 (reserve protection), SRS-WAL-007 (settlements), SRS-WAL-008 (reversals), SRS-WAL-009 (wallet configuration), SRS-WAL-010 (multi-currency), SRS-WAL-011 (escrow/holds), SRS-WAL-012 (reward distribution), SRS-WAL-013 (transaction integrity), SRS-WAL-014 (audit trail); SDD-1 Ch.12; SAD-1 Ch.14; DDD-1 Ch.11, Ch.19; KR-1 KR-FND-020, KR-ECO-052–056.

---

## Chapter 11 — Intelligence Engine APIs

### 11.1 Overview

The Intelligence Engine APIs provide behavioral signal analysis, recommendations, fraud signal detection, and platform analytics. These endpoints are **admin-only** — the Intelligence Engine processes internal signals and does not expose its calculations to participants. Participants receive the *outputs* of intelligence (trust scores, eligibility, fraud blocks) through their respective engine APIs (Trust, K-Rewards, Wallet), not through direct Intelligence Engine access. The Intelligence Engine's APIs are for platform administrators, compliance officers, and fraud analysts to monitor, investigate, and act on intelligence signals (SRS-INT-001–004; SDD-1 Ch.14; SAD-1 Ch.15; DDD-1 Ch.13).

**Base path:** `/v1/intelligence`

**Authentication:** Bearer token required for all endpoints.

**Authorization:** `admin` role for most endpoints. `compliance` role for fraud investigation endpoints.

### 11.2 Behavioral Signals

#### EP-INT-001 — List Behavioral Signals

| Field | Value |
|---|---|
| **ID** | EP-INT-001 |
| **Method** | GET |
| **Path** | `/v1/intelligence/behavioral-signals` |
| **Purpose** | List behavioral signals collected by the Intelligence Engine |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-INT-001; SDD-1 Ch.14; DDD-1 Ch.13 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `account_id` | string | — | Filter by account |
| `signal_type` | string | — | Filter by signal type: `TRANSACTION_PATTERN`, `LOGIN_PATTERN`, `SOCIAL_PATTERN`, `COMMERCE_PATTERN`, `SERVICES_PATTERN`, `LEARNING_PATTERN` |
| `risk_level` | string | — | Filter by risk level: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL` |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "signal_id": "bs-001e8400-e29b-41d4-a716-446655440000",
      "account_id": "550e8400-e29b-41d4-a716-446655440000",
      "signal_type": "TRANSACTION_PATTERN",
      "risk_level": "MEDIUM",
      "signal_score": "0.650000",
      "description": "Unusual transaction velocity detected — 15 orders in 1 hour",
      "metadata": {
        "transaction_count": 15,
        "time_window_hours": 1,
        "baseline_average": 3
      },
      "is_resolved": false,
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-INT-002 — Get Behavioral Signal

| Field | Value |
|---|---|
| **ID** | EP-INT-002 |
| **Method** | GET |
| **Path** | `/v1/intelligence/behavioral-signals/{signal_id}` |
| **Purpose** | Get details of a specific behavioral signal |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-INT-001; SDD-1 Ch.14 |

**Response (200 OK):**

```json
{
  "signal_id": "bs-001e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "signal_type": "TRANSACTION_PATTERN",
  "risk_level": "MEDIUM",
  "signal_score": "0.650000",
  "description": "Unusual transaction velocity detected — 15 orders in 1 hour",
  "metadata": {
    "transaction_count": 15,
    "time_window_hours": 1,
    "baseline_average": 3,
    "statistical_deviation": "4.2_sigma"
  },
  "contributing_factors": [
    "Transaction velocity 5x baseline",
    "All orders to same vendor",
    "New payment method used"
  ],
  "recommended_actions": [
    "REVIEW_ACCOUNT",
    "FLAG_FOR_FRAUD_CHECK",
    "TEMPORARY_VELOCITY_LIMIT"
  ],
  "is_resolved": false,
  "resolved_at": null,
  "resolved_by": null,
  "resolution_notes": null,
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

### 11.3 Recommendations

#### EP-INT-003 — List Recommendations

| Field | Value |
|---|---|
| **ID** | EP-INT-003 |
| **Method** | GET |
| **Path** | `/v1/intelligence/recommendations` |
| **Purpose** | List platform recommendations generated by the Intelligence Engine |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-INT-002; SDD-1 Ch.14 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `category` | string | — | Filter by category: `PRODUCT`, `VENDOR_SUPPORT`, `FRAUD_PREVENTION`, `PLATFORM_OPTIMIZATION`, `USER_ENGAGEMENT` |
| `priority` | string | — | Filter by priority: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL` |
| `status` | string | — | Filter by status: `PENDING`, `ACTED_ON`, `DISMISSED` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "recommendation_id": "rc-001e8400-e29b-41d4-a716-446655440000",
      "category": "FRAUD_PREVENTION",
      "priority": "HIGH",
      "title": "Implement velocity limits for new accounts",
      "description": "New accounts (created < 7 days) show 3x higher fraud rate. Consider implementing transaction velocity limits for the first 7 days.",
      "affected_scope": "NEW_ACCOUNTS",
      "estimated_impact": "Reduce fraud by ~15%",
      "status": "PENDING",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-INT-004 — Act on Recommendation

| Field | Value |
|---|---|
| **ID** | EP-INT-004 |
| **Method** | POST |
| **Path** | `/v1/intelligence/recommendations/{recommendation_id}/action` |
| **Purpose** | Act on or dismiss a recommendation |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-INT-002; SDD-1 Ch.14 |

**Request:**

```json
{
  "action": "ACTED_ON",
  "notes": "Implemented velocity limit of 5 transactions per hour for accounts < 7 days old."
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `action` | string | Yes | One of: `ACTED_ON`, `DISMISSED` |
| `notes` | string | Yes | Min 10, max 2000 chars |

**Response (200 OK):**

```json
{
  "recommendation_id": "rc-001e8400-e29b-41d4-a716-446655440000",
  "status": "ACTED_ON",
  "acted_on_by": "admin-account-id",
  "acted_on_at": "2026-08-26T16:00:00Z",
  "notes": "Implemented velocity limit of 5 transactions per hour for accounts < 7 days old."
}
```

---

### 11.4 Fraud Signals

#### EP-INT-005 — List Fraud Signals

| Field | Value |
|---|---|
| **ID** | EP-INT-005 |
| **Method** | GET |
| **Path** | `/v1/intelligence/fraud-signals` |
| **Purpose** | List fraud signals detected by the Intelligence Engine |
| **Authentication** | Bearer token |
| **Authorization** | `admin` or `compliance` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-INT-003; SDD-1 Ch.14; DDD-1 Ch.13; KR-1 Ch.56 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `account_id` | string | — | Filter by account |
| `fraud_type` | string | — | Filter by type: `TRANSACTION_FRAUD`, `IDENTITY_FRAUD`, `REFERRAL_FRAUD`, `RING_FRAUD`, `CHARGEBACK_ABUSE`, `ARTIFICIAL_ACTIVITY` |
| `severity` | string | — | Filter by severity: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL` |
| `status` | string | — | Filter by status: `DETECTED`, `INVESTIGATING`, `CONFIRMED`, `FALSE_POSITIVE`, `RESOLVED` |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "fraud_signal_id": "fs-001e8400-e29b-41d4-a716-446655440000",
      "account_id": "550e8400-e29b-41d4-a716-446655440000",
      "fraud_type": "ARTIFICIAL_ACTIVITY",
      "severity": "HIGH",
      "confidence_score": "0.890000",
      "status": "INVESTIGATING",
      "description": "Artificial ring inflation detected — 8 of 10 Ring 1 members show no genuine activity",
      "detected_at": "2026-08-26T14:30:00Z",
      "evidence_summary": {
        "ring_1_total": 10,
        "ring_1_genuine": 2,
        "ring_1_artificial": 8,
        "artificial_patterns": ["NO_TRANSACTIONS", "IMMEDIATE_REFERRAL_CHAIN", "SAME_IP_CLUSTER"]
      }
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-INT-006 — Get Fraud Signal

| Field | Value |
|---|---|
| **ID** | EP-INT-006 |
| **Method** | GET |
| **Path** | `/v1/intelligence/fraud-signals/{fraud_signal_id}` |
| **Purpose** | Get details of a specific fraud signal |
| **Authentication** | Bearer token |
| **Authorization** | `admin` or `compliance` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-INT-003; SDD-1 Ch.14; KR-1 Ch.56 |

**Response (200 OK):**

```json
{
  "fraud_signal_id": "fs-001e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "fraud_type": "ARTIFICIAL_ACTIVITY",
  "severity": "HIGH",
  "confidence_score": "0.890000",
  "status": "INVESTIGATING",
  "description": "Artificial ring inflation detected — 8 of 10 Ring 1 members show no genuine activity",
  "detected_at": "2026-08-26T14:30:00Z",
  "evidence": {
    "ring_analysis": {
      "ring_1_total": 10,
      "ring_1_genuine": 2,
      "ring_1_artificial": 8,
      "artificial_member_ids": [
        "acc-001e8400-e29b-41d4-a716-446655440000",
        "acc-002e8400-e29b-41d4-a716-446655440000"
      ]
    },
    "pattern_analysis": {
      "NO_TRANSACTIONS": 8,
      "IMMEDIATE_REFERRAL_CHAIN": 6,
      "SAME_IP_CLUSTER": 5,
      "NO_KYC_VERIFICATION": 8
    },
    "behavioral_indicators": [
      "All 8 accounts created within 2 hours",
      "All accounts share 3 IP addresses",
      "No account has completed any transaction",
      "Referral chain has depth 5 with no branching"
    ]
  },
  "recommended_actions": [
    "SUSPEND_ACCOUNT",
    "INVALIDATE_RING_CONTRIBUTION",
    "REVERSE_K_POINTS",
    "REFER_TO_COMPLIANCE"
  ],
  "related_fraud_signals": [],
  "investigation_history": [
    {
      "action": "DETECTED",
      "acted_by": "system",
      "at": "2026-08-26T14:30:00Z",
      "notes": "Auto-detected by fraud detection algorithm"
    }
  ]
}
```

---

#### EP-INT-007 — Update Fraud Signal Status

| Field | Value |
|---|---|
| **ID** | EP-INT-007 |
| **Method** | POST |
| **Path** | `/v1/intelligence/fraud-signals/{fraud_signal_id}/status` |
| **Purpose** | Update the status of a fraud signal (investigate, confirm, dismiss) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` or `compliance` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-INT-003; SDD-1 Ch.14; KR-1 Ch.56 |

**Request:**

```json
{
  "status": "CONFIRMED",
  "notes": "Investigation confirms artificial ring inflation. 8 accounts are fake. Recommending account suspension and ring invalidation."
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `status` | string | Yes | One of: `INVESTIGATING`, `CONFIRMED`, `FALSE_POSITIVE`, `RESOLVED` |
| `notes` | string | Yes | Min 10, max 2000 chars |

**Response (200 OK):**

```json
{
  "fraud_signal_id": "fs-001e8400-e29b-41d4-a716-446655440000",
  "status": "CONFIRMED",
  "updated_by": "admin-account-id",
  "updated_at": "2026-08-26T16:00:00Z",
  "notes": "Investigation confirms artificial ring inflation. 8 accounts are fake. Recommending account suspension and ring invalidation."
}
```

> **Note:** When a fraud signal is confirmed, the Intelligence Engine triggers downstream actions through the Administration Engine (sanctions) and K-Rewards Engine (ring invalidation, K-Points reversal) via the event bus. The API call itself does not directly modify those engines.

---

### 11.5 Analytics

#### EP-INT-008 — Get Platform Analytics

| Field | Value |
|---|---|
| **ID** | EP-INT-008 |
| **Method** | GET |
| **Path** | `/v1/intelligence/analytics` |
| **Purpose** | Get platform-wide analytics dashboard data |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-INT-004; SDD-1 Ch.14 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `period` | string | `30d` | Time period: `24h`, `7d`, `30d`, `90d`, `1y` |
| `metrics` | string | — | Comma-separated list of specific metrics to include |
| `granularity` | string | `day` | Data granularity: `hour`, `day`, `week`, `month` |

**Response (200 OK):**

```json
{
  "period": "30d",
  "granularity": "day",
  "generated_at": "2026-08-26T14:30:00Z",
  "platform_metrics": {
    "total_accounts": 125000,
    "active_accounts_30d": 45000,
    "new_accounts_30d": 3200,
    "total_vendors": 1200,
    "total_providers": 850,
    "total_instructors": 320
  },
  "commerce_metrics": {
    "total_orders": 15600,
    "total_gmv": "1250000.00",
    "average_order_value": "80.13",
    "order_completion_rate": "0.920000",
    "dispute_rate": "0.030000"
  },
  "services_metrics": {
    "total_contracts": 4200,
    "total_gmv": "890000.00",
    "average_contract_value": "211.90",
    "contract_completion_rate": "0.880000"
  },
  "learning_metrics": {
    "total_enrollments": 8900,
    "total_completions": 5600,
    "completion_rate": "0.629000"
  },
  "k_rewards_metrics": {
    "reward_pool_distributed_30d": "45000.00",
    "eligible_participants": 3200,
    "average_reward": "14.06",
    "coronation_events_30d": 12
  },
  "trust_metrics": {
    "average_trust_score": "72.50",
    "accounts_below_threshold": 2100,
    "frozen_accounts": 45
  },
  "fraud_metrics": {
    "fraud_signals_30d": 89,
    "confirmed_fraud_30d": 23,
    "false_positive_rate": "0.258000",
    "accounts_suspended_fraud_30d": 15
  },
  "time_series": [
    {
      "date": "2026-08-26",
      "active_accounts": 45000,
      "orders": 520,
      "gmv": "41600.00",
      "reward_pool_contributions": "3744.00"
    }
  ]
}
```

---

#### EP-INT-009 — Get Account Risk Profile

| Field | Value |
|---|---|
| **ID** | EP-INT-009 |
| **Method** | GET |
| **Path** | `/v1/intelligence/accounts/{account_id}/risk-profile` |
| **Purpose** | Get the risk profile for a specific account |
| **Authentication** | Bearer token |
| **Authorization** | `admin` or `compliance` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-INT-003; SDD-1 Ch.14 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "overall_risk_score": "0.150000",
  "risk_level": "LOW",
  "risk_factors": [
    {
      "factor": "ACCOUNT_AGE",
      "score": "0.050000",
      "description": "Account is 2 years old",
      "risk_level": "LOW"
    },
    {
      "factor": "TRANSACTION_PATTERN",
      "score": "0.100000",
      "description": "Normal transaction patterns",
      "risk_level": "LOW"
    },
    {
      "factor": "KYC_VERIFICATION",
      "score": "0.020000",
      "description": "KYC TIER_2 verified",
      "risk_level": "LOW"
    },
    {
      "factor": "TRUST_SCORE",
      "score": "0.150000",
      "description": "Trust score 75.50",
      "risk_level": "LOW"
    },
    {
      "factor": "RING_INTEGRITY",
      "score": "0.080000",
      "description": "Ring members show genuine activity",
      "risk_level": "LOW"
    }
  ],
  "fraud_history": {
    "total_fraud_signals": 0,
    "confirmed_fraud": 0,
    "last_fraud_signal": null
  },
  "behavioral_anomalies": [],
  "calculated_at": "2026-08-26T14:30:00Z"
}
```

---

### 11.6 Intelligence Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-INT-001 | GET | `/v1/intelligence/behavioral-signals` | Admin | List behavioral signals |
| EP-INT-002 | GET | `/v1/intelligence/behavioral-signals/{id}` | Admin | Get behavioral signal |
| EP-INT-003 | GET | `/v1/intelligence/recommendations` | Admin | List recommendations |
| EP-INT-004 | POST | `/v1/intelligence/recommendations/{id}/action` | Admin | Act on recommendation |
| EP-INT-005 | GET | `/v1/intelligence/fraud-signals` | Admin/Compliance | List fraud signals |
| EP-INT-006 | GET | `/v1/intelligence/fraud-signals/{id}` | Admin/Compliance | Get fraud signal |
| EP-INT-007 | POST | `/v1/intelligence/fraud-signals/{id}/status` | Admin/Compliance | Update fraud signal status |
| EP-INT-008 | GET | `/v1/intelligence/analytics` | Admin | Get platform analytics |
| EP-INT-009 | GET | `/v1/intelligence/accounts/{id}/risk-profile` | Admin/Compliance | Get account risk profile |

### 11.7 Governing Requirement Traceability

SRS-INT-001 (behavioral signal collection), SRS-INT-002 (recommendations), SRS-INT-003 (fraud detection), SRS-INT-004 (analytics); SDD-1 Ch.14; SAD-1 Ch.15; DDD-1 Ch.13; KR-1 Ch.56 (fraud correction).

---

# Part V — Administration, Integration, and Learning APIs

## Chapter 12 — Administration Engine APIs

### 12.1 Overview

The Administration Engine APIs provide governance review management, policy enforcement, content moderation, dispute resolution, sanctions, appeals, and compliance flags. The Administration Engine is the platform's governance and enforcement authority — it acts on signals from the Intelligence Engine, resolves disputes escalated from Commerce and Services, and enforces platform policies. Most Administration Engine endpoints are admin-only or compliance-officer-only (SRS-ADM-001–008; SDD-1 Ch.15; SAD-1 Ch.16; DDD-1 Ch.14; PLC-1 Ch.20, Ch.58; KR-1 Ch.56–58).

**Base path:** `/v1/administration`

**Authentication:** Bearer token required for all endpoints.

**Authorization:** `admin` role for most endpoints. `compliance` role for compliance-flag endpoints. Participants can access their own sanction/appeal records.

### 12.2 Governance Reviews

#### EP-ADM-001 — List Governance Reviews

| Field | Value |
|---|---|
| **ID** | EP-ADM-001 |
| **Method** | GET |
| **Path** | `/v1/administration/governance-reviews` |
| **Purpose** | List governance reviews |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-001; SDD-1 Ch.15; DDD-1 Ch.14; KR-1 Ch.58 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `status` | string | — | Filter by status: `PENDING`, `UNDER_REVIEW`, `APPROVED`, `REJECTED`, `WITHDRAWN` |
| `type` | string | — | Filter by type: `PARAMETER_CHANGE`, `POLICY_UPDATE`, `SANCTION_APPEAL`, `RESERVE_RELEASE`, `ENGINE_EXTENSION` |
| `requester_id` | string | — | Filter by requester |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "review_id": "gr-001e8400-e29b-41d4-a716-446655440000",
      "type": "PARAMETER_CHANGE",
      "title": "Increase Ring 1 density gate from 3 to 5",
      "status": "PENDING",
      "requester_id": "admin-account-id",
      "description": "Proposal to increase Ring 1 density gate to reduce artificial ring inflation.",
      "proposed_changes": {
        "parameter_id": "RING_DENSITY_GATE_1",
        "current_value": "3",
        "proposed_value": "5"
      },
      "created_at": "2026-08-26T14:30:00Z",
      "deadline": "2026-09-05T00:00:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-ADM-002 — Create Governance Review

| Field | Value |
|---|---|
| **ID** | EP-ADM-002 |
| **Method** | POST |
| **Path** | `/v1/administration/governance-reviews` |
| **Purpose** | Create a governance review request |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-001; SDD-1 Ch.15; KR-1 Ch.58 |

**Request:**

```json
{
  "type": "PARAMETER_CHANGE",
  "title": "Increase Ring 1 density gate from 3 to 5",
  "description": "Proposal to increase Ring 1 density gate to reduce artificial ring inflation.",
  "proposed_changes": {
    "parameter_id": "RING_DENSITY_GATE_1",
    "current_value": "3",
    "proposed_value": "5",
    "kr_rule_id": "KR-RNG-009"
  },
  "deadline": "2026-09-05T00:00:00Z"
}
```

**Response (201 Created):**

```json
{
  "review_id": "gr-001e8400-e29b-41d4-a716-446655440000",
  "type": "PARAMETER_CHANGE",
  "status": "PENDING",
  "created_at": "2026-08-26T14:30:00Z",
  "requester_id": "admin-account-id"
}
```

---

#### EP-ADM-003 — Resolve Governance Review

| Field | Value |
|---|---|
| **ID** | EP-ADM-003 |
| **Method** | POST |
| **Path** | `/v1/administration/governance-reviews/{review_id}/resolve` |
| **Purpose** | Approve or reject a governance review |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-001; SDD-1 Ch.15; KR-1 Ch.58 |

**Request:**

```json
{
  "decision": "APPROVED",
  "notes": "Approved by governance committee. Effective from next cycle.",
  "effective_date": "2026-09-01T00:00:00Z"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `decision` | string | Yes | One of: `APPROVED`, `REJECTED`, `WITHDRAWN` |
| `notes` | string | Yes | Min 10, max 2000 chars |
| `effective_date` | string | No | ISO 8601; when approved change takes effect |

**Response (200 OK):**

```json
{
  "review_id": "gr-001e8400-e29b-41d4-a716-446655440000",
  "status": "APPROVED",
  "resolved_by": "admin-account-id",
  "resolved_at": "2026-08-26T18:00:00Z",
  "effective_date": "2026-09-01T00:00:00Z"
}
```

> **Note:** When a parameter-change governance review is approved, the Administration Engine publishes an event that the K-Rewards Engine consumes to update the active governance parameter value. Changes apply prospectively only (KR-FND principle #5).

---

### 12.3 Policy Enforcement

#### EP-ADM-004 — List Policy Violations

| Field | Value |
|---|---|
| **ID** | EP-ADM-004 |
| **Method** | GET |
| **Path** | `/v1/administration/policy-violations` |
| **Purpose** | List policy violations |
| **Authentication** | Bearer token |
| **Authorization** | `admin` or `compliance` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-002; SDD-1 Ch.15; DDD-1 Ch.14 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `account_id` | string | — | Filter by account |
| `policy_code` | string | — | Filter by policy code |
| `status` | string | — | Filter by status: `DETECTED`, `ENFORCED`, `APPEALED`, `RESOLVED` |
| `severity` | string | — | Filter by severity: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "violation_id": "pv-001e8400-e29b-41d4-a716-446655440000",
      "account_id": "550e8400-e29b-41d4-a716-446655440000",
      "policy_code": "ANTI_FRAUD_RING_INFLATION",
      "severity": "HIGH",
      "status": "ENFORCED",
      "description": "Artificial ring inflation detected — 8 fake accounts in Ring 1",
      "enforcement_action": "RING_INVALIDATION",
      "detected_at": "2026-08-26T14:30:00Z",
      "enforced_at": "2026-08-26T16:00:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

### 12.4 Content Moderation

#### EP-ADM-005 — List Moderation Queue

| Field | Value |
|---|---|
| **ID** | EP-ADM-005 |
| **Method** | GET |
| **Path** | `/v1/administration/moderation` |
| **Purpose** | List items in the moderation queue |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-003; SDD-1 Ch.15 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `content_type` | string | — | Filter by type: `PRODUCT`, `REVIEW`, `LISTING`, `MESSAGE`, `ANNOUNCEMENT` |
| `status` | string | `PENDING` | Filter by status: `PENDING`, `APPROVED`, `REJECTED`, `ESCALATED` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "moderation_id": "md-001e8400-e29b-41d4-a716-446655440000",
      "content_type": "REVIEW",
      "content_id": "eef1e8400-e29b-41d4-a716-446655440000",
      "account_id": "550e8400-e29b-41d4-a716-446655440000",
      "reason": "REPORTED_BY_USER",
      "reason_details": "Review contains inappropriate language",
      "status": "PENDING",
      "content_preview": "This product is [EXPLETIVE] terrible...",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-ADM-006 — Resolve Moderation Item

| Field | Value |
|---|---|
| **ID** | EP-ADM-006 |
| **Method** | POST |
| **Path** | `/v1/administration/moderation/{moderation_id}/resolve` |
| **Purpose** | Approve, reject, or escalate a moderation item |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-003; SDD-1 Ch.15 |

**Request:**

```json
{
  "decision": "REJECTED",
  "notes": "Review removed for inappropriate language. Account warned."
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `decision` | string | Yes | One of: `APPROVED`, `REJECTED`, `ESCALATED` |
| `notes` | string | Yes | Min 10, max 2000 chars |

**Response (200 OK):**

```json
{
  "moderation_id": "md-001e8400-e29b-41d4-a716-446655440000",
  "status": "REJECTED",
  "resolved_by": "admin-account-id",
  "resolved_at": "2026-08-26T16:00:00Z"
}
```

> **Note:** When a moderation item is rejected, the Administration Engine publishes an event to remove the content from the relevant engine (Commerce reviews, Services reviews, Communication messages). The engine that owns the content performs the actual removal.

---

### 12.5 Sanctions

#### EP-ADM-007 — List Sanctions

| Field | Value |
|---|---|
| **ID** | EP-ADM-007 |
| **Method** | GET |
| **Path** | `/v1/administration/sanctions` |
| **Purpose** | List sanctions (admin view of all sanctions, or participant view of own sanctions) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role for all; Owner for own sanctions |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier (admin) / Standard tier (participant) |
| **Implements** | SRS-ADM-004; SDD-1 Ch.15; KR-1 Ch.57 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `account_id` | string | — | Filter by account (admin only) |
| `sanction_type` | string | — | Filter by type: `WARNING`, `SUSPENSION`, `K_POINTS_REVERSAL`, `RING_INVALIDATION`, `K_LEVEL_DEMOTION`, `ACCOUNT_BAN` |
| `status` | string | — | Filter by status: `ACTIVE`, `LIFTED`, `EXPIRED` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "sanction_id": "sc-001e8400-e29b-41d4-a716-446655440000",
      "account_id": "550e8400-e29b-41d4-a716-446655440000",
      "sanction_type": "RING_INVALIDATION",
      "status": "ACTIVE",
      "reason": "Artificial ring inflation — 8 fake Ring 1 accounts invalidated",
      "severity": "HIGH",
      "evidence_fraud_signal_id": "fs-001e8400-e29b-41d4-a716-446655440000",
      "impact": {
        "rings_invalidated": [1],
        "k_points_reversed": "150.00",
        "k_level_demoted": false
      },
      "is_appealable": true,
      "appeal_deadline": "2026-09-05T00:00:00Z",
      "created_at": "2026-08-26T16:00:00Z",
      "expires_at": null
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-ADM-008 — Create Sanction

| Field | Value |
|---|---|
| **ID** | EP-ADM-008 |
| **Method** | POST |
| **Path** | `/v1/administration/sanctions` |
| **Purpose** | Create a sanction against an account (admin only) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` or `compliance` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-004; SDD-1 Ch.15; KR-1 Ch.57 |

**Request:**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "sanction_type": "RING_INVALIDATION",
  "reason": "Artificial ring inflation — 8 fake Ring 1 accounts invalidated",
  "severity": "HIGH",
  "fraud_signal_id": "fs-001e8400-e29b-41d4-a716-446655440000",
  "impact": {
    "rings_to_invalidate": [1],
    "k_points_to_reverse": "150.00"
  },
  "duration_hours": null,
  "is_appealable": true
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `account_id` | string (UUID) | Yes | Must be an active account |
| `sanction_type` | string | Yes | One of: `WARNING`, `SUSPENSION`, `K_POINTS_REVERSAL`, `RING_INVALIDATION`, `K_LEVEL_DEMOTION`, `ACCOUNT_BAN` |
| `reason` | string | Yes | Min 10, max 2000 chars |
| `severity` | string | Yes | One of: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL` |
| `fraud_signal_id` | string (UUID) | No | Reference to confirmed fraud signal |
| `impact` | object | No | Sanction-specific impact details |
| `duration_hours` | integer | No | Duration for temporary sanctions (null = permanent) |
| `is_appealable` | boolean | No | Default: `true` |

**Response (201 Created):**

```json
{
  "sanction_id": "sc-001e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "sanction_type": "RING_INVALIDATION",
  "status": "ACTIVE",
  "created_at": "2026-08-26T16:00:00Z",
  "is_appealable": true,
  "appeal_deadline": "2026-09-05T00:00:00Z"
}
```

> **Note:** When a sanction is created, the Administration Engine publishes events to the affected engines: K-Rewards Engine (for ring invalidation, K-Points reversal, K-Level demotion), Identity Engine (for account suspension/ban), and Trust Engine (for trust score freeze). Each engine enforces its own aspect of the sanction.

---

#### EP-ADM-009 — Lift Sanction

| Field | Value |
|---|---|
| **ID** | EP-ADM-009 |
| **Method** | POST |
| **Path** | `/v1/administration/sanctions/{sanction_id}/lift` |
| **Purpose** | Lift a sanction (admin only, typically after a successful appeal) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-004; SDD-1 Ch.15; KR-1 Ch.57 |

**Request:**

```json
{
  "reason": "Appeal approved — evidence of genuine activity provided.",
  "appeal_id": "ap-001e8400-e29b-41d4-a716-446655440000"
}
```

**Response (200 OK):**

```json
{
  "sanction_id": "sc-001e8400-e29b-41d4-a716-446655440000",
  "status": "LIFTED",
  "lifted_by": "admin-account-id",
  "lifted_at": "2026-08-28T10:00:00Z",
  "reason": "Appeal approved — evidence of genuine activity provided."
}
```

---

### 12.6 Appeals

#### EP-ADM-010 — List Appeals

| Field | Value |
|---|---|
| **ID** | EP-ADM-010 |
| **Method** | GET |
| **Path** | `/v1/administration/appeals` |
| **Purpose** | List appeals (admin view of all appeals, or participant view of own appeals) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role for all; Owner for own appeals |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier (admin) / Standard tier (participant) |
| **Implements** | SRS-ADM-005; SDD-1 Ch.15; KR-1 Ch.57 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `account_id` | string | — | Filter by account (admin only) |
| `sanction_id` | string | — | Filter by sanction |
| `status` | string | — | Filter by status: `PENDING`, `UNDER_REVIEW`, `APPROVED`, `REJECTED` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "appeal_id": "ap-001e8400-e29b-41d4-a716-446655440000",
      "sanction_id": "sc-001e8400-e29b-41d4-a716-446655440000",
      "account_id": "550e8400-e29b-41d4-a716-446655440000",
      "status": "PENDING",
      "reason": "My Ring 1 members are genuine. I have evidence of their activity including transaction records and communication logs.",
      "evidence_urls": [
        "https://cdn.k-network.com/appeals/evidence1.pdf",
        "https://cdn.k-network.com/appeals/evidence2.pdf"
      ],
      "created_at": "2026-08-27T10:00:00Z",
      "deadline": "2026-09-05T00:00:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-ADM-011 — Create Appeal

| Field | Value |
|---|---|
| **ID** | EP-ADM-011 |
| **Method** | POST |
| **Path** | `/v1/administration/appeals` |
| **Purpose** | Create an appeal for a sanction (participant) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-ADM-005; SDD-1 Ch.15; KR-1 Ch.57 |

**Request:**

```json
{
  "sanction_id": "sc-001e8400-e29b-41d4-a716-446655440000",
  "reason": "My Ring 1 members are genuine. I have evidence of their activity including transaction records and communication logs.",
  "evidence_urls": [
    "https://cdn.k-network.com/appeals/evidence1.pdf"
  ]
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `sanction_id` | string (UUID) | Yes | Must be an active sanction on the caller's account |
| `reason` | string | Yes | Min 50, max 5000 chars |
| `evidence_urls` | array[string] | No | URLs to evidence (max 10) |

**Response (201 Created):**

```json
{
  "appeal_id": "ap-001e8400-e29b-41d4-a716-446655440000",
  "sanction_id": "sc-001e8400-e29b-41d4-a716-446655440000",
  "status": "PENDING",
  "created_at": "2026-08-27T10:00:00Z",
  "deadline": "2026-09-05T00:00:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 409 | `SANCTION_NOT_APPEALABLE` | Sanction is not appealable |
| 409 | `APPEAL_ALREADY_EXISTS` | An appeal already exists for this sanction |
| 422 | `APPEAL_DEADLINE_PASSED` | The appeal deadline has passed |

---

#### EP-ADM-012 — Resolve Appeal

| Field | Value |
|---|---|
| **ID** | EP-ADM-012 |
| **Method** | POST |
| **Path** | `/v1/administration/appeals/{appeal_id}/resolve` |
| **Purpose** | Approve or reject an appeal (admin only) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-005; SDD-1 Ch.15; KR-1 Ch.57 |

**Request:**

```json
{
  "decision": "APPROVED",
  "notes": "Evidence supports genuine activity. Ring invalidation reversed."
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `decision` | string | Yes | One of: `APPROVED`, `REJECTED` |
| `notes` | string | Yes | Min 10, max 2000 chars |

**Response (200 OK):**

```json
{
  "appeal_id": "ap-001e8400-e29b-41d4-a716-446655440000",
  "status": "APPROVED",
  "resolved_by": "admin-account-id",
  "resolved_at": "2026-08-28T10:00:00Z",
  "sanction_status": "LIFTED",
  "notes": "Evidence supports genuine activity. Ring invalidation reversed."
}
```

> **Note:** When an appeal is approved, the Administration Engine automatically lifts the associated sanction (EP-ADM-009) and publishes reversal events to the affected engines (K-Rewards restores ring contribution, Trust unfreezes score, etc.).

---

### 12.7 Compliance Flags

#### EP-ADM-013 — List Compliance Flags

| Field | Value |
|---|---|
| **ID** | EP-ADM-013 |
| **Method** | GET |
| **Path** | `/v1/administration/compliance-flags` |
| **Purpose** | List compliance flags (AML, KYC issues, regulatory flags) |
| **Authentication** | Bearer token |
| **Authorization** | `compliance` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-006; SDD-1 Ch.15; DDD-1 Ch.14 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `account_id` | string | — | Filter by account |
| `flag_type` | string | — | Filter by type: `AML_ALERT`, `KYC_DISCREPANCY`, `REGULATORY_HOLD`, `SANCTIONED_ENTITY`, `HIGH_RISK_TRANSACTION` |
| `status` | string | — | Filter by status: `OPEN`, `UNDER_REVIEW`, `RESOLVED`, `ESCALATED` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "flag_id": "cf-001e8400-e29b-41d4-a716-446655440000",
      "account_id": "550e8400-e29b-41d4-a716-446655440000",
      "flag_type": "AML_ALERT",
      "status": "OPEN",
      "description": "Transaction pattern matches known money laundering indicators",
      "severity": "HIGH",
      "triggered_by": "TRANSACTION_MONITORING",
      "triggered_at": "2026-08-26T14:30:00Z",
      "metadata": {
        "transaction_count": 5,
        "total_amount": "10000.00",
        "pattern_type": "STRUCTURING"
      }
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-ADM-014 — Resolve Compliance Flag

| Field | Value |
|---|---|
| **ID** | EP-ADM-014 |
| **Method** | POST |
| **Path** | `/v1/administration/compliance-flags/{flag_id}/resolve` |
| **Purpose** | Resolve a compliance flag (compliance officer only) |
| **Authentication** | Bearer token |
| **Authorization** | `compliance` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-ADM-006; SDD-1 Ch.15 |

**Request:**

```json
{
  "resolution": "RESOLVED",
  "notes": "Investigated and cleared. Transactions are legitimate business payments.",
  "action_taken": "NONE"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `resolution` | string | Yes | One of: `RESOLVED`, `ESCALATED` |
| `notes` | string | Yes | Min 10, max 2000 chars |
| `action_taken` | string | Yes | One of: `NONE`, `ACCOUNT_HOLD`, `TRANSACTION_REVERSAL`, `REPORT_TO_AUTHORITY`, `SANCTION` |

**Response (200 OK):**

```json
{
  "flag_id": "cf-001e8400-e29b-41d4-a716-446655440000",
  "status": "RESOLVED",
  "resolved_by": "compliance-account-id",
  "resolved_at": "2026-08-26T18:00:00Z",
  "action_taken": "NONE"
}
```

---

### 12.8 Administration Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-ADM-001 | GET | `/v1/administration/governance-reviews` | Admin | List governance reviews |
| EP-ADM-002 | POST | `/v1/administration/governance-reviews` | Admin | Create governance review |
| EP-ADM-003 | POST | `/v1/administration/governance-reviews/{id}/resolve` | Admin | Resolve governance review |
| EP-ADM-004 | GET | `/v1/administration/policy-violations` | Admin/Compliance | List policy violations |
| EP-ADM-005 | GET | `/v1/administration/moderation` | Admin | List moderation queue |
| EP-ADM-006 | POST | `/v1/administration/moderation/{id}/resolve` | Admin | Resolve moderation item |
| EP-ADM-007 | GET | `/v1/administration/sanctions` | Admin/Owner | List sanctions |
| EP-ADM-008 | POST | `/v1/administration/sanctions` | Admin/Compliance | Create sanction |
| EP-ADM-009 | POST | `/v1/administration/sanctions/{id}/lift` | Admin | Lift sanction |
| EP-ADM-010 | GET | `/v1/administration/appeals` | Admin/Owner | List appeals |
| EP-ADM-011 | POST | `/v1/administration/appeals` | Owner | Create appeal |
| EP-ADM-012 | POST | `/v1/administration/appeals/{id}/resolve` | Admin | Resolve appeal |
| EP-ADM-013 | GET | `/v1/administration/compliance-flags` | Compliance | List compliance flags |
| EP-ADM-014 | POST | `/v1/administration/compliance-flags/{id}/resolve` | Compliance | Resolve compliance flag |

### 12.9 Governing Requirement Traceability

SRS-ADM-001 (governance reviews), SRS-ADM-002 (policy enforcement), SRS-ADM-003 (content moderation), SRS-ADM-004 (sanctions), SRS-ADM-005 (appeals), SRS-ADM-006 (compliance flags), SRS-ADM-007 (audit trail), SRS-ADM-008 (admin dashboard); SDD-1 Ch.15; SAD-1 Ch.16; DDD-1 Ch.14; PLC-1 Ch.20, Ch.58; KR-1 Ch.56–58.

---

## Chapter 13 — Integration Engine and Partner APIs

### 13.1 Overview

The Integration Engine is the **sole gateway** for all external API access (PLC-1 Ch.31.2). No other engine exposes APIs directly to external systems. The Integration Engine provides OAuth 2.0/OIDC authentication for partner applications, API key management, scope-based authorization, rate limiting, webhook subscriptions, event delivery, API versioning, tenant isolation, and audit logging. Partner applications — external websites, companies, mobile apps, and future SDKs — interact with K-NETWORK exclusively through the Integration Engine's API gateway (SRS-IGR-001–010; SDD-1 Ch.16; SAD-1 Ch.17; DDD-1 Ch.15; PLC-1 Ch.31).

**Base path:** `/v1/integration`

**Authentication:** Partner OAuth 2.0 access tokens or API keys for partner endpoints. Admin role for partner management endpoints.

### 13.2 OAuth 2.0 / OIDC

#### EP-IGR-001 — Register Partner Application

| Field | Value |
|---|---|
| **ID** | EP-IGR-001 |
| **Method** | POST |
| **Path** | `/v1/integration/partners` |
| **Purpose** | Register a new partner application |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-IGR-001; SDD-1 Ch.16; DDD-1 Ch.15 |

**Request:**

```json
{
  "partner_name": "Acme Integration Inc",
  "partner_type": "EXTERNAL_COMPANY",
  "description": "E-commerce integration partner for order synchronization",
  "contact_email": "api@acme-integration.com",
  "contact_phone": "+254712345678",
  "website_url": "https://acme-integration.com",
  "redirect_uris": [
    "https://acme-integration.com/oauth/callback"
  ],
  "requested_scopes": [
    "commerce:read",
    "commerce:write",
    "services:read"
  ],
  "webhook_url": "https://acme-integration.com/webhooks/k-network"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `partner_name` | string | Yes | Min 2, max 200 chars |
| `partner_type` | string | Yes | One of: `EXTERNAL_WEBSITE`, `EXTERNAL_COMPANY`, `MOBILE_APP`, `SDK` |
| `description` | string | No | Max 2000 chars |
| `contact_email` | string | Yes | Valid email |
| `contact_phone` | string | Yes | E.164 format |
| `website_url` | string | Yes | Valid URL |
| `redirect_uris` | array[string] | Yes | Valid URLs (for authorization code flow) |
| `requested_scopes` | array[string] | Yes | Valid scope strings (see Appendix B) |
| `webhook_url` | string | No | HTTPS URL for webhook delivery |

**Response (201 Created):**

```json
{
  "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
  "partner_name": "Acme Integration Inc",
  "partner_type": "EXTERNAL_COMPANY",
  "status": "PENDING",
  "client_id": "ci-550e8400-e29b-41d4-a716-446655440000",
  "client_secret": "cs-only-shown-once-encrypted-after",
  "approved_scopes": [],
  "requested_scopes": ["commerce:read", "commerce:write", "services:read"],
  "created_at": "2026-08-26T14:30:00Z"
}
```

> **Note:** The `client_secret` is returned only once during registration. It is stored encrypted and never returned again. The partner must store it securely. If lost, it must be rotated via EP-IGR-003.

---

#### EP-IGR-002 — Get Partner Application

| Field | Value |
|---|---|
| **ID** | EP-IGR-002 |
| **Method** | GET |
| **Path** | `/v1/integration/partners/{partner_id}` |
| **Purpose** | Get partner application details |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self (with partner OAuth token) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-001; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
  "partner_name": "Acme Integration Inc",
  "partner_type": "EXTERNAL_COMPANY",
  "status": "ACTIVE",
  "client_id": "ci-550e8400-e29b-41d4-a716-446655440000",
  "approved_scopes": ["commerce:read", "commerce:write", "services:read"],
  "redirect_uris": ["https://acme-integration.com/oauth/callback"],
  "webhook_url": "https://acme-integration.com/webhooks/k-network",
  "rate_limit_tier": "PARTNER",
  "created_at": "2026-08-26T14:30:00Z",
  "last_active_at": "2026-08-26T15:00:00Z"
}
```

---

#### EP-IGR-003 — Rotate Client Secret

| Field | Value |
|---|---|
| **ID** | EP-IGR-003 |
| **Method** | POST |
| **Path** | `/v1/integration/partners/{partner_id}/rotate-secret` |
| **Purpose** | Rotate the partner's client secret |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | No |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-001; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
  "client_id": "ci-550e8400-e29b-41d4-a716-446655440000",
  "client_secret": "cs-new-secret-only-shown-once",
  "rotated_at": "2026-08-26T16:00:00Z"
}
```

> **Note:** The old client secret is immediately invalidated. All active OAuth tokens issued with the old secret are revoked.

---

### 13.3 OAuth 2.0 Token Endpoints

#### EP-IGR-004 — OAuth Token (Client Credentials)

| Field | Value |
|---|---|
| **ID** | EP-IGR-004 |
| **Method** | POST |
| **Path** | `/v1/integration/oauth/token` |
| **Purpose** | Obtain an access token using the client credentials grant flow (server-to-server) |
| **Authentication** | Client credentials (client_id + client_secret) |
| **Authorization** | Partner application |
| **Idempotency** | No |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-002; SDD-1 Ch.16; RFC 6749 §4.4 |

**Request (application/x-www-form-urlencoded):**

```
grant_type=client_credentials
client_id=ci-550e8400-e29b-41d4-a716-446655440000
client_secret=cs-secret-value
scope=commerce:read commerce:write
```

**Response (200 OK):**

```json
{
  "access_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "commerce:read commerce:write"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 401 | `INVALID_CLIENT` | Client ID or secret is invalid |
| 401 | `CLIENT_NOT_ACTIVE` | Partner application is not active |
| 400 | `INVALID_GRANT_TYPE` | Grant type is not supported |
| 400 | `INVALID_SCOPE` | Requested scope is not approved for this partner |

---

#### EP-IGR-005 — OAuth Token (Authorization Code)

| Field | Value |
|---|---|
| **ID** | EP-IGR-005 |
| **Method** | POST |
| **Path** | `/v1/integration/oauth/token` |
| **Purpose** | Exchange an authorization code for an access token (authorization code flow) |
| **Authentication** | Client credentials |
| **Authorization** | Partner application |
| **Idempotency** | No |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-002; SDD-1 Ch.16; RFC 6749 §4.1 |

**Request (application/x-www-form-urlencoded):**

```
grant_type=authorization_code
client_id=ci-550e8400-e29b-41d4-a716-446655440000
client_secret=cs-secret-value
code=authorization_code_from_redirect
redirect_uri=https://acme-integration.com/oauth/callback
```

**Response (200 OK):**

```json
{
  "access_token": "eyJhbGciOi...",
  "refresh_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "commerce:read commerce:write"
}
```

---

#### EP-IGR-006 — OAuth Authorize

| Field | Value |
|---|---|
| **ID** | EP-IGR-006 |
| **Method** | GET |
| **Path** | `/v1/integration/oauth/authorize` |
| **Purpose** | Authorization endpoint for the authorization code flow (user consent page) |
| **Authentication** | Bearer token (participant) |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IGR-002; SDD-1 Ch.16; RFC 6749 §4.1 |

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `response_type` | string | Yes | Must be `code` |
| `client_id` | string | Yes | Partner client ID |
| `redirect_uri` | string | Yes | Must match a registered redirect URI |
| `scope` | string | Yes | Space-separated requested scopes |
| `state` | string | Yes | CSRF protection state value |

**Response (302 Redirect):**

```
HTTP/1.1 302 Found
Location: https://acme-integration.com/oauth/callback?code=auth-code-value&state=state-value
```

> **Note:** This endpoint displays a consent page to the participant. After the participant grants consent, the browser is redirected to the partner's redirect URI with the authorization code. The partner then exchanges the code for an access token via EP-IGR-005.

---

### 13.4 API Keys

#### EP-IGR-007 — Create API Key

| Field | Value |
|---|---|
| **ID** | EP-IGR-007 |
| **Method** | POST |
| **Path** | `/v1/integration/api-keys` |
| **Purpose** | Create an API key for simple integrations (alternative to OAuth) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-003; SDD-1 Ch.16 |

**Request:**

```json
{
  "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
  "name": "Production API Key",
  "scopes": ["commerce:read", "services:read"],
  "expires_at": "2027-08-26T00:00:00Z"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `partner_id` | string (UUID) | Yes | Must be an active partner |
| `name` | string | Yes | Min 2, max 100 chars |
| `scopes` | array[string] | Yes | Subset of partner's approved scopes |
| `expires_at` | string | No | ISO 8601; max 1 year from creation |

**Response (201 Created):**

```json
{
  "api_key_id": "ak-001e8400-e29b-41d4-a716-446655440000",
  "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
  "name": "Production API Key",
  "api_key": "knt_live_550e8400e29b41d4a716446655440000",
  "scopes": ["commerce:read", "services:read"],
  "status": "ACTIVE",
  "expires_at": "2027-08-26T00:00:00Z",
  "created_at": "2026-08-26T14:30:00Z"
}
```

> **Note:** The `api_key` value is returned only once during creation. It is stored as an irreversible hash and never returned again. If lost, a new key must be created.

---

#### EP-IGR-008 — List API Keys

| Field | Value |
|---|---|
| **ID** | EP-IGR-008 |
| **Method** | GET |
| **Path** | `/v1/integration/api-keys` |
| **Purpose** | List API keys for a partner |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-003; SDD-1 Ch.16 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `partner_id` | string | — | Filter by partner |
| `status` | string | — | Filter by status: `ACTIVE`, `REVOKED`, `EXPIRED` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |

**Response (200 OK):**

```json
{
  "data": [
    {
      "api_key_id": "ak-001e8400-e29b-41d4-a716-446655440000",
      "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
      "name": "Production API Key",
      "scopes": ["commerce:read", "services:read"],
      "status": "ACTIVE",
      "expires_at": "2027-08-26T00:00:00Z",
      "created_at": "2026-08-26T14:30:00Z",
      "last_used_at": "2026-08-26T15:00:00Z"
    }
  ],
  "pagination": { ... }
}
```

> **Note:** API key values are never returned in list responses. Only metadata is shown.

---

#### EP-IGR-009 — Revoke API Key

| Field | Value |
|---|---|
| **ID** | EP-IGR-009 |
| **Method** | DELETE |
| **Path** | `/v1/integration/api-keys/{api_key_id}` |
| **Purpose** | Revoke an API key |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | N/A (DELETE) |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-003 |

**Response (204 No Content)**

---

### 13.5 Webhooks

#### EP-IGR-010 — List Webhook Subscriptions

| Field | Value |
|---|---|
| **ID** | EP-IGR-010 |
| **Method** | GET |
| **Path** | `/v1/integration/webhooks` |
| **Purpose** | List webhook subscriptions for a partner |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-004; SDD-1 Ch.16; DDD-1 Ch.15 |

**Response (200 OK):**

```json
{
  "data": [
    {
      "webhook_id": "wh-001e8400-e29b-41d4-a716-446655440000",
      "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
      "url": "https://acme-integration.com/webhooks/k-network",
      "events": ["order.created", "order.shipped", "order.delivered"],
      "status": "ACTIVE",
      "secret": null,
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

> **Note:** The webhook signing secret is never returned in list responses. It is shown only once during creation.

---

#### EP-IGR-011 — Create Webhook Subscription

| Field | Value |
|---|---|
| **ID** | EP-IGR-011 |
| **Method** | POST |
| **Path** | `/v1/integration/webhooks` |
| **Purpose** | Create a webhook subscription |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-004; SDD-1 Ch.16; DDD-1 Ch.15 |

**Request:**

```json
{
  "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
  "url": "https://acme-integration.com/webhooks/k-network",
  "events": [
    "order.created",
    "order.shipped",
    "order.delivered",
    "order.cancelled",
    "order.refunded"
  ],
  "active": true
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `partner_id` | string (UUID) | Yes | Must be an active partner |
| `url` | string | Yes | HTTPS URL |
| `events` | array[string] | Yes | Event types from the event catalog (Appendix D) |
| `active` | boolean | No | Default: `true` |

**Response (201 Created):**

```json
{
  "webhook_id": "wh-001e8400-e29b-41d4-a716-446655440000",
  "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
  "url": "https://acme-integration.com/webhooks/k-network",
  "events": ["order.created", "order.shipped", "order.delivered", "order.cancelled", "order.refunded"],
  "status": "ACTIVE",
  "secret": "whsec_signing_secret_shown_once",
  "created_at": "2026-08-26T14:30:00Z"
}
```

> **Note:** The webhook `secret` is used to sign webhook deliveries (HMAC-SHA256). It is returned only once during creation. The partner must verify the `X-K-Network-Signature` header on every webhook delivery using this secret.

---

#### EP-IGR-012 — Update Webhook Subscription

| Field | Value |
|---|---|
| **ID** | EP-IGR-012 |
| **Method** | PATCH |
| **Path** | `/v1/integration/webhooks/{webhook_id}` |
| **Purpose** | Update a webhook subscription (change URL, events, or status) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | No |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-004; SDD-1 Ch.16 |

**Request:**

```json
{
  "url": "https://acme-integration.com/webhooks/k-network-v2",
  "events": ["order.created", "order.shipped"],
  "active": true
}
```

**Response (200 OK):** Returns the updated webhook subscription (same format as EP-IGR-010, without secret).

---

#### EP-IGR-013 — Delete Webhook Subscription

| Field | Value |
|---|---|
| **ID** | EP-IGR-013 |
| **Method** | DELETE |
| **Path** | `/v1/integration/webhooks/{webhook_id}` |
| **Purpose** | Delete a webhook subscription |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | N/A (DELETE) |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-004 |

**Response (204 No Content)**

---

### 13.6 Webhook Delivery and Event Catalog

#### EP-IGR-014 — List Webhook Deliveries

| Field | Value |
|---|---|
| **ID** | EP-IGR-014 |
| **Method** | GET |
| **Path** | `/v1/integration/webhooks/{webhook_id}/deliveries` |
| **Purpose** | List webhook delivery attempts |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-005; SDD-1 Ch.16; DDD-1 Ch.15 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `status` | string | — | Filter by status: `PENDING`, `DELIVERED`, `FAILED`, `RETRYING` |
| `event_type` | string | — | Filter by event type |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "delivery_id": "dl-001e8400-e29b-41d4-a716-446655440000",
      "webhook_id": "wh-001e8400-e29b-41d4-a716-446655440000",
      "event_type": "order.shipped",
      "event_id": "ev-001e8400-e29b-41d4-a716-446655440000",
      "status": "DELIVERED",
      "attempt_count": 1,
      "response_status": 200,
      "response_time_ms": 145,
      "delivered_at": "2026-08-26T14:30:05Z",
      "created_at": "2026-08-26T14:30:00Z"
    },
    {
      "delivery_id": "dl-002e8400-e29b-41d4-a716-446655440000",
      "webhook_id": "wh-001e8400-e29b-41d4-a716-446655440000",
      "event_type": "order.created",
      "event_id": "ev-002e8400-e29b-41d4-a716-446655440000",
      "status": "FAILED",
      "attempt_count": 3,
      "last_error": "Connection timeout",
      "next_retry_at": "2026-08-26T14:45:00Z",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### EP-IGR-015 — Replay Webhook Delivery

| Field | Value |
|---|---|
| **ID** | EP-IGR-015 |
| **Method** | POST |
| **Path** | `/v1/integration/webhooks/{webhook_id}/deliveries/{delivery_id}/replay` |
| **Purpose** | Replay a failed or past webhook delivery |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-005; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "delivery_id": "dl-003e8400-e29b-41d4-a716-446655440000",
  "original_delivery_id": "dl-002e8400-e29b-41d4-a716-446655440000",
  "status": "PENDING",
  "created_at": "2026-08-26T16:00:00Z"
}
```

> **Note:** Webhook delivery uses exponential backoff retry: 1m, 5m, 30m, 2h, 12h (5 attempts max). After 5 failed attempts, the delivery is marked `FAILED` and must be manually replayed.

---

### 13.7 API Versioning

#### EP-IGR-016 — Get API Version Status

| Field | Value |
|---|---|
| **ID** | EP-IGR-016 |
| **Method** | GET |
| **Path** | `/v1/integration/api-versions` |
| **Purpose** | Get API version status (current, deprecated, sunset information) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant or partner |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-IGR-006; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "versions": [
    {
      "version": "v1",
      "status": "ACTIVE",
      "released_at": "2026-08-01T00:00:00Z",
      "deprecation_date": null,
      "sunset_date": null,
      "is_current": true
    }
  ],
  "current_version": "v1",
  "minimum_supported_version": "v1"
}
```

> **Note:** API versions are supported for a minimum of 12 months after deprecation. Deprecated versions return `Deprecation` and `Sunset` headers on every response. The `Link` header provides a migration guide URL.

---

### 13.8 Tenant Isolation and Audit

#### EP-IGR-017 — Get Partner Audit Log

| Field | Value |
|---|---|
| **ID** | EP-IGR-017 |
| **Method** | GET |
| **Path** | `/v1/integration/partners/{partner_id}/audit-log` |
| **Purpose** | Get the audit log for a partner's API activity |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Partner tier |
| **Implements** | SRS-IGR-007, SRS-IGR-008; SDD-1 Ch.16; DDD-1 Ch.15 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `event_type` | string | — | Filter by event type: `API_CALL`, `TOKEN_ISSUED`, `TOKEN_REVOKED`, `KEY_CREATED`, `KEY_REVOKED`, `WEBHOOK_CREATED`, `WEBHOOK_DELETED` |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "audit_id": "au-001e8400-e29b-41d4-a716-446655440000",
      "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
      "event_type": "API_CALL",
      "method": "GET",
      "path": "/v1/commerce/products",
      "response_status": 200,
      "ip_address": "192.168.1.100",
      "user_agent": "Acme-Integration/1.0",
      "request_id": "req-001e8400-e29b-41d4-a716-446655440000",
      "trace_id": "trace-001e8400-e29b-41d4-a716-446655440000",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

> **Note:** Partner audit logs are isolated by `partner_id`. A partner can only see their own audit logs. The Integration Engine enforces tenant isolation at the data level — partners never see another partner's data, API keys, webhooks, or audit logs.

---

#### EP-IGR-018 — Get Partner Rate Limit Status

| Field | Value |
|---|---|
| **ID** | EP-IGR-018 |
| **Method** | GET |
| **Path** | `/v1/integration/partners/{partner_id}/rate-limit` |
| **Purpose** | Get the partner's current rate limit status |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role or partner self |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | N/A |
| **Implements** | SRS-IGR-009; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
  "rate_limit_tier": "PARTNER",
  "limit": 500,
  "window_seconds": 60,
  "remaining": 450,
  "reset_at": "2026-08-26T14:31:00Z",
  "burst_limit": 50,
  "burst_window_seconds": 1,
  "burst_remaining": 45
}
```

---

### 13.9 Integration Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-IGR-001 | POST | `/v1/integration/partners` | Admin | Register partner application |
| EP-IGR-002 | GET | `/v1/integration/partners/{id}` | Admin/Partner | Get partner application |
| EP-IGR-003 | POST | `/v1/integration/partners/{id}/rotate-secret` | Admin/Partner | Rotate client secret |
| EP-IGR-004 | POST | `/v1/integration/oauth/token` | Client credentials | OAuth token (client credentials) |
| EP-IGR-005 | POST | `/v1/integration/oauth/token` | Client credentials | OAuth token (authorization code) |
| EP-IGR-006 | GET | `/v1/integration/oauth/authorize` | Bearer | OAuth authorize |
| EP-IGR-007 | POST | `/v1/integration/api-keys` | Admin/Partner | Create API key |
| EP-IGR-008 | GET | `/v1/integration/api-keys` | Admin/Partner | List API keys |
| EP-IGR-009 | DELETE | `/v1/integration/api-keys/{id}` | Admin/Partner | Revoke API key |
| EP-IGR-010 | GET | `/v1/integration/webhooks` | Admin/Partner | List webhooks |
| EP-IGR-011 | POST | `/v1/integration/webhooks` | Admin/Partner | Create webhook |
| EP-IGR-012 | PATCH | `/v1/integration/webhooks/{id}` | Admin/Partner | Update webhook |
| EP-IGR-013 | DELETE | `/v1/integration/webhooks/{id}` | Admin/Partner | Delete webhook |
| EP-IGR-014 | GET | `/v1/integration/webhooks/{id}/deliveries` | Admin/Partner | List webhook deliveries |
| EP-IGR-015 | POST | `/v1/integration/webhooks/{id}/deliveries/{id}/replay` | Admin/Partner | Replay webhook delivery |
| EP-IGR-016 | GET | `/v1/integration/api-versions` | Any | Get API version status |
| EP-IGR-017 | GET | `/v1/integration/partners/{id}/audit-log` | Admin/Partner | Get partner audit log |
| EP-IGR-018 | GET | `/v1/integration/partners/{id}/rate-limit` | Admin/Partner | Get rate limit status |

### 13.10 Governing Requirement Traceability

SRS-IGR-001 (partner registration), SRS-IGR-002 (OAuth/OIDC), SRS-IGR-003 (API keys), SRS-IGR-004 (webhook subscriptions), SRS-IGR-005 (event delivery), SRS-IGR-006 (API versioning), SRS-IGR-007 (tenant isolation), SRS-IGR-008 (audit logging), SRS-IGR-009 (rate limiting), SRS-IGR-010 (partner dashboard); SDD-1 Ch.16; SAD-1 Ch.17; DDD-1 Ch.15; PLC-1 Ch.31.

---

## Chapter 14 — Learning Engine APIs

### 14.1 Overview

The Learning Engine APIs provide instructor management, courses, programs, modules, lessons, enrollment, progress tracking, quizzes, assessments, assignments, completion, certificates, reviews, and learning analytics. Learning is Engine #11 — integrated into the single unified K-NETWORK API contract, not a separate specification. Learning K-Points are the eighth K-Points category and follow the same rules as all other categories (KR-FND-018; KR-PNT-004). The Learning Engine's revenue waterfall follows the Learning allocation rates from KR-1 KR-ECO-014 (20/55/8/5/2). External media hosting is managed via the Integration Engine's external media strategy (SAD-1 ADR-005) — YouTube as initial provider (SRS-LRN-001–017; SDD-1 Ch.16; SAD-1 Ch.13; DDD-1 Ch.16; PLC-1 Ch.30; KR-1 Ch.50).

**Base path:** `/v1/learning`

**Authentication:** Bearer token for all endpoints. Instructor endpoints require `instructor` role. Admin endpoints require `admin` role. Public catalog endpoints require authentication but no special role.

### 14.2 Instructors

#### EP-LRN-001 — Register Instructor

| Field | Value |
|---|---|
| **ID** | EP-LRN-001 |
| **Method** | POST |
| **Path** | `/v1/learning/instructors` |
| **Purpose** | Register as an instructor on the platform |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant (KYC TIER_2+ required) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-001; SDD-1 Ch.16; DDD-1 Ch.16 |

**Request:**

```json
{
  "display_name": "Dr. Sarah Johnson",
  "headline": "Professor of Computer Science",
  "bio": "Experienced educator with 15 years teaching software engineering and data science.",
  "expertise": ["Software Engineering", "Data Science", "Machine Learning"],
  "credentials": [
    {
      "credential_type": "DEGREE",
      "title": "PhD in Computer Science",
      "institution": "MIT",
      "year": 2015
    }
  ],
  "contact_email": "sarah@example.com",
  "social_links": {
    "linkedin": "https://linkedin.com/in/sarah",
    "website": "https://sarah.example.com"
  }
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `display_name` | string | Yes | Min 2, max 200 chars |
| `headline` | string | Yes | Min 2, max 200 chars |
| `bio` | string | No | Max 5000 chars |
| `expertise` | array[string] | Yes | Min 1, max 20 areas |
| `credentials` | array | No | Professional credentials |
| `contact_email` | string | Yes | Valid email |
| `social_links` | object | No | Social media links |

**Response (201 Created):**

```json
{
  "instructor_id": "in-001e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "display_name": "Dr. Sarah Johnson",
  "status": "PENDING",
  "kyc_tier_required": "TIER_2",
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Invalid profile data |
| 403 | `KYC_INSUFFICIENT` | Account KYC tier is below TIER_2 |
| 409 | `INSTRUCTOR_ALREADY_EXISTS` | Account already has an active instructor registration |
| 422 | `TRUST_GATE_NOT_MET` | Trust score below threshold for instructor eligibility |

---

#### EP-LRN-002 — Get Instructor Profile

| Field | Value |
|---|---|
| **ID** | EP-LRN-002 |
| **Method** | GET |
| **Path** | `/v1/learning/instructors/me` |
| **Purpose** | Get the authenticated instructor's profile |
| **Authentication** | Bearer token |
| **Authorization** | `instructor` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-001; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "instructor_id": "in-001e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "display_name": "Dr. Sarah Johnson",
  "headline": "Professor of Computer Science",
  "bio": "Experienced educator with 15 years teaching software engineering and data science.",
  "expertise": ["Software Engineering", "Data Science", "Machine Learning"],
  "credentials": [ ... ],
  "status": "ACTIVE",
  "reputation_score": "92.00",
  "total_courses": 5,
  "total_students": 1200,
  "rating_average": "4.7",
  "rating_count": 320,
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-LRN-003 — Get Instructor by ID (Public)

| Field | Value |
|---|---|
| **ID** | EP-LRN-003 |
| **Method** | GET |
| **Path** | `/v1/learning/instructors/{instructor_id}` |
| **Purpose** | Get an instructor's public profile |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-LRN-001; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "instructor_id": "in-001e8400-e29b-41d4-a716-446655440000",
  "display_name": "Dr. Sarah Johnson",
  "headline": "Professor of Computer Science",
  "bio": "Experienced educator with 15 years teaching software engineering and data science.",
  "expertise": ["Software Engineering", "Data Science", "Machine Learning"],
  "credentials": [ ... ],
  "reputation_score": "92.00",
  "rating_average": "4.7",
  "rating_count": 320,
  "total_courses": 5,
  "total_students": 1200
}
```

---

#### EP-LRN-004 — Update Instructor Profile

| Field | Value |
|---|---|
| **ID** | EP-LRN-004 |
| **Method** | PATCH |
| **Path** | `/v1/learning/instructors/me` |
| **Purpose** | Update the instructor's profile |
| **Authentication** | Bearer token |
| **Authorization** | `instructor` role |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-001 |

**Request:**

```json
{
  "headline": "Updated headline",
  "bio": "Updated bio text",
  "expertise": ["Software Engineering", "Cloud Computing"]
}
```

**Response (200 OK):** Returns the updated instructor profile (same as EP-LRN-002).

---

### 14.3 Courses

#### EP-LRN-005 — Create Course

| Field | Value |
|---|---|
| **ID** | EP-LRN-005 |
| **Method** | POST |
| **Path** | `/v1/learning/courses` |
| **Purpose** | Create a new course |
| **Authentication** | Bearer token |
| **Authorization** | `instructor` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | High tier |
| **Implements** | SRS-LRN-002; SDD-1 Ch.16; DDD-1 Ch.16 |

**Request:**

```json
{
  "title": "Introduction to Software Engineering",
  "subtitle": "From Basics to Best Practices",
  "description": "A comprehensive introduction to software engineering principles, design patterns, and best practices.",
  "category_id": "cat-001e8400-e29b-41d4-a716-446655440000",
  "level": "BEGINNER",
  "language": "en",
  "price": "49.99",
  "currency": "USD",
  "is_free": false,
  "thumbnail_url": "https://cdn.k-network.com/courses/thumb.png",
  "preview_video_url": "https://youtube.com/watch?v=preview",
  "tags": ["software", "engineering", "beginner"],
  "objectives": [
    "Understand software engineering fundamentals",
    "Apply design patterns in real projects",
    "Write maintainable and testable code"
  ],
  "prerequisites": ["Basic programming knowledge"]
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `title` | string | Yes | Min 2, max 300 chars |
| `subtitle` | string | No | Max 200 chars |
| `description` | string | Yes | Min 10, max 10000 chars |
| `category_id` | string (UUID) | Yes | Must be an active category |
| `level` | string | Yes | One of: `BEGINNER`, `INTERMEDIATE`, `ADVANCED`, `EXPERT` |
| `language` | string | Yes | ISO 639-1 |
| `price` | string | No | Decimal string, 2 places, > 0 (required if `is_free` is false) |
| `currency` | string | No | ISO 4217 (required if `is_free` is false) |
| `is_free` | boolean | No | Default: `false` |
| `thumbnail_url` | string | No | URL to course thumbnail |
| `preview_video_url` | string | No | URL to preview video (external media) |
| `tags` | array[string] | No | Max 20 tags |
| `objectives` | array[string] | No | Learning objectives |
| `prerequisites` | array[string] | No | Prerequisite descriptions |

**Response (201 Created):**

```json
{
  "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
  "instructor_id": "in-001e8400-e29b-41d4-a716-446655440000",
  "title": "Introduction to Software Engineering",
  "slug": "introduction-to-software-engineering",
  "status": "DRAFT",
  "price": "49.99",
  "currency": "USD",
  "is_free": false,
  "level": "BEGINNER",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-LRN-006 — Get Course

| Field | Value |
|---|---|
| **ID** | EP-LRN-006 |
| **Method** | GET |
| **Path** | `/v1/learning/courses/{course_id}` |
| **Purpose** | Get course details (public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-LRN-002, SRS-LRN-005; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
  "instructor": {
    "instructor_id": "in-001e8400-e29b-41d4-a716-446655440000",
    "display_name": "Dr. Sarah Johnson",
    "rating_average": "4.7"
  },
  "title": "Introduction to Software Engineering",
  "subtitle": "From Basics to Best Practices",
  "description": "A comprehensive introduction to software engineering principles...",
  "category": {
    "category_id": "cat-001e8400-e29b-41d4-a716-446655440000",
    "name": "Software Development"
  },
  "level": "BEGINNER",
  "language": "en",
  "price": "49.99",
  "currency": "USD",
  "is_free": false,
  "thumbnail_url": "https://cdn.k-network.com/courses/thumb.png",
  "preview_video_url": "https://youtube.com/watch?v=preview",
  "tags": ["software", "engineering", "beginner"],
  "objectives": [ ... ],
  "prerequisites": [ ... ],
  "modules_count": 5,
  "lessons_count": 25,
  "total_duration_minutes": 480,
  "enrollment_count": 320,
  "rating_average": "4.7",
  "rating_count": 45,
  "status": "PUBLISHED",
  "is_enrolled": false,
  "created_at": "2026-08-26T14:30:00Z",
  "published_at": "2026-08-27T10:00:00Z"
}
```

---

#### EP-LRN-007 — Update Course

| Field | Value |
|---|---|
| **ID** | EP-LRN-007 |
| **Method** | PATCH |
| **Path** | `/v1/learning/courses/{course_id}` |
| **Purpose** | Update a course (instructor only) |
| **Authentication** | Bearer token |
| **Authorization** | `instructor` role (owner) |
| **Idempotency** | No |
| **Rate Limit** | High tier |
| **Implements** | SRS-LRN-002; SDD-1 Ch.16 |

**Request:**

```json
{
  "title": "Updated Course Title",
  "description": "Updated description",
  "price": "39.99"
}
```

**Response (200 OK):** Returns the updated course (same as EP-LRN-006).

---

#### EP-LRN-008 — Publish Course

| Field | Value |
|---|---|
| **ID** | EP-LRN-008 |
| **Method** | POST |
| **Path** | `/v1/learning/courses/{course_id}/publish` |
| **Purpose** | Publish a course (make it available for enrollment) |
| **Authentication** | Bearer token |
| **Authorization** | `instructor` role (owner) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-002; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
  "status": "PUBLISHED",
  "published_at": "2026-08-27T10:00:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 422 | `COURSE_INCOMPLETE` | Course has no modules or lessons; cannot be published |
| 409 | `ALREADY_PUBLISHED` | Course is already published |

---

#### EP-LRN-009 — Search Courses

| Field | Value |
|---|---|
| **ID** | EP-LRN-009 |
| **Method** | GET |
| **Path** | `/v1/learning/courses` |
| **Purpose** | Search and filter courses (public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-LRN-005; SDD-1 Ch.16 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `q` | string | — | Full-text search query |
| `category_id` | string | — | Filter by category |
| `instructor_id` | string | — | Filter by instructor |
| `level` | string | — | Filter by level: `BEGINNER`, `INTERMEDIATE`, `ADVANCED`, `EXPERT` |
| `language` | string | — | Filter by language |
| `price_min` | string | — | Minimum price |
| `price_max` | string | — | Maximum price |
| `is_free` | boolean | — | Filter free courses |
| `sort` | string | `relevance` | `relevance`, `-rating`, `-enrollment_count`, `-created_at`, `price`, `-price` |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |

**Response (200 OK):**

```json
{
  "data": [
    {
      "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
      "title": "Introduction to Software Engineering",
      "instructor_name": "Dr. Sarah Johnson",
      "thumbnail_url": "https://cdn.k-network.com/courses/thumb.png",
      "price": "49.99",
      "currency": "USD",
      "is_free": false,
      "level": "BEGINNER",
      "rating_average": "4.7",
      "rating_count": 45,
      "enrollment_count": 320,
      "duration_minutes": 480
    }
  ],
  "pagination": { ... }
}
```

---

### 14.4 Programs

#### EP-LRN-010 — Create Program

| Field | Value |
|---|---|
| **ID** | EP-LRN-010 |
| **Method** | POST |
| **Path** | `/v1/learning/programs` |
| **Purpose** | Create a learning program (collection of courses with a unified curriculum) |
| **Authentication** | Bearer token |
| **Authorization** | `instructor` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | High tier |
| **Implements** | SRS-LRN-003; SDD-1 Ch.16 |

**Request:**

```json
{
  "title": "Full Stack Developer Program",
  "description": "A comprehensive program covering frontend, backend, and DevOps.",
  "category_id": "cat-001e8400-e29b-41d4-a716-446655440000",
  "level": "INTERMEDIATE",
  "price": "299.99",
  "currency": "USD",
  "course_ids": [
    "cr-001e8400-e29b-41d4-a716-446655440000",
    "cr-002e8400-e29b-41d4-a716-446655440000",
    "cr-003e8400-e29b-41d4-a716-446655440000"
  ],
  "thumbnail_url": "https://cdn.k-network.com/programs/thumb.png"
}
```

**Response (201 Created):**

```json
{
  "program_id": "pg-001e8400-e29b-41d4-a716-446655440000",
  "instructor_id": "in-001e8400-e29b-41d4-a716-446655440000",
  "title": "Full Stack Developer Program",
  "slug": "full-stack-developer-program",
  "status": "DRAFT",
  "course_count": 3,
  "price": "299.99",
  "currency": "USD",
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

### 14.5 Modules and Lessons

#### EP-LRN-011 — Create Module

| Field | Value |
|---|---|
| **ID** | EP-LRN-011 |
| **Method** | POST |
| **Path** | `/v1/learning/courses/{course_id}/modules` |
| **Purpose** | Create a module within a course |
| **Authentication** | Bearer token |
| **Authorization** | `instructor` role (owner) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | High tier |
| **Implements** | SRS-LRN-004; SDD-1 Ch.16 |

**Request:**

```json
{
  "title": "Introduction to Design Patterns",
  "description": "Learn the fundamental design patterns used in software engineering.",
  "order": 1
}
```

**Response (201 Created):**

```json
{
  "module_id": "md-001e8400-e29b-41d4-a716-446655440000",
  "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
  "title": "Introduction to Design Patterns",
  "order": 1,
  "lessons_count": 0,
  "created_at": "2026-08-26T14:30:00Z"
}
```

---

#### EP-LRN-012 — Create Lesson

| Field | Value |
|---|---|
| **ID** | EP-LRN-012 |
| **Method** | POST |
| **Path** | `/v1/learning/courses/{course_id}/modules/{module_id}/lessons` |
| **Purpose** | Create a lesson within a module |
| **Authentication** | Bearer token |
| **Authorization** | `instructor` role (owner) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | High tier |
| **Implements** | SRS-LRN-004; SDD-1 Ch.16; SAD-1 ADR-005 |

**Request:**

```json
{
  "title": "Singleton Pattern",
  "description": "Understanding the Singleton design pattern.",
  "content_type": "VIDEO",
  "content_url": "https://youtube.com/watch?v=singleton-pattern",
  "content_duration_minutes": 15,
  "is_preview": false,
  "order": 1,
  "resources": [
    {
      "resource_type": "PDF",
      "title": "Singleton Pattern Cheat Sheet",
      "url": "https://cdn.k-network.com/resources/singleton.pdf"
    }
  ]
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `title` | string | Yes | Min 2, max 300 chars |
| `description` | string | No | Max 2000 chars |
| `content_type` | string | Yes | One of: `VIDEO`, `ARTICLE`, `PDF`, `INTERACTIVE`, `EXTERNAL_LINK` |
| `content_url` | string | Yes | URL to content (external media, e.g., YouTube) |
| `content_duration_minutes` | integer | No | Duration in minutes |
| `is_preview` | boolean | No | If `true`, available without enrollment (default: `false`) |
| `order` | integer | Yes | Display order within module |
| `resources` | array | No | Supplementary resources |

**Response (201 Created):**

```json
{
  "lesson_id": "ls-001e8400-e29b-41d4-a716-446655440000",
  "module_id": "md-001e8400-e29b-41d4-a716-446655440000",
  "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
  "title": "Singleton Pattern",
  "content_type": "VIDEO",
  "content_duration_minutes": 15,
  "is_preview": false,
  "order": 1,
  "created_at": "2026-08-26T14:30:00Z"
}
```

> **Note:** Learning content is hosted on external media platforms (SAD-1 ADR-005). The `content_url` points to the external resource (e.g., YouTube). The Learning Engine tracks access, progress, and completion via the Integration Engine's external media strategy, but does not store video content itself.

---

### 14.6 Enrollment

#### EP-LRN-013 — Enroll in Course

| Field | Value |
|---|---|
| **ID** | EP-LRN-013 |
| **Method** | POST |
| **Path** | `/v1/learning/courses/{course_id}/enrollments` |
| **Purpose** | Enroll in a course |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self); KYC TIER_1+ required |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-006; SDD-1 Ch.16; DDD-1 Ch.16 |

**Request:**

```json
{
  "payment_method_id": "pm-001e8400-e29b-41d4-a716-446655440000",
  "promo_code": "LEARN20"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `payment_method_id` | string (UUID) | No | Required for paid courses; not required for free courses |
| `promo_code` | string | No | Must be an active promotion code |

**Response (201 Created):**

```json
{
  "enrollment_id": "en-001e8400-e29b-41d4-a716-446655440000",
  "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "ACTIVE",
  "enrolled_at": "2026-08-26T14:30:00Z",
  "amount_paid": "39.99",
  "currency": "USD",
  "has_access": true
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 409 | `ALREADY_ENROLLED` | Already enrolled in this course |
| 422 | `PAYMENT_FAILED` | Payment could not be processed |
| 422 | `COURSE_NOT_PUBLISHED` | Course is not published |
| 403 | `KYC_INSUFFICIENT` | KYC tier below TIER_1 |

---

#### EP-LRN-014 — Get Enrollment

| Field | Value |
|---|---|
| **ID** | EP-LRN-014 |
| **Method** | GET |
| **Path** | `/v1/learning/enrollments/{enrollment_id}` |
| **Purpose** | Get enrollment details including progress |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-006, SRS-LRN-007; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "enrollment_id": "en-001e8400-e29b-41d4-a716-446655440000",
  "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
  "course_title": "Introduction to Software Engineering",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "ACTIVE",
  "progress_percentage": "0.350000",
  "lessons_completed": 9,
  "lessons_total": 25,
  "last_accessed_at": "2026-08-26T15:00:00Z",
  "enrolled_at": "2026-08-26T14:30:00Z",
  "completed_at": null,
  "certificate_id": null
}
```

---

#### EP-LRN-015 — List Enrollments

| Field | Value |
|---|---|
| **ID** | EP-LRN-015 |
| **Method** | GET |
| **Path** | `/v1/learning/enrollments` |
| **Purpose** | List the authenticated user's enrollments |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-006; SDD-1 Ch.16 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `status` | string | — | Filter by status: `ACTIVE`, `COMPLETED`, `EXPIRED`, `CANCELLED` |
| `course_id` | string | — | Filter by course |
| `enrolled_at_from` | string | — | Filter from date |
| `enrolled_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-enrolled_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "enrollment_id": "en-001e8400-e29b-41d4-a716-446655440000",
      "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
      "course_title": "Introduction to Software Engineering",
      "course_thumbnail": "https://cdn.k-network.com/courses/thumb.png",
      "instructor_name": "Dr. Sarah Johnson",
      "status": "ACTIVE",
      "progress_percentage": "0.350000",
      "last_accessed_at": "2026-08-26T15:00:00Z",
      "enrolled_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

### 14.7 Progress Tracking

#### EP-LRN-016 — Update Lesson Progress

| Field | Value |
|---|---|
| **ID** | EP-LRN-016 |
| **Method** | POST |
| **Path** | `/v1/learning/enrollments/{enrollment_id}/lessons/{lesson_id}/progress` |
| **Purpose** | Record progress on a lesson (video watch time, article read, etc.) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | No |
| **Rate Limit** | High tier |
| **Implements** | SRS-LRN-007; SDD-1 Ch.16 |

**Request:**

```json
{
  "progress_percentage": "0.750000",
  "watch_time_seconds": 675,
  "is_completed": false
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `progress_percentage` | string | Yes | Decimal fraction 0.000000–1.000000 |
| `watch_time_seconds` | integer | No | For video lessons |
| `is_completed` | boolean | No | Default: `false` |

**Response (200 OK):**

```json
{
  "enrollment_id": "en-001e8400-e29b-41d4-a716-446655440000",
  "lesson_id": "ls-001e8400-e29b-41d4-a716-446655440000",
  "progress_percentage": "0.750000",
  "is_completed": false,
  "overall_course_progress": "0.350000",
  "updated_at": "2026-08-26T15:00:00Z"
}
```

> **Note:** When `is_completed` is `true`, the Learning Engine accrues Learning K-Points (KR-PNT-004, KR Ch.50) and checks whether all lessons in the course are complete. If all lessons are complete, the course is marked complete and a certificate is generated.

---

### 14.8 Quizzes and Assessments

#### EP-LRN-017 — Get Quiz

| Field | Value |
|---|---|
| **ID** | EP-LRN-017 |
| **Method** | GET |
| **Path** | `/v1/learning/lessons/{lesson_id}/quiz` |
| **Purpose** | Get the quiz associated with a lesson (enrolled students only) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self; must be enrolled) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-008; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "quiz_id": "qz-001e8400-e29b-41d4-a716-446655440000",
  "lesson_id": "ls-001e8400-e29b-41d4-a716-446655440000",
  "title": "Singleton Pattern Quiz",
  "description": "Test your understanding of the Singleton pattern.",
  "passing_score_percentage": "0.700000",
  "max_attempts": 3,
  "time_limit_minutes": 10,
  "questions": [
    {
      "question_id": "qq-001e8400-e29b-41d4-a716-446655440000",
      "question_type": "MULTIPLE_CHOICE",
      "question": "Which of the following is a key characteristic of the Singleton pattern?",
      "options": [
        {"option_id": "op-001", "text": "Ensures only one instance exists"},
        {"option_id": "op-002", "text": "Creates multiple instances on demand"},
        {"option_id": "op-003", "text": "Requires at least two instances"},
        {"option_id": "op-004", "text": "Is a creational pattern for families of objects"}
      ],
      "points": 1
    }
  ]
}
```

> **Note:** The correct answer is NOT included in the quiz response. The student submits answers via EP-LRN-018, and the system evaluates correctness server-side.

---

#### EP-LRN-018 — Submit Quiz Attempt

| Field | Value |
|---|---|
| **ID** | EP-LRN-018 |
| **Method** | POST |
| **Path** | `/v1/learning/quizzes/{quiz_id}/attempts` |
| **Purpose** | Submit a quiz attempt for evaluation |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self; must be enrolled) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-008; SDD-1 Ch.16 |

**Request:**

```json
{
  "answers": [
    {
      "question_id": "qq-001e8400-e29b-41d4-a716-446655440000",
      "selected_option_ids": ["op-001"]
    }
  ]
}
```

**Response (201 Created):**

```json
{
  "attempt_id": "at-001e8400-e29b-41d4-a716-446655440000",
  "quiz_id": "qz-001e8400-e29b-41d4-a716-446655440000",
  "score_percentage": "1.000000",
  "is_passed": true,
  "correct_answers": 1,
  "total_questions": 1,
  "attempt_number": 1,
  "max_attempts": 3,
  "attempts_remaining": 2,
  "created_at": "2026-08-26T15:00:00Z"
}
```

> **Note:** Quiz results contribute to Learning K-Points (KR Ch.50). A passing score may be required to complete the lesson.

---

### 14.9 Assignments

#### EP-LRN-019 — Submit Assignment

| Field | Value |
|---|---|
| **ID** | EP-LRN-019 |
| **Method** | POST |
| **Path** | `/v1/learning/lessons/{lesson_id}/assignment/submissions` |
| **Purpose** | Submit an assignment for a lesson |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self; must be enrolled) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-009; SDD-1 Ch.16 |

**Request:**

```json
{
  "submission_text": "My implementation of the Singleton pattern is as follows...",
  "attachment_urls": [
    "https://cdn.k-network.com/submissions/singleton-impl.zip"
  ]
}
```

**Response (201 Created):**

```json
{
  "submission_id": "sb-001e8400-e29b-41d4-a716-446655440000",
  "lesson_id": "ls-001e8400-e29b-41d4-a716-446655440000",
  "status": "SUBMITTED",
  "submitted_at": "2026-08-26T15:00:00Z"
}
```

---

#### EP-LRN-020 — Review Assignment (Instructor)

| Field | Value |
|---|---|
| **ID** | EP-LRN-020 |
| **Method** | POST |
| **Path** | `/v1/learning/assignments/{submission_id}/review` |
| **Purpose** | Review and grade an assignment submission (instructor only) |
| **Authentication** | Bearer token |
| **Authorization** | `instructor` role (owner of the course) |
| **Idempotency** | No |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-009; SDD-1 Ch.16 |

**Request:**

```json
{
  "grade_percentage": "0.850000",
  "feedback": "Good implementation. The double-checked locking pattern is correctly applied. Consider adding thread-safe initialization for edge cases.",
  "is_passed": true
}
```

**Response (200 OK):**

```json
{
  "submission_id": "sb-001e8400-e29b-41d4-a716-446655440000",
  "status": "GRADED",
  "grade_percentage": "0.850000",
  "is_passed": true,
  "reviewed_at": "2026-08-26T18:00:00Z",
  "reviewed_by": "in-001e8400-e29b-41d4-a716-446655440000"
}
```

---

### 14.10 Completion and Certificates

#### EP-LRN-021 — Get Certificate

| Field | Value |
|---|---|
| **ID** | EP-LRN-021 |
| **Method** | GET |
| **Path** | `/v1/learning/certificates/{certificate_id}` |
| **Purpose** | Get a course completion certificate |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) or any authenticated participant (public verification) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-011; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "certificate_id": "ct-001e8400-e29b-41d4-a716-446655440000",
  "enrollment_id": "en-001e8400-e29b-41d4-a716-446655440000",
  "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
  "course_title": "Introduction to Software Engineering",
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "recipient_name": "John Doe",
  "instructor_name": "Dr. Sarah Johnson",
  "completion_date": "2026-09-15",
  "final_score_percentage": "0.920000",
  "verification_code": "KNT-CT-550e8400",
  "verification_url": "https://k-network.com/verify/KNT-CT-550e8400",
  "issued_at": "2026-09-15T00:00:00Z"
}
```

---

#### EP-LRN-022 — List Certificates

| Field | Value |
|---|---|
| **ID** | EP-LRN-022 |
| **Method** | GET |
| **Path** | `/v1/learning/certificates` |
| **Purpose** | List the authenticated user's certificates |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-011; SDD-1 Ch.16 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `course_id` | string | — | Filter by course |
| `issued_at_from` | string | — | Filter from date |
| `issued_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |
| `sort` | string | `-issued_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "certificate_id": "ct-001e8400-e29b-41d4-a716-446655440000",
      "course_title": "Introduction to Software Engineering",
      "completion_date": "2026-09-15",
      "verification_code": "KNT-CT-550e8400"
    }
  ],
  "pagination": { ... }
}
```

---

### 14.11 Reviews

#### EP-LRN-023 — Create Course Review

| Field | Value |
|---|---|
| **ID** | EP-LRN-023 |
| **Method** | POST |
| **Path** | `/v1/learning/courses/{course_id}/reviews` |
| **Purpose** | Create a course review (enrolled students who completed the course only) |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self; must have completed the course) |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-012; SDD-1 Ch.16 |

**Request:**

```json
{
  "rating": 5,
  "title": "Excellent introduction",
  "body": "Dr. Johnson's course is thorough and well-structured. The examples are practical and the quizzes reinforce learning effectively.",
  "enrollment_id": "en-001e8400-e29b-41d4-a716-446655440000"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `rating` | integer | Yes | 1–5 |
| `title` | string | Yes | Min 2, max 200 chars |
| `body` | string | No | Max 5000 chars |
| `enrollment_id` | string (UUID) | Yes | Must be a completed enrollment for this course |

**Response (201 Created):**

```json
{
  "review_id": "rv-001e8400-e29b-41d4-a716-446655440000",
  "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
  "rating": 5,
  "title": "Excellent introduction",
  "body": "Dr. Johnson's course is thorough and well-structured...",
  "is_verified_completion": true,
  "created_at": "2026-08-26T14:30:00Z"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 403 | `NOT_COMPLETED_COURSE` | Must complete the course before reviewing |
| 409 | `REVIEW_ALREADY_EXISTS` | Already reviewed this course |

---

#### EP-LRN-024 — List Course Reviews

| Field | Value |
|---|---|
| **ID** | EP-LRN-024 |
| **Method** | GET |
| **Path** | `/v1/learning/courses/{course_id}/reviews` |
| **Purpose** | List reviews for a course (public) |
| **Authentication** | Bearer token |
| **Authorization** | Any authenticated participant |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Public tier |
| **Implements** | SRS-LRN-012; SDD-1 Ch.16 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `rating` | integer | — | Filter by rating (1–5) |
| `sort` | string | `-created_at` | Sort order |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 20 | Items per page (max 100) |

**Response (200 OK):**

```json
{
  "data": [
    {
      "review_id": "rv-001e8400-e29b-41d4-a716-446655440000",
      "rating": 5,
      "title": "Excellent introduction",
      "body": "Dr. Johnson's course is thorough and well-structured...",
      "is_verified_completion": true,
      "author_display_name": "John D.",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... },
  "rating_summary": {
    "average": "4.7",
    "count": 45,
    "distribution": {"5": 30, "4": 10, "3": 3, "2": 1, "1": 1}
  }
}
```

---

### 14.12 Learning Analytics

#### EP-LRN-025 — Get Learning Analytics (Student)

| Field | Value |
|---|---|
| **ID** | EP-LRN-025 |
| **Method** | GET |
| **Path** | `/v1/learning/analytics/me` |
| **Purpose** | Get learning analytics for the authenticated user |
| **Authentication** | Bearer token |
| **Authorization** | Owner (self) |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-015; SDD-1 Ch.16 |

**Response (200 OK):**

```json
{
  "account_id": "550e8400-e29b-41d4-a716-446655440000",
  "total_enrollments": 8,
  "active_enrollments": 3,
  "completed_courses": 5,
  "total_learning_hours": 42,
  "certificates_earned": 5,
  "current_streak_days": 7,
  "longest_streak_days": 21,
  "k_points_earned_learning": "350.00",
  "by_category": [
    {"category": "Software Development", "courses": 4, "completed": 3},
    {"category": "Data Science", "courses": 2, "completed": 1},
    {"category": "Business", "courses": 2, "completed": 1}
  ],
  "progress_timeline": [
    {"date": "2026-08-26", "lessons_completed": 2, "learning_minutes": 45}
  ]
}
```

---

#### EP-LRN-026 — Get Learning Analytics (Instructor)

| Field | Value |
|---|---|
| **ID** | EP-LRN-026 |
| **Method** | GET |
| **Path** | `/v1/learning/analytics/instructor` |
| **Purpose** | Get learning analytics for the authenticated instructor's courses |
| **Authentication** | Bearer token |
| **Authorization** | `instructor` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Standard tier |
| **Implements** | SRS-LRN-015, SRS-LRN-016; SDD-1 Ch.16 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `course_id` | string | — | Filter by course |
| `period` | string | `30d` | Time period: `7d`, `30d`, `90d`, `1y` |

**Response (200 OK):**

```json
{
  "instructor_id": "in-001e8400-e29b-41d4-a716-446655440000",
  "period": "30d",
  "total_courses": 5,
  "total_students": 1200,
  "new_enrollments_30d": 85,
  "course_completion_rate": "0.629000",
  "average_rating": "4.7",
  "total_revenue_30d": "2100.00",
  "currency": "USD",
  "by_course": [
    {
      "course_id": "cr-001e8400-e29b-41d4-a716-446655440000",
      "title": "Introduction to Software Engineering",
      "enrollment_count": 320,
      "completion_rate": "0.750000",
      "rating_average": "4.7",
      "revenue_30d": "800.00"
    }
  ]
}
```

---

### 14.13 Learning Engine Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-LRN-001 | POST | `/v1/learning/instructors` | Bearer | Register instructor |
| EP-LRN-002 | GET | `/v1/learning/instructors/me` | Instructor | Get instructor profile |
| EP-LRN-003 | GET | `/v1/learning/instructors/{id}` | Bearer | Get instructor (public) |
| EP-LRN-004 | PATCH | `/v1/learning/instructors/me` | Instructor | Update instructor profile |
| EP-LRN-005 | POST | `/v1/learning/courses` | Instructor | Create course |
| EP-LRN-006 | GET | `/v1/learning/courses/{id}` | Bearer | Get course (public) |
| EP-LRN-007 | PATCH | `/v1/learning/courses/{id}` | Instructor | Update course |
| EP-LRN-008 | POST | `/v1/learning/courses/{id}/publish` | Instructor | Publish course |
| EP-LRN-009 | GET | `/v1/learning/courses` | Bearer | Search courses |
| EP-LRN-010 | POST | `/v1/learning/programs` | Instructor | Create program |
| EP-LRN-011 | POST | `/v1/learning/courses/{id}/modules` | Instructor | Create module |
| EP-LRN-012 | POST | `/v1/learning/courses/{id}/modules/{id}/lessons` | Instructor | Create lesson |
| EP-LRN-013 | POST | `/v1/learning/courses/{id}/enrollments` | Bearer | Enroll in course |
| EP-LRN-014 | GET | `/v1/learning/enrollments/{id}` | Bearer | Get enrollment |
| EP-LRN-015 | GET | `/v1/learning/enrollments` | Bearer | List enrollments |
| EP-LRN-016 | POST | `/v1/learning/enrollments/{id}/lessons/{id}/progress` | Bearer | Update lesson progress |
| EP-LRN-017 | GET | `/v1/learning/lessons/{id}/quiz` | Bearer | Get quiz |
| EP-LRN-018 | POST | `/v1/learning/quizzes/{id}/attempts` | Bearer | Submit quiz attempt |
| EP-LRN-019 | POST | `/v1/learning/lessons/{id}/assignment/submissions` | Bearer | Submit assignment |
| EP-LRN-020 | POST | `/v1/learning/assignments/{id}/review` | Instructor | Review assignment |
| EP-LRN-021 | GET | `/v1/learning/certificates/{id}` | Bearer | Get certificate |
| EP-LRN-022 | GET | `/v1/learning/certificates` | Bearer | List certificates |
| EP-LRN-023 | POST | `/v1/learning/courses/{id}/reviews` | Bearer | Create course review |
| EP-LRN-024 | GET | `/v1/learning/courses/{id}/reviews` | Bearer | List course reviews |
| EP-LRN-025 | GET | `/v1/learning/analytics/me` | Bearer | Get student analytics |
| EP-LRN-026 | GET | `/v1/learning/analytics/instructor` | Instructor | Get instructor analytics |

### 14.14 Governing Requirement Traceability

SRS-LRN-001 (instructor registration), SRS-LRN-002 (course creation), SRS-LRN-003 (programs), SRS-LRN-004 (modules and lessons), SRS-LRN-005 (course search), SRS-LRN-006 (enrollment), SRS-LRN-007 (progress tracking), SRS-LRN-008 (quizzes), SRS-LRN-009 (assignments), SRS-LRN-010 (completion tracking), SRS-LRN-011 (certificates), SRS-LRN-012 (reviews), SRS-LRN-013 (learning K-Points integration), SRS-LRN-014 (external media integration), SRS-LRN-015 (learning analytics), SRS-LRN-016 (instructor analytics), SRS-LRN-017 (learning settlements); SDD-1 Ch.16; SAD-1 Ch.13, ADR-005; DDD-1 Ch.16; PLC-1 Ch.30; KR-1 KR-FND-018, KR-PNT-004, Ch.50, KR-ECO-014 (Learning allocation rates: 20/55/8/5/2).

---

# Part VI — 90/10 Accounting, Engine Registry, and Traceability

## Chapter 15 — 90/10 Accounting APIs

### 15.1 Overview

The 90/10 Accounting APIs provide authorized internal/admin-only access to revenue allocation, reserve management, reward pool operations, reconciliation, and settlement details. These APIs expose the internal financial calculations of the 90/10 economic model — they are **never exposed to unauthorized users**. All 90/10 accounting endpoints require `admin` role authentication. The 90/10 principle mandates that only 90% of Qualifying Economic Value (QEV) is allocatable; 10% is a protected reserve (KR-1 KR-ECO-001–063). The reserve is inviolable and may only be used through formal governance approval (KR-ECO-056). These APIs provide full transparency into the 90/10 breakdown for governance, auditors, and platform administrators (SRS-WAL-006; SDD-1 Ch.11, Ch.19; DDD-1 Ch.19; KR-1 KR-ECO-001–063; PLC-1 Ch.27).

**Base path:** `/v1/economy`

**Authentication:** Bearer token required for all endpoints.

**Authorization:** `admin` role only. No participant, vendor, provider, or partner can access these endpoints. The Integration Engine enforces this restriction — 90/10 accounting APIs are never proxied to external systems.

### 15.2 Revenue Allocation

#### EP-ECO-001 — Get Revenue Allocation

| Field | Value |
|---|---|
| **ID** | EP-ECO-001 |
| **Method** | GET |
| **Path** | `/v1/economy/allocations/{allocation_id}` |
| **Purpose** | Get the full 90/10 revenue allocation breakdown for a specific transaction |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; DDD-1 Ch.19; KR-1 KR-ECO-014–018 |

**Response (200 OK):**

```json
{
  "allocation_id": "al-001e8400-e29b-41d4-a716-446655440000",
  "transaction_id": "tx-002e8400-e29b-41d4-a716-446655440000",
  "source": "COMMERCE",
  "gross_revenue": "205.00",
  "deductions": "5.00",
  "qualifying_economic_value": "200.00",
  "allocation_pool": "180.00",
  "reserve": "20.00",
  "currency": "USD",
  "allocation_breakdown": {
    "vendor_amount": "120.00",
    "vendor_rate": "0.600000",
    "platform_amount": "30.00",
    "platform_rate": "0.150000",
    "reward_pool_amount": "16.00",
    "reward_pool_rate": "0.080000",
    "leadership_amount": "10.00",
    "leadership_rate": "0.050000",
    "operational_amount": "4.00",
    "operational_rate": "0.020000"
  },
  "verification": {
    "allocation_sum": "180.00",
    "allocation_pool": "180.00",
    "allocation_plus_reserve": "200.00",
    "qev": "200.00",
    "is_valid": true,
    "allocation_rates_sum": "0.900000",
    "allocation_rates_source": "KR-ECO-014"
  },
  "revenue_waterfall": "COMMERCE",
  "waterfall_rates": {
    "platform": "0.150000",
    "vendor": "0.600000",
    "reward_pool": "0.080000",
    "leadership": "0.050000",
    "operational": "0.020000",
    "reserve": "0.100000",
    "total": "1.000000"
  },
  "created_at": "2026-08-26T14:30:00Z",
  "settled_at": "2026-08-26T15:00:00Z"
}
```

> **Note:** This endpoint exposes the full internal 90/10 breakdown including platform, reward pool, and operational allocation amounts. This level of detail is admin-only — vendor/provider-facing settlement responses (EP-COM-029, EP-SVC-023, EP-WAL-010) show only the vendor/provider share, QEV, reserve, and status.

---

#### EP-ECO-002 — List Revenue Allocations

| Field | Value |
|---|---|
| **ID** | EP-ECO-002 |
| **Method** | GET |
| **Path** | `/v1/economy/allocations` |
| **Purpose** | List revenue allocations with full 90/10 breakdowns |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; DDD-1 Ch.19 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `source` | string | — | Filter by source: `COMMERCE`, `SERVICES`, `LEARNING`, `PLATFORM_FEE`, `PARTNER` |
| `transaction_id` | string | — | Filter by transaction |
| `cycle_id` | string | — | Filter by reward cycle |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "allocation_id": "al-001e8400-e29b-41d4-a716-446655440000",
      "source": "COMMERCE",
      "gross_revenue": "205.00",
      "qev": "200.00",
      "allocation_pool": "180.00",
      "reserve": "20.00",
      "vendor_amount": "120.00",
      "platform_amount": "30.00",
      "reward_pool_amount": "16.00",
      "leadership_amount": "10.00",
      "operational_amount": "4.00",
      "currency": "USD",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

### 15.3 Reserve Management

#### EP-ECO-003 — Get Reserve Summary

| Field | Value |
|---|---|
| **ID** | EP-ECO-003 |
| **Method** | GET |
| **Path** | `/v1/economy/reserve` |
| **Purpose** | Get the reserve summary across all transactions |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; DDD-1 Ch.19; KR-1 KR-ECO-052–056 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `cycle_id` | string | Current | Filter by reward cycle |
| `source` | string | — | Filter by revenue source |

**Response (200 OK):**

```json
{
  "cycle_id": "2026-08",
  "total_reserve": "4500.00",
  "currency": "USD",
  "reserve_percentage": "0.100000",
  "by_source": [
    {"source": "COMMERCE", "reserve": "2500.00", "transaction_count": 850},
    {"source": "SERVICES", "reserve": "1200.00", "transaction_count": 420},
    {"source": "LEARNING", "reserve": "500.00", "transaction_count": 200},
    {"source": "PLATFORM_FEE", "reserve": "200.00", "transaction_count": 50},
    {"source": "PARTNER", "reserve": "100.00", "transaction_count": 30}
  ],
  "released_amount": "0.00",
  "available_reserve": "4500.00",
  "is_protected": true,
  "kr_rule_id": "KR-ECO-052"
}
```

> **Note:** The reserve is 10% of QEV for each transaction (KR-ECO-052). It is protected from reward distribution (KR-ECO-053). The `reserve_allocations` table is append-only and can only be modified through governance-controlled release (KR-ECO-056). The `available_reserve` is the total reserve minus any governance-approved releases.

---

#### EP-ECO-004 — List Reserve Allocations

| Field | Value |
|---|---|
| **ID** | EP-ECO-004 |
| **Method** | GET |
| **Path** | `/v1/economy/reserve/allocations` |
| **Purpose** | List individual reserve allocations (per-transaction reserve entries) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; DDD-1 Ch.19; KR-1 KR-ECO-052 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `source` | string | — | Filter by source |
| `is_released` | boolean | `false` | Filter by release status |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "allocation_id": "ra-001e8400-e29b-41d4-a716-446655440000",
      "source": "COMMERCE",
      "transaction_id": "tx-002e8400-e29b-41d4-a716-446655440000",
      "gross_revenue": "205.00",
      "qev": "200.00",
      "reserve_amount": "20.00",
      "reserve_percentage": "0.100000",
      "is_released": false,
      "released_at": null,
      "release_id": null,
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

> **Note:** The `reserve_allocations` table is append-only (DDD-1 Ch.19). Reserve entries can only be marked as released through the governance-controlled release process (EP-WAL-014 / EP-ECO-005). This is enforced at the database level — no API can directly modify a reserve allocation record.

---

#### EP-ECO-005 — Release Reserve

| Field | Value |
|---|---|
| **ID** | EP-ECO-005 |
| **Method** | POST |
| **Path** | `/v1/economy/reserve/release` |
| **Purpose** | Release reserve funds per governance approval |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; DDD-1 Ch.19; KR-1 KR-ECO-056 |

**Request:**

```json
{
  "allocation_ids": [
    "ra-001e8400-e29b-41d4-a716-446655440000",
    "ra-002e8400-e29b-41d4-a716-446655440000"
  ],
  "governance_approval_id": "ga-001e8400-e29b-41d4-a716-446655440000",
  "destination": "CORONATION_FUND",
  "reason": "Governance-approved allocation to coronation awards fund for September 2026 cycle"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `allocation_ids` | array[string] | Yes | Reserve allocation IDs to release |
| `governance_approval_id` | string (UUID) | Yes | Must be an approved governance review (EP-ADM-003 with decision=APPROVED) |
| `destination` | string | Yes | One of: `OPERATIONAL_RESERVE`, `CORONATION_FUND`, `SPECIAL_CAMPAIGN` |
| `reason` | string | Yes | Min 10, max 2000 chars |

**Response (200 OK):**

```json
{
  "release_id": "rl-001e8400-e29b-41d4-a716-446655440000",
  "total_released": "40.00",
  "currency": "USD",
  "allocation_count": 2,
  "destination": "CORONATION_FUND",
  "governance_approval_id": "ga-001e8400-e29b-41d4-a716-446655440000",
  "released_at": "2026-08-26T18:00:00Z",
  "released_by": "admin-account-id",
  "reason": "Governance-approved allocation to coronation awards fund for September 2026 cycle"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 422 | `GOVERNANCE_APPROVAL_REQUIRED` | No approved governance review for this release |
| 422 | `ALLOCATION_ALREADY_RELEASED` | One or more allocations have already been released |
| 422 | `INVALID_DESTINATION` | Destination is not a valid release destination |

> **Note:** Reserve release requires formal governance approval (KR-ECO-056). The `governance_approval_id` must reference an approved governance review of type `RESERVE_RELEASE`. The reserve is never used to fund reward distributions (KR-ECO-053).

---

### 15.4 Reward Pool

#### EP-ECO-006 — Get Reward Pool

| Field | Value |
|---|---|
| **ID** | EP-ECO-006 |
| **Method** | GET |
| **Path** | `/v1/economy/reward-pool` |
| **Purpose** | Get the reward pool for a specific cycle |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; DDD-1 Ch.19; KR-1 KR-ECO-040–051 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `cycle_id` | string | Current | Reward cycle |

**Response (200 OK):**

```json
{
  "cycle_id": "2026-08",
  "reward_pool_size": "45000.00",
  "currency": "USD",
  "status": "ACTIVE",
  "funding_sources": [
    {"source": "COMMERCE", "amount": "25000.00", "contribution_rate": "0.080000"},
    {"source": "SERVICES", "amount": "12000.00", "contribution_rate": "0.080000"},
    {"source": "LEARNING", "amount": "5000.00", "contribution_rate": "0.080000"},
    {"source": "PLATFORM_FEE", "amount": "2000.00", "contribution_rate": "0.150000"},
    {"source": "PARTNER", "amount": "1000.00", "contribution_rate": "0.100000"}
  ],
  "eligible_participants": 3200,
  "distributed_amount": "0.00",
  "undistributed_amount": null,
  "individual_cap_rate": "0.050000",
  "individual_cap_amount": "2250.00",
  "is_closed": false,
  "closed_at": null,
  "kr_rule_id": "KR-ECO-040"
}
```

> **Note:** The Reward Pool is funded exclusively from genuine economic activity (KR-ECO-041). Each qualifying transaction contributes through its `a_rewards` and `a_leadership` allocations. The funding chain is linear — no circular funding is permitted (KR-ECO-007). The individual cap rate is a GOVERNANCE PARAMETER (KR-ECO-047).

---

#### EP-ECO-007 — Get Reward Pool Contributions

| Field | Value |
|---|---|
| **ID** | EP-ECO-007 |
| **Method** | GET |
| **Path** | `/v1/economy/reward-pool/contributions` |
| **Purpose** | List individual transactions contributing to the reward pool |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; KR-1 KR-ECO-016, KR-ECO-041 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `cycle_id` | string | Current | Reward cycle |
| `source` | string | — | Filter by revenue source |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "contribution_id": "rp-001e8400-e29b-41d4-a716-446655440000",
      "transaction_id": "tx-002e8400-e29b-41d4-a716-446655440000",
      "source": "COMMERCE",
      "qev": "200.00",
      "reward_pool_contribution": "16.00",
      "leadership_contribution": "10.00",
      "total_contribution": "26.00",
      "reward_pool_rate": "0.080000",
      "leadership_rate": "0.050000",
      "cycle_id": "2026-08",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

### 15.5 Reconciliation

#### EP-ECO-008 — Get Cycle Reconciliation

| Field | Value |
|---|---|
| **ID** | EP-ECO-008 |
| **Method** | GET |
| **Path** | `/v1/economy/reconciliations/{cycle_id}` |
| **Purpose** | Get the reconciliation report for a reward cycle — verifies AP + R = QEV |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; DDD-1 Ch.19; KR-1 KR-ECO-013, KR-ECO-017 |

**Response (200 OK):**

```json
{
  "cycle_id": "2026-08",
  "reconciliation_status": "VERIFIED",
  "total_gross_revenue": "500000.00",
  "total_deductions": "25000.00",
  "total_qev": "475000.00",
  "total_allocation_pool": "427500.00",
  "total_reserve": "47500.00",
  "verification": {
    "ap_plus_r": "475000.00",
    "qev": "475000.00",
    "ap_plus_r_equals_qev": true,
    "allocation_rates_sum": "0.900000",
    "reserve_rate": "0.100000",
    "total_rate": "1.000000",
    "is_valid": true
  },
  "allocation_breakdown": {
    "vendor_total": "262675.00",
    "platform_total": "90725.00",
    "reward_pool_total": "40185.00",
    "leadership_total": "24130.00",
    "operational_total": "9785.00",
    "reserve_total": "47500.00"
  },
  "reward_pool": {
    "size": "40185.00",
    "distributed": "30000.00",
    "undistributed": "10185.00",
    "undistributed_destination": "CARRIED_FORWARD"
  },
  "by_source": [
    {
      "source": "COMMERCE",
      "gross_revenue": "250000.00",
      "qev": "237500.00",
      "allocation_pool": "213750.00",
      "reserve": "23750.00",
      "waterfall_rates": {"platform": "0.150000", "vendor": "0.600000", "reward_pool": "0.080000", "leadership": "0.050000", "operational": "0.020000"}
    },
    {
      "source": "SERVICES",
      "gross_revenue": "150000.00",
      "qev": "142500.00",
      "allocation_pool": "128250.00",
      "reserve": "14250.00",
      "waterfall_rates": {"platform": "0.150000", "vendor": "0.600000", "reward_pool": "0.080000", "leadership": "0.050000", "operational": "0.020000"}
    },
    {
      "source": "LEARNING",
      "gross_revenue": "60000.00",
      "qev": "57000.00",
      "allocation_pool": "51300.00",
      "reserve": "5700.00",
      "waterfall_rates": {"platform": "0.200000", "vendor": "0.550000", "reward_pool": "0.080000", "leadership": "0.050000", "operational": "0.020000"}
    },
    {
      "source": "PLATFORM_FEE",
      "gross_revenue": "30000.00",
      "qev": "28500.00",
      "allocation_pool": "25650.00",
      "reserve": "2850.00",
      "waterfall_rates": {"platform": "0.650000", "vendor": "0.000000", "reward_pool": "0.150000", "leadership": "0.070000", "operational": "0.030000"}
    },
    {
      "source": "PARTNER",
      "gross_revenue": "10000.00",
      "qev": "9500.00",
      "allocation_pool": "8550.00",
      "reserve": "950.00",
      "waterfall_rates": {"platform": "0.400000", "vendor": "0.350000", "reward_pool": "0.100000", "leadership": "0.030000", "operational": "0.020000"}
    }
  ],
  "reconciled_at": "2026-09-01T00:00:00Z",
  "reconciled_by": "system",
  "kr_rule_id": "KR-ECO-013"
}
```

> **Note:** This reconciliation report verifies the 90/10 identity: AP + R = QEV (KR-ECO-013). The `allocation_rates_sum` must equal exactly 0.900000 and the `reserve_rate` must equal 0.100000 for each source, summing to 1.000000. The `is_valid` flag is `true` only when all invariants hold. This is enforced by check constraints at the database level (DDD-1 Ch.19).

---

#### EP-ECO-009 — List Cycle Reconciliations

| Field | Value |
|---|---|
| **ID** | EP-ECO-009 |
| **Method** | GET |
| **Path** | `/v1/economy/reconciliations` |
| **Purpose** | List reconciliation reports across cycles |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; KR-1 KR-ECO-013 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `status` | string | — | Filter by status: `VERIFIED`, `DISCREPANCY`, `PENDING` |
| `cycle_id_from` | string | — | Filter from cycle |
| `cycle_id_to` | string | — | Filter to cycle |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 12 | Items per page (max 100) |
| `sort` | string | `-cycle_id` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "cycle_id": "2026-08",
      "reconciliation_status": "VERIFIED",
      "total_qev": "475000.00",
      "total_allocation_pool": "427500.00",
      "total_reserve": "47500.00",
      "is_valid": true,
      "reconciled_at": "2026-09-01T00:00:00Z"
    },
    {
      "cycle_id": "2026-07",
      "reconciliation_status": "VERIFIED",
      "total_qev": "420000.00",
      "total_allocation_pool": "378000.00",
      "total_reserve": "42000.00",
      "is_valid": true,
      "reconciled_at": "2026-08-01T00:00:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

### 15.6 Settlement Details

#### EP-ECO-010 — Get Settlement Detail

| Field | Value |
|---|---|
| **ID** | EP-ECO-010 |
| **Method** | GET |
| **Path** | `/v1/economy/settlements/{settlement_id}` |
| **Purpose** | Get the full settlement detail with 90/10 breakdown |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; DDD-1 Ch.19; KR-1 KR-ECO-014–018 |

**Response (200 OK):**

```json
{
  "settlement_id": "st-001e8400-e29b-41d4-a716-446655440000",
  "source": "COMMERCE",
  "reference": {
    "reference_type": "ORDER",
    "reference_id": "88f1e8400-e29b-41d4-a716-446655440000"
  },
  "gross_revenue": "205.00",
  "deductions": "5.00",
  "qev": "200.00",
  "allocation_pool": "180.00",
  "reserve": "20.00",
  "allocation_breakdown": {
    "vendor_amount": "120.00",
    "platform_amount": "30.00",
    "reward_pool_amount": "16.00",
    "leadership_amount": "10.00",
    "operational_amount": "4.00"
  },
  "currency": "USD",
  "status": "SETTLED",
  "vendor_id": "ff0e8400-e29b-41d4-a716-446655440000",
  "vendor_amount": "120.00",
  "wallet_transaction_id": "tx-003e8400-e29b-41d4-a716-446655440000",
  "reward_pool_contribution_id": "rp-001e8400-e29b-41d4-a716-446655440000",
  "reserve_allocation_id": "ra-001e8400-e29b-41d4-a716-446655440000",
  "verification": {
    "allocation_sum": "180.00",
    "allocation_pool": "180.00",
    "allocation_plus_reserve": "200.00",
    "qev": "200.00",
    "is_valid": true
  },
  "created_at": "2026-08-26T14:30:00Z",
  "settled_at": "2026-08-26T15:00:00Z"
}
```

> **Note:** This endpoint provides the full settlement detail including all allocation breakdowns, cross-references to wallet transactions, reward pool contributions, and reserve allocations. The `verification` block confirms the 90/10 invariant holds for this specific settlement.

---

#### EP-ECO-011 — List Settlements

| Field | Value |
|---|---|
| **ID** | EP-ECO-011 |
| **Method** | GET |
| **Path** | `/v1/economy/settlements` |
| **Purpose** | List settlements with full 90/10 breakdowns |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; DDD-1 Ch.19 |

**Query Parameters:**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `source` | string | — | Filter by source: `COMMERCE`, `SERVICES`, `LEARNING`, `PLATFORM_FEE`, `PARTNER` |
| `status` | string | — | Filter by status: `PENDING`, `SETTLED`, `REVERSED` |
| `vendor_id` | string | — | Filter by vendor/provider |
| `cycle_id` | string | — | Filter by reward cycle |
| `created_at_from` | string | — | Filter from date |
| `created_at_to` | string | — | Filter to date |
| `amount_min` | string | — | Minimum QEV |
| `amount_max` | string | — | Maximum QEV |
| `cursor` | string | — | Pagination cursor |
| `limit` | integer | 50 | Items per page (max 100) |
| `sort` | string | `-created_at` | Sort order |

**Response (200 OK):**

```json
{
  "data": [
    {
      "settlement_id": "st-001e8400-e29b-41d4-a716-446655440000",
      "source": "COMMERCE",
      "qev": "200.00",
      "vendor_amount": "120.00",
      "platform_amount": "30.00",
      "reward_pool_amount": "16.00",
      "leadership_amount": "10.00",
      "operational_amount": "4.00",
      "reserve": "20.00",
      "currency": "USD",
      "status": "SETTLED",
      "created_at": "2026-08-26T14:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

### 15.7 Revenue Waterfall Configuration

#### EP-ECO-012 — Get Revenue Waterfalls

| Field | Value |
|---|---|
| **ID** | EP-ECO-012 |
| **Method** | GET |
| **Path** | `/v1/economy/waterfalls` |
| **Purpose** | Get the revenue waterfall allocation rates for all revenue types |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SRS-WAL-006; SDD-1 Ch.11; KR-1 KR-ECO-014 |

**Response (200 OK):**

```json
{
  "waterfalls": [
    {
      "source": "COMMERCE",
      "rates": {
        "platform": "0.150000",
        "vendor": "0.600000",
        "reward_pool": "0.080000",
        "leadership": "0.050000",
        "operational": "0.020000",
        "reserve": "0.100000"
      },
      "allocation_rates_sum": "0.900000",
      "total_sum": "1.000000",
      "is_valid": true,
      "kr_rule_id": "KR-ECO-014"
    },
    {
      "source": "SERVICES",
      "rates": {
        "platform": "0.150000",
        "vendor": "0.600000",
        "reward_pool": "0.080000",
        "leadership": "0.050000",
        "operational": "0.020000",
        "reserve": "0.100000"
      },
      "allocation_rates_sum": "0.900000",
      "total_sum": "1.000000",
      "is_valid": true,
      "kr_rule_id": "KR-ECO-014"
    },
    {
      "source": "LEARNING",
      "rates": {
        "platform": "0.200000",
        "vendor": "0.550000",
        "reward_pool": "0.080000",
        "leadership": "0.050000",
        "operational": "0.020000",
        "reserve": "0.100000"
      },
      "allocation_rates_sum": "0.900000",
      "total_sum": "1.000000",
      "is_valid": true,
      "kr_rule_id": "KR-ECO-014"
    },
    {
      "source": "PLATFORM_FEE",
      "rates": {
        "platform": "0.650000",
        "vendor": "0.000000",
        "reward_pool": "0.150000",
        "leadership": "0.070000",
        "operational": "0.030000",
        "reserve": "0.100000"
      },
      "allocation_rates_sum": "0.900000",
      "total_sum": "1.000000",
      "is_valid": true,
      "kr_rule_id": "KR-ECO-014"
    },
    {
      "source": "PARTNER",
      "rates": {
        "platform": "0.400000",
        "vendor": "0.350000",
        "reward_pool": "0.100000",
        "leadership": "0.030000",
        "operational": "0.020000",
        "reserve": "0.100000"
      },
      "allocation_rates_sum": "0.900000",
      "total_sum": "1.000000",
      "is_valid": true,
      "kr_rule_id": "KR-ECO-014"
    }
  ],
  "is_governance_parameter": true,
  "governance_status": "PROPOSED",
  "source_document": "KR-1 KR-ECO-014, Appendix C"
}
```

> **Note:** All allocation rates are GOVERNANCE PARAMETERS — REQUIRES APPROVAL (KR-1 KR-ECO-014). The API exposes current values; it does not hard-code them. Each waterfall's allocation rates must sum to exactly 0.900000 (90%), with the reserve at 0.100000 (10%), totaling 1.000000 (100%). This invariant is verified by the `is_valid` field and enforced by check constraints at the database level (DDD-1 Ch.19).

---

### 15.8 90/10 Accounting Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-ECO-001 | GET | `/v1/economy/allocations/{id}` | Admin | Get revenue allocation |
| EP-ECO-002 | GET | `/v1/economy/allocations` | Admin | List revenue allocations |
| EP-ECO-003 | GET | `/v1/economy/reserve` | Admin | Get reserve summary |
| EP-ECO-004 | GET | `/v1/economy/reserve/allocations` | Admin | List reserve allocations |
| EP-ECO-005 | POST | `/v1/economy/reserve/release` | Admin | Release reserve |
| EP-ECO-006 | GET | `/v1/economy/reward-pool` | Admin | Get reward pool |
| EP-ECO-007 | GET | `/v1/economy/reward-pool/contributions` | Admin | List reward pool contributions |
| EP-ECO-008 | GET | `/v1/economy/reconciliations/{cycle_id}` | Admin | Get cycle reconciliation |
| EP-ECO-009 | GET | `/v1/economy/reconciliations` | Admin | List cycle reconciliations |
| EP-ECO-010 | GET | `/v1/economy/settlements/{id}` | Admin | Get settlement detail |
| EP-ECO-011 | GET | `/v1/economy/settlements` | Admin | List settlements |
| EP-ECO-012 | GET | `/v1/economy/waterfalls` | Admin | Get revenue waterfalls |

### 15.9 Governing Requirement Traceability

SRS-WAL-006 (reserve protection and 90/10 enforcement); SDD-1 Ch.11, Ch.19; DDD-1 Ch.19 (reserve_allocations append-only, check constraints on settlements enforcing QEV=GR-D, allocation_pool=90%×QEV, reserve=10%×QEV, cycle_reconciliations with AP+R=QEV check); KR-1 KR-ECO-001 (90/10 principle), KR-ECO-002 (no unfunded liability), KR-ECO-003–006 (core equations), KR-ECO-007 (no circular funding), KR-ECO-008–014 (GR, deductions, QEV, AP, R), KR-ECO-015–018 (allocation formulas, waterfall), KR-ECO-040–051 (reward pool), KR-ECO-052–056 (reserve protection and governance); PLC-1 Ch.27.

---

## Chapter 16 — Engine Registry and Extension APIs

### 16.1 Overview

The Engine Registry and Extension APIs provide a formal contract for registering, activating, and governing the Core Engines of the K-NETWORK platform, and an extension pattern for adding future engines without breaking existing APIs. The Engine Registry is the authoritative catalog of all active engines, their API contracts, event contracts, lifecycle states, and inter-engine dependencies. The platform's architecture principle of "Extensibility Through Governance" (SAD-1 Architecture Principle #8) requires that new engines be added through a governed registration process, not ad hoc (SAD-1 Engine Registry; PLC-1 Ch.12; SRS-ADM-001).

**Base path:** `/v1/integration/engines`

**Authentication:** Bearer token required for all endpoints.

**Authorization:** `admin` role for all Engine Registry endpoints. The Engine Registry is a platform governance concern — no participant, partner, or external system can register or modify engines.

### 16.2 Engine Registry

#### EP-REG-001 — List Registered Engines

| Field | Value |
|---|---|
| **ID** | EP-REG-001 |
| **Method** | GET |
| **Path** | `/v1/integration/engines` |
| **Purpose** | List all registered engines in the Engine Registry |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SAD-1 Engine Registry; PLC-1 Ch.12 |

**Response (200 OK):**

```json
{
  "data": [
    {
      "engine_id": "eng-identity",
      "engine_code": "IDM",
      "name": "Identity Engine",
      "version": "1.0.0",
      "status": "ACTIVE",
      "api_base_path": "/v1/identity",
      "event_namespace": "identity",
      "schema_name": "idm",
      "dependency_count": 0,
      "registered_at": "2026-08-01T00:00:00Z",
      "activated_at": "2026-08-01T00:00:00Z"
    },
    {
      "engine_id": "eng-trust",
      "engine_code": "TRU",
      "name": "Trust Engine",
      "version": "1.0.0",
      "status": "ACTIVE",
      "api_base_path": "/v1/trust",
      "event_namespace": "trust",
      "schema_name": "tru",
      "dependency_count": 1,
      "dependencies": ["eng-identity"],
      "registered_at": "2026-08-01T00:00:00Z",
      "activated_at": "2026-08-01T00:00:00Z"
    },
    {
      "engine_id": "eng-commerce",
      "engine_code": "COM",
      "name": "Commerce Engine",
      "version": "1.0.0",
      "status": "ACTIVE",
      "api_base_path": "/v1/commerce",
      "event_namespace": "commerce",
      "schema_name": "com",
      "dependency_count": 3,
      "dependencies": ["eng-identity", "eng-trust", "eng-wallet"],
      "registered_at": "2026-08-01T00:00:00Z",
      "activated_at": "2026-08-01T00:00:00Z"
    },
    {
      "engine_id": "eng-k-rewards",
      "engine_code": "KRW",
      "name": "K-Rewards Engine",
      "version": "1.0.0",
      "status": "ACTIVE",
      "api_base_path": "/v1/k-rewards",
      "event_namespace": "k-rewards",
      "schema_name": "krw",
      "dependency_count": 3,
      "dependencies": ["eng-identity", "eng-trust", "eng-wallet"],
      "registered_at": "2026-08-01T00:00:00Z",
      "activated_at": "2026-08-01T00:00:00Z"
    },
    {
      "engine_id": "eng-learning",
      "engine_code": "LRN",
      "name": "Learning Engine",
      "version": "1.0.0",
      "status": "ACTIVE",
      "api_base_path": "/v1/learning",
      "event_namespace": "learning",
      "schema_name": "lrn",
      "dependency_count": 4,
      "dependencies": ["eng-identity", "eng-trust", "eng-k-rewards", "eng-integration"],
      "registered_at": "2026-08-01T00:00:00Z",
      "activated_at": "2026-08-01T00:00:00Z"
    }
  ],
  "total_engines": 11,
  "active_engines": 11,
  "pagination": { ... }
}
```

---

#### EP-REG-002 — Get Engine Contract

| Field | Value |
|---|---|
| **ID** | EP-REG-002 |
| **Method** | GET |
| **Path** | `/v1/integration/engines/{engine_id}` |
| **Purpose** | Get the full contract for a registered engine (API contract, event contract, dependencies, lifecycle) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SAD-1 Engine Registry; PLC-1 Ch.12 |

**Response (200 OK):**

```json
{
  "engine_id": "eng-commerce",
  "engine_code": "COM",
  "name": "Commerce Engine",
  "version": "1.0.0",
  "status": "ACTIVE",
  "api_base_path": "/v1/commerce",
  "event_namespace": "commerce",
  "schema_name": "com",
  "lifecycle_state": "ACTIVE",
  "api_contract": {
    "endpoints_count": 29,
    "endpoint_ids": [
      "EP-COM-001", "EP-COM-002", "EP-COM-003",
      "EP-COM-004", "EP-COM-005", "EP-COM-006",
      "EP-COM-007", "EP-COM-008", "EP-COM-009",
      "EP-COM-010", "EP-COM-011", "EP-COM-012",
      "EP-COM-013", "EP-COM-014", "EP-COM-015",
      "EP-COM-016", "EP-COM-017", "EP-COM-018",
      "EP-COM-019", "EP-COM-020", "EP-COM-021",
      "EP-COM-022", "EP-COM-023", "EP-COM-024",
      "EP-COM-025", "EP-COM-026", "EP-COM-027",
      "EP-COM-028", "EP-COM-029"
    ],
    "api_spec_path": "/v1/commerce",
    "version": "v1"
  },
  "event_contract": {
    "published_events": [
      "commerce.order.created",
      "commerce.order.paid",
      "commerce.order.shipped",
      "commerce.order.delivered",
      "commerce.order.cancelled",
      "commerce.order.refunded",
      "commerce.product.created",
      "commerce.product.updated",
      "commerce.product.deleted",
      "commerce.review.created",
      "commerce.settlement.created"
    ],
    "consumed_events": [
      "identity.account.suspended",
      "identity.account.reactivated",
      "trust.score.updated",
      "wallet.hold.placed",
      "wallet.hold.released",
      "administration.sanction.created",
      "administration.sanction.lifted"
    ]
  },
  "dependencies": [
    {
      "dependency_engine_id": "eng-identity",
      "dependency_type": "REQUIRED",
      "description": "Requires participant identity for vendor/buyer accounts"
    },
    {
      "dependency_engine_id": "eng-trust",
      "dependency_type": "REQUIRED",
      "description": "Requires trust score for vendor eligibility"
    },
    {
      "dependency_engine_id": "eng-wallet",
      "dependency_type": "REQUIRED",
      "description": "Requires wallet for payment processing and settlements"
    }
  ],
  "data_ownership": {
    "schema": "com",
    "primary_tables": [
      "vendors", "stores", "products", "product_variants",
      "categories", "cart_items", "orders", "order_items",
      "shipments", "returns", "refunds", "disputes",
      "reviews", "commerce_settlements"
    ],
    "isolation": "SCHEMA_LEVEL",
    "no_cross_schema_writes": true
  },
  "registered_at": "2026-08-01T00:00:00Z",
  "activated_at": "2026-08-01T00:00:00Z",
  "last_updated_at": "2026-08-01T00:00:00Z"
}
```

---

### 16.3 Engine Lifecycle

#### EP-REG-003 — Register New Engine

| Field | Value |
|---|---|
| **ID** | EP-REG-003 |
| **Method** | POST |
| **Path** | `/v1/integration/engines` |
| **Purpose** | Register a new engine in the Engine Registry (for future engine extensions) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | ⟳ Yes |
| **Rate Limit** | Admin tier |
| **Implements** | SAD-1 Engine Registry; PLC-1 Ch.12; SAD-1 Architecture Principle #8 |

**Request:**

```json
{
  "engine_id": "eng-new-engine",
  "engine_code": "NEW",
  "name": "New Engine",
  "version": "1.0.0",
  "api_base_path": "/v1/new-engine",
  "event_namespace": "new-engine",
  "schema_name": "new",
  "dependencies": [
    {
      "dependency_engine_id": "eng-identity",
      "dependency_type": "REQUIRED",
      "description": "Requires participant identity"
    }
  ],
  "published_events": [
    "new-engine.item.created",
    "new-engine.item.updated"
  ],
  "consumed_events": [
    "identity.account.suspended"
  ],
  "data_ownership": {
    "schema": "new",
    "primary_tables": ["new_items"],
    "isolation": "SCHEMA_LEVEL"
  }
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `engine_id` | string | Yes | Unique; format `eng-{kebab-case-name}` |
| `engine_code` | string | Yes | Unique; 3-letter UPPER_SNAKE_CASE code |
| `name` | string | Yes | Min 2, max 200 chars |
| `version` | string | Yes | Semantic version (e.g., "1.0.0") |
| `api_base_path` | string | Yes | Must start with `/v1/`; unique |
| `event_namespace` | string | Yes | Unique; kebab-case |
| `schema_name` | string | Yes | Unique; must not conflict with existing schemas |
| `dependencies` | array | Yes | At minimum, dependency on `eng-identity` is required |
| `published_events` | array | No | Events this engine publishes |
| `consumed_events` | array | No | Events this engine consumes |
| `data_ownership` | object | Yes | Schema and table ownership declaration |

**Response (201 Created):**

```json
{
  "engine_id": "eng-new-engine",
  "engine_code": "NEW",
  "name": "New Engine",
  "version": "1.0.0",
  "status": "REGISTERED",
  "lifecycle_state": "REGISTERED",
  "api_base_path": "/v1/new-engine",
  "event_namespace": "new-engine",
  "schema_name": "new",
  "registered_at": "2026-08-26T14:30:00Z",
  "activated_at": null
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 409 | `ENGINE_ID_ALREADY_EXISTS` | Engine ID is already registered |
| 409 | `ENGINE_CODE_ALREADY_EXISTS` | Engine code is already in use |
| 409 | `API_BASE_PATH_ALREADY_EXISTS` | API base path conflicts with an existing engine |
| 409 | `SCHEMA_NAME_ALREADY_EXISTS` | Schema name conflicts with an existing engine |
| 422 | `MISSING_IDENTITY_DEPENDENCY` | All engines must depend on `eng-identity` |
| 422 | `CIRCULAR_DEPENDENCY` | Dependency graph would create a cycle |
| 422 | `UNRESOLVED_DEPENDENCY` | A dependency references an unregistered engine |

> **Note:** New engines start in the `REGISTERED` lifecycle state. They must pass through governance review and activation (EP-REG-004) before they become `ACTIVE` and accessible via their API base path. This enforces the "Extensibility Through Governance" architecture principle (SAD-1 Principle #8).

---

#### EP-REG-004 — Activate Engine

| Field | Value |
|---|---|
| **ID** | EP-REG-004 |
| **Method** | POST |
| **Path** | `/v1/integration/engines/{engine_id}/activate` |
| **Purpose** | Activate a registered engine (requires governance approval) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SAD-1 Engine Registry; PLC-1 Ch.12 |

**Request:**

```json
{
  "governance_approval_id": "ga-002e8400-e29b-41d4-a716-446655440000",
  "activation_notes": "Engine passed all integration tests and governance review."
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `governance_approval_id` | string (UUID) | Yes | Must be an approved governance review of type `ENGINE_EXTENSION` |
| `activation_notes` | string | Yes | Min 10, max 2000 chars |

**Response (200 OK):**

```json
{
  "engine_id": "eng-new-engine",
  "status": "ACTIVE",
  "lifecycle_state": "ACTIVE",
  "activated_at": "2026-08-26T18:00:00Z",
  "activated_by": "admin-account-id",
  "governance_approval_id": "ga-002e8400-e29b-41d4-a716-446655440000"
}
```

**Errors:**

| HTTP | Code | Description |
|---|---|---|
| 422 | `GOVERNANCE_APPROVAL_REQUIRED` | No approved governance review for this engine activation |
| 409 | `ENGINE_ALREADY_ACTIVE` | Engine is already active |
| 409 | `DEPENDENCIES_NOT_ACTIVE` | One or more dependency engines are not active |
| 422 | `DEPENDENCIES_NOT_MET` | Dependency engines are not registered or active |

---

#### EP-REG-005 — Deactivate Engine

| Field | Value |
|---|---|
| **ID** | EP-REG-005 |
| **Method** | POST |
| **Path** | `/v1/integration/engines/{engine_id}/deactivate` |
| **Purpose** | Deactivate an engine (graceful degradation — requires governance approval) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | No |
| **Rate Limit** | Admin tier |
| **Implements** | SAD-1 Engine Registry; SAD-1 Architecture Principle #9 (Resilience and Graceful Degradation) |

**Request:**

```json
{
  "governance_approval_id": "ga-003e8400-e29b-41d4-a716-446655440000",
  "reason": "Engine being deprecated for replacement in v2",
  "grace_period_hours": 168,
  "degradation_mode": "READ_ONLY"
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `governance_approval_id` | string (UUID) | Yes | Must be an approved governance review |
| `reason` | string | Yes | Min 10, max 2000 chars |
| `grace_period_hours` | integer | No | Hours before full deactivation (default: 168 = 7 days) |
| `degradation_mode` | string | No | One of: `READ_ONLY`, `DISABLED` (default: `READ_ONLY`) |

**Response (200 OK):**

```json
{
  "engine_id": "eng-new-engine",
  "status": "DEACTIVATING",
  "lifecycle_state": "DEACTIVATING",
  "degradation_mode": "READ_ONLY",
  "grace_period_hours": 168,
  "full_deactivation_at": "2026-09-02T18:00:00Z",
  "deactivated_by": "admin-account-id",
  "reason": "Engine being deprecated for replacement in v2"
}
```

> **Note:** Engine deactivation follows the "Resilience and Graceful Degradation" principle (SAD-1 Principle #9). During the grace period, the engine operates in `READ_ONLY` mode (existing data readable, no new writes). After the grace period, the engine is fully `DISABLED`. Dependent engines are notified via the event bus and may enter their own degraded modes.

---

### 16.4 Engine Dependency Graph

#### EP-REG-006 — Get Engine Dependency Graph

| Field | Value |
|---|---|
| **ID** | EP-REG-006 |
| **Method** | GET |
| **Path** | `/v1/integration/engines/dependency-graph` |
| **Purpose** | Get the full engine dependency graph (which engines depend on which) |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SAD-1 Engine Registry; SAD-1 Architecture Principle #2 (Domain Engine Boundaries) |

**Response (200 OK):**

```json
{
  "nodes": [
    {"engine_id": "eng-identity", "engine_code": "IDM", "status": "ACTIVE"},
    {"engine_id": "eng-trust", "engine_code": "TRU", "status": "ACTIVE"},
    {"engine_id": "eng-commerce", "engine_code": "COM", "status": "ACTIVE"},
    {"engine_id": "eng-services", "engine_code": "SVC", "status": "ACTIVE"},
    {"engine_id": "eng-k-rewards", "engine_code": "KRW", "status": "ACTIVE"},
    {"engine_id": "eng-wallet", "engine_code": "WAL", "status": "ACTIVE"},
    {"engine_id": "eng-communication", "engine_code": "MSG", "status": "ACTIVE"},
    {"engine_id": "eng-intelligence", "engine_code": "INT", "status": "ACTIVE"},
    {"engine_id": "eng-administration", "engine_code": "ADM", "status": "ACTIVE"},
    {"engine_id": "eng-integration", "engine_code": "IGR", "status": "ACTIVE"},
    {"engine_id": "eng-learning", "engine_code": "LRN", "status": "ACTIVE"}
  ],
  "edges": [
    {"from": "eng-trust", "to": "eng-identity", "type": "REQUIRED"},
    {"from": "eng-commerce", "to": "eng-identity", "type": "REQUIRED"},
    {"from": "eng-commerce", "to": "eng-trust", "type": "REQUIRED"},
    {"from": "eng-commerce", "to": "eng-wallet", "type": "REQUIRED"},
    {"from": "eng-services", "to": "eng-identity", "type": "REQUIRED"},
    {"from": "eng-services", "to": "eng-trust", "type": "REQUIRED"},
    {"from": "eng-services", "to": "eng-wallet", "type": "REQUIRED"},
    {"from": "eng-k-rewards", "to": "eng-identity", "type": "REQUIRED"},
    {"from": "eng-k-rewards", "to": "eng-trust", "type": "REQUIRED"},
    {"from": "eng-k-rewards", "to": "eng-wallet", "type": "REQUIRED"},
    {"from": "eng-wallet", "to": "eng-identity", "type": "REQUIRED"},
    {"from": "eng-communication", "to": "eng-identity", "type": "REQUIRED"},
    {"from": "eng-intelligence", "to": "eng-identity", "type": "REQUIRED"},
    {"from": "eng-intelligence", "to": "eng-trust", "type": "REQUIRED"},
    {"from": "eng-administration", "to": "eng-identity", "type": "REQUIRED"},
    {"from": "eng-integration", "to": "eng-identity", "type": "REQUIRED"},
    {"from": "eng-learning", "to": "eng-identity", "type": "REQUIRED"},
    {"from": "eng-learning", "to": "eng-trust", "type": "REQUIRED"},
    {"from": "eng-learning", "to": "eng-k-rewards", "type": "REQUIRED"},
    {"from": "eng-learning", "to": "eng-integration", "type": "REQUIRED"}
  ],
  "total_nodes": 11,
  "total_edges": 20,
  "is_acyclic": true,
  "root_engine": "eng-identity"
}
```

> **Note:** The dependency graph must be acyclic (no circular dependencies). The `eng-identity` engine is the root — all other engines depend on it. The graph is validated at registration time (EP-REG-003) to prevent cycles.

---

### 16.5 Engine Extension Pattern

#### EP-REG-007 — Get Extension Pattern Guide

| Field | Value |
|---|---|
| **ID** | EP-REG-007 |
| **Method** | GET |
| **Path** | `/v1/integration/engines/extension-pattern` |
| **Purpose** | Get the documented extension pattern for adding future engines |
| **Authentication** | Bearer token |
| **Authorization** | `admin` role |
| **Idempotency** | N/A (GET) |
| **Rate Limit** | Admin tier |
| **Implements** | SAD-1 Engine Registry; SAD-1 Architecture Principle #8; PLC-1 Ch.12 |

**Response (200 OK):**

```json
{
  "extension_pattern": {
    "principle": "Extensibility Through Governance",
    "principle_source": "SAD-1 Architecture Principle #8",
    "steps": [
      {
        "step": 1,
        "name": "Design",
        "description": "Design the new engine following the Domain Engine Boundaries principle. Define API contract, event contract, data ownership schema, and dependencies.",
        "requirements": [
          "API base path under /v1/{engine-name}",
          "Unique 3-letter engine code",
          "Dedicated PostgreSQL schema",
          "Dependency on eng-identity (required)",
          "Event namespace under {engine-name}.*",
          "All endpoints follow API-1 conventions (money as string decimal, cursor pagination, standard error envelope, etc.)"
        ]
      },
      {
        "step": 2,
        "name": "Register",
        "description": "Register the engine in the Engine Registry via EP-REG-003. The engine enters REGISTERED state.",
        "requirements": [
          "Unique engine_id, engine_code, api_base_path, schema_name",
          "No circular dependencies",
          "All dependencies are registered"
        ]
      },
      {
        "step": 3,
        "name": "Governance Review",
        "description": "Submit a governance review (EP-ADM-002) of type ENGINE_EXTENSION. The governance committee reviews the engine contract, dependencies, and data ownership.",
        "requirements": [
          "Governance review approved (EP-ADM-003 with decision=APPROVED)",
          "All dependency engines are ACTIVE"
        ]
      },
      {
        "step": 4,
        "name": "Activate",
        "description": "Activate the engine via EP-REG-004 with the governance approval. The engine transitions to ACTIVE state and its API becomes accessible.",
        "requirements": [
          "Governance approval ID provided",
          "All dependencies are ACTIVE"
        ]
      },
      {
        "step": 5,
        "name": "Monitor",
        "description": "Monitor the engine via the Engine Registry and observability tools. The engine participates in the event bus and follows all platform-wide conventions.",
        "requirements": [
          "Events published to the event bus",
          "Audit logging enabled",
          "Health checks registered",
          "Rate limits configured"
        ]
      }
    ],
    "constraints": [
      "All engines must depend on eng-identity",
      "No engine may expose APIs directly to external systems except eng-integration (PLC-1 Ch.31.2)",
      "Each engine owns its data schema exclusively — no cross-schema writes",
      "Inter-engine communication is via the event bus (async) or API Gateway (sync)",
      "All monetary values must use string decimal representation",
      "All endpoints must follow the API-1 conventions defined in Chapters 2–3",
      "Engine deactivation requires governance approval and follows graceful degradation"
    ]
  }
}
```

---

### 16.6 Engine Registry Endpoint Summary

| ID | Method | Path | Auth | Purpose |
|---|---|---|---|---|
| EP-REG-001 | GET | `/v1/integration/engines` | Admin | List registered engines |
| EP-REG-002 | GET | `/v1/integration/engines/{id}` | Admin | Get engine contract |
| EP-REG-003 | POST | `/v1/integration/engines` | Admin | Register new engine |
| EP-REG-004 | POST | `/v1/integration/engines/{id}/activate` | Admin | Activate engine |
| EP-REG-005 | POST | `/v1/integration/engines/{id}/deactivate` | Admin | Deactivate engine |
| EP-REG-006 | GET | `/v1/integration/engines/dependency-graph` | Admin | Get dependency graph |
| EP-REG-007 | GET | `/v1/integration/engines/extension-pattern` | Admin | Get extension pattern guide |

### 16.7 Governing Requirement Traceability

SAD-1 Engine Registry; SAD-1 Architecture Principles #2 (Domain Engine Boundaries), #8 (Extensibility Through Governance), #9 (Resilience and Graceful Degradation); PLC-1 Ch.12 (Core Engines), Ch.31.2 (Integration Engine as sole gateway); SRS-ADM-001 (governance reviews).

---

## Chapter 17 — Traceability Matrices

### 17.1 Overview

This chapter provides traceability from the governing source documents to the API-1 endpoint specifications. Every endpoint in API-1 traces upward to requirements in SRS-1, architectural components in SAD-1, data models in SDD-1, database schemas in DDD-1, platform constitution clauses in PLC-1, and K-Rewards policy rules in KR-1. In any conflict, the parent document prevails; API-1 must be corrected (API-1 precedence: PLC-1 > KR-1 > BRD-1 > SRS-1 > SAD-1 > SDD-1 > DDD-1 > API-1).

### 17.2 SRS-1 → API-1 Traceability Matrix

| SRS Requirement | Description | API-1 Endpoint(s) |
|---|---|---|
| SRS-IDM-001 | Single account per participant | EP-IDM-001, EP-IDM-006 |
| SRS-IDM-002 | Registration and email verification | EP-IDM-001, EP-IDM-002 |
| SRS-IDM-003 | Authentication and MFA | EP-IDM-003, EP-IDM-008, EP-IDM-012, EP-IDM-013 |
| SRS-IDM-004 | Session management | EP-IDM-003, EP-IDM-004, EP-IDM-005 |
| SRS-IDM-005 | KYC verification | EP-IDM-009, EP-IDM-010, EP-IDM-011 |
| SRS-IDM-006 | KYC/AML compliance | EP-IDM-009, EP-IDM-011, EP-IDM-014, EP-IDM-015 |
| SRS-IDM-007 | Shared identity across engines | EP-IDM-006, EP-IDM-007, EP-IDM-016 |
| SRS-TRU-001 | Multi-signal trust score | EP-TRU-001, EP-TRU-002 |
| SRS-TRU-002 | Trust-gated eligibility | EP-TRU-003, EP-TRU-006 |
| SRS-TRU-003 | Trust recovery | EP-TRU-005 |
| SRS-TRU-004 | Trust protection | EP-TRU-001, EP-TRU-006 |
| SRS-TRU-005 | Marketplace trust signals | EP-TRU-003, EP-TRU-004 |
| SRS-COM-001 | Vendor registration | EP-COM-001, EP-COM-002, EP-COM-003 |
| SRS-COM-002 | Product management | EP-COM-006, EP-COM-007, EP-COM-008, EP-COM-009 |
| SRS-COM-003 | Variants | EP-COM-010 |
| SRS-COM-004 | Inventory | EP-COM-007, EP-COM-014 |
| SRS-COM-005 | Storefronts | EP-COM-004, EP-COM-005 |
| SRS-COM-006 | Catalogue | EP-COM-012 |
| SRS-COM-007 | Search | EP-COM-011, EP-COM-013 |
| SRS-COM-008 | Filtering | EP-COM-011 |
| SRS-COM-009 | Discovery | EP-COM-011, EP-COM-012 |
| SRS-COM-010 | Checkout | EP-COM-017 |
| SRS-COM-011 | Refunds | EP-COM-024 |
| SRS-COM-012 | Disputes | EP-COM-025, EP-COM-026 |
| SRS-COM-013 | Reviews | EP-COM-027, EP-COM-028 |
| SRS-COM-014 | Promotions | EP-COM-017 |
| SRS-COM-015 | Settlement | EP-COM-029 |
| SRS-COM-016 | Multi-currency | EP-COM-006, EP-COM-017 |
| SRS-COM-017 | Vendor dashboard | EP-COM-002, EP-COM-018 |
| SRS-COM-018 | Category management | EP-COM-012 |
| SRS-COM-019 | Search/filtering | EP-COM-011 |
| SRS-COM-020 | Payment integration | EP-COM-017, EP-WAL-004 |
| SRS-COM-021 | Shipping integration | EP-COM-021, EP-COM-022 |
| SRS-COM-022 | 90/10 settlement | EP-COM-029, EP-ECO-001, EP-ECO-010 |
| SRS-SVC-001 | Provider registration | EP-SVC-001, EP-SVC-002, EP-SVC-004 |
| SRS-SVC-002 | Provider profiles | EP-SVC-002, EP-SVC-003, EP-SVC-004 |
| SRS-SVC-003 | Skills | EP-SVC-005, EP-SVC-006 |
| SRS-SVC-004 | Portfolios | EP-SVC-007 |
| SRS-SVC-005 | Service listings | EP-SVC-008, EP-SVC-009, EP-SVC-010 |
| SRS-SVC-006 | Service packages | EP-SVC-011 |
| SRS-SVC-007 | Pricing models | EP-SVC-008, EP-SVC-011 |
| SRS-SVC-008 | Client requests | EP-SVC-012, EP-SVC-013 |
| SRS-SVC-009 | Contracts | EP-SVC-014, EP-SVC-015, EP-SVC-016 |
| SRS-SVC-010 | Booking/scheduling | EP-SVC-014 |
| SRS-SVC-011 | Milestones | EP-SVC-017, EP-SVC-018, EP-SVC-019 |
| SRS-SVC-012 | Deliveries | EP-SVC-017, EP-SVC-018 |
| SRS-SVC-013 | Disputes | EP-SVC-020, EP-SVC-021 |
| SRS-SVC-014 | Reviews | EP-SVC-022 |
| SRS-SVC-015 | Provider reputation | EP-SVC-002, EP-SVC-003 |
| SRS-SVC-016 | Settlement | EP-SVC-023 |
| SRS-SVC-017 | Multi-currency | EP-SVC-008, EP-SVC-013 |
| SRS-SVC-018 | 90/10 settlement | EP-SVC-023, EP-ECO-001, EP-ECO-010 |
| SRS-SVC-019 | Provider dashboard | EP-SVC-002, EP-SVC-016 |
| SRS-KRW-001 | K-Points | EP-KRW-001, EP-KRW-002, EP-KRW-003 |
| SRS-KRW-002 | K-Points categories | EP-KRW-001 |
| SRS-KRW-003 | K-Rings | EP-KRW-004, EP-KRW-005, EP-KRW-011 |
| SRS-KRW-004 | Ring structure | EP-KRW-004 |
| SRS-KRW-005 | K-Levels | EP-KRW-006, EP-KRW-007 |
| SRS-KRW-006 | K-Level progression | EP-KRW-007 |
| SRS-KRW-007 | Leadership qualification | EP-KRW-008, EP-KRW-009, EP-KRW-010 |
| SRS-KRW-008 | Leadership gap | EP-KRW-010 |
| SRS-KRW-009 | Reward cycles | EP-KRW-015 |
| SRS-KRW-010 | Reward statements | EP-KRW-016, EP-KRW-017 |
| SRS-KRW-011 | Reward share | EP-KRW-016 |
| SRS-KRW-012 | Reward distribution | EP-KRW-016, EP-WAL-002 |
| SRS-KRW-013 | K-Points reversal | EP-KRW-002, EP-WAL-011 |
| SRS-KRW-014 | Ring maintenance | EP-KRW-004, EP-KRW-006 |
| SRS-KRW-015 | Governance parameters | EP-KRW-014, EP-ECO-012 |
| SRS-ROY-001 | Royal Identity | EP-KRW-012, EP-KRW-013 |
| SRS-ROY-002 | Username | EP-KRW-012 |
| SRS-ROY-003 | Coronation eligibility | EP-KRW-018 |
| SRS-ROY-004 | Coronation verification | EP-KRW-018 |
| SRS-ROY-005 | Coronation recognition | EP-KRW-019 |
| SRS-WAL-001 | Wallet creation | EP-WAL-001 |
| SRS-WAL-002 | Transaction recording | EP-WAL-002, EP-WAL-003 |
| SRS-WAL-003 | Deposits | EP-WAL-004 |
| SRS-WAL-004 | Withdrawals | EP-WAL-005 |
| SRS-WAL-005 | Payment methods | EP-WAL-006, EP-WAL-007, EP-WAL-008 |
| SRS-WAL-006 | Reserve protection | EP-WAL-013, EP-WAL-014, EP-ECO-003, EP-ECO-004, EP-ECO-005 |
| SRS-WAL-007 | Settlements | EP-WAL-010, EP-ECO-010, EP-ECO-011 |
| SRS-WAL-008 | Reversals | EP-WAL-011 |
| SRS-WAL-009 | Wallet configuration | EP-WAL-012 |
| SRS-WAL-010 | Multi-currency | EP-WAL-001, EP-WAL-012 |
| SRS-WAL-011 | Escrow/holds | EP-WAL-009 |
| SRS-WAL-012 | Reward distribution | EP-WAL-002, EP-KRW-016 |
| SRS-WAL-013 | Transaction integrity | EP-WAL-003 |
| SRS-WAL-014 | Audit trail | EP-WAL-003, EP-IGR-017 |
| SRS-MSG-001 | Notifications | EP-MSG-001, EP-MSG-002, EP-MSG-003 |
| SRS-MSG-002 | Notification preferences | EP-MSG-004, EP-MSG-005 |
| SRS-MSG-003 | Messages | EP-MSG-006, EP-MSG-007 |
| SRS-MSG-004 | Announcements | EP-MSG-008 |
| SRS-INT-001 | Behavioral signal collection | EP-INT-001, EP-INT-002 |
| SRS-INT-002 | Recommendations | EP-INT-003, EP-INT-004 |
| SRS-INT-003 | Fraud detection | EP-INT-005, EP-INT-006, EP-INT-007, EP-INT-009 |
| SRS-INT-004 | Analytics | EP-INT-008 |
| SRS-ADM-001 | Governance reviews | EP-ADM-001, EP-ADM-002, EP-ADM-003 |
| SRS-ADM-002 | Policy enforcement | EP-ADM-004 |
| SRS-ADM-003 | Content moderation | EP-ADM-005, EP-ADM-006 |
| SRS-ADM-004 | Sanctions | EP-ADM-007, EP-ADM-008, EP-ADM-009 |
| SRS-ADM-005 | Appeals | EP-ADM-010, EP-ADM-011, EP-ADM-012 |
| SRS-ADM-006 | Compliance flags | EP-ADM-013, EP-ADM-014 |
| SRS-ADM-007 | Audit trail | EP-IGR-017 |
| SRS-ADM-008 | Admin dashboard | EP-INT-008 |
| SRS-IGR-001 | Partner registration | EP-IGR-001, EP-IGR-002 |
| SRS-IGR-002 | OAuth/OIDC | EP-IGR-004, EP-IGR-005, EP-IGR-006 |
| SRS-IGR-003 | API keys | EP-IGR-007, EP-IGR-008, EP-IGR-009 |
| SRS-IGR-004 | Webhook subscriptions | EP-IGR-010, EP-IGR-011, EP-IGR-012, EP-IGR-013 |
| SRS-IGR-005 | Event delivery | EP-IGR-014, EP-IGR-015 |
| SRS-IGR-006 | API versioning | EP-IGR-016 |
| SRS-IGR-007 | Tenant isolation | EP-IGR-017 |
| SRS-IGR-008 | Audit logging | EP-IGR-017 |
| SRS-IGR-009 | Rate limiting | EP-IGR-018 |
| SRS-IGR-010 | Partner dashboard | EP-IGR-002, EP-IGR-018 |
| SRS-LRN-001 | Instructor registration | EP-LRN-001, EP-LRN-002, EP-LRN-003, EP-LRN-004 |
| SRS-LRN-002 | Course creation | EP-LRN-005, EP-LRN-006, EP-LRN-007, EP-LRN-008 |
| SRS-LRN-003 | Programs | EP-LRN-010 |
| SRS-LRN-004 | Modules and lessons | EP-LRN-011, EP-LRN-012 |
| SRS-LRN-005 | Course search | EP-LRN-006, EP-LRN-009 |
| SRS-LRN-006 | Enrollment | EP-LRN-013, EP-LRN-014, EP-LRN-015 |
| SRS-LRN-007 | Progress tracking | EP-LRN-014, EP-LRN-016 |
| SRS-LRN-008 | Quizzes | EP-LRN-017, EP-LRN-018 |
| SRS-LRN-009 | Assignments | EP-LRN-019, EP-LRN-020 |
| SRS-LRN-010 | Completion tracking | EP-LRN-016 |
| SRS-LRN-011 | Certificates | EP-LRN-021, EP-LRN-022 |
| SRS-LRN-012 | Reviews | EP-LRN-023, EP-LRN-024 |
| SRS-LRN-013 | Learning K-Points integration | EP-LRN-016 |
| SRS-LRN-014 | External media integration | EP-LRN-012 |
| SRS-LRN-015 | Learning analytics | EP-LRN-025 |
| SRS-LRN-016 | Instructor analytics | EP-LRN-026 |
| SRS-LRN-017 | Learning settlements | EP-LRN-013, EP-ECO-001 |

### 17.3 SAD-1 → API-1 Traceability Matrix

| SAD-1 Component | Description | API-1 Reference |
|---|---|---|
| API Gateway | Sole inbound boundary | Ch.3, EP-IGR-001–018 |
| Event Bus | Async inter-engine communication | Ch.3, Ch.16 (event contracts) |
| Identity Engine | Authentication, KYC, sessions | Ch.4 (EP-IDM-001–016) |
| Trust Engine | Trust scores, signals, gates | Ch.5 (EP-TRU-001–006) |
| Commerce Engine | Marketplace, orders, settlements | Ch.7 (EP-COM-001–029) |
| Services Engine | Professional services marketplace | Ch.8 (EP-SVC-001–023) |
| K-Rewards Engine | Points, rings, levels, rewards | Ch.9 (EP-KRW-001–019) |
| Wallet/Payments Engine | Financial movements, settlements | Ch.10 (EP-WAL-001–014) |
| Communication Engine | Notifications, messages | Ch.6 (EP-MSG-001–008) |
| Intelligence Engine | Behavioral analysis, fraud detection | Ch.11 (EP-INT-001–009) |
| Administration Engine | Governance, sanctions, moderation | Ch.12 (EP-ADM-001–014) |
| Integration Engine | External gateway, OAuth, webhooks | Ch.13 (EP-IGR-001–018) |
| Learning Engine | Courses, enrollment, certificates | Ch.14 (EP-LRN-001–026) |
| Engine Registry | Engine contracts, lifecycle, dependencies | Ch.16 (EP-REG-001–007) |
| Zero Trust Security | AuthN/AuthZ on every request | Ch.3 |
| Observability | Request tracing, audit logging | Ch.3, EP-IGR-017 |
| ADR-005 | External media for Learning | Ch.14, EP-LRN-012 |
| ADR-008 | Zero trust security model | Ch.3 |
| Architecture Principle #2 | Domain Engine Boundaries | Ch.16 |
| Architecture Principle #8 | Extensibility Through Governance | Ch.16, EP-REG-003 |
| Architecture Principle #9 | Resilience and Graceful Degradation | Ch.16, EP-REG-005 |

### 17.4 SDD-1 → API-1 Traceability Matrix

| SDD-1 Chapter | Data Models/Algorithms | API-1 Chapter |
|---|---|---|
| SDD-1 Ch.4 | Commerce data models | Ch.7 |
| SDD-1 Ch.5 | Services data models | Ch.8 |
| SDD-1 Ch.6 | Identity data models | Ch.4 |
| SDD-1 Ch.7 | Trust data models | Ch.5 |
| SDD-1 Ch.10 | K-Rewards algorithms | Ch.9 |
| SDD-1 Ch.12 | Wallet/Payments algorithms | Ch.10 |
| SDD-1 Ch.13 | Communication data models | Ch.6 |
| SDD-1 Ch.14 | Intelligence algorithms | Ch.11 |
| SDD-1 Ch.15 | Administration algorithms | Ch.12 |
| SDD-1 Ch.16 | Integration/Learning algorithms | Ch.13, Ch.14 |
| SDD-1 Ch.17 | Royal Identity data models | Ch.9 |
| SDD-1 Ch.18 | K-Rings graph algorithms | Ch.9 |

### 17.5 PLC-1 → API-1 Traceability Matrix

| PLC-1 Clause | Description | API-1 Reference |
|---|---|---|
| PLC-1 Ch.12 | Core Engines definition | Ch.4–16 (all engine APIs) |
| PLC-1 Ch.13 | Identity and accounts | Ch.4 |
| PLC-1 Ch.20 | Governance framework | Ch.12 |
| PLC-1 Ch.22 | Royal Leadership Identity | Ch.9 (EP-KRW-012, EP-KRW-013) |
| PLC-1 Ch.27 | 90/10 economic principle | Ch.15 |
| PLC-1 Ch.28 | Commerce engine | Ch.7 |
| PLC-1 Ch.29 | Services engine | Ch.8 |
| PLC-1 Ch.30 | Learning engine | Ch.14 |
| PLC-1 Ch.31 | Integration engine | Ch.13 |
| PLC-1 Ch.31.2 | Integration Engine as sole gateway | Ch.3, Ch.13 |

### 17.6 KR-1 → API-1 Traceability Matrix

| KR-1 Rule | Description | API-1 Reference |
|---|---|---|
| KR-PNT-001–025 | K-Points system | EP-KRW-001, EP-KRW-002, EP-KRW-003 |
| KR-RNG-001–017 | K-Rings system | EP-KRW-004, EP-KRW-005, EP-KRW-011 |
| KR-RNG-008 | Ring weights (GOVERNANCE PARAMETER) | EP-KRW-004, EP-KRW-014 |
| KR-RNG-009 | Ring density gates (GOVERNANCE PARAMETER) | EP-KRW-004, EP-KRW-014 |
| KR-LVL-001–040 | K-Levels system | EP-KRW-006, EP-KRW-007, EP-KRW-008, EP-KRW-010 |
| KR-LVL-005 | Leadership Multiplication | EP-KRW-009, EP-KRW-010 |
| KR-LVL-009 | Progression Matrix (GOVERNANCE PARAMETER) | EP-KRW-007 |
| KR-LVL-015 | Unlock requirements | EP-KRW-008, EP-KRW-010 |
| KR-RWD-001 | Reward Share formula | EP-KRW-016 |
| KR-ECO-001 | 90/10 Principle | Ch.15 (all EP-ECO endpoints) |
| KR-ECO-014 | Allocation rates (GOVERNANCE PARAMETER) | EP-ECO-012, EP-KRW-014 |
| KR-ECO-040–051 | Reward Pool | EP-ECO-006, EP-ECO-007 |
| KR-ECO-052–056 | Reserve protection | EP-ECO-003, EP-ECO-004, EP-ECO-005, EP-WAL-013, EP-WAL-014 |
| KR-ECO-057–063 | Reversals | EP-WAL-011 |
| KR-COR-001+ | Coronation | EP-KRW-018, EP-KRW-019 |
| KR-FND-018 | Learning integration | Ch.14, EP-LRN-016 |
| KR-FND-020 | K-Rewards/Wallet authority boundary | Ch.9, Ch.10 |

---

# Appendices

## Appendix A — Error Code Catalog

### A.1 Standard Error Codes

All API errors use the standard error envelope defined in Chapter 2. The following table catalogs all error codes used across the API-1 specification.

| Code | HTTP Status | Description |
|---|---|---|
| `VALIDATION_ERROR` | 400 | Request body or query parameters failed validation |
| `INVALID_REQUEST` | 400 | Malformed request (missing required header, invalid JSON) |
| `UNAUTHORIZED` | 401 | Authentication token is missing, expired, or invalid |
| `INVALID_CREDENTIALS` | 401 | Email or password is incorrect |
| `INVALID_REFRESH_TOKEN` | 401 | Refresh token is invalid or expired |
| `REFRESH_TOKEN_REVOKED` | 401 | Refresh token has been revoked |
| `INVALID_MFA_CODE` | 401 | MFA code is incorrect |
| `MFA_REQUIRED` | 401 | MFA code is required but not provided |
| `INVALID_CLIENT` | 401 | OAuth client ID or secret is invalid |
| `CLIENT_NOT_ACTIVE` | 401 | Partner application is not active |
| `INVALID_CURRENT_PASSWORD` | 401 | Current password is incorrect during password change |
| `FORBIDDEN` | 403 | Authenticated but not authorized to access this resource |
| `KYC_INSUFFICIENT` | 403 | Account KYC tier is below the required level |
| `TRUST_GATE_NOT_MET` | 403 | Trust score is below the required threshold |
| `ACCOUNT_SUSPENDED` | 403 | Account is suspended |
| `ACCOUNT_DELETED` | 403 | Account is soft-deleted |
| `ACCOUNT_LOCKED` | 423 | Account is temporarily locked due to too many failed attempts |
| `NOT_VERIFIED_PURCHASE` | 403 | No completed order for this product (reviews) |
| `NOT_COMPLETED_COURSE` | 403 | Must complete the course before reviewing |
| `NOT_REQUEST_OWNER` | 403 | Caller is not the owner of the service request |
| `NOT_OWNED` | 403 | Resource does not belong to the authenticated user |
| `ACCOUNT_BLOCKED` | 403 | Recipient has blocked the sender (messages) |
| `INVALID_GRANT_TYPE` | 400 | OAuth grant type is not supported |
| `INVALID_SCOPE` | 400 | Requested OAuth scope is not approved for this partner |
| `NOT_FOUND` | 404 | Resource does not exist |
| `ACCOUNT_NOT_FOUND` | 404 | Recipient account does not exist |
| `PRODUCT_NOT_FOUND` | 404 | Product does not exist or is not active |
| `VARIANT_NOT_FOUND` | 404 | Variant does not exist |
| `CATEGORY_NOT_FOUND` | 404 | Category ID does not exist |
| `TOKEN_NOT_FOUND` | 404 | Verification token does not exist |
| `METHOD_NOT_ALLOWED` | 405 | HTTP method not allowed for this endpoint |
| `CONFLICT` | 409 | Request conflicts with current state |
| `EMAIL_ALREADY_EXISTS` | 409 | Email already registered (active account) |
| `PHONE_ALREADY_EXISTS` | 409 | Phone already registered (active account) |
| `VENDOR_ALREADY_EXISTS` | 409 | Account already has an active vendor registration |
| `PROVIDER_ALREADY_EXISTS` | 409 | Account already has an active provider registration |
| `INSTRUCTOR_ALREADY_EXISTS` | 409 | Account already has an active instructor registration |
| `SLUG_ALREADY_EXISTS` | 409 | Store slug is already in use |
| `SKU_ALREADY_EXISTS` | 409 | SKU already exists in this store |
| `ALREADY_VERIFIED` | 409 | Email already verified |
| `KYC_ALREADY_PENDING` | 409 | A KYC verification is already pending for this account |
| `ALREADY_ENROLLED` | 409 | Already enrolled in this course |
| `ALREADY_PUBLISHED` | 409 | Course is already published |
| `REVIEW_ALREADY_EXISTS` | 409 | Already reviewed this product/course |
| `PROPOSAL_ALREADY_ACCEPTED` | 409 | Proposal has already been accepted |
| `INVALID_STATE_TRANSITION` | 409 | Resource cannot transition to the requested state |
| `PAYMENT_METHOD_IN_USE` | 409 | Payment method is used in a pending transaction |
| `SANCTION_NOT_APPEALABLE` | 409 | Sanction is not appealable |
| `APPEAL_ALREADY_EXISTS` | 409 | An appeal already exists for this sanction |
| `ENGINE_ID_ALREADY_EXISTS` | 409 | Engine ID is already registered |
| `ENGINE_CODE_ALREADY_EXISTS` | 409 | Engine code is already in use |
| `API_BASE_PATH_ALREADY_EXISTS` | 409 | API base path conflicts with an existing engine |
| `SCHEMA_NAME_ALREADY_EXISTS` | 409 | Schema name conflicts with an existing engine |
| `ENGINE_ALREADY_ACTIVE` | 409 | Engine is already active |
| `GONE` | 410 | Resource is permanently gone |
| `TOKEN_EXPIRED` | 410 | Verification token has expired |
| `UNPROCESSABLE` | 422 | Request is well-formed but semantically invalid |
| `INVALID_REFERRAL_CODE` | 422 | Referral code does not match an active account |
| `TERMS_NOT_ACCEPTED` | 422 | `accept_terms` is not `true` |
| `TIER_NOT_INCREMENTAL` | 422 | Cannot skip KYC tiers |
| `OUT_OF_STOCK` | 422 | Requested quantity exceeds available inventory |
| `VARIANT_REQUIRED` | 422 | Product has variants but no variant_id provided |
| `CART_EMPTY` | 422 | Cart has no items |
| `PAYMENT_FAILED` | 422 | Payment method could not be charged |
| `INVALID_PROMO_CODE` | 422 | Promo code is invalid or expired |
| `INSUFFICIENT_BALANCE` | 422 | Available balance is less than the withdrawal amount + fee |
| `WITHDRAWAL_LIMIT_EXCEEDED` | 422 | Amount exceeds daily or monthly withdrawal limit |
| `NO_REVISIONS_REMAINING` | 422 | All included revisions have been used |
| `MILESTONE_NOT_DELIVERED` | 422 | Milestone has not been delivered yet |
| `MILESTONE_ALREADY_ACCEPTED` | 422 | Milestone has already been accepted |
| `COURSE_INCOMPLETE` | 422 | Course has no modules or lessons; cannot be published |
| `APPEAL_DEADLINE_PASSED` | 422 | The appeal deadline has passed |
| `GOVERNANCE_APPROVAL_REQUIRED` | 422 | No approved governance review for this action |
| `ALLOCATION_ALREADY_RELEASED` | 422 | One or more reserve allocations have already been released |
| `INVALID_DESTINATION` | 422 | Destination is not a valid release destination |
| `MISSING_IDENTITY_DEPENDENCY` | 422 | All engines must depend on eng-identity |
| `CIRCULAR_DEPENDENCY` | 422 | Dependency graph would create a cycle |
| `UNRESOLVED_DEPENDENCY` | 422 | A dependency references an unregistered engine |
| `DEPENDENCIES_NOT_MET` | 422 | Dependency engines are not registered or active |
| `DEPENDENCIES_NOT_ACTIVE` | 422 | One or more dependency engines are not active |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests; rate limit exceeded |
| `INTERNAL_ERROR` | 500 | Internal server error |
| `BAD_GATEWAY` | 502 | Bad gateway (upstream service error) |
| `SERVICE_UNAVAILABLE` | 503 | Service temporarily unavailable |
| `GATEWAY_TIMEOUT` | 504 | Gateway timeout |

---

## Appendix B — Scope Catalog

### B.1 OAuth Scopes

Partners request scopes during OAuth authorization. Scopes are granted per partner and enforced on every API call through the Integration Engine.

| Scope | Engine | Access Level | Description |
|---|---|---|---|
| `identity:read` | Identity | Read | Read account profile information |
| `commerce:read` | Commerce | Read | Read products, stores, orders, reviews |
| `commerce:write` | Commerce | Write | Create/update products, orders, reviews |
| `services:read` | Services | Read | Read service listings, providers, contracts |
| `services:write` | Services | Write | Create/update service listings, proposals |
| `learning:read` | Learning | Read | Read courses, instructors, reviews |
| `learning:write` | Learning | Write | Create/update courses, lessons, enrollments |
| `k-rewards:read` | K-Rewards | Read | Read K-Points, rings, levels, reward statements |
| `wallet:read` | Wallet | Read | Read wallet balance, transactions |
| `wallet:write` | Wallet | Write | Create deposits, withdrawals, manage payment methods |
| `trust:read` | Trust | Read | Read trust scores and tiers |
| `communication:read` | Communication | Read | Read notifications, messages |
| `communication:write` | Communication | Write | Send messages, update preferences |
| `webhooks:manage` | Integration | Write | Create/update/delete webhook subscriptions |
| `events:subscribe` | Integration | Write | Subscribe to platform events |
| `economy:read` | Economy | Read (admin) | Read 90/10 accounting data (admin only) |
| `administration:read` | Administration | Read (admin) | Read governance, sanctions, moderation data |
| `administration:write` | Administration | Write (admin) | Create/resolve governance reviews, sanctions |

### B.2 Scope Hierarchy

- `:write` scopes implicitly include `:read` scope for the same engine.
- `economy:read` and `administration:read`/`:write` are admin-only scopes and cannot be granted to external partners.
- Partners can only request scopes that have been approved for their application (EP-IGR-001).

---

## Appendix C — Rate Limit Catalog

### C.1 Rate Limit Tiers

| Tier | Limit | Window | Applicable To |
|---|---|---|---|
| Public | 100 requests | 60 seconds | Unauthenticated endpoints, public catalog browsing |
| Standard | 1,000 requests | 60 seconds | Authenticated participants |
| High | 5,000 requests | 60 seconds | Vendors, providers, instructors (catalog management) |
| Partner | 500 requests | 60 seconds | Partner applications (OAuth/API key) |
| Admin | 10,000 requests | 60 seconds | Platform administrators, compliance officers |
| Burst | 50 requests | 1 second | All tiers (burst protection) |

### C.2 Rate Limit Headers

| Header | Description |
|---|---|
| `X-RateLimit-Limit` | Maximum requests allowed in the current window |
| `X-RateLimit-Remaining` | Requests remaining in the current window |
| `X-RateLimit-Reset` | ISO 8601 timestamp when the rate limit window resets |
| `Retry-After` | Seconds to wait before retrying (returned with 429 responses only) |

### C.3 Rate Limit Enforcement

- Rate limits are enforced per API key, per OAuth token, or per IP address (for public endpoints).
- Rate limits are applied at the API Gateway / Integration Engine layer before requests reach engine services.
- When a rate limit is exceeded, the API returns a `429 Too Many Requests` response with the `Retry-After` header.
- Burst limits prevent sudden spikes within any 1-second window regardless of the 60-second window limit.

---

## Appendix D — Event Catalog

### D.1 Platform Events

The following events are published to the event bus and can be subscribed to via webhooks (EP-IGR-011). Event names follow the `{namespace}.{entity}.{action}` pattern.

| Event Name | Publisher Engine | Description |
|---|---|---|
| `identity.account.created` | Identity | New account registered |
| `identity.account.verified` | Identity | Email verified |
| `identity.account.suspended` | Identity | Account suspended (admin) |
| `identity.account.reactivated` | Identity | Account reactivated (admin) |
| `identity.kyc.submitted` | Identity | KYC verification submitted |
| `identity.kyc.approved` | Identity | KYC verification approved |
| `identity.kyc.rejected` | Identity | KYC verification rejected |
| `trust.score.updated` | Trust | Trust score recalculated |
| `trust.score.frozen` | Trust | Trust score frozen (sanction) |
| `commerce.order.created` | Commerce | New order placed |
| `commerce.order.paid` | Commerce | Order payment confirmed |
| `commerce.order.shipped` | Commerce | Order shipped |
| `commerce.order.delivered` | Commerce | Order delivered |
| `commerce.order.cancelled` | Commerce | Order cancelled |
| `commerce.order.refunded` | Commerce | Order refunded |
| `commerce.product.created` | Commerce | Product created |
| `commerce.product.updated` | Commerce | Product updated |
| `commerce.product.deleted` | Commerce | Product soft-deleted |
| `commerce.review.created` | Commerce | Product review created |
| `commerce.settlement.created` | Commerce | Commerce settlement created |
| `services.request.created` | Services | Service request created |
| `services.proposal.submitted` | Services | Proposal submitted |
| `services.contract.created` | Services | Contract created (proposal accepted) |
| `services.milestone.delivered` | Services | Milestone delivered |
| `services.milestone.accepted` | Services | Milestone accepted |
| `services.contract.completed` | Services | Contract completed |
| `services.review.created` | Services | Service review created |
| `services.settlement.created` | Services | Service settlement created |
| `k-rewards.points.accrued` | K-Rewards | K-Points accrued |
| `k-rewards.points.reversed` | K-Rewards | K-Points reversed |
| `k-rewards.level.promoted` | K-Rewards | K-Level promoted |
| `k-rewards.cycle.closed` | K-Rewards | Reward cycle closed |
| `k-rewards.reward.distributed` | K-Rewards | Reward distribution completed |
| `k-rewards.coronation.occurred` | K-Rewards | Coronation event |
| `wallet.transaction.created` | Wallet | Wallet transaction created |
| `wallet.deposit.completed` | Wallet | Deposit completed |
| `wallet.withdrawal.completed` | Wallet | Withdrawal completed |
| `wallet.hold.placed` | Wallet | Hold/escrow placed |
| `wallet.hold.released` | Wallet | Hold/escrow released |
| `wallet.settlement.created` | Wallet | Wallet settlement created |
| `wallet.reversal.processed` | Wallet | Transaction reversal processed |
| `communication.notification.sent` | Communication | Notification sent |
| `communication.message.sent` | Communication | Message sent |
| `learning.course.published` | Learning | Course published |
| `learning.enrollment.created` | Learning | Enrollment created |
| `learning.lesson.completed` | Learning | Lesson completed |
| `learning.course.completed` | Learning | Course completed |
| `learning.certificate.issued` | Learning | Certificate issued |
| `learning.review.created` | Learning | Course review created |
| `administration.sanction.created` | Administration | Sanction created |
| `administration.sanction.lifted` | Administration | Sanction lifted |
| `administration.governance_review.approved` | Administration | Governance review approved |
| `administration.moderation.resolved` | Administration | Moderation item resolved |
| `intelligence.fraud_signal.confirmed` | Intelligence | Fraud signal confirmed |
| `integration.partner.registered` | Integration | Partner application registered |
| `integration.partner.activated` | Integration | Partner application activated |
| `integration.api_key.created` | Integration | API key created |
| `integration.api_key.revoked` | Integration | API key revoked |
| `integration.webhook.created` | Integration | Webhook subscription created |
| `integration.webhook.deleted` | Integration | Webhook subscription deleted |

### D.2 Webhook Delivery Format

```json
{
  "event_id": "ev-001e8400-e29b-41d4-a716-446655440000",
  "event_type": "commerce.order.shipped",
  "event_timestamp": "2026-08-26T14:30:00Z",
  "partner_id": "pt-001e8400-e29b-41d4-a716-446655440000",
  "data": {
    "order_id": "88f1e8400-e29b-41d4-a716-446655440000",
    "order_number": 1000001,
    "tracking_number": "DHL123456789",
    "carrier": "DHL",
    "shipped_at": "2026-08-27T10:00:00Z"
  },
  "delivery_attempt": 1
}
```

### D.3 Webhook Signature

Every webhook delivery includes an `X-K-Network-Signature` header containing the HMAC-SHA256 signature of the request body, computed using the webhook signing secret. Partners must verify this signature to authenticate the delivery.

```
X-K-Network-Signature: sha256=<hex-encoded-hmac-sha256>
```

---

## Appendix E — Glossary

| Term | Definition |
|---|---|
| **90/10 Principle** | The economic principle that only 90% of Qualifying Economic Value is allocatable; 10% is a protected reserve (KR-ECO-001). |
| **Account** | A registered participant on the K-NETWORK platform, identified by a UUID `account_id`. |
| **Active Status** | The state of a participant who meets personal activity and tiered maintenance requirements and is eligible for rewards (KR-FND-006). |
| **Allocation Pool (AP)** | The portion of QEV available for allocation — 90% of QEV (KR-ECO-011). |
| **Coronation** | The formal recognition of a participant achieving a Royal Identity tier (Prince, Crown Prince, King) (KR-COR-001). |
| **Deduction (D)** | Legitimate reductions from Gross Revenue before the 90/10 split (KR-ECO-014). |
| **Engine** | A Core Platform Engine — one of the eleven domain-specific services that comprise K-NETWORK. |
| **Engine Registry** | The authoritative catalog of all registered engines, their contracts, and dependencies (SAD-1). |
| **Gross Revenue (GR)** | The total economic value of a transaction before any deductions (KR-ECO-013). |
| **Idempotency Key** | A client-generated unique key sent via the `Idempotency-Key` header to ensure state-changing operations are not duplicated. |
| **K-Level** | One of fifteen permanent progression levels measuring long-term leadership and contribution (KR-LVL-001). |
| **K-Points** | The platform's unit of measurable activity contribution, earned from genuine verified activity and reset monthly (KR-PNT-001). |
| **K-Rings** | The structural measurement of a participant's network depth and quality, determined by graph distance (KR-RNG-001). |
| **Leadership Multiplication** | The principle that a leader must develop other qualified leaders, not merely accumulate referrals (KR-LVL-005). |
| **QEV** | Qualifying Economic Value — the economic value of a transaction after legitimate deductions. QEV = GR − D (KR-ECO-010). |
| **Reserve (R)** | The protected portion of QEV — 10% of QEV. Not allocated to participants (KR-ECO-012). |
| **Reward Pool** | The pool of funds available for reward distribution in a given cycle (KR-ECO-040). |
| **Reward Share** | A participant's proportional claim on the Reward Pool, blended from four normalized pillars (KR-RWD-001). |
| **Royal Identity** | A four-title recognition model (Normal, Prince, Crown Prince, King) integrated with the K-Level system (PLC-1 Ch.22). |
| **Tenant Isolation** | The enforcement that partner data is scoped by `partner_id` and partners never see another partner's data. |
| **Trust Score** | A multi-signal reputation score (0–100) that gates K-Rewards eligibility (KR-TRU-001). |
| **Waterfall** | The complete flow of economic value from Gross Revenue through deductions, QEV, reserve, allocation pool, and final settlement (KR-ECO-018). |

---

## Appendix F — Acronyms

| Acronym | Expansion |
|---|---|
| ADM | Administration Engine |
| API | Application Programming Interface |
| AP | Allocation Pool |
| ADR | Architecture Decision Record |
| BRD | Business Requirements Document |
| COM | Commerce Engine |
| D | Deduction |
| DDD | Database Design Document |
| GR | Gross Revenue |
| HMAC | Hash-based Message Authentication Code |
| HTTP | HyperText Transfer Protocol |
| IDM | Identity Engine |
| IGR | Integration Engine |
| INT | Intelligence Engine |
| ISO | International Organization for Standardization |
| JSON | JavaScript Object Notation |
| JWT | JSON Web Token |
| KNT | K-NETWORK |
| KRW | K-Rewards Engine |
| KYC | Know Your Customer |
| LRN | Learning Engine |
| MFA | Multi-Factor Authentication |
| MSG | Communication Engine |
| OIDC | OpenID Connect |
| OAuth | Open Authorization |
| PLC | Platform Constitution |
| QEV | Qualifying Economic Value |
| RBAC | Role-Based Access Control |
| REST | Representational State Transfer |
| RLS | Row-Level Security |
| ROY | Royal Identity |
| RP | Reward Pool |
| SAD | Software Architecture Document |
| SDD | Software Design Document |
| SRS | Software Requirements Specification |
| SVC | Services Engine |
| TLS | Transport Layer Security |
| TOTP | Time-based One-Time Password |
| TRU | Trust Engine |
| UUID | Universally Unique Identifier |
| WAL | Wallet/Payments Engine |
| YAML | YAML Ain't Markup Language |

---

## Document End

This API Specification (API-1) for K-NETWORK is the unified API contract for all eleven Core Engines. It is subordinate to PLC-1, KR-1, BRD-1, SRS-1, SAD-1, SDD-1, and DDD-1. In any conflict, the parent document prevails.

**API-1 v1.0 — Draft for Governance Review**

End of Document.
