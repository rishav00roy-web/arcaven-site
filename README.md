# Arcaven Solutions — Marketing Site

Single-page marketing site for **Arcaven Solutions**, a US & UK e-commerce customer experience, back-office and chargeback operations partner. It is a copy of the [whispering-woods-site](https://github.com/rishav00roy-web/whispering-woods-site) codebase and design system, re-written with the copy from the *Arcaven Solutions Website Design & Copy Writing Brief*.

## Architecture (same as whispering-woods-site)

- **Framework**: Next.js 16.3 (Turbopack) with React 19, statically prerendered.
- **Motion**: compositor-only scroll animations with CSS `animation-timeline` (the hero photo zoom, wordmark lift and rising arch), staggered load-in of the wordmark lines.
- **Smooth scroll**: [Lenis](https://github.com/darkroomengineering/lenis), off for `prefers-reduced-motion`.
- **Tone-shifting header**: `IntersectionObserver` swaps the fixed header between dark and light ground.
- **Styling**: plain BEM-style CSS with custom properties, no framework. Palette moved from forest/earth to the brief's navy and trust blue.
- **Typography**: Playfair Display, Cormorant Garamond (script) and Inter via `next/font/google`.

## Sections

1. Tone-shifting header (`components/SiteHeader.tsx`)
2. Hero with 4-slide background carousel and scroll arch (`components/Hero.tsx`)
3. Book-a-call bar with trust line (`components/BookingBar.tsx`)
4. About (`components/Welcome.tsx`)
5. Core services, 4 cards (`components/Stays.tsx`)
6. Why Arcaven, 3 differentiators (`components/Difference.tsx`)
7. Free 3-day trial band (`components/VideoSection.tsx`)
8. Enterprise pedigree with channels slider (`components/SetsInTheCity.tsx`)
9. US & UK coverage marquee (`components/NatureMarquee.tsx`)
10. How it works, 3 steps and founder card (`components/GettingHere.tsx`)
11. FAQ (`components/Testimonials.tsx`)
12. Contact form (`components/Contact.tsx`) and footer (`components/SiteFooter.tsx`)

All copy and image URLs live in `lib/site.ts`. Every "Book a 15-Min Call" button is a `mailto:` link to alimmavani@gmail.com with the subject prefilled. The contact form has no backend: it opens the visitor's email app with the form contents.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.
