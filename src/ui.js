// Simple helper functions for UI elements
export function createButton(text, clickHandler) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', clickHandler);
  return button;
}

export function addStyles(element, styles) {
  Object.assign(element.style, styles);
  return element;
}
