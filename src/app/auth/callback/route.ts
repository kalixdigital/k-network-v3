import { NextResponse, type NextRequest } from 'next/server';

/**
 * Auth callback handler for Supabase Auth email verification.
 *
 * When a user clicks the verification link in their email, Supabase
 * redirects them to this route with the auth tokens in the query string.
 * We exchange the code for a session and redirect to the dashboard.
 */

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const redirectTo = requestUrl.searchParams.get('redirect_to') ?? '/dashboard';

  if (code) {
    // Use the server client to exchange the code for a session.
    // We import dynamically to avoid circular deps with middleware.
    const { createServerClient } = await import('@/lib/supabase/server');
    const supabase = createServerClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Redirect to the intended destination (or dashboard)
  return NextResponse.redirect(new URL(redirectTo, requestUrl.origin));
}
