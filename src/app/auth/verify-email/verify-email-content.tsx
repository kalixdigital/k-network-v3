'use client';

/**
 * Verify-email content — interactive component with resend countdown.
 * Per UXDS-1 §6.3 Step 2: Email Verification screen.
 */

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';
import Link from 'next/link';
import { resendVerificationAction } from '@/app/auth/actions';

export function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') ?? 'your email';
  const [countdown, setCountdown] = useState(30);
  const [resendStatus, setResendStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((c) => c - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleResend = async () => {
    setResendStatus('sending');
    const formData = new FormData();
    formData.set('email', email);
    const result = await resendVerificationAction(formData);
    if (result.error) {
      setResendStatus('error');
    } else {
      setResendStatus('sent');
      setCountdown(30);
    }
  };

  return (
    <Card padding="spacious" className="space-y-6">
      {/* Success icon */}
      <div className="flex justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success-50">
          <svg
            className="h-8 w-8 text-success-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-h3 text-neutral-950">Account created</h1>
        <p className="mt-2 text-body-sm text-neutral-600">
          We sent a verification link to
          <br />
          <span className="font-medium text-neutral-900">{email}</span>
        </p>
      </div>

      {resendStatus === 'error' && (
        <Alert variant="danger">
          Unable to resend verification email. Please try again.
        </Alert>
      )}

      {resendStatus === 'sent' && (
        <Alert variant="success">Verification email sent. Check your inbox.</Alert>
      )}

      <div className="space-y-3">
        <Button
          variant="outline"
          fullWidth
          onClick={handleResend}
          disabled={countdown > 0 || resendStatus === 'sending'}
          isLoading={resendStatus === 'sending'}
        >
          {countdown > 0
            ? `Resend in ${countdown}s`
            : resendStatus === 'sent'
              ? 'Resent ✓'
              : 'Resend verification email'}
        </Button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-caption text-neutral-400">
              Already verified?
            </span>
          </div>
        </div>

        <Link href="/auth/login">
          <Button variant="primary" fullWidth>
            Continue to sign in →
          </Button>
        </Link>
      </div>
    </Card>
  );
}
