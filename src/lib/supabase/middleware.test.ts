/**
 * Tests for middleware route protection logic.
 * Tests unauthorized access to protected routes, redirect behavior,
 * and authenticated user redirect away from auth pages.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { type NextRequest } from 'next/server';

// Mock Supabase env to not be placeholder
vi.mock('@/lib/env', () => ({
  supabaseUrl: 'https://test.supabase.co',
  supabaseAnonKey: 'test-anon-key',
}));

// Mock the Supabase server client
const mockGetUser = vi.fn();

vi.mock('@supabase/ssr', () => ({
  createServerClient: () => ({
    auth: {
      getUser: mockGetUser,
    },
  }),
}));

// Import after mocks
import { updateSession } from '@/lib/supabase/middleware';

function createMockRequest(pathname: string): NextRequest {
  const url = new URL(`https://example.com${pathname}`);
  return {
    nextUrl: { pathname, origin: 'https://example.com' },
    url: url.toString(),
    cookies: {
      getAll: () => [],
      set: vi.fn(),
    },
  } as unknown as NextRequest;
}

describe('updateSession (middleware)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('redirects unauthenticated user from /dashboard to /auth/login', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null } });

    const request = createMockRequest('/dashboard');
    const response = await updateSession(request);

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toContain('/auth/login');
    expect(response.headers.get('location')).toContain('redirect_to=%2Fdashboard');
  });

  it('redirects unauthenticated user from /account to /auth/login', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null } });

    const request = createMockRequest('/account');
    const response = await updateSession(request);

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toContain('/auth/login');
  });

  it('allows authenticated user to access /dashboard', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: { id: 'test-uuid' } },
    });

    const request = createMockRequest('/dashboard');
    const response = await updateSession(request);

    // Should not redirect — returns NextResponse.next()
    expect(response.status).not.toBe(307);
  });

  it('redirects authenticated user from /auth/login to /dashboard', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: { id: 'test-uuid' } },
    });

    const request = createMockRequest('/auth/login');
    const response = await updateSession(request);

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toContain('/dashboard');
  });

  it('redirects authenticated user from /auth/register to /dashboard', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: { id: 'test-uuid' } },
    });

    const request = createMockRequest('/auth/register');
    const response = await updateSession(request);

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toContain('/dashboard');
  });

  it('allows unauthenticated user to access /auth/login', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null } });

    const request = createMockRequest('/auth/login');
    const response = await updateSession(request);

    expect(response.status).not.toBe(307);
  });

  it('allows unauthenticated user to access /auth/register', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null } });

    const request = createMockRequest('/auth/register');
    const response = await updateSession(request);

    expect(response.status).not.toBe(307);
  });

  it('allows unauthenticated user to access public routes', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null } });

    const request = createMockRequest('/');
    const response = await updateSession(request);

    expect(response.status).not.toBe(307);
  });

  it('protects nested routes under /dashboard', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null } });

    const request = createMockRequest('/dashboard/settings');
    const response = await updateSession(request);

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toContain('/auth/login');
  });

  it('allows authenticated user to access public routes', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: { id: 'test-uuid' } },
    });

    const request = createMockRequest('/');
    const response = await updateSession(request);

    expect(response.status).not.toBe(307);
  });
});
