const semver = require("semver");
const { engines } = require("./package");
const version = engines.node;
if (!semver.satisfies(process.version, version)) {
console.error(`版本异常, 限定node版本为16 `);
process.exit(1);
}