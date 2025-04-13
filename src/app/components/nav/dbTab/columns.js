"use client"

import Words from "../../virtPage/Words"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { diffWordColors } from "@/src/constants/constants"

export const columns = [
  {
    accessorKey: "word",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Word
          <ArrowUpDown className="ml-1" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <Words words={row.getValue("word")} single={true} />
    },
  },
  {
    accessorKey: "def",
    header: "def",
  },
  {
    accessorKey: "parent",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Parent
          <ArrowUpDown className="ml-1" />
        </Button>
      )
    },
  },
  {
    accessorKey: "diff",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Difficulty
          <ArrowUpDown className="ml-1" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const diff = row.getValue("diff")
      return (
        <div
          data-diff={diff}
          className={`${diffWordColors} rounded-sm text-center`}
        >
          {diff}
        </div>
      )
    },
  },
  {
    accessorKey: "lang",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Lang
          <ArrowUpDown className="ml-1" />
        </Button>
      )
    },
  },
]
