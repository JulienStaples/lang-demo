"use server"

import Tabs from "./components/Tabs"
import VirtPage from "./components/VirtPage"
import Nav from "./components/Nav"

export default async function Home() {
  return (
    <main className="relative h-[667px] w-[375px] overflow-x-hidden bg-gray-950 text-[1.2rem]">
      <Nav></Nav>
      <VirtPage></VirtPage>
      <Tabs></Tabs>
    </main>
  )
}
