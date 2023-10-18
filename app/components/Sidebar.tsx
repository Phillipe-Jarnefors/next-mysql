import React from "react"
import DeleteButton from "./DeleteButton"

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
  console.log(docs)

  return (
    <div className="border-2 px-2 text-center w-[25%]">
      <h2 className="text-xl py-4">Documents</h2>
      <AddNewButton />
      <ul className="mt-8 text-center flex flex-col justify-center gap-2">
        {docs.map((doc) => (
          <div
            key={doc._id}
            className="border-2 rounded bg-slate-100 flex gap-2 items-center justify-between px-4"
          >
            <EditDocButton docId={doc._id} docName={doc.name} />

            <DeleteButton />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
