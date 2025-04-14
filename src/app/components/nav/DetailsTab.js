"use client"
import { useContext } from "react"
import { AppContext } from "@/src/app/context/AppContext"
import Words from "../virtPage/Words"
import { motion } from "framer-motion"
import { wordDb } from "@/src/lib/wordDb"

export default function DetailsTab() {
  const { activeWordObj } = useContext(AppContext)

  const activeEntry = wordDb.get(activeWordObj.normal)

  return (
    <motion.div
      id="details-tab"
      className="flex flex-col gap-5 overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex gap-2 overflow-visible">
        <h1>Word:</h1>
        {activeWordObj && <Words words={activeWordObj.text} single={true} />}
      </div>
      <div className="flex gap-2">
        <h1>Definition:</h1>
        <p>{activeEntry?.def ?? "..."}</p>
      </div>
      <div className="flex gap-2">
        <h1>Parent:</h1>
        <p>{activeEntry?.parent ?? "..."}</p>
      </div>
      <div className="flex gap-2">
        <h1>Language:</h1>
        <p>{activeEntry?.lang ?? "..."}</p>
      </div>
    </motion.div>
  )
}
