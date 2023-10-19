"use client"
import React, { useContext } from "react"
import DeleteButton from "./DeleteButton"
import { DocContext } from "./DocContext"

const EditDoc = ({ docs }) => {
  const { setDataValues } = useContext(DocContext)

  const EditDoc = (id: number) => {
    const findDoc = docs.find((doc) => doc._id === id)
    if (findDoc) {
      setDataValues(findDoc)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {docs.map((doc) => (
        <div
          key={doc._id}
          className="border-2 rounded bg-background flex gap-4 py-2 px-4"
        >
          <button
            className="w-full border-r-2 border-primary"
            onClick={() => EditDoc(doc._id)}
          >
            {doc.name}
          </button>
          <div className="flex items-center justify-center w-icon h-icon">
            <DeleteButton docId={doc._id} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default EditDoc
