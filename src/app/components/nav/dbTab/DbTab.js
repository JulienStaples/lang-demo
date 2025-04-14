"use client"

import { motion } from "framer-motion"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { wordDb } from "@/src/lib/wordDb"

export default function DbSearchTab() {
  return (
    <motion.div id="db-tab" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <DataTable columns={columns} data={[...wordDb.values()]} />
    </motion.div>
  )
}
