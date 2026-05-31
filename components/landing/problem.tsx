import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/ui/surface"

export function Problem() {
  return (
    <section className="border-t border-white/[0.06] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeader
            align="center"
            label="The problem"
            title="Four tools. Zero clarity."
            description="You're not missing data. Every metric lives in a different tab, timezone, and context."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal className="rounded-xl border border-white/[0.06] bg-base-surface p-6">
            <p className="text-[13px] font-medium text-ink-tertiary">Before</p>
            <p className="mt-2 text-[15px] text-ink-primary">Your morning routine</p>
            <div className="mt-5 space-y-2">
              {[
                { app: "GitHub", note: "47 commits — no context" },
                { app: "Stripe", note: "$12,400 MRR — no trend" },
                { app: "PostHog", note: "Charts with no labels" },
                { app: "Vercel", note: "127 issues — alarming" },
              ].map((row) => (
                <div
                  key={row.app}
                  className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-base-bg px-3 py-2.5 text-[13px]"
                >
                  <span className="text-ink-tertiary">{row.app}</span>
                  <span className="text-ink-secondary">{row.note}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13px] text-ink-tertiary">~47 min tab-switching daily</p>
          </Reveal>

          <Reveal delay={0.06} className="rounded-xl border border-white/[0.08] bg-base-surface p-6">
            <p className="text-[13px] font-medium text-ink-tertiary">After ShipDash</p>
            <p className="mt-2 text-[15px] text-ink-primary">Your new morning</p>
            <div className="mt-5 space-y-3 rounded-lg border border-white/[0.05] bg-base-bg p-4 font-mono text-[13px]">
              <p className="text-ink-primary">v2.1 shipped · 3 features</p>
              <div className="flex justify-between text-ink-secondary">
                <span>MRR</span>
                <span>
                  $12,400 <span className="text-brand-emerald">↑$200</span>
                </span>
              </div>
              <div className="flex justify-between text-ink-secondary">
                <span>DAU</span>
                <span>
                  287 <span className="text-brand-emerald">↑12</span>
                </span>
              </div>
              <p className="text-ink-tertiary">0 critical errors</p>
            </div>
            <p className="mt-5 text-[13px] text-ink-tertiary">~30 seconds. Everything you need.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
