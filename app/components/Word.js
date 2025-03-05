import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { diffWordColors, findDiff } from "../lib/constants/constants"

export default function Word(props) {
  const { handleClick } = useContext(AppContext)

  let wordObj = props.wordObj
  let wordDiff = findDiff(wordObj.normal)

  function handleEnter(e) {
    e.currentTarget.querySelector(".word-text").dataset.hovered = "true"
    e.currentTarget.querySelector(".word-bg").dataset.hovered = "true"
  }

  function handleExit(e) {
    e.currentTarget.querySelector(".word-text").dataset.hovered = "false"
    e.currentTarget.querySelector(".word-bg").dataset.hovered = "false"
  }

  return (
    <>
      <span
        id={wordObj.normal}
        onMouseEnter={(e) => handleEnter(e)}
        onMouseLeave={(e) => handleExit(e)}
        onClick={() => handleClick(wordObj)}
      >
        <span className="relative inline-block cursor-pointer duration-100 ease-in-out">
          <span
            data-hovered="false"
            className="word-text relative z-10 data-[hovered=true]:text-black"
          >
            {wordObj.text}
          </span>
          <span
            data-hovered="false"
            data-diff={wordDiff}
            className={`word-bg absolute inset-x-[-2px] inset-y-[3px] z-0 rounded-md duration-100 ease-in-out data-[hovered=true]:-inset-x-1 data-[hovered=true]:inset-y-0 data-[hovered=true]:invert ${diffWordColors}`}
          ></span>
        </span>
      </span>
      <span className="px-[2px]">{wordObj.post}</span>
    </>
  )
}
