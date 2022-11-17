import { defineConfig } from "vite";
import mixPlugin from "vite-plugin-mix";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// @ts-ignore
const mix = mixPlugin.default;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    mix({
      handler: "./handler.ts",
    }),
  ],
  server: {
    port: 4000,
  },
});
