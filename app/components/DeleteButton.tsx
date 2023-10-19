"use client"
import React from "react"
import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation"

const DeleteButton = ({ docId }) => {
  const router = useRouter()
  const deleteDocument = async (docId) => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: docId }),
    }
    const req = await fetch("http://localhost:3000/api/digitaldocs", options)

    router.refresh()
    return req
  }
  return (
    <div>
      <button onClick={() => deleteDocument(docId)}>
        <Icon icon="mdi:delete-outline" />
      </button>
    </div>
  )
}

export default DeleteButton
