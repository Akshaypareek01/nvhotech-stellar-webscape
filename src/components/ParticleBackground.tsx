import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  hue: number;
}

/**
 * Minimal ambient particle canvas. Runs at ~20 fps, auto-pauses when the tab
 * is hidden or the user prefers reduced motion.
 */
export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let lastTime = 0;
    let visible = true;
    const particles: Particle[] = [];
    const MAX = 10;
    const INTERVAL = 1000 / 20;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 10,
      size: Math.random() * 2.5 + 0.5,
      speedY: Math.random() * 0.6 + 0.15,
      opacity: Math.random() * 0.25 + 0.1,
      hue: Math.random() * 40 + 200,
    });

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible || now - lastTime < INTERVAL) return;
      lastTime = now;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speedY;
        p.opacity -= 0.0004;
        if (p.y < -10 || p.opacity <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = `hsl(${p.hue}, 85%, 68%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (particles.length < MAX && Math.random() < 0.15) {
        particles.push(spawn());
      }
    };

    resize();
    raf = requestAnimationFrame(tick);

    const onVisChange = () => {
      visible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisChange);
    window.addEventListener('resize', resize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', onVisChange);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
};
