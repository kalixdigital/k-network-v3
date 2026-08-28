

LEARN-AD-1 — Learning Engine Concept & Architecture Decision

K-NETWORK: Pan-African Digital Commerce and Business Ecosystem

Field	Value

Document ID	LEARN-AD-1
Document Title	Learning Engine Concept & Architecture Decision
Version	1.0
Status	Approved
Classification	Internal — Architecture & Governance
Date	24 August 2026
Decision	Approved — Core Platform Engine #11
Supersedes	LEARN-AD-1 v0.1 — Proposed Architecture Review
Authority	K-NETWORK Platform Governance
Parent Architecture	K-NETWORK Core Platform Architecture



---

Document Control

Revision History

Version	Date	Status	Description

0.1	24 August 2026	Proposed	Initial Learning Engine concept and architecture decision
1.0	24 August 2026	Approved	Governance approval establishing Learning as Core Platform Engine #11



---

1. Executive Summary

K-NETWORK is an integrated digital ecosystem organized around shared platform foundations and modular Core Platform Engines.

The existing platform architecture establishes the use of dedicated engines with defined responsibilities, boundaries, interfaces and integration relationships. The approved architecture now consists of eleven Core Platform Engines, with the Learning Engine established as Core Platform Engine #11.

The Learning Engine provides the platform's dedicated education and learning capability.

It is responsible for structured learning experiences including:

courses;

programs;

modules;

lessons;

learning content;

externally hosted learning media;

enrollment;

learner progress;

quizzes;

assessments;

assignments;

completion;

certificates;

instructor/educator capabilities;

learning activities; and

learning-related domain events.


The Learning Engine shall operate as an integrated part of the K-NETWORK ecosystem.

It shall not create separate:

identity infrastructure;

trust infrastructure;

rewards infrastructure;

wallet/payment infrastructure;

communication infrastructure;

governance infrastructure; or

intelligence infrastructure.


Instead, it shall consume and contribute to the existing shared platform capabilities.

The Learning Engine will initially support externally hosted learning video, with YouTube designated as the initial media provider, subject to detailed implementation validation of privacy, authorization, embedding and provider-policy requirements.

The platform database shall store the learning-domain records and textual/structured learning data, while externally hosted video binaries shall remain outside the K-NETWORK database.

Learning-related activities that qualify for rewards shall be submitted to the existing K-Rewards Engine, which remains the authoritative rewards calculation and processing authority.


---

2. Architecture Decision

AD-LEARN-001 — Establish Learning Engine as Core Platform Engine #11

Decision

K-NETWORK Governance has approved the Learning Engine as Core Platform Engine #11.

The Learning Engine is therefore a first-class Core Platform Engine and shall not be implemented merely as a feature or Platform Module.

Approved Core Engine Model

The K-NETWORK platform now consists of:

#	Core Platform Engine	Primary Responsibility

1	Identity Engine	Accounts, authentication and identity verification
2	Trust Engine	K-Trust, trust signals and trust-related decisions
3	Commerce Engine	Product commerce and marketplace operations
4	Services Engine	Service listings, bookings and service operations
5	K-Rewards Engine	K-Points, K-Rings, K-Levels, K-Trust/reward-related calculations and reward cycles
6	Wallet / Payments Engine	Payments, wallets, withdrawals, transfers and settlements
7	Communication Engine	Notifications, messaging and communications
8	Intelligence Engine	AI, analytics, personalization and intelligent platform capabilities
9	Administration Engine	Administrative operations, governance controls and audit operations
10	Integration Engine	External systems, partners and integration infrastructure
11	Learning Engine	Education, courses, lessons, assessments, progress and learning experiences


The existing architecture establishes modular engines with defined responsibilities and interfaces. The approved Learning Engine extends that model with a dedicated education domain. 


---

3. Governance Status

The establishment of the Learning Engine has been approved by K-NETWORK Platform Governance.

Therefore:

> The question of whether Learning should be an independent Core Platform Engine is resolved.



It is no longer an open architecture decision.

The remaining work concerns the detailed definition and implementation of the approved engine.


---

4. Purpose

The purpose of LEARN-AD-1 is to establish the authoritative architectural direction for the Learning Engine before detailed requirements and implementation documents are produced.

This document establishes:

1. Learning Engine status;


2. architectural responsibility;


3. domain boundaries;


4. relationship with existing engines;


5. external-media strategy;


6. learning data ownership;


7. K-Rewards integration;


8. Trust integration;


9. Commerce integration;


10. Communication integration;


11. Intelligence integration;


12. Administration integration;


13. Integration Engine responsibilities;


14. architectural principles;


15. security direction;


16. anti-gaming direction;


17. implementation constraints; and


18. downstream documentation impact.



This document does not constitute the complete Learning requirements specification.


---

5. Scope

The Learning Engine shall provide the platform domain required to support structured education and training.

Its initial conceptual scope includes:

Learning Management

courses;

programs;

modules;

lessons;

learning paths;

categories;

learning metadata.


Content

text content;

structured learning content;

external media references;

supporting learning resources.


Assessment

quizzes;

questions;

answers;

assessments;

assignments;

submissions;

results.


Learner Management

enrollment;

course access;

learner progress;

completion;

learning history.


Certification

completion certificates;

certification records;

certification metadata.


Learning Activities

lesson activity;

assessment activity;

completion activity;

contribution activity;

learning events.


Instructor/Educator Capabilities

instructor participation;

course creation;

course management;

learning-content management.


The detailed requirements for each capability shall be established downstream.


---

6. Out of Scope

The Learning Engine shall not become the owner of capabilities already assigned to other Core Platform Engines.

It shall not independently own:

user authentication;

identity verification;

K-Trust calculation;

K-Points calculation;

wallet balances;

payment processing;

financial settlement;

general-purpose messaging;

general-purpose notifications;

AI infrastructure;

global analytics infrastructure;

platform-wide audit infrastructure;

external provider infrastructure.


This preserves the modular engine boundaries established by the platform architecture.

The current architecture explicitly requires modular engines with defined responsibilities, while shared platform capabilities remain horizontal rather than being duplicated by individual domains. 


---

7. Architectural Principles

The Learning Engine shall conform to the established K-NETWORK architectural principles.

7.1 Trust-by-Design

Security and trust considerations shall be incorporated into the Learning architecture rather than added after implementation.

7.2 Compliance-by-Design

Applicable compliance and privacy requirements shall be incorporated into the Learning domain.

7.3 Modularity

The Learning Engine shall maintain a clear domain boundary.

7.4 Scalability

The architecture shall support growth in:

courses;

learners;

instructors;

assessments;

learning records;

media references;

learning events.


7.5 Resilience

External media dependencies shall be handled without unnecessarily making the entire K-NETWORK platform dependent upon external media availability.

7.6 Auditability

Significant learning-domain activities shall be auditable.

7.7 Shared Identity

All Learning participants shall use the existing K-NETWORK identity model.

These principles are consistent with the current architectural requirements, which explicitly define trust-by-design, compliance-by-design, modularity, scalability, resilience, auditability and shared identity. 


---

8. Learning Engine Boundary

The following conceptual boundary is approved.

┌─────────────────────────────────────────────┐
│              LEARNING ENGINE                │
│                                             │
│  Courses                                    │
│  Programs                                   │
│  Modules                                    │
│  Lessons                                    │
│  Learning Content                            │
│  Enrollment                                  │
│  Progress                                    │
│  Quizzes                                     │
│  Assessments                                 │
│  Assignments                                 │
│  Completion                                  │
│  Certificates                                │
│  Learning Activities                         │
│  External Media References                   │
│                                             │
└─────────────────────────────────────────────┘

The engine owns these domain concepts and their lifecycle.


---

9. Shared Foundation Integration

The Learning Engine shall integrate with the existing shared K-NETWORK architecture.

K-NETWORK
                           │
             ┌─────────────┼─────────────┐
             │             │             │
          Identity       Trust       Governance
             │             │             │
             └─────────────┼─────────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ LEARNING ENGINE │
                  └─────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
    K-Rewards        Communication      Intelligence
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                           ▼
                    Integration Engine
                           │
                           ▼
                     External Media

The architecture retains the existing One Ecosystem principle: engines integrate with shared foundations rather than establishing parallel systems. The governance framework explicitly states that new modules and engines must be evaluated for integration and must not fragment identity, trust, governance or rewards. 


---

10. External Media Architecture

AD-LEARN-002 — External Learning Media

Decision

Learning video shall be externally hosted rather than requiring video binaries to be stored inside the K-NETWORK application database.

The Learning Engine shall store the metadata and reference necessary to locate and present the externally hosted media.

Initial Provider

YouTube

YouTube is the initial supported external video provider.

However:

> YouTube is a provider implementation, not the definition of the Learning Engine.



The Learning architecture shall remain provider-agnostic.


---

11. Media Provider Abstraction

The approved conceptual model is:

Learning Engine
                           │
                           ▼
                 External Media Layer
                           │
             ┌─────────────┼─────────────┐
             │             │             │
          YouTube      Future Provider  Future Provider

A learning lesson should therefore reference an external media asset rather than contain provider-specific application logic.

Conceptually:

External Media Asset

provider
provider_asset_id
media_type
title
duration
thumbnail_reference
status
access_policy
created_at
updated_at

The exact schema shall be defined in DDD-1.


---

12. YouTube Access Architecture

AD-LEARN-003 — K-NETWORK Controls Learning Authorization

The Learning Engine shall control whether a participant is authorized to access a learning lesson.

Conceptually:

Learner
   │
   ▼
K-NETWORK Identity
   │
   ▼
Learning Access Check
   │
   ├── DENIED
   │
   └── AUTHORIZED
           │
           ▼
     Learning Player
           │
           ▼
      External Video

The exact YouTube privacy and embedding configuration remains a detailed implementation decision.

It must be validated against:

YouTube capabilities;

privacy requirements;

access requirements;

embedding behavior;

provider policies;

security requirements.


Therefore this document approves external YouTube media support, but does not prematurely freeze a specific YouTube privacy mechanism.


---

13. Data Ownership

AD-LEARN-004 — Learning Record Ownership

K-NETWORK shall own the learning-domain records associated with its Learning Engine.

These may include:

course metadata;

course structure;

lesson metadata;

text content;

enrollment;

progress;

assessments;

quiz results;

assignments;

completion;

certification records;

learning activity records;

external media references.


The actual externally hosted video binary shall remain outside the K-NETWORK database.

Architectural principle

> K-NETWORK owns the learning record; the external provider owns the external media infrastructure.




---

14. Storage Model

The initial conceptual model is:

┌───────────────────────┐
│    K-NETWORK DB       │
│                       │
│ Course                │
│ Module                │
│ Lesson                │
│ Text                  │
│ Enrollment            │
│ Progress              │
│ Assessment            │
│ Results               │
│ Certificate           │
│ Media Reference       │
└───────────┬───────────┘
            │
            │ External Reference
            ▼
┌───────────────────────┐
│ External Media        │
│                       │
│ YouTube Video         │
│ Streaming             │
│ Media Delivery        │
└───────────────────────┘

The existing K-NETWORK technology architecture uses Supabase/PostgreSQL as its backend/data foundation. 


---

15. K-Rewards Integration

AD-LEARN-005 — Single Rewards Authority

The Learning Engine shall not create an independent Learning rewards system.

Learning shall produce verified learning-domain activities/events.

The existing K-Rewards Engine remains responsible for:

reward eligibility evaluation;

K-Point calculation;

reward processing;

applicable reward-cycle processing;

reward ledger operations.


Conceptually:

Learning Activity
       │
       ▼
Validation
       │
       ▼
Verified Learning Event
       │
       ▼
K-Rewards Engine
       │
       ▼
K-Points / Applicable Reward

The existing architecture establishes K-Rewards as the unified rewards economy and states that the Monthly Reward Cycle processes contributions from the ecosystem together. 


---

16. Learning Reward Principle

The following principle is approved:

> Learning participation may become rewardable, but learning completion alone shall not automatically imply a K-Point award.



Reward eligibility must follow the authoritative K-Rewards rules.

Potential learning activities may include:

lesson completion;

module completion;

quiz completion;

assessment success;

course completion;

verified certification;

qualified learner contribution;

qualified instructor contribution.


These are candidate activity categories, not frozen reward rules.

Actual K-Point values, limits, eligibility and anti-abuse conditions shall be established through the K-Rewards governance documentation.


---

17. Anti-Gaming Architecture

The Learning Engine shall not use a simplistic:

Video opened
     ↓
K-Points awarded

model.

Instead:

Learning Activity
      │
      ▼
Activity Validation
      │
      ▼
Completion / Assessment Rules
      │
      ▼
Integrity Checks
      │
      ▼
Verified Activity
      │
      ▼
K-Rewards Evaluation

The existing rewards governance requires genuine activity and provides mechanisms for artificial-activity screening and verification. 

The detailed Learning anti-gaming rules shall be defined during requirements and security design.


---

18. Trust Integration

AD-LEARN-006 — Shared Trust

The Learning Engine shall not create a separate Learning Trust Score.

Learning may generate relevant signals for the existing Trust Engine.

Potential signals may include:

verified learning completion;

verified certification;

qualified contribution;

instructor performance;

learning integrity.


The Trust Engine remains the authoritative owner of K-Trust.


---

19. Commerce Integration

The Learning Engine shall support integration with Commerce where educational products or programs are commercially offered.

Conceptually:

Commerce
   │
   ▼
Purchase
   │
   ▼
Payment / Wallet
   │
   ▼
Learning Enrollment
   │
   ▼
Course Access

The Learning Engine owns:

> learning access after enrollment



Commerce/Wallet owns:

> commercial and financial processing



This maintains engine separation.


---

20. Services Integration

Learning may eventually provide training and certification capabilities that support participants operating in the Services ecosystem.

A possible future flow is:

Learning
   ↓
Training
   ↓
Assessment
   ↓
Certification
   ↓
Trust / Eligibility Signal
   ↓
Services

This is an approved architectural integration possibility, not a Phase 1 mandatory requirement.


---

21. Communication Integration

The Learning Engine shall use the existing Communication Engine for platform communications such as:

course notifications;

lesson reminders;

assessment notifications;

completion notifications;

certificate notifications;

instructor/learner communications where applicable.


Learning shall not create a separate notification infrastructure.


---

22. Intelligence Integration

The Learning Engine shall integrate with the existing Intelligence Engine where applicable.

Potential capabilities include:

learning recommendations;

personalization;

search;

content moderation;

fraud detection;

analytics;

AI-assisted learning.


The Intelligence Engine already encompasses AI and Analytics capabilities within the current architecture. 

Detailed AI functionality is outside the scope of this architecture decision.


---

23. Administration Integration

The Administration Engine shall provide platform-level administrative capabilities over Learning.

Potential administrative responsibilities include:

instructor approval;

course moderation;

content governance;

access intervention;

administrative configuration;

sanctions;

audit;

operational control.


The Learning Engine remains the domain owner for learning functionality.


---

24. Integration Engine Relationship

The Integration Engine remains responsible for the external-system integration layer.

The Learning Engine therefore does not become responsible for building a general third-party integration framework.

For the initial media implementation:

Learning Engine
       │
       ▼
Integration Layer
       │
       ▼
YouTube

The current architecture already defines the Integration Engine as responsible for external integrations and partner/external-system connectivity. 


---

25. Platform Services Relationship

Learning shall consume shared Platform Services where appropriate, including capabilities such as:

file/media support;

search;

audit;

monitoring;

shared infrastructure.


The existing Platform Services API is explicitly designed as a horizontal layer consumed by the platform engines rather than as a domain-specific engine. 


---

26. Learning Domain Model — Conceptual

The initial conceptual relationship is:

Program
   │
   └── Course
          │
          ├── Module
          │      │
          │      └── Lesson
          │             ├── Text
          │             ├── Media
          │             ├── Quiz
          │             └── Assignment
          │
          ├── Enrollment
          │
          ├── Progress
          │
          ├── Assessment
          │
          ├── Completion
          │
          └── Certificate

This is a conceptual model only.

The authoritative physical schema shall be established in DDD-1.


---

27. Architectural Communication Model

The Learning Engine shall follow the established K-NETWORK modular and event-driven architecture.

The current SAD architecture uses synchronous mechanisms such as REST/RPC alongside asynchronous events/message queues. 

Synchronous examples

course retrieval;

lesson retrieval;

enrollment;

progress update;

assessment submission;

certificate retrieval.


Asynchronous examples

lesson completed;

assessment completed;

course completed;

certificate issued;

reward-eligible activity generated;

learning notification;

analytics event;

fraud/integrity signal.


Exact event names and contracts belong to API-1 and SDD-1.


---

28. Security Architecture

The Learning Engine shall inherit and extend the K-NETWORK security model.

Security requirements shall include:

authenticated access;

authorization;

role-based permissions;

enrollment validation;

course access controls;

instructor permissions;

assessment protection;

learner data protection;

auditability;

secure external media references;

anti-abuse controls.


The existing architecture requires trust-by-design, compliance-by-design and auditability. 


---

29. Initial Roles

The detailed requirements shall define the final RBAC model.

The following conceptual roles are approved for further requirements analysis:

Learner

Consumes learning experiences and completes learning activities.

Instructor

Creates and manages authorized educational content.

Course Administrator

Manages course lifecycle.

Learning Moderator

Reviews and moderates learning content.

Certification Authority

Where applicable, validates certification.

Platform Administrator

Exercises platform-level administrative authority.

The exact permissions are not frozen by LEARN-AD-1.


---

30. Architectural Dependencies

The Learning Engine depends upon:

Dependency	Relationship

Identity Engine	Authentication and participant identity
Trust Engine	Trust signals and trust decisions
K-Rewards Engine	Learning reward processing
Wallet / Payments	Commercial learning payments where applicable
Communication	Notifications and communication
Intelligence	AI, analytics, personalization and fraud capabilities
Administration	Governance and administrative control
Integration	External media/provider integration
Platform Services	Shared infrastructure capabilities


The Learning Engine shall not duplicate these capabilities.


---

31. Quality Attributes

The Learning Engine shall inherit the platform's quality objectives, including:

security;

reliability;

availability;

scalability;

maintainability;

performance;

observability;

auditability;

resilience.


Detailed quantitative targets shall be defined in SRS-1 and SDD-1.


---

32. Architectural Constraints

The following constraints are established.

Constraint 1

Learning is Core Platform Engine #11.

Constraint 2

Learning uses the existing K-NETWORK identity system.

Constraint 3

Learning does not create a separate rewards economy.

Constraint 4

Learning does not create a separate trust system.

Constraint 5

Learning video is externally hosted.

Constraint 6

YouTube is the initial supported video provider.

Constraint 7

The architecture shall remain capable of supporting future external media providers.

Constraint 8

The K-NETWORK database stores learning-domain records and media references rather than externally hosted video binaries.

Constraint 9

Rewardable learning activities must be validated.

Constraint 10

Detailed implementation decisions must remain traceable to this architecture decision.


---

33. Consequences

Positive

The decision provides:

a clear education domain boundary;

a scalable foundation for learning;

integration with the existing ecosystem;

reuse of existing platform foundations;

external media flexibility;

K-Rewards integration;

potential certification and trust integration;

potential Commerce and Services integration.


Negative

The decision increases:

platform complexity;

engineering scope;

documentation scope;

API surface;

database scope;

testing requirements;

security requirements;

governance requirements;

integration dependencies.


These consequences are accepted as part of the governance-approved decision to establish Learning as Core Engine #11.


---

34. Downstream Documentation Impact

The approval of Learning Engine #11 requires controlled updates to the existing documentation suite.

Document	Required Impact

PLC-1	Add Learning Engine #11 to the Core Platform Engine model
KR-1	Define applicable learning reward categories and rules
BRD-1	Add Learning business capability and objectives
SRS-1	Add Learning requirements
SAD-1	Add Learning architectural chapter
SDD-1	Add Learning detailed design
DDD-1	Add Learning domain/data model
API-1	Add Learning API contracts and events
UXDS-1	Add Learning user experience specifications
CMP-0	Evaluate applicable learning compliance/privacy requirements
GOV-0	Record governance approval and change control


The current documentation hierarchy establishes governance and requirements precedence, with downstream documents implementing upstream requirements. 


---

35. Implementation Sequence

The Learning Engine shall proceed through the following controlled sequence:

LEARN-AD-1
Approved
    │
    ▼
PLC-1 Update
    │
    ▼
BRD-1 Learning Requirements
    │
    ▼
SRS-1 Learning Requirements
    │
    ▼
SAD-1 Learning Architecture
    │
    ▼
DDD-1 Learning Domain Model
    │
    ▼
SDD-1 Learning Detailed Design
    │
    ▼
API-1 Learning API Contracts
    │
    ▼
UXDS-1 Learning UX
    │
    ▼
Implementation
    │
    ▼
Testing & Verification

No downstream document should contradict this architecture decision without a formally approved architecture change.


---

36. Future Evolution

The architecture deliberately permits future expansion.

Potential future capabilities include:

additional video providers;

private media infrastructure;

advanced certification;

paid education;

professional training;

instructor marketplace;

learning communities;

advanced assessments;

AI tutoring;

personalized learning;

learning analytics;

skills verification;

education-to-services pathways.


These possibilities do not constitute current requirements unless subsequently approved.


---

37. Open Detailed-Design Questions

The following are not architecture-status questions anymore. They are implementation/design questions to be resolved downstream.

LEARN-OD-001

What exact YouTube privacy/access configuration will be used?

LEARN-OD-002

What exact course and lesson data schema will be used?

LEARN-OD-003

What constitutes verified lesson completion?

LEARN-OD-004

Which learning activities are rewardable?

LEARN-OD-005

What K-Point values apply to each approved learning activity?

LEARN-OD-006

What assessment types are required in the initial release?

LEARN-OD-007

What certificate model is required?

LEARN-OD-008

What instructor approval process is required?

LEARN-OD-009

What learning-specific compliance requirements apply?

LEARN-OD-010

Which learning events require synchronous versus asynchronous processing?

These questions belong in the subsequent requirements and detailed-design documents.


---

38. Final Architecture Statement

The authoritative architecture decision is:

> K-NETWORK shall operate an eleventh Core Platform Engine — the Learning Engine — responsible for education, training and structured learning experiences.



> The Learning Engine shall integrate with the existing Identity, Trust, K-Rewards, Wallet/Payments, Communication, Intelligence, Administration, Integration and Platform Services capabilities and shall not create parallel implementations of those shared capabilities.



> Learning video shall initially be hosted externally, with YouTube serving as the initial supported provider. The Learning Engine shall retain learning-domain records and external media references while the actual externally hosted video remains outside the K-NETWORK database.



> Learning activities that qualify for rewards shall be validated and submitted to the existing K-Rewards Engine, which remains the authoritative reward calculation and processing authority.



> The Learning Engine architecture shall remain provider-independent so that future external media providers or K-NETWORK-controlled media infrastructure can be introduced without restructuring the core learning domain.




---

39. Approval Record

Approval Item	Decision

Learning Engine required	APPROVED
Learning as Core Platform Engine	APPROVED
Learning Engine Number	#11
Separate Learning rewards engine	REJECTED
Separate Learning identity system	REJECTED
Separate Learning trust system	REJECTED
External video architecture	APPROVED
YouTube as initial provider	APPROVED, subject to detailed technical validation
Provider abstraction	APPROVED
Learning-domain data in K-NETWORK DB	APPROVED
External video binaries in K-NETWORK DB	NOT REQUIRED / OUTSIDE INITIAL MODEL
Learning → K-Rewards integration	APPROVED
Learning → Trust integration	APPROVED
Learning → Commerce integration	APPROVED AS AN INTEGRATION CAPABILITY
Learning → Services integration	APPROVED AS AN INTEGRATION CAPABILITY



---

40. Document Status

LEARN-AD-1 Version 1.0 is APPROVED as the architectural baseline for the K-NETWORK Learning Engine.

The next documents must treat Learning Engine #11 as an established architectural fact, not a proposal.

Next recommended artifact: LEARN-BRD-1 — Learning Engine Business Requirements Document.
