"use client"

import React, { useContext, useState } from "react"
import { DocContext } from "./DocContext"
import { useRouter } from "next/navigation"

const AddNewButton = () => {
  const router = useRouter()
  const { inputValues, setInputValues } = useContext(DocContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const sendForm = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...inputValues }),
    }

    const res = await fetch("http://localhost:3000/api/digitaldocs", options)

    router.refresh()
  }

  return (
    <form
      onSubmit={sendForm}
      className="flex flex-col justify-center items-center"
    >
      <input
        type="text"
        required
        name="name"
        onChange={handleChange}
        className="border-2"
        placeholder="Name"
      ></input>
      <button
        type="submit"
        className="border-2 rounded text-center bg-slate-100 flex gap-2 items-center justify-center w-full"
      >
        Add New Doc
      </button>
    </form>
  )
}

export default AddNewButton
