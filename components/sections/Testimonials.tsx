import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Deshmukh",
    location: "Dharampeth, Nagpur",
    rating: 5,
    text: "I ordered 3 kurtis on WhatsApp and received them the same evening! The quality is outstanding — I've already recommended Bombay Collection to all my friends. My go-to shop now.",
    emoji: "😍",
  },
  {
    name: "Sneha Rathod",
    location: "Sitabuldi, Nagpur",
    rating: 5,
    text: "The Banarasi saree I bought for my sister's wedding was absolutely gorgeous. Got compliments all day! The price was so reasonable compared to big showrooms.",
    emoji: "🥻",
  },
  {
    name: "Kavita Bhoyar",
    location: "Manewada, Nagpur",
    rating: 5,
    text: "Amazing collection of co-ord sets! I bought the Navratri Chaniya Choli set and it was perfect for Garba. The embroidery quality is top-notch. Will keep coming back!",
    emoji: "✨",
  },
  {
    name: "Anjali Mishra",
    location: "Jaffar Nagar, Nagpur",
    rating: 5,
    text: "Being a neighbour to the shop, I have watched it grow into something really special. Always fresh stock, lovely staff, and great prices. Like having a boutique next door!",
    emoji: "💕",
  },
  {
    name: "Ritu Wankhede",
    location: "Laxmi Nagar, Nagpur",
    rating: 5,
    text: "I messaged on WhatsApp asking for a specific size and they responded instantly. The whole process from order to delivery was so smooth. This is how shopping should be!",
    emoji: "👗",
  },
  {
    name: "Sunita Pawar",
    location: "Pratap Nagar, Nagpur",
    rating: 4,
    text: "Bought a beautiful georgette saree for a party. The colour was exactly as shown and the fabric quality was excellent. Packaging was neat and arrived quickly. Very happy customer!",
    emoji: "🌟",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-maroon-500 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold text-maroon-200 tracking-widest uppercase mb-2">Customer Love</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">What Nagpur Says</h2>
          <p className="font-body text-base text-maroon-100 mt-3">
            2000+ happy customers from across Nagpur trust Bombay Collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
              <Quote size={24} className="text-maroon-200 mb-4 opacity-60" />
              <p className="font-body text-sm text-white/90 leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-maroon-400 flex items-center justify-center text-lg">
                  {t.emoji}
                </div>
                <div>
                  <p className="font-body font-semibold text-white text-sm">{t.name}</p>
                  <p className="font-body text-xs text-maroon-200">{t.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-amber-300 text-amber-300" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
