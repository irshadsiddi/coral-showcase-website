import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-[13px] text-ink-tertiary">Ship. Measure. Grow.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-[13px] text-ink-secondary">
          <a href="#features" className="transition-colors hover:text-ink-primary">
            Features
          </a>
          <a href="#" className="transition-colors hover:text-ink-primary">
            GitHub
          </a>
        </div>
        <p className="text-[13px] text-ink-tertiary">© 2026 ShipDash</p>
      </div>
    </footer>
  )
}
