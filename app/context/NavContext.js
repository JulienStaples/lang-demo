"use client"

import { createContext, useEffect, useState } from "react"
import TranslateTab from "../components/tabs/TranslateTab"
import DetailsTab from "../components/tabs/DetailsTab"
import DbSearch from "../components/tabs/DbSearchTab"
import TextsTab from "../components/tabs/TextsTab"
import LangsTab from "../components/tabs/LangsTab"

export const NavContext = createContext()

export default function NavProvider({ children }) {
  const [tab, setTab] = useState("translate-tab")

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
