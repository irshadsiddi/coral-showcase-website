import { cn } from "@/lib/utils"

/** Unified panel — Linear / Vercel style */
export function Surface({
  children,
  className,
  hover = false,
}: {
  children: React.ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/[0.06] bg-base-surface",
        hover && "transition-colors duration-200 hover:border-white/[0.1]",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: {
  label: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}
    >
      <p className="text-[13px] font-medium text-ink-tertiary">{label}</p>
      <h2 className="mt-3 font-cal text-3xl tracking-[-0.02em] text-ink-primary text-balance md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
