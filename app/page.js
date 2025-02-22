"use server"

import VirtPage from "./components/VirtPage"
import { dummyText } from "./lib/constants/constants"

export default async function Home() {
  return (
    <main className=" bg-gray-950 h-[667px] w-[375px] text-[1.2rem]">
      <VirtPage startingText={dummyText[2]}></VirtPage>
    </main>
  )
}
