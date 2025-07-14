"use client"

import { useContext } from "react"
import { NavContext } from "@/app/context/NavContext"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

export default function TabsPane() {
  const { tab, scope, tabsPane, exitAnim } = useContext(NavContext)
  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <motion.div
        id="tabs-pane"
        className="z-40 h-full w-1/2 items-start overflow-y-scroll bg-neutral-950/95 p-4"
      >
        <div>{tab}</div>
      </motion.div>
    )
  }

  if (isMobile && tabsPane) {
    return (
      <motion.div
        onClick={(e) =>
          (e.target as HTMLElement).id === "tabs-pane" && exitAnim()
        }
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
