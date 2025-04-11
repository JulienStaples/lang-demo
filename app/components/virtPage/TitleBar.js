import Words from "./Words"

export default function TitleBar(props) {
  const { presetText, activeWordObj } = props

  return (
    <div className="flex justify-between border-b-2 border-neutral-600 pb-2 pr-5">
      <span>{presetText.title}</span>
      {activeWordObj && <Words words={activeWordObj.text} single={true} />}
    </div>
  )
}
