/**
 * Server-side auth helpers for the Identity Engine.
 *
 * These functions wrap the Supabase server client to provide
 * typed, ergonomic access to the current user's session and
 * account record. They are safe to call from Server Components,
 * Route Handlers, and Server Actions.
 */

import { createServerClient } from '@/lib/supabase/server';
import type { User } from '@supabase/supabase-js';

/**
 * Result of a getSession check.
 * If `user` is null, the request is unauthenticated.
 */
export interface AuthSession {
  user: User | null;
  isAuthenticated: boolean;
}

/**
 * Get the current authenticated user from the session cookie.
 *
 * Uses supabase.auth.getUser() which validates the JWT server-side
 * — this is NOT a client-side trust check. If the session is expired
 * or invalid, user will be null.
 */
export async function getSession(): Promise<AuthSession> {
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return {
    user,
    isAuthenticated: user !== null,
  };
}

/**
 * Require an authenticated session. Throws a redirect to the login
 * page if the user is not authenticated.
 *
 * Use this in Server Components for protected routes:
 *   const { user } = await requireSession();
 */
export async function requireSession(): Promise<{ user: User }> {
  const { user } = await getSession();

  if (!user) {
    throw new Error('UNAUTHORIZED');
  }

  return { user };
}

/**
 * Get the current user's idm.accounts record.
 * Returns null if not authenticated or if the account record
 * doesn't exist (edge case — should not happen given the trigger).
 */
export async function getAccount() {
  const { user } = await getSession();

  if (!user) {
    return null;
  }

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('accounts')
    .select('*')
    .eq('account_id', user.id)
    .single();

  if (error) {
    console.error('Failed to fetch account:', error.message);
    return null;
  }

  return data;
}

/**
 * Check if the current user has a specific role.
 *
 * Role foundation: accounts have a `roles` array (TEXT[]) that can
 * contain values like 'customer', 'vendor', 'service_provider',
 * 'instructor', 'learner', 'admin'. The array is empty for new
 * accounts — roles are assigned through the profile setup flow
 * and administration.
 */
export async function hasRole(role: string): Promise<boolean> {
  const account = await getAccount();

  if (!account) {
    return false;
  }

  const roles: string[] = account.roles ?? [];
  return roles.includes(role);
}

/**
 * Require the current user to have a specific role.
 * Throws UNAUTHORIZED if not authenticated, FORBIDDEN if lacking the role.
 */
export async function requireRole(role: string): Promise<{ user: User }> {
  const { user } = await requireSession();

  const hasAccess = await hasRole(role);
  if (!hasAccess) {
    throw new Error('FORBIDDEN');
  }

  return { user };
}
