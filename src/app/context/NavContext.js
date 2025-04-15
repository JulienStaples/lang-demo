"use client"

import { createContext, useEffect, useState } from "react"
import TranslateTab from "../components/nav/TranslateTab"
import DetailsTab from "../components/nav/DetailsTab"
import DbSearchTab from "../components/nav/dbTab/DbTab"
import { useAnimate } from "framer-motion"
import { useIsMobile } from "@/src/hooks/use-mobile"

export const NavContext = createContext()

export default function NavProvider({ children }) {
  const [tab, setTab] = useState("")
  const [tabsPane, setTabsPane] = useState(false)
  const [scope, animate] = useAnimate()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) setTabsPane(false)
    if (!isMobile) updateTab("translate-tab")
  }, [isMobile])

  const tabs = {
    "translate-tab": TranslateTab,
    "details-tab": DetailsTab,
    "db-tab": DbSearchTab,
  }

  // refresh is just used to update ui
  function updateTab(curTab, refresh = "") {
    console.log(tab.key)
    if (isMobile && tabsPane && curTab === tab.key) return exitAnim()

    if (!tabsPane) setTabsPane(true)

    const TabComponent = tabs[curTab]
    setTab(<TabComponent key={curTab + refresh} />)
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
