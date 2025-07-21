import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass backdrop-blur-xl py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="w-8 h-8 text-primary animate-glow-pulse" />
              <div className="absolute inset-0 w-8 h-8 text-accent opacity-50 animate-pulse">
                <Zap className="w-8 h-8" />
              </div>
            </div>
            <span className="text-2xl font-bold gradient-text">NVHO TECH</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105 neon-glow"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass rounded-2xl p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300 neon-glow"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};