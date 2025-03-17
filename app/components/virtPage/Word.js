import React, { useContext } from "react"
import { AppContext } from "@/app/context/AppContext"
import { findDiff, diffWordColors } from "@/app/lib/constants/constants"
import { motion } from "framer-motion"
import { wordVari } from "../../lib/constants/virtPageAnims"

export default function Word(props) {
  const wordObj = props.wordObj
  const wordDiff = findDiff(wordObj.normal)
  const { handleClick } = useContext(AppContext)

  return (
    <>
      <motion.span
        id={wordObj.normal}
        initial="init"
        whileHover="hover"
        variants={wordVari}
        onClick={() => handleClick(wordObj)}
        className={`relative z-0 mr-[2px] inline-block cursor-pointer select-none hover:z-20`}
      >
        <span className="word-span">{wordObj.text}</span>
        <span
          data-diff={wordDiff}
          className={`bg-span ${diffWordColors} absolute -inset-x-[.07em] inset-y-[.15em] -z-10 rounded-sm`}
        />
      </motion.span>
      <span>{wordObj.post}</span>
    </>
  )
}
