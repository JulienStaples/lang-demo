"use client"

import React, { useEffect, useState } from "react"
import { wordDb } from "../../lib/constants/constants"
import Word from "../virtPage/Word"
import { motion } from "framer-motion"
import AppSelect from "@/components/app-select"

export default function DbSearchTab(props) {
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
            <span className="truncate">
              {<Word wordObj={{ normal: obj.word, text: obj.word }} />}
            </span>
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

  function searchOptionsAction(item) {
    item.key == "all" ? setSearchOption(undefined) : setSearchOption(item.key)
  }

  function includesAction(item) {
    if (item.key == "all") setIncluded(undefined)
    else {
      included
        ? setIncluded((prev) => [...prev, item.key])
        : setIncluded([item.key])
    }
  }

  return (
    <motion.div
      id="db-tab"
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex w-full flex-col gap-6">
        <textarea
          className="bg-neutral-700"
          name=""
          id=""
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
        <div className="flex justify-around">
          <AppSelect
            placeholder={"Search Option"}
            action={searchOptionsAction}
            items={genSearchOptions()}
          />
          <AppSelect
            placeholder={"Include Any"}
            action={includesAction}
            items={genIncludes()}
          />
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
    </motion.div>
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
        text: option,
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
        text: option,
      }

      items.push(item)
    })

    return items
  }
}
