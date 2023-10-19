import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between h-24 px-10 text-primary bg-abstract">
      <Link href="/">
        <h1 className="text-xl font-semibold">TextEditor</h1>
      </Link>

      <nav>
        <ul className="list-none flex gap-2">
          <li className="text-standard">
            <Link href="/write">Write</Link>
          </li>
          <li className="text-standard">
            <Link href="/preview">Preview</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
