"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShoppingBag, Phone, Heart, Share2, Truck, RotateCcw, Shield } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { buildProductWhatsAppLink, buildWhatsAppLink } from "@/config/site";
import { useToast } from "@/components/ui/ToastProvider";

interface Props {
  product: Product;
}

export function ProductDetail({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { showToast } = useToast();
  const discount = calculateDiscount(product.price, product.mrp);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: product.name, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard!");
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-body text-xs text-charcoal-400 mb-8">
          <Link href="/" className="hover:text-maroon-500">Home</Link>
          <ChevronRight size={12} />
          <Link href="/shop" className="hover:text-maroon-500">Shop</Link>
          <ChevronRight size={12} />
          <Link href={`/shop?category=${product.category}`} className="hover:text-maroon-500">{product.category}</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal-500 font-medium truncate max-w-[180px]">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image placeholder */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gradient-to-b from-beige-100 to-maroon-50 rounded-3xl flex items-center justify-center border border-beige-200 overflow-hidden">
              <div className="text-center p-8">
                <ShoppingBag size={80} className="text-maroon-200 mx-auto mb-4" />
                <p className="font-display font-bold text-xl text-maroon-500">{product.category}</p>
                <p className="font-body text-sm text-maroon-300 mt-1">Product Image</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-b from-beige-100 to-maroon-50 rounded-xl border border-beige-200 flex items-center justify-center cursor-pointer hover:border-maroon-300 transition-colors">
                  <ShoppingBag size={20} className="text-maroon-200" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNewArrival && (
                <span className="bg-maroon-500 text-white text-xs font-semibold px-3 py-1 rounded-full font-body">NEW ARRIVAL</span>
              )}
              {product.isBestSeller && (
                <span className="bg-beige-500 text-white text-xs font-semibold px-3 py-1 rounded-full font-body">BESTSELLER</span>
              )}
            </div>

            <p className="font-body text-sm font-semibold text-maroon-400 uppercase tracking-widest mb-2">{product.category}</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal-500 mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-4xl font-bold text-maroon-500">{formatPrice(product.price)}</span>
              <span className="font-body text-lg text-gray-400 line-through">{formatPrice(product.mrp)}</span>
              {discount > 0 && (
                <span className="font-body text-sm text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">{discount}% OFF</span>
              )}
            </div>

            <p className="font-body text-charcoal-400 text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Fabric & Care */}
            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-beige-50 rounded-xl">
              <div>
                <p className="font-body text-xs text-charcoal-400 uppercase tracking-wider mb-1">Fabric</p>
                <p className="font-body text-sm font-semibold text-charcoal-500">{product.fabric}</p>
              </div>
              <div>
                <p className="font-body text-xs text-charcoal-400 uppercase tracking-wider mb-1">Care</p>
                <p className="font-body text-sm font-semibold text-charcoal-500">{product.care}</p>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <p className="font-body text-sm font-semibold text-charcoal-500 mb-3">Available Colors</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span key={color} className="font-body text-xs px-3 py-1.5 rounded-lg border border-beige-200 text-charcoal-400 bg-white">
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <p className="font-body text-sm font-semibold text-charcoal-500">Select Size</p>
                <button className="font-body text-xs text-maroon-500 hover:underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`font-body text-sm px-4 py-2.5 rounded-xl border-2 transition-all font-medium ${
                      selectedSize === size
                        ? "bg-maroon-500 text-white border-maroon-500 shadow-md"
                        : "border-beige-200 text-charcoal-500 hover:border-maroon-300 bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 mb-8">
              <a
                href={buildProductWhatsAppLink(product.name, selectedSize || undefined)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-4 text-base justify-center"
              >
                Order on WhatsApp
                {selectedSize && <span className="ml-1 opacity-80">– Size {selectedSize}</span>}
              </a>
              <a
                href={buildWhatsAppLink(`Hi! I'd like to check availability for: ${product.name}${selectedSize ? ` (Size: ${selectedSize})` : ""}. Please let me know if this is in stock.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-4 text-base justify-center"
              >
                <Phone size={16} />
                Check Availability
              </a>
            </div>

            {/* Action icons */}
            <div className="flex gap-3 mb-8">
              <button onClick={handleShare} className="flex items-center gap-2 font-body text-xs text-charcoal-400 hover:text-maroon-500 transition-colors">
                <Share2 size={16} />
                Share
              </button>
              <button className="flex items-center gap-2 font-body text-xs text-charcoal-400 hover:text-maroon-500 transition-colors">
                <Heart size={16} />
                Wishlist
              </button>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-3 border-t border-beige-100 pt-6">
              {[
                { icon: Truck, label: "Same Day Delivery", sub: "In Nagpur" },
                { icon: RotateCcw, label: "Easy Exchange", sub: "Within 7 days" },
                { icon: Shield, label: "Quality Checked", sub: "Every piece" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center">
                  <Icon size={20} className="text-maroon-400 mx-auto mb-1.5" />
                  <p className="font-body text-xs font-semibold text-charcoal-500">{label}</p>
                  <p className="font-body text-[10px] text-charcoal-300">{sub}</p>
                </div>
              ))}
            </div>

            {/* SKU */}
            <p className="font-body text-xs text-charcoal-300 mt-4">SKU: {product.sku}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
