import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { CommandMenu } from "@/components/command-menu"
import { PageTransition } from "@/components/page-transition"

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "ShipDash — Know what shipped, what it earned, overnight",
  description:
    "ShipDash pulls GitHub, Stripe, PostHog, and Vercel into one morning briefing for indie hackers. Stop opening 4 tabs before coffee.",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#09090B",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontSans.variable} ${fontMono.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cal.com/fonts/cal-sans.css" />
      </head>
      <body className="bg-base-bg font-sans">
        <div className="relative z-[2]">
          <PageTransition>{children}</PageTransition>
        </div>
        <CommandMenu />
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
