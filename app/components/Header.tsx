"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
const Header = () => {
  const pathname = usePathname()
  return (
    <header className="sticky z-20 top-0 flex items-center justify-between h-20 px-10 text-primary bg-background">
      <Link href="/">
        <h1 className="text-xl font-semibold">TextEditor</h1>
      </Link>

      <nav>
        <ul className="list-none text-standard flex gap-2 sm:gap-10">
          <li className={pathname == "/write" ? "active" : ""}>
            <Link href="/write">Write</Link>
          </li>
          <li className={pathname == "/preview" ? "active" : ""}>
            <Link href="/preview">Preview</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
