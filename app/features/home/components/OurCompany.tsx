import { cn } from "@/lib/utils";
import Image from "next/image";

export default function OurCompany() {
  const foundedYear = 1987;
  const years = new Date().getFullYear() - foundedYear;

  return (
    <section
      id="ourCompany"
      className={cn(
        "ourCompany-sec relative w-full overflow-hidden bg-main/5 py-20 font-sans dark:bg-main/10",
        "md:py-24 lg:py-28",
      )}
      aria-labelledby="our-company-title"
    >
      <div
        className={cn(
          "relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4",
          "sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8",
        )}
      >
        {/* Content */}
        <div className="relative">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-main/10",
              "bg-main p-7 shadow-xl shadow-main/10",
              "sm:p-9 lg:p-10",
            )}
          >
            <div className="relative space-y-7">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-white/60" />

                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
                  Established Since 1987
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h2
                  id="our-company-title"
                  className={cn(
                    "text-3xl font-bold leading-tight tracking-tight text-white",
                    "sm:text-4xl lg:text-[2.75rem]",
                  )}
                >
                  Our Company
                </h2>

                <div className="h-1 w-14 rounded-full bg-white" />
              </div>

              {/* Intro */}
              <p
                className={cn(
                  "max-w-xl text-base font-semibold leading-7 text-white/90",
                  "sm:text-lg sm:leading-8",
                )}
              >
                Dewan Consulting was founded in 1987 by Engineer Hany El
                Tarhony.
              </p>

              {/* Description */}
              <p
                className={cn(
                  "max-w-xl text-sm leading-7 text-white/65",
                  "sm:text-base",
                )}
              >
                Dewan Consulting is a leading software company specialized in
                tailored software systems and outsourcing services for essential
                business functions such as payroll outsourcing, project
                management, and implementation project audits.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div
                  className={cn(
                    "rounded-xl border border-white/10 bg-white/5 px-4 py-4",
                    "backdrop-blur-sm",
                  )}
                >
                  <p className="text-2xl font-bold text-white">{foundedYear}</p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                    Founded
                  </p>
                </div>

                <div
                  className={cn(
                    "rounded-xl border border-white/10 bg-white/5 px-4 py-4",
                    "backdrop-blur-sm",
                  )}
                >
                  <p className="text-2xl font-bold text-white">{years}+</p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative mx-auto w-full max-w-140">
            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className={cn(
                "absolute -bottom-4 -right-4 h-full w-full rounded-2xl",
                "border-2 border-second/40",
              )}
            />

            {/* Image */}
            <div
              className={cn(
                "relative aspect-4/3 w-full overflow-hidden rounded-2xl",
                "border border-white bg-white shadow-2xl shadow-main/15 dark:border-white/10 dark:bg-[#1e1e1e]",
              )}
            >
              <Image
                src="/images/about-us/about-us.jpg"
                alt="Dewan Consulting"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className={cn(
                  "object-cover",
                  "transition-transform duration-700 ease-out",
                  "hover:scale-105",
                )}
              />

              {/* Image overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-main/40 via-transparent to-transparent"
              />
            </div>

            {/* Floating badge */}
            <div
              className={cn(
                "absolute -bottom-7 left-5 flex items-center gap-3",
                "rounded-xl border border-main/10 bg-white px-5 py-3",
                "shadow-xl shadow-main/15 dark:border-white/10 dark:bg-[#1e1e1e]",
                "sm:left-8",
              )}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-main text-sm font-bold text-white">
                87
              </div>

              <div>
                <p className="text-xl font-bold leading-none text-main dark:text-white">
                  1987
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-main/45 dark:text-white/45">
                  Our Beginning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
