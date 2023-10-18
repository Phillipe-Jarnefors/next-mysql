"use client"

import React, { useContext, useRef } from "react"
import BundledEditor from "../BundledEditor"
import { DocContext } from "./DocContext"

export default function TextEditor() {
  const { dataValues, setDataValues } = useContext(DocContext)
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }
  return (
    <>
      <BundledEditor
        apiKey={process.env.TINY_MCE}
        onInit={(editor) => (editorRef.current = editor)}
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
        onClick={log}
      >
        Save Text
      </button>
    </>
  )
}
