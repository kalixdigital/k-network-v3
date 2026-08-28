'use client';

import {
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/cn';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  closeOnOverlayClick?: boolean;
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
}: DialogProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-modal flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'dialog-title' : undefined}
      aria-describedby={description ? 'dialog-description' : undefined}
    >
      {/* Overlay / backdrop */}
      <div
        className="absolute inset-0 bg-neutral-950/50 transition-opacity duration-slow ease-motion-slow"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Dialog panel */}
      <div
        className={cn(
          'relative z-10 w-full rounded-xl bg-white shadow-xl',
          'animate-[dialog-enter_300ms_ease-in-out]',
          sizeStyles[size],
        )}
      >
        {title && (
          <div className="px-6 pt-6">
            <h2
              id="dialog-title"
              className="text-h5 text-neutral-950"
            >
              {title}
            </h2>
          </div>
        )}
        {description && (
          <div className="px-6 pt-2">
            <p id="dialog-description" className="text-body-sm text-neutral-600">
              {description}
            </p>
          </div>
        )}
        {children && (
          <div className="px-6 py-4 text-body text-neutral-700">
            {children}
          </div>
        )}
        {footer && (
          <div className="flex items-center justify-end gap-2 px-6 pb-6 pt-2">
            {footer}
          </div>
        )}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-md p-1 text-neutral-400 transition-colors duration-fast ease-motion-fast hover:bg-neutral-100 hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes dialog-enter {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
