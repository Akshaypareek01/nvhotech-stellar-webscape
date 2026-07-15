import { Link, useNavigate } from 'react-router-dom';
import type { CSSProperties } from 'react';
import {
  ArrowLeft, ArrowRight, Smartphone,
  Building2, Users, LayoutGrid, Cloud, Webhook, RefreshCw,
  CheckCircle2, Code2,
  DollarSign, ShoppingCart, BookOpen, Truck, Home,
  Stethoscope,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { TechStackBrandIcon, type TechBrandIconSource } from '@/components/TechStackBrandIcon';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ServiceAgileProcessSection } from '@/components/ServiceAgileProcessSection';
import { FAQSection } from '@/components/FAQSection';
import { serviceSchema, breadcrumbSchema, faqSchema, type FAQItem } from '@/lib/seoSchemas';

const SOFTWARE_FAQS: FAQItem[] = [
  {
    question: 'What is custom software development?',
    answer:
      'Custom software development means building an application designed around your exact business processes instead of adapting your business to off-the-shelf tools. It covers CRMs, ERPs, internal dashboards, customer portals, and industry-specific systems that you own outright, with no per-seat license fees.',
  },
  {
    question: 'How much does custom software development cost?',
    answer:
      'Cost is driven by the number of user roles, screens, integrations, and compliance requirements. A focused internal tool costs far less than a multi-tenant enterprise platform. After a free discovery call we provide a fixed, milestone-based quote so there are no surprise costs mid-project.',
  },
  {
    question: 'Custom software vs off-the-shelf: which should I choose?',
    answer:
      'Choose off-the-shelf software when a standard tool covers 90 percent of your workflow. Choose custom software when your process is a competitive advantage, when license fees grow with headcount, or when you need integrations and reporting that packaged tools cannot provide.',
  },
  {
    question: 'Can you modernize or take over our legacy software?',
    answer:
      'Yes. We audit the existing codebase, stabilize what works, and migrate high-risk parts to a modern stack incrementally, so your business keeps running during the transition. We also take over maintenance of systems built by previous vendors, starting with a code and security review.',
  },
  {
    question: 'Who owns the source code and intellectual property?',
    answer:
      'You do. Every NVHO Tech contract transfers full source code and intellectual property ownership to the client on final payment. Code lives in a repository you control from day one, together with documentation and deployment scripts, so you are never locked in to us.',
  },
];

const softwarePageSchemas = [
  serviceSchema({
    serviceType: 'Custom Software Development',
    path: '/software-development',
    description:
      'Custom software development services including enterprise applications, CRM systems, ERP solutions, and bespoke software tailored to business needs, for clients worldwide.',
    offerings: [
      'Enterprise Applications',
      'CRM Development',
      'ERP Solutions',
      'Legacy System Modernization',
    ],
  }),
  breadcrumbSchema([{ name: 'Software Development', path: '/software-development' }]),
  faqSchema(SOFTWARE_FAQS),
];

const services = [
  {
    icon: Building2,
    title: 'Enterprise Software',
    description: 'Robust enterprise applications that streamline operations, improve collaboration, and drive business efficiency across your entire organization.',
    color: 'hsl(var(--cat-a))',
    bg: 'hsl(var(--cat-a) / 0.12)',
  },
  {
    icon: Users,
    title: 'CRM Development',
    description: 'Custom CRM systems designed to manage customer relationships, track sales pipelines, and consistently enhance customer satisfaction.',
    color: 'hsl(var(--cat-b))',
    bg: 'hsl(var(--cat-b) / 0.12)',
  },
  {
    icon: LayoutGrid,
    title: 'ERP Solutions',
    description: 'Comprehensive ERP systems that integrate all aspects of your business operations — finance, HR, inventory, and more — into one unified platform.',
    color: 'hsl(var(--cat-c))',
    bg: 'hsl(var(--cat-c) / 0.12)',
  },
  {
    icon: Cloud,
    title: 'SaaS Applications',
    description: 'Cloud-based software-as-a-service solutions with subscription models, multi-tenancy support, auto-updates, and seamless scaling.',
    color: 'hsl(var(--cat-d))',
    bg: 'hsl(var(--cat-d) / 0.12)',
  },
  {
    icon: Webhook,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs that enable seamless integration between different systems, mobile apps, and third-party services.',
    color: 'hsl(var(--cat-b))',
    bg: 'hsl(var(--cat-b) / 0.12)',
  },
  {
    icon: RefreshCw,
    title: 'Legacy Modernization',
    description: 'Transform outdated systems into modern, efficient applications using the latest technologies, best practices, and zero business disruption.',
    color: 'hsl(var(--cat-b))',
    bg: 'hsl(var(--cat-c) / 0.12)',
  },
];

const SOFTWARE_TECH_STACK: { name: string; icon: TechBrandIconSource }[] = [
  { name: 'Java', icon: { type: 'simple', slug: 'openjdk' } },
  { name: 'Python', icon: { type: 'simple', slug: 'python' } },
  { name: '.NET', icon: { type: 'simple', slug: 'dotnet' } },
  { name: 'Node.js', icon: { type: 'simple', slug: 'nodedotjs' } },
  { name: 'React', icon: { type: 'simple', slug: 'react' } },
  { name: 'Angular', icon: { type: 'simple', slug: 'angular' } },
  { name: 'Vue.js', icon: { type: 'simple', slug: 'vuedotjs' } },
  { name: 'TypeScript', icon: { type: 'simple', slug: 'typescript' } },
  { name: 'PostgreSQL', icon: { type: 'simple', slug: 'postgresql' } },
  { name: 'MongoDB', icon: { type: 'simple', slug: 'mongodb' } },
  { name: 'MySQL', icon: { type: 'simple', slug: 'mysql' } },
  { name: 'Redis', icon: { type: 'simple', slug: 'redis' } },
  { name: 'Docker', icon: { type: 'simple', slug: 'docker' } },
  { name: 'Kubernetes', icon: { type: 'simple', slug: 'kubernetes' } },
  { name: 'AWS', icon: { type: 'simple', slug: 'amazonaws' } },
  { name: 'Azure', icon: { type: 'simple', slug: 'microsoftazure' } },
];

const benefits = [
  'Tailored to Your Business Needs',
  'Scalable Architecture',
  'Secure & Reliable',
  'Integration with Existing Systems',
  'Ongoing Support & Maintenance',
  'Agile Development Process',
  'Cost-Effective Solutions',
  'Future-Proof Technology',
];

const industries = [
  { icon: Stethoscope, name: 'Healthcare', solutions: 'Patient management, telemedicine platforms, health records', color: 'hsl(var(--cat-a))' },
  { icon: DollarSign, name: 'Finance', solutions: 'Banking software, payment gateways, financial analytics tools', color: 'hsl(var(--cat-d))' },
  { icon: ShoppingCart, name: 'Retail', solutions: 'Inventory management, POS systems, e-commerce platforms', color: 'hsl(var(--cat-b))' },
  { icon: BookOpen, name: 'Education', solutions: 'Learning management systems, student portals, online courses', color: 'hsl(var(--cat-b))' },
  { icon: Truck, name: 'Logistics', solutions: 'Fleet management, route optimization, warehouse systems', color: 'hsl(var(--cat-c))' },
  { icon: Home, name: 'Real Estate', solutions: 'Property management, listing platforms, CRM for agents', color: 'hsl(var(--cat-a))' },
];

const SoftwareDevelopment = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Custom Software Development Services & Solutions"
        description="Custom software development for businesses worldwide: enterprise applications, CRM and ERP systems, and bespoke tools you fully own. Fixed quotes, milestone delivery."
        canonical="https://nvhotech.com/software-development"
        keywords="custom software development company, enterprise software development, CRM development, ERP solutions, bespoke software, hire software developers"
        schema={softwarePageSchemas}
      />

      <Navigation />
      <div className="min-h-screen bg-background text-foreground">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-secondary/30 px-6 pb-20 pt-32 dark:bg-secondary/20">
          <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
          <div
            className="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-primary/10 blur-[60px] dark:bg-primary/20"
            aria-hidden
          />

          <div className="container relative z-10 mx-auto max-w-6xl">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Home
            </Link>

            <div className="mb-6 flex items-start gap-4">
              <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
                <Code2 className="h-7 w-7 text-primary" aria-hidden />
              </div>
              <div>
                <div className="badge-blue mb-3 inline-flex items-center gap-2">
                  <span>Software Development</span>
                </div>
                <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
                  Custom Software{' '}
                  <span className="gradient-text">Development</span>
                </h1>
              </div>
            </div>

            <h2 className="mb-6 max-w-3xl text-xl font-medium text-muted-foreground md:text-2xl">
              Bespoke Software Solutions Built for Your Business
            </h2>

            <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
              At NVHO Tech, we understand that every business is unique. Our custom software development
              services deliver tailored solutions that address your specific challenges and objectives.
              From enterprise applications to specialized business tools, we create software that gives
              you a competitive edge and drives measurable results.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                className="btn-gradient rounded-xl px-7 font-semibold"
                onClick={() => navigate('/', { state: { scrollTo: '#contact' } })}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Button>
              <Button
                variant="outline"
                className="rounded-xl border-border px-7 text-foreground hover:bg-primary/10 hover:text-primary"
                onClick={() => window.open('https://wa.me/918290918154', '_blank')}
              >
                <Smartphone className="mr-2 h-4 w-4" aria-hidden />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>

        {/* ── Our Software Development Services ────────────────── */}
        <section className="bg-background px-6 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <div className="badge-blue mb-4 inline-flex items-center gap-2">
                <span>What We Build</span>
              </div>
              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                Our Software Development{' '}
                <span className="gradient-text">Services</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                From ground-up enterprise platforms to API-first integrations — we cover the full
                spectrum of custom software development.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div
                    className="absolute left-0 right-0 top-0 h-0.5 rounded-t-2xl"
                    style={{ background: service.color }}
                  />

                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: service.bg }}
                  >
                    <service.icon className="h-6 w-6" style={{ color: service.color }} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technologies ─────────────────────────────────────── */}
        <section className="bg-secondary/30 px-6 py-20 dark:bg-secondary/15">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="badge-blue mb-4 inline-flex items-center gap-2">
                <span>Tech Stack</span>
              </div>
              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                Our <span className="gradient-text">Technology Stack</span>
              </h2>
              <p className="mx-auto max-w-xl text-muted-foreground">
                We use battle-tested, industry-leading technologies to build reliable, performant software.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
              {SOFTWARE_TECH_STACK.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <TechStackBrandIcon source={icon} />
                  <p className="text-xs font-semibold leading-snug text-foreground">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ───────────────────────────────────────── */}
        <section className="bg-background px-6 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="badge-blue mb-4 inline-flex items-center gap-2">
                <span>Industries</span>
              </div>
              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                Industries <span className="gradient-text">We Serve</span>
              </h2>
              <p className="mx-auto max-w-xl text-muted-foreground">
                Deep domain expertise across verticals — we know your industry&apos;s challenges and how to solve them.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="icon-chip flex h-11 w-11 shrink-0 items-center justify-center"
                    style={{ '--chip-tint': industry.color } as CSSProperties}
                  >
                    <industry.icon className="h-5 w-5" style={{ color: industry.color }} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-base font-bold text-foreground transition-colors group-hover:text-primary">
                      {industry.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{industry.solutions}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ─────────────────────────────────────────── */}
        <section className="bg-secondary/30 px-6 py-20 dark:bg-secondary/15">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <div className="badge-blue mb-4 inline-flex items-center gap-2">
                <span>Why Choose Us</span>
              </div>
              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                Why Choose Our <span className="gradient-text">Software Development</span>?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <p className="text-sm font-semibold text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceAgileProcessSection
          className="bg-background"
          headingId="software-development-process-heading"
        />

        <FAQSection faqs={SOFTWARE_FAQS} heading="Custom Software Development FAQs" />

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="bg-secondary/30 px-6 py-20 dark:bg-secondary/15">
          <div className="container mx-auto max-w-4xl">
            <div
              className="rounded-3xl p-12 text-center text-white relative overflow-hidden"
              style={{ background: 'var(--gradient-cta)' }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
              />
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                  Ready to Build Your Custom Software?
                </h2>
                <p className="text-white/85 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss your requirements and create a solution that perfectly fits your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="rounded-xl bg-white px-10 font-bold text-[hsl(var(--cta-deep))] shadow-lg hover:bg-white/90 dark:text-[hsl(var(--cta-deep))] dark:hover:bg-white/90"
                    onClick={() => navigate('/', { state: { scrollTo: '#contact' } })}
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl border-2 border-white/80 bg-transparent text-white shadow-none hover:bg-white/15 hover:text-white"
                    onClick={() => window.open('https://wa.me/918290918154', '_blank')}
                  >
                    <Smartphone className="mr-2 h-5 w-5 shrink-0 text-white" aria-hidden />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SoftwareDevelopment;
