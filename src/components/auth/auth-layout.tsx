/**
 * Shared auth page layout component.
 *
 * Renders a centered card on a neutral background, per UXDS-1 §6.2:
 * "Centered card, max-width 400px, on neutral.50 background"
 */

import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function AuthLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-neutral-50 px-4 py-12">
      <div
        className={cn(
          'w-full max-w-[400px] space-y-6',
          className,
        )}
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500 text-white">
            <svg
              className="h-7 w-7"
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
          <p className="text-body-sm text-neutral-500">
            One platform. One identity.
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}
