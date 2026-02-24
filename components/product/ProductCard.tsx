"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { buildProductWhatsAppLink } from "@/config/site";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = calculateDiscount(product.price, product.mrp);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-beige-100 overflow-hidden">
        <div className="w-full h-full shimmer" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <ShoppingBag size={48} className="text-beige-400 mx-auto mb-2" />
            <p className="text-xs text-beige-500 font-body">{product.category}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNewArrival && (
            <span className="bg-maroon-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full font-body tracking-wide">
              NEW
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-beige-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full font-body tracking-wide">
              BESTSELLER
            </span>
          )}
          {discount >= 20 && (
            <span className="bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full font-body">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3">
          <a
            href={buildProductWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-2 px-4 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Info */}
      <Link href={`/product/${product.id}`} className="block p-4">
        <p className="text-[11px] font-body text-maroon-400 font-semibold uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <h3 className="font-body font-semibold text-charcoal-500 text-sm leading-snug mb-2 group-hover:text-maroon-500 transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Sizes */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.sizes.slice(0, 4).map((size) => (
            <span key={size} className="text-[10px] border border-beige-200 text-charcoal-400 px-1.5 py-0.5 rounded font-body">
              {size}
            </span>
          ))}
          {product.sizes.length > 4 && (
            <span className="text-[10px] text-maroon-400 font-body">+{product.sizes.length - 4}</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="font-display font-bold text-maroon-500 text-base">{formatPrice(product.price)}</span>
          <span className="font-body text-xs text-gray-400 line-through">{formatPrice(product.mrp)}</span>
          {discount > 0 && (
            <span className="font-body text-xs text-green-600 font-semibold">{discount}% off</span>
          )}
        </div>
      </Link>
    </div>
  );
}
