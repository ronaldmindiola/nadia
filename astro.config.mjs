// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://urldepagina.com",
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  output: "server",
});
