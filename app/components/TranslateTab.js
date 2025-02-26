"use client"

import { useContext, useRef } from "react"
import { AppContext } from "../context/AppContext"
import { diffColors } from "../lib/constants/constants"

export default function TranslateTab() {
  const { showFlyout, handleClick, activeWordObj } = useContext(AppContext)
  const defBox = useRef()
  const rootBox = useRef()
  const activeWord = activeWordObj.normal

  function saveEntry() {
    const entryObj = JSON.parse(sessionStorage.getItem(activeWord))

    entryObj ? changeEntry() : makeEntry()
  }

  function delEntry() {
    sessionStorage.removeItem(activeWord)
  }

  function changeDiff(diff) {
    let entryObj = JSON.parse(sessionStorage.getItem(activeWord))

    entryObj
      ? ((entryObj.diff = diff),
        sessionStorage.setItem(activeWord, JSON.stringify(entryObj)))
      : makeEntry(diff)
  }

  function makeEntry(diff = "") {
    const newEntryObj = {
      word: "",
      def: "",
      root: "",
      tags: "",
      partOfSpeech: "",
      diff: diff,
    }
    newEntryObj.word = activeWord
    newEntryObj.def = defBox.current.value
    newEntryObj.root = rootBox.current.value
    console.log(newEntryObj)

    sessionStorage.setItem(activeWord, JSON.stringify(newEntryObj))
  }

  function changeEntry() {
    const entryObj = JSON.parse(sessionStorage.getItem(activeWord))

    entryObj.def = defBox.current.value
    entryObj.root = rootBox.current.value

    sessionStorage.setItem(activeWord, JSON.stringify(entryObj))
  }

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
              handleClick(activeWord)
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
                <h1 className="">Word:</h1>
                <p className="">{activeWord}</p>
              </div>
            </div>
            <div>
              <div className=" flex gap-2 px-1">
                <h1 className="">Def:</h1>
                <p className="">Def</p>
              </div>
              <textarea
                ref={defBox}
                defaultValue={activeWord}
                className=" w-full bg-slate-800"
                name=""
                id=""
              ></textarea>
            </div>
            <div>
              <div className=" flex gap-2 px-1">
                <h1 className="">Root:</h1>
                <p className="">root</p>
              </div>
              <textarea
                ref={rootBox}
                className=" w-full bg-slate-800"
                name=""
                id=""
              ></textarea>
            </div>
            <div>
              <div className=" flex gap-2 px-1">
                <h1 className="">Tags:</h1>
                <p className="">tags ...</p>
              </div>
              <textarea className=" w-full bg-slate-800" name="" id=""></textarea>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-5">
            <div className=" flex w-full justify-between">
              <button
                className={`${diffColors.easy}  px-3 py-1 rounded-md`}
                onClick={() => changeDiff("easy")}
              >
                easy
              </button>
              <button
                className={`${diffColors.med} px-3 py-1 rounded-md`}
                onClick={() => changeDiff("med")}
              >
                med
              </button>
              <button
                className={`${diffColors.hard} px-3 py-1 rounded-md`}
                onClick={() => changeDiff("hard")}
              >
                hard
              </button>
              <button
                className={`${diffColors.known} px-3 py-1 rounded-md`}
                onClick={() => changeDiff("wk")}
              >
                wk
              </button>
            </div>
            <div className=" flex gap-3 w-full">
              <button
                className=" bg-red-700 hover:bg-red-600 active:bg-red-800 p-1 rounded-md w-full"
                onClick={delEntry}
              >
                del
              </button>
              <button
                className=" bg-green-700 hover:bg-green-600 active:bg-green-800 p-1 rounded-md w-full"
                onClick={saveEntry}
              >
                save
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <a
            target="_blank"
            className=" w-full rounded-md text-center p-3 bg-blue-800 hover:bg-blue-700 active:bg-blue-900"
            href={`https://www.wordreference.com/fren/${activeWord}`}
          >
            Translate
          </a>
        </div>
      </div>
    )
  }
}
