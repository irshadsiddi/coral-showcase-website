import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <Skeleton className="h-10 w-64 bg-white/[0.06]" />
      <Skeleton className="h-20 w-full rounded-2xl bg-white/[0.06]" />
      <Skeleton className="h-24 w-full rounded-2xl bg-white/[0.06]" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-36 rounded-2xl bg-white/[0.06]" />
        ))}
      </div>
      <Skeleton className="h-72 w-full rounded-2xl bg-white/[0.06]" />
    </div>
  )
}
