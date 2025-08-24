import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Calendar, CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'hello@nvhotech.com',
    description: 'Get in touch via email'
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+1 (555) 123-4567',
    description: '24/7 support available'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: 'Silicon Valley, CA',
    description: 'Our headquarters'
  },
  {
    icon: Clock,
    title: 'Work Hours',
    detail: 'Mon - Fri, 9AM - 6PM',
    description: 'Pacific Standard Time'
  }
];

const countryCodes = [
  { code: '+93', country: 'AF', flag: '🇦🇫' },
  { code: '+355', country: 'AL', flag: '🇦🇱' },
  { code: '+213', country: 'DZ', flag: '🇩🇿' },
  { code: '+1684', country: 'AS', flag: '🇦🇸' },
  { code: '+376', country: 'AD', flag: '🇦🇩' },
  { code: '+244', country: 'AO', flag: '🇦🇴' },
  { code: '+1264', country: 'AI', flag: '🇦🇮' },
  { code: '+1268', country: 'AG', flag: '🇦🇬' },
  { code: '+54', country: 'AR', flag: '🇦🇷' },
  { code: '+374', country: 'AM', flag: '🇦🇲' },
  { code: '+297', country: 'AW', flag: '🇦🇼' },
  { code: '+61', country: 'AU', flag: '🇦🇺' },
  { code: '+43', country: 'AT', flag: '🇦🇹' },
  { code: '+994', country: 'AZ', flag: '🇦🇿' },
  { code: '+1242', country: 'BS', flag: '🇧🇸' },
  { code: '+973', country: 'BH', flag: '🇧🇭' },
  { code: '+880', country: 'BD', flag: '🇧🇩' },
  { code: '+1246', country: 'BB', flag: '🇧🇧' },
  { code: '+375', country: 'BY', flag: '🇧🇾' },
  { code: '+32', country: 'BE', flag: '🇧🇪' },
  { code: '+501', country: 'BZ', flag: '🇧🇿' },
  { code: '+229', country: 'BJ', flag: '🇧🇯' },
  { code: '+1441', country: 'BM', flag: '🇧🇲' },
  { code: '+975', country: 'BT', flag: '🇧🇹' },
  { code: '+591', country: 'BO', flag: '🇧🇴' },
  { code: '+387', country: 'BA', flag: '🇧🇦' },
  { code: '+267', country: 'BW', flag: '🇧🇼' },
  { code: '+55', country: 'BR', flag: '🇧🇷' },
  { code: '+246', country: 'IO', flag: '🇮🇴' },
  { code: '+673', country: 'BN', flag: '🇧🇳' },
  { code: '+359', country: 'BG', flag: '🇧🇬' },
  { code: '+226', country: 'BF', flag: '🇧🇫' },
  { code: '+257', country: 'BI', flag: '🇧🇮' },
  { code: '+855', country: 'KH', flag: '🇰🇭' },
  { code: '+237', country: 'CM', flag: '🇨🇲' },
  { code: '+1', country: 'CA', flag: '🇨🇦' },
  { code: '+238', country: 'CV', flag: '🇨🇻' },
  { code: '+1345', country: 'KY', flag: '🇰🇾' },
  { code: '+236', country: 'CF', flag: '🇨🇫' },
  { code: '+235', country: 'TD', flag: '🇹🇩' },
  { code: '+56', country: 'CL', flag: '🇨🇱' },
  { code: '+86', country: 'CN', flag: '🇨🇳' },
  { code: '+57', country: 'CO', flag: '🇨🇴' },
  { code: '+269', country: 'KM', flag: '🇰🇲' },
  { code: '+242', country: 'CG', flag: '🇨🇬' },
  { code: '+243', country: 'CD', flag: '🇨🇩' },
  { code: '+682', country: 'CK', flag: '🇨🇰' },
  { code: '+506', country: 'CR', flag: '🇨🇷' },
  { code: '+225', country: 'CI', flag: '🇨🇮' },
  { code: '+385', country: 'HR', flag: '🇭🇷' },
  { code: '+53', country: 'CU', flag: '🇨🇺' },
  { code: '+357', country: 'CY', flag: '🇨🇾' },
  { code: '+420', country: 'CZ', flag: '🇨🇿' },
  { code: '+45', country: 'DK', flag: '🇩🇰' },
  { code: '+253', country: 'DJ', flag: '🇩🇯' },
  { code: '+1767', country: 'DM', flag: '🇩🇲' },
  { code: '+1809', country: 'DO', flag: '🇩🇴' },
  { code: '+593', country: 'EC', flag: '🇪🇨' },
  { code: '+20', country: 'EG', flag: '🇪🇬' },
  { code: '+503', country: 'SV', flag: '🇸🇻' },
  { code: '+240', country: 'GQ', flag: '🇬🇶' },
  { code: '+291', country: 'ER', flag: '🇪🇷' },
  { code: '+372', country: 'EE', flag: '🇪🇪' },
  { code: '+251', country: 'ET', flag: '🇪🇹' },
  { code: '+500', country: 'FK', flag: '🇫🇰' },
  { code: '+298', country: 'FO', flag: '🇫🇴' },
  { code: '+679', country: 'FJ', flag: '🇫🇯' },
  { code: '+358', country: 'FI', flag: '🇫🇮' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
  { code: '+594', country: 'GF', flag: '🇬🇫' },
  { code: '+689', country: 'PF', flag: '🇵🇫' },
  { code: '+241', country: 'GA', flag: '🇬🇦' },
  { code: '+220', country: 'GM', flag: '🇬🇲' },
  { code: '+995', country: 'GE', flag: '🇬🇪' },
  { code: '+49', country: 'DE', flag: '🇩🇪' },
  { code: '+233', country: 'GH', flag: '🇬🇭' },
  { code: '+350', country: 'GI', flag: '🇬🇮' },
  { code: '+30', country: 'GR', flag: '🇬🇷' },
  { code: '+299', country: 'GL', flag: '🇬🇱' },
  { code: '+1473', country: 'GD', flag: '🇬🇩' },
  { code: '+590', country: 'GP', flag: '🇬🇵' },
  { code: '+1671', country: 'GU', flag: '🇬🇺' },
  { code: '+502', country: 'GT', flag: '🇬🇹' },
  { code: '+224', country: 'GN', flag: '🇬🇳' },
  { code: '+245', country: 'GW', flag: '🇬🇼' },
  { code: '+592', country: 'GY', flag: '🇬🇾' },
  { code: '+509', country: 'HT', flag: '🇭🇹' },
  { code: '+504', country: 'HN', flag: '🇭🇳' },
  { code: '+852', country: 'HK', flag: '🇭🇰' },
  { code: '+36', country: 'HU', flag: '🇭🇺' },
  { code: '+354', country: 'IS', flag: '🇮🇸' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
  { code: '+62', country: 'ID', flag: '🇮🇩' },
  { code: '+98', country: 'IR', flag: '🇮🇷' },
  { code: '+964', country: 'IQ', flag: '🇮🇶' },
  { code: '+353', country: 'IE', flag: '🇮🇪' },
  { code: '+972', country: 'IL', flag: '🇮🇱' },
  { code: '+39', country: 'IT', flag: '🇮🇹' },
  { code: '+1876', country: 'JM', flag: '🇯🇲' },
  { code: '+81', country: 'JP', flag: '🇯🇵' },
  { code: '+962', country: 'JO', flag: '🇯🇴' },
  { code: '+7', country: 'KZ', flag: '🇰🇿' },
  { code: '+254', country: 'KE', flag: '🇰🇪' },
  { code: '+686', country: 'KI', flag: '🇰🇮' },
  { code: '+850', country: 'KP', flag: '🇰🇵' },
  { code: '+82', country: 'KR', flag: '🇰🇷' },
  { code: '+965', country: 'KW', flag: '🇰🇼' },
  { code: '+996', country: 'KG', flag: '🇰🇬' },
  { code: '+856', country: 'LA', flag: '🇱🇦' },
  { code: '+371', country: 'LV', flag: '🇱🇻' },
  { code: '+961', country: 'LB', flag: '🇱🇧' },
  { code: '+266', country: 'LS', flag: '🇱🇸' },
  { code: '+231', country: 'LR', flag: '🇱🇷' },
  { code: '+218', country: 'LY', flag: '🇱🇾' },
  { code: '+423', country: 'LI', flag: '🇱🇮' },
  { code: '+370', country: 'LT', flag: '🇱🇹' },
  { code: '+352', country: 'LU', flag: '🇱🇺' },
  { code: '+853', country: 'MO', flag: '🇲🇴' },
  { code: '+389', country: 'MK', flag: '🇲🇰' },
  { code: '+261', country: 'MG', flag: '🇲🇬' },
  { code: '+265', country: 'MW', flag: '🇲🇼' },
  { code: '+60', country: 'MY', flag: '🇲🇾' },
  { code: '+960', country: 'MV', flag: '🇲🇻' },
  { code: '+223', country: 'ML', flag: '🇲🇱' },
  { code: '+356', country: 'MT', flag: '🇲🇹' },
  { code: '+692', country: 'MH', flag: '🇲🇭' },
  { code: '+596', country: 'MQ', flag: '🇲🇶' },
  { code: '+222', country: 'MR', flag: '🇲🇷' },
  { code: '+230', country: 'MU', flag: '🇲🇺' },
  { code: '+52', country: 'MX', flag: '🇲🇽' },
  { code: '+691', country: 'FM', flag: '🇫🇲' },
  { code: '+373', country: 'MD', flag: '🇲🇩' },
  { code: '+377', country: 'MC', flag: '🇲🇨' },
  { code: '+976', country: 'MN', flag: '🇲🇳' },
  { code: '+382', country: 'ME', flag: '🇲🇪' },
  { code: '+1664', country: 'MS', flag: '🇲🇸' },
  { code: '+212', country: 'MA', flag: '🇲🇦' },
  { code: '+258', country: 'MZ', flag: '🇲🇿' },
  { code: '+95', country: 'MM', flag: '🇲🇲' },
  { code: '+264', country: 'NA', flag: '🇳🇦' },
  { code: '+674', country: 'NR', flag: '🇳🇷' },
  { code: '+977', country: 'NP', flag: '🇳🇵' },
  { code: '+31', country: 'NL', flag: '🇳🇱' },
  { code: '+687', country: 'NC', flag: '🇳🇨' },
  { code: '+64', country: 'NZ', flag: '🇳🇿' },
  { code: '+505', country: 'NI', flag: '🇳🇮' },
  { code: '+227', country: 'NE', flag: '🇳🇪' },
  { code: '+234', country: 'NG', flag: '🇳🇬' },
  { code: '+683', country: 'NU', flag: '🇳🇺' },
  { code: '+672', country: 'NF', flag: '🇳🇫' },
  { code: '+1670', country: 'MP', flag: '🇲🇵' },
  { code: '+47', country: 'NO', flag: '🇳🇴' },
  { code: '+968', country: 'OM', flag: '🇴🇲' },
  { code: '+92', country: 'PK', flag: '🇵🇰' },
  { code: '+680', country: 'PW', flag: '🇵🇼' },
  { code: '+970', country: 'PS', flag: '🇵🇸' },
  { code: '+507', country: 'PA', flag: '🇵🇦' },
  { code: '+675', country: 'PG', flag: '🇵🇬' },
  { code: '+595', country: 'PY', flag: '🇵🇾' },
  { code: '+51', country: 'PE', flag: '🇵🇪' },
  { code: '+63', country: 'PH', flag: '🇵🇭' },
  { code: '+48', country: 'PL', flag: '🇵🇱' },
  { code: '+351', country: 'PT', flag: '🇵🇹' },
  { code: '+1787', country: 'PR', flag: '🇵🇷' },
  { code: '+974', country: 'QA', flag: '🇶🇦' },
  { code: '+262', country: 'RE', flag: '🇷🇪' },
  { code: '+40', country: 'RO', flag: '🇷🇴' },
  { code: '+7', country: 'RU', flag: '🇷🇺' },
  { code: '+250', country: 'RW', flag: '🇷🇼' },
  { code: '+590', country: 'BL', flag: '🇧🇱' },
  { code: '+290', country: 'SH', flag: '🇸🇭' },
  { code: '+1869', country: 'KN', flag: '🇰🇳' },
  { code: '+1758', country: 'LC', flag: '🇱🇨' },
  { code: '+590', country: 'MF', flag: '🇲🇫' },
  { code: '+508', country: 'PM', flag: '🇵🇲' },
  { code: '+1784', country: 'VC', flag: '🇻🇨' },
  { code: '+685', country: 'WS', flag: '🇼🇸' },
  { code: '+378', country: 'SM', flag: '🇸🇲' },
  { code: '+239', country: 'ST', flag: '🇸🇹' },
  { code: '+966', country: 'SA', flag: '🇸🇦' },
  { code: '+221', country: 'SN', flag: '🇸🇳' },
  { code: '+381', country: 'RS', flag: '🇷🇸' },
  { code: '+248', country: 'SC', flag: '🇸🇨' },
  { code: '+232', country: 'SL', flag: '🇸🇱' },
  { code: '+65', country: 'SG', flag: '🇸🇬' },
  { code: '+421', country: 'SK', flag: '🇸🇰' },
  { code: '+386', country: 'SI', flag: '🇸🇮' },
  { code: '+677', country: 'SB', flag: '🇸🇧' },
  { code: '+252', country: 'SO', flag: '🇸🇴' },
  { code: '+27', country: 'ZA', flag: '🇿🇦' },
  { code: '+34', country: 'ES', flag: '🇪🇸' },
  { code: '+94', country: 'LK', flag: '🇱🇰' },
  { code: '+249', country: 'SD', flag: '🇸🇩' },
  { code: '+597', country: 'SR', flag: '🇸🇷' },
  { code: '+268', country: 'SZ', flag: '🇸🇿' },
  { code: '+46', country: 'SE', flag: '🇸🇪' },
  { code: '+41', country: 'CH', flag: '🇨🇭' },
  { code: '+963', country: 'SY', flag: '🇸🇾' },
  { code: '+886', country: 'TW', flag: '🇹🇼' },
  { code: '+992', country: 'TJ', flag: '🇹🇯' },
  { code: '+255', country: 'TZ', flag: '🇹🇿' },
  { code: '+66', country: 'TH', flag: '🇹🇭' },
  { code: '+670', country: 'TL', flag: '🇹🇱' },
  { code: '+228', country: 'TG', flag: '🇹🇬' },
  { code: '+690', country: 'TK', flag: '🇹🇰' },
  { code: '+676', country: 'TO', flag: '🇹🇴' },
  { code: '+1868', country: 'TT', flag: '🇹🇹' },
  { code: '+216', country: 'TN', flag: '🇹🇳' },
  { code: '+90', country: 'TR', flag: '🇹🇷' },
  { code: '+993', country: 'TM', flag: '🇹🇲' },
  { code: '+1649', country: 'TC', flag: '🇹🇨' },
  { code: '+688', country: 'TV', flag: '🇹🇻' },
  { code: '+256', country: 'UG', flag: '🇺🇬' },
  { code: '+380', country: 'UA', flag: '🇺🇦' },
  { code: '+971', country: 'AE', flag: '🇦🇪' },
  { code: '+44', country: 'GB', flag: '🇬🇧' },
  { code: '+1', country: 'US', flag: '🇺🇸' },
  { code: '+598', country: 'UY', flag: '🇺🇾' },
  { code: '+998', country: 'UZ', flag: '🇺🇿' },
  { code: '+678', country: 'VU', flag: '🇻🇺' },
  { code: '+58', country: 'VE', flag: '🇻🇪' },
  { code: '+84', country: 'VN', flag: '🇻🇳' },
  { code: '+1284', country: 'VG', flag: '🇻🇬' },
  { code: '+1340', country: 'VI', flag: '🇻🇮' },
  { code: '+681', country: 'WF', flag: '🇼🇫' },
  { code: '+967', country: 'YE', flag: '🇾🇪' },
  { code: '+260', country: 'ZM', flag: '🇿🇲' },
  { code: '+263', country: 'ZW', flag: '🇿🇼' }
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    date: undefined as Date | undefined,
    timeSlot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSuccess(true);
    toast({
      title: "Appointment Booked Successfully!",
      description: "See you at the meeting. We'll send you a confirmation email shortly.",
    });

    setFormData({ 
      name: '', 
      email: '', 
      countryCode: '+91',
      phone: '',
      date: undefined,
      timeSlot: ''
    });
    setIsSubmitting(false);
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section className="py-32 relative overflow-hidden scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-neon-purple rounded-full opacity-10 blur-2xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's start a conversation about 
            how we can help you achieve your technology goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="flex items-start space-x-4 group hover-lift transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:neon-glow transition-all duration-300">
                        <info.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {info.detail}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Message */}
            <div className="glass rounded-3xl p-8 hover-lift transition-all duration-300">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Quick Response Guarantee
              </h3>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 2 hours during business hours. 
                For urgent matters, don't hesitate to call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 hover-lift transition-all duration-300">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Appointment Booked Successfully!
                </h3>
                <p className="text-muted-foreground text-lg">
                  See you at the meeting. We'll send you a confirmation email shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Book an Appointment
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass border-primary/30 focus:border-primary focus:ring-primary/20"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass border-primary/30 focus:border-primary focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <Select value={formData.countryCode} onValueChange={(value) => handleSelectChange('countryCode', value)}>
                        <SelectTrigger className="w-32 glass border-primary/30 focus:border-primary">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="glass backdrop-blur-xl border-primary/30">
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              <span className="flex items-center gap-2">
                                <span>{country.flag}</span>
                                <span>{country.code}</span>
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
                        className="flex-1 glass border-primary/30 focus:border-primary focus:ring-primary/20"
                        placeholder="1234567890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Date
                    </label>
                    <div className="glass rounded-xl border border-primary/30 p-4">
                      <CalendarComponent
                        mode="single"
                        selected={formData.date}
                        onSelect={handleDateChange}
                        disabled={(date) => date < new Date()}
                        className={cn("pointer-events-auto w-full")}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Time Slot
                    </label>
                    <Select value={formData.timeSlot} onValueChange={(value) => handleSelectChange('timeSlot', value)}>
                      <SelectTrigger className="glass border-primary/30 focus:border-primary">
                        <SelectValue placeholder="Choose a time slot" />
                      </SelectTrigger>
                      <SelectContent className="glass backdrop-blur-xl border-primary/30">
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.date || !formData.timeSlot}
                    className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105 text-lg py-3"
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
        </div>
      </div>
    </section>
  );
};