import { Suspense } from 'react';
import type { Metadata } from 'next';
import { AuthLayout } from '@/components/auth/auth-layout';
import { RegisterForm } from '@/components/auth/register-form';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Create your account',
  description: 'Join K-NETWORK — one identity across the entire Pan-African ecosystem.',
};

export default function RegisterPage() {
  return (
    <AuthLayout>
      <Card padding="spacious" className="space-y-6">
        <div className="text-center">
          <h1 className="text-h3 text-neutral-950">Create your account</h1>
          <p className="mt-1 text-body-sm text-neutral-600">
            Join K-NETWORK — one identity, many opportunities.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="space-y-4">
              <div className="h-10 animate-pulse rounded-md bg-neutral-100" />
              <div className="h-10 animate-pulse rounded-md bg-neutral-100" />
              <div className="h-10 animate-pulse rounded-md bg-neutral-100" />
              <div className="h-10 animate-pulse rounded-md bg-neutral-100" />
              <div className="h-12 animate-pulse rounded-md bg-neutral-100" />
            </div>
          }
        >
          <RegisterForm />
        </Suspense>
      </Card>

      <p className="text-center text-body-sm text-neutral-600">
        Already have an account?{' '}
        <Link
          href="/auth/login"
          className="font-medium text-primary-500 hover:text-primary-600"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
