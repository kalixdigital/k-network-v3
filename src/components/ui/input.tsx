import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorText,
      leftIcon,
      rightIcon,
      hasError = false,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id ?? props.name;
    const describedBy = errorText
      ? `${inputId}-error`
      : helperText
        ? `${inputId}-helper`
        : undefined;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-body-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            className={cn(
              'w-full rounded-md border bg-neutral-50 px-3 py-2.5 text-body text-neutral-950',
              'placeholder:text-neutral-400',
              'transition-colors duration-fast ease-motion-fast',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
              'disabled:cursor-not-allowed disabled:opacity-50',
              leftIcon ? 'pl-10' : '',
              rightIcon ? 'pr-10' : '',
              hasError
                ? 'border-danger-500 focus-visible:ring-danger-500'
                : 'border-neutral-300',
              className,
            )}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </span>
          )}
        </div>
        {errorText ? (
          <p
            id={`${inputId}-error`}
            className="mt-1.5 text-caption text-danger-600"
            role="alert"
          >
            {errorText}
          </p>
        ) : helperText ? (
          <p
            id={`${inputId}-helper`}
            className="mt-1.5 text-caption text-neutral-500"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
