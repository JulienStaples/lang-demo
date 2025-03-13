"use server"
import VirtPage from "./components/VirtPage"
import Nav from "./components/Nav"
import FlyoutMenu from "./components/FlyoutMenu"
import TitleBar from "./components/TitleBar"

export default async function Home() {
  return (
    <main className="relative flex h-[667px] w-[375px] bg-[#171717]">
      <div className="relative flex grow flex-col gap-4 p-4 pr-0">
        <TitleBar></TitleBar>
        <VirtPage></VirtPage>
        <FlyoutMenu></FlyoutMenu>
      </div>
      <Nav></Nav>
    </main>
  )
}
