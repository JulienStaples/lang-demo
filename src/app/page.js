"use server"

import VirtPage from "./components/virtPage/VirtPage"
import Nav from "./components/nav/Nav"
import TabsPane from "./components/nav/TabsPane"

export default async function Home() {
  return (
    <main className="relative flex h-full w-full bg-neutral-900">
      <Nav></Nav>
      <div className="relative flex grow">
        <VirtPage></VirtPage>
        <TabsPane></TabsPane>
      </div>
    </main>
  )
}
