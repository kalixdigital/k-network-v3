'use client';

/**
 * Forgot password form — sends a password reset email via Supabase Auth.
 * Per UXDS-1 §6.5: Password Recovery flow.
 */

import { useActionState, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert } from '@/components/ui/alert';
import { createBrowserClient } from '@/lib/supabase/client';
import { validateEmail } from '@/lib/validation';
import Link from 'next/link';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    const supabase = createBrowserClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) {
      setStatus('error');
    } else {
      setStatus('sent');
    }
  };

  if (status === 'sent') {
    return (
      <div className="space-y-4">
        <Alert variant="success" title="Reset link sent">
          We sent a password reset link to <span className="font-medium">{email}</span>.
          The link will expire in 30 minutes.
        </Alert>
        <Link href="/auth/login" className="block">
          <Button variant="outline" fullWidth>
            Back to sign in
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {status === 'error' && (
        <Alert variant="danger">
          Unable to send reset email. Please try again later.
        </Alert>
      )}

      <Input
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        hasError={!!emailError}
        errorText={emailError ?? undefined}
        required
      />

      <Button type="submit" size="lg" fullWidth isLoading={status === 'sending'}>
        Send reset link
      </Button>

      <p className="text-center text-body-sm text-neutral-600">
        Remember your password?{' '}
        <Link
          href="/auth/login"
          className="font-medium text-primary-500 hover:text-primary-600"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
