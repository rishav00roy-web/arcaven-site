import Icon from "@/components/Icon";

/* Shows the actual work instead of a stock photo: an example "where is my
   order?" ticket as it would look once Arcaven has handled it in your
   helpdesk. Every detail is illustrative and labelled as such. */
export default function Welcome() {
  return (
    <section className="welcome" id="about" aria-labelledby="welcome-title">
      <div className="welcome__inner">
        <div className="welcome__copy">
          <h2 className="welcome__heading caps" id="welcome-title">
            Your CX and <span className="nowrap">back-office</span>, handled.
          </h2>
          <p className="welcome__body">
            Stop losing hours to repetitive order tickets, DMs and refund disputes. Arcaven gives US
            and UK e-commerce founders reliable, business-hour customer experience and back-office
            support, backed by 6+ years of Tier-1 banking and telecom operations leadership.
          </p>
          <ul className="welcome__facts">
            <li>
              <span className="welcome__fact-value tabular">2 hrs</span>
              <span className="welcome__fact-label">Reply time on new enquiries, in business hours</span>
            </li>
            <li>
              <span className="welcome__fact-value tabular">3 days</span>
              <span className="welcome__fact-label">Free trial on your live inbox</span>
            </li>
          </ul>
        </div>

        <figure className="welcome__product">
          <div className="ticket">
          <div className="ticket__bar">
            <span className="ticket__inbox">
              <Icon name="inbox" size={18} />
              Support inbox
            </span>
            <span className="ticket__status">
              <span className="ticket__dot" aria-hidden="true" />
              Resolved
            </span>
          </div>

          <div className="ticket__body">
            <p className="ticket__subject">Order #1042 says delivered, but it isn&apos;t here</p>

            <div className="ticket__msg ticket__msg--customer">
              <div className="ticket__meta">
                <strong>Sarah K.</strong>
                <span>Instagram DM</span>
                <time className="tabular">9:14 AM ET</time>
              </div>
              <p>
                Hi, tracking says my order was delivered yesterday but there&apos;s nothing at my door.
                Can you help?
              </p>
            </div>

            <div className="ticket__msg ticket__msg--agent">
              <div className="ticket__meta">
                <strong>Your brand, via Arcaven</strong>
                <time className="tabular">9:18 AM ET</time>
              </div>
              <p>
                So sorry, Sarah. The carrier logged it at your side door at 2:41 PM. I&apos;ve opened a
                trace, and if it hasn&apos;t turned up by tomorrow we&apos;ll ship a replacement at no
                cost.
              </p>
            </div>
          </div>

          <dl className="ticket__stats">
            <div>
              <dt>First reply</dt>
              <dd className="tabular">4 min</dd>
            </div>
            <div>
              <dt>Shopify</dt>
              <dd>Trace opened</dd>
            </div>
            <div>
              <dt>Tag</dt>
              <dd>WISMO</dd>
            </div>
          </dl>
          </div>
          <figcaption className="ticket__caption">
            Example ticket. Names, times and order details are illustrative.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
