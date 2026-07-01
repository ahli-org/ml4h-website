// @ts-check
import { defineConfig } from 'astro/config';

/** @type {string} */
const BASE = '/';

function remarkBaseUrl() {
  const prefix = BASE === '/' ? '' : BASE.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    const visit = (node) => {
      if (
        (node.type === 'link' || node.type === 'image' || node.type === 'definition') &&
        typeof node.url === 'string'
      ) {
        const u = node.url;
        if (u.startsWith('/') && !u.startsWith('//') && !u.startsWith(prefix + '/')) {
          node.url = prefix + u;
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(visit);
    };
    visit(tree);
  };
}

export default defineConfig({
  output: 'static',
  site: 'https://ml4h.ahli.cc',
  base: BASE,
  markdown: {
    remarkPlugins: [remarkBaseUrl],
  },
});
