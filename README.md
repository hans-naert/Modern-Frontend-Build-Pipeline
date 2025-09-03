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