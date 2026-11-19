// ============================================================
//  FRAGRANCES & SPRAYS SHOP - add, edit or delete products here.
//  Every product below is a SAMPLE PLACEHOLDER. Replace the name,
//  description, price and image, then set  sample: false
//  price: null -> shows "Price on request"
//  category must match one of the ids in `productCategories`.
//  To hide a category you do not sell, set  enabled: false
// ============================================================

export const productCategories = [
  { id: "body-sprays", name: "Body Sprays", enabled: true },
  { id: "fragrance-mists", name: "Fragrance Mists", enabled: true },
  { id: "perfumes", name: "Perfume Products", enabled: true },
  { id: "women", name: "Women's Fragrances", enabled: true },
  { id: "men", name: "Men's Fragrances", enabled: true },
  { id: "other", name: "Other Sprays", enabled: true },
];

export const products = [
  { id: "p1", category: "body-sprays", name: "Body Spray (sample)", description: "Sample product. Replace with your real body spray.", price: null, image: "frag-body-spray", sample: true },
  { id: "p2", category: "fragrance-mists", name: "Fragrance Mist (sample)", description: "Sample product. Replace with your real fragrance mist.", price: null, image: "frag-mist", sample: true },
  { id: "p3", category: "perfumes", name: "Perfume (sample)", description: "Sample product. Replace with your real perfume.", price: null, image: "frag-perfume", sample: true },
  { id: "p4", category: "women", name: "Women's Fragrance (sample)", description: "Sample product. Replace with your real women's fragrance.", price: null, image: "frag-women", sample: true },
  { id: "p5", category: "men", name: "Men's Fragrance (sample)", description: "Sample product. Replace with your real men's fragrance.", price: null, image: "frag-men", sample: true },
  { id: "p6", category: "other", name: "Other Spray (sample)", description: "Sample product. Replace with your real spray.", price: null, image: "frag-other", sample: true },
];

export const shopCardImage = "frag-perfume";
