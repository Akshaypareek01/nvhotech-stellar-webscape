import { ExternalLink, Globe, Smartphone, Settings, ChevronLeft, ChevronRight, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { MutableRefObject } from 'react';

const projects = {
  websites: [
    {
      title: 'Fun Formulae',
      image: '/images/fun.jpeg',
      url: 'https://funformulae.com/',
      description: 'Educational platform for mathematical formulas and learning'
    },
    {
      title: 'Samsara Wellness',
      image: '/images/samsaraweb.png',
      url: 'https://samsarawellness.in/',
      description: 'Wellness and yoga center website'
    },
    {
      title: 'StepsStamp',
      image: '/images/stepstampweb.png',
      url: 'https://www.stepsstamp.com/',
      description: 'Blockchain-powered fitness app that rewards users with SSBT tokens for movement and staking'
    },
    {
      title: 'Local Adventures',
      image: '/images/localad.png',
      url: 'https://localadventures.in/',
      description: 'Local tourism and adventure experiences platform'
    },
    {
      title: 'Daevish',
      image: '/images/web-garphic.jpeg',
      url: 'https://daevish.com/',
      description: 'Creative design and branding solutions'
    },
    {
      title: 'Solitaire Jewel',
      image: '/images/soliter.jpeg',
      url: 'https://solitairejewel.com/',
      description: 'Premium jewelry and diamond collection'
    },
    {
      title: 'Grocery Web (Mecum)',
      image: '/images/mecum.png',
      url: 'https://mecum.in/',
      description: 'Online grocery shopping and delivery platform'
    }
  ],
  applications: [
    {
      title: 'Samsara Wellness',
      image: '/images/samsatawellnessapp.webp',
      url: 'https://play.google.com/store/apps/details?id=com.samsarawellnessyogav3.app&pcampaignid=web_share',
      description: 'Live yoga classes with 15+ body trackers, diet & doctor consultancy'
    },
    {
      title: 'Scrap on Wheels',
      image: '/images/sow.webp',
      url: 'https://play.google.com/store/apps/details?id=com.scraponwheelscollectorsv1.app&hl=en-US',
      description: 'Mobile app for scrap collection and recycling services'
    },
    {
      title: 'StepsStamp App',
      image: '/images/stepstampapp.webp',
      url: 'https://play.google.com/store/apps/details?id=com.stepstamp&pcampaignid=web_share',
      description: 'Transform physical activity into digital assets with blockchain-powered step tracking'
    },
    {
      title: 'NDFC',
      image: '/images/ndfc.webp',
      url: 'https://play.google.com/store/apps/details?id=com.ndcp.app&hl=en-US',
      description: 'App for furniture shopping with variety for house, office & more'
    },
    {
      title: 'Grocery App',
      image: '/grocery.webp',
      url: 'https://play.google.com/store/apps/details?id=com.mecum.grocer&pcampaignid=web_share',
      description: 'Online grocery shopping and delivery platform'
    }
  ],
  cms: [
    {
      title: 'Minimals Dashboard',
      image: '/images/minimals.webp',
      url: 'https://minimals.cc/auth/amplify/sign-in?returnTo=%2Fdashboard',
      description: 'Modern admin dashboard with clean design'
    },
    {
      title: 'Uko React',
      image: '/images/uko.webp',
      url: 'https://uko-react.vercel.app/login',
      description: 'React-based dashboard with advanced features'
    },
    {
      title: 'Modernize Next.js',
      image: '/images/modernize.jpg',
      url: 'https://modernize-nextjs-dark.vercel.app/dashboards/ecommerce',
      description: 'Next.js ecommerce dashboard solution'
    },
    {
      title: 'Mantis Dashboard',
      image: '/images/mantis.webp',
      url: 'https://mantisdashboard.io/login',
      description: 'Professional admin panel with modern UI'
    },
    {
      title: 'Berry Dashboard',
      image: '/images/berry.webp',
      url: 'https://berrydashboard.io/login',
      description: 'Elegant dashboard with comprehensive features'
    }
  ],
  tools: [
    {
      title: 'BG Remover',
      image: '/images/bgremover.png',
      url: 'https://removebg.nvhotech.in/',
      description: 'Remove backgrounds from images instantly with AI-powered precision'
    },
    {
      title: 'Image Editor',
      image: '/images/imageEdiotr.png',
      url: 'https://removebg.nvhotech.in/imageeditor/index.html',
      description: 'Professional image editing tools for all your creative needs'
    },
    {
      title: 'Image Optimizer',
      image: '/images/imageoptimizer.png',
      url: 'https://removebg.nvhotech.in/imageoptimizer/index.html',
      description: 'Compress and optimize images without losing quality'
    }
  ]
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <div
    className="group glass rounded-3xl overflow-hidden hover-lift hover:neon-glow transition-all duration-500 w-full max-w-sm mx-auto h-[400px] flex flex-col"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="relative overflow-hidden h-48 flex-shrink-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-6 h-6 text-white" />
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
      </div>
      <Button
        variant="outline"
        className="w-full glass border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 group-hover:neon-glow"
        onClick={() => window.open(project.url, '_blank')}
      >
        View Project
        <ExternalLink className="ml-2 w-4 h-4" />
      </Button>
    </div>
  </div>
);

const ProjectCarousel = ({ projects: projectList, title, icon }: { projects: any[], title: string, icon: any }) => {
  const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: true });

  return (
    <div className="mb-20">
      <div className="flex items-center justify-center mb-12">
        {icon}
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>

      <div className="relative">
        <Carousel
          className="w-full"
          plugins={[autoplayPlugin]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projectList.map((project, index) => (
              <CarouselItem key={project.title} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <ProjectCard project={project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="glass border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:neon-glow -left-4 md:-left-12 hidden sm:flex" />
          <CarouselNext className="glass border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:neon-glow -right-4 md:-right-12 hidden sm:flex" />
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
      // Immediate update when section mounts
      locoRef.current.update();

      // Delayed updates to handle image loading shifts
      const timers = [
        setTimeout(() => locoRef.current?.update(), 500),
        setTimeout(() => locoRef.current?.update(), 1500),
        setTimeout(() => locoRef.current?.update(), 3000)
      ];

      return () => timers.forEach(clearTimeout);
    }
  }, [locoRef]);

  return (
    <section className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-neon-purple rounded-full opacity-10 blur-2xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our latest projects and see how we've helped businesses transform their digital presence
            with cutting-edge technology solutions and innovative designs.
          </p>
        </div>

        {/* Project Carousels with Auto-scroll */}
        <ProjectCarousel
          projects={projects.websites}
          title="Websites"
          icon={<Globe className="w-8 h-8 text-primary mr-3" />}
        />

        <ProjectCarousel
          projects={projects.applications}
          title="Mobile Applications"
          icon={<Smartphone className="w-8 h-8 text-accent mr-3" />}
        />

        <ProjectCarousel
          projects={projects.cms}
          title="CMS & Dashboards"
          icon={<Settings className="w-8 h-8 text-neon-purple mr-3" />}
        />

        <ProjectCarousel
          projects={projects.tools}
          title="Tools"
          icon={<Wrench className="w-8 h-8 text-primary mr-3" />}
        />

        {/* Call to Action */}
        <div className="text-center glass rounded-3xl p-12 neon-glow">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="gradient-text">Next Project</span>?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with our proven expertise and innovative solutions.
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105 text-lg px-10 py-4"
            onClick={() => scrollToSection('#contact')}
          >
            Start Your Project
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};