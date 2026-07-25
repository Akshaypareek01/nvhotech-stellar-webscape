import { useState, useCallback, MutableRefObject } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSectionById } from '@/utils/scrollToSection';
import { BrandLogo } from '@/components/BrandLogo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

const WHATSAPP_URL = `https://wa.me/918290918154?text=${encodeURIComponent(
  "Hello NVHO Tech! I visited your website and I have a software requirement I'd like to discuss."
)}`;


const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const Navigation = ({ locoRef: _locoRef }: { locoRef?: MutableRefObject<any> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((href: string) => {
    if (href.startsWith('/') && !href.startsWith('/#')) {
      navigate(href);
      setIsOpen(false);
      return;
    }
    const targetId = href.replace('/#', '#');
    if (location.pathname === '/' && scrollToSectionById(targetId)) {
      setIsOpen(false);
      return;
    }
    navigate('/', { state: { scrollTo: targetId } });
    setIsOpen(false);
  }, [location.pathname, navigate]);

  return (
    <nav className="fixed top-0 z-50 w-full py-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <div className="relative flex h-10 items-center justify-between sm:h-11">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="group shrink-0 transition-opacity hover:opacity-80"
            aria-label="Go to home"
          >
            <BrandLogo className="text-[18px] transition-transform group-hover:scale-[1.02] lg:text-[19px]" />
          </button>

          {/* Desktop nav — floating pill */}
          <div
            className="absolute left-1/2 hidden -translate-x-1/2 md:block"
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.06] px-1.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
              {navItems
                .filter((item) => item.label !== 'About')
                .map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="rounded-full px-3 py-1.5 text-[13px] font-medium text-foreground/75 transition-colors hover:bg-white/[0.08] hover:text-foreground lg:px-4 lg:text-sm"
                  >
                    {item.label}
                  </button>
                ))}
            </div>
          </div>

          {/* Right actions */}
          <div className="relative z-[60] flex shrink-0 items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="whatsapp-attention hidden items-center gap-2 rounded-full bg-[#25D366] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b] md:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
            <Button
              type="button"
              size="sm"
              onClick={() => scrollToSection('/book-appointment')}
              className="btn-gradient hidden px-5 py-2 text-sm font-semibold rounded-xl shadow-lg md:inline-flex"
            >
              Get Started
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-white/[0.08] hover:text-foreground md:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-lg backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-foreground/75 transition-colors hover:bg-white/[0.08] hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
            <div className="space-y-2 pt-2">
              <Button
                onClick={() => scrollToSection('/book-appointment')}
                className="btn-gradient w-full rounded-xl font-semibold shadow-lg"
              >
                Get Started
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-attention flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
