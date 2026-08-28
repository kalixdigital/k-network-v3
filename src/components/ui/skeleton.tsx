import { cn } from '@/lib/cn';

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('shimmer rounded-md', className)}
      aria-hidden="true"
      {...props}
    />
  );
}

export function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-4', i === lines - 1 ? 'w-2/3' : 'w-full')}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-lg border border-neutral-200 bg-white p-4 shadow-sm',
        className,
      )}
      aria-hidden="true"
    >
      <Skeleton className="mb-4 h-32 w-full" />
      <Skeleton className="mb-2 h-5 w-3/4" />
      <SkeletonText lines={2} />
    </div>
  );
}
