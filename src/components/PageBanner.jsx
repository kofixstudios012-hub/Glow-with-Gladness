export default function PageBanner({ eyebrow, title, text }) {
  return (
    <section className="banner">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        <div className="gold-rule" />
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
