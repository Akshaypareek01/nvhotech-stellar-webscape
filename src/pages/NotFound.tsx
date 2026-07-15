import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const HELPFUL_LINKS = [
  { name: "Web Development", path: "/web-development" },
  { name: "Mobile App Development", path: "/mobile-app-development" },
  { name: "AI Automation", path: "/ai-automation" },
  { name: "Custom Software", path: "/software-development" },
  { name: "All Services", path: "/services" },
  { name: "Blog", path: "/blog" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The page you are looking for does not exist. Explore NVHO Tech's web development, mobile app, and AI automation services instead."
        noindex
      />
      <Navigation />
      <div className="min-h-screen bg-gradient-hero text-foreground flex items-center justify-center px-6 pt-24 pb-16">
        <div className="text-center max-w-2xl">
          <p className="text-7xl md:text-8xl font-extrabold gradient-text mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page not found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you are looking for doesn&apos;t exist or has been moved.
            Here are some places to go instead:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {HELPFUL_LINKS.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
          <Link
            to="/"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            Return to Home
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
