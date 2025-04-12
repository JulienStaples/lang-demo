"use server"

import VirtPage from "./components/virtPage/VirtPage"
import Nav from "./components/nav/Nav"
import TabsPane from "./components/nav/TabsPane"

export default async function Home() {
  return (
    <main className="relative flex h-[667px] w-[375px] bg-neutral-900">
      <Nav></Nav>
      <div className="relative flex grow flex-col gap-4">
        <VirtPage></VirtPage>
        <TabsPane></TabsPane>
      </div>
    </main>
  )
}
