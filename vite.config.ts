import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.ts",
      manifest: {
        name: "Vite PWA App",
        short_name: "VitePWA",
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#317EFB",
        icons: [
          {
            src: "img1.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "img2.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      injectManifest: {
        globPatterns: ["**/*.{js,css,html,png,svg,json}"]
      },
      injectRegister: false // voorkom dat registerSW.js wordt gegenereerd
    })
  ],
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
