"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { LayoutDashboard, CalendarDays, Plug, Settings, Sparkles } from "lucide-react"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const run = (fn: () => void) => {
    setOpen(false)
    fn()
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => run(() => router.push("/dashboard"))}>
            <LayoutDashboard />
            Go to Dashboard
            <CommandShortcut>D</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => run(() => router.push("/dashboard"))}>
            <CalendarDays />
            {"View today's report"}
          </CommandItem>
          <CommandItem onSelect={() => run(() => router.push("/connect"))}>
            <Plug />
            Connect integration
          </CommandItem>
          <CommandItem onSelect={() => run(() => toast("Settings coming soon"))}>
            <Settings />
            Open settings
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => run(() => toast.success("Report generated"))}>
            <Sparkles />
            Generate report now
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
