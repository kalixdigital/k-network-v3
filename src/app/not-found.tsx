import Link from 'next/link';
import { Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';

/**
 * Global 404 / not-found boundary.
 * Displays an honest "page not found" state.
 */
export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-12">
      <EmptyState
        icon={
          <svg
            className="h-16 w-16 text-neutral-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 2.027v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        }
        title="Page not found"
        description="The page you are looking for does not exist or has been moved."
        action={
          <Link href="/">
            <Button>Back to home</Button>
          </Link>
        }
      />
    </Container>
  );
}
