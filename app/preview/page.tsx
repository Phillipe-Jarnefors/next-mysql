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

const Preview = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/digitaldocs`, {
    cache: "no-store",
  })

  const data: DocumentAPI = await res.json()
  const docs = data.digitalDocs

  const docElements = docs.map((doc) => (
    <div key={doc._id} className="flex flex-col gap-4 pt-4">
      <p>{doc.name}</p>
      <div className="text-xl leading-normal">{parse(doc.textContent)}</div>
      <p>{doc.date}</p>
      <hr />
    </div>
  ))

  return <div className="border-2 px-2 text-center w-full">{docElements}</div>
}

export default Preview
