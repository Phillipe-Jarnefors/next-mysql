"use client"
import { CartContextValue, CartProduct, Props, Product } from "./Interfaces"
import { createContext, useEffect, useState } from "react"

export const DocContext = createContext<CartContextValue>({
  dataValues: {},
  setDataValues: () => {},
  inputValues: {},
  setInputValues: () => {},
})

interface Document {
  name: string
  textContent: string
  textColor: string
  backgroundColor: string
}

interface Doc extends Document {
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
    textContent: "This is some new text...",
    textColor: "black",
    backgroundColor: "white",
  })

  return (
    <DocContext.Provider
      value={{ inputValues, setInputValues, dataValues, setDataValues }}
    >
      {children}
    </DocContext.Provider>
  )
}
