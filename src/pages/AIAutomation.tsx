import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Cpu, CheckCircle2, ArrowRight, Smartphone, Zap, Link2 } from 'lucide-react';
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

const AI_TECH_STACK: { name: string; icon: TechBrandIconSource }[] = [
    { name: 'OpenAI GPT', icon: { type: 'simple', slug: 'openai' } },
    { name: 'TensorFlow', icon: { type: 'simple', slug: 'tensorflow' } },
    { name: 'PyTorch', icon: { type: 'simple', slug: 'pytorch' } },
    { name: 'LangChain', icon: { type: 'lucide', icon: Link2 } },
    { name: 'Python', icon: { type: 'simple', slug: 'python' } },
    { name: 'Machine Learning', icon: { type: 'simple', slug: 'scikitlearn' } },
    { name: 'NLP', icon: { type: 'simple', slug: 'spacy' } },
    { name: 'Computer Vision', icon: { type: 'simple', slug: 'opencv' } },
    { name: 'RPA Tools', icon: { type: 'simple', slug: 'robotframework' } },
    { name: 'Azure AI', icon: { type: 'simple', slug: 'microsoftazure' } },
    { name: 'AWS AI', icon: { type: 'simple', slug: 'amazonaws' } },
    { name: 'Google Cloud AI', icon: { type: 'simple', slug: 'googlecloud' } },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation Services",
    "provider": {
        "@type": "Organization",
        "name": "NVHO Tech",
        "url": "https://nvhotech.in"
    },
    "areaServed": "Worldwide",
    "description": "AI automation services to streamline business processes, reduce costs, and improve efficiency using machine learning, natural language processing, and intelligent automation."
};

const AI_AUTOMATION_PROCESS: ServiceProcessStep[] = [
  { step: '01', title: 'Discovery', desc: 'Use cases, ROI, data availability & compliance boundaries', color: '#3B82F6' },
  { step: '02', title: 'Design', desc: 'Workflow maps, model/tool choice, prompts & guardrails', color: '#8B5CF6' },
  { step: '03', title: 'Build', desc: 'Integrations, RAG/agents, APIs & automation into your stack', color: '#06B6D4' },
  { step: '04', title: 'Validate', desc: 'Accuracy, safety, load tests & human-in-the-loop review', color: '#10B981' },
  { step: '05', title: 'Operate', desc: 'Rollout, monitoring, drift checks & continuous improvement', color: '#F59E0B' },
];

const AIAutomation = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const locoRef = useRef<any>(null);
    const navigate = useNavigate();
    useSmoothScroll(scrollRef, locoRef);

    const benefits = [
        'Reduced Operational Costs',
        'Increased Productivity',
        'Improved Accuracy',
        '24/7 Automated Operations',
        'Data-Driven Insights',
        'Scalable Solutions',
        'Faster Decision Making',
        'Competitive Advantage'
    ];

    const services = [
        {
            title: 'Intelligent Chatbots',
            description: 'AI-powered chatbots that understand context, handle customer queries, and provide personalized responses 24/7.'
        },
        {
            title: 'Process Automation',
            description: 'Automate repetitive tasks and workflows using RPA and AI to free up your team for strategic work.'
        },
        {
            title: 'Predictive Analytics',
            description: 'Leverage machine learning to forecast trends, predict customer behavior, and make data-driven decisions.'
        },
        {
            title: 'Document Processing',
            description: 'Automatically extract, classify, and process information from documents using AI and OCR technology.'
        },
        {
            title: 'Custom AI Solutions',
            description: 'Tailored AI applications built specifically for your business needs, from recommendation engines to fraud detection.'
        },
        {
            title: 'AI Integration',
            description: 'Seamlessly integrate AI capabilities into your existing systems and workflows for enhanced functionality.'
        }
    ];

    const useCases = [
        {
            industry: 'E-Commerce',
            example: 'Product recommendations, inventory forecasting, customer service automation'
        },
        {
            industry: 'Healthcare',
            example: 'Patient data analysis, appointment scheduling, diagnostic assistance'
        },
        {
            industry: 'Finance',
            example: 'Fraud detection, risk assessment, automated trading, customer support'
        },
        {
            industry: 'Manufacturing',
            example: 'Quality control, predictive maintenance, supply chain optimization'
        }
    ];

    return (
        <>
            <SEO
                title="AI Automation Services - Machine Learning & Intelligent Automation"
                description="Transform your business with AI automation services. We implement chatbots, process automation, machine learning, and custom AI solutions to increase efficiency and reduce costs."
                canonical="https://nvhotech.in/ai-automation"
                keywords="AI automation, machine learning services, chatbot development, process automation, RPA, artificial intelligence, business automation, AI solutions India"
                schema={serviceSchema}
            />

            <Navigation locoRef={locoRef} />
            <div
                ref={scrollRef}
                data-scroll-container
                className="min-h-screen bg-gradient-hero text-foreground"
            >
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>

                        <div className="flex items-center gap-3 mb-6">
                            <Cpu className="w-12 h-12 text-primary" />
                            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                                AI Automation Services
                            </h1>
                        </div>

                        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
                            Automate Your Business with Intelligent AI Solutions
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Harness the power of artificial intelligence to transform your business operations. NVHO Tech specializes in implementing AI automation solutions that streamline processes, reduce costs, and unlock new opportunities for growth. From intelligent chatbots to predictive analytics, we help businesses leverage AI to stay competitive in the digital age.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 px-6 bg-background/50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Our AI Automation Solutions
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="glass p-8 rounded-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
                                >
                                    <Zap className="w-10 h-10 text-primary mb-4" />
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
                            AI Technologies We Work With
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {AI_TECH_STACK.map(({ name, icon }) => (
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

                {/* Use Cases */}
                <section className="py-16 px-6 bg-background/50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Industry Use Cases
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {useCases.map((useCase, index) => (
                                <div key={index} className="glass p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3 text-primary">{useCase.industry}</h3>
                                    <p className="text-muted-foreground">{useCase.example}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Business Benefits of AI Automation
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
                  headingId="ai-automation-process-heading"
                  eyebrow="How We Automate"
                  titleLead="Our"
                  titleAccent="AI Implementation Process"
                  description="Experiment safely, prove value on real workflows, then scale with observability and governance built in."
                  steps={AI_AUTOMATION_PROCESS}
                />

                {/* CTA Section */}
                <section className="py-20 px-6 bg-background/50">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Automate Your Business?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Discover how AI automation can transform your operations and drive growth.
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

export default AIAutomation;
