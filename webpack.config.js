const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: '/dist',
        publicPath: '/'
    },
    devtool: 'eval',
    devServer: {
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
        proxy: {
            '/': {
                target: 'http://localhost:3000'
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'raw-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {}
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        precss,
                                        autoprefixer
                                    ];
                                }
                            }
                        }
                    ]
                }),
                exclude: /node_modules/
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({filename: 'bundle.css', disable: true, allChunks: true}),
        new ngAnnotatePlugin({
            add: true
        })
    ]
};