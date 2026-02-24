import Link from "next/link";
import { Sparkles } from "lucide-react";
import { buildWhatsAppLink } from "@/config/site";

export function FestiveCollection() {
  return (
    <section className="py-20 bg-gradient-to-br from-maroon-900 via-maroon-700 to-maroon-500 relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4954A' fill-opacity='1'%3E%3Cpath d='M40 0L50 30L80 40L50 50L40 80L30 50L0 40L30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-beige-300" />
              <span className="font-body text-sm font-semibold text-beige-300 tracking-widest uppercase">Limited Time</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Festive
              <br />
              <span className="text-beige-300">Collection 2024</span>
            </h2>
            <p className="font-body text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
              Light up every celebration with our handpicked festive wear — Chaniya Cholis, Banarasi Sarees, Designer Kurtis and more. Special Diwali, Navratri & wedding season prices!
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Products", value: "200+" },
                { label: "Off on Select", value: "Up to 40%" },
                { label: "Delivery", value: "Same Day" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                  <p className="font-display font-bold text-2xl text-beige-200">{stat.value}</p>
                  <p className="font-body text-xs text-white/70 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={buildWhatsAppLink("Hi! I'm interested in your Festive Collection. Please share latest designs and prices.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-8 py-3.5 text-base"
              >
                WhatsApp for Festive Looks
              </a>
              <Link href="/shop?tag=festive" className="inline-flex items-center gap-2 border-2 border-white/40 text-white rounded-full px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors">
                Browse Festive Shop
              </Link>
            </div>
          </div>

          {/* Visual grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: "🥻", label: "Banarasi Sarees", price: "From ₹2,999" },
              { emoji: "✨", label: "Chaniya Choli", price: "From ₹1,799" },
              { emoji: "👘", label: "Designer Kurtis", price: "From ₹649" },
              { emoji: "🧣", label: "Festive Dupattas", price: "From ₹299" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all cursor-pointer">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <p className="font-body font-semibold text-white text-sm">{item.label}</p>
                <p className="font-body text-xs text-beige-300 mt-1">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
