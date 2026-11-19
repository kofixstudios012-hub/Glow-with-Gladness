import SmartImage from "./SmartImage.jsx";
import Reveal from "./Reveal.jsx";
import { useApp } from "../context/AppContext.jsx";
import { formatPrice } from "../config/site.js";

// Image card used on every service page: photo, name, description,
// View Details + Book button.
export default function ServiceCard({ item, category, index = 0 }) {
  const { openBooking, openDetail } = useApp();
  return (
    <Reveal delay={(index % 4) * 70}>
      <article className="card">
        <button className="card-img" onClick={() => openDetail(item, category)} aria-label={`View details: ${item.name}`}>
          <SmartImage name={item.image} alt={item.name} label={item.name} />
        </button>
        <div className="card-body">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span className="price-tag">{formatPrice(item.price)}</span>
          <div className="btn-row">
            <button className="btn btn-ghost btn-sm" onClick={() => openDetail(item, category)}>View Details</button>
            <button className="btn btn-gold btn-sm" onClick={() => openBooking({ category: category.key, serviceId: item.id })}>
              {category.bookLabel}
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
