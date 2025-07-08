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
import { Home, Info, Settings } from "lucide-react"
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`h-full w-full rounded-none text-xs`}
                  key={"info-tab"}
                >
                  <Info />
                  {open && <span className="truncate">Info</span>}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="flex w-[20em] flex-col gap-6 p-3"
                align="start"
                side="right"
              >
                <h1 className="text-sm">
                  This app helps to learn languages one word at a time. For
                  every new word encountered, mark its difficulty, make a
                  definition for it, and save it to the database.
                  <span className="font-bold">
                    {
                      " However this is only a demo, and data is only saved in the browser for the session."
                    }
                  </span>
                </h1>

                <div className="flex flex-col gap-1">
                  <h2 className="text-sm font-bold">
                    {"Tabs: "}
                    <span className="font-normal">
                      The navbar to the left has four tabs, translate, details,
                      database, and settings.
                    </span>
                  </h2>
                  <ul className="ml-3 flex flex-col gap-2 text-sm">
                    <li>
                      <span className="font-bold">• Translate: </span>
                      Save words, and change its difficulty from hard to well
                      known (wk). Lookup the translation for the word using the
                      translate button. This button takes you to the
                      wordreference.com page for the word.
                    </li>
                    <li>
                      <span className="font-bold">• Details: </span>
                      Shows more about the selected word.
                    </li>
                    <li>
                      <span className="font-bold">• Database: </span>
                      See all saved words. The existing words is example data
                      for the lorem ipsum sample text, meant to show what the
                      app would look like after some use.
                    </li>
                    <li>
                      <span className="font-bold">• Settings: </span>
                      Change the translation direction, and the sample texts.
                      Translation direction is automatically set every time you
                      change texts.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-1">
                  <h2 className="text-sm font-bold">
                    {"Page: "}
                    <span className="font-normal">
                      This is the main part of the app consisting of three
                      parts.
                    </span>
                  </h2>
                  <p className="text-sm"></p>
                  <ul className="ml-3 flex flex-col gap-2 text-sm">
                    <li>
                      <span className="font-bold">• Title Bar: </span>
                      See the title of the current text, and the currently
                      active word.
                    </li>
                    <li>
                      <span className="font-bold">• Footer: </span>
                      Change pages, and change between the two views.
                    </li>
                    <li>
                      <span className="font-bold">• Body: </span>
                      Consists of a reading view and an edit view. The main view
                      is the reading view, the edit view allows editing of the
                      current page.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-1">
                  <h2 className="text-sm font-bold">Abbreviations:</h2>
                  <ul className="ml-3 flex flex-col gap-2 text-sm">
                    <li>• wk : Well Known</li>
                    <li>• de : Deutsch (German)</li>
                    <li>• en : English</li>
                    <li>• fr : French</li>
                    <li>• la : Latin</li>
                    <li>• sp : Spanish</li>
                  </ul>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
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
                    {/* <ModeToggle /> */}
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
