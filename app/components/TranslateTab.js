"use client"

import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../context/AppContext"
import {
  diffBtnColors,
  diffWordColors,
  findDiff,
  findEntry,
} from "../lib/constants/constants"

export default function TranslateTab() {
  const { showFlyout, handleClick, activeWordObj, entry } = useContext(AppContext)
  const defBox = useRef()
  const rootBox = useRef()
  const activeWord = activeWordObj.normal
  const [diff, setDiff] = useState()

  useEffect(() => {
    setDiff(findDiff(activeWord))
  }, [showFlyout])

  function saveEntry(e) {
    const entryObj = JSON.parse(sessionStorage.getItem(activeWord))

    entryObj ? changeEntry() : makeEntry()

    //animation issue
    e.target.parentNode.dataset.active = "false"
    setTimeout(() => {
      handleClick(activeWord)
    }, 200)
    //
  }

  function delEntry(e) {
    sessionStorage.removeItem(activeWord)

    //animation issue
    e.target.parentNode.dataset.active = "false"
    setTimeout(() => {
      handleClick(activeWord)
    }, 200)
    //
  }

  function changeDiff(diff) {
    let entryObj = JSON.parse(sessionStorage.getItem(activeWord))

    entryObj
      ? ((entryObj.diff = diff),
        sessionStorage.setItem(activeWord, JSON.stringify(entryObj)))
      : makeEntry(diff)

    setDiff(findDiff(activeWord))
  }

  function makeEntry(diff = "hard") {
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

    sessionStorage.setItem(activeWord, JSON.stringify(newEntryObj))
  }

  function changeEntry() {
    const entryObj = JSON.parse(sessionStorage.getItem(activeWord))

    entryObj.def = defBox.current.value
    entryObj.root = rootBox.current.value

    sessionStorage.setItem(activeWord, JSON.stringify(entryObj))
  }

  return (
    <div
      id="translate-tab"
      className="z-40 flex flex-col gap-9 items-start p-[2.5rem] pb-0 overflow-x-hidden overflow-y-scroll
        absolute w-full top-0 bottom-0 right-0 duration-200 ease-in-out"
    >
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-3">
          <div>
            <div className=" flex gap-2 px-1">
              <h1 className="">Word:</h1>
              <p data-diff={diff} className={`${diffWordColors} rounded-md px-1`}>
                {activeWord}
              </p>
            </div>
          </div>
          <div>
            <div className=" flex gap-2 px-1">
              <h1 className="">Def:</h1>
              <p className="">
                {entry.def !== undefined && entry.def !== "" ? entry.def : "..."}
              </p>
            </div>
            <textarea
              ref={defBox}
              defaultValue={entry.def !== undefined && entry.def !== "" ? entry.def : ""}
              className=" w-full bg-slate-800"
              name=""
              id=""
            ></textarea>
          </div>
          <div>
            <div className=" flex gap-2 px-1">
              <h1 className="">Root:</h1>
              <p className="">
                {entry.root !== undefined && entry.root !== "" ? entry.root : "..."}
              </p>
            </div>
            <textarea
              ref={rootBox}
              defaultValue={
                entry.root !== undefined && entry.root !== "" ? entry.root : ""
              }
              className=" w-full bg-slate-800"
              name=""
              id=""
            ></textarea>
          </div>
          <div>
            <div className=" flex gap-2 px-1">
              <h1 className="">Tags:</h1>
              <p className="">
                {entry.tags !== undefined && entry.tags !== "" ? entry.tags : "..."}
              </p>
            </div>
            <textarea
              defaultValue={
                entry.tags !== undefined && entry.tags !== "" ? entry.tags : ""
              }
              className=" w-full bg-slate-800"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
        <div className=" w-full flex flex-col gap-5">
          <div className=" flex w-full justify-between">
            <button
              className={`${diffBtnColors.easy}  px-3 py-1 rounded-md`}
              onClick={() => changeDiff("easy")}
            >
              easy
            </button>
            <button
              className={`${diffBtnColors.med} px-3 py-1 rounded-md`}
              onClick={() => changeDiff("med")}
            >
              med
            </button>
            <button
              className={`${diffBtnColors.hard} px-3 py-1 rounded-md`}
              onClick={() => changeDiff("hard")}
            >
              hard
            </button>
            <button
              className={`${diffBtnColors.wk} px-3 py-1 rounded-md`}
              onClick={() => changeDiff("wk")}
            >
              wk
            </button>
          </div>
          <div className=" flex gap-3 w-full">
            <button
              className=" bg-red-700 hover:bg-red-600 active:bg-red-800 p-1 rounded-md w-full"
              onClick={(e) => delEntry(e)}
            >
              del
            </button>
            <button
              className=" bg-green-700 hover:bg-green-600 active:bg-green-800 p-1 rounded-md w-full"
              onClick={(e) => saveEntry(e)}
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
