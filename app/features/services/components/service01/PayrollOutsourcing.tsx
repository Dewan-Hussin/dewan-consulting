"use client";

import {
  ArrowUpRight,
  Banknote,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Files,
  FileSpreadsheet,
  Landmark,
  LockKeyhole,
  LucideIcon,
  ReceiptText,
  ShieldCheck,
  Users,
} from "lucide-react";
import React, { memo } from "react";
import Reveal from "../../about/components/Reveal";
import { SectionEyebrow } from "../../about/components/SectionEyebrow";

// Payroll Outsourcing
const payrollReports = [
  {
    number: "01",
    title: "Review Reports",
    description:
      "Review employee data entries and verify the accuracy of payroll information.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Monthly Transactions",
    description:
      "A comprehensive overview of all employee transactions processed during the month.",
    icon: FileSpreadsheet,
  },
  {
    number: "03",
    title: "Detailed Salary Reports",
    description:
      "Detailed salary breakdowns organized by department, section, cost center, and job.",
    icon: Users,
  },
  {
    number: "04",
    title: "Salary Summary",
    description:
      "A consolidated monthly summary of payroll expenses and employee salaries.",
    icon: Banknote,
  },
  {
    number: "05",
    title: "Employee Pay Slips",
    description:
      "Individual salary statements prepared for clear and accurate employee communication.",
    icon: ReceiptText,
  },
  {
    number: "06",
    title: "Social Insurance Details",
    description:
      "Detailed social insurance reports organized by social insurance office.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Social Insurance Summary",
    description:
      "A consolidated view of social insurance contributions and related obligations.",
    icon: Building2,
  },
  {
    number: "08",
    title: "Bank Transfer Reports",
    description:
      "Structured bank transfer reports to support accurate and efficient salary payments.",
    icon: Landmark,
  },
  {
    number: "09",
    title: "Bank Letters",
    description:
      "Payroll-related bank letters prepared to support your salary administration process.",
    icon: Files,
  },
  {
    number: "10",
    title: "Annual Leave Tracking",
    description:
      "Track employee annual leave balances and follow up on leave records.",
    icon: CalendarDays,
  },
  {
    number: "11",
    title: "Year-to-Date Reports",
    description:
      "Detailed and summarized salary reports covering the year-to-date period.",
    icon: FileSpreadsheet,
  },
];
const benefits = [
  "Confidential handling of payroll data",
  "Accurate and efficient salary calculations",
  "Reports tailored to your requirements",
];
function PayrollOutsourcing() {
  console.log(payrollReports, benefits);

  return (
    <>
      {/* Services Overview */}
      <section className="container mx-auto mt-16 px-4 sm:mt-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-main/10 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-second/70 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              {/* Service Introduction */}
              <div className="flex flex-col justify-between gap-10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-main text-white">
                      <Banknote size={23} strokeWidth={1.7} />
                    </span>

                    {/* id */}
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-main/50">
                      Service 001
                    </span>
                  </div>
                  {/* title */}
                  <h2 className="mt-7 text-3xl font-semibold tracking-tight text-main sm:text-4xl">
                    Payroll
                    <span className="block">Outsourcing</span>
                  </h2>
                  {/* desc1 */}
                  <p className="mt-5 text-base leading-8 text-main/65">
                    Simplify your monthly payroll operations with a reliable,
                    confidential, and efficient outsourcing service that takes
                    the complexity out of salary processing.
                  </p>

                  {/* desc2 */}
                  <p className="mt-4 text-sm leading-7 text-main/60">
                    Our experienced team processes employee transactions,
                    performs salary calculations, and prepares the reports your
                    organization needs, with the flexibility to adapt reporting
                    formats to your requirements.
                  </p>
                </div>

                {/* benefits */}
                <div className="space-y-4 border-t border-main/10 pt-6">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-main/10">
                        <ShieldCheck
                          size={13}
                          className="text-main"
                          strokeWidth={2}
                        />
                      </span>

                      <p className="text-sm leading-6 text-main/75">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Panel */}
              <div className="flex flex-col justify-between rounded-xl bg-second/60 p-6 sm:p-8 lg:p-9">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-main/50">
                    How it works
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-main">
                    Payroll, made simpler.
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-main/60">
                    A straightforward process designed to reduce your
                    administrative workload.
                  </p>
                </div>

                <div className="mt-8 space-y-0">
                  {[
                    {
                      number: "01",
                      title: "Submit your data",
                      description:
                        "Provide the required employee and transaction data.",
                    },
                    {
                      number: "02",
                      title: "We process payroll",
                      description:
                        "Our team calculates salaries and prepares the reports.",
                    },
                    {
                      number: "03",
                      title: "Receive your reports",
                      description:
                        "Get organized payroll outputs tailored to your needs.",
                    },
                  ].map((step, index) => (
                    <div
                      key={step.number}
                      className="relative flex gap-4 pb-7 last:pb-0"
                    >
                      {index !== 2 && (
                        <span className="absolute left-4.25 top-10 h-[calc(100%-30px)] w-px bg-main/15" />
                      )}

                      <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-main/15 bg-white text-xs font-semibold text-main">
                        {step.number}
                      </span>

                      <div className="pt-1">
                        <h4 className="text-sm font-semibold text-main">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-main/60">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-start gap-3 rounded-lg border border-main/10 bg-white p-4">
                  <LockKeyhole
                    size={19}
                    className="mt-0.5 shrink-0 text-main/70"
                  />
                  <p className="text-xs leading-6 text-main/60">
                    Employee information is handled with a focus on
                    confidentiality throughout the payroll process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Reports Grid */}
      <section className="container mx-auto mt-20 px-4 sm:mt-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 border-b border-main/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* <Reveal>
              <SectionEyebrow
                index="01"
                label="Deliverables"
                className="text-xs tracking-[0.18em]"
              />
            </Reveal> */}

            <Reveal delay={80} className="mt-4">
              <h2 className="text-3xl font-semibold tracking-tight text-main sm:text-4xl">
                Comprehensive payroll reports
              </h2>
            </Reveal>
          </div>

          {/* <Reveal delay={120}>
            <p className="max-w-md text-sm leading-7 text-main/60 sm:text-right">
              Detailed insights and structured reporting to support your
              payroll, financial, and administrative operations.
            </p>
          </Reveal> */}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {payrollReports.map((report, index) => {
            const Icon = report.icon;

            return (
              <Reveal key={report.number} delay={(index % 3) * 70}>
                <article className="group flex h-full min-h-52 flex-col rounded-xl border border-main/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-main/25 hover:shadow-lg hover:shadow-main/5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.15em] text-main/35">
                      {report.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-second text-main transition-colors duration-300 group-hover:bg-main group-hover:text-white">
                      <Icon size={21} strokeWidth={1.7} />
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-main">
                    {report.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-main/60">
                    {report.description}
                  </p>

                  <div className="mt-auto flex justify-end pt-5">
                    <ArrowUpRight
                      size={18}
                      className="text-main/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-main"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default memo(PayrollOutsourcing);
