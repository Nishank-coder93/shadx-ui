import { createRootRoute, createRoute } from "@tanstack/react-router";
import { LayoutWithSidebar } from "./components/layout/LayoutWithSidebar/layoutwithsidebar";
import { Dashboard } from "./apps/dashboard/dashboard";

// Main root component that will render output to <Outlet />
const rootRoute = createRootRoute({
    component: LayoutWithSidebar,
});

// Index route for starting page
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Dashboard,
});

export const routeTree = rootRoute.addChildren([
    indexRoute,
]);