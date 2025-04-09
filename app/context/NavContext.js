"use client"

import { createContext, useState } from "react"
import TranslateTab from "../components/nav/TranslateTab"
import DetailsTab from "../components/nav/DetailsTab"
import DbSearchTab from "../components/nav/dbTab/DbTab"
import { useAnimate } from "framer-motion"

export const NavContext = createContext()

export default function NavProvider({ children }) {
  const [tab, setTab] = useState()
  const [tabsPane, setTabsPane] = useState(false)
  const [scope, animate] = useAnimate()

  const tabs = {
    "translate-tab": TranslateTab,
    "details-tab": DetailsTab,
    "db-tab": DbSearchTab,
  }

  function selectTab(curTab) {
    if (tabsPane && curTab === tab.key) return exitAnim()

    if (!tabsPane) setTabsPane(true)

    const TabComponent = tabs[curTab]
    setTab(<TabComponent key={curTab} />)
  }

  function exitAnim() {
    const exitSeq = [[scope.current, { scaleX: 0 }, { duration: 0.07 }]]

    animate(exitSeq).then(() => {
      setTimeout(() => {
        setTabsPane(false)
      }, 0)
    })
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
