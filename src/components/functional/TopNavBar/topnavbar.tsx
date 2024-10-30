import React from 'react'
import {
    CircleUser,
    Search,
  } from "lucide-react"
import { Button } from '@/components/ui/Button/button'
import { Input } from '@/components/ui/Input/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar/avatar'
import { 
    DropdownMenu, 
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem 
} from '@/components/ui/DropdownMenu/dropdown-menu'

import { SidebarTrigger} from "@/components/ui/Sidebar/sidebar"

// Sidebar trigger component
const SidebarTriggerComponent = () => (
    <SidebarTrigger className="-ml-1" />
);

// Search form component
const SearchForm = () => (
    <div className="w-full flex-1">
      <form>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search ..."
            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
      </form>
    </div>
);

// Avatar and dropdown menu component
const AvatarDropdown = () => (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );


interface TopNavBarProps {
    search?: boolean;
    sidebarTrigger?: boolean;
    avatarWithDropdown?: boolean;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ search = true, sidebarTrigger = true, avatarWithDropdown = true}) => {
    return (
      <div className="flex flex-col sticky top-0">
        <div className="flex h-14 items-center gap-4 border-b bg-muted/20 px-4 lg:h-[60px] lg:px-6">
          {sidebarTrigger && <SidebarTriggerComponent />}
          {search && <SearchForm />}
          {avatarWithDropdown && <AvatarDropdown />}
        </div>
      </div>
    );
  }

export { TopNavBar }