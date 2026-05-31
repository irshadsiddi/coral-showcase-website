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

        {/* Minimal Footer Links */}
        {/* <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-secondary">
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
        </div> */}
      </div>
    </footer>
  );
}
