import { useRef, lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, faqSchema, type FAQItem } from '@/lib/seoSchemas';
import { useHeroScrollSnap } from '@/hooks/useHeroScrollSnap';

// Lazy load below-the-fold sections
const AppSliderSection = lazy(() => import('@/components/AppSliderSection').then(module => ({ default: module.AppSliderSection })));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection').then(module => ({ default: module.ProjectsSection })));
const ContactSection = lazy(() => import('@/components/ContactSection').then(module => ({ default: module.ContactSection })));

const SectionLoader = () => (
  <div className="w-full h-[400px] flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-2 border-border border-t-primary rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground font-medium">Loading...</p>
    </div>
  </div>
);

const HOME_FAQS: FAQItem[] = [
  {
    question: 'What does NVHO Tech do?',
    answer:
      'NVHO Tech is a software development company based in India that serves clients worldwide. Founded in 2024, we have delivered 120+ projects for 100+ clients. We design and build custom web applications, iOS and Android mobile apps, AI automation systems, and enterprise software, and also provide digital marketing and brand design services.',
  },
  {
    question: 'Does NVHO Tech work with international clients?',
    answer:
      'Yes. NVHO Tech works with startups and businesses across the US, UK, Europe, the Middle East, and Asia. We collaborate remotely with overlapping working hours, communicate in English over your preferred tools, and handle contracts and invoicing for international engagements.',
  },
  {
    question: 'How much does it cost to build a website or app with NVHO Tech?',
    answer:
      'Cost depends on scope, features, and integrations. A marketing website is the most affordable, custom web or mobile applications cost more, and AI automation projects are priced by workflow complexity. We provide a free consultation and a fixed, itemized quote before any work begins.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'A business website typically takes 2 to 4 weeks. Custom web applications and mobile apps usually take 6 to 16 weeks depending on features. We work in agile sprints, so you see working software early and can adjust priorities as the project progresses.',
  },
  {
    question: 'Which technologies does NVHO Tech use?',
    answer:
      'We build with React, Next.js, Node.js, TypeScript, React Native, and Flutter, backed by PostgreSQL, MongoDB, and cloud platforms like AWS. For AI automation we integrate large language models such as GPT and Claude into business workflows, chatbots, and internal tools.',
  },
  {
    question: 'How do I get started with NVHO Tech?',
    answer:
      'Contact us through the form on this page, email info@nvhotech.com, or book a free appointment. We start with a short discovery call to understand your goals, then send a proposal with scope, timeline, and cost — with no obligation to proceed.',
  },
];

const homeSchemas = [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, faqSchema(HOME_FAQS)];

const LANDING_CHATBOT_SCRIPT_ID = 'nvho-landing-chatbot';
const LANDING_CHATBOT_SRC = 'https://apis.chatbot.nvhotech.in/chatbot.js';
const LANDING_CHATBOT_USER_ID = '69e4a092120e9155a83b92ab';
const LANDING_CHATBOT_BOT_ID = 'default';

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useHeroScrollSnap();

  useEffect(() => {
    if (document.getElementById(LANDING_CHATBOT_SCRIPT_ID)) return;
    const script = document.createElement('script');
    script.id = LANDING_CHATBOT_SCRIPT_ID;
    script.src = LANDING_CHATBOT_SRC;
    script.defer = true;
    script.setAttribute('data-user-id', LANDING_CHATBOT_USER_ID);
    script.setAttribute('data-bot-id', LANDING_CHATBOT_BOT_ID);
    document.body.appendChild(script);
    return () => {
      document.getElementById(LANDING_CHATBOT_SCRIPT_ID)?.remove();
    };
  }, []);

  useEffect(() => {
    const targetId = location.state?.scrollTo || location.hash;
    if (!targetId) return;

    const scrollToTarget = () => {
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        setTimeout(scrollToTarget, 120);
      }
    };
    setTimeout(scrollToTarget, 80);
  }, [location]);

  return (
    <>
      <SEO
        title="Software Development Company — Web, Apps & AI"
        description="NVHO Tech builds custom web applications, mobile apps, AI automation, and enterprise software for startups and businesses worldwide. Get a free consultation and fixed quote."
        canonical="https://nvhotech.com/"
        keywords="software development company, web development services, mobile app development company, AI automation services, custom software development, hire developers"
        schema={homeSchemas}
      />
      <Navigation />
      <div
        ref={scrollRef}
        className="min-h-screen bg-background text-foreground"
      >
        <ParticleBackground />

        <main className="relative z-10">
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="app-designs">
            <Suspense fallback={<SectionLoader />}>
              <AppSliderSection />
            </Suspense>
          </section>
          <section id="services">
            <ServicesSection />
          </section>
          <section id="projects">
            <Suspense fallback={<SectionLoader />}>
              <ProjectsSection />
            </Suspense>
          </section>
          <section id="faq">
            <FAQSection
              faqs={HOME_FAQS}
              intro="Straight answers to the questions businesses ask before working with us."
            />
          </section>
          <section id="contact">
            <Suspense fallback={<SectionLoader />}>
              <ContactSection />
            </Suspense>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;

