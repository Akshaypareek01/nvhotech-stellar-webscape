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
  { label: 'Book', href: '/book-appointment' },
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 glass shadow-lg border-b border-white/10 backdrop-blur-xl ${
        scrolled
          ? 'py-2 sm:py-3 md:py-4'
          : 'py-3 sm:py-4 md:py-5 lg:py-6'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-[100vw]">
        <div className="flex min-h-0 items-center justify-between gap-2 sm:gap-3">
          {/* Logo — scales down on narrow viewports so it doesn’t crowd the menu control */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex shrink-0 items-center hover:opacity-80 transition-opacity max-w-[min(52vw,11rem)] sm:max-w-none"
            aria-label="Navigate to home section"
          >
            <OptimizedImage
              src="/images/logoNT.png"
              alt="NVHO Tech Logo"
              width={107}
              height={64}
              priority={true}
              className="h-9 w-auto max-h-9 sm:h-10 sm:max-h-10 md:h-12 md:max-h-12 lg:h-14 lg:max-h-14 xl:h-16 xl:max-h-16 drop-shadow-2xl object-contain object-left"
              style={{ filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 30px rgba(193, 100%, 50%, 0.6)) drop-shadow(0 0 50px rgba(270, 100%, 70%, 0.4))' }}
            />
          </button>

          {/* Desktop Navigation — tighter gaps on md so seven links + CTA don’t overflow */}
          <div className="hidden md:flex md:items-center md:gap-3 lg:gap-6 xl:gap-8 shrink-0">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm lg:text-base whitespace-nowrap text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('/book-appointment')}
              size="sm"
              className="md:text-sm lg:text-base md:px-3 lg:px-4 bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105 neon-glow shrink-0"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden shrink-0 p-1.5 -mr-1 text-foreground hover:text-primary transition-colors touch-manipulation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 mt-3 sm:mt-4' : 'max-h-0 opacity-0'
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
              onClick={() => scrollToSection('/book-appointment')}
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