import { Zap, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

const footerLinks = {
  Company: ['About Us', 'Our Team', 'Careers', 'News & Blog'],
  Services: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Contact Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
};

export const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (section: string, link: string) => {
    if (section === 'Services') {
      navigate('/services');
    } else if (section === 'Legal') {
      switch (link) {
        case 'Privacy Policy':
          navigate('/legal/privacy-policy');
          break;
        case 'Terms of Service':
          navigate('/legal/terms-of-service');
          break;
        case 'Cookie Policy':
          navigate('/legal/cookie-policy');
          break;
        case 'GDPR':
          navigate('/legal/gdpr');
          break;
        default:
          break;
      }
    }
  };

  return (
    <footer className="relative py-20 border-t border-primary/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-48 h-48 bg-gradient-primary rounded-full opacity-5 blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-neon-purple rounded-full opacity-10 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Zap className="w-8 h-8 text-primary animate-glow-pulse" />
                <div className="absolute inset-0 w-8 h-8 text-accent opacity-50 animate-pulse">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              <span className="text-2xl font-bold gradient-text">NVHO TECH</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Leading the future with cutting-edge technology solutions, AI innovations, 
              and digital transformation services that empower businesses worldwide.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:neon-glow transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4 text-lg">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleLinkClick(title, link)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Stay Updated with NVHO TECH
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on technology trends, product releases, and exclusive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass rounded-lg border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-primary rounded-lg hover:shadow-neon transition-all duration-300 hover:scale-105 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/20">
          <p className="text-muted-foreground text-center md:text-left">
            © 2024 NVHO TECH. All rights reserved. Crafted with ❤️ for the future.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};