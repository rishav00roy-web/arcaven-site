import Image from "next/image";
import Icon from "@/components/Icon";
import { BOOK_CALL_HREF, DIFFERENCES } from "@/lib/site";

/* "Why Arcaven" — a two-column layout with feature icons,
   matching the original site's ww-difference section. */
export default function Difference({
  photo,
  widePhoto,
}: {
  photo: { src: string; alt: string };
  widePhoto: { src: string; alt: string };
}) {
  return (
    <section className="difference" id="why">
      <div className="difference__inner">
        {/* Left column */}
        <div className="difference__left">
          <div className="difference__image">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              quality={88}
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="difference__text">
            Unlike generic call centers, Arcaven Solutions is led by a senior
            operations specialist with 6+ years of Tier-1 US and UK enterprise
            experience (JPMorgan Chase, Citi Credit Cards, Three UK, and US
            Healthcare IT).
          </p>
          <a href={BOOK_CALL_HREF} className="difference__cta label">
            Book a 15-Min Call
          </a>
        </div>

        {/* Right column */}
        <div className="difference__right">
          <div className="difference__content">
            <h2 className="difference__heading caps">
              Built for Founders Who Want Zero Micromanagement
            </h2>

            <div className="difference__features" role="list">
              {DIFFERENCES.map((d) => (
                <div className="difference__feature" role="listitem" key={d.title} data-kubai-trigger>
                  <Icon name={d.icon} className="difference__feature-icon" />
                  <div className="difference__feature-body">
                    <h3 className="difference__feature-title">{d.title}</h3>
                    <p className="difference__feature-desc">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="difference__wide">
            <Image
              src={widePhoto.src}
              alt={widePhoto.alt}
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              quality={88}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
