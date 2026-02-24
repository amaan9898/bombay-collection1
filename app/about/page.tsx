import type { Metadata } from "next";
import { Heart, Users, Award, Sparkles } from "lucide-react";
import { buildWhatsAppLink } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us – Bombay Collection | Women's Fashion Store, Nagpur",
  description: "Learn about Bombay Collection – Nagpur's trusted women's fashion destination in Jaffar Nagar. Our story, values and commitment to local Nagpur women.",
};

const values = [
  { icon: Heart, title: "Made for Nagpur Women", desc: "We understand the tastes, climate and occasions of Nagpur. Every piece is curated with you in mind." },
  { icon: Users, title: "Community First", desc: "We are more than a shop — we are part of the Jaffar Nagar community. Your trust means everything to us." },
  { icon: Award, title: "Quality You Can Feel", desc: "Every garment is hand-checked before it reaches you. No compromises on quality, ever." },
  { icon: Sparkles, title: "Affordable Luxury", desc: "Premium fashion should not cost a fortune. We bring designer-quality styles at prices for everyone." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-maroon-50 to-beige-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-maroon-100/40 translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="font-body text-sm font-semibold text-maroon-500 tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-display text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
            Born in Jaffar Nagar,<br />
            <span className="text-gradient">Made for Nagpur.</span>
          </h1>
          <p className="font-body text-lg text-charcoal-400 leading-relaxed max-w-2xl mx-auto">
            Bombay Collection started as a dream — to bring premium women's fashion to the heart of Nagpur without the big-city price tags. What began as a small neighbourhood shop in Jaffar Nagar has grown into a beloved brand trusted by thousands of women across the city.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal-500 mb-6">From a Small Shop to a Community Favourite</h2>
              <div className="space-y-4 font-body text-charcoal-400 text-base leading-relaxed">
                <p>
                  Bombay Collection was founded with one simple belief: every woman deserves to feel beautiful without spending a fortune. Located in the vibrant Jaffar Nagar neighbourhood of Nagpur, our store has always been about more than clothing — it is about confidence.
                </p>
                <p>
                  We travel across India to source the freshest designs — from Mumbai&apos;s fashion markets to artisan workshops in Jaipur and Varanasi — bringing back carefully curated collections of kurtis, sarees, dresses, co-ords and more.
                </p>
                <p>
                  As Nagpur embraced digital shopping, we embraced WhatsApp. Today, hundreds of women order from us every week via WhatsApp, getting the same personal attention and quality assurance as walking into our store.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🏪", title: "Est. 2018", sub: "Jaffar Nagar, Nagpur" },
                { emoji: "👗", title: "200+ Styles", sub: "New stock weekly" },
                { emoji: "⭐", title: "2000+ Customers", sub: "Trusted by Nagpur" },
                { emoji: "🚚", title: "Same Day", sub: "Nagpur delivery" },
              ].map((stat) => (
                <div key={stat.title} className="bg-beige-50 rounded-2xl p-6 text-center border border-beige-100">
                  <div className="text-4xl mb-3">{stat.emoji}</div>
                  <p className="font-display font-bold text-xl text-charcoal-500">{stat.title}</p>
                  <p className="font-body text-xs text-charcoal-400 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 text-center border border-beige-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-maroon-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-maroon-500" />
                </div>
                <h3 className="font-body font-bold text-charcoal-500 mb-2">{title}</h3>
                <p className="font-body text-sm text-charcoal-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-maroon-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Come Visit Us!</h2>
          <p className="font-body text-white/80 mb-8">
            Stop by our store in Jaffar Nagar or drop us a message on WhatsApp. We&apos;d love to help you find your next favourite outfit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppLink("Hi Bombay Collection! I'd like to know more about your store.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-3.5 text-base"
            >
              Chat on WhatsApp
            </a>
            <a href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white rounded-full px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors">
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
