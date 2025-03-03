"use client"

import TranslateTab from "./TranslateTab"
import DetailsTab from "./DetailsTab"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Tabs() {
  const { showFlyout, handleClick, activeWordObj } = useContext(AppContext)

  const activeWord = activeWordObj.normal
  let tab = selectTab("translate")

  function selectTab(curTab) {
    if (curTab == "translate") return <TranslateTab></TranslateTab>
    if (curTab == "details") return <DetailsTab></DetailsTab>
  }

  if (showFlyout) {
    return (
      <div
        id="tabs"
        data-active="false"
        className=" bg-[#050505] z-50 flex flex-col gap-9 items-start p-[2.5rem] pb-0 border-2 border-slate-700 overflow-x-hidden overflow-y-scroll
        absolute w-full data-[active='false']:right-[-100vw]  top-0 bottom-0 right-0 duration-200 ease-in-out"
      >
        <button
          className="absolute top-1 left-1 z-50"
          onClick={(e) => {
            //animation issue
            e.target.parentNode.dataset.active = "false"
            setTimeout(() => {
              handleClick(activeWord)
            }, 200)
            //
          }}
        >
          X
        </button>
        {tab}
      </div>
    )
  }
}
