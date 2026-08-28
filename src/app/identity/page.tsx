import { EnginePage } from '@/components/layout/engine-page';
import { ENGINES } from '@/lib/engines';

const engine = ENGINES.find((e) => e.slug === 'identity')!;

export default function IdentityPage() {
  return (
    <EnginePage
      engineId={engine.id}
      engineName={engine.name}
      engineDescription={engine.description}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: engine.name }]}
    />
  );
}
