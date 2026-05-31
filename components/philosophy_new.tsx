"use client"

import { motion } from "framer-motion"
import { Shield, Zap, GitMerge, Database } from "lucide-react"

const principles = [
  {
    icon: Shield,
    title: "100% Local Execution",
    desc: "Your credentials, your data, and your usage history never leave your machine. Safety without brittle sandboxing."
  },
  {
    icon: Zap,
    title: "Zero Custom Integrations",
    desc: "Turn any API, database, or file system into a relational table instantly."
  },
  {
    icon: GitMerge,
    title: "Cross-Source JOINs",
    desc: "Seamlessly connect GitHub pull requests to live Vercel build statuses and Stripe revenue in a single query."
  },
  {
    icon: Database,
    title: "Read-Only by Design",
    desc: "Jackdaw acts as a strict read layer. Your agents can explore and query across sources without ever risking a mutation to your upstream production systems."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 border-b border-white/5 bg-[#0b1014]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-[#e6e6e2] font-cal mb-6"
          >
            Powered by Coral. Governed by You.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-[#8a99a8] leading-relaxed"
          >
            Jackdaw inherits the exact philosophy of the Coral SQL engine. We believe your infrastructure data should be accessible without sacrificing privacy or writing custom API wrappers.
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
              className="bg-[#131a20] border border-white/5 p-8 rounded-xl hover:border-[#c5a059]/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0b1014] border border-[#c5a059]/20 flex items-center justify-center mb-6 group-hover:border-[#c5a059]/50 transition-colors">
                <feature.icon className="w-6 h-6 text-[#c5a059]" />
              </div>
              <h3 className="text-xl font-bold text-[#e6e6e2] mb-3 font-cal tracking-wide">
                {feature.title}
              </h3>
              <p className="text-[#8a99a8] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}