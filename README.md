# Bombay Collection – Women's Fashion Store Website

A production-ready Next.js marketing website for **Bombay Collection**, a women's clothing retail store in Jaffar Nagar, Nagpur, Maharashtra.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
bombay-collection/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home page
│   ├── layout.tsx              # Root layout (fonts, metadata, JSON-LD)
│   ├── globals.css             # Global styles + design tokens
│   ├── shop/page.tsx           # Shop/Catalog with filters
│   ├── product/[id]/page.tsx   # Dynamic product detail pages
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Visit Us / Contact page
│   ├── policies/page.tsx       # Shipping, Returns, Privacy, Terms
│   └── not-found.tsx           # Branded 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky responsive navbar
│   │   └── Footer.tsx          # Full footer with sitemap
│   ├── sections/
│   │   ├── Hero.tsx            # Homepage hero with floating cards
│   │   ├── FeaturedCategories.tsx
│   │   ├── ProductGrid.tsx     # Reusable product grid section
│   │   ├── WhyUs.tsx           # Benefits/features section
│   │   ├── FestiveCollection.tsx
│   │   ├── Testimonials.tsx    # 6 customer testimonials
│   │   ├── FAQ.tsx             # Accordion FAQ
│   │   ├── CallbackForm.tsx    # Lead capture form
│   │   ├── StoreLocation.tsx   # Map + store details
│   │   ├── InstagramGrid.tsx   # Instagram Reels placeholder
│   │   └── WhatsAppCatalog.tsx
│   ├── product/
│   │   ├── ProductCard.tsx     # Product grid card
│   │   └── ProductDetail.tsx   # Full product detail view
│   └── ui/
│       ├── WhatsAppFloat.tsx   # Floating WhatsApp button
│       └── ToastProvider.tsx   # Toast notification system
├── config/
│   └── site.ts                 # ← EDIT THIS: phone, address, etc.
├── data/
│   └── products.json           # ← EDIT THIS: all 36 products
├── lib/
│   ├── products.ts             # Product query helpers
│   └── utils.ts                # formatPrice, cn(), etc.
├── types/
│   └── product.ts              # TypeScript interfaces
└── public/
    └── images/
        ├── products/           # Product placeholder images
        └── hero/               # Hero/OG images
```

## ⚙️ Configuration

### 1. Update Business Details

Edit `config/site.ts`:
- `whatsappNumber`: Replace `919XXXXXXXXX` with your actual number (country code + number, no spaces)
- `phone`: Display phone number
- `email`: Your email address
- `address`: Your store address
- `hours`: Store opening hours

### 2. Update Products

Edit `data/products.json`. Each product has:
- `id`, `name`, `category`, `price`, `mrp`, `sizes`, `colors`
- `images[]`: paths relative to `/public`
- `isNewArrival`, `isBestSeller`
- `description`, `fabric`, `care`, `sku`

### 3. Add Real Product Photos

Place product images in `public/images/products/` named matching the `images` field in products.json (e.g., `kur-001.jpg`).

### 4. Connect Callback Form to Email

In `components/sections/CallbackForm.tsx`, the form saves data in-memory. To send emails, replace the mock with:

```typescript
// Using a service like Resend, EmailJS, or a Next.js API route:
const res = await fetch('/api/callback', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
});
```

Create `app/api/callback/route.ts` with your email sending logic.

## 🎨 Design System

- **Colors**: Deep maroon (`#8B1A2E`), warm beige (`#f8f0e0`), gold (`#C4954A`), charcoal (`#2C2C2C`)
- **Fonts**: Playfair Display (headings) + Poppins (body)
- **Components**: `.btn-primary`, `.btn-secondary`, `.btn-whatsapp`, `.section-title`, `.input-field`

## 📱 Features

- ✅ Fully responsive (mobile-first)
- ✅ WhatsApp deep links with pre-filled messages
- ✅ Local SEO for Nagpur / Jaffar Nagar
- ✅ JSON-LD Schema (LocalBusiness / ClothingStore)
- ✅ OpenGraph + Twitter cards
- ✅ Floating WhatsApp button
- ✅ Product filtering (category, size, price range)
- ✅ Lead capture form with toast feedback
- ✅ FAQ accordion
- ✅ 6 testimonials
- ✅ Instagram grid placeholder
- ✅ Festive collection promo section
- ✅ 404 branded page
