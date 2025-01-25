import { Calendar, Home, Inbox, LucideIcon, Search, Settings, CloudUploadIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
interface ItemSchema{
  title: string;
  url: string;
  icon: LucideIcon;
}

interface MyComponentProps {
  items: ItemSchema[];
}

const AppSidebar : React.FC<MyComponentProps> = ( {items} ) => {
  return (
    <Sidebar>
      <SidebarContent>
      <div className="flex items-center gap-2 p-4">
        <CloudUploadIcon />

          <span className="text-lg font-semibold">CloudQ</span>
        </div>
        <hr className="my-2" />
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="justify-start">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar