"use server"
import { TranslationObj } from "@/types/types"

export default async function fetchTranslation(TranslateObj: TranslationObj) {
  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_AUTH_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: TranslateObj.text,
      source_lang: TranslateObj.source,
      target_lang: TranslateObj.target,
    }),
  })
  const data = await response.json()
  return data.translations[0].text
}
