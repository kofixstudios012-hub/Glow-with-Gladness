import { useState } from "react";
import { Phone, MessageCircle, MapPin, Music2 } from "lucide-react";
import PageBanner from "../components/PageBanner.jsx";
import { site, telLink, mapsLink, whatsappLink } from "../config/site.js";

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", message: "" });
  const [err, setErr] = useState("");
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.message.trim()) { setErr("Please add your name and message."); return; }
    setErr("");
    const text = [
      `*BUSINESS INQUIRY - ${site.name}*`,
      `Name: ${f.name.trim()}`,
      ...(f.phone.trim() ? [`Phone: ${f.phone.trim()}`] : []),
      ``,
      f.message.trim(),
    ].join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageBanner eyebrow="Contact" title="Get in Touch" text="We would love to hear from you." />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2 className="left">{site.name}</h2>
            <div className="gold-rule left" />
            <ul className="contact-list">
              <li><Phone size={20} /><div><b>Telephone</b><a href={telLink}>{site.phoneDisplay}</a></div></li>
              <li><MessageCircle size={20} /><div><b>WhatsApp</b><a href={whatsappLink("Hello Glow with Gladness!")} target="_blank" rel="noopener noreferrer">{site.phoneDisplay}</a></div></li>
              <li><MapPin size={20} /><div><b>Location</b><span>{site.location}</span><span>Google Maps Plus Code: {site.plusCode}</span></div></li>
              <li><Music2 size={20} /><div><b>TikTok</b><a href={site.tiktok} target="_blank" rel="noopener noreferrer">@glowithgladness</a></div></li>
            </ul>
            <div className="btn-row">
              <a className="btn btn-gold" href={telLink}><Phone size={16} /> Call Now</a>
              <a className="btn btn-whatsapp" href={whatsappLink("Hello Glow with Gladness!")} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp</a>
              <a className="btn btn-ghost" href={site.tiktok} target="_blank" rel="noopener noreferrer"><Music2 size={16} /> TikTok</a>
              <a className="btn btn-ghost" href={mapsLink} target="_blank" rel="noopener noreferrer"><MapPin size={16} /> Google Maps</a>
            </div>
          </div>

          <form className="inquiry" onSubmit={submit} noValidate>
            <h3>Business Inquiry</h3>
            <p className="muted">Send us a message and it opens in WhatsApp.</p>
            <div className="form-grid">
              <label>Your Name *<input value={f.name} onChange={set("name")} autoComplete="name" /></label>
              <label>Phone (optional)<input type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" /></label>
              <label className="full">Message *<textarea rows={5} value={f.message} onChange={set("message")} /></label>
            </div>
            {err && <p className="form-error">{err}</p>}
            <button type="submit" className="btn btn-gold btn-block">Send on WhatsApp</button>
          </form>
        </div>
      </section>
    </>
  );
}
