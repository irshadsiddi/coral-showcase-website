import { mockDashboard } from "@/lib/mock-data"

export function DeployCard() {
  const d = mockDashboard.deploy
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/[0.06] bg-base-surface p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-emerald" />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[14px] font-medium text-ink-primary">{d.version}</span>
            <span className="font-mono text-[12px] text-ink-tertiary">{d.hash}</span>
            <span className="text-[12px] text-ink-tertiary">{d.deployedAt}</span>
          </div>
          <p className="mt-1 text-[13px] text-ink-secondary">{d.message}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {d.features.map((f) => (
          <span
            key={f}
            className="rounded-md border border-white/[0.06] bg-base-bg px-2 py-0.5 text-[11px] text-ink-secondary"
          >
            {f}
          </span>
        ))}
        <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[11px] text-ink-primary">
          Deployed
        </span>
      </div>
    </div>
  )
}
