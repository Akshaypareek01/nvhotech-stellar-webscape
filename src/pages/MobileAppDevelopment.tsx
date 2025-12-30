import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Smartphone, CheckCircle2, ArrowRight, Code } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile App Development",
    "provider": {
        "@type": "Organization",
        "name": "NVHO Tech",
        "url": "https://nvhotech.in"
    },
    "areaServed": "Worldwide",
    "description": "Professional mobile app development services for iOS and Android. We build native and cross-platform mobile applications using React Native, Flutter, and modern technologies."
};

const MobileAppDevelopment = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const locoRef = useRef<any>(null);
    const navigate = useNavigate();
    useSmoothScroll(scrollRef, locoRef);

    const technologies = [
        'React Native', 'Flutter', 'Swift', 'Kotlin',
        'Firebase', 'Redux', 'TypeScript', 'REST APIs',
        'GraphQL', 'Push Notifications', 'In-App Purchases', 'Analytics'
    ];

    const benefits = [
        'Native & Cross-Platform Development',
        'Intuitive User Interface Design',
        'Offline Functionality',
        'Real-time Data Synchronization',
        'Secure Authentication',
        'App Store Optimization',
        'Performance Optimization',
        'Post-Launch Support'
    ];

    const services = [
        {
            title: 'iOS App Development',
            description: 'Build stunning iOS applications using Swift and SwiftUI that deliver exceptional performance on iPhone and iPad.'
        },
        {
            title: 'Android App Development',
            description: 'Create powerful Android apps with Kotlin and Java that reach millions of users on the Google Play Store.'
        },
        {
            title: 'Cross-Platform Apps',
            description: 'Develop apps once and deploy on both iOS and Android using React Native or Flutter, saving time and costs.'
        },
        {
            title: 'Enterprise Mobile Solutions',
            description: 'Custom mobile applications for businesses with advanced features, security, and seamless integration with existing systems.'
        }
    ];

    return (
        <>
            <SEO
                title="Mobile App Development Services - iOS & Android Apps"
                description="Professional mobile app development services in India. We build native and cross-platform mobile apps for iOS and Android using React Native, Flutter, Swift, and Kotlin."
                canonical="https://nvhotech.in/mobile-app-development"
                keywords="mobile app development India, iOS app development, Android app development, React Native development, Flutter development, cross-platform apps, custom mobile apps"
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
                            <Smartphone className="w-12 h-12 text-primary" />
                            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                                Mobile App Development
                            </h1>
                        </div>

                        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
                            Transform Your Ideas into Powerful Mobile Applications
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            NVHO Tech delivers cutting-edge mobile app development services for iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for wider reach, our experienced developers create mobile applications that engage users and drive business results.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 px-6 bg-background/50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Our Mobile App Development Services
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
                            Technologies & Frameworks
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
                            Why Choose Our Mobile App Development?
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

                {/* Process Section */}
                <section className="py-16 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Our Development Process
                        </h2>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                                { step: '02', title: 'Design', desc: 'Creating intuitive UI/UX designs' },
                                { step: '03', title: 'Development', desc: 'Building your app with best practices' },
                                { step: '04', title: 'Launch', desc: 'Deploying to app stores and beyond' }
                            ].map((phase, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-5xl font-bold text-primary/20 mb-4">{phase.step}</div>
                                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                                    <p className="text-muted-foreground">{phase.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6 bg-background/50">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Build Your Mobile App?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's bring your mobile app idea to life with our expert development team.
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

export default MobileAppDevelopment;
