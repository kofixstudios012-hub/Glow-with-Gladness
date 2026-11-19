import SmartImage from "../components/SmartImage.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Testimonials from "../components/Testimonials.jsx";
import { useApp } from "../context/AppContext.jsx";
import { site, whatsappLink } from "../config/site.js";
import { categoryList } from "../config/services.js";
import { shopCardImage } from "../config/products.js";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { openBooking } = useApp();

  const featured = [
    ...categoryList.map((c) => ({ key: c.key, title: c.title === "Hair Styling" ? "Hair Styling" : c.title, text: c.cardText, image: c.cardImage, href: `#/${c.path}` })),
    { key: "fragrances", title: "Fragrances & Sprays", text: "Body sprays, mists and perfumes.", image: shopCardImage, href: "#/fragrances" },
  ];

  return (
    <>
      <section className="hero">
        <SmartImage name="hero-banner" alt="Glow with Gladness beauty" className="hero-img" label="Glow with Gladness" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow light">Sakumono · Greater Accra</span>
          <h1>
            {site.hero.headline.map((l, i) => (
              <span key={i} className={i === 2 ? "gold-text" : ""}>{l}</span>
            ))}
          </h1>
          <p>{site.hero.text}</p>
          <div className="btn-row">
            <a href="#services" className="btn btn-gold" onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}>
              EXPLORE OUR SERVICES
            </a>
            <button className="btn btn-light" onClick={() => openBooking()}>BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </section>

      <section className="section welcome">
        <div className="container narrow">
          <SectionHeader eyebrow="Welcome" title={site.welcome.title} text={site.welcome.text} />
          <div className="btn-row center">
            <a className="btn btn-ghost" href="#/about">About Us</a>
            <a className="btn btn-ghost" href={whatsappLink("Hello Glow with Gladness!")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section id="services" className="section tint">
        <div className="container">
          <SectionHeader eyebrow="What We Do" title="Our Services" text="Everything you need to look and feel your best, in one beautiful place." />
          <div className="grid grid-3">
            {featured.map((s, i) => (
              <Reveal key={s.key} delay={(i % 3) * 90}>
                <a href={s.href} className="feature">
                  <SmartImage name={s.image} alt={s.title} label={s.title} />
                  <div className="feature-shade" />
                  <div className="feature-text">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <span className="link-arrow">Explore Service <ArrowRight size={16} /></span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section photo-section">
        <div className="container photo-grid">
          <Reveal className="photo-img-wrap">
            <SmartImage name={site.photography.image} alt="Photography services" className="photo-img" label="Photography" />
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">Capture the Moment</span>
            <h2 className="left">{site.photography.title}</h2>
            <div className="gold-rule left" />
            <p>{site.photography.text}</p>
            <a className="btn btn-ghost" href={site.photography.url} target="_blank" rel="noopener noreferrer">
              {site.photography.buttonLabel}
            </a>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      <section className="cta">
        <div className="container narrow center-text">
          <h2>Ready to glow?</h2>
          <p>Book your appointment in minutes. We will confirm your request on WhatsApp.</p>
          <button className="btn btn-gold" onClick={() => openBooking()}>Book an Appointment</button>
        </div>
      </section>
    </>
  );
}
