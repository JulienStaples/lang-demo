import React from "react"
import { ChevronLeft, ChevronRight, FilePenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Footer(props) {
  const { presetText, page, setPage, exitAnim } = props
  function pageNext() {
    page == presetText.body.length - 1 ? "" : setPage((prev) => (prev += 1))
  }

  function pagePrev() {
    page == 0 ? "" : setPage((prev) => (prev -= 1))
  }
  return (
    <div className="controls relative flex justify-between border-t-2 border-neutral-600 pr-3 pt-2">
      <Progress
        className="absolute top-0 h-1"
        value={(page + 1 == 1 ? 0 : (page + 1) / presetText.body.length) * 100}
      />

      <button onClick={exitAnim}>
        <FilePenLine className="size-5 hover:stroke-rose-600 active:stroke-accent" />
      </button>

      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={pagePrev}>
          <ChevronLeft className="hover:stroke-rose-600 active:stroke-accent" />
        </Button>
        <span>
          {`${page + 1 < 10 ? `0${page + 1}` : page + 1} / ${
            presetText.body.length < 10
              ? `0${presetText.body.length}`
              : presetText.body.length
          }`}
        </span>
        <Button variant="outline" onClick={pageNext}>
          <ChevronRight className="hover:stroke-rose-600 active:stroke-accent" />
        </Button>
      </div>
    </div>
  )
}
