const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')



module.exports = {
    entry: {
        main: './src/index.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.sass', '.scss']
    },
    output: {
        filename: '[name].js?[hash]',
        path: path.resolve('./dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin(
            {
                title: 'React boilerplate Demo test',
                template: 'index.html'
            }
        )
    ]
}


