"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, GitMerge, Anchor } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 bg-[#0b1014] text-[#e6e6e2]">
      <div className="relative mx-auto max-w-6xl px-6 flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131a20] border border-[#c5a059]/30 text-[#c5a059] text-sm mb-8"
        >
          <Anchor className="w-4 h-4" />
          <span className="font-medium">Sailing Now: Hackathon Alpha</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-[#e6e6e2] font-cal"
        >
          JACKDAW
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-xl md:text-3xl font-medium text-[#c5a059] max-w-3xl text-balance"
        >
          The 100% Local Command Center for Your Code-to-Cash Pipeline.
        </motion.p>

        {/* Description Copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-[#8a99a8] max-w-2xl leading-relaxed text-balance"
        >
          Query GitHub, Vercel, PostHog, and Stripe simultaneously using pure
          natural language right from your terminal. No ETL. No warehouse. No
          glue code. Just you, your crew, and the open ocean of data.
        </motion.p>

        {/* Terminal Installation Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 w-full max-w-2xl bg-black rounded-lg border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="bg-[#131a20] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#7f1d1d]"></div>
              <div className="w-3 h-3 rounded-full bg-[#c5a059]"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-700"></div>
            </div>
            <span className="text-xs text-[#8a99a8] font-mono">
              ~ / jackdaw
            </span>
          </div>
          <div className="p-6 text-left font-mono text-sm md:text-base overflow-x-auto">
            <div className="flex items-center gap-3 text-[#e6e6e2]">
              <span className="text-[#c5a059]">❯</span>
              <span>curl -fsSL https://jackdaw.sh/install | sh</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#install"
            className="px-8 py-3.5 rounded-lg bg-[#c5a059] text-[#0b1014] font-bold hover:bg-[#d4af37] transition-colors flex items-center justify-center gap-2"
          >
            <Terminal className="w-5 h-5" />
            Install CLI
          </Link>
          <Link
            href="https://github.com/roy-abir05/jackdaw"
            target="_blank"
            className="px-8 py-3.5 rounded-lg bg-[#131a20] text-[#e6e6e2] border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center gap-2"
          >
            <GitMerge className="w-5 h-5" />
            View GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
