"use client";

import Lenis from "lenis";
import { useEffect } from "react";

let current: Lenis | null = null;

/** The page's Lenis while it runs, or null where the page scrolls natively. */
export function getLenis() {
  return current;
}

/* Wheel scrolling eased across frames. Touch, keyboard and the scrollbar
   stay native. Left off for anyone who asks for reduced motion. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (new URLSearchParams(window.location.search).get("smooth") === "off") return;

    const lenis = new Lenis({
      autoRaf: true,
      stopInertiaOnNavigate: true,
    });
    current = lenis;
    return () => {
      lenis.destroy();
      current = null;
    };
  }, []);

  return null;
}
