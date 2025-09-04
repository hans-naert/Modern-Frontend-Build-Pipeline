# Modern Frontend Build Pipeline
## Hands-on met Vite

- Maak een Vite project aan met als template “vanilla-ts”
  Create, install and run project:  
  ```
  npm create vite@latest . -- --template vanilla-ts
  npm install
  ```

- Start de dev server
  ```
  npm run dev
  ```

- Maak een typescript functie “greet” aan en voeg de respons toe aan het HTML document.
- Voeg een afbeelding toe.
- Stel Vite zo in dat de afbeelding wordt gebundeld met een DATAURL-loader.  
  Voeg een bestand vite.config.ts toe en plaats in de build configuratie:
  ```
    assetsInlineLimit: 100000 // verhoog de limiet voor inline assets naar 100KB
  ```

## Hands-on Workbox & VITE
Gebruik Vite met de PWA-plugin om een installeerbare app te creëren die ook offline gebruikt kan worden.

Installeer de vite-plugin-pwa en workbox-window: `npm install vite-plugin-pwa workbox-window --save-dev`

Voeg aan vite.config.ts het volgende toe:
```
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
      }
    })
  ],
```

Voeg een serviceworker sw.ts toe:
```
/// <reference lib="webworker" />
import { precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";

// Local typing so TS accepts the Workbox injected manifest placeholder.
declare const self: ServiceWorkerGlobalScope & { __WB_MANIFEST: Array<{ url: string; revision?: string }> };

self.skipWaiting();
clientsClaim();

// IMPORTANT: keep the literal `self.__WB_MANIFEST` so injectManifest can replace it.
precacheAndRoute(self.__WB_MANIFEST);
```
## Hands-on GitHub Actions met Vite + Typescript
### Basisopdracht CI:

Maak een eenvoudige GitHub Actions workflow die automatisch de Vite-projectbuild uitvoert en de TypeScript-code compileert bij elke push naar de repository.

Add .github\workflows\ci.yml
```
name: Vite + TypeScript CI

on:
  push:
    branches: [ "ci-cd" ]
  pull_request:
    branches: [ "ci-cd" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22"

      - name: Install dependencies
        run: npm install

      - name: TypeScript check
        run: npm run type-check

      - name: Build project
        run: npm run build
```

## Uitbreidingsopdracht CD 
Breid de pipeline uit met testen en artifact-opslag.

Voeg aan de yml het volgende toe:
```
      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: vite-dist
          path: dist/
```
