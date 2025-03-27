import { useContext } from "react"
import { AppContext } from "@/app/context/AppContext"
import { dummyText, langOptions } from "@/app/lib/constants/constants"
import AppSelect from "@/components/app-select"
import { motion } from "framer-motion"

export default function LangsTab() {
  const { setPresetText, setLangOption, setPage } = useContext(AppContext)

  const langItems = []
  const textItems = []
  genItems()

  function setLang(item) {
    setLangOption(item.key)
  }

  function setText(item) {
    console.log(item.lang)
    setPresetText(dummyText.get(item.key))
    setLangOption(item.lang == "en" ? "enfr" : `${item.lang}en`)
    setPage(0)
  }

  return (
    <motion.div
      id="langs-tab"
      className="flex flex-col items-start gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AppSelect placeholder="Languages" action={setLang} items={langItems} />
      <AppSelect placeholder="Texts" action={setText} items={textItems} />
    </motion.div>
  )

  function genItems() {
    langOptions.forEach((langs, key) => {
      let item = {
        key: key,
        text: langs,
      }

      langItems.push(item)
    })

    dummyText.forEach((text, key) => {
      let textItem = {
        key: key,
        text: `${text.lang} - ${text.title}`,
        lang: text.lang,
      }

      textItems.push(textItem)
    })
  }
}
