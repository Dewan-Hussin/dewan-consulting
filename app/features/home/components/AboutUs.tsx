import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="aboutUs"
      className={cn(
        "aboutUs-sec relative w-full overflow-hidden font-sans",
        "bg-main py-20 md:py-24",
      )}
      aria-labelledby="about-title"
    >
      {/* Decorative background */}
      <div
        className={cn(
          "relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-4",
          "sm:px-6 lg:flex-row-reverse lg:items-center lg:gap-16 lg:px-8",
        )}
      >
        {/* Content */}
        <div className="w-full lg:w-1/2">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-white/40",
              "bg-white/95 p-6 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-[#1e1e1e]",
              "sm:p-8 lg:p-10",
            )}
          >
            {/* Small accent */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-1 bg-main/80 dark:bg-accent-brand"
            />

            <div className="space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-main/80" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-main/80 dark:text-white/60">
                  About Dewan
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-3">
                <h2
                  id="about-title"
                  className={cn(
                    "text-3xl font-bold tracking-tight text-main dark:text-white",
                    "sm:text-4xl lg:text-5xl",
                  )}
                >
                  Why Choose Us
                </h2>

                <div className="h-1 w-14 rounded-full bg-main dark:bg-accent-brand" />
              </div>

              {/* Main statement */}
              <p className="text-base font-medium leading-relaxed text-main/70 sm:text-lg dark:text-white/70">
                Improve Your Business Performance with
                <span className="-mt-2 block text-2xl font-bold text-main sm:text-3xl dark:text-white">
                  Dewan Consulting!
                </span>
              </p>

              {/* Description */}
              <p className="text-sm font-medium leading-7 text-main/55 sm:text-base dark:text-white/55">
                Our company is formed of a group of talented software engineers,
                programmers, and business consultants who are fully capable of
                translating business needs into actual solutions and making our
                client&apos;s life easier. We do this effectively and
                efficiently in order to suit our client&apos;s business
                environment.
              </p>

              {/* Value points */}
              <div className="grid gap-3 pt-1 sm:grid-cols-2">
                {[
                  "Business-focused solutions",
                  "Experienced technical team",
                  "Efficient implementation",
                  "Tailored to your needs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-main/70 dark:text-white/70"
                  >
                    <CheckCircle2 size={17} className="shrink-0 text-main dark:text-accent-brand" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  href="/about-us"
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                    "group inline-flex h-11 gap-2 rounded-md",
                    "bg-main px-5 text-sm font-semibold text-white",
                    "shadow-md shadow-main/20",
                    "transition-all duration-300",
                    "hover:-translate-y-0.5 hover:bg-main/90 hover:shadow-lg",
                  )}
                >
                  Discover More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative mx-auto w-full max-w-140">
            {/* Image frame */}
            <div
              aria-hidden="true"
              className={cn(
                "absolute -bottom-4 -left-4 h-full w-full",
                "rounded-2xl border-2 border-second/30",
              )}
            />

            <div
              className={cn(
                "relative aspect-4/3 w-full overflow-hidden rounded-2xl",
                "border border-white/30 bg-white/10",
                "shadow-2xl shadow-black/20",
              )}
            >
              <Image
                src="/images/about-us/aboutus.jpg"
                alt="Dewan Consulting team and business solutions"
                fill
                priority={false}
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
                className="absolute inset-0 bg-linear-to-t from-main/25 via-transparent to-transparent"
              />
            </div>

            {/* Floating label */}
            <div
              className={cn(
                "absolute -bottom-6 right-5 rounded-xl",
                "border border-white/60 bg-white px-5 py-3",
                "shadow-xl shadow-black/10 dark:border-white/10 dark:bg-[#1e1e1e]",
              )}
            >
              <p className="text-xs font-medium text-main/50 dark:text-white/50">
                Technology & Consulting
              </p>

              <p className="text-sm font-bold text-main dark:text-white">Business Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
