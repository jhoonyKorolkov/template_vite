interface Island {
  mount: (el: HTMLElement) => void;
}

const islands = import.meta.glob<Island>('./islands/*.ts', { eager: true });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('[data-vue-island]').forEach((el) => {
    const name = el.dataset.vueIsland;
    if (!name) return;

    const island = islands[`./islands/${name}.ts`];
    if (island?.mount) {
      island.mount(el);
    }
  });
});
