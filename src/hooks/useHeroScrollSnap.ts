import { useEffect, useRef } from 'react';

const SNAP_COOLDOWN_MS = 900;
const MIN_SCROLL_DELTA = 6;
const TOUCH_SWIPE_DELTA = 12;
const ABOUT_SNAP_TOLERANCE = 24;

/** Reads the fixed header height used for section scroll offsets. */
function getHeaderHeight(): number {
  return (
    Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--header-height'),
    ) || 72
  );
}

/**
 * Returns true when the page is between the hero and about sections.
 */
function isBetweenHeroAndAbout(aboutSectionId: string): boolean {
  const about = document.getElementById(aboutSectionId);
  if (!about) return false;

  const aboutTop = about.getBoundingClientRect().top;
  const headerHeight = getHeaderHeight();

  return window.scrollY > MIN_SCROLL_DELTA && aboutTop > headerHeight + 16;
}

/**
 * Returns true when the about section is snapped below the fixed header.
 */
function isAtAboutSnap(aboutSectionId: string): boolean {
  const about = document.getElementById(aboutSectionId);
  if (!about) return false;

  const aboutTop = about.getBoundingClientRect().top;
  const headerHeight = getHeaderHeight();

  return Math.abs(aboutTop - headerHeight) <= ABOUT_SNAP_TOLERANCE;
}

/**
 * Snaps between hero and about when the user scrolls slightly from either section.
 */
export function useHeroScrollSnap(heroSectionId = 'home', aboutSectionId = 'about') {
  const snappingRef = useRef(false);
  const cooldownRef = useRef<ReturnType<typeof setTimeout>>();
  const lastScrollYRef = useRef(0);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    lastScrollYRef.current = window.scrollY;

    /** Starts the snap cooldown so repeated gestures do not fight the animation. */
    const beginSnap = () => {
      snappingRef.current = true;
      if (cooldownRef.current) clearTimeout(cooldownRef.current);
      cooldownRef.current = setTimeout(() => {
        snappingRef.current = false;
      }, SNAP_COOLDOWN_MS);
    };

    /** Smoothly scrolls the about section into view. */
    const snapToAbout = () => {
      const about = document.getElementById(aboutSectionId);
      if (!about || snappingRef.current) return;

      beginSnap();
      about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    /** Smoothly scrolls back to the hero section. */
    const snapToHero = () => {
      const hero = document.getElementById(heroSectionId);
      if (!hero || snappingRef.current) return;

      beginSnap();
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    /** Returns true when the viewport is still anchored at the hero top. */
    const isAtHeroTop = () => window.scrollY <= MIN_SCROLL_DELTA;

    /** Returns true when a downward scroll should snap from hero to about. */
    const shouldSnapToAbout = () =>
      isAtHeroTop() || isBetweenHeroAndAbout(aboutSectionId);

    /** Returns true when an upward scroll should snap from about to hero. */
    const shouldSnapToHero = () =>
      isAtAboutSnap(aboutSectionId) || isBetweenHeroAndAbout(aboutSectionId);

    const onWheel = (event: WheelEvent) => {
      if (snappingRef.current) return;

      if (event.deltaY > 0 && shouldSnapToAbout()) {
        event.preventDefault();
        snapToAbout();
        return;
      }

      if (event.deltaY < 0 && shouldSnapToHero()) {
        event.preventDefault();
        snapToHero();
      }
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollYRef.current;
      const scrollingUp = currentScrollY < lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      if (snappingRef.current || !isBetweenHeroAndAbout(aboutSectionId)) return;

      if (scrollingDown) {
        snapToAbout();
        return;
      }

      if (scrollingUp) {
        snapToHero();
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (snappingRef.current) return;

      const touchY = event.touches[0]?.clientY ?? touchStartYRef.current;
      const delta = touchStartYRef.current - touchY;

      if (Math.abs(delta) <= TOUCH_SWIPE_DELTA) return;

      if (delta > 0 && shouldSnapToAbout()) {
        event.preventDefault();
        snapToAbout();
        return;
      }

      if (delta < 0 && shouldSnapToHero()) {
        event.preventDefault();
        snapToHero();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      if (cooldownRef.current) clearTimeout(cooldownRef.current);
      snappingRef.current = false;
    };
  }, [heroSectionId, aboutSectionId]);
}
