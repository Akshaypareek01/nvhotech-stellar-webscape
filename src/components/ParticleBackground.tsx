import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  hue: number;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const maxParticles = 12;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      size: Math.random() * 2.5 + 0.5,
      speedY: Math.random() * 0.8 + 0.2,
      opacity: Math.random() * 0.28 + 0.12,
      hue: Math.random() * 40 + 200,
    });

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speedY;
        p.opacity -= 0.0003;
        if (p.y < -10 || p.opacity <= 0) particles.splice(i, 1);
      }
      if (particles.length < maxParticles && Math.random() < 0.2) {
        particles.push(createParticle());
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `hsl(${p.hue}, 85%, 68%)`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    let lastTime = 0;
    const frameInterval = 1000 / 24;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        updateParticles();
        drawParticles();
        lastTime = currentTime;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate(0);

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};
