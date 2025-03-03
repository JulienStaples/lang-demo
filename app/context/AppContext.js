"use client"

import { createContext, useState } from "react"
import { findEntry } from "../lib/constants/constants"

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const [showFlyout, setShowFlyout] = useState(false)
  const [activeWordObj, setActiveWordObj] = useState("")
  const [entry, setEntry] = useState("")

  function handleClick(wordObj) {
    setActiveWordObj(wordObj)
    setEntry(findEntry(wordObj.normal))
    setShowFlyout((prev) => !prev)
    //animation issue
    setTimeout(() => {
      document.querySelector("#tabs").dataset.active = true
    }, 0)
    //
  }

  return (
    <AppContext.Provider
      value={{
        showFlyout,
        setShowFlyout,
        activeWordObj,
        setActiveWordObj,
        handleClick,
        entry,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
