"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "kubai-icons-react";
import { HERO_SLIDES } from "@/lib/site";

export default function Hero({
  lines,
  headline,
  description,
  cta,
}: {
  eyebrow?: string;
  lines: string[];
  headline: string;
  description?: string;
  cta?: { href: string; label: string };
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  /* Auto-advance every 6s, but hold still while the visitor hovers or
     focuses the hero, and never for people who ask for reduced motion. */
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section
      className="hero hero--tall"
      id="top"
      aria-label="Hero Slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Marks dark ground for the fixed header observer */}
      <div className="hero__tone" data-ground="dark" aria-hidden="true" />

      <div className="hero__stage">
        {/* Multi-slide Background Carousel */}
        <div className="hero__photo">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.src}
              className={`hero__slide-wrap ${idx === activeSlide ? "active" : ""}`}
              aria-hidden={idx !== activeSlide}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                quality={90}
                priority={idx === 0}
                style={{ objectPosition: "50% 50%" }}
              />
            </div>
          ))}
        </div>

        <div className="hero__shade" aria-hidden="true" />

        {/* Wordmark and Tagline */}
        <div className="hero__words">
          <div className="hero__lockup">
            <p className="hero__mark caps" aria-hidden="true">
              {lines.map((line) => (
                <span className="hero__line" key={line}>
                  <span>{line}</span>
                </span>
              ))}
            </p>
            <h1 className="hero__script script">{headline}</h1>
          </div>
        </div>

        {description && (
          <p className="hero__flank">
            <span>{description}</span>
          </p>
        )}

        {cta && (
          <a className="hero__cta label" href={cta.href}>
            <span>{cta.label}</span>
          </a>
        )}

        {/* Slider Controls (Original Prev / Next Arrows) */}
        <div className="hero__arrows" aria-label="Slider controls">
          <button
            className="hero__arrow hero__arrow--prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={44} trigger="parent" />
          </button>
          <button
            className="hero__arrow hero__arrow--next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={44} trigger="parent" />
          </button>
        </div>

        {/* The architectural cream arch that rises at the end of the hero into the next section */}
        <div className="hero__arch" aria-hidden="true" />
      </div>
    </section>
  );
}
