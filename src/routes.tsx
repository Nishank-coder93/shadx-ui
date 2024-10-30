import { createRootRoute, createRoute } from "@tanstack/react-router";
import { LayoutWithSidebar } from "./components/layout/LayoutWithSidebar/LayoutWithSidebar";
import { Dashboard } from "./apps/dashboard/dashboard";
import { Profile } from "./apps/userconfig/profile";

const rootRoute = createRootRoute({
    component: LayoutWithSidebar,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Dashboard,
});

const profileRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/settings/profile",
    component: Profile,
});

export const routeTree = rootRoute.addChildren([
    indexRoute,
    profileRoute,
]);