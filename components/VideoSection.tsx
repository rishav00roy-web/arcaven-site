import Image from "next/image";
import { HOME } from "@/lib/site";

/* Full-bleed photo band that sells the free trial with one clear button. */
export default function VideoSection() {
  return (
    <section className="ww-video" id="trial" aria-label="Free 3-day trial">
      <div className="ww-video__bg">
        <Image src={HOME.trial.src} alt={HOME.trial.alt} fill sizes="100vw" quality={85} style={{ objectFit: "cover" }} />
      </div>

      <div className="ww-video__overlay" aria-hidden="true" />

      <div className="ww-video__content">
        <h2 className="ww-video__title caps">Three days on your live inbox, free</h2>
        <p className="ww-video__sub">
          Test our speed, tone, and accuracy on your live inbox for 3 days completely free before
          committing to a simple, flat monthly retainer.
        </p>
        <a className="btn btn--primary btn--lg" href="#contact">
          Start your free 3-day trial
        </a>
      </div>
    </section>
  );
}
