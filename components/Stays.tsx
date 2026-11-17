import Image from "next/image";
import { BOOK_CALL_HREF, type Service } from "@/lib/site";

/* The accommodations grid: four cards, each with an image, name, description,
   and a "Discover More" link. Follows the reference's Feature/Houses pattern
   of rendering from a typed data array. */
export default function Stays({ stays }: { stays: Service[] }) {
  return (
    <section className="stays" id="services">
      <div className="stays__inner">
        <div className="stays__header">
          <div className="stays__heading-group">
            <span className="stays__eyebrow label">Core Services</span>
            <h2 className="stays__heading caps">Everything Your Store Needs to Keep Customers Happy</h2>
          </div>
          <a href="#contact" className="stays__browse label">
            Start Your Free 3-Day Trial
          </a>
        </div>

        <div className="stays__grid">
          {stays.map((stay) => (
            <article className="stays__card" key={stay.id}>
              <div className="stays__card-image">
                <Image
                  src={stay.hero.src}
                  alt={stay.hero.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={88}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="stays__card-body">
                <h3 className="stays__card-name caps">{stay.name}</h3>
                <p className="stays__card-specs label">{stay.specs}</p>
                <p className="stays__card-desc">{stay.description}</p>
                <a href={BOOK_CALL_HREF} className="stays__card-link label">
                  Book a 15-Min Call
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
