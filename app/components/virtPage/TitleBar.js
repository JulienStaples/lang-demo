import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export default function TitleBar() {
  const { presetText } = useContext(AppContext)

  return (
    <div className="flex justify-between border-b-2 border-neutral-600 pb-2 pr-5">
      <div className="flex gap-3">
        <span>{presetText.title}</span>
      </div>
    </div>
  )
}
