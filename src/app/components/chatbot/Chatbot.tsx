"use client"

import { BotMessageSquare } from "lucide-react"
import React, { useState } from "react"

export default function Chatbot() {
  const [showChat, setShowChat] = useState<boolean>(false)

  return (
    <div
      className={`absolute bottom-0 right-0 z-50 mb-16 mr-4 flex ${(showChat && "h-[83%]") || "h-min"} ${(showChat && "w-3/5") || "w-0-min"} items-end gap-2`}
    >
      {showChat && (
        <div
          className={`relative bottom-2 mr-2 h-full w-full overflow-hidden rounded-[37px] p-2`}
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
