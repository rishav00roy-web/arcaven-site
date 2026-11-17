"use client";

import { ArrowLeft, ArrowRight } from "kubai-icons-react";
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
              <h3 className="ww-studio__slide-name caps">{CHANNELS[currentSet].title}</h3>
            </div>
          </div>

          <div className="ww-studio__controls">
            <button
              className="ww-studio__arrow"
              onClick={prevSet}
              aria-label="Previous channel"
            >
              <ArrowLeft size={40} trigger="parent" />
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
              <ArrowRight size={40} trigger="parent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
