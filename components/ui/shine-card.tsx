"use client"

import { cn } from "@/lib/utils"

/** 21st.dev-style subtle hover shine on cards */
export function ShineCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-base-surface transition-all duration-300 hover:border-white/[0.14]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(124,58,237,0.08) 50%, transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
