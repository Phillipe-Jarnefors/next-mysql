"use client"

import React, { useContext, useRef } from "react"
import BundledEditor from "../BundledEditor"
import { DocContext } from "./DocContext"
import { useRouter } from "next/navigation"

import { Doc } from "../components/DocContext"

export default function TextEditor() {
  const router = useRouter()
  const { dataValues, setDataValues } = useContext(DocContext)

  const editorRef = useRef(null)

  const updateData = () => {
    let fontRef = editorRef.current?.selection.getNode().style.color.toString()
    let bgRef = editorRef.current?.selection
      .getNode()
      .style.backgroundColor.toString()

    let textRef = editorRef.current?.getContent()

    setDataValues((prevState: Doc) => {
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
    <div className="w-full px-6 pt-6">
      {dataValues.textContent ? (
        <>
          <BundledEditor
            apiKey={process.env.TINY_MCE}
            onInit={(evt: any, editor: any) => (editorRef.current = editor)}
            initialValue={dataValues.textContent}
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
            className="mt-6 mb-10 text-center bg-background text-primary text-medium font-semibold border-2 border-background flex gap-2 items-center justify-center px-8 py-2 rounded"
            onClick={updateData}
          >
            SAVE
          </button>
        </>
      ) : (
        <section className="container pt-6  xl:z-10 xl:h-full  grid grid-cols-4 grid-rows-layout col-span-1 gap-2 mt-3 ">
          <div className="col-span-3 bg-[#e2e1e1] rounded-lg flex justify-center items-center ">
            <h1 className="text-medium text-background font-bold">
              Choose a document in the sidebar.
            </h1>
          </div>
          <div className="col-span-1 bg-[#b7b7b7] rounded-lg  "></div>
          <div className="col-span-1 bg-[#e2e1e1] rounded-lg "></div>
          <div className="col-span-3 bg-[#b7b7b7] rounded-lg flex justify-center items-center "></div>
          <div className="col-span-4 bg-[#e2e1e1] rounded-lg"></div>
          <div className="col-span-3 bg-[#b7b7b7] rounded-lg flex justify-center items-center "></div>
          <div className="col-span-1 bg-[#e2e1e1] rounded-lg "></div>
          <div className="col-span-1 bg-[#b7b7b7] rounded-lg "></div>
          <div className="col-span-3 bg-[#e2e1e1] rounded-lg flex justify-center items-center "></div>
          <div className="col-span-4 bg-[#e2e1e1] rounded-lg "></div>
          <div className="col-span-3 bg-[#b7b7b7] rounded-lg flex justify-center items-center"></div>
          <div className="col-span-1 bg-[#e2e1e1] rounded-lg "></div>
        </section>
      )}
    </div>
  )
}
