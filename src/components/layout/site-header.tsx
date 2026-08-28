import Link from 'next/link';
import { TopNav, type NavItem } from '@/components/ui/navigation';
import { Container } from '@/components/ui/layout';

/**
 * Site header — desktop top navigation.
 * Per UXDS-1: TopNav with primary navigation items, sticky on scroll.
 */
export function SiteHeader({ navItems }: { navItems: NavItem[] }) {
  return (
    <header className="sticky top-0 z-sticky border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          aria-label="K-NETWORK home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-500 text-white">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .878-.126 1.728-.364 2.531"
              />
            </svg>
          </span>
          <span className="text-h5 font-bold text-neutral-950">
            K-NETWORK
          </span>
        </Link>

        {/* Desktop navigation */}
        <TopNav items={navItems} />
      </Container>
    </header>
  );
}
