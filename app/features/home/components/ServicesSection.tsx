import { cn } from "@/lib/utils";
import React from "react";
import SectionCard from "./SectionCard";

export default function ServicesSection() {
  return (
    <>
      <section
        id="services"
        className={cn(
          "services-sec",
          "relative w-full overflow-hidden font-sans ",
          " bg-white ",
          "py-16",
          "",
        )}
      >
        <div
          className={cn(
            "space-y-10 ",
            "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
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
                  `block text-xl md:text-2xl text-main lg:text-4xl font-bold tracking-tight animate-in slide-in-from-bottom-8 duration-700 fade-in delay-15`,
                  "text-shadow-background ",
                  "",
                )}
              >
                Our Services
              </span>
            </h2>
            <p>
              <span className="text-main/60 font-semibold text-xs md:text-sm lg:text-md leading-relaxed max-w-2xl">
                Our Services are composed of: payroll outsourcing services,
                project management and implementation project audit, and
                Tailored Project Implementation.
              </span>
            </p>

            <div>
              {/* <Link
                href={"/about-us"}
                className={cn(
                  buttonVariants({ variant: "link", size: "sm" }),
                  "hover:no-underline hover:bg-main group",
                  "text-main bg-main/80 text-xs font-semibold",
                )}
              >
                See more
                <span className="group-hover:translate-x-1 transition-transform duration-300 ">
                  {" "}
                  <ArrowRight />{" "}
                </span>
              </Link> */}
            </div>
          </div>

          <div className="bg-main px-3 py-5 space-y-3 flex flex-wrap gap-3 rounded-md">
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
          </div>
        </div>
      </section>
    </>
  );
}
