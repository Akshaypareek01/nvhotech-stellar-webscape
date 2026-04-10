import { useState, useCallback, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { countryCodes, timeSlots } from './appointmentConstants';

export type AppointmentBookingFormProps = {
  /** When the page already has a hero title, omit the duplicate heading inside the card. */
  hideFormTitle?: boolean;
};

/**
 * Appointment booking UI and EmailJS submit flow (shared by the landing contact section and `/book-appointment`).
 */
export function AppointmentBookingForm({ hideFormTitle = false }: AppointmentBookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    date: undefined as Date | undefined,
    timeSlot: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSelectChange = useCallback((name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleDateChange = useCallback((date: Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formattedDate = formData.date ? format(formData.date, 'PPP') : 'Not selected';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        date: formattedDate,
        time_slot: formData.timeSlot,
        message: formData.message,
      };

      const SERVICE_ID = 'service_u63q2vx';
      const TEMPLATE_ID_ADMIN = 'template_6w9fe0a';
      const TEMPLATE_ID_USER = 'template_vbsiohq';
      const PUBLIC_KEY = '7Pf4DRId8nn1ZpzaW';

      await Promise.all([
        emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, templateParams, PUBLIC_KEY)
      ]);

      setIsSuccess(true);
      toast({
        title: "Appointment Booked Successfully!",
        description: "We've sent a confirmation email to your inbox.",
      });

      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        date: undefined,
        timeSlot: '',
        message: ''
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error sending your request. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, toast]);

  const calendarProps = useMemo(() => ({
    onChange: handleDateChange,
    value: formData.date,
    minDate: new Date(),
    maxDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    className: "react-calendar-custom flex-1",
    showNavigation: false,
    showNeighboringMonth: false,
    tileDisabled: ({ date, view }: { date: Date; view: string }) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const sevenDaysFromNow = new Date(today);
      sevenDaysFromNow.setDate(today.getDate() + 7);

      const currentDate = new Date(date);
      currentDate.setHours(0, 0, 0, 0);

      return currentDate < today || currentDate > sevenDaysFromNow;
    },
    tileClassName: ({ date, view }: { date: Date; view: string }) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const currentDate = new Date(date);
      currentDate.setHours(0, 0, 0, 0);

      const isToday = currentDate.getTime() === today.getTime();
      const isSelected = formData.date && currentDate.getTime() === formData.date.getTime();
      const isDisabled = currentDate < today || currentDate > new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

      return cn(
        "react-calendar__tile",
        isToday && "react-calendar__tile--now",
        isSelected && "react-calendar__tile--active",
        isDisabled && "react-calendar__tile--disabled"
      );
    },
    formatShortWeekday: (_locale: string, date: Date) => {
      const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
      return weekdays[date.getDay()];
    }
  }), [formData.date, handleDateChange]);

  return (
    <div className="glass w-full min-w-0 max-w-full rounded-2xl p-4 sm:rounded-3xl sm:p-6 md:p-8 hover-lift transition-all duration-300">
      {isSuccess ? (
        <div className="text-center py-8 sm:py-12 px-1">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 neon-glow">
            <CalendarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">
            Appointment Booked Successfully!
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            See you at the meeting. We&apos;ll send you a confirmation email shortly.
          </p>
        </div>
      ) : (
        <>
          {!hideFormTitle && (
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 gradient-text text-center px-1 leading-tight">
              Book an Appointment
            </h3>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 min-w-0">
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor="name" className="block text-sm font-medium mb-2 sm:mb-3">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="glass border-primary/30 focus:border-primary focus:ring-primary/20 h-12 min-h-[44px] text-base sm:text-sm"
                  placeholder="John Doe"
                  autoComplete="name"
                />
              </div>

              <div className="min-w-0">
                <label htmlFor="email" className="block text-sm font-medium mb-2 sm:mb-3">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="glass border-primary/30 focus:border-primary focus:ring-primary/20 h-12 min-h-[44px] text-base sm:text-sm"
                  placeholder="john@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="min-w-0">
              <label className="block text-sm font-medium mb-2 sm:mb-3">
                Phone Number
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <Select value={formData.countryCode} onValueChange={(value) => handleSelectChange('countryCode', value)}>
                  <SelectTrigger className="w-full min-h-[44px] h-12 shrink-0 glass border-primary/30 focus:border-primary sm:w-40 sm:min-w-[10rem] touch-manipulation">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass backdrop-blur-xl border-primary/30 max-h-[min(70vh,20rem)] max-w-[calc(100vw-2rem)]">
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <span className="flex items-center gap-2">
                          <span>{country.flag}</span>
                          <span>{country.code}</span>
                          <span className="text-xs text-muted-foreground">{country.country}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="min-h-[44px] h-12 flex-1 glass border-primary/30 focus:border-primary focus:ring-primary/20 text-base sm:text-sm"
                  placeholder="1234567890"
                  inputMode="tel"
                  autoComplete="tel-national"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 min-w-0">
              <div className="flex min-w-0 flex-col">
                <label className="block text-sm font-medium mb-2 sm:mb-3">
                  Select Date
                </label>
                <div className="glass rounded-xl border border-primary/30 p-3 sm:p-4 overflow-hidden flex min-w-0 flex-1 flex-col">
                  <div className="mb-3 text-center sm:mb-4">
                    <h4 className="text-base font-semibold text-foreground sm:text-lg">
                      {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase()}
                    </h4>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col overflow-x-auto [-webkit-overflow-scrolling:touch]">
                    <Calendar {...calendarProps} />
                  </div>
                  <div className="mt-3 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 p-2.5 text-center sm:p-2">
                    <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-medium text-primary sm:text-xs">
                      <CalendarIcon className="h-3 w-3 shrink-0" aria-hidden />
                      <span>Next 7 days only</span>
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs leading-snug">
                      Older or later dates can&apos;t be selected
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex min-w-0 flex-col">
                <label className="block text-sm font-medium mb-2 sm:mb-3">
                  Select Time Slot
                </label>
                <div className="glass flex min-h-0 flex-1 flex-col rounded-xl border border-primary/30 p-3 sm:p-4">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => handleSelectChange('timeSlot', slot)}
                        aria-pressed={formData.timeSlot === slot}
                        aria-label={`Time ${slot}`}
                        className={cn(
                          "min-h-[44px] rounded-lg border px-2 py-2.5 text-xs font-medium transition-all duration-300 touch-manipulation sm:min-h-[48px] sm:p-3 sm:text-sm",
                          formData.timeSlot === slot
                            ? "bg-primary text-primary-foreground border-primary shadow-neon"
                            : "glass border-primary/30 active:border-primary active:bg-primary/15 sm:hover:border-primary sm:hover:bg-primary/10"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 flex flex-col">
              <label htmlFor="message" className="block text-sm font-medium mb-2 sm:mb-3">
                Reason for Connecting
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="glass border-primary/30 focus:border-primary focus:ring-primary/20 min-h-[120px] text-base sm:text-sm sm:min-h-[100px]"
                placeholder="Briefly describe what you'd like to discuss..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.date || !formData.timeSlot}
              className="h-14 min-h-[48px] w-full touch-manipulation bg-gradient-primary text-base sm:text-lg transition-all duration-300 hover:shadow-neon active:scale-[0.99] sm:hover:scale-[1.02]"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Booking...
                </>
              ) : (
                <>
                  Book Appointment
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
