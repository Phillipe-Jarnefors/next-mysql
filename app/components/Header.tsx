import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-around h-24  teal-100 bg-cyan-700">
      <Link href="/">
        <h1 className="text-4xl">TextEditor</h1>
      </Link>

      <nav>
        <ul className="list-none flex gap-2">
          <li>
            <Link href="/preview">Preview</Link>
          </li>
          <li>
            <Link href="/write">Write</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
