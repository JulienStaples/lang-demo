"use client"

import { useContext } from "react"
import { NavContext } from "../../context/NavContext"
import { AppContext } from "@/app/context/AppContext"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Database, Languages, SearchIcon } from "lucide-react"
import { dummyText, langOptions } from "@/app/lib/constants/constants"

export default function Nav() {
  const { selectTab } = useContext(NavContext)
  const { setPresetText, setLangOption, setPage } = useContext(AppContext)

  const tabItems = [
    {
      icon: Languages,
      title: "Translate",
      id: "translate-tab",
      action: (e) => selectTab(e.currentTarget.id),
    },
    {
      icon: SearchIcon,
      title: "Details",
      id: "details-tab",
      action: (e) => selectTab(e.currentTarget.id),
    },
    {
      icon: Database,
      title: "Database",
      id: "db-tab",
      action: (e) => selectTab(e.currentTarget.id),
    },
  ]

  const langItems = [...langOptions].map(([key, text]) => {
    return {
      key,
      text,
    }
  })

  const textItems = [...dummyText].map(([key, { lang, title }]) => {
    return {
      key,
      text: `${lang} - ${title}`,
      lang: lang,
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
          items={tabItems}
          langItems={langItems}
          setLang={setLang}
          textItems={textItems}
          setText={setText}
        />
      </SidebarProvider>
    </nav>
  )
}
