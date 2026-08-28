/**
 * Dashboard home — authenticated landing page.
 *
 * Per the task scope: "Do not build dashboard business features yet."
 * This is the authenticated application shell showing the user's
 * identity foundation (account info, verification status) and
 * engine navigation. No business logic is implemented.
 */

import { redirect } from 'next/navigation';
import { getSession, getAccount } from '@/lib/auth/session';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EmptyState } from '@/components/ui/empty-state';
import { ENGINES } from '@/lib/engines';
import Link from 'next/link';

export default async function DashboardPage() {
  const { user } = await getSession();

  if (!user) {
    redirect('/auth/login');
  }

  const account = await getAccount();

  return (
    <div className="space-y-6">
      {/* Welcome header */}
      <div>
        <h1 className="text-h2 text-neutral-950">
          Welcome, {account?.display_name ?? user.email}
        </h1>
        <p className="mt-1 text-body text-neutral-600">
          Your K-NETWORK identity is active across all engines.
        </p>
      </div>

      {/* Identity status card */}
      <Card padding="spacious">
        <CardHeader>
          <CardTitle>Identity Status</CardTitle>
          <CardDescription>
            Your account foundation across the K-NETWORK ecosystem.
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
                Display Name
              </dt>
              <dd className="mt-1 text-body-sm text-neutral-900">
                {account?.display_name ?? 'Not set'}
              </dd>
            </div>
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-neutral-500">
                Username
              </dt>
              <dd className="mt-1 text-body-sm text-neutral-900">
                {account?.username ?? 'Not set'}
              </dd>
            </div>
            <div>
              <dt className="text-caption font-medium uppercase tracking-wide text-neutral-500">
                Account Status
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
                Roles
              </dt>
              <dd className="mt-1 flex flex-wrap gap-1">
                {account?.roles && account.roles.length > 0 ? (
                  account.roles.map((role: string) => (
                    <Badge key={role} variant="neutral">
                      {role}
                    </Badge>
                  ))
                ) : (
                  <span className="text-body-sm text-neutral-500">
                    No roles assigned yet
                  </span>
                )}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      {/* Engine overview */}
      <div>
        <h2 className="text-h4 text-neutral-950">Platform Engines</h2>
        <p className="mt-1 text-body-sm text-neutral-600">
          One identity gives you access to all engines. Engine features will be
          available as they are built.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ENGINES.map((engine) => (
          <Link key={engine.id} href={`/${engine.slug}`}>
            <Card interactive padding="default">
              <div className="space-y-1">
                <h3 className="text-body font-medium text-neutral-950">
                  {engine.name}
                </h3>
                <p className="text-caption text-neutral-500">
                  {engine.description}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Coming soon notice */}
      <EmptyState
        title="More features coming soon"
        description="Engine business features (commerce, services, learning, rewards, wallet) will be implemented in upcoming tasks. Your identity is ready."
      />
    </div>
  );
}
