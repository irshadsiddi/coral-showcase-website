import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/ui/surface"
import { LogoMark } from "@/components/logo"
import { Check } from "lucide-react"
import { GitHubIcon, StripeIcon, PostHogIcon, VercelIcon } from "@/components/brand-icons"

const steps = [
  {
    title: "Connect your stack",
    body: "Paste read-only API keys from GitHub, Stripe, PostHog, and Vercel. No OAuth wizard.",
    visual: (
      <div className="flex gap-2">
        {[GitHubIcon, StripeIcon, PostHogIcon, VercelIcon].map((Icon, i) => (
          <div
            key={i}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/[0.06] bg-base-bg text-ink-tertiary"
          >
            <Icon className="h-3.5 w-3.5" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Run your first report",
    body: "ShipDash pulls the last 24 hours from all four sources and assembles your briefing.",
    visual: (
      <p className="flex items-center gap-2 text-[13px] text-ink-secondary">
        <Check className="h-3.5 w-3.5 text-brand-emerald" strokeWidth={2} />
        Report ready in 12s
      </p>
    ),
  },
  {
    title: "Wake up to clarity",
    body: "Set a daily time. Your briefing posts to Slack — no app to open.",
    visual: (
      <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-base-bg px-3 py-2">
        <LogoMark className="h-4 w-4" />
        <span className="text-[12px] text-ink-secondary">Briefing delivered · 7:00 AM</span>
      </div>
    ),
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-white/[0.06] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <SectionHeader
            align="center"
            label="How it works"
            title="Five minutes to set up."
            description="Useful every morning after that."
          />
        </Reveal>

        <div className="mt-14 space-y-0">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="grid gap-4 border-l border-white/[0.08] py-8 pl-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
                <div>
                  <p className="font-mono text-[12px] text-ink-tertiary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-[17px] font-medium text-ink-primary">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">{step.body}</p>
                </div>
                <div className="md:justify-self-end">{step.visual}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
