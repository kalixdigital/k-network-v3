/**
 * Tests for input validation utilities.
 * Per SRS-IDM-003 and UXDS-1 §6.3 password requirements.
 */

import { describe, it, expect } from 'vitest';
import {
  validatePassword,
  validateEmail,
  validateDisplayName,
  validateUsername,
  sanitizeInput,
} from '@/lib/validation';

describe('validatePassword', () => {
  it('rejects empty password', () => {
    const result = validatePassword('');
    expect(result.valid).toBe(false);
    expect(result.strength).toBe(0);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('rejects password shorter than 12 characters', () => {
    const result = validatePassword('Short1!');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      'Password must be at least 12 characters.',
    );
  });

  it('rejects password without uppercase letter', () => {
    const result = validatePassword('alllowercase123!');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      'Password must contain at least one uppercase letter.',
    );
  });

  it('rejects password without a number', () => {
    const result = validatePassword('NoNumbersHere!');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      'Password must contain at least one number.',
    );
  });

  it('rejects password without a symbol', () => {
    const result = validatePassword('NoSymbols123');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain(
      'Password must contain at least one symbol.',
    );
  });

  it('accepts a valid strong password', () => {
    const result = validatePassword('StrongP@ssw0rd!');
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual([]);
    expect(result.strength).toBe(4);
  });

  it('returns strength 1 for weak passwords', () => {
    const result = validatePassword('aaaaaaaaaaaa');
    expect(result.strength).toBe(1);
  });

  it('returns strength 4 for long varied passwords', () => {
    const result = validatePassword('Th1sIsAVeryStr0ng!P@ssw0rd');
    expect(result.strength).toBe(4);
  });
});

describe('validateEmail', () => {
  it('accepts valid email', () => {
    expect(validateEmail('user@example.com')).toBe(true);
    expect(validateEmail('test.user@domain.co.uk')).toBe(true);
  });

  it('rejects email without @', () => {
    expect(validateEmail('userexample.com')).toBe(false);
  });

  it('rejects email without domain', () => {
    expect(validateEmail('user@')).toBe(false);
  });

  it('rejects empty string', () => {
    expect(validateEmail('')).toBe(false);
  });

  it('rejects email with spaces', () => {
    expect(validateEmail('user @example.com')).toBe(false);
  });
});

describe('validateDisplayName', () => {
  it('accepts valid name', () => {
    expect(validateDisplayName('John Doe')).toBe(true);
    expect(validateDisplayName('A')).toBe(false); // too short
  });

  it('rejects empty name', () => {
    expect(validateDisplayName('')).toBe(false);
    expect(validateDisplayName('   ')).toBe(false);
  });

  it('rejects name longer than 100 characters', () => {
    expect(validateDisplayName('a'.repeat(101))).toBe(false);
  });

  it('accepts name of exactly 2 characters', () => {
    expect(validateDisplayName('Jo')).toBe(true);
  });

  it('accepts name of exactly 100 characters', () => {
    expect(validateDisplayName('a'.repeat(100))).toBe(true);
  });
});

describe('validateUsername', () => {
  it('accepts valid username', () => {
    expect(validateUsername('john_doe')).toBe(true);
    expect(validateUsername('user123')).toBe(true);
  });

  it('rejects username shorter than 3 characters', () => {
    expect(validateUsername('ab')).toBe(false);
  });

  it('rejects username longer than 30 characters', () => {
    expect(validateUsername('a'.repeat(31))).toBe(false);
  });

  it('rejects username with special characters', () => {
    expect(validateUsername('john-doe')).toBe(false);
    expect(validateUsername('john.doe')).toBe(false);
    expect(validateUsername('john@doe')).toBe(false);
  });

  it('accepts username with underscores', () => {
    expect(validateUsername('_john_')).toBe(true);
  });
});

describe('sanitizeInput', () => {
  it('trims whitespace', () => {
    expect(sanitizeInput('  hello  ')).toBe('hello');
  });

  it('removes angle brackets to prevent XSS', () => {
    expect(sanitizeInput('<script>alert(1)</script>')).toBe(
      'scriptalert(1)/script',
    );
  });

  it('handles empty string', () => {
    expect(sanitizeInput('')).toBe('');
  });
});
