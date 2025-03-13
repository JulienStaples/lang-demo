"use client"

import { createContext, useEffect, useState } from "react"
import TranslateTab from "../components/TranslateTab"
import DetailsTab from "../components/DetailsTab"
import DbSearch from "../components/DbSearch"
import TextsTab from "../components/TextsTab"
import LangsTab from "../components/LangsTab"

export const NavContext = createContext()

export default function NavProvider({ children }) {
  const [tab, setTab] = useState()

  useEffect(() => {
    selectTab("translate")
  }, [])

  function selectTab(curTab) {
    if (curTab == "translate")
      setTab(<TranslateTab key={"translate-tab"} selectTab={selectTab} />)
    if (curTab == "details")
      setTab(<DetailsTab key={"details-tab"} selectTab={selectTab} />)
    if (curTab == "db")
      setTab(<DbSearch key={"db-tab"} selectTab={selectTab} />)
    if (curTab == "texts")
      setTab(<TextsTab key={"texts-tab"} selectTab={selectTab} />)
    if (curTab == "langs")
      setTab(<LangsTab key={"langs-tab"} selectTab={selectTab} />)
  }
  return (
    <NavContext.Provider value={{ selectTab, tab }}>
      {children}
    </NavContext.Provider>
  )
}
