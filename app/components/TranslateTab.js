"use client"

import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function TranslateTab() {
  const { showFlyout, handleClick, activeWord } = useContext(AppContext)

  if (showFlyout) {
    return (
      <div
        id="translate-tab"
        data-active="false"
        className=" bg-[#050505] z-50 flex flex-col gap-9 items-start p-[2.5rem] pb-0 border-2 border-slate-700 overflow-x-hidden overflow-y-scroll
        absolute w-full data-[active='false']:right-[-100vw]  top-0 bottom-0 right-0 duration-200 ease-in-out"
      >
        <button
          className="absolute top-1 left-1"
          onClick={(e) => {
            //animation issue
            e.target.parentNode.dataset.active = "false"
            setTimeout(() => {
              handleClick()
            }, 200)
            //
          }}
        >
          X
        </button>
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-3">
            <div>
              <div className=" flex gap-2 px-1">
                <h1 className=" ">Word:</h1>
                <p className="">word</p>
              </div>
              <textarea className=" w-full bg-slate-800" name="" id=""></textarea>
            </div>
            <div>
              <div className=" flex gap-2 px-1">
                <h1 className=" ">Root:</h1>
                <p className="">root</p>
              </div>
              <textarea className=" w-full bg-slate-800" name="" id=""></textarea>
            </div>
            <div>
              <div className=" flex gap-2 px-1">
                <h1 className=" ">Def:</h1>
                <p className="">Def</p>
              </div>
              <textarea className=" w-full bg-slate-800" name="" id=""></textarea>
            </div>
            <div>
              <div className=" flex gap-2 px-1">
                <h1 className=" ">Tags:</h1>
                <p className="">tags ...</p>
              </div>
              <textarea className=" w-full bg-slate-800" name="" id=""></textarea>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-5">
            <div className=" flex gap-3 w-full justify-center">
              <button className=" bg-slate-700 p-1 rounded-md">easy</button>
              <button className=" bg-slate-700 p-1 rounded-md">med</button>
              <button className=" bg-slate-700 p-1 rounded-md">hard</button>
              <button className=" bg-slate-700 p-1 rounded-md">wk</button>
            </div>
            <div className=" flex gap-3 w-full">
              <button className=" bg-slate-700 p-1 rounded-md w-full">del</button>
              <button className=" bg-slate-700 p-1 rounded-md w-full">save</button>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <a
            target="_blank"
            className=" w-full rounded-md text-center p-3 bg-blue-800 hover:bg-blue-700 active:bg-blue-900"
            href={`https://www.wordreference.com/fren/${activeWord.normal}`}
          >
            Translate
          </a>
        </div>
      </div>
    )
  }
}
