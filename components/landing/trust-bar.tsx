const logos = [
  "Product Hunt",
  "Y Combinator",
  "Indie Hackers",
  "GitHub",
  "Stripe",
  "Vercel",
  "Railway",
]

export function TrustBar() {
  return (
    <section className="border-y border-white/[0.06] py-12">
      <p className="text-center text-[12px] text-ink-tertiary">
        Trusted by builders shipping on
      </p>
      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
        {logos.map((name) => (
          <span
            key={name}
            className="text-[15px] font-medium tracking-tight text-ink-tertiary/80 transition-colors hover:text-ink-secondary"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
