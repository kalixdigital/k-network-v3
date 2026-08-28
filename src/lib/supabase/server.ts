import { cookies } from 'next/headers';
import { createServerClient as createSupabaseServerClient } from '@supabase/ssr';
import { supabaseUrl, supabaseAnonKey } from '@/lib/env';

/**
 * Server-side Supabase client.
 *
 * Uses the anon key (NOT the service-role key) so that Row Level Security
 * policies are enforced. The service-role key bypasses RLS and must never
 * be used in client-facing code.
 *
 * This client reads/writes auth cookies via the Next.js cookies() API,
 * making it suitable for Server Components, Route Handlers, and Server Actions.
 */
export function createServerClient() {
  const cookieStore = cookies();

  return createSupabaseServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string; options?: Record<string, unknown> }[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options as never),
          );
        } catch {
          // The `setAll` method is called from Server Components,
          // where cookies cannot be set. This is safe to ignore
          // if middleware handles session refresh.
        }
      },
    },
  });
}
