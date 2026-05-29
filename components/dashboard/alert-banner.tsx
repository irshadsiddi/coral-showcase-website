"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export function AlertBanner() {
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDismissed(localStorage.getItem("shipdash-alert-dismissed") === "true")
  }, [])

  if (!mounted || dismissed) return null

  return (
    <div className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-base-surface px-4 py-3">
      <p className="flex-1 text-[13px] leading-relaxed text-ink-secondary">
        <span className="text-ink-primary">2 items need attention —</span> CSV parsing error recurring;
        churn at 2.2%
      </p>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem("shipdash-alert-dismissed", "true")
          setDismissed(true)
        }}
        className="shrink-0 rounded p-0.5 text-ink-tertiary transition-colors hover:text-ink-primary"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </div>
  )
}
