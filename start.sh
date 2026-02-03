#!/bin/bash

# Frontend Template Quick Start Script

echo "🚀 Запуск фронтенд-проекта..."
echo ""

# Проверка node_modules
if [ ! -d "node_modules" ]; then
  echo "📦 Установка зависимостей..."
  npm install
  echo ""
fi

# Очистка старой сборки
if [ -d "dist" ]; then
  echo "🧹 Очистка старой сборки..."
  npm run clean
  echo ""
fi

# Запуск dev сервера
echo "🔥 Запуск dev сервера на http://localhost:3000"
echo ""
npm run dev
