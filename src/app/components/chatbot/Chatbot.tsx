"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { BotMessageSquare } from "lucide-react"
import React, { useState } from "react"

export default function Chatbot() {
  const [showChat, setShowChat] = useState<boolean>(false)
  const isMobile = useIsMobile()

  function sizeChatWindow() {
    const mobileStyles = "h-[90%] w-[100%] flex-col"
    const desktopStyles = "h-[83%] w-3/5 "

    return (isMobile && mobileStyles) || desktopStyles
  }

  function positionChatContainer() {
    const mobileStyles = "bottom-0 right-0"
    const desktopStyles = "bottom-2 mr-2"

    return (isMobile && mobileStyles) || desktopStyles
  }

  return (
    <div
      className={`absolute bottom-0 right-0 z-50 mb-16 mr-4 flex items-end ${(showChat && sizeChatWindow()) || "w-0-min h-min"} gap-2`}
    >
      {showChat && (
        <div
          className={`relative ${positionChatContainer()} h-full w-full overflow-hidden rounded-[37px] p-2`}
          id={"bp-embedded-webchat"}
        />
      )}
      <button
        className="flex w-min items-center rounded-full bg-accent p-4 hover:bg-background hover:ring-2 hover:ring-inset hover:ring-accent active:bg-rose-950"
        onClick={() => setShowChat((prev) => !prev)}
      >
        <BotMessageSquare />
      </button>
    </div>
  )
}
