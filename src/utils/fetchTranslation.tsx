"use server"
import { TranslationObj } from "@/types/types"

export default async function fetchTranslation(props: TranslationObj) {
  const { text, source, target } = props

  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    cache: "force-cache",
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_AUTH_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
      source_lang: source,
      target_lang: target,
    }),
  })

  const data = await response.json()
  return data.translations[0].text
}
