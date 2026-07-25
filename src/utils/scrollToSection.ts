/** Duration to suppress hero/about scroll snap after programmatic nav scrolls. */
const PROGRAMMATIC_SCROLL_MS = 1500;

let programmaticScrollUntil = 0;

/**
 * Marks an upcoming smooth scroll as programmatic so snap logic can ignore it.
 * @param durationMs - How long to suppress scroll snap (ms)
 */
export function markProgrammaticScroll(durationMs = PROGRAMMATIC_SCROLL_MS): void {
  programmaticScrollUntil = Date.now() + durationMs;
}

/**
 * Returns true while a programmatic scroll is in progress.
 */
export function isProgrammaticScroll(): boolean {
  return Date.now() < programmaticScrollUntil;
}

/**
 * Reads the fixed header height used for section scroll offsets.
 */
export function getHeaderHeight(): number {
  return (
    Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--header-height'),
    ) || 72
  );
}

/**
 * Smoothly scrolls to a section by id/hash with fixed-header offset.
 * @param target - Element id with or without leading `#`
 * @returns Whether the target element was found and scrolled to
 */
export function scrollToSectionById(target: string): boolean {
  const id = target.replace(/^#/, '');
  const element = document.getElementById(id);
  if (!element) return false;

  markProgrammaticScroll();
  const top = element.getBoundingClientRect().top + window.scrollY - getHeaderHeight();
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  return true;
}
