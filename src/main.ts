import './styles/app.scss';

const islands = import.meta.glob('./islands/*.ts', { eager: true });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('[data-vue-island]').forEach((el) => {
    const name = el.dataset.vueIsland;
    if (!name) return;
    islands[`./islands/${name}.ts`]!.mount(el);
  });
});
