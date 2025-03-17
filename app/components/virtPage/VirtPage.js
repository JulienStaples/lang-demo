"use client"

import { useEffect, useState, useContext, useRef } from "react"
import { AppContext } from "../../context/AppContext"
import ReadingView from "./ReadingView"
import TitleBar from "./TitleBar"
import { AnimatePresence } from "framer-motion"

export default function VirtPage() {
  const { presetText, page, setPage } = useContext(AppContext)
  const [view, setView] = useState("")
  const editBox = useRef()

  useEffect(() => {
    setView(<ReadingView />)
  }, [presetText, page])

  function toggleView() {
    view.type.name == "ReadingView"
      ? setView(editView)
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
      <div className={`relative h-full w-full pr-4`}>
        <AnimatePresence mode="wait">{view}</AnimatePresence>
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
          <button onClick={toggleView}>=</button>
        </div>
      </div>
    </div>
  )

  function editView() {
    return (
      <textarea
        key={`editView`}
        ref={editBox}
        className="absolute -inset-y-3 -left-10 right-0 resize-none overflow-x-hidden overflow-y-scroll bg-transparent py-3 pl-10 pr-4 [word-spacing:2px]"
        defaultValue={presetText.body[page]}
      />
    )
  }
}
