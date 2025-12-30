import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Code2, CheckCircle2, ArrowRight, Smartphone, Database } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Software Development",
    "provider": {
        "@type": "Organization",
        "name": "NVHO Tech",
        "url": "https://nvhotech.in"
    },
    "areaServed": "Worldwide",
    "description": "Custom software development services including enterprise applications, CRM systems, ERP solutions, and bespoke software tailored to your business needs."
};

const SoftwareDevelopment = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const locoRef = useRef<any>(null);
    const navigate = useNavigate();
    useSmoothScroll(scrollRef, locoRef);

    const technologies = [
        'Java', 'Python', '.NET', 'Node.js',
        'React', 'Angular', 'Vue.js', 'TypeScript',
        'PostgreSQL', 'MongoDB', 'MySQL', 'Redis',
        'Docker', 'Kubernetes', 'AWS', 'Azure'
    ];

    const benefits = [
        'Tailored to Your Business Needs',
        'Scalable Architecture',
        'Secure & Reliable',
        'Integration with Existing Systems',
        'Ongoing Support & Maintenance',
        'Agile Development Process',
        'Cost-Effective Solutions',
        'Future-Proof Technology'
    ];

    const services = [
        {
            title: 'Enterprise Software',
            description: 'Build robust enterprise applications that streamline operations, improve collaboration, and drive business efficiency across your organization.'
        },
        {
            title: 'CRM Development',
            description: 'Custom CRM systems designed to manage customer relationships, track sales pipelines, and enhance customer satisfaction.'
        },
        {
            title: 'ERP Solutions',
            description: 'Comprehensive ERP systems that integrate all aspects of your business operations into a single, unified platform.'
        },
        {
            title: 'SaaS Applications',
            description: 'Cloud-based software-as-a-service solutions with subscription models, multi-tenancy, and automatic updates.'
        },
        {
            title: 'API Development',
            description: 'RESTful and GraphQL APIs that enable seamless integration between different systems and third-party services.'
        },
        {
            title: 'Legacy Modernization',
            description: 'Transform outdated systems into modern, efficient applications using the latest technologies and best practices.'
        }
    ];

    const industries = [
        {
            name: 'Healthcare',
            solutions: 'Patient management systems, telemedicine platforms, health records'
        },
        {
            name: 'Finance',
            solutions: 'Banking software, payment gateways, financial analytics tools'
        },
        {
            name: 'Retail',
            solutions: 'Inventory management, POS systems, e-commerce platforms'
        },
        {
            name: 'Education',
            solutions: 'Learning management systems, student portals, online courses'
        },
        {
            name: 'Logistics',
            solutions: 'Fleet management, route optimization, warehouse systems'
        },
        {
            name: 'Real Estate',
            solutions: 'Property management, listing platforms, CRM for agents'
        }
    ];

    return (
        <>
            <SEO
                title="Custom Software Development Services - Enterprise Solutions"
                description="Professional custom software development services in India. We build enterprise applications, CRM systems, ERP solutions, and bespoke software tailored to your business needs."
                canonical="https://nvhotech.in/software-development"
                keywords="custom software development, enterprise software, CRM development, ERP solutions, software development company India, bespoke software, business software"
                schema={serviceSchema}
            />

            <div
                ref={scrollRef}
                data-scroll-container
                className="min-h-screen bg-gradient-hero text-foreground"
            >
                <Navigation locoRef={locoRef} />

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>

                        <div className="flex items-center gap-3 mb-6">
                            <Code2 className="w-12 h-12 text-primary" />
                            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                                Custom Software Development
                            </h1>
                        </div>

                        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
                            Bespoke Software Solutions Built for Your Business
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            At NVHO Tech, we understand that every business is unique. Our custom software development services deliver tailored solutions that address your specific challenges and objectives. From enterprise applications to specialized business tools, we create software that gives you a competitive edge and drives measurable results.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 px-6 bg-background/50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Our Software Development Services
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="glass p-8 rounded-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
                                >
                                    <Database className="w-10 h-10 text-primary mb-4" />
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
                            Our Technology Stack
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="glass p-4 rounded-lg text-center hover:bg-primary/10 transition-colors"
                                >
                                    <Code2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                                    <p className="font-medium">{tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries */}
                <section className="py-16 px-6 bg-background/50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Industries We Serve
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industries.map((industry, index) => (
                                <div key={index} className="glass p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3 text-primary">{industry.name}</h3>
                                    <p className="text-muted-foreground text-sm">{industry.solutions}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Why Choose Our Software Development Services?
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

                {/* Development Process */}
                <section className="py-16 px-6 bg-background/50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Our Agile Development Process
                        </h2>

                        <div className="grid md:grid-cols-5 gap-6">
                            {[
                                { step: '01', title: 'Discovery', desc: 'Requirements gathering' },
                                { step: '02', title: 'Planning', desc: 'Architecture design' },
                                { step: '03', title: 'Development', desc: 'Iterative coding' },
                                { step: '04', title: 'Testing', desc: 'Quality assurance' },
                                { step: '05', title: 'Deployment', desc: 'Launch & support' }
                            ].map((phase, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl font-bold text-primary/20 mb-3">{phase.step}</div>
                                    <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                                    <p className="text-sm text-muted-foreground">{phase.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Build Your Custom Software?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss your requirements and create a solution that perfectly fits your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105"
                                onClick={() => navigate('/', { state: { scrollTo: '#contact' } })}
                            >
                                Start Your Project
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

export default SoftwareDevelopment;
