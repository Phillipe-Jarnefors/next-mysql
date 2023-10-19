import React from "react"

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-white">
      <div className="">{children}</div>
    </main>
  )
}
