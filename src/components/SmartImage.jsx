import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

// Shows /images/<name>.jpg. If the photo has not been added yet,
// an elegant branded placeholder is shown (never a broken image).
export default function SmartImage({ name, alt = "", className = "", label }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [name]);

  if (failed) {
    return (
      <div className={`ph ${className}`} role="img" aria-label={alt}>
        <Sparkles size={26} />
        <span>{label || alt}</span>
        <small>Add photo: public/images/{name}.jpg</small>
      </div>
    );
  }
  return (
    <img
      src={`/images/${name}.jpg`}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
