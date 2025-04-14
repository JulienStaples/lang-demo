import { wordDb } from "../lib/wordDb"

export default function useStorage() {
  function initStorage() {
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
