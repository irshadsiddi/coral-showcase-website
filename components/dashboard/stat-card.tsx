import { Sparkline } from "@/components/sparkline"
import { cn } from "@/lib/utils"

export function StatCard({
  label,
  value,
  delta,
  positive,
  data,
}: {
  label: string
  value: string
  delta: string
  positive: boolean
  data: number[]
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-base-surface p-4">
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-[12px] text-ink-tertiary">{label}</p>
        <span
          className={cn(
            "font-mono text-[11px] tabular-nums",
            positive ? "text-brand-emerald" : "text-brand-rose",
          )}
        >
          {delta}
        </span>
      </div>
      <p className="mt-2 font-mono text-2xl tabular-nums tracking-tight text-ink-primary">{value}</p>
      <div className="mt-3 h-8 opacity-60">
        <Sparkline data={data} color="rgba(255,255,255,0.35)" type="line" height={32} />
      </div>
    </div>
  )
}
