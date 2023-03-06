import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import CustomHmr from "./plugins/customhmr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), CustomHmr()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: "../server/public",
    emptyOutDir: true,
    watch: {
      usePolling: true,
      useFsEvents: false,
    },
  },
});
