import React from 'react'
import { Link } from "react-router-dom";
import {
    Home,
    LineChart,
    Package,
    Package2,
    ShoppingCart,
    Users,
  Book,
  Bot,
  Code2,
  Settings2,
  SquareTerminal,
  Triangle
  } from "lucide-react"
import { Button } from '@/components/ui/Button/button';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/Tooltip/tooltip';
import { Badge } from '@/components/ui/Badge/badge'
import { Separator } from '@/components/ui/Separator/separator';
import { Switch } from '@/components/ui/Switch/switch';
import { Text } from '@/components/ui/Text/Text';

const Menu = () => {
  return (
        // <div className="hidden sm:block border-r bg-muted/10 h-full">
            <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <a href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span className="hidden md:block">Website Name</span>
                    </a>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <div className="md:hidden">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-lg hover:text-primary"
                                        aria-label="Dashboard"
                                    >
                                        <Home className="size-5" />
                                    </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" sideOffset={5}>
                                        Dashboard
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-lg hover:text-primary"
                                        aria-label="Orders"
                                    >
                                        <ShoppingCart className="size-5" />
                                    </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" sideOffset={5}>
                                        Orders
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <Separator className="mt-2 mb-2"/>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-lg text-primary bg-muted"
                                        aria-label="Products"
                                    >
                                        <Package className="size-5" />
                                    </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" sideOffset={5}>
                                        Products
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-lg hover:text-primary"
                                        aria-label="Customers"
                                    >
                                        <Users className="size-5" />
                                    </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" sideOffset={5}>
                                        Customers
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <Separator className="mt-2 mb-2"/>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-lg hover:text-primary"
                                        aria-label="Analytics"
                                    >
                                        <LineChart className="size-5" />
                                    </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" sideOffset={5}>
                                        Analytics
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <a
                            href="#"
                            className="hidden md:flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Home className="h-4 w-4" />
                            <span className="hidden md:block"> Dashboard </span>
                        </a>
                        <a
                            href="#"
                            className="hidden md:flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            <span className="hidden md:block"> Orders </span>
                        </a>
                        <Separator className="hidden md:block mt-2 mb-2"/>
                        <a
                            href="#"
                            className="hidden md:flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                        >
                            <Package className="h-4 w-4" />
                            <span className="hidden md:block"> Products </span>
                        </a>
                        <a
                            href="#"
                            className="hidden md:flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Users className="h-4 w-4" />
                            <span className="hidden md:block"> Customers </span>
                        </a>
                        <Separator className="hidden md:block mt-2 mb-2"/>
                        <a
                            href="#"
                            className="hidden md:flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <LineChart className="h-4 w-4" />
                            <span className="hidden md:block"> Analytics </span>
                        </a>
                    </nav>
                </div>
            </div>
        // </div>
  )
}

export {Menu}