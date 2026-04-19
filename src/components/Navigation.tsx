import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MutableRefObject } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = ({ locoRef: _locoRef }: { locoRef?: MutableRefObject<any> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    if (href.startsWith('/') && !href.startsWith('/#')) {
      navigate(href);
      setIsOpen(false);
      return;
    }
    const targetId = href.replace('/#', '#');
    const element = document.querySelector(targetId) as HTMLElement;

    if (location.pathname === '/' && element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: targetId } });
    }
    setIsOpen(false);
  }, [location.pathname, navigate]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-sm border-b border-border py-3'
          : 'bg-background/75 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Go to home"
          >
            <OptimizedImage
              src="/images/logoNT.png"
              alt="NVHO Tech Logo"
              width={107}
              height={48}
              priority={true}
              className="h-9 sm:h-10 md:h-11 w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-1 lg:gap-2 max-w-2xl">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="relative z-[60] flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection('/book-appointment')}
              size="sm"
              className="hidden md:inline-flex btn-gradient px-5 py-2 text-sm font-semibold rounded-lg"
            >
              Get Started
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-card rounded-2xl border border-border shadow-lg p-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection('/book-appointment')}
                className="w-full btn-gradient rounded-xl font-semibold"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
