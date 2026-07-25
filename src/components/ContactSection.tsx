import { AppointmentBookingForm } from '@/components/contact/AppointmentBookingForm';
import type { CSSProperties } from 'react';
import { Mail, MessageCircle, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email Us', value: 'info@nvhotech.com', href: 'mailto:info@nvhotech.com', color: 'hsl(var(--cat-a))' },
  { icon: MessageCircle, label: 'WhatsApp Chat', value: 'Chat Instantly', href: 'https://wa.me/918290918154', color: '#21A05F' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 Hours', href: null, color: 'hsl(var(--cat-b))' },
];

export const ContactSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.14) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 badge-blue mb-5">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5">
            Let's Start a{' '}
            <span className="gradient-text step-underline">Conversation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Book a free consultation and let's
            discuss how we can help you achieve your technology goals.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact info chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {contactInfo.map((info) => (
              <div key={info.label}>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card rounded-xl border border-border shadow-sm p-4 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 block"
                  >
                    <div
                      className="icon-chip w-9 h-9 flex items-center justify-center mx-auto mb-2"
                      style={{ '--chip-tint': info.color } as CSSProperties}
                    >
                      <info.icon className="w-4 h-4" style={{ color: info.color }} />
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground mb-0.5">{info.label}</div>
                    <div className="text-xs font-bold text-foreground">{info.value}</div>
                  </a>
                ) : (
                  <div className="bg-card rounded-xl border border-border shadow-sm p-4 text-center">
                    <div
                      className="icon-chip w-9 h-9 flex items-center justify-center mx-auto mb-2"
                      style={{ '--chip-tint': info.color } as CSSProperties}
                    >
                      <info.icon className="w-4 h-4" style={{ color: info.color }} />
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground mb-0.5">{info.label}</div>
                    <div className="text-xs font-bold text-foreground">{info.value}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Booking form */}
          <div className="bg-card rounded-3xl border border-border shadow-lg p-6 sm:p-10">
            <AppointmentBookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};
