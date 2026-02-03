import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import handlebars from 'vite-plugin-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Отключаем предупреждения для data-* атрибутов
          isCustomElement: (tag: string) => tag.startsWith('data-'),
        },
      },
    }),
    handlebars({
      partialDirectory: path.resolve(__dirname, 'partials'),
      context: {
        year: new Date().getFullYear(),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@islands': path.resolve(__dirname, 'src/islands'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'pages/about.html'),
      },
      output: {
        // Оптимизация для продакшена
        manualChunks: {
          vue: ['vue'],
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Настройки для лучшей оптимизации
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: true,
  },
});
