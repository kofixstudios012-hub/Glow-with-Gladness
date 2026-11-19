// ============================================================
//  SITE SETTINGS - edit business details here.
// ============================================================
export const site = {
  name: "Glow with Gladness",
  phoneDisplay: "0249726745",
  phoneTel: "+233249726745",
  whatsappNumber: "233249726745", // international format, no "+"
  location: "Sakumono, Greater Accra, Ghana",
  plusCode: "JWMJ+R3",
  tiktok: "https://www.tiktok.com/@glowithgladness",
  currency: "GHS",

  hero: {
    headline: ["YOUR BEAUTY.", "YOUR CONFIDENCE.", "YOUR GLOW."],
    text: "Discover your beauty, express your personality and experience professional beauty services with Glow with Gladness.",
  },

  welcome: {
    title: "A beauty destination made for you",
    text: "Glow with Gladness is a beauty destination in Sakumono where you can enjoy professional hairstyling, makeup, nails, eyebrows, tattoos and fragrance products, all in one place. Browse our services, choose the look you love and book your appointment in minutes.",
  },

  // Editable About page text (change freely)
  about: {
    intro:
      "Glow with Gladness is a beauty brand based in Sakumono, Greater Accra. We bring together hairstyling, makeup, nails, eyebrows, tattoos and fragrance products so every client can look and feel their best.",
    services:
      "Our services include braiding and hairstyling, professional makeup for every occasion, manicures and pedicures, eyebrow services, tattoo services, and a selection of fragrances and body sprays.",
    values: [
      {
        title: "Commitment to Quality",
        text: "We care about the details, from the products we use to the finish on every look.",
      },
      {
        title: "Creativity",
        text: "From classic styles to custom ideas, we love turning your vision into something beautiful.",
      },
      {
        title: "Customer Satisfaction",
        text: "Your comfort and happiness come first. We want you to leave glowing.",
      },
    ],
    ownerName: "", // add the owner's name when ready, e.g. "Name Surname"
    ownerRole: "", // e.g. "Founder"
  },

  // Secondary service: photography (links to the photography studio website)
  photography: {
    title: "PHOTOGRAPHY SERVICES",
    text: "Beautiful moments deserve to be remembered. Discover professional photography services for your special occasions, portraits, celebrations and unforgettable memories.",
    buttonLabel: "EXPLORE PHOTOGRAPHY",
    url: "https://kofixphotographystudiogh.netlify.app/",
    image: "photography",
  },

  copyright: "© 2026 Glow with Gladness. All Rights Reserved.",
  credit: {
    prefix: "Website Designed & Powered by ",
    name: "Kofix Photography Studio",
    url: "https://kofixphotographystudiogh.netlify.app/",
  },

  bookingNote:
    "Your booking request is sent via WhatsApp and is NOT confirmed until Glow with Gladness replies to confirm.",
};

// ---------- helpers (no need to edit) ----------
export const whatsappLink = (text = "") =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.plusCode} Sakumono, Ghana`
)}`;

export const telLink = `tel:${site.phoneTel}`;

// price may be a number or null. null shows "Price on request".
export const formatPrice = (price) =>
  price === null || price === undefined || price === ""
    ? "Price on request"
    : `GHS ${Number(price).toLocaleString("en-GH", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
