const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
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
                        loader: 'babel-loader?optional=runtime&stage=0&cacheDirectory',
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
        new ExtractTextPlugin({filename: 'bundle.css', disable: false, allChunks: true}),
        new OptimizeCssAssetsPlugin(),
        new ngAnnotatePlugin({
            add: true
        }),
        new UglifyJSPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$|\.css$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};