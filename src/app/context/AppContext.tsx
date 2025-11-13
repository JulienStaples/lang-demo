"use client"

import React, { createContext, useEffect, useState } from "react"
import { exampleTexts } from "../../constants/constants"
import useStorage from "@/utils/storageUtils"
import { useTheme } from "next-themes"
import { Term, Entry, PresetText } from "@/types/types"

type AppContextProviderProps = {
  children: React.ReactNode
}

type AppContextType = {
  activeWordObj: Term | undefined
  setActiveWordObj: React.Dispatch<React.SetStateAction<Term | undefined>>
  entry: Entry | undefined
  setEntry: React.Dispatch<React.SetStateAction<Entry | undefined>>
  presetText: PresetText
  langOption: string
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  changeText: ({ lang, key }: { lang: string; key: string }) => void
  setLang: ({ key }: { key: string }) => void
}

export const AppContext = createContext<AppContextType | null>(null)

export default function AppProvider({ children }: AppContextProviderProps) {
  const [activeWordObj, setActiveWordObj] = useState<Term | undefined>()
  const [entry, setEntry] = useState<Entry | undefined>()
  const [presetText, setPresetText] = useState<PresetText>(
    exampleTexts.get("hunchback") || { title: "", body: [""], lang: "" },
  )
  const [langOption, setLangOption] = useState<string>(
    presetText?.lang == "en" ? "enfr" : `${presetText?.lang}en`,
  )
  const [page, setPage] = useState<number>(0)
  const { initStorage } = useStorage()
  const { setTheme } = useTheme()

  useEffect(() => {
    initStorage()
    setTheme("dark")
  }, [])

  function changeText({ lang, key }: { lang: string; key: string }) {
    setPresetText(exampleTexts.get(key) || { title: "", body: [""], lang: "" })
    setLangOption(lang == "en" ? "enfr" : `${lang}en`)
    setPage(0)
  }

  function setLang({ key }: { key: string }) {
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
