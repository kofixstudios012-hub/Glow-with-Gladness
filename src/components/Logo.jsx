export default function Logo({ light = false }) {
  return (
    <a href="#/home" className={`logo ${light ? "logo-light" : ""}`} aria-label="Glow with Gladness home">
      <span className="logo-script">Glow</span>
      <span className="logo-sub">with Gladness</span>
    </a>
  );
}
