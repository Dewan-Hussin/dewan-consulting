import Reveal from "@/components/shared/Reveal";
import {
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  Gauge,
  SearchCheck,
} from "lucide-react";
import { memo } from "react";

const auditAreas = [
  {
    icon: SearchCheck,
    title: "System Evaluation",
    description:
      "Evaluate available systems and identify the solution that best fits your company.",
  },
  {
    icon: ClipboardCheck,
    title: "Implementation Audit",
    description:
      "Review implementation activities to ensure every task follows the agreed plan.",
  },
  {
    icon: Gauge,
    title: "Milestone Monitoring",
    description:
      "Monitor deadlines, milestones, and the progress of each implementation stage.",
  },
  {
    icon: FileSearch,
    title: "Detailed Reporting",
    description:
      "Provide detailed reports covering the efficiency and completion of implemented tasks.",
  },
];

const auditStages = [
  {
    number: "01",
    title: "Evaluate",
    description:
      "Assess available systems against your company's requirements.",
  },
  {
    number: "02",
    title: "Audit",
    description:
      "Review the implementation plan, requirements, and project activities.",
  },
  {
    number: "03",
    title: "Monitor",
    description: "Follow every task and milestone to ensure timely delivery.",
  },
  {
    number: "04",
    title: "Report",
    description:
      "Deliver detailed findings and progress reports for informed decisions.",
  },
];

function ImplementationProjectAudit() {
  return (
    <section className="container mx-auto mt-16 px-4 sm:mt-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-main/10 bg-white shadow-sm">
          {/* Decorative element */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-second/70 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT — Introduction */}
            <div className="p-6 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-main text-white">
                  <BadgeCheck size={23} strokeWidth={1.7} />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-main/50">
                  Service 003
                </span>
              </div>

              <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-main sm:text-4xl">
                Implementation
                <span className="block text-main/55">Project Audit</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-main/70">
                Choosing a new system can be challenging with so many solutions
                and options available. Our Implementation Project Audit service
                provides the professional consulting you need to identify the
                system that best fits your company's requirements.
              </p>

              <p className="mt-4 text-sm leading-7 text-main/60">
                If you have already purchased a system, we can also monitor its
                implementation from start to finish. We follow tasks,
                milestones, and deadlines while evaluating implementation
                efficiency and providing detailed reports throughout the
                project.
              </p>

              {/* Before / After */}
              <div className="mt-10 grid gap-4 border-t border-main/10 pt-8 sm:grid-cols-2">
                <div className="rounded-xl border border-main/10 bg-main/90 p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Before Purchase
                  </span>

                  <h3 className="mt-2 text-base font-semibold text-white">
                    Choose with confidence
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Compare available options and determine which system aligns
                    best with your business needs.
                  </p>
                </div>

                <div className="rounded-xl border border-main/10 bg-main/90 p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    After Purchase
                  </span>

                  <h3 className="mt-2 text-base font-semibold text-white">
                    Implement with control
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Monitor implementation tasks and milestones to help ensure
                    successful and timely delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Audit Process */}
            <div className="relative flex flex-col bg-main/95 p-6 sm:p-10 lg:p-14">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Our Audit Process
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  From selection
                  <span className="block text-white/55">
                    to successful delivery.
                  </span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                  We provide an independent view of the system selection and
                  implementation process, helping you maintain control at every
                  critical stage.
                </p>
              </div>

              {/* Audit stages */}
              <div className="mt-10 grid gap-3">
                {auditStages.map((stage) => (
                  <div
                    key={stage.number}
                    className="group flex gap-4 rounded-xl border border-main/10 bg-white p-4 transition-all duration-300 hover:border-main/20 hover:shadow-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-main text-xs font-semibold text-white">
                      {stage.number}
                    </span>

                    <div>
                      <h4 className="text-sm font-semibold text-main">
                        {stage.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-main/60">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Outcome */}
              <div className="mt-auto pt-8">
                <div className="flex items-start gap-3 rounded-xl border border-main/10 bg-white p-5">
                  <BadgeCheck
                    size={19}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-main/70"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-main/40">
                      The Outcome
                    </p>

                    <p className="mt-2 text-sm leading-6 text-main/65">
                      Make informed system decisions and maintain visibility
                      over implementation performance, milestones, and delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Audit Areas */}
      <div className="mt-20 sm:mt-24">
        <div className="border-b border-main/10 pb-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-main/45">
                  What We Provide
                </span>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-main sm:text-4xl">
                  Complete implementation oversight
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-main/60 sm:text-right">
                Professional oversight designed to give you clarity,
                accountability, and confidence throughout the system lifecycle.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {auditAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <Reveal key={area.title} delay={index * 70}>
                <article className="group h-full rounded-xl border border-main/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-main/20 hover:shadow-lg hover:shadow-main/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-second text-main transition-colors duration-300 group-hover:bg-main group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>

                  <h3 className="mt-6 text-base font-semibold text-main">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-main/60">
                    {area.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(ImplementationProjectAudit);
