"use client"

import { useEffect, useState, useContext, useRef } from "react"
import { AppContext } from "../../context/AppContext"
import Word from "./Word"
import nlpObj from "compromise"
import fnlpObj from "fr-compromise"
import TitleBar from "./TitleBar"

export default function VirtPage() {
  const { presetText, page, setPage } = useContext(AppContext)
  const [view, setView] = useState("")
  const editBox = useRef()

  useEffect(() => {
    setView(readingView)
  }, [presetText, page])

  function toggleView() {
    view.key == "readingView"
      ? setView(editView)
      : ((presetText.body[page] = editBox.current.value), setView(readingView))
  }

  function pageNext() {
    page == presetText.body.length - 1 ? "" : setPage((prev) => (prev += 1))
  }

  function pagePrev() {
    page == 0 ? "" : setPage((prev) => (prev -= 1))
  }

  function genHtmWords() {
    const nlp = nlpObj(presetText.body[page])
    let htmWords = []

    nlp.termList().map((wordObj) => {
      htmWords.push(<Word key={wordObj.id} wordObj={wordObj}></Word>)
    })

    return htmWords
  }

  return (
    <div className="flex grow flex-col gap-3">
      <TitleBar />
      <div className={`relative h-full w-full pr-4`}>{view}</div>
      <div className="controls flex gap-7 border-t-2 pt-2">
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

  function readingView() {
    let words = genHtmWords()

    return (
      <p
        key={`readingView`}
        className="absolute -inset-y-3 -left-10 right-0 overflow-x-hidden overflow-y-scroll py-3 pl-10 pr-4"
      >
        {words.map((word) => {
          return word
        })}
      </p>
    )
  }

  function editView() {
    return (
      <textarea
        key={`editView`}
        ref={editBox}
        className="absolute -inset-y-3 -left-10 right-0 resize-none overflow-x-hidden overflow-y-scroll bg-neutral-900 py-3 pl-10 pr-4 [word-spacing:2px]"
        defaultValue={presetText.body[page]}
      />
    )
  }
}
