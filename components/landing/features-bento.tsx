"use client"

import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/ui/surface"
import { EvilAreaChart } from "@/components/charts/evil-area-chart"
import { LogoMark } from "@/components/logo"
import { mockDashboard } from "@/lib/mock-data"
import { GitBranch, TrendingUp, Users, AlertTriangle, Bell, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

function BentoCard({
  area,
  icon: Icon,
  title,
  body,
  children,
  className,
}: {
  area: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  body: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      style={{ gridArea: area }}
      className={cn(
        "flex flex-col rounded-xl border border-white/[0.06] bg-base-surface p-5 transition-colors hover:border-white/[0.1]",
        className,
      )}
    >
      <Icon className="h-4 w-4 text-ink-tertiary" strokeWidth={1.5} />
      <h3 className="mt-3 text-[15px] font-medium text-ink-primary">{title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-secondary">{body}</p>
      {children && <div className="mt-4 flex-1">{children}</div>}
    </div>
  )
}

function Inner({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-white/[0.05] bg-base-bg/80 p-3", className)}>
      {children}
    </div>
  )
}

export function FeaturesBento() {
  const commits = [
    { hash: "a3f9b21", msg: "feat: bulk upload", time: "2h", live: true },
    { hash: "7c2e0a4", msg: "fix: dark mode", time: "5h", live: false },
    { hash: "1b8d4f2", msg: "chore: deps", time: "1d", live: false },
  ]

  return (
    <section id="features" className="border-t border-white/[0.06] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeader
            label="Features"
            title="Everything in one signal."
            description="Deploys, revenue, users, and errors — correlated in a single daily view."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3"
            style={{
              gridTemplateAreas: `
                "deploy deploy revenue"
                "users errors revenue"
                "slack slack report"
              `,
            }}
          >
            <BentoCard area="deploy" icon={GitBranch} title="Every deploy, in context" body="PRs, authors, and deploy status tied to the metrics that moved the same day.">
              <Inner className="space-y-1.5">
                {commits.map((c) => (
                  <div key={c.hash} className="flex items-center gap-2 text-[12px]">
                    <span className="font-mono text-ink-tertiary">{c.hash.slice(0, 7)}</span>
                    <span className="min-w-0 flex-1 truncate text-ink-secondary">{c.msg}</span>
                    {c.live && (
                      <span className="shrink-0 text-[10px] text-brand-emerald">live</span>
                    )}
                  </div>
                ))}
              </Inner>
            </BentoCard>

            <BentoCard area="revenue" icon={TrendingUp} title="Revenue pulse" body="MRR, ARR, churn — with 7-day trends on every number.">
              <div className="h-[100px]">
                <EvilAreaChart
                  data={mockDashboard.mrrTrend}
                  dataKey="mrr"
                  height={100}
                  showGrid={false}
                  showAxis={false}
                  valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  ["MRR", "$12.4k"],
                  ["ARR", "$148.8k"],
                  ["Customers", "45"],
                  ["Churn", "2.2%"],
                ].map(([l, v]) => (
                  <div key={l} className="rounded-md bg-base-bg/80 px-2.5 py-1.5">
                    <p className="text-[10px] text-ink-tertiary">{l}</p>
                    <p className="font-mono text-[13px] tabular-nums text-ink-primary">{v}</p>
                  </div>
                ))}
              </div>
            </BentoCard>

            <BentoCard area="users" icon={Users} title="User health" body="DAU, WAU, MAU with engagement at a glance.">
              <Inner className="space-y-2.5">
                {[
                  { l: "DAU", v: 287, pct: 24 },
                  { l: "WAU", v: 1203, pct: 58 },
                  { l: "MAU", v: 4891, pct: 92 },
                ].map((b) => (
                  <div key={b.l}>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-ink-tertiary">{b.l}</span>
                      <span className="font-mono tabular-nums text-ink-secondary">{b.v.toLocaleString()}</span>
                    </div>
                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full rounded-full bg-white/25" style={{ width: `${b.pct}%` }} />
                    </div>
                  </div>
                ))}
              </Inner>
            </BentoCard>

            <BentoCard area="errors" icon={AlertTriangle} title="Error radar" body="Vercel issues triaged before you open your laptop.">
              <Inner className="space-y-2">
                {[
                  { msg: "CSV parsing", n: 2 },
                  { msg: "Slow /api/export", n: 1 },
                ].map((e) => (
                  <div key={e.msg} className="flex justify-between text-[12px]">
                    <span className="text-ink-secondary">{e.msg}</span>
                    <span className="font-mono text-ink-tertiary">×{e.n}</span>
                  </div>
                ))}
                <p className="border-t border-white/[0.06] pt-2 text-[11px] text-ink-tertiary">
                  3 total · 0 critical
                </p>
              </Inner>
            </BentoCard>

            <BentoCard area="slack" icon={Bell} title="One Slack message" body="The whole briefing in your channel, every morning.">
              <Inner>
                <div className="flex gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/[0.06] bg-base-surface">
                    <LogoMark className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 space-y-1 text-[12px] leading-relaxed">
                    <p className="font-medium text-ink-primary">Morning briefing</p>
                    <p className="text-ink-secondary">MRR $12,400 · v2.1.0 shipped · DAU 287</p>
                    <p className="text-ink-tertiary">3 errors, 0 critical</p>
                  </div>
                </div>
              </Inner>
            </BentoCard>

            <BentoCard area="report" icon={Calendar} title="Time-travel reports" body="Open any past day and see what happened when you shipped.">
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 21 }).map((_, i) => {
                  const on = [4, 11, 17].includes(i)
                  return (
                    <div
                      key={i}
                      className={cn(
                        "flex aspect-square items-center justify-center rounded text-[10px]",
                        on
                          ? "bg-white/10 font-medium text-ink-primary"
                          : "text-ink-tertiary",
                      )}
                    >
                      {i + 1}
                    </div>
                  )
                })}
              </div>
            </BentoCard>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
