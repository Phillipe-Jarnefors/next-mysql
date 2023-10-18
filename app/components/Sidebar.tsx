import React from "react"

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
    <div className="border-2">
      <h2 className="text-xl">Documents</h2>
      <ul>
        {docs.map((doc) => (
          <li key={doc._id}>{doc.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
