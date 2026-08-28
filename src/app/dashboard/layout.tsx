/**
 * Dashboard layout — authenticated application shell.
 *
 * Per SRS-IDM-007: one identity shared across all engines (SSO).
 * The dashboard provides navigation to all engines once authenticated.
 *
 * This layout checks authentication server-side and redirects
 * unauthenticated users to the login page.
 */

import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth/session';
import { DashboardNav } from '@/components/dashboard/dashboard-nav';
import { LogoutButton } from '@/components/auth/logout-button';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await getSession();

  if (!user) {
    redirect('/auth/login');
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-white">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                />
              </svg>
            </div>
            <span className="text-h5 text-neutral-950">K-NETWORK</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-body-sm text-neutral-600 sm:inline">
              {user.email}
            </span>
            <LogoutButton />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        {/* Sidebar nav (desktop) */}
        <aside className="hidden w-56 flex-shrink-0 md:block">
          <DashboardNav />
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1">
          {children}
        </main>
      </div>

      {/* Mobile nav (bottom) */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-neutral-200 bg-white md:hidden">
        <DashboardNav variant="mobile" />
      </nav>
    </div>
  );
}
