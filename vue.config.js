module.exports = {
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Alessandro Roic';
      args[0].template = './index.html';
      args[0].lang = 'en';
      return args;
    });
  },
  configureWebpack: {
    devtool: 'source-map',
  },
};
