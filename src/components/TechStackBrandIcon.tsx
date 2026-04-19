import type { LucideIcon } from 'lucide-react';

/** Simple Icons slug (jsDelivr) or Lucide for concepts without one canonical mark */
export type TechBrandIconSource =
  | { type: 'simple'; slug: string }
  | { type: 'lucide'; icon: LucideIcon };

const SIMPLE_ICONS_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons';

/**
 * Renders a brand icon (Simple Icons SVG from CDN) or a Lucide fallback inside a neutral tile for contrast on glass cards.
 */
export function TechStackBrandIcon({ source }: { source: TechBrandIconSource }) {
  if (source.type === 'lucide') {
    const Icon = source.icon;
    return (
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-border/60 dark:bg-white/95">
        <Icon className="h-6 w-6 text-primary" aria-hidden />
      </span>
    );
  }
  const src = `${SIMPLE_ICONS_CDN}/${source.slug}.svg`;
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-border/60 dark:bg-white/95">
      <img
        src={src}
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </span>
  );
}
