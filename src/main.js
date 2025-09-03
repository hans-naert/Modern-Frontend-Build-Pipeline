import './styles.css';
import { greet, getCurrentTime } from './utils';
import { createButton, addStyles } from './ui';

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

  // No need for inline styles anymore, using CSS file instead

  // Add everything to the page
  app.appendChild(heading);
  app.appendChild(timeDisplay);
  app.appendChild(refreshButton);

  console.log('Application initialized with ESM!');
});
