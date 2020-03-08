class MyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tapAsync('MyWebpackPlugin', (stats, callback) => {
      debugger; 
      let time = stats.endTime - stats.startTime;
      let hash = stats.hash;
      let assets = [];
      for (let asset in stats.compilation.assets) {
        assets = [...assets, asset];
      }

      console.log('MyWebpackPlugin')
      console.log(`Compilation finished in ${time} seconds`);
      console.log(`Hash ${hash}`);
      console.log(`Assets ${assets.join(' ')}\n`);

      callback();
    });
 
    // Compilation hook
    // compiler.hooks.compilation.tap('MyWebpackPlugin', (compilation, parameters) => {
    //   const compilationRef = compilation;
    //   compilation.hooks.seal.tap('MyWebpackPlugin', () => {
    //     console.log(compilationRef);
    //     debugger;
    //   });
    // });
    // End compilation hook
  }
}

module.exports = MyWebpackPlugin;