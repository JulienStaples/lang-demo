"use client"

import { createContext, useState } from "react"
import { dummyText } from "../../constants/constants"

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const [activeWordObj, setActiveWordObj] = useState("")
  const [entry, setEntry] = useState("")
  const [presetText, setPresetText] = useState(dummyText.get("dracula"))
  const [langOption, setLangOption] = useState(
    presetText.lang == "en" ? "enfr" : `${presetText.lang}en`,
  )
  const [page, setPage] = useState(0)

  function changeText({ lang, key }) {
    setPresetText(dummyText.get(key))
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
