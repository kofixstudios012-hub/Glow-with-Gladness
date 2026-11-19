import { useEffect } from "react";
import { X } from "lucide-react";
import SmartImage from "./SmartImage.jsx";
import { useApp } from "../context/AppContext.jsx";
import { formatPrice, whatsappLink, site } from "../config/site.js";

export default function ItemModal() {
  const { detail, closeDetail, openBooking } = useApp();

  useEffect(() => {
    if (!detail) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && closeDetail();
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [detail, closeDetail]);

  if (!detail) return null;
  const { item, category } = detail;

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && closeDetail()}>
      <div className="modal modal-wide detail" role="dialog" aria-modal="true" aria-label={item.name}>
        <button className="modal-close" onClick={closeDetail} aria-label="Close"><X size={22} /></button>
        <SmartImage name={item.image} alt={item.name} className="detail-img" label={item.name} />
        <div className="detail-body">
          <span className="eyebrow">{category.title}</span>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p className="price">{formatPrice(item.price)}</p>
          <div className="btn-row">
            <button
              className="btn btn-gold"
              onClick={() => { closeDetail(); openBooking({ category: category.key, serviceId: item.id }); }}
            >
              {category.bookLabel}
            </button>
            <a
              className="btn btn-ghost"
              href={whatsappLink(`Hello ${site.name}, I would like to ask about: ${item.name} (${category.title}).`)}
              target="_blank" rel="noopener noreferrer"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
