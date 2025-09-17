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
    const maxParticles = 20;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.3 + 0.1,
      hue: Math.random() * 60 + 180, // Blue to cyan range
    });

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.y -= particle.speedY;
        particle.opacity -= 0.0005;

        if (particle.y < -10 || particle.opacity <= 0) {
          particles.splice(i, 1);
        }
      }

      // Add particles less frequently
      if (particles.length < maxParticles && Math.random() < 0.3) {
        particles.push(createParticle());
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Create radial gradient for glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `hsl(${particle.hue}, 100%, 50%)`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
    };

    let lastTime = 0;
    const targetFPS = 30; // Reduce from 60fps to 30fps
    const frameInterval = 1000 / targetFPS;

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

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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