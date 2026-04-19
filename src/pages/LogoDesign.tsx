import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Palette, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { TechStackBrandIcon, type TechBrandIconSource } from '@/components/TechStackBrandIcon';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  ServiceAgileProcessSection,
  type ServiceProcessStep,
} from '@/components/ServiceAgileProcessSection';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const DESIGN_TECH_STACK: { name: string; icon: TechBrandIconSource }[] = [
  { name: 'Figma', icon: { type: 'simple', slug: 'figma' } },
  { name: 'Illustrator', icon: { type: 'simple', slug: 'adobeillustrator' } },
  { name: 'Photoshop', icon: { type: 'simple', slug: 'adobephotoshop' } },
  { name: 'Canva', icon: { type: 'simple', slug: 'canva' } },
  { name: 'Inkscape', icon: { type: 'simple', slug: 'inkscape' } },
  { name: 'Sketch', icon: { type: 'simple', slug: 'sketch' } },
  { name: 'Framer', icon: { type: 'simple', slug: 'framer' } },
  { name: 'Dribbble', icon: { type: 'simple', slug: 'dribbble' } },
  { name: 'Behance', icon: { type: 'simple', slug: 'behance' } },
  { name: 'Affinity Designer', icon: { type: 'simple', slug: 'affinitydesigner' } },
  { name: 'CorelDRAW', icon: { type: 'simple', slug: 'coreldraw' } },
  { name: 'Adobe Creative Cloud', icon: { type: 'simple', slug: 'adobe' } },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Logo Design & Brand Identity',
  provider: {
    '@type': 'Organization',
    name: 'NVHO Tech',
    url: 'https://nvhotech.in',
  },
  areaServed: 'Worldwide',
  description:
    'Professional logo design and brand identity services including vector logos, brand guidelines, and visual assets for print and digital.',
};

const LOGO_DESIGN_PROCESS: ServiceProcessStep[] = [
  { step: '01', title: 'Brief', desc: 'Vision, values, audiences, references & where the mark will live', color: '#3B82F6' },
  { step: '02', title: 'Research', desc: 'Category landscape, differentiation & creative territories', color: '#8B5CF6' },
  { step: '03', title: 'Concepts', desc: 'Distinct directions with rationale — digital mockups for review', color: '#06B6D4' },
  { step: '04', title: 'Refinement', desc: 'Lock geometry, color system, typography pairings & variants', color: '#10B981' },
  { step: '05', title: 'Delivery', desc: 'Vector/source files, usage rules, social & favicon-ready exports', color: '#F59E0B' },
];

const LogoDesign = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoRef = useRef<any>(null);
  const navigate = useNavigate();
  useSmoothScroll(scrollRef, locoRef);

  const benefits = [
    'Distinctive, Memorable Marks',
    'Vector Files for Any Size',
    'Brand Guidelines & Color Systems',
    'Social & Favicon-Ready Assets',
    'Multiple Concept Rounds',
    'Print & Web-Safe Palettes',
    'Fast Iterations Based on Feedback',
    'Commercial-Ready Licensing',
  ];

  const services = [
    {
      title: 'Logo Design',
      description:
        'Custom wordmarks, symbols, and combination marks crafted for clarity at every size — from app icons to billboards.',
    },
    {
      title: 'Brand Identity Systems',
      description:
        'Typography, color, spacing, and usage rules so your team and partners apply the brand consistently everywhere.',
    },
    {
      title: 'Brand Collateral',
      description:
        'Business cards, letterheads, email signatures, and social templates that extend your identity across touchpoints.',
    },
    {
      title: 'Refresh & Modernization',
      description:
        'Evolve an existing logo without losing recognition — tighten geometry, improve legibility, and align with today’s media.',
    },
  ];

  return (
    <>
      <SEO
        title="Logo Design & Brand Identity Services in India | NVHO Tech"
        description="Professional logo design and brand identity in India. Custom logos, vector deliverables, brand guidelines, and collateral from NVHO Tech."
        canonical="https://nvhotech.in/logo-design"
        keywords="logo design India, brand identity, custom logo, vector logo, brand guidelines, NVHO Tech, graphic design"
        schema={serviceSchema}
      />

      <Navigation locoRef={locoRef} />
      <div
        ref={scrollRef}
        data-scroll-container
        className="min-h-screen bg-gradient-hero text-foreground"
      >
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
              <Palette className="w-12 h-12 text-primary" aria-hidden />
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">Logo & Brand Design</h1>
            </div>

            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Identity That Looks Sharp Everywhere Your Customers Meet You
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Your logo is the anchor of your brand. NVHO Tech delivers thoughtful concepting, refined execution, and
              production-ready files so you can launch confidently on the web, in apps, and in print.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-background/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We Deliver</h2>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Design Tools We Use</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {DESIGN_TECH_STACK.map(({ name, icon }) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose NVHO Tech?</h2>

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
          headingId="logo-design-process-heading"
          eyebrow="How We Design"
          titleLead="Our"
          titleAccent="Brand & Logo Process"
          description="Collaborative rounds with clear milestones — you approve direction before we polish production-ready assets."
          steps={LOGO_DESIGN_PROCESS}
        />

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for a Brand You&apos;re Proud Of?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Share your vision — we&apos;ll translate it into a polished identity and deliverables you can use on day one.
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

export default LogoDesign;
