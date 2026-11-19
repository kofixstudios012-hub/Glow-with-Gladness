// ============================================================
//  PACKAGES & OFFERS - edit here. All entries are PLACEHOLDERS.
//  price: null -> "Price on request". Set sample: false once real.
//  group must match an id in `packageGroups`.
// ============================================================

export const packageGroups = [
  { id: "hair", name: "Hairstyling Packages" },
  { id: "makeup", name: "Makeup Packages" },
  { id: "nails", name: "Nail Packages" },
  { id: "eyebrows", name: "Eyebrow Packages" },
  { id: "tattoos", name: "Tattoo Packages" },
  { id: "combo", name: "Beauty Combination Packages" },
];

export const packages = [
  { id: "pkg-hair", group: "hair", name: "Hairstyling Package (sample)", image: "hair-knotless", includes: ["Add the services included here"], price: null, sample: true },
  { id: "pkg-makeup", group: "makeup", name: "Makeup Package (sample)", image: "makeup-bridal", includes: ["Add the services included here"], price: null, sample: true },
  { id: "pkg-nails", group: "nails", name: "Nail Package (sample)", image: "nails-art", includes: ["Add the services included here"], price: null, sample: true },
  { id: "pkg-eyebrows", group: "eyebrows", name: "Eyebrow Package (sample)", image: "eyebrow-shaping", includes: ["Add the services included here"], price: null, sample: true },
  { id: "pkg-tattoos", group: "tattoos", name: "Tattoo Package (sample)", image: "tattoo-custom", includes: ["Add the services included here"], price: null, sample: true },
  { id: "pkg-combo", group: "combo", name: "Beauty Combination Package (sample)", image: "package-combo", includes: ["Add the services included here"], price: null, sample: true },
];

export const offers = [
  {
    id: "offer-1",
    title: "Special offer (sample)",
    text: "Add your current promotion here. This is a placeholder and not a real offer.",
    sample: true,
  },
];
