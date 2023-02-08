class WebpackStatsPrettifyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap(
      "Webpack Stats Prettify Plugin",
      (stats) => {
        const data = {};
        console.log('File sizes:\n');

        stats?.compilation.assetsInfo.forEach(function (value, key) {
          data[key] = value.size;
        });

        console.table(data);
      }
    );
  }
}

module.exports = WebpackStatsPrettifyPlugin;
