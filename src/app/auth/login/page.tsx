import type { Metadata } from 'next';
import { AuthLayout } from '@/components/auth/auth-layout';
import { LoginForm } from '@/components/auth/login-form';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your K-NETWORK account.',
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <Card padding="spacious" className="space-y-6">
        <div className="text-center">
          <h1 className="text-h3 text-neutral-950">Welcome back</h1>
          <p className="mt-1 text-body-sm text-neutral-600">
            Sign in to your K-NETWORK account.
          </p>
        </div>

        <LoginForm />

        <div className="flex items-center justify-between text-body-sm">
          <span className="text-neutral-500">
            <Link
              href="/auth/forgot-password"
              className="font-medium text-primary-500 hover:text-primary-600"
            >
              Forgot password?
            </Link>
          </span>
          <span className="text-neutral-500">
            <Link
              href="/auth/register"
              className="font-medium text-primary-500 hover:text-primary-600"
            >
              Create account
            </Link>
          </span>
        </div>
      </Card>
    </AuthLayout>
  );
}
