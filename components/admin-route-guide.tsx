"use client"

import { useAdmin } from "@/contexts/admin-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function AdminRouteGuard({ children }: { children: React.ReactNode }) {
  const { isAdmin, loading } = useAdmin()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push("/admin/login")
    }
  }, [isAdmin, loading, router])

  if (loading || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-3 border-slate-200 border-t-vigro-blue mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}