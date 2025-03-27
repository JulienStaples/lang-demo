import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Home, Settings } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import AppSelect from "./app-select"
import { ModeToggle } from "./mode-toggle"

export function AppSidebar(props) {
  const { items, options } = props

  const homeitem = {
    icon: Home,
    title: "Home",
    id: "home-tab",
    action: () => {},
  }

  const { open } = useSidebar()

  function clearActiveStates() {
    Array.from(document.querySelectorAll(".sidebar-btn")).forEach(
      (e) => (e.dataset.active = false),
    )
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-[3rem] p-0">
        <SidebarMenu className="h-full">
          <SidebarMenuItem className="h-full">
            <Button
              onClick={homeitem.action}
              variant="ghost"
              className={`h-full w-full rounded-none text-xs`}
              key={homeitem.id}
            >
              <homeitem.icon />
              {open && <span className="truncate">{homeitem.title}</span>}
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <Separator />

      <SidebarContent>
        <SidebarGroup className={`${open ? "px-1" : "px-0"}`}>
          <SidebarGroupContent>
            <SidebarMenu className={`${open ? "items-start" : ""}`}>
              {items.map((item) => {
                return (
                  <SidebarMenuItem
                    key={item.id}
                    className={`${open ? "w-full" : "self-center"}`}
                  >
                    <SidebarMenuButton
                      onClick={(e) => {
                        item.action()
                        clearActiveStates()
                        e.currentTarget.dataset.active = true
                      }}
                      variant="ghost"
                      className="sidebar-btn text-xs"
                    >
                      <item.icon />
                      {open && <span className="truncate">{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
              <SidebarMenuItem
                key={"options-menu"}
                className={`${open ? "w-full" : "self-center"}`}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      onClick={(e) => {
                        clearActiveStates()
                        e.currentTarget.dataset.active = true
                      }}
                      variant="ghost"
                      className="sidebar-btn text-xs"
                    >
                      <Settings />
                      {open && <span className="truncate">Options</span>}
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="flex flex-col gap-2 p-2"
                    align="start"
                    side="right"
                  >
                    <AppSelect
                      placeholder="Languages"
                      action={options.setLang}
                      items={options.langItems}
                    />
                    <AppSelect
                      placeholder="Texts"
                      action={options.setText}
                      items={options.textItems}
                    />
                    <ModeToggle />
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <Separator />

      <SidebarFooter className="h-[3rem] p-0">
        <SidebarMenu className="h-full">
          <SidebarMenuItem className="h-full">
            <SidebarTrigger className="h-full w-full rounded-none" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
