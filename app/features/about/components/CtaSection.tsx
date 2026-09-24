import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div aria-hidden className="absolute inset-0 bg-grid-slate" />
      <div aria-hidden className="absolute inset-0 bg-noise" />
      <div
        aria-hidden
        className="absolute -bottom-52 start-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand/25 blur-[10rem]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <SectionEyebrow index="007" label="Next step" onDark />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-7 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Some of the best work we do goes unnoticed —{" "}
              <span className="relative inline-block text-brand-bright">
                because it works.
                <svg
                  aria-hidden
                  viewBox="0 0 240 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 start-0 h-3 w-full text-brand-bright/60"
                >
                  <path
                    d="M3 10 C 48 3, 90 12, 123 8 S 198 4, 237 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-xl text-pretty leading-relaxed text-white/70">
              If your operations feel like they run on someone else&apos;s
              goodwill, let&apos;s put it on a contract. Tell us what keeps you
              up on a Sunday night, and we&apos;ll tell you honestly what it
              takes.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand-bright focus-visible:ring-3 focus-visible:ring-brand/50"
              >
                Talk to us
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-white/15 px-6 text-sm font-semibold text-white/90 transition-all hover:border-white/30 hover:bg-white/5 focus-visible:ring-3 focus-visible:ring-white/40"
              >
                Browse services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/60">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>info@dewanconsulting.com</dd>
              </div>
              <span aria-hidden className="size-1.5 shrink-0 rotate-45 bg-brand-bright/50" />
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>+20 2 2345 6789</dd>
              </div>
              <span aria-hidden className="size-1.5 shrink-0 rotate-45 bg-brand-bright/50" />
              <div>
                <dt className="sr-only">Office</dt>
                <dd>Cairo, Egypt</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}