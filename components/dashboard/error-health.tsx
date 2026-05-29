import { mockDashboard, type ErrorSeverity } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

const dot: Record<ErrorSeverity, string> = {
  critical: "bg-brand-rose",
  warning: "bg-brand-amber",
  info: "bg-white/30",
}

export function ErrorHealth() {
  const total = mockDashboard.errors.reduce((s, e) => s + e.count, 0)
  return (
    <div className="rounded-xl border border-white/[0.06] bg-base-surface p-4">
      <h3 className="text-[14px] font-medium text-ink-primary">Errors</h3>
      <p className="mt-3 font-mono text-3xl tabular-nums text-ink-primary">{total}</p>
      <p className="text-[12px] text-ink-tertiary">today · 0 critical</p>
      <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4">
        {mockDashboard.errors
          .filter((e) => e.count > 0)
          .map((e) => (
            <li key={e.msg} className="flex items-center gap-2 text-[13px]">
              <span className={cn("h-1 w-1 rounded-full", dot[e.severity])} />
              <span className="flex-1 truncate text-ink-secondary">{e.msg}</span>
              <span className="font-mono text-[11px] text-ink-tertiary">×{e.count}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}
