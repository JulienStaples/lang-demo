"use server"

import TranslateTab from "./components/TranslateTab"
import VirtPage from "./components/VirtPage"
import { dummyText } from "./lib/constants/constants"

export default async function Home() {
  return (
    <main className="relative bg-gray-950 h-[667px] w-[375px] text-[1.2rem] overflow-x-hidden">
      <VirtPage startingText={dummyText[1]}></VirtPage>
      <TranslateTab></TranslateTab>
    </main>
  )
}
