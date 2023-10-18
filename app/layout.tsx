import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Sidebar />
        <Main>{children}</Main>
      </body>
    </html>
  )
}
