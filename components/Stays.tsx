import Icon from "@/components/Icon";
import { type IconName, type Service } from "@/lib/site";

const SERVICE_ICONS: Record<string, IconName> = {
  support: "chat",
  orders: "cart",
  disputes: "shield",
  automation: "spark",
};

/* Services as one hairline list: icon, name, one paragraph each. */
export default function Stays({ stays }: { stays: Service[] }) {
  return (
    <section className="stays" id="services">
      <div className="stays__inner">
        <div className="stays__header">
          <div className="stays__heading-group">
            <h2 className="stays__heading caps">Four jobs we take off your plate</h2>
          </div>
          <a href="#contact" className="text-link">
            Try all four free for 3 days <span aria-hidden="true">→</span>
          </a>
        </div>

        <ul className="stays__list">
          {stays.map((stay) => (
            <li className="stays__row" key={stay.id} data-kubai-trigger>
              <Icon name={SERVICE_ICONS[stay.id] ?? "chat"} className="stays__row-icon" size={32} />
              <h3 className="stays__row-name caps">{stay.name}</h3>
              <p className="stays__row-desc">{stay.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
