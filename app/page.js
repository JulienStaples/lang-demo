"use server"
import NavProvider from "./context/NavContext"
import VirtPage from "./components/VirtPage"
import Nav from "./components/Nav"
import FlyoutMenu from "./components/FlyoutMenu"

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
      <NavProvider>
        <Nav></Nav>
        <FlyoutMenu></FlyoutMenu>
      </NavProvider>
    </main>
  )
}
