'use client';

import { ErrorState } from '@/components/ui/error-state';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/layout';
import { useEffect } from 'react';

/**
 * Global error boundary.
 * Catches unhandled errors in any route segment and displays
 * an honest error state rather than a blank screen.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production.
    // For now, log to console for development visibility.
    console.error('K-NETWORK application error:', error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-12">
      <ErrorState
        title="Something went wrong"
        description="An unexpected error occurred. You can try again, or return to the home page."
        action={
          <div className="flex gap-2">
            <Button onClick={reset}>Try again</Button>
            <Button variant="outline" onClick={() => (window.location.href = '/')}>
              Go home
            </Button>
          </div>
        }
      />
    </Container>
  );
}
