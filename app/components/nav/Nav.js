"use client"

import { useContext, useState } from "react"
import { NavContext } from "../../context/NavContext"
import { AppContext } from "../../context/AppContext"

export default function Nav() {
  const { tab, selectTab } = useContext(NavContext)
  const { setShowFlyout, showFlyout } = useContext(AppContext)
  const [toggleNav, setToggleNav] = useState(false)

  const navItems = genNavTabs()

  return (
    <nav
      className="z-10 flex select-none flex-col items-center justify-start bg-rose-900 shadow-[0px_0px_10px] shadow-black hover:z-50"
      id="tabs-bar"
      data-nav-active={toggleNav}
      onClick={(e) => {
        e.target.id == "tabs-bar" ? setToggleNav((prev) => !prev) : ""
      }}
    >
      {navItems}
    </nav>
  )

  function genNavTabs() {
    const navTabObjs = [
      {
        icon: "^",
        title: "Home",
        id: "home-tab",
        action: () => {
          tab.key == "home-tab" && showFlyout
            ? setShowFlyout((prev) => !prev)
            : (selectTab("home"),
              setShowFlyout(true),
              //animation issue
              setTimeout(() => {
                document.querySelector("#tabs").dataset.active = true
              }, 0))
          //
        },
      },

      {
        icon: "=",
        title: "Options",
        id: "options-tab",
        action: () => {
          tab.key == "options-tab" && showFlyout
            ? setShowFlyout((prev) => !prev)
            : (selectTab("options"),
              setShowFlyout(true),
              //animation issue
              setTimeout(() => {
                document.querySelector("#tabs").dataset.active = true
              }, 0))
          //
        },
      },
      {
        icon: "0",
        title: "Translate",
        id: "translate-tab",
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
        id: "details-tab",
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
        id: "texts-tab",
        action: () => {
          tab.key == "texts-tab" && showFlyout
            ? setShowFlyout((prev) => !prev)
            : (selectTab("texts"),
              setShowFlyout(true),
              //animation issue
              setTimeout(() => {
                document.querySelector("#tabs").dataset.active = true
              }, 0))
          //
        },
      },
      {
        icon: "3",
        title: "Langs",
        id: "langs-tab",
        action: () => {
          tab.key == "langs-tab" && showFlyout
            ? setShowFlyout((prev) => !prev)
            : (selectTab("langs"),
              setShowFlyout(true),
              //animation issue
              setTimeout(() => {
                document.querySelector("#tabs").dataset.active = true
              }, 0))
          //
        },
      },
      {
        icon: "4",
        title: "Database",
        id: "db-tab",
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

    let navTabs = []

    navTabObjs.forEach((item) => {
      navTabs.push(
        <div
          key={`nav-${item.title}`}
          onClick={item.action}
          className="tab group relative w-full cursor-pointer p-2 text-center after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-rose-950 hover:bg-rose-950 hover:shadow-[inset_0_-1px_2px] hover:shadow-black"
        >
          <span
            data-nav-active={toggleNav}
            data-tab-active={tab.key == item.id}
            className={`tab-icon 2 relative group-hover:invisible data-[nav-active=true]:hidden data-[tab-active='true']:before:absolute data-[tab-active='true']:before:-inset-1 data-[tab-active='true']:before:-z-10 data-[tab-active='true']:before:rounded-md data-[tab-active='true']:before:bg-rose-950 data-[tab-active='true']:before:shadow-[inset_0_0_1px] data-[tab-active='true']:before:shadow-black`}
          >
            {item.icon}
          </span>

          <div
            data-nav-active={toggleNav}
            data-tab-active={tab.key == item.id}
            className={`relative hidden rounded-r-md bg-rose-900 p-2 shadow-[-1px_1px_2px] shadow-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-l after:from-transparent after:to-rose-950 after:to-40% group-hover:bottom-0 group-hover:left-0 group-hover:top-0 data-[tab-active='true']:before:absolute data-[tab-active='true']:before:inset-1 data-[tab-active='true']:before:z-10 data-[tab-active='true']:before:rounded-md data-[tab-active='true']:before:bg-rose-950 data-[tab-active='true']:before:shadow-[inset_0_0_2px] data-[tab-active='true']:before:shadow-black data-[nav-active=false]:group-hover:absolute data-[nav-active=false]:group-hover:inline-block`}
          >
            <div className="flex gap-3">
              <span
                data-tab-active={tab.key == item.id}
                className="relative z-20 w-3 after:absolute after:inset-y-0 after:-right-2 after:w-[2px] after:rounded-full after:bg-rose-950 data-[tab-active='true']:after:bg-rose-900"
              >
                {item.icon}
              </span>
              <span className="relative z-20">{item.title}</span>
            </div>
          </div>

          <div
            data-nav-active={toggleNav}
            data-tab-active={tab.key == item.id}
            className={`relative flex gap-4 py-1 pl-1 pr-2 hover:bg-rose-950 data-[nav-active=false]:hidden data-[tab-active='true']:before:absolute data-[tab-active='true']:before:-left-[.3em] data-[tab-active='true']:before:-right-[.3em] data-[tab-active='true']:before:bottom-0 data-[tab-active='true']:before:top-0 data-[tab-active='true']:before:-z-10 data-[tab-active='true']:before:rounded-md data-[tab-active='true']:before:bg-rose-950 data-[tab-active='true']:before:shadow-[inset_0_0_2px] data-[tab-active='true']:before:shadow-black`}
          >
            <span
              data-tab-active={tab.key == item.id}
              className="relative w-3 after:absolute after:inset-y-0 after:-right-2 after:w-[2px] after:rounded-full after:bg-rose-950 after:group-hover:bg-rose-900 data-[tab-active='true']:after:bg-rose-900"
            >
              {item.icon}
            </span>
            <span>{item.title}</span>
          </div>
        </div>,
      )
    })

    return navTabs
  }
}
