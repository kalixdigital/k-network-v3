<!--
@KEngine uxds-1
@DocumentType UI/UX Design Specification
@Version 1.0
@Status Draft for Governance Review
@K-NETWORK
-->

# UXDS-1 — K-NETWORK UI/UX Design Specification

**Version 1.0**
**Status: Draft for Governance Review**
**Date: 2026-08-26**

---

## Document Control Block

| Field | Value |
|---|---|
| **Document ID** | UXDS-1 |
| **Document Title** | K-NETWORK UI/UX Design Specification |
| **Version** | 1.0 |
| **Status** | Draft for Governance Review |
| **Date** | 2026-08-26 |
| **Author** | K-NETWORK Product Design Team |
| **Reviewer** | K-NETWORK Engineering Leadership / Governance Review Board |
| **Approver** | K-NETWORK Executive Authority |
| **Review Cycle** | Annual, consolidated with platform-wide review; immediately on significant design system change |
| **Supersedes** | All prior UX design drafts and style guides |

### Authority

This document derives its authority from PLC-1 — K-NETWORK Platform Constitution v2.0. It is the sole authoritative source of UI/UX design standards for the K-NETWORK platform. Every visual element, interaction pattern, navigation structure, and user experience flow across all eleven Core Platform Engines must trace back to a standard defined in this document.

### Supersession

This version supersedes all prior UX design drafts, style guides, and design system documentation. Where this document conflicts with a prior version, this document prevails. Where this document conflicts with PLC-1, PLC-1 prevails unconditionally.

### Scope

UXDS-1 governs all user-facing interface design across all eleven Core Platform Engines:

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

This document covers the web application (React + Next.js SPA), the mobile application (React Native), and the admin console. All three surfaces share a single design system (BRD-1 §18.6.2).

### Precedence

PLC-1 > KR-1 > BRD-1 > SRS-1 > SAD-1 > SDD-1 > DDD-1 > API-1 > UXDS-1

In case of conflict, the parent document prevails; UXDS-1 must be corrected.

---

## Version History

| Version | Date | Author | Description | Status |
|---|---|---|---|---|
| 1.0 | 2026-08-26 | K-NETWORK Product Design Team | Complete from-scratch rebuild. Unified design system for all eleven engines. Design philosophy, color system, typography, spacing, component standards, navigation patterns, responsive behavior, mobile UX, commerce UX, services UX, learning UX, leadership dashboard, Royal Identity, coronation, security UX, wallet UX, notifications, administration UX, partner UX, empty/loading/error/security states, accessibility (WCAG 2.2 AA), usability principles, design tokens, traceability matrices. | Draft |

---

## Approval & Sign-Off

| Role | Name | Signature | Date | Status |
|---|---|---|---|---|
| Product Design Lead | | | | Pending |
| Engineering Lead | | | | Pending |
| Executive Authority | | | | Pending |
| Governance Review Board | | | | Pending |

---

## Distribution List

| Recipient | Format |
|---|---|
| K-NETWORK Executive Leadership | Digital |
| Product & Engineering Team | Digital |
| Design Team | Digital |
| Frontend Development Team | Digital |
| Mobile Development Team | Digital |
| QA & Accessibility Team | Digital |
| Governance Review Board | Digital |
| Platform Administrators | Digital |

---

## Related Documents

| Document | Version | Relationship |
|---|---|---|
| PLC-1 — Platform Constitution | 2.0 | Supreme authority; UXDS-1 implements PLC-1 design principles |
| KR-1 — K-Rewards Policy & Governance Framework | 3.0 | Governs all reward-related UI; owns numerical parameters displayed in leadership dashboards |
| BRD-1 — Business Requirements Document | 1.0 | Defines UI-1 through UI-10 design principles; §18.6 design system governance |
| SRS-1 — Software Requirements Specification | 2.0 | NFRs constrain UX (accessibility, performance, privacy); functional requirements drive UI flows |
| SAD-1 — Software Architecture Document | 1.0 | Frontend architecture (React/Next.js, React Native); real-time (WebSocket); caching |
| SDD-1 — Software Design Document | 1.0 | State machines drive UI flows; API patterns drive frontend data handling |
| DDD-1 — Database Design Document | 1.0 | Data models inform UI information architecture |
| API-1 — API Specification | 1.0 | API contracts drive frontend data fetching, pagination, error handling |

---

## Document Control Policy

1. **Authority.** This document derives its authority from PLC-1 v2.0. It is subordinate to PLC-1, KR-1, BRD-1, SRS-1, SAD-1, SDD-1, DDD-1, and API-1.

2. **Review Cycle.** This document shall be reviewed no less frequently than annually, consolidated with the platform-wide review. Off-cycle reviews may be triggered by governance decisions, significant design system changes, or accessibility audit findings.

3. **Traceability.** All design decisions in this document must be traceable to their source in PLC-1, KR-1, BRD-1, or SRS-1. Each design principle carries a reference to its governing document.

4. **Design System Governance.** The design system defined in this document is owned and governed centrally. No engine may deviate from the design system without governance approval (BRD-1 §18.6.2).

5. **Accessibility.** Accessibility is a constitutional standard, not a best-effort aspiration. WCAG 2.2 AA conformance is mandatory across all user-facing interfaces (SRS-NFR-008; BRD-1 §18.7).

---

## Table of Contents

**Part I — Design Foundation**
- Chapter 1 — Design Philosophy and UX Principles
- Chapter 2 — Design System: Color, Typography, and Spacing
- Chapter 3 — Component Standards and Library
- Chapter 4 — Navigation Patterns
- Chapter 5 — Responsive Behavior and Mobile UX

**Part II — Identity and Security UX**
- Chapter 6 — Authentication and Login UX
- Chapter 7 — Verification and Trust UX
- Chapter 8 — Security Settings and Session Management

**Part III — Commerce and Services UX**
- Chapter 9 — Commerce Marketplace UX
- Chapter 10 — Vendor Store and Product UX
- Chapter 11 — Cart and Checkout UX
- Chapter 12 — Order Management and Tracking UX
- Chapter 13 — Services Marketplace UX
- Chapter 14 — Service Booking and Contract UX

**Part IV — Learning UX**
- Chapter 15 — Learning Marketplace and Course Discovery
- Chapter 16 — Course and Lesson Experience
- Chapter 17 — Learning Dashboards

**Part V — K-Rewards and Leadership UX**
- Chapter 18 — K-Rewards Dashboard
- Chapter 19 — Leadership Dashboard
- Chapter 20 — Ring Structure Visualization
- Chapter 21 — Royal Identity UX
- Chapter 22 — Coronation UX

**Part VI — Wallet, Communication, and Notifications UX**
- Chapter 23 — Wallet and Payments UX
- Chapter 24 — Notifications and Messaging UX

**Part VII — Administration and Partner UX**
- Chapter 25 — Administration UX
- Chapter 26 — Partner Integration UX

**Part VIII — States, Accessibility, and Usability**
- Chapter 27 — Empty, Loading, and Error States
- Chapter 28 — Security and Warning States
- Chapter 29 — Accessibility Standards
- Chapter 30 — Usability Principles

**Appendices**
- Appendix A — Design Tokens Reference
- Appendix B — Component Inventory
- Appendix C — Screen Template Catalog
- Appendix D — Interaction Pattern Catalog
- Appendix E — Traceability Matrices
- Appendix F — Glossary and Acronyms

---

## Preamble

K-NETWORK is a Pan-African digital ecosystem — one platform, one identity, one trust score, one wallet, one rewards account, and one design system. It integrates commerce, services, learning, rewards, communication, and governance into a single cohesive experience that serves participants across the African continent and beyond.

This document defines the complete UI/UX design specification for K-NETWORK. It is not a collection of loosely connected design notes; it is a production-oriented specification that engineers and designers can implement without making undocumented design decisions. Every color, every spacing value, every component, every interaction pattern, and every screen flow is defined here.

The design system is built on ten UX priorities:

1. **Modern** — clean, current, visually coherent
2. **Professional** — serious, trustworthy, reflecting ecosystem gravity
3. **Fast** — loading speed is a UX-critical metric (BRD-1 UI-8; SRS-NFR-004)
4. **Secure** — security is visible, understandable, and never an afterthought
5. **Intuitive** — participants find what they need without confusion (BRD-1 UI-6)
6. **Accessible** — WCAG 2.2 AA, designed in, not added after (BRD-1 UI-4; SRS-NFR-008)
7. **Mobile-first** — mobile is a first-class experience, not a degraded desktop (BRD-1 UI-3)
8. **Scalable** — the design system scales from one engine to eleven without breaking
9. **Consistent** — one design system across all engines, centrally governed (BRD-1 UI-5)
10. **Trustworthy** — the interface inspires confidence through clarity, transparency, and reliability

The design does not copy competitor visual identities. It is purpose-built for K-NETWORK's unique combination of marketplace, services, learning, and leadership development — a combination no single competitor offers.

---

# Part I — Design Foundation

## Chapter 1 — Design Philosophy and UX Principles

### 1.1 Design Philosophy

K-NETWORK's design philosophy is rooted in three constitutional principles from PLC-1:

**One Ecosystem.** The participant experiences K-NETWORK as one platform, not eleven separate modules. The same account, same navigation, same design language, same trust score, same wallet, and same rewards account follow the participant across commerce, services, learning, and community (PLC-1 Ch.36; BRD-1 §4.7). The design system enforces this unity — no engine creates its own visual identity.

**Opportunity for All.** The platform serves participants across the Pan-African ecosystem with varying digital literacy, varying bandwidth, varying devices, and multiple languages. The design must be inclusive, clear, and usable by everyone — not just the digitally fluent (PLC-1 Ch.5; BRD-1 §18.6.3).

**Trust Through Transparency.** Participants must always understand their own standing — their Trust Score, their K-Level, their K-Points, their reward calculation, their wallet balance, and their verification status. The interface never hides information that affects a participant's eligibility, rewards, or financial position (KR-1 KR-FND-015; SRS-TRU-002; SRS-KRW-009).

### 1.2 Ten UX Priorities

| # | Priority | Definition | Governing Reference |
|---|---|---|---|
| 1 | Modern | Clean, uncluttered, visually coherent interface reflecting current design standards | BRD-1 UI-1 |
| 2 | Professional | Professional identity reflecting K-NETWORK brand and ecosystem seriousness | BRD-1 UI-10 |
| 3 | Fast | Loading speed is a critical component of user experience; search < 2s | BRD-1 UI-8; SRS-NFR-004 |
| 4 | Secure | Security is visible, understandable, and integrated into every flow | SRS-NFR-001; SRS-IDM-003 |
| 5 | Intuitive | Participants find what they need without confusion; consistent across engines | BRD-1 UI-6, UI-7 |
| 6 | Accessible | WCAG 2.2 AA conformance; designed in, not added after | BRD-1 UI-4; SRS-NFR-008 |
| 7 | Mobile-first | Mobile is a first-class experience, not a degraded desktop version | BRD-1 UI-3 |
| 8 | Scalable | Design system scales from one engine to eleven without breaking | BRD-1 UI-5 |
| 9 | Consistent | One design system across all engines, centrally governed | BRD-1 UI-5; §18.6.2 |
| 10 | Trustworthy | Interface inspires confidence through clarity, transparency, and reliability | KR-1 KR-FND-015 |

### 1.3 Design Principles (BRD-1 UI-1 through UI-10)

**UI-1 — Modern UI.** The interface is clean, uncluttered, and visually coherent. It reflects current design standards without chasing trends. Whitespace is a design element, not wasted space. Every pixel earns its place.

**UI-2 — Responsive Design.** Layouts and functionality adapt to device — desktop, tablet, and mobile. No content is hidden on mobile that is available on desktop; it is reorganized, not removed. Breakpoints are defined in Chapter 5.

**UI-3 — Mobile-First Experience.** Mobile is designed first, not adapted last. Touch targets, navigation patterns, and information density are optimized for mobile. The mobile experience is never a degraded desktop version.

**UI-4 — Accessibility.** WCAG 2.2 AA conformance is mandatory. Accessibility is designed in from the start, not added after. Screen readers, keyboard navigation, color contrast, and assistive technology are first-class concerns. See Chapter 29.

**UI-5 — Consistent Design System.** Defined components, patterns, colors, typography, and interactions are applied uniformly across all engines. The design system is owned and governed centrally. No engine deviates without governance approval (BRD-1 §18.6.2).

**UI-6 — Intuitive Navigation.** Participants find what they need without confusion. Navigation is consistent across engines. The participant always knows where they are, how they got there, and how to get back.

**UI-7 — High Usability.** Participants accomplish goals efficiently and effectively. Flows are tested with real participants. Task completion is measured; friction is eliminated.

**UI-8 — Fast Loading.** Loading speed is a critical component of user experience. Search results appear in under 2 seconds (SRS-NFR-004). Skeleton screens, optimistic updates, and progressive loading are used to maintain perceived performance.

**UI-9 — Clear Information Hierarchy.** Participants understand what is most important and how elements relate. Visual hierarchy guides the eye from primary to secondary to tertiary information. Typography, spacing, and color reinforce hierarchy.

**UI-10 — Professional Visual Identity.** The visual identity reflects K-NETWORK's brand and the seriousness of the ecosystem. It is not playful or trendy; it is purposeful and trustworthy.

### 1.4 Usability Heuristics

K-NETWORK applies ten usability heuristics adapted from Nielsen's heuristics, grounded in the platform's constitutional principles:

| # | Heuristic | Application in K-NETWORK |
|---|---|---|
| 1 | Visibility of system status | Every async operation shows progress; every state change is confirmed; loading indicators are always present during fetches |
| 2 | Match between system and real world | Language is plain, not jargon; currency and dates are localized; Pan-African context is respected |
| 3 | User control and freedom | Every destructive action has an undo or confirmation; users can cancel multi-step flows; navigation is reversible |
| 4 | Consistency and standards | One design system across all engines; same patterns for same actions; no engine invents its own conventions |
| 5 | Error prevention | Forms validate inline; confirmations before irreversible actions; disabled states prevent invalid submissions |
| 6 | Recognition rather than recall | Navigation and options are visible; the user does not need to remember paths; breadcrumbs show location |
| 7 | Flexibility and efficiency of use | Keyboard shortcuts for power users; quick actions for frequent tasks; personalized recommendations where consented |
| 8 | Aesthetic and minimalist design | Only relevant information is shown; progressive disclosure for complex details; no decorative clutter |
| 9 | Help users recognize and recover from errors | Error messages are plain language, precise, constructive, and actionable; never just error codes |
| 10 | Help and documentation | Contextual help where needed; FAQs accessible from relevant screens; onboarding for first-time users |

### 1.5 Pan-African Design Context

The design system accounts for the Pan-African ecosystem context (BRD-1 §18.6.3):

**Multi-Language Support.** The design is built for localization. Text strings are externalized, not hardcoded. Layouts accommodate text expansion (up to 40% for some languages). Right-to-left (RTL) layouts are supported for Arabic. Language selection is available from the navigation.

**Cultural Inclusivity.** Imagery, language, and patterns avoid exclusion. The design does not assume a single cultural context. Color symbolism is considered — colors that carry negative connotations in specific cultures are avoided or contextualized.

**Varying Digital Literacy.** The design is usable by participants with varying levels of digital literacy. Clear guidance, intuitive flows, and contextual assistance are provided. Complex operations (checkout, withdrawals, K-Level qualification) are broken into clear steps with progress indicators.

**Variable Bandwidth.** The design is optimized for variable bandwidth and intermittent connectivity. Images are lazy-loaded and progressive. Skeleton screens maintain perceived performance during slow loads. Critical text content loads before media. The mobile app supports offline caching of key data.

**Device Diversity.** The design works across the range of devices used in the Pan-African ecosystem — from entry-level smartphones to high-end desktops. Performance is tested on low-end devices. Touch targets are generous (minimum 44×44px per WCAG 2.5.5).

### 1.6 Anti-Recruitment Design Principle

K-NETWORK's leadership development system rewards genuine contribution, not recruitment. The design reinforces this principle (KR-1 KR-LVL-006; KR-SRC-002):

- **No recruitment messaging.** The UI never displays "invite more people to earn more" or similar recruitment-focused calls to action.
- **Quality over quantity.** Ring visualizations show active, qualified members — not total referral counts. A participant with 500 inactive referrals sees a different visualization than one with 15 active, qualified leaders.
- **Leadership development emphasis.** The leadership dashboard highlights the development of qualified leaders, not the accumulation of network members. The "missing requirements" view shows what leadership development goals remain, not how many more people to recruit.
- **Genuine contribution metrics.** K-Points are presented as earned through genuine activity — commerce, services, learning, community — never as earned through recruitment.
- **Anti-accumulation feedback.** When a participant fails to qualify due to accumulation without leadership development, the UI provides clear, constructive feedback explaining what genuine leadership development means (KR-1 Ch.39.6).

---

## Chapter 2 — Design System: Color, Typography, and Spacing

### 2.1 Color Philosophy

K-NETWORK's color system is designed to communicate trust, professionalism, and clarity. It is not a trend-following palette; it is a purpose-built system that works across commerce, services, learning, and leadership contexts.

The palette is anchored by a deep indigo primary that conveys authority and trust, complemented by a warm gold accent that evokes achievement and recognition (connecting to the Royal Identity system). Neutral tones provide structure, while semantic colors communicate status clearly.

### 2.2 Primary Color Palette

| Token | Role | Hex | Usage |
|---|---|---|---|
| `color.primary.900` | Darkest primary | `#1A1B4B` | Deep backgrounds, premium headers |
| `color.primary.800` | Dark primary | `#252765` | Navigation backgrounds |
| `color.primary.700` | Primary dark | `#303380` | Active states, hover |
| `color.primary.600` | Primary | `#3B3F9C` | Primary buttons (hover) |
| `color.primary.500` | Primary base | `#4755D4` | Primary buttons, links, focus rings |
| `color.primary.400` | Primary light | `#6B7AE8` | Secondary buttons |
| `color.primary.300` | Primary lighter | `#9BA4F0` | Tags, badges |
| `color.primary.200` | Primary lightest | `#C8CDF5` | Backgrounds, subtle highlights |
| `color.primary.100` | Primary wash | `#EAECFA` | Selected states, subtle backgrounds |
| `color.primary.50` | Primary mist | `#F5F6FE` | Hover backgrounds |

### 2.3 Accent (Gold) Color Palette

The gold accent is used for achievement, recognition, Royal Identity, coronation, and premium features. It connects the visual system to the platform's leadership and Royal Identity tiers.

| Token | Role | Hex | Usage |
|---|---|---|---|
| `color.gold.900` | Darkest gold | `#7A5C00` | Premium text on light backgrounds |
| `color.gold.800` | Dark gold | `#A07800` | Gold text, strong emphasis |
| `color.gold.700` | Gold dark | `#C69500` | Gold badges, borders |
| `color.gold.600` | Gold | `#D4A800` | Achievement highlights |
| `color.gold.500` | Gold base | `#E0B517` | Royal Identity accents, coronation |
| `color.gold.400` | Gold light | `#ECC94B` | Achievement badges |
| `color.gold.300` | Gold lighter | `#F2D96E` | Gold backgrounds, subtle |
| `color.gold.200` | Gold lightest | `#FAEBA8` | Gold wash backgrounds |
| `color.gold.100` | Gold mist | `#FEF6D9` | Gold subtle highlights |
| `color.gold.50` | Gold whisper | `#FFFBEB` | Gold hover backgrounds |

### 2.4 Semantic Colors

| Token | Role | Hex | Usage |
|---|---|---|---|
| `color.success.600` | Success dark | `#15803D` | Success text |
| `color.success.500` | Success | `#16A34A` | Success icons, positive status |
| `color.success.100` | Success bg | `#DCFCE7` | Success backgrounds |
| `color.success.50` | Success mist | `#F0FDF4` | Success hover |
| `color.warning.600` | Warning dark | `#B45309` | Warning text |
| `color.warning.500` | Warning | `#D97706` | Warning icons, pending status |
| `color.warning.100` | Warning bg | `#FEF3C7` | Warning backgrounds |
| `color.warning.50` | Warning mist | `#FFFBEB` | Warning hover |
| `color.danger.600` | Danger dark | `#B91C1C` | Danger text |
| `color.danger.500` | Danger | `#DC2626` | Danger icons, error status |
| `color.danger.100` | Danger bg | `#FEE2E2` | Danger backgrounds |
| `color.danger.50` | Danger mist | `#FEF2F2` | Danger hover |
| `color.info.600` | Info dark | `#1D4ED8` | Info text |
| `color.info.500` | Info | `#2563EB` | Info icons, informational |
| `color.info.100` | Info bg | `#DBEAFE` | Info backgrounds |
| `color.info.50` | Info mist | `#EFF6FF` | Info hover |

### 2.5 Neutral Colors

| Token | Role | Hex | Usage |
|---|---|---|---|
| `color.neutral.950` | Near black | `#0A0A0B` | Primary text, headings |
| `color.neutral.900` | Darkest gray | `#1A1A1E` | Headings, strong text |
| `color.neutral.800` | Dark gray | `#2D2D33` | Body text emphasis |
| `color.neutral.700` | Gray | `#404049` | Body text |
| `color.neutral.600` | Medium gray | `#6B6B76` | Secondary text |
| `color.neutral.500` | Light gray | `#8E8E99` | Tertiary text, captions |
| `color.neutral.400` | Lighter gray | `#A8A8B3` | Disabled text, placeholders |
| `color.neutral.300` | Border gray | `#D1D1DB` | Borders, dividers |
| `color.neutral.200` | Light border | `#E5E5EC` | Subtle borders, table rows |
| `color.neutral.100` | Light bg | `#F4F4F7` | Page backgrounds, cards |
| `color.neutral.50` | Lightest bg | `#FAFAFB` | Input backgrounds, subtle |

### 2.6 K-Level Tier Colors

Each K-Level tier has an associated color used in leadership dashboards, badges, and Royal Identity displays. These colors map to the tier's character and escalate in visual gravity from Foundation to Legacy.

| Tier | Levels | Color Token | Hex | Usage |
|---|---|---|---|---|
| Foundation | 1–3 | `color.tier.foundation` | `#6B7AE8` (primary.400) | Foundation badges, progress |
| Growth | 4–6 | `color.tier.growth` | `#16A34A` (success.500) | Growth badges, progress |
| Leadership | 7–9 | `color.tier.leadership` | `#D97706` (warning.500) | Prince badges, leadership |
| Executive | 10–12 | `color.tier.executive` | `#7C3AED` | Crown Prince badges, executive |
| Legacy | 13–15 | `color.tier.legacy` | `#D4A800` (gold.500) | King badges, legacy, coronation |

### 2.7 Trust Score Color Scale

The Trust Score (0–100) is displayed with a color gradient that communicates trust level at a glance:

| Score Range | Color Token | Hex | Label |
|---|---|---|---|
| 0–24 | `color.trust.critical` | `#DC2626` (danger.500) | Critical |
| 25–39 | `color.trust.low` | `#D97706` (warning.500) | Low |
| 40–54 | `color.trust.fair` | `#E0B517` (gold.500) | Fair |
| 55–69 | `color.trust.good` | `#16A34A` (success.500) | Good |
| 70–84 | `color.trust.strong` | `#3B3F9C` (primary.600) | Strong |
| 85–100 | `color.trust.excellent` | `#15803D` (success.600) | Excellent |

### 2.8 Color Contrast Standards

All color combinations meet WCAG 2.2 AA contrast ratios:

| Combination | Ratio | Standard | Status |
|---|---|---|---|
| `neutral.950` on `neutral.50` | 19.3:1 | AA (4.5:1) | ✅ Pass |
| `neutral.700` on `neutral.50` | 11.2:1 | AA (4.5:1) | ✅ Pass |
| `neutral.500` on `neutral.50` | 5.9:1 | AA (4.5:1) | ✅ Pass |
| `primary.500` on `neutral.50` | 5.2:1 | AA (4.5:1) | ✅ Pass |
| `white` on `primary.500` | 5.2:1 | AA (4.5:1) | ✅ Pass |
| `white` on `primary.600` | 6.1:1 | AA (4.5:1) | ✅ Pass |
| `white` on `gold.500` | 2.1:1 | AA Large (3:1) | ⚠️ Large text only |
| `gold.800` on `gold.50` | 7.3:1 | AA (4.5:1) | ✅ Pass |
| `white` on `success.500` | 3.9:1 | AA Large (3:1) | ⚠️ Large text only |
| `success.600` on `success.50` | 5.8:1 | AA (4.5:1) | ✅ Pass |

> **Note:** Where the white-on-color contrast is below 4.5:1 (gold.500, success.500), the darker variant (gold.800, success.600) is used for text on light backgrounds, and white text on these colors is only used for large text (18pt+ or 14pt+ bold) per WCAG 2.2 AA exception.

### 2.9 Dark Mode

K-NETWORK supports dark mode as a system preference and user toggle. The dark palette inverts the neutral scale while maintaining semantic color meaning:

| Token | Light | Dark |
|---|---|---|
| Page background | `neutral.50` (`#FAFAFB`) | `neutral.950` (`#0A0A0B`) |
| Card background | `white` (`#FFFFFF`) | `neutral.900` (`#1A1A1E`) |
| Primary text | `neutral.950` (`#0A0A0B`) | `neutral.50` (`#FAFAFB`) |
| Secondary text | `neutral.600` (`#6B6B76`) | `neutral.400` (`#A8A8B3`) |
| Border | `neutral.200` (`#E5E5EC`) | `neutral.800` (`#2D2D33`) |
| Primary button | `primary.500` (`#4755D4`) | `primary.400` (`#6B7AE8`) |

Semantic and tier colors remain the same in dark mode, but backgrounds use the 50/100 variants (darker in dark mode) for proper contrast.

### 2.10 Typography

#### 2.10.1 Font Family

| Role | Font | Stack | Fallback |
|---|---|---|---|
| Headings | **Satoshi** | `'Satoshi', 'Inter', system-ui, -apple-system, sans-serif` | system-ui |
| Body | **Inter** | `'Inter', system-ui, -apple-system, sans-serif` | system-ui |
| Monospace | **JetBrains Mono** | `'JetBrains Mono', 'Fira Code', monospace` | monospace |

> **Design Decision:** Satoshi is used for headings to give K-NETWORK a distinctive, modern character. Inter is used for body text for its excellent legibility at small sizes and wide language support. Both fonts support Latin, Latin Extended, and Cyrillic. For languages requiring other scripts (Arabic, Amharic, etc.), system fonts are used with Inter/Satoshi as fallback for mixed content.

#### 2.10.2 Type Scale

The type scale uses a modular ratio of 1.250 (major third) for headings and a linear scale for body text. All sizes are in rem (root em) for accessibility.

| Token | Size (rem) | Size (px) | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| `text.display` | 3.5 | 56 | 700 | 1.1 | Hero titles, coronation pages |
| `text.h1` | 2.75 | 44 | 700 | 1.15 | Page titles |
| `text.h2` | 2.25 | 36 | 700 | 1.2 | Section titles |
| `text.h3` | 1.75 | 28 | 600 | 1.25 | Subsection titles |
| `text.h4` | 1.5 | 24 | 600 | 1.3 | Card titles |
| `text.h5` | 1.25 | 20 | 600 | 1.35 | Panel titles |
| `text.h6` | 1.125 | 18 | 600 | 1.4 | Small titles |
| `text.body-lg` | 1.125 | 18 | 400 | 1.6 | Large body, lead paragraphs |
| `text.body` | 1 | 16 | 400 | 1.6 | Default body |
| `text.body-sm` | 0.875 | 14 | 400 | 1.5 | Secondary body, table cells |
| `text.caption` | 0.75 | 12 | 400 | 1.4 | Captions, labels, metadata |
| `text.overline` | 0.6875 | 11 | 600 | 1.2 | Overlines, micro-labels (uppercase, letter-spacing 0.08em) |

#### 2.10.3 Font Weights

| Token | Weight | Usage |
|---|---|---|
| `font.weight.regular` | 400 | Body text |
| `font.weight.medium` | 500 | Emphasis, buttons, navigation |
| `font.weight.semibold` | 600 | Headings (h3–h6), card titles |
| `font.weight.bold` | 700 | Headings (display, h1, h2), strong emphasis |

#### 2.10.4 Text Colors

| Token | Color | Usage |
|---|---|---|
| `text.primary` | `neutral.950` | Primary text, headings |
| `text.secondary` | `neutral.700` | Body text |
| `text.tertiary` | `neutral.500` | Captions, metadata |
| `text.disabled` | `neutral.400` | Disabled text |
| `text.inverse` | `white` | Text on colored backgrounds |
| `text.link` | `primary.500` | Links |
| `text.link-hover` | `primary.600` | Link hover |
| `text.success` | `success.600` | Success text |
| `text.warning` | `warning.600` | Warning text |
| `text.danger` | `danger.600` | Danger text |

### 2.11 Spacing System

The spacing system uses a base unit of 4px (0.25rem) with a linear scale. All spacing — padding, margins, gaps — must use these tokens.

| Token | rem | px | Usage |
|---|---|---|---|
| `space.0` | 0 | 0 | No spacing |
| `space.1` | 0.25 | 4 | Tight inline spacing |
| `space.2` | 0.5 | 8 | Small gaps, icon-to-text |
| `space.3` | 0.75 | 12 | Component internal padding |
| `space.4` | 1 | 16 | Default spacing, card padding |
| `space.5` | 1.25 | 20 | Medium spacing |
| `space.6` | 1.5 | 24 | Section spacing |
| `space.8` | 2 | 32 | Large section spacing |
| `space.10` | 2.5 | 40 | Page section spacing |
| `space.12` | 3 | 48 | Major section spacing |
| `space.16` | 4 | 64 | Page-level spacing |
| `space.20` | 5 | 80 | Hero spacing |
| `space.24` | 6 | 96 | Maximum spacing |

### 2.12 Border Radius

| Token | rem | px | Usage |
|---|---|---|---|
| `radius.none` | 0 | 0 | No radius |
| `radius.sm` | 0.25 | 4 | Small elements, tags |
| `radius.md` | 0.375 | 6 | Buttons, inputs |
| `radius.lg` | 0.5 | 8 | Cards, panels |
| `radius.xl` | 0.75 | 12 | Large cards, modals |
| `radius.2xl` | 1 | 16 | Sheets, large containers |
| `radius.full` | 9999 | — | Pills, avatars, circular elements |

### 2.13 Shadows and Elevation

| Token | Shadow | Usage |
|---|---|---|
| `shadow.none` | `none` | Flat elements |
| `shadow.xs` | `0 1px 2px 0 rgba(10,10,11,0.05)` | Subtle elevation, input focus |
| `shadow.sm` | `0 1px 3px 0 rgba(10,10,11,0.10), 0 1px 2px 0 rgba(10,10,11,0.06)` | Cards at rest |
| `shadow.md` | `0 4px 6px -1px rgba(10,10,11,0.10), 0 2px 4px -2px rgba(10,10,11,0.10)` | Cards on hover, dropdowns |
| `shadow.lg` | `0 10px 15px -3px rgba(10,10,11,0.10), 0 4px 6px -4px rgba(10,10,11,0.10)` | Modals, popovers |
| `shadow.xl` | `0 20px 25px -5px rgba(10,10,11,0.10), 0 8px 10px -6px rgba(10,10,11,0.10)` | Large modals, overlays |
| `shadow.inner` | `inset 0 2px 4px 0 rgba(10,10,11,0.05)` | Inset elements, pressed states |

### 2.14 Iconography

K-NETWORK uses a custom icon set built on a 24×24px grid with 1.5px stroke width. Icons inherit the current text color. The icon set covers all engine-specific actions, navigation, status indicators, and informational icons.

| Property | Value |
|---|---|
| Grid | 24×24px |
| Stroke width | 1.5px |
| Style | Outline (primary), Solid (status) |
| Sizes | 16, 20, 24, 32px |
| Color | Inherits `currentColor` |
| Accessible | `aria-hidden="true"` for decorative; `aria-label` for interactive |

### 2.15 Motion and Animation

Motion is purposeful and subtle. It guides attention, provides feedback, and maintains spatial context. It is never decorative.

| Token | Duration | Easing | Usage |
|---|---|---|---|
| `motion.instant` | 0ms | — | State changes, color transitions |
| `motion.fast` | 100ms | `ease-out` | Hover states, small transitions |
| `motion.normal` | 200ms | `ease-in-out` | Standard transitions, dropdowns |
| `motion.slow` | 300ms | `ease-in-out` | Modals, sheets, page transitions |
| `motion.slower` | 400ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Complex animations, onboarding |
| `motion.slowest` | 600ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Coronation reveals, major transitions |

**Motion Principles:**

1. **Feedback.** Every interactive element responds to touch/hover within 100ms.
2. **Guidance.** Transitions guide the eye from old to new state.
3. **Restraint.** Animations are subtle; the interface does not bounce, spring, or wobble.
4. **Accessibility.** All animations respect `prefers-reduced-motion`. When reduced motion is preferred, animations are replaced with instant state changes.
5. **Performance.** Animations use `transform` and `opacity` only — never `width`, `height`, or `top` (which trigger layout recalculation).

### 2.16 Z-Index Scale

| Token | Value | Usage |
|---|---|---|
| `z.base` | 0 | Default content |
| `z.dropdown` | 100 | Dropdowns, popovers |
| `z.sticky` | 200 | Sticky headers, sidebars |
| `z.overlay` | 300 | Overlays, backdrops |
| `z.modal` | 400 | Modals, dialogs |
| `z.toast` | 500 | Toasts, notifications |
| `z.tooltip` | 600 | Tooltips |

---

## Chapter 3 — Component Standards and Library

### 3.1 Component Philosophy

K-NETWORK's component library is the single source of truth for UI elements. Every screen across all eleven engines is built from the same components. No engine creates its own variant of a component without governance approval (BRD-1 §18.6.2).

Components are:

- **Composable** — small components combine into larger ones
- **Reusable** — the same component works in commerce, learning, and administration
- **Accessible** — every component meets WCAG 2.2 AA
- **Consistent** — the same action always looks and behaves the same way
- **Themeable** — components use design tokens, not hardcoded values

### 3.2 Buttons

#### 3.2.1 Button Variants

| Variant | Visual | Usage |
|---|---|---|
| **Primary** | `primary.500` background, white text | Primary action on a screen (one per view) |
| **Secondary** | `primary.100` background, `primary.700` text | Secondary action |
| **Outline** | Transparent background, `primary.500` border and text | Alternative secondary action |
| **Ghost** | Transparent, `neutral.700` text, hover `neutral.100` bg | Tertiary action, toolbar |
| **Danger** | `danger.500` background, white text | Destructive action (delete, remove) |
| **Success** | `success.500` background, white text | Positive confirmation (accept, approve) |
| **Gold** | `gold.500` background, `gold.900` text | Royal Identity, achievement, coronation |

#### 3.2.2 Button Sizes

| Size | Padding (V×H) | Font | Height | Min Width | Icon Size |
|---|---|---|---|---|---|
| `xs` | 6×12 | `caption` | 28px | — | 16px |
| `sm` | 8×16 | `body-sm` | 32px | — | 16px |
| `md` | 10×20 | `body` | 40px | 80px | 20px |
| `lg` | 12×24 | `body-lg` | 48px | 120px | 20px |
| `xl` | 16×32 | `h6` | 56px | 160px | 24px |

#### 3.2.3 Button States

| State | Visual Change |
|---|---|
| Default | Base variant |
| Hover | Background darkens by one shade (e.g., `primary.500` → `primary.600`) |
| Focus | 2px `primary.500` focus ring with 2px offset |
| Active/Pressed | Background darkens by two shades, `shadow.inner` |
| Disabled | 50% opacity, `cursor: not-allowed` |
| Loading | Spinner replaces text/icon, button non-interactive |

#### 3.2.4 Button Rules

- One primary button per view. Multiple secondary/outline buttons allowed.
- Icon-only buttons must have `aria-label`.
- Danger buttons must be accompanied by a confirmation dialog for irreversible actions.
- Gold buttons are reserved for Royal Identity, achievement, and coronation contexts only.
- All buttons have a minimum touch target of 44×44px on mobile (WCAG 2.5.5).

### 3.3 Form Inputs

#### 3.3.1 Text Input

| Property | Value |
|---|---|
| Height | 40px (md), 32px (sm), 48px (lg) |
| Padding | 10×12 (md) |
| Border | 1px `neutral.300`, `radius.md` |
| Background | `white` (light mode), `neutral.900` (dark mode) |
| Placeholder | `neutral.400` |
| Focus | 2px `primary.500` border, 2px focus ring |
| Error | 2px `danger.500` border, `danger.50` background |
| Disabled | `neutral.100` background, `neutral.400` text |

#### 3.3.2 Input Labels and Helper Text

| Element | Position | Style |
|---|---|---|
| Label | Above input | `body-sm`, `font.weight.medium`, `neutral.900` |
| Helper text | Below input | `caption`, `neutral.500` |
| Error text | Below input (replaces helper) | `caption`, `danger.600` |
| Required indicator | After label | `danger.500` asterisk |
| Optional indicator | After label | `neutral.400` "(optional)" |

#### 3.3.3 Other Input Types

| Type | Component | Notes |
|---|---|---|
| Password | Text input with show/hide toggle | Strength meter for registration |
| Search | Text input with search icon (left) and clear button (right) | Autocomplete dropdown where applicable |
| Number | Text input with stepper controls | For quantities, not monetary values |
| Currency | Text input with currency prefix | Money displayed as string decimal, never float |
| Date | Date picker calendar | Min/max dates, disabled dates |
| Select | Custom dropdown (not native `<select>`) for styling consistency | Searchable for long lists |
| Multi-select | Tag input with dropdown | Selected items as removable tags |
| Checkbox | 20×20px, `primary.500` checked | Label to the right |
| Radio | 20×20px, `primary.500` selected | Label to the right |
| Toggle switch | 44×24px, `primary.500` on | For binary settings |
| Textarea | Same as text input, min height 80px | Auto-resize option |
| File upload | Drag-and-drop zone + browse button | Progress bar for uploads |

### 3.4 Cards

Cards are the primary container for content across K-NETWORK. They group related information with a consistent visual treatment.

| Property | Value |
|---|---|
| Background | `white` (light), `neutral.900` (dark) |
| Border | 1px `neutral.200` |
| Radius | `radius.lg` (8px) |
| Shadow | `shadow.sm` at rest, `shadow.md` on hover (if interactive) |
| Padding | `space.4` (16px) default, `space.6` (24px) for spacious |

#### Card Variants

| Variant | Usage | Additional Styling |
|---|---|---|
| **Default** | Content container | Base styling |
| **Interactive** | Clickable card (product, course, service) | Hover: `shadow.md`, slight lift (-2px), cursor pointer |
| **Highlighted** | Featured content | 2px `primary.200` border, `primary.50` background tint |
| **Gold** | Royal Identity, achievement | 2px `gold.200` border, `gold.50` background tint |
| **Status** | Status display (order, contract) | Left border 4px in semantic color |

### 3.5 Tables

Tables display tabular data (orders, transactions, team members, enrollment lists).

| Property | Value |
|---|---|
| Header background | `neutral.100` |
| Header text | `body-sm`, `font.weight.semibold`, `neutral.700` |
| Row height | 48px (md), 40px (sm) |
| Row border | 1px `neutral.200` bottom |
| Row hover | `neutral.50` background |
| Cell padding | 12×16 |
| Sortable header | Click to sort, arrow indicator |
| Empty state | Centered message with illustration |
| Pagination | Below table, cursor-based with prev/next |
| Sticky header | Enabled for long tables |
| Horizontal scroll | On mobile, with shadow indicators |

### 3.6 Modals and Dialogs

| Property | Value |
|---|---|
| Overlay | `rgba(10,10,11,0.50)` backdrop |
| Container | `white` (light), `neutral.900` (dark), `radius.xl` |
| Shadow | `shadow.xl` |
| Max width | 560px (sm), 680px (md), 800px (lg), 960px (xl) |
| Animation | Fade + slide up (`motion.slow`) |
| Close | ESC key, overlay click, X button |
| Focus trap | Focus locked within modal |
| Scroll lock | Body scroll locked when open |

#### Modal Structure

```
┌─────────────────────────────┐
│ Header (title + close)      │
├─────────────────────────────┤
│ Body (content)              │
│                             │
├─────────────────────────────┤
│ Footer (actions)            │
└─────────────────────────────┘
```

### 3.7 Navigation Components

Detailed in Chapter 4.

### 3.8 Feedback Components

#### 3.8.1 Toasts

Toasts provide brief, non-blocking feedback for actions.

| Property | Value |
|---|---|
| Position | Top-right (desktop), top-center (mobile) |
| Width | 360px (desktop), full-width minus margins (mobile) |
| Duration | 4s (default), 8s (with action), persistent (error) |
| Animation | Slide in from right (desktop), slide down (mobile) |
| Max visible | 3 (stacked, newest on top) |

#### Toast Variants

| Variant | Icon | Color | Usage |
|---|---|---|---|
| Success | Check circle | `success.500` | Action completed |
| Error | X circle | `danger.500` | Action failed |
| Warning | Alert triangle | `warning.500` | Caution needed |
| Info | Info circle | `info.500` | Informational |
| Loading | Spinner | `primary.500` | In-progress action |

#### 3.8.2 Inline Alerts

Inline alerts appear within the page content, not as overlays.

| Variant | Background | Border | Text |
|---|---|---|---|
| Success | `success.50` | `success.500` (left 4px) | `success.600` |
| Warning | `warning.50` | `warning.500` (left 4px) | `warning.600` |
| Error | `danger.50` | `danger.500` (left 4px) | `danger.600` |
| Info | `info.50` | `info.500` (left 4px) | `info.600` |

### 3.9 Badges and Tags

| Type | Visual | Usage |
|---|---|---|
| **Badge** (status) | Pill, semantic color, 20px height | Order status, verification status, K-Level tier |
| **Badge** (count) | Circle, `primary.500` bg, white text | Notification counts |
| **Tag** (category) | Pill, `neutral.100` bg, `neutral.700` text | Product categories, skills |
| **Tag** (removable) | Tag with X button | Selected filters, input tags |
| **Gold badge** | Pill, `gold.500` bg, `gold.900` text | Royal Identity, achievement |

### 3.10 Avatars

| Size | Dimension | Usage |
|---|---|---|
| `xs` | 24px | Inline mentions, compact lists |
| `sm` | 32px | Navigation, comment lists |
| `md` | 40px | Cards, table rows |
| `lg` | 56px | Profile cards, profiles |
| `xl` | 80px | Profile pages |
| `2xl` | 120px | Hero profile, coronation |

**Avatar with Title:** For Royal Identity participants (Level 7+), the avatar is accompanied by a small gold crown icon overlay for Prince, a larger crown for Crown Prince, and an ornate crown for King.

### 3.11 Progress Indicators

| Type | Usage | Visual |
|---|---|---|
| **Linear progress** | Determinate progress (file upload, checkout steps) | 4px height, `primary.500` fill on `neutral.200` track |
| **Circular progress** | Indeterminate loading, progress rings | 32–48px, `primary.500` stroke |
| **Stepper** | Multi-step flows (checkout, enrollment, verification) | Numbered circles with connecting lines |
| **Progress ring** | K-Level progress, trust score | Circular arc with percentage |
| **Skeleton** | Content loading | `neutral.200` blocks with shimmer animation |

### 3.12 Tooltips

| Property | Value |
|---|---|
| Trigger | Hover (desktop), long-press (mobile) |
| Delay | 500ms |
| Background | `neutral.950` |
| Text | `caption`, `white` |
| Padding | 6×10 |
| Radius | `radius.sm` |
| Max width | 240px |
| Arrow | 6px |
| Position | Auto (top/bottom/left/right based on viewport) |

### 3.13 Tabs

| Property | Value |
|---|---|
| Tab text | `body-sm`, `font.weight.medium` |
| Active tab | `primary.500` text, 2px bottom border |
| Inactive tab | `neutral.500` text |
| Tab padding | 10×16 |
| Hover | `neutral.100` background |
| Animation | 200ms underline slide |
| Mobile | Horizontal scrollable tab bar with scroll indicators |

### 3.14 Accordions

| Property | Value |
|---|---|
| Header | `body`, `font.weight.medium`, `neutral.900` |
| Header padding | 16×16 |
| Icon | Chevron, rotates 180° on expand |
| Content padding | 16×16 |
| Border | 1px `neutral.200` |
| Animation | Height transition (`motion.normal`) |
| Multiple open | Configurable per use case |

### 3.15 Data Display Components

| Component | Usage |
|---|---|
| **Stat card** | K-Points, trust score, wallet balance, sales |
| **Chart card** | Analytics, trends, reward history |
| **Timeline** | Order history, verification steps, coronation history |
| **List** | Products, orders, courses, team members |
| **Empty state** | Illustrated message when no data exists (Chapter 27) |

---

## Chapter 4 — Navigation Patterns

### 4.1 Navigation Philosophy

Navigation in K-NETWORK is consistent, predictable, and always answers three questions: Where am I? Where can I go? How do I get back? (BRD-1 UI-6).

The platform uses a single global navigation structure that adapts to the participant's context — a customer sees marketplace, services, learning, and wallet; a vendor sees commerce management; an instructor sees course management; an admin sees governance tools. The navigation never overwhelms; it reveals relevant sections based on the participant's roles.

### 4.2 Global Navigation — Desktop

```
┌──────────────────────────────────────────────────────────────────┐
│ [Logo]  Marketplace  Services  Learning  Wallet  Rewards    [🔔][👤] │
└──────────────────────────────────────────────────────────────────┘
```

| Element | Position | Behavior |
|---|---|---|
| Logo | Left | Click → Home dashboard |
| Primary nav items | Center-left | Click → Section landing |
| Search (global) | Center | Appears on marketplace, services, learning |
| Notifications | Right | Bell icon with badge count → Notification panel |
| Profile menu | Right | Avatar → Dropdown (profile, settings, switch role, logout) |

### 4.3 Global Navigation — Mobile

Mobile uses a bottom navigation bar with 5 items, the standard for mobile apps. A "More" item provides access to additional sections.

```
┌──────────────────────────────┐
│                              │
│        [Page content]        │
│                              │
├──────────────────────────────┤
│ 🏠    🛍️    📚    👑    ⋯    │
│ Home Market Learn Rewards More│
└──────────────────────────────┘
```

| Nav Item | Icon | Destination |
|---|---|---|
| Home | House | Personal dashboard |
| Marketplace | Shopping bag | Commerce + Services marketplace |
| Learn | Graduation cap | Learning marketplace |
| Rewards | Crown | K-Rewards dashboard |
| More | Ellipsis | Wallet, Messages, Settings, Profile, Admin (if applicable) |

**Touch targets:** Each bottom nav item is at least 56×56px (WCAG 2.5.5 requires 44×44px minimum).

### 4.4 Sidebar Navigation — Desktop

Contextual sidebars appear within sections (commerce management, learning dashboard, admin console). They provide secondary navigation within the current section.

```
┌────────────┬─────────────────────────┐
│ Sidebar    │ Main content            │
│            │                         │
│ • Item 1   │                         │
│ • Item 2   │                         │
│ • Item 3   │                         │
│            │                         │
└────────────┴─────────────────────────┘
```

| Property | Value |
|---|---|
| Width | 240px (expanded), 64px (collapsed) |
| Background | `neutral.50` (light), `neutral.900` (dark) |
| Item height | 40px |
| Active item | `primary.50` bg, `primary.700` text, left 3px `primary.500` border |
| Hover | `neutral.100` background |
| Collapse toggle | Chevron at top-right of sidebar |

### 4.5 Breadcrumbs

Breadcrumbs show the participant's location within the hierarchy and provide navigation back.

```
Home > Marketplace > Electronics > Smartphones > Product Detail
```

| Property | Value |
|---|---|
| Style | `caption`, `neutral.500` |
| Separator | `>` character, `neutral.300` |
| Last item | `neutral.900`, not linked |
| Mobile | Truncated to show last 2 levels with ellipsis |

### 4.6 Tab Navigation

Tabs within pages provide parallel views of related content (e.g., product description/reviews, order details/tracking).

See Section 3.13 for tab component specification.

### 4.7 Back Navigation

Every screen provides a way back:

| Context | Back Mechanism |
|---|---|
| Page with parent | Breadcrumb or back button |
| Modal/dialog | ESC, overlay click, X button |
| Deep view | Back button in header |
| Mobile | System back gesture/button + in-app back button |

### 4.8 Role-Based Navigation

Navigation items adapt to the participant's roles:

| Role | Additional Nav Items |
|---|---|
| Customer (default) | Marketplace, Services, Learning, Wallet, Rewards |
| Vendor | + Vendor Dashboard, Store Management, Products, Orders |
| Service Provider | + Provider Dashboard, Service Listings, Contracts, Proposals |
| Instructor | + Instructor Dashboard, Courses, Students, Assessments |
| Partner | + Partner Dashboard, API Keys, Webhooks, Integrations |
| Admin | + Admin Console (separate app) |

The participant switches between role contexts via the profile menu. The active role is indicated by a badge in the navigation.

### 4.9 Search Navigation

Global search is accessible from the navigation bar on marketplace, services, and learning contexts. It supports:

- **Autocomplete** — suggestions as the participant types (SRS-COM-007)
- **Typo tolerance** — fuzzy matching (SRS-COM-007)
- **Recent searches** — stored locally
- **Search results page** — with faceted filters (Chapter 9)

### 4.10 Navigation Transitions

| Transition | Animation |
|---|---|
| Page-to-page | Fade (`motion.fast`) |
| Modal open | Fade + slide up (`motion.slow`) |
| Sheet open (mobile) | Slide up from bottom (`motion.slow`) |
| Dropdown open | Fade + slide down (`motion.normal`) |
| Tab switch | Content fade (`motion.fast`) |

---

## Chapter 5 — Responsive Behavior and Mobile UX

### 5.1 Mobile-First Philosophy

K-NETWORK is designed mobile-first (BRD-1 UI-3). Mobile is not a degraded desktop experience — it is the primary experience. All layouts are designed for mobile first, then progressively enhanced for larger screens.

### 5.2 Breakpoints

| Token | Min Width | Device | Layout |
|---|---|---|---|
| `xs` | 0 | Mobile portrait | Single column |
| `sm` | 640px | Mobile landscape / small tablet | Single column, wider |
| `md` | 768px | Tablet | Two column where appropriate |
| `lg` | 1024px | Desktop | Multi-column, sidebar visible |
| `xl` | 1280px | Large desktop | Max-width container, wider spacing |
| `2xl` | 1536px | Extra large | Max-width container |

### 5.3 Layout Grid

| Property | Value |
|---|---|
| Grid system | CSS Grid / Flexbox |
| Columns (mobile) | 4 |
| Columns (tablet) | 8 |
| Columns (desktop) | 12 |
| Gutter | 16px (mobile), 24px (desktop) |
| Margin | 16px (mobile), 32px (tablet), 48px (desktop) |
| Max content width | 1280px (standard), 1440px (wide dashboards) |

### 5.4 Responsive Behavior Rules

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navigation | Bottom bar | Bottom bar or top bar | Top bar |
| Sidebar | Hidden (drawer) | Collapsible | Visible |
| Tables | Horizontal scroll or card view | Full table | Full table |
| Forms | Single column | Single column | Two column where appropriate |
| Modals | Full-screen sheet | Centered modal | Centered modal |
| Cards | Full-width stacked | 2-column grid | 3–4 column grid |
| Filters | Slide-up sheet | Slide-up sheet or sidebar | Sidebar panel |
| Search | Full-width bar | Full-width bar | Inline with nav |

### 5.5 Touch Interaction

| Property | Value | Standard |
|---|---|---|
| Minimum touch target | 44×44px | WCAG 2.5.5 |
| Recommended touch target | 48×48px | Apple HIG |
| Touch target spacing | 8px minimum | WCAG 2.5.5 |
| Swipe gestures | Supported for carousels, cards, notifications | — |
| Long press | Context menu on mobile | — |
| Pull to refresh | Supported on list views | — |

### 5.6 Mobile-Specific Patterns

#### 5.6.1 Bottom Sheets

Bottom sheets replace modals on mobile for most interactions. They slide up from the bottom, are dismissible by swiping down, and can be full-height or partial.

| Type | Height | Usage |
|---|---|---|
| Partial | 40–60% viewport | Filter panels, quick actions |
| Full | 90% viewport | Complex forms, detailed views |
| Sticky | Docked at bottom | Action confirmations |

#### 5.6.2 Mobile Search

Mobile search opens as a full-screen overlay with the search input focused, autocomplete suggestions, recent searches, and popular categories.

#### 5.6.3 Mobile Checkout

Mobile checkout uses a full-screen stepper flow with one step per screen, a sticky bottom bar showing the order total and "Continue" button, and a progress indicator at the top.

### 5.7 Performance Considerations for Mobile

| Concern | Strategy |
|---|---|
| Bandwidth | Lazy-load images, progressive image loading, serve WebP/AVIF |
| Device capability | Test on entry-level devices, minimize JS bundle, code-split |
| Connectivity | Offline cache for key data, graceful degradation, retry on failure |
| Battery | Minimize animations, avoid background polling, use WebSocket efficiently |
| Data cost | Compress responses, paginate aggressively, optional image loading |

### 5.8 Responsive Images

| Property | Value |
|---|---|
| Format | WebP (primary), AVIF (progressive), JPEG (fallback) |
| Sizes | Multiple breakpoints served via `srcset` |
| Loading | `lazy` by default, `eager` for above-the-fold |
| Aspect ratio | Reserved via CSS to prevent layout shift |
| Placeholder | Blurhash or dominant color while loading |

### 5.9 Container Behavior

| Screen | Container | Behavior |
|---|---|---|
| Mobile (< 640px) | Full-width, 16px margins | Content fills width |
| Tablet (768–1023px) | Full-width, 32px margins | Content fills width with more spacing |
| Desktop (1024–1279px) | Max 1024px, centered | Content constrained, sidebar visible |
| Large (1280–1535px) | Max 1280px, centered | Wider content area |
| XL (1536px+) | Max 1440px, centered | Maximum width, generous spacing |

---

# Part II — Identity and Security UX

## Chapter 6 — Authentication and Login UX

### 6.1 Login Overview

K-NETWORK's authentication UX prioritizes security without sacrificing usability. The login flow is the first impression of the platform's trustworthiness — it must feel secure, professional, and effortless (SRS-IDM-003; SRS-NFR-001).

### 6.2 Login Screen

```
┌─────────────────────────────────────────────┐
│                                             │
│              [K-NETWORK Logo]               │
│         One platform. One identity.         │
│                                             ││   ┌─────────────────────────────────────┐  │
│   │  Email or Username                  │  │
│   │  ─────────────────────────────────  │  │
│   │  Password                          │  │
│   │  ─────────────────────────────────  │  │
│   │                          [Sign In] │  │
│   └─────────────────────────────────────┘  │
│                                             │
│   Forgot password?   |   Create account    │
│                                             │
│   ────────── or ──────────                  │
│                                             │
│   [Continue with Google] [Continue w/ Apple]│
│                                             │
└─────────────────────────────────────────────┘
```

**Design specifications:**

| Element | Specification |
|---|---|
| Layout | Centered card, max-width 400px, on `neutral.50` background |
| Logo | 48px height, `primary.500` |
| Tagline | `text.body`, `neutral.500`, centered |
| Input fields | Full-width, 48px height (lg input) for touch accessibility |
| Sign In button | Full-width, `lg` size, `primary` variant |
| Social login | Two outline buttons, full-width, stacked |
| Links | `body-sm`, `primary.500`, centered |
| Security note | Small lock icon + "Your connection is encrypted" text below form |

### 6.3 Registration Flow

Registration uses a multi-step flow with progressive disclosure. Each step focuses on one decision, reducing cognitive load for participants with varying digital literacy (BRD-1 §18.6.3).

#### Step 1: Account Creation

| Field | Type | Validation |
|---|---|---|
| Full name | Text | Min 2 chars, max 100 |
| Email | Email | Valid email, unique |
| Phone (optional) | Phone | Valid format with country code |
| Password | Password | Min 12 chars, 1 uppercase, 1 number, 1 symbol |
| Confirm password | Password | Must match |
| Terms acceptance | Checkbox | Required |

**Password strength meter:** A 4-segment bar that fills as password strength increases:
- Red (weak): common passwords, short
- Orange (fair): meets minimum length
- Yellow (good): includes variety
- Green (strong): long, varied, uncommon

#### Step 2: Email Verification

After account creation, the participant is shown a verification screen:

```
┌─────────────────────────────────────────────┐
│  ✓ Account created                           │
│                                             │
│  We sent a verification link to              │
│  [email address]                            │
│                                             │
│  [📧 Open email app]                        │
│                                             │
│  Didn't receive it? [Resend] (in 30s)      │
│                                             │
│  ────────────────────────────               │
│  Already verified? [Continue →]            │
└─────────────────────────────────────────────┘
```

#### Step 3: Profile Setup

| Field | Type | Notes |
|---|---|---|
| Username | Text | Must be unique, 3–30 chars, alphanumeric + underscore |
| Country | Select | Required for localization and KYC |
| Language | Select | Default from browser locale |
| Avatar (optional) | File upload | Cropped to circle, max 2MB |
| Role interest | Multi-select | Customer, Vendor, Service Provider, Learner, Instructor |

**Username guidance:** For participants who will reach K-Level 7+ (Leadership tier), the username becomes permanent and is displayed with a royal title. A tooltip explains: "Your username is permanent once assigned at Leadership tier (Level 7). Choose carefully."

### 6.4 Multi-Factor Authentication (MFA)

MFA is required for sensitive operations (SRS-IDM-003; SRS-WAL-003). The MFA flow is designed to be fast and clear.

#### 6.4.1 MFA Setup

| Step | Screen | Action |
|---|---|---|
| 1 | MFA introduction | Explains why MFA matters; offers authenticator app or SMS |
| 2 | QR code (app) or phone entry (SMS) | Participant scans QR or enters phone |
| 3 | Verification code entry | 6-digit code, auto-advances on entry |
| 4 | Backup codes | 10 backup codes displayed; participant prompted to save |
| 5 | Confirmation | MFA enabled; recovery options reviewed |

#### 6.4.2 MFA Challenge

When MFA is required (login from new device, wallet withdrawal, settings change):

```
┌─────────────────────────────────────────────┐
│  🔒 Security verification                    │
│                                             │
│  Enter the 6-digit code from your           │
│  authenticator app                          │
│                                             │
│  [ ] [ ] [ ] [ ] [ ] [ ]                    │
│                                             │
│  [Verify]          Use backup code          │
│                                             │
│  Didn't receive a code? [Resend]            │
└─────────────────────────────────────────────┘
```

**Design specifications:**

| Element | Specification |
|---|---|
| Code input | 6 individual boxes, 48×56px, auto-focus, auto-advance |
| Paste support | Full code can be pasted into first box |
| Error | Shake animation + red border on incorrect code |
| Retry | After 3 failed attempts, account locked for 15 minutes |
| Backup code | Link switches to text input for backup code |

### 6.5 Password Recovery

The password recovery flow is secure, transparent, and resistant to social engineering.

```
Step 1: Enter email → "Reset link sent to [email]"
Step 2: Click email link → New password screen
Step 3: Set new password → "Password changed successfully"
Step 4: Redirect to login
```

**Security measures:**

- Reset link expires after 30 minutes
- Reset link is single-use
- Old password cannot be reused
- Participant is notified by email when password is changed
- If MFA is enabled, MFA challenge is required before password change

### 6.6 Session Management UX

#### 6.6.1 Session Display

Participants can view active sessions in security settings:

| Field | Display |
|---|---|
| Device | Device type (iPhone, Chrome on Windows, etc.) |
| Location | City, Country (from IP) |
| Last active | Relative time ("2 minutes ago") |
| Current session | Badge: "This device" |
| Revoke | Button to end session |

#### 6.6.2 Session Timeout

- Access tokens expire after 1 hour (API-1 Ch.3)
- Refresh tokens expire after 30 days
- Sliding session: activity extends the session
- Idle timeout: after 30 minutes of inactivity, participant is prompted to re-authenticate
- Before timeout: a 2-minute warning dialog with "Stay logged in" option

#### 6.6.3 Concurrent Session Limits

Per SRS-IDM-004, concurrent session limits are enforced per role. When a new session exceeds the limit, the oldest session is terminated and the affected device receives a notification: "Your session was ended because you signed in elsewhere."

### 6.7 Single Sign-On

Per SRS-IDM-007, one authentication works across all engines. The participant never logs in separately for commerce, learning, wallet, or admin. If the participant has multiple roles (customer + vendor + instructor), they switch contexts within the same session — no re-authentication required.

### 6.8 Social Login

| Provider | Button Style |
|---|---|
| Google | White button, Google logo, "Continue with Google" |
| Apple | Black button (light mode) / white button (dark mode), Apple logo, "Continue with Apple" |

Social login accounts are linked to a K-NETWORK account. First-time social login creates an account with the email from the provider, then prompts for profile setup (Step 3 above).

---

## Chapter 7 — Verification and Trust UX

### 7.1 Verification Overview

K-NETWORK uses a tiered KYC (Know Your Customer) verification system with at least three tiers (SRS-IDM-005). Verification status is always visible to the participant and gates certain capabilities.

### 7.2 Verification Tiers

| Tier | Label | Requirements | Unlocks |
|---|---|---|---|
| Tier 1 | Basic | Email verified, phone verified | Browsing, basic marketplace purchases |
| Tier 2 | Verified | Government ID verified, address verified | Vendor registration, service provision, wallet withdrawals |
| Tier 3 | Enhanced | Enhanced due diligence, business documentation (if applicable) | High-value transactions, partner access, large withdrawals |

### 7.3 Verification Status Display

Verification status is displayed as a badge next to the participant's name across the platform:

| Status | Badge Visual |
|---|---|
| Unverified | Gray circle with dash |
| Tier 1 (Basic) | Blue checkmark |
| Tier 2 (Verified) | Green checkmark with shield |
| Tier 3 (Enhanced) | Gold checkmark with shield |
| Under review | Yellow clock icon |
| Rejected | Red X icon |

The badge appears:
- In the profile menu dropdown
- On the participant's profile page
- On vendor stores and service provider profiles
- In reviews and messages (as a trust signal)

### 7.4 Verification Flow

#### Step 1: Start Verification

The participant accesses verification from security settings or when attempting a gated action. A contextual banner appears: "Complete verification to unlock [capability]."

#### Step 2: Document Upload

| Field | Type | Notes |
|---|---|---|
| Document type | Select | National ID, Passport, Driver's License, Residence Permit |
| Document front | File upload | Image or PDF, max 10MB |
| Document back | File upload | If applicable |
| Selfie | Camera capture | Liveness check — participant follows on-screen prompts |

**Privacy assurance:** A prominent info panel explains:
- Documents are encrypted at rest (AES-256)
- Documents are never displayed in full after upload
- Documents are reviewed by authorized personnel only
- Documents are retained per legal requirements and then deleted
- Participant can request deletion per data protection rights (SRS-NFR-013)

#### Step 3: Review

The participant sees a "Verification under review" state. The review process is typically completed within 24–48 hours. The participant receives a notification when review is complete.

#### Step 4: Result

| Outcome | Display |
|---|---|
| Approved | Green success screen, verification badge updated, capabilities unlocked |
| Rejected | Red screen with specific reason, link to re-submit, link to support |
| Needs more info | Yellow screen with specific request, link to upload additional documents |

### 7.5 Trust Score UX

The Trust Score (0–100) is a core K-NETWORK concept (KR-1 KR-TRU-001). It gates eligibility for K-Points, K-Level promotion, and reward distribution. The Trust Score must be visible, understandable, and actionable.

#### 7.5.1 Trust Score Display

```
┌─────────────────────────────────────────────┐
│  Trust Score                                 │
│                                             │
│  ╭─────────╮                               │
│  │   72    │  Strong                        │
│  │  /100   │  ████████████░░░░              │
│  ╰─────────╯                               │
│                                             │
│  Updated 5 minutes ago                      │
│                                             │
│  Your Trust Score is above the threshold    │
│  for your current K-Level. Keep it up!      │
│                                             │
│  [View details →]                           │
└─────────────────────────────────────────────┘
```

| Element | Specification |
|---|---|
| Score display | Large number in circular progress ring, colored per Section 2.7 |
| Score label | Word label (Critical, Low, Fair, Good, Strong, Excellent) |
| Progress bar | Horizontal bar with score range markers |
| "Updated" timestamp | When the score was last calculated |
| Context message | Plain-language explanation of what the score means for the participant |
| Threshold indicator | Shows where the participant's K-Level threshold is on the bar |

#### 7.5.2 Trust Score Details

The details view shows the factors contributing to the Trust Score:

| Factor | Display | Weight |
|---|---|---|
| Transaction history | Count of verified transactions | Visualized as bar |
| Review ratings | Average rating from reviews | Visualized as stars |
| Dispute outcomes | Ratio of resolved disputes | Visualized as bar |
| Account age | Time since registration | Visualized as timeline |
| Verification level | Current verification tier | Badge display |
| Recent activity | Consistency of genuine activity | Visualized as sparkline |

> **Note:** The exact Trust Score formula and weights are GOVERNANCE PARAMETERS (KR-1 KR-TRU). The UI displays the contributing factors but does not expose the exact formula. The participant sees "what affects your score" not "how the score is calculated."

#### 7.5.3 Trust Gates

Per SRS-TRU-002, when a participant's Trust Score is below a gate threshold, the UI clearly shows:

- Which gate they are below (e.g., "Below K-Level 7 threshold")
- What they are ineligible for (e.g., "Cannot qualify for Level 7 promotion")
- How to recover (link to trust recovery guidance)

This is displayed as an inline alert on the relevant screens, not hidden in settings.

#### 7.5.4 Trust Recovery

Per SRS-TRU-003, trust recovery is gradual. The participant can see their recovery progress:

```
┌─────────────────────────────────────────────┐
│  Trust Recovery                             │
│                                             │
│  Your Trust Score was reduced on            │
│  August 15 due to a disputed transaction.   │
│                                             │
│  Recovery progress: 60%                     │
│  ████████████░░░░░░░░                       │
│                                             │
│  Your score has improved by 12 points       │
│  since the reduction. Continue genuine      │
│  activity to fully recover.                 │
│                                             │
│  Estimated full recovery: ~30 days          │
│  (based on current activity rate)           │
└─────────────────────────────────────────────┘
```

**Trust protection** (SRS-TRU-004): When a Trust Score reduction is reversed (false positive, platform error, documented hardship), the UI shows the reversal prominently: "Your Trust Score has been restored to [score]. The previous reduction was reversed."

---

## Chapter 8 — Security Settings and Session Management

### 8.1 Security Settings Overview

The security settings page consolidates all security-related controls in one place. It is accessible from the profile menu and is designed to be scannable and actionable.

### 8.2 Security Settings Layout

```
Security Settings
├── Password
│   ├── Change password
│   └── Last changed: 30 days ago
├── Multi-Factor Authentication
│   ├── Status: Enabled (Authenticator app)
│   ├── Change method
│   ├── View backup codes
│   └── Disable MFA (requires password)
├── Active Sessions
│   ├── Device list with revoke buttons
│   └── Sign out all devices
├── Login History
│   ├── Recent logins with device, location, time
│   └── Failed login attempts
├── Privacy
│   ├── Data export
│   ├── Data deletion
│   └── Consent management
├── Connected Accounts
│   ├── Google (connected)
│   └── Apple (not connected)
└── Transaction Security
    ├── Withdrawal confirmation (MFA required)
    └── Large transaction alerts
```

### 8.3 Privacy Controls

Per SRS-NFR-013, participants have data rights (access, correction, deletion, portability). The privacy section provides:

| Control | Description |
|---|---|
| **Data export** | Download all personal data in machine-readable format (JSON/CSV) |
| **Data deletion** | Request account deletion (with explanation of what is retained for legal compliance) |
| **Consent management** | Toggle personalization, analytics, marketing communications |
| **Activity log** | View log of data access by platform staff |
| **Data retention** | View how long each data type is retained |

**Personalization consent** (SDD-1 Ch.13.4): A toggle controls whether the participant receives personalized recommendations. When disabled, only generic recommendations are shown. The toggle includes a clear explanation: "When enabled, we use your activity to personalize product, service, and course recommendations. When disabled, you see general recommendations."

### 8.4 Suspicious Activity Warnings

When the Intelligence Engine detects suspicious activity, the participant is warned through non-alarming but clear UI:

#### 8.4.1 Login from New Device

```
┌─────────────────────────────────────────────┐
│  ℹ️ New login alert                          │
│                                             │
│  Your account was accessed from a new       │
│  device:                                    │
│                                             │
│  📱 iPhone 15 · Lagos, Nigeria              │
│  August 26, 2026 at 2:30 PM WAT             │
│                                             │
│  Was this you?                              │
│  [Yes, it was me]  [No, secure my account]  │
└─────────────────────────────────────────────┘
```

If the participant selects "No, secure my account":
- All sessions are terminated
- Password reset is required
- MFA is re-challenged
- A support case is opened

#### 8.4.2 Unusual Transaction Pattern

When an unusual transaction is detected (not a fraud determination — just a signal), the participant sees a contextual warning before the transaction:

```
⚠️ Please verify
This transaction is unusual compared to your typical
activity. Please confirm you intend to proceed.

[Cancel]  [Yes, proceed — it's me]
```

#### 8.4.3 Account Restriction

If the account is under investigation (not sanctioned — investigation), the participant sees a banner:

```
Your account is under review. Some features may be
temporarily limited. [Learn more →]
```

The "Learn more" link explains:
- What is under review (without revealing detection methods)
- What features are limited
- Expected timeline
- How to contact support
- The participant's right to appeal (SRS-ADM-006)

### 8.5 Transaction Confirmations

All financial transactions require explicit confirmation:

| Transaction Type | Confirmation Method |
|---|---|
| Marketplace purchase | Order review screen → Confirm button |
| Wallet withdrawal | Amount + destination review → MFA challenge → Confirm |
| Service payment | Contract review → Confirm |
| Course enrollment (paid) | Course + payment review → Confirm |
| K-Points transfer | Not applicable (K-Points are not transferable) |

**Confirmation dialog principles:**
- Show the full amount in the participant's currency
- Show what the participant is paying for
- Show the payment method
- Require an explicit action (button click), not just a timeout
- For irreversible actions, require a second confirmation or MFA

### 8.6 Recovery

Account recovery is available when a participant loses access (lost device, lost password, lost MFA):

| Scenario | Recovery Path |
|---|---|
| Forgot password | Email reset link → New password |
| Lost MFA device | Backup codes → Reset MFA; or identity verification via support |
| Lost email access | Identity verification via support → Email change |
| Account compromised | "Secure my account" flow → All sessions terminated → Password reset → MFA reset |

**Recovery principles:**
- Recovery is always available — no participant is permanently locked out
- Recovery requires identity verification (to prevent social engineering)
- Recovery is logged and auditable
- Recovery timelines are communicated clearly

---

# Part III — Commerce and Services UX

## Chapter 9 — Commerce Marketplace UX

### 9.1 Marketplace Homepage

The marketplace homepage is the commerce entry point. It balances discovery (what's new, what's trending), efficiency (search, categories), and personalization (recommendations where consented).

```
┌──────────────────────────────────────────────────────────────────┐
│  [Search bar — "Search products, vendors, categories..."]  [🔍]   │
├──────────────────────────────────────────────────────────────────┤
│  Categories: [Electronics] [Fashion] [Home] [Health] [Food]...  │
├──────────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  Featured collection banner (rotating carousel)            │  │
│  └────────────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────────┤
│  Recommended for You                    [Personalization toggle] │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                                     │
│  │Product│ │Product│ │Product│ │Product│                          │
│  │ card │ │ card │ │ card │ │ card │                              │
│  └────┘ └────┘ └────┘ └────┘                                     │
├──────────────────────────────────────────────────────────────────┤
│  Trending Now                                                    │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                                     │
│  │ card│ │ card│ │ card│ │ card│                                  │
│  └────┘ └────┘ └────┘ └────┘                                     │
├──────────────────────────────────────────────────────────────────┤
│  Top Vendors                                                     │
│  ┌────┐ ┌────┐ ┌────┐                                            │
│  │Vendor│ │Vendor│ │Vendor│                                       │
│  └────┘ └────┘ └────┘                                            │
├──────────────────────────────────────────────────────────────────┤
│  New Arrivals                                                    │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                                     │
│  │ card│ │ card│ │ card│ │ card│                                  │
│  └────┘ └────┘ └────┘ └────┘                                     │
└──────────────────────────────────────────────────────────────────┘
```

**Homepage sections (in order):**

| Section | Content | Personalization |
|---|---|---|
| Search bar | Global search with autocomplete | Recent searches shown |
| Categories | Horizontal scrollable category chips | Based on browsing history (if consented) |
| Featured banner | Rotating promotional content (governance-approved) | No personalization |
| Recommended for You | Product recommendations | Personalized if consented; generic if not (SRS-COM-009) |
| Trending Now | Most viewed/purchased products | No personalization |
| Top Vendors | Highly-rated, verified vendors | No personalization |
| New Arrivals | Recently added products | No personalization |

**Personalization toggle:** A small toggle appears next to "Recommended for You" showing whether personalization is on or off. Clicking it links to privacy settings. When off, the section header changes to "Popular Products."

### 9.2 Categories

Categories use a navigable taxonomy (SRS-COM-006). The category page shows:

```
┌──────────────────────────────────────────────────────────────────┐
│  Electronics > Smartphones                                      │
├──────────────────────────────────┬───────────────────────────────┤
│  Filters                         │  324 results                  │
│  ─────                           │  Sort: [Relevance ▾]          │
│  Price range                     │                               │
│  [────●──────●────]              │  ┌────┐ ┌────┐ ┌────┐      │
│  $0    $500    $2000             │  │Product│ │Product│ │Product│ │
│                                  │  │ card │ │ card │ │ card │ │
│  Brand                           │  └────┘ └────┘ └────┘      │
│  ☑ Samsung (45)                 │  ┌────┐ ┌────┐ ┌────┐      │
│  ☑ Apple (32)                   │  │ card│ │ card│ │ card│     │
│  ☐ Google (18)                  │  └────┘ └────┘ └────┘      │
│                                  │                               │
│  Rating                          │  [Load more]                  │
│  ☑ 4★ & above (120)             │                               │
│                                  │                               │
│  Availability                    │                               │
│  ☑ In stock (280)                │                               │
│  ☐ Out of stock (44)             │                               │
│                                  │                               │
│  [Apply filters] [Clear all]     │                               │
└──────────────────────────────────┴───────────────────────────────┘
```

**Category page specifications:**

| Element | Behavior |
|---|---|
| Breadcrumb | Shows category hierarchy |
| Filter sidebar | Left side (desktop), bottom sheet (mobile) |
| Filter updates | Results update without full page reload (SRS-COM-008) |
| Filter state in URL | Shareable URL reflects current filters (SRS-COM-008) |
| Sort dropdown | Relevance, Price low-high, Price high-low, Rating, Newest |
| Product grid | 3 columns (desktop), 2 (tablet), 1–2 (mobile) |
| Result count | Shows total count, updates with filters |
| Pagination | "Load more" button (cursor-based) or infinite scroll |
| Empty results | Empty state with filter relaxation suggestions |

### 9.3 Search

Search supports keyword, category, attribute, price-range, and vendor filters with typo tolerance and autocomplete (SRS-COM-007).

#### 9.3.1 Search Bar Behavior

| State | Display |
|---|---|
| Empty focus | Recent searches + popular categories |
| Typing | Autocomplete suggestions (products, categories, vendors) |
| Submitted | Search results page with faceted filters |

#### 9.3.2 Search Results Page

```
┌──────────────────────────────────────────────────────────────────┐
│  [Search: "wireless earbuds" ✕]                                  │
│  247 results · 0.3 seconds                                       │
├──────────────────────────────────┬───────────────────────────────┤
│  Filters                         │  Sort: [Relevance ▾]          │
│  ─────                           │                               │
│  Price                           │  ┌──────────────────────┐    │
│  [────●──────●────]              │  │ Product result card   │    │
│  $0    $100    $500              │  │ with highlighted      │    │
│                                  │  │ search terms          │    │
│  Category                        │  └──────────────────────┘    │
│  ☑ Audio (89)                    │  ┌──────────────────────┐    │
│  ☐ Accessories (45)              │  │ Product result card   │    │
│                                  │  └──────────────────────┘    │
│  Vendor                          │                               │
│  ☑ TechHub (12)                  │  [Load more]                  │
│                                  │                               │
│  Availability                    │                               │
│  ☑ In stock (180)                │                               │
│                                  │                               │
│  [Clear all]                     │                               │
└──────────────────────────────────┴───────────────────────────────┘
```

**Search result highlighting:** Matching search terms are highlighted in product titles and descriptions using `primary.100` background.

### 9.4 Faceted Filtering

Per SRS-COM-008, faceted filtering supports:

- **Multiple filter types:** Price, rating, vendor, category, availability, attributes (color, size, brand, etc.)
- **Multiple filters combined:** AND logic across types, OR logic within a type (e.g., Samsung OR Apple)
- **Real-time updates:** Results update without page reload
- **URL reflection:** Filter state is reflected in URL query parameters for shareability
- **Mobile:** Filters are in a bottom sheet, accessible via a "Filters" button with active count badge
- **Clear all:** One-click reset of all filters
- **Filter counts:** Each filter option shows the count of matching results

### 9.5 Product Grid Card

```
┌─────────────────────┐
│   [Product image]    │
│                     │
│   Product title      │
│   ★★★★☆ 4.2 (124)   │
│   $99.99            │
│   [Add to cart +]    │
│                     │
│   ✓ In stock        │
│   by [Vendor name]   │
└─────────────────────┘
```

| Element | Specification |
|---|---|
| Image | 1:1 or 4:3 aspect ratio, lazy-loaded, blurhash placeholder |
| Title | `text.body-sm`, `font.weight.medium`, 2-line max with ellipsis |
| Rating | 5-star display with average and count |
| Price | `text.body`, `font.weight.bold`, currency-prefixed |
| Add to cart | Icon button, 40×40px, `primary` variant |
| Stock status | `success.500` checkmark for in stock, `warning.500` for low stock, `danger.500` for out of stock |
| Vendor | `caption`, `neutral.500`, linked to vendor store |
| Hover (desktop) | Card lifts (-2px), shadow.md, quick-view button appears |
| Badge | Optional: "New", "Featured", "Sale" (top-left corner of image) |

### 9.6 Empty Search/Category State

When no results match the current filters:

```
┌─────────────────────────────────────────────┐
│                                             │
│         [🔍 illustration]                    │
│                                             │
│        No results found                     │
│                                             │
│   Try adjusting your filters or             │
│   searching for something else.             │
│                                             │
│   [Clear all filters]  [Browse all]        │
│                                             │
│   Suggestions:                              │
│   • Try a broader price range               │
│   • Check your spelling                     │
│   • Browse popular categories               │
└─────────────────────────────────────────────┘
```

---

## Chapter 10 — Vendor Store and Product UX

### 10.1 Product Detail Page

The product detail page is the conversion point for commerce. It provides all information needed to make a purchase decision.

```
┌──────────────────────────────────────────────────────────────────┐
│  Home > Marketplace > Electronics > Audio > Product              │
├────────────────────────┬─────────────────────────────────────────┤
│                        │  Product Title                           │
│  [Large image]          │  ★★★★☆ 4.2 (124 reviews)               │
│                        │  $99.99                                  │
│  [thumb] [thumb] [thumb]│  by TechHub ✓ Verified                  │
│                        │                                          │
│                        │  Quantity: [- 1 +]                      │
│                        │                                          │
│                        │  [Add to Cart]  [Buy Now]                │
│                        │                                          │
│                        │  ✓ In stock (24 available)               │
│                        │  ✓ Free shipping over $50                │
│                        │  ✓ 7-day return policy                   │
│                        │                                          │
│                        │  [Save] [Share]                         │
├────────────────────────┴─────────────────────────────────────────┤
│  [Description] [Specifications] [Reviews] [Shipping & Returns]  │
│                                                                  │
│  Tab content...                                                  │
└──────────────────────────────────────────────────────────────────┘
```

#### 10.1.1 Product Image Gallery

| Element | Specification |
|---|---|
| Main image | 500×500px (desktop), full-width (mobile) |
| Thumbnails | 64×64px, horizontal scroll, active state border |
| Zoom | Hover-zoom on desktop, pinch-zoom on mobile |
| Fullscreen | Click/tap to open fullscreen gallery with swipe |

#### 10.1.2 Product Information

| Section | Content |
|---|---|
| Title | Full product title, `h3` |
| Rating | Stars + average + review count (linked to reviews tab) |
| Price | Large, bold, currency-prefixed; original price with strikethrough if on sale |
| Vendor | Vendor name with verification badge, linked to vendor store |
| Variants | Color/size/option selectors (if applicable) |
| Quantity | Stepper input with min/max from inventory |
| Add to Cart | Primary button, full-width on mobile |
| Buy Now | Secondary button, goes directly to checkout |
| Stock status | In stock count, low stock warning, out of stock state |
| Trust signals | Shipping policy, return policy, vendor trust indicators |
| Save/Share | Wishlist save button, share link button |

#### 10.1.3 Variant Selection

Per SRS-COM-003, product variants are displayed and selectable on the product page.

| Variant Type | Display |
|---|---|
| Color | Circular swatches, selected has ring border |
| Size | Pill buttons, selected has primary border |
| Material | Dropdown or pill buttons |
| Other attributes | Dropdown for long lists, pills for short lists |

**Out-of-stock variants:** Marked unavailable with reduced opacity and "Out of stock" label. Cannot be selected (SRS-COM-003).

#### 10.1.4 Product Tabs

| Tab | Content |
|---|---|
| Description | Full description, formatted text, images |
| Specifications | Attribute-value table |
| Reviews | Rating distribution + individual reviews (see 10.5) |
| Shipping & Returns | Shipping methods, costs, return policy |

### 10.2 Vendor Store Page

Per SRS-COM-005, vendor storefronts display configurable name, description, logo, banner, products, ratings, and trust indicators.

```
┌──────────────────────────────────────────────────────────────────┐
│  [Vendor banner image — 1200×300px]                              │
│  ┌──────┐                                                        │
│  │ Logo  │  TechHub                              ✓ Verified     │
│  └──────┘  Electronics & Gadgets                                 │
│            ★★★★★ 4.8 (1,240 reviews) · 320 products            │
│            Trust Score: 92 (Excellent)                           │
│            [Visit Store] [Follow] [Message Vendor]              │
├──────────────────────────────────────────────────────────────────┤
│  [All Products] [About] [Reviews] [Policies]                    │
│                                                                  │
│  Product grid...                                                 │
└──────────────────────────────────────────────────────────────────┘
```

**Vendor store elements:**

| Element | Specification |
|---|---|
| Banner | 1200×300px, vendor-uploaded |
| Logo | 80×80px, circular |
| Vendor name | `h3`, with verification badge |
| Category tag | Vendor's primary category |
| Rating | Stars + count + product count |
| Trust Score | Displayed as badge with color per Section 2.7 |
| Actions | Visit store (scroll to products), Follow, Message |
| Tabs | Products, About, Reviews, Policies |
| About | Vendor description, location, member since, return policy |
| Reviews | Vendor-level reviews (not product-specific) |

### 10.3 Product Reviews

Per SRS-COM-018, ratings and reviews are by verified purchasers only and are subject to moderation.

#### 10.3.1 Review Summary

```
┌─────────────────────────────────────────────┐
│  Customer Reviews                            │
│                                             │
│  4.2 ★★★★☆  (124 reviews)                  │
│                                             │
│  5★ ████████████████████ 78 (63%)           │
│  4★ ██████ 22 (18%)                        │
│  3★ ███ 10 (8%)                             │
│  2★ █ 6 (5%)                                │
│  1★ ██ 8 (6%)                                │
│                                             │
│  [Write a review]                            │
└─────────────────────────────────────────────┘
```

#### 10.3.2 Individual Review

```
┌─────────────────────────────────────────────┐
│  ★★★★★ 5.0  · August 20, 2026              │
│  by [Username] ✓ Verified purchase          │
│                                             │
│  Great product, exactly as described.       │
│  Fast shipping and good quality.            │
│                                             │
│  [👍 Helpful (12)]  [Reply]                 │
└─────────────────────────────────────────────┘
```

| Review Element | Specification |
|---|---|
| Stars | 5-star display |
| Date | Review date |
| Author | Username with "Verified purchase" badge |
| Text | Review content, with moderation note if edited |
| Images | Optional review photos (up to 5) |
| Helpful | Upvote button with count |
| Reply | Vendor can reply (shown below review) |
| Report | Flag for moderation (abusive/inappropriate) |

### 10.4 Cart and Checkout

#### 10.4.1 Cart

Per SRS-COM-010, the cart is multi-vendor, persists across sessions, and reflects real-time inventory and price changes.

```
┌──────────────────────────────────────────────────────────────────┐
│  Shopping Cart (3 items)                                [Clear] │
├──────────────────────────────────────────────────────────────────┤
│  Vendor: TechHub                                                │
│  ┌────┐  Wireless Earbuds Pro              $99.99   [- 1 +] [✕] │
│  │ img │  Color: Black · In stock                    Subtotal:  │
│  └────┘                                             $99.99     │
│                                                                  │
│  Vendor: FashionHub                                             │
│  ┌────┐  Cotton T-Shirt                    $24.99   [- 2 +] [✕] │
│  │ img │  Size: M · Color: Blue · In stock           Subtotal:  │
│  └────┘                                             $49.98     │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  Subtotal: $149.97                                              │
│  Shipping: Calculated at checkout                                │
│  [Proceed to Checkout →]                                        │
└──────────────────────────────────────────────────────────────────┘
```

**Cart features:**

| Feature | Behavior |
|---|---|
| Multi-vendor grouping | Items grouped by vendor with per-vendor subtotal |
| Quantity adjustment | Stepper control, updates price in real-time |
| Remove item | X button with undo toast |
| Variant display | Shows selected color, size, etc. |
| Stock status | Real-time; if item goes out of stock, shown with warning |
| Price changes | If price changed since adding, show "Price updated" note |
| Persistence | Cart saved to account; available across devices |
| Empty cart | Empty state with "Browse marketplace" CTA |
| Checkout button | Sticky bottom bar on mobile |

#### 10.4.2 Checkout Flow

Checkout is a multi-step flow with a progress indicator. Each step focuses on one decision.

```
Step 1: Shipping Address
Step 2: Delivery Method
Step 3: Payment Method
Step 4: Review & Confirm
```

**Step 1 — Shipping Address:**

| Element | Behavior |
|---|---|
| Saved addresses | Radio list of previously used addresses |
| Add new address | Form with name, street, city, state, postal code, country, phone |
| Default address | Checkbox to set as default |
| Address validation | Real-time validation against postal service API |

**Step 2 — Delivery Method:**

```
┌─────────────────────────────────────────────┐
│  TechHub — 1 item                             │
│  ○ Standard shipping (5-7 days)    $5.99    │
│  ○ Express shipping (2-3 days)    $12.99    │
│  ○ Same-day delivery (if available) $19.99  │
│                                             │
│  FashionHub — 1 item                          │
│  ○ Standard shipping (3-5 days)    $3.99    │
│  ○ Express shipping (1-2 days)     $8.99    │
│                                             │
│  Total shipping: $9.98                       │
└─────────────────────────────────────────────┘
```

Per-vendor delivery options are shown because items ship from different vendors.

**Step 3 — Payment Method:**

| Payment Method | Display |
|---|---|
| Wallet balance | Shows available balance, can partially pay |
| Saved card | Last 4 digits, card type icon |
| New card | Card entry form |
| Mobile money | Provider selection (M-Pesa, MTN, etc.) |
| Bank transfer | Bank selection + instructions |
| Gift card/promo | Code entry field |

**Step 4 — Review & Confirm:**

```
┌──────────────────────────────────────────────────────────────────┐
│  Review Your Order                                              │
├──────────────────────────────────────────────────────────────────┤
│  Ship to: [Address summary]           [Edit]                   │
│  Delivery: Standard shipping           [Edit]                   │
│  Payment: Wallet ($149.97)             [Edit]                   │
├──────────────────────────────────────────────────────────────────┤
│  Order Summary:                                                  │
│  3 items from 2 vendors                                          │
│  Subtotal: $149.97                                               │
│  Shipping: $9.98                                                 │
│  Tax: $15.00                                                     │
│  ──────────────────────────                                      │
│  Total: $174.95                                                  │
│                                                                  │
│  [Place Order]                                                   │
└──────────────────────────────────────────────────────────────────┘
```

**Checkout principles:**
- Guest checkout available (account created after order if desired)
- No surprises: all costs shown before confirmation
- MFA for high-value orders (optional, configurable)
- Idempotency: "Place Order" button disables after click to prevent duplicates (SDD-1 Ch.3)
- Loading state: spinner with "Processing your order..." during payment
- Success: redirect to order confirmation page
- Failure: clear error message with retry option (SRS-WAL-004)

### 10.5 Order Confirmation

```
┌──────────────────────────────────────────────────────────────────┐
│  ✓ Order Placed!                                                │
│                                                                  │
│  Order #1000001                                                 │
│  Total: $174.95 · Paid via Wallet                               │
│                                                                  │
│  Your order has been confirmed. You'll receive a                 │
│  notification when each vendor ships your items.                 │
│                                                                  │
│  [View Order]  [Continue Shopping]                              │
└──────────────────────────────────────────────────────────────────┘
```

---

## Chapter 11 — Cart and Checkout UX

(Covered in Chapter 10.4. See above for cart and checkout specifications.)

---

## Chapter 12 — Order Management and Tracking UX

### 12.1 Order List

```
┌──────────────────────────────────────────────────────────────────┐
│  My Orders                                  [All ▾] [Filter]    │
├──────────────────────────────────────────────────────────────────┤
│  Order #1000001  · August 26, 2026                              │
│  3 items from 2 vendors                                          │
│  Total: $174.95                                                  │
│  Status: ● Shipped                                               │
│  [View Details →]                                               │
├──────────────────────────────────────────────────────────────────┤
│  Order #1000002  · August 24, 2026                              │
│  1 item from 1 vendor                                            │
│  Total: $49.99                                                   │
│  Status: ● Delivered                                             │
│  [View Details →]                                               │
├──────────────────────────────────────────────────────────────────┤
│  Order #1000003  · August 20, 2026                              │
│  2 items from 1 vendor                                           │
│  Total: $129.98                                                  │
│  Status: ● Returned                                              │
│  [View Details →]                                               │
└──────────────────────────────────────────────────────────────────┘
```

**Order status badges** (SRS-COM-012):

| Status | Color | Label |
|---|---|---|
| CREATED | `neutral.500` | Order placed |
| PAID | `info.500` | Payment confirmed |
| FULFILLING | `warning.500` | Preparing order |
| SHIPPED | `primary.500` | Shipped |
| DELIVERED | `success.500` | Delivered |
| CANCELLED | `neutral.400` | Cancelled |
| RETURNED | `warning.600` | Returned |
| REFUNDED | `neutral.600` | Refunded |

### 12.2 Order Detail

```
┌──────────────────────────────────────────────────────────────────┐
│  Order #1000001                              [Reorder] [Help]   │
│  Placed: August 26, 2026 at 2:30 PM                            │
│  Total: $174.95 · Paid via Wallet                               │
├──────────────────────────────────────────────────────────────────┤
│  Order Status Timeline                                           │
│  ✓ Order placed       — Aug 26, 2:30 PM                        │
│  ✓ Payment confirmed  — Aug 26, 2:31 PM                        │
│  ✓ Preparing order     — Aug 26, 3:00 PM                       │
│  ● Shipped            — Aug 27, 10:00 AM                       │
│  ○ In transit                                            │
│  ○ Delivered                                             │
├──────────────────────────────────────────────────────────────────┤
│  Items                                                           │
│  ┌────┐  Wireless Earbuds Pro          $99.99  [View product]  │
│  │ img │  by TechHub · Color: Black                            │
│  └────┘                                                          │
│  ┌────┐  Cotton T-Shirt (×2)          $49.98  [View product]   │
│  │ img │  by FashionHub · Size: M · Blue                       │
│  └────┘                                                          │
├──────────────────────────────────────────────────────────────────┤
│  Shipping                                                        │
│  [Tracking number: DHL123456789]  [Track →]                    │
│  Carrier: DHL · Standard shipping (5-7 days)                   │
│  Ship to: [Address]                                             │
├──────────────────────────────────────────────────────────────────┤
│  Payment Summary                                                 │
│  Subtotal: $149.97                                              │
│  Shipping: $9.98                                                 │
│  Tax: $15.00                                                     │
│  Total: $174.95                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### 12.3 Shipment Tracking

Per SRS-COM-014, shipment tracking status is synchronized and shown to the customer.

```
┌──────────────────────────────────────────────────────────────────┐
│  Tracking: DHL123456789                                          │
│  Carrier: DHL                                                    │
├──────────────────────────────────────────────────────────────────┤
│  Tracking Timeline                                               │
│  ✓ Package picked up    — Aug 27, 10:00 AM · Lagos              │
│  ✓ In transit           — Aug 28, 6:00 AM · Transit hub        │
│  ● Out for delivery     — Aug 29, 8:00 AM · Local facility     │
│  ○ Delivered                                          │
│                                                                  │
│  Estimated delivery: August 29, 2026                             │
│  [View on carrier site →]                                       │
└──────────────────────────────────────────────────────────────────┘
```

### 12.4 Returns and Refunds

#### 12.4.1 Return Request

```
┌─────────────────────────────────────────────┐
│  Return Request                               │
│                                             │
│  Item: Wireless Earbuds Pro ($99.99)        │
│                                             │
│  Reason for return:                          │
│  ○ Item damaged or defective                │
│  ○ Wrong item received                      │
│  ○ Item not as described                    │
│  ○ Changed my mind (within return window)   │
│  ○ Other                                    │
│                                             │
│  Comments (optional):                        │
│  [────────────────────────]                 │
│                                             │
│  Photos (optional, required for damage):     │
│  [Upload photo]                             │
│                                             │
│  Refund method:                              │
│  ○ Original payment method ($99.99)         │
│  ○ Wallet balance ($99.99)                  │
│                                             │
│  [Submit Return Request]                     │
└─────────────────────────────────────────────┘
```

#### 12.4.2 Return Status

| Status | Display |
|---|---|
| Requested | Yellow: "Return requested, awaiting vendor response" |
| Approved | Green: "Return approved. Ship item back." |
| Rejected | Red: "Return rejected. [Reason]. [Dispute →]" |
| Shipped back | Blue: "Item shipped back. Tracking: [number]" |
| Received | Blue: "Item received by vendor. Refund processing." |
| Refunded | Green: "Refund processed: $99.99 to [method]" |

### 12.5 Disputes

If a return is rejected or there's a transaction issue, the participant can open a dispute.

```
┌─────────────────────────────────────────────┐
│  Open a Dispute                               │
│                                             │
│  Order: #1000001                             │
│  Issue type:                                 │
│  ○ Item not as described                    │
│  ○ Item damaged                             │
│  ○ Vendor not responding                     │
│  ○ Refund not received                       │
│  ○ Other                                     │
│                                             │
│  Description:                                │
│  [────────────────────────]                 │
│  [────────────────────────]                 │
│                                             │
│  Evidence (photos, screenshots):             │
│  [Upload]                                    │
│                                             │
│  [Submit Dispute]                            │
└─────────────────────────────────────────────┘
```

**Dispute principles:**
- Both parties can see the dispute and respond
- Timeline of messages and evidence is visible
- Admin/moderation can intervene
- Resolution can be: full refund, partial refund, return approved, no action
- Participant can appeal (SRS-ADM-006)

---

## Chapter 13 — Services Marketplace UX

### 13.1 Professional Discovery

The services marketplace helps clients discover professional and local service providers. Unlike commerce (product-focused), services are provider-focused — the professional is the product.

```
┌──────────────────────────────────────────────────────────────────┐
│  [Search: "graphic designer in Lagos" 🔍]                        │
├──────────────────────────────────────────────────────────────────┤
│  Categories: [Design] [Development] [Marketing] [Consulting]...  │
├──────────────────────────────────────────────────────────────────┤
│  Top Providers                                                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                        │
│  │ Provider  │ │ Provider  │ │ Provider  │                        │
│  │ card      │ │ card      │ │ card      │                        │
│  └──────────┘ └──────────┘ └──────────┘                        │
├──────────────────────────────────────────────────────────────────┤
│  Popular Services                                                │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                                    │
│  │Service│ │Service│ │Service│ │Service│                          │
│  └────┘ └────┘ └────┘ └────┘                                    │
└──────────────────────────────────────────────────────────────────┘
```

### 13.2 Provider Profile

Per SRS-SVC-002, provider profiles display name, headline, bio, location, skills, portfolio, ratings, Trust Score, and verification status.

```
┌──────────────────────────────────────────────────────────────────┐
│  [Provider banner — 1200×300px]                                  │
│  ┌──────┐                                                        │
│  │Avatar │  Sarah Okafor                          ✓ Verified     │
│  └──────┘  Senior Graphic Designer                              │
│            Lagos, Nigeria · Member since 2025                   │
│            ★★★★★ 4.9 (87 reviews) · Trust: 95                │
│            [Message] [Request Service]                          │
├──────────────────────────────────────────────────────────────────┤
│  [About] [Portfolio] [Services] [Reviews] [Skills]              │
│                                                                  │
│  About                                                           │
│  ─────                                                           │
│  I'm a graphic designer with 8 years of experience...           │
│                                                                  │
│  Skills                                                          │
│  ─────                                                           │
│  [Logo Design] [Branding] [Illustration] [UI/UX] [Print]       │
│                                                                  │
│  Services                                                        │
│  ─────                                                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Logo Design                    From $50                  │   │
│  │ 3 packages: Basic · Standard · Premium                  │   │
│  │ [View service →]                                        │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Brand Identity Package         From $200                 │   │
│  │ [View service →]                                        │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

### 13.3 Portfolio Display

Per SRS-SVC-004, portfolios display title, description, images, documents, links, and completion date.

```
┌─────────────────────────────────────────────┐
│  Portfolio                                    │
│                                             │
│  ┌────┐ ┌────┐ ┌────┐                      │
│  │ img │ │ img │ │ img │  [View all →]      │
│  └────┘ └────┘ └────┘                      │
│                                             │
│  Featured Project:                           │
│  ┌──────────────────────────────────┐       │
│  │ [Project image]                   │       │
│  │ Brand Identity for ACME Corp      │       │
│  │ Completed: July 2026              │       │
│  │ [View details →]                  │       │
│  └──────────────────────────────────┘       │
└─────────────────────────────────────────────┘
```

### 13.4 Service Page

Per SRS-SVC-006, service pages display packages (basic, standard, premium).

```
┌──────────────────────────────────────────────────────────────────┐
│  Logo Design                                                     │
│  by Sarah Okafor ✓ Verified                                      │
│  ★★★★★ 4.9 (87 reviews)                                        │
├──────────────────────────────────────────────────────────────────┤
│  Choose a package:                                               │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐               │
│  │  Basic       │ │  Standard    │ │  Premium    │               │
│  │  $50         │ │  $120        │ │  $250       │               │
│  │  2 concepts  │ │  4 concepts  │ │  8 concepts │               │
│  │  2 revisions │ │  5 revisions  │ │  ∞ revisions│               │
│  │  3 days      │ │  5 days      │ │  7 days    │               │
│  │  PNG + JPG   │ │  All formats │ │  All + src │               │
│  │              │ │  ★ Most popular│ │             │               │
│  │ [Continue]   │ │  [Continue]  │ │  [Continue]│               │
│  └─────────────┘ └─────────────┘ └─────────────┘               │
├──────────────────────────────────────────────────────────────────┤
│  [Description] [Requirements] [Reviews] [FAQ]                    │
└──────────────────────────────────────────────────────────────────┘
```

### 13.5 Service Request and Proposal Flow

#### 13.5.1 Service Request

Per SRS-SVC-008, clients create service requests with title, description, category, budget range, and timeline.

```
┌─────────────────────────────────────────────┐
│  Request a Custom Service                     │
│                                             │
│  Title: [──────────────────]                │
│  Category: [Select ▾]                        │
│  Description:                                │
│  [────────────────────────]                 │
│  [────────────────────────]                 │
│                                             │
│  Budget range:                               │
│  [Min $] to [Max $]                         │
│                                             │
│  Timeline:                                   │
│  ○ ASAP (within 1 week)                     │
│  ○ 1-2 weeks                                │
│  ○ 1 month                                   │
│  ○ Flexible                                  │
│                                             │
│  [Post Request]                              │
└─────────────────────────────────────────────┘
```

#### 13.5.2 Proposal Comparison

Per SRS-SVC-009, proposals show cover note, approach, price, and timeline. Clients can view, compare, and accept.

```
┌──────────────────────────────────────────────────────────────────┐
│  Proposals for "Logo Design for Tech Startup" (5 received)       │
├──────────────────────────────────┬───────────────────────────────┤
│  Sarah Okafor ✓ Verified          │  Chidi Bello ✓ Verified      │
│  ★★★★★ 4.9 (87)                   │  ★★★★☆ 4.6 (54)              │
│  ─────────                         │  ─────────                    │
│  $120 · 5 days                     │  $90 · 7 days                │
│  ─────────                         │  ─────────                    │
│  "I'll start with 4 concepts..."   │  "I specialize in tech..."  │
│  [View proposal →]                 │  [View proposal →]           │
│  [Accept] [Decline] [Message]      │  [Accept] [Decline] [Message]│
├──────────────────────────────────┴───────────────────────────────┤
│  [Compare side-by-side]                                          │
└──────────────────────────────────────────────────────────────────┘
```

### 13.6 Contract and Milestone UX

#### 13.6.1 Contract Detail

Per SRS-SVC-009 and SRS-SVC-011, contracts are visible to both client and provider with lifecycle status.

```
┌──────────────────────────────────────────────────────────────────┐
│  Contract #CTC-001                         [Messages] [Files]   │
│  Status: ● In Progress                                           │
│  Service: Logo Design (Standard package)                        │
│  Provider: Sarah Okafor · Client: You                            │
│  Total: $120 · Paid to escrow                                   │
├──────────────────────────────────────────────────────────────────┤
│  Milestones                                                       │
│  ✓ Milestone 1: Initial concepts (2 days)     $40  Delivered   │
│  ✓ Milestone 2: Revisions (2 days)            $40  Delivered   │
│  ● Milestone 3: Final files (1 day)            $40  In delivery │
│  ○ Milestone 4: Handover                        $0   Pending    │
├──────────────────────────────────────────────────────────────────┤
│  [Request Revision]  [Accept Delivery]  [Open Dispute]          │
└──────────────────────────────────────────────────────────────────┘
```

#### 13.6.2 Milestone Delivery

Per SRS-SVC-012, delivery status is visible to the client with versioned, timestamped deliverables.

```
┌─────────────────────────────────────────────┐
│  Milestone 2: Revisions                      │
│  Status: Delivered · August 28, 2026         │
│                                             │
│  Deliverables:                               │
│  📎 logo_v2.png (1.2 MB) · Aug 28, 2:00 PM  │
│  📎 logo_v2.svg (45 KB) · Aug 28, 2:00 PM   │
│  📎 revision_notes.pdf (220 KB) · Aug 28     │
│                                             │
│  Message from provider:                      │
│  "Here are the revised concepts based on    │
│  your feedback. Let me know your thoughts."  │
│                                             │
│  [Accept]  [Request Revision]  [Message]     │
└─────────────────────────────────────────────┘
```

**Milestone status badges** (SRS-SVC-012):

| Status | Color | Label |
|---|---|---|
| PENDING | `neutral.400` | Pending |
| IN_DELIVERY | `warning.500` | In delivery |
| DELIVERED | `info.500` | Delivered |
| ACCEPTED | `success.500` | Accepted |
| REJECTED | `danger.500` | Rejected |
| SETTLED | `success.600` | Settled |

#### 13.6.3 Acceptance and Revision

Per SRS-COM/SVC-015, acceptance/rejection occurs within a defined review window with auto-acceptance after the window.

```
┌─────────────────────────────────────────────┐
│  Review Window: 3 days remaining              │
│                                             │
│  Please review the deliverables and          │
│  accept or request revisions.                │
│                                             │
│  If no action is taken within 3 days,        │
│  the milestone will be auto-accepted.        │
│                                             │
│  [Accept Delivery]  [Request Revision]      │
└─────────────────────────────────────────────┘
```

### 13.7 Service Reviews

Service reviews follow the same pattern as product reviews (Section 10.3) but are specific to the service contract and provider. They include:

- Overall rating (1–5 stars)
- Communication rating
- Quality rating
- Delivery timing rating
- Written review
- Optional photos
- Provider response

---

## Chapter 14 — Service Booking and Contract UX

(Covered in Chapter 13. See above for service booking, proposals, contracts, milestones, delivery, and reviews.)

---

# Part IV — Learning UX

## Chapter 15 — Learning Marketplace and Course Discovery

### 15.1 Learning Marketplace Overview

The Learning marketplace is the educational entry point for K-NETWORK. It serves learners seeking to develop skills, advance careers, and engage with genuine learning content. Learning is Engine #11 — integrated into the unified platform, not a separate application (PLC-1 Ch.31; SAD-1 ADR-009; SRS-LRN-001).

The learning marketplace UX follows the same design system as commerce and services — same components, same navigation patterns, same visual language — but adapts content presentation for educational context.

### 15.2 Learning Marketplace Homepage

```
┌──────────────────────────────────────────────────────────────────┐
│  [Search: "Search courses, instructors, topics..." 🔍]            │
├──────────────────────────────────────────────────────────────────┤
│  Categories: [Business] [Technology] [Design] [Finance] [Health]  │
├──────────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  Featured course banner (rotating carousel)                │  │
│  │  "Master Digital Marketing — Enroll now"                    │  │
│  └────────────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────────┤
│  Continue Learning                                               │
│  ┌──────────┐ ┌──────────┐                                     │
│  │ In-progress│ │ In-progress│  [Progress bar on each card]      │
│  │ course card│ │ course card│                                    │
│  └──────────┘ └──────────┘                                     │
├──────────────────────────────────────────────────────────────────┤
│  Recommended Courses                  [Personalization toggle]    │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                                     │
│  │Course│ │Course│ │Course│ │Course│                               │
│  │ card │ │ card │ │ card │ │ card │                              │
│  └────┘ └────┘ └────┘ └────┘                                     │
├──────────────────────────────────────────────────────────────────┤
│  Top Instructors                                                │
│  ┌────┐ ┌────┐ ┌────┐                                            │
│  │Instr.│ │Instr.│ │Instr.│                                       │
│  └────┘ └────┘ └────┘                                            │
├──────────────────────────────────────────────────────────────────┤
│  Popular Programs                                               │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                        │
│  │ Program   │ │ Program   │ │ Program   │                        │
│  │ card      │ │ card      │ │ card      │                        │
│  └──────────┘ └──────────┘ └──────────┘                        │
├──────────────────────────────────────────────────────────────────┤
│  New Courses                                                    │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                                     │
│  │Course│ │Course│ │Course│ │Course│                               │
│  └────┘ └────┘ └────┘ └────┘                                     │
└──────────────────────────────────────────────────────────────────┘
```

**Homepage sections:**

| Section | Content | Personalization |
|---|---|---|
| Search bar | Global course search with autocomplete | Recent searches |
| Categories | Course categories (horizontal scrollable chips) | Based on learning history (if consented) |
| Featured banner | Promoted courses (governance-approved) | No personalization |
| Continue Learning | In-progress courses with progress bars | Per learner |
| Recommended Courses | Personalized course recommendations | Personalized if consented; trending if not (SRS-LRN-002) |
| Top Instructors | Highly-rated instructors | No personalization |
| Popular Programs | Multi-course programs | No personalization |
| New Courses | Recently published | No personalization |

### 15.3 Course Discovery

Course discovery mirrors the commerce marketplace's search and filter patterns (Section 9.3–9.4) with learning-specific filters:

**Course search filters:**

| Filter | Type | Options |
|---|---|---|
| Category | Multi-select | Business, Technology, Design, Finance, Health, etc. |
| Level | Multi-select | Beginner, Intermediate, Advanced, All Levels |
| Price range | Range slider | $0 to max |
| Free/paid | Toggle | Free only, Paid only, Both |
| Language | Multi-select | English, French, Arabic, Swahili, etc. |
| Rating | Multi-select | 4★ & above, 3★ & above |
| Duration | Multi-select | Under 2 hours, 2–10 hours, 10+ hours |
| Certificate | Toggle | Courses that offer certificates |
| Instructor | Multi-select | Specific instructors |
| Format | Multi-select | Video, Interactive, Text-based |

**Course search results** use the same faceted filter layout as commerce (Section 9.4), with course cards (Section 15.5) instead of product cards.

### 15.4 Course Categories

Categories use a navigable taxonomy with subcategories:

```
Business
├── Entrepreneurship
├── Project Management
├── Leadership
└── Business Strategy

Technology
├── Web Development
├── Data Science
├── Cybersecurity
└── Cloud Computing

Design
├── Graphic Design
├── UX/UI Design
├── Video Editing
└── Photography
```

The category page shows the same layout as commerce categories (Section 9.2) with learning-specific filters.

---

## Chapter 16 — Course and Lesson Experience

### 16.1 Course Page

The course page provides all information needed to make an enrollment decision.

```
┌──────────────────────────────────────────────────────────────────┐
│  Home > Learning > Business > Entrepreneurship > Course          │
├───────────────────────────┬──────────────────────────────────────┤
│                           │  Course Title                         │
│  [Course thumbnail/        │  ★★★★★ 4.7 (1,240 reviews)          │
│   preview video]           │  12,450 students enrolled            │
│                           │  by [Instructor] ✓ Verified          │
│  [Play preview ▶]          │  Last updated: August 2026           │
│                           │                                       │
│                           │  $49.99  ~~$79.99~~  (37% off)       │
│                           │                                       │
│                           │  [Enroll Now]  [Add to Wishlist]    │
│                           │                                       │
│                           │  ✓ 6.5 hours on-demand video         │
│                           │  ✓ 8 downloadable resources          │
│                           │  ✓ Certificate of completion         │
│                           │  ✓ Lifetime access                   │
│                           │  ✓ Access on mobile and desktop      │
├───────────────────────────┴──────────────────────────────────────┤
│  [Overview] [Curriculum] [Instructor] [Reviews] [FAQ]            │
│                                                                  │
│  Tab content...                                                  │
└──────────────────────────────────────────────────────────────────┘
```

#### 16.1.1 Course Page Tabs

| Tab | Content |
|---|---|
| Overview | Course description, what you'll learn, requirements, who this is for |
| Curriculum | Module/lesson list with durations and preview indicators |
| Instructor | Instructor profile, bio, other courses, rating |
| Reviews | Rating summary + individual reviews |
| FAQ | Frequently asked questions |

#### 16.1.2 Course Curriculum Display

```
┌──────────────────────────────────────────────────────────────────┐
│  Curriculum                                                       │
│  4 modules · 24 lessons · 6.5 hours total                        │
├──────────────────────────────────────────────────────────────────┤
│  ▼ Module 1: Introduction to Entrepreneurship (1.2 hours)       │
│    ✓ 1.1 What is entrepreneurship? (8 min)        [Preview]    │
│    ✓ 1.2 Identifying opportunities (12 min)                     │
│    ✓ 1.3 Market research basics (15 min)                        │
│    ○ 1.4 Quiz: Introduction (10 min)                            │
│                                                                  │
│  ▶ Module 2: Building Your Business Plan (1.8 hours)            │
│  ▶ Module 3: Marketing and Sales (1.5 hours)                   │
│  ▶ Module 4: Scaling and Growth (2.0 hours)                     │
└──────────────────────────────────────────────────────────────────┘
```

**Curriculum display specifications:**

| Element | Behavior |
|---|---|
| Module | Expandable accordion; collapsed by default, first module expanded |
| Lesson | Title + duration; checkmark icon when completed |
| Preview | "Preview" badge for free preview lessons; click plays without enrollment |
| Quiz | Distinct icon (clipboard) for quiz/assessment lessons |
| Assignment | Distinct icon (document) for assignment lessons |
| Progress | Checkmarks reflect learner's completion progress (if enrolled) |

### 16.2 Course Card

```
┌─────────────────────┐
│  [Course thumbnail]  │
│                     │
│  Course title        │
│  (2 lines, ellipsis) │
│                     │
│  by Instructor name  │
│                     │
│  ★★★★★ 4.7 (1,240)  │
│                     │
│  $49.99  ~~$79.99~~ │
│                     │
│  📊 Beginner · 6.5h │
│  🏆 Certificate     │
└─────────────────────┘
```

| Element | Specification |
|---|---|
| Thumbnail | 16:9 aspect ratio, lazy-loaded, blurhash placeholder |
| Title | `body-sm`, `font.weight.medium`, 2-line max |
| Instructor | `caption`, `neutral.500` |
| Rating | Stars + count |
| Price | Current price bold, original price strikethrough if on sale |
| Level | Badge: Beginner/Intermediate/Advanced/All Levels |
| Duration | Total duration display |
| Certificate | Badge if course offers certificate |
| Free | "Free" badge for free courses |
| Hover (desktop) | Card lifts, thumbnail enlarges slightly |
| In-progress | Progress bar overlay if enrolled and started |

### 16.3 Enrollment Flow

#### 16.3.1 Enrollment — Free Course

```
Step 1: Click "Enroll Now" on course page
Step 2: Confirmation dialog: "Enroll in [Course Title] for free?"
Step 3: Click "Enroll" → Redirect to course player (Module 1, Lesson 1)
```

#### 16.3.2 Enrollment — Paid Course

```
Step 1: Click "Enroll Now" on course page
Step 2: Checkout screen (same as commerce checkout, Section 10.4.2)
        - Payment method selection
        - Order summary
        - Payment confirmation
Step 3: Payment processed → Redirect to course player
Step 4: Enrollment confirmation notification
```

**Enrollment principles:**
- Idempotency: clicking "Enroll" multiple times does not create duplicate enrollments (SDD-1 Ch.3)
- If already enrolled, button changes to "Continue Learning" → links to last position
- Payment failures show clear error with retry (SRS-WAL-004)
- Receipt available in wallet transactions

### 16.4 Video Learning Experience

Per SAD-1 ADR-005 and SRS-LRN-005, video content is delivered via external media (YouTube initial). The course player embeds video content within a K-NETWORK-controlled learning interface.

```
┌──────────────────────────────────────────────────────────────────┐
│  [← Back to Course]  Module 1: Introduction > Lesson 1.2        │
├──────────────────────────────────────────────┬──────────────────┤
│                                              │  Course Content  │
│  ┌──────────────────────────────────────┐   │                  │
│  │                                      │   │  Module 1 ✓      │
│  │       [Video player area]            │   │   L1.1 ✓         │
│  │       (YouTube embed)                │   │   L1.2 ● NOW     │
│  │                                      │   │   L1.3 ○        │
│  │                                      │   │   Quiz ○        │
│  └──────────────────────────────────────┘   │  Module 2        │
│                                              │   L2.1 ○        │
│  ▶ Play  ━━━━━●━━━━━━━━━  3:24 / 12:00      │   L2.2 ○        │
│  1x  ⚙  ⛶                                    │   L2.3 ○        │
│                                              │                  │
│  Lesson: Identifying opportunities           │  [Resources]     │
│  ──────────────────────────────              │  [Notes]         │
│  Lesson description and notes...             │  [Discussion]     │
│                                              │                  │
│  [Previous]              [Next Lesson →]     │  [Mark Complete] │
├──────────────────────────────────────────────┴──────────────────┤
│  Progress: ████░░░░░░ 40% of course complete                     │
└──────────────────────────────────────────────────────────────────┘
```

**Video player specifications:**

| Element | Behavior |
|---|---|
| Video area | 16:9 aspect ratio, YouTube embed with K-NETWORK chrome |
| Player controls | Play/pause, seek bar, volume, speed (0.75x–2x), fullscreen |
| Autoplay | Next lesson auto-plays after completion (toggle in settings) |
| Closed captions | Supported via YouTube captions; toggle in player |
| Resume | Video resumes from last watched position |
| Watch tracking | Progress tracked as percentage of video watched |
| Completion | Marked complete when ≥90% watched or learner clicks "Mark Complete" |
| Offline | Not supported for video (external media); text resources cached |

**Accessibility for video:**
- Closed captions required for all video content (WCAG 1.2.2)
- Transcript available as downloadable text resource
- Keyboard-accessible player controls
- No content that relies solely on color or visual cues

### 16.5 Lesson Navigation

#### 16.5.1 Lesson Sidebar

The lesson sidebar shows the full course curriculum with progress indicators:

| Icon | State | Meaning |
|---|---|---|
| ✓ | Completed | Lesson finished (checkmark in success color) |
| ● | Current | Currently viewing (filled circle in primary color) |
| ○ | Not started | Not yet accessed (empty circle in neutral color) |
| 🔒 | Locked | Requires previous lesson completion (lock icon) |

**Navigation behavior:**
- Click any unlocked lesson to navigate to it
- Locked lessons show tooltip: "Complete the previous lesson first"
- Previous/Next buttons at bottom of video area
- Breadcrumb shows current module > lesson

#### 16.5.2 Lesson Types

| Lesson Type | Icon | Player Area |
|---|---|---|
| Video | Play icon | YouTube video embed |
| Text/Article | Document icon | Formatted text content |
| Quiz | Clipboard icon | Interactive quiz (Section 16.6) |
| Assessment | Assessment icon | Graded assessment (Section 16.7) |
| Assignment | Document icon | Assignment submission (Section 16.8) |
| Download | Download icon | Downloadable resource |

### 16.6 Quiz UX

Quizzes are interactive knowledge checks within lessons.

```
┌─────────────────────────────────────────────┐
│  Quiz: Introduction to Entrepreneurship      │
│  Question 2 of 5                              │
│  ───────────────────                         │
│                                             │
│  What is the primary purpose of market       │
│  research for a new business?                │
│                                             │
│  ○ A) To impress investors                  │
│  ○ B) To understand customer needs          │
│  ○ C) To fill out forms                     │
│  ○ D) To increase costs                     │
│                                             │
│  [Previous]  [Submit Answer]  [Next →]      │
│                                             │
│  No time limit · Unlimited attempts          │
└─────────────────────────────────────────────┘
```

**Quiz specifications:**

| Property | Behavior |
|---|---|
| Question types | Multiple choice, true/false, short answer |
| Feedback | Immediate after submit (correct/incorrect + explanation) |
| Attempts | Unlimited for quizzes (unlike assessments) |
| Scoring | Not graded (knowledge check only); completion recorded |
| Progress | Question X of Y indicator |
| Navigation | Previous/Next between questions; submit at end |
| No time limit | Quizzes have no time limit (assessments may) |

### 16.7 Assessment UX

Per SDD-1 Ch.16.9, assessments have `maxAttempts`, `timeLimitMinutes`, `passThreshold`, and `shuffleQuestions`.

```
┌─────────────────────────────────────────────┐
│  Assessment: Business Plan Fundamentals      │
│  ──────────────────────────────              │
│                                             │
│  ⏱ Time remaining: 28:34                    │
│  Question 4 of 10                            │
│  Attempts: 1 of 3                           │
│  Pass threshold: 70%                         │
│                                             │
│  Which section of a business plan should     │
│  include financial projections?              │
│                                             │
│  ○ A) Executive Summary                      │
│  ○ B) Financial Plan                         │
│  ○ C) Marketing Strategy                     │
│  ○ D) Operations Plan                        │
│                                             │
│  [Previous]  [Submit Assessment]            │
│  [Save & Exit]                              │
└─────────────────────────────────────────────┘
```

**Assessment specifications:**

| Property | Behavior |
|---|---|
| Time limit | Countdown timer visible; assessment auto-submits at 0 |
| Max attempts | Displayed; after max, assessment is locked |
| Pass threshold | Displayed before start; score shown after submit |
| Shuffle questions | Question order randomized per attempt (if enabled) |
| Auto-scoring | Multiple choice and true/false auto-scored |
| Manual grading | Short answer requires instructor review |
| Result display | Score, pass/fail, per-question review (after grading) |
| Fraud detection | Submission may be flagged by Intelligence Engine; learner sees "Assessment under review" if flagged |
| Save & exit | Progress saved; can resume within time window |

**Assessment result screen:**

```
┌─────────────────────────────────────────────┐
│  Assessment Result                           │
│                                             │
│  ✅ Passed!  Score: 85%                     │
│  (Pass threshold: 70%)                      │
│                                             │
│  Question 1: ✓ Correct                      │
│  Question 2: ✓ Correct                      │
│  Question 3: ✗ Incorrect                    │
│    Correct answer: B) Financial Plan        │
│  Question 4: ✓ Correct                      │
│  ...                                         │
│                                             │
│  [Review Course]  [Continue Learning →]     │
│                                             │
│  Attempts remaining: 2                       │
└─────────────────────────────────────────────┘
```

If failed:
```
┌─────────────────────────────────────────────┐
│  Assessment Result                           │
│                                             │
│  ❌ Not passed  Score: 55%                   │
│  (Pass threshold: 70%)                      │
│                                             │
│  Don't worry — you have 2 attempts left.    │
│  Review the course material and try again.  │
│                                             │
│  [Review Material]  [Retry Assessment]      │
└─────────────────────────────────────────────┘
```

### 16.8 Assignment UX

Assignments require learner submission of work for instructor review.

#### 16.8.1 Assignment Brief

```
┌─────────────────────────────────────────────┐
│  Assignment: Create a Business Plan Outline  │
│                                             │
│  Instructions:                               │
│  Create a 1-page business plan outline for    │
│  a business of your choice. Include:        │
│  - Executive summary                         │
│  - Target market                             │
│  - Revenue model                             │
│  - Key metrics                               │
│                                             │
│  Format: PDF or DOCX, max 5MB               │
│  Due: September 5, 2026                      │
│                                             │
│  Submit your work:                           │
│  [Choose file] or [Drag & drop]             │
│                                             │
│  [Submit Assignment]                         │
└─────────────────────────────────────────────┘
```

#### 16.8.2 Assignment Review by Instructor

```
┌─────────────────────────────────────────────┐
│  Assignment Feedback                         │
│                                             │
│  Status: Graded · Score: 92%                 │
│                                             │
│  Instructor feedback:                        │
│  "Excellent work! Your executive summary     │
│  was clear and concise. Consider adding       │
│  more detail to your revenue model..."       │
│                                             │
│  📎 Your submission: business_plan.pdf       │
│  📎 Instructor feedback: feedback.pdf        │
│                                             │
│  [Download Feedback]  [Continue →]           │
└─────────────────────────────────────────────┘
```

### 16.9 Progress Tracking

#### 16.9.1 Course Progress

```
┌─────────────────────────────────────────────┐
│  Your Progress                                │
│                                             │
│  ████████████░░░░░░ 65% complete            │
│                                             │
│  3 of 4 modules completed                    │
│  18 of 24 lessons completed                  │
│  2 of 3 quizzes passed                       │
│  1 of 1 assessment passed                    │
│  0 of 1 assignment submitted                 │
│                                             │
│  Last accessed: 2 hours ago                  │
│  Next lesson: Module 4, Lesson 2             │
│                                             │
│  [Continue Learning →]                       │
└─────────────────────────────────────────────┘
```

**Progress tracking specifications:**

| Metric | Display |
|---|---|
| Overall progress | Percentage bar with visual indicator |
| Modules completed | Count of completed modules |
| Lessons completed | Count of completed lessons |
| Quizzes passed | Count of passed quizzes |
| Assessments passed | Count of passed assessments |
| Assignments submitted | Count of submitted assignments |
| Last accessed | Relative time ("2 hours ago") |
| Next lesson | Direct link to continue |
| Estimated remaining | Time to complete based on remaining content |

Progress is always live (not cached — SDD-1 Ch.20.10). The UI fetches fresh progress data on every course player load.

### 16.10 Certificate

Per SRS-LRN-013, certificates are issued upon course completion.

#### 16.10.1 Certificate Display

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│              K-NETWORK                                          │
│         Certificate of Completion                                │
│                                                                  │
│    This certifies that                                          │
│                                                                  │
│         [Learner Name]                                          │
│                                                                  │
│    has successfully completed                                   │
│                                                                  │
│      "Entrepreneurship Fundamentals"                             │
│                                                                  │
│    A 6.5-hour course covering:                                  │
│    Introduction, Business Planning, Marketing, Growth          │
│                                                                  │
│    Instructor: [Instructor Name]                                │
│    Completed: August 26, 2026                                   │
│    Certificate ID: KNET-CERT-2026-001234                       │
│                                                                  │
│         [K-NETWORK Seal]                        [Verify ↗]        │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Certificate specifications:**

| Property | Value |
|---|---|
| Design | Premium gold and primary colors; K-NETWORK seal |
| Display | Full certificate view (downloadable as PDF) |
| Verification | Public verification URL: `/verify/{code}` (SDD-1 Ch.16) |
| Sharing | LinkedIn share button, download PDF, copy verification link |
| Certificate ID | Unique, verifiable ID |
| Completion date | Date of final lesson/assessment completion |

#### 16.10.2 Certificate List

Certificates are listed in the learner dashboard:

```
┌──────────────────────────────────────────────────────────────────┐
│  My Certificates (5)                                             │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  Entrepreneurship Fundamentals                │
│  │ [Certificate  │  Completed: Aug 26, 2026                     │
│  │  thumbnail]   │  ID: KNET-CERT-2026-001234                   │
│  └──────────────┘  [View] [Download PDF] [Share]                │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  Digital Marketing Essentials                 │
│  │ [Certificate  │  Completed: Jul 15, 2026                     │
│  │  thumbnail]   │  ID: KNET-CERT-2026-001189                   │
│  └──────────────┘  [View] [Download PDF] [Share]                │
└──────────────────────────────────────────────────────────────────┘
```

---

## Chapter 17 — Learning Dashboards

### 17.1 Learner Dashboard

The learner dashboard is the personal learning hub — showing progress, recommendations, certificates, and learning history.

```
┌──────────────────────────────────────────────────────────────────┐
│  Learning Dashboard                                               │
├─────────────────────────┬────────────────────────────────────────┤
│                         │  Continue Learning                      │
│  Learning Stats         │  ┌──────────────────────────────────┐  │
│  ─────────              │  │ Entrepreneurship Fundamentals     │  │
│  Courses: 12            │  │ ████████░░░░ 65% · Module 4      │  │
│  Completed: 8           │  │ [Continue →]                      │  │
│  In Progress: 3         │  └──────────────────────────────────┘  │
│  Certificates: 5        │  ┌──────────────────────────────────┐  │
│  Hours learned: 87      │  │ Digital Marketing                │  │
│  K-Points (learning):   │  │ ████░░░░░░░░ 30% · Module 2     │  │
│  1,240 this cycle       │  │ [Continue →]                      │  │
│                         │  └──────────────────────────────────┘  │
│  [View All Courses]     │                                        │
│                         │  Recommended Next                      │
│                         │  ┌────┐ ┌────┐ ┌────┐               │
│                         │  │Course│ │Course│ │Course│            │
│                         │  └────┘ └────┘ └────┘               │
│                         │                                        │
│                         │  Recent Activity                       │
│                         │  • Completed Lesson 1.3 · 2h ago     │
│                         │  • Passed Quiz: Marketing · 1d ago   │
│                         │  • Earned certificate: Design · 3d   │
└─────────────────────────┴────────────────────────────────────────┘
```

**Learner dashboard sections:**

| Section | Content |
|---|---|
| Learning Stats | Total courses, completed, in progress, certificates, hours, K-Points from learning |
| Continue Learning | In-progress courses with progress bars and continue links |
| Recommended Next | Course recommendations (personalized if consented) |
| Recent Activity | Timeline of recent learning events |
| My Certificates | Quick access to earned certificates (Section 16.10.2) |
| Wishlist | Saved courses for later |

### 17.2 Instructor Dashboard

The instructor dashboard is the teaching hub — showing course performance, student engagement, and content management.

```
┌──────────────────────────────────────────────────────────────────┐
│  Instructor Dashboard                                            │
├─────────────────────────┬────────────────────────────────────────┤
│                         │  Course Performance                     │
│  Teaching Stats         │  ┌──────────────────────────────────┐  │
│  ─────────              │  │ Entrepreneurship Fundamentals    │  │
│  Courses: 4             │  │ 1,240 students · ★4.7            │  │
│  Students: 3,450        │  │ Revenue: $12,400 this month      │  │
│  Avg rating: 4.6        │  │ [Manage Course →]                │  │
│  Revenue (month):       │  └──────────────────────────────────┘  │
│  $18,200                │  ┌──────────────────────────────────┐  │
│  K-Points (teaching):   │  │ Digital Marketing Essentials      │  │
│  3,400 this cycle       │  │ 2,210 students · ★4.5            │  │
│                         │  │ [Manage Course →]                │  │
│  [Create Course]        │  └──────────────────────────────────┘  │
│                         │                                        │
│                         │  Needs Attention                       │
│                         │  • 5 assignments to grade             │
│                         │  • 12 student questions unanswered     │
│                         │  • 3 pending reviews                   │
│                         │                                        │
│                         │  Student Engagement                    │
│                         │  Active students: 820 (this month)     │
│                         │  Completion rate: 72%                   │
│                         │  Engagement trend: [📈 chart]          │
└─────────────────────────┴────────────────────────────────────────┘
```

**Instructor dashboard sections:**

| Section | Content |
|---|---|
| Teaching Stats | Courses, students, avg rating, revenue, K-Points from teaching |
| Course Performance | Per-course stats: enrollment, rating, revenue, manage link |
| Needs Attention | Assignments to grade, questions to answer, reviews pending |
| Student Engagement | Active students, completion rate, engagement trend chart |
| Revenue Analytics | Revenue over time, per-course breakdown |
| Course Management | Create course, edit course, manage curriculum, manage assessments |

### 17.3 Course Management (Instructor)

#### 17.3.1 Course Creation Flow

```
Step 1: Course basics (title, category, level, language, description)
Step 2: Course image and preview video
Step 3: Curriculum builder (modules, lessons, quizzes, assessments)
Step 4: Pricing (free, paid, promotional price)
Step 5: Settings (certificate, enrollment limits, prerequisites)
Step 6: Review and publish (submitted for admin review)
```

#### 17.3.2 Curriculum Builder

The curriculum builder is a drag-and-drop interface for structuring course content:

```
┌──────────────────────────────────────────────────────────────────┐
│  Curriculum Builder                                    [Preview] │
├──────────────────────────────────────────────────────────────────┤
│  Module 1: Introduction                    [▲] [▼] [✕]          │
│  ├─ Lesson 1.1: What is entrepreneurship?  [▲] [▼] [✕]        │
│  │  Type: Video · 8 min · [Edit]                                │
│  ├─ Lesson 1.2: Identifying opportunities  [▲] [▼] [✕]        │
│  │  Type: Video · 12 min · [Edit]                               │
│  └─ Quiz 1: Introduction quiz               [▲] [▼] [✕]        │
│     Type: Quiz · 5 questions · [Edit]                           │
│                                                                  │
│  [+ Add Module]                                                 │
│  [+ Add Lesson to Module 1]                                     │
│  [+ Add Quiz to Module 1]                                       │
│  [+ Add Assessment to Module 1]                                 │
│  [+ Add Assignment to Module 1]                                 │
└──────────────────────────────────────────────────────────────────┘
```

---

# Part V — K-Rewards and Leadership UX

## Chapter 18 — K-Rewards Dashboard

### 18.1 Dashboard Overview

The K-Rewards dashboard is the participant's home for understanding their rewards standing. It surfaces K-Points, K-Level, K-Tier, K-Trust, ring structure, and reward share — all in one cohesive view. The dashboard is designed to inform and motivate through genuine contribution, not through recruitment pressure (KR-1 KR-LVL-006; KR-SRC-002).

**Design principle:** The dashboard shows what the participant has earned through genuine activity and what they can work toward — not how to recruit more people. Progress is shown as personal achievement, not as a leaderboard or competition.

### 18.2 Dashboard Layout

```
┌──────────────────────────────────────────────────────────────────┐
│  K-Rewards Dashboard                                              │
├─────────────────────────┬────────────────────────────────────────┤
│                         │  This Cycle (August 2026)               │
│  Your K-Level            │  ─────────────────────                 │
│  ╭──────────╮            │  K-Points this cycle: 340              │
│  │   L4     │            │  ┌────────────────────────────────┐  │
│  │  Growth   │            │  │ Commerce:    120 ████████░░    │  │
│  ╰──────────╯            │  │ Services:      80 ██████░░░░    │  │
│  Growth Leader            │  │ Learning:     100 ███████░░░    │  │
│  Multiplier: 1.3×         │  │ Community:     30 ████░░░░░░    │  │
│  Active Status: ✓ Active  │  │ Referral:      10 █░░░░░░░░░    │  │
│                         │  └────────────────────────────────┘  │
│  K-Trust                 │                                        │
│  ╭──────╮               │  Estimated Reward Share               │
│  │  72  │  Strong        │  ─────────────────────                 │
│  │ /100 │  ████████░░     │  Your share of pool: 0.012%            │
│  ╰──────╯               │  Est. reward: $4.20                   │
│                         │  (Based on current K-Points, rings,    │
│  Lifetime Stats          │   K-Level multiplier, and Trust)       │
│  ─────────              │                                        │
│  Lifetime K-Points:      │  Ring Contribution                     │
│  5,200                   │  ─────────────────────                 │
│  Active months: 6        │  Your rings contribute to your          │
│  K-Level since:          │  reward share. Keep your network        │
│  March 2026              │  active and genuine.                   │
│                         │  [View ring structure →]               │
│  [View Leadership        │                                        │
│   Dashboard →]           │  [View reward statement →]              │
└─────────────────────────┴────────────────────────────────────────┘
```

### 18.3 Dashboard Components

#### 18.3.1 K-Level Display

| Element | Specification |
|---|---|
| Level number | Large, in tier color (Section 2.6) |
| Tier name | Below level number, in tier color |
| Level title | Full title (e.g., "Growth Leader") |
| Multiplier | Displayed as "1.3×" with tooltip explaining multiplier |
| Active status | Green checkmark if active, yellow warning if at risk |
| Progress to next level | Progress bar showing lifetime K-Points toward next level threshold |

**K-Level badge sizes:**

| Context | Size |
|---|---|
| Dashboard hero | 120×120px circular badge |
| Navigation/profile | 32×32px |
| Inline mentions | 20×20px |
| Profile page | 80×80px |

**K-Level badge visual by tier:**

| Tier | Badge Style |
|---|---|
| Foundation (L1–3) | Primary blue circular badge with level number |
| Growth (L4–6) | Green circular badge with level number |
| Leadership (L7–9) | Orange badge with crown icon + level number, gold border |
| Executive (L10–12) | Purple badge with ornate crown + level number, gold border |
| Legacy (L13–15) | Gold badge with royal crown + level number, gold border + glow |

#### 18.3.2 K-Points Display

K-Points are displayed in two contexts: **this cycle** (monthly, resets) and **lifetime** (permanent, never resets).

**This cycle K-Points:**

```
┌─────────────────────────────────────────────┐
│  K-Points This Cycle                          │
│                                             │
│  Total: 340                                  │
│                                             │
│  By Category:                                │
│  Commerce:    120 ████████░░  (35%)          │
│  Services:      80 ██████░░░░  (24%)          │
│  Learning:     100 ███████░░░  (29%)         │
│  Community:     30 ████░░░░░░  (9%)           │
│  Referral:      10 █░░░░░░░░░  (3%)           │
│                                             │
│  Personal activity requirement: 130           │
│  Your personal activity: 140 ✓               │
│                                             │
│  Resets at end of cycle (Aug 31)             │
└─────────────────────────────────────────────┘
```

**K-Points display rules:**

| Rule | Implementation |
|---|---|
| Monthly vs. lifetime | Always clearly labeled; never ambiguous |
| Category breakdown | 8 categories per KR-1 Appendix D |
| Personal activity requirement | Shows threshold and current status |
| Reset date | Shows when current cycle ends |
| No recruitment emphasis | Referral K-Points shown as one category, not highlighted |

#### 18.3.3 K-Trust Display

See Chapter 7, Section 7.5 for Trust Score display specifications. The K-Rewards dashboard includes a compact Trust Score widget that links to the full Trust Score details.

#### 18.3.4 Reward Share Estimate

The estimated reward share shows the participant's projected reward based on current standing:

```
┌─────────────────────────────────────────────┐
│  Estimated Reward Share                      │
│                                             │
│  Your share of pool: 0.012%                 │
│  Estimated reward: $4.20                    │
│                                             │
│  Based on:                                   │
│  • Monthly K-Points (340)                    │
│  • Ring Contribution (active rings)          │
│  • K-Level Multiplier (1.3×)                │
│  • K-Trust (72/100)                          │
│                                             │
│  ⚠️ This is an estimate. Final reward        │
│  depends on total pool size and all          │
│  eligible participants' shares.              │
│                                             │
│  [View reward statement →]                   │
└─────────────────────────────────────────────┘
```

> **Note:** The reward share is a blend of four normalized pillars: Monthly K-Points (weight: 0.40), Ring Contribution (weight: 0.25), K-Level Multiplier (weight: 0.20), K-Trust (weight: 0.15). These weights are GOVERNANCE PARAMETERS (KR-1 KR-RWD-001). The UI displays the contributing factors but labels the estimate as provisional.

### 18.4 Reward Cycle Status

The reward cycle is monthly with defined stages. The dashboard shows the current cycle stage:

```
┌─────────────────────────────────────────────┐
│  Reward Cycle: August 2026                    │
│                                             │
│  ●━━━●━━━●━━━●━━━○━━━○━━━○━━━○━━━○     │
│  Accr  Eval  Dist  Comp  ...                  │
│                                             │
│  Current stage: Accumulating                 │
│  Cycle ends: August 31, 2026                 │
│  Distribution: September 1–5, 2026           │
└─────────────────────────────────────────────┘
```

| Stage | Label | Description |
|---|---|---|
| ACCUMULATING | Accumulating | K-Points being earned |
| EVALUATION | Evaluation | Eligibility being verified |
| DISTRIBUTION | Distribution | Rewards being calculated and distributed |
| COMPLETED | Completed | Cycle finished, rewards distributed |

### 18.5 Reward Statement

The reward statement provides a detailed breakdown of a past cycle's reward:

```
┌──────────────────────────────────────────────────────────────────┐
│  Reward Statement — July 2026                                     │
├──────────────────────────────────────────────────────────────────┤
│  K-Points Earned                                                  │
│  Commerce:     145    Services:      90    Learning:    110      │
│  Community:     35    Referral:      15    Total:      395      │
│                                                                  │
│  Reward Share Calculation                                         │
│  Monthly K-Points (normalized): 0.85    Weight: 0.40  → 0.340   │
│  Ring Contribution (normalized):  0.72    Weight: 0.25  → 0.180   │
│  K-Level Multiplier (normalized): 1.30    Weight: 0.20  → 0.260   │
│  K-Trust (normalized):             0.72    Weight: 0.15  → 0.108   │
│  ──────────────────────────                                       │
│  Reward Share: 0.888 (normalized)                                │
│                                                                  │
│  Pool Information                                                 │
│  Total Reward Pool: $45,000.00                                   │
│  Total Eligible Participants: 3,200                              │
│  Sum of all shares: 3,560.0                                      │
│  Your share: 0.888 / 3,560.0 = 0.0249%                          │
│                                                                  │
│  Your Reward                                                      │
│  $45,000.00 × 0.0249% = $11.21                                   │
│  Status: Distributed to wallet on August 3, 2026                 │
│  Transaction ID: tx-003e8400...                                  │
│                                                                  │
│  [Download Statement (PDF)]                                      │
└──────────────────────────────────────────────────────────────────┘
```

**Reward statement principles:**
- Fully transparent: the participant can reconstruct their entire reward calculation (KR-1 KR-FND-015)
- All four pillars shown with weights and normalized values
- Pool size and eligible participant count shown
- Final reward amount and wallet transaction reference
- Downloadable as PDF for records

---

## Chapter 19 — Leadership Dashboard

### 19.1 Dashboard Overview

The Leadership Dashboard is the sophisticated interface for understanding K-Level progression, ring structure, leadership qualification, and what requirements remain for advancement. It answers three critical questions:

1. **"What is my current ring structure?"** — EP-KRW-004
2. **"Which Ring 1 members qualify as leaders?"** — EP-KRW-009
3. **"What leadership requirements am I missing?"** — EP-KRW-010

The dashboard is designed to show progress visually without encouraging unhealthy recruitment behavior (KR-1 KR-LVL-006). It emphasizes **genuine leadership development** — the development of qualified leaders — not the accumulation of network members.

### 19.2 Dashboard Layout

```
┌──────────────────────────────────────────────────────────────────┐
│  Leadership Dashboard                                              │
├─────────────────────────┬────────────────────────────────────────┤
│                         │  Current Standing                       │
│  K-Level                │  ─────────────────────                  │
│  ╭──────────╮           │  Level: 4 (Growth Leader)               │
│  │   L4     │           │  Tier: Growth                            │
│  │  Growth   │           │  Royal Identity: Normal                 │
│  ╰──────────╯           │  Multiplier: 1.3×                        │
│                         │  Active Status: ✓ Active                │
│  Team                   │                                         │
│  Team: [Not assigned     │  Next Level: 5 (Growth Builder)        │
│   yet — reached at L7]  │  ─────────────────────                  │
│                         │  Progress: ████████░░░ 78%              │
│  K-Trust                │                                         │
│  72/100  Strong          │  Requirements for Level 5:             │
│                         │  ✓ Lifetime K-Points: 5,200 / 5,000    │
│  [Ring Structure →]     │  ✓ Active months: 6 / 6                │
│  [Qualifying Leaders →] │  ✓ Personal activity: 140 / 130        │
│  [Missing Requirements →]│  ✓ Trust: 72 / 55                      │
│                         │  ○ Ring 1: 10 active / 15 required      │
│                         │  ○ Ring 2: 8 active / 12 required      │
│                         │  ○ Ring 3: 5 active / 8 required        │
│                         │  ○ Ring 4: 3 active / 5 required        │
│                         │  ○ Ring 5: 2 active / 3 required        │
│                         │                                         │
│                         │  [View full requirements →]             │
└─────────────────────────┴────────────────────────────────────────┘
```

### 19.3 Next-Level Requirements View

The next-level requirements view shows all requirements for the target K-Level, with the participant's current status against each. This is the "What leadership requirements am I missing?" query (EP-KRW-010).

#### 19.3.1 Requirements Table

```
┌──────────────────────────────────────────────────────────────────┐
│  Requirements for Level 5 (Growth Builder)                        │
│  Tier: Growth · Multiplier: 1.4× · Royal Identity: Normal        │
├──────────────────────────────────────────────────────────────────┤
│  Personal Requirements                                            │
│  ────────────────────                                            │
│  ✓ Lifetime K-Points     5,000 required    5,200 current         │
│  ✓ Active months         6 required        6 current             │
│  ✓ Personal activity     130 required       140 current           │
│  ✓ Trust Score           55 required       72 current            │
│  ✓ Active Status         Required           Active               │
│  ✓ Freedom from sanctions Required          No sanctions          │
│                                                                  │
│  Ring Requirements                                                │
│  ────────────────────                                            │
│  Ring 1:  15 active, min 0 at L4+     10 active, 0 at L4+  ✗   │
│  Ring 2:  12 active, min 0 at L4+      8 active, 0 at L4+   ✗   │
│  Ring 3:   8 active, min 0 at L4+      5 active, 0 at L4+   ✗   │
│  Ring 4:   5 active, min 0 at L4+      3 active, 0 at L4+   ✗   │
│  Ring 5:   3 active, min 0 at L4+      2 active, 0 at L4+   ✗   │
│                                                                  │
│  Leadership Development                                           │
│  ────────────────────                                            │
│  N/A for Growth Tier (leadership development required from L7)   │
│                                                                  │
│  Summary: 4 of 6 personal requirements met                       │
│           0 of 5 ring requirements met                            │
│           Overall: Not yet qualified for Level 5                  │
│                                                                  │
│  [What should I focus on? →]                                     │
└──────────────────────────────────────────────────────────────────┘
```

**Requirements table specifications:**

| Element | Specification |
|---|---|
| Requirement name | Left-aligned, `body`, `neutral.900` |
| Threshold | Center, `body-sm`, `neutral.600` |
| Current | Center, `body-sm`, `neutral.900` |
| Status icon | Right: ✓ green (met), ✗ red (not met), ○ gray (N/A) |
| Section grouping | Personal, Ring, Leadership Development |
| Summary | Bottom: count of met vs total, overall qualification status |

#### 19.3.2 For Leadership Tier (L7+) — With Leadership Development

For participants targeting Level 7 and above, the requirements table includes leadership development requirements:

```
┌──────────────────────────────────────────────────────────────────┐
│  Requirements for Level 7 (Leadership Member, Prince)            │
│  Tier: Leadership · Multiplier: 1.7× · Royal Identity: Prince   │
├──────────────────────────────────────────────────────────────────┤
│  Personal Requirements                                            │
│  ✓ Lifetime K-Points     50,000 required    55,000 current       │
│  ✓ Active months         18 required        20 current           │
│  ✓ Personal activity     130 required       140 current          │
│  ✓ Trust Score           55 required        58 current           │
│  ✓ Active Status         Required           Active               │
│  ✓ Freedom from sanctions Required          No sanctions          │
│                                                                  │
│  Ring Requirements                                                │
│  ✓ Ring 1:  15 active, min 2 at L4+    16 active, 3 at L4+      │
│  ✓ Ring 2:  12 active, min 0 at L4+     13 active, 0 at L4+     │
│  ✓ Ring 3:   8 active, min 0 at L4+      9 active, 0 at L4+     │
│  ✓ Ring 4:   5 active, min 0 at L4+      6 active, 0 at L4+     │
│  ✓ Ring 5:   3 active, min 0 at L4+      4 active, 0 at L4+     │
│                                                                  │
│  Leadership Development                                           │
│  ✓ Min 2 Ring 1 members at L4+          3 at L4+                  │
│                                                                  │
│  Summary: All requirements met ✓                                  │
│           You qualify for Level 7!                                │
│                                                                  │
│  [Promote to Level 7 →]  (Available at next cycle evaluation)    │
└──────────────────────────────────────────────────────────────────┘
```

#### 19.3.3 For Legacy Tier (L13–15) — With Executive-Tier Requirements

For participants targeting Level 13+, the requirements include Executive-tier Ring 1 requirements:

```
┌──────────────────────────────────────────────────────────────────┐
│  Requirements for Level 13 (Legacy Member, King)                  │
│  Tier: Legacy · Multiplier: 3.5× · Royal Identity: King          │
├──────────────────────────────────────────────────────────────────┤
│  Personal Requirements                                            │
│  ✓ Lifetime K-Points     3,000,000 req     3,200,000 current     │
│  ✓ Active months         54 required        56 current           │
│  ✓ Personal activity     280 required       300 current          │
│  ✓ Trust Score           85 required        87 current           │
│  ✓ Active Status         Required           Active               │
│  ✓ Freedom from sanctions Required          No sanctions          │
│                                                                  │
│  Ring Requirements                                                │
│  ✓ Ring 1:  60 active, min 15 at L7+   65 active, 16 at L7+     │
│  ✓ Ring 2:  50 active, min 10 at L7+   52 active, 11 at L7+     │
│  ✓ Ring 3:  40 active, min 5 at L4+    42 active, 6 at L4+      │
│  ✓ Ring 4:  30 active, min 3 at L4+    32 active, 4 at L4+      │
│  ✓ Ring 5:  25 active, min 2 at L4+    26 active, 3 at L4+      │
│                                                                  │
│  Leadership Development                                           │
│  ✓ Min 15 Ring 1 members at L7+         16 at L7+                │
│  ✓ Executive-tier Ring 1: min 4 at L10+  5 at L10+              │
│                                                                  │
│  Summary: All requirements met ✓                                  │
│           You qualify for Level 13 and coronation eligibility!   │
│                                                                  │
│  [Promote to Level 13 →]  (Available at next cycle evaluation)   │
└──────────────────────────────────────────────────────────────────┘
```

### 19.4 Missing Requirements Focus View

When a participant asks "What should I focus on?", the dashboard provides a prioritized, constructive view:

```
┌──────────────────────────────────────────────────────────────────┐
│  What to Focus On                                                 │
├──────────────────────────────────────────────────────────────────┤
│  To qualify for Level 5, focus on:                               │
│                                                                  │
│  1. Ring 1 active members                                        │
│     You need 15 active members. You have 10.                      │
│     Gap: 5 more active members needed.                           │
│     Tip: Active members are those who engage in genuine           │
│     platform activity (commerce, services, learning).             │
│     Focus on supporting your existing network's activity.        │
│                                                                  │
│  2. Ring 2 active members                                        │
│     You need 12 active members. You have 8.                      │
│     Gap: 4 more active members needed.                           │
│                                                                  │
│  3. Ring 3 active members                                        │
│     You need 8 active members. You have 5.                       │
│     Gap: 3 more active members needed.                           │
│                                                                  │
│  You've already met all personal requirements ✓                  │
│                                                                  │
│  ──────────────────────────────────                              │
│  Remember: K-NETWORK rewards genuine contribution, not           │
│  recruitment. Focus on helping your network members stay          │
│  active and develop their own genuine activity.                  │
└──────────────────────────────────────────────────────────────────┘
```

**Focus view principles:**

| Principle | Implementation |
|---|---|
| Constructive tone | "Focus on" not "You failed" |
| Specific gaps | Shows exact numbers needed vs. current |
| Anti-recruitment | Tips emphasize genuine activity, not recruitment |
| Prioritized | Largest gaps listed first |
| Positive reinforcement | Acknowledges what's already met |
| No leaderboard | Never compares to other participants |

### 19.5 Active Status Display

Per SRS-KRW-012, Active Status has a one-cycle grace period before suspension. The dashboard shows:

| State | Display |
|---|---|
| Active | Green: "✓ Active — You meet all maintenance requirements" |
| At risk | Yellow: "⚠ At risk — [X] requirement not met this cycle. You have 1 cycle grace period." |
| Suspended | Orange: "Privileges suspended — [X] requirement not met for 2 cycles. K-Level protected, but privileges inactive." |

**Suspended state clarification:** The dashboard explicitly states: "Your K-Level is permanent and protected. Only your privileges (multiplier, benefits) are suspended. Meet the requirements in any cycle to restore full privileges." (KR-1 KR-LVL-024; SRS-KRW-011).

---

## Chapter 20 — Ring Structure Visualization

### 20.1 Visualization Overview

The ring structure visualization answers "What is my current ring structure?" (EP-KRW-004). It shows the participant's five rings with active member counts, qualification levels, and contribution to reward share.

**Design principle:** The visualization shows **quality and depth**, not just quantity. A participant with 15 active, qualified Ring 1 members sees a richer visualization than one with 500 inactive referrals. The visualization never rewards accumulation (KR-1 KR-LVL-006; KR-SRC-002).

### 20.2 Ring Visualization — Radial View

```
                    Ring 5
                  ╭─────────╮
              ╭───┤  4 act  ├───╮
              │   ╰─────────╯   │
          Ring 4               │
        ╭───────┤              │
        │ 6 act │              │
        ╰───────┯              │
    Ring 3      │              │
   ╭───────┐    │              │
   │ 9 act │    │              │
   ╰───────╯    │              │
       Ring 2   │              │
     ╭───────┐  │              │
     │13 act │  │              │
     ╰───────╯  │              │
         Ring 1 │              │
       ╭───────┐│              │
       │16 act ││              │
       │3 at L4+│              │
       ╰───────╯│              │
            [YOU]              │
```

**Radial view specifications:**

| Element | Specification |
|---|---|
| Center | Participant avatar with K-Level badge |
| Ring 1 (innermost) | Circle/ring closest to center |
| Ring 5 (outermost) | Circle/ring farthest from center |
| Each ring | Shows active member count and qualified member count |
| Ring color | Tier color of the participant |
| Qualified members | Highlighted with small K-Level badges |
| Inactive members | Shown in muted/gray |
| Interactive | Hover/tap on a ring shows detailed breakdown |

### 20.3 Ring Visualization — List View

For accessibility and detailed viewing, a list/table view is also available:

```
┌──────────────────────────────────────────────────────────────────┐
│  Ring Structure                                                    │
├──────────────────────────────────────────────────────────────────┤
│  Ring 1 (Direct network)                                          │
│  Active: 16 / Total: 42                                           │
│  Qualified leaders: 3 at L4+                                     │
│  [View members →]                                                │
│  Contribution to reward share: ████████████░░░░  High            │
├──────────────────────────────────────────────────────────────────┤
│  Ring 2 (2nd degree)                                             │
│  Active: 13 / Total: 120                                          │
│  Qualified: 0 at L4+                                              │
│  [View members →]                                                │
│  Contribution: ████████░░░░░░░░  Medium                            │
├──────────────────────────────────────────────────────────────────┤
│  Ring 3 (3rd degree)                                             │
│  Active: 9 / Total: 340                                           │
│  Qualified: 0 at L4+                                              │
│  [View members →]                                                │
│  Contribution: █████░░░░░░░░░░░  Low                               │
├──────────────────────────────────────────────────────────────────┤
│  Ring 4 (4th degree)                                             │
│  Active: 6 / Total: 850                                           │
│  [View members →]                                                │
│  Contribution: ███░░░░░░░░░░░░  Low                                │
├──────────────────────────────────────────────────────────────────┤
│  Ring 5 (5th degree)                                             │
│  Active: 4 / Total: 1,200                                         │
│  [View members →]                                                │
│  Contribution: █░░░░░░░░░░░░░░  Minimal                           │
├──────────────────────────────────────────────────────────────────┤
│  Ring weights decrease with distance. Ring 1 has the highest      │
│  weight; Ring 5 has the lowest. Active members contribute more    │
│  than inactive members. Quality (K-Level of members) matters      │
│  more than quantity.                                              │
└──────────────────────────────────────────────────────────────────┘
```

**Ring weight explanation:**

| Ring | Weight | Explanation |
|---|---|---|
| Ring 1 | Highest | Direct network — strongest influence |
| Ring 2 | High | 2nd degree — strong influence |
| Ring 3 | Medium | 3rd degree — moderate influence |
| Ring 4 | Low | 4th degree — limited influence |
| Ring 5 | Lowest | 5th degree — minimal influence |

> **Note:** Exact ring weights are GOVERNANCE PARAMETERS (KR-1 KR-RNG). The UI shows relative weights (High, Medium, Low, Minimal) rather than exact numerical values.

### 20.4 Ring Member Detail

When viewing members of a ring:

```
┌──────────────────────────────────────────────────────────────────┐
│  Ring 1 Members (16 active, 42 total)                             │
├──────────────────────────────────────────────────────────────────┤
│  [Active only ▾]  [All members]                                  │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────┐  Abdullah M.                    L4 Growth     │
│  │avatar│  Active · Trust: 68 · Joined: Jan 2026          │
│  └──────┘  [View profile →]                               │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────┐  Fatima O.                        L3 Foundation │
│  │avatar│  Active · Trust: 72 · Joined: Feb 2026          │
│  └──────┘  [View profile →]                               │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────┐  Ibrahim K.                      L2 Foundation  │
│  │avatar│  Inactive · Last active: 45 days ago             │
│  └──────┘  [View profile →]                               │
└──────────────────────────────────────────────────────────────────┘
```

**Ring member display rules:**

| Rule | Implementation |
|---|---|
| Active first | Active members sorted before inactive |
| K-Level shown | Each member's K-Level badge displayed |
| Trust shown | Each member's Trust Score displayed |
| No recruitment CTA | No "invite more" or "add members" button |
| Privacy | Members see their own ring members; ring members do not see who views them |
| Total vs active | Both counts shown; "Total" includes inactive |

### 20.5 Qualifying Ring 1 Leaders View

This view answers "Which Ring 1 members qualify as leaders?" (EP-KRW-009). It shows which Ring 1 members meet the leadership development criteria for the participant's next K-Level.

```
┌──────────────────────────────────────────────────────────────────┐
│  Qualifying Ring 1 Leaders                                        │
│  For Level 7 qualification, you need: 2 Ring 1 members at L4+    │
│  You currently have: 3 qualifying members ✓                     │
├──────────────────────────────────────────────────────────────────┤
│  Qualifying Members (3):                                          │
│  ┌──────┐  Abdullah M.     L4 Growth    ✓ Qualifies            │
│  │avatar│  Active · Trust: 68 · 55,000 lifetime K-Points        │
│  └──────┘                                                       │
│  ┌──────┐  Zainab A.        L5 Growth    ✓ Qualifies            │
│  │avatar│  Active · Trust: 74 · 12,000 lifetime K-Points        │
│  └──────┘                                                       │
│  ┌──────┐  David O.         L4 Growth    ✓ Qualifies            │
│  │avatar│  Active · Trust: 61 · 6,500 lifetime K-Points         │
│  └──────┘                                                       │
├──────────────────────────────────────────────────────────────────┤
│  Near-Qualifying (2):                                            │
│  ┌──────┐  Grace T.         L3 Foundation  500 K-Points to L4  │
│  │avatar│  Active · Trust: 70 · 4,500 lifetime K-Points         │
│  └──────┘  "Close to Growth Tier — keep supporting her!"       │
│  ┌──────┐  Michael B.       L3 Foundation  1,000 K-Points to L4 │
│  │avatar│  Active · Trust: 65 · 4,000 lifetime K-Points         │
│  └──────┘                                                       │
└──────────────────────────────────────────────────────────────────┘
```

**Qualifying leaders view principles:**

| Principle | Implementation |
|---|---|
| Shows qualifying count vs. required count | Clear gap analysis |
| Qualifying members listed first | With green checkmark |
| Near-qualifying members shown | With distance to qualification |
| Constructive encouragement | "Keep supporting her!" — not "Recruit more" |
| No recruitment CTA | No "invite" or "add" buttons |
| Focus on development | Emphasizes helping members grow, not adding more |

### 20.6 Ring Visualization — Accessibility

The radial visualization must be accessible to screen readers and keyboard users:

| Requirement | Implementation |
|---|---|
| Screen reader | List view as alternative; radial view has ARIA labels for each ring |
| Keyboard | Tab through rings; Enter to expand ring details |
| Color | Not the sole indicator; text labels accompany all colors |
| Motion | Static by default; animation only on interaction |
| Contrast | All ring labels meet WCAG 2.2 AA contrast ratios |

---

## Chapter 21 — Royal Identity UX

### 21.1 Royal Identity Overview

Royal Identity is K-NETWORK's recognition system for leadership development. It maps K-Level tiers to royal titles (KR-1 Ch.51; PLC-1 Ch.22). The username is permanent; the title changes with tier.

**Royal Identity tier mapping:**

| K-Level Tier | Levels | Royal Title | Display Format |
|---|---|---|---|
| Foundation | 1–3 | Normal | `[Username]` |
| Growth | 4–6 | Normal | `[Username]` |
| Leadership | 7–9 | Prince | `Prince [Username]` |
| Executive | 10–12 | Crown Prince | `Crown Prince [Username]` |
| Legacy | 13–15 | King | `King [Username]` |

### 21.2 Royal Identity Display

The Royal Identity is displayed wherever the participant's name appears — profiles, reviews, messages, leadership dashboards, coronation records.

#### 21.2.1 Profile Identity

```
┌─────────────────────────────────────────────┐
│                                             │
│         ╭──────────╮                        │
│         │  Avatar   │  Crown Prince Aisha    │
│         │  + Crown  │  L10 · Executive       │
│         ╰──────────╯  Team: Golden Eagles    │
│                       Trust: 87              │
│                                             │
│  [View Profile]  [Message]  [Follow]        │
└─────────────────────────────────────────────┘
```

**Crown icon by tier:**

| Tier | Crown Icon | Size | Color |
|---|---|---|---|
| Normal (L1–6) | None | — | — |
| Prince (L7–9) | Simple crown | 20px overlay on avatar | `gold.500` |
| Crown Prince (L10–12) | Ornate crown | 24px overlay on avatar | `gold.500` with subtle glow |
| King (L13–15) | Royal crown with jewels | 28px overlay on avatar | `gold.500` with pronounced glow |

#### 21.2.2 Team Identity

Per KR-1, team names are assigned at Level 7 and are unique. The team identity is displayed alongside the participant's Royal Identity:

```
┌─────────────────────────────────────────────┐
│  Team: Golden Eagles                          │
│                                             │
│  ┌──────┐  Prince Abdullah     L7  Leader   │
│  │avatar│  Trust: 58 · 16 members active    │
│  └──────┘                                   │
│                                             │
│  Team Members:                               │
│  Ring 1: 16 active                          │
│  Ring 2: 13 active                          │
│  Ring 3: 9 active                           │
│  Ring 4: 6 active                           │
│  Ring 5: 4 active                           │
│                                             │
│  Team Trust Average: 72                     │
│  Team K-Level Distribution:                 │
│  Foundation: 28 · Growth: 8 · Leadership: 3 │
│                                             │
│  [View Team Details →]                       │
└─────────────────────────────────────────────┘
```

**Team identity rules:**

| Rule | Implementation |
|---|---|
| Team name assigned at L7 | Displayed once participant reaches Leadership tier |
| Team name unique | No two participants share a team name |
| Team name requires governance approval to change | Change request shown in settings |
| Team is not a recruitment unit | No "invite to team" button; team forms organically through network structure |
| Team stats | Shows aggregate ring activity, trust average, K-Level distribution |

### 21.3 Royal Identity Badges

Royal Identity badges appear throughout the platform:

| Badge | Visual | Usage |
|---|---|---|
| Prince | Gold crown icon + "Prince" label | Next to username for L7–9 |
| Crown Prince | Ornate gold crown + "Crown Prince" label | Next to username for L10–12 |
| King | Royal crown + "King" label | Next to username for L13–15 |

**Badge placement:**

| Context | Display |
|---|---|
| Profile page | Full title display with crown icon |
| Reviews | Crown icon + title before username |
| Messages | Crown icon + title in conversation header |
| Leadership dashboard | Full title in identity section |
| Marketplace listings | Crown icon (subtle) next to vendor/provider name |
| Coronation pages | Full title with ornate styling |

### 21.4 Title History

Title transitions are recorded and displayed in the participant's profile:

```
┌──────────────────────────────────────────────────────────────────┐
│  Title History                                                     │
├──────────────────────────────────────────────────────────────────┤
│  Timeline                                                          │
│  ●  King                      Aug 2026 — Present                  │
│  │  Promoted to Level 13 (Legacy Member)                         │
│  │                                                                │
│  ●  Crown Prince              Jan 2026 — Aug 2026                │
│  │  Promoted to Level 10 (Executive Member)                      │
│  │  Title: Crown Prince Aisha                                    │
│  │                                                                │
│  ●  Prince                    Jun 2025 — Jan 2026               │
│  │  Promoted to Level 7 (Leadership Member)                      │
│  │  Title: Prince Aisha                                           │
│  │  Username assigned: Aisha (permanent)                          │
│  │  Team assigned: Golden Eagles                                  │
│  │                                                                │
│  ●  Normal                    Jan 2025 — Jun 2025               │
│     Registered at Level 1 (Foundation Member)                    │
└──────────────────────────────────────────────────────────────────┘
```

**Title history rules:**

| Rule | Implementation |
|---|---|
| Username permanent | Once assigned at L7, username never changes |
| Title changes with tier | Title updates automatically on K-Level promotion |
| History is permanent | All title transitions recorded permanently |
| Display | Timeline format with dates and context |
| Transition event | `royal.title.transitioned` event triggers UI update (SDD-1 Ch.18.7) |

### 21.5 Username Assignment

At Level 7, the participant receives a permanent username and royal title (KR-1 KR-ROY-001; SRS-ROY-001).

**Username assignment flow:**

```
Step 1: Participant qualifies for Level 7
Step 2: Promotion occurs at cycle evaluation
Step 3: Celebration screen: "Congratulations! You've achieved Leadership Tier!"
Step 4: Username assignment: "Your username [chosen at registration] is now permanent."
        "Your royal title is: Prince [Username]"
Step 5: Team assignment: "Your team name is: [Team Name]"
Step 6: Confirmation: "These are permanent. Choose wisely."
```

**Username rules:**

| Rule | Implementation |
|---|---|
| Assigned at L7 | Not before |
| Permanent | Cannot be changed after assignment |
| Unique | No two participants share a username |
| 3–30 characters | Alphanumeric + underscore |
| Displayed with title | "Prince [Username]", "Crown Prince [Username]", "King [Username]" |

---

## Chapter 22 — Coronation UX

### 22.1 Coronation Overview

Coronation is the annual recognition system for K-NETWORK leaders at Legacy Tier (Level 13–15) (KR-1 KR-LVL-047). It recognizes achievement but does not create automatic unfunded financial obligations (KR-1 KR-LVL-047).

**Coronation eligibility (KR-1 KR-LVL-048):**

1. Be at Legacy Tier (Level 13–15)
2. Have maintained Active Status for the entire coronation year
3. Meet the trust requirement for their K-Level
4. Not be under any active sanction
5. Meet any additional coronation-specific criteria defined by governance

### 22.2 Annual Coronation Event

The coronation event is an annual celebration recognizing Legacy Tier leaders. The UX creates a sense of occasion and prestige without excess.

#### 22.2.1 Coronation Landing Page

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│              ✦ ANNUAL CORONATION 2026 ✦                         │
│                                                                  │
│         Celebrating K-NETWORK's Finest Leaders                   │
│                                                                  │
│    [Hero banner with gold and primary colors,                    │
│     ornate crown motif, subtle particle animation]               │
│                                                                  │
│    The Annual Coronation recognizes Legacy Tier leaders          │
│    who have demonstrated exceptional leadership development,     │
│    community impact, and genuine contribution.                   │
│                                                                  │
│    [View Candidates →]  [Historical Archive →]                  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  This Year's Ceremony                                            │
│  Date: December 15, 2026                                        │
│  Candidates: 24 Kings and Queens                                 │
│  Recognition Categories: 5                                       │
│                                                                  │
│  [Learn about coronation →]                                     │
└──────────────────────────────────────────────────────────────────┘
```

**Coronation landing page specifications:**

| Element | Specification |
|---|---|
| Color scheme | Gold and primary, with subtle dark backgrounds for contrast |
| Typography | `display` for title, `h2` for section headers |
| Animation | Subtle particle effect (gold motes), respects `prefers-reduced-motion` |
| Crown motif | Ornate crown graphic, gold gradient |
| Tone | Celebratory but dignified, not flashy |

### 22.3 Candidate Recognition

Coronation candidates are Legacy Tier leaders who meet eligibility criteria. Their recognition is displayed with dignity.

#### 22.3.1 Candidate List

```
┌──────────────────────────────────────────────────────────────────┐
│  Coronation Candidates 2026                                       │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────┐  King Aisha                                          │
│  │avatar│  L13 · Legacy Member · Team: Golden Eagles            │
│  │+Crown │  Trust: 87 · 65 active Ring 1 · 16 at L7+           │
│  └──────┘  Recognition: Leadership Excellence                   │
│            [View recognition page →]                             │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────┐  King Zara                                           │
│  │avatar│  L14 · Legacy Builder · Team: Silver Lions            │
│  │+Crown │  Trust: 92 · 78 active Ring 1 · 21 at L7+           │
│  └──────┘  Recognition: Community Impact                        │
│            [View recognition page →]                             │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────┐  King Chidi                                          │
│  │avatar│  L13 · Legacy Member · Team: Bronze Hawks            │
│  │+Crown │  Trust: 85 · 62 active Ring 1 · 15 at L7+           │
│  └──────┘  Recognition: Mentorship                              │
│            [View recognition page →]                             │
└──────────────────────────────────────────────────────────────────┘
```

### 22.4 Digital Invitations

Coronation-eligible participants receive digital invitations:

```
┌──────────────────────────────────────────────────────────────────┐
│  ✦ You're Invited ✦                                              │
│                                                                  │
│         [Ornate crown graphic]                                   │
│                                                                  │
│    King Aisha,                                                   │
│                                                                  │
│    You are cordially invited to the                              │
│    Annual Coronation Ceremony 2026                               │
│                                                                  │
│    In recognition of your achievement of                         │
│    Legacy Tier (Level 13)                                        │
│    and your outstanding leadership development                   │
│                                                                  │
│    December 15, 2026                                             │
│    [Virtual ceremony details]                                    │
│                                                                  │
│    [Accept Invitation]  [View Details]                          │
│                                                                  │
│    Recognition: Leadership Excellence                             │
└──────────────────────────────────────────────────────────────────┘
```

**Digital invitation specifications:**

| Element | Specification |
|---|---|
| Design | Gold and primary colors, ornate border, crown motif |
| Personalization | Participant's royal title and name |
| Recognition category | Specific recognition (Leadership Excellence, Community Impact, etc.) |
| Ceremony details | Date, format (virtual/in-person), schedule |
| Accept | RSVP confirmation; adds to calendar |
| Share | Optional share to social media (with participant consent) |

### 22.5 Coronation Certificates

Coronation certificates are formal recognition documents (KR-1 KR-LVL-052):

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│              ✦ K-NETWORK ✦                                      │
│         Royal Coronation Certificate                              │
│                                                                  │
│    This certifies that                                          │
│                                                                  │
│         King Aisha                                               │
│         Team: Golden Eagles                                      │
│                                                                  │
│    has been recognized at the                                   │
│    Annual Coronation 2026                                        │
│                                                                  │
│    for                                            |
│         Leadership Excellence                                    │
│                                                                  │
│    in developing qualified leaders and contributing              │
│    to the K-NETWORK ecosystem                                    │
│                                                                  │
│    Level: 13 (Legacy Member)                                    │
│    Date: December 15, 2026                                      │
│    Certificate ID: KNET-COR-2026-001                            │
│                                                                  │
│    [K-NETWORK Royal Seal]                     [Verify ↗]         │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Certificate specifications:**

| Property | Value |
|---|---|
| Design | Premium gold, ornate border, royal seal |
| Verification | Public verification URL |
| Download | PDF download |
| Share | LinkedIn, copy link |
| Permanence | Permanent record (KR-1 KR-LVL-054) |

### 22.6 Recognition Pages

Each coronation recipient has a public recognition page:

```
┌──────────────────────────────────────────────────────────────────┐
│  [Royal banner with crown motif]                                  │
├──────────────────────────────────────────────────────────────────┤
│  ╭──────╮                                                        │
│  │Avatar │  King Aisha                                           │
│  │+Crown │  L13 · Legacy Member · Team: Golden Eagles           │
│  ╰──────╯  Coronation 2026 · Leadership Excellence              │
│                                                                  │
│  Recognition                                                      │
│  ──────────                                                      │
│  Aisha has been recognized for outstanding leadership             │
│  development, having developed 16 Ring 1 members at              │
│  Leadership Tier (L7+), of which 5 have progressed to            │
│  Executive Tier (L10+).                                          │
│                                                                  │
│  Achievement Summary                                              │
│  ────────────────                                                │
│  K-Level: 13 (Legacy Member)                                     │
│  Lifetime K-Points: 3,200,000                                    │
│  Active months: 56                                                │
│  Trust Score: 87                                                  │
│  Ring 1 leaders developed: 16 at L7+                             │
│  Executive-tier leaders: 5 at L10+                               │
│  Coronation year: 2026                                           │
│                                                                  │
│  [Download Certificate]  [Share]  [Verify]                       │
└──────────────────────────────────────────────────────────────────┘
```

### 22.7 Historical Coronation Archive

The coronation archive preserves permanent historical records (KR-1 KR-LVL-054):

```
┌──────────────────────────────────────────────────────────────────┐
│  Coronation Archive                                                │
├──────────────────────────────────────────────────────────────────┤
│  [2026 ▾]  [All Categories ▾]                                    │
├──────────────────────────────────────────────────────────────────┤
│  2026 Coronation                                                  │
│  December 15, 2026 · 24 recipients                               │
│  [View ceremony →]                                                │
│                                                                  │
│  2025 Coronation                                                  │
│  December 15, 2025 · 18 recipients                               │
│  [View ceremony →]                                                │
│                                                                  │
│  2024 Coronation                                                  │
│  December 15, 2024 · 12 recipients                               │
│  [View ceremony →]                                                │
└──────────────────────────────────────────────────────────────────┘
```

**Archive specifications:**

| Element | Specification |
|---|---|
| Year filter | Dropdown to select coronation year |
| Category filter | Filter by recognition category |
| Ceremony view | Full list of recipients for that year |
| Recipient detail | Links to individual recognition pages |
| Permanence | Archive is permanent; records are never deleted |
| Search | Search archive by name, team, or year |

### 22.8 Coronation Recognition Categories

Per KR-1 KR-LVL-051, coronation recognition categories include:

| Category | Description |
|---|---|
| Leadership Excellence | Outstanding leadership development |
| Community Impact | Outstanding community contribution |
| Platform Growth | Outstanding contribution to platform growth |
| Mentorship | Outstanding mentorship of developing leaders |
| Innovation | Outstanding innovation in platform use |

---

# Part VI — Wallet, Communication, and Notifications UX

## Chapter 23 — Wallet and Payments UX

### 23.1 Wallet Overview

The K-NETWORK wallet is the participant's financial hub. It shows four balance types, transaction history, deposits, withdrawals, and settlements. Per SDD-1 Ch.11 and SDD-1 Ch.20.10, wallet balances are **never cached** — the UI always fetches fresh data. The wallet UI must never show stale balances.

### 23.2 Wallet Dashboard

```
┌──────────────────────────────────────────────────────────────────┐
│  My Wallet                                                        │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐ ┌──────────────────┐                     │
│  │ Settlement Balance│ │ Reward Balance    │                     │
│  │ $1,245.30         │ │ $84.20            │                     │
│  │ From sales/services│ │ From K-Rewards   │                     │
│  └──────────────────┘ └──────────────────┘                     │
│  ┌──────────────────┐ ┌──────────────────┐                     │
│  │ Deposit Balance   │ │ Escrow Balance    │                     │
│  │ $500.00           │ │ $120.00           │                     │
│  │ Added funds       │ │ Held for services │                     │
│  └──────────────────┘ └──────────────────┘                     │
│                                                                  │
│  Total Balance: $1,949.50                                        │
│  [Deposit]  [Withdraw]  [Transaction History]                   │
├──────────────────────────────────────────────────────────────────┤
│  Recent Transactions                                              │
│  ────────────────────                                            │
│  ↗ Withdrawal to bank         -$200.00   Aug 26   COMPLETED      │
│  ↘ Reward distribution        +$11.21    Aug 03   COMPLETED      │
│  ↘ Product sale settlement   +$99.99    Aug 02   COMPLETED      │
│  ↗ Course enrollment         -$49.99    Jul 28   COMPLETED      │
│  ↘ Deposit from bank          +$500.00   Jul 25   COMPLETED      │
│                                                                  │
│  [View all transactions →]                                       │
└──────────────────────────────────────────────────────────────────┘
```

**Wallet balance types** (SDD-1 Ch.11):

| Balance Type | Source | Usage |
|---|---|---|
| Settlement Balance | Revenue from commerce sales and service contracts | Withdrawable |
| Reward Balance | K-Rewards distribution | Withdrawable |
| Deposit Balance | Funds added by participant (bank, mobile money) | Spendable on platform |
| Escrow Balance | Funds held for pending service contracts | Released on milestone completion |

**Wallet display rules:**

| Rule | Implementation |
|---|---|
| Always live | No cached balances; always fetch fresh (SDD-1 Ch.20.10) |
| Four balances shown | Each balance type displayed separately |
| Total balance | Sum of all four balance types |
| Currency | Participant's selected currency; multi-currency support (SRS-SVC-017) |
| Money format | String decimal, 2 places, currency-prefixed (never float) |
| Last updated | Timestamp of last balance fetch |
| Loading | Skeleton placeholders during fetch (never stale data) |

### 23.3 Transaction History

```
┌──────────────────────────────────────────────────────────────────┐
│  Transaction History                                              │
│  [All ▾] [Type ▾] [Date range ▾] [Export CSV]                   │
├──────────────────────────────────────────────────────────────────┤
│  Date        Type           Description              Amount      │
│  ─────────  ────────────  ──────────────────────  ──────────  │
│  Aug 26     WITHDRAWAL    To bank ****1234         -$200.00    │
│  Aug 03     REWARD        July cycle distribution   +$11.21    │
│  Aug 02     SETTLEMENT    Product sale #1000001     +$99.99    │
│  Jul 28     PAYMENT       Course enrollment         -$49.99    │
│  Jul 25     DEPOSIT       From bank ****1234        +$500.00    │
│  Jul 20     SETTLEMENT    Service contract #CTC-001 +$120.00   │
├──────────────────────────────────────────────────────────────────┤
│  Showing 1–6 of 48 transactions         [Load more]              │
└──────────────────────────────────────────────────────────────────┘
```

**Transaction history features:**

| Feature | Implementation |
|---|---|
| Filters | By type (deposit, withdrawal, settlement, reward, payment), date range |
| Export | CSV download for accounting |
| Transaction detail | Click row to view full detail |
| Pagination | Cursor-based, "Load more" pattern |
| Search | Text search on descriptions |

**Transaction types:**

| Type | Icon | Direction | Description |
|---|---|---|---|
| DEPOSIT | ↘ down | Inbound | Funds added from external source |
| WITHDRAWAL | ↗ up | Outbound | Funds sent to external source |
| SETTLEMENT | 📦 | Inbound | Revenue from sales/services |
| REWARD | 👑 | Inbound | K-Rewards distribution |
| PAYMENT | 🛒 | Outbound | Marketplace/service/learning payment |
| ESCROW_HOLD | 🔒 | Outbound | Funds held for service contract |
| ESCROW_RELEASE | 🔓 | Inbound | Funds released from escrow |
| REFUND | ↩ | Inbound | Refund from return/cancellation |
| REVERSAL | ↺ | Varies | Reversed transaction |

### 23.4 Deposit Flow

```
Step 1: Select deposit method
        ○ Bank transfer
        ○ Mobile money (M-Pesa, MTN, Airtel)
        ○ Card payment

Step 2: Enter amount
        Amount: [$______]
        Currency: [USD ▾]

Step 3: Method-specific details
        Bank transfer: Show bank details + reference code
        Mobile money: Enter phone number + confirm
        Card: Enter card details

Step 4: Confirmation
        "Deposit of $500.00 initiated via [method]"

Step 5: Processing
        Bank transfer: "Funds will appear within 1-3 business days"
        Mobile money: "Processing..." → immediate
        Card: "Processing..." → immediate or 3D Secure redirect
```

**Deposit display rules:**

| Rule | Implementation |
|---|---|
| KYC gating | Deposits require Tier 2 verification (SRS-IDM-005) |
| Amount validation | Min/max per method; currency-specific |
| Reference code | Unique code for bank transfers |
| Status tracking | PENDING → PROCESSING → COMPLETED / FAILED |
| Failure handling | Clear error with retry (SRS-WAL-004) |
| Idempotency | Prevents duplicate deposits (SDD-1 Ch.3) |

### 23.5 Withdrawal Flow

Per SRS-WAL-003, withdrawals require MFA. The withdrawal flow is designed to be secure and transparent.

```
Step 1: Enter withdrawal details
        Amount: [$______]
        From balance: [Settlement ▾] (shows available balance)
        To: [Bank account ****1234 ▾]  [Add new account]

Step 2: Review
        Withdrawal amount: $200.00
        From: Settlement Balance ($1,245.30)
        To: Bank Account ****1234
        Fee: $0.00
        You will receive: $200.00
        Processing time: 1-3 business days

Step 3: MFA challenge
        "Enter your 6-digit verification code"
        [ ] [ ] [ ] [ ] [ ] [ ]
        [Verify]

Step 4: Confirmation
        "Withdrawal of $200.00 initiated"
        "Funds will arrive in 1-3 business days"
        Transaction ID: tx-003e8400...
        [Done]
```

**Withdrawal display rules:**

| Rule | Implementation |
|---|---|
| MFA required | Mandatory for all withdrawals (SRS-WAL-003) |
| KYC gating | Withdrawals require Tier 2 verification |
| Balance check | Cannot withdraw more than available |
| Fee transparency | All fees shown before confirmation |
| Processing time | Clearly communicated |
| Status tracking | PENDING → PROCESSING → COMPLETED / FAILED / REVERSED |
| Idempotency | Prevents duplicate withdrawals |

### 23.6 Settlement Display

Settlements (vendor/provider-facing) show the participant's share without exposing internal 90/10 allocation details (API-1 Ch.7, Ch.8):

```
┌──────────────────────────────────────────────────────────────────┐
│  Settlements                                                      │
├──────────────────────────────────────────────────────────────────┤
│  Order #1000001 · August 26, 2026                               │
│  Gross revenue: $189.98                                          │
│  Deductions: $5.00                                               │
│  Qualifying economic value: $184.98                              │
│  Your share (vendor): $110.99                                    │
│  Reserve: $18.50                                                  │
│  Status: SETTLED                                                  │
│  [View detail →]                                                 │
└──────────────────────────────────────────────────────────────────┘
```

> **Note:** Vendor/provider-facing settlement views show only: gross_revenue, deductions, qualifying_economic_value, vendor_amount (their share), reserve_amount, and status. Internal allocation details (platform, reward_pool, leadership, operational amounts) are admin-only and never shown to vendors/providers (API-1 Ch.15).

---

## Chapter 24 — Notifications and Messaging UX

### 24.1 Notification System Overview

Per SRS-MSG-001, K-NETWORK delivers notifications across three channels: in-app, email, and push (mobile). Participants can configure preferences per channel and per event type.

### 24.2 Notification Panel

The notification panel is accessible from the bell icon in the navigation bar:

```
┌──────────────────────────────────────────────────────────────────┐
│  Notifications                            [Mark all read] [⚙]   │
├──────────────────────────────────────────────────────────────────┤
│  ● Order shipped                    2 min ago                   │
│    Your order #1000001 has been shipped.                        │
│    [Track →]                                                     │
│  ──────────────────────────────────────                         │
│  ● New message from Sarah O.        1 hour ago                 │
│    "Hi! I've sent the initial concepts..."                      │
│    [Reply →]                                                    │
│  ──────────────────────────────────────                         │
│  ● K-Level promotion!               2 hours ago                 │
│    Congratulations! You've been promoted to Level 5.           │
│    [View dashboard →]                                           │
│  ──────────────────────────────────────                         │
│  ○ Reward distributed               1 day ago                   │
│    Your July reward of $11.21 has been sent to your wallet.    │
│  ──────────────────────────────────────                         │
│  ○ Certificate earned               2 days ago                  │
│    You completed "Digital Marketing Essentials."                │
│    [View certificate →]                                         │
│  ──────────────────────────────────────                         │
│  [View all notifications →]                                      │
└──────────────────────────────────────────────────────────────────┘
```

**Notification panel specifications:**

| Element | Specification |
|---|---|
| Bell icon | Navigation bar, with unread count badge |
| Unread indicator | Blue dot (●) for unread, no dot (○) for read |
| Panel width | 400px (desktop), full-width sheet (mobile) |
| Max visible | 5 most recent, with "View all" link |
| Mark all read | Button at top |
| Settings | Gear icon links to notification preferences |
| Auto-refresh | WebSocket updates in real-time (SDD-1 Ch.12) |

### 24.3 Notification Types

| Type | Icon | Event Examples |
|---|---|---|
| Order | 📦 | Order placed, shipped, delivered, returned |
| Booking | 📅 | Booking confirmed, reminder, cancelled |
| Contract | 📋 | Proposal accepted, milestone delivered, milestone accepted |
| Message | ✉️ | New message from vendor/provider/instructor |
| Reward | 👑 | K-Level promotion, reward distributed, cycle started |
| Coronation | ✦ | Coronation invitation, recognition announced |
| Certificate | 🏆 | Certificate earned |
| Announcement | 📢 | Platform-wide or targeted announcement |
| Payment | 💰 | Payment received, withdrawal processed |
| System | ⚙️ | Security alert, maintenance notice, feature update |
| Security | 🔒 | New login, suspicious activity, MFA change |

### 24.4 Notification Preferences

Per SRS-MSG-001, participants configure preferences per channel and per event type:

```
┌──────────────────────────────────────────────────────────────────┐
│  Notification Preferences                                         │
├──────────────────────────────────────────────────────────────────┤
│  Event Type              In-App   Email   Push                  │
│  ────────────────────  ───────  ──────  ─────                  │
│  Order updates            ☑        ☑       ☑                    │
│  Booking updates          ☑        ☑       ☑                    │
│  Contract updates          ☑        ☐       ☑                    │
│  Messages                 ☑        ☐       ☑                    │
│  Reward cycle updates      ☑        ☑       ☐                    │
│  K-Level changes           ☑        ☑       ☑                    │
│  Coronation updates        ☑        ☑       ☐                    │
│  Certificates              ☑        ☐       ☐                    │
│  Announcements             ☑        ☑       ☐                    │
│  Payment notifications     ☑        ☑       ☑                    │
│  Security alerts           ☑        ☑       ☑                    │
│                                                                  │
│  [Save preferences]                                              │
│                                                                  │
│  Note: Security alerts cannot be fully disabled.                  │
└──────────────────────────────────────────────────────────────────┘
```

**Preference rules:**

| Rule | Implementation |
|---|---|
| Per channel per event | Three toggles per event type |
| Security alerts | Cannot be fully disabled (at least in-app required) |
| Changes apply within 5 minutes | SDD-1 Ch.20.10 (notification preferences cached 5min) |
| Granular | 11 event types, 3 channels = 33 configurable settings |

### 24.5 Messaging UX

Per SRS-MSG-002, participant-to-participant messaging occurs within context (order, contract, course).

#### 24.5.1 Message List

```
┌──────────────────────────────────────────────────────────────────┐
│  Messages                                                        │
├──────────────────────────────────────────────────────────────────┤
│  ● Sarah O. · Logo Design project         1h ago               │
│    "I've sent the initial concepts..."                           │
│    📎 1 attachment                                                │
│  ──────────────────────────────────────                         │
│  ○ TechHub · Order #1000001              5h ago               │
│    "Your order has been shipped!"                                │
│  ──────────────────────────────────────                         │
│  ○ Prof. Adebayo · Marketing Course       1d ago               │
│    "Great question! Let me explain..."                           │
└──────────────────────────────────────────────────────────────────┘
```

#### 24.5.2 Conversation View

```
┌──────────────────────────────────────────────────────────────────┐
│  [← Back]  Sarah O. ✓ Verified                                   │
│  Context: Logo Design (Contract #CTC-001)                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────┐                   │
│  │ Sarah O.                        1h ago   │                   │
│  │ Hi! I've sent the initial concepts for    │                   │
│  │ your review. Let me know your thoughts.   │                   │
│  │ 📎 concepts_v1.pdf                        │                   │
│  └──────────────────────────────────────────┘                   │
│                          ┌──────────────────────────────────┐  │
│                          │ You                    45m ago   │  │
│                          │ These look great! I really       │  │
│                          │ like concept #2. Can we refine  │  │
│                          │ that direction?                 │  │
│                          └──────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐                   │
│  │ Sarah O.                        30m ago  │                   │
│  │ Absolutely! I'll have revisions by       │                   │
│  │ tomorrow.                                 │                   │
│  └──────────────────────────────────────────┘                   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  [Type a message...]                              [📎] [Send]   │
└──────────────────────────────────────────────────────────────────┘
```

**Messaging specifications:**

| Element | Specification |
|---|---|
| Context banner | Shows what conversation relates to (order, contract, course) |
| Bubble alignment | Other person: left; You: right |
| Attachments | File attachments shown inline with download link |
| Timestamps | Relative time per message |
| Read receipts | Optional double-checkmark for read messages |
| Input area | Text input + attachment button + send button |
| Real-time | WebSocket delivers new messages instantly |
| Content policy | Abuse prevention; messages subject to moderation |
| Access control | Only conversation participants can view messages |

### 24.6 Announcements

Per SRS-MSG-003, platform-wide and targeted announcements are governance-approved:

```
┌──────────────────────────────────────────────────────────────────┐
│  📢 K-NETWORK Announcement                                       │
│  ──────────────────────────────                                  │
│  New: Learning Marketplace Launch                                │
│                                                                  │
│  We're excited to announce the launch of our new Learning       │
│  Marketplace! Browse courses from top instructors across         │
│  business, technology, design, and more.                        │
│                                                                  │
│  [Explore courses →]     [Dismiss]                              │
│                                                                  │
│  Posted by K-NETWORK Team · August 26, 2026                     │
└──────────────────────────────────────────────────────────────────┘
```

**Announcement display rules:**

| Rule | Implementation |
|---|---|
| Governance approval | Only governance-approved announcements are shown |
| Targeting | By role, tier, region, or segment |
| Dismissible | Participant can dismiss (remembers dismissal) |
| Action button | Optional CTA link |
| Banner style | Distinct from regular notifications |

### 24.7 Notification Delivery States

Notifications follow a state model (SDD-1 Ch.12.3.1):

| State | Meaning | UI Behavior |
|---|---|---|
| PENDING | Created, not yet delivered | Not visible to participant |
| DELIVERED | Delivered to channel, not seen | Unread indicator (●) |
| READ | Participant has seen | Read state (no dot) |
| DISMISSED | Participant dismissed | Removed from list |

**WebSocket reconnection:** If WebSocket disconnects, the UI fetches undelivered notifications (PENDING/DELIVERED but not READ) on reconnect.

---

# Part VII — Administration and Partner UX

## Chapter 25 — Administration UX

### 25.1 Admin Console Overview

The admin console is a separate SPA for platform administrators, governance body members, compliance officers, and security officers (SAD-1 Ch.6). It has its own navigation, authentication, and access controls, but uses the same design system.

### 25.2 Admin Console Layout

```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo]  Admin Console                          [Admin Name] [⚙] │
├────────────┬─────────────────────────────────────────────────────┤
│            │                                                     │
│  Sidebar   │  Main content area                                  │
│            │                                                     │
│  • Overview│                                                     │
│  • Governance│                                                   │
│  • Moderation│                                                   │
│  • Disputes  │                                                   │
│  • Sanctions │                                                   │
│  • Compliance│                                                   │
│  • Appeals   │                                                   │
│  • Analytics │                                                   │
│  • 90/10 Acct│                                                   │
│  • Users     │                                                   │
│  • Settings  │                                                   │
│            │                                                     │
└────────────┴─────────────────────────────────────────────────────┘
```

### 25.3 Governance Review UX

Per SRS-ADM-001, governance reviews are a core admin function.

```
┌──────────────────────────────────────────────────────────────────┐
│  Governance Reviews                        [New Review +]       │
├──────────────────────────────────────────────────────────────────┤
│  [All ▾] [Status ▾] [Type ▾] [Date ▾]                          │
├──────────────────────────────────────────────────────────────────┤
│  GR-2026-014  Policy amendment       PENDING   Aug 26   [Review]│
│  GR-2026-013  Reserve release        APPROVED  Aug 25   [View]  │
│  GR-2026-012  Sanction appeal        REJECTED  Aug 24   [View]  │
│  GR-2026-011  Feature deprecation    APPROVED  Aug 20   [View]  │
└──────────────────────────────────────────────────────────────────┘
```

**Governance review detail:**

```
┌──────────────────────────────────────────────────────────────────┐
│  Governance Review GR-2026-014                                   │
│  Type: Policy amendment    Status: PENDING                       │
│  Submitted: Aug 26, 2026   Submitted by: [Admin]                │
├──────────────────────────────────────────────────────────────────┤
│  Description                                                      │
│  Proposed amendment to K-Points category caps for Commerce       │
│  category, increasing monthly cap from 500 to 750.              │
│                                                                  │
│  Rationale                                                       │
│  Increased marketplace activity warrants higher cap to           │
│  maintain incentive alignment.                                   │
│                                                                  │
│  Impact Assessment                                               │
│  Affects: K-Points accrual for commerce transactions             │
│  Risk: Low                                                       │
│  Economic impact: +$2,000/month in reward pool contributions    │
│                                                                  │
│  Decision                                                        │
│  ○ Approve   ○ Reject   ○ Request changes                        │
│  Comments: [──────────────────────────]                         │
│  [Submit Decision]                                               │
└──────────────────────────────────────────────────────────────────┘
```

### 25.4 Moderation UX

Moderation covers content review — product listings, reviews, messages, course content.

```
┌──────────────────────────────────────────────────────────────────┐
│  Moderation Queue                            [Filter ▾]         │
├──────────────────────────────────────────────────────────────────┤
│  Flagged Content                                                  │
│  ────────────────                                                │
│  ● Product listing: "Wireless Earbuds"     Flagged: misleading  │
│    by TechHub · Aug 26 · Auto-flagged (price mismatch)          │
│    [Review →] [Approve] [Remove] [Request changes]              │
│  ──────────────────────────────────────                         │
│  ● Review: "This product is terrible..."  Flagged: abusive      │
│    on Product #88f1 · Aug 25 · User-reported (3 reports)        │
│    [Review →] [Approve] [Remove] [Warn user]                    │
│  ──────────────────────────────────────                         │
│  ● Course: "Make $10,000 in 24 hours"      Flagged: misleading  │
│    by Instructor X · Aug 24 · Auto-flagged (title pattern)      │
│    [Review →] [Approve] [Remove] [Request changes]              │
└──────────────────────────────────────────────────────────────────┘
```

### 25.5 Dispute Resolution UX

Admin dispute resolution shows both parties' perspectives:

```
┌──────────────────────────────────────────────────────────────────┐
│  Dispute #DSP-0042                                               │
│  Type: Item not as described    Status: UNDER_REVIEW            │
│  Order: #1000001    Opened: Aug 26, 2026                       │
├──────────────────────────────────────────────────────────────────┤
│  Customer (Buyer)             Vendor (Seller)                   │
│  ────────────────            ──────────────                    │
│  "The earbuds don't match     "The product matches the         │
│  the description — they're     description exactly. The         │
│  a different model."            customer ordered the wrong      │
│                                model."                           │
│  Evidence:                    Evidence:                          │
│  📷 photo1.jpg                📷 product_listing.jpg            │
│  📷 photo2.jpg                                                  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  Resolution                                                      │
│  ○ Full refund to customer                                      │
│  ○ Partial refund ($___)                                        │
│  ○ Return approved (customer ships back)                        │
│  ○ No action (favor vendor)                                     │
│                                                                  │
│  Resolution notes: [──────────────────────────]                 │
│  [Submit Resolution]                                             │
│                                                                  │
│  Both parties will be notified. Customer can appeal.             │
└──────────────────────────────────────────────────────────────────┘
```

### 25.6 Sanctions UX

Per SRS-ADM-008, no single automated flag results in a sanction. Multi-signal corroboration is required. Due process includes investigation, determination, and appeal opportunity.

```
┌──────────────────────────────────────────────────────────────────┐
│  Sanctions                                                       │
├──────────────────────────────────────────────────────────────────┤
│  Active Sanctions                                                │
│  ────────────────                                                │
│  Participant: Ibrahim K.    Sanction: SUSPENDED                  │
│  Reason: Fake account creation (2 corroborating signals)        │
│  Imposed: Aug 20, 2026    Duration: 30 days                    │
│  Appeal status: Available                                       │
│  [View details →] [Lift sanction]                              │
│  ──────────────────────────────────────                         │
│  Participant: FakeStore99   Sanction: BANNED                    │
│  Reason: Fraudulent transactions (5 corroborating signals)     │
│  Imposed: Aug 15, 2026    Duration: Permanent                   │
│  Appeal status: Expired                                        │
│  [View details →]                                               │
└──────────────────────────────────────────────────────────────────┘
```

**Sanction principles in UI:**

| Principle | Implementation |
|---|---|
| Multi-signal | Shows number of corroborating signals |
| Due process | Investigation → Determination → Appeal |
| No collateral harm | Only the fraudulent participant is sanctioned (KR-GOV-030) |
| Appeal rights | Non-waivable, never conditioned on payment (SRS-ADM-006) |
| False positive reversal | Standing, Trust Score, K-Points restored (SRS-TRU-004) |

### 25.7 Compliance Dashboard

```
┌──────────────────────────────────────────────────────────────────┐
│  Compliance Dashboard                                             │
├──────────────────────────────────────────────────────────────────┤
│  KYC Verification Status                                          │
│  Pending reviews: 23      Completed today: 45                   │
│  Average review time: 18 hours                                   │
│  [Review pending →]                                              │
│                                                                  │
│  AML Monitoring                                                   │
│  Active alerts: 3        Cleared this month: 67                 │
│  [Review alerts →]                                               │
│                                                                  │
│  Data Protection                                                  │
│  Data access requests: 5   Completed: 4   Pending: 1          │
│  Deletion requests: 2     Completed: 2                         │
│  [Review requests →]                                             │
│                                                                  │
│  Sanctions Screen                                                 │
│  Active sanctions: 12     Appeals pending: 2                   │
│  [View sanctions →] [Review appeals →]                          │
│                                                                  │
│  Compliance Flags                                                 │
│  KYC flags: 8   AML flags: 3   Data protection flags: 1        │
│  [Review flags →]                                               │
└──────────────────────────────────────────────────────────────────┘
```

### 25.8 90/10 Accounting UX (Admin Only)

The 90/10 accounting dashboard is admin-only (API-1 Ch.15). It shows the full internal financial breakdown:

```
┌──────────────────────────────────────────────────────────────────┐
│  90/10 Accounting (Admin Only)                                   │
├──────────────────────────────────────────────────────────────────┤
│  Current Cycle: August 2026                                      │
│  ──────────────────────                                          │
│  Total Gross Revenue: $500,000.00                                │
│  Total Deductions: $25,000.00                                   │
│  Total QEV: $475,000.00                                          │
│  Total Allocation Pool (90%): $427,500.00                       │
│  Total Reserve (10%): $47,500.00                                │
│                                                                  │
│  Verification: AP + R = QEV ✓ ($427,500 + $47,500 = $475,000)  │
│                                                                  │
│  Allocation Breakdown:                                           │
│  Vendor/Provider:     $262,675.00  (61.4% of AP)               │
│  Platform:             $90,725.00  (21.2% of AP)               │
│  Reward Pool:          $40,185.00   (9.4% of AP)               │
│  Leadership:           $24,130.00   (5.6% of AP)               │
│  Operational:           $9,785.00   (2.3% of AP)               │
│                                                                  │
│  Reward Pool Status:                                             │
│  Size: $40,185.00   Distributed: $30,000.00                     │
│  Undistributed: $10,185.00 (carried forward)                    │
│                                                                  │
│  [View allocations →] [View settlements →] [View reconciliations→]│
│  [View reserve →]   [View reward pool →]                        │
└──────────────────────────────────────────────────────────────────┘
```

> **Security Note:** This dashboard is accessible only to admin roles with `economy:read` scope. The 90/10 breakdown is never exposed to vendors, providers, or regular participants (API-1 Ch.15).

### 25.9 Analytics Dashboard

```
┌──────────────────────────────────────────────────────────────────┐
│  Platform Analytics                                               │
├──────────────────────────────────────────────────────────────────┤
│  [Overview] [Commerce] [Services] [Learning] [K-Rewards] [Users] │
├──────────────────────────────────────────────────────────────────┤
│  Key Metrics (This Month)                                        │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │ Active Users  │ │ Transactions │ │ K-Points     │            │
│  │ 45,200 ↑12%  │ │ 12,400 ↑8%  │ │ 1.2M ↑15%   │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │ GMV          │ │ Trust Avg    │ │ Completion   │            │
│  │ $890K ↑10%  │ │ 72.3 ↑2%     │ │ 68% ↑5%     │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
│                                                                  │
│  [📈 Revenue trend chart]                                       │
│  [📊 User growth chart]                                         │
│  [📋 Top categories table]                                      │
│  [🗺 Geographic distribution map]                                │
└──────────────────────────────────────────────────────────────────┘
```

---

## Chapter 26 — Partner Integration UX

### 26.1 Partner Dashboard Overview

The partner dashboard is for external companies integrating with K-NETWORK via the Integration Engine. Partners use OAuth/OIDC, API keys, and webhooks (API-1 Ch.13).

```
┌──────────────────────────────────────────────────────────────────┐
│  Partner Dashboard — Acme Integration                           │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │ API Calls    │ │ Webhooks     │ │ Rate Limit   │            │
│  │ 12,450 today │ │ 8 active     │ │ 500/min     │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
│                                                                  │
│  [API Keys]  [Webhooks]  [OAuth Apps]  [Usage]  [Settings]      │
└──────────────────────────────────────────────────────────────────┘
```

### 26.2 API Key Management

```
┌──────────────────────────────────────────────────────────────────┐
│  API Keys                                    [Create Key +]     │
├──────────────────────────────────────────────────────────────────┤
│  Name            Key (masked)        Scopes      Created   Status│
│  ────────────  ──────────────────  ──────────  ────────  ──────│
│  Production     sk-prod-****-****    commerce:rw  Jan 2026  ●  │
│  Staging        sk-stg-****-****     commerce:r   Feb 2026  ●  │
│  Analytics      sk-anl-****-****     analytics:r  Mar 2026  ●  │
│                                                                  │
│  [View] [Rotate] [Revoke]                                        │
└──────────────────────────────────────────────────────────────────┘
```

**API key creation:**

```
Step 1: Name the key
Step 2: Select scopes (commerce:read, commerce:write, services:read, etc.)
Step 3: Set expiration (optional)
Step 4: Generate → Key shown ONCE (copy and store securely)
Step 5: Confirm stored
```

> **Security:** API keys are shown in full only once at creation. After that, only a masked version is displayed. Keys can be rotated (old key deactivated, new key generated) and revoked.

### 26.3 Webhook Configuration

```
┌──────────────────────────────────────────────────────────────────┐
│  Webhooks                                    [Add Endpoint +]   │
├──────────────────────────────────────────────────────────────────┤
│  Endpoint                   Events              Status    Delivery│
│  ────────────────────────  ──────────────────  ────────  ────────│
│  https://acme.com/wh/      order.created        Active   99.8%  │
│                             order.shipped                         │
│  https://acme.com/wh/pay   payment.completed     Active   100%   │
│  https://acme.com/wh/ref   refund.completed      Paused   —      │
│                                                                  │
│  [Edit] [View deliveries] [Test] [Pause] [Delete]              │
└──────────────────────────────────────────────────────────────────┘
```

**Webhook delivery status** (SRS-IGR-008):

| Status | Display |
|---|---|
| Delivered | Green checkmark + response time |
| Failed | Red X + retry count + last error |
| Retrying | Yellow spinner + retry number |
| Paused | Gray pause icon |

### 26.4 OAuth App Management

```
┌──────────────────────────────────────────────────────────────────┐
│  OAuth Applications                           [Create App +]    │
├──────────────────────────────────────────────────────────────────┤
│  App Name         Client ID        Scopes        Status          │
│  ──────────────  ──────────────  ────────────  ──────           │
│  Acme Store       acme-*****       commerce:rw   Active          │
│  Acme Analytics   acme-anl-***     analytics:r   Active          │
│                                                                  │
│  [View details] [Edit scopes] [Regenerate secret] [Deactivate]  │
└──────────────────────────────────────────────────────────────────┘
```

### 26.5 Usage Analytics

```
┌──────────────────────────────────────────────────────────────────┐
│  API Usage (Last 30 Days)                                         │
├──────────────────────────────────────────────────────────────────┤
│  [📈 API calls over time chart]                                  │
│                                                                  │
│  By Endpoint:                                                    │
│  GET /commerce/products    8,450 calls    68%                    │
│  POST /commerce/orders     2,100 calls    17%                    │
│  GET /commerce/orders      1,200 calls    10%                    │
│  Other                       600 calls     5%                    │
│                                                                  │
│  Rate Limit Usage:                                               │
│  Current: 312/500 per minute (62%)                              │
│  ████████████░░░░░░░░ 62%                                       │
│                                                                  │
│  Error Rate: 0.3% (37 errors / 12,350 calls)                    │
│  Top errors: 429 RATE_LIMITED (15), 400 VALIDATION_ERROR (12)  │
└──────────────────────────────────────────────────────────────────┘
```

---

# Part VIII — States, Accessibility, and Usability

## Chapter 27 — Empty, Loading, and Error States

### 27.1 State Design Philosophy

Every screen in K-NETWORK must handle four states gracefully: **loaded** (data present), **empty** (no data), **loading** (fetching data), and **error** (fetch failed). No state is an afterthought — each is designed intentionally with clear messaging and actionable next steps.

**State design principles:**

1. **Never show a blank screen.** Every empty or loading state provides context and guidance.
2. **Be helpful, not apologetic.** Empty states guide the participant toward action; error states guide toward resolution.
3. **Be consistent.** The same state type uses the same visual pattern across all engines.
4. **Be honest.** Loading states show what's happening; error states explain what went wrong without technical jargon.
5. **Be recoverable.** Every error state provides a path forward.

### 27.2 Empty States

Empty states appear when there is no data to display — no orders, no messages, no courses, no transactions.

#### 27.2.1 Empty State Anatomy

```
┌─────────────────────────────────────────────┐
│                                             │
│         [Illustration / Icon]               │
│                                             │
│         [Headline]                          │
│         One-line description                │
│                                             │
│         [Primary action button]             │
│         [Secondary link]                    │
│                                             │
│         [Optional tip]                      │
└─────────────────────────────────────────────┘
```

| Element | Specification |
|---|---|
| Illustration | 120×120px, subtle, in `neutral.300` or context color |
| Headline | `h4`, `neutral.900`, centered |
| Description | `body`, `neutral.500`, centered, max 2 lines |
| Primary action | `primary` button, centered |
| Secondary link | `body-sm`, `primary.500`, below primary |
| Tip | `caption`, `neutral.400`, optional |

#### 27.2.2 Empty State Examples by Engine

**Commerce — Empty Cart:**
```
┌─────────────────────────────────────────────┐
│         [🛒 illustration]                   │
│         Your cart is empty                  │
│         Browse the marketplace to find      │
│         products you'll love.               │
│         [Browse Marketplace]                │
└─────────────────────────────────────────────┘
```

**Commerce — No Orders:**
```
┌─────────────────────────────────────────────┐
│         [📦 illustration]                    │
│         No orders yet                       │
│         When you place an order, it will    │
│         appear here for tracking.           │
│         [Browse Marketplace]                │
│         Tip: Save items to your wishlist    │
│         for easy access later.              │
└─────────────────────────────────────────────┘
```

**Services — No Proposals:**
```
┌─────────────────────────────────────────────┐
│         [📋 illustration]                    │
│         No proposals yet                    │
│         When service providers respond to    │
│         your request, proposals appear here.│
│         [Post a Service Request]            │
│         [Browse Services]                   │
└─────────────────────────────────────────────┘
```

**Learning — No Courses:**
```
┌─────────────────────────────────────────────┐
│         [📚 illustration]                    │
│         Start your learning journey          │
│         Browse courses and enroll to begin   │
│         learning.                           │
│         [Browse Courses]                    │
│         Tip: Many courses offer free        │
│         preview lessons.                    │
└─────────────────────────────────────────────┘
```

**Learning — No Certificates:**
```
┌─────────────────────────────────────────────┐
│         [🏆 illustration]                    │
│         No certificates yet                  │
│         Complete a course to earn your       │
│         first certificate.                  │
│         [Browse Courses]                    │
└─────────────────────────────────────────────┘
```

**Wallet — No Transactions:**
```
┌─────────────────────────────────────────────┐
│         [💳 illustration]                    │
│         No transactions yet                  │
│         Your transaction history will appear │
│         here once you start using your wallet.│
│         [Deposit Funds]                     │
└─────────────────────────────────────────────┘
```

**Messages — No Conversations:**
```
┌─────────────────────────────────────────────┐
│         [✉️ illustration]                    │
│         No messages                          │
│         When you message a vendor, provider, │
│         or instructor, conversations appear  │
│         here.                               │
└─────────────────────────────────────────────┘
```

**K-Rewards — No Reward History:**
```
┌─────────────────────────────────────────────┐
│         [👑 illustration]                    │
│         No reward history yet               │
│         Your reward distributions will       │
│         appear here after each cycle.       │
│         [View K-Rewards Dashboard]          │
└─────────────────────────────────────────────┘
```

**Admin — Empty Moderation Queue:**
```
┌─────────────────────────────────────────────┐
│         [✓ illustration]                     │
│         No items to review                   │
│         The moderation queue is empty.       │
│         Great work — everything's clean!     │
└─────────────────────────────────────────────┘
```

**Search — No Results:**
```
┌─────────────────────────────────────────────┐
│         [🔍 illustration]                    │
│         No results found                    │
│         Try adjusting your search or filters.│
│         [Clear all filters]  [Browse all]   │
│         Suggestions:                        │
│         • Try a broader price range         │
│         • Check your spelling               │
│         • Browse popular categories         │
└─────────────────────────────────────────────┘
```

### 27.3 Loading States

Loading states maintain perceived performance during data fetching (BRD-1 UI-8; SRS-NFR-004).

#### 27.3.1 Skeleton Screens

Skeleton screens are the primary loading pattern. They show the structure of the content that will appear, not a generic spinner.

```
┌──────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░  (title shimmer)                       │
│  ░░░░░░░░░░░░░░░░  (subtitle shimmer)                          │
│                                                                  │
│  ┌────┐ ░░░░░░░░░░░░░░  (card shimmer)                         │
│  │░░░░│ ░░░░░░░░░░░░░░                                     │
│  └────┘ ░░░░░░░░░░░░░░                                     │
│  ┌────┐ ░░░░░░░░░░░░░░                                     │
│  │░░░░│ ░░░░░░░░░░░░░░                                     │
│  └────┘ ░░░░░░░░░░░░░░                                     │
│  ┌────┐ ░░░░░░░░░░░░░░                                     │
│  │░░░░│ ░░░░░░░░░░░░░░                                     │
│  └────┘ ░░░░░░░░░░░░░░                                     │
└──────────────────────────────────────────────────────────────────┘
```

**Skeleton specifications:**

| Property | Value |
|---|---|
| Color | `neutral.200` blocks |
| Animation | Shimmer (left-to-right gradient sweep), `motion.slower` duration |
| Shape | Matches the content structure it replaces |
| Accessibility | `aria-busy="true"` on skeleton container; `prefers-reduced-motion` disables shimmer |

#### 27.3.2 Spinner

Spinners are used for short, indeterminate operations (button loading, form submission):

| Property | Value |
|---|---|
| Size | 16px (inline), 24px (button), 48px (page) |
| Color | `primary.500` |
| Animation | Rotate, 800ms loop |
| Accessibility | `aria-label="Loading"` |

#### 27.3.3 Progress Bar

Progress bars are used for determinate operations (file upload, checkout steps):

| Property | Value |
|---|---|
| Height | 4px |
| Track | `neutral.200` |
| Fill | `primary.500` |
| Animation | Width transition (`motion.normal`) |
| Label | Optional percentage or step indicator |

#### 27.3.4 Loading Patterns by Context

| Context | Loading Pattern |
|---|---|
| Page navigation | Skeleton screen matching page layout |
| List/scroll | Spinner or skeleton at bottom, "Loading more..." text |
| Button action | Spinner replaces button text |
| Form submission | Spinner in button + disabled inputs |
| File upload | Progress bar with percentage |
| Image loading | Blurhash placeholder, progressive load |
| Data refresh | Subtle skeleton or opacity flash on changed content |
| Background refresh | No visible loading (optimistic update) |

### 27.4 Error States

Error states must be clear, actionable, and never blame the participant.

#### 27.4.1 Error State Anatomy

```
┌─────────────────────────────────────────────┐
│         [⚠️ or specific icon]                │
│         [Error headline]                    │
│         [Description of what happened]      │
│         [What to do next]                   │
│         [Primary action: Retry]             │
│         [Secondary: Contact support]        │
└─────────────────────────────────────────────┘
```

#### 27.4.2 Error Types and Responses

| Error Type | HTTP | UI Response | Recovery Action |
|---|---|---|---|
| Validation error | 400 | Inline field errors with clear messages | Fix field and resubmit |
| Unauthorized | 401 | Redirect to login | Re-authenticate |
| Forbidden | 403 | "You don't have permission to [action]" | Contact support if unexpected |
| Not found | 404 | Empty state: "This [resource] doesn't exist or was removed" | Navigate back |
| Conflict | 409 | "[Resource] already exists" or "Already [state]" | Review existing resource |
| Rate limited | 429 | "Too many requests. Please wait [X] seconds." | Wait and retry |
| Server error | 500 | "Something went wrong on our end. Please try again." | Retry |
| Service unavailable | 503 | "[Feature] is temporarily unavailable." | Retry or check status |
| Network error | — | "No connection. Check your internet and try again." | Check network, retry |
| Timeout | — | "This is taking longer than expected. Please try again." | Retry |

#### 27.4.3 Inline Form Errors

Form errors appear inline, immediately below the field:

```
┌─────────────────────────────────────────────┐
│  Email                                       │
│  ┌──────────────────────────────────────┐  │
│  │  [invalid email entered]              │  │
│  └──────────────────────────────────────┘  │
│  ⚠ Please enter a valid email address      │
│                                             │
│  Password                                    │
│  ┌──────────────────────────────────────┐  │
│  │  [password entered]                   │  │
│  └──────────────────────────────────────┘  │
│  ✓ Strong password                          │
└─────────────────────────────────────────────┘
```

**Inline error rules:**

| Rule | Implementation |
|---|---|
| Timing | Validate on blur (not on every keystroke) |
| Position | Below the field, replacing helper text |
| Style | `danger.600` text, `danger.500` border on input |
| Message | Plain language, specific, actionable |
| Icon | Warning icon before message |
| Clear on input | Error clears when participant starts correcting |
| Screen reader | `aria-invalid="true"` + `aria-describedby` linking to error |

#### 27.4.4 Full-Page Error

For page-level errors (404, 500, network):

```
┌─────────────────────────────────────────────┐
│                                             │
│         [Illustration]                      │
│                                             │
│         Page not found                      │
│                                             │
│   The page you're looking for doesn't       │
│   exist or has been moved.                  │
│                                             │
│   [Go Home]  [Go Back]  [Contact Support]  │
│                                             │
└─────────────────────────────────────────────┘
```

#### 27.4.5 Error Recovery Principles

1. **Always provide a retry option** for transient errors (500, 503, network).
2. **Preserve user input** on form submission errors — never clear what the participant typed.
3. **Idempotency** — retrying a failed action does not create duplicates (SDD-1 Ch.3).
4. **Graceful degradation** — if a non-critical component fails, the rest of the page still works (SRS-NFR-007).
5. **No technical jargon** — error messages are in plain language, never raw error codes or stack traces.

---

## Chapter 28 — Security and Warning States

### 28.1 Security States Overview

Security states communicate trust, risk, and protective measures to the participant. They are designed to be informative without causing alarm.

### 28.2 Security Indicators

#### 28.2.1 Connection Security

| Indicator | Display | Context |
|---|---|---|
| Secure connection | Lock icon in address bar (browser native) | All pages (HTTPS enforced) |
| Encryption notice | Small lock icon + "Encrypted" text | Login, checkout, wallet pages |

#### 28.2.2 Verification Badges

See Chapter 7, Section 7.3 for verification badge specifications.

#### 28.2.3 Trust Score Display

See Chapter 7, Section 7.5 for Trust Score display specifications.

### 28.3 Warning States

#### 28.3.1 Suspicious Activity Warning

```
┌──────────────────────────────────────────────────────────────────┐
│  ⚠ Unusual activity detected                                     │
│  ────────────────────────────                                   │
│  We noticed unusual activity on your account. For your          │
│  security, please verify your recent actions.                    │
│                                                                  │
│  [Review recent activity]   [Secure my account]                 │
│                                                                  │
│  This is a precautionary measure. If this was you, no action    │
│  is needed.                                                     │
└──────────────────────────────────────────────────────────────────┘
```

**Warning state principles:**

| Principle | Implementation |
|---|---|
| Non-alarming | Use ⚠ not 🚫; yellow not red |
| Clear explanation | Explain what was detected without revealing detection methods |
| Actionable | Provide specific actions (review activity, secure account) |
| Reassuring | "If this was you, no action is needed" |
| No panic | Never use "URGENT" or "IMMEDIATE ACTION REQUIRED" language |

#### 28.3.2 Account Under Review

```
┌──────────────────────────────────────────────────────────────────┐
│  ℹ️ Account under review                                         │
│  ──────────────────────                                         │
│  Your account is currently under review. Some features may be    │
│  temporarily limited during this review.                        │
│                                                                  │
│  What's limited: [list of affected features]                    │
│  Expected timeline: [duration or "We'll update you soon"]      │
│                                                                  │
│  Your data and K-Level are safe. Nothing is being removed.      │
│  [Learn more]   [Contact support]   [Appeal]                   │
└──────────────────────────────────────────────────────────────────┘
```

#### 28.3.3 Sanction Notification

When a participant is sanctioned, they see a clear notification:

```
┌──────────────────────────────────────────────────────────────────┐
│  Account Sanction                                                │
│  ────────────────                                                │
│  Your account has been sanctioned for: [reason]                 │
│                                                                  │
│  Sanction type: [SUSPENDED / RESTRICTED / BANNED]               │
│  Duration: [X days / Permanent]                                  │
│  Date imposed: [date]                                            │
│                                                                  │
│  You have the right to appeal this decision.                    │
│  Appeals are free and never require payment.                    │
│                                                                  │
│  [File an appeal]   [View evidence]   [Contact support]        │
└──────────────────────────────────────────────────────────────────┘
```

**Sanction notification rules:**

| Rule | Implementation |
|---|---|
| Clear reason | Specific reason shown (not generic "violation of terms") |
| Appeal rights | Prominently displayed, never conditioned on payment (SRS-ADM-006) |
| Evidence | Participant can view the evidence (transparency) |
| No shame | No public shaming; sanction is private to the participant |
| Due process | Investigation → Determination → Appeal (KR-1 KR-FRD-003) |

#### 28.3.4 Trust Score Below Gate

```
┌──────────────────────────────────────────────────────────────────┐
│  ⚠ Trust Score below threshold                                   │
│  ────────────────────────────                                   │
│  Your Trust Score (48) is below the threshold (55) for          │
│  K-Level 7 qualification.                                       │
│                                                                  │
│  This means you cannot be promoted to Level 7 until your        │
│  Trust Score improves.                                          │
│                                                                  │
│  How to improve:                                                │
│  • Continue genuine platform activity                          │
│  • Complete transactions successfully                           │
│  • Maintain positive reviews                                   │
│  • Resolve any disputes favorably                               │
│                                                                  │
│  Trust recovers gradually through genuine activity.             │
│  [View Trust details →]   [Learn about Trust →]                 │
└──────────────────────────────────────────────────────────────────┘
```

#### 28.3.5 Session Expiry Warning

```
┌──────────────────────────────────────────────────────────────────┐
│  ⏱ Your session will expire in 2 minutes                        │
│  ────────────────────────────────────────                       │
│  You'll be logged out due to inactivity. Any unsaved work       │
│  will be lost.                                                  │
│                                                                  │
│  [Stay logged in]   [Save and log out]                          │
└──────────────────────────────────────────────────────────────────┘
```

This warning appears 2 minutes before the idle timeout (30 minutes per SRS-IDM-004).

#### 28.3.6 Rate Limit Warning

When the participant approaches rate limits:

```
┌──────────────────────────────────────────────────────────────────┐
│  ⚠ Too many requests                                             │
│  ──────────────────────                                         │
│  You've made too many requests. Please wait 30 seconds          │
│  before trying again.                                           │
│                                                                  │
│  [Retry in 30s] (countdown)                                     │
└──────────────────────────────────────────────────────────────────┘
```

This handles HTTP 429 responses (SRS-IGR-007; API-1 Ch.2).

---

## Chapter 29 — Accessibility Standards

### 29.1 Accessibility Commitment

K-NETWORK is committed to WCAG 2.2 Level AA conformance across all user-facing interfaces (SRS-NFR-008; BRD-1 UI-4). Accessibility is a constitutional standard, not a best-effort aspiration (BRD-1 §18.7). It is designed in from the start, not added after.

### 29.2 WCAG 2.2 AA Conformance

#### 29.2.1 Perceivable

| Guideline | Implementation |
|---|---|
| 1.1 Text alternatives | All non-text content has `alt` text; decorative images use `alt=""` or `aria-hidden` |
| 1.2 Time-based media | Video content has closed captions (WCAG 1.2.2); transcripts available for all video (WCAG 1.2.3, 1.2.8) |
| 1.3 Adaptable | Content structure uses semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`); information is not conveyed by shape/size/position alone |
| 1.4 Distinguishable | Color is not the sole means of conveying information (WCAG 1.4.1); contrast ratios meet AA (4.5:1 for normal text, 3:1 for large text); text resizable to 200% without loss; no text background images |
| 1.4.13 Content on hover/focus | Hover/focus-triggered content (tooltips) is dismissible, hoverable, and persistent |

#### 29.2.2 Operable

| Guideline | Implementation |
|---|---|
| 2.1 Keyboard accessible | All functionality available via keyboard; no keyboard traps; logical tab order; visible focus indicators (2px `primary.500` ring) |
| 2.1.1 Keyboard | All interactive elements reachable and operable via keyboard |
| 2.1.2 No trap | Focus can move away from any component via keyboard |
| 2.2 Enough time | Session timeout warning before expiry (2 min); participant can extend; no auto-playing content with time limits |
| 2.3 Seizures | No content flashes more than 3 times per second |
| 2.4 Navigable | Skip-to-main-content link; descriptive page titles; logical heading hierarchy; visible focus; consistent navigation |
| 2.4.7 Focus visible | All interactive elements show visible focus indicator |
| 2.5 Input modalities | Touch targets minimum 44×44px (WCAG 2.5.5, 2.5.8); no device-event-only handlers (use `onClick` not `onTouchEnd`) |
| 2.5.7 Dragging movements | Alternative to drag-and-drop (e.g., click-to-select, keyboard-accessible move) |

#### 29.2.3 Understandable

| Guideline | Implementation |
|---|---|
| 3.1 Readable | `lang` attribute on HTML element; language changes marked; plain language in UI text |
| 3.2 Predictable | Consistent navigation across pages; consistent component identification; no unexpected context changes on input |
| 3.3 Input assistance | Error identification (inline); labels associated with inputs; error prevention for legal/financial actions (confirmation/reversal); error suggestions |

#### 29.2.4 Robust

| Guideline | Implementation |
|---|---|
| 4.1 Compatible | Valid HTML; ARIA roles/states used correctly; name/role/value for all UI components; status messages announced via `aria-live` |

### 29.3 Screen Reader Support

| Requirement | Implementation |
|---|---|
| Semantic HTML | Use native elements (`<button>`, `<a>`, `<input>`, `<select>`) before ARIA |
| ARIA roles | Used only when semantic HTML is insufficient |
| ARIA labels | Interactive elements without visible text have `aria-label` |
| ARIA live regions | Toasts, notifications, dynamic updates announced via `aria-live="polite"` |
| ARIA describedby | Helper text and error messages linked via `aria-describedby` |
| ARIA invalid | Form errors flagged via `aria-invalid="true"` |
| Heading hierarchy | Single `<h1>` per page; logical `<h2>`–`<h6>` hierarchy |
| Landmarks | `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>` for navigation |
| Skip link | First focusable element: "Skip to main content" |
| Image alt | All content images have descriptive `alt`; decorative images `alt=""` |

### 29.4 Keyboard Navigation

| Requirement | Implementation |
|---|---|
| Tab order | Logical order following visual layout |
| Focus visible | 2px `primary.500` ring with 2px offset on all interactive elements |
| Focus trap | Modals and dialogs trap focus within; ESC to close |
| Arrow keys | Used for tab navigation, radio groups, comboboxes, sliders |
| Enter/Space | Activates buttons and links |
| ESC | Closes modals, dropdowns, overlays |
| Shortcut conflicts | No shortcuts that conflict with screen reader or browser shortcuts |

### 29.5 Color and Contrast

| Requirement | Implementation |
|---|---|
| Contrast ratio | 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold) |
| Non-text contrast | 3:1 for UI components and graphical objects (WCAG 1.4.11) |
| Color not sole indicator | Status badges include text labels; error states include icons; form errors include text |
| Color blindness | Tested with simulators for deuteranopia, protanopia, tritanopia; semantic colors distinguishable in grayscale |
| Dark mode | Same contrast standards apply; tested separately |

### 29.6 Motion and Animation

| Requirement | Implementation |
|---|---|
| prefers-reduced-motion | All non-essential animations disabled when this media query is true |
| No auto-playing motion | No auto-playing carousels without pause control; no parallax; no auto-scrolling content |
| Pause/stop/hide | Any auto-moving content has pause/stop/hide controls |
| No flashing | No content flashes more than 3 times per second |

### 29.7 Cognitive Accessibility

| Requirement | Implementation |
|---|---|
| Plain language | UI text at 8th-grade reading level where possible; no jargon without explanation |
| Consistent patterns | Same action always looks and behaves the same |
| Error prevention | Confirmations before irreversible actions; inline validation; clear error messages |
| Progressive disclosure | Complex information revealed in layers; details on demand |
| Help | Contextual help available; tooltips for complex terms |
| Time allowance | No unnecessary time limits; warnings before timeouts |

### 29.8 Accessibility Testing

| Test Type | Frequency |
|---|---|
| Automated testing (axe, WAVE) | Every PR / build |
| Keyboard-only testing | Every major release |
| Screen reader testing (NVDA, VoiceOver, TalkBack) | Every major release |
| Color contrast verification | Every design change |
| Cognitive walkthrough | New features |
| User testing with assistive technology users | Quarterly |

---

## Chapter 30 — Usability Principles

### 30.1 Usability Overview

K-NETWORK's usability principles ensure that participants can accomplish their goals efficiently, effectively, and satisfactorily (BRD-1 UI-7). Usability is measured, tested, and continuously improved.

### 30.2 Task-Based Usability

Every primary task in K-NETWORK has defined usability targets:

| Task | Target Time | Success Rate |
|---|---|---|
| Login (returning user) | < 10 seconds | > 98% |
| Registration (new user) | < 2 minutes | > 90% |
| Product search | < 30 seconds to first result | > 95% |
| Add to cart | < 5 seconds | > 98% |
| Checkout (single vendor) | < 90 seconds | > 92% |
| Checkout (multi-vendor) | < 2 minutes | > 88% |
| Course enrollment (free) | < 30 seconds | > 97% |
| Course enrollment (paid) | < 90 seconds | > 93% |
| Wallet withdrawal | < 60 seconds (excl. MFA) | > 95% |
| Find K-Level requirements | < 15 seconds | > 95% |
| Find ring structure | < 10 seconds | > 96% |
| Open a dispute | < 2 minutes | > 90% |

### 30.3 Information Architecture

K-NETWORK's information architecture follows the one-ecosystem principle:

| Level | Navigation | Depth |
|---|---|---|
| 1 | Global navigation (Marketplace, Services, Learning, Wallet, Rewards) | Primary sections |
| 2 | Section navigation (categories, sub-sections) | Secondary |
| 3 | Detail pages (product, course, service, order) | Tertiary |
| 4 | Sub-detail (reviews, specifications, curriculum) | Quaternary |

**IA principles:**

1. **Three-click rule:** Most content reachable in 3 clicks from home (target, not hard constraint).
2. **Recognition over recall:** Navigation is always visible; participants don't need to remember paths.
3. **Consistent structure:** Same type of content has the same URL structure and navigation across engines.
4. **Search-first:** Search is available on every marketplace, services, and learning page.

### 30.4 Onboarding

First-time participants receive contextual onboarding:

| Step | Trigger | Content |
|---|---|---|
| Welcome | First login | Platform overview, one-ecosystem message |
| Profile completion | After registration | Guided profile setup with tips |
| First action | Based on role interest | Guided tour of relevant section |
| Discovery | After first action | "Did you know?" tips for other features |
| Progressive | Contextual | Feature hints appear when relevant (not all at once) |

**Onboarding principles:**

- No forced tutorial; onboarding is optional and dismissible
- Tooltips appear contextually, not in a long sequence
- Progress saved; participant can resume onboarding later
- Onboarding adapts to the participant's role interest

### 30.5 Performance and Perceived Performance

| Technique | Application |
|---|---|
| Skeleton screens | Show structure while loading (Chapter 27.3) |
| Optimistic updates | UI updates immediately for likely-success actions (like, save) |
| Prefetching | Next-likely pages prefetched on hover (desktop) |
| Lazy loading | Images, below-the-fold content loaded on demand |
| Code splitting | Route-based code splitting for fast initial load |
| CDN | Static assets served from CDN (SDD-1 Ch.20.18) |
| Caching | GET responses cached at gateway; cache-busting for critical data (SDD-1 Ch.20.10) |
| Debouncing | Search input debounced (300ms) to reduce API calls |
| WebSocket | Real-time updates without polling (SDD-1 Ch.5) |

### 30.6 Internationalization and Localization

| Requirement | Implementation |
|---|---|
| Text externalization | All UI strings externalized, never hardcoded |
| RTL support | Right-to-left layout for Arabic (CSS logical properties) |
| Text expansion | Layouts accommodate 40% text expansion for some languages |
| Date/time | Localized formats; relative time ("2 hours ago") |
| Currency | Localized currency symbols; participant-selected currency |
| Number formatting | Localized decimal separators, thousand separators |
| Language selection | Available from navigation; persists across sessions |
| Font support | System fonts for non-Latin scripts; Inter/Satoshi for Latin |

### 30.7 Usability Testing

| Method | Frequency | Participants |
|---|---|---|
| Moderated usability testing | Before major releases | 8–12 per task |
| Unmoderated testing | Quarterly | 50+ participants |
| A/B testing | Continuous | Live traffic |
| Heatmap analysis | Monthly | Live traffic |
| Accessibility user testing | Quarterly | Assistive technology users |
| Field testing (Pan-African) | Bi-annually | Local participants across markets |

---

## Appendix A — Design Tokens Reference

### A.1 Color Tokens

#### Primary
| Token | Hex |
|---|---|
| `color.primary.50` | `#F5F6FE` |
| `color.primary.100` | `#EAECFA` |
| `color.primary.200` | `#C8CDF5` |
| `color.primary.300` | `#9BA4F0` |
| `color.primary.400` | `#6B7AE8` |
| `color.primary.500` | `#4755D4` |
| `color.primary.600` | `#3B3F9C` |
| `color.primary.700` | `#303380` |
| `color.primary.800` | `#252765` |
| `color.primary.900` | `#1A1B4B` |

#### Gold (Accent)
| Token | Hex |
|---|---|
| `color.gold.50` | `#FFFBEB` |
| `color.gold.100` | `#FEF6D9` |
| `color.gold.200` | `#FAEBA8` |
| `color.gold.300` | `#F2D96E` |
| `color.gold.400` | `#ECC94B` |
| `color.gold.500` | `#E0B517` |
| `color.gold.600` | `#D4A800` |
| `color.gold.700` | `#C69500` |
| `color.gold.800` | `#A07800` |
| `color.gold.900` | `#7A5C00` |

#### Semantic
| Token | Hex |
|---|---|
| `color.success.50` | `#F0FDF4` |
| `color.success.100` | `#DCFCE7` |
| `color.success.500` | `#16A34A` |
| `color.success.600` | `#15803D` |
| `color.warning.50` | `#FFFBEB` |
| `color.warning.100` | `#FEF3C7` |
| `color.warning.500` | `#D97706` |
| `color.warning.600` | `#B45309` |
| `color.danger.50` | `#FEF2F2` |
| `color.danger.100` | `#FEE2E2` |
| `color.danger.500` | `#DC2626` |
| `color.danger.600` | `#B91C1C` |
| `color.info.50` | `#EFF6FF` |
| `color.info.100` | `#DBEAFE` |
| `color.info.500` | `#2563EB` |
| `color.info.600` | `#1D4ED8` |

#### Neutral
| Token | Hex |
|---|---|
| `color.neutral.50` | `#FAFAFB` |
| `color.neutral.100` | `#F4F4F7` |
| `color.neutral.200` | `#E5E5EC` |
| `color.neutral.300` | `#D1D1DB` |
| `color.neutral.400` | `#A8A8B3` |
| `color.neutral.500` | `#8E8E99` |
| `color.neutral.600` | `#6B6B76` |
| `color.neutral.700` | `#404049` |
| `color.neutral.800` | `#2D2D33` |
| `color.neutral.900` | `#1A1A1E` |
| `color.neutral.950` | `#0A0A0B` |

#### Tier Colors
| Token | Hex | Tier |
|---|---|---|
| `color.tier.foundation` | `#6B7AE8` | Foundation (L1–3) |
| `color.tier.growth` | `#16A34A` | Growth (L4–6) |
| `color.tier.leadership` | `#D97706` | Leadership (L7–9) |
| `color.tier.executive` | `#7C3AED` | Executive (L10–12) |
| `color.tier.legacy` | `#E0B517` | Legacy (L13–15) |

#### Trust Score Colors
| Token | Hex | Range |
|---|---|---|
| `color.trust.critical` | `#DC2626` | 0–24 |
| `color.trust.low` | `#D97706` | 25–39 |
| `color.trust.fair` | `#E0B517` | 40–54 |
| `color.trust.good` | `#16A34A` | 55–69 |
| `color.trust.strong` | `#3B3F9C` | 70–84 |
| `color.trust.excellent` | `#15803D` | 85–100 |

### A.2 Typography Tokens

| Token | Size (px) | Weight | Line Height |
|---|---|---|---|
| `text.display` | 56 | 700 | 1.1 |
| `text.h1` | 44 | 700 | 1.15 |
| `text.h2` | 36 | 700 | 1.2 |
| `text.h3` | 28 | 600 | 1.25 |
| `text.h4` | 24 | 600 | 1.3 |
| `text.h5` | 20 | 600 | 1.35 |
| `text.h6` | 18 | 600 | 1.4 |
| `text.body-lg` | 18 | 400 | 1.6 |
| `text.body` | 16 | 400 | 1.6 |
| `text.body-sm` | 14 | 400 | 1.5 |
| `text.caption` | 12 | 400 | 1.4 |
| `text.overline` | 11 | 600 | 1.2 |

### A.3 Spacing Tokens

| Token | px | rem |
|---|---|---|
| `space.0` | 0 | 0 |
| `space.1` | 4 | 0.25 |
| `space.2` | 8 | 0.5 |
| `space.3` | 12 | 0.75 |
| `space.4` | 16 | 1 |
| `space.5` | 20 | 1.25 |
| `space.6` | 24 | 1.5 |
| `space.8` | 32 | 2 |
| `space.10` | 40 | 2.5 |
| `space.12` | 48 | 3 |
| `space.16` | 64 | 4 |
| `space.20` | 80 | 5 |
| `space.24` | 96 | 6 |

### A.4 Border Radius Tokens

| Token | px | rem |
|---|---|---|
| `radius.none` | 0 | 0 |
| `radius.sm` | 4 | 0.25 |
| `radius.md` | 6 | 0.375 |
| `radius.lg` | 8 | 0.5 |
| `radius.xl` | 12 | 0.75 |
| `radius.2xl` | 16 | 1 |
| `radius.full` | 9999 | — |

### A.5 Shadow Tokens

| Token | Value |
|---|---|
| `shadow.none` | `none` |
| `shadow.xs` | `0 1px 2px 0 rgba(10,10,11,0.05)` |
| `shadow.sm` | `0 1px 3px 0 rgba(10,10,11,0.10), 0 1px 2px 0 rgba(10,10,11,0.06)` |
| `shadow.md` | `0 4px 6px -1px rgba(10,10,11,0.10), 0 2px 4px -2px rgba(10,10,11,0.10)` |
| `shadow.lg` | `0 10px 15px -3px rgba(10,10,11,0.10), 0 4px 6px -4px rgba(10,10,11,0.10)` |
| `shadow.xl` | `0 20px 25px -5px rgba(10,10,11,0.10), 0 8px 10px -6px rgba(10,10,11,0.10)` |

### A.6 Motion Tokens

| Token | Duration | Easing |
|---|---|---|
| `motion.instant` | 0ms | — |
| `motion.fast` | 100ms | `ease-out` |
| `motion.normal` | 200ms | `ease-in-out` |
| `motion.slow` | 300ms | `ease-in-out` |
| `motion.slower` | 400ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `motion.slowest` | 600ms | `cubic-bezier(0.4, 0, 0.2, 1)` |

### A.7 Z-Index Tokens

| Token | Value |
|---|---|
| `z.base` | 0 |
| `z.dropdown` | 100 |
| `z.sticky` | 200 |
| `z.overlay` | 300 |
| `z.modal` | 400 |
| `z.toast` | 500 |
| `z.tooltip` | 600 |

### A.8 Breakpoint Tokens

| Token | Min Width |
|---|---|
| `xs` | 0px |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

---

## Appendix B — Component Inventory

### B.1 Components by Category

#### Buttons
| Component | Variants | Sizes |
|---|---|---|
| Button | Primary, Secondary, Outline, Ghost, Danger, Success, Gold | xs, sm, md, lg, xl |
| IconButton | Primary, Outline, Ghost | sm, md, lg |
| ButtonGroup | — | sm, md, lg |

#### Inputs
| Component | Variants |
|---|---|
| TextInput | Default, error, disabled, with icon, with suffix |
| PasswordInput | With show/hide toggle, strength meter |
| SearchInput | With search icon, clear button, autocomplete |
| NumberInput | With stepper controls |
| CurrencyInput | With currency prefix |
| DatePicker | Calendar, range, min/max |
| Select | Custom dropdown, searchable |
| MultiSelect | Tag input with dropdown |
| Checkbox | Checked, indeterminate, disabled |
| Radio | Selected, disabled |
| ToggleSwitch | On, off, disabled |
| Textarea | Auto-resize, fixed height |
| FileUpload | Drag-and-drop, browse, progress |
| Slider | Single, range |

#### Layout
| Component | Usage |
|---|---|
| Container | Max-width content wrapper |
| Grid | CSS Grid wrapper |
| Stack | Vertical/horizontal flex spacing |
| Card | Content container |
| Divider | Horizontal/vertical separator |
| Spacer | Flexible space |

#### Navigation
| Component | Usage |
|---|---|
| TopNav | Global navigation bar (desktop) |
| BottomNav | Mobile navigation bar |
| Sidebar | Contextual sidebar navigation |
| Breadcrumbs | Location navigation |
| Tabs | Parallel content views |
| Pagination | Cursor-based list navigation |
| Stepper | Multi-step flow progress |
| Menu | Dropdown menu |
| Drawer | Slide-in panel (mobile) |

#### Feedback
| Component | Usage |
|---|---|
| Toast | Non-blocking notification |
| Alert | Inline notification |
| Badge | Status, count, category |
| Tag | Category, removable |
| Progress | Linear, circular |
| Skeleton | Loading placeholder |
| Spinner | Indeterminate loading |
| Tooltip | Contextual help |

#### Data Display
| Component | Usage |
|---|---|
| Table | Tabular data |
| Stat | Key metric display |
| Chart | Data visualization |
| Timeline | Chronological events |
| List | Item list |
| Avatar | User representation |
| EmptyState | No-data illustration |

#### Overlays
| Component | Usage |
|---|---|
| Modal | Centered dialog |
| BottomSheet | Mobile slide-up panel |
| Popover | Contextual floating content |
| ConfirmDialog | Confirmation prompt |
| ImageLightbox | Fullscreen image gallery |

---

## Appendix C — Screen Template Catalog

### C.1 Page Templates

| Template | Usage | Layout |
|---|---|---|
| Full-width | Marketplace homepage, search results | No sidebar, full-width content |
| Sidebar | Dashboards, admin console | Left sidebar + main content |
| Two-column | Product detail, course page | Left media + right info |
| Centered | Login, registration, verification | Single centered card |
| Split | Settings, preferences | Left nav + right content |
| Full-screen | Course player, checkout | Immersive, no global nav |

### C.2 Card Templates

| Template | Usage |
|---|---|
| Product card | Marketplace product grid |
| Course card | Learning marketplace grid |
| Service card | Services marketplace grid |
| Provider card | Service provider display |
| Vendor card | Vendor store display |
| Stat card | Dashboard metric |
| Order card | Order list item |
| Transaction card | Wallet transaction list |
| Notification card | Notification panel item |
| Member card | Ring member display |
| Certificate card | Certificate list display |
| Candidate card | Coronation candidate display |

---

## Appendix D — Interaction Pattern Catalog

### D.1 Drag and Drop

| Pattern | Usage | Keyboard Alternative |
|---|---|---|
| Curriculum builder | Reorder modules/lessons | Arrow keys with move buttons |
| File upload | Drag files to upload zone | Browse button |
| Cart reorder | Reorder cart items | Up/down buttons |

### D.2 Swipe Gestures (Mobile)

| Pattern | Usage |
|---|---|
| Swipe right | Mark notification as read |
| Swipe left | Delete/dismiss item |
| Swipe down | Pull to refresh |
| Swipe up | Open bottom sheet |
| Swipe image carousel | Navigate images |

### D.3 Keyboard Shortcuts (Desktop)

| Shortcut | Action |
|---|---|
| `/` | Focus search |
| `Esc` | Close modal/overlay |
| `Tab` / `Shift+Tab` | Navigate focus |
| `Enter` | Activate focused element |
| `?` | Show keyboard shortcuts help |

### D.4 Contextual Menus

| Pattern | Trigger | Usage |
|---|---|---|
| Right-click menu | Right-click (desktop) | Item actions (copy, share, delete) |
| Long-press menu | Long-press (mobile) | Item actions |
| Overflow menu | `⋯` button | Additional actions in limited space |

---

## Appendix E — Traceability Matrices

### E.1 BRD-1 Design Principles → UXDS-1

| BRD-1 Principle | UXDS-1 Chapter | Implementation |
|---|---|---|
| UI-1 Modern UI | Ch.1, Ch.2 | Clean design system, modern color palette, current type scale |
| UI-2 Responsive design | Ch.5 | Breakpoints, responsive behavior rules, mobile-first |
| UI-3 Mobile-first | Ch.5, Ch.4 | Bottom nav, bottom sheets, touch targets, mobile patterns |
| UI-4 Accessibility | Ch.29 | WCAG 2.2 AA, screen reader, keyboard, contrast, motion |
| UI-5 Consistent design system | Ch.2, Ch.3, §1.3 | Single design system, centrally governed, no engine deviation |
| UI-6 Intuitive navigation | Ch.4 | Consistent nav, breadcrumbs, back navigation, role-based nav |
| UI-7 High usability | Ch.30 | Task-based targets, usability testing, onboarding |
| UI-8 Fast loading | Ch.27, Ch.30 | Skeleton screens, optimistic updates, performance techniques |
| UI-9 Clear information hierarchy | Ch.1, Ch.2 | Visual hierarchy, type scale, spacing, information architecture |
| UI-10 Professional visual identity | Ch.2 | Purpose-built palette, no competitor copying, dignified tone |

### E.2 SRS-1 NFRs → UXDS-1

| SRS-1 NFR | UXDS-1 Chapter | Implementation |
|---|---|---|
| SRS-NFR-004 Performance | Ch.27, Ch.30 | Loading states, perceived performance, search < 2s |
| SRS-NFR-007 Availability | Ch.27 | Graceful degradation, error recovery |
| SRS-NFR-008 Accessibility | Ch.29 | WCAG 2.2 AA, full conformance |
| SRS-NFR-013 Privacy | Ch.8 | Consent management, data rights, personalization toggle |

### E.3 SRS-1 Functional Requirements → UXDS-1

| SRS-1 Requirement | UXDS-1 Chapter |
|---|---|
| SRS-IDM-002 Registration | Ch.6 |
| SRS-IDM-003 Password/MFA | Ch.6 |
| SRS-IDM-004 Session management | Ch.6, Ch.8 |
| SRS-IDM-005 KYC verification | Ch.7 |
| SRS-IDM-007 SSO | Ch.6 |
| SRS-TRU-001 Trust Score display | Ch.7 |
| SRS-TRU-002 Trust gates visible | Ch.7, Ch.28 |
| SRS-TRU-003 Trust recovery | Ch.7 |
| SRS-COM-002 Product creation | Ch.10 |
| SRS-COM-003 Variants | Ch.10 |
| SRS-COM-005 Vendor storefronts | Ch.10 |
| SRS-COM-006 Categories | Ch.9 |
| SRS-COM-007 Search | Ch.9 |
| SRS-COM-008 Faceted filtering | Ch.9 |
| SRS-COM-009 Recommendations | Ch.9 |
| SRS-COM-010 Cart | Ch.10 |
| SRS-COM-011 Checkout | Ch.10 |
| SRS-COM-012 Order lifecycle | Ch.12 |
| SRS-COM-014 Shipment tracking | Ch.12 |
| SRS-COM-018 Reviews | Ch.10 |
| SRS-SVC-002 Provider profiles | Ch.13 |
| SRS-SVC-004 Portfolios | Ch.13 |
| SRS-SVC-006 Service packages | Ch.13 |
| SRS-SVC-008 Client requests | Ch.13 |
| SRS-SVC-009 Proposals | Ch.13 |
| SRS-SVC-011 Contracts | Ch.13 |
| SRS-SVC-012 Milestones | Ch.13 |
| SRS-KRW-008 15 levels, 5 tiers | Ch.18, Ch.19 |
| SRS-KRW-009 Promotion matrix visible | Ch.19 |
| SRS-KRW-011 Permanent Status | Ch.19 |
| SRS-KRW-012 Active Status | Ch.19 |
| SRS-LRN-001 Learning integrated | Ch.15 |
| SRS-LRN-002 Course discovery | Ch.15 |
| SRS-LRN-005 Video learning | Ch.16 |
| SRS-LRN-013 Certificates | Ch.16 |
| SRS-MSG-001 Notifications | Ch.24 |
| SRS-MSG-002 Messaging | Ch.24 |
| SRS-MSG-003 Announcements | Ch.24 |
| SRS-WAL-003 MFA for withdrawals | Ch.23 |
| SRS-WAL-004 Payment failure handling | Ch.27 |
| SRS-ADM-001 Governance reviews | Ch.25 |
| SRS-ADM-006 Appeal rights | Ch.25, Ch.28 |
| SRS-ADM-008 Anti-fraud process | Ch.25, Ch.28 |
| SRS-IGR-007 Rate limits | Ch.28 |
| SRS-IGR-008 Webhooks | Ch.26 |

### E.4 KR-1 Rules → UXDS-1

| KR-1 Rule | UXDS-1 Chapter | Implementation |
|---|---|---|
| KR-LVL-005 Leadership multiplication | Ch.19, Ch.20 | Leadership dashboard emphasizes leader development |
| KR-LVL-006 Anti-accumulation | Ch.1, Ch.19, Ch.20 | Anti-recruitment design principle, quality over quantity |
| KR-LVL-024 Permanent Status | Ch.19 | K-Level never demoted, only privileges suspended |
| KR-LVL-047 Coronation | Ch.22 | Annual coronation event UX |
| KR-LVL-048 Coronation eligibility | Ch.22 | Eligibility criteria displayed |
| KR-LVL-051 Recognition categories | Ch.22 | 5 categories displayed |
| KR-LVL-052 Coronation awards | Ch.22 | Certificates, digital recognition, event recognition |
| KR-LVL-054 Coronation records | Ch.22 | Historical archive, permanent records |
| KR-ROY-001 Royal Identity | Ch.21 | Title mapping, permanent username |
| KR-RWD-001 Reward Share | Ch.18 | Four pillars, estimated reward display |
| KR-TRU-001 Trust Score | Ch.7 | Score display, gates, recovery |
| KR-SRC-002 Non-rewardable activity | Ch.1, Ch.20 | No recruitment messaging |
| KR-ECO-015 Allocation formula | Ch.25 | 90/10 accounting (admin only) |
| KR-FND-015 Reconstructability | Ch.18 | Reward statement fully transparent |
| KR-FRD-002 Multi-signal corroboration | Ch.25, Ch.28 | No single flag = sanction |
| KR-FRD-003 Due process | Ch.25, Ch.28 | Investigation → Determination → Appeal |
| KR-GOV-030 No collateral harm | Ch.25 | Only fraudulent participant affected |

### E.5 PLC-1 Principles → UXDS-1

| PLC-1 Principle | UXDS-1 Chapter | Implementation |
|---|---|---|
| One Ecosystem | Ch.1 | One design system, one navigation, consistent experience |
| Opportunity for All | Ch.1, Ch.29, Ch.30 | Accessibility, Pan-African context, varying digital literacy |
| Trust Through Transparency | Ch.7, Ch.18, Ch.19 | Trust Score visible, reward calculation transparent |
| Modern Product Design (Ch.36) | Ch.1–5 | Modern design system, responsive, mobile-first |
| Royal Identity (Ch.22) | Ch.21 | Royal titles, crown icons, title history |
| Coronation (Ch.22) | Ch.22 | Annual coronation event, recognition, archive |

---

## Appendix F — Glossary and Acronyms

### F.1 Glossary

| Term | Definition |
|---|---|
| Active Status | The state of a participant who meets personal activity and tiered maintenance requirements for their K-Level (KR-FND-006) |
| Allocation Pool (AP) | 90% of Qualifying Economic Value, allocated across platform, vendor/provider, reward pool, leadership, and operational categories (KR-ECO-014) |
| Bottom Sheet | A mobile UI pattern that slides up from the bottom of the screen, replacing modals on mobile |
| Component Library | The single source of truth for UI elements in K-NETWORK, used across all engines |
| Coronation | The annual recognition system for Legacy Tier (Level 13–15) leaders (KR-LVL-047) |
| Design Token | A named design decision (color, spacing, typography, etc.) stored as a variable for consistent application |
| Design System | The collection of design tokens, components, patterns, and guidelines that define K-NETWORK's visual language |
| Empty State | The UI shown when there is no data to display, with guidance and actionable next steps |
| Escrow Balance | Funds held in the wallet for pending service contracts, released on milestone completion |
| Faceted Filtering | Multi-dimensional filtering that allows combining multiple filter criteria simultaneously |
| Foundation Tier | K-Level tier for Levels 1–3, Royal Identity: Normal |
| Grace Period | A one-cycle period before Active Status privileges are suspended (SRS-KRW-012) |
| Growth Tier | K-Level tier for Levels 4–6, Royal Identity: Normal |
| Idempotency Key | A unique identifier for state-changing operations that prevents duplicate execution |
| K-Level | A permanent level (1–15) measuring long-term leadership and contribution, organized into five tiers (KR-LVL-001) |
| K-Points | The platform's unit of measurable activity contribution, earned from genuine activity, reset monthly |
| K-Rings | The structural measurement of network depth and quality, Ring 1 through Ring 5 (KR-RNG-001) |
| K-Trust | The reputation and integrity system producing a Trust Score (0–100) (KR-TRU-001) |
| Leadership Tier | K-Level tier for Levels 7–9, Royal Identity: Prince |
| Legacy Tier | K-Level tier for Levels 13–15, Royal Identity: King |
| Multi-Factor Authentication (MFA) | A security mechanism requiring two or more forms of verification |
| Qualifying Economic Value (QEV) | The economic value of a transaction after legitimate deductions: QEV = GR − D (KR-ECO-010) |
| Reserve | 10% of Qualifying Economic Value, protected and not distributable (KR-ECO-014) |
| Reward Pool | The pool of funds for reward distribution in a cycle, funded from genuine economic activity (KR-ECO-040) |
| Reward Share | A participant's proportional claim on the Reward Pool (KR-RWD-001) |
| Royal Identity | The recognition system mapping K-Level tiers to royal titles (Normal, Prince, Crown Prince, King) |
| Skeleton Screen | A loading pattern that shows the structure of content that will appear |
| Trust Score | A numeric value (0–100) representing a participant's reputation and integrity |
| Executive Tier | K-Level tier for Levels 10–12, Royal Identity: Crown Prince |

### F.2 Acronyms

| Acronym | Expansion |
|---|---|
| AA | Level AA (WCAG conformance level) |
| ARIA | Accessible Rich Internet Applications |
| BRD | Business Requirements Document |
| CSS | Cascading Style Sheets |
| CTA | Call to Action |
| DDD | Database Design Document |
| esc | Escape key |
| GMV | Gross Merchandise Value |
| HTTPS | Hypertext Transfer Protocol Secure |
| IA | Information Architecture |
| KYC | Know Your Customer |
| MFA | Multi-Factor Authentication |
| NFR | Non-Functional Requirement |
| OIDC | OpenID Connect |
| PLC | Platform Constitution |
| QEV | Qualifying Economic Value |
| RBAC | Role-Based Access Control |
| RLS | Row-Level Security |
| RTL | Right-to-Left |
| SAD | Software Architecture Document |
| SDD | Software Design Document |
| SDK | Software Development Kit |
| SEO | Search Engine Optimization |
| SPA | Single-Page Application |
| SRS | Software Requirements Specification |
| SSE | Server-Sent Events |
| SSO | Single Sign-On |
| UI | User Interface |
| UX | User Experience |
| UXDS | UI/UX Design Specification |
| WCAG | Web Content Accessibility Guidelines |
| WebSocket | Full-duplex communication protocol over TCP |

---

*End of UXDS-1 — K-NETWORK UI/UX Design Specification v1.0*
