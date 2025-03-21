"use client"

import { createContext, useEffect, useState } from "react"
import TranslateTab from "../components/nav/TranslateTab"
import DetailsTab from "../components/nav/DetailsTab"
import DbSearch from "../components/nav/DbSearchTab"
import TextsTab from "../components/nav/TextsTab"
import LangsTab from "../components/nav/LangsTab"
import { useAnimate } from "framer-motion"

export const NavContext = createContext()

export default function NavProvider({ children }) {
  const [tab, setTab] = useState("translate-tab")
  const [scope, animate] = useAnimate()
  const [tabsPane, setTabsPane] = useState(false)

  function exitAnim() {
    const exitSeq = [[scope.current, { scaleX: 0 }, { duration: 0.07 }]]

    animate(exitSeq).then(() => {
      setTimeout(() => {
        setTabsPane(false)
      }, 0)
    })
  }

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
    <NavContext.Provider
      value={{
        selectTab,
        tab,
        scope,
        exitAnim,
        tabsPane,
        setTabsPane,
      }}
    >
      {children}
    </NavContext.Provider>
  )
}
