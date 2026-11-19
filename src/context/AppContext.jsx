import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { products } from "../config/products.js";

const AppContext = createContext(null);
export const useApp = () => useContext(AppContext);

export function AppProvider({ children }) {
  // ---- booking modal ----
  const [booking, setBooking] = useState({ open: false, prefill: {} });
  const openBooking = useCallback((prefill = {}) => setBooking({ open: true, prefill }), []);
  const closeBooking = useCallback(() => setBooking((b) => ({ ...b, open: false })), []);

  // ---- item details modal ----
  const [detail, setDetail] = useState(null); // { item, category }
  const openDetail = useCallback((item, category) => setDetail({ item, category }), []);
  const closeDetail = useCallback(() => setDetail(null), []);

  // ---- cart ----
  const [cart, setCart] = useState({}); // { productId: qty }
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((id, qty = 1) => {
    setCart((c) => ({ ...c, [id]: Math.min(99, (c[id] || 0) + qty) }));
  }, []);
  const setQty = useCallback((id, qty) => {
    setCart((c) => {
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = Math.min(99, qty);
      return next;
    });
  }, []);
  const clearCart = useCallback(() => setCart({}), []);

  const cartLines = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => ({ product: products.find((p) => p.id === id), qty }))
        .filter((l) => l.product),
    [cart]
  );
  const cartCount = cartLines.reduce((n, l) => n + l.qty, 0);

  const value = {
    booking, openBooking, closeBooking,
    detail, openDetail, closeDetail,
    cart, cartLines, cartCount, cartOpen, setCartOpen, addToCart, setQty, clearCart,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
