import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'gold';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 active:shadow-inner',
  secondary:
    'bg-primary-100 text-primary-700 hover:bg-primary-200 active:bg-primary-300',
  outline:
    'border border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 active:bg-neutral-200',
  ghost:
    'bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200',
  danger:
    'bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-600 active:shadow-inner',
  gold: 'bg-gold-500 text-white hover:bg-gold-600 active:bg-gold-700 active:shadow-inner',
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'text-caption px-2 py-1 gap-1',
  sm: 'text-body-sm px-3 py-1.5 gap-1.5',
  md: 'text-body-sm px-4 py-2 gap-2',
  lg: 'text-body px-5 py-2.5 gap-2',
  xl: 'text-body-lg px-6 py-3 gap-2',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium',
          'transition-colors duration-fast ease-motion-fast',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className,
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
