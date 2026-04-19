/**
 * useSmoothScroll — lightweight replacement for Locomotive Scroll.
 *
 * Does nothing heavy. Native `scroll-behavior: smooth` in CSS handles momentum.
 * The hook exists only so every page that called `useSmoothScroll(ref, locoRef)`
 * keeps compiling — locoRef is set to a thin shim with a `scrollTo` helper and a
 * no-op `update()` so downstream code (Navigation, ProjectsSection, etc.) works.
 */
export const useSmoothScroll = (
  _containerRef: React.RefObject<HTMLElement>,
  locoRef?: React.MutableRefObject<any>
) => {
  if (locoRef) {
    locoRef.current = {
      /** Scroll to an element; mirrors the Locomotive API so call-sites don't break. */
      scrollTo(
        target: HTMLElement | string,
        opts?: { offset?: number; duration?: number }
      ) {
        const el =
          typeof target === 'string'
            ? document.querySelector(target)
            : target;
        if (!el) return;

        const top =
          el.getBoundingClientRect().top +
          window.scrollY +
          (opts?.offset ?? 0);

        window.scrollTo({ top, behavior: 'smooth' });
      },
      update() {
        /* no-op — native scroll doesn't need layout recalculation */
      },
      on() {
        /* no-op shim */
      },
      off() {
        /* no-op shim */
      },
    };
  }
};
