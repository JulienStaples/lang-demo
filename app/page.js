"use server"

import Tabs from "./components/Tabs"
import VirtPage from "./components/VirtPage"
import Nav from "./components/Nav"

export default async function Home() {
  return (
    <main className="relative bg-gray-950 h-[667px] w-[375px] text-[1.2rem] overflow-x-hidden">
      <Nav></Nav>
      <VirtPage></VirtPage>
      <Tabs></Tabs>
    </main>
  )
}
