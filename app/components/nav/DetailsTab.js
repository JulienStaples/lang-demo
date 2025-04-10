"use client"
import { useContext } from "react"
import { AppContext } from "@/app/context/AppContext"
import Word from "../virtPage/Word"
import { motion } from "framer-motion"
import { wordDb } from "@/app/lib/constants/constants"

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
        {activeWordObj && (
          <Word
            wordObj={{ normal: activeWordObj.normal, text: activeWordObj.text }}
          />
        )}
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
      <div className="flex gap-2">
        <h1>Tags:</h1>
        <p>
          {activeWordObj?.tags ? [...activeWordObj.tags].join(", ") : "..."}
        </p>
      </div>
      <div className="flex gap-2">
        <h1>Part of speech:</h1>
        <p>{activeWordObj?.chunk ?? "..."}</p>
      </div>
      {/* <div className="flex gap-2">
        <h1>Synonyms:</h1>
        <p>{activeEntry?.syn ?? "..."}</p>
      </div>
      <div className="flex gap-2">
        <h1>Origin:</h1>
        <p>{activeEntry?.origin ?? "..."}</p>
      </div>
      <div className="flex gap-2">
        <h1>Frequency:</h1>
        <p>{activeEntry?.freq ?? "..."}</p>
      </div> */}
    </motion.div>
  )
}
