## WebpackStatsPrettifyPlugin

A plugin to beautify webpack stats output

## Introduction

**Webpack 5 Default Output:**

![](https://github.com/LeMeridien/webpack-stats-prettify-plugin/blob/master/assets/before.png)

**Use WebpackStatsPrettifyPlugin:**

![](https://github.com/LeMeridien/webpack-stats-prettify-plugin/blob/master/assets/after.png)

## Getting Started

To begin, you'll need to install webpack-stats-prettify-plugin:

```bash
npm install webpack-stats-prettify-plugin --save-dev

# or use yarn
yarn add -D webpack-stats-prettify-plugin

# or use pnpm
pnpm add -D webpack-stats-prettify-plugin
```

Then add the plugin to your webpack config. For example:

**webpack.config.js**

```js
const WebpackStatsPrettifyPlugin = require("webpack-stats-prettify-plugin");

module.exports = {
  plugins: [new WebpackStatsPrettifyPlugin()],
  stats: "errors-warnings",
  performance: {
    maxEntrypointSize: 1500000,
    maxAssetSize: 500000,
    hints: "warning",
  },
};
```

## License

[MIT](https://github.com/LeMeridien/webpack-stats-prettify-plugin/blob/master/LICENSE)
