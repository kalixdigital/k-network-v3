'use server';

/**
 * Identity Engine — Server Actions
 *
 * Implements registration, login, logout, and email verification
 * using Supabase Auth. All actions are server-side only and use
 * the anon key client (RLS enforced).
 *
 * Security:
 *   - Passwords are never logged or returned in error messages.
 *   - Error messages are generic to prevent user enumeration.
 *   - All inputs are validated server-side before reaching Supabase.
 *   - The service-role key is NEVER used here.
 */

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createServerClient } from '@/lib/supabase/server';
import {
  validateEmail,
  validatePassword,
  validateDisplayName,
  sanitizeInput,
} from '@/lib/validation';

// ─── Types ───────────────────────────────────────────────────────────

export interface AuthActionResult {
  error?: string;
  fieldErrors?: Record<string, string>;
}

// ─── Registration ────────────────────────────────────────────────────

export async function registerAction(
  formData: FormData,
): Promise<AuthActionResult> {
  const email = sanitizeInput(String(formData.get('email') ?? ''));
  const password = String(formData.get('password') ?? '');
  const displayName = sanitizeInput(String(formData.get('displayName') ?? ''));
  const termsAccepted = formData.get('termsAccepted') === 'on';

  // ── Server-side validation ──
  const fieldErrors: Record<string, string> = {};

  if (!validateEmail(email)) {
    fieldErrors.email = 'Please enter a valid email address.';
  }
  if (!validateDisplayName(displayName)) {
    fieldErrors.displayName = 'Name must be 2–100 characters.';
  }
  const pwCheck = validatePassword(password);
  if (!pwCheck.valid) {
    fieldErrors.password = pwCheck.errors[0] ?? 'Password does not meet requirements.';
  }
  if (!termsAccepted) {
    fieldErrors.termsAccepted = 'You must accept the Terms of Service to continue.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  const supabase = createServerClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: displayName,
      },
    },
  });

  if (error) {
    // Map Supabase errors to generic messages to prevent enumeration
    if (
      error.message.toLowerCase().includes('already') ||
      error.message.toLowerCase().includes('registered') ||
      error.message.toLowerCase().includes('exists')
    ) {
      return {
        error: 'An account with this email may already exist. Try logging in instead.',
      };
    }
    // Rate limit or other auth errors
    return {
      error: 'Unable to create your account at this time. Please try again later.',
    };
  }

  // The trigger fn_handle_new_auth_user auto-creates the idm.accounts row.
  // If email confirmation is enabled, the user must verify before logging in.
  if (data.user && !data.session) {
    redirect('/auth/verify-email?email=' + encodeURIComponent(email));
  }

  // If email confirmation is disabled, the user is auto-logged-in
  revalidatePath('/');
  redirect('/dashboard');
}

// ─── Login ───────────────────────────────────────────────────────────

export async function loginAction(
  formData: FormData,
): Promise<AuthActionResult> {
  const email = sanitizeInput(String(formData.get('email') ?? ''));
  const password = String(formData.get('password') ?? '');

  const fieldErrors: Record<string, string> = {};

  if (!validateEmail(email)) {
    fieldErrors.email = 'Please enter a valid email address.';
  }
  if (password.length === 0) {
    fieldErrors.password = 'Please enter your password.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  const supabase = createServerClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    // Generic error to prevent user enumeration
    return {
      error: 'Invalid email or password. Please check your credentials and try again.',
    };
  }

  revalidatePath('/');
  redirect('/dashboard');
}

// ─── Logout ──────────────────────────────────────────────────────────

export async function logoutAction(): Promise<void> {
  const supabase = createServerClient();
  await supabase.auth.signOut();
  revalidatePath('/');
  redirect('/');
}

// ─── Resend Verification Email ───────────────────────────────────────

export async function resendVerificationAction(
  formData: FormData,
): Promise<AuthActionResult> {
  const email = sanitizeInput(String(formData.get('email') ?? ''));

  if (!validateEmail(email)) {
    return { error: 'Please enter a valid email address.' };
  }

  const supabase = createServerClient();
  const { error } = await supabase.auth.resend({
    type: 'signup',
    email,
  });

  if (error) {
    return { error: 'Unable to resend verification email. Please try again later.' };
  }

  return {};
}

// ─── Update Profile ──────────────────────────────────────────────────

export async function updateProfileAction(
  formData: FormData,
): Promise<AuthActionResult> {
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'You must be logged in to update your profile.' };
  }

  const displayName = sanitizeInput(String(formData.get('displayName') ?? ''));
  const username = sanitizeInput(String(formData.get('username') ?? ''));

  const fieldErrors: Record<string, string> = {};

  if (!validateDisplayName(displayName)) {
    fieldErrors.displayName = 'Name must be 2–100 characters.';
  }
  if (username && !/^[a-zA-Z0-9_]{3,30}$/.test(username)) {
    fieldErrors.username = 'Username must be 3–30 alphanumeric characters or underscores.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  // Update idm.accounts (RLS: owner can UPDATE own row)
  const { error: accountError } = await supabase
    .from('accounts')
    .update({
      display_name: displayName,
      ...(username ? { username } : {}),
    })
    .eq('account_id', user.id);

  if (accountError) {
    // Check for unique constraint violation on username
    if (accountError.code === '23505') {
      return { fieldErrors: { username: 'This username is already taken.' } };
    }
    return { error: 'Unable to update your profile. Please try again.' };
  }

  // Also update auth user metadata
  await supabase.auth.updateUser({
    data: { display_name: displayName },
  });

  revalidatePath('/account');
  return {};
}
