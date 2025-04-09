import React, { useContext } from "react"
import { AppContext } from "@/app/context/AppContext"
import {
  findDiff,
  diffWordColors,
  findEntry,
  wordDb,
} from "@/app/lib/constants/constants"
import { motion } from "framer-motion"
import { spanVari, wordVari } from "../../lib/constants/virtPageAnims"
import { NavContext } from "@/app/context/NavContext"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Word(props) {
  const wordObj = props.wordObj
  const wordDiff = findDiff(wordObj.normal)
  const { setActiveWordObj, setEntry } = useContext(AppContext)
  const { setTabsPane, exitAnim, tab, tabsPane, selectTab } =
    useContext(NavContext)

  function handleClick(wordObj) {
    setActiveWordObj(wordObj)
    setEntry(findEntry(wordObj.normal))

    if (tab.key == "translate-tab") {
      tabsPane ? exitAnim() : setTabsPane(true)
    } else {
      selectTab("translate-tab")
      setTabsPane(true)
    }
  }

  return (
    <>
      <motion.span
        id={wordObj.normal}
        initial="init"
        whileHover="hover"
        variants={wordVari}
        onClick={() => handleClick(wordObj)}
        className={`group relative z-0 mr-[2px] inline-block cursor-pointer rounded-sm after:absolute after:inset-0 after:-inset-x-[.07em] after:inset-y-[.15em] after:rounded-sm after:shadow-md after:shadow-transparent hover:z-20 after:hover:shadow-black`}
      >
        <span className="word-span group-hover:invert">{wordObj.text}</span>
        <motion.span
          initial="init"
          animate="enter"
          variants={spanVari}
          data-diff={wordDiff}
          className={`bg-span ${diffWordColors} absolute -inset-x-[.07em] inset-y-[.15em] -z-10 origin-left rounded-sm group-hover:invert`}
        />
      </motion.span>

      <span>{wordObj.post}</span>
    </>
  )
}
