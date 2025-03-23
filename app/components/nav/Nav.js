"use client"

import { useContext } from "react"
import { NavContext } from "../../context/NavContext"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

import {
  BookOpen,
  Database,
  Languages,
  PenLine,
  SearchIcon,
  Settings,
} from "lucide-react"

export default function Nav() {
  const { tab, selectTab, exitAnim, setTabsPane, tabsPane } =
    useContext(NavContext)

  const navTabObjs = [
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
      icon: BookOpen,
      title: "Texts",
      id: "texts-tab",
      action: () => {
        tab.key == "texts-tab" && tabsPane
          ? exitAnim()
          : (selectTab("texts"), setTabsPane(true))
      },
    },
    {
      icon: PenLine,
      title: "Languages",
      id: "langs-tab",
      action: () => {
        tab.key == "langs-tab" && tabsPane
          ? exitAnim()
          : (selectTab("langs"), setTabsPane(true))
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
    {
      icon: Settings,
      title: "Options",
      id: "options-tab",
      action: () => {},
    },
  ]

  return (
    <nav>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar items={navTabObjs} />
      </SidebarProvider>
    </nav>
  )
}
