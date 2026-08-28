'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

const iconPaths: Record<string, string> = {
  home: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  marketplace: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
  learn: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
  rewards: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
  menu: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
  network: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m7 0a5.971 5.971 0 00-.941-.965M6 18.719a6.062 6.062 0 01-2.867-.723c1.018-.609 2.168-.956 3.339-.956m.904 2.681a3 3 0 10-4.682-2.72m.94 3.198-.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0018 18.719M12 12a3 3 0 11-6 0 3 3 0 016 0z',
};

function NavIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={iconPaths[name] ?? iconPaths.home}
      />
    </svg>
  );
}

/**
 * Desktop top navigation bar.
 * Per UXDS-1: TopNav for desktop with primary navigation items.
 */
export function TopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="hidden items-center gap-1 md:flex"
    >
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'flex items-center gap-2 rounded-md px-3 py-2 text-body-sm font-medium transition-colors duration-fast ease-motion-fast',
              isActive
                ? 'bg-primary-100 text-primary-700'
                : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900',
            )}
          >
            {item.icon && <NavIcon name={item.icon} className="h-5 w-5" />}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

/**
 * Mobile bottom navigation bar.
 * Per UXDS-1: BottomNav with 5 items, each ≥56×56px touch target.
 */
export function BottomNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-sticky flex items-center justify-around border-t border-neutral-200 bg-white px-2 py-1 shadow-sm md:hidden"
    >
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            aria-label={item.label}
            className={cn(
              'flex min-h-[56px] min-w-[56px] flex-col items-center justify-center gap-0.5 rounded-md px-3 py-1.5 transition-colors duration-fast ease-motion-fast',
              isActive
                ? 'text-primary-600'
                : 'text-neutral-500 hover:text-neutral-900',
            )}
          >
            {item.icon && <NavIcon name={item.icon} className="h-6 w-6" />}
            <span className="text-caption">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

/**
 * Breadcrumb navigation primitive.
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-body-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-primary-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'font-medium text-neutral-950' : 'text-neutral-500'}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
