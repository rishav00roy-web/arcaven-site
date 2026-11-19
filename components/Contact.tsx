"use client";

import { useEffect, useState } from "react";
import { CircleCheck } from "kubai-icons-react";
import CopyEmail from "@/components/CopyEmail";
import { BOOK_CALL_HREF, COMPANY, CONTACT } from "@/lib/site";

/* Lead form in the booking-bar language: paper card, label-caps fields,
   forest (navy) submit. No backend: it opens the visitor's email app with
   the details filled into a message to Alim. */
export default function Contact() {
  /* idle → opening (spinner while the mail app launches) → sent */
  const [state, setState] = useState<"idle" | "opening" | "sent">("idle");

  useEffect(() => {
    if (state !== "opening") return;
    const t = setTimeout(() => setState("sent"), 1200);
    return () => clearTimeout(t);
  }, [state]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const subject = `Free 3-Day Trial request: ${get("brand") || get("name")}`;
    const body = [
      `Full Name: ${get("name")}`,
      `Work Email: ${get("email")}`,
      `Brand / Website URL: ${get("brand")}`,
      `Monthly Order Volume: ${get("volume")}`,
      "",
      "Message / Biggest Pain Point:",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setState("opening");
  }

  return (
    <section className="aw-contact" id="contact" data-ground="dark" aria-labelledby="contact-title">
      <div className="aw-contact__inner">
        <div className="aw-contact__copy">
          <h2 className="aw-contact__heading caps" id="contact-title">{CONTACT.headline}</h2>
          <p className="aw-contact__sub">{CONTACT.sub}</p>
          <a className="btn btn--ghost-dark" href={BOOK_CALL_HREF}>Book a 15-min call instead</a>
        </div>

        <form className="booking-bar__card aw-contact__form" onSubmit={onSubmit}>
          <div className="aw-contact__row">
            <div className="booking-bar__field">
              <label className="booking-bar__label label" htmlFor="c-name">Full name</label>
              <input id="c-name" name="name" className="booking-bar__input" autoComplete="name" required />
            </div>
            <div className="booking-bar__field">
              <label className="booking-bar__label label" htmlFor="c-email">Work email</label>
              <input id="c-email" name="email" type="email" className="booking-bar__input" autoComplete="email" required />
            </div>
          </div>
          <div className="aw-contact__row">
            <div className="booking-bar__field">
              <label className="booking-bar__label label" htmlFor="c-brand">Store URL</label>
              <input id="c-brand" name="brand" className="booking-bar__input" autoComplete="url" required />
            </div>
            <div className="booking-bar__field">
              <label className="booking-bar__label label" htmlFor="c-volume">Monthly orders</label>
              <select id="c-volume" name="volume" className="booking-bar__select" required defaultValue="">
                <option value="" disabled>Select volume</option>
                {CONTACT.volumes.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="booking-bar__field">
            <label className="booking-bar__label label" htmlFor="c-message">Biggest support headache <span className="booking-bar__optional">(optional)</span></label>
            <textarea id="c-message" name="message" rows={4} className="booking-bar__input aw-contact__textarea" />
          </div>
          <button
            className="btn btn--primary btn--block btn--lg"
            type="submit"
            disabled={state === "opening"}
            aria-busy={state === "opening"}
          >
            {state === "opening" ? (
              <>
                <span className="spinner" aria-hidden="true" />
                Opening your email app…
              </>
            ) : (
              CONTACT.submit
            )}
          </button>
          <div className="aw-contact__note" role="status">
            {state === "sent" ? (
              <p className="aw-contact__sent feedback-in">
                <CircleCheck size={18} trigger="parent" />
                <span>
                  Your email is ready with your details filled in. Press send and Alim replies within 2
                  business hours. Nothing opened? Write to <CopyEmail />.
                </span>
              </p>
            ) : (
              <p>Submitting opens your email app with these details ready to send.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
