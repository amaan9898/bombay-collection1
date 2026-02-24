import type { Metadata } from "next";
import { MapPin, Clock, Phone, Mail, Instagram, ExternalLink, MessageCircle } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Visit Us – Bombay Collection | Jaffar Nagar, Nagpur",
  description: "Find Bombay Collection at Jaffar Nagar, Nagpur. Store address, timings, phone, WhatsApp and Google Maps directions.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-maroon-50 to-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-sm font-semibold text-maroon-500 tracking-widest uppercase mb-3">We're Right Here</p>
          <h1 className="font-display text-5xl font-bold text-charcoal-500 mb-4">Come Visit Us</h1>
          <p className="font-body text-lg text-charcoal-400">
            Bombay Collection is open 7 days a week at Jaffar Nagar, Nagpur. You're always welcome!
          </p>
        </div>
      </section>

      {/* Contact details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Store Address",
                color: "text-maroon-500 bg-maroon-50",
                content: (
                  <div className="space-y-1">
                    <p className="font-body text-sm text-charcoal-500 font-semibold">{SITE_CONFIG.address.street}</p>
                    <p className="font-body text-sm text-charcoal-400">{SITE_CONFIG.address.area}, {SITE_CONFIG.address.city}</p>
                    <p className="font-body text-sm text-charcoal-400">{SITE_CONFIG.address.state} – {SITE_CONFIG.address.pincode}</p>
                    <a href={SITE_CONFIG.googleMaps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-maroon-500 hover:underline mt-2">
                      <ExternalLink size={12} />
                      Get Directions
                    </a>
                  </div>
                ),
              },
              {
                icon: Clock,
                title: "Opening Hours",
                color: "text-blue-500 bg-blue-50",
                content: (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-body text-sm text-charcoal-400">Mon – Sat</span>
                      <span className="font-body text-sm font-semibold text-charcoal-500">{SITE_CONFIG.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-sm text-charcoal-400">Sunday</span>
                      <span className="font-body text-sm font-semibold text-charcoal-500">{SITE_CONFIG.hours.sunday}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="font-body text-xs text-green-600 font-medium">Open Now</span>
                    </div>
                  </div>
                ),
              },
              {
                icon: Phone,
                title: "Get in Touch",
                color: "text-green-500 bg-green-50",
                content: (
                  <div className="space-y-3">
                    <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 hover:text-maroon-500 transition-colors">
                      <Phone size={14} className="text-maroon-400" />
                      <span className="font-body text-sm text-charcoal-500">{SITE_CONFIG.phone}</span>
                    </a>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 hover:text-maroon-500 transition-colors">
                      <Mail size={14} className="text-maroon-400" />
                      <span className="font-body text-sm text-charcoal-500">{SITE_CONFIG.email}</span>
                    </a>
                    <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-maroon-500 transition-colors">
                      <Instagram size={14} className="text-maroon-400" />
                      <span className="font-body text-sm text-charcoal-500">@bombaycollection.nagpur</span>
                    </a>
                  </div>
                ),
              },
            ].map(({ icon: Icon, title, color, content }) => (
              <div key={title} className="bg-beige-50 rounded-2xl p-6 border border-beige-100">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-body font-bold text-charcoal-500 mb-4">{title}</h3>
                {content}
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="bg-gradient-to-br from-beige-100 to-maroon-50 rounded-3xl h-80 flex items-center justify-center border-2 border-dashed border-beige-300 mb-12">
            <div className="text-center">
              <MapPin size={48} className="text-maroon-400 mx-auto mb-3" />
              <p className="font-display font-bold text-xl text-maroon-700 mb-1">Jaffar Nagar, Nagpur</p>
              <p className="font-body text-sm text-charcoal-400 mb-4">Near Jaffar Nagar Square, Maharashtra – 440013</p>
              <a href={SITE_CONFIG.googleMaps} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={16} />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#25D366] rounded-3xl p-8 text-center text-white">
            <MessageCircle size={40} className="mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold mb-2">Prefer WhatsApp?</h2>
            <p className="font-body text-white/80 mb-6">Message us any time and we'll respond within minutes during store hours.</p>
            <a
              href={buildWhatsAppLink("Hi Bombay Collection! I have a question for you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#075E54] font-body font-bold px-8 py-3.5 rounded-full hover:bg-green-50 transition-colors"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
