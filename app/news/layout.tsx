import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Updates - Vigro Energy",
  description: "Latest news, updates and insights from Vigro Energy",
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
