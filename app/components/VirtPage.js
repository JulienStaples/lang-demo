"use client"

import { useState, useMemo } from "react"
import nlpObj from "compromise"
import fnlpObj from "fr-compromise"

export default function VirtPage(startingText) {
  const [text, setText] = useState(startingText.startingText)
  const [page, setPage] = useState(0)
  const pages = useMemo(() => {
    return textToPages(text)
  }, [text])
  const [view, setView] = useState(readingView)

  function toggleView() {
    view.key == `readingView` ? setView(editView) : setView(readingView)
  }

  function pageNext() {}

  function pagePrev() {}

  function textToPages(text) {
    let nlp = nlpObj(text)
    let pages = []
    let page = []
    let wordIndex = 0

    nlp.termList().forEach((word, i) => {
      if (wordIndex < 79) {
        page.push(word)
        wordIndex++
      } else {
        page.push(word)
        pages.push(page)
        page = []
        wordIndex = 0
      }
    })
    pages.push(page)
    return pages
  }

  return (
    <div className="w-full h-full flex justify-center items-end overflow-visible">
      <div className="flex flex-col items-end w-[80%] h-[97%] gap-3 overflow-visible">
        <button onClick={toggleView}>=</button>
        <div className="w-full h-full">{view}</div>
        <div className=" flex gap-7">
          <button onClick={pagePrev}>{`<`}</button>
          <button onClick={pageNext}>{`>`}</button>
        </div>
      </div>
    </div>
  )

  function editView() {
    return (
      <textarea
        key={`editView`}
        className=" bg-black w-full h-full"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    )
  }

  function readingView() {
    return <div key={`readingView`}>readingView</div>
  }
}
