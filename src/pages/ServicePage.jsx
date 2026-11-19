import PageBanner from "../components/PageBanner.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { categories } from "../config/services.js";
import { useApp } from "../context/AppContext.jsx";

// One template for Hair, Makeup, Nails, Eyebrows and Tattoos.
export default function ServicePage({ categoryKey }) {
  const category = categories[categoryKey];
  const { openBooking } = useApp();
  return (
    <>
      <PageBanner eyebrow={category.eyebrow} title={category.title} text={category.intro} />
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {category.items.map((item, i) => (
              <ServiceCard key={item.id} item={item} category={category} index={i} />
            ))}
          </div>
          <div className="center-text mt">
            <p className="muted">Don't see exactly what you want? Tell us your idea.</p>
            <button className="btn btn-gold" onClick={() => openBooking({ category: category.key })}>
              Book {category.title}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
