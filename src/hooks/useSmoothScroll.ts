import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

/**
 * useSmoothScroll
 * Attaches Locomotive Scroll to a container for inertia-based smooth scrolling.
 * @param containerRef - React ref to the scroll container
 */
export const useSmoothScroll = (containerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08, // Lower = more smooth/inertia
      multiplier: 1, // Scroll speed
      class: "is-reveal",
    });

    return () => {
      scroll.destroy();
    };
  }, [containerRef]);
}; 