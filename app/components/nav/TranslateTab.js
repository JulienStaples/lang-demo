"use client"

import { useContext, useRef, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { NavContext } from "@/app/context/NavContext"
import Word from "../virtPage/Words"
import { diffBtnColors, wordDb } from "../../lib/constants/constants"
import { motion } from "framer-motion"
import AppTextarea from "@/components/app-textarea"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function TranslateTab() {
  const { activeWordObj, langOption } = useContext(AppContext)
  const { exitAnim } = useContext(NavContext)
  const defBox = useRef()
  const parentBox = useRef()

  const activeWord = activeWordObj.normal
  const activeEntry = wordDb.get(activeWord)
  const [uiDiff, setUiDiff] = useState(activeEntry?.diff ?? undefined)

  sessionStorage.setItem("wordDb", JSON.stringify([...wordDb]))

  function saveEntry(diff) {
    let newDiff = diff || (activeEntry?.diff ?? "hard")

    const newEntryObj = {
      word: activeWordObj.text,
      def: defBox.current.value || undefined,
      parent: parentBox.current.value || undefined,
      diff: newDiff,
      lang: "lang",
    }

    wordDb.set(activeWord, newEntryObj)
    setUiDiff(newDiff)

    exitAnim()
  }

  function delEntry() {
    wordDb.delete(activeWord)

    exitAnim()
  }

  function handleDiffChange(diff) {
    if (!activeWord) return
    if (!activeEntry) return saveEntry(diff)

    activeEntry.diff = diff
    setUiDiff(diff)
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
        {activeWordObj && <Word words={activeWordObj.text} single={true} />}
      </div>

      <div className="flex flex-col gap-4">
        <AppTextarea
          ref={defBox}
          id={"defBox"}
          label={`Definition: ${activeEntry?.def ?? "..."}`}
          defaultValue={activeEntry?.def ?? ""}
        />
        <AppTextarea
          ref={parentBox}
          id={"parentBox"}
          label={`Parent: ${activeEntry?.parent ?? "..."}`}
          defaultValue={activeEntry?.parent ?? ""}
        />
        <ToggleGroup
          className="w-fit gap-0 self-start rounded-sm border"
          type="single"
          value={uiDiff}
          onValueChange={(value) => handleDiffChange(value)}
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
            onClick={() => saveEntry(null)}
          >
            save
          </Button>
          <Button
            disabled={!activeWord}
            variant="destructive"
            className="grow bg-red-800 hover:bg-red-600 active:bg-red-900"
            onClick={delEntry}
          >
            del
          </Button>
        </div>
        <Button
          disabled={!activeWord}
          className="relative w-full rounded-md bg-blue-800 text-white hover:bg-blue-600 active:bg-blue-900"
        >
          <a
            target="_blank"
            href={`https://www.wordreference.com/${langOption}/${activeWord}`}
            className="absolute inset-0"
          />
          translate
        </Button>
      </div>
    </motion.div>
  )
}
