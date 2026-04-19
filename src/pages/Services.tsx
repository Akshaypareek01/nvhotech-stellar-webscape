import { ArrowRight, Globe, Smartphone, Cloud, Brain, ExternalLink, ArrowLeft, Code, Palette, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';

const services = [
  {
    title: 'Website Development',
    icon: Code,
    description: 'Your online presence is crucial. Our team of experts will create a stunning and user-friendly website that perfectly represents your brand, engages your audience, and drives results.',
    features: ['Custom Design', 'Responsive Layout', 'SEO Optimized', 'Fast Loading'],
    color: 'text-primary'
  },
  {
    title: 'App Development',
    icon: Smartphone,
    description: 'Elevate your business with our app development expertise. Our packages ensure you have a custom app that\'s user-friendly, efficient, and helps your startup thrive in the digital age.',
    features: ['iOS & Android', 'Custom Features', 'App Store Publishing', 'Maintenance Support'],
    color: 'text-accent'
  },
  {
    title: 'Marketing',
    icon: Palette,
    description: 'We\'re here to supercharge your startup! Our packages provide expert marketing to make your business stand out, attract more customers, and boost your success.',
    features: ['Digital Marketing', 'Social Media', 'Content Strategy', 'Analytics'],
    color: 'text-neon-purple'
  },
  {
    title: 'Logo Design',
    icon: Database,
    description: 'A memorable logo is the cornerstone of your brand identity. Let our talented designers craft a unique logo that reflects your company\'s values and vision.',
    features: ['Custom Design', 'Multiple Concepts', 'Vector Files', 'Brand Guidelines'],
    color: 'text-primary'
  },
  {
    title: 'CRM Development',
    icon: Database,
    description: 'Streamline your business operations with our custom CRM solutions. We build powerful customer relationship management systems tailored to your specific business needs and workflows.',
    features: ['Custom Workflows', 'Data Management', 'Analytics Dashboard', 'Integration Support'],
    color: 'text-accent'
  },
  {
    title: 'AI Agent & Tool Development',
    icon: Code,
    description: 'Harness the power of artificial intelligence with our custom AI agents and tools. We develop intelligent solutions that automate processes and enhance your business capabilities.',
    features: ['Custom AI Models', 'Process Automation', 'Data Analysis', 'Smart Integration'],
    color: 'text-neon-purple'
  }
];

const portfolioProjects = {
  websites: [
    {
      title: 'Fun Formulae',
      image: '/images/fun.jpeg',
      url: 'https://funformulae.com/',
      description: 'Educational platform for mathematical formulas and learning',
      category: 'Education'
    },
    {
      title: 'Samsara Wellness',
      image: '/images/samsaraweb.png',
      url: 'https://samsarawellness.in/',
      description: 'Wellness and yoga center website',
      category: 'Health'
    },
    {
      title: 'StepsStamp',
      image: '/images/stepstampweb.png',
      url: 'https://www.stepsstamp.com/',
      description: 'Blockchain-powered fitness app that rewards users with SSBT tokens for movement and staking',
      category: 'Blockchain'
    },
    {
      title: 'Local Adventures',
      image: '/images/localad.png',
      url: 'https://localadventures.in/',
      description: 'Local tourism and adventure experiences platform',
      category: 'Travel'
    },
    {
      title: 'Daevish',
      image: '/images/web-garphic.jpeg',
      url: 'https://daevish.com/',
      description: 'Creative design and branding solutions',
      category: 'Design'
    },
    {
      title: 'Solitaire Jewel',
      image: '/images/soliter.jpeg',
      url: 'https://solitairejewel.com/',
      description: 'Premium jewelry and diamond collection',
      category: 'E-commerce'
    }
  ],
  applications: [
    {
      title: 'Samsara Wellness',
      image: '/images/samsatawellnessapp.webp',
      url: 'https://play.google.com/store/apps/details?id=com.samsarawellnessyogav3.app&pcampaignid=web_share',
      description: 'Live yoga classes with 15+ body trackers, diet & doctor consultancy',
      category: 'Health'
    },
    {
      title: 'Scrap on Wheels',
      image: '/images/sow.webp',
      url: 'https://play.google.com/store/apps/details?id=com.scraponwheelscollectorsv1.app&hl=en-US',
      description: 'Mobile app for scrap collection and recycling services',
      category: 'Utility'
    },
    {
      title: 'StepsStamp App',
      image: '/images/stepstampapp.webp',
      url: 'https://play.google.com/store/apps/details?id=com.stepstamp&pcampaignid=web_share',
      description: 'Transform physical activity into digital assets with blockchain-powered step tracking',
      category: 'Blockchain'
    },
    {
      title: 'NDFC',
      image: '/images/ndfc.webp',
      url: 'https://play.google.com/store/apps/details?id=com.ndcp.app&hl=en-US',
      description: 'App for furniture shopping with variety for house, office & more',
      category: 'E-commerce'
    },
    {
      title: 'Master of Jobs',
      image: '/images/moj.webp',
      url: 'https://play.google.com/store/apps/details?id=com.masterofjobs_moj&hl=en-US',
      description: 'Job search and career development platform',
      category: 'Employment'
    }
  ],
  dashboards: [
    {
      title: 'Minimals Dashboard',
      image: '/images/minimals.webp',
      url: 'https://minimals.cc/auth/amplify/sign-in?returnTo=%2Fdashboard',
      description: 'Modern admin dashboard with clean design',
      category: 'Admin'
    },
    {
      title: 'Uko React',
      image: '/images/uko.webp',
      url: 'https://uko-react.vercel.app/login',
      description: 'React-based dashboard with advanced features',
      category: 'Analytics'
    },
    {
      title: 'Modernize Next.js',
      image: '/images/modernize.jpg',
      url: 'https://modernize-nextjs-dark.vercel.app/dashboards/ecommerce',
      description: 'Next.js ecommerce dashboard solution',
      category: 'E-commerce'
    },
    {
      title: 'Mantis Dashboard',
      image: '/images/mantis.webp',
      url: 'https://mantisdashboard.io/login',
      description: 'Professional admin panel with modern UI',
      category: 'Management'
    },
    {
      title: 'Berry Dashboard',
      image: '/images/berry.webp',
      url: 'https://berrydashboard.io/login',
      description: 'Elegant dashboard with comprehensive features',
      category: 'Analytics'
    }
  ]
};

const ProjectCard = ({ project }: { project: any }) => (
  <div className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full">
    <div className="relative overflow-hidden h-48 bg-muted">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-3 left-3">
        <span className="px-2.5 py-1 bg-card/95 rounded-full text-xs font-semibold text-primary">
          {project.category}
        </span>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-4 h-4 text-white" />
      </div>
    </div>

    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
        {project.description}
      </p>
      <Button
        variant="outline"
        size="sm"
        className="w-full text-xs border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all mt-auto"
        onClick={() => window.open(project.url, '_blank')}
      >
        View Project
        <ExternalLink className="ml-1.5 w-3 h-3" />
      </Button>
    </div>
  </div>
);

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Services - Web, Mobile, AI & Custom Software"
        description="Explore NVHO Tech's software services: custom web development, mobile apps, AI automation, CRM, logo design & digital marketing for startups and enterprises."
        canonical="https://nvhotech.com/services"
        keywords="software services India, web development, mobile app development, AI automation, CRM development, logo design, digital marketing, NVHO Tech"
      />
      <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-secondary/40">
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="absolute top-8 left-4 sm:left-6 z-20 text-muted-foreground hover:text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="absolute right-4 top-8 z-[60] flex items-center sm:right-6">
          <ThemeToggle />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 badge-blue mb-5">
              <span>Full-Service IT Company</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-5">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <div key={service.title} className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-7 group">
                <service.icon className="w-10 h-10 text-blue-500 mb-5" />
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ArrowRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 relative bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 badge-blue mb-5">
              <span>Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5">
              Work We're <span className="gradient-text">Proud Of</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of successful projects across different industries
            </p>
          </div>

          {/* Websites */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Websites</h3>
              <div className="h-px flex-1 bg-border ml-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.websites.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Mobile Applications */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Mobile Applications</h3>
              <div className="h-px flex-1 bg-border ml-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.applications.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Dashboards */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-neon-cyan/15 flex items-center justify-center">
                <Brain className="w-5 h-5 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">CMS & Dashboards</h3>
              <div className="h-px flex-1 bg-border ml-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.dashboards.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="rounded-3xl p-12 text-center text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, hsl(217 91% 52%) 0%, hsl(267 83% 57%) 100%)' }}
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with our proven expertise.
              </p>
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-bold px-10 rounded-xl shadow-lg"
                onClick={() => navigate('/', { state: { scrollTo: '#contact' } })}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;