import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // or "0.0.0.0" to allow all
    allowedHosts: ["c170c3d069e9.ngrok-free.app"],
    hmr: {
      host: "c170c3d069e9.ngrok-free.app",
      protocol: "wss",
    },
  },
});
