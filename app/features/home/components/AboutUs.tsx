import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <section
        id="aboutUs"
        className={cn(
          "aboutUs-sec",
          "relative w-full overflow-hidden font-sans ",
          " bg-[#000205] ",
          // "bg-linear-to-r from-[#000205] via-[#000205]/90 to-[#000205]/80",
          //   "bg-white",
          "py-16",
          "",
          // " bg-[#000205] ",
          // "  via-[#063147] to-[#0b4a58]/80",
          // "bg-contain bg-no-repeat",
        )}
        aria-labelledby="about-us"
      >
        <div
          className={cn(
            "flex flex-row-reverse w-full justify-content-between space-x-10 ",
            "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          )}
        >
          {/* left */}
          <div className={cn("hero-content  ", "space-y-4", "w-1/2 py-5")}>
            <h2 id="hero-title">
              <span
                className={cn(
                  `block text-xl md:text-2xl text-slate-100 lg:text-4xl font-bold tracking-tight animate-in slide-in-from-bottom-8 duration-700 fade-in delay-15`,
                  "text-shadow-background ",
                )}
              >
                Why Choose Us
              </span>
            </h2>
            <p>
              <span
                className={`block text-[#157a91] text-sm md:text-md lg:text-lg leading-relaxed max-w-2xl font-medium animate-in slide-in-from-bottom-6 duration-700 fade-in delay-300 `}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
                ad?
              </span>
            </p>
            <p>
              <span className="text-slate-100 font-semibold text-xs md:text-sm lg:text-md leading-relaxed max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                cupiditate consectetur aut accusantium quae accusamus iusto
                veritatis inventore adipisci corrupti ad officia sequi id error
                ex, dolorum eius consequuntur? Iste quis doloremque aut
                repellendus placeat voluptatem hic odio eveniet. Neque doloribus
                quisquam quidem eligendi iure et quam minima voluptates sunt?
              </span>
            </p>

            <div>
              <Link
                href={"/company"}
                className={cn(
                  "text-white bg-[#157a91]",
                  buttonVariants({ variant: "link", size: "sm" }),
                )}
              >
                See More
              </Link>
            </div>
          </div>
          {/* right */}
          <div className="w-1/2">
            <div className="relative w-full max-h-80 max-w-125 aspect-square overflow-hidden rounded-md shadow-lg shadow-slate-500">
              <Image
                className="object-cover transition-transform duration-300 hover:scale-125 hover:rotate-6"
                src="/images/about-us/aboutus.jpg"
                alt="About us"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
