"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, GitMerge, Database, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const principles = [
  {
    icon: Shield,
    title: "100% Local Execution",
    desc: "Your credentials, your data, and your usage history never leave your machine. Safety without brittle sandboxing.",
    span: "md:col-span-7", // Wide card
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    icon: Zap,
    title: "Zero Custom Integrations",
    desc: "Turn any API, database, or file system into a relational table instantly.",
    span: "md:col-span-5", // Square card
    gradient: "from-brand-amber/20 to-transparent",
  },
  {
    icon: GitMerge,
    title: "Cross-Source JOINs",
    desc: "Seamlessly connect GitHub pull requests to live Vercel build statuses and Stripe revenue in a single query.",
    span: "md:col-span-5", // Square card
    gradient: "from-brand-violet/20 to-transparent",
  },
  {
    icon: Database,
    title: "Read-Only by Design",
    desc: "Jackdaw acts as a strict read layer. Your agents can explore and query across sources without ever risking a mutation to your upstream production systems.",
    span: "md:col-span-7", // Wide card
    gradient: "from-blue-500/20 to-transparent",
  },
];

// Reusable Spotlight Card Component
function FeatureCard({ feature, index }: { feature: typeof principles[0], index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04] group",
        feature.span
      )}
    >
      {/* Interactive Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(124,58,237,0.1), transparent 40%)`,
        }}
      />
      
      {/* Static Background Gradient for depth */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100", feature.gradient)} />

      {/* Grid Pattern overlay on hover */}
      <div className="absolute inset-0 dot-grid opacity-0 transition-opacity duration-500 group-hover:opacity-30" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/[0.1] shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-violet/20 group-hover:border-brand-violet/30">
          <feature.icon className="h-6 w-6 text-ink-secondary group-hover:text-brand-violet transition-colors duration-300" />
        </div>
        
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-ink-primary mb-3 font-cal tracking-wide transition-colors group-hover:text-white">
            {feature.title}
          </h3>
          <p className="text-ink-secondary leading-relaxed text-[17px]">
            {feature.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 border-b border-white/[0.06] bg-base-bg overflow-hidden">
      
      {/* Background Section Glow */}
      <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-sm font-medium mb-6"
          >
            <Lock className="w-4 h-4" />
            Zero ETL Architecture
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-ink-primary font-cal mb-6 tracking-tight"
          >
            <span className="text-brand-violet">Powered</span> by Coral <br className="hidden md:block"/> Governed by <span className="text-brand-violet">You</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-ink-secondary leading-relaxed text-balance"
          >
            Jackdaw inherits the exact philosophy of the Coral SQL engine. We
            believe your infrastructure data should be accessible without
            sacrificing privacy or writing custom API wrappers.
          </motion.p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {principles.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}