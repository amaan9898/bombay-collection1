import { Instagram, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const reels = [
  { emoji: "👗", caption: "New Arrivals Drop! 🔥", likes: "2.3K" },
  { emoji: "🥻", caption: "Navratri Special ✨", likes: "4.1K" },
  { emoji: "👘", caption: "Kurti styling ideas 💕", likes: "1.8K" },
  { emoji: "✨", caption: "Co-ord set lookbook", likes: "3.2K" },
  { emoji: "🎊", caption: "Diwali collection out!", likes: "5.7K" },
  { emoji: "🧣", caption: "Dupatta draping inspo", likes: "2.9K" },
];

export function InstagramGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <p className="font-body text-sm font-semibold text-maroon-500 tracking-widest uppercase mb-2">Social</p>
            <h2 className="section-title">Follow Our Story</h2>
            <p className="section-subtitle">
              See the latest styles, Reels and fashion inspo on Instagram.
            </p>
          </div>
          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 whitespace-nowrap self-start"
          >
            <Instagram size={18} />
            Follow @bombaycollection.nagpur
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {reels.map((reel, i) => (
            <a
              key={i}
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-gradient-to-br from-maroon-50 to-beige-100 rounded-2xl overflow-hidden border border-beige-100 hover:border-maroon-200 transition-all hover:scale-[1.02]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
                <span className="text-3xl md:text-4xl">{reel.emoji}</span>
                <p className="font-body text-[10px] text-charcoal-400 text-center leading-tight">{reel.caption}</p>
                <div className="flex items-center gap-1 text-[10px] text-maroon-400">
                  <span>❤️</span>
                  <span className="font-semibold">{reel.likes}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-maroon-500/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white">
                  <Instagram size={24} className="mx-auto mb-1" />
                  <p className="font-body text-xs">View Reel</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
