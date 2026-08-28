/**
 * Tests for auth server actions.
 * Tests registration, login, logout, and profile update flows.
 *
 * These tests mock the Supabase client to test validation logic
 * and error handling without hitting a real database.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { redirect } from 'next/navigation';

// Mock the server client before importing actions
const mockSignUp = vi.fn();
const mockSignInWithPassword = vi.fn();
const mockSignOut = vi.fn();
const mockGetUser = vi.fn();
const mockUpdateUser = vi.fn();
const mockResend = vi.fn();
const mockFrom = vi.fn();

vi.mock('@/lib/supabase/server', () => ({
  createServerClient: () => ({
    auth: {
      signUp: mockSignUp,
      signInWithPassword: mockSignInWithPassword,
      signOut: mockSignOut,
      getUser: mockGetUser,
      updateUser: mockUpdateUser,
      resend: mockResend,
    },
    from: mockFrom,
  }),
}));

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

vi.mock('next/cache', () => ({
  revalidatePath: vi.fn(),
}));

// Import after mocks are set up
import {
  registerAction,
  loginAction,
  logoutAction,
  resendVerificationAction,
  updateProfileAction,
} from '@/app/auth/actions';

describe('registerAction', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns field errors for invalid email', async () => {
    const formData = new FormData();
    formData.set('email', 'not-an-email');
    formData.set('password', 'ValidP@ssw0rd1');
    formData.set('displayName', 'Test User');
    formData.set('termsAccepted', 'on');

    const result = await registerAction(formData);
    expect(result.fieldErrors?.email).toBeDefined();
  });

  it('returns field error for short password', async () => {
    const formData = new FormData();
    formData.set('email', 'test@example.com');
    formData.set('password', 'short');
    formData.set('displayName', 'Test User');
    formData.set('termsAccepted', 'on');

    const result = await registerAction(formData);
    expect(result.fieldErrors?.password).toBeDefined();
  });

  it('returns field error when terms not accepted', async () => {
    const formData = new FormData();
    formData.set('email', 'test@example.com');
    formData.set('password', 'ValidP@ssw0rd1');
    formData.set('displayName', 'Test User');
    // termsAccepted not set

    const result = await registerAction(formData);
    expect(result.fieldErrors?.termsAccepted).toBeDefined();
  });

  it('returns field error for invalid display name', async () => {
    const formData = new FormData();
    formData.set('email', 'test@example.com');
    formData.set('password', 'ValidP@ssw0rd1');
    formData.set('displayName', 'A'); // too short
    formData.set('termsAccepted', 'on');

    const result = await registerAction(formData);
    expect(result.fieldErrors?.displayName).toBeDefined();
  });

  it('calls redirect on successful registration without session', async () => {
    mockSignUp.mockResolvedValue({
      data: { user: { id: 'test-id' }, session: null },
      error: null,
    });

    const formData = new FormData();
    formData.set('email', 'test@example.com');
    formData.set('password', 'ValidP@ssw0rd1');
    formData.set('displayName', 'Test User');
    formData.set('termsAccepted', 'on');

    await registerAction(formData);
    expect(mockSignUp).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'ValidP@ssw0rd1',
      options: { data: { display_name: 'Test User' } },
    });
    expect(redirect).toHaveBeenCalled();
  });

  it('returns generic error for duplicate email', async () => {
    mockSignUp.mockResolvedValue({
      data: { user: null, session: null },
      error: { message: 'User already registered' },
    });

    const formData = new FormData();
    formData.set('email', 'existing@example.com');
    formData.set('password', 'ValidP@ssw0rd1');
    formData.set('displayName', 'Test User');
    formData.set('termsAccepted', 'on');

    const result = await registerAction(formData);
    expect(result.error).toContain('already exist');
    // Should not leak the raw Supabase error
    expect(result.error).not.toContain('User already registered');
  });
});

describe('loginAction', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns field error for empty password', async () => {
    const formData = new FormData();
    formData.set('email', 'test@example.com');
    formData.set('password', '');

    const result = await loginAction(formData);
    expect(result.fieldErrors?.password).toBeDefined();
  });

  it('returns field error for invalid email', async () => {
    const formData = new FormData();
    formData.set('email', 'not-an-email');
    formData.set('password', 'somepassword');

    const result = await loginAction(formData);
    expect(result.fieldErrors?.email).toBeDefined();
  });

  it('returns generic error for invalid credentials', async () => {
    mockSignInWithPassword.mockResolvedValue({
      data: { session: null },
      error: { message: 'Invalid login credentials' },
    });

    const formData = new FormData();
    formData.set('email', 'test@example.com');
    formData.set('password', 'wrongpassword');

    const result = await loginAction(formData);
    expect(result.error).toContain('Invalid email or password');
    // Should not leak the raw error
    expect(result.error).not.toContain('Invalid login credentials');
  });

  it('calls redirect on successful login', async () => {
    mockSignInWithPassword.mockResolvedValue({
      data: {
        session: { access_token: 'token' },
        user: { id: 'test-id' },
      },
      error: null,
    });

    const formData = new FormData();
    formData.set('email', 'test@example.com');
    formData.set('password', 'ValidP@ssw0rd1');

    await loginAction(formData);
    expect(mockSignInWithPassword).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'ValidP@ssw0rd1',
    });
    expect(redirect).toHaveBeenCalledWith('/dashboard');
  });
});

describe('logoutAction', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls signOut and redirects to home', async () => {
    mockSignOut.mockResolvedValue({ error: null });

    await logoutAction();
    expect(mockSignOut).toHaveBeenCalled();
    expect(redirect).toHaveBeenCalledWith('/');
  });
});

describe('resendVerificationAction', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns error for invalid email', async () => {
    const formData = new FormData();
    formData.set('email', 'not-an-email');

    const result = await resendVerificationAction(formData);
    expect(result.error).toBeDefined();
  });

  it('returns success on valid resend', async () => {
    mockResend.mockResolvedValue({ error: null });

    const formData = new FormData();
    formData.set('email', 'test@example.com');

    const result = await resendVerificationAction(formData);
    expect(result.error).toBeUndefined();
    expect(mockResend).toHaveBeenCalledWith({
      type: 'signup',
      email: 'test@example.com',
    });
  });
});

describe('updateProfileAction', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns error when not authenticated', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: null },
    });

    const formData = new FormData();
    formData.set('displayName', 'Test User');

    const result = await updateProfileAction(formData);
    expect(result.error).toContain('logged in');
  });

  it('returns field error for invalid display name', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: { id: 'test-id' } },
    });

    const formData = new FormData();
    formData.set('displayName', 'A'); // too short

    const result = await updateProfileAction(formData);
    expect(result.fieldErrors?.displayName).toBeDefined();
  });

  it('returns field error for invalid username', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: { id: 'test-id' } },
    });

    const formData = new FormData();
    formData.set('displayName', 'Test User');
    formData.set('username', 'a!'); // invalid

    const result = await updateProfileAction(formData);
    expect(result.fieldErrors?.username).toBeDefined();
  });
});
