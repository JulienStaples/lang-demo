import React from "react"
import { Copy, InfoIcon, Save, SaveIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

type TranslateBlockProps = {
  translation: string
  origin: string
}

export default function TranslateBlock(props: TranslateBlockProps) {
  const { translation, origin } = props

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
            <Button onClick={() => navigator.clipboard.writeText(translation)}>
              <Copy />
            </Button>
            <Button>
              <SaveIcon />
            </Button>
          </div>
          <Button>
            <InfoIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
