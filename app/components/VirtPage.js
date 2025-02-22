"use client"

import { useState } from "react"

export default function VirtPage(startingText) {
  const [text, setText] = useState(startingText.startingText)

  const [view, setView] = useState(readingView)

  function toggleView() {
    view.key == `readingView` ? setView(editView) : setView(readingView)
  }

  function pageNext() {}
  function pagePrev() {}

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
