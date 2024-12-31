import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FM-Huddle-Landing-Page/",
  server: {
    host: true,
  },
  css: {
    postcss: "postcss.config.cjs",
  },
});
