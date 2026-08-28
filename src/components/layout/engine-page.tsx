import { type ReactNode } from 'react';
import { Container } from '@/components/ui/layout';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/ui/navigation';
import { EmptyState } from '@/components/ui/empty-state';

export interface EnginePageProps {
  engineId: number;
  engineName: string;
  engineDescription: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
}

/**
 * Engine placeholder page.
 *
 * Displays an honest "coming soon" state for engines that have not
 * been implemented yet. Per the master instruction: "When functionality
 * is not yet implemented, build an honest empty/loading/coming-soon
 * state rather than pretending the feature works."
 */
export function EnginePage({
  engineId,
  engineName,
  engineDescription,
  breadcrumbs,
  children,
}: EnginePageProps) {
  return (
    <Container className="py-8 md:py-12">
      {breadcrumbs && (
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}

      <div className="mb-8">
        <div className="mb-2 flex items-center gap-3">
          <Badge variant="primary" size="sm">
            Engine #{engineId}
          </Badge>
          <Badge variant="neutral" size="sm">
            Coming soon
          </Badge>
        </div>
        <h1 className="text-h2 text-neutral-950">{engineName}</h1>
        <p className="mt-2 max-w-2xl text-body text-neutral-600">
          {engineDescription}
        </p>
      </div>

      {children ?? (
        <EmptyState
          title={`${engineName} is not yet available`}
          description={`The ${engineName} engine is planned as part of the K-NETWORK platform. It will be implemented in a future milestone.`}
        />
      )}
    </Container>
  );
}
