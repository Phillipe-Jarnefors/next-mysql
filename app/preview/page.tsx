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

const Preview = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/digitaldocs`, {
    cache: "no-store",
  })

  const data: DocumentAPI = await res.json()
  const docs = data.digitalDocs

  const shortenText = (text: string, length: number) => {
    if (text.length > length) {
      return text.slice(0, length) + " ..."
    }
    return text
  }

  const docElements = docs.map((doc) => (
    <Link key={doc._id} href={`/preview/${doc._id}`}>
      <div className="flex flex-col gap-4 pt-4">
        <p className="text-medium font-bold pt-4">{doc.name}</p>
        <div className="text-xl leading-normal py-4">
          {parse(shortenText(doc.textContent, 120))}
        </div>
        <p>{doc.date}</p>
        <hr />
      </div>
    </Link>
  ))

  return <div className="border-2 px-2 text-center w-full">{docElements}</div>
}

export default Preview
