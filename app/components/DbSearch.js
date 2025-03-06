"use client"

import { useContext, useState } from "react"
import Dropdown from "./dropdown/Dropdown"
import { AppContext } from "../context/AppContext"
import { wordDb } from "../lib/constants/constants"

export default function DbSearch(props) {
  const { activeWordObj, setActiveWordObj, presetText, setPresetText } =
    useContext(AppContext)

  const [query, setQuery] = useState()

  let searchOptions = new Map([
    ["word", "Word"],
    ["def", "def"],
    ["root", "Root"],
    ["lang", "Lang"],
  ])

  let items = []

  searchOptions.forEach((option, key) => {
    let item = {
      key: key,
      value: option,
      action: () => {},
    }

    items.push(item)
  })

  function editEntry(word = "", def = "", root = "", diff = "") {
    const newEntry = {
      word: word,
      def: def,
      root: root,
      diff: diff,
    }

    wordDb.set(word, newEntry)
  }

  function delEntry(word) {
    wordDb.delete(word, newEntry)
  }

  console.log(wordDb)

  return (
    <div
      id="db-tab"
      className="absolute bottom-0 right-0 top-0 z-40 flex w-full flex-col items-start gap-9 overflow-x-hidden overflow-y-scroll p-[2.5rem] pb-0 duration-200 ease-in-out"
    >
      <div className="flex w-full flex-col gap-6">
        <textarea className="" name="" id=""></textarea>

        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-3">
            <Dropdown title={"Search Option"} items={items} />
            <Dropdown title={"include only: diffs"} items={items} />
          </div>
          <button className="h-full flex-grow rounded-md bg-slate-700 px-3">
            Enter
          </button>
        </div>

        <div>{""}</div>
      </div>
    </div>
  )
}
