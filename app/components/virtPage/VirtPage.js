"use client"

import { useEffect, useContext, useRef, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { useAnimate } from "framer-motion"
import { enterExitVari, spanVari } from "@/app/lib/constants/virtPageAnims"
import TitleBar from "./TitleBar"
import ReadingView from "./ReadingView"
import EditView from "./EditView"
import { ChevronLeft, ChevronRight, FilePenLine } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function VirtPage() {
  const { presetText, page, setPage } = useContext(AppContext)
  const [scope, animate] = useAnimate()
  const [view, setView] = useState("")
  const editBox = useRef()

  useEffect(() => {
    setView(<ReadingView />)
  }, [presetText, page])

  function toggleView() {
    view.type.name == "ReadingView"
      ? setView(<EditView ref={editBox} />)
      : ((presetText.body[page] = editBox.current.value),
        setView(<ReadingView />))
  }

  function pageNext() {
    page == presetText.body.length - 1 ? "" : setPage((prev) => (prev += 1))
  }

  function pagePrev() {
    page == 0 ? "" : setPage((prev) => (prev -= 1))
  }

  return (
    <div className="flex grow flex-col gap-3">
      <TitleBar />

      <div
        ref={scope}
        className={`relative h-full w-full pr-4 before:pointer-events-none before:absolute before:-inset-y-3 before:-left-10 before:right-0 before:z-0 before:border-8 before:border-accent before:transition-all before:duration-700 ${view.type?.name == "EditView" ? "before:opacity-100" : "before:opacity-0"} after:pointer-events-none after:absolute after:inset-0 after:-inset-y-3 after:-left-10 after:right-0 after:shadow-[inset_0_-1px_10px_black] focus-within:before:animate-pulse`}
      >
        {view}
      </div>

      <div className="controls relative flex justify-between border-t-2 border-neutral-600 pr-3 pt-2">
        <Progress
          className="absolute top-0 h-1"
          value={
            (page + 1 == 1 ? 0 : (page + 1) / presetText.body.length) * 100
          }
        />

        <button onClick={exitAnim}>
          <FilePenLine className="size-5 hover:stroke-rose-600 active:stroke-accent" />
        </button>
        <div className="flex items-center gap-3">
          <button onClick={pagePrev}>
            <ChevronLeft className="size-6 hover:stroke-rose-600 active:stroke-accent" />
          </button>
          <span>
            {`${page + 1 < 10 ? `0${page + 1}` : page + 1} / ${
              presetText.body.length < 10
                ? `0${presetText.body.length}`
                : presetText.body.length
            }`}
          </span>
          <button onClick={pageNext}>
            <ChevronRight className="size-6 hover:stroke-rose-600 active:stroke-accent" />
          </button>
        </div>
      </div>
    </div>
  )

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
}
