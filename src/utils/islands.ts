// Типы для Islands
export interface IslandProps {
  [key: string]: any;
}

export interface MountFunction {
  (el: HTMLElement): any;
}

// Хелпер для безопасного парсинга props
export function parseProps(propsString?: string): IslandProps {
  if (!propsString) return {};
  try {
    return JSON.parse(propsString);
  } catch (e) {
    console.error('Failed to parse props:', e);
    return {};
  }
}
