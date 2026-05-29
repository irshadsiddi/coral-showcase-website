import { mockDashboard } from "@/lib/mock-data"
import { StatCard } from "@/components/dashboard/stat-card"

export function UserMetrics() {
  const u = mockDashboard.users
  return (
    <div>
      <p className="mb-3 text-[12px] font-medium text-ink-tertiary">Active users</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard
          label="DAU"
          value={u.dau.toLocaleString()}
          delta={`+${u.dauDelta}`}
          positive
          data={mockDashboard.sparklines.dau}
        />
        <StatCard
          label="WAU"
          value={u.wau.toLocaleString()}
          delta={`+${u.wauDelta}`}
          positive
          data={mockDashboard.sparklines.dau}
        />
        <StatCard
          label="MAU"
          value={u.mau.toLocaleString()}
          delta={`+${u.mauDelta}`}
          positive
          data={mockDashboard.sparklines.dau}
        />
      </div>
      <p className="mt-3 text-[12px] text-ink-tertiary">
        <span className="font-mono text-ink-secondary">{u.engagement}%</span> DAU/MAU engagement
      </p>
    </div>
  )
}
