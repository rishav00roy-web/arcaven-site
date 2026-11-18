"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

let current: Lenis | null = null;

/** The page's Lenis while it runs, or null where the page scrolls natively. */
export function getLenis() {
  return current;
}

/* Wheel scrolling eased across frames by Lenis, driven from GSAP's ticker so
   Lenis and every ScrollTrigger read the same scroll position on the same
   frame. Touch, keyboard and the scrollbar stay native. Left off for anyone
   who asks for reduced motion. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (new URLSearchParams(window.location.search).get("smooth") === "off") return;

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.1,
      stopInertiaOnNavigate: true,
    });
    current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      current = null;
    };
  }, []);

  return null;
}
