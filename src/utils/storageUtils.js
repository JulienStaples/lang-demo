import { exampleData } from "../constants/constants"
import { wordDb } from "./wordDb"

export default function useStorage() {
  function initStorage() {
    exampleData.forEach(([key, value]) => {
      wordDb.set(key, value)
    })

    const storedData = sessionStorage.getItem("wordDb")

    if (storedData) {
      JSON.parse(sessionStorage.wordDb).forEach(([key, value]) => {
        wordDb.set(key, value)
      })
    }
  }

  function syncStorage() {
    sessionStorage.setItem("wordDb", JSON.stringify([...wordDb]))
  }

  return { initStorage, syncStorage }
}
