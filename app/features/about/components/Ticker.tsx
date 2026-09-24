const products = [
  "FreightAccount",
  "Payroll Outsourcing",
  "Time & Attendance",
  "Withholding Tax",
  "HR System",
  "General Ledger",
  "Implementation Audit",
  "Project Management",
];

export default function Ticker() {
  const items = [...products, ...products];

  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-white/10 bg-navy-900 py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="flex w-max animate-marquee will-change-transform">
        {items.map((label, i) => (
          <div key={i} className="flex items-center">
            <span
              aria-hidden
              className="mx-8 size-1.5 shrink-0 rotate-45 bg-brand-bright/50"
            />
            <span className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-white/60">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}