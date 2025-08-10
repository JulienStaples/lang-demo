import { PresetText, Term } from "@/types/types"
import Words from "./Words"

type TitleBarProps = {
  presetText: PresetText
  activeWordObj: Term | undefined
}

export default function TitleBar(props: TitleBarProps) {
  const { presetText, activeWordObj } = props

  return (
    <div className="flex justify-between border-b-2 border-neutral-600 px-4 py-3">
      <span>{presetText.title}</span>
      {activeWordObj && <Words words={activeWordObj.text} single={true} />}
    </div>
  )
}
