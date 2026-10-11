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
      className="relative overflow-hidden border-y border-main/10 bg-main py-4 mask-[linear-gradient(to_right,transparent,black_1%,black_99%,transparent)]"
    >
      <div className="flex w-max animate-marquee will-change-transform">
        {items.map((label, i) => (
          <div key={i} className="flex items-center">
            <span
              aria-hidden
              className="mx-8 size-1.5 shrink-0 rotate-45 bg-second"
            />
            <span className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-white">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
