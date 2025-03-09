"use client"

import TranslateTab from "./TranslateTab"
import DetailsTab from "./DetailsTab"
import DbSearch from "./DbSearch"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"

export default function Tabs() {
  const { showFlyout, handleClick, activeWordObj } = useContext(AppContext)
  const [tab, setTab] = useState()
  const activeWord = activeWordObj.normal

  useEffect(() => {
    selectTab("db")
  }, [])

  function selectTab(curTab) {
    if (curTab == "translate")
      setTab(<TranslateTab selectTab={selectTab}></TranslateTab>)
    if (curTab == "details")
      setTab(<DetailsTab selectTab={selectTab}></DetailsTab>)
    if (curTab == "db") setTab(<DbSearch selectTab={selectTab}></DbSearch>)
  }

  if (showFlyout) {
    return (
      <div
        id="tabs"
        data-active="false"
        className="absolute bottom-0 right-0 top-0 z-50 flex w-full flex-col items-start gap-9 overflow-x-hidden overflow-y-scroll border-2 border-slate-700 bg-[#050505] p-[2.5rem] pb-0 duration-200 ease-in-out data-[active='false']:right-[-100vw]"
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
