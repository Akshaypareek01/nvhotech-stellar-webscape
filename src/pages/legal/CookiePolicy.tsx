import { Cookie, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';

const CookiePolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Cookie Policy - How We Use Cookies"
        description="Learn how NVHO Tech uses cookies on our website to improve your experience, analyze traffic, and deliver personalized content. Manage your cookie preferences."
        canonical="https://nvhotech.com/legal/cookie-policy"
        keywords="NVHO Tech cookie policy, cookies, website tracking, cookie preferences, analytics cookies"
      />
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
            <Cookie className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cookie <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you 
                visit our website. They help us provide you with a better experience by remembering your 
                preferences and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies for various purposes including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Essential cookies for website functionality</li>
                <li>Performance cookies to analyze website usage</li>
                <li>Functional cookies to remember your preferences</li>
                <li>Marketing cookies to provide relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies are necessary for the website to function and cannot be switched off.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neon-purple mb-2">Preference Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies remember your preferences and settings for a better experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">4. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in various ways. Most browsers allow you to block 
                or delete cookies, but this may affect your experience on our website. You can also 
                use our cookie consent tool to manage your preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">5. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use third-party services that place cookies on your device. These include 
                analytics providers, advertising networks, and social media platforms. Each third-party 
                service has its own privacy and cookie policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 gradient-text">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies, please contact us at 
                info@nvhotech.com or through our contact form.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CookiePolicy;