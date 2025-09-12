import { ArrowRight, Globe, Smartphone, Cloud, Brain, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const services = [
  {
    title: 'Web Development',
    icon: Globe,
    description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'Full-stack Development', 'E-commerce Solutions', 'Progressive Web Apps'],
    color: 'text-primary'
  },
  {
    title: 'Mobile Apps',
    icon: Smartphone,
    description: 'Native and cross-platform mobile applications that deliver exceptional performance across all devices.',
    features: ['iOS & Android', 'React Native', 'Flutter Development', 'App Store Optimization'],
    color: 'text-accent'
  },
  {
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Scalable cloud infrastructure and DevOps solutions to power your business growth and efficiency.',
    features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Cloud Migration'],
    color: 'text-neon-purple'
  },
  {
    title: 'AI & ML',
    icon: Brain,
    description: 'Intelligent solutions powered by artificial intelligence and machine learning technologies.',
    features: ['Machine Learning Models', 'Data Analytics', 'Predictive Systems', 'AI Integration'],
    color: 'text-primary'
  }
];

const portfolioProjects = {
  websites: [
    {
      title: 'Fun Formulae',
      image: 'https://nvhotech.in/images/fun.jpeg',
      url: 'https://funformulae.com/',
      description: 'Educational platform for mathematical formulas and learning',
      category: 'Education'
    },
    {
      title: 'Samsara Innovations',
      image: 'https://nvhotech.in/images/samsara.jpg',
      url: 'https://samsarainnovations.com/',
      description: 'Innovation and technology solutions company website',
      category: 'Business'
    },
    {
      title: 'Local Adventures',
      image: 'https://nvhotech.in/images/localad.png',
      url: 'https://localadventures.in/',
      description: 'Local tourism and adventure experiences platform',
      category: 'Travel'
    },
    {
      title: 'Daevish',
      image: 'https://nvhotech.in/images/web-garphic.jpeg',
      url: 'https://daevish.com/',
      description: 'Creative design and branding solutions',
      category: 'Design'
    },
    {
      title: 'Solitaire Jewel',
      image: 'https://nvhotech.in/images/soliter.jpeg',
      url: 'https://solitairejewel.com/',
      description: 'Premium jewelry and diamond collection',
      category: 'E-commerce'
    }
  ],
  applications: [
    {
      title: 'Scrap on Wheels',
      image: 'https://nvhotech.in/images/sow.webp',
      url: 'https://play.google.com/store/apps/details?id=com.scraponwheelscollectorsv1.app&hl=en-US',
      description: 'Mobile app for scrap collection and recycling services',
      category: 'Utility'
    },
    {
      title: 'NDFC',
      image: 'https://nvhotech.in/images/ndfc.webp',
      url: 'https://play.google.com/store/apps/details?id=com.ndcp.app&hl=en-US',
      description: 'Financial services and digital banking solution',
      category: 'Fintech'
    },
    {
      title: 'Master of Jobs',
      image: 'https://nvhotech.in/images/moj.webp',
      url: 'https://play.google.com/store/apps/details?id=com.masterofjobs_moj&hl=en-US',
      description: 'Job search and career development platform',
      category: 'Employment'
    }
  ],
  dashboards: [
    {
      title: 'Minimals Dashboard',
      image: 'https://nvhotech.in/images/minimals.webp',
      url: 'https://minimals.cc/auth/amplify/sign-in?returnTo=%2Fdashboard',
      description: 'Modern admin dashboard with clean design',
      category: 'Admin'
    },
    {
      title: 'Uko React',
      image: 'https://nvhotech.in/images/uko.webp',
      url: 'https://uko-react.vercel.app/login',
      description: 'React-based dashboard with advanced features',
      category: 'Analytics'
    },
    {
      title: 'Modernize Next.js',
      image: 'https://nvhotech.in/images/modernize.jpg',
      url: 'https://modernize-nextjs-dark.vercel.app/dashboards/ecommerce',
      description: 'Next.js ecommerce dashboard solution',
      category: 'E-commerce'
    },
    {
      title: 'Mantis Dashboard',
      image: 'https://nvhotech.in/images/mantis.webp',
      url: 'https://mantisdashboard.io/login',
      description: 'Professional admin panel with modern UI',
      category: 'Management'
    },
    {
      title: 'Berry Dashboard',
      image: 'https://nvhotech.in/images/berry.webp',
      url: 'https://berrydashboard.io/login',
      description: 'Elegant dashboard with comprehensive features',
      category: 'Analytics'
    }
  ]
};

const ProjectCard = ({ project }: { project: any }) => (
  <Card className="group glass overflow-hidden hover-lift hover:neon-glow transition-all duration-500">
    <div className="relative overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-5 h-5 text-white" />
      </div>
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium text-primary border border-primary/30">
          {project.category}
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
        {project.description}
      </p>
      <Button 
        variant="outline" 
        size="sm"
        className="w-full glass border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
        onClick={() => window.open(project.url, '_blank')}
      >
        View Project
        <ExternalLink className="ml-2 w-4 h-4" />
      </Button>
    </div>
  </Card>
);

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon-purple rounded-full opacity-15 blur-2xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={service.title} className="glass p-8 hover-lift hover:neon-glow transition-all duration-500">
                <div className="flex items-center mb-6">
                  <service.icon className={`w-12 h-12 ${service.color} mr-4`} />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-primary hover:shadow-neon transition-all duration-300">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of successful projects across different industries
            </p>
          </div>

          {/* Websites */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Globe className="w-6 h-6 text-primary mr-3" />
              Websites
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.websites.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Mobile Applications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Smartphone className="w-6 h-6 text-accent mr-3" />
              Mobile Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.applications.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Dashboards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Brain className="w-6 h-6 text-neon-purple mr-3" />
              CMS & Dashboards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.dashboards.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center glass rounded-3xl p-12 neon-glow">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Next Project</span>?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your vision to life with our proven expertise.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/#contact'}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;