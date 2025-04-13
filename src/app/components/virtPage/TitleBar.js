import Words from "./Words"

export default function TitleBar(props) {
  const { presetText, activeWordObj } = props

  return (
    <div className="flex justify-between border-b-2 border-neutral-600 px-4 py-3">
      <span>{presetText.title}</span>
      {activeWordObj && <Words words={activeWordObj.text} single={true} />}
    </div>
  )
}
