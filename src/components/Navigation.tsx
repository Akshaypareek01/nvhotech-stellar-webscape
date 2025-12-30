import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { MutableRefObject } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

// Accept locoRef as prop
export const Navigation = ({ locoRef }: { locoRef?: MutableRefObject<any> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // Check if it's an internal route (starts with / and not just #)
    if (href.startsWith('/') && !href.startsWith('/#')) {
      navigate(href);
      setIsOpen(false);
      return;
    }

    // Handle hash links
    const targetId = href.replace('/#', '#');
    const element = document.querySelector(targetId) as HTMLElement;

    if (location.pathname === '/' && element) {
      // If we are on the home page, scroll to element
      if (locoRef && locoRef.current) {
        locoRef.current.scrollTo(element, { offset: 0, duration: 800 });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we are on a different page, navigate to home and pass the target hash in state
      navigate('/', { state: { scrollTo: targetId } });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 glass shadow-lg border-b border-white/10 ${scrolled ? 'backdrop-blur-xl py-4' : 'backdrop-blur-xl py-6'
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Navigate to home section"
          >
            <OptimizedImage
              src="/images/logoNT.png"
              alt="NVHO Tech Logo"
              width={107}
              height={64}
              priority={true}
              className="h-16 w-auto drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 30px rgba(193, 100%, 50%, 0.6)) drop-shadow(0 0 50px rgba(270, 100%, 70%, 0.4))' }}
            />
          </button>

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
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}>
          <div className="glass rounded-2xl p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-3 border-b border-white/5 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300 neon-glow mt-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};