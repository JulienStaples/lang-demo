"use client"

import { useContext, useEffect, useState } from "react"
import Dropdown from "./dropdown/Dropdown"
import { AppContext } from "../context/AppContext"
import { wordDb } from "../lib/constants/constants"

export default function DbSearch(props) {
  const { activeWordObj, setActiveWordObj, presetText, setPresetText } =
    useContext(AppContext)

  let [response, setResponse] = useState([[]])
  let [searchOption, setSearchOption] = useState("all")
  let [query, setQuery] = useState("")

  useEffect(() => {
    setResponse(request({ option: searchOption, query: query }))
  }, [])

  useEffect(() => {
    setResponse(request({ option: searchOption, query: query }))
  }, [searchOption, query])

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

  function request(props) {
    let option = props.option
    let query = props.query
    let db = [...wordDb]

    let spans = []

    option == "all" ? genSpans(db) : genSpans(colSearch())

    return spans

    function genSpans(entries) {
      entries.forEach((entry) => {
        let key = entry[0]
        let obj = entry[1]

        spans.push(
          <>
            <span key={`${key}-db-word`} className="truncate">
              {obj.word}
            </span>
            <span key={`${key}-db-def`} className="truncate">
              {obj.def}
            </span>
            <span key={`${key}-db-root`} className="truncate">
              {obj.root}
            </span>
            <span key={`${key}-db-lang`} className="truncate">
              {obj.lang}
            </span>
            <span key={`${key}-db-diff`} className="truncate">
              {obj.diff}
            </span>
          </>,
        )
      })
    }

    function colSearch() {
      return db.filter((entry) => entry[1][option] == query)
    }
  }

  return (
    <div
      id="db-tab"
      className="absolute bottom-0 right-0 top-0 z-40 flex w-full flex-col items-start gap-9 overflow-x-hidden overflow-y-scroll p-[2.5rem] pb-0 duration-200 ease-in-out"
    >
      <div className="flex w-full flex-col gap-6">
        <textarea
          className="text-black"
          name=""
          id=""
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-3">
            <Dropdown title={"Search Option"} items={genSearchOptions()} />
            <Dropdown
              title={"include only: diffs"}
              items={genSearchOptions()}
            />
          </div>
          <button className="h-full flex-grow rounded-md bg-slate-700 px-3">
            Enter
          </button>
        </div>

        <div className="grid grid-cols-5 overflow-x-scroll">
          <span>word</span>
          <span>def</span>
          <span>root</span>
          <span>lang</span>
          <span>diff</span>
          {response}
        </div>
      </div>
    </div>
  )

  function genSearchOptions() {
    let searchOptions = new Map([
      ["word", "Word"],
      ["def", "def"],
      ["root", "Root"],
      ["lang", "Lang"],
      ["all", "all"],
    ])

    let items = []

    searchOptions.forEach((option, key) => {
      let item = {
        key: key,
        value: option,
        action: () => {
          setSearchOption(key)
        },
      }

      items.push(item)
    })

    return items
  }
}
