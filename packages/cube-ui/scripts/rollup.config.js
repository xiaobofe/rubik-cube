const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
// const postcss = require("rollup-plugin-postcss");
const progress = require("rollup-plugin-progress");
const babel = require("rollup-plugin-babel");
// const resolvePlugin = require("rollup-plugin-node-resolve");
const { eslint } = require("rollup-plugin-eslint");
const { terser } = require("rollup-plugin-terser");

const { entryJs, packages, externals } = require("./file");
const packageJson = require("../package.json");

/**
 * 打包成为cjs或esm类型文件
 * @param {*} file  
 * @param {*} name 
 * @returns 
 */
function createRollupConfig(file, name) {
  const output = [
    {
      file: name === entryJs ? packageJson.main : `lib/${name}/index.js`,
      format: "cjs",
      sourcemap: true,
      name: name,
    },
    {
      file: name === entryJs ? packageJson.module : `es/${name}/index.js`,
      format: "esm",
      name: name,
      sourcemap: true,
    },
  ];
  let external = ["react", "antd"];
  if (name === entryJs) {
    external = external.concat(externals);
  }
  const plugins = [
    //   postcss({
    //     extract: true,
    //     parser: postcssScss,
    //     plugins: [
    //       base64({
    //         extensions: [".png", ".jpeg"],
    //         root: "./packages/",
    //       }),
    //       autoprefixer({ add: true }),
    //     ],
    //   }),
    //   url({
    //     limit: 10 * 1024,
    //   }),
    // resolvePlugin()
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    // postcss(),
    progress(),
  ];

  return {
    input: file,
    output,
    external,
    plugins,
  };
}


function createDistRollupConfig() {
  return {
    input: "src/index.tsx",
    output: {
      file: `dist/cube-ui.js`,
      format: "umd",
      name: "cube-ui",
    },
    external: ["react", "antd"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      // postcss(),
      babel({
        exclude: "node_modules/**"
      }),
      progress(),
      // terser()
    ],
  }
}

const buildPackages = [createDistRollupConfig()];
for (let name in packages) {
  const file = packages[name];
  buildPackages.push(createRollupConfig(file, name));
}

module.exports = buildPackages;

