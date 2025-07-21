import { Brain, Rocket, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Innovation',
    description: 'Cutting-edge artificial intelligence solutions that transform businesses and accelerate growth.'
  },
  {
    icon: Rocket,
    title: 'Future Tech',
    description: 'Leading-edge technologies including blockchain, IoT, and quantum computing applications.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance and scalable architectures that deliver exceptional user experiences.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'World-class developers, designers, and engineers dedicated to your success.'
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are pioneers in the digital frontier, crafting tomorrow's technology today. 
            Our mission is to push the boundaries of what's possible through innovation, 
            creativity, and cutting-edge engineering.
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