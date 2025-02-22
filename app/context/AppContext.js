"use client"
import { createContext, useState } from "react"

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const [showFlyout, setShowFlyout] = useState("HELLO")

  return (
    <AppContext.Provider value={{ showFlyout, setShowFlyout }}>
      {children}
    </AppContext.Provider>
  )
}
