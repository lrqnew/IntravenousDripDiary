const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
function resolve (dir) {
  return path.join(__dirname, dir)
}
const compress = new CompressionWebpackPlugin({
  filename: info => {
    return `${info.path}.gz${info.query}`
  },
  algorithm: 'gzip',
  threshold: 10240,
  test: new RegExp(
    '\\.(' + ['js'].join('|') +
    ')$'
  ),
  minRatio: 0.8,
  deleteOriginalAssets: false
})
module.exports = {
  devServer: {
    before(app, server) {
      app.get(/.*.(js)$/, (req, res, next) => {
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
      })
    }
  },
  // configureWebpack: {
  //   plugins: [compress]
  // },
  publicPath: './',
  configureWebpack: () => {

    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new PrerenderSPAPlugin({
            staticDir: resolve('dist'),
            routes: ['/', '/about'], // 你需要预渲染的路由
            renderer: new Renderer({
              inject: {
                _m: 'prerender'
              },
              // 渲染时显示浏览器窗口，调试时有用
              headless: true,
              // 等待触发目标时间后，开始预渲染
              renderAfterDocumentEvent: 'render-event'
            })
          })
        ]
      }
    }else{
      return {plugins: [compress]}
    }
  },
  chainWebpack: config => {
    /* 添加分析工具*/
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end();
        config.plugins.delete('prefetch')
      }
    }
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: 'all'
    })
  },
  css: {
    extract: true
  }

}