import { cn } from "@/lib/utils";
import Image from "next/image";

export default function OurCompany() {
  return (
    <>
      <section
        id="ourCompany"
        className={cn(
          "ourCompany-sec",
          "relative w-full overflow-hidden font-sans ",
          // " bg-[#000205] ",
          // "bg-linear-to-r from-[#000205] via-[#000205]/90 to-[#000205]/80",
          "bg-main/10",
          "py-16",
          "",
          // " bg-[#000205] ",
          // "  via-[#063147] to-[#0b4a58]/80",
          // "bg-contain bg-no-repeat",
        )}
        aria-labelledby="our-company"
      >
        <div
          className={cn(
            "flex w-full justify-content-between space-x-10 ",
            "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          )}
        >
          {/* left */}
          <div className={cn("hero-content  ", "space-y-4", "w-1/2 py-5")}>
            <h2 id="hero-title">
              <span
                className={cn(
                  `block text-xl md:text-2xl text-main lg:text-4xl font-bold tracking-tight animate-in slide-in-from-bottom-8 duration-700 fade-in delay-15`,
                  "text-shadow-background ",
                )}
              >
                Our Company
              </span>
            </h2>
            <p>
              <span
                className={`block text-main/70 text-sm md:text-md lg:text-lg leading-relaxed max-w-2xl font-medium animate-in slide-in-from-bottom-6 duration-700 fade-in delay-300 `}
              >
                Dewan consulting was founded in 1987 by Engineer Hany El
                Tarhony.
              </span>
            </p>
            <p>
              <span className="text-main/90 font-semibold text-xs md:text-sm lg:text-md leading-relaxed max-w-2xl">
                Dewan consulting is a leading software company that is
                specialized in tailored software systems and outsourcing
                services for basic business functions such as payroll
                outsourcing services, project management services &
                implementation project audit, etc…
              </span>
            </p>
          </div>
          {/* right */}
          <div className="w-1/2">
            <div className="relative w-full max-h-80 max-w-125 aspect-square overflow-hidden rounded-md shadow-lg shadow-main ">
              <Image
                className="object-cover transition-transform duration-300 hover:scale-125 hover:-rotate-6"
                src="/images/about-us/about-us.jpg"
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
