import { Phone, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo.jsx";
import { navLinks } from "./Navbar.jsx";
import { site, telLink, mapsLink, whatsappLink } from "../config/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-text">
            Hairstyling, makeup, nails, eyebrows, tattoos and fragrances in {site.location}.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.path}><a href={`#/${l.path}`}>{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li><Phone size={16} /> <a href={telLink}>{site.phoneDisplay}</a></li>
            <li><MessageCircle size={16} /> <a href={whatsappLink("Hello Glow with Gladness!")} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><MapPin size={16} /> <a href={mapsLink} target="_blank" rel="noopener noreferrer">{site.location} ({site.plusCode})</a></li>
            <li><a href={site.tiktok} target="_blank" rel="noopener noreferrer">TikTok: @glowithgladness</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">{site.copyright}</p>
        <p className="credit">
          {site.credit.prefix}
          <a href={site.credit.url} target="_blank" rel="noopener noreferrer">{site.credit.name}</a>.
        </p>
      </div>
    </footer>
  );
}
