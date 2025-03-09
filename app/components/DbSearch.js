"use client"

import React, { useEffect, useState } from "react"
import Dropdown from "./dropdown/Dropdown"
import { wordDb } from "../lib/constants/constants"

export default function DbSearch(props) {
  let [response, setResponse] = useState([[]])
  let [searchOption, setSearchOption] = useState(undefined)
  let [included, setIncluded] = useState(undefined)
  let [query, setQuery] = useState("")

  useEffect(() => {
    setResponse(
      request({ option: searchOption, query: query, included: included }),
    )
  }, [searchOption, query, included])

  function request(props) {
    let option = props.option
    let query = props.query
    let included = props.included
    let db = []

    included ? (db = [...wordDb].filter(findIncluded)) : (db = [...wordDb])

    let spans = []

    option ? genSpans(colSearch()) : genSpans(db)

    return spans

    function genSpans(entries) {
      entries.forEach((entry) => {
        let key = entry[0]
        let obj = entry[1]

        spans.push(
          <React.Fragment key={`${key}-word`}>
            <span className="truncate">{obj.word}</span>
            <span className="truncate">{obj.def}</span>
            <span className="truncate">{obj.root}</span>
            <span className="truncate">{obj.lang}</span>
            <span className="truncate">{obj.diff}</span>
          </React.Fragment>,
        )
      })
    }

    function colSearch() {
      return db.filter((entry) => entry[1][option] == query)
    }

    function findIncluded(entry) {
      let key = entry[0]
      let obj = entry[1]
      return included.includes(obj.diff) || included.includes(obj.lang)
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
        <div className="flex justify-around">
          <Dropdown title={"Search Option"} items={genSearchOptions()} />
          <Dropdown title={"Include Any"} items={genIncludes()} />
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
          key == "all" ? setSearchOption(undefined) : setSearchOption(key)
        },
      }

      items.push(item)
    })

    return items
  }

  function genIncludes() {
    let searchOptions = new Map([
      ["all", "all"],
      ["easy", "diff: easy"],
      ["med", "diff: med"],
      ["hard", "diff: hard"],
      ["wk", "diff: wk"],
      ["en", "lang: en"],
      ["fr", "lang: fr"],
    ])

    let items = []

    searchOptions.forEach((option, key) => {
      let item = {
        key: key,
        value: option,
        action: () => {
          if (key == "all") setIncluded(undefined)
          else {
            included
              ? setIncluded((prev) => [...prev, key])
              : setIncluded([key])
          }
        },
      }

      items.push(item)
    })

    return items
  }
}
