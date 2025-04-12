"use client"

import { useEffect, useContext, useRef, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { useAnimate } from "framer-motion"
import { enterExitVari, spanVari } from "@/app/lib/constants/virtPageAnims"
import TitleBar from "./TitleBar"
import ReadingView from "./ReadingView"
import EditView from "./EditView"
import Footer from "./Footer"

export default function VirtPage() {
  const { presetText, page, setPage, activeWordObj } = useContext(AppContext)
  const [scope, animate] = useAnimate()
  const editBox = useRef()

  const [view, setView] = useState("")

  useEffect(() => {
    setView("reading")
  }, [])

  const views = {
    reading: <ReadingView presetText={presetText} page={page} />,
    edit: <EditView ref={editBox} presetText={presetText} page={page} />,
  }

  function toggleView() {
    if (view === "reading") return setView("edit")

    presetText.body[page] = editBox.current.value
    setView("reading")
  }

  function exitAnim() {
    const exitSeq = [
      [".bg-span", spanVari.exit, { duration: 0.2 }],
      [".page-view", enterExitVari.exit, { delay: 0.15, duration: 0.1 }],
    ]

    animate(exitSeq).then(() => {
      setTimeout(() => {
        toggleView()
      }, 200)
    })
  }

  return (
    <div className="flex grow flex-col gap-3">
      <TitleBar presetText={presetText} activeWordObj={activeWordObj} />

      <div
        ref={scope}
        className={`relative h-full w-full pr-4 before:pointer-events-none before:absolute before:-inset-y-3 before:-left-10 before:right-0 before:z-0 before:border-8 before:border-accent before:transition-all before:duration-700 ${view.type?.name == "EditView" ? "before:opacity-100" : "before:opacity-0"} after:pointer-events-none after:absolute after:inset-0 after:-inset-y-3 after:-left-10 after:right-0 after:shadow-[inset_0_-1px_10px_black] focus-within:before:animate-pulse`}
      >
        {views[view]}
      </div>

      <Footer
        presetText={presetText}
        page={page}
        setPage={setPage}
        exitAnim={exitAnim}
      />
    </div>
  )
}
