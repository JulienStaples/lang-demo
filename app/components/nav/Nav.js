"use client"

import { useContext } from "react"
import { NavContext } from "../../context/NavContext"
import { AppContext } from "@/app/context/AppContext"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Database, Languages, SearchIcon } from "lucide-react"
import { dummyText, langOptions } from "@/app/lib/constants/constants"

export default function Nav() {
  const { tab, selectTab, exitAnim, setTabsPane, tabsPane } =
    useContext(NavContext)
  const { setPresetText, setLangOption, setPage } = useContext(AppContext)

  const navTabItems = [
    {
      icon: Languages,
      title: "Translate",
      id: "translate-tab",
      action: () => {
        tab.key == "translate-tab" && tabsPane
          ? exitAnim()
          : (selectTab("translate"), setTabsPane(true))
      },
    },
    {
      icon: SearchIcon,
      title: "Details",
      id: "details-tab",
      action: () => {
        tab.key == "details-tab" && tabsPane
          ? exitAnim()
          : (selectTab("details"), setTabsPane(true))
      },
    },
    {
      icon: Database,
      title: "Database",
      id: "db-tab",
      action: () => {
        tab.key == "db-tab" && tabsPane
          ? exitAnim()
          : (selectTab("db"), setTabsPane(true))
      },
    },
  ]

  const langItems = [...langOptions].map((langEntry) => {
    return {
      key: langEntry[0],
      text: langEntry[1],
    }
  })

  const textItems = [...dummyText].map((textEntry) => {
    return {
      key: textEntry[0],
      text: `${textEntry[1].lang} - ${textEntry[1].title}`,
      lang: textEntry[1].lang,
    }
  })

  function setLang(item) {
    setLangOption(item.key)
  }

  function setText(item) {
    setPresetText(dummyText.get(item.key))
    setLangOption(item.lang == "en" ? "enfr" : `${item.lang}en`)
    setPage(0)
  }

  return (
    <nav>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar
          items={navTabItems}
          options={{
            langItems: langItems,
            setLang: setLang,
            textItems: textItems,
            setText: setText,
          }}
        />
      </SidebarProvider>
    </nav>
  )
}
