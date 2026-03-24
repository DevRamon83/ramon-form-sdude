import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/lib/index.js"),
        starter: resolve(
          __dirname,
          "src/lib/components/starterKit/StarterKit.jsx",
        ),
      },
      name: "RamonFormSDUDE",
      fileName: (format, entryName) =>
        `ramon-form-sdude-${entryName}.${format}.js`,
      // CAMBIA QUESTA RIGA:
      formats: ["es"],
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
