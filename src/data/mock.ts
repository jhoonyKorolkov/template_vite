// ============================================
// MOCK DATA (для разработки без бэкенда)
// ============================================

/**
 * Здесь храните фейковые данные для разработки UI
 * Пример: таблицы, списки, формы и т.д.
 */

export const mockData = {
  // Пример: пользователи для таблицы
  users: [
    { id: 1, name: 'Иван Петров', email: 'ivan@example.com', role: 'admin' },
    { id: 2, name: 'Мария Сидорова', email: 'maria@example.com', role: 'user' },
    { id: 3, name: 'Алексей Иванов', email: 'alex@example.com', role: 'user' },
  ],

  // Пример: товары
  products: [
    { id: 1, title: 'Товар 1', price: 1000, stock: 10 },
    { id: 2, title: 'Товар 2', price: 2500, stock: 5 },
    { id: 3, title: 'Товар 3', price: 500, stock: 20 },
  ],

  // Добавляйте свои данные здесь...
};

// Включены ли моки (автоматически только в dev режиме)
export const useMocks = import.meta.env.DEV;
