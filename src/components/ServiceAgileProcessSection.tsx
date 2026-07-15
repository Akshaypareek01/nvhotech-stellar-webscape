import { cn } from '@/lib/utils';
import type { CSSProperties } from 'react';

/** Single phase in the agile-style delivery timeline. */
export type ServiceProcessStep = {
  step: string;
  title: string;
  desc: string;
  color: string;
};

/** Default five-phase process aligned with the software development page. */
export const DEFAULT_AGILE_PROCESS_STEPS: ServiceProcessStep[] = [
  { step: '01', title: 'Discovery', desc: 'Requirements gathering & analysis', color: 'hsl(var(--cat-a))' },
  { step: '02', title: 'Planning', desc: 'Architecture design & roadmap', color: 'hsl(var(--cat-b))' },
  { step: '03', title: 'Development', desc: 'Iterative sprint-based coding', color: 'hsl(var(--cat-c))' },
  { step: '04', title: 'Testing', desc: 'QA, security & performance tests', color: 'hsl(var(--cat-d))' },
  { step: '05', title: 'Deployment', desc: 'Launch, monitoring & support', color: 'hsl(var(--cat-b))' },
];

const processGridCols: Record<number, string> = {
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
};

export type ServiceAgileProcessSectionProps = {
  /** Optional extra classes on the outer `<section>` (e.g. background). */
  className?: string;
  /** Badge label above the title. */
  eyebrow?: string;
  /** Text before the gradient accent in the main heading. */
  titleLead?: string;
  /** Gradient accent phrase in the main heading (e.g. “Development Process”). */
  titleAccent?: string;
  /** Subtitle under the main heading. */
  description?: string;
  /** Phases to render; defaults to {@link DEFAULT_AGILE_PROCESS_STEPS}. */
  steps?: ServiceProcessStep[];
  /** Stable id for `aria-labelledby` (unique per page if you render multiple). */
  headingId?: string;
};

/**
 * Renders a service-specific process timeline: eyebrow, configurable title
 * (`titleLead` + gradient `titleAccent`), subtitle, desktop connector line, and phase cards.
 */
export function ServiceAgileProcessSection({
  className,
  eyebrow = 'How We Work',
  titleLead = 'Our Agile',
  titleAccent = 'Development Process',
  description = 'A structured yet flexible process that keeps you informed and in control at every stage.',
  steps = DEFAULT_AGILE_PROCESS_STEPS,
  headingId = 'service-agile-process-heading',
}: ServiceAgileProcessSectionProps) {
  const gridCols = processGridCols[steps.length] ?? 'md:grid-cols-5';

  return (
    <section
      className={cn('py-16 md:py-20 px-6', className)}
      aria-labelledby={headingId}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 badge-blue mb-4">
            <span>{eyebrow}</span>
          </div>
          <h2
            id={headingId}
            className="text-3xl md:text-4xl font-extrabold text-foreground mb-4"
          >
            {titleLead}{' '}
            <span className="gradient-text step-underline">{titleAccent}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            {description}
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border z-0"
            aria-hidden
          />

          <div
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10',
              gridCols
            )}
          >
            {steps.map((phase) => (
              <div key={phase.step} className="text-center group">
                <div
                  className="icon-chip w-16 h-16 mx-auto mb-4 flex flex-col items-center justify-center shadow-sm border border-border group-hover:scale-110 transition-transform duration-200"
                  style={{
                    '--chip-tint': phase.color,
                    boxShadow: `0 4px 16px color-mix(in srgb, ${phase.color} 13%, transparent)`,
                  } as CSSProperties}
                >
                  <span className="text-lg font-extrabold" style={{ color: phase.color }}>
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1">{phase.title}</h3>
                <p className="text-xs text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
