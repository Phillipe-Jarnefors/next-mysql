"use client"

import React, { useEffect, useState } from "react"

export default function MainComponent() {
  const [docs, setDocs] = useState([])
  async function getDocuments() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/digitaldocs`,
      postData
    )
    const response = await res.json()
    console.log(response)
    setDocs(response.digitalDocs)
  }

  useEffect(() => {
    getDocuments()
  }, [])
  return <div>MainComponent</div>
}
