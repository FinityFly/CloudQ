import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import { Button } from "./components/ui/button"
import { LucideIcon } from "lucide-react"

interface ItemSchema{
  title: string;
  url: string;
  icon: LucideIcon;
}

export default function Layout({ children, items }: { children: React.ReactNode, items: ItemSchema[] }) {
  return (
    <SidebarProvider>
      <AppSidebar items={items}/>

      <main>
        <SidebarTrigger />
        <Button>Hi</Button>
        
        {children}
      </main>
    </SidebarProvider>
  )
}
