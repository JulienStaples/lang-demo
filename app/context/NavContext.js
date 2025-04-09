"use client"

import { createContext, useState } from "react"
import TranslateTab from "../components/nav/TranslateTab"
import DetailsTab from "../components/nav/DetailsTab"
import DbSearch from "../components/nav/DbSearchTab"
import { useAnimate } from "framer-motion"

export const NavContext = createContext()

export default function NavProvider({ children }) {
  const [tab, setTab] = useState("")
  const [tabsPane, setTabsPane] = useState(false)
  const [scope, animate] = useAnimate()

  function exitAnim() {
    const exitSeq = [[scope.current, { scaleX: 0 }, { duration: 0.07 }]]

    animate(exitSeq).then(() => {
      setTimeout(() => {
        setTabsPane(false)
      }, 0)
    })
  }

  function selectTab(curTab) {
    if (!tabsPane) setTabsPane(true)

    if (curTab === "translate-tab")
      setTab(<TranslateTab key={"translate-tab"} selectTab={selectTab} />)
    if (curTab === "details-tab")
      setTab(<DetailsTab key={"details-tab"} selectTab={selectTab} />)
    if (curTab === "db-tab")
      setTab(<DbSearch key={"db-tab"} selectTab={selectTab} />)
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
