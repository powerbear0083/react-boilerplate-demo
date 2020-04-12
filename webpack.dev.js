const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge( common, 
    {
        mode: 'development',
        // devtool: 'source-map',
        devtool: 'eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            stats: 'errors-only',
            host: process.env.HOST,
            port: 7788,
            open: true
        }
    }
)