import { defineConfig } from 'dumi';

export default defineConfig({
    outputPath: 'docs-dist',
    mode: 'site',
    // nav: [{ title: 'Blog', link: '/blog' }],
    themeConfig: {
        name: 'cube-ui',
    },
    extraBabelPlugins: [
        [
            'babel-plugin-import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            },
        ],
    ],
});
