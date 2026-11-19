import { Check, Gift } from "lucide-react";
import PageBanner from "../components/PageBanner.jsx";
import SmartImage from "../components/SmartImage.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { packages, packageGroups, offers } from "../config/packages.js";
import { formatPrice } from "../config/site.js";
import { useApp } from "../context/AppContext.jsx";

const groupToCategory = { hair: "hair", makeup: "makeup", nails: "nails", eyebrows: "eyebrows", tattoos: "tattoos", combo: "" };

export default function Packages() {
  const { openBooking } = useApp();
  return (
    <>
      <PageBanner eyebrow="Packages" title="Packages & Special Offers" text="Save time and enjoy more with our beauty packages." />

      <section className="section">
        <div className="container">
          {packageGroups.map((g) => {
            const list = packages.filter((p) => p.group === g.id);
            if (!list.length) return null;
            return (
              <div key={g.id} className="pkg-group">
                <h2 className="pkg-title">{g.name}</h2>
                <div className="grid grid-3">
                  {list.map((p, i) => (
                    <Reveal key={p.id} delay={i * 80}>
                      <article className="card pkg">
                        <div className="card-img static"><SmartImage name={p.image} alt={p.name} label={p.name} /></div>
                        <div className="card-body">
                          {p.sample && <em className="badge-sample">Placeholder package</em>}
                          <h3>{p.name}</h3>
                          <ul className="includes">
                            {p.includes.map((x, k) => <li key={k}><Check size={15} /> {x}</li>)}
                          </ul>
                          <span className="price-tag">{formatPrice(p.price)}</span>
                          <button className="btn btn-gold btn-block" onClick={() => openBooking({ category: groupToCategory[g.id], packageId: p.id })}>
                            Book Package
                          </button>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section tint">
        <div className="container narrow">
          <SectionHeader eyebrow="Promotions" title="Special Offers" />
          {offers.map((o) => (
            <div key={o.id} className="offer">
              <Gift size={30} />
              <div>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                {o.sample && <em className="badge-sample">Placeholder, not a real offer</em>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
