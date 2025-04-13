import { motion } from "framer-motion"
import { enterExitVari } from "../../../constants/virtPageAnims"
import Words from "./Words"

export default function ReadingView(props) {
  const { presetText, page } = props

  return (
    <motion.div initial="init" animate="enter" variants={enterExitVari}>
      <div className="page-view absolute -inset-y-3 -left-10 right-0 origin-left overflow-x-hidden overflow-y-scroll py-3 pl-[3.5rem] pr-4">
        <Words words={presetText.body[page]} />
      </div>
    </motion.div>
  )
}
