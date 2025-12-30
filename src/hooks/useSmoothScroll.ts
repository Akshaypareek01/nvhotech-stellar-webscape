import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

/**
 * useSmoothScroll
 * Attaches Locomotive Scroll to a container for inertia-based smooth scrolling.
 * @param containerRef - React ref to the scroll container
 * @param locoRef - React ref to expose the LocomotiveScroll instance
 */
export const useSmoothScroll = (
  containerRef: React.RefObject<HTMLElement>,
  locoRef?: React.MutableRefObject<LocomotiveScroll | null>
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.12, // Higher = less smooth but faster
      multiplier: 1.2, // Faster scroll speed
      class: "is-reveal",
      smartphone: {
        smooth: false, // Disable on mobile for better performance
      },
      tablet: {
        smooth: false, // Disable on tablet for better performance
      },
    });

    if (locoRef) {
      locoRef.current = scroll;
    }

    // Update scroll on content resize
    const resizeObserver = new ResizeObserver(() => {
      scroll.update();
    });

    // Observe container and its children for size changes
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      Array.from(containerRef.current.children).forEach((child) => {
        resizeObserver.observe(child);
      });
    }

    return () => {
      resizeObserver.disconnect();
      scroll.destroy();
      if (locoRef) locoRef.current = null;
    };
  }, [containerRef, locoRef]);
}; 