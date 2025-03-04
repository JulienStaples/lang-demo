"use client"

import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { langOptions } from "../lib/constants/constants"

export default function LangSelect() {
  const { setLangOption } = useContext(AppContext)
  let texts = getTexts()

  function getTexts() {
    let options = []
    langOptions.forEach((langs, key) => {
      options.push(
        <p
          key={key}
          id={key}
          onClick={() => setLangOption(key)}
          className=" text-nowrap hover:bg-slate-800 active:bg-slate-900 p-3 border-b-2 border-black cursor-pointer duration-100 ease-in-out select-none"
        >{`${langs}`}</p>
      )
    })

    return options
  }

  return (
    <div className=" group absolute top-0 left-44">
      <span>Select Lang</span>
      <div className=" invisible opacity-50 group-hover:opacity-100 absolute group-hover:visible bg-slate-700 w-fit z-40 duration-100 ease-in-out">
        {texts}
      </div>
    </div>
  )
}
