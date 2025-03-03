import React from "react"

export default function DetailsTab(props) {
  return (
    <div
      id="details-tab"
      className="z-40 flex flex-col gap-9 items-start p-[2.5rem] pb-0 overflow-x-hidden overflow-y-scroll
        absolute w-full top-0 bottom-0 right-0 duration-200 ease-in-out"
    >
      <button
        className="absolute top-10 left-2 z-50"
        onClick={() => props.selectTab("translate")}
      >
        {`<`}
      </button>
      DetailsTab
    </div>
  )
}
