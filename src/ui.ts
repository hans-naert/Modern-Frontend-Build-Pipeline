// Simple helper functions for UI elements
export function createButton(text: string, clickHandler: () => void): HTMLButtonElement {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', clickHandler);
  return button;
}

export function addStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>): HTMLElement {
  Object.assign(element.style, styles);
  return element;
}
