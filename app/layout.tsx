import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { SITE_CONFIG } from "@/config/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bombay Collection – Women's Clothing Store in Jaffar Nagar, Nagpur",
    template: "%s | Bombay Collection, Nagpur",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "ladies wear Nagpur",
    "women's fashion Nagpur",
    "Jaffar Nagar boutique",
    "readymade garments Nagpur",
    "kurtis Nagpur",
    "sarees Nagpur",
    "Bombay Collection Nagpur",
    "women clothing Nagpur",
    "fashion store Jaffar Nagar",
  ],
  authors: [{ name: "Bombay Collection" }],
  creator: "Bombay Collection",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    title: "Bombay Collection – Women's Fashion | Jaffar Nagar, Nagpur",
    description: SITE_CONFIG.description,
    siteName: "Bombay Collection",
    images: [{ url: "/images/hero/og-image.jpg", width: 1200, height: 630, alt: "Bombay Collection Nagpur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombay Collection – Women's Fashion | Nagpur",
    description: SITE_CONFIG.description,
    images: ["/images/hero/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_CONFIG.url },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.pincode,
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "20:00" },
  ],
  sameAs: [SITE_CONFIG.instagram],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Card",
  areaServed: { "@type": "City", name: "Nagpur" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ToastProvider>
      </body>
    </html>
  );
}
