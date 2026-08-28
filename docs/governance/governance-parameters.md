# K-NETWORK Governance Parameters

## Document Information
- **Date**: 2026-08-26
- **Status**: All values are PROPOSED/SUGGESTED for development. **REQUIRE GOVERNANCE APPROVAL before production.**
- **Authority**: KR-1 v3.0 (Governance Rules); PLC-1 v2.0 (Platform Constitution)

---

## Overview

All numerical compensation, economic, trust, and operational values are GOVERNANCE PARAMETERS owned by KR-1. Where KR-1 does not specify exact values, we select values appropriate for a trust-based marketplace platform and document them here. All values require governance approval before production deployment.

---

## Trust Signal Weights (KR-1 KR-TRU-005)

The Trust Score is calculated as: `Trust Score = Σ(w_s × S_s)` where `Σ(w_s) = 1.0` and no single weight = 1.0.

| Signal | Weight | Rationale |
|---|---|---|
| Transaction history (positive) | 0.18 | Highest positive weight — genuine verified transactions are the strongest indicator of trustworthiness in a marketplace |
| Fraud flags (negative) | 0.15 | Highest negative weight — fraud is the most serious trust violation |
| Verification status (positive) | 0.10 | KYC completion is foundational for trust; Tier 0→3 provides graduated signal |
| Dispute history (negative) | 0.10 | Disputes indicate potential issues but may be resolved amicably |
| Chargeback history (negative) | 0.10 | Chargebacks are a strong negative signal in commerce |
| Activity consistency (positive) | 0.10 | Consistent engagement over time builds trust |
| Sanction history (negative) | 0.08 | Past sanctions are serious but may be time-decayed |
| Community standing (positive) | 0.07 | Community contributions add trust but are secondary to transactional behavior |
| Account age (positive) | 0.07 | Longer accounts tend to be more trustworthy but is a passive signal |
| Referral quality (positive) | 0.05 | Referral quality is a supporting signal, less direct than own behavior |
| **Total** | **1.00** | Sum of all weights = 1.0 ✓ |

**Validation**: No single weight = 1.0 ✓ | Sum = 1.0 ✓ | 10 signals ✓

---

## Trust Gating Thresholds (KR-1 KR-TRU-007 — DEFINED in KR-1)

These values ARE defined in KR-1 Ch.42:

| Gate | Threshold | What It Gates |
|---|---|---|
| Basic K-Points | Trust ≥ 20 | Eligibility for basic K-Points categories |
| Vendor/Provider K-Points | Trust ≥ 40 | Eligibility for vendor and provider K-Points |
| Reward Share | Trust ≥ 20 | Eligibility for Reward Share distribution |

## K-Level Trust Thresholds (KR-1 Ch.31 & Ch.42 — DEFINED in KR-1)

| K-Level | Trust Range | Tier |
|---|---|---|
| L1 | 20 | Foundation |
| L2 | 25 | Foundation |
| L3 | 30 | Foundation |
| L4 | 35 | Growth |
| L5 | 40 | Growth |
| L6 | 45 | Growth |
| L7 | 55 | Leadership |
| L8 | 60 | Leadership |
| L9 | 65 | Leadership |
| L10 | 70 | Executive |
| L11 | 75 | Executive |
| L12 | 80 | Executive |
| L13 | 85 | Legacy |
| L14 | 90 | Legacy |
| L15 | 95 | Legacy |

---

## Trust Recovery Rate (KR-1 KR-TRU-009)

| Parameter | Suggested Value | Rationale |
|---|---|---|
| Recovery rate per cycle | +2 points per cycle | Gradual recovery — prevents rapid trust restoration after violations |
| Recovery cycle duration | 30 days | Monthly cycles align with K-Points monthly caps |
| Max recovery | Up to pre-reduction level | Per KR-1 KR-TRU-009 |
| Fraud-sanctioned recovery | Restricted (0.5× rate, 2× cycle duration) | Fraud participants face extended recovery per KR-TRU-011 |

## Trust Protection (KR-1 KR-TRU-010)

| Parameter | Suggested Value | Rationale |
|---|---|---|
| Protection period | 90 days | Reasonable period for hardship/platform error resolution |
| False-positive reversal | Full restoration + K-Points invalidation reversed | Per KR-1 KR-TRU-010 AC3 |

---

## Trust Score Recalculation Frequency

| Parameter | Suggested Value | Rationale |
|---|---|---|
| Scheduled recalculation | Daily (midnight UTC) | Regular baseline recalculation |
| Event-driven recalculation | Immediate | On trust-relevant events (transaction, dispute, fraud flag, etc.) |
| Debounce window | 5 minutes | Prevents rapid recalculation from clustered events |

---

## K-Points Monthly Caps (KR-1 KR-PNT-003 — GAP-008)

| Category | Monthly Cap | Rationale |
|---|---|---|
| Commerce | 500 | Primary economic activity |
| Service | 500 | Primary economic activity |
| Business | 200 | Secondary business activity |
| Vendor | 300 | Vendor-specific activity |
| Community | 150 | Community contributions |
| Campaign | 100 | Campaign participation |
| Referral | 100 | Referral activity |
| Learning | 300 | Learning engagement |

## K-Points Reward Eligibility (GAP-009, GAP-010)

| Parameter | Suggested Value | Rationale |
|---|---|---|
| Minimum K-Points for reward eligibility | 50 | Ensures meaningful participation before rewards |
| Individual reward cap | 25% of Reward Pool | Prevents any single participant from dominating rewards |

## Benefit Tier Values (GAP-011)

| K-Level | Monthly Benefit (₦) | Rationale |
|---|---|---|
| L1–L3 (Foundation) | ₦1,500 | Entry-level benefits |
| L4–L6 (Growth) | ₦5,000 | Mid-tier benefits |
| L7–L9 (Leadership) | ₦15,000 | Leadership benefits |
| L10–L12 (Executive) | ₦25,000 | Executive benefits |
| L13–L15 (Legacy) | ₦35,000 | Legacy benefits |

---

## AML Thresholds (GAP-017)

| Parameter | Value | Rationale |
|---|---|---|
| Structuring threshold | ₦5,000,000 | CBN reporting threshold |
| Structuring window | 24 hours | Standard regulatory window |
| Structuring min count | 3 transactions | Pattern threshold |
| Structuring proximity | 80% of threshold | Just-below threshold detection |
| Rapid movement window | 2 hours | Quick in-and-out detection |
| Rapid movement min amount | ₦100,000 | Minimum for flagging |
| Rapid movement ratio | 80% | Majority of incoming goes out |
| High volume daily limit | ₦10,000,000 | Unusual daily volume |
| High volume monthly limit | ₦50,000,000 | Unusual monthly volume |
| Suspicious pattern count | 10 transactions/1hr | High-frequency anomaly |

---

## Session & Security Parameters (GAP-015, GAP-016)

| Parameter | Value | Status |
|---|---|---|
| Concurrent sessions (participant) | 3 | User-approved |
| Concurrent sessions (vendor) | 3 | User-approved |
| Concurrent sessions (provider) | 3 | User-approved |
| Concurrent sessions (instructor) | 3 | User-approved |
| Concurrent sessions (partner) | 5 | User-approved |
| Concurrent sessions (admin) | 2 | User-approved |
| Concurrent sessions (moderator) | 2 | User-approved |
| Lockout threshold | 10 failed attempts | From SRS-1 line 30329 |
| Lockout duration | 15 minutes | Default (requires approval) |

---

## Leadership Multiplication (KR-1 H-3)

| K-Level | Multiplier |
|---|---|
| L1–L6 (Foundation) | 1.0× |
| L7 | 1.0× |
| L8 | 1.5× |
| L9 | 2.0× |
| L10 | 2.5× |
| L11 | 3.0× |
| L12 | 3.5× |
| L13 | 4.0× |
| L14 | 4.5× |
| L15 | 5.0× |

---

## Platform Service Fee Waterfall (C-1)

| Stage | Recipient | Percentage |
|---|---|---|
| 1st | Participant (settlement) | 65% |
| 2nd | Reward Pool | 15% |
| 3rd | Platform operations | 7% |
| 4th | Team/Community fund | 3% |
| Reward Pool contribution | | 22% total (15% + 7% of remaining) |

---

*All values marked PROPOSED require governance approval before production deployment. Documented in gap-log.md.*
