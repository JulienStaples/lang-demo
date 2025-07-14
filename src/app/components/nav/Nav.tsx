"use client"

import { useContext } from "react"
import { NavContext } from "../../context/NavContext"
import { AppContext } from "@/app/context/AppContext"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Database, Languages, SearchIcon } from "lucide-react"
import { exampleTexts, langOptions } from "@/constants/constants"

export default function Nav() {
  const { updateTab, tab, tabsPane } = useContext(NavContext)
  const { changeText, setLang } = useContext(AppContext)

  const tabItems = [
    {
      icon: Languages,
      title: "Translate",
      id: "translate-tab",
      action: (e: React.MouseEvent<HTMLButtonElement>) =>
        updateTab(e.currentTarget.id),
    },
    {
      icon: SearchIcon,
      title: "Details",
      id: "details-tab",
      action: (e: React.MouseEvent<HTMLButtonElement>) =>
        updateTab(e.currentTarget.id),
    },
    {
      icon: Database,
      title: "Database",
      id: "db-tab",
      action: (e: React.MouseEvent<HTMLButtonElement>) =>
        updateTab(e.currentTarget.id),
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
          tabKey={tab.key}
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
