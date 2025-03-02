"use client"
import Word from "./Word"
import { useState } from "react"
import { diffColors } from "../lib/constants/constants"
import nlpObj from "compromise"
import fnlpObj from "fr-compromise"

export default function VirtPage(startingText) {
  const [text, setText] = useState(startingText.startingText)
  const [view, setView] = useState(() => readingView())

  function toggleView() {
    view.key == "readingView" ? setView(editView) : setView(readingView)
  }

  function pageNext() {}

  function pagePrev() {}

  function genHtmWords(text) {
    const nlp = nlpObj(text)
    let bgColor = diffColors.hard
    let htmWords = []

    nlp.termList().map((wordObj) => {
      htmWords.push(<Word key={wordObj.id} wordObj={wordObj}></Word>)
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
      <p>
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
