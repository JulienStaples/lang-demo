"use client"

import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../context/AppContext"
import {
  diffBtnColors,
  diffWordColors,
  findDiff,
  wordDb,
} from "../lib/constants/constants"

export default function TranslateTab(props) {
  const { showFlyout, handleClick, activeWordObj, entry, langOption } =
    useContext(AppContext)
  const defBox = useRef()
  const rootBox = useRef()
  const activeWord = activeWordObj.normal
  const [diff, setDiff] = useState()

  useEffect(() => {
    setDiff(findDiff(activeWord))
    sessionStorage.setItem("wordDb", JSON.stringify([...wordDb]))
  }, [showFlyout])

  function animationIssue(e) {
    //animation issue
    e.target.parentNode.dataset.active = "false"
    setTimeout(() => {
      handleClick(activeWord)
    }, 200)
    //
  }

  function addEntry(e, diff) {
    const newEntryObj = {
      word: activeWord,
      def: defBox.current.value,
      root: rootBox.current.value,
      diff: diff ? diff : "hard",
      lang: "lang",
    }

    wordDb.set(activeWord, newEntryObj)
    setDiff(diff)

    animationIssue(e)
  }

  function delEntry(e) {
    wordDb.delete(activeWord)

    animationIssue(e)
  }

  function changeDiff(diff) {
    try {
      wordDb.get(activeWord).diff = diff
      setDiff(diff)
    } catch {
      addEntry("", diff)
    }
  }

  return (
    <div
      id="translate-tab"
      className="absolute bottom-0 right-0 top-0 z-40 flex w-full flex-col items-start gap-9 overflow-x-hidden overflow-y-scroll p-[2.5rem] pb-0 duration-200 ease-in-out"
    >
      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full flex-col gap-3">
          <div>
            <div className="flex gap-2 px-1">
              <h1 className="">Word:</h1>
              <p
                data-diff={diff}
                className={`${diffWordColors} rounded-md px-1`}
              >
                {activeWord}
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-2 px-1">
              <h1 className="">Def:</h1>
              <p className="">
                {entry.def !== undefined && entry.def !== ""
                  ? entry.def
                  : "..."}
              </p>
            </div>
            <textarea
              ref={defBox}
              defaultValue={
                entry.def !== undefined && entry.def !== "" ? entry.def : ""
              }
              className="w-full bg-slate-800"
              name=""
              id=""
            ></textarea>
          </div>
          <div>
            <div className="flex gap-2 px-1">
              <h1 className="">Root:</h1>
              <p className="">
                {entry.root !== undefined && entry.root !== ""
                  ? entry.root
                  : "..."}
              </p>
            </div>
            <textarea
              ref={rootBox}
              defaultValue={
                entry.root !== undefined && entry.root !== "" ? entry.root : ""
              }
              className="w-full bg-slate-800"
              name=""
              id=""
            ></textarea>
          </div>
          <div>
            <div className="flex gap-2 px-1">
              <h1 className="">Tags:</h1>
              <p className="">
                {entry.tags !== undefined && entry.tags !== ""
                  ? entry.tags
                  : "..."}
              </p>
            </div>
            <textarea
              defaultValue={
                entry.tags !== undefined && entry.tags !== "" ? entry.tags : ""
              }
              className="w-full bg-slate-800"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
        <div>
          <p
            className="cursor-pointer select-none text-gray-400 underline duration-200 ease-in-out hover:text-gray-500"
            onClick={() => props.selectTab("details")}
          >{`See More ---->`}</p>
        </div>
        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full justify-between">
            <button
              className={`${diffBtnColors.easy} rounded-md px-3 py-1`}
              onClick={() => changeDiff("easy")}
            >
              easy
            </button>
            <button
              className={`${diffBtnColors.med} rounded-md px-3 py-1`}
              onClick={() => changeDiff("med")}
            >
              med
            </button>
            <button
              className={`${diffBtnColors.hard} rounded-md px-3 py-1`}
              onClick={() => changeDiff("hard")}
            >
              hard
            </button>
            <button
              className={`${diffBtnColors.wk} rounded-md px-3 py-1`}
              onClick={() => changeDiff("wk")}
            >
              wk
            </button>
          </div>
          <div className="flex w-full gap-3">
            <button
              className="w-full rounded-md bg-red-700 p-1 hover:bg-red-600 active:bg-red-800"
              onClick={(e) => delEntry(e)}
            >
              del
            </button>
            <button
              className="w-full rounded-md bg-green-700 p-1 hover:bg-green-600 active:bg-green-800"
              onClick={(e) => addEntry(e)}
            >
              save
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <a
          target="_blank"
          className="w-full rounded-md bg-blue-800 p-3 text-center hover:bg-blue-700 active:bg-blue-900"
          href={`https://www.wordreference.com/${langOption}/${activeWord}`}
        >
          Translate
        </a>
      </div>
    </div>
  )
}
