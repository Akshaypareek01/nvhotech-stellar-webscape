import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

/** Homepage section ids in scroll order (matches Index.tsx). */
export const HOME_SCROLL_SECTIONS = [
  'home',
  'about',
  'app-designs',
  'services',
  'projects',
  'faq',
  'contact',
] as const;

const OBSERVER_THRESHOLDS = [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1];

/**
 * Returns the theme for a section index — even = dark, odd = light.
 */
export function themeForSectionIndex(index: number): 'light' | 'dark' {
  return index % 2 === 0 ? 'dark' : 'light';
}

/**
 * Alternates light/dark theme as the user scrolls through homepage sections.
 * Even-index sections use dark; odd-index sections use light.
 */
export function useScrollSectionTheme(sectionIds: readonly string[] = HOME_SCROLL_SECTIONS) {
  const { setTheme } = useTheme();
  const activeIndexRef = useRef<number | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const applyThemeForIndex = (index: number) => {
      if (activeIndexRef.current === index) return;
      activeIndexRef.current = index;
      setTheme(themeForSectionIndex(index));
    };

    applyThemeForIndex(0);

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId = sectionIds[0];
        let bestRatio = -1;

        sectionIds.forEach((id) => {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        const index = sectionIds.indexOf(bestId);
        if (index >= 0 && bestRatio > 0) {
          applyThemeForIndex(index);
        }
      },
      { threshold: OBSERVER_THRESHOLDS }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      activeIndexRef.current = null;
    };
  }, [sectionIds, setTheme]);
}
