import { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Code2, Smartphone, Brain, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** Each entry = three rows shown inside the `<h1>`. */
const HEADLINES = [
  { top: 'We Build',   accent: 'Digital Futures',     bottom: 'That Deliver.' },
  { top: 'We Craft',   accent: 'Scalable Software',   bottom: 'That Grows.' },
  { top: 'We Design',  accent: 'Mobile Experiences',  bottom: 'Users Love.' },
  { top: 'We Power',   accent: 'AI Automation',       bottom: 'That Works.' },
  { top: 'We Ship',    accent: 'Web Platforms',       bottom: 'That Convert.' },
];

const services = ['Web Development', 'Mobile Apps', 'AI Automation', 'Custom Software', 'CRM Systems'];

const stats = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support' },
];

const techBadges = [
  { icon: Code2, label: 'React & Next.js', color: 'hsl(var(--cat-a))' },
  { icon: Smartphone, label: 'iOS & Android', color: 'hsl(var(--cat-b))' },
  { icon: Brain, label: 'AI / ML', color: 'hsl(var(--cat-c))' },
  { icon: Globe, label: 'Cloud Ready', color: 'hsl(var(--cat-d))' },
];

const ROTATE_MS = 3500;
const EXIT_MS = 250;

/** Looping hero background video (CloudFront CDN). */
const HERO_BG_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4';

export const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'exit'>('enter');
  const [videoReady, setVideoReady] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  /** Marks the hero background video as ready once playback has started. */
  const handleVideoReady = useCallback(() => {
    setVideoReady(current => (current ? current : true));
  }, []);

  const advanceHeadline = useCallback(() => {
    setPhase('exit');
    timerRef.current = setTimeout(() => {
      setHeadlineIdx(i => (i + 1) % HEADLINES.length);
      setPhase('enter');
    }, EXIT_MS);
  }, []);

  useEffect(() => {
    const id = setInterval(advanceHeadline, ROTATE_MS);
    return () => {
      clearInterval(id);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [advanceHeadline]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReadyIfPlaying = () => {
      if (!video.paused && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        setVideoReady(true);
      }
    };

    markReadyIfPlaying();
    video.addEventListener('playing', markReadyIfPlaying);

    return () => {
      video.removeEventListener('playing', markReadyIfPlaying);
    };
  }, []);

  const h = HEADLINES[headlineIdx];
  const animClass = phase === 'enter' ? 'hero-word-enter' : 'hero-word-exit';

  return (
    <section className="relative flex min-h-[100dvh] items-start justify-center overflow-hidden bg-background pt-[calc(var(--header-height)+2rem)] md:pt-[calc(var(--header-height)+2.5rem)] pb-12 md:pb-16">
      {/* Background video — no grid/line overlays; scrim only after playback starts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={handleVideoReady}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          src={HERO_BG_VIDEO_URL}
        />
        {videoReady && (
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/25 to-background/65 animate-fade-in" />
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 badge-blue mb-8 animate-fade-in"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>India's Premier IT Solutions Company</span>
            </div>

            {/* Main headline — three rows that cycle with a glitch swap */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 animate-fade-in-up"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
              aria-label={`${h.top} ${h.accent} ${h.bottom}`}
            >
              <span key={`top-${headlineIdx}`} className={`inline-block ${animClass}`}>
                {h.top}
              </span>
              <br />
              <span
                key={`mid-${headlineIdx}`}
                className={`inline-block gradient-text ${animClass}`}
                style={{ animationDelay: '0.06s' }}
              >
                {h.accent}
              </span>
              <br />
              <span
                key={`bot-${headlineIdx}`}
                className={`inline-block ${animClass}`}
                style={{ animationDelay: '0.12s' }}
              >
                {h.bottom}
              </span>
            </h1>

            {/* Animated service line — glass card for contrast over video bg */}
            <div className="inline-flex items-center justify-center gap-3 mb-6 animate-fade-in delay-200 glass rounded-full px-5 py-2.5 md:px-6 md:py-3 border border-border/60 shadow-sm">
              <div className="w-2 h-2 shrink-0 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <p className="text-lg md:text-xl font-semibold text-foreground">
                Specialising in{' '}
                <span
                  key={currentService}
                  className="gradient-text"
                  style={{ animation: 'fadeInUp 0.4s ease-out both' }}
                >
                  {services[currentService]}
                </span>
              </p>
              <div className="w-2 h-2 shrink-0 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            </div>

            {/* Subtitle */}
            {/* <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
              We collaborate with startups and enterprises to build high-quality web apps, mobile solutions,
              CRM systems, and AI tools — on time, on budget, and beyond expectations.
            </p> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in delay-400">
              <Button
                size="lg"
                className="btn-gradient h-13 px-8 text-base font-semibold rounded-xl shadow-lg"
                onClick={() => navigate('/services')}
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base font-semibold rounded-xl border-2 border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200"
                onClick={() => navigate('/book-appointment')}
              >
                Book Free Consultation
              </Button>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-14 animate-fade-in delay-500">
              {techBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <badge.icon className="w-4 h-4" style={{ color: badge.color }} />
                  <span className="text-sm font-medium text-muted-foreground">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="stepwell-mark grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-sm animate-fade-in delay-600">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card px-6 py-5 text-center hover:bg-primary/10 transition-colors duration-200"
                >
                  <div className="font-display text-2xl md:text-3xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </section>
  );
};
