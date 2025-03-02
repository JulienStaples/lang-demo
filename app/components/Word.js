import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { diffColors } from "../lib/constants/constants"

export default function Word(props) {
  const { handleClick } = useContext(AppContext)

  let wordObj = props.wordObj

  function handleEnter(e) {
    e.target.querySelector("#bgSpan").dataset.hovered = "true"
    e.target.querySelector("#wordSpan").dataset.hovered = "true"
  }

  function handleExit(e) {
    e.target.querySelector("#bgSpan").dataset.hovered = "false"
    e.target.querySelector("#wordSpan").dataset.hovered = "false"
  }

  return (
    <span
      id={wordObj.normal}
      onMouseEnter={(e) => handleEnter(e)}
      onMouseLeave={(e) => handleExit(e)}
      onClick={(e) => handleClick(wordObj, e.target.children[1].dataset.diff)}
    >
      <span
        className={`relative inline-block hover:invert hover:-translate-y-[3px] duration-100 ease-in-out`}
      >
        <span
          id="wordSpan"
          data-hovered="false"
          className={`pointer-events-none relative z-10 data-[hovered=true]:z-30`}
        >
          {wordObj.text}
        </span>

        <span
          id="bgSpan"
          data-hovered="false"
          data-diff="med"
          className={`data-[hovered=true]:z-20 rounded-[2px] pointer-events-none absolute  top-[3px] bottom-[3px] -right-[1px] -left-[1px] data-[hovered=true]:-left-[3px] data-[hovered=true]:-right-[3px] data-[hovered=true]:top-[1px] data-[hovered=true]:bottom-[1px] duration-100 ease-in-out data-[diff=hard]: ${diffColors.hard} data-[diff=med]: ${diffColors.med} data-[diff=easy]: ${diffColors.easy} data-[diff=wk]: ${diffColors.wk}`}
        ></span>
      </span>
      <span className="mx-[2px]">{wordObj.post}</span>
    </span>
  )
}
