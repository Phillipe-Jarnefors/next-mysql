"use client"
import { CartContextValue, CartProduct, Props, Product } from "./Interfaces"
import { createContext, useEffect, useState } from "react"

export const DocContext = createContext<CartContextValue>({
  dataValues: {},
  setDataValues: () => {},
  inputValues: {},
  setInputValues: () => {},
  changeDate: () => {},
})

interface Document {
  name: string
  textContent: string
  textColor: string
  backgroundColor: string
}

export interface Doc extends Document {
  _id: number | null
  date: string
}

export const DocProvider = ({ children }: Props) => {
  const [dataValues, setDataValues] = useState<Doc>({
    _id: null,
    name: "",
    textContent: "",
    textColor: "",
    backgroundColor: "",
    date: "",
  })

  const [inputValues, setInputValues] = useState<Document>({
    name: "",
    textContent: "Your text document...",
    textColor: "rgb(0,0,0)",
    backgroundColor: "rgb(255,255,255)",
  })

  const changeDate = (oldDate: string) => {
    const date = new Date(oldDate)
    const formatDate = date.toLocaleString("sv-SE", {
      timeZone: "Europe/Stockholm",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    return formatDate
  }

  return (
    <DocContext.Provider
      value={{
        inputValues,
        setInputValues,
        dataValues,
        setDataValues,
        changeDate,
      }}
    >
      {children}
    </DocContext.Provider>
  )
}
