import { useState, useCallback, MutableRefObject } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSectionById } from '@/utils/scrollToSection';
import { BrandLogo } from '@/components/BrandLogo';
import { WHATSAPP_URL, INSTAGRAM_URL } from '@/constants/socialLinks';
import { WhatsAppIcon, InstagramIcon } from '@/components/SocialBrandIcons';

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
          <div className="relative z-[60] flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="whatsapp-attention inline-flex md:hidden items-center justify-center rounded-full bg-[#25D366] p-2 text-white transition-colors hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
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
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow NVHO Tech on Instagram"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-2 text-white transition-opacity hover:opacity-90"
            >
              <InstagramIcon className="h-4 w-4" />
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
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection('/book-appointment')}
                className="btn-gradient w-full rounded-xl font-semibold shadow-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
