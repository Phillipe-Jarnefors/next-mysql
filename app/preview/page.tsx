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

  const sortByDate = docs.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  )

  const docElements = sortByDate.map((doc) => (
    <div key={doc._id}>
      <Link href={`/preview/${doc._id}`}>
        <div className="flex flex-col gap-4 pt-4">
          <p className="text-medium font-bold pt-4">{doc.name}</p>
          <div className="font-medium">
            <p>
              <p>Updated at</p>
            </p>
            {changeDate(doc.date)}
          </div>
          <div className="text-xl leading-normal py-4">
            {parse(shortenText(doc.textContent, 120))}
          </div>
          <hr />
        </div>
      </Link>
    </div>
  ))

  return <div className="border-2 px-2 text-center w-full">{docElements}</div>
}

export default Preview
