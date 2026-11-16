import Reveal from "../../../../components/shared/Reveal";
import { SectionEyebrow } from "../../../../components/shared/SectionEyebrow";

const team = [
  { initials: "AH", name: "Ahmed Hassan", role: "Founder & Managing Director" },
  { initials: "MK", name: "Mariam Khalil", role: "Head of Engineering" },
  { initials: "OF", name: "Omar Farag", role: "Delivery Lead" },
  { initials: "NE", name: "Nour ElSherbiny", role: "Payroll Practice Lead" },
  { initials: "MA", name: "Mostafa Adel", role: "Implementation & Audit" },
  { initials: "DI", name: "Dana Ibrahim", role: "Client Experience" },
];

export default function TeamSection() {
  return (
    <section className="relative bg-white text-navy-950 dark:bg-background dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow index="" label="The people" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                The team the software{" "}
                <span className="text-brand">is written for.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-navy-950/60 dark:text-white/55">
              Small enough that everyone here has reopened their own code. Old
              enough to have learned what that costs.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, i) => (
            <Reveal key={person.initials} delay={i * 60}>
              <div className="group flex items-center gap-5 rounded-2xl border border-navy-950/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand/30">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand to-navy-800 text-sm font-bold text-white shadow-md shadow-brand/25 transition-transform duration-300 group-hover:scale-105">
                  {person.initials}
                </div>
                <div>
                  <h3 className="font-bold tracking-tight">{person.name}</h3>
                  <p className="mt-0.5 text-sm text-navy-950/60 dark:text-white/55">{person.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}