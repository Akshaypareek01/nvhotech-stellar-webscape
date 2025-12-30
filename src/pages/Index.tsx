import { useRef, lazy, Suspense } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
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
  <div className="w-full h-[400px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NVHO Tech",
  "url": "https://nvhotech.in",
  "logo": "https://nvhotech.in/images/logo.png",
  "description": "NVHO Tech provides web development, mobile apps, AI automation, and custom software solutions globally.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressLocality": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "url": "https://nvhotech.in/#contact"
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

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoRef = useRef<any>(null); // LocomotiveScroll instance
  useSmoothScroll(scrollRef, locoRef);
  return (
    <>
      <SEO
        title="Software, App & Web Development Company in India"
        description="NVHO Tech provides web development, mobile apps, AI automation, and custom software solutions globally. Transform your business with cutting-edge technology."
        canonical="https://nvhotech.in"
        keywords="software development company India, web development, mobile app development, AI automation, custom software solutions, CRM development, business software"
        schema={organizationSchema}
      />
      <div
        ref={scrollRef}
        data-scroll-container
        className="min-h-screen bg-gradient-hero text-foreground font-tech"
      >
        {/* Particle Background */}
        <ParticleBackground />

        {/* Navigation */}
        <Navigation locoRef={locoRef} />

        {/* Main Content */}
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
            <ServicesSection locoRef={locoRef} />
          </section>
          <section id="projects">
            <Suspense fallback={<SectionLoader />}>
              <ProjectsSection locoRef={locoRef} />
            </Suspense>
          </section>
          <section id="contact">
            <Suspense fallback={<SectionLoader />}>
              <ContactSection />
            </Suspense>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;

