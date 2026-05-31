"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Demo() {
  return (
    <section
      id="demo"
      className="py-24 border-b border-white/[0.06] bg-base-bg relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-ink-primary font-cal mb-6"
        >
          See It In Action
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-ink-secondary max-w-2xl mx-auto mb-12 text-balance"
        >
          Watch Jackdaw spin up, analyze a raw natural language query, and
          instantly map live GitHub commits to Stripe revenue using cross-source
          SQL JOINs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/[0.1] bg-black shadow-[0_0_40px_rgba(124,58,237,0.15)] group"
        >
          {/* Placeholder for actual <video> or <iframe> */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c0c0e]">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-violet transition-transform group-hover:scale-110 cursor-pointer shadow-[0_0_30px_rgba(124,58,237,0.4)]">
              <Play className="h-6 w-6 ml-1 text-white" fill="currentColor" />
            </div>
            <span className="font-mono text-sm text-ink-secondary">
              Embed `jackdaw log` recording here
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
