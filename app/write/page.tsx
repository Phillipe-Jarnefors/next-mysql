import React from "react"
import TextEditor from "../components/TextEditor"
import Sidebar from "../components/Sidebar"

const Write = () => {
  return (
    <div className="flex sm:flex-row flex-col h-screen ">
      <Sidebar />
      <TextEditor />
    </div>
  )
}

export default Write
