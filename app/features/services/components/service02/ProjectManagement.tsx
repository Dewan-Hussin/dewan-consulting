import Reveal from "@/components/shared/Reveal";
import { NotebookPen, ShieldCheck } from "lucide-react";
import { memo } from "react";
import { projectManagementService } from "../../data/service02";

function ProjectManagement() {
  const { projectSteps, managedAreas } = projectManagementService;
  return (
    <section className="container mx-auto mt-16 px-4 sm:mt-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-main/10 bg-white shadow-sm">
          {/* Decorative element */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-second/70 blur-3xl" />

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT — Introduction */}
            <div className="p-6 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-main text-white">
                  <NotebookPen size={23} strokeWidth={1.7} />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-main/50">
                  Service 002
                </span>
              </div>

              <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-main sm:text-4xl">
                Project
                <span className="block text-main/55">Management</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-main/70">
                Implementing a project or acquiring a new system can be
                challenging when it falls outside your area of expertise. Our
                project management service gives you the support and control you
                need throughout the entire process.
              </p>

              <p className="mt-4 text-sm leading-7 text-main/60">
                We manage the project from finding the right offer through
                implementation planning, deadline monitoring, and required
                training sessions. This allows you to focus on your core
                operations while we handle the complexities of the project.
              </p>

              {/* Managed Areas */}
              <div className="mt-10 border-t border-main/10 pt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-main">
                    What we manage
                  </h3>

                  <span className="text-xs font-medium tracking-wider text-main/35">
                    06 AREAS
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {managedAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-start gap-2.5 text-sm text-main/65"
                    >
                      <ShieldCheck
                        size={16}
                        strokeWidth={1.8}
                        className="mt-0.5 shrink-0 text-main/50"
                      />

                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Workflow */}
            <div className="relative flex flex-col justify-between bg-main/95 p-6 sm:p-10 lg:p-14">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Our Approach
                </span>

                <h3 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Your project.
                  <span className="block text-white/55">
                    Professionally managed.
                  </span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                  From selecting the right solution to completing implementation
                  and training, we stay involved at every critical stage.
                </p>
              </div>

              {/* Steps */}
              <div className="mt-10">
                {projectSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {/* Connector */}
                    {index !== projectSteps.length - 1 && (
                      <span className="absolute left-4.5 top-10 h-[calc(100%-30px)] w-px bg-main/15" />
                    )}

                    {/* Number */}
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-main/15 bg-white text-xs font-semibold text-main">
                      {step.number}
                    </span>

                    {/* Content */}
                    <div className="pt-0.5">
                      <h4 className="text-sm font-semibold text-white">
                        {step.title}
                      </h4>

                      <p className="mt-1 max-w-sm text-sm leading-6 text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className="mt-10 rounded-xl border border-main/10 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-main/40">
                  The Result
                </p>

                <p className="mt-2 text-sm leading-6 text-main/65">
                  A controlled implementation process with clear milestones,
                  coordinated training, and a smoother path to successful
                  project delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default memo(ProjectManagement);
