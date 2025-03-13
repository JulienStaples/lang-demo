"use client"

import TranslateTab from "../components/TranslateTab"
import DetailsTab from "../components/DetailsTab"
import DbSearch from "../components/DbSearch"
import { createContext, useEffect, useState } from "react"

export const NavContext = createContext()

export default function NavProvider({ children }) {
  const [tab, setTab] = useState()

  useEffect(() => {
    selectTab("translate")
  }, [])

  function selectTab(curTab) {
    if (curTab == "translate")
      setTab(
        <TranslateTab
          key={"translate-tab"}
          selectTab={selectTab}
        ></TranslateTab>,
      )
    if (curTab == "details")
      setTab(
        <DetailsTab key={"details-tab"} selectTab={selectTab}></DetailsTab>,
      )
    if (curTab == "db")
      setTab(<DbSearch key={"db-tab"} selectTab={selectTab}></DbSearch>)
  }
  return (
    <NavContext.Provider value={{ selectTab, tab }}>
      {children}
    </NavContext.Provider>
  )
}
