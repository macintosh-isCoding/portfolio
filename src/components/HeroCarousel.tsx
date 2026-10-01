import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

type Slide = {
  href: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  color: string;
};

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured work"
      className="relative isolate h-[calc(100svh-3.5rem)] min-h-[560px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const delta = e.changedTouches[0].clientX - touchX;
        if (Math.abs(delta) > 50) go(index + (delta < 0 ? 1 : -1));
        setTouchX(null);
      }}
    >
      {slides.map((slide, i) => {
        const active = i === index;
        return (
          <article
            key={slide.href}
            aria-hidden={!active}
            style={
              {
                '--accent': slide.color,
                background:
                  'radial-gradient(60% 55% at 72% 40%, color-mix(in srgb, var(--accent) 28%, transparent), transparent)',
              } as CSSProperties
            }
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
              active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <div className="mx-auto grid h-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 lg:px-24">              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                  {slide.eyebrow}
                </p>
                <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
                  {slide.title}
                </h2>
                <p className="mt-6 max-w-md text-lg text-muted">{slide.text}</p>
                <a
                  href={slide.href}
                  tabIndex={active ? 0 : -1}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
                >
                  {slide.cta} <span aria-hidden="true">→</span>
                </a>
              </div>

              <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-md md:block">
                <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl" />
                <div className="absolute inset-10 grid place-items-center rounded-[2.5rem] border border-white/10 bg-white/5 text-sm text-muted backdrop-blur-xl">
                  3D object
                </div>
              </div>
            </div>
          </article>
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-base to-transparent" />

      <button
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full text-ink/70 transition duration-300 hover:bg-white/10 hover:text-ink focus-visible:bg-white/10 lg:grid"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>

      <button
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full text-ink/70 transition duration-300 hover:bg-white/10 hover:text-ink focus-visible:bg-white/10 lg:grid"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.href}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className="group flex h-6 items-center"
          >
            <span
              className={`block h-1 rounded-full transition-all duration-500 ${
                i === index ? 'w-20 bg-white' : 'w-12 bg-white/30 group-hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}