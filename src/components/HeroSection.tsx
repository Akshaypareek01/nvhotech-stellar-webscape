import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Code2, Smartphone, Brain, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = ['Web Development', 'Mobile Apps', 'AI Automation', 'Custom Software', 'CRM Systems'];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support' },
];

const techBadges = [
  { icon: Code2, label: 'React & Next.js', color: '#3B82F6' },
  { icon: Smartphone, label: 'iOS & Android', color: '#8B5CF6' },
  { icon: Brain, label: 'AI / ML', color: '#06B6D4' },
  { icon: Globe, label: 'Cloud Ready', color: '#10B981' },
];

export const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-60" />

        {/* Aurora blobs */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full animate-aurora"
          style={{
            background: 'radial-gradient(circle, hsl(217 91% 58% / 0.28) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full animate-aurora-slow"
          style={{
            background: 'radial-gradient(circle, hsl(267 83% 58% / 0.24) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full animate-aurora"
          style={{
            background: 'radial-gradient(circle, hsl(199 89% 55% / 0.18) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animationDelay: '6s',
          }}
        />

        {/* Floating geometric lines */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/35 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 badge-blue mb-8 animate-fade-in"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>India's Premier IT Solutions Company</span>
            </div>

            {/* Main headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 animate-fade-in-up"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
            >
              We Build
              <br />
              <span className="gradient-text">Digital Futures</span>
              <br />
              That Deliver.
            </h1>

            {/* Animated service line */}
            <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in delay-200">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <p className="text-lg md:text-xl font-semibold text-muted-foreground">
                Specialising in{' '}
                <span
                  key={currentService}
                  className="gradient-text"
                  style={{ animation: 'fadeInUp 0.4s ease-out both' }}
                >
                  {services[currentService]}
                </span>
              </p>
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            </div>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
              We collaborate with startups and enterprises to build high-quality web apps, mobile solutions,
              CRM systems, and AI tools — on time, on budget, and beyond expectations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in delay-400">
              <Button
                size="lg"
                className="btn-gradient h-13 px-8 text-base font-semibold rounded-xl shadow-lg"
                onClick={() => navigate('/services')}
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base font-semibold rounded-xl border-2 border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200"
                onClick={() => navigate('/book-appointment')}
              >
                Book Free Consultation
              </Button>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-14 animate-fade-in delay-500">
              {techBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <badge.icon className="w-4 h-4" style={{ color: badge.color }} />
                  <span className="text-sm font-medium text-muted-foreground">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-sm animate-fade-in delay-600">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card px-6 py-5 text-center hover:bg-primary/10 transition-colors duration-200"
                >
                  <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
