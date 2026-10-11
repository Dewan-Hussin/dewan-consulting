"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SectionEyebrow } from "./SectionEyebrow";

const stats = [
  {
    value: 17,
    decimals: 0,
    suffix: "",
    label: "Years shipping software",
    note: "since 2008",
  },
  {
    value: 42,
    decimals: 0,
    suffix: "+",
    label: "Systems delivered",
    note: "tailored & product",
  },
  {
    value: 1.2,
    decimals: 1,
    suffix: "M+",
    label: "Pay slips processed",
    note: "every payroll cycle",
  },
  {
    value: 30,
    decimals: 0,
    suffix: "+",
    label: "Specialists",
    note: "engineering, audit & support",
  },
];

function CountUp({
  value,
  decimals,
  active,
}: {
  value: number;
  decimals: number;
  active: boolean;
}) {
  const [n, setN] = useState(0);
  const formatter = useMemo(
    () => new Intl.NumberFormat("en", { maximumFractionDigits: decimals }),
    [decimals],
  );

  useEffect(() => {
    if (!active) return;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? 0
      : 1400;
    const start = performance.now();
    let raf: number;

    const tick = (t: number) => {
      const progress = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setN(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);

  return <>{formatter.format(n)}</>;
}

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-navy-950 text-white">
      <div aria-hidden className="absolute inset-0 bg-noise" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <SectionEyebrow index="003" label="By the numbers" onDark />
          <p className="text-sm text-white/50">
            Deliberately boring to operate. Hard to live without.
          </p>
        </div>

        <div ref={ref} className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-navy-950 p-8 sm:p-10">
              <p className="text-4xl font-bold tabular-nums tracking-tight text-brand-bright lg:text-5xl">
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals}
                  active={active}
                />
                {stat.suffix}
              </p>
              <p className="mt-3 text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-xs text-white/50">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}