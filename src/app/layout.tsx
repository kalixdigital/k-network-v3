import type { Metadata, Viewport } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { BottomNav } from '@/components/ui/navigation';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'K-NETWORK',
    template: '%s | K-NETWORK',
  },
  description:
    'K-NETWORK — Pan-African Digital Commerce and Business Ecosystem. One ecosystem, many opportunities.',
  applicationName: 'K-NETWORK',
  authors: [{ name: 'K-NETWORK' }],
  keywords: [
    'K-NETWORK',
    'Pan-African',
    'commerce',
    'services',
    'learning',
    'rewards',
    'trust',
  ],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4755D4',
};

const mainNavItems = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Marketplace', href: '/commerce', icon: 'marketplace' },
  { label: 'Learn', href: '/learning', icon: 'learn' },
  { label: 'Rewards', href: '/k-rewards', icon: 'rewards' },
  { label: 'Network', href: '/network', icon: 'network' },
];

const bottomNavItems = mainNavItems;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 antialiased">
        {/* Skip link for keyboard / screen-reader users (WCAG 2.4.1) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <SiteHeader navItems={mainNavItems} />

        <main id="main-content" className="pb-20 md:pb-0">
          {children}
        </main>

        <SiteFooter />

        {/* Mobile bottom navigation (hidden on desktop) */}
        <BottomNav items={bottomNavItems} />
      </body>
    </html>
  );
}
