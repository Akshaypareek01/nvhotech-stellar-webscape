import { ShieldCheck, Rocket, Clock, HeartHandshake, Target, Star } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Every project goes through rigorous testing and quality checks before delivery — no shortcuts.',
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.14)',
  },
  {
    icon: Rocket,
    title: 'Affordable Pricing',
    description: 'Competitive, transparent pricing designed for startups and growing businesses worldwide.',
    color: '#8B5CF6',
    bg: 'rgba(139, 92, 246, 0.14)',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your deadlines. Our structured process ensures timely delivery, every time.',
    color: '#06B6D4',
    bg: 'rgba(6, 182, 212, 0.14)',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: 'From kickoff to launch and beyond — our team is always available to support your growth.',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.14)',
  },
];

const extras = [
  {
    icon: Target,
    title: 'Custom-Built Solutions',
    description: 'No templates. No one-size-fits-all. Every product we build is architected around your specific goals and users.',
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.14)',
  },
  {
    icon: Star,
    title: 'Client-First Mindset',
    description: 'We treat your project like our own. Transparent communication, honest timelines, and a relentless focus on results.',
    color: '#EF4444',
    bg: 'rgba(239, 68, 68, 0.14)',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
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
            <span className="gradient-text">Driven by Results.</span>
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
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: item.bg }}
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
                className="w-13 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: item.bg }}
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
          style={{ background: 'linear-gradient(135deg, hsl(217 91% 52%) 0%, hsl(267 83% 57%) 100%)' }}
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
                <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
