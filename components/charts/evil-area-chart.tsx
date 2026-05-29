"use client"

import { useId } from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { cn } from "@/lib/utils"

export type ChartPoint = { [key: string]: string | number }

type EvilAreaChartProps = {
  data: ChartPoint[]
  dataKey: string
  xKey?: string
  height?: number
  color?: string
  showGrid?: boolean
  showAxis?: boolean
  className?: string
  valueFormatter?: (v: number) => string
  yFormatter?: (v: number) => string
}

function ChartTooltip({
  active,
  payload,
  label,
  valueFormatter,
}: {
  active?: boolean
  payload?: { value: number }[]
  label?: string
  valueFormatter?: (v: number) => string
}) {
  if (!active || !payload?.length) return null
  const v = payload[0].value
  return (
    <div className="rounded-lg border border-white/[0.14] bg-base-elevated/95 px-3 py-2 shadow-xl backdrop-blur-sm">
      {label && <p className="text-[10px] uppercase tracking-wider text-ink-tertiary">{label}</p>}
      <p className="font-mono text-sm font-medium text-ink-primary">
        {valueFormatter ? valueFormatter(v) : v.toLocaleString()}
      </p>
    </div>
  )
}

export function EvilAreaChart({
  data,
  dataKey,
  xKey = "day",
  height = 256,
  color = "#7c3aed",
  showGrid = true,
  showAxis = true,
  className,
  valueFormatter,
  yFormatter,
}: EvilAreaChartProps) {
  const uid = useId().replace(/:/g, "")
  const fillId = `evil-fill-${uid}`
  return (
    <div className={cn("relative w-full", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: showAxis ? 0 : -20, bottom: 0 }}>
          <defs>
            <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.2} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.04)"
              vertical={false}
            />
          )}
          {showAxis && (
            <>
              <XAxis
                dataKey={xKey}
                tick={{ fontSize: 11, fill: "#52525b" }}
                tickLine={false}
                axisLine={false}
                dy={8}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#52525b" }}
                tickLine={false}
                axisLine={false}
                width={48}
                tickFormatter={yFormatter}
                domain={["dataMin - 200", "dataMax + 200"]}
              />
            </>
          )}
          <Tooltip
            content={({ active, payload, label }) => (
              <ChartTooltip
                active={active}
                payload={payload as { value: number }[] | undefined}
                label={label as string | undefined}
                valueFormatter={valueFormatter}
              />
            )}
            cursor={{ stroke: color, strokeOpacity: 0.25, strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            fill={`url(#${fillId})`}
            activeDot={{
              r: 4,
              fill: color,
              stroke: "#fafafa",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
