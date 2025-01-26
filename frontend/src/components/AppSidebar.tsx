import { Calendar, Home, Inbox, LucideIcon, Search, Settings, CloudUploadIcon, ChevronUp, User2 } from "lucide-react";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

// Menu items.
interface ItemSchema {
  title: string;
  url: string;
  icon: LucideIcon;
}

interface MyComponentProps {
  items: ItemSchema[];
}

const AppSidebar: React.FC<MyComponentProps> = ({ items }) => {
  const { user, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();  // Get the navigate function

  const handleProfileClick = () => {
    // Programmatically navigate to the profile page
    navigate('/profile');
  };

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
      <hr className="my-2" />

      {isAuthenticated ? (
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    {user?.picture && isAuthenticated ? (
                      <div className="max-w-6">
                        <img src={user.picture} alt={user.name} />
                      </div>
                    ) : (
                      <User2 />
                    )}
                    {user?.name}
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem onClick={handleProfileClick}>
                      <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => logout()}>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      ) : null}
    </Sidebar>
  );
};

export default AppSidebar;
