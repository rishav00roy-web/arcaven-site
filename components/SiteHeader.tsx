"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COMPANY, NAV_LEFT, NAV_RIGHT, BOOK_CALL_HREF } from "@/lib/site";

/* Fixed header that changes tone (light/dark) based on what section is under
   it, using IntersectionObserver — identical pattern to the reference's
   SiteHeader. On dark ground (hero, video), the text turns cream; on light
   ground (paper sections), it turns ink. A CSS transition handles the
   crossfade. */
export default function SiteHeader() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-ground='dark']");
    if (sections.length === 0) return;
    const under = new Set<Element>();
    const band = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio > 0) under.add(entry.target);
          else under.delete(entry.target);
        }
        setDark(under.size > 0);
      },
      { rootMargin: "0px -49.5% -88% -49.5%", threshold: [0, 0.0001] },
    );
    sections.forEach((section) => band.observe(section));
    return () => band.disconnect();
  }, []);

  return (
    <>
      <header className="chrome" data-tone={dark ? "dark" : "light"} data-scrolled={scrolled}>
        {/* Logo / Home link */}
        <a className="chrome__logo" href="#top" aria-label={`${COMPANY.name}, back to top`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="chrome__brand chrome__brand--on-dark" src="/brand/arcaven-logo-white.png" width={1060} height={295} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="chrome__brand chrome__brand--on-light" src="/brand/arcaven-logo.png" width={1060} height={295} alt="" />
        </a>

        {/* Desktop nav — left links */}
        <nav className="chrome__nav chrome__nav--left" aria-label="Primary Left">
          {NAV_LEFT.map((item) => (
            <Link key={item.href} className="chrome__link label" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop nav — right links */}
        <nav className="chrome__nav chrome__nav--right" aria-label="Primary Right">
          {NAV_RIGHT.map((item) => (
            <Link key={item.href} className="chrome__link label" href={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="chrome__cta label" href={BOOK_CALL_HREF}>
            Book a Call
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="chrome__toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu" role="navigation" aria-label="Mobile Navigation">
          <div className="mobile-menu__inner">
            {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
              <Link
                key={item.href}
                className="mobile-menu__link caps"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="mobile-menu__book label"
              href={BOOK_CALL_HREF}
              onClick={() => setMenuOpen(false)}
            >
              Book a 15-Min Call
            </a>
          </div>
        </div>
      )}
    </>
  );
}
