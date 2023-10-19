import React from "react"

import EditDocButton from "./EditDocButton"
import AddNewButton from "./AddNewButton"

interface Document {
  _id: number
  name: string
  textContent: string
  textColor: string
  backgroundColor: string
  date: string
}

interface DocumentAPI {
  digitalDocs: Document[]
}

const Sidebar = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/digitaldocs`, {
    cache: "no-store",
  })
  const data: DocumentAPI = await res.json()
  const docs = data.digitalDocs

  return (
    <div className="px-10 sm:px-4 text-primary bg-background text-center w-[100%] sm:w-[40%] lg:w-[20%]">
      <div className="w-full h-2 bg-primary rounded"></div>
      <h2 className="text-standard py-6">Dashboard</h2>
      <AddNewButton />
      <ul className="mt-8 text-center flex flex-col gap-2 pb-10 sm:pb-0">
        <EditDocButton docs={docs} />
      </ul>
    </div>
  )
}

export default Sidebar
