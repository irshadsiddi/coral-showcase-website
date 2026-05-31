"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { HeroPreview } from "@/components/landing/hero-preview"

const metrics = [
  { label: "MRR", value: "$12,400", change: "+$200" },
  { label: "DAU", value: "287", change: "+12" },
  { label: "Deploy", value: "v2.1.0", change: "2h ago" },
  { label: "Errors", value: "3", change: "0 critical" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-grid opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.a
              href="#features"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[13px] text-ink-secondary transition-colors hover:border-white/[0.12] hover:text-ink-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
              Daily Slack briefings are live
              <ArrowRight className="h-3 w-3 opacity-50" />
            </motion.a>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-8 font-cal text-[2.75rem] leading-[1.08] tracking-[-0.03em] text-ink-primary text-balance sm:text-5xl lg:text-[3.25rem]"
            >
              Know what shipped,
              <br className="hidden sm:block" /> what it earned, overnight.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-ink-secondary text-pretty lg:mx-0"
            >
              GitHub, Stripe, PostHog, and Vercel in one morning briefing — so you stop opening four tabs before coffee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <Link
                href="#features"
                className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-ink-primary px-5 text-sm font-medium text-base-bg transition-opacity hover:opacity-90 sm:w-auto"
              >
                See product preview
              </Link>
              <Link
                href="#cta"
                className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-white/[0.1] bg-transparent px-5 text-sm text-ink-secondary transition-colors hover:border-white/[0.16] hover:text-ink-primary sm:w-auto"
              >
                Get early access
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroPreview />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-14 border-t border-white/[0.06] pt-8"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-[12px] text-ink-tertiary">{m.label}</p>
                <p className="mt-1 font-mono text-lg tabular-nums tracking-tight text-ink-primary">
                  {m.value}
                </p>
                <p className="mt-0.5 text-[12px] text-ink-tertiary">{m.change}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
