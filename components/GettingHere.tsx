import { BOOK_CALL_HREF, COMPANY, STEPS } from "@/lib/site";

/* "How It Works" in the reference's Getting Here layout: copy on the left
   with three step cards, and the dark founder card on the right. */
export default function GettingHere() {
  return (
    <section className="ww-getting-here" id="how" aria-label="How it works">
      <div className="ww-getting-here__inner">
        <div className="ww-getting-here__content">
          <span className="ww-getting-here__eyebrow label">HOW IT WORKS</span>
          <h2 className="ww-getting-here__heading caps">Simple 3-Step Onboarding Process</h2>
          <p className="ww-getting-here__description">
            Book a quick 15-minute intro call or request your free 3-day trial. We reply within 2
            business hours.
          </p>

          <div className="ww-getting-here__distances ww-getting-here__distances--steps">
            {STEPS.map((s) => (
              <div className="ww-getting-here__distance-card" key={s.step}>
                <span className="ww-getting-here__time caps">{s.step}</span>
                <span className="ww-getting-here__label label">{s.title}</span>
                <span className="ww-getting-here__note">{s.body}</span>
              </div>
            ))}
          </div>

          <div className="ww-getting-here__address-box">
            <h4 className="ww-getting-here__subheading label">Tools We Plug Into</h4>
            <p className="ww-getting-here__address">Gorgias · Zendesk · Freshdesk · Gmail · Shopify</p>
          </div>

          <div className="ww-getting-here__refund">
            <h4 className="ww-getting-here__subheading label">No Long-Term Lock-In</h4>
            <p className="ww-getting-here__refund-text">
              Scale smoothly with dedicated part-time or full-time coverage starting at a fraction of
              a local US/UK hire—no long-term lock-in contracts.
            </p>
          </div>
        </div>

        <div className="ww-getting-here__map-wrap">
          <div className="ww-getting-here__map-card">
            <span className="ww-getting-here__map-badge label">FOUNDER-LED</span>
            <h3 className="ww-getting-here__map-title caps">{COMPANY.founder}</h3>
            <p className="ww-getting-here__map-sub">
              Former Team Leader &amp; Transition Coach at JPMorgan Chase and Billing Dispute
              Specialist at Citi.
            </p>
            <div className="ww-getting-here__map-coords">
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp {COMPANY.phone}
              </a>
            </div>
            <a href={BOOK_CALL_HREF} className="ww-getting-here__map-btn label">
              Book a 15-Min Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
