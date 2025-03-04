import React from "react"
import SampleTexts from "./SampleTexts"
import LangSelect from "./LangSelect"

export default function Nav() {
  return (
    <nav className="flex gap-3 justify-center">
      <SampleTexts></SampleTexts>
      <LangSelect></LangSelect>
    </nav>
  )
}
