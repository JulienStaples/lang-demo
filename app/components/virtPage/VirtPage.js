"use client"

import { useEffect, useContext, useRef, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { useAnimate } from "framer-motion"
import { enterExitVari, spanVari } from "@/app/lib/constants/virtPageAnims"
import TitleBar from "./TitleBar"
import ReadingView from "./ReadingView"
import EditView from "./EditView"

export default function VirtPage() {
  const { presetText, page, setPage } = useContext(AppContext)
  const [scope, animate] = useAnimate()
  const [view, setView] = useState()
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
        className={`relative h-full w-full pr-4 after:pointer-events-none after:absolute after:inset-0 after:-inset-y-3 after:-left-10 after:right-0 after:shadow-[inset_0_-1px_10px_black]`}
      >
        {view}
      </div>

      <div className="controls flex gap-7 border-t-2 border-neutral-600 pt-2">
        <button onClick={pagePrev}>{`<`}</button>
        <span>
          {`${page + 1 < 10 ? `0${page + 1}` : page + 1} / ${
            presetText.body.length < 10
              ? `0${presetText.body.length}`
              : presetText.body.length
          }`}
        </span>
        <button onClick={pageNext}>{`>`}</button>
        <div>
          <button onClick={exitAnim}>=</button>
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
