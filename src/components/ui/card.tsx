import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  padding?: 'default' | 'spacious' | 'none';
}

const paddingStyles = {
  none: '',
  default: 'p-4',
  spacious: 'p-6',
};

export function Card({
  interactive = false,
  padding = 'default',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-white shadow-sm',
        'border border-neutral-200',
        'transition-all duration-fast ease-motion-fast',
        interactive &&
          'cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
        paddingStyles[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mb-4 flex flex-col gap-1', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('text-h4 text-neutral-950', className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-body-sm text-neutral-600', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mt-4 flex items-center gap-2', className)}
      {...props}
    >
      {children}
    </div>
  );
}
