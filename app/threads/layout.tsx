import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Threads",
}

export default function ThreadsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}


