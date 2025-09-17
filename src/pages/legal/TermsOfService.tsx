import { FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
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
            <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">1. Services Provided</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NvhoTech offers web development, mobile app development, AI solutions, and IT consultancy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">2. Use of Services</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-2">
                <p>• You agree not to use our services for illegal activities.</p>
                <p>• You must provide accurate information when engaging our services.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, and software, is our intellectual property. Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">4. Payment Terms</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-2">
                <p>• Payments must be made as per agreed-upon terms.</p>
                <p>• Late payments may incur penalties.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">5. Limitation of Liability</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-3">
                <p>We are not responsible for:</p>
                <div className="ml-4 space-y-2">
                  <p>• Losses resulting from service interruptions or third-party issues.</p>
                  <p>• Indirect or consequential damages.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">6. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to terminate your access to our services for breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">7. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms are governed by the laws of India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update these Terms at any time. Continued use of our services constitutes acceptance of the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">9. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-3">For any questions about these Terms, contact us at:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> info@nvhotech.in</p>
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

export default TermsOfService;