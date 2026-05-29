import { mockDashboard, type Feature } from "@/lib/mock-data"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

const actionFor: Record<Feature["status"], { label: string; cls: string }> = {
  roll: { label: "Roll out", cls: "text-brand-emerald" },
  monitor: { label: "Monitor", cls: "text-brand-amber" },
  new: { label: "New", cls: "text-ink-secondary" },
  healthy: { label: "Healthy", cls: "text-ink-tertiary" },
}

export function FeatureTable() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-base-surface">
      <div className="border-b border-white/[0.06] px-4 py-3">
        <h3 className="text-[14px] font-medium text-ink-primary">Feature adoption</h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-white/[0.06] hover:bg-transparent">
              <TableHead className="h-9 text-[11px] font-normal text-ink-tertiary">Feature</TableHead>
              <TableHead className="h-9 text-[11px] font-normal text-ink-tertiary">Shipped</TableHead>
              <TableHead className="h-9 text-[11px] font-normal text-ink-tertiary">Users</TableHead>
              <TableHead className="h-9 text-[11px] font-normal text-ink-tertiary">Conv.</TableHead>
              <TableHead className="h-9 text-right text-[11px] font-normal text-ink-tertiary">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDashboard.features.map((f) => {
              const action = actionFor[f.status]
              return (
                <TableRow key={f.name} className="border-white/[0.06] hover:bg-white/[0.02]">
                  <TableCell className="py-2.5 text-[13px] text-ink-primary">{f.name}</TableCell>
                  <TableCell className="py-2.5 text-[13px] text-ink-tertiary">
                    {f.daysAgo === 0 ? "Today" : `${f.daysAgo}d`}
                  </TableCell>
                  <TableCell className="py-2.5 font-mono text-[13px] tabular-nums text-ink-secondary">
                    {f.users}
                  </TableCell>
                  <TableCell className="py-2.5 font-mono text-[13px] text-ink-tertiary">
                    {f.conversion === null ? "—" : `${f.conversion}%`}
                  </TableCell>
                  <TableCell className={cn("py-2.5 text-right text-[12px]", action.cls)}>
                    {action.label}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
