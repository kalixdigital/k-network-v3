/**
 * Trust Signal Type Model — strongly typed representation of the existing
 * Trust Signal categories enforced by the `trust.trust_signals` database table.
 *
 * Source of truth: `supabase/migrations/000003_create_trust_schema.sql`
 *   CHECK (signal_type IN (...))
 *
 * The database remains authoritative for persistence. These application types
 * are aligned with the production CHECK constraint so they cannot drift.
 *
 * NOTE: The TRU-002 task spec listed a different set of 17 signal categories
 * (e.g. PAYMENT_RELIABILITY, DISPUTE_RESOLUTION, KYC_COMPLETION, etc.).
 * The production database uses the set below (e.g. DISPUTE_HISTORY,
 * CHARGEBACK_HISTORY, VERIFICATION_STATUS, etc.), which aligns with the
 * governance-parameters document and DDD-1. Per task spec §6/§7, the database
 * is authoritative and the discrepancy is reported rather than silently
 * changing the production schema.
 */

/**
 * All valid Trust Signal types — matches the `trust.trust_signals.signal_type`
 * CHECK constraint exactly (17 categories).
 */
export const SIGNAL_TYPES = [
  'TRANSACTION_HISTORY',
  'DISPUTE_HISTORY',
  'CHARGEBACK_HISTORY',
  'FRAUD_FLAGS',
  'SANCTION_HISTORY',
  'ACTIVITY_CONSISTENCY',
  'COMMUNITY_STANDING',
  'VERIFICATION_STATUS',
  'ACCOUNT_AGE',
  'REFERRAL_QUALITY',
  'MARKETPLACE_REVIEWS',
  'MARKETPLACE_RATINGS',
  'MARKETPLACE_DISPUTES',
  'CONTENT_GOVERNANCE',
  'COMPLETION_RATE',
  'RESPONSE_TIME',
  'OTHER',
] as const;

export type SignalType = (typeof SIGNAL_TYPES)[number];

/**
 * Type guard: is the value a valid SignalType?
 */
export function isSignalType(value: unknown): value is SignalType {
  return typeof value === 'string' && (SIGNAL_TYPES as readonly string[]).includes(value);
}

/**
 * All valid Trust Signal sources — matches the `trust.trust_signals.signal_source`
 * CHECK constraint exactly (7 sources).
 */
export const SIGNAL_SOURCES = [
  'COMMERCE',
  'SERVICES',
  'LEARNING',
  'IDENTITY',
  'ADMIN',
  'SYSTEM',
  'WALLET',
] as const;

export type SignalSource = (typeof SIGNAL_SOURCES)[number];

/**
 * Type guard: is the value a valid SignalSource?
 */
export function isSignalSource(value: unknown): value is SignalSource {
  return typeof value === 'string' && (SIGNAL_SOURCES as readonly string[]).includes(value);
}

/**
 * All valid Trust Signal directions — matches the `trust.trust_signals.signal_direction`
 * CHECK constraint exactly (3 directions).
 *
 * Direction is data at this stage — no scoring behavior is implemented here.
 * Scoring belongs to a later Trust roadmap task (TRU-004).
 */
export const SIGNAL_DIRECTIONS = ['POSITIVE', 'NEGATIVE', 'NEUTRAL'] as const;

export type SignalDirection = (typeof SIGNAL_DIRECTIONS)[number];

/**
 * Type guard: is the value a valid SignalDirection?
 */
export function isSignalDirection(value: unknown): value is SignalDirection {
  return typeof value === 'string' && (SIGNAL_DIRECTIONS as readonly string[]).includes(value);
}

/**
 * Signal weight bounds — matches the `trust.trust_signals.signal_weight`
 * CHECK constraint: DECIMAL(5,4), 0.0000 <= weight <= 1.0000.
 *
 * This is a PROPOSED governance parameter, not an approved policy.
 */
export const SIGNAL_WEIGHT_MIN = 0;
export const SIGNAL_WEIGHT_MAX = 1;

/**
 * The `calculated_by` values for trust_history — included for completeness
 * since the domain model represents the full Trust signal ecosystem.
 * Matches the `trust.trust_history.calculated_by` CHECK constraint.
 */
export const CALCULATED_BY_VALUES = ['SYSTEM', 'SCHEDULED', 'EVENT', 'ADMIN'] as const;

export type CalculatedBy = (typeof CALCULATED_BY_VALUES)[number];
