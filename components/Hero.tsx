"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { HERO_SLIDES } from "@/lib/site";

type Cta = { href: string; label: string };

/* Pinned hero: one specific headline, one supporting line, and a clear
   primary action with a quieter secondary beside it. The photos crossfade
   on their own behind a dark shade; there are no arrows or decorative seal. */
export default function Hero({
  headline,
  description,
  primary,
  secondary,
}: {
  headline: string;
  description?: string;
  primary: Cta;
  secondary?: Cta;
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

  return (
    <section
      className="hero hero--tall"
      id="top"
      aria-labelledby="hero-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Marks dark ground for the fixed header observer */}
      <div className="hero__tone" data-ground="dark" aria-hidden="true" />

      <div className="hero__stage">
        <div className="hero__photo" aria-hidden="true">
          {HERO_SLIDES.map((slide, idx) => (
            <div key={slide.src} className={`hero__slide-wrap ${idx === activeSlide ? "active" : ""}`}>
              <Image
                src={slide.src}
                alt=""
                fill
                sizes="100vw"
                quality={85}
                priority={idx === 0}
                style={{ objectPosition: "50% 50%" }}
              />
            </div>
          ))}
        </div>

        <div className="hero__shade" aria-hidden="true" />

        <div className="hero__words">
          <h1 className="hero__title" id="hero-title">{headline}</h1>
          {description && <p className="hero__sub">{description}</p>}
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={primary.href}>
              {primary.label}
            </a>
            {secondary && (
              <a className="btn btn--ghost-dark btn--lg" href={secondary.href}>
                {secondary.label}
              </a>
            )}
          </div>
        </div>

        {/* The arch that rises out of the hero into the next section */}
        <div className="hero__arch" aria-hidden="true" />
      </div>
    </section>
  );
}
