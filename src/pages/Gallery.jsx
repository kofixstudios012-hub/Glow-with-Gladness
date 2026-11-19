import { useMemo, useState, useCallback } from "react";
import PageBanner from "../components/PageBanner.jsx";
import SmartImage from "../components/SmartImage.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { categories } from "../config/services.js";
import { products } from "../config/products.js";

const filters = [
  { id: "all", label: "All" },
  { id: "hair", label: "Hair" },
  { id: "makeup", label: "Makeup" },
  { id: "nails", label: "Nails" },
  { id: "eyebrows", label: "Eyebrows" },
  { id: "tattoos", label: "Tattoos" },
  { id: "fragrances", label: "Fragrances" },
];

// Gallery is built automatically from the service and product images,
// so adding a photo to a service also adds it to the gallery.
function buildGallery() {
  const list = [];
  Object.values(categories).forEach((c) =>
    c.items.forEach((i) => list.push({ id: `${c.key}-${i.id}`, cat: c.key, catLabel: c.title, image: i.image, title: i.name }))
  );
  products.forEach((p) =>
    list.push({ id: `frag-${p.id}`, cat: "fragrances", catLabel: "Fragrances", image: p.image, title: p.name })
  );
  // drop duplicates that point to the same photo within the same category
  const seen = new Set();
  return list.filter((i) => { const k = `${i.cat}:${i.image}`; if (seen.has(k)) return false; seen.add(k); return true; });
}

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(null);
  const all = useMemo(buildGallery, []);
  const shown = useMemo(() => (filter === "all" ? all : all.filter((i) => i.cat === filter)), [all, filter]);
  const close = useCallback(() => setIndex(null), []);

  return (
    <>
      <PageBanner eyebrow="Portfolio" title="Beauty Gallery" text="A look at hair, makeup, nails, eyebrows, tattoos and fragrances. Tap any photo to enlarge." />
      <section className="section">
        <div className="container">
          <div className="chips" role="tablist" aria-label="Gallery filters">
            {filters.map((f) => (
              <button key={f.id} className={`chip ${filter === f.id ? "on" : ""}`} onClick={() => setFilter(f.id)}>{f.label}</button>
            ))}
          </div>
          <div className="masonry">
            {shown.map((item, i) => (
              <button key={item.id} className="g-item" onClick={() => setIndex(i)} aria-label={`Enlarge ${item.title}`}>
                <SmartImage name={item.image} alt={item.title} label={item.title} />
                <span className="g-cap">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <Lightbox items={shown} index={index} onClose={close} onChange={setIndex} />
    </>
  );
}
