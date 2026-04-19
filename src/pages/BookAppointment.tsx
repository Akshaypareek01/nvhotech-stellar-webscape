import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { AppointmentBookingForm } from '@/components/contact/AppointmentBookingForm';

const bookAppointmentSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Book an Appointment — NVHO Tech",
  "description": "Schedule a consultation with NVHO Tech. Pick a date and time and we will confirm by email.",
  "url": "https://nvhotech.com/book-appointment",
  "isPartOf": {
    "@type": "WebSite",
    "name": "NVHO Tech",
    "url": "https://nvhotech.com"
  }
};

/**
 * Minimal booking page: back link + same appointment form as the landing contact section.
 */
const BookAppointment = () => {
  return (
    <>
      <SEO
        title="Book an Appointment — NVHO Tech"
        description="Schedule a consultation with NVHO Tech. Choose a date and time slot; we will email you a confirmation."
        canonical="https://nvhotech.com/book-appointment"
        keywords="book appointment, schedule call, NVHO Tech consultation, software development meeting"
        schema={bookAppointmentSchema}
      />

      <div className="min-h-dvh-screen bg-gradient-hero text-foreground text-sm font-tech relative overflow-x-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[min(100vw,20rem)] h-[min(100vw,20rem)] sm:left-10 sm:translate-x-0 sm:w-80 sm:h-80 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-[min(90vw,16rem)] h-[min(90vw,16rem)] sm:w-64 sm:h-64 sm:bottom-20 sm:right-10 bg-neon-purple rounded-full opacity-10 blur-2xl animate-float-delayed" />
        </div>

        <Link
          to="/"
          className="fixed z-50 inline-flex min-h-10 min-w-10 items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 sm:min-h-11 sm:min-w-11 sm:gap-2 sm:rounded-xl sm:px-4 glass border border-primary/30 text-primary hover:bg-primary/10 active:bg-primary/15 transition-colors text-xs sm:text-sm font-medium touch-manipulation [top:max(0.75rem,env(safe-area-inset-top))] [left:max(0.75rem,env(safe-area-inset-left))]"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden />
          <span className="pr-0.5">Back</span>
        </Link>

        <main className="relative z-10 w-full min-w-0 px-3 pt-[calc(2.75rem+env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-5 sm:pt-[calc(3.25rem+env(safe-area-inset-top))] sm:pb-12 md:px-6 md:pb-16">
          <div className="mx-auto w-full max-w-2xl min-w-0 lg:max-w-3xl">
            <AppointmentBookingForm compact />
          </div>
        </main>
      </div>
    </>
  );
};

export default BookAppointment;
