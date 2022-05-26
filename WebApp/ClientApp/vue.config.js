// vue clie is a wrapper ontop of webpack, to configure webpack use webpack chaining:
// https://github.com/neutrinojs/webpack-chain#config-entrypoints
// https://cli.vuejs.org/guide/webpack.html#chaining-advanced

const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: (config) => {
        config.resolve.alias.set("vue$", path.resolve(__dirname, "node_modules/vue/dist/vue.runtime.esm.js"));
        config.entry("app").clear();
        config.entry("app").add("./src/app/main.ts").end();
    }
});
