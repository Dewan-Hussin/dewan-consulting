import { ArrowUpRight } from "lucide-react";
import Reveal from "../../../../components/shared/Reveal";
import { SectionEyebrow } from "../../../../components/shared/SectionEyebrow";

const principles = [
  {
    index: "01",
    title: "Build for the weekday",
    body: "Software is judged by how it behaves on an ordinary Tuesday at 8:02 — not by how it looks in a demo. We design for the second month, not the first day.",
  },
  {
    index: "02",
    title: "Own the handoff",
    body: "Advice, implementation and audit live under one roof, so nobody can pass the problem on to a third party. When something slips, it slips on us.",
  },
  {
    index: "03",
    title: "Respect payday",
    body: "The last line of a payroll cannot fail, run late, or be mostly right. Our testing starts and ends there — no payroll is shipped on trust.",
  },
  {
    index: "04",
    title: "Speak plainly",
    body: "No jargon between us and your operations team. Fewer surprises, better decisions, and a paper trail your finance director can actually read.",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="relative bg-second text-main dark:bg-background dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* sticky heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <SectionEyebrow index="003" label="What we operate by" />
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Four rules we{" "}
                  <span className="text-main">never bend.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-sm text-pretty leading-relaxed text-navy-950/60 dark:text-white/55">
                  Written down after the project that taught us everything.
                  They appear in every proposal, and we hold them up when a
                  deadline gets uncomfortable.
                </p>
              </Reveal>
            </div>
          </div>

          {/* numbered list */}
          <div className="lg:col-span-8">
            <ol className="divide-y divide-navy-950/10 border-y border-navy-950/10 dark:divide-white/10 dark:border-white/10">
              {principles.map((item, i) => (
                <li key={item.index}>
                  <Reveal delay={i * 80}>
                    <div className="group flex gap-6 py-8 transition-colors sm:gap-10 sm:py-10">
                      <span className="pt-1 text-sm font-bold tabular-nums tracking-widest text-brand/70">
                        {item.index}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-pretty leading-relaxed text-navy-950/60 dark:text-white/55">
                          {item.body}
                        </p>
                      </div>
                      <ArrowUpRight
                        aria-hidden
                        className="mt-1 size-5 shrink-0 self-start text-brand/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand rtl:-scale-x-100 rtl:group-hover:translate-x-0 rtl:group-hover:-translate-x-1"
                      />
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}