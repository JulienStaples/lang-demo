"use client"

import { createContext, JSX, useEffect, useState } from "react"
import TranslateTab from "../components/nav/TranslateTab"
import DetailsTab from "../components/nav/DetailsTab"
import DbSearchTab from "../components/nav/dbTab/DbTab"
import { AnimationScope, Segment, useAnimate } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

type NavContextProviderProps = {
  children: React.ReactNode
}

type NavContextType = {
  updateTab: (curTab: TabKey, refresh?: string) => void
  tab: JSX.Element | undefined
  scope: AnimationScope<any>
  exitAnim: () => void
  tabsPane: boolean
  setTabsPane: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavContext = createContext<NavContextType | null>(null)

export default function NavProvider({ children }: NavContextProviderProps) {
  const [tab, setTab] = useState<JSX.Element | undefined>()
  const [tabsPane, setTabsPane] = useState<boolean>(false)
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
  function updateTab(curTab: TabKey, refresh = "") {
    if (isMobile && tabsPane && curTab === tab?.key) return exitAnim()

    if (!tabsPane) setTabsPane(true)
    const TabComponent = tabs[curTab]
    setTab(<TabComponent key={curTab + refresh} />)
  }

  function exitAnim() {
    const exitSeq: Segment[] = [
      [scope.current, { scaleX: 0 }, { duration: 0.07 }],
    ]

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
