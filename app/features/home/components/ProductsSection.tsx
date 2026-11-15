"use client";

import { cn } from "@/lib/utils";

export default function ProductsSection() {
  return (
    <>
      <section
        id="products"
        className={cn(
          "products-sec",
          "relative w-full overflow-hidden font-sans ",
          " bg-main ",
          "py-16",
          "",
        )}
      >
        <div
          className={cn(
            "space-y-10 ",
            " mx-auto px-4 sm:px-1 lg:px-3",
          )}
        >
          <div
            className={cn(
              "services-content  text-center",
              "space-y-4",
              "w-1/2 py-5 mx-auto",
            )}
          >
            <h2 id="services-title">
              <span
                className={cn(
                  `block text-xl md:text-2xl text-background dark:text-white lg:text-4xl font-bold tracking-tight animate-in slide-in-from-bottom-8 duration-700 fade-in delay-15`,
                  "text-shadow-background ",
                  "",
                )}
              >
                Our Products
              </span>
            </h2>
            <p>
              <span className="text-background/60 dark:text-white/60 font-semibold text-xs md:text-sm lg:text-md leading-relaxed max-w-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                corrupti soluta perferendis vitae accusamus expedita ab sapiente
                debitis molestias quam.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 rounded-md  px-1 py-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="h-50 rounded-md bg-white border-l-2 border-main p-1 ">
                Product 1
            </div>
            <div className="h-50 rounded-md bg-white border-l-2 border-main p-1 ">
                Product 2
            </div>
            <div className="h-50 rounded-md bg-white border-l-2 border-main p-1 ">
                Product 3
            </div>
            <div className="h-50 rounded-md bg-white border-l-2 border-main p-1 ">
                Product 4
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
