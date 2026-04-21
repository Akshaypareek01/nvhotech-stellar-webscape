import { useRef, lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { Footer } from '@/components/Footer';

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NVHO Tech",
  "url": "https://nvhotech.com",
  "logo": "https://nvhotech.com/images/logo.png",
  "description": "NVHO Tech provides web development, mobile apps, AI automation, and custom software solutions globally.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressLocality": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "url": "https://nvhotech.com/#contact"
  },
  "sameAs": [
    "https://www.linkedin.com/company/nvhotech",
    "https://twitter.com/nvhotech",
    "https://www.facebook.com/nvhotech"
  ],
  "areaServed": "Worldwide",
  "serviceType": [
    "Web Development",
    "Mobile App Development",
    "AI Automation",
    "Custom Software Development"
  ]
};

const LANDING_CHATBOT_SCRIPT_ID = 'nvho-landing-chatbot';
const LANDING_CHATBOT_SRC = 'https://apis.chatbot.nvhotech.in/chatbot.js';
const LANDING_CHATBOT_USER_ID = '69e4a092120e9155a83b92ab';
const LANDING_CHATBOT_BOT_ID = 'default';

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
        title="Software, App & Web Development Company in India"
        description="NVHO Tech provides web development, mobile apps, AI automation, and custom software solutions globally. Transform your business with cutting-edge technology."
        canonical="https://nvhotech.com"
        keywords="software development company India, web development, mobile app development, AI automation, custom software solutions, CRM development, business software"
        schema={organizationSchema}
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

