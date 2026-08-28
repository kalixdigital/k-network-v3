import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface ErrorStateProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function ErrorState({
  title = 'Something went wrong',
  description = 'An unexpected error occurred. Please try again.',
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border border-danger-500/20 bg-danger-50 px-6 py-12 text-center',
        className,
      )}
    >
      <svg
        className="mb-4 h-12 w-12 text-danger-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
      <h3 className="text-h5 text-neutral-950">{title}</h3>
      <p className="mt-2 max-w-sm text-body-sm text-neutral-600">
        {description}
      </p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
