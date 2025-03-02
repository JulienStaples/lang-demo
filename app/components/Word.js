import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Word(props) {
  const { handleClick } = useContext(AppContext)

  let wordObj = props.wordObj

  function handleEnter(e) {
    e.currentTarget.firstChild.children[1].dataset.hovered = "true"
  }

  function handleExit(e) {
    e.currentTarget.firstChild.children[1].dataset.hovered = "false"
  }

  return (
    <>
      <span
        id={wordObj.normal}
        onMouseEnter={(e) => handleEnter(e)}
        onMouseLeave={(e) => handleExit(e)}
        onClick={() => handleClick(wordObj)}
      >
        <span className="cursor-pointer relative inline-block hover:invert duration-100 ease-in-out">
          <span className="relative z-10">{wordObj.text}</span>
          <span
            data-hovered="false"
            className="absolute inset-x-[-2px] inset-y-[3px] rounded-md bg-gradient-to-r from-sky-700 bg via-sky-700 to-sky-700 z-0 
             data-[hovered=true]:from-sky-700 data-[hovered=true]:to-sky-700 data-[hovered=true]:-inset-x-1 duration-100 ease-in-out data-[hovered=true]:inset-y-0"
          ></span>
        </span>
      </span>
      <span className="px-[2px]">{wordObj.post}</span>
    </>
  )
}
