"use client"

import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { NavContext } from "@/app/context/NavContext"
import Word from "../virtPage/Word"
import { diffBtnColors, findDiff, wordDb } from "../../lib/constants/constants"
import { motion } from "framer-motion"
import AppTextarea from "@/components/app-textarea"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

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
      className="flex flex-col gap-7 overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex gap-2 overflow-visible">
        <h1>Word:</h1>
        <Word wordObj={activeWordObj ? activeWordObj : { text: "" }} />
      </div>

      <div className="flex flex-col gap-4">
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
            entry.root !== undefined && entry.root !== "" ? entry.root : "..."
          }`}
          defaultValue={
            entry.root !== undefined && entry.root !== "" ? entry.root : ""
          }
        />
        <AppTextarea
          ref={undefined}
          id={undefined}
          label={`Tags: ${
            entry.tags !== undefined && entry.tags !== "" ? entry.tags : "..."
          }`}
          defaultValue={
            entry.tags !== undefined && entry.tags !== "" ? entry.tags : ""
          }
        />
        <ToggleGroup
          className="w-fit gap-0 self-start rounded-sm border"
          type="single"
          value={diff}
          onValueChange={(value) => (value ? changeDiff(value) : "")}
        >
          <ToggleGroupItem
            value="wk"
            className={`rounded-l-sm rounded-r-none border-foreground bg-transparent`}
            aria-label="Toggle wk"
          >
            wk
          </ToggleGroupItem>
          <ToggleGroupItem
            value="easy"
            className={`${diffBtnColors.easy} rounded-none`}
            aria-label="Toggle easy"
          >
            easy
          </ToggleGroupItem>
          <ToggleGroupItem
            value="med"
            className={`${diffBtnColors.med} rounded-none`}
            aria-label="Toggle med"
          >
            med
          </ToggleGroupItem>
          <ToggleGroupItem
            value="hard"
            className={`${diffBtnColors.hard} rounded-l-none rounded-r-sm`}
            aria-label="Toggle hard"
          >
            hard
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex w-full gap-3">
          <Button
            disabled={!activeWord}
            className="grow bg-green-800 text-white hover:bg-green-600 active:bg-green-800"
            onClick={(e) => addEntry(e)}
          >
            save
          </Button>
          <Button
            disabled={!activeWord}
            variant="destructive"
            className="grow bg-red-800 hover:bg-red-600 active:bg-red-900"
            onClick={(e) => delEntry(e)}
          >
            del
          </Button>
        </div>
        <a
          target="_blank"
          href={`https://www.wordreference.com/${langOption}/${activeWord}`}
        >
          <Button
            disabled={!activeWord}
            className="w-full rounded-md bg-blue-800 text-white hover:bg-blue-600 active:bg-blue-900"
          >
            translate
          </Button>
        </a>
      </div>
    </motion.div>
  )
}
