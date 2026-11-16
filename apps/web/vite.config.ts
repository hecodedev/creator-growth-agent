import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 3452,
    proxy: {
      "/api": {
        target: process.env.VITE_API_BASE ?? "http://127.0.0.1:8452",
        changeOrigin: true,
      },
    },
  },
});