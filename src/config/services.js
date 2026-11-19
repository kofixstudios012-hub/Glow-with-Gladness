// ============================================================
//  SERVICES - edit names, descriptions and PRICES here.
//  price: null  ->  shows "Price on request"
//  price: 150   ->  shows "GHS 150"
//  image: file name (without .jpg) inside /public/images/
// ============================================================

export const categories = {
  hair: {
    key: "hair",
    path: "hair",
    title: "Hair Styling",
    eyebrow: "Hair Styling",
    intro:
      "Browse our hairstyle categories, open the details of any style you like and book it straight away.",
    cardImage: "hair-knotless",
    cardText: "Braids, weaving, twists, natural and creative styles.",
    bookLabel: "Book This Style",
    items: [
      { id: "cornrows", name: "Cornrows", description: "Neat, sleek cornrows in classic and creative patterns.", image: "hair-cornrows", price: null },
      { id: "ghana-weaving", name: "Ghana Weaving", description: "Beautiful Ghana weaving styles for a bold, elegant look.", image: "hair-ghana-weaving", price: null },
      { id: "stitch-braids", name: "Stitch Braids", description: "Crisp stitch braids with clean, defined parting.", image: "hair-stitch-braids", price: null },
      { id: "knotless-braids", name: "Knotless Braids", description: "Lightweight knotless braids with a natural, flowing finish.", image: "hair-knotless", price: null },
      { id: "box-braids", name: "Box Braids", description: "Timeless box braids in the length and size you prefer.", image: "hair-box-braids", price: null },
      { id: "twists", name: "Twists", description: "Stylish twists for a soft, textured look.", image: "hair-twists", price: null },
      { id: "natural-hairstyles", name: "Natural Hairstyles", description: "Styles that celebrate and care for your natural hair.", image: "hair-natural", price: null },
      { id: "ponytail", name: "Ponytail Hairstyles", description: "Sleek and voluminous ponytail styles for any occasion.", image: "hair-ponytail", price: null },
      { id: "custom-hairstyles", name: "Custom Hairstyles", description: "Bring your inspiration photo and we will create your style.", image: "hair-custom", price: null },
      { id: "creative-hairstyles", name: "Other Creative Hairstyles", description: "Unique and creative looks beyond the everyday.", image: "hair-creative", price: null },
    ],
  },

  makeup: {
    key: "makeup",
    path: "makeup",
    title: "Makeup",
    eyebrow: "Makeup Artistry",
    intro: "From soft and natural to full glam, find the makeup look that fits your moment.",
    cardImage: "makeup-professional",
    cardText: "Bridal, birthday, photoshoot, glam and natural looks.",
    bookLabel: "Book This Look",
    items: [
      { id: "professional-makeup", name: "Professional Makeup", description: "A polished, professional makeup finish.", image: "makeup-professional", price: null },
      { id: "bridal-makeup", name: "Bridal Makeup", description: "A radiant look for your wedding day.", image: "makeup-bridal", price: null },
      { id: "birthday-makeup", name: "Birthday Makeup", description: "Celebrate in a look made to turn heads.", image: "makeup-birthday", price: null },
      { id: "photoshoot-makeup", name: "Photoshoot Makeup", description: "Camera-ready makeup for shoots and portraits.", image: "makeup-photoshoot", price: null },
      { id: "engagement-makeup", name: "Engagement Makeup", description: "A soft, glowing look for your engagement.", image: "makeup-engagement", price: null },
      { id: "special-occasion-makeup", name: "Special Occasion Makeup", description: "Makeup for parties, events and special moments.", image: "makeup-occasion", price: null },
      { id: "natural-makeup", name: "Natural Makeup", description: "A fresh, effortless look that enhances your features.", image: "makeup-natural", price: null },
      { id: "glam-makeup", name: "Glam Makeup", description: "Bold, full-glam makeup with a statement finish.", image: "makeup-glam", price: null },
    ],
  },

  nails: {
    key: "nails",
    path: "nails",
    title: "Nails",
    eyebrow: "Nail Services",
    intro: "Beautiful hands and feet, from classic care to creative custom designs.",
    cardImage: "nails-art",
    cardText: "Manicure, pedicure, acrylics, gel, French tips and nail art.",
    bookLabel: "Book This Service",
    items: [
      { id: "manicure", name: "Manicure", description: "Hand and nail care for a clean, polished finish.", image: "nails-manicure", price: null },
      { id: "pedicure", name: "Pedicure", description: "Foot and nail care for a fresh, neat finish.", image: "nails-pedicure", price: null },
      { id: "nail-extensions", name: "Nail Extensions", description: "Added length and shape for the nails you want.", image: "nails-extensions", price: null },
      { id: "acrylic-nails", name: "Acrylic Nails", description: "Durable acrylic sets in your preferred shape.", image: "nails-acrylic", price: null },
      { id: "gel-nails", name: "Gel Nails", description: "Glossy gel finishes with lasting colour.", image: "nails-gel", price: null },
      { id: "french-tips", name: "French Tips", description: "Classic French tips with a clean, elegant look.", image: "nails-french", price: null },
      { id: "nail-art", name: "Nail Art", description: "Creative nail art, from subtle accents to full designs.", image: "nails-art", price: null },
      { id: "custom-nails", name: "Custom Nail Designs", description: "Share your idea and get a design made for you.", image: "nails-custom", price: null },
    ],
  },

  eyebrows: {
    key: "eyebrows",
    path: "eyebrows",
    title: "Eyebrows",
    eyebrow: "Eyebrow Services",
    intro: "Frame your face with expertly shaped and groomed eyebrows.",
    cardImage: "eyebrow-shaping",
    cardText: "Shaping, tinting, grooming and more.",
    bookLabel: "Book Eyebrows",
    items: [
      { id: "eyebrow-shaping", name: "Eyebrow Shaping", description: "Clean, defined shaping that suits your face.", image: "eyebrow-shaping", price: null },
      { id: "eyebrow-tinting", name: "Eyebrow Tinting", description: "Tinting for fuller-looking, defined brows.", image: "eyebrow-tinting", price: null },
      { id: "eyebrow-grooming", name: "Eyebrow Grooming", description: "Tidy, groomed brows for a neat finish.", image: "eyebrow-grooming", price: null },
      { id: "eyebrow-other", name: "Other Eyebrow Services", description: "Ask us about other eyebrow services available.", image: "eyebrow-other", price: null },
    ],
  },

  tattoos: {
    key: "tattoos",
    path: "tattoos",
    title: "Tattoos",
    eyebrow: "Tattoo Services",
    intro:
      "Explore tattoo inspiration and send us an inquiry. Our team will discuss your idea with you.",
    cardImage: "tattoo-custom",
    cardText: "Custom, small, artistic and decorative designs.",
    bookLabel: "Inquire / Book",
    items: [
      { id: "custom-tattoo", name: "Custom Tattoo Designs", description: "A design created around your idea.", image: "tattoo-custom", price: null },
      { id: "small-tattoos", name: "Small Tattoos", description: "Small, simple designs.", image: "tattoo-small", price: null },
      { id: "artistic-tattoos", name: "Artistic Tattoos", description: "Artistic designs with expressive detail.", image: "tattoo-artistic", price: null },
      { id: "decorative-tattoos", name: "Decorative Tattoos", description: "Decorative designs and patterns.", image: "tattoo-decorative", price: null },
      { id: "other-tattoo", name: "Other Tattoo Services", description: "Ask us about other tattoo services.", image: "tattoo-other", price: null },
    ],
  },
};

export const categoryList = Object.values(categories);
