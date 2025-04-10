import { useContext, useMemo } from "react"
import { AppContext } from "../../context/AppContext"
import { motion } from "framer-motion"
import { enterExitVari } from "../../lib/constants/virtPageAnims"
import Word from "./Word"
import nlpObj from "compromise"
import fnlpObj from "fr-compromise"

export default function ReadingView() {
  const { presetText, page } = useContext(AppContext)
  const nlp = useMemo(() => nlpObj(presetText.body[page]), [presetText, page])

  return (
    <motion.div initial="init" animate="enter" variants={enterExitVari}>
      <div className="page-view absolute -inset-y-3 -left-10 right-0 origin-left overflow-x-hidden overflow-y-scroll py-3 pl-10 pr-4">
        {nlp.termList().map((wordObj) => (
          <Word key={wordObj.id} wordObj={wordObj} />
        ))}
      </div>
    </motion.div>
  )
}
