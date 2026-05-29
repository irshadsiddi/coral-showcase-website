"use client"

import { EvilAreaChart } from "@/components/charts/evil-area-chart"
import { mockDashboard } from "@/lib/mock-data"

/** Product screenshot-style preview for hero — anchors the page like Linear/Vercel */
export function HeroPreview() {
  const r = mockDashboard.revenue

  return (
    <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent opacity-50"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.65)]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="ml-2 font-mono text-[11px] text-ink-tertiary">shipdash.app/dashboard</span>
        </div>

        <div className="grid gap-px bg-white/[0.04] p-4 md:grid-cols-[140px_1fr] md:p-5">
          {/* Mini sidebar */}
          <div className="hidden space-y-1 md:block">
            {["Overview", "Reports", "Connect"].map((item, i) => (
              <div
                key={item}
                className={`rounded-md px-2.5 py-1.5 text-[11px] ${
                  i === 0 ? "bg-white/[0.06] text-ink-primary" : "text-ink-tertiary"
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium text-ink-primary">Morning briefing</p>
              <span className="font-mono text-[10px] text-ink-tertiary">May 30</span>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-base-surface px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
              <span className="font-mono text-[11px] text-ink-primary">{mockDashboard.deploy.version}</span>
              <span className="truncate text-[11px] text-ink-tertiary">{mockDashboard.deploy.message}</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { l: "MRR", v: `$${(r.mrr / 1000).toFixed(1)}k`, d: "+1.6%" },
                { l: "DAU", v: String(mockDashboard.users.dau), d: "+12" },
                { l: "Errors", v: "3", d: "0 crit" },
              ].map((m) => (
                <div key={m.l} className="rounded-lg border border-white/[0.06] bg-base-surface px-2.5 py-2">
                  <p className="text-[10px] text-ink-tertiary">{m.l}</p>
                  <p className="mt-0.5 font-mono text-sm tabular-nums text-ink-primary">{m.v}</p>
                  <p className="text-[10px] text-brand-emerald">{m.d}</p>
                </div>
              ))}
            </div>

            <div className="h-[88px] rounded-lg border border-white/[0.06] bg-base-surface px-2 pt-2">
              <EvilAreaChart
                data={mockDashboard.mrrTrend}
                dataKey="mrr"
                height={76}
                showGrid={false}
                showAxis={false}
                valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
