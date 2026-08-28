import type { Metadata } from 'next';
import { AuthLayout } from '@/components/auth/auth-layout';
import { Card } from '@/components/ui/card';
import { ForgotPasswordForm } from './forgot-password-form';

export const metadata: Metadata = {
  title: 'Forgot password',
  description: 'Reset your K-NETWORK account password.',
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <Card padding="spacious" className="space-y-6">
        <div className="text-center">
          <h1 className="text-h3 text-neutral-950">Forgot password</h1>
          <p className="mt-1 text-body-sm text-neutral-600">
            Enter your email and we&apos;ll send you a reset link.
          </p>
        </div>
        <ForgotPasswordForm />
      </Card>
    </AuthLayout>
  );
}
