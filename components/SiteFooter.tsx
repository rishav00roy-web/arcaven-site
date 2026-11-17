import { BOOK_CALL_HREF, COMPANY, NAV_LEFT, NAV_RIGHT } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="ww-footer" id="ww-footer" role="contentinfo" data-ground="dark">
      <div className="ww-footer__top">
        <div className="ww-footer__col">
          <span className="ww-footer__col-label label">Arcaven Solutions</span>
          <address className="ww-footer__address">
            US &amp; UK E-Commerce Customer Experience,<br />
            Back-Office &amp; Chargeback Operations Partner.<br />
            {COMPANY.region}.
          </address>
          <a href={BOOK_CALL_HREF} className="ww-footer__map-link label">Book a 15-Min Call</a>
        </div>

        <div className="ww-footer__col">
          <span className="ww-footer__col-label label">Phone / WhatsApp</span>
          <ul className="ww-footer__contact-list">
            <li>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">{COMPANY.phone}</a>
            </li>
          </ul>
        </div>

        <div className="ww-footer__col">
          <span className="ww-footer__col-label label">Email</span>
          <ul className="ww-footer__contact-list">
            <li>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
          </ul>
        </div>

        <div className="ww-footer__col">
          <span className="ww-footer__col-label label">Explore</span>
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
        <p className="ww-footer__copyright">© 2026 {COMPANY.name}</p>
        <p className="ww-footer__credit label">{COMPANY.region}</p>
      </div>
    </footer>
  );
}
