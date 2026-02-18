import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import handlebars from 'vite-plugin-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

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
    // Плагин для rewrite URL в dev режиме
    {
      name: 'rewrite-pages',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Перенаправляем страницы из /pages/
          if (req.url && /^\/about\.html$/.test(req.url)) {
            req.url = `/pages${req.url}`;
          }
          // Примеры доступны по путям /examples/*.html (без перенаправления)
          next();
        });
      },
    },
    // Плагин для перемещения HTML из pages/ в корень dist/ после билда
    {
      name: 'move-pages-to-root',
      closeBundle() {
        const distPages = path.resolve(__dirname, 'dist/pages');
        const distRoot = path.resolve(__dirname, 'dist');

        // Проверяем, существует ли папка dist/pages/
        if (fs.existsSync(distPages)) {
          // Читаем все файлы из dist/pages/
          const files = fs.readdirSync(distPages);

          // Перемещаем каждый файл в корень dist/
          files.forEach((file) => {
            const oldPath = path.join(distPages, file);
            const newPath = path.join(distRoot, file);
            fs.renameSync(oldPath, newPath);
            console.log(`Moved ${file} to dist root`);
          });

          // Удаляем пустую папку pages/
          fs.rmdirSync(distPages);
          console.log('Removed dist/pages/ folder');
        }
      },
    },
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
        // Примеры доступны только в dev режиме (не включаются в production сборку)
      },
      output: {
        // Оптимизация для продакшена
        manualChunks: {
          vue: ['vue'],
        },
        assetFileNames: (assetInfo) => {
          // HTML файлы из pages/ идут в корень
          if (assetInfo.name?.endsWith('.html')) {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
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
  preview: {
    port: 4173,
  },
});
