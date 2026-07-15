import { ShieldCheck, Rocket, Clock, HeartHandshake, Target, Star } from 'lucide-react';
import type { CSSProperties } from 'react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Every project goes through rigorous testing and quality checks before delivery — no shortcuts.',
    color: 'hsl(var(--cat-a))',
    bg: 'hsl(var(--cat-a) / 0.12)',
  },
  {
    icon: Rocket,
    title: 'Affordable Pricing',
    description: 'Competitive, transparent pricing designed for startups and growing businesses worldwide.',
    color: 'hsl(var(--cat-b))',
    bg: 'hsl(var(--cat-b) / 0.12)',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your deadlines. Our structured process ensures timely delivery, every time.',
    color: 'hsl(var(--cat-c))',
    bg: 'hsl(var(--cat-c) / 0.12)',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: 'From kickoff to launch and beyond — our team is always available to support your growth.',
    color: 'hsl(var(--cat-d))',
    bg: 'hsl(var(--cat-d) / 0.12)',
  },
];

const extras = [
  {
    icon: Target,
    title: 'Custom-Built Solutions',
    description: 'No templates. No one-size-fits-all. Every product we build is architected around your specific goals and users.',
    color: 'hsl(var(--cat-b))',
    bg: 'hsl(var(--cat-b) / 0.12)',
  },
  {
    icon: Star,
    title: 'Client-First Mindset',
    description: 'We treat your project like our own. Transparent communication, honest timelines, and a relentless focus on results.',
    color: 'hsl(var(--cat-a))',
    bg: 'hsl(var(--cat-a) / 0.12)',
  },
];

const stats = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '99%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support Available' },
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-secondary/40 relative overflow-hidden scroll-mt-20">
      {/* Subtle background */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 badge-blue mb-5">
            <span>Why Choose NVHO Tech</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5">
            Built on Trust.{' '}
            <span className="gradient-text step-underline">Driven by Results.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just a development agency — we're a technology partner committed to building
            products that make a real difference for your business.
          </p>
        </div>

        {/* Main pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className="icon-chip w-12 h-12 flex items-center justify-center mb-5"
                style={{ '--chip-tint': item.color } as CSSProperties}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Extra two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {extras.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex gap-5 group"
            >
              <div
                className="icon-chip w-13 h-12 flex items-center justify-center flex-shrink-0"
                style={{ '--chip-tint': item.color } as CSSProperties}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div
          className="rounded-3xl p-10 text-white relative overflow-hidden"
          style={{ background: 'var(--gradient-cta)' }}
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-sm text-white/85 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
