import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Kurtis", emoji: "👘", desc: "Anarkali, straight, short & more", color: "from-rose-50 to-pink-100", href: "/shop?category=Kurtis" },
  { name: "Sarees", emoji: "🥻", desc: "Banarasi, cotton, georgette & more", color: "from-amber-50 to-yellow-100", href: "/shop?category=Sarees" },
  { name: "Dresses", emoji: "👗", desc: "Maxi, midi, fusion & more", color: "from-purple-50 to-violet-100", href: "/shop?category=Dresses" },
  { name: "Co-ords", emoji: "✨", desc: "Matching sets & co-ord looks", color: "from-teal-50 to-cyan-100", href: "/shop?category=Co-ords" },
  { name: "Tops", emoji: "👚", desc: "Peplum, cold-shoulder & more", color: "from-orange-50 to-amber-100", href: "/shop?category=Tops" },
  { name: "Dupattas", emoji: "🧣", desc: "Phulkari, bandhani, organza", color: "from-green-50 to-emerald-100", href: "/shop?category=Dupattas" },
];

export function FeaturedCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-semibold text-maroon-500 tracking-widest uppercase mb-2">Shop by Category</p>
          <h2 className="section-title">Explore Our Collections</h2>
          <p className="section-subtitle mx-auto text-center">
            From everyday kurtis to bridal sarees — find everything for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`group bg-gradient-to-b ${cat.color} rounded-2xl p-5 text-center card-hover border border-white`}
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <h3 className="font-body font-bold text-charcoal-500 text-sm mb-1 group-hover:text-maroon-500 transition-colors">
                {cat.name}
              </h3>
              <p className="font-body text-xs text-charcoal-400 leading-snug">{cat.desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/shop" className="btn-secondary inline-flex">
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
