"use client"

import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function TranslateTab() {
  const { showFlyout } = useContext(AppContext)

  if (showFlyout) {
    return (
      <div>
        <h1>translate</h1>
      </div>
    )
  }
}
