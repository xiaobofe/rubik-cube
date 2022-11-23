const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
// const external = require("rollup-plugin-peer-deps-external");
const { terser } = require("rollup-plugin-terser");
const postcss = require("rollup-plugin-postcss");
const packageJson = require("../package.json");

module.exports = {
    input: "src/index.tsx",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
            name: "react-lib"
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    external:["lodash", "react", "antd"],
    plugins: [
        // external(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        postcss(),
        // terser()
    ]
}
