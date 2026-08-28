import { Container } from '@/components/ui/layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EmptyState } from '@/components/ui/empty-state';
import { ENGINES } from '@/lib/engines';

export default function HomePage() {
  return (
    <Container className="py-8 md:py-12">
      {/* Hero section */}
      <section className="mb-12 text-center">
        <Badge variant="primary" size="sm" className="mb-4">
          Foundation Established
        </Badge>
        <h1 className="text-h1 text-neutral-950 sm:text-display">
          K-NETWORK
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-neutral-600">
          Pan-African Digital Commerce and Business Ecosystem.
          One ecosystem, many opportunities.
        </p>
      </section>

      {/* Engine overview */}
      <section aria-labelledby="engines-heading">
        <h2 id="engines-heading" className="mb-2 text-h3 text-neutral-950">
          Core Platform Engines
        </h2>
        <p className="mb-6 text-body text-neutral-600">
          K-NETWORK is built as one integrated ecosystem containing eleven core
          platform engines. Each engine owns its domain and communicates through
          documented service boundaries.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ENGINES.map((engine) => (
            <Card key={engine.id} padding="default">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Engine #{engine.id}</CardTitle>
                  <Badge variant="neutral" size="sm">
                    Planned
                  </Badge>
                </div>
                <CardDescription>{engine.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-neutral-600">
                  {engine.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Foundation status */}
      <section className="mt-12" aria-labelledby="foundation-heading">
        <h2 id="foundation-heading" className="mb-2 text-h3 text-neutral-950">
          Implementation Status
        </h2>
        <EmptyState
          title="Application foundation is ready"
          description="The Next.js application foundation, design system, and component architecture are in place. Engine implementations will follow incrementally."
        />
      </section>
    </Container>
  );
}
