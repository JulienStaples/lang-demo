import React from "react"
import SampleTexts from "./SampleTexts"
import LangSelect from "./LangSelect"

export default function Nav() {
  return (
    <nav className="absolute inset-5 mx-auto flex h-fit w-[80%] flex-nowrap justify-center gap-3">
      <SampleTexts></SampleTexts>
      <LangSelect></LangSelect>
    </nav>
  )
}
