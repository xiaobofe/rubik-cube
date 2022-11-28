const fs = require("fs-extra");
const path = require("path");
const packageJson = require("../package.json");

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory();
}

const packages = {};
const externals = [];
const dir = path.join(__dirname, "../src");
const files = fs.readdirSync(dir);
files.forEach((file) => {
  const absolutePath = path.join(dir, file);
  if (isDir(absolutePath)) {
    externals.push(`./${file}`)
    packages[file] = `src/${file}/index.tsx`;
  }
});
const entryJs = `${packageJson.name}.entry`;
packages[entryJs] = `src/index.tsx`;

// module.exports = packages;
module.exports =  { entryJs, packages, externals };
