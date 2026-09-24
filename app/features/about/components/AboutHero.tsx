import { Link } from "@/i18n/navigation";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

export default function AboutHero() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-navy-950 text-white">
      {/* background: grid, noise, glow, vignette */}
      <div aria-hidden className="absolute inset-0 bg-grid-slate" />
      <div aria-hidden className="absolute inset-0 bg-noise" />
      <div
        aria-hidden
        className="absolute -top-44 inset-e-[-12%] h-144 w-xl rounded-full bg-brand/30 blur-[10rem]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-navy-950 to-transparent"
      />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col justify-center gap-7 py-16">
          <Reveal>
            <SectionEyebrow index="001" label="Who we are" onDark />
          </Reveal>

          <Reveal delay={90}>
            <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Software for the systems that{" "}
              <span className="text-brand-bright">keep work moving.</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              Dewan Consulting designs and runs the systems behind payday, the
              freight invoice, the attendance sheet and the year-end ledger —
              and then stays to make sure they hold.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand-bright focus-visible:ring-3 focus-visible:ring-brand/50"
              >
                Start a conversation
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-white/15 px-6 text-sm font-semibold text-white/90 transition-all hover:border-white/30 hover:bg-white/5 focus-visible:ring-3 focus-visible:ring-white/40"
              >
                See what we ship
              </Link>
            </div>
          </Reveal>

          <Reveal delay={330}>
            <dl className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/60">
              <div className="flex items-center gap-8">
                <div>
                  <dt className="sr-only">Founded</dt>
                  <dd>Est. 2008</dd>
                </div>
                <span aria-hidden className="size-1.5 shrink-0 rotate-45 bg-brand-bright/50" />
                <div>
                  <dt className="sr-only">Base</dt>
                  <dd>Cairo · Egypt</dd>
                </div>
                <span aria-hidden className="size-1.5 shrink-0 rotate-45 bg-brand-bright/50" />
                <div>
                  <dt className="sr-only">Focus</dt>
                  <dd>Payroll · Freight · HR · Tax software</dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[0.7rem] uppercase tracking-[0.25em] text-white/40">
            <span>№ 001 — About</span>
            <span className="flex items-center gap-2">
              Scroll
              <ArrowDown
                aria-hidden
                className="size-4 animate-bounce text-brand-bright"
              />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}