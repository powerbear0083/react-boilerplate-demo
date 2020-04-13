const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(
    [
        common,
        {
            mode: 'development',
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
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        require('autoprefixer')
                                    ]
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                    sassOptions: {
                                        outputStyle: 'compressed',
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
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
    ]
)