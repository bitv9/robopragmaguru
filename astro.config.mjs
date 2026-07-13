import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.com",

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
