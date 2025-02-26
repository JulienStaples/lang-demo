"use client"

import { createContext, useState } from "react"

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const [showFlyout, setShowFlyout] = useState(false)
  const [activeWordObj, setActiveWordObj] = useState("")

  function handleClick(wordObj) {
    setActiveWordObj(wordObj)

    setShowFlyout((prev) => !prev)
    //animation issue
    setTimeout(() => {
      document.querySelector("#translate-tab").dataset.active = true
    }, 0)
    //
  }

  return (
    <AppContext.Provider
      value={{ showFlyout, setShowFlyout, activeWordObj, setActiveWordObj, handleClick }}
    >
      {children}
    </AppContext.Provider>
  )
}
