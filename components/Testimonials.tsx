"use client";

import { ArrowLeft, ArrowRight } from "kubai-icons-react";
import { useState } from "react";
import { FAQ } from "@/lib/site";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % FAQ.length);
  };

  const prevTestimonial = () => {
    setActive((prev) => (prev - 1 + FAQ.length) % FAQ.length);
  };

  return (
    <section className="ww-testimonials" id="faq" aria-label="Frequently asked questions">
      <div className="ww-testimonials__inner">
        <div className="ww-testimonials__header">
          <h2 className="ww-testimonials__heading caps">Questions Founders Ask</h2>
          <p className="ww-testimonials__subheading script">
            Straight answers before your 15-minute call.
          </p>
        </div>

        <div className="ww-testimonials__stage">
          <blockquote className="ww-testimonials__quote">
            <footer className="ww-testimonials__footer ww-testimonials__footer--q">
              <h3 className="ww-testimonials__author caps">{FAQ[active].q}</h3>
            </footer>
            <p className="ww-testimonials__text" aria-live="polite">{FAQ[active].a}</p>
          </blockquote>

          <div className="ww-testimonials__controls">
            <button
              className="ww-testimonials__arrow"
              onClick={prevTestimonial}
              aria-label="Previous question"
            >
              <ArrowLeft size={40} trigger="parent" />
            </button>
            <div className="ww-testimonials__dots">
              {FAQ.map((_, idx) => (
                <button
                  key={idx}
                  className={`ww-testimonials__dot ${idx === active ? "active" : ""}`}
                  onClick={() => setActive(idx)}
                  aria-label={`Question ${idx + 1}`}
                />
              ))}
            </div>
            <button
              className="ww-testimonials__arrow"
              onClick={nextTestimonial}
              aria-label="Next question"
            >
              <ArrowRight size={40} trigger="parent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
