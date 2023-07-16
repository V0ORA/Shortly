import { defineConfig } from "vite";

module.exports = defineConfig({
  build: {
    minify: true,
    outDir: "dist",
    rollupOptions: {
      input: {
        index: "src/index.html",
        app: "src/js/index.js",
      },
    },
  },
});
