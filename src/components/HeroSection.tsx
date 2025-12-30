import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Cpu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      const elements = heroRef.current.querySelectorAll('.float-3d');
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const multiplier = (index + 1) * 0.5;
        element.style.transform = `perspective(1000px) rotateX(${rotateX * multiplier}deg) rotateY(${rotateY * multiplier}deg) translateZ(${index * 20}px)`;
      });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        backgroundImage: 'url(/images/fintech/banner-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Blue overlay for theme alignment */}
      <div className="absolute inset-0 z-0 bg-blue-900/40 mix-blend-multiply pointer-events-none" />
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="float-3d absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-xl animate-float"></div>
        <div className="float-3d absolute top-40 right-32 w-24 h-24 bg-neon-purple rounded-full opacity-20 blur-lg animate-float-delayed"></div>
        <div className="float-3d absolute bottom-32 left-40 w-40 h-40 bg-gradient-primary rounded-full opacity-15 blur-2xl animate-float"></div>
        <div className="float-3d absolute bottom-20 right-20 w-20 h-20 bg-neon-cyan rounded-full opacity-25 blur-md animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium">Welcome to the Future</span>
          </div>

          {/* Main Title - Single H1 for SEO */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight flex items-center justify-center gap-4">
            <span className="gradient-text">NVHO</span>
            <span className="text-foreground"> TECH</span>
            {/* Tea cup image with animation */}
            <img
              src="/images/banner-image/tea-cup.png"
              alt="Tea Cup"
              className="w-10 h-10 md:w-15 md:h-16 animate-bounce-slow"
            />
          </h1>

          {/* Business Tagline - H2 for SEO hierarchy */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-wider">
            Software & App Development Company in India
          </h2>
          <div className="hidden md:block text-xl md:text-2xl text-accent mb-6 font-medium">
            AI POWERED SOLUTIONS FOR AMAZING CLIENTS
          </div>

          {/* Subtitle */}
          <p className="hidden md:block text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            We collaborate with AI experts, developers, and stakeholders to deliver modern web development, app solutions, CRM systems, and custom applications tailored for your business success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105 group neon-glow text-lg px-8 py-4"
              onClick={() => navigate('/services')}
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
};