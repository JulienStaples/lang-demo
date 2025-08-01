"use client"

import { createContext, useEffect, useState } from "react"
import { exampleTexts } from "../../constants/constants"
import useStorage from "@/hooks/useStorage"
import { useTheme } from "next-themes"

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const [activeWordObj, setActiveWordObj] = useState("")
  const [entry, setEntry] = useState("")
  const [presetText, setPresetText] = useState(exampleTexts.get("hunchback"))
  const [langOption, setLangOption] = useState(
    presetText.lang == "en" ? "enfr" : `${presetText.lang}en`,
  )
  const [page, setPage] = useState(0)
  const { initStorage } = useStorage()
  const { setTheme } = useTheme()

  useEffect(() => {
    initStorage()
    setTheme("dark")
  }, [])

  function changeText({ lang, key }) {
    setPresetText(exampleTexts.get(key))
    setLangOption(lang == "en" ? "enfr" : `${lang}en`)
    setPage(0)
  }

  function setLang({ key }) {
    setLangOption(key)
  }

  return (
    <AppContext.Provider
      value={{
        activeWordObj,
        setActiveWordObj,
        entry,
        setEntry,
        presetText,
        langOption,
        page,
        setPage,
        changeText,
        setLang,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
