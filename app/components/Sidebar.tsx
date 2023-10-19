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
    <div className="px-4 text-primary bg-abstract text-center w-[25%] lg:w-[20%]">
      <h2 className="text-standard py-4">Documents</h2>
      <AddNewButton />
      <ul className="mt-8 text-center flex flex-col gap-2">
        <EditDocButton docs={docs} />
      </ul>
    </div>
  )
}

export default Sidebar
