const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge( common, {
    mode: 'development',
    devServer: {
        stats: 'errors-only',
        host: process.env.HOST,
        port: 7788,
        open: true
    }
})