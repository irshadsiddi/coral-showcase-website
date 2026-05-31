"use client";

import { motion } from "framer-motion";
import { Shield, Zap, GitMerge, Database } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "100% Local Execution",
    desc: "Your credentials, your data, and your usage history never leave your machine. Safety without brittle sandboxing.",
  },
  {
    icon: Zap,
    title: "Zero Custom Integrations",
    desc: "Turn any API, database, or file system into a relational table instantly.",
  },
  {
    icon: GitMerge,
    title: "Cross-Source JOINs",
    desc: "Seamlessly connect GitHub pull requests to live Vercel build statuses and Stripe revenue in a single query.",
  },
  {
    icon: Database,
    title: "Read-Only by Design",
    desc: "Jackdaw acts as a strict read layer. Your agents can explore and query across sources without ever risking a mutation to your upstream production systems.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Philosophy() {
  return (
    <section
      id="philosophy"
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
            Powered by Coral. Governed by You.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-ink-secondary leading-relaxed"
          >
            Jackdaw inherits the exact philosophy of the Coral SQL engine. We
            believe your infrastructure data should be accessible without
            sacrificing privacy or writing custom API wrappers.
          </motion.p>
        </div>

        {/* Principles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {principles.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors group"
            >
              {/* Purple Glow Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-brand-violet/[0.05]" />

              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-violet/10 border border-brand-violet/20">
                  <feature.icon className="h-6 w-6 text-brand-violet" />
                </div>
                <h3 className="text-xl font-bold text-ink-primary mb-3 font-cal tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-ink-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
