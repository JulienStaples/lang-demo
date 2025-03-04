"use client"

import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { dummyText } from "../lib/constants/constants"
import Dropdown from "./dropdown/Dropdown"

export default function SampleTexts() {
  const { setPresetText, setLangOption, setPage } = useContext(AppContext)

  let textItems = []

  dummyText.forEach((text, key) => {
    let textItem = {
      key: key,
      value: `${text.lang} - ${text.title}`,
      action: () => {
        setPresetText(dummyText.get(key))
        setLangOption(text.lang == "en" ? "enfr" : `${text.lang}en`)
        setPage(0)
      },
    }

    textItems.push(textItem)
  })

  return <Dropdown title={"Sample Texts"} items={textItems} />
}
