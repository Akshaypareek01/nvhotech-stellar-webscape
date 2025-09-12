import { FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-32">
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
            <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using NVHO TECH services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on NVHO TECH's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">3. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to provide continuous service availability, but we do not guarantee that our 
                services will be uninterrupted or error-free. We may suspend or terminate services for 
                maintenance or other reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">4. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and 
                for all activities that occur under your account. You must not use our services for any 
                unlawful or prohibited activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content, features, and functionality of our services are owned by NVHO TECH and are 
                protected by intellectual property laws. You may not reproduce or redistribute our content 
                without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NVHO TECH shall not be liable for any damages arising from the use or inability to use 
                our services, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">7. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at 
                legal@nvhotech.com or through our contact form.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;