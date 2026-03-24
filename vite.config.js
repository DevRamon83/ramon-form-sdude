import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/lib/index.js"),
      name: "RamonFormSDUDE",
      fileName: (format) => `ramon-form-sdude.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});