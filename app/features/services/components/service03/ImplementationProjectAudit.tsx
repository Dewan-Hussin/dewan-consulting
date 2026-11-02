import Reveal from "@/components/shared/Reveal";
import { BadgeCheck } from "lucide-react";
import { memo } from "react";
import { implementationProjectAuditServices } from "../../data/service03";

function ImplementationProjectAudit() {
  const { auditAreas, auditStages } = implementationProjectAuditServices;

  return (
    <section className="container mx-auto mt-10 px-4 sm:mt-12 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative mx-auto w-[95%] overflow-hidden rounded-2xl border border-main/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#1e1e1e]">
          {/* Decorative element */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-second/70 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT — Introduction */}
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-main text-white">
                  <BadgeCheck size={21} strokeWidth={1.7} />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-main/50">
                  Service 003
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-main sm:text-4xl dark:text-white">
                Implementation
                <span className="block text-main/55 dark:text-white/55">Project Audit</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-main/70 dark:text-white/65">
                Choosing a new system can be challenging with so many solutions
                and options available. Our Implementation Project Audit service
                provides the professional consulting you need to identify the
                system that best fits your company's requirements.
              </p>

              <p className="mt-3 text-sm leading-6 text-main/60 dark:text-white/55">
                If you have already purchased a system, we can also monitor its
                implementation from start to finish. We follow tasks,
                milestones, and deadlines while evaluating implementation
                efficiency and providing detailed reports throughout the
                project.
              </p>

              {/* Before / After */}
              {/* <div className="mt-6 grid gap-3 border-t border-main/10 pt-6 sm:grid-cols-2">
                <div className="rounded-xl border border-main/10 bg-main/90 p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Before Purchase
                  </span>

                  <h3 className="mt-1.5 text-base font-semibold text-white">
                    Choose with confidence
                  </h3>

                  <p className="mt-1.5 text-sm leading-5.5 text-white/60">
                    Compare available options and determine which system aligns
                    best with your business needs.
                  </p>
                </div>

                <div className="rounded-xl border border-main/10 bg-main/90 p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    After Purchase
                  </span>

                  <h3 className="mt-1.5 text-base font-semibold text-white">
                    Implement with control
                  </h3>

                  <p className="mt-1.5 text-sm leading-5.5 text-white/60">
                    Monitor implementation tasks and milestones to help ensure
                    successful and timely delivery.
                  </p>
                </div>
              </div> */}
            </div>

            {/* RIGHT — Audit Process */}
            <div className="relative flex flex-col bg-main/95 p-5 sm:p-8 lg:p-10">
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

                <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                  We provide an independent view of the system selection and
                  implementation process, helping you maintain control at every
                  critical stage.
                </p>
              </div>

              {/* Audit stages */}
              <div className="mt-6">
                {auditStages.map((stage, index) => (
                  <div
                    key={stage.number}
                    className="relative flex gap-4 pb-5 last:pb-0"
                  >
                    {index !== auditStages.length - 1 && (
                      <span className="absolute left-4.5 top-10 h-[calc(100%-30px)] w-px bg-second/15" />
                    )}

                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-second/15 bg-white text-xs font-semibold text-main">
                      {stage.number}
                    </span>

                    <div className="pt-0.5">
                      <h4 className="text-sm font-semibold text-white">
                        {stage.title}
                      </h4>

                      <p className="mt-1 text-sm leading-5.5 text-white/60">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Audit Areas */}
      <div className="mt-16 sm:mt-20">
        <div className="border-b border-main/10 pb-6 dark:border-white/10">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-main/45">
                  What We Provide
                </span>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-main sm:text-4xl dark:text-white">
                  Complete implementation oversight
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-main/60 sm:text-right dark:text-white/55">
                Professional oversight designed to give you clarity,
                accountability, and confidence throughout the system lifecycle.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {auditAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <Reveal key={area.title} delay={index * 70}>
                <article className="group h-full rounded-xl border border-main/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-main/20 hover:shadow-lg hover:shadow-main/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-second text-main transition-colors duration-300 group-hover:bg-main group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>

                  <h3 className="mt-5 text-base font-semibold text-main dark:text-white">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-main/60 dark:text-white/55">
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
