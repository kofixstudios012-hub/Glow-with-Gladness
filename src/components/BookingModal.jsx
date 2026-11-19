import { useEffect, useMemo, useState } from "react";
import { X, CalendarCheck } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { categoryList, categories } from "../config/services.js";
import { packages } from "../config/packages.js";
import { site, whatsappLink } from "../config/site.js";

const empty = {
  name: "", phone: "", category: "", serviceId: "", option: "", packageId: "", date: "", time: "", notes: "",
};

export default function BookingModal() {
  const { booking, closeBooking } = useApp();
  const [f, setF] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // pre-fill whenever the modal opens
  useEffect(() => {
    if (booking.open) {
      const p = booking.prefill || {};
      setF({ ...empty, category: p.category || "", serviceId: p.serviceId || "", packageId: p.packageId || "" });
      setErrors({});
      setSent(false);
    }
  }, [booking.open, booking.prefill]);

  useEffect(() => {
    document.body.style.overflow = booking.open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && closeBooking();
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [booking.open, closeBooking]);

  const services = useMemo(() => (f.category ? categories[f.category]?.items || [] : []), [f.category]);
  const today = new Date().toISOString().split("T")[0];

  if (!booking.open) return null;

  const set = (k) => (e) => {
    const v = e.target.value;
    setF((s) => ({ ...s, [k]: v, ...(k === "category" ? { serviceId: "" } : {}) }));
  };

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!f.name.trim()) err.name = "Please enter your full name";
    if (!/^[+\d][\d\s-]{6,}$/.test(f.phone.trim())) err.phone = "Please enter a valid phone number";
    if (!f.category) err.category = "Please choose a service category";
    if (!f.date) err.date = "Please choose a date";
    if (!f.time) err.time = "Please choose a time";
    setErrors(err);
    if (Object.keys(err).length) return;

    const service = services.find((s) => s.id === f.serviceId);
    const pkg = packages.find((p) => p.id === f.packageId);
    const prettyDate = new Date(f.date + "T00:00:00").toLocaleDateString("en-GB", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
    const lines = [
      `*NEW APPOINTMENT REQUEST - ${site.name}*`,
      `Status: AWAITING CONFIRMATION`,
      ``,
      `Name: ${f.name.trim()}`,
      `Phone: ${f.phone.trim()}`,
      `Service category: ${categories[f.category].title}`,
      `Selected service: ${service ? service.name : "Not specified"}`,
      `Style / beauty option: ${f.option.trim() || "Not specified"}`,
      `Package: ${pkg ? pkg.name : "None"}`,
      `Preferred date: ${prettyDate}`,
      `Preferred time: ${f.time}`,
      `Additional info: ${f.notes.trim() || "None"}`,
      ``,
      `Please confirm if this date and time is available. Thank you!`,
    ];
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && closeBooking()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Book an appointment">
        <button className="modal-close" onClick={closeBooking} aria-label="Close"><X size={22} /></button>
        <div className="modal-head">
          <CalendarCheck size={26} />
          <h3>Book an Appointment</h3>
          <p>{site.bookingNote}</p>
        </div>

        {sent ? (
          <div className="sent">
            <h4>WhatsApp is opening…</h4>
            <p>
              Send the pre-written message in WhatsApp to complete your request. Your appointment is
              <strong> awaiting confirmation</strong> until we reply.
            </p>
            <button className="btn btn-gold" onClick={closeBooking}>Done</button>
            <button className="btn btn-ghost" onClick={() => setSent(false)}>Edit my request</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <div className="form-grid">
              <label className={errors.name ? "err" : ""}>Full Name *
                <input value={f.name} onChange={set("name")} autoComplete="name" placeholder="Your full name" />
                {errors.name && <em>{errors.name}</em>}
              </label>
              <label className={errors.phone ? "err" : ""}>Phone Number *
                <input value={f.phone} onChange={set("phone")} type="tel" autoComplete="tel" placeholder="e.g. 024 000 0000" />
                {errors.phone && <em>{errors.phone}</em>}
              </label>
              <label className={errors.category ? "err" : ""}>Service Category *
                <select value={f.category} onChange={set("category")}>
                  <option value="">Select a category</option>
                  {categoryList.map((c) => <option key={c.key} value={c.key}>{c.title}</option>)}
                </select>
                {errors.category && <em>{errors.category}</em>}
              </label>
              <label>Selected Service
                <select value={f.serviceId} onChange={set("serviceId")} disabled={!f.category}>
                  <option value="">{f.category ? "Select a service" : "Choose a category first"}</option>
                  {services.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </label>
              <label className="full">Hairstyle / Beauty Option
                <input value={f.option} onChange={set("option")} placeholder="e.g. size, length, colour, or inspiration" />
              </label>
              <label className="full">Package (if applicable)
                <select value={f.packageId} onChange={set("packageId")}>
                  <option value="">No package</option>
                  {packages.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </label>
              <label className={errors.date ? "err" : ""}>Preferred Date *
                <input type="date" min={today} value={f.date} onChange={set("date")} />
                {errors.date && <em>{errors.date}</em>}
              </label>
              <label className={errors.time ? "err" : ""}>Preferred Time *
                <input type="time" value={f.time} onChange={set("time")} />
                {errors.time && <em>{errors.time}</em>}
              </label>
              <label className="full">Additional Information
                <textarea rows={3} value={f.notes} onChange={set("notes")} placeholder="Anything else we should know?" />
              </label>
            </div>
            <button type="submit" className="btn btn-gold btn-block">Send Booking Request on WhatsApp</button>
          </form>
        )}
      </div>
    </div>
  );
}
