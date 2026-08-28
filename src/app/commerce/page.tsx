import { EnginePage } from '@/components/layout/engine-page';
import { ENGINES } from '@/lib/engines';

const engine = ENGINES.find((e) => e.slug === 'commerce')!;

export default function CommercePage() {
  return (
    <EnginePage
      engineId={engine.id}
      engineName={engine.name}
      engineDescription={engine.description}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: engine.name }]}
    />
  );
}
