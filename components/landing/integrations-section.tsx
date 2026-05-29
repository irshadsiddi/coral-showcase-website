import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/ui/surface"
import { integrations } from "@/lib/mock-data"
import { GitHubIcon, StripeIcon, PostHogIcon, SentryIcon } from "@/components/brand-icons"
import { cn } from "@/lib/utils"

const icons: Record<string, React.ReactNode> = {
  github: <GitHubIcon className="h-4 w-4" />,
  stripe: <StripeIcon className="h-4 w-4" />,
  posthog: <PostHogIcon className="h-4 w-4" />,
  sentry: <SentryIcon className="h-4 w-4" />,
}

export function IntegrationsSection() {
  return (
    <section id="integrations" className="border-t border-white/[0.06] bg-base-surface/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeader
            align="center"
            label="Integrations"
            title="Connects to your whole stack."
            description="Read-only access to the services you already use. No new workflows."
          />
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-2">
          {integrations.map((svc, i) => (
            <Reveal
              key={svc.id}
              delay={i * 0.05}
              className="rounded-xl border border-white/[0.06] bg-base-bg p-5 transition-colors hover:border-white/[0.1]"
            >
              <div className="flex items-center gap-3">
                <span className="text-ink-secondary">{icons[svc.id]}</span>
                <span className="text-[15px] font-medium text-ink-primary">{svc.name}</span>
                <span
                  className={cn(
                    "ml-auto text-[11px]",
                    svc.connected ? "text-brand-emerald" : "text-ink-tertiary",
                  )}
                >
                  {svc.connected ? "Connected" : "Setup"}
                </span>
              </div>
              <p className="mt-2 text-[13px] text-ink-secondary">{svc.description}</p>
              <div className="mt-4 space-y-1 rounded-lg border border-white/[0.05] bg-base-surface/80 p-3 font-mono text-[11px]">
                {svc.preview.map((row) => (
                  <div key={row.k} className="flex justify-between gap-4">
                    <span className="text-ink-tertiary">{row.k}</span>
                    <span className={row.hi ? "text-ink-primary" : "text-ink-secondary"}>{row.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
