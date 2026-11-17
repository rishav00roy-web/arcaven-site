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
import { COMPANY, FAQ, HOME, SEO, SERVICES } from "@/lib/site";

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

      {/* 1. Hero with multi-slide background & scroll arch */}
      <Hero
        lines={["ARCAVEN", "SOLUTIONS"]}
        headline="Dedicated Customer Support & Operations That Scale Your Brand At a Fraction of Local Hiring Costs."
        description="Stop losing hours to repetitive order tickets, DMs, and refund disputes."
        cta={{ href: "#contact", label: "Start Free Trial" }}
      />

      {/* 2. Book-a-call bar + trust line */}
      <BookingBar />

      {/* 3. About / positioning */}
      <Welcome
        heading="Your CX & Back-Office, Handled."
        body="Stop losing hours to repetitive order tickets, DMs, and refund disputes. Arcaven Solutions gives US and UK e-commerce founders reliable, business-hour customer experience and back-office support—backed by 6+ years of Tier-1 banking and telecom operations leadership."
        photo={HOME.about}
        cta={{ href: "#services", label: "Explore Services" }}
      />

      {/* 4. Core services */}
      <Stays stays={SERVICES} />

      {/* 5. Why Arcaven */}
      <Difference photo={HOME.difference} widePhoto={HOME.wideShot} />

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
