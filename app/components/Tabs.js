"use client"

import { useContext } from "react"
import { TabContext } from "../context/TabContext"
import { AppContext } from "../context/AppContext"

export default function Tabs() {
  const { showFlyout, handleClick, activeWordObj } = useContext(AppContext)
  const { tab, selectTab } = useContext(TabContext)
  const activeWord = activeWordObj.normal

  if (showFlyout) {
    return (
      <div
        id="tabs"
        data-active="false"
        className="absolute bottom-0 right-0 top-0 z-40 flex w-full flex-col items-start gap-9 overflow-x-hidden overflow-y-scroll border-2 border-slate-700 bg-[#050505] p-[2.5rem] pb-0 duration-200 ease-in-out data-[active='false']:right-[-100vw]"
      >
        <button
          className="absolute left-2 top-1 z-50"
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

        <button
          className="absolute left-36 top-1 z-50"
          onClick={() => selectTab("db")}
        >
          db
        </button>
        <button
          className="left-18 absolute top-1 z-50"
          onClick={() => selectTab("translate")}
        >
          translate
        </button>
        {tab}
      </div>
    )
  }
}
