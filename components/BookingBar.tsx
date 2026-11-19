"use client";

import { useEffect, useState } from "react";
import CopyEmail from "@/components/CopyEmail";
import { bookCallHref, CONTACT, TRUST } from "@/lib/site";

/* The reference's reservation bar, re-cut as a call-booking bar: pick a few
   details and the button opens an email to Alim with them filled in. */
export default function BookingBar() {
  const [volume, setVolume] = useState(CONTACT.volumes[0]);
  const [tool, setTool] = useState("Gorgias");
  const [slot, setSlot] = useState("US business hours (EST)");
  /* "idle" → "opening" while the mail app launches → "done" with a fallback */
  const [state, setState] = useState<"idle" | "opening" | "done">("idle");

  useEffect(() => {
    if (state !== "opening") return;
    const t = setTimeout(() => setState("done"), 1200);
    return () => clearTimeout(t);
  }, [state]);

  const href = bookCallHref(
    `Monthly order volume: ${volume}\nHelpdesk tools: ${tool}\nPreferred time: ${slot}\nBrand / website:\n`,
  );

  return (
    <section className="booking-bar" id="booking" aria-label="Book a 15-minute call">
      <div className="booking-bar__card relative">
        <div className="booking-bar__header">
          <h2 className="booking-bar__heading caps">Book a 15-min call</h2>
        </div>

        <form className="booking-bar__form" onSubmit={(e) => e.preventDefault()}>
          <div className="booking-bar__field">
            <label className="booking-bar__label label" htmlFor="bb-volume">Monthly orders</label>
            <select id="bb-volume" className="booking-bar__select" value={volume} onChange={(e) => setVolume(e.target.value)}>
              {CONTACT.volumes.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="booking-bar__field">
            <label className="booking-bar__label label" htmlFor="bb-tool">Helpdesk</label>
            <select id="bb-tool" className="booking-bar__select" value={tool} onChange={(e) => setTool(e.target.value)}>
              {["Gorgias", "Zendesk", "Freshdesk", "Gmail", "Shopify"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="booking-bar__field">
            <label className="booking-bar__label label" htmlFor="bb-slot">Best time</label>
            <select id="bb-slot" className="booking-bar__select" value={slot} onChange={(e) => setSlot(e.target.value)}>
              <option>US business hours (EST)</option>
              <option>UK business hours (GMT/BST)</option>
            </select>
          </div>

          <div className="booking-bar__action">
            <a
              href={href}
              className="btn btn--primary booking-bar__go"
              data-state={state}
              aria-busy={state === "opening"}
              onClick={() => setState("opening")}
            >
              {state === "opening" ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Opening your email…
                </>
              ) : (
                "Email Alim these details"
              )}
            </a>
          </div>
        </form>

        <p className="booking-bar__status" role="status">
          {state === "done" && (
            <span className="feedback-in">
              Didn&apos;t open? Write to <CopyEmail /> and we&apos;ll reply within 2 business hours.
            </span>
          )}
        </p>

        <div className="booking-bar__footnote">
          <span>Operations leadership at</span>
          {TRUST.map((t) => (
            <strong key={t}>{t}</strong>
          ))}
        </div>
      </div>
    </section>
  );
}
