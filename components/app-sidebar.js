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
import { Home } from "lucide-react"

export function AppSidebar(props) {
  const items = props.items
  const homeitem = {
    icon: Home,
    title: "Home",
    id: "home-tab",
    action: () => {},
  }

  const { open } = useSidebar()

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
                      onClick={item.action}
                      variant="ghost"
                      className="text-xs"
                    >
                      <item.icon />
                      {open && <span className="truncate">{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
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
