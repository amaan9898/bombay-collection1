import Link from "next/link";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/product/ProductCard";
import { ArrowRight } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  title: string;
  subtitle?: string;
  badge?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export function ProductGrid({ products, title, subtitle, badge, viewAllHref, viewAllLabel }: ProductGridProps) {
  return (
    <section className="py-20 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            {badge && (
              <p className="font-body text-sm font-semibold text-maroon-500 tracking-widest uppercase mb-2">{badge}</p>
            )}
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
          {viewAllHref && (
            <Link href={viewAllHref} className="btn-secondary whitespace-nowrap self-start md:self-auto">
              {viewAllLabel || "View All"}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
