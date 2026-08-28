import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export type BadgeVariant =
  | 'neutral'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'gold';

export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
  neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200',
  primary: 'bg-primary-100 text-primary-700 border-primary-200',
  success: 'bg-success-100 text-success-600 border-success-500/20',
  warning: 'bg-warning-100 text-warning-600 border-warning-500/20',
  danger: 'bg-danger-100 text-danger-600 border-danger-500/20',
  gold: 'bg-gold-100 text-gold-800 border-gold-200',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-caption px-2 py-0.5',
  md: 'text-body-sm px-2.5 py-1',
};

export function Badge({
  variant = 'neutral',
  size = 'md',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border font-medium',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
