import { ExternalLink, Globe, Smartphone, LayoutDashboard, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { MutableRefObject } from 'react';

const projects = {
  websites: [
    { title: 'Fun Formulae', image: '/images/fun.jpeg', url: 'https://funformulae.com/', description: 'Educational platform for mathematical formulas and interactive learning' },
    { title: 'Samsara Wellness', image: '/images/samsaraweb.png', url: 'https://samsarawellness.in/', description: 'Premium wellness and yoga center website with booking integration' },
    { title: 'StepsStamp', image: '/images/stepstampweb.png', url: 'https://www.stepsstamp.com/', description: 'Blockchain-powered fitness platform rewarding movement with crypto tokens' },
    { title: 'Local Adventures', image: '/images/localad.png', url: 'https://localadventures.in/', description: 'Local tourism and adventure experiences discovery platform' },
    { title: 'Daevish', image: '/images/web-garphic.jpeg', url: 'https://daevish.com/', description: 'Creative design and branding solutions agency website' },
    { title: 'Solitaire Jewel', image: '/images/soliter.jpeg', url: 'https://solitairejewel.com/', description: 'Premium jewelry and diamond collection e-commerce store' },
    { title: 'Grocery Web (Mecum)', image: '/images/mecum.png', url: 'https://mecum.in/', description: 'Online grocery shopping and delivery platform' },
  ],
  applications: [
    { title: 'Samsara Wellness App', image: '/images/samsatawellnessapp.webp', url: 'https://play.google.com/store/apps/details?id=com.samsarawellnessyogav3.app&pcampaignid=web_share', description: 'Live yoga classes with 15+ body trackers, diet & doctor consultancy' },
    { title: 'Scrap on Wheels', image: '/images/sow.webp', url: 'https://play.google.com/store/apps/details?id=com.scraponwheelscollectorsv1.app&hl=en-US', description: 'On-demand scrap collection and recycling service app' },
    { title: 'StepsStamp App', image: '/images/stepstampapp.webp', url: 'https://play.google.com/store/apps/details?id=com.stepstamp&pcampaignid=web_share', description: 'Transform physical activity into digital assets with blockchain step tracking' },
    { title: 'NDFC Furniture', image: '/images/ndfc.webp', url: 'https://play.google.com/store/apps/details?id=com.ndcp.app&hl=en-US', description: 'Premium furniture shopping app for home, office, and lifestyle' },
    { title: 'Grocery App', image: '/grocery.webp', url: 'https://play.google.com/store/apps/details?id=com.mecum.grocer&pcampaignid=web_share', description: 'Fast online grocery shopping and delivery platform' },
  ],
  cms: [
    { title: 'Minimals Dashboard', image: '/images/minimals.webp', url: 'https://minimals.cc/auth/amplify/sign-in?returnTo=%2Fdashboard', description: 'Modern admin dashboard with clean, minimal design system' },
    { title: 'Uko React Dashboard', image: '/images/uko.webp', url: 'https://uko-react.vercel.app/login', description: 'Feature-rich React dashboard with advanced analytics' },
    { title: 'Modernize Next.js', image: '/images/modernize.jpg', url: 'https://modernize-nextjs-dark.vercel.app/dashboards/ecommerce', description: 'Next.js powered e-commerce dashboard solution' },
    { title: 'Mantis Dashboard', image: '/images/mantis.webp', url: 'https://mantisdashboard.io/login', description: 'Professional admin panel with comprehensive management tools' },
    { title: 'Berry Dashboard', image: '/images/berry.webp', url: 'https://berrydashboard.io/login', description: 'Elegant, feature-complete dashboard with modern UI components' },
  ],
  tools: [
    { title: 'AI Background Remover', image: '/images/bgremover.png', url: 'https://removebg.nvhotech.in/', description: 'Remove backgrounds from images instantly using AI-powered precision' },
    { title: 'Image Editor', image: '/images/imageEdiotr.png', url: 'https://removebg.nvhotech.in/imageeditor/index.html', description: 'Professional in-browser image editing tools for creatives' },
    { title: 'Image Optimizer', image: '/images/imageoptimizer.png', url: 'https://removebg.nvhotech.in/imageoptimizer/index.html', description: 'Compress and optimize images without sacrificing quality' },
  ],
};

const categories = [
  { key: 'websites', label: 'Websites', icon: Globe, color: '#3B82F6' },
  { key: 'applications', label: 'Mobile Apps', icon: Smartphone, color: '#8B5CF6' },
  { key: 'cms', label: 'CMS & Dashboards', icon: LayoutDashboard, color: '#06B6D4' },
  { key: 'tools', label: 'Tools', icon: Wrench, color: '#10B981' },
] as const;

const ProjectCard = ({ project, accentColor }: { project: any; accentColor: string }) => (
  <div className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full w-full min-h-0">
    {/* Image — fixed aspect so body can grow with description */}
    <div className="relative overflow-hidden aspect-[16/10] w-full flex-shrink-0 bg-muted rounded-t-2xl">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="bg-card rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg text-sm font-semibold text-foreground">
          <ExternalLink className="w-4 h-4" style={{ color: accentColor }} />
          View Live
        </div>
      </a>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5 flex flex-col flex-1 min-h-0 rounded-b-2xl">
      <div
        className="w-1 h-5 rounded-full mb-2.5 flex-shrink-0"
        style={{ background: accentColor }}
      />
      <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug break-words">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed break-words">{project.description}</p>
    </div>
  </div>
);

const ProjectCarousel = ({
  projects: projectList,
  title,
  icon: Icon,
  color,
}: {
  projects: any[];
  title: string;
  icon: any;
  color: string;
}) => {
  const autoplayPlugin = Autoplay({ delay: 3500, stopOnInteraction: true });

  return (
    <div className="mb-16">
      {/* Section sub-header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: color + '18' }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <div className="h-px flex-1 bg-border ml-2" />
      </div>

      <div className="relative">
        <Carousel
          className="w-full"
          plugins={[autoplayPlugin]}
          opts={{ align: 'start', loop: true }}
        >
          <CarouselContent className="-ml-3 md:-ml-4 items-stretch">
            {projectList.map((project) => (
              <CarouselItem
                key={project.title}
                className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex"
              >
                <ProjectCard project={project} accentColor={color} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-card border-border text-muted-foreground hover:bg-primary/10 hover:border-primary hover:text-primary -left-4 md:-left-5 shadow-sm" />
          <CarouselNext className="bg-card border-border text-muted-foreground hover:bg-primary/10 hover:border-primary hover:text-primary -right-4 md:-right-5 shadow-sm" />
        </Carousel>
      </div>
    </div>
  );
};

export const ProjectsSection = ({ locoRef }: { locoRef?: MutableRefObject<any> }) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      if (locoRef && locoRef.current) {
        locoRef.current.scrollTo(element, { offset: 0, duration: 800 });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  useEffect(() => {
    if (locoRef?.current) {
      locoRef.current.update();
      const timers = [
        setTimeout(() => locoRef.current?.update(), 500),
        setTimeout(() => locoRef.current?.update(), 1500),
        setTimeout(() => locoRef.current?.update(), 3000),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [locoRef]);

  return (
    <section className="py-24 bg-secondary/40 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 badge-blue mb-5">
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5">
            Work We're{' '}
            <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real products. Real clients. Real impact. Explore the projects we've built across
            web, mobile, AI, and enterprise solutions.
          </p>
        </div>

        {/* Carousels */}
        {categories.map((cat) => (
          <ProjectCarousel
            key={cat.key}
            projects={projects[cat.key]}
            title={cat.label}
            icon={cat.icon}
            color={cat.color}
          />
        ))}

        {/* CTA */}
        <div
          className="rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, hsl(217 91% 52%) 0%, hsl(267 83% 57%) 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              Ready to Build Your Next Project?
            </h3>
            <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Let's turn your idea into a polished, high-performing product that users love.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-bold px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => scrollToSection('#contact')}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
