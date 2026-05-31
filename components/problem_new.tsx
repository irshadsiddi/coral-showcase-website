"use client"

import { motion } from "framer-motion"

export function Problem() {
  return (
    <section id="manifesto" className="py-24 border-b border-white/5 bg-[#0b1014]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-[#e6e6e2] font-cal mb-8 leading-tight"
        >
          Forged in the Trenches. <br className="hidden md:block" />
          <span className="text-[#c5a059]">Built for the Crew.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-lg md:text-xl text-[#8a99a8] leading-relaxed"
        >
          <p>
            We didn't build this for managers in boardrooms; we built it to survive the high seas of modern infrastructure. As developers, we waste countless hours context-switching between GitHub tabs, Vercel dashboards, and Stripe logs just to piece together what went wrong during a deployment.
          </p>
          <p>
            Jackdaw is the tool we wished we had. It is a unified, terminal-native interface that cuts through the noise, built by developers who just want their data fast, accurate, and completely under their control.
          </p>
        </motion.div>
      </div>
    </section>
  )
}