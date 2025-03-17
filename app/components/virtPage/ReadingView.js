import React, { useContext, useEffect } from "react"
import { AppContext } from "../../context/AppContext"
import nlpObj from "compromise"
import fnlpObj from "fr-compromise"
import Word from "./Word"
import { usePresence, useAnimate, motion } from "framer-motion"
import { enterExit, enterExitVari } from "../../lib/constants/virtPageAnims"

export default function ReadingView() {
  const { presetText, page } = useContext(AppContext)
  const nlp = nlpObj(presetText.body[page])

  //Animations
  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()

  useEffect(() => {
    enterExit(isPresent, safeToRemove, scope, animate)
  }, [isPresent])
  ///

  return (
    <motion.div ref={scope} initial="init" variants={enterExitVari}>
      <div className="absolute -inset-y-3 -left-10 right-0 overflow-x-hidden overflow-y-scroll py-3 pl-10 pr-4">
        {nlp.termList().map((wordObj) => (
          <Word key={wordObj.id} wordObj={wordObj} />
        ))}
      </div>
    </motion.div>
  )
}
