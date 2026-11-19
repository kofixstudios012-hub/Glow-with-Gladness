import { useEffect, useState } from "react";

const read = () => (window.location.hash.replace(/^#\/?/, "") || "home").split("?")[0];

export function useHashRoute() {
  const [route, setRoute] = useState(read());
  useEffect(() => {
    const onChange = () => {
      setRoute(read());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}
