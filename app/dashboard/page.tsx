"use client"

import { useCallback } from "react"
import { AlertBanner } from "@/components/dashboard/alert-banner"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DeployCard } from "@/components/dashboard/deploy-card"
import { ErrorHealth } from "@/components/dashboard/error-health"
import { FeatureTable } from "@/components/dashboard/feature-table"
import { MrrChart } from "@/components/dashboard/mrr-chart"
import { NextSteps } from "@/components/dashboard/next-steps"
import { StatCard } from "@/components/dashboard/stat-card"
import { UserMetrics } from "@/components/dashboard/user-metrics"
import { mockDashboard } from "@/lib/mock-data"

export default function DashboardPage() {
  const r = mockDashboard.revenue

  const handleRefresh = useCallback(() => {}, [])

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <DashboardHeader onRefresh={handleRefresh} />
      <AlertBanner />
      <DeployCard />

      <div>
        <p className="mb-3 text-[12px] font-medium text-ink-tertiary">Revenue</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="MRR"
            value={`$${r.mrr.toLocaleString()}`}
            delta={`+${r.mrrDeltaPct}%`}
            positive
            data={mockDashboard.sparklines.mrr}
          />
          <StatCard
            label="ARR"
            value={`$${(r.arr / 1000).toFixed(1)}k`}
            delta={`+$${(r.arrDelta / 1000).toFixed(1)}k`}
            positive
            data={mockDashboard.sparklines.mrr}
          />
          <StatCard
            label="Customers"
            value={String(r.customers)}
            delta={`+${r.customersDelta}`}
            positive
            data={mockDashboard.sparklines.customers}
          />
          <StatCard
            label="Churn"
            value={`${r.churnRate}%`}
            delta={`${r.churnDelta}%`}
            positive={r.churnDelta < 0}
            data={mockDashboard.sparklines.churn}
          />
        </div>
      </div>

      <UserMetrics />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <FeatureTable />
        <div className="space-y-6">
          <ErrorHealth />
          <NextSteps />
        </div>
      </div>

      <MrrChart />
    </div>
  )
}
