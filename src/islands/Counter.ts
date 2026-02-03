import { createApp } from 'vue';
import Counter from '../components/Counter.vue';
import { parseProps } from '../utils/islands';

export function mount(el: HTMLElement) {
  const props = parseProps(el.dataset.props);
  const app = createApp(Counter, props);
  app.mount(el);
  return app;
}
