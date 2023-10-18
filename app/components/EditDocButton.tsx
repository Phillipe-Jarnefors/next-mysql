"use client"
import React from "react"

const EditDoc = ({ docId, docName }) => {
  const EditDoc = () => {
    console.log("hello", docId)
  }

  return (
    <div>
      <button onClick={EditDoc}>{docName}</button>
    </div>
  )
}

export default EditDoc
