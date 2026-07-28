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
  { value: '120+', label: 'Projects Delivered', shortLabel: 'Projects' },
  { value: '100+', label: 'Happy Clients', shortLabel: 'Clients' },
  { value: '99%', label: 'Client Satisfaction', shortLabel: 'Satisfaction' },
  { value: '24/7', label: 'Support', shortLabel: 'Support' },
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
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-background pt-[calc(var(--header-height)+1.25rem)] sm:pt-[calc(var(--header-height)+2rem)] md:pt-[calc(var(--header-height)+2.5rem)] pb-4 sm:pb-8 md:pb-16">
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

      <div className="container mx-auto flex flex-1 flex-col px-4 sm:px-6 relative z-10">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
          {/* Hero copy — centered in upper space */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div
              className="inline-flex max-w-full items-center gap-1.5 badge-blue mb-4 sm:mb-6 md:mb-8 animate-fade-in text-xs sm:text-[0.8125rem] px-3 sm:px-[0.875rem] py-1"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
              <span className="leading-tight sm:hidden">Premier IT Solutions</span>
              <span className="leading-tight hidden sm:inline">India's Premier IT Solutions Company</span>
            </div>

            <h1
              className="mb-4 sm:mb-6 animate-fade-in-up px-1 text-[1.875rem] font-extrabold leading-[1.1] text-foreground sm:text-5xl sm:leading-[1.05] md:text-7xl lg:text-8xl"
              style={{ letterSpacing: '-0.03em' }}
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

            <div className="mb-5 sm:mb-6 animate-fade-in delay-200 inline-flex max-w-full items-center justify-center rounded-full border border-border/60 glass px-3 py-1.5 shadow-sm sm:gap-3 sm:px-5 sm:py-2.5 md:px-6 md:py-3">
              <div className="hidden sm:block h-2 w-2 shrink-0 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <p className="text-sm font-semibold leading-snug text-foreground sm:text-lg md:text-xl">
                <span className="hidden sm:inline">Specialising in </span>
                <span
                  key={currentService}
                  className="gradient-text"
                  style={{ animation: 'fadeInUp 0.4s ease-out both' }}
                >
                  {services[currentService]}
                </span>
              </p>
              <div className="hidden sm:block h-2 w-2 shrink-0 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            </div>

            <div className="animate-fade-in delay-400 mx-auto flex w-full max-w-[18rem] flex-col items-stretch justify-center gap-2 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="sm"
                className="btn-gradient h-10 w-full rounded-lg px-5 py-2 text-sm font-semibold shadow-md sm:h-11 sm:w-auto sm:rounded-xl sm:px-6 md:text-base sm:shadow-lg"
                onClick={() => navigate('/services')}
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 sm:ml-2 sm:h-4 sm:w-4" aria-hidden="true" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="hidden h-11 rounded-xl border-2 border-border px-6 py-2 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary sm:inline-flex md:text-base"
                onClick={() => navigate('/book-appointment')}
              >
                Book Free Consultation
              </Button>
            </div>

          </div>

          {/* Bottom stack — tech badges + stats */}
          <div className="stepwell-mark stepwell-mark-mobile mt-auto w-full pt-4 animate-fade-in delay-500 sm:pt-6 md:mt-10">
            <div className="mb-3 flex flex-wrap justify-center gap-2 sm:mb-4 sm:gap-3">
              {techBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-4 sm:py-2"
                >
                  <badge.icon className="h-4 w-4 shrink-0" style={{ color: badge.color }} aria-hidden="true" />
                  <span className="text-xs font-medium text-muted-foreground sm:text-sm">{badge.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border shadow-sm sm:rounded-2xl md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card px-3 py-3.5 text-center transition-colors duration-200 hover:bg-primary/10 sm:px-6 sm:py-5"
                >
                  <div className="font-display mb-1 text-2xl font-extrabold gradient-text sm:text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium leading-tight text-muted-foreground sm:text-xs md:text-sm">
                    <span className="sm:hidden">{stat.shortLabel}</span>
                    <span className="hidden sm:inline">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
    </section>
  );
};
