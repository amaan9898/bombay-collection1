import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-beige-50 flex items-center justify-center pt-20">
      <div className="text-center px-4 max-w-lg">
        <div className="text-8xl mb-6">🛍️</div>
        <h1 className="font-display text-6xl font-bold text-maroon-500 mb-2">404</h1>
        <h2 className="font-display text-2xl font-bold text-charcoal-500 mb-4">Oops! Page Not Found</h2>
        <p className="font-body text-charcoal-400 mb-8 leading-relaxed">
          It seems this page has gone out of stock! Let&apos;s get you back to our beautiful collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <ArrowLeft size={16} />
            Go Back Home
          </Link>
          <Link href="/shop" className="btn-secondary">
            <ShoppingBag size={16} />
            Browse Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
