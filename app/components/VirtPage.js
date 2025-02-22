"use client"

import { useState, useMemo, useEffect } from "react"
import { difficultyColors } from "../lib/constants/constants"
import nlpObj from "compromise"
import fnlpObj from "fr-compromise"

export default function VirtPage(startingText) {
  const [text, setText] = useState(startingText.startingText)
  const [page, setPage] = useState(0)
  const pages = useMemo(() => {
    return textToPages(text)
  }, [text])
  const [view, setView] = useState(readingView)

  //this runs on first load
  //effectively making it redundant for
  //the initial setView value
  useEffect(() => {
    setView(readingView)
  }, [page])

  //these should probably find their
  //own home
  //
  function handleEnter(e) {
    e.target.querySelector("#bgSpan").dataset.hovered = "true"
    e.target.querySelector("#wordSpan").dataset.hovered = "true"
  }

  function handleExit(e) {
    e.target.querySelector("#bgSpan").dataset.hovered = "false"
    e.target.querySelector("#wordSpan").dataset.hovered = "false"
  }
  //

  function toggleView() {
    view.key == `readingView` ? setView(editView) : setView(readingView)
  }

  function pageNext() {
    if (page == pages.length - 1) return
    setPage((prev) => prev + 1)
  }

  function pagePrev() {
    if (page == 0) return
    setPage((prev) => prev - 1)
  }

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
    return (
      <p key={`readingView`}>
        {pages[page].map((e) => {
          let bgColor = difficultyColors.hard
          return (
            <span className=" " key={crypto.randomUUID()}>
              <span
                onMouseEnter={(e) => handleEnter(e)}
                onMouseLeave={(e) => handleExit(e)}
                className={`relative ${`bgColor`} inline-block hover:invert hover:-translate-y-[3px] duration-100 ease-in-out`}
              >
                <span
                  id="wordSpan"
                  data-hovered="false"
                  className={`pointer-events-none relative z-10 data-[hovered=true]:z-30`}
                >
                  {e.text}
                </span>

                <span
                  id="bgSpan"
                  data-hovered="false"
                  className={`data-[hovered=true]:z-20 rounded-[2px] pointer-events-none ${bgColor} absolute  top-[3px] bottom-[3px] -right-[1px] -left-[1px] data-[hovered=true]:-left-[3px] data-[hovered=true]:-right-[3px] data-[hovered=true]:top-[1px] data-[hovered=true]:bottom-[1px] duration-100 ease-in-out`}
                ></span>
              </span>
              <span className="mx-[2px]">{e.post}</span>
            </span>
          )
        })}
      </p>
    )
  }
}
