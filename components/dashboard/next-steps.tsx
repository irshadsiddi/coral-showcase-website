"use client"

import { useState } from "react"
import { mockDashboard } from "@/lib/mock-data"
import { toast } from "sonner"
import { RotateCw } from "lucide-react"

export function NextSteps() {
  const [loading, setLoading] = useState(false)

  const regenerate = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Suggestions updated")
    }, 700)
  }

  return (
    <div className="rounded-xl border border-white/[0.06] bg-base-surface p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-medium text-ink-primary">Suggested actions</h3>
        <button
          type="button"
          onClick={regenerate}
          disabled={loading}
          className="flex items-center gap-1 text-[12px] text-ink-tertiary transition-colors hover:text-ink-secondary disabled:opacity-50"
        >
          <RotateCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} strokeWidth={1.5} />
          Refresh
        </button>
      </div>
      <ol className="mt-4 space-y-3">
        {mockDashboard.nextSteps.map((step, i) => (
          <li key={i} className="flex gap-3 text-[13px] leading-relaxed">
            <span className="font-mono text-[11px] text-ink-tertiary">{i + 1}.</span>
            <span className="text-ink-secondary">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
