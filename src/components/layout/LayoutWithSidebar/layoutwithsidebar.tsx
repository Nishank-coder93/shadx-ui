import { Outlet} from '@tanstack/react-router';
import { TopNavBar } from "@/components/functional/TopNavBar/topnavbar";
import { AppSidebar } from "@/components/layout/LayoutWithSidebar/Sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/Sidebar/sidebar"

const LayoutWithSidebar = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNavBar search={true} avatarWithDropdown={true} />
        <Outlet />  {/* This is where the routed component will be rendered */}
      </SidebarInset>
    </SidebarProvider>
    // <div className="grid min-h-screen w-full grid-cols-[1fr] sm:grid-cols-[60px_1fr] md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] border-solid border-50 border-black">
    //   <div className="hidden sm:block border-r bg-muted/10 h-full">
    //     <Menu />
    //   </div>
    //   <div>
    //     <TopNavBar />
    //     <div className="flex flex-col items-center justify-center min-h-screen">
    //       Home
    //     </div>
    //   </div>
    // </div>
  )
}

export { LayoutWithSidebar }