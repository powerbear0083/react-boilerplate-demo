const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: ['/node_modules'],
                use: ['babel-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: [ 
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                          plugins: [
                            require('autoprefixer')
                          ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
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


