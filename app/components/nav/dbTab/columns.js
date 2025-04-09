"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import Word from "../../virtPage/Word"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { diffBtnColors } from "@/app/lib/constants/constants"

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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Root
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
      return (
        <ToggleGroup
          className="w-fit gap-0 self-start rounded-sm border"
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
