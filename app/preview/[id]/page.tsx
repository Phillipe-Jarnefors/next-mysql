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

  const changeDate = (oldDate: string) => {
    const date = new Date(oldDate)
    const formatDate = date.toLocaleString("sv-SE", {
      timeZone: "Europe/Stockholm",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    return formatDate
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
        <div className="text-lg pt-6 font-medium flex flex-col items-center">
          <p>Updated at</p>
          {changeDate(findSingleDoc.date)}
        </div>
        <div className="text-xl ">{findSingleDoc.name}</div>
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
