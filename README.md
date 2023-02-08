## WebpackStatsPrettifyPlugin

A plugin to beautify webpack stats output

## Getting Started

To begin, you'll need to install copy-webpack-plugin:

```bash
npm install webpack-stats-prettify-plugin --save-dev

# or use yarn
yarn add -D webpack-stats-prettify-plugin

# or use pnpm
pnpm add -D webpack-stats-prettify-plugin
```

Then add the plugin to your webpack config. For example:

**webpack.config.js**

const WebpackStatsPrettifyPlugin = require("webpack-stats-prettify-plugin");

```js
module.exports = {
  plugins: [new WebpackStatsPrettifyPlugin()],
};
```

## License

[MIT](https://github.com/LeMeridien/webpack-stats-prettify-plugin/blob/master/LICENSE)
