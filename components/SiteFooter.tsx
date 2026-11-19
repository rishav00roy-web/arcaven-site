import { BOOK_CALL_HREF, COMPANY, NAV_LEFT, NAV_RIGHT } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="ww-footer" id="ww-footer" role="contentinfo" data-ground="dark">
      <div className="ww-footer__top">
        <div className="ww-footer__col ww-footer__col--brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ww-footer__brand" src="/brand/arcaven-logo-white.png" width={1060} height={295} alt="Arcaven Solutions" />
          <p className="ww-footer__address">
            Customer experience, back-office and chargeback operations for US and UK e-commerce brands.
          </p>
        </div>

        <div className="ww-footer__col">
          <span className="ww-footer__col-label label">Contact</span>
          <ul className="ww-footer__contact-list">
            <li>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li>
              <a className="tabular" href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={BOOK_CALL_HREF} className="text-link text-link--dark">Book a 15-min call</a>
            </li>
          </ul>
        </div>

        <div className="ww-footer__col">
          <span className="ww-footer__col-label label">On this page</span>
          <ul className="ww-footer__social-list">
            {[...NAV_LEFT, ...NAV_RIGHT].map((n) => (
              <li key={n.href}>
                <a href={n.href} className="ww-footer__social-link label">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ww-footer__bottom">
        <p className="ww-footer__copyright tabular">© 2026 {COMPANY.name}</p>
      </div>
    </footer>
  );
}
