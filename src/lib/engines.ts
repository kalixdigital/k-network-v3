/**
 * K-NETWORK Core Platform Engines
 *
 * The eleven engines defined in PLC-1. These define the platform's
 * domain boundaries and route structure. No business logic is
 * implemented yet — these are architectural placeholders.
 */
export interface EngineDefinition {
  id: number;
  slug: string;
  name: string;
  description: string;
  status: 'planned';
}

export const ENGINES: readonly EngineDefinition[] = [
  {
    id: 1,
    slug: 'identity',
    name: 'Identity',
    description: 'Accounts, authentication, tiered KYC verification, identity sharing.',
    status: 'planned',
  },
  {
    id: 2,
    slug: 'trust',
    name: 'Trust',
    description: 'K-Trust calculation, trust signals, trust gating, trust recovery.',
    status: 'planned',
  },
  {
    id: 3,
    slug: 'commerce',
    name: 'Commerce',
    description: 'Commerce marketplace, vendors, products, orders, fulfilment, settlement.',
    status: 'planned',
  },
  {
    id: 4,
    slug: 'services',
    name: 'Services',
    description: 'Professional services marketplace, proposals, contracts, milestones.',
    status: 'planned',
  },
  {
    id: 5,
    slug: 'k-rewards',
    name: 'K-Rewards',
    description: 'K-Points, K-Rings, K-Levels, Reward Share. Sole rewards authority.',
    status: 'planned',
  },
  {
    id: 6,
    slug: 'wallet',
    name: 'Wallet / Payments',
    description: 'Wallet balances, deposits, withdrawals, settlements. Sole wallet authority.',
    status: 'planned',
  },
  {
    id: 7,
    slug: 'communication',
    name: 'Communication',
    description: 'Notifications, messaging, announcements.',
    status: 'planned',
  },
  {
    id: 8,
    slug: 'intelligence',
    name: 'Intelligence',
    description: 'Recommendations, search relevance, analytics, fraud-detection signals.',
    status: 'planned',
  },
  {
    id: 9,
    slug: 'administration',
    name: 'Administration',
    description: 'Platform governance, policy enforcement, moderation, dispute resolution.',
    status: 'planned',
  },
  {
    id: 10,
    slug: 'integration',
    name: 'Integration',
    description: 'External interoperability, API gateway, webhooks, SDKs, partner auth.',
    status: 'planned',
  },
  {
    id: 11,
    slug: 'learning',
    name: 'Learning',
    description: 'E-learning ecosystem, courses, programs, modules, lessons, assessments, certificates.',
    status: 'planned',
  },
] as const;
