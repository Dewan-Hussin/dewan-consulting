import { cn } from "@/lib/utils";

export function SectionEyebrow({
  index,
  label,
  onDark = false,
  className,
}: {
  index: string;
  label: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
        "text-main/60 dark:text-white/60",
        className,
      )}
    >
      <span className="tabular-nums ">{index}</span>
      <span aria-hidden className={cn("h-px w-8", "bg-second")} />
      <span>{label}</span>
    </p>
  );
}
