import Image from "next/image";
import { CITY_GALLERY } from "@/lib/site";

/* Coverage band — the reference's continuous pure-CSS marquee gallery.
   Images are protected with pointer-events-none, wrapped in strict width bounds,
   and animated via pure CSS keyframes. */
export default function NatureMarquee() {
  // Duplicate gallery array to create a seamless infinite loop
  const marqueeItems = [...CITY_GALLERY, ...CITY_GALLERY];

  return (
    <section className="nature-marquee" id="coverage" aria-label="US and UK coverage">
      <div className="nature-marquee__header">
        <div className="nature-marquee__text">
          <span className="nature-marquee__eyebrow label">FULL US & UK BUSINESS-HOUR COVERAGE</span>
          <h2 className="nature-marquee__heading caps">London to New York, Covered.</h2>
          <p className="nature-marquee__desc">
            Real-time shift overlap with London (GMT/BST) and New York (EST) business hours so your customers and team get instant responses.
          </p>
        </div>
        <a href="#booking" className="nature-marquee__cta label">
          Book a 15-Min Call
        </a>
      </div>

      <div className="nature-marquee__track-wrap">
        <div className="nature-marquee__track">
          {marqueeItems.map((imgSrc, idx) => (
            <div className="nature-marquee__item" key={`${imgSrc}-${idx}`}>
              <Image
                src={imgSrc}
                alt=""
                fill
                sizes="340px"
                quality={85}
                className="pointer-events-none"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
