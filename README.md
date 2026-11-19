# Glow with Gladness – Website

React + Vite + Lucide icons. No paid APIs. Deploys to Netlify.

## 1. Run it on your computer

```bash
npm install
npm run dev        # opens http://localhost:5173
npm run build      # creates the /dist folder
```

## 2. Deploy to Netlify

**Option A – GitHub:** upload this folder to GitHub → Netlify → *Add new site → Import from Git*.
Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).

**Option B – Drag & drop:** run `npm run build`, then drag the `dist` folder onto Netlify.

## 3. Add your photos (IMPORTANT)

Photos are not included in this ZIP. Until you add them, each image spot shows an elegant placeholder that names the file it expects.

Put your photos in **`public/images/`** as `.jpg` files with **exactly** these names (portrait 4:5, about 1000×1250px works well; the hero banner should be landscape, about 1920×1080):

| Area | File names (without `.jpg`) |
|---|---|
| Home / About | `hero-banner`, `owner`, `package-combo`, `photography` |
| Hair | `hair-cornrows`, `hair-ghana-weaving`, `hair-stitch-braids`, `hair-knotless`, `hair-box-braids`, `hair-twists`, `hair-natural`, `hair-ponytail`, `hair-custom`, `hair-creative` |
| Makeup | `makeup-professional`, `makeup-bridal`, `makeup-birthday`, `makeup-photoshoot`, `makeup-engagement`, `makeup-occasion`, `makeup-natural`, `makeup-glam` |
| Nails | `nails-manicure`, `nails-pedicure`, `nails-extensions`, `nails-acrylic`, `nails-gel`, `nails-french`, `nails-art`, `nails-custom` |
| Eyebrows | `eyebrow-shaping`, `eyebrow-tinting`, `eyebrow-grooming`, `eyebrow-other` |
| Tattoos | `tattoo-custom`, `tattoo-small`, `tattoo-artistic`, `tattoo-decorative`, `tattoo-other` |
| Fragrances | `frag-body-spray`, `frag-mist`, `frag-perfume`, `frag-women`, `frag-men`, `frag-other` |

The **Gallery** fills itself from these same photos. To use a different file name, change the `image:` value in the matching config file.

## 4. Edit your content (all in `src/config/`)

| File | What you change |
|---|---|
| `site.js` | Phone, WhatsApp number, location, TikTok, hero text, About text, owner name |
| `services.js` | Hair, makeup, nails, eyebrow and tattoo items: names, descriptions and **prices** |
| `products.js` | Fragrance & spray products: add, edit or delete; set prices; hide categories |
| `packages.js` | Packages and special offers |
| `testimonials.js` | Replace placeholders with real customer reviews |

**Adding a price:** change `price: null` to e.g. `price: 150` → shows **GHS 150**. Leave `null` to show "Price on request".

**Adding a product:** copy one line in `products.js`, change `id`, `name`, `description`, `price`, `image`, and set `sample: false`.

## 5. How booking & ordering work

- **Book Now** buttons open one booking form (name, phone, category, service, style option, package, date, time, notes). Submitting opens WhatsApp (+233249726745) with a formatted message marked **AWAITING CONFIRMATION**.
- **Fragrances:** add items to the basket, review the order summary, then send via WhatsApp. Orders are never shown as paid or confirmed.
- Placeholder products, packages, offers and testimonials are labelled as placeholders on the site until you mark them `sample: false`.

## Project structure

```
public/            favicon.svg, images/
src/config/        <- the files you edit
src/components/    Navbar, Footer, BookingModal, CartDrawer, Lightbox, ...
src/pages/         Home, About, ServicePage, Fragrances, Packages, Gallery, Contact
src/styles.css     All styling (colours are CSS variables at the top)
```
