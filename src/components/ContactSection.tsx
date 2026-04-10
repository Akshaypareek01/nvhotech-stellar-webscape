import { AppointmentBookingForm } from '@/components/contact/AppointmentBookingForm';

/**
 * Landing-page "Get in Touch" section wrapping the shared appointment booking form.
 */
export const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-x-hidden scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-neon-purple rounded-full opacity-10 blur-2xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 min-w-0">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-1">
            Ready to bring your vision to life? Let&apos;s start a conversation about
            how we can help you achieve your technology goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto w-full min-w-0">
          <AppointmentBookingForm />
        </div>
      </div>
    </section>
  );
};
