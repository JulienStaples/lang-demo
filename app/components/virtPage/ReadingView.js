import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { motion } from "framer-motion"
import { enterExitVari } from "../../lib/constants/virtPageAnims"
import Words from "./Words"

export default function ReadingView() {
  const { presetText, page } = useContext(AppContext)

  return (
    <motion.div initial="init" animate="enter" variants={enterExitVari}>
      <div className="page-view absolute -inset-y-3 -left-10 right-0 origin-left overflow-x-hidden overflow-y-scroll py-3 pl-10 pr-4">
        <Words words={presetText.body[page]} />
      </div>
    </motion.div>
  )
}
