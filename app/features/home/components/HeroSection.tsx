"use client";

import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className={cn(
          "hero-sec",
          "relative w-full min-h-96 overflow-hidden flex items-center justify-center font-sans",
          "bg-cover bg-center ",
          "bg-fixed",
          "h-svh",
          "relative",
          // "h-[calc(100svh-64px)]",
        )}
        style={{
          backgroundImage: `url("/images/hero/hero-bg.webp")`,
        }}
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 bg-black/10 z-10 " />
        <div className={cn("hero-content", "space-y-4", "text-center z-30")}>
          <h1 id="hero-title">
            <span
              className={`block text-4xl md:text-6xl text-slate-100 lg:text-7xl font-bold tracking-tight animate-in slide-in-from-bottom-8 duration-700 fade-in delay-15`}
            >
              Dewan Consulting
            </span>
          </h1>
          <p>
            <span
              className={`block text-slate-100/80 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium animate-in slide-in-from-bottom-6 duration-700 fade-in delay-300 `}
            >
              Support Your Business
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

/* 
Build a HeroSection background image to a company called "Dewan Consulting" and this company systems are FreightAccount, Payroll System, Time Attendance, Withholding Tax System and HR System, Tailored Projects, Project Management, and General Ledger.
I just need a HeroSection background image that Reflect this company.
Do Your Best and Surprise me


*/
