/**
 * Error boundary for auth pages.
 * Shows a friendly error message with a retry option.
 */

'use client';

import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';

export default function AuthError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="w-full max-w-[400px] space-y-4">
        <Alert variant="danger" title="Something went wrong">
          An unexpected error occurred. Please try again.
        </Alert>
        <Button onClick={reset} fullWidth>
          Try again
        </Button>
      </div>
    </div>
  );
}
