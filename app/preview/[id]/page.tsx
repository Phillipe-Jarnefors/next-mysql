import React from "react"
import parse from "html-react-parser"
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

const SinglePage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/digitaldocs`, {
    cache: "no-store",
  })
  const data: DocumentAPI = await res.json()
  const docs = data.digitalDocs

  const paramsID = parseInt(params.id)

  const findSingleDoc = docs.find((doc) => doc._id === paramsID)

  if (!findSingleDoc) {
    return <div>Document dont found</div>
  }

  const singleDocElement = (
    <div key={findSingleDoc._id} className="flex gap-10 flex-col items-center">
      <div className="text-xl pt-10">{findSingleDoc.name}</div>
      <div className="text-lg pt-6">Date: {findSingleDoc.date}</div>
      <div className="flex gap-6  items-center">
        <p>Textcolor:</p>
        <div
          style={{ backgroundColor: findSingleDoc.textColor }}
          className="h-10 w-10"
        ></div>
        <p>Backgroundcolor:</p>
        <div
          style={{ backgroundColor: findSingleDoc.backgroundColor }}
          className="h-10 w-10"
        ></div>
      </div>
      <div className="text-medium  leading-relaxed px-4 sm:px-20 pb-10">
        {parse(findSingleDoc.textContent)}
      </div>
    </div>
  )

  return (
    <div>
      <div>{singleDocElement}</div>
    </div>
  )
}

export default SinglePage
