import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Code, Globe, Smartphone, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
        "@type": "Organization",
        "name": "NVHO Tech",
        "url": "https://nvhotech.in"
    },
    "areaServed": "Worldwide",
    "description": "Professional web development services including responsive websites, web applications, e-commerce platforms, and custom web solutions."
};

const WebDevelopment = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const locoRef = useRef<any>(null);
    const navigate = useNavigate();
    useSmoothScroll(scrollRef, locoRef);

    const technologies = [
        'React.js', 'Next.js', 'Vue.js', 'Angular',
        'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
        'TypeScript', 'Tailwind CSS', 'GraphQL', 'REST APIs'
    ];

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
                title="Web Development Services in India - Custom Web Solutions"
                description="Professional web development services in India. We build responsive websites, web applications, e-commerce platforms, and custom web solutions using React, Next.js, and modern technologies."
                canonical="https://nvhotech.in/web-development"
                keywords="web development India, custom web development, responsive website design, web application development, e-commerce development, React development, Next.js development"
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
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="glass p-4 rounded-lg text-center hover:bg-primary/10 transition-colors"
                                >
                                    <Code className="w-8 h-8 mx-auto mb-2 text-primary" />
                                    <p className="font-medium">{tech}</p>
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
