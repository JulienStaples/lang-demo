import React, { RefObject } from "react"
import { Copy, Info, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type TranslateBlockProps = {
  translation: string
  origin: string
  defBox: RefObject<HTMLTextAreaElement | null>
}

export default function TranslateBlock(props: TranslateBlockProps) {
  const { translation, origin, defBox } = props

  return (
    <div className="flex content-center items-start justify-center gap-4">
      <div className="grow rounded-md bg-accent py-3 text-center text-xl font-medium shadow-inner shadow-black">
        {origin}
      </div>
      <div className="flex grow flex-col gap-3">
        <div className="grow rounded-md bg-accent py-3 text-center text-xl font-medium shadow-inner shadow-black">
          {translation}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-6">
            <Button
              size={"sm"}
              onClick={() => navigator.clipboard.writeText(translation)}
            >
              <Copy />
            </Button>
            <Button
              size={"sm"}
              onClick={() =>
                defBox.current &&
                (defBox.current.value = `${translation}, ${defBox.current.value}`)
              }
            >
              <Plus />
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size={"icon"}>
                <Info />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="flex w-[20em] flex-col gap-6 p-3"
              align="start"
              side="top"
            >
              {
                "Translations can be inaccurate at times. Consider using the look-up button to get a more accurate definition."
              }
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
