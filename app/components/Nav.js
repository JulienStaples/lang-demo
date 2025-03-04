import React from "react"
import SampleTexts from "./SampleTexts"
import LangSelect from "./LangSelect"

export default function Nav() {
  return (
    <nav className=" absolute inset-5 mx-auto w-[80%] h-fit flex flex-nowrap gap-3 justify-center">
      <SampleTexts></SampleTexts>
      <LangSelect></LangSelect>
    </nav>
  )
}
