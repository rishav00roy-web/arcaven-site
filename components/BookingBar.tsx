"use client";

import { useState } from "react";
import { bookCallHref, CONTACT, TRUST } from "@/lib/site";

/* The reference's reservation bar, re-cut as a call-booking bar: pick a few
   details and the button opens an email to Alim with them filled in. */
export default function BookingBar() {
  const [volume, setVolume] = useState(CONTACT.volumes[0]);
  const [tool, setTool] = useState("Gorgias");
  const [slot, setSlot] = useState("US business hours (EST)");

  const href = bookCallHref(
    `Monthly order volume: ${volume}\nHelpdesk tools: ${tool}\nPreferred time: ${slot}\nBrand / website:\n`,
  );

  return (
    <section className="booking-bar" id="booking" aria-label="Book a 15-minute call">
      <div className="booking-bar__card relative">
        <div className="booking-bar__header">
          <span className="booking-bar__eyebrow label">DIRECT LINE TO THE FOUNDER</span>
          <h2 className="booking-bar__heading caps">Book a 15-Min Call</h2>
        </div>

        <form className="booking-bar__form" onSubmit={(e) => e.preventDefault()}>
          <div className="booking-bar__field">
            <label className="booking-bar__label label" htmlFor="bb-volume">Monthly Order Volume</label>
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
            <label className="booking-bar__label label" htmlFor="bb-slot">Best Time</label>
            <select id="bb-slot" className="booking-bar__select" value={slot} onChange={(e) => setSlot(e.target.value)}>
              <option>US business hours (EST)</option>
              <option>UK business hours (GMT/BST)</option>
            </select>
          </div>

          <div className="booking-bar__action">
            <a href={href} className="booking-bar__submit label">
              Book a 15-Min Call
            </a>
          </div>
        </form>

        <div className="booking-bar__footnote">
          <span>Leadership Experience Across Global Operations:</span>
          {TRUST.map((t, i) => (
            <span key={t}>
              {i > 0 && <span aria-hidden="true">·&nbsp;&nbsp;</span>}
              <strong>{t}</strong>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
