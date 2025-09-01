import { greet, getCurrentTime } from './utils';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const heading = document.createElement('h1');
  heading.textContent = greet('esbuild user');

  const timeDisplay = document.createElement('p');
  timeDisplay.textContent = `Current time: ${getCurrentTime()}`;

  app.appendChild(heading);
  app.appendChild(timeDisplay);

  console.log('Application initialized!');
});
