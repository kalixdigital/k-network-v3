import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  hasError?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, helperText, errorText, hasError = false, className, id, ...props },
    ref,
  ) => {
    const textareaId = id ?? props.name;
    const describedBy = errorText
      ? `${textareaId}-error`
      : helperText
        ? `${textareaId}-helper`
        : undefined;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-1.5 block text-body-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          className={cn(
            'w-full rounded-md border bg-neutral-50 px-3 py-2.5 text-body text-neutral-950',
            'placeholder:text-neutral-400',
            'transition-colors duration-fast ease-motion-fast',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'min-h-[80px] resize-y',
            hasError
              ? 'border-danger-500 focus-visible:ring-danger-500'
              : 'border-neutral-300',
            className,
          )}
          {...props}
        />
        {errorText ? (
          <p
            id={`${textareaId}-error`}
            className="mt-1.5 text-caption text-danger-600"
            role="alert"
          >
            {errorText}
          </p>
        ) : helperText ? (
          <p
            id={`${textareaId}-helper`}
            className="mt-1.5 text-caption text-neutral-500"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
