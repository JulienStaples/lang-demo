"use client"

import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export default function TitleBar() {
  const { presetText } = useContext(AppContext)

  return (
    <div className="flex justify-between pr-5">
      <div className="flex gap-3">
        <span>{presetText.title}</span>
      </div>
    </div>
  )
}
