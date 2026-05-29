"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export function FinalCta() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setEmail("")
      toast.success("You're on the list")
    }, 800)
  }

  return (
    <section id="cta" className="border-t border-white/[0.06] px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="font-cal text-3xl tracking-[-0.02em] text-ink-primary md:text-4xl">
          Stop flying blind.
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
          Join builders who wake up knowing what shipped and what it earned. Free during beta.
        </p>
        <form
          onSubmit={submit}
          className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="h-10 w-full rounded-lg border border-white/[0.1] bg-base-surface px-4 text-[14px] text-ink-primary outline-none placeholder:text-ink-tertiary focus:border-white/[0.2] sm:max-w-[280px]"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-ink-primary px-5 text-[13px] font-medium text-base-bg transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Get early access"}
          </button>
        </form>
        <p className="mt-3 text-[12px] text-ink-tertiary">No spam. Unsubscribe anytime.</p>
      </Reveal>
    </section>
  )
}
