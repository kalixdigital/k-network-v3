/**
 * Input validation utilities for the Identity Engine.
 *
 * Password requirements per SRS-IDM-003 and UXDS-1 §6.3:
 *   - Minimum 12 characters
 *   - At least 1 uppercase letter
 *   - At least 1 number
 *   - At least 1 symbol
 *
 * Email validation uses a pragmatic RFC 5322 subset.
 */

export interface PasswordValidationResult {
  valid: boolean;
  errors: string[];
  /** 0 (empty) – 4 (strong), per UXDS-1 §6.3 password strength meter */
  strength: 0 | 1 | 2 | 3 | 4;
}

const PASSWORD_MIN_LENGTH = 12;

/**
 * Validate a password against K-NETWORK complexity requirements.
 * Returns a list of specific error messages and a strength score.
 */
export function validatePassword(password: string): PasswordValidationResult {
  const errors: string[] = [];

  if (password.length < PASSWORD_MIN_LENGTH) {
    errors.push(`Password must be at least ${PASSWORD_MIN_LENGTH} characters.`);
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter.');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number.');
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push('Password must contain at least one symbol.');
  }

  // Strength calculation per UXDS-1 §6.3
  let strength: 0 | 1 | 2 | 3 | 4 = 0;

  if (password.length === 0) {
    strength = 0;
  } else {
    let score = 0;
    if (password.length >= PASSWORD_MIN_LENGTH) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    // Bonus for length
    if (password.length >= 16) score++;

    if (score <= 1) strength = 1;
    else if (score === 2) strength = 2;
    else if (score === 3) strength = 3;
    else strength = 4;
  }

  return {
    valid: errors.length === 0,
    errors,
    strength,
  };
}

/**
 * Validate an email address using a pragmatic pattern.
 * Does not guarantee deliverability — only structural correctness.
 */
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Validate a display name / full name.
 * Per UXDS-1 §6.3: min 2 chars, max 100 chars.
 */
export function validateDisplayName(name: string): boolean {
  const trimmed = name.trim();
  return trimmed.length >= 2 && trimmed.length <= 100;
}

/**
 * Validate a username.
 * Per UXDS-1 §6.3: 3–30 chars, alphanumeric + underscore.
 */
export function validateUsername(username: string): boolean {
  return /^[a-zA-Z0-9_]{3,30}$/.test(username);
}

/**
 * Sanitize user input to prevent XSS in stored data.
 * Trims whitespace and removes angle brackets.
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}
