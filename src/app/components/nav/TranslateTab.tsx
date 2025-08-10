"use client"

import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { NavContext } from "@/app/context/NavContext"
import Words from "../virtPage/Words"
import { diffBtnColors } from "@/constants/constants"
import { motion } from "framer-motion"
import AppTextarea from "@/components/app-textarea"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import AppSelect from "@/components/app-select"
import { wordDb } from "@/lib/wordDb"
import useStorage from "@/hooks/useStorage"
import { useIsMobile } from "@/hooks/use-mobile"

export default function TranslateTab() {
  const { activeWordObj, langOption, presetText } = useContext(AppContext)!
  const { updateTab, exitAnim } = useContext(NavContext)!
  const defBox = useRef<HTMLTextAreaElement>(null)
  const parentBox = useRef<HTMLTextAreaElement>(null)
  const { syncStorage } = useStorage()
  const isMobile = useIsMobile()

  const activeWord = activeWordObj?.normal
  const activeEntry = wordDb.get(activeWord)

  const [wordLang, setWordLang] = useState<string | undefined>()

  //this is only to force ui update on mobile
  const [uiDiff, setUiDiff] = useState(activeEntry?.diff ?? undefined)

  useEffect(() => {
    setWordLang(activeEntry?.lang ?? presetText.lang)
  }, [activeWordObj])

  function saveEntry(diff: Diff) {
    const newDiff = diff || (activeEntry?.diff ?? "hard")

    const newEntryObj = {
      word: activeWordObj?.text,
      def: defBox.current?.value || undefined,
      parent: parentBox.current?.value || undefined,
      diff: newDiff,
      lang: wordLang,
    }

    wordDb.set(activeWord, newEntryObj)

    if (isMobile) setUiDiff(newDiff)

    syncStorage()
    if (!isMobile) return updateTab("translate-tab", diff)
    exitAnim()
  }

  function delEntry() {
    wordDb.delete(activeWord)

    syncStorage()

    if (!isMobile) return updateTab("translate-tab")
    exitAnim()
  }

  function handleDiffChange(diff: Diff) {
    if (!activeWord) return
    if (!activeEntry) return saveEntry(diff)

    activeEntry.diff = diff
    syncStorage()
    if (isMobile) setUiDiff(diff)

    if (!isMobile) updateTab("translate-tab", diff)
  }

  const langItems = [
    { key: "en", text: "en" },
    { key: "fr", text: "fr" },
    { key: "la", text: "la" },
    { key: "sp", text: "sp" },
    { key: "de", text: "de" },
  ]

  function changeWordLang({ key }: { key: string }) {
    setWordLang(key)
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
        {activeWordObj && <Words words={activeWordObj.text} single={true} />}
      </div>

      <div className="flex flex-col gap-4">
        <AppTextarea
          ref={defBox}
          id={"defBox"}
          label={`Definition: ${activeEntry?.def ?? "..."}`}
          defaultValue={activeEntry?.def ?? ""}
          word={activeWordObj}
        />
        <AppTextarea
          ref={parentBox}
          id={"parentBox"}
          label={`Parent: ${activeEntry?.parent ?? "..."}`}
          defaultValue={activeEntry?.parent ?? ""}
          word={activeWordObj}
        />
        <div className="flex gap-4">
          <ToggleGroup
            className="w-fit gap-0 self-start rounded-sm border"
            type="single"
            value={activeEntry?.diff ?? undefined}
            onValueChange={(value) => handleDiffChange(value as Diff)}
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

          <AppSelect
            placeholder={wordLang || ""}
            items={langItems}
            action={changeWordLang}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex w-full gap-3">
          <Button
            disabled={!activeWord}
            className="grow bg-green-800 text-white hover:bg-green-600 active:bg-green-800"
            onClick={() => saveEntry(undefined)}
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
            href={`${!(langOption === "spen") ? "https://www.wordreference.com/" + langOption + "/" + activeWord : "https://www.wordreference.com/es/en/translation.asp?spen=" + activeWord}`}
            className="absolute inset-0"
          />
          translate
        </Button>
      </div>
    </motion.div>
  )
}
