"use client"

import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { dummyText } from "../lib/constants/constants"

export default function SampleTexts() {
  const { presetText, setPresetText } = useContext(AppContext)
  let texts = getTexts()

  function getTexts() {
    let texts = []
    dummyText.forEach((text, key) => {
      texts.push(
        <p
          key={key}
          id={key}
          onClick={(e) => setPresetText(dummyText.get(e.currentTarget.id))}
          className=" text-nowrap hover:bg-slate-800 active:bg-slate-900 p-3 border-b-2 border-black cursor-pointer duration-100 ease-in-out select-none"
        >{`${text.lang} - ${text.title}`}</p>
      )
    })

    return texts
  }

  return (
    <div className=" group absolute top-0 left-10">
      <span>Sample texts</span>
      <div className=" invisible opacity-50 group-hover:opacity-100 absolute group-hover:visible bg-slate-700 w-fit z-40 duration-100 ease-in-out">
        {texts}
      </div>
    </div>
  )
}
