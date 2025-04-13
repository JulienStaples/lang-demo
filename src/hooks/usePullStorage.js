import { wordDb } from "@/src/constants/constants"
import { useEffect } from "react"

export default function usePullStorage() {
  useEffect(() => {
    const storedData = sessionStorage.getItem("wordDb")

    if (storedData) {
      JSON.parse(sessionStorage.wordDb).forEach(([key, value]) => {
        wordDb.set(key, value)
      })
    }
  }, [])
}
