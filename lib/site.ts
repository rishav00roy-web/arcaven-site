/* Arcaven Solutions — site-wide data layer.
   Same shape as the whispering-woods-site data layer; copy comes word for
   word from the Arcaven Solutions website brief. */

export const COMPANY = {
  name: "Arcaven Solutions",
  founder: "Alim Mavani",
  email: "alimmavani@gmail.com",
  phone: "+91 9594966557",
  whatsapp: "919594966557",
  region: "Serving US & UK E-Commerce Brands Worldwide",
} as const;

export const SEO = {
  title: "Arcaven Solutions | Dedicated US & UK E-Commerce Customer Support & CX Partner",
  description:
    "Scale your US or UK Shopify brand with dedicated customer support, order management, and chargeback protection. Led by ex-JPMorgan & Citi ops specialists. Start a free 3-day trial.",
};

/* Every "Book a 15-Min Call" button opens an email to Alim. */
export function bookCallHref(extra?: string) {
  const body =
    "Hi Alim,\n\nI'd like to book a 15-minute discovery call.\n\n" +
    (extra ??
      "Brand / website:\nDaily ticket volume:\nHelpdesk tools:\nPreferred times (with time zone):\n") +
    "\nThanks,\n";
  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(
    "Book a 15-Min Call with Arcaven Solutions",
  )}&body=${encodeURIComponent(body)}`;
}
export const BOOK_CALL_HREF = bookCallHref();

const u = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_SLIDES = [
  { src: u("photo-1486406146926-c627a92ad1ab"), alt: "Glass office towers rising into a clear sky" },
  { src: u("photo-1513635269975-59663e0ac1ad"), alt: "London skyline along the Thames" },
  { src: u("photo-1496442226666-8d4d0e62e6e9"), alt: "New York City skyline at dusk" },
  { src: u("photo-1497366216548-37526070297c"), alt: "Bright, modern open-plan office" },
];

export type Service = {
  id: string;
  name: string;
  specs: string;
  description: string;
  hero: { src: string; alt: string };
};

export const SERVICES: Service[] = [
  {
    id: "support",
    name: "Omnichannel Customer Support",
    specs: "Email · Live Chat · Instagram · Facebook",
    description:
      "Fast, friendly, on-brand responses across Email, Live Chat, Instagram DMs, and Facebook Messages. We handle sizing questions, product inquiries, and pre-sale conversions.",
    hero: { src: u("photo-1553877522-43269d4ea984", 1200), alt: "Support team working together at laptops" },
  },
  {
    id: "orders",
    name: "Shopify Order & Back-Office Admin",
    specs: "Tracking · Edits · Returns · Inventory",
    description:
      "Seamless management of order tracking (“Where is my order?”), address edits, cancellations, exchanges, return portals, and inventory updates directly inside your Shopify dashboard.",
    hero: { src: u("photo-1607082348824-0a96f2a4b9da", 1200), alt: "Packed e-commerce orders ready to ship" },
  },
  {
    id: "disputes",
    name: "Chargeback & Billing Dispute Protection",
    specs: "Audits · Prevention · Refund Workflows",
    description:
      "Protect your revenue with enterprise-grade dispute resolution. Drawing on direct US banking and credit card dispute experience, we audit irregular transactions, prevent chargebacks, and manage refund workflows.",
    hero: { src: u("photo-1563013544-824ae1b704d3", 1200), alt: "Card payment being made online" },
  },
  {
    id: "automation",
    name: "AI-Assisted Workflow & FAQ Setup",
    specs: "Templates · Macros · SOP Documentation",
    description:
      "Smart helpdesk templates, automated macro responses, and clean SOP documentation so your support inbox stays at zero—even during Black Friday and peak holiday drops.",
    hero: { src: u("photo-1460925895917-afdab827c52f", 1200), alt: "Laptop showing a performance dashboard" },
  },
];

export type IconName = "badge" | "clock" | "gift";

export const DIFFERENCES: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Tier-1 Enterprise Pedigree",
    description:
      "Led by Alim Mavani, former Team Leader & Transition Coach at JPMorgan Chase and Billing Dispute Specialist at Citi—bringing Fortune 500 SLA discipline to growing e-commerce brands.",
    icon: "badge",
  },
  {
    title: "Full US & UK Business-Hour Coverage",
    description:
      "Real-time shift overlap with London (GMT/BST) and New York (EST) business hours so your customers and team get instant responses.",
    icon: "clock",
  },
  {
    title: "Zero-Risk 3-Day Free Trial",
    description:
      "Test our speed, tone, and accuracy on your live inbox for 3 days completely free before committing to a simple, flat monthly retainer.",
    icon: "gift",
  },
];

export const STEPS = [
  {
    step: "01",
    title: "15-Minute Discovery Call",
    body: "Tell us your daily ticket volume, helpdesk tools (Gorgias, Zendesk, Freshdesk, Gmail, or Shopify), and biggest operational bottlenecks.",
  },
  {
    step: "02",
    title: "3-Day Free Inbox Trial",
    body: "We learn your brand voice, plug into your existing tools, and clear your support backlog at zero cost.",
  },
  {
    step: "03",
    title: "Flat Monthly Retainer",
    body: "Scale smoothly with dedicated part-time or full-time coverage starting at a fraction of a local US/UK hire—no long-term lock-in contracts.",
  },
];

/* Channels slider in the Sets-in-the-City layout. */
export const CHANNELS = [
  { title: "Email & Live Chat", img: u("photo-1551434678-e076c223a692", 1600) },
  { title: "Instagram & Facebook DMs", img: u("photo-1556761175-b413da4baf72", 1600) },
  { title: "Shopify Back-Office", img: u("photo-1600880292203-757bb62b4baf", 1600) },
  { title: "Chargebacks & Disputes", img: u("photo-1542744173-8e7e53415bb0", 1600) },
  { title: "Helpdesk Macros & SOPs", img: u("photo-1557804506-669a67965ba0", 1600) },
];

export const CITY_GALLERY = [
  u("photo-1513635269975-59663e0ac1ad", 800),
  u("photo-1497366811353-6870744d04b2", 800),
  u("photo-1496442226666-8d4d0e62e6e9", 800),
  u("photo-1521737604893-d14cc237f11d", 800),
  u("photo-1477959858617-67f85cf4f1df", 800),
  u("photo-1522071820081-009f0129c71c", 800),
];

/* The brief's nav lists FAQ but gives no FAQ copy, so these answers only
   restate facts from elsewhere in the brief. */
export const FAQ = [
  {
    q: "What does the free 3-day trial include?",
    a: "We work your live inbox for 3 days completely free. We learn your brand voice, plug into your existing tools, and clear your support backlog at zero cost, so you can test our speed, tone, and accuracy before committing.",
  },
  {
    q: "Which helpdesk tools do you work with?",
    a: "Gorgias, Zendesk, Freshdesk, Gmail, and Shopify. We plug into the tools you already use, including order work directly inside your Shopify dashboard.",
  },
  {
    q: "What hours do you cover?",
    a: "Full US and UK business hours, with real-time shift overlap with London (GMT/BST) and New York (EST).",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. After the trial you move to a simple, flat monthly retainer with dedicated part-time or full-time coverage, and no long-term lock-in contracts.",
  },
];

export const TRUST = ["JPMorgan Chase", "Citi", "Three UK", "Shopify Ecosystems"];

export const HOME = {
  about: { src: u("photo-1497366811353-6870744d04b2"), alt: "Calm, modern operations floor" },
  difference: { src: u("photo-1522071820081-009f0129c71c", 1200), alt: "Operations team reviewing work together" },
  wideShot: { src: u("photo-1521737604893-d14cc237f11d", 1600), alt: "Team hands together over a table of laptops" },
  trial: { src: u("photo-1519389950473-47ba0277781c"), alt: "Team working across laptops" },
};

export const NAV_LEFT = [
  { label: "Services", href: "#services" },
  { label: "Why Arcaven", href: "#why" },
  { label: "How It Works", href: "#how" },
];

export const NAV_RIGHT = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT = {
  headline: "Ready to Clear Your Inbox and Reclaim Your Time?",
  sub: "Book a quick 15-minute intro call or request your free 3-day trial below. We reply within 2 business hours.",
  volumes: ["Under 500", "500–2,000", "2,000+"],
  submit: "Claim My Free 3-Day Trial",
};
