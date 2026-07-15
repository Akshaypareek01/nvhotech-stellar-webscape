import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
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

const WEB_TECH_STACK: { name: string; icon: TechBrandIconSource }[] = [
    { name: 'React.js', icon: { type: 'simple', slug: 'react' } },
    { name: 'Next.js', icon: { type: 'simple', slug: 'nextdotjs' } },
    { name: 'Vue.js', icon: { type: 'simple', slug: 'vuedotjs' } },
    { name: 'Angular', icon: { type: 'simple', slug: 'angular' } },
    { name: 'Node.js', icon: { type: 'simple', slug: 'nodedotjs' } },
    { name: 'Express', icon: { type: 'simple', slug: 'express' } },
    { name: 'MongoDB', icon: { type: 'simple', slug: 'mongodb' } },
    { name: 'PostgreSQL', icon: { type: 'simple', slug: 'postgresql' } },
    { name: 'TypeScript', icon: { type: 'simple', slug: 'typescript' } },
    { name: 'Tailwind CSS', icon: { type: 'simple', slug: 'tailwindcss' } },
    { name: 'GraphQL', icon: { type: 'simple', slug: 'graphql' } },
    { name: 'REST APIs', icon: { type: 'simple', slug: 'axios' } },
];

const WEB_FAQS: FAQItem[] = [
    {
        question: 'How much does web development cost?',
        answer:
            'Web development cost depends on the type of project. A marketing or corporate website is the most affordable, while custom web applications and e-commerce platforms cost more due to features, integrations, and testing. NVHO Tech provides a free consultation and a fixed, itemized quote before development starts.',
    },
    {
        question: 'How long does it take to build a website or web application?',
        answer:
            'A business website typically takes 2 to 4 weeks from discovery to launch. Custom web applications and e-commerce platforms usually take 6 to 16 weeks depending on features and integrations. We deliver in agile sprints, so you review working versions throughout the project.',
    },
    {
        question: 'Which technologies do you use for web development?',
        answer:
            'We build with React, Next.js, Vue, and Angular on the front end, and Node.js with PostgreSQL or MongoDB on the back end, all written in TypeScript. Every site ships with responsive design, SEO-ready markup, and Core Web Vitals performance optimization as standard.',
    },
    {
        question: 'Do you redesign or modernize existing websites?',
        answer:
            'Yes. We audit your current site for performance, SEO, and user experience, then either improve it incrementally or rebuild it on a modern stack. Existing content, URLs, and search rankings are preserved through proper redirects and on-page SEO during migration.',
    },
    {
        question: 'Do you provide support after the website launches?',
        answer:
            'Yes. Every project includes a post-launch support window for fixes, and we offer ongoing maintenance plans covering updates, security patches, backups, performance monitoring, and new feature development. Most of our clients continue with a monthly maintenance engagement after launch.',
    },
];

const webPageSchemas = [
    serviceSchema({
        serviceType: 'Web Development',
        path: '/web-development',
        description:
            'Professional web development services including responsive websites, custom web applications, e-commerce platforms, and progressive web apps for clients worldwide.',
        offerings: [
            'Custom Web Applications',
            'E-Commerce Solutions',
            'Corporate Websites',
            'Progressive Web Apps (PWA)',
        ],
    }),
    breadcrumbSchema([{ name: 'Web Development', path: '/web-development' }]),
    faqSchema(WEB_FAQS),
];

const WEB_DELIVERY_PROCESS: ServiceProcessStep[] = [
  { step: '01', title: 'Discovery', desc: 'Goals, audiences, sitemap & technical constraints', color: '#3B82F6' },
  { step: '02', title: 'UX & UI', desc: 'Wireframes, design system, responsive layouts & content structure', color: '#8B5CF6' },
  { step: '03', title: 'Build', desc: 'Front-end, APIs, CMS/e-commerce & integrations in iterative sprints', color: '#06B6D4' },
  { step: '04', title: 'QA & SEO', desc: 'Cross-browser checks, performance, accessibility & on-page SEO', color: '#10B981' },
  { step: '05', title: 'Launch', desc: 'Hosting, SSL, analytics, handover & ongoing improvements', color: '#F59E0B' },
];

const WebDevelopment = () => {
    const navigate = useNavigate();

    const benefits = [
        'Responsive & Mobile-First Design',
        'SEO Optimized Architecture',
        'Fast Loading Performance',
        'Secure & Scalable Solutions',
        'Cross-Browser Compatibility',
        'Modern UI/UX Design',
        'API Integration',
        'Ongoing Support & Maintenance'
    ];

    const services = [
        {
            title: 'Custom Web Applications',
            description: 'Build powerful, scalable web applications tailored to your business needs with modern frameworks and best practices.'
        },
        {
            title: 'E-Commerce Solutions',
            description: 'Create feature-rich online stores with secure payment gateways, inventory management, and seamless user experiences.'
        },
        {
            title: 'Corporate Websites',
            description: 'Professional business websites that establish your brand presence and convert visitors into customers.'
        },
        {
            title: 'Progressive Web Apps (PWA)',
            description: 'Develop app-like experiences that work offline, load instantly, and engage users across all devices.'
        }
    ];

    return (
        <>
            <SEO
                title="Web Development Services — Websites & Web Apps"
                description="Custom web development services for businesses worldwide: responsive websites, web applications, and e-commerce built with React and Next.js. Free consultation and fixed quote."
                canonical="https://nvhotech.com/web-development"
                keywords="web development services, custom web development company, web application development, e-commerce development, React development, Next.js development"
                schema={webPageSchemas}
            />

            <Navigation />
            <div className="min-h-screen bg-gradient-hero text-foreground">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>

                        <div className="flex items-center gap-3 mb-6">
                            <Globe className="w-12 h-12 text-primary" />
                            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                                Web Development Services
                            </h1>
                        </div>

                        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
                            Build Modern, Scalable Web Solutions That Drive Business Growth
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            At NVHO Tech, we specialize in creating high-performance web applications and websites that deliver exceptional user experiences. Our expert team leverages cutting-edge technologies to build responsive, SEO-friendly, and scalable web solutions tailored to your business objectives.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 px-6 bg-background/50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Our Web Development Solutions
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="glass p-8 rounded-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
                                >
                                    <h3 className="text-2xl font-bold mb-4 text-primary">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="py-16 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Technologies We Use
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {WEB_TECH_STACK.map(({ name, icon }) => (
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

                {/* Benefits */}
                <section className="py-16 px-6 bg-background/50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Why Choose Our Web Development Services?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <p className="text-lg">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <ServiceAgileProcessSection
                  headingId="web-delivery-process-heading"
                  eyebrow="How We Build"
                  titleLead="Our"
                  titleAccent="Web Delivery Process"
                  description="From discovery to launch — structured milestones with room to refine as your product evolves."
                  steps={WEB_DELIVERY_PROCESS}
                />

                <FAQSection faqs={WEB_FAQS} heading="Web Development FAQs" />

                {/* CTA Section */}
                <section className="py-20 px-6">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Build Your Web Solution?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss your project and create a web solution that exceeds your expectations.
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

export default WebDevelopment;
