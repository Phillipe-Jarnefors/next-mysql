"use client"
import { log } from "console"
import React, { useState } from "react"

const AddNewButton = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    textContent: "This is some new text...",
    textColor: "black",
    backgroundColor: "white",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(inputValues)
  }

  const sendForm = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...inputValues }),
    }

    const res = await fetch("http://localhost:3000/api/digitaldocs", options)
    console.log(res)

    return res
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        className="border-2"
        placeholder="Name"
      ></input>
      <button
        onClick={sendForm}
        className="border-2 rounded text-center bg-slate-100 flex gap-2 items-center justify-center w-full"
      >
        Add New Doc
      </button>
    </div>
  )
}

export default AddNewButton
