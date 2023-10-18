import { query } from "../../lib/db"

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const digitalDocs = await query({
        query: "SELECT * FROM digitaldocuments",
      })
      console.log(digitalDocs)
      res.status(200).json({ digitalDocs: digitalDocs })
    } catch (error) {
      console.log("Error: ", error)
      res.status(500).json({ message: "Error querying from database ", error })
    }
  }

  if (req.method === "POST") {
    const { name, textContent, textColor, backgroundColor, date } = req.body
    try {
      const addDoc = await query({
        query:
          "INSERT INTO digitaldocuments (name, textContent, textColor, backgroundColor, date) VALUES (?, ?, ?, ?, ?)",
        values: [name, textContent, textColor, backgroundColor, date || null],
      })

      res.status(200).json({ addDoc })
    } catch (error) {
      console.log("Error: ", error)
      res.status(500).json({ message: "Error querying from database ", error })
    }
  }
}

// if (req.method === "PUT") {
//   try {
//   } catch (error) {
//     console.log("Error: ", error)
//     res.status(500).json({ message: "Error querying from database ", error })
//   }
// }

// if (req.method === "DELETE") {
//   try {
//   } catch (error) {
//     console.log("Error: ", error)
//     res.status(500).json({ message: "Error querying from database ", error })
//   }
// }
