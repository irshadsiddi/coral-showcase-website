export type DeployStatus = "success" | "failed" | "building"
export type FeatureStatus = "roll" | "new" | "healthy" | "monitor"
export type ErrorSeverity = "critical" | "warning" | "info"

export interface Feature {
  name: string
  daysAgo: number
  users: number
  conversion: number | null
  status: FeatureStatus
}

export interface ErrorItem {
  msg: string
  count: number
  severity: ErrorSeverity
}

export const mockDashboard = {
  deploy: {
    version: "v2.1.0",
    hash: "a3f9b21",
    message: "feat: bulk upload, dark mode, API rate limits",
    author: "sarahbuilds",
    deployedAt: "2 hours ago",
    features: ["Bulk Upload", "Dark Mode", "API Rate Limits"],
    status: "success" as DeployStatus,
  },
  revenue: {
    mrr: 12400,
    mrrDelta: 200,
    mrrDeltaPct: 1.6,
    arr: 148800,
    arrDelta: 2400,
    customers: 45,
    customersDelta: 3,
    churnRate: 2.2,
    churnDelta: -0.3,
    arpu: 2755,
  },
  users: {
    dau: 287,
    dauDelta: 12,
    wau: 1203,
    wauDelta: 89,
    mau: 4891,
    mauDelta: 120,
    engagement: 5.9,
  },
  features: [
    { name: "Bulk Upload", daysAgo: 3, users: 156, conversion: 34, status: "roll" },
    { name: "Dark Mode", daysAgo: 0, users: 8, conversion: null, status: "new" },
    { name: "API Rate Limits", daysAgo: 0, users: 12, conversion: null, status: "new" },
    { name: "CSV Export", daysAgo: 8, users: 231, conversion: 61, status: "healthy" },
  ] as Feature[],
  errors: [
    { msg: "CSV parsing error", count: 2, severity: "warning" },
    { msg: "Null pointer in /api/users", count: 1, severity: "info" },
    { msg: "Timeout on /api/export", count: 0, severity: "info" },
  ] as ErrorItem[],
  mrrTrend: [
    { day: "Mon", mrr: 11800 },
    { day: "Tue", mrr: 11900 },
    { day: "Wed", mrr: 12000 },
    { day: "Thu", mrr: 12100 },
    { day: "Fri", mrr: 12200 },
    { day: "Sat", mrr: 12300 },
    { day: "Sun", mrr: 12400 },
  ],
  sparklines: {
    mrr: [11200, 11400, 11600, 11800, 12000, 12200, 12400],
    customers: [38, 39, 40, 41, 42, 43, 45],
    dau: [241, 255, 263, 270, 278, 275, 287],
    churn: [2.8, 2.7, 2.6, 2.5, 2.4, 2.3, 2.2],
  },
  nextSteps: [
    "Roll Bulk Upload to 100% — 34% conversion is above your 25% threshold.",
    "Investigate the recurring CSV parsing error before it reaches more users.",
    "Churn ticked to 2.2%. Reach out to the 2 customers flagged at-risk this week.",
  ],
}

export type MockDashboard = typeof mockDashboard

export const integrations = [
  {
    id: "github",
    name: "GitHub",
    connected: true,
    accent: "#f97316",
    description: "Deploys, commits, PRs, and release status.",
    masked: "ghp_••••••••••••3a9f",
    lastSync: "2 min ago",
    placeholder: "ghp_...",
    preview: [
      { k: "latest_deploy", v: "v2.1.0", hi: true },
      { k: "commits", v: "3" },
      { k: "status", v: "✓ success", hi: true },
      { k: "deployed_at", v: "2h ago" },
    ],
  },
  {
    id: "stripe",
    name: "Stripe",
    connected: true,
    accent: "#7c3aed",
    description: "MRR, ARR, customers, and churn.",
    masked: "sk_live_••••••••••2b4c",
    lastSync: "2 min ago",
    placeholder: "sk_live_...",
    preview: [
      { k: "mrr", v: "$12,400", hi: true },
      { k: "mrr_delta", v: "+$200 ↑", hi: true },
      { k: "customers", v: "45" },
      { k: "churn_rate", v: "2.2%" },
    ],
  },
  {
    id: "posthog",
    name: "PostHog",
    connected: false,
    accent: "#3b82f6",
    description: "DAU, WAU, engagement, and feature adoption.",
    masked: "",
    lastSync: "",
    placeholder: "phc_...",
    preview: [
      { k: "dau", v: "287 (+12)", hi: true },
      { k: "wau", v: "1,203" },
      { k: "engagement", v: "5.9%" },
      { k: "new_users", v: "8 today" },
    ],
  },
  {
    id: "vercel",
    name: "Vercel",
    connected: false,
    accent: "#000000",
    description: "Deployments, performance, and platform insights.",
    masked: "",
    lastSync: "",
    placeholder: "vercel_...",
    preview: [
      { k: "latest_deploy", v: "v2.1.0", hi: true },
      { k: "deploys_today", v: "3" },
      { k: "status", v: "✓ healthy", hi: true },
    ],
  },
]

export type Integration = (typeof integrations)[number]
