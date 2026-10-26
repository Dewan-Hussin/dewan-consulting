"use client";

import Reveal from "@/components/shared/Reveal";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  FileText,
  Plane,
  Trophy,
  Users,
} from "lucide-react";
import { memo } from "react";
import { tailoredProjectDevelopmentServices } from "../../data/service04";

function TailoredProjectDevelopment() {
  const {
    projectFeatures,
    squashFeatures,
    invoicingFeatures,
    challengesSteps,
  } = tailoredProjectDevelopmentServices;

  return (
    <section className="container mx-auto mt-10 px-4 sm:mt-12 sm:px-6 lg:px-8">
      {/* Main Service Introduction */}
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-main/10 bg-white shadow-sm">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-second/70 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1fr_0.8fr]">
            {/* Introduction */}
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-main text-white">
                  <Code2 size={21} strokeWidth={1.7} />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-main/50">
                  Service 004
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-main sm:text-4xl">
                Tailored Project
                <span className="block text-main/55">
                  Development
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-main/70">
                Every business has its own processes, challenges, and
                requirements. Our Tailored Project Development service
                transforms your operational needs into custom-built systems
                designed around the way your business works.
              </p>

              <p className="mt-3 text-sm leading-6 text-main/60">
                We work with you to understand your challenges, identify
                opportunities for improvement, and develop practical solutions
                that simplify daily operations, organize information, and
                provide meaningful business insights.
              </p>

              {/* Capabilities */}
              <div className="mt-7 border-t border-main/10 pt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-main/45">
                  Our Capabilities
                </span>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {projectFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={17}
                        strokeWidth={1.8}
                        className="mt-0.5 shrink-0 text-main/60"
                      />

                      <span className="text-sm leading-6 text-main/65">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Approach Panel */}
            <div className="flex flex-col justify-center bg-main/95 p-5 sm:p-8 lg:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                Our Approach
              </span>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Your challenges.
                <span className="block text-white/55">
                  Our tailored solutions.
                </span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                We focus on understanding your business first, then building
                systems that support your actual workflows instead of forcing
                you to adapt to generic software.
              </p>

              {/* Workflow Steps */}
              <div className="mt-6 space-y-0">
                {challengesSteps.map((step, index, steps) => (
                  <div
                    key={step.number}
                    className="relative flex gap-4 pb-5 last:pb-0"
                  >
                    {index !== steps.length - 1 && (
                      <span className="absolute left-4.5 top-10 h-[calc(100%-30px)] w-px bg-main/15" />
                    )}

                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-main/15 bg-white text-xs font-semibold text-main">
                      {step.number}
                    </span>

                    <div className="pt-0.5">
                      <h4 className="text-sm font-semibold text-white">
                        {step.title}
                      </h4>

                      <p className="mt-1 text-sm leading-5.5 text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Featured Projects */}
      <div className="mt-16 sm:mt-20">
        <div className="border-b border-main/10 pb-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-main/45">
              Selected Projects
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-main sm:text-4xl">
              Solutions built for real-world needs
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-main/60 sm:text-base">
              Explore examples of tailored systems developed to manage
              specialized operations, organize complex data, and support
              informed decision-making.
            </p>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* Project 01: Squash Association */}
          <Reveal delay={0}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-main/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-main/20 hover:shadow-xl hover:shadow-main/5">
              {/* Project Header */}
              <div className="relative overflow-hidden bg-main/95 p-5 sm:p-7">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-main/10" />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-main text-white">
                    <Trophy size={21} strokeWidth={1.7} />
                  </span>

                  <span className="rounded-full border border-main/10 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-main/55">
                    Sports Management
                  </span>
                </div>

                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Project 001
                </span>

                <h3 className="mt-2 max-w-md text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                  Egyptian Squash Association System
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
                  A specialized system designed to manage squash association
                  operations, from championship organization to player records
                  and performance reporting.
                </p>
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <div className="flex items-center gap-2">
                  <Users size={17} className="text-main/55" />

                  <h4 className="text-sm font-semibold text-main">
                    Key Capabilities
                  </h4>
                </div>

                <div className="mt-4 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                  {squashFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-main/50"
                        strokeWidth={1.8}
                      />

                      <span className="text-sm leading-6 text-main/65">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-main/10 pt-5">
                  <div className="flex items-start gap-3">
                    <BarChart3
                      size={19}
                      className="mt-0.5 shrink-0 text-main/60"
                    />

                    <div>
                      <h4 className="text-sm font-semibold text-main">
                        Business Value
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-main/60">
                        Centralized player information, organized championship
                        operations, and accessible historical records and
                        performance reports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Project 02: Airline Invoicing */}
          <Reveal delay={100}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-main/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-main/20 hover:shadow-xl hover:shadow-main/5">
              {/* Project Header */}
              <div className="relative overflow-hidden bg-main/95 p-5 sm:p-7">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-main/10" />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-main text-white">
                    <Plane size={21} strokeWidth={1.7} />
                  </span>

                  <span className="rounded-full border border-main/10 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-main/55">
                    Aviation Operations
                  </span>
                </div>

                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Project 002
                </span>

                <h3 className="mt-2 max-w-md text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                  Airline Service Invoicing System
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
                  A configurable invoicing solution that organizes complex
                  service pricing rules, contractual terms, and operational
                  reporting requirements for an airline handling company.
                </p>
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <div className="flex items-center gap-2">
                  <FileText size={17} className="text-main/55" />

                  <h4 className="text-sm font-semibold text-main">
                    Key Capabilities
                  </h4>
                </div>

                <div className="mt-4 space-y-3">
                  {invoicingFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-main/50"
                        strokeWidth={1.8}
                      />

                      <span className="text-sm leading-6 text-main/65">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-main/10 pt-5">
                  <div className="flex items-start gap-3">
                    <BarChart3
                      size={19}
                      className="mt-0.5 shrink-0 text-main/60"
                    />

                    <div>
                      <h4 className="text-sm font-semibold text-main">
                        Business Value
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-main/60">
                        Structured service calculations and reporting across
                        holding company, airport, aircraft type, and individual
                        service levels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>

      {/* Closing Statement */}
      <Reveal>
        <div className="mt-12 flex flex-col gap-4 border-t border-main/10 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-main">
              Have a unique business challenge?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-main/60">
              We develop tailored systems that address your specific operational
              requirements and business processes.
            </p>
          </div>

          <ArrowUpRight
            size={24}
            strokeWidth={1.5}
            className="shrink-0 text-main/50"
          />
        </div>
      </Reveal>
    </section>
  );
}

export default memo(TailoredProjectDevelopment);