"use client";

import { useState } from "react";
import Image from "next/image";
import { BOOK_CALL_HREF, CHANNELS } from "@/lib/site";

export default function SetsInTheCity() {
  const [currentSet, setCurrentSet] = useState(0);

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % CHANNELS.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + CHANNELS.length) % CHANNELS.length);
  };

  return (
    <section className="ww-studio" id="pedigree" aria-label="Enterprise pedigree">
      <div className="ww-studio__inner">
        {/* Left Column: Description & Highlights */}
        <div className="ww-studio__content">
          <span className="ww-studio__eyebrow label">TIER-1 ENTERPRISE PEDIGREE</span>
          <h2 className="ww-studio__heading caps">Fortune 500 SLA Discipline for Growing Brands</h2>
          <p className="ww-studio__description">
            Led by Alim Mavani, former Team Leader & Transition Coach at JPMorgan Chase and Billing Dispute Specialist at Citi. Arcaven Solutions brings that discipline to every channel your customers use, from the first pre-sale DM to the last chargeback.
          </p>
          <div className="ww-studio__highlight">
            <span className="ww-studio__count caps">6+ Years</span>
            <p className="ww-studio__count-label">Of Tier-1 banking and telecom operations leadership across JPMorgan Chase, Citi, and Three UK.</p>
          </div>
          <div className="ww-studio__actions">
            <a href={BOOK_CALL_HREF} className="ww-studio__cta label">
              Book a 15-Min Call
            </a>
          </div>
        </div>

        {/* Right Column: Sets Visual Slider */}
        <div className="ww-studio__slider" aria-label="Channels we handle">
          <div className="ww-studio__slide-stage">
            <Image
              src={CHANNELS[currentSet].img}
              alt={CHANNELS[currentSet].title}
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              quality={88}
              className="pointer-events-none"
              style={{ objectFit: "cover" }}
            />
            <div className="ww-studio__slide-caption">
              <span className="ww-studio__slide-index label">{String(currentSet + 1).padStart(2, '0')} / {String(CHANNELS.length).padStart(2, '0')}</span>
              <h3 className="ww-studio__slide-name caps">{CHANNELS[currentSet].title}</h3>
            </div>
          </div>

          <div className="ww-studio__controls">
            <button
              className="ww-studio__arrow"
              onClick={prevSet}
              aria-label="Previous channel"
            >
              <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            </button>
            <div className="ww-studio__dots">
              {CHANNELS.map((_, idx) => (
                <button
                  key={idx}
                  className={`ww-studio__dot ${idx === currentSet ? "active" : ""}`}
                  onClick={() => setCurrentSet(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              className="ww-studio__arrow"
              onClick={nextSet}
              aria-label="Next channel"
            >
              <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
