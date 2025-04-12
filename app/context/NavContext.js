"use client"

import { createContext, useEffect, useState } from "react"
import TranslateTab from "../components/nav/TranslateTab"
import DetailsTab from "../components/nav/DetailsTab"
import DbSearchTab from "../components/nav/dbTab/DbTab"
import { useAnimate } from "framer-motion"
import { wordDb } from "../lib/constants/constants"

export const NavContext = createContext()

export default function NavProvider({ children }) {
  const [tab, setTab] = useState("")
  const [tabsPane, setTabsPane] = useState(false)
  const [scope, animate] = useAnimate()

  useEffect(() => {
    sessionStorage.setItem("wordDb", JSON.stringify([...wordDb]))
  }, [tabsPane])

  const tabs = {
    "translate-tab": TranslateTab,
    "details-tab": DetailsTab,
    "db-tab": DbSearchTab,
  }

  function updateTab(curTab) {
    if (tabsPane && curTab === tab.key) return exitAnim()

    if (!tabsPane) setTabsPane(true)

    const TabComponent = tabs[curTab]
    setTab(<TabComponent key={curTab} />)
  }

  function exitAnim() {
    const exitSeq = [[scope.current, { scaleX: 0 }, { duration: 0.07 }]]

    animate(exitSeq).then(() => setTabsPane(false))
  }

  return (
    <NavContext.Provider
      value={{
        updateTab,
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
