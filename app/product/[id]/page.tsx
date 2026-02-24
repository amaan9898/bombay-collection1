import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductById, getAllProducts } from "@/lib/products";
import { ProductDetail } from "@/components/product/ProductDetail";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById(params.id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} – ${product.category} | Bombay Collection, Nagpur`,
    description: `${product.description} Available in sizes ${product.sizes.join(", ")}. Buy online via WhatsApp from Bombay Collection, Jaffar Nagar, Nagpur.`,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
