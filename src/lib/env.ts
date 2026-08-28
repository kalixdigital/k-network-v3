/**
 * Supabase environment configuration.
 *
 * Only NEXT_PUBLIC_ variables are safe to expose to the browser.
 * The service-role key must NEVER be prefixed with NEXT_PUBLIC_ and
 * must only be used in server-side code.
 */

function getEnvVar(name: string, required: boolean = true): string {
  const value = process.env[name];
  if (required && !value) {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
        `Copy .env.example to .env.local and fill in the values.`,
    );
  }
  return value ?? '';
}

/**
 * Public Supabase configuration (safe for browser).
 */
export const supabaseUrl = getEnvVar('NEXT_PUBLIC_SUPABASE_URL');
export const supabaseAnonKey = getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY');

/**
 * Server-only Supabase service role key.
 * NEVER expose this to the browser. Only use in server-side code.
 */
export const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
