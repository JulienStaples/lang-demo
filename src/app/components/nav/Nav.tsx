"use client"

import { useContext } from "react"
import { NavContext } from "../../context/NavContext"
import { AppContext } from "@/app/context/AppContext"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Database, Languages, SearchIcon } from "lucide-react"
import { exampleTexts, langOptions } from "@/constants/constants"
import { TabItems, TabKey } from "@/types/types"

export default function Nav() {
  const { updateTab, tab, tabsPane } = useContext(NavContext)!
  const { changeText, setLang } = useContext(AppContext)!

  const tabItems: TabItems = [
    {
      icon: Languages,
      title: "Translate",
      id: "translate-tab",
      action: (e) => updateTab(e.currentTarget.id as TabKey),
    },
    {
      icon: SearchIcon,
      title: "Details",
      id: "details-tab",
      action: (e: React.MouseEvent<HTMLButtonElement>) =>
        updateTab(e.currentTarget.id as TabKey),
    },
    {
      icon: Database,
      title: "Database",
      id: "db-tab",
      action: (e: React.MouseEvent<HTMLButtonElement>) =>
        updateTab(e.currentTarget.id as TabKey),
    },
  ]

  const langItems = [...langOptions].map(([key, text]) => {
    return {
      key,
      text,
    }
  })

  const textItems = [...exampleTexts].map(([key, { lang, title }]) => {
    return {
      key,
      text: `${lang} - ${title}`,
      lang: lang,
    }
  })

  return (
    <nav>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar
          tabKey={tab?.key}
          tabsPane={tabsPane}
          items={tabItems}
          langItems={langItems}
          langsAction={setLang}
          textItems={textItems}
          textsAction={changeText}
        />
      </SidebarProvider>
    </nav>
  )
}
