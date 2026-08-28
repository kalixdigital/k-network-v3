import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { supabaseUrl, supabaseAnonKey } from '@/lib/env';

/**
 * Middleware to refresh the Supabase auth session on every request.
 *
 * This ensures the user's session cookie stays fresh and that Server
 * Components always have access to the current auth state.
 *
 * NOTE: This does not implement authentication itself — it only
 * refreshes existing sessions. Authentication flows (login, register,
 * etc.) are not part of Task 1 (Application Foundation).
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  // Skip Supabase calls during build when env vars are placeholders.
  // This prevents network errors during static generation.
  if (
    !supabaseUrl ||
    supabaseUrl.includes('placeholder') ||
    !supabaseAnonKey ||
    supabaseAnonKey.includes('placeholder')
  ) {
    return supabaseResponse;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(
        cookiesToSet: {
          name: string;
          value: string;
          options?: Record<string, unknown>;
        }[],
      ) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options as never),
        );
      },
    },
  });

  // Refresh the session — this is safe to call even when no session exists.
  await supabase.auth.getUser();

  return supabaseResponse;
}
