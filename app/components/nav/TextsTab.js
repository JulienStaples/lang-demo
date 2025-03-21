import SampleTexts from "../dropdown/SampleTexts"
import { motion } from "framer-motion"

export default function TextsTab() {
  return (
    <motion.div
      id="texts-tab"
      className="w-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <SampleTexts />
    </motion.div>
  )
}
