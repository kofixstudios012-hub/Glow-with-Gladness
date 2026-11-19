import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "./SmartImage.jsx";

export default function Lightbox({ items, index, onClose, onChange }) {
  const open = index !== null && index >= 0;
  const count = items.length;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, index, count, onClose, onChange]);

  if (!open || !items[index]) return null;
  const item = items[index];

  return (
    <div className="lightbox" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <button className="lb-btn lb-close" onClick={onClose} aria-label="Close"><X size={26} /></button>
      <button className="lb-btn lb-prev" onClick={() => onChange((index - 1 + count) % count)} aria-label="Previous"><ChevronLeft size={30} /></button>
      <figure>
        <SmartImage name={item.image} alt={item.title} className="lb-img" label={item.title} />
        <figcaption>{item.title} <span>· {item.catLabel}</span></figcaption>
      </figure>
      <button className="lb-btn lb-next" onClick={() => onChange((index + 1) % count)} aria-label="Next"><ChevronRight size={30} /></button>
    </div>
  );
}
