type diff = null | "wk" | "easy" | "med" | "hard"

interface Term {
  text: string
  pre: string
  post: string
  tags?: Set<string> | undefined
  normal: string
  index?: [n?: number | undefined, start?: number | undefined] | undefined
  id?: string | undefined
  chunk?: string | undefined
}
