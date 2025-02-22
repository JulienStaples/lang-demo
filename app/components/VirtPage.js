"use client"

import { useState } from "react"

export default function VirtPage(startingText) {
  const [view, setView] = useState(readingView)

  function toggleView() {}
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

  function editView() {}
  function readingView() {}
}
