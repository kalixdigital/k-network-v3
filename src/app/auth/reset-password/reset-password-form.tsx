'use client';

/**
 * Reset password form — reached via the email reset link.
 * Per UXDS-1 §6.5: Set new password → "Password changed successfully"
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert } from '@/components/ui/alert';
import { PasswordStrengthMeter } from '@/components/auth/password-strength-meter';
import { createBrowserClient } from '@/lib/supabase/client';
import { validatePassword } from '@/lib/validation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function ResetPasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmError, setConfirmError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const pwCheck = validatePassword(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!pwCheck.valid) {
      setError(pwCheck.errors[0] ?? 'Password does not meet requirements.');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmError('Passwords do not match.');
      return;
    }
    setConfirmError(null);

    setStatus('saving');
    const supabase = createBrowserClient();
    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setStatus('error');
      setError('Unable to update your password. The link may have expired.');
    } else {
      setStatus('success');
      setTimeout(() => router.push('/auth/login'), 2000);
    }
  };

  if (status === 'success') {
    return (
      <div className="space-y-4">
        <Alert variant="success" title="Password changed successfully">
          Your password has been updated. Redirecting to sign in…
        </Alert>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {error && <Alert variant="danger">{error}</Alert>}

      <div>
        <Input
          label="New password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="new-password"
          placeholder="At least 12 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-neutral-400 hover:text-neutral-600"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          }
          required
        />
        {password.length > 0 && (
          <PasswordStrengthMeter strength={pwCheck.strength} />
        )}
      </div>

      <Input
        label="Confirm new password"
        type={showPassword ? 'text' : 'password'}
        autoComplete="new-password"
        placeholder="Re-enter your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        hasError={!!confirmError}
        errorText={confirmError ?? undefined}
        required
      />

      <Button type="submit" size="lg" fullWidth isLoading={status === 'saving'}>
        Update password
      </Button>

      <p className="text-center text-body-sm text-neutral-600">
        <Link
          href="/auth/login"
          className="font-medium text-primary-500 hover:text-primary-600"
        >
          Back to sign in
        </Link>
      </p>
    </form>
  );
}
