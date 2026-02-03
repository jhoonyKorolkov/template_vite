// ============================================
// API КОНФИГУРАЦИЯ
// ============================================

// Определяем режим работы
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// API endpoints
export const API_CONFIG = {
  // В dev режиме используем моки, в production - реальный Laravel API
  baseURL: isDevelopment
    ? '/api' // для разработки с моками
    : import.meta.env.VITE_API_URL || 'https://your-laravel-api.com/api',

  timeout: 10000,

  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

// Endpoints для Laravel API
export const API_ENDPOINTS = {
  // Auth
  login: '/auth/login',
  logout: '/auth/logout',
  register: '/auth/register',
  me: '/auth/me',

  // Users
  users: '/users',
  user: (id: number) => `/users/${id}`,

  // Example
  items: '/items',
  item: (id: number) => `/items/${id}`,
} as const;

// CSRF token для Laravel
export const getCsrfToken = (): string | null => {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return meta?.getAttribute('content') || null;
};
