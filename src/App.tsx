import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load pages for better performance
const Services = lazy(() => import("./pages/Services"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const MobileAppDevelopment = lazy(() => import("./pages/MobileAppDevelopment"));
const AIAutomation = lazy(() => import("./pages/AIAutomation"));
const SoftwareDevelopment = lazy(() => import("./pages/SoftwareDevelopment"));
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/legal/TermsOfService"));
const RefundPolicy = lazy(() => import("./pages/legal/RefundPolicy"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));
const GDPR = lazy(() => import("./pages/legal/GDPR"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const queryClient = new QueryClient();

const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/ai-automation" element={<AIAutomation />} />
              <Route path="/software-development" element={<SoftwareDevelopment />} />
              <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms-of-service" element={<TermsOfService />} />
              <Route path="/legal/refund-policy" element={<RefundPolicy />} />
              <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
              <Route path="/legal/gdpr" element={<GDPR />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
