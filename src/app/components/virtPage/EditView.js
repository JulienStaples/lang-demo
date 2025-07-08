import { motion } from "framer-motion"
import { enterExitVari } from "@/constants/virtPageAnims"

export default function EditView(props) {
  const { editBox, presetText, page } = props

  return (
    <motion.div initial="init" animate="enter" variants={enterExitVari}>
      <textarea
        ref={editBox}
        autoFocus
        className="page-view absolute -inset-y-3 -left-10 right-0 origin-left resize-none overflow-x-hidden overflow-y-scroll bg-transparent py-3 pl-[3.5rem] pr-4 font-serif outline-none [word-spacing:2px]"
        defaultValue={presetText.body[page]}
      />
    </motion.div>
  )
}
