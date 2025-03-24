"use client"

import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { NavContext } from "@/app/context/NavContext"
import Word from "../virtPage/Word"
import { diffBtnColors, findDiff, wordDb } from "../../lib/constants/constants"
import { motion } from "framer-motion"
import AppTextarea from "@/components/app-textarea"

export default function TranslateTab(props) {
  const { activeWordObj, entry, langOption } = useContext(AppContext)
  const { tabsPane, exitAnim } = useContext(NavContext)
  const defBox = useRef()
  const rootBox = useRef()
  const activeWord = activeWordObj.normal
  const [diff, setDiff] = useState()

  useEffect(() => {
    setDiff(findDiff(activeWord))
    sessionStorage.setItem("wordDb", JSON.stringify([...wordDb]))
  }, [tabsPane])

  function addEntry(e, diff) {
    let newDiff = diff
      ? diff
      : wordDb.has(activeWord)
        ? wordDb.get(activeWord).diff
        : "hard"

    const newEntryObj = {
      word: activeWord,
      def: defBox.current.value,
      root: rootBox.current.value,
      diff: newDiff,
      lang: "lang",
    }

    wordDb.set(activeWord, newEntryObj)
    setDiff(newDiff)

    exitAnim()
  }

  function delEntry(e) {
    wordDb.delete(activeWord)

    exitAnim()
  }

  function changeDiff(diff) {
    try {
      wordDb.get(activeWord).diff = diff
      setDiff(diff)
    } catch {
      addEntry("", diff)
    }
  }

  return (
    <motion.div
      id="translate-tab"
      className="flex flex-col gap-9 overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex w-full flex-col gap-6 overflow-visible">
        <div className="flex w-full flex-col gap-5 overflow-visible">
          <div className="overflow-visible">
            <div className="flex gap-2 overflow-visible">
              <h1 className="">Word:</h1>
              <Word
                wordObj={activeWordObj ? activeWordObj : { text: "N/A..." }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <AppTextarea
              ref={defBox}
              id={"defBox"}
              label={`Definition: ${
                entry.def !== undefined && entry.def !== "" ? entry.def : "..."
              }`}
              defaultValue={
                entry.def !== undefined && entry.def !== "" ? entry.def : ""
              }
            />
            <AppTextarea
              ref={rootBox}
              id={"rootBox"}
              label={`Root: ${
                entry.root !== undefined && entry.root !== ""
                  ? entry.root
                  : "..."
              }`}
              defaultValue={
                entry.root !== undefined && entry.root !== "" ? entry.root : ""
              }
            />
            <AppTextarea
              ref={undefined}
              id={undefined}
              label={`Tags: ${
                entry.tags !== undefined && entry.tags !== ""
                  ? entry.tags
                  : "..."
              }`}
              defaultValue={
                entry.tags !== undefined && entry.tags !== "" ? entry.tags : ""
              }
            />
          </div>
        </div>
        <div>
          <p
            className="cursor-pointer select-none text-rose-300 underline duration-200 ease-in-out hover:text-rose-200"
            onClick={() => props.selectTab("details")}
          >{`See More ---->`}</p>
        </div>
        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full justify-between">
            <button
              className={`${diffBtnColors.easy} rounded-md px-3 py-1`}
              onClick={() => changeDiff("easy")}
            >
              easy
            </button>
            <button
              className={`${diffBtnColors.med} rounded-md px-3 py-1`}
              onClick={() => changeDiff("med")}
            >
              med
            </button>
            <button
              className={`${diffBtnColors.hard} rounded-md px-3 py-1`}
              onClick={() => changeDiff("hard")}
            >
              hard
            </button>
            <button
              className={`${diffBtnColors.wk} rounded-md px-3 py-1`}
              onClick={() => changeDiff("wk")}
            >
              wk
            </button>
          </div>
          <div className="flex w-full gap-3">
            <button
              className="w-full rounded-md bg-red-700 p-1 hover:bg-red-600 active:bg-red-800"
              onClick={(e) => delEntry(e)}
            >
              del
            </button>
            <button
              className="w-full rounded-md bg-green-700 p-1 hover:bg-green-600 active:bg-green-800"
              onClick={(e) => addEntry(e)}
            >
              save
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <a
          target="_blank"
          className="w-full rounded-md bg-blue-800 p-3 text-center hover:bg-blue-700 active:bg-blue-900"
          href={`https://www.wordreference.com/${langOption}/${activeWord}`}
        >
          Translate
        </a>
      </div>
    </motion.div>
  )
}
