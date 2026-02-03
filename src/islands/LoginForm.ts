import { createApp } from 'vue';
import LoginForm from '../components/LoginForm.vue';
import { parseProps } from '../utils/islands';

export function mount(el: HTMLElement) {
  const props = parseProps(el.dataset.props);
  const app = createApp(LoginForm, props);
  app.mount(el);
  return app;
}
