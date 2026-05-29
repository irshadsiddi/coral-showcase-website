"use client"

import { Area, AreaChart, ResponsiveContainer, Line, LineChart } from "recharts"

export function Sparkline({
  data,
  color = "#7c3aed",
  type = "area",
  height = 40,
}: {
  data: number[]
  color?: string
  type?: "area" | "line"
  height?: number
}) {
  const chartData = data.map((v, i) => ({ i, v }))
  const id = `spark-${color.replace("#", "")}`

  return (
    <ResponsiveContainer width="100%" height={height}>
      {type === "area" ? (
        <AreaChart data={chartData} margin={{ top: 2, bottom: 2, left: 0, right: 0 }}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.3} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="v" stroke={color} strokeWidth={1.5} fill={`url(#${id})`} />
        </AreaChart>
      ) : (
        <LineChart data={chartData} margin={{ top: 2, bottom: 2, left: 0, right: 0 }}>
          <Line type="monotone" dataKey="v" stroke={color} strokeWidth={1.5} dot={false} />
        </LineChart>
      )}
    </ResponsiveContainer>
  )
}
