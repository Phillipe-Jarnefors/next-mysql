"use client"

import React, { useContext } from "react"
import { DocContext } from "./DocContext"
import { useRouter } from "next/navigation"
import { Icon } from "@iconify/react"

const AddNewButton = () => {
  const router = useRouter()
  const { inputValues, setInputValues } = useContext(DocContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <fieldset className=" flex justify-between gap-4 items-center border-2 rounded p-4 w-full">
      <legend className="font-medium">Add new</legend>
      <form
        onSubmit={sendForm}
        className="flex justify-between gap-4 items-center py-1 w-full"
      >
        <input
          type="text"
          required
          name="name"
          onChange={handleChange}
          className="w-full rounded p-1 text-background"
          placeholder="Add new doc..."
        ></input>
        <button
          type="submit"
          className="text-center h-8 w-8 border-2 border-primary rounded bg-abstract text-primary flex gap-2 items-center justify-center"
        >
          <Icon icon="icon-park-outline:add" />
        </button>
      </form>
    </fieldset>
  )
}

export default AddNewButton
