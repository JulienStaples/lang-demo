"use client"

import { useState, useContext } from "react"
import { AppContext } from "../context/AppContext"
import { difficultyColors } from "../lib/constants/constants"
import nlpObj from "compromise"
import fnlpObj from "fr-compromise"

export default function VirtPage(startingText) {
  const { handleClick } = useContext(AppContext)

  const [text, setText] = useState(startingText.startingText)
  const [view, setView] = useState(() => readingView())

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
    view.key == "readingView" ? setView(editView) : setView(readingView)
  }

  function pageNext() {}

  function pagePrev() {}

  function genHtmWords(text) {
    const nlp = nlpObj(text)
    let bgColor = difficultyColors.hard
    let htmWords = []

    nlp.termList().map((wordObj) => {
      htmWords.push(
        <span key={crypto.randomUUID()}>
          <span
            onMouseEnter={(e) => handleEnter(e)}
            onMouseLeave={(e) => handleExit(e)}
            onClick={() => handleClick(wordObj)}
            className={`relative ${`bgColor`} inline-block hover:invert hover:-translate-y-[3px] duration-100 ease-in-out`}
          >
            <span
              id="wordSpan"
              data-hovered="false"
              className={`pointer-events-none relative z-10 data-[hovered=true]:z-30`}
            >
              {wordObj.text}
            </span>

            <span
              id="bgSpan"
              data-hovered="false"
              className={`data-[hovered=true]:z-20 rounded-[2px] pointer-events-none ${bgColor} absolute  top-[3px] bottom-[3px] -right-[1px] -left-[1px] data-[hovered=true]:-left-[3px] data-[hovered=true]:-right-[3px] data-[hovered=true]:top-[1px] data-[hovered=true]:bottom-[1px] duration-100 ease-in-out`}
            ></span>
          </span>
          <span className="mx-[2px]">{wordObj.post}</span>
        </span>
      )
    })

    return htmWords
  }

  return (
    <div className="w-full h-full flex justify-center items-end overflow-visible">
      <div className="flex flex-col items-end w-[90%] h-[97%] gap-3 overflow-visible">
        <button onClick={toggleView}>=</button>
        <div
          className={`w-full h-full 
            ${view.key == "readingView" ? "overflow-y-scroll" : ""} 
            px-[2rem]`}
        >
          {view}
        </div>
        <div className=" flex gap-7">
          <button onClick={pagePrev}>{`<`}</button>
          <button onClick={pageNext}>{`>`}</button>
        </div>
      </div>
    </div>
  )

  function readingView() {
    let words = genHtmWords(text)

    return (
      <p key={"readingView"}>
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
        className=" bg-black w-full h-full"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    )
  }
}
