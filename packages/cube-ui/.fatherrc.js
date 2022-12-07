export default {
    // target: 'browser',
    entry: 'src/index.ts',
    esm: 'babel',
    cjs: 'babel',
    lessInBabelMode: true,
    // runtimeHelpers: true,
    // extraBabelPlugins: [
    //   ['babel-plugin-import', {
    //       libraryName: 'antd',
    //       libraryDirectory: 'es',
    //       style: true,
    //   }]
    // ],
    autoprefixer: {
      browsers: ['ie>9', 'Safari >= 6'],
    },
    // doc: {
    //   themeConfig: { mode: 'light' },
    //   base: '/',
    //   menu: []
    // },
  };