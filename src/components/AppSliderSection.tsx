import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

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
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const sliderRef = useRef<HTMLDivElement>(null);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const handlePrevious = () => {
        setDirection('left');
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection('right');
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    // Get visible slides (current, previous, next)
    const getVisibleSlides = () => {
        const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        return [prevIndex, currentIndex, nextIndex];
    };

    const visibleSlides = getVisibleSlides();

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4" data-scroll data-scroll-speed="0.5">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                        Checkout Our Application UI Design
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore our stunning mobile app designs crafted with precision and creativity
                    </p>
                </div>

                {/* Slider Container */}
                <div
                    ref={sliderRef}
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Main Slider */}
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000">
                        {/* Slides */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {visibleSlides.map((slideIndex, position) => {
                                const slide = slides[slideIndex];
                                const isCenter = position === 1;
                                const isLeft = position === 0;
                                const isRight = position === 2;

                                return (
                                    <div
                                        key={slide.id}
                                        className={`absolute transition-all duration-700 ease-out ${isCenter
                                            ? 'z-30 scale-100 opacity-100 translate-x-0'
                                            : isLeft
                                                ? 'z-10 scale-75 opacity-40 -translate-x-[60%] md:-translate-x-[70%]'
                                                : 'z-10 scale-75 opacity-40 translate-x-[60%] md:translate-x-[70%]'
                                            }`}
                                        style={{
                                            transform: `
                        translateX(${isCenter ? '0' : isLeft ? '-60%' : '60%'})
                        scale(${isCenter ? '1' : '0.75'})
                        rotateY(${isCenter ? '0' : isLeft ? '15deg' : '-15deg'})
                      `,
                                        }}
                                    >
                                        <div className="relative group cursor-pointer" onClick={() => !isCenter && goToSlide(slideIndex)}>
                                            {/* Image Container */}
                                            <div className="relative w-[200px] md:w-[250px] lg:w-[300px] h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                                                <img
                                                    src={slide.image}
                                                    alt={slide.alt}
                                                    className="w-full h-full object-contain bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
                                                    loading="lazy"
                                                />

                                                {/* Overlay on non-center slides */}
                                                {!isCenter && (
                                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300" />
                                                )}
                                            </div>

                                            {/* Glow Effect for Center Slide */}
                                            {isCenter && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl -z-10 animate-pulse" />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-md border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group shadow-lg"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-md border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group shadow-lg"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-12">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'w-8 h-2 bg-primary'
                                    : 'w-2 h-2 bg-primary/30 hover:bg-primary/50'
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
