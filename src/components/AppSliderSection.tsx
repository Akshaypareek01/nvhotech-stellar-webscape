import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { id: 1, image: '/appslider/slider1.webp', alt: 'App UI Design 1' },
  { id: 2, image: '/appslider/slider2.webp', alt: 'App UI Design 2' },
  { id: 3, image: '/appslider/slider3.webp', alt: 'App UI Design 3' },
  { id: 4, image: '/appslider/slider4.webp', alt: 'App UI Design 4' },
  { id: 5, image: '/appslider/slider5.webp', alt: 'App UI Design 5' },
  { id: 6, image: '/appslider/slider6.webp', alt: 'App UI Design 6' },
  { id: 7, image: '/appslider/slider7.webp', alt: 'App UI Design 7' },
  { id: 8, image: '/appslider/slider8.webp', alt: 'App UI Design 8' },
  { id: 9, image: '/appslider/slider9.webp', alt: 'App UI Design 9' },
  { id: 10, image: '/appslider/slider10.webp', alt: 'App UI Design 10' },
  { id: 11, image: '/appslider/slider11.webp', alt: 'App UI Design 11' },
  { id: 12, image: '/appslider/sldier12.webp', alt: 'App UI Design 12' },
];

const LEN = slides.length;

/**
 * Returns indices for: two far-left, one left, center, one right, two far-right.
 * Extra slots let slides fade in/out without popping.
 */
const getVisible = (idx: number) => [
  (idx - 2 + LEN) % LEN,
  (idx - 1 + LEN) % LEN,
  idx,
  (idx + 1) % LEN,
  (idx + 2) % LEN,
];

export const AppSliderSection = () => {
  const [cur, setCur] = useState(0);
  const [auto, setAuto] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setCur(i => (i - 1 + LEN) % LEN), []);
  const next = useCallback(() => setCur(i => (i + 1) % LEN), []);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, 3800);
    return () => clearInterval(id);
  }, [auto, next]);

  const visible = getVisible(cur);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(217 91% 52% / 0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(267 83% 57% / 0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 badge-blue mb-5">
            <span>UI Design Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Beautiful App Designs{' '}
            <span className="gradient-text">We've Crafted</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pixel-perfect mobile interfaces designed for exceptional user experiences.
          </p>
        </div>

        <div
          ref={sliderRef}
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setAuto(false)}
          onMouseLeave={() => setAuto(true)}
        >
          <div className="relative h-[400px] md:h-[520px] lg:h-[620px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {visible.map((slideIdx, pos) => {
                const slide = slides[slideIdx];
                const isCenter = pos === 2;
                const isInner = pos === 1 || pos === 3;
                const isLeft = pos < 2;

                const tx = isCenter ? 0 : isInner ? (isLeft ? -58 : 58) : (isLeft ? -90 : 90);
                const sc = isCenter ? 1 : isInner ? 0.72 : 0.5;
                const ry = isCenter ? 0 : isLeft ? 18 : -18;
                const op = isCenter ? 1 : isInner ? 0.45 : 0;
                const z  = isCenter ? 30 : isInner ? 15 : 5;

                return (
                  <div
                    key={slide.id}
                    className="absolute"
                    style={{
                      transform: `translateX(${tx}%) scale(${sc}) rotateY(${ry}deg)`,
                      opacity: op,
                      zIndex: z,
                      transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease',
                      willChange: 'transform, opacity',
                    }}
                    onClick={() => {
                      if (pos === 1) prev();
                      else if (pos === 3) next();
                    }}
                    role={isCenter ? undefined : 'button'}
                    tabIndex={isCenter ? -1 : 0}
                    aria-label={isCenter ? undefined : isLeft ? 'Previous slide' : 'Next slide'}
                  >
                    <div className="relative">
                      <div
                        className="w-[190px] md:w-[240px] lg:w-[280px] h-[380px] md:h-[480px] lg:h-[560px] rounded-[2.5rem] overflow-hidden"
                        style={{
                          boxShadow: isCenter
                            ? '0 32px 64px rgba(59,130,246,0.20), 0 8px 24px rgba(0,0,0,0.12)'
                            : '0 8px 24px rgba(0,0,0,0.08)',
                          border: isCenter ? '2px solid rgba(59,130,246,0.15)' : '1px solid rgba(0,0,0,0.06)',
                        }}
                      >
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          width={280}
                          height={560}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        {!isCenter && (
                          <div className="absolute inset-0 bg-background/40" />
                        )}
                      </div>

                      {isCenter && (
                        <div
                          className="absolute inset-0 -z-10 rounded-[2.5rem] opacity-30 blur-2xl"
                          style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
                          aria-hidden
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors duration-150 text-muted-foreground"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors duration-150 text-muted-foreground"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-10">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCur(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === cur
                    ? 'w-7 h-2 bg-blue-500'
                    : 'w-2 h-2 bg-muted-foreground/35 hover:bg-muted-foreground/55'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
