"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import Word from "./virtPage/Word"
import { diffBtnColors } from "../lib/constants/constants"

export const columns = [
  {
    accessorKey: "word",
    header: "word",
    cell: ({ row }) => {
      return (
        <Word
          wordObj={{ normal: row.getValue("word"), text: row.getValue("word") }}
        />
      )
    },
  },
  {
    accessorKey: "def",
    header: "def",
  },
  {
    accessorKey: "root",
    header: "root",
  },
  {
    accessorKey: "diff",
    header: "diff",
    cell: ({ row }) => {
      return (
        <ToggleGroup
          className="gap-0 self-start rounded-sm border"
          type="single"
          value={row.getValue("diff")}
          // onValueChange={(value) => (value ? changeDiff(value) : "")}
        >
          <ToggleGroupItem
            value="wk"
            className={`rounded-l-sm rounded-r-none border-foreground bg-transparent`}
            aria-label="Toggle wk"
          >
            wk
          </ToggleGroupItem>
          <ToggleGroupItem
            value="easy"
            className={`${diffBtnColors.easy} rounded-none`}
            aria-label="Toggle easy"
          >
            easy
          </ToggleGroupItem>
          <ToggleGroupItem
            value="med"
            className={`${diffBtnColors.med} rounded-none`}
            aria-label="Toggle med"
          >
            med
          </ToggleGroupItem>
          <ToggleGroupItem
            value="hard"
            className={`${diffBtnColors.hard} rounded-l-none rounded-r-sm`}
            aria-label="Toggle hard"
          >
            hard
          </ToggleGroupItem>
        </ToggleGroup>
      )
    },
  },
  {
    accessorKey: "lang",
    header: "lang",
  },
]
