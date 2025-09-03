import './style.css'
import typescriptLogo from './typescript.svg'
import logoUrl from './logo.svg';
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import {greet} from "./utils";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

  const heading = document.createElement('h1');
  heading.textContent = greet('Vite user');
  document.body.appendChild(heading);

  //Create logo image
  const logo = document.createElement('img');
  logo.src = logoUrl;
  logo.alt = 'Logo';
  logo.width = 100;
  logo.height = 100;
  document.body.appendChild(logo);


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
