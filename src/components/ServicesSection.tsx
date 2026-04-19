import { Code, Smartphone, TrendingUp, Palette, Database, Bot, Search, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Stunning, fast, and SEO-optimized websites that turn visitors into customers. Built with React, Next.js, and modern tech.',
    price: 'From ₹10,000',
    features: ['Custom Design', 'Responsive Layout', 'SEO Optimized', 'Fast Performance'],
    link: '/web-development',
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.14)',
    badge: 'Most Popular',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native-quality iOS & Android apps built with React Native and Flutter. From concept to app store in record time.',
    price: 'From ₹50,000',
    features: ['iOS & Android', 'Custom Features', 'App Store Publishing', 'Ongoing Support'],
    link: '/mobile-app-development',
    color: '#8B5CF6',
    bg: 'rgba(139, 92, 246, 0.14)',
    badge: null,
  },
  {
    icon: Bot,
    title: 'AI Automation & Agents',
    description: 'Custom AI agents, chatbots, and automation tools that save your team hundreds of hours every month.',
    price: 'From ₹40,000',
    features: ['Custom AI Models', 'Process Automation', 'Data Analysis', 'Smart Integration'],
    link: '/ai-automation',
    color: '#06B6D4',
    bg: 'rgba(6, 182, 212, 0.14)',
    badge: 'Trending',
  },
  {
    icon: Database,
    title: 'CRM Development',
    description: 'Custom CRM systems that match your exact workflow. Manage leads, clients, and pipelines like a Fortune 500 company.',
    price: 'From ₹50,000',
    features: ['Custom Workflows', 'Data Management', 'Analytics Dashboard', 'API Integration'],
    link: '/software-development',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.14)',
    badge: null,
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Result-driven digital marketing to grow your audience, generate leads, and scale your brand across all channels.',
    price: 'From ₹15,000',
    features: ['Social Media', 'Content Strategy', 'Paid Ads', 'Analytics'],
    link: '/digital-marketing',
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.14)',
    badge: null,
  },
  {
    icon: Palette,
    title: 'Logo & Brand Design',
    description: 'Professional brand identity that makes you instantly recognizable. Logo, guidelines, and visual assets delivered.',
    price: 'From ₹2,999',
    features: ['Custom Logo', 'Multiple Concepts', 'Vector Files', 'Brand Guidelines'],
    link: '/logo-design',
    color: '#EC4899',
    bg: 'rgba(236, 72, 153, 0.14)',
    badge: 'Best Value',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Get found on Google. Data-driven SEO strategies that drive organic traffic and grow your online presence sustainably.',
    price: 'From ₹15,000',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Monthly Reports'],
    link: null,
    color: '#6366F1',
    bg: 'rgba(99, 102, 241, 0.14)',
    badge: null,
  },
  {
    icon: BarChart3,
    title: 'Google Analytics Setup',
    description: 'Turn raw data into actionable insights. Full Analytics setup, custom dashboards, and conversion tracking.',
    price: 'From ₹5,000',
    features: ['Full Setup', 'Custom Reports', 'Conversion Tracking', 'User Journey Maps'],
    link: null,
    color: '#EF4444',
    bg: 'rgba(239, 68, 68, 0.14)',
    badge: null,
  },
];

export const ServicesSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden scroll-mt-20">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-50 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(217 91% 58% / 0.2) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-50 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(267 83% 58% / 0.18) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 badge-blue mb-5">
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5">
            Everything Your Business{' '}
            <span className="gradient-text">Needs to Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions that take your business from idea to market — and from
            market to market leader. Let's build something great together.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ background: service.color }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: service.bg }}
                  >
                    <service.icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>
                  {service.badge && (
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: service.bg, color: service.color }}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title + price */}
                <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <div className="text-sm font-semibold mb-3" style={{ color: service.color }}>
                  {service.price}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="space-y-2 mt-auto">
                  {service.link && (
                    <Link to={service.link} className="block">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                      >
                        Learn More
                        <ArrowRight className="ml-1.5 w-3 h-3" />
                      </Button>
                    </Link>
                  )}
                  <Button
                    size="sm"
                    className="w-full text-xs font-semibold text-white rounded-lg transition-all duration-200"
                    style={{ background: service.color }}
                    onClick={() => scrollToSection('#contact')}
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, hsl(217 91% 52%) 0%, hsl(267 83% 57%) 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              Ready to Launch Your Next Big Idea?
            </h3>
            <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Book a free 30-minute consultation and let's map out exactly how we can help
              you build, scale, and dominate your market.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-bold px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => scrollToSection('#contact')}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
