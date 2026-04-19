import { useState, useEffect, useRef } from 'react';
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

export const AppSliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3800);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const getVisibleSlides = () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    return [prevIndex, currentIndex, nextIndex];
  };
  const visibleSlides = getVisibleSlides();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background */}
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
        {/* Header */}
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

        {/* 3D Carousel */}
        <div
          ref={sliderRef}
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative h-[400px] md:h-[520px] lg:h-[620px] flex items-center justify-center perspective-1000">
            <div className="relative w-full h-full flex items-center justify-center">
              {visibleSlides.map((slideIndex, position) => {
                const slide = slides[slideIndex];
                const isCenter = position === 1;
                const isLeft = position === 0;

                return (
                  <div
                    key={slide.id}
                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      transform: `
                        translateX(${isCenter ? '0' : isLeft ? '-58%' : '58%'})
                        scale(${isCenter ? '1' : '0.72'})
                        rotateY(${isCenter ? '0' : isLeft ? '18deg' : '-18deg'})
                      `,
                      zIndex: isCenter ? 30 : 10,
                      opacity: isCenter ? 1 : 0.45,
                    }}
                    onClick={() => !isCenter && (isLeft ? handlePrev() : handleNext())}
                  >
                    <div className="relative group">
                      {/* Phone frame */}
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
                          width="280"
                          height="560"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {!isCenter && (
                          <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
                        )}
                      </div>

                      {/* Active glow */}
                      {isCenter && (
                        <div
                          className="absolute inset-0 -z-10 blur-2xl opacity-30 rounded-[2.5rem]"
                          style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-200 text-muted-foreground"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-200 text-muted-foreground"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
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
