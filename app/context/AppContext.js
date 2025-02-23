"use client"

import { createContext, useState } from "react"

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const [showFlyout, setShowFlyout] = useState(false)

  function handleClick(e) {
    setShowFlyout((prev) => !prev)
  }

  return (
    <AppContext.Provider value={{ showFlyout, handleClick }}>
      {children}
    </AppContext.Provider>
  )
}
