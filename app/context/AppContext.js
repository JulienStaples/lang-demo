"use client"

import { createContext, useEffect, useState } from "react"
import { dummyText } from "../lib/constants/constants"
import { wordDb } from "../lib/constants/constants"

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const [activeWordObj, setActiveWordObj] = useState("")
  const [entry, setEntry] = useState("")
  const [presetText, setPresetText] = useState(dummyText.get("dracula"))
  const [langOption, setLangOption] = useState(
    presetText.lang == "en" ? "enfr" : `${presetText.lang}en`,
  )
  const [page, setPage] = useState(0)

  useEffect(() => {
    try {
      JSON.parse(sessionStorage.wordDb).forEach((entry) => {
        wordDb.set(entry[0], entry[1])
      })
      wordDb.delete(undefined)
      wordDb.delete(null)
    } catch {}
  }, [])

  return (
    <AppContext.Provider
      value={{
        activeWordObj,
        setActiveWordObj,
        entry,
        setEntry,
        presetText,
        setPresetText,
        langOption,
        setLangOption,
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
