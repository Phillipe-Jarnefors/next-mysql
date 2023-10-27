"use client"
import React, { useContext, useState } from "react"
import DeleteButton from "./DeleteButton"
import { DocContext } from "./DocContext"
import { DocumentAPI, Document } from "@/src/interface/Interface"

interface Props {
  docs: Array<DocumentAPI>
}

const EditDoc = ({ docs }: Props) => {
  const [selectDoc, setSelectDoc] = useState(0)
  const { setDataValues } = useContext(DocContext)

  const EditDoc = (id: number) => {
    const findDoc = docs.find((doc: DocumentAPI) => doc._id === id)
    if (findDoc) {
      setSelectDoc(id)
      setDataValues(findDoc)
    }
  }

  const sortByDate = docs.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  )

  return (
    <fieldset className="border-2 py-6 rounded bg-background flex items-center justify-center w-full">
      <legend className="font-medium">Documents</legend>
      <div className={`flex flex-col gap-4 mx-4 w-full`}>
        {sortByDate.map((doc) => (
          <div
            key={doc._id}
            className={`border-2 rounded  ${
              selectDoc === doc._id
                ? "bg-primary text-background"
                : "bg-background"
            } flex justify-between py-4 px-6 w-full`}
          >
            <button
              className="border-r-2 border-[#8d8d8d] w-[75%]"
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
