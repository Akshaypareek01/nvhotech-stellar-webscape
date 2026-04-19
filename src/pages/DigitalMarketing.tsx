import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Megaphone, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { TechStackBrandIcon, type TechBrandIconSource } from '@/components/TechStackBrandIcon';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  ServiceAgileProcessSection,
  type ServiceProcessStep,
} from '@/components/ServiceAgileProcessSection';

const MARKETING_TECH_STACK: { name: string; icon: TechBrandIconSource }[] = [
  { name: 'Google Ads', icon: { type: 'simple', slug: 'googleads' } },
  { name: 'Google Analytics', icon: { type: 'simple', slug: 'googleanalytics' } },
  { name: 'Meta Ads', icon: { type: 'simple', slug: 'meta' } },
  { name: 'LinkedIn', icon: { type: 'simple', slug: 'linkedin' } },
  { name: 'HubSpot', icon: { type: 'simple', slug: 'hubspot' } },
  { name: 'Mailchimp', icon: { type: 'simple', slug: 'mailchimp' } },
  { name: 'Semrush', icon: { type: 'simple', slug: 'semrush' } },
  { name: 'Buffer', icon: { type: 'simple', slug: 'buffer' } },
  { name: 'WordPress', icon: { type: 'simple', slug: 'wordpress' } },
  { name: 'Shopify', icon: { type: 'simple', slug: 'shopify' } },
  { name: 'Canva', icon: { type: 'simple', slug: 'canva' } },
  { name: 'X (Twitter)', icon: { type: 'simple', slug: 'x' } },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Marketing',
  provider: {
    '@type': 'Organization',
    name: 'NVHO Tech',
    url: 'https://nvhotech.in',
  },
  areaServed: 'Worldwide',
  description:
    'Digital marketing services including SEO, paid ads, social media, content strategy, and analytics to grow your brand and leads.',
};

const DIGITAL_MARKETING_PROCESS: ServiceProcessStep[] = [
  { step: '01', title: 'Audit & goals', desc: 'Channel audit, audience research, competitors & KPI baseline', color: '#3B82F6' },
  { step: '02', title: 'Strategy', desc: 'Channel mix, budgets, messaging pillars & conversion paths', color: '#8B5CF6' },
  { step: '03', title: 'Execution', desc: 'Campaign builds, creatives, landing pages & tracking setup', color: '#06B6D4' },
  { step: '04', title: 'Optimize', desc: 'A/B tests, bid/budget tuning, SEO iterations & creative refresh', color: '#10B981' },
  { step: '05', title: 'Report & scale', desc: 'Dashboards, learnings, forecasting & roadmap for growth', color: '#F59E0B' },
];

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const benefits = [
    'Data-Driven Campaigns',
    'SEO & Content That Ranks',
    'Paid Media Across Google & Social',
    'Clear Reporting & KPIs',
    'Brand-Consistent Creative',
    'Conversion-Focused Landing Pages',
    'Audience & Competitor Research',
    'Ongoing Optimization & Support',
  ];

  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Technical, on-page, and content SEO to improve visibility, organic traffic, and qualified leads from search engines.',
    },
    {
      title: 'Paid Advertising (PPC)',
      description:
        'Google Ads, Meta, and LinkedIn campaigns with structured testing, bidding, and creative iterations to lower CPA and scale spend.',
    },
    {
      title: 'Social Media Marketing',
      description:
        'Strategy, content calendars, community engagement, and paid boosts aligned with your brand voice and business goals.',
    },
    {
      title: 'Content & Email Marketing',
      description:
        'Blog posts, landing copy, newsletters, and automation flows that nurture prospects and retain customers.',
    },
  ];

  return (
    <>
      <SEO
        title="Digital Marketing Services in India - SEO, PPC & Social"
        description="NVHO Tech offers digital marketing in India: SEO, paid ads, social media, content, and analytics. Grow traffic, leads, and revenue with a measurable strategy."
        canonical="https://nvhotech.in/digital-marketing"
        keywords="digital marketing India, SEO services, PPC Google Ads, social media marketing, content marketing, NVHO Tech, lead generation"
        schema={serviceSchema}
      />

      <Navigation />
      <div className="min-h-screen bg-gradient-hero text-foreground">
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <Megaphone className="w-12 h-12 text-primary" aria-hidden />
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">Digital Marketing Services</h1>
            </div>

            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Grow Traffic, Leads, and Revenue With a Coordinated Strategy
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From search and paid media to social and content, NVHO Tech helps you reach the right audiences,
              improve conversion paths, and report on what matters. We combine channel expertise with analytics so
              every rupee spent ties back to business outcomes.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-background/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Digital Marketing Solutions</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="glass p-8 rounded-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Platforms & Tools We Use</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {MARKETING_TECH_STACK.map(({ name, icon }) => (
                <div
                  key={name}
                  className="glass p-4 rounded-lg text-center hover:bg-primary/10 transition-colors flex flex-col items-center gap-2"
                >
                  <TechStackBrandIcon source={icon} />
                  <p className="font-medium text-sm leading-snug">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-background/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Work With NVHO Tech?</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceAgileProcessSection
          headingId="digital-marketing-process-heading"
          eyebrow="How We Grow Brands"
          titleLead="Our"
          titleAccent="Marketing Delivery Process"
          description="Transparent reporting and iterative optimization so spend ties back to leads, revenue, and brand health."
          steps={DIGITAL_MARKETING_PROCESS}
        />

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Marketing?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tell us your goals — we&apos;ll propose channels, creative direction, and a roadmap you can act on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/', { state: { scrollTo: '#contact' } })}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://wa.me/918290918154', '_blank')}
              >
                <Smartphone className="mr-2 w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DigitalMarketing;
