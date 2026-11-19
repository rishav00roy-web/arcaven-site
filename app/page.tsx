import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import Welcome from "@/components/Welcome";
import Difference from "@/components/Difference";
import Stays from "@/components/Stays";
import VideoSection from "@/components/VideoSection";
import NatureMarquee from "@/components/NatureMarquee";
import SetsInTheCity from "@/components/SetsInTheCity";
import Testimonials from "@/components/Testimonials";
import GettingHere from "@/components/GettingHere";
import Contact from "@/components/Contact";
import { BOOK_CALL_HREF, COMPANY, FAQ, HOME, SEO, SERVICES } from "@/lib/site";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY.name,
    description: SEO.description,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    founder: { "@type": "Person", name: COMPANY.founder },
    areaServed: ["US", "GB"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. Hero */}
      <Hero
        headline="Your Shopify support inbox, answered in US and UK business hours."
        description="Dedicated customer support and back-office operations for e-commerce brands, at a fraction of local hiring costs."
        primary={{ href: "#contact", label: "Start your free 3-day trial" }}
        secondary={{ href: BOOK_CALL_HREF, label: "Book a 15-min call" }}
      />

      {/* 2. Book-a-call bar + trust line */}
      <BookingBar />

      {/* 3. What the work looks like: an example ticket */}
      <Welcome />

      {/* 4. Core services */}
      <Stays stays={SERVICES} />

      {/* 5. Why Arcaven */}
      <Difference photo={HOME.difference} />

      {/* 6. Free trial band */}
      <VideoSection />

      {/* 7. Pedigree + channels slider */}
      <SetsInTheCity />

      {/* 8. US & UK coverage marquee */}
      <NatureMarquee />

      {/* 9. How it works */}
      <GettingHere />

      {/* 10. FAQ */}
      <Testimonials />

      {/* 11. Contact */}
      <Contact />
    </>
  );
}
