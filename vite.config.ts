import path from "path"
import react from "@vitejs/plugin-react-swc"
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()], //TanStackRouterVite() - If want File Based Routing
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})