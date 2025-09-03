export function greet(name: string): string {
  const hour = new Date().getHours();
  let greeting = '';

  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  return `${greeting}, ${name}!`;
}

export function getCurrentTime(): string {
  const now = new Date();
  return now.toLocaleTimeString();
}
