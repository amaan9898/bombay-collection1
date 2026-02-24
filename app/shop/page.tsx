"use client";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { getAllProducts } from "@/lib/products";
import { CATEGORIES, Category } from "@/types/product";
import type { Metadata } from "next";

const ALL_SIZES_FILTER = ["XS", "S", "M", "L", "XL", "XXL", "Free Size"];

export default function ShopPage() {
  const allProducts = getAllProducts();
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sort, setSort] = useState("default");
  const [filter, setFilter] = useState<"" | "new" | "bestseller">("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let products = allProducts;

    if (search) {
      const q = search.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategories.length > 0) {
      products = products.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedSizes.length > 0) {
      products = products.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)));
    }

    products = products.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (filter === "new") products = products.filter((p) => p.isNewArrival);
    if (filter === "bestseller") products = products.filter((p) => p.isBestSeller);

    switch (sort) {
      case "price-asc": return [...products].sort((a, b) => a.price - b.price);
      case "price-desc": return [...products].sort((a, b) => b.price - a.price);
      case "newest": return [...products].sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
      default: return products;
    }
  }, [allProducts, search, selectedCategories, selectedSizes, priceRange, sort, filter]);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearAll = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedSizes([]);
    setPriceRange([0, 5000]);
    setSort("default");
    setFilter("");
  };

  const hasFilters = search || selectedCategories.length > 0 || selectedSizes.length > 0 || priceRange[0] > 0 || priceRange[1] < 5000 || filter;

  return (
    <div className="pt-20 min-h-screen bg-beige-50">
      {/* Header */}
      <div className="bg-white border-b border-beige-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-display text-3xl font-bold text-charcoal-500 mb-2">Shop All</h1>
          <p className="font-body text-sm text-charcoal-400">{filtered.length} products found</p>

          {/* Quick filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button onClick={() => setFilter("")} className={`font-body text-xs px-4 py-1.5 rounded-full border transition-all ${filter === "" ? "bg-maroon-500 text-white border-maroon-500" : "border-beige-300 text-charcoal-400 hover:border-maroon-300"}`}>All</button>
            <button onClick={() => setFilter("new")} className={`font-body text-xs px-4 py-1.5 rounded-full border transition-all ${filter === "new" ? "bg-maroon-500 text-white border-maroon-500" : "border-beige-300 text-charcoal-400 hover:border-maroon-300"}`}>New Arrivals</button>
            <button onClick={() => setFilter("bestseller")} className={`font-body text-xs px-4 py-1.5 rounded-full border transition-all ${filter === "bestseller" ? "bg-maroon-500 text-white border-maroon-500" : "border-beige-300 text-charcoal-400 hover:border-maroon-300"}`}>Best Sellers</button>
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => toggleCategory(cat)} className={`font-body text-xs px-4 py-1.5 rounded-full border transition-all ${selectedCategories.includes(cat) ? "bg-maroon-500 text-white border-maroon-500" : "border-beige-300 text-charcoal-400 hover:border-maroon-300"}`}>{cat}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Sort bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-300" />
            <input
              type="text"
              className="input-field pl-11"
              placeholder="Search kurtis, sarees, dresses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-300 hover:text-charcoal-500" onClick={() => setSearch("")}>
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 btn-secondary py-3 text-xs"
            >
              <SlidersHorizontal size={16} />
              Filters
              {hasFilters && <span className="w-2 h-2 rounded-full bg-maroon-500" />}
            </button>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="input-field py-3 text-xs min-w-[150px]"
            >
              <option value="default">Sort: Featured</option>
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl border border-beige-100 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-body font-semibold text-charcoal-500">Filters</h3>
              {hasFilters && (
                <button onClick={clearAll} className="font-body text-xs text-maroon-500 hover:underline flex items-center gap-1">
                  <X size={12} /> Clear All
                </button>
              )}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Size */}
              <div>
                <h4 className="font-body text-sm font-semibold text-charcoal-400 mb-3 uppercase tracking-wider">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {ALL_SIZES_FILTER.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`font-body text-xs px-3 py-1.5 rounded-lg border transition-all ${selectedSizes.includes(size) ? "bg-maroon-500 text-white border-maroon-500" : "border-beige-200 text-charcoal-400 hover:border-maroon-300"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-body text-sm font-semibold text-charcoal-400 mb-3 uppercase tracking-wider">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min={0}
                    max={5000}
                    step={100}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full accent-maroon-500"
                  />
                  <div className="flex justify-between font-body text-xs text-charcoal-400">
                    <span>₹{priceRange[0]}</span>
                    <span>Up to ₹{priceRange[1]}</span>
                  </div>
                  <div className="flex gap-2">
                    {[500, 1000, 2000, 5000].map((p) => (
                      <button
                        key={p}
                        onClick={() => setPriceRange([0, p])}
                        className={`font-body text-[11px] px-2.5 py-1 rounded border transition-all ${priceRange[1] === p ? "bg-maroon-500 text-white border-maroon-500" : "border-beige-200 text-charcoal-400"}`}
                      >
                        Under ₹{p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-display text-2xl font-bold text-charcoal-500 mb-2">No products found</h3>
            <p className="font-body text-charcoal-400 mb-6">Try adjusting your search or filters.</p>
            <button onClick={clearAll} className="btn-primary">Clear All Filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
