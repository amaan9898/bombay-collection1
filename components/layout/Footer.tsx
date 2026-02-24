import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-charcoal-500 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-maroon-500 flex items-center justify-center">
                <span className="text-white font-display font-bold">BC</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl">Bombay Collection</div>
                <div className="text-xs tracking-widest text-beige-300 uppercase">Nagpur</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {SITE_CONFIG.tagline} Your trusted women&apos;s fashion destination in Jaffar Nagar, Nagpur.
            </p>
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-beige-300 hover:text-white transition-colors text-sm"
            >
              <Instagram size={18} />
              @bombaycollection.nagpur
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-beige-200">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop All" },
                { href: "/shop?category=Kurtis", label: "Kurtis" },
                { href: "/shop?category=Sarees", label: "Sarees" },
                { href: "/shop?isNewArrival=true", label: "New Arrivals" },
                { href: "/shop?isBestSeller=true", label: "Best Sellers" },
                { href: "/about", label: "About Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-beige-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-beige-200">Policies</h4>
            <ul className="space-y-3">
              {[
                { href: "/policies#shipping", label: "Shipping & Delivery" },
                { href: "/policies#returns", label: "Returns & Exchange" },
                { href: "/policies#privacy", label: "Privacy Policy" },
                { href: "/policies#terms", label: "Terms & Conditions" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-beige-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-beige-200">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 text-maroon-400 shrink-0" />
                <span>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.area}, {SITE_CONFIG.address.city} – {SITE_CONFIG.address.pincode}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-maroon-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">{SITE_CONFIG.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-maroon-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock size={16} className="mt-0.5 text-maroon-400 shrink-0" />
                <div>
                  <div>Mon–Sat: {SITE_CONFIG.hours.weekdays}</div>
                  <div>Sun: {SITE_CONFIG.hours.sunday}</div>
                </div>
              </li>
            </ul>
            <a
              href={buildWhatsAppLink("Hi Bombay Collection! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 w-full text-sm py-2.5"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Bombay Collection, Nagpur. All rights reserved.</p>
          <p className="text-xs text-gray-500">Made with ❤️ in Nagpur, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}
