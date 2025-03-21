import LangSelect from "../dropdown/LangSelect"
import { motion } from "framer-motion"

export default function LangsTab() {
  return (
    <motion.div
      id="texts-tab"
      className="w-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <LangSelect />
    </motion.div>
  )
}
