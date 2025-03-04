"use client"

import { useEffect, useState, useContext, useRef } from "react"
import { AppContext } from "../context/AppContext"
import Word from "./Word"
import nlpObj from "compromise"
import fnlpObj from "fr-compromise"

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
          <span>
            {`${page + 1 < 10 ? `0${page + 1}` : page + 1} / ${
              presetText.body.length < 10
                ? `0${presetText.body.length}`
                : presetText.body.length
            }`}
          </span>
          <button onClick={pageNext}>{`>`}</button>
        </div>
      </div>
    </div>
  )

  function readingView() {
    let words = genHtmWords()

    return (
      <p key={`readingView`}>
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
        className=" bg-black w-full h-full"
        defaultValue={presetText.body[page]}
      ></textarea>
    )
  }
}
