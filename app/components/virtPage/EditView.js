import React, { useContext } from "react"
import { AppContext } from "@/app/context/AppContext"
import { motion } from "framer-motion"
import { enterExitVari } from "@/app/lib/constants/virtPageAnims"

export default function EditView(props) {
  const editBox = props.ref
  const { presetText, page } = useContext(AppContext)

  return (
    <motion.div initial="init" animate="enter" variants={enterExitVari}>
      <textarea
        ref={editBox}
        key={`editView`}
        className="page-view absolute -inset-y-3 -left-10 right-0 origin-left resize-none overflow-x-hidden overflow-y-scroll bg-transparent py-3 pl-10 pr-4 [word-spacing:2px]"
        defaultValue={presetText.body[page]}
      />
    </motion.div>
  )
}
