import { Container } from '@/components/ui/layout';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Global loading boundary.
 * Displays an honest loading state (skeletons) while route
 * segments are loading, rather than pretending data exists.
 */
export default function Loading() {
  return (
    <Container className="py-8 md:py-12">
      <div className="mb-12 text-center">
        <Skeleton className="mx-auto mb-4 h-8 w-32" />
        <Skeleton className="mx-auto h-10 w-64" />
        <Skeleton className="mx-auto mt-4 h-6 w-96 max-w-full" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm"
          >
            <Skeleton className="mb-4 h-5 w-24" />
            <Skeleton className="mb-2 h-6 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-3/4" />
          </div>
        ))}
      </div>
    </Container>
  );
}
