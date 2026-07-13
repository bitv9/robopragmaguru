import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://robopragmaguru.pages.dev",

  output: "static",

  trailingSlash: "ignore",

  compressHTML: true,

  build: {
    format: "directory"
  },

  server: {
    host: true,
    port: 4321
  },

  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  }
});
