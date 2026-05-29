import { AppSidebar } from "@/components/dashboard/app-sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-base-bg">
      <AppSidebar />
      <div className="px-4 pb-24 pt-14 md:ml-[220px] md:px-8 md:pb-10 md:pt-8">{children}</div>
    </div>
  )
}
