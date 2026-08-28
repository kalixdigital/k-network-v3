import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
}

const variantStyles: Record<AlertVariant, { container: string; title: string; icon: string }> = {
  info: {
    container: 'bg-info-50 border-info-500/20 text-neutral-800',
    title: 'text-info-600',
    icon: 'text-info-500',
  },
  success: {
    container: 'bg-success-50 border-success-500/20 text-neutral-800',
    title: 'text-success-600',
    icon: 'text-success-500',
  },
  warning: {
    container: 'bg-warning-50 border-warning-500/20 text-neutral-800',
    title: 'text-warning-600',
    icon: 'text-warning-500',
  },
  danger: {
    container: 'bg-danger-50 border-danger-500/20 text-neutral-800',
    title: 'text-danger-600',
    icon: 'text-danger-500',
  },
};

const variantIcons: Record<AlertVariant, string> = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  danger: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
};

export function Alert({
  variant = 'info',
  title,
  className,
  children,
  ...props
}: AlertProps) {
  const styles = variantStyles[variant];

  return (
    <div
      role="alert"
      className={cn(
        'flex gap-3 rounded-lg border p-4',
        styles.container,
        className,
      )}
      {...props}
    >
      <svg
        className={cn('h-5 w-5 flex-shrink-0', styles.icon)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={variantIcons[variant]} />
      </svg>
      <div className="flex-1">
        {title && (
          <p className={cn('text-body-sm font-semibold', styles.title)}>
            {title}
          </p>
        )}
        {children && (
          <div className={cn(title && 'mt-1', 'text-body-sm text-neutral-700')}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
