import Image from "next/image";
import Icon from "@/components/Icon";
import { DIFFERENCES } from "@/lib/site";

/* "Why Arcaven" — a two-column layout with feature icons,
   matching the original site's ww-difference section. */
export default function Difference({
  photo,
}: {
  photo: { src: string; alt: string };
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
        </div>

        {/* Right column */}
        <div className="difference__right">
          <div className="difference__content">
            <h2 className="difference__heading caps">
              Built for founders who don&apos;t want to micromanage support
            </h2>

            <div className="difference__features" role="list">
              {DIFFERENCES.map((d) => (
                <div className="difference__feature" role="listitem" key={d.title} data-kubai-trigger>
                  <Icon name={d.icon} className="difference__feature-icon" size={32} />
                  <div className="difference__feature-body">
                    <h3 className="difference__feature-title">{d.title}</h3>
                    <p className="difference__feature-desc">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
