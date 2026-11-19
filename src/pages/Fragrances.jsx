import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import PageBanner from "../components/PageBanner.jsx";
import SmartImage from "../components/SmartImage.jsx";
import Reveal from "../components/Reveal.jsx";
import { products, productCategories } from "../config/products.js";
import { formatPrice } from "../config/site.js";
import { useApp } from "../context/AppContext.jsx";

export default function Fragrances() {
  const [cat, setCat] = useState("all");
  const { addToCart, setCartOpen, cartCount } = useApp();

  const enabled = productCategories.filter((c) => c.enabled);
  const enabledIds = enabled.map((c) => c.id);
  const visible = products.filter((p) => enabledIds.includes(p.category) && (cat === "all" || p.category === cat));

  const order = (p) => { addToCart(p.id, 1); setCartOpen(true); };

  return (
    <>
      <PageBanner
        eyebrow="The Shop"
        title="Fragrances & Sprays"
        text="Browse our fragrances and body sprays, add what you like to your basket and send your order on WhatsApp."
      />
      <section className="section">
        <div className="container">
          <div className="chips" role="tablist" aria-label="Product categories">
            <button className={`chip ${cat === "all" ? "on" : ""}`} onClick={() => setCat("all")}>All</button>
            {enabled.map((c) => (
              <button key={c.id} className={`chip ${cat === c.id ? "on" : ""}`} onClick={() => setCat(c.id)}>{c.name}</button>
            ))}
          </div>

          <div className="grid grid-4">
            {visible.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 70}>
                <article className="card product">
                  <div className="card-img static"><SmartImage name={p.image} alt={p.name} label={p.name} /></div>
                  <div className="card-body">
                    {p.sample && <em className="badge-sample">Sample product</em>}
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <span className="price-tag">{formatPrice(p.price)}</span>
                    <div className="btn-row">
                      <button className="btn btn-gold btn-sm btn-wide" onClick={() => order(p)}>Order on WhatsApp</button>
                      <button className="btn btn-ghost btn-sm" onClick={() => addToCart(p.id, 1)} aria-label={`Add ${p.name} to basket`}>
                        + Add
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          {visible.length === 0 && <p className="center-text muted">No products in this category yet.</p>}
        </div>
      </section>

      {cartCount > 0 && (
        <button className="float-cart" onClick={() => setCartOpen(true)}>
          <ShoppingBag size={18} /> View order ({cartCount})
        </button>
      )}
    </>
  );
}
