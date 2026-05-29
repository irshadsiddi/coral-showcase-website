"use client"

import { EvilAreaChart } from "@/components/charts/evil-area-chart"
import { mockDashboard } from "@/lib/mock-data"

export function MrrChart() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-base-surface p-4 md:p-5">
      <div className="flex items-baseline justify-between">
        <div>
          <h3 className="text-[14px] font-medium text-ink-primary">Revenue</h3>
          <p className="text-[12px] text-ink-tertiary">7-day MRR trend</p>
        </div>
        <p className="font-mono text-[12px] text-brand-emerald">+1.6%</p>
      </div>
      <div className="mt-4">
        <EvilAreaChart
          data={mockDashboard.mrrTrend}
          dataKey="mrr"
          xKey="day"
          height={240}
          valueFormatter={(v) => `$${v.toLocaleString()}`}
          yFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
        />
      </div>
    </div>
  )
}
