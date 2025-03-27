"use client"

import Word from "./virtPage/Word"

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
  },
  {
    accessorKey: "lang",
    header: "lang",
  },
]
