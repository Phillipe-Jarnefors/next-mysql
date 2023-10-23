import React from "react"
import parse from "html-react-parser"
import Link from "next/link"
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
    <div className="w-full">
      <div className="flex">
        <Link href="./">
          <p className="px-8 py-2 border-t-2 border-primary bg-background text-primary rounded-br-xl">
            Go back
          </p>
        </Link>
      </div>
      <div
        key={findSingleDoc._id}
        className="flex gap-10 flex-col items-center"
      >
        <div className="text-xl ">{findSingleDoc.name}</div>
        <div className="text-lg pt-6">{findSingleDoc.date}</div>
        <div className="flex gap-4  items-center">
          {findSingleDoc.textColor ? (
            <>
              <p className="font-bold">Textcolor</p>
              <div
                style={{ backgroundColor: findSingleDoc.textColor }}
                className="h-12 w-12 rounded-full border-background border-2"
              ></div>
            </>
          ) : (
            <>
              <p className="font-bold">Textcolor</p>
              <div
                style={{ backgroundColor: "black" }}
                className="h-12 w-12 rounded-full border-background border-2"
              ></div>
            </>
          )}
          <p className="font-bold">Backgroundcolor</p>
          <div
            style={{ backgroundColor: findSingleDoc.backgroundColor }}
            className="h-12 w-12 rounded-full border-background border-2"
          ></div>
        </div>
        <div>
          <div className="text-medium  leading-relaxed px-4 sm:px-20 pb-10">
            {parse(findSingleDoc.textContent)}
          </div>
        </div>
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
