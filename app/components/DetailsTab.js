"use client"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function DetailsTab(props) {
  const { entry, activeWordObj } = useContext(AppContext)

  return (
    <div
      id="details-tab"
      className="absolute bottom-0 right-0 top-0 z-40 flex w-full flex-col items-start gap-9 overflow-x-hidden overflow-y-scroll p-[2.5rem] pb-0 duration-200 ease-in-out"
    >
      <button
        className="absolute left-2 top-10 z-50"
        onClick={() => props.selectTab("translate")}
      >
        {`<`}
      </button>

      <div className="flex gap-2">
        <h1>Word:</h1>
        <p>
          {activeWordObj.normal !== undefined && activeWordObj.normal !== ""
            ? activeWordObj.normal
            : "..."}
        </p>
      </div>
      <div className="flex gap-2">
        <h1>Def:</h1>
        <p>{entry.def !== undefined && entry.def !== "" ? entry.def : "..."}</p>
      </div>
      <div className="flex gap-2">
        <h1>Root:</h1>
        <p>
          {entry.root !== undefined && entry.root !== "" ? entry.root : "..."}
        </p>
      </div>
      <div className="flex gap-2">
        <h1>Tags:</h1>
        <p>
          {activeWordObj.tags !== undefined && activeWordObj.tags !== ""
            ? [...activeWordObj.tags].join(", ")
            : "..."}
        </p>
      </div>
      <div className="flex gap-2">
        <h1>Part of speech:</h1>
        <p>
          {activeWordObj.chunk !== undefined && activeWordObj.chunk !== ""
            ? activeWordObj.chunk
            : "..."}
        </p>
      </div>
      <div className="flex gap-2">
        <h1>Synonyms:</h1>
        <p>{entry.syn !== undefined && entry.syn !== "" ? entry.syn : "..."}</p>
      </div>
      <div className="flex gap-2">
        <h1>Origin:</h1>
        <p>
          {entry.origin !== undefined && entry.origin !== ""
            ? entry.origin
            : "..."}
        </p>
      </div>
      <div className="flex gap-2">
        <h1>Frequency:</h1>
        <p>
          {entry.freq !== undefined && entry.freq !== "" ? entry.freq : "..."}
        </p>
      </div>
    </div>
  )
}
