"use server"
import TabProvider from "./context/TabContext"
import Tabs from "./components/Tabs"
import VirtPage from "./components/VirtPage"
import Nav from "./components/Nav"

export default async function Home() {
  return (
    <main className="relative flex h-[667px] w-[375px] bg-[#171717]">
      <div className="relative flex grow flex-col gap-4 p-4">
        <div className="flex gap-3">
          <span>0</span>
          <span>Title</span>
        </div>
        <VirtPage></VirtPage>
      </div>
      <TabProvider>
        <Nav></Nav>
        <Tabs></Tabs>
      </TabProvider>
    </main>
  )
}
