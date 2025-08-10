import React, { useContext, useMemo } from "react"
import { AppContext } from "@/app/context/AppContext"
import { diffWordColors } from "@/constants/constants"
import { motion } from "framer-motion"
import { spanVari, wordVari } from "../../../constants/virtPageAnims"
import { NavContext } from "@/app/context/NavContext"
import { wordDb } from "@/lib/wordDb"
import nlp from "compromise"

type WordsProps = {
  words: string
  single?: boolean
}

export default function Words(props: WordsProps) {
  const { words, single = false } = props
  const { setActiveWordObj, setEntry } = useContext(AppContext)!
  const { updateTab } = useContext(NavContext)

  const wordObjs = useMemo(() => parser(), [words])

  function parser() {
    if (single) return [nlp(words).termList()[0]]
    return nlp(words).termList()
  }

  function handleClick(wordObj: Term) {
    setActiveWordObj(wordObj)
    setEntry(wordDb.get(wordObj.normal)?.entry || undefined)

    updateTab("translate-tab")
  }

  return wordObjs.map((wordObj) => {
    const wordDiff = wordDb.get(wordObj.normal)?.diff || undefined

    return (
      <React.Fragment key={wordObj.id}>
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

        {!single && <span>{wordObj.post}</span>}
      </React.Fragment>
    )
  })
}
