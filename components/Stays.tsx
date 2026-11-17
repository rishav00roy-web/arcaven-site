import Icon from "@/components/Icon";
import { BOOK_CALL_HREF, type IconName, type Service } from "@/lib/site";

const SERVICE_ICONS: Record<string, IconName> = {
  support: "chat",
  orders: "cart",
  disputes: "shield",
  automation: "spark",
};

/* The accommodations grid: four cards, each with an image, name, description,
   and a "Discover More" link. Follows the reference's Feature/Houses pattern
   of rendering from a typed data array. */
export default function Stays({ stays }: { stays: Service[] }) {
  return (
    <section className="stays" id="services">
      <div className="stays__inner">
        <div className="stays__header">
          <div className="stays__heading-group">
            <h2 className="stays__heading caps">Everything Your Store Needs to Keep Customers Happy</h2>
          </div>
          <a href="#contact" className="stays__browse label">
            Start Your Free 3-Day Trial
          </a>
        </div>

        <div className="stays__grid">
          {stays.map((stay) => (
            <article className="stays__card" key={stay.id} data-kubai-trigger>
              <Icon name={SERVICE_ICONS[stay.id] ?? "chat"} className="stays__card-icon" size={40} />
              <div className="stays__card-body">
                <h3 className="stays__card-name caps">{stay.name}</h3>
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
