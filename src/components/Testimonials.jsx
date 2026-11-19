import { Quote } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import { testimonials } from "../config/testimonials.js";

export default function Testimonials() {
  return (
    <section className="section tint">
      <div className="container">
        <SectionHeader eyebrow="Kind Words" title="What Our Clients Say" />
        <div className="grid grid-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <figure className="testimonial">
                <Quote size={26} />
                <blockquote>{t.text}</blockquote>
                <figcaption>
                  <b>{t.author}</b>
                  <span>{t.service}</span>
                </figcaption>
                {t.sample && <em className="badge-sample">Placeholder, not a real review</em>}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
