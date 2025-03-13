import SampleTexts from "./SampleTexts"

export default function TextsTab() {
  return (
    <div
      id="texts-tab"
      className="absolute bottom-0 right-0 top-0 z-40 flex w-full flex-col items-start gap-9 overflow-x-hidden overflow-y-scroll p-[2.5rem] pb-0 duration-200 ease-in-out"
    >
      <SampleTexts />
    </div>
  )
}
