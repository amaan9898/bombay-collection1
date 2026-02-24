import { MapPin, Truck, MessageCircle, Star, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Local Nagpur Store",
    desc: "Walk into our Jaffar Nagar store, try before you buy. Real people, real style advice.",
    color: "text-rose-500 bg-rose-50",
  },
  {
    icon: Truck,
    title: "Same/Next Day Delivery",
    desc: "Order before noon and receive your parcel the same day within Nagpur city.",
    color: "text-blue-500 bg-blue-50",
  },
  {
    icon: MessageCircle,
    title: "Easy WhatsApp Orders",
    desc: "Browse, enquire and order directly on WhatsApp. No app needed, no hassle.",
    color: "text-green-500 bg-green-50",
  },
  {
    icon: Star,
    title: "Curated Collections",
    desc: "Handpicked seasonal styles — from office casuals to festive lehengas.",
    color: "text-amber-500 bg-amber-50",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    desc: "Every piece is quality-checked before it reaches you. No compromises.",
    color: "text-purple-500 bg-purple-50",
  },
  {
    icon: Clock,
    title: "Easy Exchange Policy",
    desc: "Not happy? Exchange within 7 days at store or arrange pickup for online orders.",
    color: "text-teal-500 bg-teal-50",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold text-maroon-500 tracking-widest uppercase mb-2">Why Choose Us</p>
          <h2 className="section-title">The Bombay Collection Promise</h2>
          <p className="section-subtitle mx-auto text-center">
            Premium fashion, local love. We are Nagpur&apos;s trusted women&apos;s clothing destination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div key={feat.title} className="group flex gap-5 p-6 rounded-2xl border border-beige-100 hover:border-maroon-100 hover:shadow-lg transition-all bg-white">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${feat.color} group-hover:scale-110 transition-transform`}>
                <feat.icon size={22} />
              </div>
              <div>
                <h3 className="font-body font-bold text-charcoal-500 mb-2">{feat.title}</h3>
                <p className="font-body text-sm text-charcoal-400 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
