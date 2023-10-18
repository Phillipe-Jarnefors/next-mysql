"use client"

import React, { useContext, useEffect, useRef, useState } from "react"
import BundledEditor from "../BundledEditor"
import { DocContext } from "./DocContext"
import { text } from "stream/consumers"

export default function TextEditor() {
  const { dataValues, setDataValues } = useContext(DocContext)

  const editorRef = useRef(null)

  const saveDocument = async () => {
    let textRef = editorRef.current.getContent()
    let textWithoutPTags = textRef
      .replace(/<p[^>]*>/g, "")
      .replace(/<\/p>/g, "")
      .toString()

    setDataValues((prevState) => ({
      ...prevState,
      textContent: textWithoutPTags,
    }))

    console.log(dataValues)

    try {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: dataValues._id,
          name: dataValues.name,
          textContent: dataValues.textContent,
          textColor: dataValues.textColor,
          backgroundColor: dataValues.backgroundColor,
          date: "",
        }),
      }
      const req = await fetch("http://localhost:3000/api/digitaldocs", options)
      return req
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <BundledEditor
        apiKey={process.env.TINY_MCE}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={`${dataValues.textContent}`}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "anchor",
            "autolink",
            "help",
            "image",
            "link",
            "lists",
            "searchreplace",
            "table",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor backcolor fontsize" +
            "removeformat",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button
        className="border-2 px-4 py-2 text-white bg-slate-500"
        onClick={saveDocument}
      >
        Save Text
      </button>
    </>
  )
}
