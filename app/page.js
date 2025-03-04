"use server"

import LangSelect from "./components/LangSelect"
import SampleTexts from "./components/SampleTexts"
import Tabs from "./components/Tabs"
import VirtPage from "./components/VirtPage"

export default async function Home() {
  return (
    <main className="relative bg-gray-950 h-[667px] w-[375px] text-[1.2rem] overflow-x-hidden">
      <SampleTexts></SampleTexts>
      <LangSelect></LangSelect>
      <VirtPage></VirtPage>
      <Tabs></Tabs>
    </main>
  )
}
