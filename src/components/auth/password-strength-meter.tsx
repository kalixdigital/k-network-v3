'use client';

/**
 * Password strength meter per UXDS-1 §6.3.
 * 4-segment bar: Red (weak) → Orange (fair) → Yellow (good) → Green (strong)
 */

import { cn } from '@/lib/cn';

const strengthConfig = [
  { label: 'Weak', color: 'bg-danger-500', text: 'text-danger-600' },
  { label: 'Fair', color: 'bg-warning-500', text: 'text-warning-600' },
  { label: 'Good', color: 'bg-gold-500', text: 'text-gold-600' },
  { label: 'Strong', color: 'bg-success-500', text: 'text-success-600' },
];

export function PasswordStrengthMeter({ strength }: { strength: 0 | 1 | 2 | 3 | 4 }) {
  if (strength === 0) {
    return (
      <div className="mt-1.5" aria-live="polite">
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-1.5 flex-1 rounded-full bg-neutral-200" />
          ))}
        </div>
      </div>
    );
  }

  const config = strengthConfig[strength - 1];
  if (!config) return null;

  return (
    <div className="mt-1.5" aria-live="polite">
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              'h-1.5 flex-1 rounded-full transition-colors duration-fast',
              i < strength ? config.color : 'bg-neutral-200',
            )}
          />
        ))}
      </div>
      <p className={cn('mt-1 text-caption font-medium', config.text)}>
        {config.label}
      </p>
    </div>
  );
}
