import Image from "next/image";
import { HOME } from "@/lib/site";

/* The reference's cinematic film band, kept as a full-bleed photo band with
   the round glass button, now pointing at the free trial. */
export default function VideoSection() {
  return (
    <section className="ww-video" id="trial" aria-label="Free 3-day trial">
      <div className="ww-video__bg">
        <Image src={HOME.trial.src} alt={HOME.trial.alt} fill sizes="100vw" quality={85} style={{ objectFit: "cover" }} />
      </div>

      <div className="ww-video__overlay" aria-hidden="true" />

      <div className="ww-video__content">
        <span className="ww-video__label label">ZERO-RISK 3-DAY FREE TRIAL</span>
        <h2 className="ww-video__title caps">Test Us on Your Live Inbox</h2>
        <p className="ww-video__sub">
          Test our speed, tone, and accuracy on your live inbox for 3 days completely free before
          committing to a simple, flat monthly retainer.
        </p>
        <a className="ww-video__play" href="#contact" aria-label="Start your free 3-day trial">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
