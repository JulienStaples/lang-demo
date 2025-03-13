"use client"

import { useContext } from "react"
import { NavContext } from "../context/NavContext"
import { AppContext } from "../context/AppContext"

export default function Nav() {
  const { tab, selectTab } = useContext(NavContext)
  const { setShowFlyout, showFlyout } = useContext(AppContext)

  const navItems = genNavItems()

  return (
    <nav className="tabs-bar z-50 flex select-none flex-col items-center justify-start bg-rose-900">
      {navItems}
    </nav>
  )

  function genNavItems() {
    const navItemObjs = [
      {
        icon: "0",
        title: "Translate",
        action: () => {
          tab.key == "translate-tab" && showFlyout
            ? setShowFlyout((prev) => !prev)
            : (selectTab("translate"),
              setShowFlyout(true),
              //animation issue
              setTimeout(() => {
                document.querySelector("#tabs").dataset.active = true
              }, 0))
          //
        },
      },
      {
        icon: "1",
        title: "Details",
        action: () => {
          tab.key == "details-tab" && showFlyout
            ? setShowFlyout((prev) => !prev)
            : (selectTab("details"),
              setShowFlyout(true),
              //animation issue
              setTimeout(() => {
                document.querySelector("#tabs").dataset.active = true
              }, 0))
          //
        },
      },
      {
        icon: "2",
        title: "Texts",
        action: () => {
          selectTab("details")
          setShowFlyout(true)
          //animation issue
          setTimeout(() => {
            document.querySelector("#tabs").dataset.active = true
          }, 0)
          //
        },
      },
      {
        icon: "3",
        title: "Langs",
        action: () => {
          selectTab("details")
          setShowFlyout(true)
          //animation issue
          setTimeout(() => {
            document.querySelector("#tabs").dataset.active = true
          }, 0)
          //
        },
      },
      {
        icon: "4",
        title: "Database",
        action: () => {
          tab.key == "db-tab" && showFlyout
            ? setShowFlyout((prev) => !prev)
            : (selectTab("db"),
              setShowFlyout(true),
              //animation issue
              setTimeout(() => {
                document.querySelector("#tabs").dataset.active = true
              }, 0))
          //
        },
      },
    ]

    let navItems = []

    navItemObjs.forEach((item) => {
      navItems.push(
        <div
          key={`nav-${item.title}`}
          onClick={item.action}
          className="tab group relative w-full cursor-pointer p-2 text-center after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-rose-950 after:hover:invisible"
        >
          <span className="tab-icon group-hover:invisible">{item.icon}</span>

          <span className="tab-description hidden rounded-l-md bg-rose-900 p-2 after:hover:absolute after:hover:bottom-0 after:hover:left-0 after:hover:right-0 after:hover:h-[2px] after:hover:bg-gradient-to-r after:hover:from-transparent after:hover:to-rose-950 after:hover:to-40% group-hover:absolute group-hover:bottom-0 group-hover:right-0 group-hover:top-0 group-hover:inline-block">
            {item.title}
          </span>
        </div>,
      )
    })

    return navItems
  }
}
