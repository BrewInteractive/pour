import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

const filesNeedToExclude = ["react", "react-dom"];

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: "src/index.ts",
      formats: ["cjs"],
      fileName: () => `index.js`,
    },
    rollupOptions: {
      external: [...filesNeedToExclude, /\.stories\.(js|jsx|ts|tsx)$/],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
