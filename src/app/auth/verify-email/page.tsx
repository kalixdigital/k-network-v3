import type { Metadata } from 'next';
import { AuthLayout } from '@/components/auth/auth-layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';
import Link from 'next/link';
import { Suspense } from 'react';
import { VerifyEmailContent } from './verify-email-content';

export const metadata: Metadata = {
  title: 'Verify your email',
  description: 'Check your inbox for the verification link.',
};

export default function VerifyEmailPage() {
  return (
    <AuthLayout>
      <Suspense
        fallback={
          <Card padding="spacious">
            <div className="h-40 animate-pulse rounded-md bg-neutral-100" />
          </Card>
        }
      >
        <VerifyEmailContent />
      </Suspense>
    </AuthLayout>
  );
}
