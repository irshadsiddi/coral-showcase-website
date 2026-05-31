"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useSpring } from "framer-motion"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const links = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
]

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 28 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-white/20"
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background,border] duration-300",
          scrolled ? "border-b border-white/[0.06] bg-base-bg/85 backdrop-blur-md" : "border-b border-transparent",
        )}
      >
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" aria-label="Jackdaw home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-1 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-md px-3 py-1.5 text-[13px] text-ink-secondary transition-colors hover:bg-white/[0.04] hover:text-ink-primary"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/connect"
              className="hidden px-3 py-1.5 text-[13px] text-ink-secondary transition-colors hover:text-ink-primary sm:block"
            >
              Sign in
            </Link>
            <Link
              href="#cta"
              className="rounded-lg bg-ink-primary px-3.5 py-1.5 text-[13px] font-medium text-base-bg transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}
