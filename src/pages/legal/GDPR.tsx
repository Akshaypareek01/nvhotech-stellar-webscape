import { Scale, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const GDPR = () => {
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
            <Scale className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              GDPR <span className="gradient-text">Compliance</span>
            </h1>
            <p className="text-muted-foreground">General Data Protection Regulation</p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">1. Your Rights Under GDPR</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under the General Data Protection Regulation (GDPR), you have several rights regarding 
                your personal data. These rights include the right to access, rectify, erase, restrict 
                processing, data portability, and to object to processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">2. Right to Access</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to request access to the personal data we hold about you. This includes 
                the right to know what data we process, why we process it, and how long we keep it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">3. Right to Rectification</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to request correction of inaccurate personal data and to have incomplete 
                personal data completed, including by providing a supplementary statement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">4. Right to Erasure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Also known as the "right to be forgotten," you can request the deletion of your personal 
                data when it's no longer necessary for the purposes for which it was collected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">5. Data Portability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to receive your personal data in a structured, commonly used, and 
                machine-readable format, and to transmit that data to another controller.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">6. Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We process personal data based on various legal grounds including consent, contract 
                performance, legal obligations, vital interests, public tasks, and legitimate interests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">7. Data Protection Officer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about data protection or to exercise your rights, you can contact our 
                Data Protection Officer at info@nvhotech.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">8. Complaints</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you believe your data protection rights have been violated, you have the right to 
                lodge a complaint with your local data protection authority.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPR;