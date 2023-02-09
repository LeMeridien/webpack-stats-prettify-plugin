const chalk = require("chalk");
const table = require("text-table");

class WebpackStatsPrettifyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("Webpack Stats Prettify Plugin", (stats) => {
      const data = [Array(5).fill("")];

      const rawMessages = stats.toJson({}, true);
      const assets = rawMessages.assets;

      assets.sort((a, b) => b.size - a.size);

      assets.map((asset) => {
        asset.size =
          asset.size / 1024 > 1024
            ? (asset.size / 1024 / 1024).toFixed(2) + " MiB"
            : (asset.size / 1024).toFixed(2) + " KiB";
        asset.cached = asset.cached ? "[cached]" : " ";
        asset.chunks = asset.chunks ? `chunks[${asset.chunks?.length}]` : " ";
        asset.isOverSizeLimit = asset.isOverSizeLimit ? "[big]" : "";

        asset.isOverSizeLimit
          ? data.push([
              chalk.yellow(asset.name),
              chalk.yellow(asset.size),
              chalk.yellow(asset.cached),
              chalk.yellow(asset.chunks),
              chalk.yellow(asset.isOverSizeLimit),
            ])
          : data.push([
              chalk.green(asset.name),
              chalk.green(asset.size),
              chalk.green(asset.cached),
              chalk.green(asset.chunks),
              chalk.green(asset.isOverSizeLimit),
            ]);
      });

      const t = table(data, {
        hsep: "  ",
        align: ["r", "r", "c", "c", "c"],
      });

      console.log(t);
      console.log();
    });
  }
}

module.exports = WebpackStatsPrettifyPlugin;
