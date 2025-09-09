"use client"

import { AdminProvider } from "@/contexts/admin-context"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return <AdminProvider>{children}</AdminProvider>
}
