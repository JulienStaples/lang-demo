import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export type Diff = undefined | "wk" | "easy" | "med" | "hard"

export type Term = {
  text: string
  pre: string
  post: string
  tags?: Set<string> | undefined
  normal: string
  index?: [n?: number | undefined, start?: number | undefined] | undefined
  id?: string | undefined
  chunk?: string | undefined
}

export type PresetText = {
  title: string
  lang: string
  body: string[]
}

export type Entry = {
  word: string
  diff: string | undefined
  lang: string
  def: string | undefined
  parent: string | undefined
}

export type TabKey = "translate-tab" | "details-tab" | "db-tab"

export type TabItems = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
  title: string
  id: TabKey
  action: (e: React.MouseEvent<HTMLButtonElement>) => void
}[]

export type TranslationObj = {
  text: [string]
  source: string
  target: string
}
