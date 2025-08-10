type diff = null | "wk" | "easy" | "med" | "hard"

type Term = {
  text: string
  pre: string
  post: string
  tags?: Set<string> | undefined
  normal: string
  index?: [n?: number | undefined, start?: number | undefined] | undefined
  id?: string | undefined
  chunk?: string | undefined
}

type PresetText = {
  title: string
  lang: string
  body: string[]
}

type Entry = { word: string; diff: string; lang: string }
