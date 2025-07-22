import { Code, Smartphone, Cloud, Shield, Database, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Your online presence is crucial. Our team of experts will create a stunning and user-friendly website that perfectly represents your brand, engages your audience, and drives results.',
    price: '₹7,499',
    features: ['Custom Design', 'Responsive Layout', 'SEO Optimized', 'Fast Loading']
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Elevate your business with our app development expertise. Our packages ensure you have a custom app that\'s user-friendly, efficient, and helps your startup thrive in the digital age.',
    price: '₹71,000',
    features: ['iOS & Android', 'Custom Features', 'App Store Publishing', 'Maintenance Support']
  },
  {
    icon: Palette,
    title: 'Marketing',
    description: 'We\'re here to supercharge your startup! Our packages provide expert marketing to make your business stand out, attract more customers, and boost your success.',
    price: '₹1,999',
    features: ['Digital Marketing', 'Social Media', 'Content Strategy', 'Analytics']
  },
  {
    icon: Database,
    title: 'Logo Design',
    description: 'A memorable logo is the cornerstone of your brand identity. Let our talented designers craft a unique logo that reflects your company\'s values and vision.',
    price: '₹2,999',
    features: ['Custom Design', 'Multiple Concepts', 'Vector Files', 'Brand Guidelines']
  },
  {
    icon: Shield,
    title: 'Company Registration',
    description: 'We simplify the process of getting your business officially registered, ensuring compliance with all legal requirements. Our experienced team will guide you through the paperwork hassle-free.',
    price: '₹9,999',
    features: ['Legal Compliance', 'Documentation', 'Expert Guidance', 'Fast Processing']
  },
  {
    icon: Cloud,
    title: 'Funding & Visa',
    description: 'Unlock your entrepreneurial dreams with us. Our packages provide essential funding and visa support to help you launch and grow your business, ensuring a smoother path to success.',
    price: 'Contact Us',
    features: ['Funding Support', 'Visa Assistance', 'Business Planning', 'Legal Support']
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-56 h-56 bg-neon-cyan rounded-full opacity-10 blur-2xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            YOUR BUSINESS <span className="gradient-text">NEEDS THIS!!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your business and drive success 
            in the modern marketplace. From stunning websites to powerful mobile apps.
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
                
                <div className="text-3xl font-bold text-accent mb-4">
                  Prices start from {service.price}
                </div>
                
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
                  GET QUOTE
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