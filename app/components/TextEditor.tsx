"use client"

import React, { useContext, useEffect, useRef, useState } from "react"
import BundledEditor from "../BundledEditor"
import { DocContext } from "./DocContext"
import { useRouter } from "next/navigation"

export default function TextEditor() {
  const router = useRouter()
  const { dataValues, setDataValues } = useContext(DocContext)

  const editorRef = useRef(null)

  const updateData = () => {
    let fontRef = editorRef.current.selection.getNode().style.color.toString()
    let bgRef = editorRef.current.selection
      .getNode()
      .style.backgroundColor.toString()

    let textRef = editorRef.current.getContent()

    setDataValues((prevState) => {
      const updatedDataValues = {
        ...prevState,
        textContent: textRef,
      }

      try {
        const options = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...updatedDataValues,
            textColor: fontRef,
            backgroundColor: bgRef,
            date: "",
          }),
        }
        const req = fetch("http://localhost:3000/api/digitaldocs", options)
        return req
      } catch (error) {
        console.log(error)
      }
    })
    router.refresh()
  }

  return (
    <div className="w-full px-4">
      <BundledEditor
        apiKey={process.env.TINY_MCE}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={
          dataValues.textContent !== undefined
            ? dataValues.textContent
            : "Success! :D"
        }
        init={{
          height: 500,
          menubar: true,
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
            "bold italic forecolor backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button
        className="border-2 px-4 py-2 text-white bg-slate-500"
        onClick={updateData}
      >
        Save Text
      </button>
    </div>
  )
}
