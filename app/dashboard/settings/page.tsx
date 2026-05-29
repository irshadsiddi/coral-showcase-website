"use client"

import { motion } from "framer-motion"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-2xl space-y-6"
    >
      <div>
        <h1 className="font-cal text-2xl tracking-tight text-ink-primary md:text-3xl">Settings</h1>
        <p className="mt-2 text-sm text-ink-secondary">Account and notification preferences</p>
      </div>

      {[
        { label: "Email digest fallback", desc: "Send report if Slack fails" },
        { label: "Weekly summary", desc: "Sunday rollup in your inbox" },
        { label: "Churn alerts", desc: "Notify when churn exceeds 3%" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-base-surface px-5 py-4"
        >
          <div>
            <p className="text-sm font-medium text-ink-primary">{item.label}</p>
            <p className="text-xs text-ink-tertiary">{item.desc}</p>
          </div>
          <Switch defaultChecked={item.label !== "Weekly summary"} />
        </div>
      ))}
    </motion.div>
  )
}
