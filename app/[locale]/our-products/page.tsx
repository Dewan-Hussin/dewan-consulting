import { productsCard } from "@/app/api/products/productsRoute";
import Reveal from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";
import { lazy, Suspense } from "react";

const ProductCard = lazy(
  () => import("@/app/features/products/components/ProductCard"),
);

export default function ProductsPage() {
  return (
    <main className=" mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-second">
      <div className="container mx-auto">
        {/* Page Header */}
        <header className="mx-auto max-w-2xl space-y-4 py-12 text-center sm:py-16">
          <Reveal>
            {/* <span className="text-sm font-semibold uppercase tracking-[0.2em] text-second">
            Our Solutions
          </span> */}

            <h1 className="text-3xl font-bold tracking-tight text-main sm:text-4xl">
              Our Products
            </h1>

            <p className="mx-auto max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Discover our range of products, designed to deliver reliable
              solutions and meet your business needs.
            </p>
          </Reveal>
        </header>

        {/* Products Grid */}
        <section className="products pb-20">
          <div
            className={cn(
              "grid grid-cols-1 gap-6",
              "sm:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {productsCard.map((product, index) => (
              <Reveal key={product.id} delay={index * 60}>
                <Suspense fallback={<div>Loading...</div>}>
                  <ProductCard product={product} />
                </Suspense>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
