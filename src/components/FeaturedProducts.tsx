import { ProductsGrid } from "./ProductsGrid";
import { SectionTitle } from "./SectionTitle";

export const FeaturedProducts = () => {
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  );
};
