import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/ui/surface"

const posts = [
  {
    name: "Sarah K.",
    handle: "@sarahbuilds",
    body: "I used to spend 45 minutes every morning across Stripe, PostHog, and Vercel. Now I read one Slack message and I know everything.",
    metric: "MRR $2k → $8k in 4 months",
  },
  {
    name: "Marcus R.",
    handle: "@marcusships",
    body: "I shipped dark mode on Tuesday. By Thursday I could see adoption and whether it correlated with churn. That used to take hours.",
    metric: "12 → 45 paying customers",
  },
  {
    name: "Priya L.",
    handle: "@priyamakes",
    body: "As a solo founder I can't be an analyst and a builder. Jackdaw is my analyst — I just build.",
    metric: "0 → $5k MRR, first product",
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-white/[0.06] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeader
            label="Community"
            title="Builders who stopped tab-switching."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal
              key={p.handle}
              delay={i * 0.06}
              className="flex flex-col rounded-xl border border-white/[0.06] bg-base-surface p-5"
            >
              <div>
                <p className="text-[14px] font-medium text-ink-primary">{p.name}</p>
                <p className="text-[12px] text-ink-tertiary">{p.handle}</p>
              </div>
              <p className="mt-4 flex-1 text-[14px] leading-relaxed text-ink-secondary">{p.body}</p>
              <p className="mt-4 font-mono text-[12px] text-ink-tertiary">{p.metric}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
