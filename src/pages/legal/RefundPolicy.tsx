import { RefreshCw, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RefundPolicy = () => {
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
            <RefreshCw className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Refund & Cancellation <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">1. Service Cancellation</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-4">
                <div>
                  <p className="font-semibold mb-2">Before Project Initiation:</p>
                  <div className="ml-4 space-y-2">
                    <p>• If you wish to cancel your service request before the project begins, you may do so within 48 hours of making the initial payment.</p>
                    <p>• A full refund will be provided, excluding any applicable transaction fees.</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">After Project Initiation:</p>
                  <div className="ml-4 space-y-2">
                    <p>• Cancellations after the project has commenced are not eligible for a full refund.</p>
                    <p>• Partial refunds may be considered at our discretion, based on the amount of work completed.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">2. Refund Eligibility</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-3">
                <p>Refunds are considered under the following conditions:</p>
                <div className="ml-4 space-y-2">
                  <p>• If the deliverables do not match the agreed-upon scope of work.</p>
                  <p>• If the project cannot be completed due to technical or operational reasons on our end.</p>
                  <p>• If any issues persist that are not resolved within a mutually agreed time frame.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">3. Non-Refundable Services</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-3">
                <p>Refunds will not be issued for:</p>
                <div className="ml-4 space-y-2">
                  <p>• Services already rendered and approved by the client.</p>
                  <p>• Delays caused by client-side inaction or failure to provide necessary information.</p>
                  <p>• Digital marketing campaigns once they have been executed or started.</p>
                  <p>• Third-party costs, such as hosting fees, domain registrations, or software licenses, incurred during the project.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">4. Refund Process</h2>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-2">
                <p>• To request a refund, email us at info@nvhotech.in with your invoice number and details of the issue.</p>
                <p>• Refunds will be processed within 7-14 business days of approval.</p>
                <p>• Refunds will be issued to the original payment method used during the purchase.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">5. Modifications & Revisions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer 2 rounds of revisions to ensure client satisfaction. If the issue persists after the allotted revisions, we will discuss possible resolutions, including partial refunds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">6. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-3">For any questions or concerns regarding our Refund & Cancellation Policy, please reach out to us at:</p>
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

export default RefundPolicy;
