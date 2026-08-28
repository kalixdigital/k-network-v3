/**
 * Tests for auth session helpers and route protection.
 * Tests unauthorized access, session persistence, and authorization boundaries.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the server client
const mockGetUser = vi.fn();
const mockFrom = vi.fn();

vi.mock('@/lib/supabase/server', () => ({
  createServerClient: () => ({
    auth: {
      getUser: mockGetUser,
    },
    from: mockFrom,
  }),
}));

// Import after mocks
import {
  getSession,
  requireSession,
  getAccount,
  hasRole,
  requireRole,
} from '@/lib/auth/session';

describe('getSession', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns unauthenticated when no user', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: null },
    });

    const session = await getSession();
    expect(session.isAuthenticated).toBe(false);
    expect(session.user).toBeNull();
  });

  it('returns authenticated when user exists', async () => {
    const mockUser = { id: 'test-uuid', email: 'test@example.com' };
    mockGetUser.mockResolvedValue({
      data: { user: mockUser },
    });

    const session = await getSession();
    expect(session.isAuthenticated).toBe(true);
    expect(session.user).toEqual(mockUser);
  });
});

describe('requireSession', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('throws UNAUTHORIZED when not authenticated', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: null },
    });

    await expect(requireSession()).rejects.toThrow('UNAUTHORIZED');
  });

  it('returns user when authenticated', async () => {
    const mockUser = { id: 'test-uuid', email: 'test@example.com' };
    mockGetUser.mockResolvedValue({
      data: { user: mockUser },
    });

    const { user } = await requireSession();
    expect(user).toEqual(mockUser);
  });
});

describe('getAccount', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns null when not authenticated', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: null },
    });

    const account = await getAccount();
    expect(account).toBeNull();
  });

  it('returns account data when authenticated', async () => {
    const mockUser = { id: 'test-uuid', email: 'test@example.com' };
    const mockAccount = {
      account_id: 'test-uuid',
      email: 'test@example.com',
      display_name: 'Test User',
      status: 'ACTIVE',
      kyc_tier: 'TIER_0',
      roles: ['customer'],
    };

    mockGetUser.mockResolvedValue({ data: { user: mockUser } });
    mockFrom.mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () => ({
            data: mockAccount,
            error: null,
          }),
        }),
      }),
    });

    const account = await getAccount();
    expect(account).toEqual(mockAccount);
  });

  it('returns null on database error', async () => {
    const mockUser = { id: 'test-uuid', email: 'test@example.com' };
    mockGetUser.mockResolvedValue({ data: { user: mockUser } });
    mockFrom.mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () => ({
            data: null,
            error: { message: 'relation does not exist' },
          }),
        }),
      }),
    });

    const account = await getAccount();
    expect(account).toBeNull();
  });
});

describe('hasRole', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns false when not authenticated', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: null },
    });

    const result = await hasRole('admin');
    expect(result).toBe(false);
  });

  it('returns true when user has the role', async () => {
    const mockUser = { id: 'test-uuid', email: 'test@example.com' };
    mockGetUser.mockResolvedValue({ data: { user: mockUser } });
    mockFrom.mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () => ({
            data: { roles: ['customer', 'vendor'] },
            error: null,
          }),
        }),
      }),
    });

    expect(await hasRole('vendor')).toBe(true);
    expect(await hasRole('customer')).toBe(true);
  });

  it('returns false when user does not have the role', async () => {
    const mockUser = { id: 'test-uuid', email: 'test@example.com' };
    mockGetUser.mockResolvedValue({ data: { user: mockUser } });
    mockFrom.mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () => ({
            data: { roles: ['customer'] },
            error: null,
          }),
        }),
      }),
    });

    expect(await hasRole('admin')).toBe(false);
  });

  it('returns false when roles array is empty', async () => {
    const mockUser = { id: 'test-uuid', email: 'test@example.com' };
    mockGetUser.mockResolvedValue({ data: { user: mockUser } });
    mockFrom.mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () => ({
            data: { roles: [] },
            error: null,
          }),
        }),
      }),
    });

    expect(await hasRole('customer')).toBe(false);
  });

  it('returns false when roles is null', async () => {
    const mockUser = { id: 'test-uuid', email: 'test@example.com' };
    mockGetUser.mockResolvedValue({ data: { user: mockUser } });
    mockFrom.mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () => ({
            data: { roles: null },
            error: null,
          }),
        }),
      }),
    });

    expect(await hasRole('customer')).toBe(false);
  });
});

describe('requireRole', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('throws UNAUTHORIZED when not authenticated', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: null },
    });

    await expect(requireRole('admin')).rejects.toThrow('UNAUTHORIZED');
  });

  it('throws FORBIDDEN when user lacks the role', async () => {
    const mockUser = { id: 'test-uuid', email: 'test@example.com' };
    mockGetUser.mockResolvedValue({ data: { user: mockUser } });
    mockFrom.mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () => ({
            data: { roles: ['customer'] },
            error: null,
          }),
        }),
      }),
    });

    await expect(requireRole('admin')).rejects.toThrow('FORBIDDEN');
  });

  it('returns user when user has the required role', async () => {
    const mockUser = { id: 'test-uuid', email: 'test@example.com' };
    mockGetUser.mockResolvedValue({ data: { user: mockUser } });
    mockFrom.mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () => ({
            data: { roles: ['admin'] },
            error: null,
          }),
        }),
      }),
    });

    const { user } = await requireRole('admin');
    expect(user).toEqual(mockUser);
  });
});
