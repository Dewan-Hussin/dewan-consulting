import { Link } from "@/i18n/navigation";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

export default function AboutHero() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-second/50 text-main/50">
      {/* background: grid, noise, glow, vignette */}
      <div aria-hidden className="absolute inset-0 bg-grid-slate" />
      <div aria-hidden className="absolute inset-0 bg-noise" />
      <div
        aria-hidden
        className="absolute -top-44 inset-e-[-12%] h-144 w-xl rounded-full"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-main/20 to-transparent"
      />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col justify-center gap-7 py-16">
          <Reveal>
            <SectionEyebrow index="001" label="Who we are" />
          </Reveal>

          <Reveal delay={90}>
            <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
              Software for the systems that{" "}
              <span className="text-main ">keep work moving.</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-main/80 sm:text-lg">
              Dewan Consulting designs and runs the systems behind payday, the
              freight invoice, the attendance sheet and the year-end ledger —
              and then stays to make sure they hold.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-main px-6 text-sm font-semibold text-white shadow-lg shadow-main/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-main border border-main/20 hover:border-main/30 focus-visible:ring-3 focus-visible:ring-main/50"
              >
                Start a conversation
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-main/20 px-6 text-sm font-semibold text-main/90 transition-all duration-300 hover:border-main/30 hover:bg-main hover:text-white focus-visible:ring-3 focus-visible:ring-black/40"
              >
                See what we ship
              </Link>
            </div>
          </Reveal>

          <Reveal delay={330}>
            <dl className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-main/30 pt-6 text-sm text-main/60">
              <div className="flex items-center gap-8">
                <div>
                  <dt className="sr-only">Founded</dt>
                  <dd>Est. 2008</dd>
                </div>
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rotate-45 bg-main/50"
                />
                <div>
                  <dt className="sr-only">Base</dt>
                  <dd>Cairo · Egypt</dd>
                </div>
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rotate-45 bg-main/50"
                />
                <div>
                  <dt className="sr-only">Focus</dt>
                  <dd>Payroll · Freight · HR · Tax software</dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <div className="flex items-center justify-between border-t border-main/30 pt-4 text-[0.7rem] uppercase tracking-[0.25em] text-main/60">
            <span>№ 001 — About</span>
            <span className="flex items-center gap-2">
              Scroll
              <ArrowDown
                aria-hidden
                className="size-4 animate-bounce text-main"
              />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
