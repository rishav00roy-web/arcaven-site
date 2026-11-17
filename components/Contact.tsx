"use client";

import { useState } from "react";
import { BOOK_CALL_HREF, COMPANY, CONTACT } from "@/lib/site";

/* Lead form in the booking-bar language: paper card, label-caps fields,
   forest (navy) submit. No backend: it opens the visitor's email app with
   the details filled into a message to Alim. */
export default function Contact() {
  const [sent, setSent] = useState(false);

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
    setSent(true);
  }

  return (
    <section className="aw-contact" id="contact" data-ground="dark" aria-labelledby="contact-title">
      <div className="aw-contact__inner">
        <div className="aw-contact__copy">
          <h2 className="aw-contact__heading caps" id="contact-title">{CONTACT.headline}</h2>
          <p className="aw-contact__sub script">{CONTACT.sub}</p>
          <a className="aw-contact__call label" href={BOOK_CALL_HREF}>Book a 15-Min Call</a>
        </div>

        <form className="booking-bar__card aw-contact__form" onSubmit={onSubmit}>
          <div className="aw-contact__row">
            <div className="booking-bar__field">
              <label className="booking-bar__label label" htmlFor="c-name">Full Name</label>
              <input id="c-name" name="name" className="booking-bar__input" autoComplete="name" required />
            </div>
            <div className="booking-bar__field">
              <label className="booking-bar__label label" htmlFor="c-email">Work Email</label>
              <input id="c-email" name="email" type="email" className="booking-bar__input" autoComplete="email" required />
            </div>
          </div>
          <div className="aw-contact__row">
            <div className="booking-bar__field">
              <label className="booking-bar__label label" htmlFor="c-brand">Brand / Website URL</label>
              <input id="c-brand" name="brand" className="booking-bar__input" autoComplete="url" required />
            </div>
            <div className="booking-bar__field">
              <label className="booking-bar__label label" htmlFor="c-volume">Monthly Order Volume</label>
              <select id="c-volume" name="volume" className="booking-bar__select" required defaultValue="">
                <option value="" disabled>Select volume</option>
                {CONTACT.volumes.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="booking-bar__field">
            <label className="booking-bar__label label" htmlFor="c-message">Message / Biggest Pain Point</label>
            <textarea id="c-message" name="message" rows={4} className="booking-bar__input aw-contact__textarea" />
          </div>
          <button className="booking-bar__submit label" type="submit">{CONTACT.submit}</button>
          <p className="aw-contact__note" role="status">
            {sent
              ? "Your email app should now be open with your details filled in. Just press send."
              : "Submitting opens your email app with these details ready to send."}
          </p>
        </form>
      </div>
    </section>
  );
}
