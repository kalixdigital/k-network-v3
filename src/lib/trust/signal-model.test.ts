/**
 * TRU-002 — Trust Signal Model Tests
 *
 * Tests the domain model and validation for Trust Signals.
 * Verifies:
 *   1. Valid signal types are accepted
 *   2. Invalid signal types are rejected
 *   3. Valid sources are accepted
 *   4. Invalid sources are rejected
 *   5. Valid directions are accepted
 *   6. Invalid directions are rejected
 *   7. Valid weights between 0 and 1 are accepted
 *   8. Weights below 0 are rejected
 *   9. Weights above 1 are rejected
 *  10. Required account identity is validated
 *  11. Other required fields are validated
 *  12. signal_value must be a JSON object
 *  13. signal_metadata optional but must be object/null if present
 */

import { describe, it, expect } from 'vitest';
import {
  SIGNAL_TYPES,
  isSignalType,
  SIGNAL_SOURCES,
  isSignalSource,
  SIGNAL_DIRECTIONS,
  isSignalDirection,
  SIGNAL_WEIGHT_MIN,
  SIGNAL_WEIGHT_MAX,
} from './types';
import {
  validateTrustSignal,
  isValidSignalWeight,
  TrustSignal,
} from './signal-model';

// Helper: a valid signal input for testing
function validSignalInput(): Record<string, unknown> {
  return {
    account_id: '550e8400-e29b-41d4-a716-446655440000',
    signal_type: 'TRANSACTION_HISTORY',
    signal_source: 'COMMERCE',
    signal_direction: 'POSITIVE',
    signal_value: { count: 10, avg_value: 50.0 },
    signal_weight: 0.15,
    signal_metadata: { source_ref: 'order_123' },
  };
}

describe('TRU-002: Trust Signal Model', () => {
  // ── 1. Signal Type ──────────────────────────────────────────────

  describe('Signal Type', () => {
    it('valid signal types are accepted', () => {
      for (const type of SIGNAL_TYPES) {
        expect(isSignalType(type)).toBe(true);
      }
    });

    it('invalid signal types are rejected', () => {
      expect(isSignalType('PAYMENT_RELIABILITY')).toBe(false);
      expect(isSignalType('DISPUTE_RESOLUTION')).toBe(false);
      expect(isSignalType('KYC_COMPLETION')).toBe(false);
      expect(isSignalType('REVIEW_HISTORY')).toBe(false);
      expect(isSignalType('COMPLIANCE_STATUS')).toBe(false);
      expect(isSignalType('TRANSACTION_VOLUME')).toBe(false);
      expect(isSignalType('REFUND_RATE')).toBe(false);
      expect(isSignalType('DELIVERY_PERFORMANCE')).toBe(false);
      expect(isSignalType('RATING_AVERAGE')).toBe(false);
      expect(isSignalType('RATING_COUNT')).toBe(false);
      expect(isSignalType('')).toBe(false);
      expect(isSignalType(null)).toBe(false);
      expect(isSignalType(undefined)).toBe(false);
      expect(isSignalType(123)).toBe(false);
    });

    it('there are exactly 17 signal types', () => {
      expect(SIGNAL_TYPES).toHaveLength(17);
    });
  });

  // ── 2. Signal Source ────────────────────────────────────────────

  describe('Signal Source', () => {
    it('valid sources are accepted', () => {
      for (const source of SIGNAL_SOURCES) {
        expect(isSignalSource(source)).toBe(true);
      }
    });

    it('invalid sources are rejected', () => {
      expect(isSignalSource('PAYMENTS')).toBe(false);
      expect(isSignalSource('SOCIAL')).toBe(false);
      expect(isSignalSource('EXTERNAL')).toBe(false);
      expect(isSignalSource('')).toBe(false);
      expect(isSignalSource(null)).toBe(false);
      expect(isSignalSource(undefined)).toBe(false);
      expect(isSignalSource(123)).toBe(false);
    });

    it('there are exactly 7 signal sources', () => {
      expect(SIGNAL_SOURCES).toHaveLength(7);
    });
  });

  // ── 3. Signal Direction ─────────────────────────────────────────

  describe('Signal Direction', () => {
    it('valid directions are accepted', () => {
      for (const direction of SIGNAL_DIRECTIONS) {
        expect(isSignalDirection(direction)).toBe(true);
      }
    });

    it('invalid directions are rejected', () => {
      expect(isSignalDirection('UP')).toBe(false);
      expect(isSignalDirection('DOWN')).toBe(false);
      expect(isSignalDirection('STRONG_POSITIVE')).toBe(false);
      expect(isSignalDirection('')).toBe(false);
      expect(isSignalDirection(null)).toBe(false);
      expect(isSignalDirection(undefined)).toBe(false);
      expect(isSignalDirection(123)).toBe(false);
    });

    it('there are exactly 3 signal directions', () => {
      expect(SIGNAL_DIRECTIONS).toHaveLength(3);
    });
  });

  // ── 4. Signal Weight ────────────────────────────────────────────

  describe('Signal Weight', () => {
    it('valid weights between 0 and 1 are accepted', () => {
      expect(isValidSignalWeight(0)).toBe(true);
      expect(isValidSignalWeight(0.0)).toBe(true);
      expect(isValidSignalWeight(0.15)).toBe(true);
      expect(isValidSignalWeight(0.5)).toBe(true);
      expect(isValidSignalWeight(0.85)).toBe(true);
      expect(isValidSignalWeight(1)).toBe(true);
      expect(isValidSignalWeight(1.0)).toBe(true);
    });

    it('weights below 0 are rejected', () => {
      expect(isValidSignalWeight(-0.01)).toBe(false);
      expect(isValidSignalWeight(-0.1)).toBe(false);
      expect(isValidSignalWeight(-1)).toBe(false);
    });

    it('weights above 1 are rejected', () => {
      expect(isValidSignalWeight(1.01)).toBe(false);
      expect(isValidSignalWeight(1.1)).toBe(false);
      expect(isValidSignalWeight(2)).toBe(false);
    });

    it('non-number weights are rejected', () => {
      expect(isValidSignalWeight('0.5')).toBe(false);
      expect(isValidSignalWeight(null)).toBe(false);
      expect(isValidSignalWeight(undefined)).toBe(false);
      expect(isValidSignalWeight(NaN)).toBe(false);
      expect(isValidSignalWeight(Infinity)).toBe(false);
    });

    it('weight bounds match database constraint', () => {
      expect(SIGNAL_WEIGHT_MIN).toBe(0);
      expect(SIGNAL_WEIGHT_MAX).toBe(1);
    });
  });

  // ── 5. Full Signal Validation ───────────────────────────────────

  describe('validateTrustSignal', () => {
    it('accepts a fully valid signal', () => {
      const result = validateTrustSignal(validSignalInput());
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.signal).not.toBeNull();
      expect(result.signal?.account_id).toBe('550e8400-e29b-41d4-a716-446655440000');
      expect(result.signal?.signal_type).toBe('TRANSACTION_HISTORY');
      expect(result.signal?.signal_source).toBe('COMMERCE');
      expect(result.signal?.signal_direction).toBe('POSITIVE');
      expect(result.signal?.signal_weight).toBe(0.15);
    });

    it('accepts a signal without metadata', () => {
      const input = validSignalInput();
      delete input.signal_metadata;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(true);
      expect(result.signal?.signal_metadata).toBeNull();
    });

    it('accepts a signal with null metadata', () => {
      const input = validSignalInput();
      input.signal_metadata = null;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(true);
      expect(result.signal?.signal_metadata).toBeNull();
    });

    it('rejects null input', () => {
      const result = validateTrustSignal(null);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Signal must be an object.');
      expect(result.signal).toBeNull();
    });

    it('rejects undefined input', () => {
      const result = validateTrustSignal(undefined);
      expect(result.valid).toBe(false);
      expect(result.signal).toBeNull();
    });

    it('rejects non-object input', () => {
      const result = validateTrustSignal('not an object');
      expect(result.valid).toBe(false);
      expect(result.signal).toBeNull();
    });
  });

  // ── 6. Account ID Validation ────────────────────────────────────

  describe('Account ID validation', () => {
    it('rejects missing account_id', () => {
      const input = validSignalInput();
      delete input.account_id;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('account_id'))).toBe(true);
    });

    it('rejects empty account_id', () => {
      const input = validSignalInput();
      input.account_id = '';
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('account_id'))).toBe(true);
    });

    it('rejects whitespace-only account_id', () => {
      const input = validSignalInput();
      input.account_id = '   ';
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('account_id'))).toBe(true);
    });

    it('rejects non-string account_id', () => {
      const input = validSignalInput();
      input.account_id = 12345;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('account_id'))).toBe(true);
    });
  });

  // ── 7. Signal Type Validation (full model) ───────────────────────

  describe('Signal type validation (full model)', () => {
    it('rejects invalid signal_type', () => {
      const input = validSignalInput();
      input.signal_type = 'PAYMENT_RELIABILITY';
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_type'))).toBe(true);
    });

    it('rejects missing signal_type', () => {
      const input = validSignalInput();
      delete input.signal_type;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_type'))).toBe(true);
    });

    it('accepts all 17 valid signal types', () => {
      for (const type of SIGNAL_TYPES) {
        const input = validSignalInput();
        input.signal_type = type;
        const result = validateTrustSignal(input);
        expect(result.valid).toBe(true);
      }
    });
  });

  // ── 8. Signal Source Validation (full model) ────────────────────

  describe('Signal source validation (full model)', () => {
    it('rejects invalid signal_source', () => {
      const input = validSignalInput();
      input.signal_source = 'SOCIAL';
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_source'))).toBe(true);
    });

    it('rejects missing signal_source', () => {
      const input = validSignalInput();
      delete input.signal_source;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_source'))).toBe(true);
    });

    it('accepts all 7 valid signal sources', () => {
      for (const source of SIGNAL_SOURCES) {
        const input = validSignalInput();
        input.signal_source = source;
        const result = validateTrustSignal(input);
        expect(result.valid).toBe(true);
      }
    });
  });

  // ── 9. Signal Direction Validation (full model) ─────────────────

  describe('Signal direction validation (full model)', () => {
    it('rejects invalid signal_direction', () => {
      const input = validSignalInput();
      input.signal_direction = 'UP';
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_direction'))).toBe(true);
    });

    it('rejects missing signal_direction', () => {
      const input = validSignalInput();
      delete input.signal_direction;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_direction'))).toBe(true);
    });

    it('accepts all 3 valid signal directions', () => {
      for (const direction of SIGNAL_DIRECTIONS) {
        const input = validSignalInput();
        input.signal_direction = direction;
        const result = validateTrustSignal(input);
        expect(result.valid).toBe(true);
      }
    });
  });

  // ── 10. Signal Weight Validation (full model) ───────────────────

  describe('Signal weight validation (full model)', () => {
    it('rejects weight below 0', () => {
      const input = validSignalInput();
      input.signal_weight = -0.01;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_weight'))).toBe(true);
    });

    it('rejects weight above 1', () => {
      const input = validSignalInput();
      input.signal_weight = 1.01;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_weight'))).toBe(true);
    });

    it('rejects missing weight', () => {
      const input = validSignalInput();
      delete input.signal_weight;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_weight'))).toBe(true);
    });

    it('rejects non-number weight', () => {
      const input = validSignalInput();
      input.signal_weight = '0.5';
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_weight'))).toBe(true);
    });

    it('accepts boundary weights 0 and 1', () => {
      const input1 = validSignalInput();
      input1.signal_weight = 0;
      expect(validateTrustSignal(input1).valid).toBe(true);

      const input2 = validSignalInput();
      input2.signal_weight = 1;
      expect(validateTrustSignal(input2).valid).toBe(true);
    });
  });

  // ── 11. Signal Value Validation ────────────────────────────────

  describe('Signal value validation', () => {
    it('rejects missing signal_value', () => {
      const input = validSignalInput();
      delete input.signal_value;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_value'))).toBe(true);
    });

    it('rejects null signal_value', () => {
      const input = validSignalInput();
      input.signal_value = null;
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_value'))).toBe(true);
    });

    it('rejects array signal_value', () => {
      const input = validSignalInput();
      input.signal_value = [1, 2, 3];
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_value'))).toBe(true);
    });

    it('rejects primitive signal_value', () => {
      const input = validSignalInput();
      input.signal_value = 'not an object';
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_value'))).toBe(true);
    });

    it('accepts empty object signal_value', () => {
      const input = validSignalInput();
      input.signal_value = {};
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(true);
    });
  });

  // ── 12. Signal Metadata Validation ──────────────────────────────

  describe('Signal metadata validation', () => {
    it('rejects array signal_metadata', () => {
      const input = validSignalInput();
      input.signal_metadata = [1, 2, 3];
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_metadata'))).toBe(true);
    });

    it('rejects primitive signal_metadata', () => {
      const input = validSignalInput();
      input.signal_metadata = 'not an object';
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.includes('signal_metadata'))).toBe(true);
    });

    it('accepts object signal_metadata', () => {
      const input = validSignalInput();
      input.signal_metadata = { key: 'value' };
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(true);
    });
  });

  // ── 13. Multiple errors ────────────────────────────────────────

  describe('Multiple validation errors', () => {
    it('collects all errors for an empty object', () => {
      const result = validateTrustSignal({});
      expect(result.valid).toBe(false);
      // account_id, signal_type, signal_source, signal_direction, signal_value, signal_weight
      expect(result.errors.length).toBeGreaterThanOrEqual(6);
    });

    it('collects multiple errors for invalid fields', () => {
      const result = validateTrustSignal({
        account_id: '',
        signal_type: 'INVALID',
        signal_source: 'INVALID',
        signal_direction: 'INVALID',
        signal_value: null,
        signal_weight: -1,
      });
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBe(6);
    });
  });

  // ── 14. Type integrity ──────────────────────────────────────────

  describe('Type integrity', () => {
    it('validated signal has correct types', () => {
      const result = validateTrustSignal(validSignalInput());
      expect(result.valid).toBe(true);
      const signal: TrustSignal = result.signal!;
      expect(typeof signal.account_id).toBe('string');
      expect(typeof signal.signal_type).toBe('string');
      expect(typeof signal.signal_source).toBe('string');
      expect(typeof signal.signal_direction).toBe('string');
      expect(typeof signal.signal_weight).toBe('number');
      expect(typeof signal.signal_value).toBe('object');
    });

    it('preserves optional signal_id if provided', () => {
      const input = validSignalInput();
      input.signal_id = '660e8400-e29b-41d4-a716-446655440000';
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(true);
      expect(result.signal?.signal_id).toBe('660e8400-e29b-41d4-a716-446655440000');
    });

    it('preserves optional created_at if provided', () => {
      const input = validSignalInput();
      input.created_at = '2026-08-29T00:00:00Z';
      const result = validateTrustSignal(input);
      expect(result.valid).toBe(true);
      expect(result.signal?.created_at).toBe('2026-08-29T00:00:00Z');
    });
  });
});
