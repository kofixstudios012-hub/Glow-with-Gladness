export default function SectionHeader({ eyebrow, title, text, center = true }) {
  return (
    <div className={`section-header ${center ? "center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      <div className="gold-rule" />
      {text && <p>{text}</p>}
    </div>
  );
}
