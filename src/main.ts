import logoUrl from './logo.svg';
import './styles.css';
import { greet, getCurrentTime } from './utils';
import { createButton, addStyles } from './ui';
import { Workbox} from 'workbox-window'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Create heading
  const heading = document.createElement('h1');
  heading.textContent = greet('esbuild user');

  // Create time display
  const timeDisplay = document.createElement('p');
  timeDisplay.textContent = `Current time: ${getCurrentTime()}`;
  timeDisplay.id = 'time-display';

  // Create refresh button using our UI module
  const refreshButton = createButton('Refresh Time', () => {
    timeDisplay.textContent = `Current time: ${getCurrentTime()}`;
  });

  //Create logo image
  const logo = document.createElement('img');
  logo.src = logoUrl;
  logo.alt = 'Logo';
  logo.width = 100;
  logo.height = 100;

  // No need for inline styles anymore, using CSS file instead

  // Add everything to the page
  app.appendChild(heading);
  app.appendChild(timeDisplay);
  app.appendChild(refreshButton);
  app.appendChild(logo);

  console.log('Application initialized with ESM!');

  //serviceworker registration
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');
    wb.register().then(() => {
      console.log('Service worker registered successfully.');
    }).catch((error) => {
      console.error('Service worker registration failed:', error);
    });
  }

});
