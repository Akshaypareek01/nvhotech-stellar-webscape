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
import { FAQSection } from '@/components/FAQSection';
import { serviceSchema, breadcrumbSchema, faqSchema, type FAQItem } from '@/lib/seoSchemas';

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

const LOGO_FAQS: FAQItem[] = [
  {
    question: 'What is included in your logo design service?',
    answer:
      'You receive multiple original logo concepts, revision rounds on your chosen direction, and final files in vector formats (SVG, EPS, PDF) plus PNG for web. Full brand identity packages add color palettes, typography, usage guidelines, and social media and stationery assets.',
  },
  {
    question: 'How long does logo design take?',
    answer:
      'A logo project typically takes 1 to 2 weeks: a creative brief and research first, initial concepts within a few days, then revision rounds until approval. Complete brand identity packages with guidelines and collateral usually take 2 to 4 weeks depending on scope.',
  },
  {
    question: 'Do I own the logo and can I trademark it?',
    answer:
      'Yes. On final payment you receive full ownership and copyright of the final logo, with all source files. Every design is created from scratch — no templates or stock marks — so you are free to register it as a trademark in your country.',
  },
  {
    question: 'How many concepts and revisions do I get?',
    answer:
      'We present several distinct creative directions, each with a rationale, rather than dozens of near-duplicates. You pick one direction and we refine it through structured revision rounds until you approve. Additional directions can always be added if none of the initial routes fit.',
  },
];

const logoPageSchemas = [
  serviceSchema({
    serviceType: 'Logo Design & Brand Identity',
    path: '/logo-design',
    description:
      'Professional logo design and brand identity services including original vector logos, brand guidelines, and visual assets for print and digital, delivered worldwide.',
    offerings: ['Custom Logo Design', 'Brand Identity Packages', 'Brand Guidelines', 'Marketing Collateral'],
  }),
  breadcrumbSchema([{ name: 'Logo Design', path: '/logo-design' }]),
  faqSchema(LOGO_FAQS),
];

const LOGO_DESIGN_PROCESS: ServiceProcessStep[] = [
  { step: '01', title: 'Brief', desc: 'Vision, values, audiences, references & where the mark will live', color: 'hsl(var(--cat-a))' },
  { step: '02', title: 'Research', desc: 'Category landscape, differentiation & creative territories', color: 'hsl(var(--cat-b))' },
  { step: '03', title: 'Concepts', desc: 'Distinct directions with rationale — digital mockups for review', color: 'hsl(var(--cat-c))' },
  { step: '04', title: 'Refinement', desc: 'Lock geometry, color system, typography pairings & variants', color: 'hsl(var(--cat-d))' },
  { step: '05', title: 'Delivery', desc: 'Vector/source files, usage rules, social & favicon-ready exports', color: 'hsl(var(--cat-b))' },
];

const LogoDesign = () => {
  const navigate = useNavigate();

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
        title="Logo Design & Brand Identity Services"
        description="Custom logo design and brand identity for businesses worldwide: original concepts, vector files, brand guidelines, and full ownership of your logo. Delivered in 1-2 weeks."
        canonical="https://nvhotech.com/logo-design"
        keywords="logo design services, brand identity design, custom logo design, vector logo, brand guidelines, graphic design services"
        schema={logoPageSchemas}
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

        <FAQSection faqs={LOGO_FAQS} heading="Logo Design FAQs" />

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for a Brand You&apos;re Proud Of?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Share your vision — we&apos;ll translate it into a polished identity and deliverables you can use on day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-gradient transition-all duration-300 hover:scale-105"
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
