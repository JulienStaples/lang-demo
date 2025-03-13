"use client"

import { useContext } from "react"
import { NavContext } from "../context/NavContext"
import { AppContext } from "../context/AppContext"

export default function FlyoutMenu() {
  const { showFlyout, handleClick, activeWordObj } = useContext(AppContext)
  const { tab } = useContext(NavContext)
  const activeWord = activeWordObj

  if (showFlyout) {
    return (
      <div
        id="tabs"
        data-active="false"
        className="absolute inset-0 z-40 items-start bg-black p-4"
      >
        <button
          className="absolute right-2 top-1 z-50"
          onClick={(e) => {
            //animation issue
            e.target.parentNode.dataset.active = "false"
            setTimeout(() => {
              handleClick(activeWord)
            }, 200)
            //
          }}
        >
          X
        </button>
        <div>{tab}</div>
      </div>
    )
  }
}
