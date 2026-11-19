import PageBanner from "../components/PageBanner.jsx";
import SmartImage from "../components/SmartImage.jsx";
import Reveal from "../components/Reveal.jsx";
import Testimonials from "../components/Testimonials.jsx";
import { site } from "../config/site.js";
import { categoryList } from "../config/services.js";
import { useApp } from "../context/AppContext.jsx";
import { Gem, Palette, Heart } from "lucide-react";

const icons = [Gem, Palette, Heart];

export default function About() {
  const { openBooking } = useApp();
  const a = site.about;
  return (
    <>
      <PageBanner eyebrow="About Us" title="About Glow with Gladness" text="Beauty, confidence and care in Sakumono." />
      <section className="section">
        <div className="container about-grid">
          <Reveal className="about-photo">
            <SmartImage name="owner" alt="Owner of Glow with Gladness" className="owner-img" label="Owner photo" />
            {(a.ownerName || a.ownerRole) && (
              <p className="owner-cap"><b>{a.ownerName}</b> {a.ownerRole}</p>
            )}
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">Our Story</span>
            <h2 className="left">Welcome to {site.name}</h2>
            <div className="gold-rule left" />
            <p className="lead">{a.intro}</p>
            <p>{a.services}</p>
            <ul className="pill-list">
              {categoryList.map((c) => <li key={c.key}>{c.title}</li>)}
              <li>Fragrances &amp; Sprays</li>
            </ul>
            <button className="btn btn-gold" onClick={() => openBooking()}>Book an Appointment</button>
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="grid grid-3">
            {a.values.map((v, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="value">
                    <Icon size={30} />
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
