import { MapPin, Clock, Phone, Instagram, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function StoreLocation() {
  return (
    <section className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-semibold text-maroon-500 tracking-widest uppercase mb-2">Find Us</p>
          <h2 className="section-title">Visit Our Store</h2>
          <p className="section-subtitle mx-auto text-center">
            Come say hello! Our Jaffar Nagar store is open 7 days a week.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map placeholder */}
          <div className="bg-gradient-to-br from-beige-100 to-maroon-50 rounded-3xl h-80 lg:h-full min-h-[320px] flex items-center justify-center border-2 border-dashed border-beige-300 relative overflow-hidden">
            <div className="text-center p-8">
              <MapPin size={48} className="text-maroon-400 mx-auto mb-4" />
              <p className="font-display font-bold text-xl text-maroon-700 mb-2">Jaffar Nagar, Nagpur</p>
              <p className="font-body text-sm text-charcoal-400 mb-6">
                Shop No. 12, Near Jaffar Nagar Square,<br />
                Nagpur, Maharashtra – 440013
              </p>
              <a
                href={SITE_CONFIG.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} />
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-beige-100">
              <h3 className="font-body font-bold text-charcoal-500 mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-maroon-500" />
                Store Address
              </h3>
              <p className="font-body text-sm text-charcoal-400 leading-relaxed">
                {SITE_CONFIG.address.street}<br />
                {SITE_CONFIG.address.area}, {SITE_CONFIG.address.city}<br />
                {SITE_CONFIG.address.state} – {SITE_CONFIG.address.pincode}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-beige-100">
              <h3 className="font-body font-bold text-charcoal-500 mb-4 flex items-center gap-2">
                <Clock size={18} className="text-maroon-500" />
                Store Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-charcoal-400">Monday – Saturday</span>
                  <span className="font-body text-sm font-semibold text-charcoal-500">{SITE_CONFIG.hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-charcoal-400">Sunday</span>
                  <span className="font-body text-sm font-semibold text-charcoal-500">{SITE_CONFIG.hours.sunday}</span>
                </div>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-beige-100">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-body text-xs text-green-600 font-medium">Open Now</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-beige-100">
              <h3 className="font-body font-bold text-charcoal-500 mb-4 flex items-center gap-2">
                <Phone size={18} className="text-maroon-500" />
                Contact Us
              </h3>
              <div className="space-y-3">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 group">
                  <Phone size={16} className="text-maroon-400 shrink-0" />
                  <span className="font-body text-sm text-charcoal-400 group-hover:text-maroon-500 transition-colors">{SITE_CONFIG.phone}</span>
                </a>
                <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <Instagram size={16} className="text-maroon-400 shrink-0" />
                  <span className="font-body text-sm text-charcoal-400 group-hover:text-maroon-500 transition-colors">@bombaycollection.nagpur</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
