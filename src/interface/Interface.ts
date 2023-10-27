import { ReactNode } from "react"

export interface DocumentAPI {
  _id: number
  name: string
  textContent: string
  textColor: string
  backgroundColor: string
  date: string
}

export interface Document {
  name: string
  textContent: string
  textColor: string
  backgroundColor: string
}

export interface Doc extends Document {
  _id: number | null
  date: string
}

export interface Props {
  children: ReactNode
}
