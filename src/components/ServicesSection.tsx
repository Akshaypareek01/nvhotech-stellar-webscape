import { Code, Smartphone, Cloud, Shield, Database, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and cutting-edge technologies.',
    features: ['React & Next.js', 'Full-Stack Solutions', 'Progressive Web Apps', 'E-commerce Platforms']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'Mobile UI/UX']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    features: ['AWS & Azure', 'DevOps & CI/CD', 'Microservices', 'Container Orchestration']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment']
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and AI.',
    features: ['Machine Learning', 'Big Data Processing', 'Predictive Analytics', 'Data Visualization']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that engage users and drive conversions.',
    features: ['User Research', 'Prototyping', 'Design Systems', 'Brand Identity']
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-56 h-56 bg-neon-cyan rounded-full opacity-10 blur-2xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end technology solutions 
            that drive innovation and accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group glass rounded-3xl p-8 hover-lift hover:purple-glow transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="relative mb-6">
                  <service.icon className="w-14 h-14 text-primary group-hover:text-accent transition-colors duration-300 float-animation" />
                  <div className="absolute inset-0 w-14 h-14 text-primary opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300">
                    <service.icon className="w-14 h-14" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:bg-accent transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full glass border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 group-hover:neon-glow"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center glass rounded-3xl p-12 neon-glow">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="gradient-text">Digital Journey</span>?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your ideas into reality with our cutting-edge technology solutions.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105 text-lg px-10 py-4"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};