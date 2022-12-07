import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  mode: "site",
  // nav: [{ title: 'Blog', link: '/blog' }],
  themeConfig: {
    name: 'cube-ui',
  },
});
