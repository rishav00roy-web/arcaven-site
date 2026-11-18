"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { CITY_GALLERY } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

/* Coverage band. The photo strip travels sideways only as the visitor scrolls
   past it (GSAP ScrollTrigger, scrubbed), so it moves with the reader instead
   of looping on its own. Without scripts, or with reduced motion, the strip is
   a plain row the visitor can swipe or scroll through. */
export default function NatureMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    section.classList.add("is-scrubbed");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: () => -(track.scrollWidth - track.parentElement!.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      );
    }, section);

    return () => {
      ctx.revert();
      section.classList.remove("is-scrubbed");
    };
  }, []);

  return (
    <section ref={sectionRef} className="nature-marquee" id="coverage" aria-label="US and UK coverage">
      <div className="nature-marquee__header">
        <div className="nature-marquee__text">
          <h2 className="nature-marquee__heading caps">London to New York, Covered.</h2>
          <p className="nature-marquee__desc">
            Real-time shift overlap with London (GMT/BST) and New York (EST) business hours so your customers and team get instant responses.
          </p>
        </div>
        <a href="#booking" className="nature-marquee__cta label">
          Book a 15-Min Call
        </a>
      </div>

      <div className="nature-marquee__track-wrap">
        <div ref={trackRef} className="nature-marquee__track">
          {CITY_GALLERY.map((imgSrc) => (
            <div className="nature-marquee__item" key={imgSrc}>
              <Image
                src={imgSrc}
                alt=""
                fill
                sizes="340px"
                quality={85}
                className="pointer-events-none"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
