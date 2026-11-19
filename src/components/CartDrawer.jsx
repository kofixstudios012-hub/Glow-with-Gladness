import { useState } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { formatPrice, whatsappLink, site } from "../config/site.js";

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cartLines, setQty, clearCart } = useApp();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  if (!cartOpen) return null;

  const allPriced = cartLines.length > 0 && cartLines.every((l) => l.product.price !== null && l.product.price !== undefined);
  const total = cartLines.reduce((n, l) => n + (Number(l.product.price) || 0) * l.qty, 0);

  const send = () => {
    const lines = [
      `*NEW ORDER REQUEST - ${site.name}*`,
      `Status: AWAITING CONFIRMATION (not paid, not confirmed)`,
      ``,
      ...(name.trim() ? [`Name: ${name.trim()}`] : []),
      ...(phone.trim() ? [`Phone: ${phone.trim()}`] : []),
      ``,
      `*Items*`,
      ...cartLines.map(
        (l, i) => `${i + 1}. ${l.product.name} x ${l.qty} - ${formatPrice(l.product.price)}${l.product.price ? " each" : ""}`
      ),
      ``,
      allPriced ? `Estimated total: ${formatPrice(total)}` : `Total: to be confirmed by Glow with Gladness`,
      ...(note.trim() ? [``, `Note: ${note.trim()}`] : []),
      ``,
      `Please confirm availability, final price and delivery/pickup. Thank you!`,
    ];
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="drawer-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setCartOpen(false)}>
      <aside className="drawer" aria-label="Order summary">
        <div className="drawer-head">
          <h3><ShoppingBag size={20} /> Your Order</h3>
          <button className="icon-btn" onClick={() => setCartOpen(false)} aria-label="Close"><X size={22} /></button>
        </div>

        {cartLines.length === 0 ? (
          <div className="drawer-empty">
            <p>Your basket is empty.</p>
            <a className="btn btn-gold" href="#/fragrances" onClick={() => setCartOpen(false)}>Browse Fragrances &amp; Sprays</a>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cartLines.map(({ product, qty }) => (
                <li key={product.id}>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{formatPrice(product.price)}</span>
                  </div>
                  <div className="qty">
                    <button onClick={() => setQty(product.id, qty - 1)} aria-label="Decrease"><Minus size={14} /></button>
                    <b>{qty}</b>
                    <button onClick={() => setQty(product.id, qty + 1)} aria-label="Increase"><Plus size={14} /></button>
                    <button className="trash" onClick={() => setQty(product.id, 0)} aria-label="Remove"><Trash2 size={15} /></button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-total">
              <span>Estimated total</span>
              <b>{allPriced ? formatPrice(total) : "To be confirmed"}</b>
            </div>

            <div className="form-grid cart-form">
              <label>Your name (optional)<input value={name} onChange={(e) => setName(e.target.value)} /></label>
              <label>Phone (optional)<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
              <label className="full">Note (optional)<textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} /></label>
            </div>

            <p className="fine">
              This sends your order request on WhatsApp. It is not paid or confirmed until Glow with Gladness replies.
            </p>
            <button className="btn btn-gold btn-block" onClick={send}>Send Order on WhatsApp</button>
            <button className="btn btn-ghost btn-block" onClick={clearCart}>Clear basket</button>
          </>
        )}
      </aside>
    </div>
  );
}
