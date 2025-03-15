import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { diffWordColors, findDiff } from "../../lib/constants/constants"
import { motion } from "framer-motion"

export default function Word(props) {
  const { handleClick } = useContext(AppContext)

  let wordObj = props.wordObj
  let wordDiff = findDiff(wordObj.normal)

  return (
    <>
      <motion.span
        id={wordObj.normal}
        onClick={() => handleClick(wordObj)}
        className={`[back] relative z-0 mr-[2px] inline-block cursor-pointer select-none hover:z-20`}
        initial={{
          scale: 1,
          y: 0,
          filter: "invert(0%)",
        }}
        whileHover={{
          scale: 1.4,
          filter: "invert(100%)",
          y: -7,
        }}
        transition={{
          duration: 0.12,
          ease: "easeInOut",
        }}
      >
        <span>{wordObj.text}</span>
        <span
          data-diff={wordDiff}
          className={`${diffWordColors} absolute -inset-x-[.07em] inset-y-[.15em] -z-10 rounded-sm`}
        />
      </motion.span>
      <span>{wordObj.post}</span>
    </>
  )
}
