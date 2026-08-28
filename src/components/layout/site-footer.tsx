import { Container } from '@/components/ui/layout';

/**
 * Site footer — shown on all pages.
 * Contains platform information and the eleven engine references.
 * No fake links to unimplemented features — only structural info.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary-500 text-white">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
                />
              </svg>
            </span>
            <span className="text-body-sm font-semibold text-neutral-950">
              K-NETWORK
            </span>
          </div>
          <p className="text-caption text-neutral-500">
            Pan-African Digital Commerce and Business Ecosystem · &copy; {year}
          </p>
        </div>
      </Container>
    </footer>
  );
}
