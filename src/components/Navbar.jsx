import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import Logo from "./Logo.jsx";
import { useApp } from "../context/AppContext.jsx";

export const navLinks = [
  { label: "Home", path: "home" },
  { label: "About", path: "about" },
  { label: "Hair Styling", path: "hair" },
  { label: "Makeup", path: "makeup" },
  { label: "Nails", path: "nails" },
  { label: "Tattoos", path: "tattoos" },
  { label: "Fragrances", path: "fragrances" },
  { label: "Packages", path: "packages" },
  { label: "Gallery", path: "gallery" },
  { label: "Contact", path: "contact" },
];

export default function Navbar({ route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openBooking, cartCount, setCartOpen } = useApp();

  useEffect(() => setOpen(false), [route]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className={`nav ${scrolled || route !== "home" ? "nav-solid" : ""}`}>
      <div className="nav-inner">
        <Logo />
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.path} href={`#/${l.path}`} className={route === l.path ? "active" : ""}>
              {l.label}
            </a>
          ))}
          <button className="btn btn-gold nav-book-mobile" onClick={() => { setOpen(false); openBooking(); }}>
            Book Now
          </button>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Open order basket" onClick={() => setCartOpen(true)}>
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
          <button className="btn btn-gold nav-book" onClick={() => openBooking()}>
            Book Now
          </button>
          <button className="icon-btn burger" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
