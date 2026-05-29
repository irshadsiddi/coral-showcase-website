"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { integrations, type Integration } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

function IntegrationCard({
  integration,
  onConnect,
}: {
  integration: Integration
  onConnect: (id: string) => void
}) {
  const [key, setKey] = useState("")
  const [loading, setLoading] = useState(false)
  const connected = integration.connected

  const connect = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onConnect(integration.id)
      toast.success(`${integration.name} connected`)
    }, 700)
  }

  return (
    <div className="rounded-xl border border-white/[0.06] bg-base-surface p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[14px] font-medium text-ink-primary">{integration.name}</p>
          <p className="mt-0.5 text-[13px] text-ink-secondary">{integration.description}</p>
        </div>
        <span
          className={cn(
            "shrink-0 text-[11px]",
            connected ? "text-brand-emerald" : "text-ink-tertiary",
          )}
        >
          {connected ? "Connected" : "Not connected"}
        </span>
      </div>

      {connected ? (
        <div className="mt-4 flex items-center justify-between text-[12px]">
          <span className="font-mono text-ink-tertiary">{integration.masked}</span>
          <button type="button" className="text-ink-tertiary hover:text-ink-secondary">
            Disconnect
          </button>
        </div>
      ) : (
        <div className="mt-4 flex gap-2">
          <Input
            placeholder={integration.placeholder}
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="h-9 border-white/[0.08] bg-base-bg font-mono text-[13px]"
          />
          <button
            type="button"
            onClick={connect}
            disabled={loading || !key.trim()}
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg bg-ink-primary px-4 text-[13px] font-medium text-base-bg disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "Connect"}
          </button>
        </div>
      )}
    </div>
  )
}

export default function ConnectPage() {
  const [connectedIds, setConnectedIds] = useState(
    () => new Set(integrations.filter((i) => i.connected).map((i) => i.id)),
  )
  const [testLoading, setTestLoading] = useState(false)

  const items = integrations.map((i) => ({
    ...i,
    connected: connectedIds.has(i.id),
  }))

  return (
    <div className="mx-auto max-w-lg space-y-8">
      <div>
        <h1 className="font-cal text-xl tracking-tight text-ink-primary md:text-2xl">
          Connect
        </h1>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">
          Read-only keys, encrypted at rest. Never logged.
        </p>
      </div>

      <div className="space-y-3">
        {items.map((integration) => (
          <IntegrationCard
            key={integration.id}
            integration={integration}
            onConnect={(id) => setConnectedIds((prev) => new Set([...prev, id]))}
          />
        ))}
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-base-surface p-4">
        <p className="text-[14px] font-medium text-ink-primary">Slack</p>
        <p className="mt-0.5 text-[13px] text-ink-secondary">Daily briefing delivery</p>
        <div className="mt-4 space-y-3">
          <Input
            placeholder="Webhook URL"
            className="h-9 border-white/[0.08] bg-base-bg text-[13px]"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <Select defaultValue="general">
              <SelectTrigger className="h-9 border-white/[0.08] bg-base-bg text-[13px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">#general</SelectItem>
                <SelectItem value="founders">#founders</SelectItem>
              </SelectContent>
            </Select>
            <Input type="time" defaultValue="07:00" className="h-9 border-white/[0.08] bg-base-bg" />
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-[13px] text-ink-secondary">Daily report</span>
            <Switch defaultChecked />
          </div>
          <button
            type="button"
            disabled={testLoading}
            onClick={() => {
              setTestLoading(true)
              setTimeout(() => {
                setTestLoading(false)
                toast.success("Test message sent to #general")
              }, 600)
            }}
            className="h-9 w-full rounded-lg border border-white/[0.08] text-[13px] text-ink-secondary transition-colors hover:bg-white/[0.03] hover:text-ink-primary disabled:opacity-50"
          >
            {testLoading ? <Loader2 className="mx-auto h-3.5 w-3.5 animate-spin" /> : "Send test"}
          </button>
        </div>
      </div>
    </div>
  )
}
