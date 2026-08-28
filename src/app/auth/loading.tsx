/**
 * Loading state for auth pages.
 * Per UXDS-1: honest loading states, not fake content.
 */

export default function AuthLoading() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="h-12 w-12 animate-pulse rounded-lg bg-neutral-200" />
          <div className="h-4 w-32 animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="h-5 w-32 animate-pulse rounded bg-neutral-100" />
          <div className="h-10 animate-pulse rounded-md bg-neutral-100" />
          <div className="h-10 animate-pulse rounded-md bg-neutral-100" />
          <div className="h-12 animate-pulse rounded-md bg-neutral-100" />
        </div>
      </div>
    </div>
  );
}
