K-NETWORK — CODEX PROJECT INSTRUCTIONS

1. Project

This repository contains the K-NETWORK platform.

K-NETWORK is one integrated ecosystem, not a collection of unrelated applications.

The current Core Platform Engines are:

1. Identity
2. Trust
3. Commerce
4. Services
5. K-Rewards
6. Wallet / Payments
7. Communication
8. Intelligence
9. Administration
10. Integration
11. Learning

2. Authoritative Documentation

Before implementing functionality, inspect the relevant documents in:

/docs/

The documentation hierarchy is:

PLC-1
→ KR-1 / GOV-0
→ BRD-1
→ SRS-1
→ SAD-1
→ SDD-1
→ DDD-1
→ API-1
→ UXDS-1

For Learning, also use:

LEARN-AD-1

Do not invent requirements when the documentation already defines them.

If documents conflict, do not silently choose one. Report the conflict.

3. Important Architecture Rule

K-NETWORK uses shared platform foundations.

Do not create duplicate:

- authentication
- identity
- trust
- rewards
- wallet
- communication
- governance
- intelligence
- integration

inside individual engines.

Each engine owns its domain.

Cross-engine communication must use the documented service/API/event boundaries.

Do not directly couple unrelated engine internals.

4. Database

Supabase/PostgreSQL is the platform database foundation.

Database changes MUST be implemented as version-controlled Supabase migration files.

Store migrations under:

/supabase/migrations/

Never make undocumented schema changes.

Never disable Row Level Security simply to make development easier.

Never expose Supabase service-role credentials to client-side code.

5. Secrets

Never commit:

- API keys
- passwords
- private keys
- service-role keys
- authentication tokens
- production credentials
- .env files containing secrets

Use environment variables.

6. Frontend

Follow UXDS-1.

The platform uses one unified design system.

Do not create separate visual identities for individual engines.

The UI must be:

- mobile-first
- responsive
- accessible
- professional
- modern
- fast
- consistent
- trustworthy

Target WCAG 2.2 AA.

7. Implementation Discipline

Work only on the requested milestone.

Do NOT implement future milestones unless explicitly instructed.

Do NOT refactor unrelated areas merely because they could be improved.

Do NOT replace working architecture without a documented reason.

8. Before Declaring a Milestone Complete

Run the appropriate:

- typecheck
- lint
- unit tests
- integration tests
- database tests
- production build

Fix errors before completion.

9. Git

Every completed milestone must result in a Git commit.

Use clear conventional commit messages.

Examples:

feat(identity): add registration flow

feat(trust): implement trust score foundation

db(identity): add identity schema

fix(auth): correct session handling

Do not commit secrets.

10. Deployment

When the milestone requires deployment:

1. Verify the code locally.
2. Verify tests.
3. Verify production build.
4. Commit.
5. Push to GitHub.
6. Apply the required Supabase migration.
7. Deploy to Vercel.
8. Verify the deployed application.
9. Report the result.

Never claim deployment succeeded without verifying it.

11. Stop Rule

After completing the requested milestone:

STOP.

Do not automatically begin the next milestone.

Report:

- what was implemented
- files changed
- database migrations created
- tests executed
- Git commit
- GitHub push status
- Supabase migration status
- Vercel deployment status
- live verification status
- remaining issues

Then wait for the next instruction.

12. Governance Parameters

Some values in governance-parameters.md are explicitly marked PROPOSED/SUGGESTED and require governance approval before production.

Do not silently convert proposed values into permanently approved production policy.

When implementing such values, identify them clearly as configuration requiring governance approval.

13. Learning

Learning is Core Platform Engine #11.

Use LEARN-AD-1 as the authoritative architecture decision for Learning.

Learning owns learning-domain records such as:

- courses
- programs
- modules
- lessons
- enrollment
- progress
- assessments
- assignments
- completion
- certificates
- learning activities
- external media references

Learning does NOT create separate identity, trust, rewards, wallet, communication, intelligence, governance or integration infrastructure.

14. Quality Standard

Do not create fake production functionality merely to make a screen appear complete.

If an integration is not yet configured, create a properly isolated integration boundary and clearly report the missing configuration.

Do not call mock data production functionality.

Do not silently weaken security to make a feature work.

15. Current Task Discipline

The user will provide implementation milestones one at a time.

Treat each milestone as a controlled change.

Implement exactly the requested milestone.

Then stop.