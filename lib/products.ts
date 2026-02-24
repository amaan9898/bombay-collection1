import productsData from "@/data/products.json";
import { Product, Category } from "@/types/product";

const products: Product[] = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getNewArrivals(limit?: number): Product[] {
  const filtered = products.filter((p) => p.isNewArrival);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getBestSellers(limit?: number): Product[] {
  const filtered = products.filter((p) => p.isBestSeller);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
  );
}
