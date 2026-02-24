"use client";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { buildWhatsAppLink } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pattern-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige-50 via-white to-maroon-50" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-maroon-500/5 -translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-beige-400/10 translate-y-1/2" />
      <div className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-maroon-100 -translate-y-1/2 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-maroon-50 border border-maroon-100 rounded-full px-4 py-2 mb-8">
              <MapPin size={14} className="text-maroon-500" />
              <span className="font-body text-sm text-maroon-600 font-medium">Jaffar Nagar, Nagpur</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-body text-xs text-green-600">Open Today</span>
            </div>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-charcoal-500 leading-[1.1] mb-6">
              Style That
              <br />
              <span className="text-gradient">Feels Like</span>
              <br />
              You.
            </h1>

            <p className="font-body text-lg text-charcoal-400 mb-4 max-w-md leading-relaxed">
              From our store in Jaffar Nagar to your doorstep. Curated ladies wear, seasonal collections & easy WhatsApp ordering.
            </p>

            <div className="flex items-center gap-2 mb-8">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} className="fill-beige-500 text-beige-500" />
              ))}
              <span className="font-body text-sm text-charcoal-400">Loved by 2000+ Nagpur women</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={buildWhatsAppLink("Hi Bombay Collection! I want to see your latest collection.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-3.5"
              >
                Order on WhatsApp
              </a>
              <Link href="/shop" className="btn-secondary text-base px-8 py-3.5">
                Browse Collection
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-beige-200">
              {[
                { label: "Local Nagpur Store", icon: "🏪" },
                { label: "Quality Checked", icon: "✓" },
                { label: "Easy Exchange", icon: "↩" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <span className="text-lg">{b.icon}</span>
                  <span className="font-body text-sm font-medium text-charcoal-400">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Main product showcase */}
              <div className="w-80 h-[480px] rounded-3xl bg-gradient-to-b from-maroon-100 to-beige-100 overflow-hidden shadow-2xl">
                <div className="h-full flex items-center justify-center flex-col gap-4">
                  <div className="w-32 h-32 rounded-full bg-maroon-200/50 flex items-center justify-center">
                    <span className="text-5xl">👗</span>
                  </div>
                  <div className="text-center px-8">
                    <p className="font-display font-bold text-xl text-maroon-700">New Arrivals</p>
                    <p className="font-body text-sm text-maroon-500 mt-1">Kurtis, Sarees & More</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-16 top-16 bg-white rounded-2xl shadow-xl p-4 w-44">
                <p className="font-body text-xs text-gray-500 mb-1">Starting from</p>
                <p className="font-display font-bold text-2xl text-maroon-500">₹299</p>
                <p className="font-body text-xs text-charcoal-400">All categories</p>
              </div>

              <div className="absolute -right-12 bottom-20 bg-white rounded-2xl shadow-xl p-4 w-44">
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-beige-500 text-beige-500" />)}
                </div>
                <p className="font-body text-xs text-charcoal-500 font-semibold">&ldquo;Love the quality!&rdquo;</p>
                <p className="font-body text-xs text-gray-400 mt-1">— Priya, Nagpur</p>
              </div>

              <div className="absolute -right-8 top-8 bg-maroon-500 text-white rounded-2xl shadow-xl p-3 w-36 text-center">
                <p className="font-body text-xs font-semibold">Same Day</p>
                <p className="font-display text-lg font-bold">Delivery</p>
                <p className="font-body text-xs opacity-80">Within Nagpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
