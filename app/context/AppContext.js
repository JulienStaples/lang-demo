"use client"

import { createContext, useState } from "react"

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const [showFlyout, setShowFlyout] = useState(false)
  const [activeWord, setActiveWord] = useState("")

  function handleClick(wordObj) {
    setActiveWord(wordObj)
    setShowFlyout((prev) => !prev)
    //animation issue
    setTimeout(() => {
      document.querySelector("#translate-tab").dataset.active = true
    }, 0)
    //
  }

  return (
    <AppContext.Provider
      value={{ showFlyout, setShowFlyout, activeWord, setActiveWord, handleClick }}
    >
      {children}
    </AppContext.Provider>
  )
}
