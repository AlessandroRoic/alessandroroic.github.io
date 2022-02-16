module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Alessandro Roic';
      args[0].template = './index.html';
      return args;
    });
  },
};
