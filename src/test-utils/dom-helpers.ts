export function toTextContent(el: HTMLElement) {
  const textContent = el.textContent || '';
  return textContent.trim();
}
