"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, GitMerge, Anchor, Copy, Check } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const installCommand = "curl -fsSL https://jackdaw.sh/install | sh";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 bg-base-bg">
      {/* Subtle Purple Background Glow */}
      <div 
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_60%)]" 
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Copy & Main CTAs */}
        <div className="flex flex-col items-start text-left">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-violet/30 bg-brand-violet/10 px-3 py-1.5 text-[13px] font-medium text-brand-violet mb-8"
          >
            <Anchor className="w-4 h-4" />
            Sailing Now: Hackathon Alpha
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-cal text-5xl tracking-tighter text-ink-primary sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.05]"
          >
            JACKDAW
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl md:text-2xl font-medium text-brand-violet max-w-lg text-balance"
          >
            The 100% Local Command Center for Your Code-to-Cash Pipeline.
          </motion.p>

          {/* Description Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 text-lg text-ink-secondary max-w-xl leading-relaxed text-balance"
          >
            Query GitHub, Vercel, PostHog, and Stripe simultaneously using pure
            natural language right from your terminal. No ETL. No warehouse. No
            glue code. Just you, your crew, and the open ocean of data.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="#demo"
              className="px-6 py-3 rounded-lg bg-ink-primary text-base-bg font-medium transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
            >
              See it in action
            </Link>
            <Link
              href="https://github.com/roy-abir05/jackdaw"
              target="_blank"
              className="px-6 py-3 rounded-lg bg-transparent text-ink-secondary border border-white/[0.1] hover:text-ink-primary hover:border-white/[0.2] transition-colors flex items-center justify-center gap-2"
            >
              <GitMerge className="w-5 h-5" />
              View GitHub
            </Link>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Terminal Block CTA */}
        <motion.div
          initial={{ opacity: 0, x: 24, rotate: 1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 50 }}
          className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
        >
          {/* Subtle glow behind the terminal */}
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-brand-violet/40 to-transparent opacity-50 blur-xl"></div>
          
          <div className="relative bg-[#0c0c0e] rounded-xl border border-white/[0.08] overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-white/[0.02] px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-xs text-ink-tertiary font-mono">
                bash ~ install
              </span>
              <button 
                onClick={handleCopy}
                className="text-ink-secondary hover:text-ink-primary transition-colors flex items-center justify-center w-6 h-6 rounded-md hover:bg-white/[0.05]"
                aria-label="Copy install command"
              >
                {copied ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            
            {/* Terminal Body */}
            <div className="p-8 text-left font-mono text-sm sm:text-base overflow-x-auto whitespace-nowrap">
              <div className="flex items-center gap-3 text-ink-primary">
                <span className="text-brand-violet">❯</span>
                <span className="select-all">{installCommand}</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-ink-secondary opacity-60">
                <span className="animate-pulse block w-2 h-4 bg-ink-secondary"></span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}