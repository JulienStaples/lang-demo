import React from "react"
import { ChevronLeft, ChevronRight, FilePenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Footer(props) {
  const { presetText, page, setPage, exitAnim } = props
  const progress = page === 0 ? 0 : (page + 1) / presetText.body.length

  function pageNext() {
    if (page === presetText.body.length - 1) return
    setPage((prev) => (prev += 1))
  }

  function pagePrev() {
    if (page === 0) return
    setPage((prev) => (prev -= 1))
  }

  return (
    <div className="controls relative flex justify-between px-4 py-3">
      <Progress
        className="absolute -top-1 left-0 right-0 h-1 rounded-none"
        value={progress * 100}
      />

      <button onClick={exitAnim}>
        <FilePenLine className="size-5 hover:stroke-rose-600 active:stroke-accent" />
      </button>

      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={pagePrev} className="size-7">
          <ChevronLeft className="hover:stroke-rose-600 active:stroke-accent" />
        </Button>
        <span>{`${page + 1} / ${presetText.body.length}`}</span>
        <Button variant="outline" onClick={pageNext} className="size-7">
          <ChevronRight className="hover:stroke-rose-600 active:stroke-accent" />
        </Button>
      </div>
    </div>
  )
}
