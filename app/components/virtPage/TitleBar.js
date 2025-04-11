import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import Word from "./Words"

export default function TitleBar() {
  const { presetText, activeWordObj } = useContext(AppContext)

  return (
    <div className="flex justify-between border-b-2 border-neutral-600 pb-2 pr-5">
      <span>{presetText.title}</span>
      {activeWordObj && <Word words={activeWordObj.text} single={true} />}
    </div>
  )
}
