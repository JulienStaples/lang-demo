"use client"

import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { langOptions } from "../lib/constants/constants"
import Dropdown from "./dropdown/Dropdown"

export default function LangSelect() {
  const { setLangOption } = useContext(AppContext)

  let items = []

  langOptions.forEach((langs, key) => {
    let item = {
      key: key,
      value: langs,
      action: () => {
        setLangOption(key)
      },
    }

    items.push(item)
  })

  return <Dropdown title={"Langs"} items={items} />
}
