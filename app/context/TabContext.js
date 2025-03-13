"use client"

import TranslateTab from "../components/TranslateTab"
import DetailsTab from "../components/DetailsTab"
import DbSearch from "../components/DbSearch"
import { createContext, useEffect, useState } from "react"

export const TabContext = createContext()

export default function TabProvider({ children }) {
  const [tab, setTab] = useState()

  useEffect(() => {
    selectTab("translate")
  }, [])

  function selectTab(curTab) {
    if (curTab == "translate")
      setTab(<TranslateTab selectTab={selectTab}></TranslateTab>)
    if (curTab == "details")
      setTab(<DetailsTab selectTab={selectTab}></DetailsTab>)
    if (curTab == "db") setTab(<DbSearch selectTab={selectTab}></DbSearch>)
  }
  return (
    <TabContext.Provider value={{ selectTab, tab }}>
      {children}
    </TabContext.Provider>
  )
}
