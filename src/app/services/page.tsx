import { EnginePage } from '@/components/layout/engine-page';
import { ENGINES } from '@/lib/engines';

const engine = ENGINES.find((e) => e.slug === 'services')!;

export default function ServicesPage() {
  return (
    <EnginePage
      engineId={engine.id}
      engineName={engine.name}
      engineDescription={engine.description}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: engine.name }]}
    />
  );
}
