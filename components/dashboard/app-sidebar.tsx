"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo, LogoMark } from "@/components/logo"
import { cn } from "@/lib/utils"
import { LayoutDashboard, CalendarDays, Plug, Settings } from "lucide-react"

const nav = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Reports", href: "/dashboard/reports", icon: CalendarDays },
  { label: "Connect", href: "/connect", icon: Plug },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
]

function isNavActive(pathname: string, href: string) {
  if (pathname === href) return true
  if (href === "/dashboard") return pathname === "/dashboard"
  if (href === "/connect") return pathname.startsWith("/connect")
  return pathname.startsWith(href + "/")
}

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[220px] flex-col border-r border-white/[0.06] bg-[#0a0a0b] px-3 py-5 md:flex">
        <Link href="/" className="px-2">
          <Logo />
        </Link>
        <nav className="mt-6 flex flex-1 flex-col gap-0.5">
          {nav.map((item) => {
            const active = isNavActive(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] transition-colors",
                  active
                    ? "bg-white/[0.06] text-ink-primary"
                    : "text-ink-tertiary hover:bg-white/[0.03] hover:text-ink-secondary",
                )}
              >
                <item.icon className="h-4 w-4 shrink-0 opacity-70" strokeWidth={1.5} />
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] px-2.5 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.08] text-[11px] font-medium text-ink-primary">
            SK
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] text-ink-primary">Sarah K.</p>
            <p className="text-[11px] text-ink-tertiary">Pro plan</p>
          </div>
        </div>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-white/[0.06] bg-base-bg/95 backdrop-blur-md md:hidden">
        {nav.map((item) => {
          const active = isNavActive(pathname, item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px]",
                active ? "text-ink-primary" : "text-ink-tertiary",
              )}
            >
              <item.icon className="h-5 w-5" strokeWidth={1.5} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="fixed inset-x-0 top-0 z-30 flex h-12 items-center border-b border-white/[0.06] bg-base-bg/95 px-4 backdrop-blur-md md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark className="h-5 w-5" />
          <span className="font-cal text-[15px] text-ink-primary">ShipDash</span>
        </Link>
      </div>
    </>
  )
}
