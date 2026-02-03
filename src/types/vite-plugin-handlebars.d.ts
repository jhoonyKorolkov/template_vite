declare module 'vite-plugin-handlebars' {
  import type { Plugin } from 'vite';

  interface HandlebarsOptions {
    partialDirectory?: string | string[];
    context?: Record<string, any> | ((pagePath: string) => Record<string, any>);
    helpers?: Record<string, (...args: any[]) => any>;
    compileOptions?: any;
    runtimeOptions?: any;
  }

  export default function handlebars(options?: HandlebarsOptions): Plugin;
}
