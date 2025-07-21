import { Brain, Rocket, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Quality Assurance',
    description: 'We take pride in delivering high-quality work that exceeds your expectations.'
  },
  {
    icon: Rocket,
    title: 'Affordability',
    description: 'Our competitive prices are designed to fit your budget without compromising quality.'
  },
  {
    icon: Zap,
    title: 'Timely Delivery',
    description: 'We understand the importance of deadlines, and we promise to deliver on time.'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Our team is always here to assist you every step of the way.'
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-neon-purple rounded-full opacity-10 blur-2xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">NVHO TECH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our client-centric approach and proven expertise across platforms guarantee tailored solutions that elevate your business. 
            With a track record of success, transparent communication, and a commitment to user-centric design, we ensure a collaborative 
            partnership that builds scalable and efficient digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group glass rounded-3xl p-8 hover-lift hover:neon-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <feature.icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
                <div className="absolute inset-0 w-12 h-12 text-primary opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300">
                  <feature.icon className="w-12 h-12" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[
            { 
              title: 'Custom Solutions', 
              description: 'Every project is unique, and we tailor our services to your specific needs.',
              icon: '🎯'
            },
            { 
              title: 'Client Satisfaction', 
              description: 'Your satisfaction is our top priority, and we strive to build long-lasting relationships.',
              icon: '⭐'
            }
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className="group glass rounded-3xl p-8 hover-lift hover:neon-glow transition-all duration-500 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '99%', label: 'Success Rate' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};