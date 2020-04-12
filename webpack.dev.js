const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge( common, {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        stats: 'errors-only',
        host: process.env.HOST,
        port: 7788,
        open: true
    }
})