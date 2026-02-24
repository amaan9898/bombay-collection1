import { Hero } from "@/components/sections/Hero";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { FestiveCollection } from "@/components/sections/FestiveCollection";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsAppCatalog } from "@/components/sections/WhatsAppCatalog";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { CallbackForm } from "@/components/sections/CallbackForm";
import { FAQ } from "@/components/sections/FAQ";
import { StoreLocation } from "@/components/sections/StoreLocation";
import { getNewArrivals, getBestSellers } from "@/lib/products";

export default function HomePage() {
  const newArrivals = getNewArrivals(8);
  const bestSellers = getBestSellers(8);

  return (
    <>
      <Hero />
      <FeaturedCategories />
      <ProductGrid
        products={newArrivals}
        title="New Arrivals"
        subtitle="Fresh styles just landed — be the first to wear them."
        badge="Just In"
        viewAllHref="/shop?filter=new"
        viewAllLabel="See All New Arrivals"
      />
      <WhyUs />
      <FestiveCollection />
      <ProductGrid
        products={bestSellers}
        title="Best Sellers"
        subtitle="The pieces Nagpur women can't stop buying."
        badge="Most Loved"
        viewAllHref="/shop?filter=bestseller"
        viewAllLabel="See All Best Sellers"
      />
      <Testimonials />
      <WhatsAppCatalog />
      <InstagramGrid />
      <CallbackForm />
      <FAQ />
      <StoreLocation />
    </>
  );
}
