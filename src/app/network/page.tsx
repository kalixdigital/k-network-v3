import { Container } from '@/components/ui/layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ENGINES } from '@/lib/engines';

/**
 * Network overview page — lists all eleven engines.
 * This is a structural landing page, not a feature implementation.
 */
export default function NetworkPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="mb-8">
        <Badge variant="primary" size="sm" className="mb-2">
          Platform Overview
        </Badge>
        <h1 className="text-h2 text-neutral-950">The K-NETWORK</h1>
        <p className="mt-2 max-w-2xl text-body text-neutral-600">
          One integrated ecosystem containing eleven core platform engines.
          Each engine owns its domain and communicates through documented
          service boundaries. No engine creates duplicate shared foundations.
        </p>
      </div>
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
    </Container>
  );
}
