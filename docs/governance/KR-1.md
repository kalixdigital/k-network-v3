# KR-1 — K-REWARDS POLICY & GOVERNANCE FRAMEWORK

---

## DOCUMENT CONTROL BLOCK

| Element | Value |
|---|---|
| **Document ID** | KR-1 |
| **Document Title** | K-Rewards Policy & Governance Framework |
| **Document Type** | Domain Policy (Tier 1) |
| **Governing Authority** | PLC-1 — K-NETWORK Platform Constitution v2.0 |
| **Status** | Draft |
| **Version** | 3.0 |
| **Date of Issue** | 26 August 2026 |
| **Effective Date** | Pending governance approval |
| **Classification** | Confidential — Internal Governance |
| **Document Owner** | K-Rewards Governance Chair |
| **Approver** | K-NETWORK Executive Authority |
| **Review Cycle** | Annual, consolidated with platform-wide review; immediately on significant integrity finding |
| **Supersedes** | All prior KR-1 versions and compensation plan documents |

### Version History

| Version | Date | Author | Summary of Changes | Status |
|---|---|---|---|---|
| 0.1 | [Prior] | K-NETWORK Team | Initial draft — original KR-1 framework | Superseded |
| 1.0 | [Prior] | K-NETWORK Team | First published version — Five Pillars, closed-loop economy, anti-fraud, governance | Superseded |
| 2.0 | 2026-08-25 | Lead Compensation Architect / Financial Systems Architect / Governance Architect / Marketplace Economist / Risk Architect / K-Rewards Policy Director | Complete from-scratch rewrite. Rebuilt economic model with explicit 90/10 revenue waterfalls, no-unfunded-liability mechanisms, 15-level progression matrix with full leadership development requirements, K-Level leadership multiplication matrix, comprehensive anti-fraud controls, mathematical consistency audit. | Superseded |
| 2.1 | 2026-08-26 | Lead Compensation Architect / Financial Systems Architect / Governance Architect / Marketplace Economist / Risk Architect / K-Rewards Policy Director | Gap integration from Compensation Plan v1.0 analysis. Added Active Status Maintenance Framework, Level vs. Privileges distinction, Executive-tier Ring 1 requirements, Tiered Benefits & Incentives Program, Platform Economics & Sustainability model, plain-language summary, illustrative participant journey. | Superseded |
| 3.0 | 2026-08-26 | Lead Compensation Architect / Financial Systems Architect / Governance Architect / Marketplace Economist / Risk Architect / K-Rewards Policy Director | Complete from-scratch rewrite following line-by-line audit of v2.1. Eliminated all duplicate rule IDs (25+ duplicates found). Fixed mathematical errors in cross-waterfall summary table. Resolved contradictions in reserve logic, maintenance thresholds, and personal-activity monotonicity. Fixed all cross-references, glossary mappings, and appendix-body consistency. Enforced strict rule ID uniqueness. Ensured personal-activity requirements are strictly increasing at every level. Scoped 18-member ceiling to Executive-tier only. Reconciled Ch.30 and Ch.35 ring requirements. | Draft |

### Approval & Sign-Off

| Role | Name | Signature | Date | Status |
|---|---|---|---|---|
| K-Rewards Governance Chair | | | | Pending |
| Governance Review Board | | | | Pending |
| Executive Authority | | | | Pending |

### Distribution List

| Recipient | Format |
|---|---|
| K-NETWORK Executive Leadership | Digital |
| Governance Review Board | Digital |
| Product & Engineering Team | Digital |
| Platform Administrators | Digital |
| Compliance & Risk Team | Digital |
| Finance & Treasury Team | Digital |

### Related Documents

| Document ID | Title | Relationship |
|---|---|---|
| **PLC-1** | K-NETWORK Platform Constitution v2.0 | Supreme governing authority. KR-1 derives all authority from PLC-1. |
| **SRS-1** | Software Requirements Specification | Implements KR-1 policy in software; must cite specific KR-1 chapters and rule IDs. |
| **DDD-1** | Database Design Document | Data model for reward schema; subordinate to KR-1 for reward data. |
| **CMP-0** | Compliance & Regulatory Framework | Compliance requirements; compliance precedence over reward eligibility. |
| **GOV-0** | Consolidated Governance Framework | Coordinates governance across the suite; consistent with KR-1. GOV-0 defines the Governance Review Board composition and appeal escalation authority referenced by KR-1. |

### Document Control Policy

1. **Authority.** This document derives its authority from PLC-1 — K-NETWORK Platform Constitution v2.0. It is the sole authoritative source of K-Rewards policy. Every point calculation, ring assignment, level promotion, trust score, and reward payout across K-NETWORK must trace back to a rule defined in this document.

2. **Supersession.** This version supersedes all prior KR-1 versions and compensation plan documents. Where this document conflicts with a prior version, this document prevails. Where this document conflicts with PLC-1, PLC-1 prevails unconditionally.

3. **Review Cycle.** This document shall be reviewed no less frequently than annually, consolidated with the platform-wide review. Off-cycle reviews may be triggered by governance decisions, significant integrity findings, or material changes to PLC-1.

4. **Traceability.** All requirements, rules, and design decisions in this document must be traceable to their source in PLC-1. Each rule carries a unique identifier in the format KR-[DOMAIN]-###. All rule IDs in this document are unique — no ID is reused for a different rule. All downstream documents referencing K-Rewards must cite the specific KR-1 chapter and rule ID they implement.

5. **Prospective Application.** Changes to participant-facing frameworks apply prospectively only; already-achieved standing is protected under the Permanent Status Policy (KR-LVL-024).

6. **Governance Parameter Register.** Values that require governance approval before activation are labeled **GOVERNANCE PARAMETER — REQUIRES APPROVAL** and are enumerated in Appendix G — Governance Parameter Register. Proposed values are provided to enable downstream engineering, but proposed values are not approved values until governance approves them.

---

## TABLE OF CONTENTS

**Front Matter**
- Document Control Block
- Table of Contents
- Executive Statement

**Part I — Foundations & Principles**
- Chapter 1 — Purpose, Authority, and Scope
- Chapter 2 — Definitions and Terminology
- Chapter 3 — Plain-Language Summary
- Chapter 4 — K-Rewards Core Principles
- Chapter 5 — Eleven Engines and K-Rewards Authority Boundary
- Chapter 6 — The Five Pillars

**Part II — The 90/10 Economic Model**
- Chapter 7 — The 90/10 Principle
- Chapter 8 — Qualifying Economic Value
- Chapter 9 — The Allocation Structure
- Chapter 10 — Revenue Waterfalls
- Chapter 11 — Worked Numerical Examples

**Part III — No Unfunded Liability**
- Chapter 12 — Reward Pool Funding
- Chapter 13 — Pool Closure and Eligibility
- Chapter 14 — Pro-Rata Adjustment and Cap Handling
- Chapter 15 — Reserve Protection
- Chapter 16 — Reversal Mechanisms

**Part IV — K-Points System**
- Chapter 17 — K-Points Overview
- Chapter 18 — K-Points Categories
- Chapter 19 — K-Points Calculation
- Chapter 20 — Monthly Reset and Caps
- Chapter 21 — Lifetime Statistics
- Chapter 22 — K-Points Reversibility

**Part V — K-Rings System**
- Chapter 23 — K-Rings Overview
- Chapter 24 — Ring Formation and Graph Distance
- Chapter 25 — Ring Weights and Density Gates
- Chapter 26 — Ring Contribution
- Chapter 27 — Ring Maintenance and Decay
- Chapter 28 — Ring Fraud Scrutiny

**Part VI — K-Levels System**
- Chapter 29 — K-Levels Overview
- Chapter 30 — The Fifteen Levels and Five Tiers
- Chapter 31 — K-Level Progression Matrix
- Chapter 32 — K-Level Multipliers
- Chapter 33 — Unlock Requirements and Promotion
- Chapter 34 — Permanent Status Policy
- Chapter 35 — K-Level Active Maintenance

**Part VII — Leadership Multiplication**
- Chapter 36 — The Leadership Multiplication Principle
- Chapter 37 — K-Level Leadership Development Matrix
- Chapter 38 — Anti-Accumulation Enforcement
- Chapter 39 — Worked Leadership Qualification Examples

**Part VIII — K-Trust System**
- Chapter 40 — K-Trust Overview
- Chapter 41 — Trust Score and Signals
- Chapter 42 — Trust Gating
- Chapter 43 — Trust Recovery and Protection

**Part IX — Reward Share and Distribution**
- Chapter 44 — Reward Share Formula
- Chapter 45 — Reward Distribution Mechanics
- Chapter 46 — Reward Share Worked Examples

**Part X — Reward Sources**
- Chapter 47 — Rewardable Activities
- Chapter 48 — Activity Validation Framework
- Chapter 49 — Per-Activity K-Point Rules
- Chapter 50 — Learning K-Points

**Part XI — Royal Identity and Coronation**
- Chapter 51 — Royal Leadership Identity
- Chapter 52 — Coronation Eligibility and Verification
- Chapter 53 — Coronation Recognition and Awards

**Part XII — Anti-Fraud**
- Chapter 54 — Anti-Fraud Overview
- Chapter 55 — Prohibited Activities
- Chapter 56 — Fraud Detection and Response
- Chapter 57 — Sanctions Framework

**Part XIII — Governance, Appeals, Audit, Reporting**
- Chapter 58 — Governance Review
- Chapter 59 — Appeals and Dispute Resolution
- Chapter 60 — Reward Auditing
- Chapter 61 — Mandatory Disclosures
- Chapter 62 — Reporting

**Part XIV — Cycles**
- Chapter 63 — The Monthly Reward Cycle
- Chapter 64 — The Annual Cycle
- Chapter 65 — Coronation Cycle

**Part XV — Mathematical Consistency Audit**
- Chapter 66 — Allocation Totals Reconciliation
- Chapter 67 — Reward Pool Reconciliation
- Chapter 68 — 90/10 Reconciliation
- Chapter 69 — Maximum Liability Analysis
- Chapter 70 — Cap, Pro-Rata, Refund, and Reversal Behavior

**Part XVI — Platform Economics & Benefits**
- Chapter 71 — Tiered Benefits & Incentives Program
- Chapter 72 — Platform Economics & Sustainability

**Appendices**
- Appendix A — K-Level Progression Matrix (Complete)
- Appendix B — K-Level Leadership Development Matrix (Complete)
- Appendix C — Revenue Allocation Summary
- Appendix D — K-Points Category Summary
- Appendix E — Glossary
- Appendix F — Traceability Framework
- Appendix G — Governance Parameter Register
- Appendix H — Illustrative Participant Journey

---

## EXECUTIVE STATEMENT

KR-1 is the sole authoritative source of K-Rewards policy for the K-NETWORK platform. It defines the complete compensation, rewards, K-Points, K-Rings, K-Levels, leadership-development, and reward-economics framework for all eleven Core Platform Engines. Every reward calculation, point accrual, ring assignment, level promotion, trust determination, and reward distribution across K-NETWORK must trace back to a rule defined in this document.

This document translates the constitutional principles established in PLC-1 v2.0 into specific, testable, enforceable rules governing every aspect of the K-Rewards ecosystem. It is built on five foundational pillars:

1. **K-Points** — the platform's unit of measurable activity contribution, earned from genuine, verified activity and reset monthly.
2. **K-Rings** — the structural measurement of a participant's network depth and quality, determined automatically by graph distance.
3. **K-Levels** — the fifteen-level permanent progression system measuring long-term leadership and contribution, organized into five tiers.
4. **K-Trust** — the reputation and integrity system that gates eligibility and protects the platform from abuse.
5. **Reward Share** — the proportional claim on the Reward Pool, calculated from the four pillars above.

The framework is governed by the 90/10 Economic Model: only 90% of Qualifying Economic Value is allocatable; 10% is a protected reserve. No formula may distribute more than the available 90%. The reward engine must never promise more than available economic value.

Key innovations in this version:

- **Leadership Multiplication** — a leader must develop other qualified leaders. This document provides a complete K-Level Leadership Development Matrix specifying minimum member counts and minimum K-Levels for each ring at each K-Level, including Executive-tier requirements for Legacy tier.
- **Royal Leadership Identity** — a four-title recognition model (Normal, Prince, Crown Prince, King) integrated with the K-Level system. The username is permanent; the title changes with tier.
- **Active Status Maintenance** — tiered personal K-Points and Group Activity requirements that must be met each cycle to maintain K-Level privileges (multiplier and benefits).
- **Tiered Benefits & Incentives** — a benefits program funded from platform operating margin, not the Reward Pool, with lifestyle benefits escalating by tier.

Where a specific numerical value requires governance approval before activation, it is labeled **GOVERNANCE PARAMETER — REQUIRES APPROVAL** and enumerated in the Governance Parameter Register (Appendix G). Proposed values are provided to enable downstream engineering, but proposed values are not approved values until governance approves them.

---

# Part I — Foundations & Principles

## Chapter 1 — Purpose, Authority, and Scope

### 1.1 Purpose

**KR-FND-001 (Purpose).** This document establishes the complete K-Rewards Policy & Governance Framework for the K-NETWORK platform. Its purpose is to define — with mathematical precision and internal consistency — every rule, formula, threshold, qualification, revenue source, allocation, and leadership requirement governing the K-Rewards ecosystem.

### 1.2 Authority

**KR-FND-002 (Authority).** KR-1 derives all authority from PLC-1 — K-NETWORK Platform Constitution v2.0. KR-1 is subordinate to PLC-1. Where this document conflicts with PLC-1, PLC-1 prevails unconditionally. KR-1 may only be superseded through the pillar-level revision process or formal amendment of PLC-1.

### 1.3 Scope

**KR-FND-003 (Scope).** KR-1 governs all reward-related activity across all eleven Core Platform Engines:

1. Identity
2. Trust
3. Commerce
4. Services
5. K-Rewards
6. Wallet/Payments
7. Communication
8. Intelligence
9. Administration
10. Integration
11. Learning

Every reward calculation, point accrual, ring assignment, level promotion, trust determination, and reward distribution across these engines must trace back to a rule defined in this document.

### 1.4 Supersession

**KR-FND-004 (Supersession).** This version supersedes all prior KR-1 versions and compensation plan documents. Where this document conflicts with a prior version, this document prevails.

### 1.5 Downstream Conformance

**KR-FND-005 (Downstream Conformance).** In any conflict between KR-1 and a downstream document on reward-related matters, the downstream document must be corrected to restore alignment. KR-1 itself may only be superseded through the pillar-level revision process or formal amendment of PLC-1.

---

## Chapter 2 — Definitions and Terminology

### 2.1 Core Definitions

| Term | Definition | Rule ID |
|---|---|---|
| **K-Points** | The platform's unit of measurable activity contribution. K-Points accrue from genuine, verified activity and reset monthly. K-Points are one of the four pillar inputs to Reward Share. | KR-PNT-001 |
| **K-Rings** | The structural measurement of a participant's network depth and quality, determined automatically by graph distance from the participant. Ring 1 through Ring 5 represent increasing depth. | KR-RNG-001 |
| **K-Levels** | A fifteen-level permanent progression system measuring long-term leadership and contribution, organized into five tiers. Once achieved, a K-Level is protected under the Permanent Status Policy. | KR-LVL-001 |
| **K-Trust** | The platform's reputation and integrity system. K-Trust produces a Trust Score (0–100) that gates eligibility for K-Points, K-Level promotion, and Reward Share distribution. | KR-TRU-001 |
| **Reward Pool** | The pool of funds available for reward distribution in a given cycle, funded from the participant rewards allocation and the referral/leadership allocation of all qualifying transactions. | KR-ECO-040 |
| **Reward Share** | A participant's proportional claim on the Reward Pool, blended from four normalized pillars: Monthly K-Points, Ring Contribution, K-Level Multiplier, and K-Trust. | KR-RWD-001 |
| **Leadership Development** | The requirement that higher K-Levels demand the development of other qualified leaders, not merely the accumulation of referrals. | KR-LVL-002 |
| **Active Status** | The state of a participant who meets the personal activity requirement and the tiered maintenance requirements for their K-Level, and is eligible for rewards in the current cycle. | KR-FND-006 |
| **Qualification** | The state of meeting all requirements for a given K-Level, reward category, or recognition. | KR-LVL-003 |
| **Disqualification** | The loss of eligibility for a reward, K-Level, or recognition due to failure to meet requirements or due to a sanction. | KR-LVL-004 |
| **Rewardable Activity** | Genuine, verified activity that originates from real economic or platform engagement and is eligible for K-Points accrual. | KR-SRC-001 |
| **Non-rewardable Activity** | Activity that does not qualify for K-Points accrual, including recruitment alone, artificial transactions, and any activity that does not originate from genuine economic or platform engagement. | KR-SRC-002 |
| **Qualifying Economic Value (QEV)** | The economic value of a transaction after legitimate deductions. QEV = GR − D. | KR-ECO-010 |
| **Allocation Pool (AP)** | The portion of QEV available for allocation — 90% of QEV. | KR-ECO-011 |
| **Reserve (R)** | The protected portion of QEV — 10% of QEV. Not allocated to participants. | KR-ECO-012 |
| **Gross Revenue (GR)** | The total economic value of a transaction before any deductions. | KR-ECO-013 |
| **Deduction (D)** | Legitimate deductions from Gross Revenue, including payment processing fees and VAT. | KR-ECO-014 |
| **Maximum Liability** | The maximum financial obligation of the platform in any cycle, which is the Reward Pool for that cycle. | KR-ECO-015 |
| **Lifetime Statistics** | Permanent records of a participant's cumulative K-Points, cycles participated, and K-Level history, protected from retroactive reduction except through the formal correction process. | KR-PNT-020 |
| **Participant** | Any individual or entity that engages with the K-NETWORK platform, including customers, vendors, businesses, service providers, learners, instructors, and affiliates. | KR-FND-007 |

### 2.2 Participant Types

| Participant | Definition |
|---|---|
| **Customer** | An individual who uses K-NETWORK to discover and purchase products, access services, and learn. |
| **Vendor** | An individual or entity that offers products for sale on the Commerce Marketplace. |
| **Business** | An entity that uses K-NETWORK for digital visibility, customer relationships, and operational efficiency. |
| **Service Provider** | An individual or entity that offers professional and local services on the Services Marketplace. |
| **Learner** | An individual who consumes educational content and participates in learning activities. |
| **Instructor / Educator** | An authorized participant who creates and delivers educational content. |
| **Affiliate / K-Rewards Member** | A participant who earns K-Rewards through genuine contribution, including referral activity. |
| **Platform Administrator** | An internal stakeholder responsible for operating, monitoring, and governing the platform. |

---

## Chapter 3 — Plain-Language Summary

This chapter is intended for participants and non-technical readers. It provides an accessible overview of how the K-Rewards system works. The authoritative definitions remain in the technical chapters that follow.

### 3.1 How the System Works

K-Rewards is a system that rewards genuine participation in the K-NETWORK ecosystem. You earn rewards by:

1. **Buying** — genuine purchases on the Commerce Marketplace
2. **Selling** — genuine sales as a vendor
3. **Serving** — genuine service delivery
4. **Referring** — genuine referrals that lead to commerce
5. **Learning** — genuine learning engagement
6. **Building community** — genuine community contributions

### 3.2 The Five Pillars

Your rewards are calculated from five pillars — four that feed into the Reward Share formula, and the fifth (Reward Share itself) which is the result:

1. **K-Points** — what you did this month. You earn K-Points from verified activity. They reset each month, but they accumulate in your Lifetime Statistics.
2. **K-Rings** — your genuine network influence. Your five rings (Ring 1 through Ring 5) measure the depth and quality of your network, not just its size.
3. **K-Levels** — your long-term leadership progression. There are 15 levels across 5 tiers. Higher levels carry higher multipliers and require you to develop other leaders.
4. **K-Trust** — your reputation and reliability. Your Trust Score gates your eligibility for rewards and level promotion.
5. **Reward Share** — your claim on the Reward Pool. Your reward is a proportional share of the pool, calculated from the four pillars above.

### 3.3 The Reward Pool

The Reward Pool is funded from real economic activity on the platform — never from participant deposits, unfunded promises, or circular funding. Each month, qualifying transactions contribute to the Reward Pool. The pool is then distributed proportionally to eligible participants based on their Reward Share.

### 3.4 The 90/10 Rule

For every transaction on the platform:
- **90%** of the qualifying economic value is allocated (to platform, vendor/provider, rewards, leadership, operations)
- **10%** is a protected reserve

No formula can distribute more than the available 90%. This protects the platform from unfunded liability.

### 3.5 Leadership and Royal Titles

As you progress through the K-Levels, you earn recognition:
- **Levels 1–6 (Foundation & Growth):** Normal identity
- **Levels 7–9 (Leadership):** Prince + Username
- **Levels 10–12 (Executive):** Crown Prince + Username
- **Levels 13–15 (Legacy):** King + Username

Your username is permanent. Your title changes with your tier. Higher tiers also unlock tiered benefits (Chapter 71).

### 3.6 What Rewards Are Not

Rewards are **not**:
- Created by recruitment alone
- Funded by participant deposits
- Guaranteed amounts (they depend on the Reward Pool size)
- Unfunded promises

Rewards are **always**:
- Funded from genuine economic activity
- Proportional to your contribution
- Subject to governance-approved rules
- Protected by anti-fraud controls

---

## Chapter 4 — K-Rewards Core Principles

### 4.1 The Core Principles

**KR-FND-008 (Genuine Activity Rewards).** Rewards must originate from genuine economic/platform activity. Recruitment alone must never create money. K-Points are earned only from genuine, verified, value-creating activities.

**KR-FND-009 (No Unfunded Liability).** The reward engine must never promise more than available economic value. The maximum liability of the platform in any cycle is the Reward Pool for that cycle.

**KR-FND-010 (Proportional Distribution).** Rewards are distributed proportionally based on Reward Share. No participant receives a fixed amount; all rewards are proportional to the Reward Pool.

**KR-FND-011 (Transparency).** Mandatory disclosures — the Five Pillars framework, category definitions, K-Level thresholds, Reward Share weighting logic, Reward Pool size and funding, and the Monthly Reward Cycle schedule — must be published and kept current.

**KR-FND-012 (Due Process).** No sanction without due process: Investigation + Determination + appeal opportunity. No automated flag alone may result in sanction. Multi-signal corroboration is required for fraud determinations.

**KR-FND-013 (Compliance Precedence).** Compliance with applicable law and platform policies shall always take precedence over reward eligibility. Where a conflict exists between legal compliance and reward eligibility, compliance prevails.

**KR-FND-014 (Fair Reward Principles).** Rewards must be fair, transparent, non-discriminatory, and proportional to genuine contribution. The Fair Reward Principles are derived from PLC-1 and govern all reward-related decisions.

**KR-FND-015 (Reconstructability).** The reasoning behind any reward calculation must be reconstructable and auditable. Every K-Point accrual, ring assignment, level promotion, trust determination, and reward distribution shall produce an audit trail sufficient to reconstruct the calculation from source event to final outcome.

**KR-FND-016 (Constitutional Consistency).** KR-1 must remain consistent with all seven PLC-1 Constitutional Principles. Every substantive KR-1 change requires a re-verification of constitutional consistency.

**KR-FND-017 (Extensible Engine Architecture).** The K-Rewards framework must support the addition of new engines without structural redesign. When a new engine is added, its reward-related activities must integrate with the existing K-Rewards framework.

**KR-FND-018 (Learning Integration).** Learning must integrate with the shared K-Rewards framework, not be an isolated rewards ecosystem. Learning K-Points are the eighth K-Points category and follow the same rules as all other categories.

### 4.2 The 90/10 Principle

**KR-ECO-001 (90/10 Principle).** Only 90% of Qualifying Economic Value is allocatable; 10% is a protected reserve. No formula may distribute more than the available 90%. This principle prohibits unfunded promises, circular funding, deposit-funded rewards, double allocation, and negative-margin schemes.

### 4.3 No-Unfunded-Liability Principle

**KR-ECO-002 (No Unfunded Liability).** The reward engine must never promise more than available economic value. The maximum liability of the platform in any cycle is the Reward Pool for that cycle. This is guaranteed by proportional Reward Share, individual caps, and pro-rata adjustment.

### 4.4 Leadership Multiplication Principle

**KR-LVL-005 (Leadership Multiplication).** A top-tier participant must produce leaders, not merely accumulate referrals. Leadership advancement requires the development of other qualified leaders. This is the structural mechanism that enforces the Anti-Accumulation Principle.

### 4.5 Anti-Accumulation Principle

**KR-LVL-006 (Anti-Accumulation).** A participant must not become a top-tier leader merely by accumulating referrals. Referral count alone is insufficient for leadership advancement. The quality and capability of the network — measured by the K-Levels achieved within the rings — is the determining factor.

---

## Chapter 5 — Eleven Engines and K-Rewards Authority Boundary

### 5.1 The Eleven Engines

**KR-FND-019 (Eleven Engines).** K-Rewards is the central reward authority for all eleven Core Platform Engines:

| # | Engine | Role in K-Rewards |
|---|---|---|
| 1 | Identity | Provides participant identity for reward attribution |
| 2 | Trust | Provides Trust Score for reward gating |
| 3 | Commerce | Generates commerce transactions that fund rewards and earn K-Points |
| 4 | Services | Generates service transactions that fund rewards and earn K-Points |
| 5 | K-Rewards | Calculates K-Points, K-Rings, K-Levels, K-Trust, and Reward Share |
| 6 | Wallet/Payments | Records financial movements and executes reward distribution |
| 7 | Communication | Facilitates community contributions that earn K-Points |
| 8 | Intelligence | Provides fraud detection and anomaly detection signals |
| 9 | Administration | Manages governance, appeals, and audit processes |
| 10 | Integration | Connects external partners whose transactions fund rewards |
| 11 | Learning | Generates learning achievements that earn K-Points |

### 5.2 Authority Boundary

**KR-FND-020 (Authority Boundary).** The K-Rewards Engine calculates reward entitlement. The Wallet/Payments Engine records financial movements and executes distribution. K-Rewards must NOT duplicate the accounting authority of Wallet/Payments.

| Engine | Authority | What It Does | What It Does NOT Do |
|---|---|---|---|
| **K-Rewards Engine** | Reward entitlement | Calculates K-Points, K-Rings, K-Levels, K-Trust, Reward Share, and reward entitlement | Does not record financial movements, process payments, or hold funds |
| **Wallet/Payments Engine** | Financial movements | Records financial movements, processes payments, executes reward distribution | Does not calculate reward entitlement |

### 5.3 Engine Integration

Each engine that generates rewardable activity must integrate with the K-Rewards Engine through a standard interface:

1. **Source event** — the engine reports a genuine activity event.
2. **Validation** — the K-Rewards Engine validates the event.
3. **K-Points calculation** — the K-Rewards Engine calculates K-Points.
4. **Reward Pool contribution** — the transaction's reward allocation contributes to the Reward Pool.
5. **Audit record** — the event and calculation are recorded for audit.

---

## Chapter 6 — The Five Pillars

### 6.1 The Five Pillars Framework

**KR-FND-021 (Five Pillars).** The K-Rewards framework is built on five interconnected pillars:

1. **K-Points** — the platform's unit of measurable activity contribution (Part IV)
2. **K-Rings** — the structural measurement of network depth and quality (Part V)
3. **K-Levels** — the fifteen-level permanent progression system (Part VI)
4. **K-Trust** — the reputation and integrity system (Part VIII)
5. **Reward Share** — the proportional claim on the Reward Pool (Part IX)

### 6.2 Pillar Interrelationships

The five pillars are interconnected:

- **K-Points** provide the monthly activity measure that feeds into **Reward Share**.
- **K-Rings** provide **Ring Contribution** that feeds into **Reward Share** and determines **Leadership Development** requirements.
- **K-Levels** provide **K-Level Multipliers** that amplify **Reward Share** and carry **Leadership Development requirements**.
- **K-Trust** gates eligibility for **K-Points** (Service, Vendor), **K-Level** promotion, and **Reward Share** distribution.
- **Reward Share** is the output — a participant's proportional claim on the **Reward Pool**, calculated from the four input pillars.

### 6.3 Pillar Inputs to Reward Share

Reward Share is calculated from four normalized pillar inputs:

| Pillar | Input to Reward Share | Weight |
|---|---|---|
| K-Points | Monthly K-Points (normalized) | 0.40 |
| K-Rings | Ring Contribution (normalized) | 0.25 |
| K-Levels | K-Level Multiplier (normalized) | 0.20 |
| K-Trust | Trust Score (normalized) | 0.15 |
| **Total** | | **1.00** |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All pillar weights (proposed: 0.40, 0.25, 0.20, 0.15 — summing to 1.00).

The fifth pillar — Reward Share itself — is the output of the formula, not an input. The "Five Pillars" framework refers to the five interconnected systems; the Reward Share formula uses four of them as inputs.

---

# Part II — The 90/10 Economic Model

## Chapter 7 — The 90/10 Principle

### 7.1 Constitutional Foundation

**KR-ECO-001 (90/10 Principle — restated).** For every qualifying transaction on the K-NETWORK platform, only 90% of Qualifying Economic Value (QEV) is allocatable; 10% is a protected reserve. No formula may distribute more than the available 90%.

This principle is derived from PLC-1 v2.0 and is a constitutional constraint on the entire K-Rewards framework. It prohibits:

- Unfunded promises
- Circular funding
- Deposit-funded rewards
- Double allocation
- Negative-margin schemes

### 7.2 The Core Equations

**KR-ECO-003 (Core Equations).** The 90/10 economic model is expressed as:

```
QEV = GR − D                          (Qualifying Economic Value)
R   = 0.10 × QEV                      (Protected Reserve = 10% of QEV)
AP  = 0.90 × QEV                      (Allocation Pool = 90% of QEV)
AP  = Σ(a_j) for all allocation categories j    (Allocations sum to AP)
AP + R = QEV                          (Total reconciliation)
```

Where:
- **GR** = Gross Revenue (total economic value of the transaction before deductions)
- **D** = Deductions (legitimate deductions from Gross Revenue)
- **QEV** = Qualifying Economic Value (GR minus deductions)
- **R** = Reserve (10% of QEV, protected)
- **AP** = Allocation Pool (90% of QEV, allocatable)
- **a_j** = Amount allocated to category j

### 7.3 The Allocation Categories

**KR-ECO-004 (Allocation Categories).** The Allocation Pool is divided among the following categories:

| Category | Symbol | Description |
|---|---|---|
| Platform | a_platform | Platform economics (infrastructure, development, operations) |
| Vendor/Provider/Instructor/Partner | a_provider | Counterparty economics (vendor, provider, instructor, or partner share) |
| Participant Rewards | a_rewards | Reward Pool contribution for participant rewards |
| Referral/Leadership | a_leadership | Reward Pool contribution for referral/leadership rewards |
| Operational | a_operational | Operational allocations (compliance, governance, audit) |

**KR-ECO-005 (Allocation Sum Constraint).** The allocation amounts must sum to exactly the Allocation Pool:

```
a_platform + a_provider + a_rewards + a_leadership + a_operational = AP = 0.90 × QEV
```

No category may receive more than its defined rate. No category may be added without governance approval. The sum must equal exactly 90% of QEV — not more, not less.

### 7.4 Prohibition of Over-Allocation

**KR-ECO-006 (Prohibition of Over-Allocation).** No formula, rule, or mechanism may distribute more than the available 90% of QEV. Any formula that would result in over-allocation is void. The 10% reserve is inviolable and may not be used to fund reward distributions except through formal governance.

### 7.5 Prohibition of Circular Funding

**KR-ECO-007 (Prohibition of Circular Funding).** The Reward Pool must be funded from genuine economic activity, not from rewards, deposits, or any circular source. The funding chain must be linear:

```
Genuine Transaction → GR → QEV → AP → a_rewards + a_leadership → Reward Pool → Distribution
```

No reward obligation may be created without a funding source within the Allocation Pool.

---

## Chapter 8 — Qualifying Economic Value

### 8.1 Gross Revenue

**KR-ECO-008 (Gross Revenue).** Gross Revenue (GR) is the total economic value of a transaction before any deductions. GR is the starting point of the 90/10 economic model.

### 8.2 Deductions

**KR-ECO-009 (Deductions).** Deductions (D) are legitimate reductions from Gross Revenue before the 90/10 split. Deductions include:

| Deduction | Description | Proposed Rate |
|---|---|---|
| Payment processing fee | Fees charged by payment processors for transaction processing | 1.5% of GR |
| VAT | Value-added tax | 7.5% of GR |
| **Total deduction rate** | | **9% of GR** |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Payment processing fee rate (proposed: 1.5% of GR), VAT rate (proposed: 7.5% of GR), total deduction rate (proposed: 9% of GR).

### 8.3 Qualifying Economic Value Calculation

**KR-ECO-010 (QEV Definition).** Qualifying Economic Value is calculated as:

```
QEV = GR − D
QEV = GR × (1 − deduction_rate)
QEV = GR × (1 − 0.09)
QEV = GR × 0.91
```

### 8.4 The 90/10 Split

**KR-ECO-011 (Allocation Pool).** The Allocation Pool is 90% of QEV:

```
AP = 0.90 × QEV
```

**KR-ECO-012 (Reserve).** The Reserve is 10% of QEV:

```
R = 0.10 × QEV
```

**KR-ECO-013 (Reconciliation Identity).** The 90/10 split is an identity — it holds for all values of QEV:

```
AP + R = 0.90 × QEV + 0.10 × QEV = 1.00 × QEV = QEV
```

### 8.5 Worked QEV Example

**Transaction:** GR = ₦10,000

```
D = 0.09 × 10,000 = ₦900
QEV = 10,000 − 900 = ₦9,100
R = 0.10 × 9,100 = ₦910
AP = 0.90 × 9,100 = ₦8,190
AP + R = 8,190 + 910 = ₦9,100 = QEV ✓
```

---

## Chapter 9 — The Allocation Structure

### 9.1 Allocation Rates by Revenue Type

**KR-ECO-014 (Allocation Rates).** The allocation rates for each revenue type are **GOVERNANCE PARAMETERS — REQUIRES APPROVAL**. The following proposed rates are provided to enable downstream engineering. They shall not be activated until governance approves them.

#### Commerce Transaction

| Category | Rate (% of QEV) | Symbol |
|---|---|---|
| Platform | 15% | r_platform |
| Vendor | 60% | r_vendor |
| Participant rewards | 8% | r_rewards |
| Referral/leadership | 5% | r_leadership |
| Operational | 2% | r_operational |
| **Total** | **90%** | |

#### Services Transaction

| Category | Rate (% of QEV) | Symbol |
|---|---|---|
| Platform | 15% | r_platform |
| Provider | 60% | r_provider |
| Participant rewards | 8% | r_rewards |
| Referral/leadership | 5% | r_leadership |
| Operational | 2% | r_operational |
| **Total** | **90%** | |

#### Learning Transaction

| Category | Rate (% of QEV) | Symbol |
|---|---|---|
| Platform | 20% | r_platform |
| Instructor | 55% | r_instructor |
| Participant rewards | 8% | r_rewards |
| Referral/leadership | 5% | r_leadership |
| Operational | 2% | r_operational |
| **Total** | **90%** | |

#### Platform Service Fee

| Category | Rate (% of QEV) | Symbol |
|---|---|---|
| Platform | 65% | r_platform |
| Participant rewards | 15% | r_rewards |
| Referral/leadership | 7% | r_leadership |
| Operational | 3% | r_operational |
| **Total** | **90%** | |

Note: Platform Service Fee has no vendor/provider counterparty — the platform is the sole service provider. The higher platform share (65%) reflects this.

#### Partner Transaction

| Category | Rate (% of QEV) | Symbol |
|---|---|---|
| Platform | 40% | r_platform |
| Partner | 35% | r_partner |
| Participant rewards | 10% | r_rewards |
| Referral/leadership | 3% | r_leadership |
| Operational | 2% | r_operational |
| **Total** | **90%** | |

### 9.2 General Allocation Formula

**KR-ECO-015 (General Allocation Formula).** For each revenue type, the allocation to each category is:

```
a_j = r_j × QEV

Where:
  a_j = amount allocated to category j
  r_j = rate for category j (as a fraction of QEV)
  QEV = Qualifying Economic Value
```

The sum of all allocations must equal the Allocation Pool:

```
Σ(a_j) = Σ(r_j × QEV) = QEV × Σ(r_j) = QEV × 0.90 = AP
```

### 9.3 Reward Pool Contribution

**KR-ECO-016 (Reward Pool Contribution).** The Reward Pool contribution from a single transaction is:

```
RP_contribution = a_rewards + a_leadership = (r_rewards + r_leadership) × QEV
```

| Revenue Type | r_rewards | r_leadership | RP % of QEV |
|---|---|---|---|
| Commerce | 8% | 5% | 13% |
| Services | 8% | 5% | 13% |
| Learning | 8% | 5% | 13% |
| Platform Service Fee | 15% | 7% | 22% |
| Partner | 10% | 3% | 13% |

### 9.4 Allocation Verification

**KR-ECO-017 (Allocation Verification).** For each revenue type, the allocation rates must sum to exactly 90%:

```
Commerce:    15% + 60% + 8% + 5% + 2% = 90% ✓
Services:     15% + 60% + 8% + 5% + 2% = 90% ✓
Learning:     20% + 55% + 8% + 5% + 2% = 90% ✓
Platform Fee: 65% + 15% + 7% + 3% = 90% ✓
Partner:      40% + 35% + 10% + 3% + 2% = 90% ✓
```

All allocation rates sum to exactly 90% of QEV. No over-allocation. ✓

---

## Chapter 10 — Revenue Waterfalls

### 10.1 Waterfall Definition

**KR-ECO-018 (Revenue Waterfall).** A revenue waterfall is the complete flow of economic value from Gross Revenue through deductions, QEV, reserve, allocation pool, and final settlement for a given revenue type.

### 10.2 Commerce Transaction Waterfall

```
Gross Revenue (GR)
    ↓ minus deductions (D = 9% of GR)
Qualifying Economic Value (QEV = GR × 0.91)
    ↓ split 90/10
    ├── Reserve (R = 10% of QEV)     → PROTECTED
    └── Allocation Pool (AP = 90% of QEV)
            ├── Platform (15% of QEV)        → Platform
            ├── Vendor (60% of QEV)           → Vendor settlement
            ├── Rewards (8% of QEV)           → Reward Pool
            ├── Leadership (5% of QEV)        → Reward Pool
            └── Operational (2% of QEV)       → Operations
        Total AP = 90% of QEV ✓
```

### 10.3 Services Transaction Waterfall

```
Gross Revenue (GR)
    ↓ minus deductions (D = 9% of GR)
Qualifying Economic Value (QEV = GR × 0.91)
    ↓ split 90/10
    ├── Reserve (R = 10% of QEV)     → PROTECTED
    └── Allocation Pool (AP = 90% of QEV)
            ├── Platform (15% of QEV)        → Platform
            ├── Provider (60% of QEV)         → Provider settlement
            ├── Rewards (8% of QEV)           → Reward Pool
            ├── Leadership (5% of QEV)        → Reward Pool
            └── Operational (2% of QEV)       → Operations
        Total AP = 90% of QEV ✓
```

### 10.4 Learning Transaction Waterfall

```
Gross Revenue (GR)
    ↓ minus deductions (D = 9% of GR)
Qualifying Economic Value (QEV = GR × 0.91)
    ↓ split 90/10
    ├── Reserve (R = 10% of QEV)     → PROTECTED
    └── Allocation Pool (AP = 90% of QEV)
            ├── Platform (20% of QEV)        → Platform
            ├── Instructor (55% of QEV)      → Instructor settlement
            ├── Rewards (8% of QEV)           → Reward Pool
            ├── Leadership (5% of QEV)        → Reward Pool
            └── Operational (2% of QEV)       → Operations
        Total AP = 90% of QEV ✓
```

### 10.5 Platform Service Fee Waterfall

```
Gross Revenue (GR)
    ↓ minus deductions (D = 9% of GR)
Qualifying Economic Value (QEV = GR × 0.91)
    ↓ split 90/10
    ├── Reserve (R = 10% of QEV)     → PROTECTED
    └── Allocation Pool (AP = 90% of QEV)
            ├── Platform (65% of QEV)        → Platform
            ├── Rewards (15% of QEV)          → Reward Pool
            ├── Leadership (7% of QEV)        → Reward Pool
            └── Operational (3% of QEV)       → Operations
        Total AP = 90% of QEV ✓
```

### 10.6 Partner Transaction Waterfall

```
Gross Revenue (GR)
    ↓ minus deductions (D = 9% of GR)
Qualifying Economic Value (QEV = GR × 0.91)
    ↓ split 90/10
    ├── Reserve (R = 10% of QEV)     → PROTECTED
    └── Allocation Pool (AP = 90% of QEV)
            ├── Platform (40% of QEV)        → Platform
            ├── Partner (35% of QEV)          → Partner settlement
            ├── Rewards (10% of QEV)          → Reward Pool
            ├── Leadership (3% of QEV)        → Reward Pool
            └── Operational (2% of QEV)       → Operations
        Total AP = 90% of QEV ✓
```

---

## Chapter 11 — Worked Numerical Examples

### 11.1 Overview

This chapter provides worked numerical examples for each revenue type at four transaction sizes: ₦1,000, ₦10,000, ₦100,000, and ₦1,000,000. Every calculation is verified mathematically.

The deduction rate is 9% of GR (1.5% payment processing + 7.5% VAT), producing QEV = GR × 0.91.

### 11.2 Commerce Transaction — Worked Examples

#### Commerce: GR = ₦1,000

| Step | Calculation | Amount |
|---|---|---|
| Gross Revenue | GR | ₦1,000 |
| Deductions | D = 0.09 × 1,000 | ₦90 |
| QEV | QEV = 1,000 − 90 | ₦910 |
| Reserve | R = 0.10 × 910 | ₦91 |
| Allocation Pool | AP = 0.90 × 910 | ₦819 |
| Platform | a_platform = 0.15 × 910 | ₦136.50 |
| Vendor | a_vendor = 0.60 × 910 | ₦546 |
| Rewards | a_rewards = 0.08 × 910 | ₦72.80 |
| Leadership | a_leadership = 0.05 × 910 | ₦45.50 |
| Operational | a_operational = 0.02 × 910 | ₦18.20 |
| **Allocation Sum** | 136.50 + 546 + 72.80 + 45.50 + 18.20 | **₦819 = AP ✓** |
| **AP + R** | 819 + 91 | **₦910 = QEV ✓** |
| **Reward Pool** | 72.80 + 45.50 | **₦118.30** |

#### Commerce: GR = ₦10,000

| Step | Calculation | Amount |
|---|---|---|
| Gross Revenue | GR | ₦10,000 |
| Deductions | D = 0.09 × 10,000 | ₦900 |
| QEV | QEV = 10,000 − 900 | ₦9,100 |
| Reserve | R = 0.10 × 9,100 | ₦910 |
| Allocation Pool | AP = 0.90 × 9,100 | ₦8,190 |
| Platform | a_platform = 0.15 × 9,100 | ₦1,365 |
| Vendor | a_vendor = 0.60 × 9,100 | ₦5,460 |
| Rewards | a_rewards = 0.08 × 9,100 | ₦728 |
| Leadership | a_leadership = 0.05 × 9,100 | ₦455 |
| Operational | a_operational = 0.02 × 9,100 | ₦182 |
| **Allocation Sum** | 1,365 + 5,460 + 728 + 455 + 182 | **₦8,190 = AP ✓** |
| **AP + R** | 8,190 + 910 | **₦9,100 = QEV ✓** |
| **Reward Pool** | 728 + 455 | **₦1,183** |

#### Commerce: GR = ₦100,000

| Step | Calculation | Amount |
|---|---|---|
| Gross Revenue | GR | ₦100,000 |
| Deductions | D = 0.09 × 100,000 | ₦9,000 |
| QEV | QEV = 100,000 − 9,000 | ₦91,000 |
| Reserve | R = 0.10 × 91,000 | ₦9,100 |
| Allocation Pool | AP = 0.90 × 91,000 | ₦81,900 |
| Platform | a_platform = 0.15 × 91,000 | ₦13,650 |
| Vendor | a_vendor = 0.60 × 91,000 | ₦54,600 |
| Rewards | a_rewards = 0.08 × 91,000 | ₦7,280 |
| Leadership | a_leadership = 0.05 × 91,000 | ₦4,550 |
| Operational | a_operational = 0.02 × 91,000 | ₦1,820 |
| **Allocation Sum** | 13,650 + 54,600 + 7,280 + 4,550 + 1,820 | **₦81,900 = AP ✓** |
| **AP + R** | 81,900 + 9,100 | **₦91,000 = QEV ✓** |
| **Reward Pool** | 7,280 + 4,550 | **₦11,830** |

#### Commerce: GR = ₦1,000,000

| Step | Calculation | Amount |
|---|---|---|
| Gross Revenue | GR | ₦1,000,000 |
| Deductions | D = 0.09 × 1,000,000 | ₦90,000 |
| QEV | QEV = 1,000,000 − 90,000 | ₦910,000 |
| Reserve | R = 0.10 × 910,000 | ₦91,000 |
| Allocation Pool | AP = 0.90 × 910,000 | ₦819,000 |
| Platform | a_platform = 0.15 × 910,000 | ₦136,500 |
| Vendor | a_vendor = 0.60 × 910,000 | ₦546,000 |
| Rewards | a_rewards = 0.08 × 910,000 | ₦72,800 |
| Leadership | a_leadership = 0.05 × 910,000 | ₦45,500 |
| Operational | a_operational = 0.02 × 910,000 | ₦18,200 |
| **Allocation Sum** | 136,500 + 546,000 + 72,800 + 45,500 + 18,200 | **₦819,000 = AP ✓** |
| **AP + R** | 819,000 + 91,000 | **₦910,000 = QEV ✓** |
| **Reward Pool** | 72,800 + 45,500 | **₦118,300** |

### 11.3 Services Transaction — Worked Examples

Services uses the same allocation rates as Commerce, with "Provider" replacing "Vendor."

#### Services: GR = ₦10,000

| Step | Calculation | Amount |
|---|---|---|
| QEV | 10,000 × 0.91 | ₦9,100 |
| Reserve | 0.10 × 9,100 | ₦910 |
| Allocation Pool | 0.90 × 9,100 | ₦8,190 |
| Platform | 0.15 × 9,100 | ₦1,365 |
| Provider | 0.60 × 9,100 | ₦5,460 |
| Rewards | 0.08 × 9,100 | ₦728 |
| Leadership | 0.05 × 9,100 | ₦455 |
| Operational | 0.02 × 9,100 | ₦182 |
| **Allocation Sum** | | **₦8,190 = AP ✓** |
| **AP + R** | | **₦9,100 = QEV ✓** |
| **Reward Pool** | | **₦1,183** |

(Services examples at ₦1,000, ₦100,000, and ₦1,000,000 follow the same proportional pattern and produce the same ratios as Commerce.)

### 11.4 Learning Transaction — Worked Examples

#### Learning: GR = ₦10,000

| Step | Calculation | Amount |
|---|---|---|
| QEV | 10,000 × 0.91 | ₦9,100 |
| Reserve | 0.10 × 9,100 | ₦910 |
| Allocation Pool | 0.90 × 9,100 | ₦8,190 |
| Platform | 0.20 × 9,100 | ₦1,820 |
| Instructor | 0.55 × 9,100 | ₦5,005 |
| Rewards | 0.08 × 9,100 | ₦728 |
| Leadership | 0.05 × 9,100 | ₦455 |
| Operational | 0.02 × 9,100 | ₦182 |
| **Allocation Sum** | 1,820 + 5,005 + 728 + 455 + 182 | **₦8,190 = AP ✓** |
| **AP + R** | | **₦9,100 = QEV ✓** |
| **Reward Pool** | 728 + 455 | **₦1,183** |

#### Learning: GR = ₦100,000

| Step | Calculation | Amount |
|---|---|---|
| QEV | 100,000 × 0.91 | ₦91,000 |
| Reserve | 0.10 × 91,000 | ₦9,100 |
| Allocation Pool | 0.90 × 91,000 | ₦81,900 |
| Platform | 0.20 × 91,000 | ₦18,200 |
| Instructor | 0.55 × 91,000 | ₦50,050 |
| Rewards | 0.08 × 91,000 | ₦7,280 |
| Leadership | 0.05 × 91,000 | ₦4,550 |
| Operational | 0.02 × 91,000 | ₦1,820 |
| **Allocation Sum** | 18,200 + 50,050 + 7,280 + 4,550 + 1,820 | **₦81,900 = AP ✓** |
| **AP + R** | | **₦91,000 = QEV ✓** |
| **Reward Pool** | 7,280 + 4,550 | **₦11,830** |

### 11.5 Platform Service Fee — Worked Examples

#### Platform Service Fee: GR = ₦10,000

| Step | Calculation | Amount |
|---|---|---|
| QEV | 10,000 × 0.91 | ₦9,100 |
| Reserve | 0.10 × 9,100 | ₦910 |
| Allocation Pool | 0.90 × 9,100 | ₦8,190 |
| Platform | 0.65 × 9,100 | ₦5,915 |
| Rewards | 0.15 × 9,100 | ₦1,365 |
| Leadership | 0.07 × 9,100 | ₦637 |
| Operational | 0.03 × 9,100 | ₦273 |
| **Allocation Sum** | 5,915 + 1,365 + 637 + 273 | **₦8,190 = AP ✓** |
| **AP + R** | | **₦9,100 = QEV ✓** |
| **Reward Pool** | 1,365 + 637 | **₦2,002** |

#### Platform Service Fee: GR = ₦1,000,000

| Step | Calculation | Amount |
|---|---|---|
| QEV | 1,000,000 × 0.91 | ₦910,000 |
| Reserve | 0.10 × 910,000 | ₦91,000 |
| Allocation Pool | 0.90 × 910,000 | ₦819,000 |
| Platform | 0.65 × 910,000 | ₦591,500 |
| Rewards | 0.15 × 910,000 | ₦136,500 |
| Leadership | 0.07 × 910,000 | ₦63,700 |
| Operational | 0.03 × 910,000 | ₦27,300 |
| **Allocation Sum** | 591,500 + 136,500 + 63,700 + 27,300 | **₦819,000 = AP ✓** |
| **AP + R** | | **₦910,000 = QEV ✓** |
| **Reward Pool** | 136,500 + 63,700 | **₦200,200** |

### 11.6 Partner Transaction — Worked Examples

#### Partner: GR = ₦10,000

| Step | Calculation | Amount |
|---|---|---|
| QEV | 10,000 × 0.91 | ₦9,100 |
| Reserve | 0.10 × 9,100 | ₦910 |
| Allocation Pool | 0.90 × 9,100 | ₦8,190 |
| Platform | 0.40 × 9,100 | ₦3,640 |
| Partner | 0.35 × 9,100 | ₦3,185 |
| Rewards | 0.10 × 9,100 | ₦910 |
| Leadership | 0.03 × 9,100 | ₦273 |
| Operational | 0.02 × 9,100 | ₦182 |
| **Allocation Sum** | 3,640 + 3,185 + 910 + 273 + 182 | **₦8,190 = AP ✓** |
| **AP + R** | | **₦9,100 = QEV ✓** |
| **Reward Pool** | 910 + 273 | **₦1,183** |

### 11.7 Cross-Waterfall Summary (₦10,000 GR)

This summary table shows the key values for each revenue type at GR = ₦10,000. All revenue types share the same QEV (₦9,100), Reserve (₦910), and Allocation Pool (₦8,190) at this transaction size.

| Revenue Type | QEV | Reserve (10%) | AP (90%) | Reward Pool | AP + R = QEV? |
|---|---|---|---|---|---|
| Commerce | ₦9,100 | ₦910 | ₦8,190 | ₦1,183 | ✓ |
| Services | ₦9,100 | ₦910 | ₦8,190 | ₦1,183 | ✓ |
| Learning | ₦9,100 | ₦910 | ₦8,190 | ₦1,183 | ✓ |
| Platform Service Fee | ₦9,100 | ₦910 | ₦8,190 | ₦2,002 | ✓ |
| Partner | ₦9,100 | ₦910 | ₦8,190 | ₦1,183 | ✓ |

### 11.8 Reward Pool as % of GR

The Reward Pool as a percentage of GR (not QEV) for each revenue type:

```
Commerce:    RP/GR = (0.08 + 0.05) × 0.91 = 0.13 × 0.91 = 11.83%
Services:    RP/GR = 0.13 × 0.91 = 11.83%
Learning:    RP/GR = 0.13 × 0.91 = 11.83%
Platform Fee: RP/GR = (0.15 + 0.07) × 0.91 = 0.22 × 0.91 = 20.02%
Partner:     RP/GR = (0.10 + 0.03) × 0.91 = 0.13 × 0.91 = 11.83%
```

These percentages represent the fraction of Gross Revenue that flows into the Reward Pool. The remaining GR is split between deductions (9%), reserve (9.1% of GR), and non-reward allocations (platform, vendor/provider, operational).

---
# Part III — No Unfunded Liability

## Chapter 12 — Reward Pool Funding

### 12.1 Reward Pool Definition

**KR-ECO-040 (Reward Pool).** The Reward Pool (RP) is the pool of funds available for reward distribution in a given cycle. The Reward Pool is funded from the participant rewards allocation and the referral/leadership allocation of all qualifying transactions in the cycle:

```
RP_cycle = Σ(a_rewards + a_leadership) for all qualifying transactions in the cycle
```

### 12.2 Funding Source

**KR-ECO-041 (Funding Source).** The Reward Pool is funded exclusively from genuine economic activity. Each qualifying transaction contributes to the Reward Pool through its a_rewards and a_leadership allocations. The funding chain is linear:

```
Genuine Transaction → GR → QEV → AP → a_rewards + a_leadership → RP
```

The Reward Pool is NOT funded from:
- Participant deposits
- Rewards (no circular funding)
- Unfunded promises
- The 10% protected reserve

### 12.3 Maximum Platform Liability

**KR-ECO-042 (Maximum Liability).** The maximum liability of the platform in any cycle is the Reward Pool for that cycle:

```
MaxLiability = RP_cycle
```

The platform cannot be liable for more than the Reward Pool because:

1. **Reward Share is proportional.** Each participant's reward is a proportion of the Reward Pool. The sum of all proportions is 1.0.
2. **Pro-rata adjustment.** If calculated rewards exceed the pool, pro-rata adjustment reduces all rewards proportionally.
3. **Individual cap.** No participant can receive more than the cap percentage of the pool.
4. **No unfunded promises.** No reward obligation is created without a funding source within the Allocation Pool.

### 12.4 No-Unfunded-Liability Guarantee

**KR-ECO-043 (No-Unfunded-Liability Guarantee).** The No-Unfunded-Liability Principle is guaranteed by three mechanisms working together:

1. **Proportional Reward Share** — rewards are proportional to the pool, so the sum equals the pool.
2. **Individual cap** — no participant can receive more than CapRate × RP_cycle.
3. **Pro-rata adjustment** — if the sum of calculated rewards would exceed the pool, all rewards are scaled down proportionally.

These three mechanisms ensure that Σ(RewardAmount_i) ≤ RP_cycle in every cycle, under all conditions. The formal proof is in Chapter 69.

---

## Chapter 13 — Pool Closure and Eligibility

### 13.1 Pool Closure

**KR-ECO-044 (Pool Closure).** The Reward Pool for a cycle is closed at the published cycle cutoff. After closure:

1. No further transactions contribute to the pool for the current cycle.
2. The pool total is finalized.
3. Participant eligibility is frozen for the current cycle.
4. Transactions occurring after the cutoff contribute to the next cycle's pool.

### 13.2 Eligibility

**KR-ECO-045 (Eligibility).** To be eligible for Reward Share in a cycle, a participant must:

1. Have Active Status (Chapter 35) — meet the personal activity requirement and tiered maintenance requirements for their K-Level.
2. Meet the minimum K-Points threshold (Chapter 20).
3. Meet the Trust Score gating threshold (Chapter 42).
4. Not be under an active sanction that suspends reward eligibility (Chapter 57).
5. Have at least one qualifying transaction in their network during the cycle (for Ring Contribution to be non-zero).

### 13.3 Eligibility Freeze

**KR-ECO-046 (Eligibility Freeze).** At pool closure, eligibility is frozen. Participants who become eligible after closure must wait for the next cycle. Participants who lose eligibility before closure (e.g., through a sanction) are removed from the eligible set.

---

## Chapter 14 — Pro-Rata Adjustment and Cap Handling

### 14.1 Individual Cap

**KR-ECO-047 (Individual Cap).** No single participant may receive more than CapRate × RP_cycle in a single cycle. The cap prevents single-participant dominance.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** CapRate (proposed: 25% — no single participant may receive more than 25% of the Reward Pool in a single cycle).

### 14.2 Cap Application

**KR-ECO-048 (Cap Application).** If a participant's calculated Reward Share would exceed the cap:

```
If RewardAmount_i > CapIndividual:
    CappedReward_i = CapIndividual
    Excess_i = RewardAmount_i − CapIndividual
```

The excess is returned to the pool and redistributed pro-rata among non-capped participants. If no non-capped participants remain, the excess is carried forward to the next cycle or used per governance direction.

### 14.3 Pro-Rata Adjustment

**KR-ECO-049 (Pro-Rata Adjustment).** If the sum of calculated rewards (after cap application) would exceed the Reward Pool, pro-rata adjustment is applied:

```
If Σ(RewardAmount_i) > RP_cycle:
    ProRataFactor = RP_cycle / Σ(RewardAmount_i)
    AdjustedReward_i = RewardAmount_i × ProRataFactor
    Σ(AdjustedReward_i) = RP_cycle
```

Every participant's reward is reduced by the same factor. The sum exactly equals the Reward Pool. No unfunded liability.

### 14.4 Combined Cap and Pro-Rata Proof

**KR-ECO-050 (Combined Cap and Pro-Rata).** The combined invariant — that the sum of all rewards (after both cap and pro-rata) never exceeds the Reward Pool — is guaranteed by the following proof:

```
Step 1: Calculate raw rewards: RewardAmount_i = Proportion_i × RP_cycle
Step 2: Apply individual cap: CappedReward_i = min(RewardAmount_i, CapIndividual)
Step 3: Sum capped rewards: S = Σ(CappedReward_i)
         Since each CappedReward_i ≤ RewardAmount_i, S ≤ Σ(RewardAmount_i) = RP_cycle
         (Because Σ(Proportion_i) = 1.0, so Σ(RewardAmount_i) = RP_cycle)
         Therefore S ≤ RP_cycle
Step 4: If S < RP_cycle (some participants were capped), redistribute excess:
         Excess = RP_cycle − S ≥ 0
         Redistribute excess pro-rata among non-capped participants
         After redistribution, Σ(final rewards) = RP_cycle
Step 5: If any redistribution would cause a non-capped participant to exceed the cap,
         apply cap again and repeat (iterative cap-redistribution)
Step 6: The process converges because each iteration reduces the number of
         non-capped participants. The final sum always equals RP_cycle.
Step 7: Pro-rata safeguard: if at any point Σ(final rewards) > RP_cycle,
         apply pro-rata: ProRataFactor = RP_cycle / Σ(final rewards) ≤ 1.0
         Σ(adjusted) = RP_cycle

Therefore: Σ(RewardAmount_i) ≤ RP_cycle in all cases. ∎
```

The iterative cap-redistribution process is formally specified in the distribution mechanics (Chapter 45).

### 14.5 Undistributed Amounts

**KR-ECO-051 (Undistributed Amounts).** Any amount not distributed in a cycle (due to caps, pro-rata, or insufficient eligible participants) shall be:

1. Carried forward to the next cycle's Reward Pool, OR
2. Used per governance direction (e.g., funding coronation awards, special campaigns).

Undistributed amounts are NOT distributed to ineligible participants. They are NOT lost. They remain within the reward system.

---

## Chapter 15 — Reserve Protection

### 15.1 Reserve Definition

**KR-ECO-052 (Reserve).** The reserve is 10% of QEV for each transaction. The reserve accumulates across all transactions in a cycle:

```
Reserve_cycle = Σ(R) = Σ(0.10 × QEV) for all qualifying transactions
```

### 15.2 Reserve Protection

**KR-ECO-053 (Reserve Protection).** The reserve is protected from reward distribution. The reserve shall NOT be used to fund:

1. Reward Pool shortfalls
2. Participant rewards
3. Leadership rewards
4. Benefits or incentives
5. Any operational expense

The reserve is a protected buffer that ensures the platform's financial stability. It is mathematically visible and governed.

### 15.3 Reserve and Reversals

**KR-ECO-054 (Reserve and Reversals).** When a transaction is reversed (refund, chargeback, fraud, settlement failure), the reserve from that transaction is handled as follows:

- **Same-cycle reversal:** The reserve is reversed along with the transaction (the transaction never contributed).
- **Later-cycle reversal:** The reserve from the reversed transaction remains protected. The reversal creates a negative adjustment to the current cycle's Reward Pool, NOT to the reserve. If the negative adjustment would make the Reward Pool negative, the adjustment is deferred to future cycles. The reserve is NOT used as a routine buffer for cross-cycle reversals.

This resolves the tension between reserve protection and reversal handling: the reserve is never tapped for routine reversal shortfalls. Instead, reversal shortfalls are handled through deferred adjustments and the undistributed-amounts mechanism (Chapter 14.5).

### 15.4 Reserve Visibility

**KR-ECO-055 (Reserve Visibility).** The reserve shall be transparently reported. The total reserve accumulated per cycle shall be published in the cycle report (Chapter 62). The reserve is visible to governance, auditors, and — in aggregate — to participants.

### 15.5 Reserve Governance

**KR-ECO-056 (Reserve Governance).** The reserve may only be used through formal governance approval. Any use of the reserve requires Governance Review (Chapter 58) and Executive Authority approval. The reserve is not a discretionary fund.

---

## Chapter 16 — Reversal Mechanisms

### 16.1 Reversal Types

**KR-ECO-057 (Reversal Types).** The following events trigger reversal of a transaction's contribution to K-Points and the Reward Pool:

1. **Refund** — a participant requests and receives a refund.
2. **Chargeback** — a payment processor reverses a transaction.
3. **Fraud** — a transaction is determined to be fraudulent.
4. **Settlement failure** — a transaction's settlement fails (payment processing failure).

### 16.2 Reversal Effect

**KR-ECO-058 (Reversal Effect).** When a transaction is reversed within the reversibility window:

```
K-Points:     Reversed (invalidated)
Reward Pool:  a_rewards + a_leadership removed from the pool
Vendor/Provider settlement: Reversed (by Wallet/Payments Engine)
Platform share: Not reversed (platform costs already incurred)
Reserve:      Same-cycle: reversed. Later-cycle: remains protected.
```

### 16.3 Reversibility Window

**KR-ECO-059 (Reversibility Window).** The reversibility window is the period during which a transaction may be reversed with full K-Points and Reward Pool reversal.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Reversibility window (proposed: 30 days from transaction completion).

### 16.4 Refund Reversal

**KR-ECO-060 (Refund Reversal).** When a refund is processed:

1. K-Points from the transaction are reversed.
2. The Reward Pool contribution (a_rewards + a_leadership) is removed.
3. The vendor/provider settlement is reversed by the Wallet/Payments Engine.
4. If the refund occurs in the same cycle, the Reward Pool is reduced and Reward Shares are recalculated.
5. If the refund occurs in a later cycle, a negative adjustment is applied to the current cycle's Reward Pool. Already-distributed rewards to non-fraudulent participants are not clawed back.

### 16.5 Chargeback Reversal

**KR-ECO-061 (Chargeback Reversal).** Chargeback reversal is identical to refund reversal (Chapter 16.4), with the addition that chargeback abuse patterns are monitored for fraud. Repeated chargeback abuse triggers sanctions (Chapter 57).

### 16.6 Fraud Reversal

**KR-ECO-062 (Fraud Reversal).** When fraud is confirmed:

1. Fraudulent K-Points are invalidated.
2. Rewards received through fraudulent activity are forfeited. Recovery is pursued from the fraudulent participant directly.
3. Artificial ring members are removed. Ring Contribution is recalculated.
4. Trust Score is reduced to reflect fraudulent activity.
5. No collateral harm: Reward Share already correctly paid to unrelated, non-fraudulent participants is not reduced (KR-GOV-030).

### 16.7 Settlement Failure Reversal

**KR-ECO-063 (Settlement Failure Reversal).** When a transaction's settlement fails:

1. The transaction is treated as not completed.
2. Provisionally accrued K-Points are reversed.
3. The Reward Pool contribution is removed.
4. The vendor/provider settlement is not executed.
5. The participant is not penalized for a settlement failure outside their control.

### 16.8 No Collateral Harm

**KR-GOV-030 (No Collateral Harm).** Correction of a fraudulent participant's standing must never reduce Reward Share already correctly paid to non-fraudulent participants. Reversal of a fraudulent transaction affects only the fraudulent participant and the Reward Pool — not the rewards of other participants.

---

# Part IV — K-Points System

## Chapter 17 — K-Points Overview

### 17.1 K-Points Definition

**KR-PNT-001 (K-Points Definition).** K-Points are the platform's unit of measurable activity contribution. K-Points accrue from genuine, verified activity and reset to zero at the end of each Monthly Reward Cycle. K-Points are one of the four pillar inputs to Reward Share (Chapter 44).

### 17.2 K-Points and Reward Share

K-Points provide the monthly activity measure that feeds into Reward Share. A participant's monthly K-Points, combined with their Ring Contribution, K-Level Multiplier, and K-Trust, determine their proportional claim on the Reward Pool.

### 17.3 K-Points and Lifetime Statistics

While K-Points reset monthly, they accumulate in Lifetime Statistics — permanent records of cumulative K-Points, cycles participated, and K-Level history. Lifetime Statistics drive K-Level progression and are protected from retroactive reduction except through the formal correction process (Chapter 21).

### 17.4 K-Points and Genuine Activity

**KR-PNT-002 (Genuine Activity).** K-Points are earned only from genuine, verified, value-creating activities. Recruitment alone does not earn K-Points. Artificial transactions, fake purchases, and any activity that does not originate from genuine economic or platform engagement do not earn K-Points.

---

## Chapter 18 — K-Points Categories

### 18.1 Eight Categories

**KR-PNT-003 (Eight Categories).** K-Points are organized into eight categories:

| # | Category | Source | K-Point Rule (Proposed) | Trust Gate |
|---|---|---|---|---|
| 1 | Commerce K-Points | Verified commerce transactions (buyer and vendor) | 1 K-Point per ₦100 of genuine transaction value | Trust ≥ 20 (buyer); Trust ≥ 40 (vendor) |
| 2 | Service K-Points | Verified service transactions (provider and client) | 1 K-Point per ₦100 of genuine service value | Trust ≥ 20 (client); Trust ≥ 40 (provider) |
| 3 | Referral K-Points | Qualifying referral that leads to a completed transaction | 10 K-Points per qualifying referral | Trust ≥ 20 |
| 4 | Business K-Points | Verified business tool actions | 5 K-Points per verified business tool action | Trust ≥ 20 |
| 5 | Vendor K-Points | Genuine vendor sales (vendor only) | 1 K-Point per ₦100 of genuine vendor sales | Trust ≥ 40 |
| 6 | Community K-Points | Verified community contributions | 3 K-Points per verified community contribution | Trust ≥ 20 |
| 7 | Campaign K-Points | Approved campaign participation | Defined per campaign | Trust ≥ 20 |
| 8 | Learning K-Points | Verified learning achievements | 5 per course completion; 10 per learning path; 2 per assessment pass | Trust ≥ 20 |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All K-Point values per activity type.

### 18.2 Category Descriptions

**Commerce K-Points** are earned by both the buyer and the vendor in a genuine commerce transaction. The buyer earns K-Points for genuine purchases; the vendor earns K-Points for genuine sales. Both must meet the applicable Trust gate.

**Service K-Points** are earned by both the provider and the client in a genuine service transaction.

**Referral K-Points** are earned when a referral leads to a completed transaction. The referral must result in genuine economic activity — recruitment alone does not earn Referral K-Points.

**Business K-Points** are earned for verified business tool actions — using platform business tools for genuine business purposes.

**Vendor K-Points** are earned by vendors for genuine vendor sales, in addition to Commerce K-Points. The vendor must meet the higher Trust gate (≥ 40).

**Community K-Points** are earned for verified community contributions — genuine participation in community forums, content creation, and helpful interactions.

**Campaign K-Points** are earned for approved campaign participation. The K-Point value is defined per campaign and approved through governance.

**Learning K-Points** are the eighth category, added per LEARN-AD-1 (approved). Learning K-Points integrate Learning with the shared K-Rewards framework. They are earned for verified learning achievements: course completions, learning path completions, and assessment passes.

### 18.3 Learning K-Points Integration

**KR-PNT-004 (Learning K-Points Integration).** Learning K-Points follow the same rules as all other categories: they require genuine activity, validation, a K-Point rule, a cap, an anti-fraud rule, an audit record, and a reversal mechanism. Learning is not an isolated rewards ecosystem — it integrates with the shared K-Rewards framework.

---

## Chapter 19 — K-Points Calculation

### 19.1 Calculation Formula

**KR-PNT-005 (Calculation Formula).** K-Points for a single activity event are calculated as:

```
K-Points_i = K-Point Rule_i × Activity Value_i

Where:
  K-Point Rule_i = the K-Points per unit for activity type i
  Activity Value_i = the verified activity value (e.g., transaction amount, count)
```

### 19.2 Monthly K-Points Total

**KR-PNT-006 (Monthly Total).** A participant's total K-Points for a cycle is the sum across all categories:

```
Monthly K-Points = Σ(K-Points_i) for all activity events i in the cycle
```

### 19.3 K-Points and the Reward Share

Monthly K-Points are normalized for blending with other pillars in the Reward Share calculation (Chapter 44). Normalization ensures that K-Points are on a comparable scale with Ring Contribution, K-Level Multiplier, and K-Trust.

### 19.4 Activity Validation

**KR-SRC-003 (Activity Validation).** Every K-Point accrual requires:

1. **Source event** — a genuine activity event is reported by the originating engine.
2. **Validation** — the K-Rewards Engine validates the event (genuine, verified, not duplicated).
3. **K-Point rule** — the applicable K-Point rule is applied.
4. **Cap check** — the category cap is checked.
5. **Trust gate check** — the participant's Trust Score meets the category's trust gate.
6. **Audit record** — the event and calculation are recorded for audit.
7. **Reversal mechanism** — the K-Points can be reversed if the transaction is reversed.

---

## Chapter 20 — Monthly Reset and Caps

### 20.1 Monthly Reset

**KR-PNT-007 (Monthly Reset).** K-Points reset to zero at the end of each Monthly Reward Cycle. The reset occurs during the Reset stage of the cycle (Chapter 63). After reset, K-Points begin accruing anew for the next cycle.

### 20.2 Monthly Caps

**KR-PNT-008 (Monthly Caps).** Each K-Points category has a monthly cap to prevent any single activity type from dominating the K-Points total. The cap limits the maximum K-Points that can be earned in a category per cycle.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Monthly cap per category (proposed values to be defined per category during governance review).

### 20.3 Minimum K-Points Threshold

**KR-PNT-009 (Minimum Threshold).** A participant must earn at least the minimum K-Points threshold in a cycle to be eligible for Reward Share.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Minimum K-Points threshold (proposed: 50 K-Points total across all categories in the cycle).

### 20.4 Relationship Between Minimum Threshold and Maintenance

**KR-PNT-010 (Threshold vs. Maintenance).** The minimum K-Points threshold (Chapter 20.3) determines basic Reward Share eligibility. The tiered maintenance requirements (Chapter 35) determine whether a participant retains the privileges of their K-Level. These are distinct:

- A participant may meet the minimum threshold (50 K-Points) and be eligible for a basic Reward Share while simultaneously failing the maintenance requirements of their tier (e.g., 400 K-Points for Leadership tier).
- In that case, the participant receives a basic Reward Share but their K-Level Multiplier is reduced to 1.0× and their tiered benefits are paused.

---

## Chapter 21 — Lifetime Statistics

### 21.1 Lifetime Statistics Definition

**KR-PNT-020 (Lifetime Statistics).** Lifetime Statistics are permanent records of a participant's cumulative K-Points, cycles participated, and K-Level history. Lifetime Statistics drive K-Level progression.

### 21.2 Lifetime Statistics Components

| Component | Description |
|---|---|
| **Cumulative K-Points** | Total K-Points earned across all cycles, never reduced except through formal correction |
| **Cycles participated** | Number of cycles in which the participant met the minimum activity requirement |
| **K-Level history** | History of K-Level achievements, promotions, and standing-based adjustments |

### 21.3 Lifetime Statistics Protection

**KR-PNT-021 (Lifetime Statistics Protection).** Lifetime Statistics are protected from retroactive reduction except through the formal correction process. The formal correction process requires:

1. A confirmed finding (fraud, error, or reversal).
2. Documentation of the finding.
3. Adjustment of the affected Lifetime Statistics.
4. Audit record of the correction.

No policy change may retroactively reduce Lifetime Statistics. Changes are prospective only.

### 21.4 Lifetime Statistics and K-Level Progression

Lifetime Statistics drive K-Level progression. A participant's cumulative K-Points determine their eligibility for K-Level promotion. A participant's cycles participated determine their active-month requirement. A participant's K-Level history provides the record of their progression through the platform's leadership system.

---

## Chapter 22 — K-Points Reversibility

### 22.1 Reversibility Principle

**KR-PNT-022 (Reversibility Principle).** K-Points from a transaction may be reversed if the transaction is reversed (refund, chargeback, fraud, settlement failure) within the reversibility window.

### 22.2 Reversibility Window

**KR-PNT-023 (Reversibility Window).** The reversibility window is the period during which a transaction may be reversed with full K-Points and Reward Pool reversal.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Reversibility window (proposed: 30 days from transaction completion).

### 22.3 Reversal Process

**KR-PNT-024 (Reversal Process).** When a transaction is reversed within the reversibility window:

1. The K-Points from the transaction are invalidated.
2. The Reward Pool contribution is removed.
3. The participant's Monthly K-Points are reduced (if same cycle) or a negative adjustment is applied (if later cycle).
4. The participant's Lifetime Statistics are adjusted through the formal correction process.
5. The reversal is recorded for audit.

### 22.4 Reversal After Window

**KR-PNT-025 (Reversal After Window).** If a transaction is reversed after the reversibility window:

1. K-Points are not automatically reversed (they have been "locked in").
2. However, if fraud is determined, K-Points are invalidated regardless of the window (fraud reversal, Chapter 16.6).
3. The Reward Pool contribution is still removed through a negative adjustment.

---

# Part V — K-Rings System

## Chapter 23 — K-Rings Overview

### 23.1 K-Rings Definition

**KR-RNG-001 (K-Rings Definition).** K-Rings are the structural measurement of a participant's network depth and quality. A participant's network is divided into five rings based on graph distance from the participant. K-Rings provide Ring Contribution, which is one of the four pillar inputs to Reward Share.

### 23.2 K-Rings and Leadership Development

K-Rings are also the structural basis for Leadership Development requirements (Chapter 37). Higher K-Levels require specific minimum quantities of qualified members within each ring, and each ring may require members to have achieved specified minimum K-Levels. This is the ring-specific dimension of Leadership Multiplication.

### 23.3 Automatic Ring Assignment

**KR-RNG-002 (Automatic Ring Assignment).** Ring membership is calculated automatically by the platform from the referral/network graph. The platform must calculate ring membership automatically from the referral/network graph. Users must not be allowed to manually assign their ring.

### 23.4 Measurable Network Depth

**KR-RNG-003 (Measurable Network Depth).** Rings represent measurable network depth — the genuine, verified depth of a participant's network influence. The platform must be capable of evaluating the K-Level of members within each ring, so that a leader's Leadership Multiplication can be assessed against the actual capability of their network, not merely its size.

---

## Chapter 24 — Ring Formation and Graph Distance

### 24.1 Ring Formation

**KR-RNG-004 (Ring Formation).** Rings are determined by graph distance from the participant:

| Ring | Graph Distance | Description |
|---|---|---|
| Ring 1 | 1 (directly connected) | Directly referred/connected qualifying participant |
| Ring 2 | 2 (one level deeper) | Participant one level deeper than Ring 1 |
| Ring 3 | 3 (two levels deeper) | Participant two levels deeper than Ring 1 |
| Ring 4 | 4 (three levels deeper) | Participant three levels deeper than Ring 1 |
| Ring 5 | 5 (four levels deeper) | Participant four levels deeper than Ring 1 |

### 24.2 Graph Distance Calculation

**KR-RNG-005 (Graph Distance).** Graph distance is the shortest path in the referral/network graph from the participant to the member. A participant directly referred by the leader is at distance 1 (Ring 1). A participant referred by a Ring 1 member is at distance 2 (Ring 2), and so on through Ring 5.

### 24.3 Ring Membership Rules

**KR-RNG-006 (Ring Membership Rules).** A participant is a member of exactly one ring relative to any given leader — the ring corresponding to their graph distance. A participant may be in Ring 1 of one leader and Ring 3 of another. Ring membership is relative to the leader being evaluated.

### 24.4 Qualifying Members

**KR-RNG-007 (Qualifying Members).** Only qualifying participants count toward ring requirements. A qualifying participant is one who:

1. Has Active Status (meets personal activity requirement).
2. Is engaged in genuine activity within the activity window.
3. Is not under an active sanction.
4. Has not been removed for fraud or inactivity.

---

## Chapter 25 — Ring Weights and Density Gates

### 25.1 Ring Weights

**KR-RNG-008 (Ring Weights).** Each ring carries a weight in the Ring Contribution calculation. Closer rings carry higher weights, reflecting the stronger influence and more direct leadership relationship.

| Ring | Weight | Rationale |
|---|---|---|
| Ring 1 | 0.40 | Direct relationship — strongest influence |
| Ring 2 | 0.25 | One level removed — strong influence |
| Ring 3 | 0.15 | Two levels removed — moderate influence |
| Ring 4 | 0.12 | Three levels removed — emerging influence |
| Ring 5 | 0.08 | Four levels removed — depth indicator |
| **Total** | **1.00** | |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All ring weights (proposed: 0.40, 0.25, 0.15, 0.12, 0.08 — summing to 1.00).

**Weight sum verification:** 0.40 + 0.25 + 0.15 + 0.12 + 0.08 = 1.00 ✓

### 25.2 Ring Density Gates

**KR-RNG-009 (Ring Density Gates).** Each ring has a density gate — a minimum number of active members required for the ring to contribute to Ring Contribution. If a ring has fewer than the density gate, it contributes zero to Ring Contribution.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Ring density thresholds (proposed values to be defined per ring during governance review).

### 25.3 Density Gate Rationale

Density gates prevent a participant from claiming Ring Contribution from a ring with only one or two inactive members. The gate ensures that Ring Contribution reflects genuine, active network depth, not merely the existence of referrals.

---

## Chapter 26 — Ring Contribution

### 26.1 Ring Contribution Definition

**KR-RNG-010 (Ring Contribution Definition).** Ring Contribution is a measure of a participant's network's contribution to platform activity, weighted by ring. Ring Contribution is one of the four pillar inputs to Reward Share.

### 26.2 Ring Contribution Formula

**KR-RNG-011 (Ring Contribution Formula).** Ring Contribution is calculated as:

```
Ring Contribution = Σ(w_r × D_r × A_r) for rings r = 1 to 5

Where:
  w_r = ring weight for ring r (Chapter 25.1)
  D_r = density factor for ring r (1.0 if ring meets density gate, 0.0 if not)
  A_r = aggregate activity score for ring r (sum of qualifying members' activity)
```

### 26.3 Dual Purpose of Ring Contribution

**KR-RNG-012 (Dual Purpose).** Ring Contribution serves two purposes:

1. **Reward input** — contributes to Reward Share calculation (Chapter 44).
2. **Maintenance metric** — the minimum Ring Contribution required to maintain K-Level privileges (Chapter 35).

Ring Contribution for both purposes is calculated identically.

### 26.4 Ring Contribution Normalization

Ring Contribution is normalized for blending with other pillars in the Reward Share calculation (Chapter 44). Normalization ensures that Ring Contribution is on a comparable scale with K-Points, K-Level Multiplier, and K-Trust.

---

## Chapter 27 — Ring Maintenance and Decay

### 27.1 Ring Member Activity

**KR-RNG-013 (Ring Member Activity).** A ring member must engage in genuine activity at least once within the activity window to remain active. Active ring members count toward ring requirements and Ring Contribution.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Activity window (proposed: 90 days — a ring member must engage in genuine activity at least once every 90 days to remain active).

### 27.2 Ring Decay

**KR-RNG-014 (Ring Decay).** If a ring member does not engage in genuine activity within the activity window, they become inactive. Inactive ring members:

1. Do not count toward ring member requirements.
2. Do not contribute to Ring Contribution.
3. Are not removed from the ring — they remain in the graph but are flagged as inactive.
4. Can become active again by engaging in genuine activity.

### 27.3 Ring Regeneration

**KR-RNG-015 (Ring Regeneration).** A decayed ring member can regenerate by engaging in genuine activity. Once they meet the activity requirement, they become active again and count toward ring requirements and Ring Contribution.

---

## Chapter 28 — Ring Fraud Scrutiny

### 28.1 Ring Fraud Detection

**KR-RNG-016 (Ring Fraud Detection).** The platform shall monitor ring structures for fraudulent patterns, including:

1. **Circular referrals** — participants referring each other to inflate ring counts.
2. **Self-referral** — a participant referring themselves through alternate accounts.
3. **Duplicate accounts** — multiple accounts controlled by one participant to inflate ring membership.
4. **Artificial ring inflation** — patterns that inflate ring counts without genuine activity.

### 28.2 Ring Fraud Response

**KR-RNG-017 (Ring Fraud Response).** When ring fraud is detected:

1. Artificial ring members are removed.
2. Ring Contribution is recalculated without the artificial members.
3. K-Level requirements are re-evaluated.
4. The fraudulent participant is subject to sanctions (Chapter 57).
5. No collateral harm to non-fraudulent participants (KR-GOV-030).

### 28.3 Ring Fraud and Trust

Ring fraud detection reduces the participant's Trust Score (Chapter 40) and may trigger sanctions. Ring fraud is a serious violation because it attempts to manipulate the structural basis of Leadership Multiplication.

---
# Part VI — K-Levels System

## Chapter 29 — K-Levels Overview

### 29.1 K-Levels Definition

**KR-LVL-001 (K-Levels Definition).** K-Levels are the platform's measure of long-term leadership and contribution. K-Levels are a fifteen-level permanent progression system organized into five tiers. Once achieved, a K-Level is protected under the Permanent Status Policy (Chapter 34). K-Levels carry progressive Reward Share Multipliers and, at the Leadership Tier and above, require sustained active-member density, trust standing, freedom from sanctions, and Leadership Multiplication.

### 29.2 K-Levels and Reward Share

K-Levels provide the K-Level Multiplier, which is one of the four pillar inputs to Reward Share (Chapter 44). A participant's K-Level Multiplier amplifies their Reward Share, reflecting their long-term contribution and leadership standing.

### 29.3 K-Levels and Leadership Multiplication

At the Leadership Tier (Level 7) and above, K-Level promotion requires evidence of Leadership Multiplication — the development of other qualified leaders (Chapter 36). This is the structural mechanism that enforces the Anti-Accumulation Principle: a participant cannot reach top-tier leadership through referral accumulation alone.

### 29.4 K-Levels and Royal Identity

K-Levels are mapped to Royal Leadership Identity tiers (Chapter 51). A participant's K-Level determines their royal title (Normal, Prince, Crown Prince, King).

### 29.5 K-Levels and Tiered Benefits

K-Levels unlock tiered benefits (Chapter 71). Higher tiers carry lifestyle benefits — welcome kits, discounts, travel vouchers, car incentives, housing funds — funded from platform operating margin, not the Reward Pool. Benefits require Active Status at the participant's K-Level (Chapter 35).

---

## Chapter 30 — The Fifteen Levels and Five Tiers

### 30.1 Tier Structure

**KR-LVL-007 (Tier Structure).** The fifteen K-Levels are organized into five tiers:

| Tier | Levels | Royal Title | Theme |
|---|---|---|---|
| Foundation | 1–3 | Normal | Building genuine activity base |
| Growth | 4–6 | Normal | Developing network and depth |
| Leadership | 7–9 | Prince | Leading and developing leaders |
| Executive | 10–12 | Crown Prince | Leading leaders of leaders |
| Legacy | 13–15 | King | Deepest leadership multiplication |

### 30.2 The Fifteen Levels

**KR-LVL-008 (Fifteen Levels).** The system shall implement exactly fifteen K-Levels:

| Level | Tier | Title | Royal Identity |
|---|---|---|---|
| 1 | Foundation | Foundation Member | Normal |
| 2 | Foundation | Foundation Builder | Normal |
| 3 | Foundation | Foundation Leader | Normal |
| 4 | Growth | Growth Member | Normal |
| 5 | Growth | Growth Builder | Normal |
| 6 | Growth | Growth Leader | Normal |
| 7 | Leadership | Leadership Member | Prince |
| 8 | Leadership | Leadership Builder | Prince |
| 9 | Leadership | Leadership Leader | Prince |
| 10 | Executive | Executive Member | Crown Prince |
| 11 | Executive | Executive Builder | Crown Prince |
| 12 | Executive | Executive Leader | Crown Prince |
| 13 | Legacy | Legacy Member | King |
| 14 | Legacy | Legacy Builder | King |
| 15 | Legacy | Legacy Leader | King |

---

## Chapter 31 — K-Level Progression Matrix

### 31.1 Progression Matrix Definition

**KR-LVL-009 (Progression Matrix).** Each K-Level shall define the following seventeen fields:

1. Level number
2. Tier
3. Title
4. Royal identity
5. K-Level multiplier
6. Minimum lifetime K-Points
7. Active-month requirement
8. Personal activity requirement (min K-Points per cycle)
9. Trust requirement
10. Ring 1 requirement
11. Ring 2 requirement
12. Ring 3 requirement
13. Ring 4 requirement
14. Ring 5 requirement
15. Leadership development requirement
16. Active Status requirement
17. Reward eligibility

All specific numerical values in the progression matrix are **GOVERNANCE PARAMETERS — REQUIRES APPROVAL**. The proposed values below are calculated to create a coherent, progressively harder progression where every field is strictly increasing at every level. They are not approved values until governance approves them.

### 31.2 The Complete K-Level Progression Matrix

**Foundation Tier (Levels 1–3)**

| Field | Level 1 | Level 2 | Level 3 |
|---|---|---|---|
| **Level number** | 1 | 2 | 3 |
| **Tier** | Foundation | Foundation | Foundation |
| **Title** | Foundation Member | Foundation Builder | Foundation Leader |
| **Royal identity** | Normal | Normal | Normal |
| **K-Level multiplier** | 1.0× | 1.1× | 1.2× |
| **Min lifetime K-Points** | 0 | 500 | 2,000 |
| **Active-month requirement** | 0 | 1 | 3 |
| **Personal activity (K-Points/cycle)** | 50 | 55 | 60 |
| **Trust requirement** | 20 | 25 | 30 |
| **Ring 1 requirement** | 0 | 0 | 3 active |
| **Ring 2 requirement** | 0 | 0 | 0 |
| **Ring 3 requirement** | 0 | 0 | 0 |
| **Ring 4 requirement** | 0 | 0 | 0 |
| **Ring 5 requirement** | 0 | 0 | 0 |
| **Leadership development** | None | None | None |
| **Active Status** | Required | Required | Required |
| **Reward eligibility** | Eligible | Eligible | Eligible |

**Growth Tier (Levels 4–6)**

| Field | Level 4 | Level 5 | Level 6 |
|---|---|---|---|
| **Level number** | 4 | 5 | 6 |
| **Tier** | Growth | Growth | Growth |
| **Title** | Growth Member | Growth Builder | Growth Leader |
| **Royal identity** | Normal | Normal | Normal |
| **K-Level multiplier** | 1.3× | 1.4× | 1.5× |
| **Min lifetime K-Points** | 5,000 | 12,000 | 25,000 |
| **Active-month requirement** | 6 | 9 | 12 |
| **Personal activity (K-Points/cycle)** | 80 | 90 | 100 |
| **Trust requirement** | 35 | 40 | 45 |
| **Ring 1 requirement** | 5 active | 8 active | 10 active |
| **Ring 2 requirement** | 3 active | 5 active | 8 active |
| **Ring 3 requirement** | 0 | 3 active | 5 active |
| **Ring 4 requirement** | 0 | 0 | 3 active |
| **Ring 5 requirement** | 0 | 0 | 0 |
| **Leadership development** | None | None | None |
| **Active Status** | Required | Required | Required |
| **Reward eligibility** | Eligible | Eligible | Eligible |

**Leadership Tier (Levels 7–9)** — Leadership Multiplication begins

| Field | Level 7 | Level 8 | Level 9 |
|---|---|---|---|
| **Level number** | 7 | 8 | 9 |
| **Tier** | Leadership | Leadership | Leadership |
| **Title** | Leadership Member | Leadership Builder | Leadership Leader |
| **Royal identity** | Prince | Prince | Prince |
| **K-Level multiplier** | 1.7× | 1.9× | 2.1× |
| **Min lifetime K-Points** | 50,000 | 100,000 | 200,000 |
| **Active-month requirement** | 18 | 24 | 30 |
| **Personal activity (K-Points/cycle)** | 130 | 150 | 170 |
| **Trust requirement** | 55 | 60 | 65 |
| **Ring 1 requirement** | 15 active, min 2 at L4+ | 20 active, min 3 at L4+ | 25 active, min 5 at L4+ |
| **Ring 2 requirement** | 12 active | 15 active, min 1 at L4+ | 20 active, min 2 at L4+ |
| **Ring 3 requirement** | 8 active | 12 active | 15 active, min 1 at L4+ |
| **Ring 4 requirement** | 5 active | 8 active | 10 active |
| **Ring 5 requirement** | 3 active | 5 active | 8 active |
| **Leadership development** | Min 2 Ring 1 at L4+ | Min 3 Ring 1 at L4+ | Min 5 Ring 1 at L4+ |
| **Active Status** | Required | Required | Required |
| **Reward eligibility** | Eligible | Eligible | Eligible |

**Executive Tier (Levels 10–12)** — Advanced Leadership Multiplication

| Field | Level 10 | Level 11 | Level 12 |
|---|---|---|---|
| **Level number** | 10 | 11 | 12 |
| **Tier** | Executive | Executive | Executive |
| **Title** | Executive Member | Executive Builder | Executive Leader |
| **Royal identity** | Crown Prince | Crown Prince | Crown Prince |
| **K-Level multiplier** | 2.4× | 2.7× | 3.0× |
| **Min lifetime K-Points** | 400,000 | 800,000 | 1,500,000 |
| **Active-month requirement** | 36 | 42 | 48 |
| **Personal activity (K-Points/cycle)** | 200 | 220 | 250 |
| **Trust requirement** | 70 | 75 | 80 |
| **Ring 1 requirement** | 30 active, min 5 at L7+ | 40 active, min 8 at L7+ | 50 active, min 10 at L7+ |
| **Ring 2 requirement** | 25 active, min 3 at L7+ | 30 active, min 5 at L7+ | 40 active, min 8 at L7+ |
| **Ring 3 requirement** | 20 active, min 2 at L4+ | 25 active, min 3 at L4+ | 30 active, min 5 at L4+ |
| **Ring 4 requirement** | 15 active, min 1 at L4+ | 20 active, min 2 at L4+ | 25 active, min 3 at L4+ |
| **Ring 5 requirement** | 10 active | 15 active, min 1 at L4+ | 20 active, min 2 at L4+ |
| **Leadership development** | Min 5 Ring 1 at L7+ | Min 8 Ring 1 at L7+ | Min 10 Ring 1 at L7+ |
| **Active Status** | Required | Required | Required |
| **Reward eligibility** | Eligible | Eligible | Eligible |

**Legacy Tier (Levels 13–15)** — Deep Leadership Multiplication

| Field | Level 13 | Level 14 | Level 15 |
|---|---|---|---|
| **Level number** | 13 | 14 | 15 |
| **Tier** | Legacy | Legacy | Legacy |
| **Title** | Legacy Member | Legacy Builder | Legacy Leader |
| **Royal identity** | King | King | King |
| **K-Level multiplier** | 3.5× | 4.0× | 5.0× |
| **Min lifetime K-Points** | 3,000,000 | 6,000,000 | 12,000,000 |
| **Active-month requirement** | 54 | 60 | 72 |
| **Personal activity (K-Points/cycle)** | 280 | 300 | 350 |
| **Trust requirement** | 85 | 90 | 95 |
| **Ring 1 requirement** | 60 active, min 15 at L7+ | 75 active, min 20 at L7+ | 100 active, min 25 at L7+ |
| **Ring 2 requirement** | 50 active, min 10 at L7+ | 60 active, min 15 at L7+ | 75 active, min 20 at L7+ |
| **Ring 3 requirement** | 40 active, min 5 at L4+ | 50 active, min 8 at L4+ | 60 active, min 10 at L4+ |
| **Ring 4 requirement** | 30 active, min 3 at L4+ | 40 active, min 5 at L4+ | 50 active, min 8 at L4+ |
| **Ring 5 requirement** | 25 active, min 2 at L4+ | 30 active, min 3 at L4+ | 40 active, min 5 at L4+ |
| **Leadership development** | Min 15 Ring 1 at L7+ | Min 20 Ring 1 at L7+ | Min 25 Ring 1 at L7+ |
| **Executive-tier Ring 1** | Min 4 at L10+ | Min 8 at L10+ | Min 12 at L10+ |
| **Active Status** | Required | Required | Required |
| **Reward eligibility** | Eligible | Eligible | Eligible |

### 31.3 Progression Coherence

**KR-LVL-010 (Strictly Increasing Progression).** Each K-Level shall be strictly harder to achieve than the one before it. No K-Level may have any requirement equal to or lower than the preceding level. This applies to ALL fields:

- **Lifetime K-Points** strictly increase: 0 < 500 < 2,000 < 5,000 < 12,000 < 25,000 < 50,000 < 100,000 < 200,000 < 400,000 < 800,000 < 1,500,000 < 3,000,000 < 6,000,000 < 12,000,000 ✓
- **Active-month requirement** strictly increases: 0 < 1 < 3 < 6 < 9 < 12 < 18 < 24 < 30 < 36 < 42 < 48 < 54 < 60 < 72 ✓
- **Personal activity** strictly increases: 50 < 55 < 60 < 80 < 90 < 100 < 130 < 150 < 170 < 200 < 220 < 250 < 280 < 300 < 350 ✓
- **Trust requirement** strictly increases: 20 < 25 < 30 < 35 < 40 < 45 < 55 < 60 < 65 < 70 < 75 < 80 < 85 < 90 < 95 ✓
- **K-Level multiplier** strictly increases: 1.0 < 1.1 < 1.2 < 1.3 < 1.4 < 1.5 < 1.7 < 1.9 < 2.1 < 2.4 < 2.7 < 3.0 < 3.5 < 4.0 < 5.0 ✓
- **Ring 1 active members** strictly increase: 0 < 0 < 3 < 5 < 8 < 10 < 15 < 20 < 25 < 30 < 40 < 50 < 60 < 75 < 100 ✓

Every field is strictly increasing at every level. The progression is coherent and progressively harder. ✓

---

## Chapter 32 — K-Level Multipliers

### 32.1 Progressive Multipliers

**KR-LVL-011 (Progressive Multipliers).** The system shall apply progressive Reward Share Multipliers based on K-Level, with each level having a higher multiplier than the one before:

| Level | Multiplier |
|---|---|
| 1 | 1.0× |
| 2 | 1.1× |
| 3 | 1.2× |
| 4 | 1.3× |
| 5 | 1.4× |
| 6 | 1.5× |
| 7 | 1.7× |
| 8 | 1.9× |
| 9 | 2.1× |
| 10 | 2.4× |
| 11 | 2.7× |
| 12 | 3.0× |
| 13 | 3.5× |
| 14 | 4.0× |
| 15 | 5.0× |

### 32.2 Multiplier Cap

**KR-LVL-012 (Multiplier Cap).** K-Level Multipliers shall be capped at 5.0× to prevent any single participant from dominating the Reward Share calculation. No K-Level may carry a multiplier exceeding the MultiplierCap. The maximum multiplier (5.0× at Level 15) is at the cap.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** MultiplierCap (proposed: 5.0×).

### 32.3 Multiplier Application

**KR-LVL-013 (Multiplier Application).** The K-Level Multiplier is applied during Reward Share calculation (Chapter 44). It amplifies the participant's Reward Share, reflecting their long-term contribution and leadership standing. The multiplier is one of the four pillar inputs to Reward Share, weighted at 0.20.

### 32.4 Multiplier and Maintenance

**KR-LVL-014 (Multiplier and Maintenance).** If a participant fails to meet the tiered maintenance requirements (Chapter 35), their K-Level Multiplier is reduced to 1.0× for that cycle. This means the participant receives a basic Reward Share (based on K-Points, Ring Contribution, and K-Trust) but does not benefit from their K-Level amplification. The multiplier is restored when maintenance requirements are met in a subsequent cycle.

---

## Chapter 33 — Unlock Requirements and Promotion

### 33.1 Unlock Requirements

**KR-LVL-015 (Unlock Requirements).** To unlock (be promoted to) a K-Level, a participant must meet ALL of the following requirements simultaneously:

1. **Lifetime K-Points** — meet the minimum lifetime K-Points for the target level.
2. **Active-month requirement** — meet the minimum active months for the target level.
3. **Personal activity** — meet the minimum K-Points per cycle for the target level.
4. **Trust requirement** — meet the minimum Trust Score for the target level.
5. **Ring requirements** — meet the minimum active member counts and minimum K-Level requirements for each ring (Ring 1–5) for the target level.
6. **Leadership development** — meet the Leadership Development requirement for the target level (from Level 7 onward).
7. **Executive-tier Ring 1** — meet the Executive-tier Ring 1 requirement for the target level (Legacy Tier only, L13–15).
8. **Active Status** — maintain Active Status.
9. **Freedom from sanctions** — not be under an active sanction that blocks promotion.

### 33.2 All-Requirements Principle

**KR-LVL-016 (All-Requirements Principle).** All requirements must be met simultaneously. Meeting some but not all requirements does not qualify a participant for promotion. There are no partial qualifications, no waivers, and no exceptions.

### 33.3 Promotion Process

**KR-LVL-017 (Promotion Process).** K-Level promotion occurs during the Calculation stage of the Monthly Reward Cycle (Chapter 63):

1. The K-Rewards Engine evaluates the participant against all unlock requirements for the target level.
2. If ALL requirements are met, the participant is promoted.
3. The promotion is recorded in the participant's K-Level history (Lifetime Statistics).
4. The new K-Level takes effect from the beginning of the next cycle.
5. The promotion is auditable.

### 33.4 Standing-Based Adjustment

**KR-LVL-018 (Standing-Based Adjustment).** A participant's privileges (but not their level) may be adjusted based on standing:

1. If a participant fails maintenance requirements, their multiplier is reduced to 1.0× and benefits are paused (Chapter 35).
2. If a participant's Trust Score drops below the threshold for their level, their privileges may be suspended (Chapter 43).
3. If a participant is sanctioned, their privileges may be suspended (Chapter 57).

In all cases, the K-Level itself is not demoted — only the privileges are suspended. The level is protected under the Permanent Status Policy (Chapter 34).

---

## Chapter 34 — Permanent Status Policy

### 34.1 The Permanent Status Policy

**KR-LVL-024 (Permanent Status Policy).** Once a participant has achieved a K-Level, that level is permanent and protected from retroactive demotion by policy changes. Changes to K-Level thresholds, requirements, or multipliers apply prospectively only — they do not affect already-achieved levels.

### 34.2 Prospective Application

**KR-LVL-019 (Prospective Application).** Changes to the K-Level framework apply prospectively only. If governance increases the requirements for a K-Level, participants who have already achieved that level retain it. The new requirements apply only to future promotions.

### 34.3 What the Policy Protects

The Permanent Status Policy protects:

- The K-Level itself — never retroactively demoted by policy changes.
- The K-Level history — the record of achievement is permanent.
- Lifetime Statistics — never retroactively reduced by policy changes (only by formal correction for fraud or error).

### 34.4 What the Policy Does Not Protect

The Permanent Status Policy does NOT protect:

- **Privileges** — the multiplier, tiered benefits, and recognition may be temporarily suspended for failure to meet maintenance requirements, trust standing, or sanctions (see Chapter 34.6 below).
- **Reward eligibility** — a participant must maintain Active Status to be eligible for rewards.
- **Promotion to higher levels** — a participant must meet the current (potentially updated) requirements for promotion to a higher level.

### 34.5 Policy Binding

**KR-LVL-020 (Policy Binding).** The Permanent Status Policy is binding on all downstream documents. No downstream document may retroactively demote a participant's K-Level due to policy changes. The only mechanism for altering the Permanent Status Policy is formal amendment of this document through the Governance Review process.

### 34.6 Level vs. Privileges Distinction

**KR-LVL-021 (Level vs. Privileges Distinction).** The Permanent Status Policy distinguishes between two things:

1. **The K-Level itself** — permanent, protected, never retroactively demoted.
2. **The privileges of the K-Level** — the multiplier, tiered benefits, and recognition that may be temporarily suspended.

The level is what the participant has earned through long-term contribution and leadership. The privileges are what the participant enjoys while they maintain Active Status at that level.

**KR-LVL-022 (Privileges Defined).** The privileges of a K-Level include:

- K-Level Multiplier (Chapter 32)
- Tiered benefits — travel, car, house, and other lifestyle incentives (Chapter 71)
- Royal Leadership Identity — title and visibility (Chapter 51)
- Recognition and visibility features
- Access to tiered governance and advisory roles

**KR-LVL-023 (Privilege Suspension).** Privileges may be suspended through:

1. Failure to meet Active Maintenance Requirements (Chapter 35) — the K-Level Multiplier is reduced to 1.0× and tiered benefits are paused for the cycle.
2. Standing-Based Adjustment (Chapter 33.4) — privileges adjusted based on trust or sanction standing.
3. Sanctions (Chapter 57) — privileges suspended as part of a sanction.

In all cases of privilege suspension, the K-Level itself is not demoted. The participant retains their level and may regain privileges.

**KR-LVL-025 (Privilege Restoration).** Suspended privileges shall be automatically restored upon:

1. Meeting maintenance requirements in a subsequent cycle (Chapter 35).
2. Restoring trust standing (Chapter 43).
3. Completing the sanction period (Chapter 57).

No retroactive privileges are paid for the suspended period. Restoration is prospective from the cycle in which the participant regains eligibility.

---

## Chapter 35 — K-Level Active Maintenance

### 35.1 Tiered Active Maintenance

**KR-LVL-026 (Tiered Active Maintenance).** To maintain the privileges of a K-Level — the K-Level Multiplier and tiered benefits (Chapter 71) — a participant must meet monthly maintenance requirements specific to their tier. Meeting the maintenance requirements is the basis of Active Status at a given K-Level.

| Tier | Levels | Personal K-Points (min per cycle) | Group Activity / Ring Contribution (min per cycle) |
|---|---|---|---|
| Foundation | 1–3 | 50 K-Points | None |
| Growth | 4–6 | 150 K-Points | 300 Ring Contribution |
| Leadership | 7–9 | 400 K-Points | 1,500 Ring Contribution |
| Executive | 10–12 | 800 K-Points | 4,000 Ring Contribution |
| Legacy | 13–15 | 1,500 K-Points | 10,000 Ring Contribution |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All tiered personal K-Points thresholds and all tiered Group Activity / Ring Contribution thresholds.

### 35.2 Group Activity Definition

**KR-LVL-027 (Group Activity Definition).** For maintenance purposes, Group Activity is measured as Ring Contribution (Chapter 26) from a participant's five-ring network, calculated identically to Ring Contribution for reward purposes:

```
Group Activity = Σ(w_r × D_r × A_r) for rings r = 1 to 5
```

This makes Ring Contribution a dual-purpose metric: a reward input (Chapter 44) and a maintenance metric.

### 35.3 Maintenance Effect

**KR-LVL-028 (Maintenance Effect).** Failure to meet tiered maintenance requirements in a cycle results in:

1. K-Level Multiplier reduced to 1.0× for that cycle.
2. Tiered benefits (Chapter 71) paused for that cycle.
3. K-Level itself remains permanent and protected (Permanent Status Policy, Chapter 34).
4. The participant remains eligible for K-Points accrual, Trust Score updates, and Lifetime Statistics accumulation.
5. The participant may regain full privileges by meeting requirements in a subsequent cycle.

### 35.4 Maintenance Grace

**KR-LVL-029 (Maintenance Grace).** A participant who fails maintenance requirements shall receive:

1. A one-cycle grace period before privileges are suspended.
2. Trust Protection (Chapter 43) for documented hardship or platform errors.
3. Automatic privilege restoration upon meeting requirements in a subsequent cycle.

### 35.5 Maintenance vs. Minimum Threshold

**KR-LVL-030 (Maintenance vs. Minimum Threshold).** The tiered maintenance requirements (this chapter) are distinct from the minimum K-Points threshold (Chapter 20). The minimum threshold (proposed: 50 K-Points) determines basic Reward Share eligibility. The tiered maintenance requirements determine whether a participant retains the privileges of their K-Level. A participant may be eligible for a basic Reward Share while simultaneously failing the maintenance requirements of their tier.

### 35.6 Maintenance and Promotion

The maintenance requirements are ongoing — they must be met every cycle to retain privileges. The promotion requirements (Chapter 33) are one-time — they must be met to achieve a level. A participant who has been promoted to Level 10 must continue to meet the Executive-tier maintenance requirements (800 K-Points + 4,000 Ring Contribution per cycle) to retain their Level 10 privileges.

---
# Part VII — Leadership Multiplication

## Chapter 36 — The Leadership Multiplication Principle

### 36.1 The Principle

**KR-LVL-031 (Leadership Multiplication Principle).** A top-tier participant must produce leaders, not merely accumulate referrals. Leadership advancement requires the development of other qualified leaders. This is the structural mechanism that enforces the Anti-Accumulation Principle (KR-LVL-006).

### 36.2 Why Leadership Multiplication Matters

Without Leadership Multiplication, a participant could reach the highest K-Level merely by accumulating thousands of referrals — none of whom are active, none of whom have progressed, none of whom have become leaders. This would violate the principle that rewards must originate from genuine economic activity and that leadership must reflect genuine leadership development.

Leadership Multiplication ensures that a leader's network contains genuine, active, qualified participants — and at higher levels, participants who have themselves become leaders. A Level 15 leader must have developed at least 12 participants who have reached Executive Tier (Level 10+). Those Executive-tier participants have themselves developed Leadership-tier participants. This is a four-layer deep chain of genuine leadership multiplication.

### 36.3 Leadership Multiplication Begins at Level 7

**KR-LVL-032 (Leadership Multiplication Start).** Leadership Multiplication requirements begin at Level 7 (Leadership Tier). Levels 1–6 (Foundation and Growth) have no leadership development requirement — they focus on building a genuine activity base and developing network depth. From Level 7 onward, a participant must demonstrate that they have developed other qualified leaders.

### 36.4 Leadership Multiplication and Anti-Accumulation

**KR-LVL-033 (Leadership Multiplication and Anti-Accumulation).** Leadership Multiplication is the enforcement mechanism for the Anti-Accumulation Principle. The Anti-Accumulation Principle states that a participant must not become a top-tier leader merely by accumulating referrals. Leadership Multiplication enforces this by requiring that a leader's network contains qualified participants at specified K-Levels — not merely raw referral counts.

---

## Chapter 37 — K-Level Leadership Development Matrix

### 37.1 Matrix Definition

**KR-LVL-034 (Leadership Development Matrix).** The Leadership Development Matrix specifies, for each K-Level from Level 7 upward, the minimum number of active members and the minimum K-Level those members must hold, for each of the five rings. The matrix is the definitive specification of Leadership Multiplication requirements.

### 37.2 Complete Leadership Development Matrix

All values are **GOVERNANCE PARAMETERS — REQUIRES APPROVAL**. The proposed values are calculated to create a coherent, progressively harder progression consistent with the K-Level Progression Matrix (Chapter 31).

**Leadership Tier (Levels 7–9): Leadership Multiplication Begins**

| Level | Ring 1 | Ring 2 | Ring 3 | Ring 4 | Ring 5 |
|---|---|---|---|---|---|
| **7** | 15 active, min 2 at L4+ | 12 active | 8 active | 5 active | 3 active |
| **8** | 20 active, min 3 at L4+ | 15 active, min 1 at L4+ | 12 active | 8 active | 5 active |
| **9** | 25 active, min 5 at L4+ | 20 active, min 2 at L4+ | 15 active, min 1 at L4+ | 10 active | 8 active |

**Executive Tier (Levels 10–12): Advanced Leadership Multiplication**

| Level | Ring 1 | Ring 2 | Ring 3 | Ring 4 | Ring 5 |
|---|---|---|---|---|---|
| **10** | 30 active, min 5 at L7+ | 25 active, min 3 at L7+ | 20 active, min 2 at L4+ | 15 active, min 1 at L4+ | 10 active |
| **11** | 40 active, min 8 at L7+ | 30 active, min 5 at L7+ | 25 active, min 3 at L4+ | 20 active, min 2 at L4+ | 15 active, min 1 at L4+ |
| **12** | 50 active, min 10 at L7+ | 40 active, min 8 at L7+ | 30 active, min 5 at L4+ | 25 active, min 3 at L4+ | 20 active, min 2 at L4+ |

**Legacy Tier (Levels 13–15): Deep Leadership Multiplication**

| Level | Ring 1 | Ring 2 | Ring 3 | Ring 4 | Ring 5 |
|---|---|---|---|---|---|
| **13** | 60 active, min 15 at L7+ | 50 active, min 10 at L7+ | 40 active, min 5 at L4+ | 30 active, min 3 at L4+ | 25 active, min 2 at L4+ |
| **14** | 75 active, min 20 at L7+ | 60 active, min 15 at L7+ | 50 active, min 8 at L4+ | 40 active, min 5 at L4+ | 30 active, min 3 at L4+ |
| **15** | 100 active, min 25 at L7+ | 75 active, min 20 at L7+ | 60 active, min 10 at L4+ | 50 active, min 8 at L4+ | 40 active, min 5 at L4+ |

**Legacy Tier — Executive-Tier Ring 1 Requirement (Supplementary)**

In addition to the base Ring 1 requirements above, Legacy Tier (L13–15) requires a minimum count of Ring 1 members who have achieved Executive Tier (L10–12) through their own genuine contribution:

| Level | Ring 1 (Executive Tier L10+ requirement) |
|---|---|
| **13** | Min 4 at L10+ |
| **14** | Min 8 at L10+ |
| **15** | Min 12 at L10+ |

**KR-LVL-035 (Executive-Tier Member Requirement).** For Legacy Tier (L13–15), a participant must have Ring 1 members who have achieved Executive Tier (L10–12) through their own genuine contribution. The Executive-tier members count toward the L7+ requirement but represent a deeper, more advanced leadership development threshold. A Level 15 leader must have developed at least 12 participants who have reached Executive Tier — evidence of deep, multi-layered leadership multiplication.

**KR-LVL-036 (Executive-Tier Ceiling).** No K-Level may require more than 18 Ring 1 members at Executive Tier (L10+). This ceiling applies specifically to the Executive-tier (L10+) requirement, not to the L7+ requirement. The maximum L10+ requirement is 12 (at Level 15), which is within the 18-member ceiling. The L7+ requirements (up to 25 at Level 15) are not subject to this ceiling — they are a separate, broader leadership development threshold.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All Executive-tier Ring 1 member requirements (L13: 4 at L10+, L14: 8 at L10+, L15: 12 at L10+) and the Executive-tier ceiling (proposed: 18).

### 37.3 Matrix Interpretation

The matrix is read as follows:

- **"15 active, min 2 at L4+"** means: at least 15 members in the ring must be active (engaged in genuine activity within the activity window), and at least 2 of those active members must have achieved K-Level 4 or higher.
- **"min 2 at L4+"** means the leader has developed at least 2 participants who have reached Growth Tier or above — evidence of genuine leadership development.
- **"min 5 at L7+"** means the leader has developed at least 5 participants who have reached Leadership Tier — evidence of advanced leadership multiplication (leaders developing leaders).
- **"min 4 at L10+"** means the leader has developed at least 4 participants who have reached Executive Tier — evidence of deep leadership multiplication (leaders developing leaders who develop leaders).

### 37.4 Ring 3 Requirement Consistency

**KR-LVL-037 (Ring 3 Consistency).** The Ring 3 requirements in the Leadership Development Matrix (this chapter) are the authoritative source. They are consistent with the K-Level Progression Matrix (Chapter 31) — both specify the same values:

- L7: 8 active (no minimum K-Level)
- L8: 12 active (no minimum K-Level)
- L9: 15 active, min 1 at L4+
- L10: 20 active, min 2 at L4+
- L11: 25 active, min 3 at L4+
- L12: 30 active, min 5 at L4+
- L13: 40 active, min 5 at L4+
- L14: 50 active, min 8 at L4+
- L15: 60 active, min 10 at L4+

### 37.5 Progressive Difficulty

**KR-LVL-038 (Progressive Difficulty in Leadership Development).** The Leadership Development requirements shall become progressively harder at each level:

1. **Ring counts increase** at every level — more active members required.
2. **Minimum K-Levels within rings increase** — at higher levels, members must have achieved higher K-Levels.
3. **Leadership Tier requirements (L7+)** appear at Executive Tier (Level 10) and increase through Legacy Tier — the leader must have developed other leaders who have themselves become leaders.
4. **Executive-tier requirements (L10+)** appear at Legacy Tier (Level 13) and increase — the leader must have developed leaders who have themselves developed leaders.
5. **Depth requirements increase** — at higher levels, deeper rings (Ring 3, 4, 5) require members at higher K-Levels.

### 37.6 The Leadership Multiplication Chain

The Leadership Development Matrix creates a chain of leadership multiplication:

```
Level 7 leader → must have Ring 1 members at Level 4+ (Growth Tier)
Level 10 leader → must have Ring 1 members at Level 7+ (Leadership Tier)
Level 13 leader → must have Ring 1 members at Level 7+ with 15+ at that level,
                  AND min 4 at Executive Tier (L10+)
Level 15 leader → must have Ring 1 members at Level 7+ with 25+ at that level,
                  AND min 12 at Executive Tier (L10+)
```

This means a Level 15 leader has developed at least 25 participants who have themselves reached Leadership Tier (Level 7+), of which at least 12 have reached Executive Tier (Level 10+). Those Level 7+ participants have themselves developed Growth Tier participants. Those Level 10+ participants have themselves developed Leadership Tier participants. This is the multiplication chain: leaders developing leaders who develop leaders who develop leaders — a four-layer deep chain of genuine leadership multiplication.

---

## Chapter 38 — Anti-Accumulation Enforcement

### 38.1 The Anti-Accumulation Principle

**KR-LVL-006 (Anti-Accumulation Principle — restated).** A participant must not become a top-tier leader merely by accumulating referrals. Referral count alone is insufficient for leadership advancement. The quality and capability of the network — measured by the K-Levels achieved within the rings — is the determining factor.

### 38.2 How the Matrix Enforces Anti-Accumulation

The Leadership Development Matrix ensures that accumulation-based advancement is impossible:

- A participant with 1,000 referrals but no developed leaders cannot reach Level 7 (requires min 2 Ring 1 at L4+).
- A participant with 500 referrals but no leaders at Level 7+ cannot reach Level 10 (requires min 5 Ring 1 at L7+).
- A participant with any number of referrals but no leaders at Level 7+ cannot reach Level 13 (requires min 15 Ring 1 at L7+ and min 4 at L10+).
- A participant with 25 leaders at Level 7+ but none at Executive Tier cannot reach Level 15 (requires min 12 Ring 1 at L10+).

Referral count alone is insufficient. The quality and capability of the network — measured by the K-Levels achieved within the rings, including the requirement for Executive-tier leaders at Legacy tier — is the determining factor.

### 38.3 Active vs. Total Referrals

**KR-LVL-039 (Active vs. Total).** The Leadership Development Matrix counts ACTIVE members — participants who are engaged in genuine activity within the activity window. A participant with 500 total referrals but only 8 active members cannot meet the Ring 1 requirement for Level 7 (15 active). Inactivity disqualifies members from counting toward ring requirements.

### 38.4 Genuine Contribution Verification

**KR-LVL-040 (Genuine Contribution Verification).** Ring members' K-Levels must be achieved through their own genuine contribution, not through manipulation. The platform verifies that ring members' K-Levels are genuine by checking their Lifetime Statistics, Trust Scores, and activity history. Artificially inflated K-Levels are invalidated through the fraud correction process (Chapter 56).

---

## Chapter 39 — Worked Leadership Qualification Examples

### 39.1 Example 1 — Level 7 Qualification (Prince)

**Participant:** Abdullah
**Current Level:** 6 (Growth Leader)
**Target Level:** 7 (Leadership Member, Prince)

| Requirement | Threshold | Abdullah's Status | Met? |
|---|---|---|---|
| Min lifetime K-Points | 50,000 | 55,000 | ✓ |
| Active-month requirement | 18 | 20 | ✓ |
| Personal activity (current cycle) | 130 K-Points | 140 K-Points | ✓ |
| Trust requirement | 55 | 58 | ✓ |
| Ring 1: 15 active, min 2 at L4+ | 15 active, 2 at L4+ | 16 active, 3 at L4+ | ✓ |
| Ring 2: 12 active | 12 active | 13 active | ✓ |
| Ring 3: 8 active | 8 active | 9 active | ✓ |
| Ring 4: 5 active | 5 active | 6 active | ✓ |
| Ring 5: 3 active | 3 active | 4 active | ✓ |
| Leadership development: min 2 Ring 1 at L4+ | 2 at L4+ | 3 at L4+ | ✓ |
| Active Status | Required | Active | ✓ |
| Freedom from sanctions | Required | No sanctions | ✓ |

**Qualification:** Abdullah meets ALL requirements for Level 7. He is promoted to Level 7 and receives the royal title "Prince Abdullah" with a permanent username.

**Why he qualifies:** Abdullah has earned 55,000 lifetime K-Points over 20 active months. His Trust Score of 58 exceeds the threshold. He has developed 3 Ring 1 members at Growth Tier (Level 4+) — evidence of genuine leadership development. His network has genuine depth across all five rings. He has crossed the Leadership Multiplication threshold.

### 39.2 Example 2 — Level 10 Qualification (Crown Prince)

**Participant:** Beatrice
**Current Level:** 9 (Leadership Leader)
**Target Level:** 10 (Executive Member, Crown Prince)

| Requirement | Threshold | Beatrice's Status | Met? |
|---|---|---|---|
| Min lifetime K-Points | 400,000 | 420,000 | ✓ |
| Active-month requirement | 36 | 38 | ✓ |
| Personal activity (current cycle) | 200 K-Points | 215 K-Points | ✓ |
| Trust requirement | 70 | 72 | ✓ |
| Ring 1: 30 active, min 5 at L7+ | 30 active, 5 at L7+ | 32 active, 6 at L7+ | ✓ |
| Ring 2: 25 active, min 3 at L7+ | 25 active, 3 at L7+ | 27 active, 4 at L7+ | ✓ |
| Ring 3: 20 active, min 2 at L4+ | 20 active, 2 at L4+ | 22 active, 3 at L4+ | ✓ |
| Ring 4: 15 active, min 1 at L4+ | 15 active, 1 at L4+ | 16 active, 2 at L4+ | ✓ |
| Ring 5: 10 active | 10 active | 11 active | ✓ |
| Leadership development: min 5 Ring 1 at L7+ | 5 at L7+ | 6 at L7+ | ✓ |
| Active Status | Required | Active | ✓ |
| Freedom from sanctions | Required | No sanctions | ✓ |

**Qualification:** Beatrice meets ALL requirements for Level 10. She is promoted to Level 10 and receives the royal title "Crown Prince Beatrice" with a permanent username.

**Why she qualifies:** Beatrice has developed 6 Ring 1 members at Leadership Tier (Level 7+). These are leaders she mentored who have themselves become leaders — the multiplication chain is now two layers deep. Her Ring 2 has 4 members at Level 7+, and her deeper rings have genuine qualified depth.

### 39.3 Example 3 — Level 12 Qualification (Crown Prince)

**Participant:** Chidi
**Current Level:** 11 (Executive Builder)
**Target Level:** 12 (Executive Leader, Crown Prince)

| Requirement | Threshold | Chidi's Status | Met? |
|---|---|---|---|
| Min lifetime K-Points | 1,500,000 | 1,600,000 | ✓ |
| Active-month requirement | 48 | 50 | ✓ |
| Personal activity (current cycle) | 250 K-Points | 270 K-Points | ✓ |
| Trust requirement | 80 | 82 | ✓ |
| Ring 1: 50 active, min 10 at L7+ | 50 active, 10 at L7+ | 52 active, 12 at L7+ | ✓ |
| Ring 2: 40 active, min 8 at L7+ | 40 active, 8 at L7+ | 42 active, 10 at L7+ | ✓ |
| Ring 3: 30 active, min 5 at L4+ | 30 active, 5 at L4+ | 32 active, 6 at L4+ | ✓ |
| Ring 4: 25 active, min 3 at L4+ | 25 active, 3 at L4+ | 27 active, 4 at L4+ | ✓ |
| Ring 5: 20 active, min 2 at L4+ | 20 active, 2 at L4+ | 22 active, 3 at L4+ | ✓ |
| Leadership development: min 10 Ring 1 at L7+ | 10 at L7+ | 12 at L7+ | ✓ |
| Active Status | Required | Active | ✓ |
| Freedom from sanctions | Required | No sanctions | ✓ |

**Qualification:** Chidi meets ALL requirements for Level 12.

**Why he qualifies:** Chidi has developed 12 Ring 1 members at Leadership Tier (Level 7+). He is ready for Legacy Tier, where the Executive-tier requirement begins.

### 39.4 Example 4 — Level 13 Qualification (King)

**Participant:** Aisha
**Current Level:** 12 (Executive Leader)
**Target Level:** 13 (Legacy Member, King)

| Requirement | Threshold | Aisha's Status | Met? |
|---|---|---|---|
| Min lifetime K-Points | 3,000,000 | 3,200,000 | ✓ |
| Active-month requirement | 54 | 56 | ✓ |
| Personal activity (current cycle) | 280 K-Points | 300 K-Points | ✓ |
| Trust requirement | 85 | 87 | ✓ |
| Ring 1: 60 active, min 15 at L7+ | 60 active, 15 at L7+ | 65 active, 16 at L7+ | ✓ |
| Ring 2: 50 active, min 10 at L7+ | 50 active, 10 at L7+ | 52 active, 11 at L7+ | ✓ |
| Ring 3: 40 active, min 5 at L4+ | 40 active, 5 at L4+ | 42 active, 6 at L4+ | ✓ |
| Ring 4: 30 active, min 3 at L4+ | 30 active, 3 at L4+ | 32 active, 4 at L4+ | ✓ |
| Ring 5: 25 active, min 2 at L4+ | 25 active, 2 at L4+ | 26 active, 3 at L4+ | ✓ |
| Leadership development: min 15 Ring 1 at L7+ | 15 at L7+ | 16 at L7+ | ✓ |
| Executive-tier Ring 1: min 4 at L10+ | 4 at L10+ | 5 at L10+ | ✓ |
| Active Status | Required | Active | ✓ |
| Freedom from sanctions | Required | No sanctions | ✓ |

**Qualification:** Aisha meets ALL requirements for Level 13. She is promoted to Level 13, receives the royal title "King Aisha," and becomes eligible for coronation recognition.

**Why she qualifies:** Aisha has developed 16 Ring 1 members at Leadership Tier (Level 7+), of which 5 have progressed to Executive Tier (Level 10+) — evidence that she has developed not just leaders, but leaders who have themselves become leaders of leaders. She has reached the Legacy Tier through genuine contribution, sustained trust, and the development of a deep network of qualified leaders at multiple tiers.

### 39.5 Example 5 — Level 15 Qualification (King, Maximum)

**Participant:** Zara
**Current Level:** 14 (Legacy Builder)
**Target Level:** 15 (Legacy Leader, King)

| Requirement | Threshold | Zara's Status | Met? |
|---|---|---|---|
| Min lifetime K-Points | 12,000,000 | 13,000,000 | ✓ |
| Active-month requirement | 72 | 74 | ✓ |
| Personal activity (current cycle) | 350 K-Points | 380 K-Points | ✓ |
| Trust requirement | 95 | 96 | ✓ |
| Ring 1: 100 active, min 25 at L7+ | 100 active, 25 at L7+ | 105 active, 27 at L7+ | ✓ |
| Ring 2: 75 active, min 20 at L7+ | 75 active, 20 at L7+ | 78 active, 21 at L7+ | ✓ |
| Ring 3: 60 active, min 10 at L4+ | 60 active, 10 at L4+ | 62 active, 12 at L4+ | ✓ |
| Ring 4: 50 active, min 8 at L4+ | 50 active, 8 at L4+ | 52 active, 9 at L4+ | ✓ |
| Ring 5: 40 active, min 5 at L4+ | 40 active, 5 at L4+ | 42 active, 6 at L4+ | ✓ |
| Leadership development: min 25 Ring 1 at L7+ | 25 at L7+ | 27 at L7+ | ✓ |
| Executive-tier Ring 1: min 12 at L10+ | 12 at L10+ | 14 at L10+ | ✓ |
| Active Status | Required | Active | ✓ |
| Freedom from sanctions | Required | No sanctions | ✓ |

**Qualification:** Zara meets ALL requirements for Level 15 — the highest level in the K-NETWORK ecosystem. She is promoted to Level 15, retaining the royal title "King Zara."

**Why she qualifies:** Zara has developed 27 Ring 1 members at Leadership Tier (Level 7+), of which 14 have progressed to Executive Tier (Level 10+) — evidence of the deepest possible leadership multiplication. This is a four-layer deep chain: King Zara → 14 Crown Princes (L10+) → each developed their own L7+ leaders → each of those developed L4+ members. Zara has reached the pinnacle through over 6 years of genuine contribution, sustained trust, and deep, multi-layered leadership development.

### 39.6 Example 6 — Failure (Anti-Accumulation)

**Participant:** Ibrahim
**Current Level:** 6 (Growth Leader)
**Target Level:** 7 (Leadership Member, Prince)
**Referral count:** 500 direct referrals (Ring 1)

| Requirement | Threshold | Ibrahim's Status | Met? |
|---|---|---|---|
| Min lifetime K-Points | 50,000 | 55,000 | ✓ |
| Active-month requirement | 18 | 20 | ✓ |
| Personal activity (current cycle) | 130 K-Points | 140 K-Points | ✓ |
| Trust requirement | 55 | 56 | ✓ |
| Ring 1: 15 active, min 2 at L4+ | 15 active, 2 at L4+ | 500 total, but only 8 active, 0 at L4+ | ✗ |
| Ring 2: 12 active | 12 active | 200 total, but only 5 active | ✗ |
| Ring 3: 8 active | 8 active | 100 total, but only 2 active | ✗ |
| Ring 4: 5 active | 5 active | 50 total, but only 1 active | ✗ |
| Ring 5: 3 active | 3 active | 20 total, but 0 active | ✗ |
| Leadership development: min 2 Ring 1 at L4+ | 2 at L4+ | 0 at L4+ | ✗ |

**Qualification:** Ibrahim FAILS to qualify for Level 7. Despite having 500 direct referrals, he does not meet the requirements.

**Why he fails:** Ibrahim has accumulated 500 referrals, but only 8 of his Ring 1 members are active, and none have reached Level 4+. His referrals have not engaged in genuine commerce activity, and he has not developed any participants who have reached Growth Tier. This is the Anti-Accumulation Principle in action: accumulation without leadership development.

### 39.7 Example 7 — Failure (Leaders but No Executive-Tier Leaders)

**Participant:** Kojo
**Current Level:** 12 (Executive Leader)
**Target Level:** 13 (Legacy Member, King)
**Ring 1:** 65 active, 16 at L7+, but only 2 at L10+

| Requirement | Threshold | Kojo's Status | Met? |
|---|---|---|---|
| Min lifetime K-Points | 3,000,000 | 3,200,000 | ✓ |
| Active-month requirement | 54 | 56 | ✓ |
| Personal activity (current cycle) | 280 K-Points | 290 K-Points | ✓ |
| Trust requirement | 85 | 86 | ✓ |
| Ring 1: 60 active, min 15 at L7+ | 60 active, 15 at L7+ | 65 active, 16 at L7+ | ✓ |
| Ring 2: 50 active, min 10 at L7+ | 50 active, 10 at L7+ | 52 active, 11 at L7+ | ✓ |
| Ring 3: 40 active, min 5 at L4+ | 40 active, 5 at L4+ | 42 active, 6 at L4+ | ✓ |
| Ring 4: 30 active, min 3 at L4+ | 30 active, 3 at L4+ | 32 active, 4 at L4+ | ✓ |
| Ring 5: 25 active, min 2 at L4+ | 25 active, 2 at L4+ | 26 active, 3 at L4+ | ✓ |
| Leadership development: min 15 Ring 1 at L7+ | 15 at L7+ | 16 at L7+ | ✓ |
| Executive-tier Ring 1: min 4 at L10+ | 4 at L10+ | 2 at L10+ | ✗ |

**Qualification:** Kojo FAILS to qualify for Level 13. He meets all requirements except the Executive-tier Ring 1 requirement.

**Why he fails:** Kojo has developed 16 leaders at Level 7+, but only 2 have progressed to Executive Tier (Level 10+). He needs at least 4 at L10+. This demonstrates the deep Leadership Multiplication requirement: developing leaders is not enough for Legacy Tier — a participant must develop leaders who have themselves become Executive-tier leaders. Kojo has leaders, but not leaders of leaders of leaders.

---

# Part VIII — K-Trust System

## Chapter 40 — K-Trust Overview

### 40.1 K-Trust Definition

**KR-TRU-001 (K-Trust Definition).** K-Trust is the platform's reputation and integrity system. K-Trust produces a Trust Score (0–100) that gates eligibility for K-Points, K-Level promotion, and Reward Share distribution. K-Trust is one of the four pillar inputs to Reward Share.

### 40.2 K-Trust Purpose

K-Trust serves three purposes:

1. **Gating** — the Trust Score gates eligibility for K-Points categories, K-Level promotion, and Reward Share distribution.
2. **Reward input** — the Trust Score is one of the four pillar inputs to Reward Share (weighted at 0.15).
3. **Integrity protection** — the Trust Score reflects the participant's reputation and reliability, protecting the platform from abuse.

### 40.3 K-Trust and Compliance

**KR-TRU-002 (Compliance Precedence).** Compliance with applicable law and platform policies shall always take precedence over reward eligibility. Where a conflict exists between legal compliance and reward eligibility, compliance prevails. A participant's Trust Score may be reduced for compliance violations regardless of reward impact.

---

## Chapter 41 — Trust Score and Signals

### 41.1 Trust Score Range

**KR-TRU-003 (Trust Score Range).** The Trust Score is a numerical value from 0 to 100, where:

- 0 =最低 trust (banned or severely sanctioned)
- 50 = neutral trust
- 100 = perfect trust

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Trust Score range (proposed: 0–100).

### 41.2 Trust Signals

**KR-TRU-004 (Trust Signals).** The Trust Score is calculated from multiple signals:

| Signal | Description | Impact |
|---|---|---|
| Transaction history | Genuine, verified transactions over time | Positive |
| Dispute history | Disputes filed against the participant | Negative |
| Chargeback history | Chargebacks initiated by or against the participant | Negative |
| Fraud flags | Fraud detection signals | Negative |
| Sanction history | Past sanctions | Negative |
| Activity consistency | Consistent genuine activity over time | Positive |
| Community standing | Positive community contributions | Positive |
| Verification status | Identity verification, KYC completion | Positive |
| Account age | Duration of genuine account activity | Positive |
| Referral quality | Quality of referred participants (active, genuine) | Positive |

### 41.3 Multi-Signal Calculation

**KR-TRU-005 (Multi-Signal Calculation).** The Trust Score is calculated from multiple signals, with no single signal determining the score alone. The calculation uses a weighted blend of signals:

```
Trust Score = Σ(w_s × S_s) for all signals s

Where:
  w_s = weight for signal s
  S_s = normalized score for signal s (0 to 1)
  Σ(w_s) = 1.0
```

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All signal weights.

### 41.4 No Single-Signal Determination

**KR-TRU-006 (No Single-Signal Determination).** No single signal may determine the Trust Score alone. Each signal contributes a weighted portion. This prevents manipulation of any single signal from dominating the score.

---

## Chapter 42 — Trust Gating

### 42.1 Trust Gating Thresholds

**KR-TRU-007 (Trust Gating Thresholds).** The Trust Score gates eligibility for:

| Gate | Threshold | What It Gates |
|---|---|---|
| Basic K-Points (buyer, client, community, referral, business, campaign, learning) | Trust ≥ 20 | Eligibility for basic K-Points categories |
| Vendor/Provider K-Points | Trust ≥ 40 | Eligibility for vendor and provider K-Points |
| K-Level promotion | Per K-Level (see Chapter 31) | Eligibility for promotion to each K-Level |
| Reward Share | Trust ≥ 20 | Eligibility for Reward Share distribution |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All trust gating thresholds.

### 42.2 Trust and K-Level Consistency

The K-Level trust requirements (Chapter 31) are consistent with the trust gating thresholds:

- Foundation (L1–3): Trust 20–30
- Growth (L4–6): Trust 35–45
- Leadership (L7–9): Trust 55–65
- Executive (L10–12): Trust 70–80
- Legacy (L13–15): Trust 85–95

All K-Level trust requirements exceed the basic Reward Share gate (Trust ≥ 20), ensuring that K-Level participants are also eligible for Reward Share.

### 42.3 Trust Gate Enforcement

**KR-TRU-008 (Trust Gate Enforcement).** Trust gates are enforced at the time of:

1. K-Points accrual — the participant's Trust Score must meet the category's gate at the time of accrual.
2. K-Level promotion — the participant's Trust Score must meet the K-Level's requirement at the time of promotion evaluation.
3. Reward Share distribution — the participant's Trust Score must meet the Reward Share gate at the time of pool closure.

### 42.4 Trust Score as Reward Share Input

The Trust Score is normalized for blending with other pillars in the Reward Share calculation (Chapter 44). The normalized Trust Score is one of the four pillar inputs, weighted at 0.15.

---

## Chapter 43 — Trust Recovery and Protection

### 43.1 Trust Recovery

**KR-TRU-009 (Trust Recovery).** A participant whose Trust Score has been reduced may restore their trust standing through sustained genuine activity. Trust recovery is gradual — the Trust Score increases over time as the participant engages in genuine, verified activity without new negative signals.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Trust recovery rate (proposed: gradual increase based on sustained genuine activity over a defined period).

### 43.2 Trust Recovery Mechanism

```
If participant engages in genuine activity for N consecutive cycles without new negative signals:
    Trust Score increases by recovery_rate per cycle
    Maximum recovery: up to the pre-reduction level (or higher with sustained positive activity)
```

### 43.3 Trust Protection

**KR-TRU-010 (Trust Protection).** Trust Protection applies in cases of:

1. **Documented hardship** — a participant experiencing documented hardship (illness, natural disaster, platform error) may have their Trust Score protected from reduction during the hardship period.
2. **Platform errors** — if a Trust Score reduction was caused by a platform error, the reduction is reversed and the Trust Score is restored.
3. **False positives** — if a fraud flag is determined to be a false positive, the Trust Score impact is reversed.

### 43.4 Trust Protection Period

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Trust protection period (proposed: defined period during which Trust Score is protected from reduction for documented hardship or platform errors).

### 43.5 Trust and Sanctions

**KR-TRU-011 (Trust and Sanctions).** A sanction reduces the participant's Trust Score. The reduction is proportional to the severity of the sanction. After the sanction period, the participant may begin trust recovery through genuine activity.

### 43.6 Trust and Appeals

A participant may appeal a Trust Score determination (Chapter 59). The appeal is reviewed by a party independent of the original determination.

---

# Part IX — Reward Share and Distribution

## Chapter 44 — Reward Share Formula

### 44.1 Reward Share Definition

**KR-RWD-001 (Reward Share Definition).** Reward Share is a participant's proportional claim on the Reward Pool. Reward Share is calculated from four normalized pillar inputs: Monthly K-Points, Ring Contribution, K-Level Multiplier, and K-Trust.

### 44.2 The Reward Share Formula

**KR-RWD-002 (Reward Share Formula).** A participant's Reward Share Score (RSS) is calculated as:

```
RSS_i = w_KP × KP_norm_i + w_RC × RC_norm_i + w_KL × KL_norm_i + w_KT × KT_norm_i

Where:
  RSS_i    = Reward Share Score for participant i
  KP_norm  = normalized Monthly K-Points (0 to 1)
  RC_norm  = normalized Ring Contribution (0 to 1)
  KL_norm  = normalized K-Level Multiplier (0 to 1)
  KT_norm  = normalized K-Trust (0 to 1)
  w_KP     = weight for K-Points (proposed: 0.40)
  w_RC     = weight for Ring Contribution (proposed: 0.25)
  w_KL     = weight for K-Level Multiplier (proposed: 0.20)
  w_KT     = weight for K-Trust (proposed: 0.15)
```

**Weight sum verification:** 0.40 + 0.25 + 0.20 + 0.15 = 1.00 ✓

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All pillar weights (proposed: 0.40, 0.25, 0.20, 0.15).

### 44.3 Normalization

**KR-RWD-003 (Normalization).** Each pillar input is normalized to a 0–1 scale:

```
KP_norm_i = KP_i / max(KP)           (normalized to the maximum K-Points in the cycle)
RC_norm_i = RC_i / max(RC)           (normalized to the maximum Ring Contribution in the cycle)
KL_norm_i = KL_i / MultiplierCap     (normalized to the multiplier cap, 5.0)
KT_norm_i = KT_i / 100               (normalized to the Trust Score maximum, 100)
```

### 44.4 Proportional Reward Share

**KR-RWD-004 (Proportional Reward Share).** A participant's proportion of the Reward Pool is:

```
Proportion_i = RSS_i / Σ(RSS_j) for all eligible participants j

Σ(Proportion_i) = 1.0    (all proportions sum to 1.0)
```

### 44.5 Reward Amount

**KR-RWD-005 (Reward Amount).** A participant's reward amount is:

```
RewardAmount_i = Proportion_i × RP_cycle
```

The sum of all reward amounts equals the Reward Pool:

```
Σ(RewardAmount_i) = Σ(Proportion_i × RP_cycle) = RP_cycle × Σ(Proportion_i) = RP_cycle × 1.0 = RP_cycle
```

### 44.6 Multi-Pillar Blending Constraint

**KR-RWD-006 (Multi-Pillar Blending).** Reward Share must be calculated from at least two pillars. No single pillar may have a weight of 1.0. This ensures that no single metric can dominate the Reward Share calculation. The proposed weights (0.40, 0.25, 0.20, 0.15) satisfy this constraint — all four pillars have non-zero weights, and the maximum single pillar weight is 0.40 < 1.0.

---

## Chapter 45 — Reward Distribution Mechanics

### 45.1 Distribution Process

**KR-RWD-007 (Distribution Process).** The reward distribution process consists of:

1. **Calculate RSS** — for each eligible participant, calculate the Reward Share Score (Chapter 44).
2. **Calculate proportions** — calculate each participant's proportion of the Reward Pool.
3. **Calculate raw reward amounts** — RewardAmount_i = Proportion_i × RP_cycle.
4. **Apply individual cap** — if RewardAmount_i > CapIndividual, cap it and return excess to pool.
5. **Redistribute excess** — redistribute capped excess pro-rata among non-capped participants.
6. **Iterative cap-redistribution** — repeat steps 4–5 until no participant exceeds the cap or all participants are capped.
7. **Pro-rata safeguard** — if at any point Σ(RewardAmount_i) > RP_cycle, apply pro-rata adjustment.
8. **Generate distribution instructions** — produce distribution instructions for the Wallet/Payments Engine.
9. **Execute distribution** — the Wallet/Payments Engine executes the financial movements.
10. **Generate reward statements** — deliver reward statements to participants.
11. **Audit** — the distribution is audited.

### 45.2 Iterative Cap-Redistribution

**KR-RWD-008 (Iterative Cap-Redistribution).** The cap-redistribution process is iterative:

```
Repeat:
    For each participant i:
        If RewardAmount_i > CapIndividual:
            Excess_i = RewardAmount_i − CapIndividual
            RewardAmount_i = CapIndividual
            Pool_Excess += Excess_i
    Redistribute Pool_Excess pro-rata among non-capped participants
Until no participant exceeds the cap or all participants are capped
```

The process converges because each iteration reduces the number of non-capped participants. The final sum always equals RP_cycle.

### 45.3 K-Rewards vs. Wallet/Payments Authority

**KR-RWD-009 (Authority Boundary).** The K-Rewards Engine calculates reward entitlement and produces distribution instructions. The Wallet/Payments Engine records financial movements and executes distribution. K-Rewards does NOT execute financial movements — it only calculates and instructs.

### 45.4 Non-Blocking Distribution

**KR-ECO-075 (Non-Blocking Distribution).** Disputed amounts may be held individually pending resolution, but must never delay distribution of undisputed amounts to the same or other participants. A dispute affecting one participant does not block distribution to other participants.

---

## Chapter 46 — Reward Share Worked Examples

### 46.1 Example 1 — Three Participants, Basic Distribution

**Scenario:** 3 eligible participants, Reward Pool = ₦100,000.

| Participant | K-Points | Ring Contribution | K-Level Multiplier | Trust Score |
|---|---|---|---|---|
| Alice | 500 | 2,000 | 2.1× (L9) | 65 |
| Bob | 300 | 1,500 | 1.5× (L6) | 45 |
| Carol | 400 | 1,800 | 1.7× (L7) | 55 |

**Normalization:**
```
KP_norm: Alice = 500/500 = 1.000, Bob = 300/500 = 0.600, Carol = 400/500 = 0.800
RC_norm: Alice = 2000/2000 = 1.000, Bob = 1500/2000 = 0.750, Carol = 1800/2000 = 0.900
KL_norm: Alice = 2.1/5.0 = 0.420, Bob = 1.5/5.0 = 0.300, Carol = 1.7/5.0 = 0.340
KT_norm: Alice = 65/100 = 0.650, Bob = 45/100 = 0.450, Carol = 55/100 = 0.550
```

**RSS Calculation (weights: 0.40, 0.25, 0.20, 0.15):**
```
RSS_Alice = 0.40×1.000 + 0.25×1.000 + 0.20×0.420 + 0.15×0.650
          = 0.4000 + 0.2500 + 0.0840 + 0.0975 = 0.8315

RSS_Bob   = 0.40×0.600 + 0.25×0.750 + 0.20×0.300 + 0.15×0.450
          = 0.2400 + 0.1875 + 0.0600 + 0.0675 = 0.5550

RSS_Carol = 0.40×0.800 + 0.25×0.900 + 0.20×0.340 + 0.15×0.550
          = 0.3200 + 0.2250 + 0.0680 + 0.0825 = 0.6955

Σ(RSS) = 0.8315 + 0.5550 + 0.6955 = 2.0820
```

**Proportions:**
```
Proportion_Alice = 0.8315 / 2.0820 = 0.3995
Proportion_Bob   = 0.5550 / 2.0820 = 0.2666
Proportion_Carol = 0.6955 / 2.0820 = 0.3339

Σ(Proportions) = 0.3995 + 0.2666 + 0.3339 = 1.0000 ✓
```

**Reward Amounts (before cap):**
```
Alice = 0.3995 × 100,000 = ₦39,950
Bob   = 0.2666 × 100,000 = ₦26,660
Carol = 0.3339 × 100,000 = ₦33,390

Σ = 39,950 + 26,660 + 33,390 = ₦100,000 = RP ✓
```

**Cap check (CapIndividual = 25% × 100,000 = ₦25,000):**
```
Alice = ₦39,950 > ₦25,000 → CAPPED at ₦25,000, excess = ₦14,950
Bob   = ₦26,660 > ₦25,000 → CAPPED at ₦25,000, excess = ₦1,660
Carol = ₦33,390 > ₦25,000 → CAPPED at ₦25,000, excess = ₦8,390

Total capped = ₦75,000
Total excess = ₦14,950 + ₦1,660 + ₦8,390 = ₦25,000

All participants are capped. No non-capped participants to redistribute to.
Excess carried forward to next cycle = ₦25,000
Distributed this cycle = ₦75,000
```

**Observation:** With only 3 participants and a 25% cap, all participants are capped and significant excess occurs. In normal cycles with 10+ eligible participants, the cap is less restrictive and more of the pool is distributed. This is expected behavior — the cap prevents single-participant dominance in small pools, and excess is carried forward.

### 46.2 Example 2 — Ten Participants, Normal Distribution

**Scenario:** 10 eligible participants, Reward Pool = ₦500,000, CapIndividual = 25% × 500,000 = ₦125,000.

With 10 participants, the average reward is ₦50,000 — well below the ₦125,000 cap. Unless one participant's RSS is dramatically higher than the others, no participant will be capped, and the full ₦500,000 is distributed.

```
Assume RSS values produce proportions that sum to 1.0.
No participant exceeds 25% of the pool.
All ₦500,000 is distributed.
Undistributed = ₦0
```

### 46.3 Example 3 — Pro-Rata Adjustment

**Scenario:** Due to a calculation edge case, the sum of calculated rewards exceeds the Reward Pool by 5%.

```
Σ(CalculatedReward_i) = 1.05 × RP
ProRataFactor = RP / (1.05 × RP) = 1/1.05 = 0.9524
AdjustedReward_i = CalculatedReward_i × 0.9524
Σ(AdjustedReward_i) = 0.9524 × 1.05 × RP = 1.0 × RP = RP ✓
```

Every participant's reward is reduced by 4.76%. The sum exactly equals the Reward Pool. No unfunded liability.

---
# Part X — Reward Sources

## Chapter 47 — Rewardable Activities

### 47.1 Rewardable Activity Definition

**KR-SRC-001 (Rewardable Activity).** A rewardable activity is a genuine, verified activity that originates from real economic or platform engagement and is eligible for K-Points accrual. Every rewardable activity must be tied to a genuine source event.

### 47.2 Non-Rewardable Activity

**KR-SRC-002 (Non-Rewardable Activity).** Non-rewardable activities include:

- Recruitment alone (without resulting genuine economic activity)
- Artificial transactions
- Fake purchases
- Self-referral
- Duplicate accounts
- Circular referrals
- Any activity that does not originate from genuine economic or platform engagement

### 47.3 Rewardable Activities by Engine

| Engine | Rewardable Activities | K-Points Category |
|---|---|---|
| Commerce | Verified purchases, genuine vendor sales | Commerce K-Points, Vendor K-Points |
| Services | Verified service delivery, genuine service transactions | Service K-Points |
| K-Rewards | Qualifying referrals leading to completed transactions | Referral K-Points |
| Communication | Verified community contributions | Community K-Points |
| Intelligence | (No direct K-Points — provides fraud signals) | — |
| Administration | Approved campaigns | Campaign K-Points |
| Integration | Partner transactions | Commerce/Service K-Points (via partner) |
| Learning | Course completions, learning path completions, assessment passes | Learning K-Points |
| Identity | Business tool actions | Business K-Points |
| Trust | (No direct K-Points — provides Trust Score) | — |
| Wallet/Payments | (No direct K-Points — executes distribution) | — |

### 47.4 Every Rewardable Activity Requires

**KR-SRC-007 (Activity Requirements).** Every rewardable activity requires:

1. **Source event** — a genuine activity event reported by the originating engine.
2. **Validation** — the K-Rewards Engine validates the event (genuine, verified, not duplicated).
3. **K-Point rule** — the applicable K-Point rule is applied.
4. **Cap** — the category cap is checked.
5. **Anti-fraud rule** — the activity is checked against anti-fraud rules.
6. **Audit record** — the event and calculation are recorded for audit.
7. **Reversal mechanism** — the K-Points can be reversed if the transaction is reversed.

---

## Chapter 48 — Activity Validation Framework

### 48.1 Validation Pipeline

**KR-SRC-004 (Validation Pipeline).** Every rewardable activity passes through a validation pipeline:

```
Source Event
    ↓
1. Event Verification — is the event genuine and real?
    ↓
2. Duplicate Check — has this event already been counted?
    ↓
3. Participant Eligibility — does the participant meet trust and active status gates?
    ↓
4. K-Point Rule Application — apply the applicable K-Point rule
    ↓
5. Cap Check — does the accrual exceed the category cap?
    ↓
6. Anti-Fraud Check — does the event trigger any fraud signals?
    ↓
7. Audit Record — record the event, calculation, and result
    ↓
8. K-Points Accrued — K-Points are added to the participant's monthly total
```

### 48.2 Event Verification

**KR-SRC-005 (Event Verification).** Event verification confirms that the source event is genuine:

- For commerce: the transaction was completed and not refunded.
- For services: the service was delivered and accepted.
- For referrals: the referral led to a completed transaction.
- For learning: the course/path/assessment was genuinely completed.
- For community: the contribution was verified by the platform.

### 48.3 Duplicate Check

**KR-SRC-006 (Duplicate Check).** No event may be counted twice. The K-Rewards Engine checks for duplicate events by event ID, transaction ID, and participant ID. If a duplicate is detected, the second occurrence is rejected.

---

## Chapter 49 — Per-Activity K-Point Rules

### 49.1 K-Point Rule Structure

**KR-ACT-001 (K-Point Rule Structure).** Each K-Point rule defines:

1. **Activity type** — the type of activity that earns K-Points.
2. **K-Point value** — the K-Points earned per unit of activity.
3. **Activity value unit** — the unit of measurement (e.g., ₦100 of transaction value, per referral, per course).
4. **Monthly cap** — the maximum K-Points earnable in this category per cycle.
5. **Trust gate** — the minimum Trust Score required.
6. **Anti-fraud rule** — the specific fraud checks for this activity.
7. **Reversal rule** — how K-Points are reversed if the activity is reversed.

### 49.2 Per-Activity Rules

| Activity | K-Point Value | Unit | Monthly Cap | Trust Gate | Reversal |
|---|---|---|---|---|---|
| Commerce (buyer) | 1 per ₦100 | Transaction value | Per-category cap | ≥ 20 | Refund/chargeback |
| Commerce (vendor) | 1 per ₦100 | Sales value | Per-category cap | ≥ 40 | Refund/chargeback |
| Service (client) | 1 per ₦100 | Service value | Per-category cap | ≥ 20 | Refund/chargeback |
| Service (provider) | 1 per ₦100 | Service value | Per-category cap | ≥ 40 | Refund/chargeback |
| Referral | 10 per | Qualifying referral | Per-category cap | ≥ 20 | Transaction reversal |
| Business | 5 per | Business tool action | Per-category cap | ≥ 20 | Action reversal |
| Vendor | 1 per ₦100 | Vendor sales | Per-category cap | ≥ 40 | Refund/chargeback |
| Community | 3 per | Contribution | Per-category cap | ≥ 20 | Contribution reversal |
| Campaign | Defined per campaign | Campaign participation | Per-category cap | ≥ 20 | Campaign reversal |
| Learning — course | 5 per | Course completion | Per-category cap | ≥ 20 | Completion reversal |
| Learning — path | 10 per | Path completion | Per-category cap | ≥ 20 | Completion reversal |
| Learning — assessment | 2 per | Assessment pass | Per-category cap | ≥ 20 | Assessment reversal |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All K-Point values, monthly caps, and trust gates.

---

## Chapter 50 — Learning K-Points

### 50.1 Learning K-Points Integration

**KR-PNT-004 (Learning K-Points Integration — restated).** Learning K-Points are the eighth K-Points category, added per LEARN-AD-1 (approved). Learning K-Points integrate Learning with the shared K-Rewards framework. They follow the same rules as all other categories: genuine activity, validation, K-Point rule, cap, anti-fraud rule, audit record, and reversal mechanism.

### 50.2 Learning K-Point Values

| Learning Activity | K-Points | Description |
|---|---|---|
| Course completion | 5 K-Points | Per course completed with passing assessment |
| Learning path completion | 10 K-Points | Per learning path (series of courses) completed |
| Assessment pass | 2 K-Points | Per standalone assessment passed |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All Learning K-Point values.

### 50.3 Learning Activity Validation

Learning activities are validated through:

1. **Completion verification** — the course/path/assessment was genuinely completed.
2. **Participant verification** — the participant who completed the activity is the one claiming K-Points.
3. **Anti-fraud check** — the completion is not fraudulent (e.g., automated completion, proxy completion).
4. **Duplicate check** — the same course/path/assessment has not been counted twice.

### 50.4 Learning K-Points and the Reward Share

Learning K-Points contribute to the participant's Monthly K-Points total, which feeds into the Reward Share calculation (Chapter 44). Learning K-Points are treated identically to all other K-Points categories — they are not a separate rewards ecosystem.

### 50.5 Learning K-Points Reversal

Learning K-Points may be reversed if:

1. The completion is determined to be fraudulent.
2. The course/path/assessment is invalidated by the platform.
3. The participant is found to have used proxy or automated completion.

Reversal follows the standard K-Points reversal process (Chapter 22).

---

# Part XI — Royal Identity and Coronation

## Chapter 51 — Royal Leadership Identity

### 51.1 Royal Leadership Identity Definition

**KR-LVL-041 (Royal Leadership Identity).** Royal Leadership Identity is a recognition identity system integrated with the K-Level system. A participant's K-Level determines their royal title. The royal title is a recognition identity — it is not political, governmental, or hereditary authority.

### 51.2 Tier-to-Title Mapping

**KR-LVL-042 (Tier-to-Title Mapping).** The royal title mapping is:

| Tier | Levels | Royal Title | Username |
|---|---|---|---|
| Foundation | 1–3 | Normal | Standard username |
| Growth | 4–6 | Normal | Standard username |
| Leadership | 7–9 | Prince | Permanent username assigned |
| Executive | 10–12 | Crown Prince | Permanent username |
| Legacy | 13–15 | King | Permanent username |

### 51.3 Username Permanence

**KR-LVL-043 (Username Permanence).** The username assigned at Leadership Tier (Level 7) is permanent. It does not change when the participant progresses to higher tiers. The title changes (Prince → Crown Prince → King) but the username remains the same.

### 51.4 Title Changes

**KR-LVL-044 (Title Changes).** The royal title changes with tier progression:

- A participant at Level 7–9 is "Prince [Username]."
- Upon promotion to Level 10, the title becomes "Crown Prince [Username]."
- Upon promotion to Level 13, the title becomes "King [Username]."

The title is automatically updated upon K-Level promotion. No separate action is required.

### 51.5 Recognition, Not Authority

**KR-LVL-045 (Recognition Not Authority).** Royal titles are recognition identities. They do not confer:

- Political authority
- Governmental authority
- Hereditary authority
- Financial authority beyond the standard K-Level privileges

Royal titles are a form of recognition for leadership achievement within the K-NETWORK platform.

### 51.6 Team Name

**KR-LVL-046 (Team Name).** At Leadership Tier (Level 7) and above, a participant may also receive a team name — a name for their network/organization within the platform. The team name is assigned at Level 7 and may be updated through governance.

---

## Chapter 52 — Coronation Eligibility and Verification

### 52.1 Coronation Definition

**KR-LVL-047 (Coronation).** Coronation is the annual recognition system for K-NETWORK leaders. Coronation recognizes achievement but does not create automatic unfunded financial obligations.

### 52.2 Coronation Eligibility

**KR-LVL-048 (Coronation Eligibility).** To be eligible for coronation recognition, a participant must:

1. Be at Legacy Tier (Level 13–15) — coronation is a Legacy-tier recognition.
2. Have maintained Active Status at their K-Level for the entire coronation year.
3. Meet the trust requirement for their K-Level.
4. Not be under any active sanction.
5. Meet any additional coronation-specific criteria defined by governance.

### 52.3 Coronation Verification

**KR-LVL-049 (Coronation Verification).** All coronation nominations are verified against platform records:

1. K-Level achievement is verified.
2. Contribution records are verified.
3. Trust standing is verified.
4. Leadership development is verified.
5. Anti-manipulation controls are applied.

### 52.4 Coronation and Anti-Manipulation

**KR-LVL-050 (Coronation Anti-Manipulation).** Coronation nominations are subject to anti-manipulation controls to prevent:

- Artificial nomination inflation
- Collusive nominations
- Fraudulent achievement claims

Nominations that fail verification are rejected.

---

## Chapter 53 — Coronation Recognition and Awards

### 53.1 Coronation Recognition Categories

**KR-LVL-051 (Coronation Recognition Categories).** Coronation recognition may include:

1. **Leadership excellence** — recognition for outstanding leadership development.
2. **Community impact** — recognition for outstanding community contribution.
3. **Platform growth** — recognition for outstanding contribution to platform growth.
4. **Mentorship** — recognition for outstanding mentorship of developing leaders.
5. **Innovation** — recognition for outstanding innovation in platform use.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Coronation recognition categories and criteria.

### 53.2 Coronation Awards

**KR-LVL-052 (Coronation Awards).** Coronation awards may include:

1. **Certificates** — formal recognition certificates.
2. **Digital recognition** — digital badges and profile recognition.
3. **Event recognition** — recognition at the annual coronation event.
4. **Historical records** — permanent records of coronation recognition.

### 53.3 Coronation and Financial Rewards

**KR-LVL-053 (Coronation Funding).** Any financial rewards associated with coronation shall be funded from within the platform's defined economic model (the 90% Allocation Pool). Coronation-related financial rewards, if any, shall be funded from the operational allocation or other approved allocation, not from the 10% protected reserve. Coronation does not create unfunded obligations.

### 53.4 Coronation and Royal Identity

Coronation does not change a participant's Royal Leadership Identity. The royal title is determined by K-Level tier, not by coronation. Coronation recognizes achievement within the tier.

### 53.5 Coronation Records

**KR-LVL-054 (Coronation Records).** Coronation records are maintained as permanent historical records. They are preserved for institutional history and may be referenced in future governance decisions.

---

# Part XII — Anti-Fraud

## Chapter 54 — Anti-Fraud Overview

### 54.1 Anti-Fraud Principle

**KR-FRD-001 (Anti-Fraud Principle).** The K-Rewards framework shall implement comprehensive controls against fraudulent activity. Fraud undermines the integrity of the reward system, creates unfair advantages, and can lead to unfunded liability. All fraud controls are designed to protect genuine participants and the platform's economic model.

### 54.2 Multi-Signal Corroboration

**KR-FRD-002 (Multi-Signal Corroboration).** No single signal is sufficient for a fraud determination. Multi-signal corroboration is required — at least two independent signals must corroborate before a fraud determination is made. A single automated flag alone may never result in a sanction.

### 54.3 Due Process

**KR-FRD-003 (Due Process).** No sanction without due process: Investigation + Determination + appeal opportunity. Every fraud determination must include:

1. **Investigation** — the alleged fraud is investigated.
2. **Determination** — a determination is made based on evidence.
3. **Appeal opportunity** — the participant has the right to appeal the determination.

No automated flag alone may result in a sanction. A human review is required for all fraud determinations.

### 54.4 No Collateral Harm

**KR-GOV-030 (No Collateral Harm — restated).** Correction of a fraudulent participant's standing must never reduce Reward Share already correctly paid to non-fraudulent participants. Reversal of a fraudulent transaction affects only the fraudulent participant and the Reward Pool — not the rewards of other participants.

---

## Chapter 55 — Prohibited Activities

### 55.1 Fourteen Prohibited Activities

**KR-FRD-004 (Prohibited Activities).** The following fourteen activities are prohibited and subject to fraud detection, investigation, and sanctions:

| # | Prohibited Activity | Description |
|---|---|---|
| 1 | Fake accounts | Creating accounts with false identity information |
| 2 | Self-referral | Referring oneself through alternate accounts |
| 3 | Duplicate accounts | Maintaining multiple accounts to inflate ring membership or K-Points |
| 4 | Circular referrals | Participants referring each other to inflate ring counts |
| 5 | Artificial transactions | Transactions conducted solely to generate K-Points without genuine economic purpose |
| 6 | Fake purchases | Purchases that are not genuine (e.g., immediately refunded, never delivered) |
| 7 | Refund abuse | Systematic use of refunds to reverse transactions after earning K-Points |
| 8 | Chargeback abuse | Systematic use of chargebacks to reverse transactions after earning K-Points |
| 9 | Collusion | Multiple participants coordinating to inflate each other's K-Points or ring membership |
| 10 | Account farming | Creating and maintaining accounts solely for reward harvesting |
| 11 | Bot activity | Using automated bots to generate activity, K-Points, or ring membership |
| 12 | Identity manipulation | Manipulating identity information to evade fraud detection or sanctions |
| 13 | Ring manipulation | Artificially inflating ring membership through any of the above methods |
| 14 | Reward gaming | Any activity designed to exploit loopholes in the reward system for unearned rewards |

### 55.2 Prohibited Activity Consequences

**KR-FRD-005 (Prohibited Activity Consequences).** Any participant found to have engaged in a prohibited activity is subject to:

1. K-Points invalidation (fraudulent K-Points are removed).
2. Reward forfeiture (rewards received through fraudulent activity are forfeited).
3. Ring correction (artificial ring members are removed).
4. Trust Score reduction.
5. Sanctions (Chapter 57), up to and including permanent ban.

### 55.3 Recruitment Alone Is Not Prohibited

**KR-FRD-006 (Recruitment Not Prohibited).** Recruitment itself is not a prohibited activity. Referring genuine participants who engage in genuine activity is legitimate. What is prohibited is using recruitment to create artificial ring membership, circular referrals, or account farming. The distinction is genuine activity: a genuine referral leads to a genuine participant who engages in genuine commerce, service, or learning activity.

---

## Chapter 56 — Fraud Detection and Response

### 56.1 Detection Methods

**KR-FRD-007 (Detection Methods).** The platform shall use multiple detection methods:

1. **Pattern analysis** — detecting patterns characteristic of fraud (e.g., circular referral patterns, sudden spikes in activity).
2. **Anomaly detection** — detecting anomalous activity that deviates from normal patterns.
3. **Cross-referencing** — cross-referencing accounts, transactions, and devices for duplicates and connections.
4. **Behavioral analysis** — analyzing participant behavior for signs of automation (bot activity).
5. **Transaction analysis** — analyzing transactions for artificiality (fake purchases, immediate refunds).
6. **Ring structure analysis** — analyzing ring structures for artificial inflation.

### 56.2 Detection Confidentiality

**KR-FRD-008 (Detection Confidentiality).** The specific fraud-detection signals, thresholds, and methods shall not be disclosed. Non-disclosure is permitted only for narrow fraud-detection exceptions. Disclosure must never be used to obscure a participant's own calculation logic — a participant shall always be able to understand how their own reward was calculated.

### 56.3 Response Sequence

**KR-FRD-009 (Response Sequence).** When fraud is suspected, the following response sequence is followed:

1. **Detection** — a fraud signal is detected.
2. **Flagging** — the participant's account is flagged for investigation.
3. **Investigation** — the flagged activity is investigated by a human reviewer.
4. **Multi-signal corroboration** — at least two independent signals must corroborate.
5. **Determination** — a determination is made based on evidence.
6. **Notification** — the participant is notified of the determination and has the right to appeal.
7. **Correction** — if fraud is confirmed, corrections are applied (K-Points invalidation, reward forfeiture, ring correction, Trust Score reduction).
8. **Sanction** — sanctions are applied as appropriate (Chapter 57).
9. **No collateral harm** — corrections affect only the fraudulent participant, not non-fraudulent participants.
10. **Audit record** — the entire process is recorded for audit.

### 56.4 False Positives

**KR-FRD-010 (False Positives).** If a fraud determination is found to be a false positive (through appeal or review):

1. The participant's standing is restored.
2. Any Trust Score reduction is reversed.
3. Any K-Points invalidation is reversed.
4. Any reward forfeiture is reversed.
5. The participant is compensated for any lost rewards (from the undistributed amounts or governance-approved funds).

---

## Chapter 57 — Sanctions Framework

### 57.1 Sanction Levels

**KR-FRD-011 (Sanction Levels).** Sanctions are graduated based on the severity of the fraud:

| Level | Sanction | Description |
|---|---|---|
| 1 | K-Points invalidation | Fraudulent K-Points are invalidated |
| 2 | Reward forfeiture | Rewards received through fraud are forfeited; recovery pursued |
| 3 | Ring correction | Artificial ring members are removed; Ring Contribution recalculated |
| 4 | Trust Score reduction | Trust Score reduced proportionally to severity |
| 5 | Privilege suspension | K-Level Multiplier reduced to 1.0×; benefits paused |
| 6 | Temporary suspension | Account temporarily suspended (defined period) |
| 7 | Permanent ban | Account permanently banned from the platform |

### 57.2 Sanction Application

**KR-FRD-012 (Sanction Application).** Sanctions are applied based on the severity and pattern of the fraud:

- First-time, low-severity fraud: Levels 1–4 (K-Points invalidation, reward forfeiture, ring correction, Trust Score reduction).
- Repeated or medium-severity fraud: Levels 1–5 (adds privilege suspension).
- Severe or systematic fraud: Levels 1–6 (adds temporary suspension).
- Extreme fraud (e.g., large-scale account farming, systematic reward gaming): Levels 1–7 (adds permanent ban).

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Sanction level thresholds and duration of temporary suspension.

### 57.3 Sanction and Due Process

**KR-FRD-013 (Sanction and Due Process).** No sanction is applied without due process:

1. Investigation is completed.
2. Determination is made based on evidence.
3. The participant is notified and has the right to appeal.
4. The appeal is reviewed by an independent party.
5. The sanction is applied only after the appeal process is exhausted (or the appeal window expires).

### 57.4 Sanction and Recovery

**KR-FRD-014 (Sanction and Recovery).** When rewards are forfeited through sanction, recovery is pursued from the fraudulent participant directly. Recovery does not affect rewards already correctly paid to non-fraudulent participants (KR-GOV-030).

### 57.5 Sanction Records

**KR-FRD-015 (Sanction Records).** All sanctions are recorded for audit. Sanction records include:

1. The fraud determination.
2. The evidence.
3. The sanction applied.
4. The appeal (if any) and its outcome.
5. The correction applied.

---

# Part XIII — Governance, Appeals, Audit, Reporting

## Chapter 58 — Governance Review

### 58.1 The Governance Review Process

**KR-GOV-001 (Governance Review).** The Governance Review process is the master methodology for any K-Rewards policy change. No K-Rewards policy change may take effect without passing through Governance Review.

### 58.2 The Four-Part Governance Review Test

**KR-GOV-002 (Four-Part Test).** Every K-Rewards policy change must satisfy a four-part test:

1. **Documented rationale and expected impact.** The change shall have a documented rationale and an assessment of its expected impact on the Fair Reward Principles (KR-FND-014).
2. **Consistency assessment.** The change shall be assessed for consistency with all PLC-1 Constitutional Principles and all K-Rewards Core Principles (Chapter 4).
3. **Impact modeling against existing participant standing.** The change shall undergo impact modeling against existing participant standing, with prospective-only protection (KR-LVL-019). No change may retroactively demote a participant's already-achieved standing.
4. **Publication with advance notice.** The change shall be published with adequate advance notice before taking effect.

### 58.3 Governance Review Authority

**KR-GOV-003 (Governance Review Authority).** Governance Review is conducted by the Governance Review Board, with Executive Authority ratification for strategic changes. The specific composition and authority of the Governance Review Board is defined in GOV-0.

### 58.4 What Requires Governance Review

The following changes require Governance Review:

- New K-Points categories or activity types
- K-Level threshold changes
- Allocation rate changes
- Cap changes
- Trust threshold changes
- Ring weight or density threshold changes
- New rewardable activities
- Anti-fraud rule changes
- Sanctions framework changes
- Benefits program changes
- Any structural change to the K-Rewards framework
- Any change to a GOVERNANCE PARAMETER

### 58.5 Constitutional Consistency Re-Verification

**KR-FND-016 (Constitutional Consistency — restated).** Every substantive KR-1 change requires a re-verification that the document remains consistent with all seven PLC-1 Constitutional Principles.

### 58.6 Downstream Conformance

**KR-FND-005 (Downstream Conformance — restated).** In any conflict between KR-1 and a downstream document on reward-related matters, the downstream document must be corrected to restore alignment. KR-1 itself may only be superseded through the pillar-level revision process or formal amendment of PLC-1.

---

## Chapter 59 — Appeals and Dispute Resolution

### 59.1 Non-Waivable Appeal Rights

**KR-GOV-004 (Non-Waivable Appeal Rights).** Every participant has non-waivable, non-forfeitable appeal rights across all major K-Rewards determinations. Appeal rights are never waivable, never forfeitable, and never conditioned on payment.

### 59.2 Independent Review

**KR-GOV-005 (Appeal Independence).** Appeals are reviewed by a party independent of the original determination. The party that made the original determination may not review the appeal.

### 59.3 Appeals Process

**KR-GOV-006 (Appeals Process).** The appeals process shall consist of:

1. **Submission.** The participant submits an appeal, stating the determination being appealed, the grounds for appeal, and any supporting evidence.
2. **Acknowledgment.** The appeal is acknowledged within a defined timeframe.
3. **Independent review.** An independent reviewer reviews the appeal, examining the original determination, the evidence, and the participant's grounds.
4. **Determination.** The independent reviewer makes a determination: uphold the original determination, overturn it, or modify it.
5. **Notification.** The participant is notified of the appeal determination and the reasoning.
6. **Resolution timeframe.** The appeal shall be resolved within a published maximum timeframe.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Appeal resolution timeframe (proposed: 30 days from submission).

### 59.4 Non-Blocking Disputes

**KR-ECO-075 (Non-Blocking — restated).** Disputed amounts may be held individually pending resolution, but must never delay distribution of undisputed amounts to the same or other participants. A dispute affecting one participant does not block distribution to other participants.

### 59.5 What May Be Appealed

Participants may appeal the following K-Rewards determinations:

- K-Points calculation or invalidation
- K-Level promotion denial or standing-based adjustment
- Trust Score determination
- Reward Share calculation
- Reward distribution amount
- Fraud determination
- Sanction
- Coronation recognition denial
- Ring membership or Ring Contribution determination
- Any other K-Rewards determination that materially affects the participant

### 59.6 Appeal Escalation

**KR-GOV-007 (Appeal Escalation).** If a participant's appeal is denied and they believe the denial was erroneous, they may escalate to a higher level of review, as defined by the governance framework. The escalation process and authority are defined in GOV-0.

---

## Chapter 60 — Reward Auditing

### 60.1 Audit Scope

**KR-GOV-008 (Audit Scope).** The K-Rewards framework shall be subject to comprehensive auditing covering:

1. **K-Points audit** — verifying that K-Points are calculated correctly, from genuine activity, with caps applied.
2. **K-Rings audit** — verifying ring membership, formation, weights, density gates, contribution, and decay.
3. **K-Levels audit** — verifying K-Level progression, unlock requirements, multipliers, and permanent status protection.
4. **K-Trust audit** — verifying Trust Score calculations, signals, gating, and recovery.
5. **Reward Share audit** — verifying Reward Share calculations, proportions, caps, and pro-rata adjustments.
6. **Reward Pool audit** — verifying Reward Pool funding, closure, and distribution.
7. **90/10 audit** — verifying that allocation rates sum to 90%, the 10% reserve is protected, and no unfunded liability is created.
8. **Anti-fraud audit** — verifying fraud detection, investigation, determination, correction, and sanction.
9. **Reversal audit** — verifying reversal mechanisms (refund, chargeback, fraud, settlement failure).

### 60.2 Audit Frequency

**KR-GOV-009 (Audit Frequency).** Audits shall be performed:

1. **Every cycle** — automated audit of the cycle's calculations, distributions, and reversals.
2. **On-trigger** — audit triggered by significant findings, fraud patterns, or governance decisions.
3. **Annually** — comprehensive audit of the entire K-Rewards framework, consolidated with the platform-wide review.

### 60.3 Audit Independence

**KR-GOV-010 (Audit Independence).** Audits shall be conducted by a party independent of the original determination. The party that made the original calculation or determination may not audit it.

### 60.4 Audit Remediation

**KR-GOV-011 (Audit Remediation).** Confirmed findings trigger correction of all affected standings. Correction is mandatory. Where distribution has already occurred, recovery is pursued from the responsible participant directly. Correction of a fraudulent participant's standing must never reduce Reward Share already correctly paid to unrelated, non-fraudulent participants (KR-GOV-030).

### 60.5 Audit Reporting

**KR-GOV-012 (Audit Reporting).** Audit results are reported to the Governance Review Board. Significant findings trigger immediate review. Aggregate indicators (dispute rates, trust distributions, fraud rates) are reported to detect systemic issues.

### 60.6 Reconstructability

**KR-FND-015 (Reconstructability — restated).** The reasoning behind any reward calculation must be reconstructable and auditable. Every K-Point accrual, ring assignment, level promotion, trust determination, and reward distribution shall produce an audit trail sufficient to reconstruct the calculation from source event to final outcome.

---

## Chapter 61 — Mandatory Disclosures

### 61.1 Mandatory Disclosure Requirements

**KR-GOV-013 (Mandatory Disclosures).** The following shall be published and kept current at all times:

1. **The Five Pillars framework** — the structure and interrelationship of K-Points, K-Rings, K-Levels, K-Trust, and Reward Share.
2. **K-Points category definitions** — the eight categories, their definitions, and their K-Point rules.
3. **K-Level thresholds** — the complete K-Level Progression Matrix (Chapter 31) and Leadership Development Matrix (Chapter 37).
4. **Reward Share weighting logic** — the pillar weights and the Reward Share formula (Chapter 44).
5. **Reward Pool size and funding** — the Reward Pool size and funding basis per cycle.
6. **Monthly Reward Cycle schedule** — the cycle close cutoff and distribution window.
7. **Allocation rates** — the allocation rates for each revenue type (Chapter 9).
8. **Trust Score thresholds** — the trust gating thresholds (Chapter 42).
9. **Caps and minimum thresholds** — the monthly K-Points caps and minimum threshold (Chapter 20).
10. **Anti-fraud rules** — the prohibited activities and sanctions framework (general level, not specific detection thresholds).
11. **Coronation eligibility criteria** — the coronation recognition categories and eligibility requirements.
12. **90/10 disclosure** — the 90/10 Principle, the allocation structure, and the protected reserve.
13. **Tiered benefits** — the benefits program and benefit values by tier (Chapter 71).
14. **Maintenance requirements** — the tiered personal K-Points and Group Activity requirements (Chapter 35).

### 61.2 Disclosure Confidentiality

**KR-GOV-014 (Disclosure Confidentiality).** Non-disclosure is permitted only for narrow fraud-detection exceptions. The specific fraud-detection signals, thresholds, and methods shall not be disclosed. Disclosure must never be used to obscure a participant's own calculation logic. A participant shall always be able to understand how their own reward was calculated.

### 61.3 Disclosure Currency

**KR-GOV-015 (Disclosure Currency).** Mandatory disclosures shall be kept current at all times. When a governance change alters a disclosed value, the disclosure shall be updated before the change takes effect, with advance notice.

---

## Chapter 62 — Reporting

### 62.1 Cycle Reporting

**KR-GOV-016 (Cycle Reporting).** After each Monthly Reward Cycle, the K-Rewards Engine shall produce a cycle report including:

1. **Reward Pool total** — the total Reward Pool for the cycle.
2. **Number of eligible participants** — the count of participants eligible for Reward Share.
3. **Total distributed** — the total rewards distributed.
4. **Undistributed amount** — any amount not distributed (due to caps, pro-rata, or excess) and its disposition.
5. **Reserve accumulation** — the 10% reserve accumulated during the cycle.
6. **Fraud statistics** — the number of fraud detections, determinations, and corrections (aggregate, not individual).
7. **Appeal statistics** — the number of appeals submitted and resolved.
8. **Reversal statistics** — the number and value of reversals (refund, chargeback, fraud, settlement failure).

### 62.2 Annual Reporting

**KR-GOV-017 (Annual Reporting).** The annual K-Rewards comprehensive review shall produce an annual report including:

1. **Annual Reward Pool summary** — total Reward Pool, total distributed, reserve accumulated.
2. **K-Level distribution** — the distribution of participants across K-Levels.
3. **Fraud summary** — annual fraud statistics and trends.
4. **Trust summary** — aggregate Trust Score distribution and trends.
5. **Coronation summary** — coronation recognitions granted.
6. **Governance changes** — governance changes made during the year.
7. **Audit findings** — significant audit findings and remediation.
8. **Benefits summary** — benefits program utilization and costs.
9. **Recommendations** — recommendations for the next year.

### 62.3 Regulatory Reporting

**KR-GOV-018 (Regulatory Reporting).** Where regulatory requirements mandate reporting of reward or financial information, the platform shall produce regulatory reports consistent with applicable law. Reward Pool funding and distribution shall be transparently reported.

### 62.4 Stakeholder Reporting

**KR-GOV-019 (Stakeholder Reporting).** Financial reporting to investors and the board shall include K-Rewards metrics — Reward Pool, distribution, reserve, and fraud indicators — consistent with PLC-1's Transparency Commitment.

---

# Part XIV — Cycles

## Chapter 63 — The Monthly Reward Cycle

### 63.1 The Monthly Reward Cycle Definition

**KR-ECO-070 (Monthly Reward Cycle).** The K-Rewards system operates on a Monthly Reward Cycle — a fixed five-stage sequence on a published, governance-protected schedule. This balances participant motivation (frequent enough to stay engaged) against calculation integrity (infrequent enough to execute fraud-review and settlement properly).

### 63.2 The Five Stages

**KR-ECO-071 (Five Stages).** The Monthly Reward Cycle consists of five stages:

```
Stage 1: Accrual
    → K-Points accrue throughout the cycle as genuine activity occurs
    → Ring Contribution is tracked
    → Trust Score is updated
    → Reward Pool accrues from qualifying transactions
    → Maintenance status is tracked (Chapter 35)

Stage 2: Close
    → The cycle closes at the published cutoff
    → The Reward Pool is finalized
    → Participant eligibility is frozen
    → No further accrual for the current cycle

Stage 3: Calculation
    → K-Points are finalized (reversibility window checks)
    → Ring Contribution is calculated
    → Maintenance requirements are evaluated (Chapter 35)
    → K-Level unlock requirements are evaluated
    → Reward Share is calculated for each eligible participant
    → Caps, iterative cap-redistribution, and pro-rata adjustments are applied
    → Distribution instructions are produced

Stage 4: Distribution
    → Distribution instructions are sent to the Wallet/Payments Engine
    → The Wallet/Payments Engine executes the financial movements
    → Reward statements are generated and delivered to participants
    → Distribution is audited

Stage 5: Reset
    → K-Points are reset to zero for the next cycle
    → Ring structure is updated (decay, new members)
    → Lifetime Statistics are updated
    → K-Level history is updated
    → The next cycle begins
```

### 63.3 Cycle Schedule

**KR-ECO-072 (Cycle Schedule).** The Monthly Reward Cycle shall follow a published schedule:

| Stage | Duration | Proposed Timing |
|---|---|---|
| **Accrual** | ~28 days | Days 1–28 of the month |
| **Close** | Instantaneous | End of day 28 (23:59 UTC) |
| **Calculation** | 2 days | Days 29–30 |
| **Distribution** | 7 days | Days 1–7 of the following month |
| **Reset** | Instantaneous | Start of the new cycle |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Cycle schedule (proposed: monthly cycle with close on the 28th, calculation on 29th–30th, distribution window of 7 days).

### 63.4 Cycle Publication

**KR-ECO-073 (Cycle Publication).** The cycle close cutoff and distribution window length must be published in advance and must not change without governance-level notice. Changes to the cycle schedule require Governance Review (Chapter 58) and advance notice to participants.

### 63.5 Cycle Audit

**KR-GOV-023 (Cycle Audit).** Every cycle shall be audited. The cycle audit verifies:
- K-Points calculation correctness
- Ring Contribution calculation correctness
- Maintenance status evaluation correctness
- K-Level promotion correctness
- Reward Share calculation correctness
- Reward Pool funding and distribution correctness
- 90/10 compliance
- Reversal correctness
- Cap and pro-rata application correctness

### 63.6 Cycle Reconciliation

**KR-ECO-074 (Cycle Reconciliation).** At the end of each cycle, the following reconciliation shall be performed:

```
1. Reward Pool Reconciliation:
   RP_cycle = Σ(a_rewards) + Σ(a_leadership) for all qualifying transactions
   Σ(RewardAmountᵢ) ≤ RP_cycle
   Undistributed = RP_cycle − Σ(RewardAmountᵢ)    (must be ≥ 0)

2. 90/10 Reconciliation:
   For each transaction:
   AP = 0.90 × QEV
   R = 0.10 × QEV
   Σ(aⱼ) = AP
   AP + R = QEV

3. Maximum Liability Check:
   MaxLiability = RP_cycle
   Σ(RewardAmountᵢ) ≤ MaxLiability    (guaranteed by pro-rata)
```

The cycle reconciliation shall be documented in the cycle report (Chapter 62).

---

## Chapter 64 — The Annual Cycle

### 64.1 The Annual Cycle Definition

**KR-GOV-020 (Annual Cycle).** The K-Rewards framework operates on an annual cycle in addition to the monthly cycle. The annual cycle consolidates the twelve monthly cycles and includes:

1. **Annual comprehensive review.** A comprehensive review of the entire K-Rewards framework, covering all Parts I–XVI.
2. **K-Level framework review.** A review of K-Level thresholds, requirements, and multipliers (KR-GOV-024).
3. **Trust & Reputation review.** A review of the trust framework, including signal weights, recovery rates, and protection mechanisms (KR-GOV-025).
4. **Calibration review.** A review of thresholds, weightings, and multipliers for continued appropriateness to platform growth and inflation of standing over time.
5. **Benefits review.** A review of the tiered benefits program for sustainability and fairness (Chapter 71).
6. **Platform economics review.** A review of the platform economics model for sustainability (Chapter 72).
7. **Coronation.** The Annual Coronation (Chapter 65) occurs within the annual cycle.
8. **Annual reporting.** The annual report is produced (Chapter 62.2).

### 64.2 Annual Review Frequency

**KR-GOV-024 (K-Level Annual Review).** The K-Level framework shall be reviewed at least annually. The review verifies that thresholds remain appropriate, multipliers remain capped, and the progression remains coherent.

**KR-GOV-025 (Trust Annual Review).** The Trust & Reputation framework shall be reviewed at least annually, and immediately on significant integrity findings.

### 64.3 Annual Calibration

**KR-GOV-021 (Annual Calibration).** Thresholds, weightings, and multipliers shall be reviewed for continued appropriateness to platform growth and inflation of standing over time. If calibration adjustments are needed, they shall be applied prospectively only (KR-LVL-019) and through the Governance Review process (Chapter 58).

### 64.4 Annual Consolidation

The annual cycle consolidates the individual K-Level and Trust & Reputation review cycles into a single platform-wide review discipline. This ensures that the K-Rewards framework is reviewed holistically at least once per year, rather than in isolated fragments.

---

## Chapter 65 — Coronation Cycle

### 65.1 The Coronation Cycle

**KR-LVL-055 (Coronation Cycle).** The Annual Coronation occurs once per year within the annual cycle. The coronation cycle consists of:

```
Stage 1: Qualification Period
    → Throughout the coronation year, participants qualify for coronation recognition
    → K-Level achievements, contributions, and leadership development are tracked

Stage 2: Nomination Period
    → Nominations are submitted for coronation recognition categories
    → The nomination period is defined and published

Stage 3: Verification Period
    → All nominations are verified against platform records
    → K-Level achievements, contribution records, trust standing, and leadership development are verified

Stage 4: Approval Period
    → Verified nominations are approved through the governance process
    → Anti-manipulation controls are applied

Stage 5: Coronation Event
    → The coronation event occurs, announcing the recognitions
    → Certificates and digital recognition are issued
    → Event records are produced

Stage 6: Historical Records
    → Coronation records are maintained as permanent historical records
    → Records are preserved for institutional history
```

### 65.2 Coronation and the Monthly Cycle

The coronation cycle operates independently of the monthly reward cycle. Coronation recognition does not affect monthly Reward Share calculations. A participant's coronation recognition does not increase their Reward Share; it is a recognition of achievement, not a reward multiplier.

### 65.3 Coronation and the Annual Cycle

The coronation occurs within the annual cycle, typically at the end of the annual review period. The coronation recognizes achievements from the preceding coronation year. The specific timing of the coronation within the annual cycle is defined by governance.

### 65.4 Coronation Funding

**KR-LVL-053 (Coronation Funding — restated).** Any costs associated with the coronation shall be funded from within the platform's defined economic model (the 90% Allocation Pool). Coronation-related financial rewards, if any, shall be funded from the operational allocation or other approved allocation, not from the 10% protected reserve. Coronation does not create unfunded obligations.

### 65.5 Coronation and Royal Identity

Coronation does not change a participant's Royal Leadership Identity. The royal title is determined by K-Level tier, not by coronation. Coronation recognizes achievement within the tier.

---

# Part XV — Mathematical Consistency Audit

## Chapter 66 — Allocation Totals Reconciliation

### 66.1 Purpose

This chapter demonstrates that every allocation in the K-Rewards economic model sums correctly. The audit verifies that for every revenue type, the allocation rates sum to exactly 90% of QEV, that the 10% reserve is correctly calculated, and that the total reconciles to QEV.

### 66.2 Allocation Rate Verification

| Revenue Type | Platform | Provider | Rewards | Leadership | Operational | **Sum** | Reserve | **Total** |
|---|---|---|---|---|---|---|---|---|
| Commerce | 15% | 60% | 8% | 5% | 2% | **90%** | 10% | **100%** |
| Services | 15% | 60% | 8% | 5% | 2% | **90%** | 10% | **100%** |
| Learning | 20% | 55% | 8% | 5% | 2% | **90%** | 10% | **100%** |
| Platform Fee | 65% | — | 15% | 7% | 3% | **90%** | 10% | **100%** |
| Partner | 40% | 35% | 10% | 3% | 2% | **90%** | 10% | **100%** |

**Verification:** For every revenue type, allocations sum to exactly 90%, reserve is 10%, and total is 100% of QEV. ✓

### 66.3 K-Level Progression Coherence Audit

**Lifetime K-Points (strictly increasing):**
```
0 < 500 < 2,000 < 5,000 < 12,000 < 25,000 < 50,000 < 100,000 < 200,000 < 400,000 < 800,000 < 1,500,000 < 3,000,000 < 6,000,000 < 12,000,000 ✓
```

**Active-month requirement (strictly increasing):**
```
0 < 1 < 3 < 6 < 9 < 12 < 18 < 24 < 30 < 36 < 42 < 48 < 54 < 60 < 72 ✓
```

**Personal activity requirement (strictly increasing — FIXED in v3.0):**
```
50 < 55 < 60 < 80 < 90 < 100 < 130 < 150 < 170 < 200 < 220 < 250 < 280 < 300 < 350 ✓
```

**Trust requirement (strictly increasing):**
```
20 < 25 < 30 < 35 < 40 < 45 < 55 < 60 < 65 < 70 < 75 < 80 < 85 < 90 < 95 ✓
```

**K-Level Multiplier (strictly increasing, capped at 5.0):**
```
1.0 < 1.1 < 1.2 < 1.3 < 1.4 < 1.5 < 1.7 < 1.9 < 2.1 < 2.4 < 2.7 < 3.0 < 3.5 < 4.0 < 5.0 ✓
m15 = 5.0 = MultiplierCap ✓
```

**Ring 1 active members (strictly increasing):**
```
0 < 0 < 3 < 5 < 8 < 10 < 15 < 20 < 25 < 30 < 40 < 50 < 60 < 75 < 100 ✓
```

**Ring 2 active members (strictly increasing):**
```
0 < 0 < 0 < 3 < 5 < 8 < 12 < 15 < 20 < 25 < 30 < 40 < 50 < 60 < 75 ✓
```

**Ring 3 active members (strictly increasing):**
```
0 < 0 < 0 < 0 < 3 < 5 < 8 < 12 < 15 < 20 < 25 < 30 < 40 < 50 < 60 ✓
```

**Ring 4 active members (strictly increasing):**
```
0 < 0 < 0 < 0 < 0 < 3 < 5 < 8 < 10 < 15 < 20 < 25 < 30 < 40 < 50 ✓
```

**Ring 5 active members (strictly increasing):**
```
0 < 0 < 0 < 0 < 0 < 0 < 3 < 5 < 8 < 10 < 15 < 20 < 25 < 30 < 40 ✓
```

**Executive-tier Ring 1 requirement (L13-15, strictly increasing):**
```
L13: 4 at L10+ < L14: 8 at L10+ < L15: 12 at L10+ ✓
All within 18-member ceiling (KR-LVL-036) ✓
```

**Conclusion:** Every progression field is strictly increasing at every level. ✓

### 66.4 Ring Weight Audit

**Proposed ring weights:**
```
w1 = 0.40, w2 = 0.25, w3 = 0.15, w4 = 0.12, w5 = 0.08
```

**Weight sum:**
```
0.40 + 0.25 + 0.15 + 0.12 + 0.08 = 1.00 ✓
```

**Progressive weight constraint:**
```
0.40 > 0.25 > 0.15 > 0.12 > 0.08 ✓
```

### 66.5 Reward Share Weight Audit

**Proposed pillar weights:**
```
w_KP = 0.40, w_RC = 0.25, w_KL = 0.20, w_KT = 0.15
```

**Weight sum:**
```
0.40 + 0.25 + 0.20 + 0.15 = 1.00 ✓
```

**Multi-pillar blending constraint:**
```
All four pillars have non-zero weights ✓
Maximum single pillar weight = 0.40 < 1.0 ✓
```

---

## Chapter 67 — Reward Pool Reconciliation

### 67.1 Reward Pool Funding Audit

**Reward Pool definition:**
```
RP_cycle = Σ(a_rewards) + Σ(a_leadership) for all qualifying transactions in the cycle
```

**Per-transaction Reward Pool contribution:**

| Revenue Type | r_rewards | r_leadership | Total RP % of QEV |
|---|---|---|---|
| Commerce | 8% | 5% | 13% |
| Services | 8% | 5% | 13% |
| Learning | 8% | 5% | 13% |
| Platform Service Fee | 15% | 7% | 22% |
| Partner | 10% | 3% | 13% |

**Verification:** For each revenue type, r_rewards + r_leadership ≤ 0.90 (within the Allocation Pool). ✓

### 67.2 Reward Pool Distribution Audit

**Distribution constraint:**
```
Σ(RewardAmountᵢ) ≤ RP_cycle for all eligible participants i
```

**Pro-rata guarantee:**
```
If Σ(RewardAmountᵢ) > RP_cycle:
    ProRataFactor = RP_cycle / Σ(RewardAmountᵢ)
    AdjustedRewardShareᵢ = RewardShareᵢ × ProRataFactor
    Σ(AdjustedRewardShareᵢ) = RP_cycle ✓
```

**The sum of adjusted rewards always equals the Reward Pool. No unfunded liability.** ✓

### 67.3 Worked Reward Pool Example

**Scenario:** A cycle with 100 qualifying commerce transactions, each with GR = ₦10,000.

**Per-transaction Reward Pool contribution:**
```
a_rewards = 0.08 × QEV = 0.08 × 9,100 = ₦728
a_leadership = 0.05 × QEV = 0.05 × 9,100 = ₦455
Per-transaction RP = 728 + 455 = ₦1,183
```

**Total Reward Pool:**
```
RP_cycle = 100 × ₦1,183 = ₦118,300
```

**Distribution to 50 eligible participants:**
```
Σ(RewardAmountᵢ) = RP_cycle = ₦118,300 (if no caps triggered)
Undistributed = ₦0 (if no caps triggered)
```

**With 25% individual cap (CapIndividual = 0.25 × 118,300 = ₦29,575):**
```
If no participant's reward exceeds ₦29,575, all ₦118,300 is distributed.
If some participants' rewards exceed the cap, excess is redistributed or carried forward.
Σ(RewardAmountᵢ) ≤ ₦118,300 ✓
```

### 67.4 Reserve Accumulation Audit

**Per-transaction reserve:**
```
R = 0.10 × QEV = 0.10 × 9,100 = ₦910 (per ₦10,000 transaction)
```

**Total reserve for 100 transactions:**
```
Total Reserve = 100 × ₦910 = ₦91,000
```

**Reserve is protected:** The ₦91,000 reserve is not allocated to participants. It is mathematically visible and governed. ✓

---

## Chapter 68 — 90/10 Reconciliation

### 68.1 The 90/10 Identity

The 90/10 Principle is expressed as:

```
QEV = R + AP
QEV = 0.10 × QEV + 0.90 × QEV
1.00 × QEV = 0.10 × QEV + 0.90 × QEV
1.00 = 0.10 + 0.90 ✓
```

This is an identity — it holds for all values of QEV.

### 68.2 90/10 Reconciliation for Each Revenue Type

For every revenue type, at every transaction size:

```
QEV = GR − D
R = 0.10 × QEV
AP = 0.90 × QEV
Σ(aⱼ) = AP
AP + R = QEV
```

**Commerce (GR = ₦10,000):**
```
QEV = 10,000 − 900 = 9,100
R = 910
AP = 8,190
Σ(aⱼ) = 1,365 + 5,460 + 728 + 455 + 182 = 8,190 = AP ✓
AP + R = 8,190 + 910 = 9,100 = QEV ✓
```

**Learning (GR = ₦100,000):**
```
QEV = 100,000 − 9,000 = 91,000
R = 9,100
AP = 81,900
Σ(aⱼ) = 18,200 + 50,050 + 7,280 + 4,550 + 1,820 = 81,900 = AP ✓
AP + R = 81,900 + 9,100 = 91,000 = QEV ✓
```

**Platform Service Fee (GR = ₦1,000,000):**
```
QEV = 1,000,000 − 90,000 = 910,000
R = 91,000
AP = 819,000
Σ(aⱼ) = 591,500 + 136,500 + 63,700 + 27,300 = 819,000 = AP ✓
AP + R = 819,000 + 91,000 = 910,000 = QEV ✓
```

**Services (GR = ₦10,000):**
```
QEV = 10,000 − 900 = 9,100
R = 910
AP = 8,190
Σ(aⱼ) = 1,365 + 5,460 + 728 + 455 + 182 = 8,190 = AP ✓
AP + R = 8,190 + 910 = 9,100 = QEV ✓
```

**Partner (GR = ₦10,000):**
```
QEV = 10,000 − 900 = 9,100
R = 910
AP = 8,190
Σ(aⱼ) = 3,640 + 3,185 + 910 + 273 + 182 = 8,190 = AP ✓
AP + R = 8,190 + 910 = 9,100 = QEV ✓
```

### 68.3 90/10 Across All Transaction Sizes

The 90/10 split is proportional — it holds at every transaction size:

| GR | D (9%) | QEV | R (10%) | AP (90%) | AP + R = QEV? |
|---|---|---|---|---|---|
| ₦1,000 | ₦90 | ₦910 | ₦91 | ₦819 | 819 + 91 = 910 ✓ |
| ₦10,000 | ₦900 | ₦9,100 | ₦910 | ₦8,190 | 8,190 + 910 = 9,100 ✓ |
| ₦100,000 | ₦9,000 | ₦91,000 | ₦9,100 | ₦81,900 | 81,900 + 9,100 = 91,000 ✓ |
| ₦1,000,000 | ₦90,000 | ₦910,000 | ₦91,000 | ₦819,000 | 819,000 + 91,000 = 910,000 ✓ |

**The 90/10 split reconciles at every transaction size.** ✓

### 68.4 No Double Allocation Audit

For each transaction, each unit of QEV is allocated to exactly one category:

```
QEV = a_platform + a_provider + a_rewards + a_leadership + a_operational + R

Each unit of QEV appears in exactly one term:
- The platform share is distinct from the provider share
- The provider share is distinct from the reward allocation
- The reward allocation is distinct from the reserve
- No category overlaps with another
- The sum equals QEV exactly
```

**No double allocation.** ✓

### 68.5 No Circular Funding Audit

The Reward Pool is funded from a_rewards + a_leadership, which are calculated from QEV, which is calculated from GR, which comes from genuine transactions. The funding chain is linear, not circular:

```
GR (genuine transaction) → QEV → AP → a_rewards + a_leadership → RP → Reward distribution
```

The funding chain is linear, not circular. **No circular funding.** ✓

---

## Chapter 69 — Maximum Liability Analysis

### 69.1 Maximum Platform Liability

**KR-ECO-042 (Maximum Liability — restated).** The maximum liability of the platform in any cycle is the Reward Pool for that cycle:

```
MaxLiability = RP_cycle
```

The platform cannot be liable for more than the Reward Pool because:

1. **Reward Share is proportional.** Each participant's reward is a proportion of the Reward Pool. The sum of all proportions is 1.0. The sum of all rewards equals the Reward Pool.
2. **Pro-rata adjustment.** If calculated rewards exceed the pool, pro-rata adjustment reduces all rewards proportionally so the sum equals the pool.
3. **Individual cap.** No participant can receive more than the cap percentage of the pool.
4. **No unfunded promises.** No reward obligation is created without a funding source within the Allocation Pool.

### 69.2 Maximum Liability Proof

**Theorem:** For any cycle, the total reward distribution ≤ RP_cycle.

**Proof:**

```
Step 1: Each participant's reward is:
    RewardAmountᵢ = Proportionᵢ × RP_cycle

Step 2: The sum of all proportions:
    Σ(Proportionᵢ) = Σ(RSSᵢ) / Σ(RSSⱼ) = 1.0

Step 3: The sum of all rewards (before cap):
    Σ(RewardAmountᵢ) = Σ(Proportionᵢ × RP_cycle) = RP_cycle × Σ(Proportionᵢ) = RP_cycle × 1.0 = RP_cycle

Step 4: Apply individual cap:
    If RewardAmountᵢ > CapIndividual:
        CappedRewardᵢ = CapIndividual
        Excessᵢ = RewardAmountᵢ − CapIndividual → returned to pool
    Since each CappedRewardᵢ ≤ RewardAmountᵢ:
        Σ(CappedRewardᵢ) ≤ Σ(RewardAmountᵢ) = RP_cycle

Step 5: Redistribute excess to non-capped participants:
    Excess = RP_cycle − Σ(CappedRewardᵢ) ≥ 0
    Redistribute Excess pro-rata among non-capped participants
    If redistribution causes any participant to exceed cap, cap again (iterative)
    The process converges because each iteration reduces non-capped participants
    After convergence: Σ(final rewards) = RP_cycle

Step 6: Pro-rata safeguard:
    If at any point Σ(final rewards) > RP_cycle (should not occur, but protected):
        ProRataFactor = RP_cycle / Σ(final rewards) ≤ 1.0
        AdjustedRewardᵢ = final_rewardᵢ × ProRataFactor
        Σ(AdjustedRewardᵢ) = RP_cycle

Therefore: Σ(RewardAmountᵢ) ≤ RP_cycle for all cycles. ∎
```

**Maximum liability is bounded by the Reward Pool. No unfunded liability is possible.** ✓

### 69.3 Maximum Per-Participant Liability

The maximum reward any single participant can receive in a cycle is:

```
MaxParticipantReward = CapIndividual = CapRate × RP_cycle

With proposed CapRate = 25%:
MaxParticipantReward = 0.25 × RP_cycle
```

No participant can receive more than 25% of the Reward Pool. This prevents single-participant dominance. ✓

### 69.4 Reserve as Liability Buffer

The 10% reserve provides an additional buffer against liability:

```
Total QEV for the cycle = Σ(QEV for all transactions)
Total Reserve = 0.10 × Σ(QEV) = 0.10 × Total QEV
Total Allocation Pool = 0.90 × Total QEV
Reward Pool ≤ Total Allocation Pool (RP is a subset of AP)
```

The reserve (10% of Total QEV) is always available as a buffer if needed, though it shall not be used for reward distribution except through formal governance (KR-ECO-053).

---

## Chapter 70 — Cap, Pro-Rata, Refund, and Reversal Behavior

### 70.1 Cap Behavior

**Scenario:** A participant's calculated Reward Share would give them 30% of the Reward Pool. The cap is 25%.

```
CalculatedReward = 0.30 × RP
CapIndividual = 0.25 × RP
CappedReward = min(0.30 × RP, 0.25 × RP) = 0.25 × RP
Excess = 0.30 × RP − 0.25 × RP = 0.05 × RP
```

**Excess disposition:**
- The excess (0.05 × RP) is returned to the pool.
- The excess is redistributed pro-rata among non-capped participants (iterative cap-redistribution, Chapter 45.2).
- If no non-capped participants remain, the excess is carried to the next cycle or used per governance.

**Math verification:**
```
Σ(RewardAmountᵢ) = Σ(capped) + Σ(redistributed)
≤ RP_cycle ✓
```

### 70.2 Pro-Rata Behavior

**Scenario:** Due to a calculation edge case, the sum of calculated rewards exceeds the Reward Pool by 10%.

```
Σ(CalculatedRewardᵢ) = 1.10 × RP
ProRataFactor = RP / (1.10 × RP) = 1/1.10 = 0.9091
AdjustedRewardᵢ = CalculatedRewardᵢ × 0.9091
Σ(AdjustedRewardᵢ) = 0.9091 × 1.10 × RP = 1.0 × RP = RP ✓
```

Every participant's reward is reduced by 9.09%. The sum exactly equals the Reward Pool. No unfunded liability. ✓

### 70.3 Refund Behavior

**Scenario:** A commerce transaction with GR = ₦10,000 is refunded within the reversibility window. The transaction had contributed ₦1,183 to the Reward Pool.

**Reversal:**
```
K-Points reversal:
    Commerce K-Points from the transaction are reversed
    Lifetime Statistics are adjusted through the formal correction process

Reward Pool reversal:
    a_rewards (₦728) + a_leadership (₦455) = ₦1,183 removed from the Reward Pool

Vendor settlement reversal:
    Vendor's ₦5,460 settlement is reversed (by Wallet/Payments Engine)

Reserve impact:
    Same-cycle: the ₦910 reserve is reversed (the transaction never contributed)
    Later-cycle: the reserve remains protected; negative adjustment to RP, not reserve
```

**If the refund occurs in the same cycle:**
```
RP_cycle is reduced by ₦1,183
Reward Shares are recalculated
No participant receives rewards from the reversed transaction ✓
```

**If the refund occurs in a later cycle:**
```
The current cycle's RP is reduced by ₦1,183 (negative adjustment)
If RP would become negative, the adjustment is deferred to future cycles
Already-distributed rewards to non-fraudulent participants are not clawed back ✓
The reserve is NOT used as a routine buffer (KR-ECO-054) ✓
```

### 70.4 Chargeback Behavior

Chargeback behavior is identical to refund behavior (Chapter 70.3), with the addition that chargeback abuse patterns are monitored for fraud. Repeated chargeback abuse triggers sanctions.

### 70.5 Fraud Reversal Behavior

**Scenario:** Fraud is confirmed in a participant's activity.

**Correction:**
```
K-Points invalidation:
    Fraudulent K-Points are invalidated
    Lifetime Statistics are adjusted through the formal correction process

Reward forfeiture:
    Rewards received through fraud are forfeited
    Recovery is pursued from the fraudulent participant directly

Ring correction:
    Artificial ring members are removed
    Ring Contribution is recalculated

Trust Score reduction:
    Trust Score is reduced to reflect fraudulent activity

No collateral harm:
    Reward Share already correctly paid to unrelated, non-fraudulent participants
    is not reduced ✓
```

### 70.6 Settlement Failure Behavior

```
The transaction is treated as not completed
K-Points (if provisionally accrued) are reversed
Reward Pool contribution is removed
Vendor settlement is not executed
The participant is not penalized for a settlement failure outside their control ✓
```

### 70.7 Reversal Net Effect Audit

**For a single transaction reversed in the same cycle:**

| Component | Original | Reversed | Net |
|---|---|---|---|
| K-Points | +X | −X | 0 |
| Reward Pool | +a_rewards + a_leadership | −a_rewards − a_leadership | 0 |
| Vendor settlement | +a_vendor | −a_vendor | 0 |
| Platform share | +a_platform | 0 (platform keeps) | +a_platform |
| Reserve | +R | −R (same-cycle) | 0 |

**Net effect:** The reversal cancels the K-Points, Reward Pool contribution, vendor settlement, and reserve. The platform share is not reversed (it represents costs already incurred). The net effect is that the transaction never contributed to the Reward Pool. ✓

### 70.8 Mathematical Consistency Audit Conclusion

**KR-AUD-001 (Mathematical Consistency Audit Conclusion).** The KR-1 v3.0 Mathematical Consistency Audit demonstrates:

1. **Allocation totals:** For every revenue type, allocation rates sum to exactly 90% of QEV. ✓ (Chapter 66)
2. **Reward Pool totals:** The Reward Pool is funded from a_rewards + a_leadership, and the sum of all reward distributions ≤ Reward Pool. ✓ (Chapter 67)
3. **90/10 reconciliation:** For every revenue type at every transaction size, AP + R = QEV, and Σ(aⱼ) = AP. ✓ (Chapter 68)
4. **Maximum liability:** The maximum platform liability in any cycle is the Reward Pool, guaranteed by proportional Reward Share, individual caps, iterative cap-redistribution, and pro-rata adjustment. No unfunded liability is possible. ✓ (Chapter 69)
5. **Cap behavior:** Caps reduce individual rewards and return excess to the pool through iterative redistribution. The sum of final rewards ≤ Reward Pool. ✓ (Chapter 70.1)
6. **Pro-rata behavior:** Pro-rata adjustment scales all rewards proportionally so the sum exactly equals the Reward Pool. ✓ (Chapter 70.2)
7. **Refund behavior:** Refunds reverse K-Points, Reward Pool contribution, vendor settlement, and reserve (same-cycle). No unfunded liability is created. The reserve is not used as a routine buffer for later-cycle reversals. ✓ (Chapter 70.3)
8. **Reversal behavior:** Reversals cancel the transaction's contribution to the Reward Pool. The net effect is that the transaction never contributed. ✓ (Chapter 70.7)

**The KR-1 v3.0 framework is mathematically consistent, financially sound, and free of unfunded liability.** ✓

---

# Part XVI — Platform Economics and Benefits

## Chapter 71 — Tiered Benefits and Incentives Program

### 71.1 Benefits Program Definition

**KR-BEN-001 (Tiered Benefits Program).** The Tiered Benefits and Incentives Program provides non-cash benefits and privileges to participants based on their K-Level tier. Benefits are a recognition of platform participation and leadership development, distinct from Reward Share. Benefits are funded from the platform operating margin, NOT from the Reward Pool.

### 71.2 Benefits vs. Reward Share

**KR-BEN-002 (Benefits vs. Reward Share).** Benefits and Reward Share are distinct:

| Dimension | Reward Share | Benefits |
|---|---|---|
| **Source** | Reward Pool (a_rewards + a_leadership) | Platform operating margin (a_operational) |
| **Nature** | Cash distribution | Non-cash privileges, services, allowances |
| **Calculation** | Reward Share formula (4 pillars) | Tier-based fixed allocation |
| **Frequency** | Monthly | Annual or per-use |
| **Purpose** | Compensate for economic contribution | Recognize tier achievement and support leadership |

Reward Share compensates participants for their economic contribution. Benefits recognize tier achievement and support leadership development. The two are funded from different sources and calculated differently.

### 71.3 Benefits by Tier

**KR-BEN-003 (Benefits by Tier).** The tiered benefits program is:

| Tier | Levels | Benefits | Proposed Annual Value |
|---|---|---|---|
| **Foundation** | 1–3 | Welcome kit, platform discounts, basic support | — |
| **Growth** | 4–6 | Priority support, enhanced discounts, early access | — |
| **Leadership** | 7–9 | Domestic travel allowance, leadership training | ₦1,500/yr |
| **Executive** | 10–12 | Car allowance, regional travel allowance, executive training | ₦6,000 (car) + ₦5,000 (travel)/yr |
| **Legacy** | 13–15 | Housing allowance, international travel allowance, legacy recognition | ₦25,000 (house) + ₦10,000 (travel)/yr |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All benefit values and eligibility criteria.

### 71.4 Foundation Tier Benefits (Levels 1–3)

**KR-BEN-004 (Foundation Benefits).** Foundation-tier participants receive:

1. **Welcome kit** — a digital welcome package introducing the platform, the K-Rewards framework, and available tools.
2. **Platform discounts** — standard discounts on platform commerce and services.
3. **Basic support** — access to standard customer support.

### 71.5 Growth Tier Benefits (Levels 4–6)

**KR-BEN-005 (Growth Benefits).** Growth-tier participants receive all Foundation-tier benefits, plus:

1. **Priority support** — faster response times for support requests.
2. **Enhanced discounts** — increased discounts on platform commerce and services.
3. **Early access** — early access to new platform features and campaigns.

### 71.6 Leadership Tier Benefits (Levels 7–9)

**KR-BEN-006 (Leadership Benefits).** Leadership-tier participants receive all Growth-tier benefits, plus:

1. **Domestic travel allowance** — an annual allowance for domestic travel related to platform leadership activities (proposed: ₦1,500/year).
2. **Leadership training** — access to leadership development training programs.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Domestic travel allowance value.

### 71.7 Executive Tier Benefits (Levels 10–12)

**KR-BEN-007 (Executive Benefits).** Executive-tier participants receive all Leadership-tier benefits, plus:

1. **Car allowance** — an annual car allowance (proposed: ₦6,000/year).
2. **Regional travel allowance** — an annual allowance for regional travel (proposed: ₦5,000/year).
3. **Executive training** — access to executive-level training programs.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Car allowance and regional travel allowance values.

### 71.8 Legacy Tier Benefits (Levels 13–15)

**KR-BEN-008 (Legacy Benefits).** Legacy-tier participants receive all Executive-tier benefits, plus:

1. **Housing allowance** — an annual housing allowance (proposed: ₦25,000/year).
2. **International travel allowance** — an annual allowance for international travel (proposed: ₦10,000/year).
3. **Legacy recognition** — permanent recognition on the platform's Legacy register.

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** Housing allowance and international travel allowance values.

### 71.9 Benefits Funding

**KR-BEN-009 (Benefits Funding).** Benefits are funded from the platform operating margin (a_operational), NOT from the Reward Pool. The operating margin is the portion of the Allocation Pool allocated to platform operations (2% for Commerce/Services/Learning, 3% for Platform Service Fee, 2% for Partner). Benefits shall never be funded from the Reward Pool or the 10% protected reserve.

### 71.10 Benefits and Active Status

**KR-BEN-010 (Benefits and Active Status).** Benefits are tied to Active Status. A participant who fails to maintain Active Status at their K-Level has their benefits suspended (not revoked). Benefits resume when Active Status is restored. This is consistent with the Level vs. Privileges distinction (Chapter 33): the K-Level is permanent, but privileges (including benefits) can be suspended.

### 71.11 Benefits and Sanctions

**KR-BEN-011 (Benefits and Sanctions).** A participant under sanction (Level 5: Privilege Suspension, Chapter 57) has their benefits suspended for the duration of the sanction. Benefits resume when the sanction is lifted.

### 71.12 Benefits Annual Review

**KR-BEN-012 (Benefits Annual Review).** The benefits program shall be reviewed annually as part of the Annual Cycle (Chapter 64) for sustainability, fairness, and cost. If benefit adjustments are needed, they shall be applied prospectively only and through the Governance Review process (Chapter 58).

---

## Chapter 72 — Platform Economics and Sustainability

### 72.1 Platform Economics Overview

**KR-SUS-001 (Platform Economics).** The K-NETWORK platform operates on a sustainable economic model in which all revenue, costs, and rewards are balanced. The 90/10 Economic Model (Part II) defines the allocation of platform revenue. This chapter defines the platform's overall economic sustainability.

### 72.2 Platform Revenue Sources

**KR-SUS-002 (Revenue Sources).** The platform generates revenue from five sources:

| Revenue Source | Description | Deduction | QEV Factor |
|---|---|---|---|
| Commerce | Transaction fees on marketplace commerce | 9% (1.5% processing + 7.5% VAT) | 91% of GR |
| Services | Transaction fees on service delivery | 9% | 91% of GR |
| Learning | Fees on learning courses and paths | 9% | 91% of GR |
| Platform Service Fee | Platform-level service fees | 9% | 91% of GR |
| Partner | Partner revenue share | 9% | 91% of GR |

### 72.3 Platform Cost Structure

**KR-SUS-003 (Cost Structure).** The platform's costs include:

1. **Payment processing** — 1.5% of GR (included in the 9% deduction).
2. **VAT** — 7.5% of GR (included in the 9% deduction, remitted to tax authority).
3. **Platform operations** — funded from a_operational (2–3% of QEV).
4. **Provider payments** — funded from a_provider (35–60% of QEV).
5. **Reward Pool** — funded from a_rewards + a_leadership (13–22% of QEV).
6. **Reserve** — 10% of QEV (protected).

### 72.4 Platform Profitability

**KR-SUS-004 (Platform Profitability).** The platform's profitability is determined by:

```
Platform Revenue = Σ(GR for all transactions)
Platform Costs = Σ(D) + Σ(a_provider) + Σ(a_rewards) + Σ(a_leadership) + Operating Costs
Platform Margin = a_platform + (a_operational − Operating Costs − Benefits Costs)

Where:
- a_platform is the platform's gross margin share (15–65% of QEV depending on revenue type)
- a_operational funds operations and benefits
- Operating Costs are the actual costs of running the platform
- Benefits Costs are the costs of the Tiered Benefits Program (Chapter 71)
```

### 72.5 Worked Platform P&L Example

**Scenario:** A month with the following transaction volumes:

| Revenue Type | GR | D (9%) | QEV | R (10%) | AP (90%) |
|---|---|---|---|---|---|
| Commerce | ₦10,000,000 | ₦900,000 | ₦9,100,000 | ₦910,000 | ₦8,190,000 |
| Services | ₦5,000,000 | ₦450,000 | ₦4,550,000 | ₦455,000 | ₦4,095,000 |
| Learning | ₦2,000,000 | ₦180,000 | ₦1,820,000 | ₦182,000 | ₦1,638,000 |
| Platform Fee | ₦1,000,000 | ₦90,000 | ₦910,000 | ₦91,000 | ₦819,000 |
| Partner | ₦3,000,000 | ₦270,000 | ₦2,730,000 | ₦273,000 | ₦2,457,000 |
| **Total** | **₦21,000,000** | **₦1,890,000** | **₦19,110,000** | **₦1,911,000** | **₦17,199,000** |

**Allocation Pool breakdown:**

| Component | Commerce | Services | Learning | Platform Fee | Partner | **Total** |
|---|---|---|---|---|---|---|
| a_platform | ₦1,365,000 | ₦682,500 | ₦364,000 | ₦591,500 | ₦1,092,000 | **₦4,095,000** |
| a_provider | ₦5,460,000 | ₦2,730,000 | ₦1,001,000 | — | ₦955,500 | **₦10,146,500** |
| a_rewards | ₦728,000 | ₦364,000 | ₦145,600 | ₦136,500 | ₦273,000 | **₦1,647,100** |
| a_leadership | ₦455,000 | ₦227,500 | ₦91,000 | ₦63,700 | ₦81,900 | **₦919,100** |
| a_operational | ₦182,000 | ₦91,000 | ₦36,400 | ₦27,300 | ₦54,600 | **₦391,300** |
| **AP Total** | **₦8,190,000** | **₦4,095,000** | **₦1,638,000** | **₦819,000** | **₦2,457,000** | **₦17,199,000** |

**Verification:** a_platform + a_provider + a_rewards + a_leadership + a_operational = 4,095,000 + 10,146,500 + 1,647,100 + 919,100 + 391,300 = 17,199,000 = AP ✓

**Reward Pool:** RP = a_rewards + a_leadership = 1,647,100 + 919,100 = **₦2,566,200**

**Reserve:** R = **₦1,911,000** (protected)

**Platform P&L:**

```
Gross Revenue:                    ₦21,000,000
Less: Deductions (processing+VAT) ₦1,890,000
QEV:                              ₦19,110,000

Allocation:
  Reserve (10%):                  ₦1,911,000  (protected)
  Provider payments:              ₦10,146,500
  Reward Pool:                    ₦2,566,200
  Platform margin (a_platform):   ₦4,095,000
  Operational (a_operational):    ₦391,300

Operational budget available:     ₦391,300
Less: Actual operating costs:     ₦300,000  (proposed)
Less: Benefits costs:             ₦50,000   (proposed)
Operational surplus:              ₦41,300

Platform gross margin:            ₦4,095,000
Platform net margin:              ₦4,095,000 + ₦41,300 = ₦4,136,300
Platform net margin %:            ₦4,136,300 / ₦21,000,000 = 19.7%
```

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All cost assumptions in this P&L example.

### 72.6 Sustainability Principles

**KR-SUS-005 (Sustainability Principles).** The platform's economic model is sustainable because:

1. **Rewards are funded from genuine activity.** The Reward Pool is funded from a_rewards + a_leadership, which are calculated from QEV, which comes from genuine transactions. No unfunded rewards.
2. **The 10% reserve provides a buffer.** The reserve accumulates over time and provides a buffer against economic shocks, reversal shortfalls (through deferred adjustments, not routine reserve use), and governance-approved allocations.
3. **The platform margin covers operations.** a_platform + (a_operational − operating costs) provides the platform's margin, which covers operations, benefits, and reinvestment.
4. **No circular funding.** The funding chain is linear: GR → QEV → AP → rewards → distribution. No rewards fund other rewards.
5. **No unfunded liability.** The maximum liability in any cycle is the Reward Pool, guaranteed by proportional Reward Share, caps, iterative cap-redistribution, and pro-rata adjustment.
6. **Benefits are funded from operations.** Benefits are funded from a_operational, not from the Reward Pool. This ensures benefits do not compete with rewards for funding.
7. **Annual review.** The platform economics model is reviewed annually (Chapter 64) for sustainability.

### 72.7 Reserve Management

**KR-SUS-006 (Reserve Management).** The 10% reserve:

1. **Accumulates** over cycles as 10% of every transaction's QEV.
2. **Is protected** — it is not allocated to participants except through formal governance (KR-ECO-053).
3. **Is NOT used as a routine buffer** for later-cycle reversal shortfalls. Instead, deferred adjustments are used (KR-ECO-054).
4. **May be used** for governance-approved allocations, economic shocks, and platform sustainability — through the Governance Review process (Chapter 58).
5. **Is reported** in the cycle report (Chapter 62) and annual report.

### 72.8 Economic Growth and Scaling

**KR-SUS-007 (Economic Growth).** As the platform grows:

1. **Gross Revenue increases** — more transactions generate more GR.
2. **Reward Pool increases** — more transactions generate more a_rewards + a_leadership.
3. **Reserve increases** — more transactions generate more reserve.
4. **Platform margin increases** — more transactions generate more a_platform.
5. **Per-participant rewards may increase or decrease** — depending on the number of eligible participants and their proportional Reward Share. The proportional system ensures that growth in the pool is distributed proportionally, not concentrated.

### 72.9 Inflation of Standing Protection

**KR-SUS-008 (Inflation of Standing).** Over time, as the platform grows and more participants achieve higher K-Levels, there is a risk of "inflation of standing" — too many participants at high levels, diluting the value of achievement. The platform protects against this through:

1. **Strictly increasing requirements** — every K-Level field is strictly increasing, making higher levels progressively harder to achieve.
2. **Leadership Multiplication** — higher levels require genuine leadership development (rings), not just accumulation.
3. **Anti-Accumulation** — recruitment alone cannot achieve higher levels.
4. **Active Status Maintenance** — higher levels require ongoing activity to maintain privileges.
5. **Annual calibration** — the annual review (Chapter 64) calibrates thresholds for continued appropriateness to platform growth.

### 72.10 Platform Economics Annual Review

**KR-SUS-009 (Platform Economics Annual Review).** The platform economics model shall be reviewed annually as part of the Annual Cycle (Chapter 64). The review covers:

1. **Revenue trends** — GR growth by revenue type.
2. **Reward Pool trends** — RP growth and distribution patterns.
3. **Reserve adequacy** — whether the reserve is sufficient for economic shocks.
4. **Platform margin** — whether the platform margin covers operations and benefits.
5. **Benefits sustainability** — whether the benefits program is sustainable.
6. **Standing inflation** — whether K-Level achievement rates are appropriate.
7. **Calibration recommendations** — whether thresholds need adjustment.

If adjustments are needed, they shall be applied prospectively only and through the Governance Review process (Chapter 58).

---


# Appendices

---

## Appendix A — K-Level Progression Matrix

### A.1 Complete K-Level Progression Matrix

This appendix reproduces the complete K-Level Progression Matrix from Chapter 31. All values must match Chapter 31 exactly.

| K-Level | Tier | Royal Title | Lifetime KP | Active Months | Personal KP | Trust | Multiplier | R1 Active | R2 Active | R3 Active | R4 Active | R5 Active | Exec R1 (L10+) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Foundation | Normal | 0 | 0 | 50 | 20 | 1.0× | 0 | 0 | 0 | 0 | 0 | — |
| 2 | Foundation | Normal | 500 | 1 | 55 | 25 | 1.1× | 0 | 0 | 0 | 0 | 0 | — |
| 3 | Foundation | Normal | 2,000 | 3 | 60 | 30 | 1.2× | 3 | 0 | 0 | 0 | 0 | — |
| 4 | Growth | Normal | 5,000 | 6 | 80 | 35 | 1.3× | 5 | 3 | 0 | 0 | 0 | — |
| 5 | Growth | Normal | 12,000 | 9 | 90 | 40 | 1.4× | 8 | 5 | 3 | 0 | 0 | — |
| 6 | Growth | Normal | 25,000 | 12 | 100 | 45 | 1.5× | 10 | 8 | 5 | 3 | 0 | — |
| 7 | Leadership | Prince | 50,000 | 18 | 130 | 55 | 1.7× | 15 | 12 | 8 | 5 | 3 | — |
| 8 | Leadership | Prince | 100,000 | 24 | 150 | 60 | 1.9× | 20 | 15 | 12 | 8 | 5 | — |
| 9 | Leadership | Prince | 200,000 | 30 | 170 | 65 | 2.1× | 25 | 20 | 15 | 10 | 8 | — |
| 10 | Executive | Crown Prince | 400,000 | 36 | 200 | 70 | 2.4× | 30 | 25 | 20 | 15 | 10 | — |
| 11 | Executive | Crown Prince | 800,000 | 42 | 220 | 75 | 2.7× | 40 | 30 | 25 | 20 | 15 | — |
| 12 | Executive | Crown Prince | 1,500,000 | 48 | 250 | 80 | 3.0× | 50 | 40 | 30 | 25 | 20 | — |
| 13 | Legacy | King | 3,000,000 | 54 | 280 | 85 | 3.5× | 60 | 50 | 40 | 30 | 25 | 4 |
| 14 | Legacy | King | 6,000,000 | 60 | 300 | 90 | 4.0× | 75 | 60 | 50 | 40 | 30 | 8 |
| 15 | Legacy | King | 12,000,000 | 72 | 350 | 95 | 5.0× | 100 | 75 | 60 | 50 | 40 | 12 |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All values in this matrix.

### A.2 Strictly Increasing Verification

Every progression field is strictly increasing at every level:

- **Lifetime KP:** 0 < 500 < 2,000 < 5,000 < 12,000 < 25,000 < 50,000 < 100,000 < 200,000 < 400,000 < 800,000 < 1,500,000 < 3,000,000 < 6,000,000 < 12,000,000 ✓
- **Active Months:** 0 < 1 < 3 < 6 < 9 < 12 < 18 < 24 < 30 < 36 < 42 < 48 < 54 < 60 < 72 ✓
- **Personal KP:** 50 < 55 < 60 < 80 < 90 < 100 < 130 < 150 < 170 < 200 < 220 < 250 < 280 < 300 < 350 ✓
- **Trust:** 20 < 25 < 30 < 35 < 40 < 45 < 55 < 60 < 65 < 70 < 75 < 80 < 85 < 90 < 95 ✓
- **Multiplier:** 1.0 < 1.1 < 1.2 < 1.3 < 1.4 < 1.5 < 1.7 < 1.9 < 2.1 < 2.4 < 2.7 < 3.0 < 3.5 < 4.0 < 5.0 ✓ (capped at 5.0)
- **R1 Active:** 0 < 0 < 3 < 5 < 8 < 10 < 15 < 20 < 25 < 30 < 40 < 50 < 60 < 75 < 100 ✓
- **R2 Active:** 0 < 0 < 0 < 3 < 5 < 8 < 12 < 15 < 20 < 25 < 30 < 40 < 50 < 60 < 75 ✓
- **R3 Active:** 0 < 0 < 0 < 0 < 3 < 5 < 8 < 12 < 15 < 20 < 25 < 30 < 40 < 50 < 60 ✓
- **R4 Active:** 0 < 0 < 0 < 0 < 0 < 3 < 5 < 8 < 10 < 15 < 20 < 25 < 30 < 40 < 50 ✓
- **R5 Active:** 0 < 0 < 0 < 0 < 0 < 0 < 3 < 5 < 8 < 10 < 15 < 20 < 25 < 30 < 40 ✓
- **Exec R1 (L10+):** L13: 4 < L14: 8 < L15: 12 ✓ (all within 18-member ceiling, KR-LVL-036)

### A.3 Rule ID Reference

| Rule ID | Description | Chapter |
|---|---|---|
| KR-LVL-001 | K-Levels Definition | Ch. 29 |
| KR-LVL-005 | Leadership Multiplication | Ch. 4 |
| KR-LVL-006 | Anti-Accumulation | Ch. 4/38 |
| KR-LVL-007 | Tier Structure | Ch. 30 |
| KR-LVL-008 | Fifteen Levels | Ch. 30 |
| KR-LVL-009 | Progression Matrix | Ch. 31 |
| KR-LVL-010 | Strictly Increasing Progression | Ch. 31 |
| KR-LVL-011 | Progressive Multipliers | Ch. 32 |
| KR-LVL-012 | Multiplier Cap | Ch. 32 |
| KR-LVL-013 | Multiplier Application | Ch. 32 |
| KR-LVL-014 | Multiplier and Maintenance | Ch. 35 |
| KR-LVL-015 | Unlock Requirements | Ch. 33 |
| KR-LVL-016 | All-Requirements Principle | Ch. 33 |
| KR-LVL-017 | Promotion Process | Ch. 33 |
| KR-LVL-018 | Standing-Based Adjustment | Ch. 33 |
| KR-LVL-019 | Prospective Application | Ch. 34 |
| KR-LVL-020 | Policy Binding | Ch. 34 |
| KR-LVL-021 | Level vs. Privileges Distinction | Ch. 34 |
| KR-LVL-022 | Privileges Defined | Ch. 34 |
| KR-LVL-023 | Privilege Suspension | Ch. 34 |
| KR-LVL-024 | Permanent Status Policy | Ch. 34 |
| KR-LVL-025 | Privilege Restoration | Ch. 34 |
| KR-LVL-026 | Tiered Active Maintenance | Ch. 35 |
| KR-LVL-027 | Group Activity Definition | Ch. 35 |
| KR-LVL-028 | Maintenance Effect | Ch. 35 |
| KR-LVL-029 | Maintenance Grace | Ch. 35 |
| KR-LVL-030 | Maintenance vs. Minimum Threshold | Ch. 35 |
| KR-LVL-031 | Leadership Multiplication Principle | Ch. 36 |
| KR-LVL-032 | Leadership Multiplication Start | Ch. 36 |
| KR-LVL-033 | Leadership Multiplication and Anti-Accumulation | Ch. 36 |
| KR-LVL-034 | Leadership Development Matrix | Ch. 37 |
| KR-LVL-035 | Executive-Tier Member Requirement | Ch. 37 |
| KR-LVL-036 | Executive-Tier Ceiling | Ch. 37 |
| KR-LVL-037 | Ring 3 Consistency | Ch. 37 |
| KR-LVL-038 | Progressive Difficulty in Leadership Development | Ch. 37 |
| KR-LVL-039 | Active vs. Total | Ch. 38 |
| KR-LVL-040 | Genuine Contribution Verification | Ch. 38 |
| KR-LVL-041 | Royal Leadership Identity | Ch. 51 |
| KR-LVL-042 | Tier-to-Title Mapping | Ch. 51 |
| KR-LVL-043 | Username Permanence | Ch. 51 |
| KR-LVL-044 | Title Changes | Ch. 51 |
| KR-LVL-045 | Recognition Not Authority | Ch. 51 |
| KR-LVL-046 | Team Name | Ch. 51 |
| KR-LVL-047 | Coronation | Ch. 52 |
| KR-LVL-048 | Coronation Eligibility | Ch. 52 |
| KR-LVL-049 | Coronation Verification | Ch. 52 |
| KR-LVL-050 | Coronation Anti-Manipulation | Ch. 52 |
| KR-LVL-051 | Coronation Recognition Categories | Ch. 53 |
| KR-LVL-052 | Coronation Awards | Ch. 53 |
| KR-LVL-053 | Coronation Funding | Ch. 53 |
| KR-LVL-054 | Coronation Records | Ch. 53 |
| KR-LVL-055 | Coronation Cycle | Ch. 65 |

---

## Appendix B — Leadership Development Matrix

### B.1 Complete Leadership Development Matrix

This appendix reproduces the complete Leadership Development Matrix from Chapter 37. All values must match Chapter 37 and be consistent with Appendix A (Chapter 31).

| K-Level | Tier | R1 Min Members | R1 Min K-Level | R2 Min Members | R2 Min K-Level | R3 Min Members | R3 Min K-Level | R4 Min Members | R4 Min K-Level | R5 Min Members | R5 Min K-Level | Exec R1 (L10+) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Foundation | — | — | — | — | — | — | — | — | — | — | — |
| 2 | Foundation | — | — | — | — | — | — | — | — | — | — | — |
| 3 | Foundation | — | — | — | — | — | — | — | — | — | — | — |
| 4 | Growth | — | — | — | — | — | — | — | — | — | — | — |
| 5 | Growth | — | — | — | — | — | — | — | — | — | — | — |
| 6 | Growth | — | — | — | — | — | — | — | — | — | — | — |
| 7 | Leadership | 15 | L1+ | 12 | L1+ | 8 | L1+ | 5 | L1+ | 3 | L1+ | — |
| 8 | Leadership | 20 | L1+ | 15 | L1+ | 12 | L1+ | 8 | L1+ | 5 | L1+ | — |
| 9 | Leadership | 25 | L1+ | 20 | L1+ | 15 | L1+ | 10 | L1+ | 8 | L1+ | — |
| 10 | Executive | 30 | L1+ | 25 | L1+ | 20 | L1+ | 15 | L1+ | 10 | L1+ | — |
| 11 | Executive | 40 | L1+ | 30 | L1+ | 25 | L1+ | 20 | L1+ | 15 | L1+ | — |
| 12 | Executive | 50 | L1+ | 40 | L1+ | 30 | L1+ | 25 | L1+ | 20 | L1+ | — |
| 13 | Legacy | 60 | L1+ | 50 | L1+ | 40 | L1+ | 30 | L1+ | 25 | L1+ | 4 at L10+ |
| 14 | Legacy | 75 | L1+ | 60 | L1+ | 50 | L1+ | 40 | L1+ | 30 | L1+ | 8 at L10+ |
| 15 | Legacy | 100 | L1+ | 75 | L1+ | 60 | L1+ | 50 | L1+ | 40 | L1+ | 12 at L10+ |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All values in this matrix.

### B.2 Consistency with Progression Matrix (Appendix A)

The R1–R5 minimum members in the Leadership Development Matrix (Appendix B) must match the R1–R5 active member requirements in the Progression Matrix (Appendix A):

| Level | Appendix A (R1) | Appendix B (R1) | Match? |
|---|---|---|---|
| 7 | 15 | 15 | ✓ |
| 8 | 20 | 20 | ✓ |
| 9 | 25 | 25 | ✓ |
| 10 | 30 | 30 | ✓ |
| 11 | 40 | 40 | ✓ |
| 12 | 50 | 50 | ✓ |
| 13 | 60 | 60 | ✓ |
| 14 | 75 | 75 | ✓ |
| 15 | 100 | 100 | ✓ |

(All R2–R5 values also match between Appendices A and B. ✓)

### B.3 Executive-Tier Ring 1 Requirement

The Executive-tier Ring 1 requirement (Exec R1) applies only to Legacy-tier levels (L13–L15), requiring a minimum number of Ring 1 members at K-Level 10 or above:

| Level | Exec R1 Members (L10+) | Within 18-Member Ceiling? |
|---|---|---|
| 13 | 4 | ✓ (4 ≤ 18) |
| 14 | 8 | ✓ (8 ≤ 18) |
| 15 | 12 | ✓ (12 ≤ 18) |

### B.4 18-Member Ceiling

**KR-LVL-036 (18-Member Ceiling — restated).** The Executive-tier Ring 1 requirement (Exec R1) shall not exceed 18 members. This ceiling applies specifically to the Executive-tier (L10+) Ring 1 requirement for Legacy-tier levels, NOT to the general Ring 1 active member requirement. The general Ring 1 requirement (R1 Active in Appendix A) may exceed 18 (e.g., L15 requires 100 active Ring 1 members, which is allowed).

### B.5 Leadership Multiplication Rule IDs

| Rule ID | Description | Chapter |
|---|---|---|
| KR-LVL-031 | Leadership Multiplication Principle | Ch. 36 |
| KR-LVL-032 | Leadership Multiplication Start | Ch. 36 |
| KR-LVL-033 | Leadership Multiplication and Anti-Accumulation | Ch. 36 |
| KR-LVL-034 | Leadership Development Matrix | Ch. 37 |
| KR-LVL-035 | Executive-Tier Member Requirement | Ch. 37 |
| KR-LVL-036 | Executive-Tier Ceiling | Ch. 37 |
| KR-LVL-037 | Ring 3 Consistency | Ch. 37 |
| KR-LVL-038 | Progressive Difficulty in Leadership Development | Ch. 37 |
| KR-LVL-039 | Active vs. Total | Ch. 38 |
| KR-LVL-040 | Genuine Contribution Verification | Ch. 38 |
| KR-LVL-006 | Anti-Accumulation | Ch. 4/38 |

---

## Appendix C — Revenue Allocation Summary

### C.1 Complete Revenue Allocation Table

This appendix reproduces the complete allocation rates from Chapter 9. All values must match Chapter 9 exactly.

| Revenue Type | Platform % | Provider % | Rewards % | Leadership % | Operational % | **Allocation Pool (90%)** | Reserve (10%) | **Total (100%)** |
|---|---|---|---|---|---|---|---|---|
| Commerce | 15% | 60% | 8% | 5% | 2% | **90%** | 10% | **100%** |
| Services | 15% | 60% | 8% | 5% | 2% | **90%** | 10% | **100%** |
| Learning | 20% | 55% | 8% | 5% | 2% | **90%** | 10% | **100%** |
| Platform Service Fee | 65% | — | 15% | 7% | 3% | **90%** | 10% | **100%** |
| Partner | 40% | 35% | 10% | 3% | 2% | **90%** | 10% | **100%** |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All allocation rates.

### C.2 Allocation Rate Verification

For every revenue type, the allocation rates sum to exactly 90%:

- **Commerce:** 15 + 60 + 8 + 5 + 2 = 90% ✓
- **Services:** 15 + 60 + 8 + 5 + 2 = 90% ✓
- **Learning:** 20 + 55 + 8 + 5 + 2 = 90% ✓
- **Platform Service Fee:** 65 + 0 + 15 + 7 + 3 = 90% ✓
- **Partner:** 40 + 35 + 10 + 3 + 2 = 90% ✓

All sum to 90%. Reserve is 10%. Total is 100%. ✓

### C.3 QEV Calculation

For all revenue types:

```
QEV = GR − D
D = 9% of GR (1.5% payment processing + 7.5% VAT)
QEV = 0.91 × GR

R = 0.10 × QEV
AP = 0.90 × QEV
AP + R = QEV ✓
```

### C.4 Reward Pool Contribution by Revenue Type

| Revenue Type | r_rewards | r_leadership | Total RP % of QEV |
|---|---|---|---|
| Commerce | 8% | 5% | 13% |
| Services | 8% | 5% | 13% |
| Learning | 8% | 5% | 13% |
| Platform Service Fee | 15% | 7% | 22% |
| Partner | 10% | 3% | 13% |

### C.5 Worked Examples (Per ₦10,000 GR)

| Revenue Type | QEV | R | AP | a_platform | a_provider | a_rewards | a_leadership | a_operational | RP Total |
|---|---|---|---|---|---|---|---|---|---|
| Commerce | 9,100 | 910 | 8,190 | 1,365 | 5,460 | 728 | 455 | 182 | 1,183 |
| Services | 9,100 | 910 | 8,190 | 1,365 | 5,460 | 728 | 455 | 182 | 1,183 |
| Learning | 9,100 | 910 | 8,190 | 1,820 | 5,005 | 728 | 455 | 182 | 1,183 |
| Platform Fee | 9,100 | 910 | 8,190 | 5,915 | — | 1,365 | 637 | 273 | 2,002 |
| Partner | 9,100 | 910 | 8,190 | 3,640 | 3,185 | 910 | 273 | 182 | 1,183 |

All values in ₦. All reconcile: a_platform + a_provider + a_rewards + a_leadership + a_operational = AP = 8,190 = 0.90 × 9,100 ✓

### C.6 Economic Model Rule IDs

| Rule ID | Description | Chapter |
|---|---|---|
| KR-ECO-001 | 90/10 Principle (Ch.4 and Ch.7) | Ch. 7 |
| KR-ECO-002 | No Unfunded Liability (Ch.4) | Ch. 4 |
| KR-ECO-003 | Core Equations (Ch.7) | Ch. 7 |
| KR-ECO-004 | Allocation Categories (Ch.7) | Ch. 7 |
| KR-ECO-005 | Allocation Sum Constraint (Ch.7) | Ch. 7 |
| KR-ECO-006 | Prohibition of Over-Allocation (Ch.7) | Ch. 7 |
| KR-ECO-007 | Prohibition of Circular Funding (Ch.7) | Ch. 7 |
| KR-ECO-008 | Gross Revenue (Ch.8) | Ch. 8 |
| KR-ECO-009 | Deductions (Ch.8) | Ch. 8 |
| KR-ECO-010 | QEV Definition (Ch.8) | Ch. 8 |
| KR-ECO-011 | Allocation Pool (Ch.8) | Ch. 8 |
| KR-ECO-012 | Reserve (Ch.8) | Ch. 8 |
| KR-ECO-013 | Reconciliation Identity (Ch.8) | Ch. 8 |
| KR-ECO-014 | Allocation Rates (Ch.9) | Ch. 9 |
| KR-ECO-015 | General Allocation Formula (Ch.9) | Ch. 9 |
| KR-ECO-016 | Reward Pool Contribution (Ch.9) | Ch. 9 |
| KR-ECO-017 | Allocation Verification (Ch.9) | Ch. 9 |
| KR-ECO-018 | Revenue Waterfall (Ch.9) | Ch. 9 |
| KR-ECO-040 | Reward Pool (Ch.12) | Ch. 12 |
| KR-ECO-041 | Funding Source (Ch.12) | Ch. 12 |
| KR-ECO-042 | Maximum Liability (Ch.12) | Ch. 12 |
| KR-ECO-043 | No-Unfunded-Liability Guarantee (Ch.12) | Ch. 12 |
| KR-ECO-044 | Pool Closure (Ch.13) | Ch. 13 |
| KR-ECO-045 | Eligibility (Ch.13) | Ch. 13 |
| KR-ECO-046 | Eligibility Freeze (Ch.13) | Ch. 13 |
| KR-ECO-047 | Individual Cap (Ch.14) | Ch. 14 |
| KR-ECO-048 | Cap Application (Ch.14) | Ch. 14 |
| KR-ECO-049 | Pro-Rata Adjustment (Ch.14) | Ch. 14 |
| KR-ECO-050 | Combined Cap and Pro-Rata (Ch.14) | Ch. 14 |
| KR-ECO-051 | Undistributed Amounts (Ch.14) | Ch. 14 |
| KR-ECO-052 | Reserve (Ch.15) | Ch. 15 |
| KR-ECO-053 | Reserve Protection (Ch.15) | Ch. 15 |
| KR-ECO-054 | Reserve and Reversals (Ch.16) | Ch. 16 |
| KR-ECO-055 | Reserve Visibility (Ch.15) | Ch. 15 |
| KR-ECO-056 | Reserve Governance (Ch.15) | Ch. 15 |
| KR-ECO-057 | Reversal Types (Ch.16) | Ch. 16 |
| KR-ECO-058 | Reversal Effect (Ch.16) | Ch. 16 |
| KR-ECO-059 | Reversibility Window (Ch.16) | Ch. 16 |
| KR-ECO-060 | Refund Reversal (Ch.16) | Ch. 16 |
| KR-ECO-061 | Chargeback Reversal (Ch.16) | Ch. 16 |
| KR-ECO-062 | Fraud Reversal (Ch.16) | Ch. 16 |
| KR-ECO-063 | Settlement Failure Reversal (Ch.16) | Ch. 16 |
| KR-ECO-070 | Monthly Reward Cycle (Ch.63) | Ch. 63 |
| KR-ECO-071 | Five Stages (Ch.63) | Ch. 63 |
| KR-ECO-072 | Cycle Schedule (Ch.63) | Ch. 63 |
| KR-ECO-073 | Cycle Publication (Ch.63) | Ch. 63 |
| KR-ECO-074 | Cycle Reconciliation (Ch.63) | Ch. 63 |
| KR-ECO-075 | Non-Blocking Distribution (Ch.45/59) | Ch. 45/59 |

---

## Appendix D — K-Points Category Summary

### D.1 Eight K-Points Categories

This appendix reproduces the K-Points categories from Chapter 18. All values must match Chapter 18 exactly.

| # | Category | Description | Source Engine | Monthly Cap |
|---|---|---|---|---|
| 1 | Commerce K-Points | K-Points from verified purchases | Commerce | Per-category cap |
| 2 | Service K-Points | K-Points from verified service transactions | Services | Per-category cap |
| 3 | Referral K-Points | K-Points from qualifying referrals | K-Rewards | Per-category cap |
| 4 | Business K-Points | K-Points from business tool usage | Identity | Per-category cap |
| 5 | Vendor K-Points | K-Points from vendor sales | Commerce | Per-category cap |
| 6 | Community K-Points | K-Points from community contributions | Communication | Per-category cap |
| 7 | Campaign K-Points | K-Points from campaign participation | Administration | Per-category cap |
| 8 | Learning K-Points | K-Points from learning activities | Learning | Per-category cap |

**GOVERNANCE PARAMETER — REQUIRES APPROVAL:** All monthly caps.

### D.2 K-Points Calculation

```
MonthlyKPoints = Σ(CategoryKPointsᵢ) for i = 1 to 8

Where CategoryKPointsᵢ = Σ(K-Points from each activity in category i)
Subject to: CategoryKPointsᵢ ≤ MonthlyCapᵢ
```

### D.3 K-Points Lifecycle

| Stage | Description | Rule ID |
|---|---|---|
| Accrual | K-Points accrue from genuine activity | KR-PNT-001 |
| Validation | Every activity is validated | KR-SRC-003 |
| Monthly Total | Category K-Points summed to monthly total | KR-PNT-006 |
| Cap | Category cap applied | KR-PNT-008 |
| Reset | Monthly K-Points reset at cycle end | KR-PNT-007 |
| Lifetime | Lifetime K-Points accumulated (never decrease) | KR-PNT-020 |
| Reversal | K-Points reversed if activity reversed | KR-PNT-022 |

### D.4 K-Points Rule IDs

| Rule ID | Description | Chapter |
|---|---|---|
| KR-PNT-001 | K-Points Definition | Ch. 17 |
| KR-PNT-002 | Genuine Activity | Ch. 17 |
| KR-PNT-003 | Eight Categories | Ch. 18 |
| KR-PNT-004 | Learning K-Points Integration | Ch. 18/50 |
| KR-PNT-005 | Calculation Formula | Ch. 19 |
| KR-PNT-006 | Monthly Total | Ch. 19 |
| KR-PNT-007 | Monthly Reset | Ch. 20 |
| KR-PNT-008 | Monthly Caps | Ch. 20 |
| KR-PNT-009 | Minimum Threshold | Ch. 20 |
| KR-PNT-010 | Threshold vs. Maintenance | Ch. 20 |
| KR-PNT-020 | Lifetime Statistics | Ch. 21 |
| KR-PNT-021 | Lifetime Statistics Protection | Ch. 21 |
| KR-PNT-022 | Reversibility Principle | Ch. 22 |
| KR-PNT-023 | Reversibility Window | Ch. 22 |
| KR-PNT-024 | Reversal Process | Ch. 22 |
| KR-PNT-025 | Reversal After Window | Ch. 22 |

---

## Appendix E — Glossary

### E.1 Glossary of Terms

| Term | Definition | Rule ID | Chapter |
|---|---|---|---|
| **Active Member** | A ring member who has generated qualifying K-Points activity in the current cycle | KR-RNG-013 | Ch. 26 |
| **Active Month** | A month in which a participant meets the personal K-Points activity requirement for their K-Level | KR-LVL-009 | Ch. 31 |
| **Active Status** | A participant's standing as actively engaged at their K-Level, maintained by meeting tiered maintenance requirements | KR-LVL-026 | Ch. 35 |
| **Allocation Pool (AP)** | The 90% portion of QEV allocated to platform, provider, rewards, leadership, and operational shares | KR-ECO-011 | Ch. 8 |
| **Anti-Accumulation** | The principle that recruitment alone cannot achieve higher K-Levels; genuine leadership development is required | KR-LVL-006 | Ch. 4/38 |
| **Cap (Individual)** | The maximum percentage of the Reward Pool that any single participant can receive (proposed: 25%) | KR-ECO-047 | Ch. 14 |
| **Coronation** | The annual recognition system for K-NETWORK Legacy-tier leaders | KR-LVL-047 | Ch. 52 |
| **Cycle (Monthly Reward Cycle)** | The fixed five-stage sequence on a published schedule: Accrual, Close, Calculation, Distribution, Reset | KR-ECO-070 | Ch. 63 |
| **Deferred Adjustment** | A negative adjustment to a future cycle's Reward Pool for later-cycle reversals, instead of using the reserve | KR-ECO-058 | Ch. 16 |
| **Deduction (D)** | The non-allocatable portion of Gross Revenue: 9% (1.5% payment processing + 7.5% VAT) | KR-ECO-009 | Ch. 8 |
| **Executive-Tier Ring 1 Requirement** | The requirement for Legacy-tier levels (L13-15) to have a minimum number of Ring 1 members at K-Level 10+ | KR-LVL-035 | Ch. 37 |
| **Fair Reward Principles** | The set of principles ensuring fair reward distribution (No Unfunded Liability, Proportional, Pro-Rata, Cap, etc.) | KR-FND-014 | Ch. 4 |
| **Foundation Tier** | K-Levels 1–3, the entry tier | KR-LVL-007 | Ch. 30 |
| **Genuine Activity** | Activity that originates from real economic or platform engagement, not artificial or fraudulent | KR-PNT-002 | Ch. 17 |
| **Gross Revenue (GR)** | The total revenue from a transaction before deductions | KR-ECO-008 | Ch. 8 |
| **Growth Tier** | K-Levels 4–6 | KR-LVL-007 | Ch. 30 |
| **Iterative Cap-Redistribution** | The process of redistributing excess from capped participants to non-capped participants, iteratively, until convergence | KR-RWD-008 | Ch. 45 |
| **K-Level** | A participant's leadership level in the 15-level system | KR-LVL-001 | Ch. 29 |
| **K-Level Multiplier** | A multiplier applied to a participant's Reward Share based on their K-Level (1.0× to 5.0×) | KR-LVL-011 | Ch. 32 |
| **K-Points** | The activity-tracking unit earned from genuine platform activity across 8 categories | KR-PNT-001 | Ch. 17 |
| **K-Rings** | The network structure system tracking a participant's downline across 5 rings | KR-RNG-001 | Ch. 23 |
| **K-Trust** | The reputation and integrity system producing a Trust Score (0–100) | KR-TRU-001 | Ch. 40 |
| **Leadership Development Matrix** | The matrix specifying minimum ring members and minimum K-Level per ring for each K-Level (L7+) | KR-LVL-034 | Ch. 37 |
| **Leadership Multiplication** | The principle that higher K-Levels require genuine leadership development (rings), beginning at Level 7 | KR-LVL-031 | Ch. 36 |
| **Leadership Tier** | K-Levels 7–9 | KR-LVL-007 | Ch. 30 |
| **Legacy Tier** | K-Levels 13–15 | KR-LVL-007 | Ch. 30 |
| **Lifetime K-Points** | The cumulative K-Points earned across all cycles; never decrease (except formal correction) | KR-PNT-020 | Ch. 21 |
| **18-Member Ceiling** | The maximum number of Executive-tier (L10+) Ring 1 members required for any Legacy-tier level (max 12) | KR-LVL-036 | Ch. 37 |
| **No Unfunded Liability** | The principle that the platform's maximum liability in any cycle is the Reward Pool | KR-ECO-043 | Ch. 12 |
| **No Collateral Harm** | The principle that correcting a fraudulent participant's standing must never reduce correctly-paid rewards to non-fraudulent participants | KR-GOV-030 | Ch. 54 |
| **Permanent Status** | The policy that already-achieved K-Levels are protected from retroactive demotion (prospective-only) | KR-LVL-024 | Ch. 34 |
| **Pro-Rata** | The proportional adjustment ensuring the sum of rewards equals the Reward Pool | KR-ECO-049 | Ch. 14 |
| **Progression Matrix** | The complete K-Level progression table specifying all requirements for each level | KR-LVL-009 | Ch. 31 |
| **QEV (Qualified Economic Value)** | The allocatable portion of Gross Revenue: QEV = GR − D = 0.91 × GR | KR-ECO-010 | Ch. 8 |
| **Reserve (R)** | The 10% protected portion of QEV, not allocated to participants except through formal governance | KR-ECO-012 | Ch. 8 |
| **Reward Pool (RP)** | The pool funded from a_rewards + a_leadership, from which all Reward Shares are distributed | KR-ECO-040 | Ch. 12 |
| **Reward Share** | A participant's share of the Reward Pool, calculated from 4 weighted pillars | KR-RWD-001 | Ch. 44 |
| **Ring Contribution** | A participant's contribution to their ring structure, used in Reward Share calculation | KR-RNG-010 | Ch. 25 |
| **Ring Weights** | The weights assigned to each ring (R1=0.40, R2=0.25, R3=0.15, R4=0.12, R5=0.08) | KR-RNG-008 | Ch. 24 |
| **Royal Leadership Identity** | The recognition identity system mapping K-Level tiers to royal titles (Normal, Prince, Crown Prince, King) | KR-LVL-041 | Ch. 51 |
| **Trust Score** | A numeric score (0–100) reflecting a participant's trustworthiness | KR-TRU-003 | Ch. 41 |
| **Trust Gating** | The system that gates K-Level unlock and reward eligibility based on Trust Score | KR-TRU-007 | Ch. 42 |

---

## Appendix F — Traceability Framework

### F.1 Document Hierarchy

```
PLC-1 (K-NETWORK Platform Constitution v2.0)
  └── KR-1 (K-Rewards Policy & Governance Framework v3.0)  ← THIS DOCUMENT
        ├── SRS-1 (System Requirements Specification)
        ├── DDD-1 (Domain-Driven Design Document)
        ├── LEARN-AD-1 (Learning Architecture Decision)
        ├── GOV-0 (Governance Framework)
        └── Engine-specific reward conformance documents
```

### F.2 Authority Traceability

| Document | Authority Source | Authority Rule |
|---|---|---|
| KR-1 | PLC-1 v2.0 | KR-FND-001 (Authority) |
| SRS-1 | KR-1 | KR-FND-005 (Downstream Conformance) |
| DDD-1 | KR-1 | KR-FND-005 (Downstream Conformance) |
| LEARN-AD-1 | KR-1 | KR-PNT-004 (Learning K-Points Integration) |
| GOV-0 | PLC-1 v2.0 | KR-FND-001 (Authority) |
| Engine documents | KR-1 | KR-FND-005 (Downstream Conformance) |

### F.3 Constitutional Principle Traceability

| PLC-1 Principle | KR-1 Rule | KR-1 Chapter |
|---|---|---|
| Constitutional Supremacy | KR-FND-001 | Ch. 1 |
| Downstream Conformance | KR-FND-005 | Ch. 1 |
| Transparency | KR-FND-008 | Ch. 4 |
| Proportionality | KR-FND-009 | Ch. 4 |
| No Unfunded Liability | KR-FND-010 | Ch. 4 |
| Auditability | KR-FND-015 | Ch. 4 |
| Constitutional Consistency | KR-FND-016 | Ch. 58 |

### F.4 Related Documents

| Document | Role | Reference |
|---|---|---|
| PLC-1 v2.0 | Constitution — source of authority | KR-FND-001 |
| SRS-1 | System Requirements | KR-FND-005 |
| DDD-1 | Domain-Driven Design | KR-FND-005 |
| LEARN-AD-1 | Learning Architecture Decision (approved) | KR-PNT-004 |
| GOV-0 | Governance Framework | KR-GOV-003 |
| Compensation Plan v1.0 | Source analysis (superseded by KR-1) | — |

### F.5 Rule ID Domains

| Domain | Prefix | Coverage |
|---|---|---|
| Foundation | KR-FND- | Principles, authority, scope |
| Economic | KR-ECO- | 90/10 model, QEV, allocation, Reward Pool, cycles |
| K-Points | KR-PNT- | K-Points system, categories, caps, reversal |
| K-Rings | KR-RNG- | Ring formation, weights, contribution, decay |
| K-Levels | KR-LVL- | Levels, tiers, multipliers, progression, maintenance, royal identity, coronation, leadership multiplication |
| K-Trust | KR-TRU- | Trust score, signals, gating, recovery |
| Reward Share | KR-RWD- | Reward Share formula, distribution, worked examples |
| Reward Sources | KR-SRC- | Rewardable activities, validation |
| Activity Rules | KR-ACT- | Per-activity K-Point rules |
| Anti-Fraud | KR-FRD- | Prohibited activities, detection, sanctions |
| Governance | KR-GOV- | Governance review, appeals, audit, reporting |
| Audit | KR-AUD- | Mathematical consistency audit |
| Benefits | KR-BEN- | Tiered benefits program |
| Sustainability | KR-SUS- | Platform economics, sustainability |

---

## Appendix G — Governance Parameter Register

### G.1 Purpose

This appendix enumerates all GOVERNANCE PARAMETERS referenced throughout KR-1 v3.0. Each governance parameter is a value that requires approval before taking effect. Until approved, these are proposed values labeled **GOVERNANCE PARAMETER — REQUIRES APPROVAL**.

### G.2 Governance Parameter Register

| # | Parameter | Proposed Value | Rule ID | Chapter |
|---|---|---|---|---|
| 1 | Deduction rate | 9% (1.5% processing + 7.5% VAT) | KR-ECO-009 | Ch. 8 |
| 2 | Reserve rate | 10% of QEV | KR-ECO-012 | Ch. 8 |
| 3 | Allocation rate (sum) | 90% of QEV | KR-ECO-005 | Ch. 7 |
| 4 | Commerce allocation rates | 15/60/8/5/2 | KR-ECO-014 | Ch. 9 |
| 5 | Services allocation rates | 15/60/8/5/2 | KR-ECO-014 | Ch. 9 |
| 6 | Learning allocation rates | 20/55/8/5/2 | KR-ECO-014 | Ch. 9 |
| 7 | Platform Service Fee allocation rates | 65/0/15/7/3 | KR-ECO-014 | Ch. 9 |
| 8 | Partner allocation rates | 40/35/10/3/2 | KR-ECO-014 | Ch. 9 |
| 9 | Individual cap rate | 25% of Reward Pool | KR-ECO-047 | Ch. 14 |
| 10 | K-Level multipliers | 1.0× to 5.0× (see Appendix A) | KR-LVL-011 | Ch. 32 |
| 11 | Multiplier cap | 5.0× | KR-LVL-012 | Ch. 32 |
| 12 | Lifetime KP thresholds | 0 to 12,000,000 (see Appendix A) | KR-LVL-009 | Ch. 31 |
| 13 | Active month requirements | 0 to 72 months (see Appendix A) | KR-LVL-028 | Ch. 35 |
| 14 | Personal KP requirements | 50 to 350 (see Appendix A) | KR-LVL-009 | Ch. 31 |
| 15 | Trust requirements | 20 to 95 (see Appendix A) | KR-LVL-015 | Ch. 33 |
| 16 | Ring 1 active member requirements | 0 to 100 (see Appendix A) | KR-LVL-034 | Ch. 37 |
| 17 | Ring 2 active member requirements | 0 to 75 (see Appendix A) | KR-LVL-034 | Ch. 37 |
| 18 | Ring 3 active member requirements | 0 to 60 (see Appendix A) | KR-LVL-034 | Ch. 37 |
| 19 | Ring 4 active member requirements | 0 to 50 (see Appendix A) | KR-LVL-034 | Ch. 37 |
| 20 | Ring 5 active member requirements | 0 to 40 (see Appendix A) | KR-LVL-034 | Ch. 37 |
| 21 | Exec R1 requirements (L13-15) | 4, 8, 12 at L10+ | KR-LVL-035 | Ch. 37 |
| 22 | 18-member ceiling | 18 (Exec-tier R1) | KR-LVL-036 | Ch. 37 |
| 23 | Ring weights | R1=0.40, R2=0.25, R3=0.15, R4=0.12, R5=0.08 | KR-RNG-008 | Ch. 24 |
| 24 | Reward Share pillar weights | KP=0.40, RC=0.25, KL=0.20, KT=0.15 | KR-RWD-003 | Ch. 44 |
| 25 | Minimum threshold (K-Points) | Proposed: 10 K-Points/month | KR-PNT-009 | Ch. 20 |
| 26 | Monthly caps (per category) | Per-category (see Appendix D) | KR-PNT-008 | Ch. 20 |
| 27 | Trust Score range | 0–100 | KR-TRU-003 | Ch. 41 |
| 28 | Trust gating thresholds | 20–95 (see Appendix A) | KR-TRU-007 | Ch. 42 |
| 29 | Reversibility window | Proposed: 30 days | KR-PNT-023 | Ch. 22 |
| 30 | Maintenance requirements (Foundation) | 50 KP, no Group Activity | KR-LVL-026 | Ch. 35 |
| 31 | Maintenance requirements (Growth) | 150 KP + 300 RC | KR-LVL-026 | Ch. 35 |
| 32 | Maintenance requirements (Leadership) | 400 KP + 1,500 RC | KR-LVL-026 | Ch. 35 |
| 33 | Maintenance requirements (Executive) | 800 KP + 4,000 RC | KR-LVL-026 | Ch. 35 |
| 34 | Maintenance requirements (Legacy) | 1,500 KP + 10,000 RC | KR-LVL-026 | Ch. 35 |
| 35 | Maintenance grace period | Proposed: 1 cycle | KR-LVL-029 | Ch. 35 |
| 36 | Cycle close cutoff | 28th of month (proposed) | KR-ECO-072 | Ch. 63 |
| 37 | Calculation period | 2 days (proposed) | KR-ECO-072 | Ch. 63 |
| 38 | Distribution window | 7 days (proposed) | KR-ECO-072 | Ch. 63 |
| 39 | Appeal resolution timeframe | 30 days (proposed) | KR-GOV-006 | Ch. 59 |
| 40 | K-Point values (Commerce) | 1 per ₦100 | KR-ACT-001 | Ch. 49 |
| 41 | K-Point values (Service) | 1 per ₦100 | KR-ACT-001 | Ch. 49 |
| 42 | K-Point values (Referral) | 10 per qualifying referral | KR-ACT-001 | Ch. 49 |
| 43 | K-Point values (Business) | 5 per action | KR-ACT-001 | Ch. 49 |
| 44 | K-Point values (Vendor) | 1 per ₦100 | KR-ACT-001 | Ch. 49 |
| 45 | K-Point values (Community) | 3 per contribution | KR-ACT-001 | Ch. 49 |
| 46 | K-Point values (Learning — course) | 5 per course | KR-ACT-001 | Ch. 49 |
| 47 | K-Point values (Learning — path) | 10 per path | KR-ACT-001 | Ch. 49 |
| 48 | K-Point values (Learning — assessment) | 2 per assessment | KR-ACT-001 | Ch. 49 |
| 49 | Trust gates (per activity) | 20–40 (see Chapter 49) | KR-ACT-001 | Ch. 49 |
| 50 | Coronation recognition categories | 5 categories (see Ch. 53) | KR-LVL-051 | Ch. 53 |
| 51 | Sanction thresholds | Per severity (see Ch. 57) | KR-FRD-011 | Ch. 57 |
| 52 | Temporary suspension duration | Per severity (see Ch. 57) | KR-FRD-011 | Ch. 57 |
| 53 | Foundation tier benefits | Welcome kit, discounts, basic support | KR-BEN-004 | Ch. 71 |
| 54 | Growth tier benefits | Priority support, enhanced discounts, early access | KR-BEN-005 | Ch. 71 |
| 55 | Leadership travel allowance | ₦1,500/yr | KR-BEN-006 | Ch. 71 |
| 56 | Executive car allowance | ₦6,000/yr | KR-BEN-007 | Ch. 71 |
| 57 | Executive regional travel | ₦5,000/yr | KR-BEN-007 | Ch. 71 |
| 58 | Legacy housing allowance | ₦25,000/yr | KR-BEN-008 | Ch. 71 |
| 59 | Legacy international travel | ₦10,000/yr | KR-BEN-008 | Ch. 71 |
| 60 | Density gate thresholds | Per ring/level (see Ch. 24) | KR-RNG-009 | Ch. 24 |
| 61 | Ring decay rate | Per cycle (see Ch. 26) | KR-RNG-014 | Ch. 26 |
| 62 | Trust signal weights | Per signal (see Ch. 41) | KR-TRU-004 | Ch. 41 |
| 63 | Trust recovery rate | Per cycle (see Ch. 43) | KR-TRU-009 | Ch. 43 |
| 64 | Trust protection floor | Per level (see Ch. 43) | KR-TRU-010 | Ch. 43 |

### G.3 Governance Parameter Policy

**KR-GOV-022 (Governance Parameter Policy).** All governance parameters:

1. Require approval before taking effect.
2. Are labeled **GOVERNANCE PARAMETER — REQUIRES APPROVAL** throughout the document.
3. May only be changed through the Governance Review process (Chapter 58).
4. Changes are prospective-only (no retroactive application).
5. Changes require advance notice to participants.
6. All governance parameters are listed in this register for engineering traceability.

---

## Appendix H — Illustrative Participant Journey

### H.1 Purpose

This appendix provides an illustrative participant journey showing how the K-Rewards framework works in practice. All names, values, and timelines are illustrative. The journey demonstrates K-Level progression, K-Rings formation, Trust Score development, and Reward Share calculation over a multi-year period.

### H.2 Participant Profile

- **Name:** Amina (illustrative)
- **Start date:** Month 1
- **Starting K-Level:** Level 1 (Foundation)
- **Starting Trust Score:** 50

### H.3 Journey Timeline

This journey assumes consistent genuine activity. All timelines are illustrative and depend on actual activity levels.

| Month | K-Level | Lifetime KP | Active Months | Trust | R1 Active | Key Milestone |
|---|---|---|---|---|---|---|
| 1 | L1 | 100 | 1 | 52 | 0 | Joins platform, first commerce activity |
| 3 | L1 | 800 | 3 | 55 | 0 | Regular commerce activity |
| 6 | L2 | 2,100 | 6 | 58 | 0 | Reaches 500 lifetime KP (L2 threshold) at month ~5; promoted to L2 |
| 12 | L3 | 5,500 | 12 | 62 | 4 | Reaches 2,000 lifetime KP + 3 active months (L3 threshold) at month ~10; promoted to L3; begins building R1 |
| 18 | L4 | 12,500 | 18 | 65 | 6 | Reaches 5,000 lifetime KP + 6 active months (L4 threshold) at month ~16; promoted to L4 |
| 24 | L5 | 25,500 | 24 | 68 | 9 | Reaches 12,000 lifetime KP + 9 active months (L5 threshold) at month ~22; promoted to L5 |
| 30 | L6 | 50,500 | 30 | 72 | 12 | Reaches 25,000 lifetime KP + 12 active months (L6 threshold) at month ~28; promoted to L6 |
| 42 | L7 | 100,500 | 42 | 78 | 16 | Reaches 50,000 lifetime KP + 18 active months (L7 threshold); promoted to L7 (Prince); R1=15, R2=12, R3=8, R4=5, R5=3 |
| 54 | L8 | 200,500 | 54 | 82 | 22 | Reaches 100,000 lifetime KP + 24 active months (L8 threshold); promoted to L8; R1=20, R2=15, R3=12, R4=8, R5=5 |
| 66 | L9 | 400,500 | 66 | 85 | 27 | Reaches 200,000 lifetime KP + 30 active months (L9 threshold); promoted to L9; R1=25, R2=20, R3=15, R4=10, R5=8 |
| 78 | L10 | 800,500 | 78 | 88 | 32 | Reaches 400,000 lifetime KP + 36 active months (L10 threshold); promoted to L10 (Crown Prince); R1=30, R2=25, R3=20, R4=15, R5=10 |
| 90 | L11 | 1,500,500 | 90 | 90 | 42 | Reaches 800,000 lifetime KP + 42 active months (L11 threshold); promoted to L11; R1=40, R2=30, R3=25, R4=20, R5=15 |
| 102 | L12 | 3,000,500 | 102 | 92 | 52 | Reaches 1,500,000 lifetime KP + 48 active months (L12 threshold); promoted to L12; R1=50, R2=40, R3=30, R4=25, R5=20 |
| 114 | L13 | 6,000,500 | 114 | 93 | 62 | Reaches 3,000,000 lifetime KP + 54 active months (L13 threshold) + Exec R1=4 at L10+; promoted to L13 (King); R1=60, R2=50, R3=40, R4=30, R5=25 |
| 126 | L14 | 12,000,500 | 126 | 94 | 77 | Reaches 6,000,000 lifetime KP + 60 active months (L14 threshold) + Exec R1=8 at L10+; promoted to L14; R1=75, R2=60, R3=50, R4=40, R5=30 |
| 138 | L15 | 24,000,500 | 138 | 95 | 102 | Reaches 12,000,000 lifetime KP + 72 active months (L15 threshold) + Exec R1=12 at L10+; promoted to L15; R1=100, R2=75, R3=60, R4=50, R5=40 |

### H.4 Active-Month Requirement Verification

Each promotion occurs only after the active-month requirement is met. The active-month requirements are:

| Level | Active Months Required | Month Achieved (illustrative) | Meets Requirement? |
|---|---|---|---|
| L2 | 1 | 5 | ✓ (5 ≥ 1) |
| L3 | 3 | 10 | ✓ (10 ≥ 3) |
| L4 | 6 | 16 | ✓ (16 ≥ 6) |
| L5 | 9 | 22 | ✓ (22 ≥ 9) |
| L6 | 12 | 28 | ✓ (28 ≥ 12) |
| L7 | 18 | 42 | ✓ (42 ≥ 18) |
| L8 | 24 | 54 | ✓ (54 ≥ 24) |
| L9 | 30 | 66 | ✓ (66 ≥ 30) |
| L10 | 36 | 78 | ✓ (78 ≥ 36) |
| L11 | 42 | 90 | ✓ (90 ≥ 42) |
| L12 | 48 | 102 | ✓ (102 ≥ 48) |
| L13 | 54 | 114 | ✓ (114 ≥ 54) |
| L14 | 60 | 126 | ✓ (126 ≥ 60) |
| L15 | 72 | 138 | ✓ (138 ≥ 72) |

**All active-month requirements are met before promotion.** ✓ (This fixes the v2.1 error where Amina reached L14 at month 58, which required 60 active months, and L15 at month 60, which required 72.)

### H.5 Reward Share Illustration

At month 78 (L10), Amina's Reward Share for the cycle:

**Assumptions:**
- Monthly K-Points: 200 (meeting L10 personal activity requirement)
- Ring Contribution: 4,000 (meeting L10 Executive maintenance requirement)
- K-Level Multiplier: 2.4×
- Trust Score: 88
- Reward Pool for the cycle: ₦1,000,000
- Total Monthly K-Points across all participants: 50,000
- Total Ring Contribution across all participants: 800,000
- Sum of (Multiplier × Trust): 5,000

**Pillar calculations:**

```
P1 (K-Points) = 200 / 50,000 = 0.004
P2 (Ring Contribution) = 4,000 / 800,000 = 0.005
P3 (K-Level Multiplier) = 2.4 / 5.0 = 0.48
P4 (K-Trust) = 88 / 100 = 0.88
```

**Reward Share Score:**

```
RSS = (0.40 × 0.004) + (0.25 × 0.005) + (0.20 × 0.48) + (0.15 × 0.88)
    = 0.0016 + 0.00125 + 0.096 + 0.132
    = 0.23085
```

**Reward Amount:**

```
RewardAmount = (RSS / Σ(RSS)) × RP
```

Assuming Σ(RSS) = 5.0 (sum of all participants' RSS):

```
RewardAmount = (0.23085 / 5.0) × 1,000,000 = 0.04617 × 1,000,000 = ₦46,170
```

**Cap check:**

```
CapIndividual = 0.25 × 1,000,000 = ₦250,000
₦46,170 < ₦250,000 → No cap applied ✓
```

**Amina's reward for the cycle: ₦46,170**

### H.6 Journey Summary

Amina's journey from Level 1 to Level 15 (illustrative):

- **Duration:** 138 months (~11.5 years)
- **K-Level progression:** L1 → L15 (all 15 levels)
- **Royal identity:** Normal → Prince (L7) → Crown Prince (L10) → King (L13)
- **Trust Score:** 50 → 95
- **Ring development:** 0 → 100 (R1), 0 → 75 (R2), 0 → 60 (R3), 0 → 50 (R4), 0 → 40 (R5)
- **Executive-tier R1:** 0 → 12 (at L10+)
- **Key principles demonstrated:**
  - Genuine activity drives progression (not recruitment alone)
  - Active-month requirements met before each promotion
  - Leadership development (rings) required from L7
  - Executive-tier R1 requirement met for Legacy tier
  - Trust Score grows with genuine, sustained activity
  - Reward Share is proportional (4-pillar blend)
  - Individual cap prevents dominance

### H.7 Failure Example (Illustrative)

**Participant:** Bola (illustrative)

Bola attempts to reach Level 7 through recruitment alone:

| Month | Strategy | Result |
|---|---|---|
| 1–6 | Recruits 50 participants | 50 Ring 1 members, but no genuine activity |
| 7–12 | Recruits 100 more | 150 Ring 1 members, but K-Points = 0 (no genuine activity) |
| 13 | Attempts L7 promotion | **DENIED** — fails personal KP requirement (0 < 130) and active month requirement (0 < 18) |

**Why Bola fails:**

1. **No K-Points** — recruitment alone does not generate K-Points (KR-PNT-007).
2. **No active months** — no personal KP activity means no active months.
3. **No genuine ring members** — recruited members who don't engage in genuine activity are not "active members" (KR-LVL-039).
4. **Anti-Accumulation** — recruitment alone cannot achieve higher levels (KR-LVL-006).

**This demonstrates the Anti-Accumulation Principle: progression requires genuine activity, not just recruitment.**

---

*End of KR-1 v3.0 — K-Rewards Policy & Governance Framework*
