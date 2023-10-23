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
    <fieldset className="border-2 py-6 rounded bg-background flex items-center justify-center w-full">
      <legend className="font-medium">Documents</legend>
      <div className="flex flex-col gap-4 mx-4 w-full">
        {docs.map((doc) => (
          <div
            key={doc._id}
            className="border-2 rounded bg-background flex justify-between py-4 px-6 w-full"
          >
            <button
              className="border-r-2 border-primary w-[75%]"
              onClick={() => EditDoc(doc._id)}
            >
              {doc.name}
            </button>
            <div className="w-icon h-icon">
              <DeleteButton docId={doc._id} />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export default EditDoc
