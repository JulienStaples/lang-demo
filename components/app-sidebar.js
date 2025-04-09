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
  const {
    tabKey,
    tabsPane,
    items,
    langsAction,
    langItems,
    textsAction,
    textItems,
  } = props
  const { open } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-[3rem] p-0">
        <SidebarMenu className="h-full">
          <SidebarMenuItem className="h-full">
            <Button
              variant="ghost"
              className={`h-full w-full rounded-none text-xs`}
              key={"home-tab"}
            >
              <Home />
              {open && <span className="truncate">Home</span>}
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
                      id={item.id}
                      onClick={item.action}
                      variant="ghost"
                      isActive={tabsPane && tabKey === item.id}
                      className="text-xs"
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
                    <SidebarMenuButton variant="ghost" className="text-xs">
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
                      action={langsAction}
                      items={langItems}
                    />
                    <AppSelect
                      placeholder="Texts"
                      action={textsAction}
                      items={textItems}
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
