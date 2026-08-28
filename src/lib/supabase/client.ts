'use client';

import { createBrowserClient as createSupabaseBrowserClient } from '@supabase/ssr';
import { supabaseUrl, supabaseAnonKey } from '@/lib/env';

/**
 * Browser-side Supabase client.
 *
 * Uses the anon key only. Row Level Security is enforced by Supabase.
 * The service-role key is NEVER available in the browser.
 *
 * Use this client in Client Components for authenticated data access
 * that respects RLS policies.
 */
export function createBrowserClient() {
  return createSupabaseBrowserClient(supabaseUrl, supabaseAnonKey);
}
