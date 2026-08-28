import type { Metadata } from 'next';
import { AuthLayout } from '@/components/auth/auth-layout';
import { Card } from '@/components/ui/card';
import { ResetPasswordForm } from './reset-password-form';

export const metadata: Metadata = {
  title: 'Reset password',
  description: 'Set a new password for your K-NETWORK account.',
};

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <Card padding="spacious" className="space-y-6">
        <div className="text-center">
          <h1 className="text-h3 text-neutral-950">Set new password</h1>
          <p className="mt-1 text-body-sm text-neutral-600">
            Choose a strong password for your account.
          </p>
        </div>
        <ResetPasswordForm />
      </Card>
    </AuthLayout>
  );
}
