/**
 * Account/Profile page — authenticated.
 *
 * Per SRS-IDM-002 and UXDS-1 §6.3 Step 3: Profile Setup.
 * Shows account info and allows editing display name / username.
 */

import { redirect } from 'next/navigation';
import { getSession, getAccount } from '@/lib/auth/session';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProfileForm } from '@/components/auth/profile-form';
import { LogoutButton } from '@/components/auth/logout-button';

export default async function AccountPage() {
  const { user } = await getSession();

  if (!user) {
    redirect('/auth/login');
  }

  const account = await getAccount();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-h2 text-neutral-950">Account</h1>
        <p className="mt-1 text-body text-neutral-600">
          Manage your K-NETWORK identity.
        </p>
      </div>

      {/* Profile edit card */}
      <Card padding="spacious">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Update your display name and username.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProfileForm
            initialDisplayName={account?.display_name ?? ''}
            initialUsername={account?.username}
          />
        </CardContent>
      </Card>

      {/* Account details */}
      <Card padding="spacious">
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
          <CardDescription>
            Your identity foundation across the ecosystem.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-neutral-500">
                Email
              </dt>
              <dd className="mt-1 text-body-sm text-neutral-900">{user.email}</dd>
            </div>
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-neutral-500">
                Account ID
              </dt>
              <dd className="mt-1 break-all text-caption text-neutral-500">
                {user.id}
              </dd>
            </div>
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-neutral-500">
                Status
              </dt>
              <dd className="mt-1">
                <Badge variant="success">{account?.status ?? 'ACTIVE'}</Badge>
              </dd>
            </div>
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-neutral-500">
                KYC Tier
              </dt>
              <dd className="mt-1">
                <Badge variant="primary">{account?.kyc_tier ?? 'TIER_0'}</Badge>
              </dd>
            </div>
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-neutral-500">
                Email Verified
              </dt>
              <dd className="mt-1">
                {user.email_confirmed_at ? (
                  <Badge variant="success">Verified</Badge>
                ) : (
                  <Badge variant="warning">Pending</Badge>
                )}
              </dd>
            </div>
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-neutral-500">
                Member Since
              </dt>
              <dd className="mt-1 text-body-sm text-neutral-900">
                {account?.created_at
                  ? new Date(account.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  : 'Unknown'}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      {/* Security section */}
      <Card padding="spacious">
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>
            Authentication and session management.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-md border border-neutral-200 px-4 py-3">
              <div>
                <p className="text-body-sm font-medium text-neutral-900">
                  Multi-Factor Authentication
                </p>
                <p className="text-caption text-neutral-500">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <Badge variant="neutral">Coming soon</Badge>
            </div>

            <div className="flex items-center justify-between rounded-md border border-neutral-200 px-4 py-3">
              <div>
                <p className="text-body-sm font-medium text-neutral-900">
                  Active Sessions
                </p>
                <p className="text-caption text-neutral-500">
                  Manage your active devices and sessions.
                </p>
              </div>
              <Badge variant="neutral">Coming soon</Badge>
            </div>

            <div className="flex items-center justify-between rounded-md border border-neutral-200 px-4 py-3">
              <div>
                <p className="text-body-sm font-medium text-neutral-900">
                  Sign out
                </p>
                <p className="text-caption text-neutral-500">
                  End your current session on this device.
                </p>
              </div>
              <LogoutButton />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
