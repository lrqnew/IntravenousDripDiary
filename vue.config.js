const webpack = require("webpack");

module.exports = {
//configureWebpack 是Vue CLI3.0 中用于配置 webpack 插件参数的地方，你在这里设置，会新建或者覆盖 webpack 默认配置。
//webpack ProvidePlugin 的含义是创建一个全局的变量，使这个变量在 webpack 各个模块内都可以使用。这里的配置含义是创建 '$'、'jQuery'、'window.jQuery' 三个变量指向 jquery 依赖，创建 'Popper' 变量指向 popper.js 依赖。
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
              })
        ]
      },
      //开发环境实现跨域
      // devServer: {
      //   proxy: {
      //     '/api': {
      //       target: 'http://127.0.0.1:8081', //对应自己的接口
      //       changeOrigin: true,
      //       ws: true,
      //       pathRewrite: {
      //         '^/api': ''
      //       }
      //     }
      //   }
      // },

      // 部署应用包时的基本 URL。
  publicPath: process.env.NODE_ENV === 'production'? './': '/',
  // publicPath: process.env.VUE_APP_BASE_API === 'production'? './': '/',
  
}
