import Image from "next/image";

/* One sentence set large and centred, with a background photograph. The
   reference's Statement component adapted for the "About / Welcome" block. */
export default function Welcome({
  eyebrow,
  heading,
  body,
  photo,
  cta,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  photo: { src: string; alt: string };
  cta?: { href: string; label: string };
}) {
  return (
    <section className="welcome" id="about">
      <div className="welcome__bg">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          quality={88}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="welcome__overlay" aria-hidden="true" />
      <div className="welcome__content">
        <span className="welcome__eyebrow label">{eyebrow}</span>
        <h2 className="welcome__heading caps">{heading}</h2>
        <p className="welcome__body">{body}</p>
        {cta && (
          <a className="welcome__cta label" href={cta.href}>
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}
