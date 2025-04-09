"use client"

import { useContext } from "react"
import { NavContext } from "@/app/context/NavContext"
import { motion } from "framer-motion"

export default function TabPane() {
  const { tab, scope, tabsPane, exitAnim } = useContext(NavContext)

  if (tabsPane) {
    return (
      <motion.div
        onClick={(e) => e.target.id === "tabs-pane" && exitAnim()}
        ref={scope}
        initial={{ originX: "left", scaleX: 0 }}
        animate={{ scaleX: 1, transition: { duration: 0.1 } }}
        id="tabs-pane"
        className="absolute inset-0 z-40 items-start overflow-y-scroll bg-neutral-950/95 p-4"
      >
        <div>{tab}</div>
      </motion.div>
    )
  }
}
