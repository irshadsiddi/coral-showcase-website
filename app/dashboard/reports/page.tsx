"use client"

import { motion } from "framer-motion"
import { EvilAreaChart } from "@/components/charts/evil-area-chart"
import { mockDashboard } from "@/lib/mock-data"
import { Calendar } from "lucide-react"

export default function ReportsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl space-y-8"
    >
      <div>
        <h1 className="font-cal text-2xl tracking-tight text-ink-primary md:text-3xl">Reports</h1>
        <p className="mt-2 text-sm text-ink-secondary">Browse past daily briefings</p>
      </div>

      <div className="grid grid-cols-7 gap-2 rounded-2xl border border-white/[0.07] bg-base-surface p-6">
        {Array.from({ length: 28 }).map((_, i) => {
          const hasReport = [2, 9, 16, 23, 27].includes(i)
          return (
            <button
              key={i}
              type="button"
              className={`flex aspect-square flex-col items-center justify-center rounded-lg text-xs transition-colors ${
                hasReport
                  ? "bg-brand-violet text-white hover:bg-brand-violet-mid"
                  : "border border-white/[0.07] bg-base-bg text-ink-tertiary hover:border-white/[0.14]"
              }`}
            >
              <span>{i + 1}</span>
              {hasReport && <Calendar className="mt-0.5 h-3 w-3 opacity-70" />}
            </button>
          )
        })}
      </div>

      <div className="rounded-2xl border border-white/[0.07] bg-base-surface p-5">
        <h2 className="text-sm font-semibold text-ink-primary">Sunday briefing — May 25</h2>
        <p className="mt-1 text-xs text-ink-tertiary">MRR $12,400 · 3 errors · v2.1.0 deployed</p>
        <div className="mt-4">
          <EvilAreaChart
            data={mockDashboard.mrrTrend}
            dataKey="mrr"
            height={200}
            showGrid
            valueFormatter={(v) => `$${v.toLocaleString()}`}
            yFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
          />
        </div>
      </div>
    </motion.div>
  )
}
