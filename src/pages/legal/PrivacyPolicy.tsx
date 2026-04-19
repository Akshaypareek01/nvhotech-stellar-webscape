import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">1. Information We Collect</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-3">
                <p><strong>Personal Information:</strong> Name, email address, phone number, and any other information you provide via forms or inquiries.</p>
                <p><strong>Usage Data:</strong> IP address, browser type, operating system, and information on how you use our website.</p>
                <p><strong>Cookies:</strong> We use cookies to enhance your experience and analyze website traffic.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">2. How We Use Your Information</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-2">
                <p>• To provide and maintain our services.</p>
                <p>• To improve user experience and customize our services.</p>
                <p>• To communicate updates, offers, and promotional content.</p>
                <p>• For compliance with legal obligations.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">3. Information Sharing</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-3">
                <p>We do not sell or rent your personal information. We may share your data:</p>
                <div className="ml-4 space-y-2">
                  <p>• With service providers assisting in business operations.</p>
                  <p>• To comply with legal obligations.</p>
                  <p>• With your consent.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use industry-standard measures to protect your data. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">5. Your Rights</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-2">
                <p>• Access, update, or delete your personal data.</p>
                <p>• Opt-out of receiving promotional communications.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">6. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-3">For any privacy-related concerns, contact us at:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> info@nvhotech.com</p>
                  <p><strong>Phone:</strong> +91 8290918154</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;