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
          className="border-2 rounded bg-slate-100 flex gap-2 items-center justify-between px-4"
        >
          <button onClick={() => EditDoc(doc._id)}>{doc.name}</button>
          <DeleteButton />
        </div>
      ))}
    </div>
  )
}

export default EditDoc
