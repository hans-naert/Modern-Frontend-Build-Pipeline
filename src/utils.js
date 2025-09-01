export function greet(name) {
  return `Hello, ${name}!`;
}

export function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}
