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

  if (req.method === "PUT") {
    const { _id, name, textContent, textColor, backgroundColor, date } =
      req.body
    try {
      const editDoc = await query({
        query:
          "UPDATE digitaldocuments SET name = ?, textContent = ?, textColor = ?, backgroundColor = ?, date = ? WHERE _id = ?",
        values: [
          name,
          textContent,
          textColor,
          backgroundColor,
          date || null,
          _id,
        ],
      })

      res.status(200).json({ editDoc })
    } catch (error) {
      console.log("Error: ", error)
      res.status(500).json({ message: "Error querying from database ", error })
    }
  }

  if (req.method === "DELETE") {
    const { _id } = req.body
    try {
      const deleteDoc = await query({
        query: "DELETE FROM digitaldocuments WHERE _id = ?",
        values: [_id],
      })

      res.status(200).json({ deleteDoc })
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
