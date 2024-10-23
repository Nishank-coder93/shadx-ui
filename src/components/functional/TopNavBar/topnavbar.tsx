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

const TopNavBar = () => {
  return (
    <div className="flex flex-col sticky top-0">
        <div className="flex h-14 items-center gap-4 border-b bg-muted/20 px-4 lg:h-[60px] lg:px-6">
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
          <div className=""> 
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span> */}
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
        </div>
    </div>
  )
}

export { TopNavBar }