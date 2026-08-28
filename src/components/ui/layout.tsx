import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'wide';
}

/**
 * Page container — centers content and constrains max-width.
 * Per UXDS-1: max-width 1280px (default), 1440px (wide dashboards).
 */
export function Container({
  children,
  className,
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'default' ? 'max-w-container' : 'max-w-container-wide',
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Stack — vertical flex layout with configurable gap.
 */
export function Stack({
  children,
  className,
  gap = '4',
}: {
  children: ReactNode;
  className?: string;
  gap?: string;
}) {
  return (
    <div className={cn('flex flex-col', `gap-${gap}`, className)}>
      {children}
    </div>
  );
}

/**
 * Grid — responsive CSS grid.
 * Per UXDS-1: 4 cols mobile, 8 tablet, 12 desktop.
 */
export function Grid({
  children,
  className,
  cols = '1',
}: {
  children: ReactNode;
  className?: string;
  cols?: '1' | '2' | '3' | '4';
}) {
  return (
    <div
      className={cn(
        'grid',
        cols === '1' && 'grid-cols-1',
        cols === '2' && 'grid-cols-1 md:grid-cols-2',
        cols === '3' && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        cols === '4' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        className,
      )}
    >
      {children}
    </div>
  );
}
