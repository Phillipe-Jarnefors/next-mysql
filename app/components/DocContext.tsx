"use client"

import { Dispatch, SetStateAction, createContext, useState } from "react"
import { Document, Doc, Props } from "@/src/interface/Interface"

interface ContextValue {
  dataValues: Doc
  setDataValues: Dispatch<SetStateAction<Doc>>
  inputValues: object
  setInputValues: Dispatch<SetStateAction<Document>>
  changeDate: (oldDate: string) => string
}

export const DocContext = createContext<ContextValue>({
  dataValues: {
    _id: null,
    name: "",
    textContent: "",
    textColor: "",
    backgroundColor: "",
    date: "",
  },
  setDataValues: () => {},
  inputValues: {},
  setInputValues: () => {},
  changeDate: () => "",
})

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
