"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/ui/surface"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const starterFeatures = [
  { label: "1 project", on: true },
  { label: "Daily reports (manual)", on: true },
  { label: "GitHub + Stripe + PostHog + Sentry", on: true },
  { label: "7-day history", on: true },
  { label: "Slack notifications", on: false },
  { label: "Custom report time", on: false },
]

const proFeatures = [
  "Unlimited projects",
  "Daily Slack briefing",
  "Custom report time + timezone",
  "90-day history",
  "Feature adoption analytics",
  "Email digest fallback",
  "Priority support",
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="border-t border-white/[0.06] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeader
            align="center"
            label="Pricing"
            title="Simple. No surprises."
            description="Free while in beta. Lock in founder pricing."
          />

          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-lg border border-white/[0.06] bg-base-surface p-0.5">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={cn(
                  "rounded-md px-4 py-1.5 text-[13px] transition-colors",
                  !yearly ? "bg-white/[0.08] text-ink-primary" : "text-ink-tertiary hover:text-ink-secondary",
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setYearly(true)}
                className={cn(
                  "rounded-md px-4 py-1.5 text-[13px] transition-colors",
                  yearly ? "bg-white/[0.08] text-ink-primary" : "text-ink-tertiary hover:text-ink-secondary",
                )}
              >
                Yearly
                <span className="ml-1.5 text-[11px] text-brand-emerald">−20%</span>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Reveal className="rounded-xl border border-white/[0.06] bg-base-surface p-8">
            <p className="text-[13px] text-ink-tertiary">Starter</p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-cal text-4xl tracking-tight text-ink-primary">$0</span>
              <span className="text-[13px] text-ink-tertiary">/mo</span>
            </div>
            <p className="mt-2 text-[14px] text-ink-secondary">For solo builders getting started.</p>
            <ul className="mt-8 space-y-2.5">
              {starterFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-2.5 text-[14px]">
                  {f.on ? (
                    <Check className="h-3.5 w-3.5 text-ink-tertiary" strokeWidth={2} />
                  ) : (
                    <X className="h-3.5 w-3.5 text-ink-tertiary/40" strokeWidth={2} />
                  )}
                  <span className={f.on ? "text-ink-secondary" : "text-ink-tertiary"}>{f.label}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className="mt-8 flex h-10 items-center justify-center rounded-lg border border-white/[0.1] text-[13px] font-medium text-ink-primary transition-colors hover:bg-white/[0.03]"
            >
              Start free
            </Link>
          </Reveal>

          <Reveal
            delay={0.06}
            className="relative rounded-xl border border-white/[0.12] bg-base-surface p-8 ring-1 ring-white/[0.04]"
          >
            <p className="text-[13px] text-ink-tertiary">Pro</p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-cal text-4xl tracking-tight text-ink-primary">
                ${yearly ? 23 : 29}
              </span>
              <span className="text-[13px] text-ink-tertiary">/mo</span>
            </div>
            <p className="mt-2 text-[14px] text-ink-secondary">For builders who track revenue seriously.</p>
            <ul className="mt-8 space-y-2.5">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[14px] text-ink-secondary">
                  <Check className="h-3.5 w-3.5 shrink-0 text-ink-tertiary" strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className="mt-8 flex h-10 items-center justify-center rounded-lg bg-ink-primary text-[13px] font-medium text-base-bg transition-opacity hover:opacity-90"
            >
              Get Pro
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
