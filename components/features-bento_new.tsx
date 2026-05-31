"use client";

import { motion } from "framer-motion";
import { Search, Terminal, Compass, Zap } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Natural Language Routing",
    desc: "Just ask, 'What failed in my last deployment?' Our local AI strategist, Anne Bonny, translates your intent into precise, optimized Coral SQL.",
  },
  {
    icon: Terminal,
    title: "The Captain's Log",
    desc: "Run `jackdaw log` to transform your standard terminal into a persistent, full-screen operations dashboard tracking your entire Code-to-Cash pipeline.",
  },
  {
    icon: Compass,
    title: "Semantic Context Awareness",
    desc: "Jackdaw learns your schema access history and applies strict isolation rules to prevent context bleeding between your platforms.",
  },
  {
    icon: Zap,
    title: "Zero Configuration Setup",
    desc: "Install via a single curl script. Authenticate your sources in seconds. Throw away your custom API scripts forever.",
  },
];

export function FeaturesBento() {
  return (
    <section
      id="features"
      className="py-24 border-b border-white/[0.06] bg-base-bg"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-ink-primary font-cal mb-6"
          >
            Everything You Need to Navigate the Data Seas
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors group"
            >
              {/* Purple Glow Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-brand-violet/[0.05]" />

              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-violet/10 border border-brand-violet/20">
                  <feature.icon className="h-6 w-6 text-brand-violet" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-ink-primary tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-ink-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
