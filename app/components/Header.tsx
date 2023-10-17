import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-around h-24  teal-100 bg-cyan-700">
      <Link href="/">
        <h1 className="text-4xl">Allt om Next.js!</h1>
      </Link>

      <nav>
        <ul className="list-none flex gap-2">
          <li>
            <Link href="/struktur">Filstruktur</Link>
          </li>
          <li>Routing</li>
          <li>Styling</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
