
"use client";

import { productsCard } from "@/app/api/products/productsRoute";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function ProductsSection() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className={cn(
        "relative w-full overflow-hidden",
        "bg-main py-20 md:py-28",
        "font-sans",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl space-y-5 text-center md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-background/60 dark:text-white/60">
            Our Solutions
          </span>

          <h2
            id="products-title"
            className={cn(
              "text-3xl font-bold tracking-tight",
              "text-background dark:text-white",
              "md:text-4xl lg:text-5xl",
            )}
          >
            Our Products
          </h2>

          <p className="text-sm leading-7 text-background/70 dark:text-white/70 md:text-base">
            Discover our range of innovative products, designed to
            simplify operations, improve efficiency, and support
            your business growth.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {productsCard.map((product, index) => (
            <Link
              key={product.id}
              href={product.href}
              className="group block h-full outline-none"
            >
              <article
                className={cn(
                  "relative flex h-full min-h-52 flex-col",
                  "justify-between overflow-hidden rounded-lg",
                  "border border-white/15 bg-white p-6",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-1.5 hover:border-second",
                  "hover:shadow-xl hover:shadow-black/10",
                  "focus-visible:ring-2 focus-visible:ring-second",
                  "focus-visible:ring-offset-4 focus-visible:ring-offset-main",
                )}
              >
                {/* Top Content */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-widest text-second/95">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full",
                      "bg-main/5 text-main",
                      "transition-all duration-300",
                      "group-hover:bg-second group-hover:text-white",
                    )}
                  >
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* Product Title */}
                <div className="mt-12">
                  <h3
                    className={cn(
                      "text-lg font-semibold leading-snug text-main",
                      "transition-colors duration-300",
                      "group-hover:text-main/80",
                    )}
                  >
                    {product.title}
                  </h3>

                  <div
                    className={cn(
                      "mt-4 h-0.5 w-8 rounded-full bg-second/40",
                      "transition-all duration-300",
                      "group-hover:w-16 group-hover:bg-second",
                    )}
                  />
                </div>

                {/* Background Decoration */}
                <div
                  className={cn(
                    "pointer-events-none absolute -bottom-12 -right-12",
                    "size-32 rounded-full bg-main/3",
                    "transition-transform duration-500",
                    "group-hover:scale-150",
                  )}
                />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
