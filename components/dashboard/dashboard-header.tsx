"use client"

import { useCallback, useEffect, useState } from "react"
import { Loader2, RefreshCw } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

const ranges = ["Today", "7D", "30D"] as const

export function DashboardHeader({ onRefresh }: { onRefresh?: () => void }) {
  const [range, setRange] = useState<(typeof ranges)[number]>("Today")
  const [refreshing, setRefreshing] = useState(false)

  const refresh = useCallback(() => {
    setRefreshing(true)
    onRefresh?.()
    setTimeout(() => {
      setRefreshing(false)
      toast.success("Report refreshed")
    }, 600)
  }, [onRefresh])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "r" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = (e.target as HTMLElement)?.tagName
        if (tag === "INPUT" || tag === "TEXTAREA") return
        e.preventDefault()
        refresh()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [refresh])

  return (
    <div className="flex flex-col gap-4 border-b border-white/[0.06] pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-cal text-xl tracking-tight text-ink-primary md:text-2xl">
          Overview
        </h1>
        <p className="mt-1 text-[13px] text-ink-tertiary">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
          <span className="mx-2 text-white/20">·</span>
          Sarah
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex rounded-lg border border-white/[0.06] p-0.5">
          {ranges.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRange(r)}
              className={cn(
                "rounded-md px-2.5 py-1 text-[12px] transition-colors",
                range === r
                  ? "bg-white/[0.08] text-ink-primary"
                  : "text-ink-tertiary hover:text-ink-secondary",
              )}
            >
              {r}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={refresh}
          disabled={refreshing}
          className="flex h-8 items-center gap-1.5 rounded-lg border border-white/[0.06] px-2.5 text-[12px] text-ink-secondary transition-colors hover:border-white/[0.1] hover:text-ink-primary disabled:opacity-50"
        >
          {refreshing ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <RefreshCw className="h-3.5 w-3.5" strokeWidth={1.5} />
          )}
          <span className="hidden sm:inline">Refresh</span>
          <kbd className="hidden rounded border border-white/[0.08] bg-base-bg px-1 font-mono text-[10px] text-ink-tertiary sm:inline">
            R
          </kbd>
        </button>
      </div>
    </div>
  )
}
