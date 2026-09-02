import { cn } from "@/lib/utils";

export default function AboutUs() {
  return (
    <>
      <section
        id="aboutUs"
        className={cn(
          "aboutus-sec",
          "relative w-full  min-h-96 overflow-hidden flex items-center justify-center font-sans",
          // "bg-contain bg-no-repeat",
        )}
        aria-labelledby="about-us"
      >
        <div className={cn("hero-content", "space-y-4", "text-center")}>
          <h2 id="hero-title">
            <span
              className={cn(
                `block text-2xl md:text-4xl text-slate-800 lg:text-5xl font-bold tracking-tight animate-in slide-in-from-bottom-8 duration-700 fade-in delay-15`,
                "text-shadow-background ",
              )}
            >
              Our Company
            </span>
          </h2>
          <p>
            <span
              className={`block text-slate-700/80 text-md md:text-lg lg:text-xl leading-relaxed max-w-2xl font-medium animate-in slide-in-from-bottom-6 duration-700 fade-in delay-300 `}
            >
              Improve Your Business Performance with Dewan Consulting!
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
