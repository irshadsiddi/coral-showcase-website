"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer id="cta" className="bg-base-bg pt-24 pb-8 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-ink-primary font-cal mb-6"
        >
          Ready to Set Sail?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-ink-secondary mb-10 max-w-xl mx-auto"
        >
          Join the crew and turn your terminal into the ultimate cross-platform
          analytics engine in under 60 seconds.
        </motion.p>

        {/* Terminal Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-brand-violet/30 bg-[#0c0c0e] shadow-[0_0_30px_rgba(124,58,237,0.1)] mb-20"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <Terminal className="h-4 w-4 text-brand-violet" />
            <span className="text-xs font-medium text-ink-secondary font-mono">
              Install Jackdaw CLI
            </span>
          </div>
          <div className="p-6 text-left font-mono text-sm md:text-base">
            <div className="flex items-center gap-3 text-ink-primary">
              <span className="text-brand-violet">❯</span>
              <span className="select-all">
                curl -fsSL https://jackdaw.sh/install | sh
              </span>
            </div>
          </div>
        </motion.div>

        {/* Minimal Footer Links */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-secondary">
          <p>© 2026 Jackdaw Crew. Built for WeMakeDevs.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/roy-abir05/jackdaw"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/wemakedevs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink-primary transition-colors"
            >
              WeMakeDevs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
