const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const { terser } = require("rollup-plugin-terser");
const postcss = require("rollup-plugin-postcss");
const progress = require("rollup-plugin-progress");

const { entryJs, packages, externals } = require("./file");
const packageJson = require("../package.json");

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
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss(),
    progress(),
  ];

  return {
    input: file,
    output,
    external,
    plugins,
  };
}

const buildPackages = [];
for (let name in packages) {
  const file = packages[name];
  buildPackages.push(createRollupConfig(file, name));
}

module.exports = buildPackages;
// module.exports = {
//   input: "src/index.tsx",
//   output: [
//     {
//       file: packageJson.main,
//       format: "cjs",
//       sourcemap: true,
//       name: "react-lib",
//     },
//     {
//       file: packageJson.module,
//       format: "esm",
//       sourcemap: true,
//     },
//   ],
//   external: ["lodash", "react", "antd"],
//   plugins: [
//     // external(),
//     resolve(),
//     commonjs(),
//     typescript({ tsconfig: "./tsconfig.json" }),
//     postcss(),
//     progress(),
//     // terser()
//   ],
// };
