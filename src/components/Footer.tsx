import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const serviceLinks = [
  { label: 'Website Development', href: '/web-development' },
  { label: 'Mobile App Development', href: '/mobile-app-development' },
  { label: 'AI Automation', href: '/ai-automation' },
  { label: 'CRM Development', href: '/software-development' },
  { label: 'Digital Marketing', href: '/digital-marketing' },
  { label: 'Logo Design', href: '/logo-design' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms of Service', href: '/legal/terms-of-service' },
  { label: 'Refund Policy', href: '/legal/refund-policy' },
  { label: 'Cookie Policy', href: '/legal/cookie-policy' },
  { label: 'GDPR', href: '/legal/gdpr' },
];

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Portfolio', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Book Appointment', href: '/book-appointment' },
  { label: 'Contact', href: '/#contact' },
];

export const Footer = () => {
  const navigate = useNavigate();

  const handleNav = (href: string) => {
    if (href.startsWith('/') && !href.startsWith('/#')) {
      navigate(href);
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top CTA band */}
      <div
        className="relative overflow-hidden py-14 px-6"
        style={{ background: 'linear-gradient(135deg, hsl(217 91% 48%) 0%, hsl(267 83% 50%) 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-blue-100 text-base">
              Book a free consultation — no commitment, just ideas.
            </p>
          </div>
          <button
            onClick={() => navigate('/book-appointment')}
            className="flex items-center gap-2 bg-foreground text-background font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:bg-foreground/90 transition-all duration-200 flex-shrink-0"
          >
            Book Free Call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img
                src="/images/logoNT.png"
                alt="NVHO Tech Logo"
                className="h-11 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              NVHO Tech is an India-based IT company delivering world-class web development,
              mobile apps, AI automation, and custom software solutions to businesses globally.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a
                href="https://wa.me/918290918154"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                +91 82909 18154
              </a>
              <a
                href="mailto:info@nvhotech.com"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                info@nvhotech.com
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                India (Serving Worldwide)
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 NVHO Tech. All rights reserved. Crafted with care in India.</p>
          <p className="text-slate-600">
            Web Development · Mobile Apps · AI Automation · CRM Systems
          </p>
        </div>
      </div>
    </footer>
  );
};
