import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es2017",
    assetsInlineLimit: 100000 // verhoog de limiet voor inline assets naar 100KB
  },
  assetsInclude: ["**/*.svg"], // laat Vite weten dat .svg bestanden assets zijn
  esbuild: {
    loader: "ts",          // transpile TS met esbuild
    target: "es2017",
  }
});
