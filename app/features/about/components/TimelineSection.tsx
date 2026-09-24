import Reveal from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

const milestones = [
  {
    year: "2008",
    tag: "Founding",
    title: "The first payroll",
    body: "Founded in Cairo to finish a payroll project nobody else would take. It shipped on time, and kept improving for years after.",
  },
  {
    year: "2012",
    tag: "Product",
    title: "FreightAccount ships",
    body: "A freight accounting build for a logistics operator. Still running in production today, still handling the numbers it was handed in 2012.",
  },
  {
    year: "2015",
    tag: "Practice",
    title: "Payroll outsourcing",
    body: "Payroll processing as a managed service for international firms in Egypt — the practice that taught us what 'cannot fail' means.",
  },
  {
    year: "2018",
    tag: "Product",
    title: "Attendance & WHT",
    body: "Time & attendance and the withholding tax module shipped together, wired to the same ledger so nothing gets re-typed.",
  },
  {
    year: "2021",
    tag: "Audit",
    title: "Implementation audit",
    body: "We began auditing implementations we didn't build — and fixing the ones we did. The two reports read very differently.",
  },
  {
    year: "2025",
    tag: "Platform",
    title: "HR system & GL",
    body: "A unified HR suite and a full general ledger completed the core platform a payroll company always meant to have.",
  },
];

export default function TimelineSection() {
  return (
    <section className="relative bg-paper text-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <SectionEyebrow index="005" label="Milestones" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A few dates we{" "}
              <span className="text-brand">refuse to round.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-pretty leading-relaxed text-navy-950/60">
              History, as kept by a company that logs its own change requests.
            </p>
          </Reveal>
        </div>

        <ol className="relative ms-2 space-y-12 border-s border-navy-950/15 ps-8 sm:ps-10">
          {milestones.map((item, i) => (
            <li key={item.year} className="relative">
              <span
                aria-hidden
                className="absolute -start-[5px] top-2.5 size-2.5 rounded-full bg-brand ring-4 ring-brand/20"
              />
              <Reveal delay={i * 70}>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-sm font-bold tabular-nums tracking-[0.2em] text-brand">
                    {item.year}
                  </span>
                  <span className="rounded-full border border-navy-950/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-navy-950/60">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-navy-950/60">
                  {item.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}